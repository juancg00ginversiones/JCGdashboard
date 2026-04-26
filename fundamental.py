import yfinance as yf
import pandas as pd
import numpy as np
import json
from datetime import datetime
import warnings
warnings.filterwarnings("ignore")

# ══════════════════════════════════════════════════════════
# TICKERS FUNDAMENTAL
# ══════════════════════════════════════════════════════════
FUNDAMENTAL_TICKERS = {
    "Top 20 Cap":        ["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA","AVGO","JPM","LLY","V","UNH","XOM","MA","COST","HD","NFLX","AMD","ORCL","BRK-B"],
    "Energy":            ["CVX","SLB"],
    "Industrials":       ["CAT","GE","RTX"],
    "HealthCare":        ["ABBV","JNJ","MDT"],
    "Financials":        ["GS","BAC"],
    "Consumer Def.":     ["PG","KO","WMT"],
    "Materials":         ["LIN","NUE"],
    "Utilities":         ["NEE"],
    "Real Estate":       ["PLD"],
    "Comm. Services":    ["DIS","T"],
    "Consumer Cyc.":     ["NKE","MCD","SBUX"],
}

def r(v, d=2):
    try:
        val = float(v)
        return round(val, d) if not np.isnan(val) else None
    except:
        return None

def score_pe(v):
    if v is None: return 0
    if v < 10:  return 4
    if v < 15:  return 3
    if v < 20:  return 2
    if v < 25:  return 1
    if v < 35:  return 0
    if v < 50:  return -1
    if v < 75:  return -2
    return -3

def score_pb(v):
    if v is None: return 0
    if v < 1:   return 4
    if v < 2:   return 3
    if v < 3:   return 2
    if v < 5:   return 1
    if v < 10:  return 0
    if v < 20:  return -1
    return -2

def score_ps(v):
    if v is None: return 0
    if v < 1:   return 4
    if v < 2:   return 3
    if v < 3:   return 2
    if v < 5:   return 1
    if v < 10:  return 0
    if v < 20:  return -1
    return -2

def score_roe(v):
    if v is None: return 0
    v = v * 100
    if v > 25:  return 4
    if v > 20:  return 3
    if v > 15:  return 2
    if v > 10:  return 1
    if v > 5:   return 0
    if v > 0:   return -1
    return -2

def score_margen(v):
    if v is None: return 0
    v = v * 100
    if v > 30:  return 4
    if v > 20:  return 3
    if v > 15:  return 2
    if v > 10:  return 1
    if v > 5:   return 0
    if v > 0:   return -1
    return -2

def score_deuda(v):
    if v is None: return 0
    if v < 0:   return 4   # caja neta
    if v < 0.3: return 3
    if v < 0.5: return 2
    if v < 1.0: return 1
    if v < 2.0: return 0
    if v < 3.0: return -1
    if v < 5.0: return -2
    return -3

def score_yield(v, avg5y):
    """Verde si yield actual es mayor que promedio histórico (barato)"""
    if v is None: return 0
    if avg5y and avg5y > 0:
        ratio = v / avg5y
        if ratio > 1.3:  return 3   # muy barato vs historia
        if ratio > 1.1:  return 2
        if ratio > 0.9:  return 1
        if ratio > 0.7:  return -1
        return -2
    # Sin histórico, score absoluto
    if v > 5:   return 3
    if v > 3:   return 2
    if v > 1:   return 1
    return 0

def calcular_yield_historico(ticker):
    """Calcula yield histórico promedio 10 años"""
    try:
        t = yf.Ticker(ticker)
        hist = t.history(period="10y", interval="1mo")
        divs = t.dividends
        if divs.empty or hist.empty:
            return None, None

        # Dividendo anual por año
        divs.index = divs.index.tz_localize(None) if divs.index.tz else divs.index
        hist.index  = hist.index.tz_localize(None) if hist.index.tz else hist.index

        yields = []
        for year in range(datetime.now().year - 10, datetime.now().year):
            div_year   = divs[divs.index.year == year].sum()
            price_year = hist[hist.index.year == year]["Close"].mean()
            if div_year > 0 and price_year > 0:
                yields.append((div_year / price_year) * 100)

        if not yields:
            return None, None
        return round(np.mean(yields), 2), round(np.std(yields), 2)
    except:
        return None, None

