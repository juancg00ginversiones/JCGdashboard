import yfinance as yf
import pandas as pd
import numpy as np
import json
from datetime import datetime
import warnings
warnings.filterwarnings("ignore")

# ══════════════════════════════════════════════════════════
# SECTORES
# ══════════════════════════════════════════════════════════
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

# ══════════════════════════════════════════════════════════
# INDICADORES BASE
# ══════════════════════════════════════════════════════════
def rsi_wilder(serie, period=14):
    delta    = serie.diff()
    gain     = delta.where(delta > 0, 0)
    loss     = -delta.where(delta < 0, 0)
    avg_gain = gain.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    rs = avg_gain / avg_loss.replace(0, np.nan)
    return 100 - (100 / (1 + rs))

def calcular_marron_tv(o, h, l, c, v):
    """
    Koncord Marron exacto de TradingView:
    marron = (RSI(ohlc4,14) + MFI(14) + BollOsc + Stoch(21,3)/3) / 2
    media  = EMA(marron, 21)

    MFI en TV = rsi(sum(vol*hlc3 si sube, 14), sum(vol*hlc3 si baja, 14))
    Es decir: RSI Wilder aplicado sobre flujos positivos/negativos acumulados
    Rango resultante de Marron: aprox -50 a +100
    Nivel 0 = "debajo del mar" = zona de oportunidad
    """
    ohlc4 = (o + h + l + c) / 4
    hlc3  = (h + l + c) / 3

    # RSI sobre ohlc4
    xrsi = rsi_wilder(ohlc4)

    # MFI exacto TV: rsi(sum_pos, sum_neg) donde sum usa RSI Wilder interno
    chg_hlc3 = hlc3.diff()
    # flujo positivo cuando hlc3 sube, negativo cuando baja
    pos_flow = (v * hlc3.where(chg_hlc3 > 0, 0.0)).rolling(14).sum()
    neg_flow = (v * hlc3.where(chg_hlc3 < 0, 0.0)).abs().rolling(14).sum()
    # aplicar RSI Wilder sobre los flujos acumulados
    xmf = rsi_wilder(pos_flow - neg_flow)

    # Bollinger Oscillator sobre ohlc4
    basis = ohlc4.rolling(25).mean()
    dev   = 2.0 * ohlc4.rolling(25).std(ddof=0)
    upper = basis + dev
    lower = basis - dev
    ob1   = (upper + lower) / 2.0
    ob2   = (upper - lower).replace(0, np.nan)
    boll  = ((ohlc4 - ob1) / ob2) * 100

    # Stochastic(21,3) sobre ohlc4 como source (igual que TV)
    low21 = l.rolling(21).min()
    hi21  = h.rolling(21).max()
    rango = (hi21 - low21).replace(0, np.nan)
    stoc  = ((ohlc4 - low21) / rango * 100).rolling(3).mean()

    # Marron y MediaK
    marron  = (xrsi + xmf + boll + (stoc / 3)) / 2
    media_k = marron.ewm(span=21, adjust=False).mean()
    return marron, media_k

def calcular_macd_tv(close):
    e12  = close.ewm(span=12, adjust=False).mean()
    e26  = close.ewm(span=26, adjust=False).mean()
    macd = (e12 - e26) / e26.replace(0, np.nan) * 1000 * 5
    sig  = macd.ewm(span=9, adjust=False).mean()
    return macd - sig

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

# ══════════════════════════════════════════════════════════
# ANÁLISIS HISTÓRICO RSI
# ══════════════════════════════════════════════════════════
HORIZONTES = {"1d":1, "2d":2, "5d":5, "1m":21}

