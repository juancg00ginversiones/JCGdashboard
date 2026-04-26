import yfinance as yf
import pandas as pd
import numpy as np
import json
from datetime import datetime
import warnings
warnings.filterwarnings("ignore")

SECTORES_USA = {
    "ETFs":               ["SPY","QQQ","DIA","IWM","IBIT","GLD","SLV","URA","EWZ","FXI"],
    "Technology":         ["AAPL","ADBE","AMAT","AMD","ASTS","AVGO","CSCO","FSLR","IBM","INTC","LRCX","MU","NVDA","ORCL","PANW","QCOM","RGTI","RKLB","SNOW","TXN","UBER"],
    "Financial":          ["AIG","AXP","BAC","C","COIN","HOOD","HUT","IREN","JPM","MA","PYPL","RIOT","SCHW","USB","V","WFC"],
    "Consumer Cyclical":  ["AMZN","ARCO","BKNG","EBAY","ETSY","F","GM","HD","LVS","MCD","NKE","SBUX","TSLA"],
    "Industrials":        ["AAL","ADP","BA","CAAP","DAL","DE","FDX","GE","HWM","LMT","MMM","RTX","UAL","UNP"],
    "Energy":             ["BKR","CVX","HAL","OXY","PSX","SLB","XOM"],
    "Basic Materials":    ["CDE","DD","DOW","ECL","FCX","HL","MOS","NEM","NUE","SCCO"],
    "Comm. Services":     ["DIS","GOOGL","META","NFLX","RBLX","ROKU","T","VZ","ZM"],
    "Consumer Defensive": ["BG","CL","COST","HSY","KO","MDLZ","PEP","PG","TGT","WMT"],
    "HealthCare":         ["ABBV","ABT","AMGN","BMY","DHR","GILD","ISRG","LLY","MDT","MRK","MRNA","PFE","TMO","UNH","VRTX"],
    "Utilities":          ["CEG","OKLO","VST"],
}

SECTORES_WORLD = {
    "China":       ["BABA","BIDU","JD","NIO","NTES","PDD","XPEV"],
    "Mexico":      ["AMX","ASR","CX","KOF","PAC"],
    "Africa":      ["GFI","HMY","JMIA"],
    "Canada":      ["ALM","CLS","LAC","MUX","NG","NXE","PAAS","SHOP"],
    "Brasil":      ["ABEV","BAK","BBD","GGB","NU","PAGS","PBR","SUZ","VALE","XP"],
    "Reino Unido": ["ARM","AZN","BCS","BP","DEO","GSK","HSBC","LYG","NGG","RIO","VOD"],
    "Europa":      ["ACN","ASML","BBVA","EQNR","GRMN","ING","NVS","SAP","SHEL","TTE"],
    "Asia":        ["BHP","HDB","HMC","INFY","PKX","SE","SONY","TM","TSM"],
    "Argentina":   ["BMA","CEPU","EDN","GGAL","LOMA","MELI","PAM","SUPV","YPF"],
}

def get_all_tickers():
    seen, all_t = {}, []
    for tickers in {**SECTORES_USA, **SECTORES_WORLD}.values():
        for t in tickers:
            if t not in seen:
                seen[t] = 1
                all_t.append(t)
    return all_t

def rsi_wilder(serie, period=14):
    delta    = serie.diff()
    gain     = delta.where(delta > 0, 0)
    loss     = -delta.where(delta < 0, 0)
    avg_gain = gain.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    rs = avg_gain / avg_loss.replace(0, np.nan)
    return 100 - (100 / (1 + rs))

def calcular_marron_tv(o, h, l, c, v):
    ohlc4 = (o + h + l + c) / 4
    hlc3  = (h + l + c) / 3
    xrsi  = rsi_wilder(ohlc4)
    chg_hlc3 = hlc3.diff()
    pos_flow = (v * hlc3.where(chg_hlc3 > 0, 0)).rolling(14).sum()
    neg_flow = (v * (-hlc3).where(chg_hlc3 < 0, 0)).rolling(14).sum()
    mfi_rs   = pos_flow / neg_flow.replace(0, np.nan)
    xmf      = 100 - (100 / (1 + mfi_rs))
    basis    = ohlc4.rolling(25).mean()
    dev      = 2.0 * ohlc4.rolling(25).std(ddof=0)
    upper    = basis + dev
    lower    = basis - dev
    BollOsc  = ((ohlc4 - ((upper+lower)/2)) / (upper-lower).replace(0, np.nan)) * 100
    low21    = l.rolling(21).min()
    high21   = h.rolling(21).max()
    stoc     = ((ohlc4 - low21) / (high21-low21).replace(0, np.nan) * 100).rolling(3).mean()
    marron   = (xrsi + xmf + BollOsc + (stoc/3)) / 2
    media_k  = marron.ewm(span=21, adjust=False).mean()
    return marron, media_k