def procesar_ticker_fundamental(ticker):
    try:
        t    = yf.Ticker(ticker)
        info = t.info

        # Ratios básicos
        pe       = r(info.get("trailingPE"))
        pe_fwd   = r(info.get("forwardPE"))
        pb       = r(info.get("priceToBook"))
        ps       = r(info.get("priceToSalesTrailingTwelveMonths"))
        roe      = r(info.get("returnOnEquity"))
        roa      = r(info.get("returnOnAssets"))
        margen   = r(info.get("profitMargins"))
        deuda_eq = r(info.get("debtToEquity"))
        if deuda_eq: deuda_eq = r(deuda_eq / 100)  # yfinance da en %
        eps      = r(info.get("trailingEps"))
        eps_fwd  = r(info.get("forwardEps"))
        revenue_g= r(info.get("revenueGrowth"))
        earn_g   = r(info.get("earningsGrowth"))
        payout   = r(info.get("payoutRatio"))

        # Dividendos
        div_yield    = r(info.get("dividendYield"), 4)
        div_yield_pct = round(div_yield * 100, 2) if div_yield else None
        div_rate     = r(info.get("dividendRate"))

        # Yield histórico 10 años
        avg_yield_10y, std_yield = calcular_yield_historico(ticker)

        # Scores
        s_pe    = score_pe(pe)
        s_pb    = score_pb(pb)
        s_ps    = score_ps(ps)
        s_roe   = score_roe(roe)
        s_marg  = score_margen(margen)
        s_deuda = score_deuda(deuda_eq)
        s_yield = score_yield(div_yield_pct, avg_yield_10y)

        scores = [s for s in [s_pe, s_pb, s_ps, s_roe, s_marg, s_deuda] if s != 0]
        score_global = round(np.mean(scores), 2) if scores else 0

        return {
            "ticker":       ticker,
            "pe":           pe,
            "pe_fwd":       pe_fwd,
            "pb":           pb,
            "ps":           ps,
            "roe":          r(roe * 100, 1) if roe else None,
            "roa":          r(roa * 100, 1) if roa else None,
            "margen":       r(margen * 100, 1) if margen else None,
            "deuda_eq":     deuda_eq,
            "eps":          eps,
            "eps_fwd":      eps_fwd,
            "revenue_g":    r(revenue_g * 100, 1) if revenue_g else None,
            "earn_g":       r(earn_g * 100, 1)    if earn_g    else None,
            "payout":       r(payout * 100, 1)    if payout    else None,
            "div_yield":    div_yield_pct,
            "div_rate":     div_rate,
            "avg_yield_10y": avg_yield_10y,
            "score_pe":     s_pe,
            "score_pb":     s_pb,
            "score_ps":     s_ps,
            "score_roe":    s_roe,
            "score_margen": s_marg,
            "score_deuda":  s_deuda,
            "score_yield":  s_yield,
            "score_global": score_global,
        }
    except Exception as e:
        print(f"  ⚠ {ticker}: {e}")
        return None

def main():
    print("═"*60)
    print("  ANÁLISIS FUNDAMENTAL — JCGdashboard")
    print("═"*60)

    resultados = []
    sectores   = {}

    for sector, tickers in FUNDAMENTAL_TICKERS.items():
        sectores[sector] = tickers
        for ticker in tickers:
            print(f"  → {ticker}")
            d = procesar_ticker_fundamental(ticker)
            if d:
                d["sector"] = sector
                resultados.append(d)

    output = {
        "actualizado":  datetime.now().strftime("%Y-%m-%d %H:%M"),
        "sectores":     sectores,
        "datos":        {r["ticker"]: r for r in resultados}
    }

    with open("fundamental_data.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n✅ {len(resultados)} tickers — fundamental_data.json generado")
    print(f"   {output['actualizado']}")

if __name__ == "__main__":
    main()
