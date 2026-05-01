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
    "ETFs":               ["SPY","QQQ","DIA","IWM","IBIT","EWZ","FXI","MAGS","RSP","VIX","IVV","ARKK"],
    "ETF Sectores USA":   ["XLK","XLF","XLV","XLE","XLI","XLY","XLP","XLB","XLRE","XLU","XLC","IBB","SMH","COPX","ILF"],
    "Commodities":        ["GLD","SLV","URA","USO","GDX"],
    "Magnificas":         ["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA","AVGO"],
    "Technology":         ["ADBE","AMAT","AMD","ASTS","CSCO","FSLR","IBM","INTC","LRCX","MU","ORCL","PANW","QCOM","RGTI","RKLB","SNOW","TXN","UBER",
                           "CRWV","ALAB","PLTR","CRM","NOW","MRVL","MSTR","TEAM","SWKS","MSI","DOCU","SNAP","AI","PATH","TEM"],
    "Financial":          ["AIG","AXP","BAC","C","COIN","HOOD","HUT","IREN","JPM","MA","PYPL","RIOT","SCHW","USB","V","WFC",
                           "BX","GS","MMC","SPGI","EFX"],
    "Consumer Cyclical":  ["AMZN","ARCO","BKNG","EBAY","ETSY","F","GM","HD","LVS","MCD","NKE","SBUX","TSLA",
                           "ABNB","ROST","TJX","CCL","RACE","DECK","PINS","EA","TTM"],
    "Industrials":        ["AAL","ADP","BA","CAAP","DAL","DE","FDX","GE","HWM","LMT","MMM","RTX","UAL","UNP",
                           "HON","HPQ","MSI","SYY","ORLY","GLW"],
    "Energy":             ["BKR","CVX","HAL","OXY","PSX","SLB","XOM","VIST"],
    "Basic Materials":    ["CDE","DD","DOW","ECL","FCX","HL","MOS","NEM","NUE","SCCO","AEM","KGC"],
    "Comm. Services":     ["DIS","GOOGL","META","NFLX","RBLX","ROKU","T","VZ","ZM","SNAP","SPOT","TMUS","PM"],
    "Consumer Defensive": ["BG","CL","COST","HSY","KO","MDLZ","PEP","PG","TGT","WMT","CVS"],
    "HealthCare":         ["ABBV","ABT","AMGN","BMY","DHR","GILD","ISRG","LLY","MDT","MRK","MRNA","PFE","TMO","UNH","VRTX","BIIB"],
    "Utilities":          ["CEG","OKLO","VST"],
    "Latam / Otros":      ["GLOB","STNE","PKS"],
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