def calcular_macd_tv(close, fast=12, slow=26, signal=9, mult=5):
    ema12   = close.ewm(span=fast,   adjust=False).mean()
    ema26   = close.ewm(span=slow,   adjust=False).mean()
    macd_tv = (ema12 - ema26) / ema26.replace(0, np.nan) * 1000 * mult
    sig     = macd_tv.ewm(span=signal, adjust=False).mean()
    return macd_tv - sig

def calcular_medias(close):
    ema21  = close.ewm(span=21,  adjust=False).mean()
    sma30  = close.rolling(30).mean()
    ema150 = close.ewm(span=150, adjust=False).mean()
    ema200 = close.ewm(span=200, adjust=False).mean()
    return ema21, sma30, ema150, ema200

def dist_pct(precio, media):
    if pd.isna(media) or media == 0: return None
    return round(((precio - media) / media) * 100, 2)

def r(v, d=2):
    return round(float(v), d) if (v is not None and not pd.isna(v)) else None

def obtener_rsi_horario(all_tickers):
    print("📡 Descargando RSI 1H...")
    rsi_1h = {}
    try:
        data = yf.download(
            tickers=" ".join(all_tickers),
            period="10d", interval="1h",
            auto_adjust=True, group_by="ticker",
            threads=True, progress=False
        )
        if data is None or data.shape[0] == 0:
            return rsi_1h
        for ticker in all_tickers:
            try:
                if ticker not in data.columns.get_level_values(0): continue
                close = data[ticker]["Close"].dropna()
                if len(close) < 16: continue
                val = rsi_wilder(close).iloc[-1]
                if not pd.isna(val):
                    rsi_1h[ticker] = round(float(val), 1)
            except: continue
        print(f"✅ RSI 1H: {len(rsi_1h)} tickers")
    except Exception as e:
        print(f"⚠ Error 1H: {e}")
    return rsi_1h

def procesar_ticker(ticker):
    try:
        df = yf.download(ticker, period="1y", interval="1d",
                         auto_adjust=True, progress=False)
        if df is None or len(df) < 30: return None
        o = df["Open"].squeeze().dropna()
        h = df["High"].squeeze().dropna()
        l = df["Low"].squeeze().dropna()
        c = df["Close"].squeeze().dropna()
        v = df["Volume"].squeeze().dropna()
        idx = c.index
        o,h,l,v = o.reindex(idx),h.reindex(idx),l.reindex(idx),v.reindex(idx)
        if len(c) < 30: return None
        precio      = float(c.iloc[-1])
        precio_prev = float(c.iloc[-2])
        pct_dia     = round(((precio-precio_prev)/precio_prev)*100, 2)
        rsi_c       = rsi_wilder(c)
        marron, media_k = calcular_marron_tv(o,h,l,c,v)
        macd_h      = calcular_macd_tv(c)
        ema21,sma30,ema150,ema200 = calcular_medias(c)
        marron_v    = marron.iloc[-1]
        media_k_v   = media_k.iloc[-1]
        return {
            "ticker":      ticker,
            "pct_dia":     pct_dia,
            "rsi_1d":      r(rsi_c.iloc[-1], 1),
            "rsi_1h":      None,
            "macd_h":      r(macd_h.iloc[-1], 2),
            "marron":      r(marron_v, 2),
            "media_k":     r(media_k_v, 2),
            "konc_dir":    "up" if (not pd.isna(marron_v) and not pd.isna(media_k_v) and marron_v > media_k_v) else "dn",
            "dist_ema21":  dist_pct(precio, float(ema21.iloc[-1])),
            "dist_sma30":  dist_pct(precio, float(sma30.iloc[-1])),
            "dist_ema150": dist_pct(precio, float(ema150.iloc[-1])),
            "dist_ema200": dist_pct(precio, float(ema200.iloc[-1])),
        }
    except Exception as e:
        print(f"  ⚠ {ticker}: {e}")
        return None

def main():
    all_t = get_all_tickers()
    rsi_1h_map = obtener_rsi_horario(all_t)
    print("📡 Procesando datos diarios...")
    resultados = []
    todos = {**SECTORES_USA, **SECTORES_WORLD}
    for sector, tickers in todos.items():
        for ticker in tickers:
            d = procesar_ticker(ticker)
            if d:
                d["rsi_1h"] = rsi_1h_map.get(ticker)
                d["sector"] = sector
                resultados.append(d)
                print(f"  ✅ {ticker}")
            else:
                print(f"  ❌ {ticker}")

    output = {
        "actualizado":    datetime.now().strftime("%Y-%m-%d %H:%M"),
        "sectores_usa":   SECTORES_USA,
        "sectores_world": SECTORES_WORLD,
        "datos":          {r["ticker"]: r for r in resultados}
    }
    with open("jcg_data.json","w",encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    cols = ["sector","ticker","pct_dia","rsi_1d","rsi_1h","marron","media_k",
            "konc_dir","macd_h","dist_ema21","dist_sma30","dist_ema150","dist_ema200"]
    pd.DataFrame(resultados)[cols].to_csv("koncord_data.csv", index=False)
    print(f"\n✅ jcg_data.json + koncord_data.csv — {output['actualizado']}")

if __name__ == "__main__":
    main()