def analizar_rsi_historico(ticker, nivel_rsi, close):
    """Analiza qué pasó históricamente cuando RSI tocó el nivel dado"""
    try:
        rsi = rsi_wilder(close)
        eventos = []
        n = len(close)
        for i in range(1, n):
            rp, rc = rsi.iloc[i-1], rsi.iloc[i]
            if pd.isna(rp) or pd.isna(rc): continue
            sube = rp < nivel_rsi and rc >= nivel_rsi
            baja = rp > nivel_rsi and rc <= nivel_rsi
            if sube or baja:
                precio_base = float(close.iloc[i])
                fila = {"dir": "↑" if sube else "↓", "rsi": round(float(rc),1)}
                for label, dias in HORIZONTES.items():
                    j = i + dias
                    fila[f"ret_{label}"] = round((float(close.iloc[j])/precio_base-1)*100,2) if j < n else None
                eventos.append(fila)
        if not eventos:
            return None
        # Resumen estadístico
        resumen = []
        for label in HORIZONTES:
            vals = [e[f"ret_{label}"] for e in eventos if e[f"ret_{label}"] is not None]
            if vals:
                resumen.append({
                    "tramo": label,
                    "avg": round(sum(vals)/len(vals), 2),
                    "pos": sum(1 for v in vals if v > 0),
                    "total": len(vals),
                    "prob": round(sum(1 for v in vals if v > 0)/len(vals)*100, 1)
                })
        # Últimos 5 eventos
        ultimos = eventos[-5:]
        return {"nivel": nivel_rsi, "total_eventos": len(eventos), "resumen": resumen, "ultimos": ultimos}
    except Exception as e:
        return None

# ══════════════════════════════════════════════════════════
# VMC WAVETREND (solo 1D)
# ══════════════════════════════════════════════════════════
WT_CHAN = 9
WT_AVG  = 12
WT_MA   = 3
WT_OS_EXTREMO = -53
WT_OS_NORMAL  = -30

def calcular_wt(df):
    try:
        if df is None or len(df) < 40: return None
        h = df["High"].squeeze()
        l = df["Low"].squeeze()
        c = df["Close"].squeeze()
        hlc3 = (h + l + c) / 3
        esa  = hlc3.ewm(span=WT_CHAN, adjust=False).mean()
        de   = (hlc3 - esa).abs().ewm(span=WT_CHAN, adjust=False).mean()
        ci   = (hlc3 - esa) / (0.015 * de.replace(0, np.nan))
        wt1  = ci.ewm(span=WT_AVG, adjust=False).mean()
        wt2  = wt1.rolling(WT_MA).mean()
        return wt1, wt2
    except:
        return None

def get_wt_signal(wt1, wt2):
    if wt1 is None: return None
    v0_wt1, v0_wt2 = float(wt1.iloc[-1]), float(wt2.iloc[-1])
    v1_wt1, v1_wt2 = float(wt1.iloc[-2]), float(wt2.iloc[-2])
    v2_wt1, v2_wt2 = float(wt1.iloc[-3]), float(wt2.iloc[-3])
    cruce_hoy  = v1_wt1 <= v1_wt2 and v0_wt1 > v0_wt2
    cruce_ayer = v2_wt1 <= v2_wt2 and v1_wt1 > v1_wt2
    if not cruce_hoy and not cruce_ayer: return None
    val_cruce = v0_wt2 if cruce_hoy else v1_wt2
    momento   = "HOY" if cruce_hoy else "AYER"
    if val_cruce <= WT_OS_EXTREMO:
        return {"tipo": "FUERTE", "momento": momento, "wt2": round(val_cruce,1)}
    elif val_cruce <= WT_OS_NORMAL:
        return {"tipo": "NORMAL", "momento": momento, "wt2": round(val_cruce,1)}
    return None

# ══════════════════════════════════════════════════════════
# RSI 1H BATCH
# ══════════════════════════════════════════════════════════
def obtener_rsi_horario(all_tickers):
    print("📡 RSI 1H...")
    rsi_1h = {}
    try:
        data = yf.download(
            tickers=" ".join(all_tickers),
            period="10d", interval="1h",
            auto_adjust=True, group_by="ticker",
            threads=True, progress=False
        )
        if data is None or data.shape[0] == 0: return rsi_1h
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
        print(f"⚠ 1H: {e}")
    return rsi_1h