def calcular_semanal(ticker):
    """Calcula RSI, KONCORD y SMA200 en velas semanales"""
    try:
        df = yf.download(ticker, period="10y", interval="1wk",
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

        precio = float(c.iloc[-1])

        # RSI Wilder semanal
        rsi_w = rsi_wilder(c)
        rsi_val = r(rsi_w.iloc[-1], 1)

        # KONCORD semanal
        marron_w, media_k_w = calcular_marron_tv(o,h,l,c,v)
        marron_v  = r(marron_w.iloc[-1], 2)
        media_k_v = r(media_k_w.iloc[-1], 2)
        konc_dir  = "up" if (marron_v and media_k_v and marron_v > media_k_v) else "dn"

        # Medias semanales
        wma10_w  = c.rolling(10).apply(lambda x: np.dot(x, np.arange(1,11))/np.arange(1,11).sum(), raw=True)
        ema30_w  = c.ewm(span=30,  adjust=False).mean()
        ema50_w  = c.ewm(span=50,  adjust=False).mean()
        sma200_w = c.rolling(200).mean()

        def rv(s): return float(s.iloc[-1]) if not pd.isna(s.iloc[-1]) else None
        wma10_v  = rv(wma10_w)
        ema30_v  = rv(ema30_w)
        ema50_v  = rv(ema50_w)
        sma200_v = rv(sma200_w)

        # % cambio semanal
        precio_sem_prev = float(c.iloc[-2]) if len(c) >= 2 else precio
        pct_semana = round(((precio - precio_sem_prev) / precio_sem_prev) * 100, 2)

        # Percentil histórico semanal
        rsi_pct_1w    = None
        marron_pct_1w = None
        rsi_alerta_1w    = None
        marron_alerta_1w = None
        try:
            # TOP 3 histórico semanal
            rsi_w_series = rsi_wilder(c).dropna()
            if len(rsi_w_series) >= 30 and rsi_val is not None:
                top3_max_w  = rsi_w_series.nlargest(3).min()
                top3_min_w  = rsi_w_series.nsmallest(3).max()
                rsi_pct_1w  = round(float(rsi_val), 1)
                if rsi_val <= top3_min_w:   rsi_alerta_1w = "minimo"
                elif rsi_val >= top3_max_w: rsi_alerta_1w = "maximo"
            marron_w_series = marron_w.dropna()
            if len(marron_w_series) >= 30 and not pd.isna(marron_w.iloc[-1]):
                mv_w = float(marron_w.iloc[-1])
                top3_max_mw  = marron_w_series.nlargest(3).min()
                top3_min_mw  = marron_w_series.nsmallest(3).max()
                marron_pct_1w = round(mv_w, 1)
                if mv_w <= top3_min_mw:   marron_alerta_1w = "minimo"
                elif mv_w >= top3_max_mw: marron_alerta_1w = "maximo"
        except:
            pass

        return {
            "rsi_1w":          rsi_val,
            "marron_1w":       marron_v,
            "media_k_1w":      media_k_v,
            "konc_dir_1w":     konc_dir,
            "pct_semana":      pct_semana,
            "dist_wma10_1w":   dist_pct(precio, wma10_v),
            "dist_ema30_1w":   dist_pct(precio, ema30_v),
            "dist_ema50_1w":   dist_pct(precio, ema50_v),
            "dist_sma200_1w":  dist_pct(precio, sma200_v),
        }
    except Exception as e:
        return None

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

        # RSI WMA21 (igual que en el script de TradingView)
        weights = np.arange(1, 22)
        rsi_wma21 = rsi_c.rolling(21).apply(
            lambda x: np.dot(x, weights) / weights.sum(), raw=True
        )
        # Señal alcista del RSI — dos casos válidos:
        # CASO 1: Cruce fresco al alza (ayer RSI <= WMA21, hoy RSI > WMA21) Y RSI sube Y precio sube
        # CASO 2: RSI ya arriba de WMA21 Y ambos subiendo Y precio sube
        rsi_cruza_alza = False
        if len(rsi_c) >= 2 and not pd.isna(rsi_wma21.iloc[-1]) and not pd.isna(rsi_wma21.iloc[-2]):
            rsi_hoy     = float(rsi_c.iloc[-1])
            rsi_ayer    = float(rsi_c.iloc[-2])
            wma_hoy     = float(rsi_wma21.iloc[-1])
            wma_ayer    = float(rsi_wma21.iloc[-2])
            rsi_sube    = rsi_hoy > rsi_ayer
            wma_sube    = wma_hoy > wma_ayer
            precio_sube = pct_dia > 0

            # Caso 1: cruce fresco al alza
            cruce_fresco = (rsi_ayer <= wma_ayer) and (rsi_hoy > wma_hoy) and rsi_sube and precio_sube

            # Caso 2: RSI ya arriba, ambos subiendo
            ambos_suben = (rsi_hoy > wma_hoy) and rsi_sube and wma_sube and precio_sube

            rsi_cruza_alza = cruce_fresco or ambos_suben

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

        # TOP 3 HISTÓRICO — RSI y KONCORD diario (últimos 10 años)
        # Si el valor actual está entre los 3 máximos o 3 mínimos históricos → alerta
        rsi_pct_hist    = None
        marron_pct_hist = None
        rsi_alerta      = None
        marron_alerta   = None
        try:
            rsi_full = rsi_c.dropna()
            if len(rsi_full) >= 100 and rsi_val is not None:
                top3_max = rsi_full.nlargest(3).min()   # el menor de los 3 máximos
                top3_min = rsi_full.nsmallest(3).max()  # el mayor de los 3 mínimos
                rsi_pct_hist = round(float(rsi_val), 1)
                if rsi_val <= top3_min:  rsi_alerta = "minimo"  # está en top3 mínimos
                elif rsi_val >= top3_max: rsi_alerta = "maximo" # está en top3 máximos

            marron_full = marron.dropna()
            if len(marron_full) >= 100 and not pd.isna(marron_v):
                mv = float(marron_v)
                top3_max_m = marron_full.nlargest(3).min()
                top3_min_m = marron_full.nsmallest(3).max()
                marron_pct_hist = round(mv, 1)
                if mv <= top3_min_m:  marron_alerta = "minimo"
                elif mv >= top3_max_m: marron_alerta = "maximo"
        except:
            pass

        # Datos semanales
        semanal = calcular_semanal(ticker)

        return {
            "ticker":      ticker,
            "pct_dia":     pct_dia,
            "rsi_1d":      rsi_val,
            "rsi_cruza_alza": rsi_cruza_alza,
            "rsi_1h":      None,
            "rsi_1w":          semanal["rsi_1w"]          if semanal else None,
            "rsi_pct_1w":      semanal.get("rsi_pct_1w")    if semanal else None,
            "marron_pct_1w":   semanal.get("marron_pct_1w") if semanal else None,
            "rsi_alerta_1w":   semanal.get("rsi_alerta_1w") if semanal else None,
            "marron_alerta_1w":semanal.get("marron_alerta_1w") if semanal else None,
            "marron_1w":       semanal["marron_1w"]       if semanal else None,
            "media_k_1w":      semanal["media_k_1w"]      if semanal else None,
            "konc_dir_1w":     semanal["konc_dir_1w"]     if semanal else None,
            "pct_semana":      semanal["pct_semana"]       if semanal else None,
            "dist_wma10_1w":   semanal["dist_wma10_1w"]   if semanal else None,
            "dist_ema30_1w":   semanal["dist_ema30_1w"]   if semanal else None,
            "dist_ema50_1w":   semanal["dist_ema50_1w"]   if semanal else None,
            "dist_sma200_1w":  semanal["dist_sma200_1w"]  if semanal else None,
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
            "rsi_pct_hist":    rsi_pct_hist,
            "marron_pct_hist": marron_pct_hist,
            "rsi_alerta":      rsi_alerta,
            "marron_alerta":   marron_alerta,
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
        "actualizado":    (datetime.utcnow() - __import__("datetime").timedelta(hours=3)).strftime("%Y-%m-%d %H:%M"),
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