# ══════════════════════════════════════════════════════════
# PROCESAR TICKER
# ══════════════════════════════════════════════════════════
def procesar_ticker(ticker):
    try:
        df = yf.download(ticker, period="10y", interval="1d",
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

        rsi_c   = rsi_wilder(c)
        rsi_val = r(rsi_c.iloc[-1], 1)

        marron, media_k = calcular_marron_tv(o,h,l,c,v)
        macd_h  = calcular_macd_tv(c)
        ema21,sma30,ema150,ema200 = calcular_medias(c)

        marron_v  = marron.iloc[-1]
        media_k_v = media_k.iloc[-1]

        # WaveTrend
        wt_result = calcular_wt(df)
        wt_signal = None
        if wt_result:
            wt_signal = get_wt_signal(wt_result[0], wt_result[1])

        # Análisis histórico RSI (solo si está en zona extrema)
        hist_rsi = None
        if rsi_val is not None:
            if rsi_val <= 32:
                hist_rsi = analizar_rsi_historico(ticker, 30, c)
            elif rsi_val >= 68:
                hist_rsi = analizar_rsi_historico(ticker, 70, c)

        return {
            "ticker":      ticker,
            "pct_dia":     pct_dia,
            "rsi_1d":      rsi_val,
            "rsi_1h":      None,
            "macd_h":      r(macd_h.iloc[-1], 2),
            "marron":      r(marron_v, 2),
            "media_k":     r(media_k_v, 2),
            "konc_dir":    "up" if (not pd.isna(marron_v) and not pd.isna(media_k_v) and marron_v > media_k_v) else "dn",
            "dist_ema21":  dist_pct(precio, float(ema21.iloc[-1])),
            "dist_sma30":  dist_pct(precio, float(sma30.iloc[-1])),
            "dist_ema150": dist_pct(precio, float(ema150.iloc[-1])),
            "dist_ema200": dist_pct(precio, float(ema200.iloc[-1])),
            "wt_signal":   wt_signal,
            "hist_rsi":    hist_rsi,
        }
    except Exception as e:
        print(f"  ⚠ {ticker}: {e}")
        return None

# ══════════════════════════════════════════════════════════
# MAIN
# ══════════════════════════════════════════════════════════
def main():
    all_t = get_all_tickers()
    rsi_1h_map = obtener_rsi_horario(all_t)

    print("📡 Procesando datos diarios (10 años para análisis histórico)...")
    resultados = []
    todos = {**SECTORES_USA, **SECTORES_WORLD}

    for sector, tickers in todos.items():
        for ticker in tickers:
            print(f"  → {ticker}")
            d = procesar_ticker(ticker)
            if d:
                d["rsi_1h"] = rsi_1h_map.get(ticker)
                d["sector"] = sector
                resultados.append(d)

    # Señales WaveTrend
    senales_wt = [
        {"ticker": d["ticker"], "sector": d["sector"],
         "rsi_1d": d["rsi_1d"], "signal": d["wt_signal"]}
        for d in resultados if d.get("wt_signal")
    ]

    # Señales RSI extremo
    senales_rsi = [
        {"ticker": d["ticker"], "sector": d["sector"],
         "rsi_1d": d["rsi_1d"], "pct_dia": d["pct_dia"],
         "hist": d["hist_rsi"]}
        for d in resultados if d.get("hist_rsi")
    ]

    output = {
        "actualizado":    datetime.now().strftime("%Y-%m-%d %H:%M"),
        "sectores_usa":   SECTORES_USA,
        "sectores_world": SECTORES_WORLD,
        "datos":          {d["ticker"]: d for d in resultados},
        "senales_wt":     senales_wt,
        "senales_rsi":    senales_rsi,
    }

    with open("jcg_data.json","w",encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n✅ {len(resultados)} tickers — {len(senales_wt)} señales WT — {len(senales_rsi)} en zona RSI extrema")
    print(f"   Actualizado: {output['actualizado']}")

if __name__ == "__main__":
    main()
