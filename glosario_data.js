const GLOSARIO = {
  // ── ETFs PRINCIPALES ─────────────────────────────────────
  "SPY":  { nombre:"SPDR S&P 500 ETF", pais:"USA", sector:"ETF Índice", riesgo:"medio", desc:"Replica el índice S&P 500, las 500 empresas más grandes de EE.UU. El termómetro del mercado americano." },
  "QQQ":  { nombre:"Invesco QQQ Trust", pais:"USA", sector:"ETF Tecnología", riesgo:"medio-alto", desc:"Replica el Nasdaq-100, las 100 mayores empresas tecnológicas cotizadas en el Nasdaq. Alta exposición a Big Tech." },
  "DIA":  { nombre:"SPDR Dow Jones ETF", pais:"USA", sector:"ETF Índice", riesgo:"medio", desc:"Replica el Dow Jones Industrial Average, 30 empresas líderes industriales y blue chips de EE.UU." },
  "IWM":  { nombre:"iShares Russell 2000 ETF", pais:"USA", sector:"ETF Small Cap", riesgo:"medio-alto", desc:"Replica el Russell 2000, índice de las 2000 empresas de menor capitalización de EE.UU. Más volátil que el S&P." },
  "IBIT": { nombre:"iShares Bitcoin Trust ETF", pais:"USA", sector:"ETF Cripto", riesgo:"alto", desc:"ETF de Bitcoin de BlackRock. Exposición directa al precio del Bitcoin sin necesidad de wallets cripto." },
  "EWZ":  { nombre:"iShares MSCI Brazil ETF", pais:"Brasil", sector:"ETF País", riesgo:"alto", desc:"Exposición a las principales empresas de Brasil. Incluye Petrobras, Vale, bancos. Alta volatilidad por riesgo emergente." },
  "FXI":  { nombre:"iShares China Large-Cap ETF", pais:"China", sector:"ETF País", riesgo:"alto", desc:"Las 50 mayores empresas chinas cotizadas en Hong Kong. Exposición a China con riesgo regulatorio y geopolítico." },
  "MAGS": { nombre:"Roundhill Magnificent Seven ETF", pais:"USA", sector:"ETF Mega Cap", riesgo:"medio-alto", desc:"ETF que invierte equitativamente en las 7 grandes tecnológicas: Apple, Microsoft, Nvidia, Alphabet, Amazon, Meta, Tesla." },
  "RSP":  { nombre:"Invesco S&P 500 Equal Weight ETF", pais:"USA", sector:"ETF Índice", riesgo:"medio", desc:"S&P 500 con peso igualitario. A diferencia del SPY, cada empresa pesa lo mismo. Menos concentración en Big Tech." },
  "VIX":  { nombre:"CBOE Volatility Index", pais:"USA", sector:"Índice Volatilidad", riesgo:"muy alto", desc:"El 'índice del miedo'. Mide la volatilidad implícita del S&P 500. Sube cuando el mercado cae. No es invertible directamente." },

  // ── ETF SECTORES USA ──────────────────────────────────────
  "XLK":  { nombre:"Technology Select Sector SPDR", pais:"USA", sector:"ETF Tecnología", riesgo:"medio-alto", desc:"Las mayores empresas tecnológicas del S&P 500: Apple, Microsoft, Nvidia, Meta. Referente del sector tech." },
  "XLF":  { nombre:"Financial Select Sector SPDR", pais:"USA", sector:"ETF Financiero", riesgo:"medio", desc:"Bancos, seguros y servicios financieros del S&P 500: JPMorgan, Berkshire, Visa, Mastercard." },
  "XLV":  { nombre:"Health Care Select Sector SPDR", pais:"USA", sector:"ETF Salud", riesgo:"medio", desc:"Empresas de salud del S&P 500: UnitedHealth, Johnson, Pfizer, Eli Lilly. Sector defensivo." },
  "XLE":  { nombre:"Energy Select Sector SPDR", pais:"USA", sector:"ETF Energía", riesgo:"medio-alto", desc:"Empresas energéticas del S&P 500: ExxonMobil, Chevron, ConocoPhillips. Correlacionado con el precio del petróleo." },
  "XLI":  { nombre:"Industrial Select Sector SPDR", pais:"USA", sector:"ETF Industrial", riesgo:"medio", desc:"Industriales del S&P 500: GE, Caterpillar, Boeing, Honeywell. Cíclico, sensible al crecimiento económico." },
  "XLY":  { nombre:"Consumer Discretionary Select SPDR", pais:"USA", sector:"ETF Consumo Discrecional", riesgo:"medio-alto", desc:"Consumo no esencial: Amazon, Tesla, McDonald's, Nike. Sube cuando la economía va bien." },
  "XLP":  { nombre:"Consumer Staples Select SPDR", pais:"USA", sector:"ETF Consumo Básico", riesgo:"bajo-medio", desc:"Productos esenciales: Procter & Gamble, Coca-Cola, Walmart. Defensivo, resiste mejor las caídas." },
  "XLB":  { nombre:"Materials Select Sector SPDR", pais:"USA", sector:"ETF Materiales", riesgo:"medio-alto", desc:"Materias primas y químicos del S&P 500: Linde, Freeport-McMoRan, Air Products. Cíclico." },
  "XLRE": { nombre:"Real Estate Select Sector SPDR", pais:"USA", sector:"ETF Real Estate", riesgo:"medio", desc:"REITs (fondos de inversión inmobiliaria) del S&P 500. Sensible a las tasas de interés." },
  "XLU":  { nombre:"Utilities Select Sector SPDR", pais:"USA", sector:"ETF Utilities", riesgo:"bajo-medio", desc:"Empresas de servicios públicos: electricidad, gas, agua. Muy defensivo, paga buenos dividendos." },
  "XLC":  { nombre:"Communication Services Select SPDR", pais:"USA", sector:"ETF Comunicaciones", riesgo:"medio-alto", desc:"Telecomunicaciones y media: Alphabet, Meta, Netflix, Disney, Comcast." },
  "IBB":  { nombre:"iShares Biotechnology ETF", pais:"USA", sector:"ETF Biotecnología", riesgo:"alto", desc:"Empresas biotecnológicas y farmacéuticas. Alta volatilidad por dependencia de aprobaciones de la FDA." },
  "SMH":  { nombre:"VanEck Semiconductor ETF", pais:"USA", sector:"ETF Semiconductores", riesgo:"alto", desc:"Las mayores empresas de chips: Nvidia, TSMC, ASML, Intel. Muy volátil, clave para el ciclo tech." },

  // ── COMMODITIES ───────────────────────────────────────────
  "GLD":  { nombre:"SPDR Gold Shares ETF", pais:"USA", sector:"ETF Oro", riesgo:"medio", desc:"Replica el precio del oro físico. Reserva de valor, sube en incertidumbre y cuando el dólar se debilita." },
  "SLV":  { nombre:"iShares Silver Trust ETF", pais:"USA", sector:"ETF Plata", riesgo:"alto", desc:"Replica el precio de la plata física. Más volátil que el oro, uso industrial además de reserva de valor." },
  "URA":  { nombre:"Global X Uranium ETF", pais:"USA", sector:"ETF Uranio", riesgo:"alto", desc:"Empresas mineras de uranio y nuclear: Cameco, NexGen. Demanda impulsada por el auge de energía nuclear." },
  "USO":  { nombre:"United States Oil Fund ETF", pais:"USA", sector:"ETF Petróleo", riesgo:"muy alto", desc:"Replica el precio del petróleo crudo WTI mediante futuros. Muy volátil, afectado por OPEP y geopolítica." },
  "GDX":  { nombre:"VanEck Gold Miners ETF", pais:"USA", sector:"ETF Mineras Oro", riesgo:"alto", desc:"Empresas mineras de oro: Newmont, Barrick. Más volátil que el oro en sí, amplifica sus movimientos." },

  // ── LAS MAGNIFICAS ────────────────────────────────────────
  "AAPL": { nombre:"Apple Inc.", pais:"USA", sector:"Tecnología", riesgo:"medio", desc:"La empresa más valiosa del mundo. Fabrica iPhone, Mac, iPad y ofrece servicios como App Store, iCloud y Apple Pay. Enorme generación de caja." },
  "MSFT": { nombre:"Microsoft Corporation", pais:"USA", sector:"Tecnología", riesgo:"bajo-medio", desc:"Software empresarial (Windows, Office), cloud (Azure) e inteligencia artificial (OpenAI). Ingresos muy recurrentes." },
  "NVDA": { nombre:"NVIDIA Corporation", pais:"USA", sector:"Semiconductores", riesgo:"alto", desc:"Líder en GPUs para gaming, IA y centros de datos. Sus chips son el hardware clave para entrenar modelos de IA." },
  "AMZN": { nombre:"Amazon.com Inc.", pais:"USA", sector:"E-Commerce / Cloud", riesgo:"medio-alto", desc:"E-commerce líder mundial y AWS (Amazon Web Services), la mayor plataforma cloud. También streaming con Prime Video." },
  "GOOGL":{ nombre:"Alphabet Inc.", pais:"USA", sector:"Tecnología / Publicidad", riesgo:"medio", desc:"Dueña de Google, YouTube y Android. Domina la búsqueda online y publicidad digital. Fuerte en IA con Gemini y cloud." },
  "META": { nombre:"Meta Platforms Inc.", pais:"USA", sector:"Redes Sociales", riesgo:"medio-alto", desc:"Facebook, Instagram y WhatsApp. Domina la publicidad en redes sociales. Invierte fuerte en realidad virtual (Metaverso)." },
  "TSLA": { nombre:"Tesla Inc.", pais:"USA", sector:"Autos Eléctricos / Energía", riesgo:"alto", desc:"Líder en vehículos eléctricos. También baterías, paneles solares y software de conducción autónoma. Alta volatilidad." },
  "AVGO": { nombre:"Broadcom Inc.", pais:"USA", sector:"Semiconductores", riesgo:"medio-alto", desc:"Diseña chips de red, WiFi y storage. Proveedor clave de Apple y centros de datos. Fuerte crecimiento en IA custom chips." },

  // ── TECHNOLOGY ────────────────────────────────────────────
  "ADBE": { nombre:"Adobe Inc.", pais:"USA", sector:"Software", riesgo:"medio", desc:"Software creativo líder: Photoshop, Illustrator, Premiere. Modelo SaaS con ingresos recurrentes muy estables." },
  "AMAT": { nombre:"Applied Materials Inc.", pais:"USA", sector:"Semiconductores / Equipamiento", riesgo:"medio-alto", desc:"Fabrica los equipos usados para producir chips. Beneficiario del auge semiconductor sin el riesgo de diseñar chips." },
  "AMD":  { nombre:"Advanced Micro Devices", pais:"USA", sector:"Semiconductores", riesgo:"alto", desc:"Diseña procesadores (CPUs y GPUs). Compite con Intel en CPUs y con Nvidia en GPUs para IA. Gran recuperación reciente." },
  "ASTS": { nombre:"AST SpaceMobile Inc.", pais:"USA", sector:"Telecomunicaciones Espacial", riesgo:"muy alto", desc:"Desarrolla cobertura celular directa por satélite. Empresa pre-revenue en etapa temprana. Alto riesgo de ejecución." },
  "CSCO": { nombre:"Cisco Systems Inc.", pais:"USA", sector:"Redes / Tecnología", riesgo:"bajo-medio", desc:"Líder en equipos de red: routers, switches, ciberseguridad. Negocio maduro con buenos dividendos." },
  "FSLR": { nombre:"First Solar Inc.", pais:"USA", sector:"Energía Solar", riesgo:"alto", desc:"Fabricante de paneles solares de capa delgada. Principal productor solar estadounidense, beneficiado por la IRA." },
  "IBM":  { nombre:"IBM Corporation", pais:"USA", sector:"Tecnología / Cloud", riesgo:"bajo-medio", desc:"Servicios IT, consultoría y cloud híbrido. Transición hacia IA con Watson. Paga dividendo histórico." },
  "INTC": { nombre:"Intel Corporation", pais:"USA", sector:"Semiconductores", riesgo:"alto", desc:"Histórico líder en CPUs. Atraviesa una difícil reconversión hacia la fabricación de chips para terceros (foundry)." },
  "LRCX": { nombre:"Lam Research Corporation", pais:"USA", sector:"Equipamiento Semiconductor", riesgo:"alto", desc:"Fabrica equipos de grabado y deposición para chips. Muy cíclico, ligado al gasto de capex de las fábricas de chips." },
  "MU":   { nombre:"Micron Technology Inc.", pais:"USA", sector:"Memoria / Semiconductores", riesgo:"alto", desc:"Produce memorias DRAM y NAND. Muy cíclico por ciclos de oferta/demanda de memoria. Beneficiado por la IA." },
  "ORCL": { nombre:"Oracle Corporation", pais:"USA", sector:"Software / Cloud", riesgo:"medio", desc:"Base de datos empresariales y cloud. Crecimiento acelerado en cloud y contratos de IA con OpenAI y otros." },
  "PANW": { nombre:"Palo Alto Networks", pais:"USA", sector:"Ciberseguridad", riesgo:"medio-alto", desc:"Líder en ciberseguridad empresarial: firewall, cloud security y XDR. Sector con demanda estructural creciente." },
  "QCOM": { nombre:"Qualcomm Inc.", pais:"USA", sector:"Semiconductores / Móviles", riesgo:"medio-alto", desc:"Diseña chips para smartphones (Snapdragon) y cobra royalties por patentes 5G. Gran exposición a Apple y Android." },
  "RGTI": { nombre:"Rigetti Computing Inc.", pais:"USA", sector:"Computación Cuántica", riesgo:"muy alto", desc:"Empresa de computación cuántica en etapa temprana. Muy especulativa, sin ingresos significativos todavía." },
  "RKLB": { nombre:"Rocket Lab USA Inc.", pais:"USA", sector:"Aeroespacial / Cohetes", riesgo:"muy alto", desc:"Lanzamientos de cohetes pequeños y componentes espaciales. Competidor de SpaceX en el segmento small launch." },
  "SNOW": { nombre:"Snowflake Inc.", pais:"USA", sector:"Software / Cloud Data", riesgo:"alto", desc:"Plataforma de datos en la nube. Permite compartir y analizar datos entre empresas. Crecimiento alto pero sin ganancias." },
  "TXN":  { nombre:"Texas Instruments Inc.", pais:"USA", sector:"Semiconductores Analógicos", riesgo:"medio", desc:"Chips analógicos para industria, autos y electrónica. Negocio maduro, excelente generación de caja y dividendos." },
  "UBER": { nombre:"Uber Technologies Inc.", pais:"USA", sector:"Movilidad / Plataformas", riesgo:"medio-alto", desc:"Plataforma de transporte y delivery global. Uber Eats y Uber Freight complementan el negocio de rides." },

  // ── FINANCIAL ─────────────────────────────────────────────
  "AIG":  { nombre:"American International Group", pais:"USA", sector:"Seguros", riesgo:"medio", desc:"Gran aseguradora de vida, propiedad y accidentes. Recuperación tras la crisis 2008." },
  "AXP":  { nombre:"American Express Company", pais:"USA", sector:"Financiero / Tarjetas", riesgo:"medio", desc:"Red de tarjetas de crédito premium y servicios financieros. Cliente de alto ingreso, morosidad baja históricamente." },
  "BAC":  { nombre:"Bank of America Corporation", pais:"USA", sector:"Banca", riesgo:"medio", desc:"Segundo banco más grande de EE.UU. Banca retail, corporativa e inversión. Muy sensible a los ciclos de tasas." },
  "C":    { nombre:"Citigroup Inc.", pais:"USA", sector:"Banca Global", riesgo:"medio-alto", desc:"Banco global con fuerte presencia internacional. En proceso de simplificación y turnaround estratégico." },
  "COIN": { nombre:"Coinbase Global Inc.", pais:"USA", sector:"Exchange Cripto", riesgo:"muy alto", desc:"Mayor exchange de criptomonedas de EE.UU. Muy correlacionado con el precio de Bitcoin. Alta regulación." },
  "HOOD": { nombre:"Robinhood Markets Inc.", pais:"USA", sector:"Fintech / Brokerage", riesgo:"alto", desc:"Plataforma de trading sin comisiones para retail. Muy popular entre millennials. Ingresos ligados al volumen de trading." },
  "HUT":  { nombre:"Hut 8 Corp.", pais:"Canadá", sector:"Minería Bitcoin", riesgo:"muy alto", desc:"Empresa de minería de Bitcoin. Sus acciones se mueven con el precio del BTC y la dificultad de minería." },
  "IREN": { nombre:"IREN Limited", pais:"Australia", sector:"Minería Bitcoin / IA", riesgo:"muy alto", desc:"Minería de Bitcoin y centros de datos para IA. Apuesta combinada en cripto e inteligencia artificial." },
  "JPM":  { nombre:"JPMorgan Chase & Co.", pais:"USA", sector:"Banca de Inversión", riesgo:"medio", desc:"El mayor banco de EE.UU. Banca retail, inversión, gestión de activos y mercados. Liderado por Jamie Dimon." },
  "MA":   { nombre:"Mastercard Incorporated", pais:"USA", sector:"Pagos Digitales", riesgo:"bajo-medio", desc:"Red de pagos global. No presta dinero, cobra comisiones por transacciones. Modelo de negocio casi sin riesgo crediticio." },
  "PYPL": { nombre:"PayPal Holdings Inc.", pais:"USA", sector:"Fintech / Pagos", riesgo:"medio-alto", desc:"Pagos online y móviles. Venmo y PayPal. Enfrenta fuerte competencia de Apple Pay y Google Pay." },
  "RIOT": { nombre:"Riot Platforms Inc.", pais:"USA", sector:"Minería Bitcoin", riesgo:"muy alto", desc:"Minería de Bitcoin de gran escala. Performance ligada al precio del BTC y al halving. Muy volátil." },
  "SCHW": { nombre:"Charles Schwab Corporation", pais:"USA", sector:"Brokerage / Banca", riesgo:"medio", desc:"Plataforma de inversión y banca. Uno de los mayores brokers de EE.UU. Afectado por la subida de tasas en 2023." },
  "USB":  { nombre:"U.S. Bancorp", pais:"USA", sector:"Banca Regional", riesgo:"medio", desc:"Quinto banco más grande de EE.UU. Banca comercial y retail. Conservador, buenos dividendos históricos." },
  "V":    { nombre:"Visa Inc.", pais:"USA", sector:"Pagos Digitales", riesgo:"bajo-medio", desc:"La mayor red de pagos del mundo. No asume riesgo crediticio, cobra fees por cada transacción. Negocio muy predecible." },
  "WFC":  { nombre:"Wells Fargo & Company", pais:"USA", sector:"Banca", riesgo:"medio", desc:"Cuarto banco más grande de EE.UU. En recuperación tras escándalos regulatorios. Fuerte en hipotecas y banca retail." },

  // ── CONSUMER CYCLICAL ─────────────────────────────────────
  "ARCO": { nombre:"Arcos Dorados Holdings", pais:"Argentina/Latam", sector:"Restaurantes", riesgo:"alto", desc:"Franquiciado más grande de McDonald's en América Latina. Opera en 20 países. Exposición a volatilidad de monedas latam." },
  "BKNG": { nombre:"Booking Holdings Inc.", pais:"USA", sector:"Viajes Online", riesgo:"medio-alto", desc:"Mayor agencia de viajes online del mundo: Booking.com, Priceline, Kayak. Ingresos muy ligados al turismo global." },
  "EBAY": { nombre:"eBay Inc.", pais:"USA", sector:"E-Commerce", riesgo:"medio", desc:"Marketplace de compraventa peer-to-peer. Negocio maduro que compite con Amazon y Mercado Libre. Paga dividendo." },
  "ETSY": { nombre:"Etsy Inc.", pais:"USA", sector:"E-Commerce Artesanal", riesgo:"alto", desc:"Marketplace de productos artesanales y vintage. Creció mucho en pandemia, bajo presión post-covid." },
  "F":    { nombre:"Ford Motor Company", pais:"USA", sector:"Automotriz", riesgo:"medio-alto", desc:"Fabricante histórico de autos. Transición hacia vehículos eléctricos con la línea F-150 Lightning y Mustang Mach-E." },
  "GM":   { nombre:"General Motors Company", pais:"USA", sector:"Automotriz", riesgo:"medio-alto", desc:"Chevrolet, Buick, Cadillac y GMC. En transición eléctrica con Ultium. Competidor directo de Tesla en EV." },
  "HD":   { nombre:"The Home Depot Inc.", pais:"USA", sector:"Retail Mejoras del Hogar", riesgo:"medio", desc:"Mayor cadena de materiales de construcción y mejoras del hogar. Beneficiada por el boom inmobiliario post-2020." },
  "LVS":  { nombre:"Las Vegas Sands Corp.", pais:"USA", sector:"Casinos / Resorts", riesgo:"alto", desc:"Operador de casinos y resorts de lujo en Macao y Singapur. Muy expuesto al turismo asiático y regulación china." },
  "MCD":  { nombre:"McDonald's Corporation", pais:"USA", sector:"Restaurantes", riesgo:"bajo-medio", desc:"La cadena de comida rápida más grande del mundo. Modelo de franquicias muy predecible. Inmuebles son activo clave." },
  "NKE":  { nombre:"Nike Inc.", pais:"USA", sector:"Ropa / Deportes", riesgo:"medio", desc:"Mayor marca deportiva del mundo. Calzado, ropa y equipamiento. Canal directo al consumidor creciendo." },
  "SBUX": { nombre:"Starbucks Corporation", pais:"USA", sector:"Restaurantes / Café", riesgo:"medio", desc:"Mayor cadena de café del mundo. En turnaround estratégico bajo nuevo CEO. Exposición a China importante." },

  // ── INDUSTRIALS ───────────────────────────────────────────
  "AAL":  { nombre:"American Airlines Group", pais:"USA", sector:"Aerolíneas", riesgo:"alto", desc:"Tercera aerolínea más grande de EE.UU. Alta deuda post-pandemia. Muy sensible al precio del jet fuel." },
  "ADP":  { nombre:"Automatic Data Processing", pais:"USA", sector:"Software RRHH", riesgo:"bajo-medio", desc:"Líder en nóminas y gestión de RRHH para empresas. Negocio recurrente y defensivo. Dividendo histórico." },
  "BA":   { nombre:"Boeing Company", pais:"USA", sector:"Aeroespacial / Defensa", riesgo:"alto", desc:"Fabricante de aviones comerciales y defensa. Crisis de calidad en el 737 MAX y 787 pesa sobre la empresa." },
  "CAAP": { nombre:"Corporación América Airports", pais:"Argentina", sector:"Aeropuertos", riesgo:"alto", desc:"Opera aeropuertos en Argentina, Brasil, Italia y otros países. Mayor operador privado de aeropuertos de Latam." },
  "DAL":  { nombre:"Delta Air Lines Inc.", pais:"USA", sector:"Aerolíneas", riesgo:"medio-alto", desc:"Una de las mejores aerolíneas de EE.UU. Mejor posicionada que sus pares post-pandemia. Acuerdo con American Express." },
  "DE":   { nombre:"Deere & Company", pais:"USA", sector:"Maquinaria Agrícola", riesgo:"medio", desc:"John Deere. Líder en maquinaria agrícola y de construcción. Incorpora tecnología de precisión y autonomía." },
  "FDX":  { nombre:"FedEx Corporation", pais:"USA", sector:"Logística", riesgo:"medio", desc:"Logística y entrega de paquetes a nivel mundial. Compite con UPS y Amazon Logistics. Reestructuración en curso." },
  "GE":   { nombre:"GE Aerospace", pais:"USA", sector:"Aeroespacial / Motores", riesgo:"medio", desc:"Fabrica motores a reacción para aviación comercial y militar. Spin-off de GE Vernova (energía). Recuperación fuerte." },
  "HWM":  { nombre:"Howmet Aerospace Inc.", pais:"USA", sector:"Componentes Aeroespaciales", riesgo:"medio-alto", desc:"Fabrica componentes de titanio y aluminio para motores de avión. Beneficiado por el boom de la aviación comercial." },
  "LMT":  { nombre:"Lockheed Martin Corporation", pais:"USA", sector:"Defensa", riesgo:"bajo-medio", desc:"Mayor contratista de defensa del mundo. F-35, misiles, sistemas espaciales. Ingresos muy estables con el gobierno." },
  "MMM":  { nombre:"3M Company", pais:"USA", sector:"Industrial / Conglomerado", riesgo:"medio", desc:"Conglomerado industrial con miles de productos: Post-it, scotch, equipos médicos. Enfrenta litigios por PFAS y tapones." },
  "RTX":  { nombre:"RTX Corporation", pais:"USA", sector:"Defensa / Aeroespacial", riesgo:"medio", desc:"Raytheon, Pratt & Whitney y Collins Aerospace. Misiles, motores y sistemas de defensa. Dividendo sólido." },
  "UAL":  { nombre:"United Airlines Holdings", pais:"USA", sector:"Aerolíneas", riesgo:"alto", desc:"Segunda aerolínea más grande de EE.UU. Recuperación post-pandemia con rutas internacionales rentables." },
  "UNP":  { nombre:"Union Pacific Corporation", pais:"USA", sector:"Ferroviario", riesgo:"bajo-medio", desc:"Mayor ferrocarril del oeste de EE.UU. Monopolio natural, genera caja consistente. Defensivo y con dividendo." },

  // ── ENERGY ────────────────────────────────────────────────
  "BKR":  { nombre:"Baker Hughes Company", pais:"USA", sector:"Servicios Petroleros", riesgo:"medio-alto", desc:"Servicios y tecnología para la industria del petróleo y gas. Más diversificado que Schlumberger." },
  "CVX":  { nombre:"Chevron Corporation", pais:"USA", sector:"Petróleo Integrado", riesgo:"medio", desc:"Segunda petrolera más grande de EE.UU. Exploración, producción y refinería. Excelente dividendo histórico." },
  "HAL":  { nombre:"Halliburton Company", pais:"USA", sector:"Servicios Petroleros", riesgo:"alto", desc:"Líder en servicios de perforación y completación de pozos. Muy cíclico, ligado al precio del petróleo." },
  "OXY":  { nombre:"Occidental Petroleum", pais:"USA", sector:"Petróleo", riesgo:"alto", desc:"Productora de petróleo con gran exposición al Permian Basin. Warren Buffett tiene una participación significativa." },
  "PSX":  { nombre:"Phillips 66", pais:"USA", sector:"Refinería / Energía", riesgo:"medio", desc:"Refinería de petróleo, químicos y midstream. Menos exposición al precio del crudo que las E&P puras." },
  "SLB":  { nombre:"SLB (Schlumberger)", pais:"USA/Global", sector:"Servicios Petroleros", riesgo:"medio-alto", desc:"Mayor empresa de servicios petroleros del mundo. Tecnología para extracción de petróleo y gas en 120 países." },
  "XOM":  { nombre:"ExxonMobil Corporation", pais:"USA", sector:"Petróleo Integrado", riesgo:"medio", desc:"La mayor petrolera de EE.UU. Integrada verticalmente: exploración, refinería y químicos. Dividendo aristocrat." },

  // ── BASIC MATERIALS ───────────────────────────────────────
  "CDE":  { nombre:"Coeur Mining Inc.", pais:"USA", sector:"Minería Plata/Oro", riesgo:"muy alto", desc:"Minera de plata y oro con operaciones en EE.UU., Canadá y México. Muy volátil, ligada al precio de metales preciosos." },
  "DD":   { nombre:"DuPont de Nemours Inc.", pais:"USA", sector:"Químicos Especiales", riesgo:"medio", desc:"Química especializada: materiales electrónicos, protección y construcción. Spin-off de la histórica DuPont." },
  "DOW":  { nombre:"Dow Inc.", pais:"USA", sector:"Química / Petroquímica", riesgo:"medio-alto", desc:"Polietileno, empaques y coatings. Cíclica, sensible al precio del gas natural y la demanda industrial global." },
  "ECL":  { nombre:"Ecolab Inc.", pais:"USA", sector:"Productos de Limpieza / Agua", riesgo:"bajo-medio", desc:"Soluciones de limpieza, higiene y tratamiento de agua para industria y alimentos. Modelo recurrente defensivo." },
  "FCX":  { nombre:"Freeport-McMoRan Inc.", pais:"USA", sector:"Minería Cobre", riesgo:"alto", desc:"Mayor productor de cobre del mundo. También oro y molibdeno. Muy sensible al precio del cobre y a China." },
  "HL":   { nombre:"Hecla Mining Company", pais:"USA", sector:"Minería Plata", riesgo:"muy alto", desc:"Productor de plata y oro en EE.UU. y Canadá. Empresa pequeña, muy volátil, ligada al precio de la plata." },
  "MOS":  { nombre:"The Mosaic Company", pais:"USA", sector:"Fertilizantes", riesgo:"alto", desc:"Produce fosfatos y potasa para fertilizantes. Ligado a precios agrícolas y geopolítica (Rusia es competidor)." },
  "NEM":  { nombre:"Newmont Corporation", pais:"USA", sector:"Minería Oro", riesgo:"medio-alto", desc:"Mayor minera de oro del mundo. Reservas en múltiples países. Correlacionada con el precio del oro." },
  "NUE":  { nombre:"Nucor Corporation", pais:"USA", sector:"Acero", riesgo:"medio-alto", desc:"Líder en acero de EE.UU. usando hornos eléctricos. Más eficiente que las acerías tradicionales. Dividendo consistente." },
  "SCCO": { nombre:"Southern Copper Corporation", pais:"México/Perú", sector:"Minería Cobre", riesgo:"alto", desc:"Gran productora de cobre en México y Perú. Subsidiaria de Grupo México. Muy ligada al precio del cobre." },

  // ── COMM. SERVICES ────────────────────────────────────────
  "DIS":  { nombre:"The Walt Disney Company", pais:"USA", sector:"Entretenimiento / Media", riesgo:"medio", desc:"Parques, películas (Marvel, Star Wars), Disney+ streaming y ESPN. En transición hacia el streaming rentable." },
  "NFLX": { nombre:"Netflix Inc.", pais:"USA", sector:"Streaming", riesgo:"medio-alto", desc:"Líder global en streaming con 260M+ suscriptores. Publicidad y gaming como nuevas fuentes de ingreso." },
  "RBLX": { nombre:"Roblox Corporation", pais:"USA", sector:"Gaming / Metaverso", riesgo:"alto", desc:"Plataforma de juegos y mundos virtuales. Muy popular entre menores de 16 años. Sin ganancias todavía." },
  "ROKU": { nombre:"Roku Inc.", pais:"USA", sector:"Streaming / Publicidad TV", riesgo:"alto", desc:"Plataforma de streaming para TV conectada. Ingresos por publicidad en su canal gratuito. Compite con Amazon y Google." },
  "T":    { nombre:"AT&T Inc.", pais:"USA", sector:"Telecomunicaciones", riesgo:"medio", desc:"Telefonía móvil y fibra óptica en EE.UU. Alta deuda post-fusión con Discovery. Paga dividendo alto." },
  "VZ":   { nombre:"Verizon Communications", pais:"USA", sector:"Telecomunicaciones", riesgo:"bajo-medio", desc:"Mayor operador de telefonía móvil de EE.UU. Flujo de caja estable, dividendo histórico alto. Negocio maduro." },
  "ZM":   { nombre:"Zoom Video Communications", pais:"USA", sector:"Software / Videoconferencia", riesgo:"medio-alto", desc:"Plataforma de videoconferencias. Beneficiada por el COVID, enfrenta desaceleración post-pandemia y competencia de Microsoft." },

  // ── CONSUMER DEFENSIVE ───────────────────────────────────
  "BG":   { nombre:"Bunge Global SA", pais:"USA/Global", sector:"Agribusiness", riesgo:"medio-alto", desc:"Procesamiento y trading de commodities agrícolas: soja, trigo, maíz. Operaciones en todo el mundo." },
  "CL":   { nombre:"Colgate-Palmolive Company", pais:"USA", sector:"Consumo Básico", riesgo:"bajo", desc:"Dentífricos, jabones y cuidado personal (Colgate, Palmolive, Ajax). Defensivo con presencia global." },
  "COST": { nombre:"Costco Wholesale Corporation", pais:"USA", sector:"Retail / Membresías", riesgo:"bajo-medio", desc:"Club de compras por membresía. Excelente ejecución operativa. Una de las retailers más queridas del mercado." },
  "HSY":  { nombre:"The Hershey Company", pais:"USA", sector:"Alimentos / Confitería", riesgo:"bajo-medio", desc:"Chocolates y snacks: Hershey, Reese's, Kit Kat (en EE.UU.). Defensivo, presionado por el precio del cacao." },
  "KO":   { nombre:"The Coca-Cola Company", pais:"USA", sector:"Bebidas", riesgo:"bajo", desc:"La marca más reconocida del mundo. Refrescos, agua y bebidas en 200 países. Dividendo aristocrat 60+ años." },
  "MDLZ": { nombre:"Mondelez International", pais:"USA", sector:"Alimentos", riesgo:"bajo-medio", desc:"Snacks y galletas globales: Oreo, Cadbury, Milka, Toblerone. Presionado por el cacao pero pricing power fuerte." },
  "PEP":  { nombre:"PepsiCo Inc.", pais:"USA", sector:"Bebidas / Snacks", riesgo:"bajo", desc:"Pepsi, Gatorade, Lay's, Doritos y Quaker. Más diversificada que Coca-Cola. Dividendo aristocrat." },
  "PG":   { nombre:"Procter & Gamble Company", pais:"USA", sector:"Consumo Básico", riesgo:"bajo", desc:"Tide, Pampers, Gillette, Pantene y 60+ marcas. Uno de los negocios más defensivos y predecibles del mercado." },
  "TGT":  { nombre:"Target Corporation", pais:"USA", sector:"Retail", riesgo:"medio", desc:"Cadena de tiendas retail en EE.UU. Competidor de Walmart. Enfocado en moda y hogar además de básicos." },
  "WMT":  { nombre:"Walmart Inc.", pais:"USA", sector:"Retail Global", riesgo:"bajo-medio", desc:"La mayor empresa minorista del mundo. Supermercados, Sam's Club y e-commerce creciente. Muy defensiva." },

  // ── HEALTHCARE ────────────────────────────────────────────
  "ABBV": { nombre:"AbbVie Inc.", pais:"USA", sector:"Farmacéutica / Biotecnología", riesgo:"medio", desc:"Humira (anti-inflamatorio) fue su gran producto. Diversificando con Skyrizi y Rinvoq. Dividendo muy alto." },
  "ABT":  { nombre:"Abbott Laboratories", pais:"USA", sector:"Dispositivos Médicos", riesgo:"bajo-medio", desc:"Dispositivos médicos, diagnóstico y nutrición. FreeStyle Libre (diabetes) es su producto estrella." },
  "AMGN": { nombre:"Amgen Inc.", pais:"USA", sector:"Biotecnología", riesgo:"medio", desc:"Biotecnológica con fármacos para cáncer, osteoporosis y colesterol. Candidato en obesidad con MariTide." },
  "BMY":  { nombre:"Bristol-Myers Squibb", pais:"USA", sector:"Farmacéutica", riesgo:"medio", desc:"Oncología e inmunología: Opdivo, Eliquis. Expiraciones de patentes son el principal riesgo." },
  "DHR":  { nombre:"Danaher Corporation", pais:"USA", sector:"Ciencias de la Vida / Diagnóstico", riesgo:"medio", desc:"Instrumentos y diagnóstico para laboratorios y farma. Modelo de adquisiciones (Danaher Business System)." },
  "GILD": { nombre:"Gilead Sciences Inc.", pais:"USA", sector:"Biotecnología / Antiviral", riesgo:"medio", desc:"Medicamentos antivirales: VIH, Hepatitis C y oncología. Remdesivir fue su fármaco COVID. Dividendo alto." },
  "ISRG": { nombre:"Intuitive Surgical Inc.", pais:"USA", sector:"Robótica Médica", riesgo:"medio-alto", desc:"Sistemas de cirugía robótica Da Vinci. Monopolio de facto en cirugía mínimamente invasiva. Crecimiento sostenido." },
  "LLY":  { nombre:"Eli Lilly and Company", pais:"USA", sector:"Farmacéutica", riesgo:"medio-alto", desc:"Lider en medicamentos GLP-1 para diabetes y obesidad (Ozempic/Wegovy compiten con Mounjaro/Zepbound). Gran pipeline." },
  "MDT":  { nombre:"Medtronic plc", pais:"Irlanda/USA", sector:"Dispositivos Médicos", riesgo:"bajo-medio", desc:"Dispositivos médicos: marcapasos, stents, neuromodulación. Dividendo aristocrat, negocio muy defensivo." },
  "MRK":  { nombre:"Merck & Co. Inc.", pais:"USA", sector:"Farmacéutica", riesgo:"medio", desc:"Keytruda (inmuno-oncología) es el fármaco más vendido del mundo. Gran pipeline de oncología y vacunas." },
  "MRNA": { nombre:"Moderna Inc.", pais:"USA", sector:"Biotecnología / ARNm", riesgo:"muy alto", desc:"Tecnología de ARNm, conocida por la vacuna COVID. Desarrollo de vacunas para cáncer, RSV y gripe." },
  "PFE":  { nombre:"Pfizer Inc.", pais:"USA", sector:"Farmacéutica", riesgo:"medio", desc:"Farmacéutica global. Post-COVID en reestructuración. Comirnaty (vacuna) y Paxlovid fueron sus grandes productos." },
  "TMO":  { nombre:"Thermo Fisher Scientific", pais:"USA", sector:"Ciencias de la Vida", riesgo:"medio", desc:"Equipos e insumos para laboratorios, investigación y producción farmacéutica. El 'Amazon' de las ciencias de la vida." },
  "UNH":  { nombre:"UnitedHealth Group", pais:"USA", sector:"Salud / Seguros Médicos", riesgo:"medio", desc:"Mayor aseguradora de salud de EE.UU. y Optum (servicios de salud). Bajo presión regulatoria por precios." },
  "VRTX": { nombre:"Vertex Pharmaceuticals", pais:"USA", sector:"Biotecnología / Genética", riesgo:"medio-alto", desc:"Tratamientos para fibrosis quística (Trikafta). Pipeline en dolor, riñón y enfermedades raras." },

  // ── UTILITIES ─────────────────────────────────────────────
  "CEG":  { nombre:"Constellation Energy Corporation", pais:"USA", sector:"Energía Nuclear", riesgo:"medio", desc:"Mayor productor de energía nuclear de EE.UU. Beneficiada por la demanda de energía limpia de centros de datos e IA." },
  "OKLO": { nombre:"Oklo Inc.", pais:"USA", sector:"Energía Nuclear / Small Modular", riesgo:"muy alto", desc:"Reactores nucleares de pequeña escala (SMR). Empresa pre-revenue, especulativa. Apoyada por Sam Altman de OpenAI." },
  "VST":  { nombre:"Vistra Corporation", pais:"USA", sector:"Energía Eléctrica", riesgo:"medio-alto", desc:"Generación de electricidad con mix nuclear, gas y renovables. Beneficiada por la demanda de data centers." },

  // ── MUNDIAL: CHINA ────────────────────────────────────────
  "BABA": { nombre:"Alibaba Group Holding", pais:"China", sector:"E-Commerce / Cloud", riesgo:"alto", desc:"El Amazon + AWS de China. Taobao, Tmall y Alibaba Cloud. Riesgo regulatorio chino tras multa histórica en 2021." },
  "BIDU": { nombre:"Baidu Inc.", pais:"China", sector:"Búsqueda / IA", riesgo:"alto", desc:"El Google de China. Motor de búsqueda dominante y líder en IA con ERNIE Bot y vehículos autónomos (Apollo)." },
  "JD":   { nombre:"JD.com Inc.", pais:"China", sector:"E-Commerce", riesgo:"alto", desc:"E-commerce de electrónica y productos de calidad en China. Logística propia como ventaja competitiva." },
  "NIO":  { nombre:"NIO Inc.", pais:"China", sector:"Vehículos Eléctricos", riesgo:"muy alto", desc:"Fabricante chino de EVs premium. Competidor de Tesla en China. Servicio de swap de batería como diferencial." },
  "NTES": { nombre:"NetEase Inc.", pais:"China", sector:"Gaming / Educación Online", riesgo:"alto", desc:"Segunda empresa de videojuegos de China. Socios de Blizzard en China. También música (Cloud Music) y educación." },
  "PDD":  { nombre:"PDD Holdings (Temu/Pinduoduo)", pais:"China", sector:"E-Commerce Global", riesgo:"alto", desc:"Pinduoduo en China y Temu globalmente. Modelo de compras en grupo. Disruptivo por precios muy bajos." },
  "XPEV": { nombre:"XPeng Inc.", pais:"China", sector:"Vehículos Eléctricos", riesgo:"muy alto", desc:"Fabricante chino de EVs tecnológicos. Fuerte en software de conducción autónoma. Compite con NIO y BYD." },

  // ── MUNDIAL: MEXICO ───────────────────────────────────────
  "AMX":  { nombre:"América Móvil SAB de CV", pais:"México", sector:"Telecomunicaciones", riesgo:"medio", desc:"Mayor operadora de telecomunicaciones de América Latina. Claro y Telcel. Controlada por Carlos Slim." },
  "ASR":  { nombre:"Grupo Aeroportuario del Sureste", pais:"México", sector:"Aeropuertos", riesgo:"medio", desc:"Opera aeropuertos del sureste de México: Cancún, Mérida. Tráfico turístico muy fuerte post-pandemia." },
  "CX":   { nombre:"CEMEX SAB de CV", pais:"México", sector:"Cementos / Materiales", riesgo:"alto", desc:"Tercer mayor cementera del mundo. Operaciones en 50+ países. Alta deuda histórica, en proceso de reducción." },
  "KOF":  { nombre:"Coca-Cola FEMSA SAB de CV", pais:"México", sector:"Bebidas", riesgo:"bajo-medio", desc:"Mayor embotellador de Coca-Cola del mundo por volumen. Latam y México como mercados principales." },
  "PAC":  { nombre:"Grupo Aeroportuario del Pacífico", pais:"México", sector:"Aeropuertos", riesgo:"medio", desc:"Opera aeropuertos del pacífico mexicano: Guadalajara, Los Cabos, Puerto Vallarta. Turismo fuerte." },

  // ── MUNDIAL: AFRICA ───────────────────────────────────────
  "GFI":  { nombre:"Gold Fields Limited", pais:"Sudáfrica", sector:"Minería Oro", riesgo:"alto", desc:"Minera de oro con operaciones en Sudáfrica, Australia, Ghana y Perú. Correlacionada con el precio del oro." },
  "HMY":  { nombre:"Harmony Gold Mining", pais:"Sudáfrica", sector:"Minería Oro", riesgo:"muy alto", desc:"Minera de oro sudafricana, la más grande del país. Alto costo de producción, muy sensible al precio del oro." },
  "JMIA": { nombre:"Jumia Technologies AG", pais:"Nigeria/Alemania", sector:"E-Commerce África", riesgo:"muy alto", desc:"El Amazon de África. Presente en 11 países africanos. Pre-rentable, muy especulativo y volátil." },

  // ── MUNDIAL: CANADA ───────────────────────────────────────
  "ALM":  { nombre:"Alma Media Corporation", pais:"Finlandia", sector:"Media Digital", riesgo:"medio", desc:"Media y servicios digitales en Finlandia y Europa del Este. Clasificados online y contenido digital." },
  "CLS":  { nombre:"Celestica Inc.", pais:"Canadá", sector:"Manufactura Electrónica", riesgo:"medio-alto", desc:"Manufactura de electrónica para empresas tech y de comunicaciones. Beneficiado por la demanda de data centers." },
  "LAC":  { nombre:"Lithium Americas Corp.", pais:"Canadá", sector:"Minería Litio", riesgo:"muy alto", desc:"Desarrollo de minas de litio en Nevada y Argentina. Pre-producción, muy especulativo. Clave para baterías EV." },
  "MUX":  { nombre:"McEwen Mining Inc.", pais:"Canadá", sector:"Minería Oro/Plata", riesgo:"muy alto", desc:"Minera de oro, plata y cobre en América. Pequeña cap, alta volatilidad, ligada a precios de metales." },
  "NG":   { nombre:"NovaGold Resources Inc.", pais:"Canadá", sector:"Minería Oro", riesgo:"muy alto", desc:"Desarrollo del proyecto Donlin Gold en Alaska, uno de los mayores depósitos de oro del mundo. Pre-producción." },
  "NXE":  { nombre:"NexGen Energy Ltd.", pais:"Canadá", sector:"Uranio", riesgo:"muy alto", desc:"Desarrolla el proyecto Arrow, uno de los mayores depósitos de uranio del mundo en Saskatchewan, Canadá." },
  "PAAS": { nombre:"Pan American Silver Corp.", pais:"Canadá", sector:"Minería Plata/Oro", riesgo:"alto", desc:"Productora de plata y oro en América Latina. Diversificada geográficamente, ligada al precio de la plata." },
  "SHOP": { nombre:"Shopify Inc.", pais:"Canadá", sector:"E-Commerce / Software", riesgo:"alto", desc:"Plataforma para crear tiendas online. Permite a PYMES vender en múltiples canales. Rápido crecimiento global." },

  // ── MUNDIAL: BRASIL ───────────────────────────────────────
  "ABEV": { nombre:"Ambev SA", pais:"Brasil", sector:"Bebidas / Cerveza", riesgo:"medio", desc:"Mayor cervecera de América Latina: Brahma, Skol, Antarctica. Subsidiaria de AB InBev. Presencia en 16 países." },
  "BAK":  { nombre:"Braskem SA", pais:"Brasil", sector:"Petroquímica", riesgo:"alto", desc:"Mayor petroquímica de América Latina. Produce plásticos y resinas. Expuesta al precio del petróleo y real brasileño." },
  "BBD":  { nombre:"Banco Bradesco SA", pais:"Brasil", sector:"Banca", riesgo:"alto", desc:"Segundo banco privado más grande de Brasil. Red enorme de sucursales y fuerte en seguros. Riesgo país Brasil." },
  "GGB":  { nombre:"Gerdau SA", pais:"Brasil", sector:"Acero", riesgo:"alto", desc:"Productora de acero long en Brasil y EE.UU. Cíclica, sensible a construcción e infraestructura. Exposición al real." },
  "NU":   { nombre:"Nu Holdings Ltd. (Nubank)", pais:"Brasil/Caribe", sector:"Fintech / Banco Digital", riesgo:"alto", desc:"El neobanco más grande del mundo por clientes. 100M+ usuarios en Brasil, México y Colombia. Warren Buffett invirtió." },
  "PAGS": { nombre:"PagSeguro Digital Ltd.", pais:"Brasil", sector:"Fintech / Pagos", riesgo:"alto", desc:"Pagos y servicios financieros para PYMEs en Brasil. Compite con Nubank y Mercado Pago. Alta exposición al real." },
  "PBR":  { nombre:"Petróleo Brasileiro (Petrobras)", pais:"Brasil", sector:"Petróleo Estatal", riesgo:"alto", desc:"Mayor empresa de Brasil. Petróleo offshore de aguas profundas (pre-sal). Riesgo de interferencia política en dividendos." },
  "SUZ":  { nombre:"Suzano SA", pais:"Brasil", sector:"Papel / Celulosa", riesgo:"alto", desc:"Mayor productora de pulpa de eucalipto del mundo. Líder global en celulosa para papel y empaques. Exposición al real." },
  "VALE": { nombre:"Vale SA", pais:"Brasil", sector:"Minería Hierro/Níquel", riesgo:"alto", desc:"Mayor minera de hierro del mundo y gran productora de níquel. Muy ligada a la demanda siderúrgica de China." },
  "XP":   { nombre:"XP Inc.", pais:"Brasil", sector:"Finanzas / Inversiones", riesgo:"alto", desc:"Plataforma de inversiones líder en Brasil. Disruptora de los grandes bancos. Crecimiento de AUM acelerado." },

  // ── MUNDIAL: REINO UNIDO ──────────────────────────────────
  "ARM":  { nombre:"Arm Holdings plc", pais:"Reino Unido", sector:"Semiconductores / Diseño", riesgo:"alto", desc:"Diseña la arquitectura de chips usada en el 99% de smartphones. Modelo de licencias. Clave para IA en el edge." },
  "AZN":  { nombre:"AstraZeneca plc", pais:"Reino Unido/Suecia", sector:"Farmacéutica", riesgo:"medio", desc:"Farmacéutica global líder en oncología y cardiovascular. Tagrisso y Farxiga son sus productos estrella." },
  "BCS":  { nombre:"Barclays plc", pais:"Reino Unido", sector:"Banca de Inversión", riesgo:"medio-alto", desc:"Banco global británico con fuerte banca de inversión. Expuesto a tasas de interés y ciclo crediticio global." },
  "BP":   { nombre:"BP plc", pais:"Reino Unido", sector:"Petróleo Integrado", riesgo:"medio-alto", desc:"Gran petrolera británica. En transición hacia energías renovables bajo presión de inversores. Dividendo alto." },
  "DEO":  { nombre:"Diageo plc", pais:"Reino Unido", sector:"Bebidas Espirituosas", riesgo:"bajo-medio", desc:"Johnnie Walker, Guinness, Smirnoff, Baileys y más. Marcas premium con pricing power. Defensivo." },
  "GSK":  { nombre:"GSK plc", pais:"Reino Unido", sector:"Farmacéutica / Vacunas", riesgo:"medio", desc:"Farmacéutica con foco en vacunas, VIH y oncología. Shingrix (herpes zoster) es su producto estrella." },
  "HSBC": { nombre:"HSBC Holdings plc", pais:"Reino Unido/Hong Kong", sector:"Banca Global", riesgo:"medio", desc:"Banco global con fuerte presencia en Asia. El banco del comercio internacional. Dividendo alto." },
  "LYG":  { nombre:"Lloyds Banking Group", pais:"Reino Unido", sector:"Banca Retail", riesgo:"medio", desc:"Banco retail líder en el Reino Unido. Hipotecas y banca personal. Muy sensible a la economía británica." },
  "NGG":  { nombre:"National Grid plc", pais:"Reino Unido", sector:"Utilities / Infraestructura", riesgo:"bajo", desc:"Opera las redes eléctricas y de gas del Reino Unido y noreste de EE.UU. Muy defensivo, regulado." },
  "RIO":  { nombre:"Rio Tinto plc", pais:"Australia/Reino Unido", sector:"Minería Diversificada", riesgo:"medio-alto", desc:"Minera global: hierro, cobre, aluminio, litio. Muy ligada a China y los precios de commodities." },
  "VOD":  { nombre:"Vodafone Group plc", pais:"Reino Unido", sector:"Telecomunicaciones", riesgo:"medio", desc:"Operadora de telecomunicaciones en Europa y África. En reestructuración y venta de activos. Dividendo cuestionado." },

  // ── MUNDIAL: EUROPA ───────────────────────────────────────
  "ACN":  { nombre:"Accenture plc", pais:"Irlanda/USA", sector:"Consultoría / IT", riesgo:"medio", desc:"Mayor consultora de tecnología e IT del mundo. Transformación digital, IA y outsourcing para grandes empresas." },
  "ASML": { nombre:"ASML Holding NV", pais:"Holanda", sector:"Semiconductores / Equipamiento EUV", riesgo:"medio-alto", desc:"Monopolio en máquinas de litografía EUV, indispensables para chips avanzados (2nm). Sin ASML, no hay chips modernos." },
  "BBVA": { nombre:"Banco Bilbao Vizcaya Argentaria", pais:"España", sector:"Banca", riesgo:"medio-alto", desc:"Banco español con gran presencia en México (50% ganancias), Turquía y América Latina. OPA sobre Banco Sabadell." },
  "EQNR": { nombre:"Equinor ASA", pais:"Noruega", sector:"Petróleo / Renovables", riesgo:"medio", desc:"Petrolera estatal noruega, líder en el Mar del Norte. En transición hacia energías renovables offshore." },
  "GRMN": { nombre:"Garmin Ltd.", pais:"Suiza/USA", sector:"GPS / Wearables", riesgo:"medio", desc:"GPS para aviación, marino, outdoor y fitness. Watchs Garmin compiten con Apple Watch en deportistas." },
  "ING":  { nombre:"ING Groep NV", pais:"Holanda", sector:"Banca / Fintech", riesgo:"medio", desc:"Banco holandés líder en Europa. Pionero en banca digital. Presencia en 40 países." },
  "NVS":  { nombre:"Novartis AG", pais:"Suiza", sector:"Farmacéutica", riesgo:"bajo-medio", desc:"Farmacéutica suiza con foco en enfermedades cardiovasculares, oncología y neurología. Dividendo estable." },
  "SAP":  { nombre:"SAP SE", pais:"Alemania", sector:"Software Empresarial / ERP", riesgo:"bajo-medio", desc:"Líder mundial en software ERP para empresas. SAP S/4HANA cloud es su apuesta de futuro. Muy defensivo." },
  "SHEL": { nombre:"Shell plc", pais:"Reino Unido/Holanda", sector:"Petróleo / Gas / Renovables", riesgo:"medio", desc:"Petrolera integrada global. GNL (gas natural licuado) es su diferencial. En transición hacia energías limpias." },
  "TTE":  { nombre:"TotalEnergies SE", pais:"Francia", sector:"Petróleo / Energía", riesgo:"medio", desc:"Petrolera francesa integrada. Gran apuesta en GNL, solar y eólico. Dividendo alto y creciente." },

  // ── MUNDIAL: ASIA ─────────────────────────────────────────
  "BHP":  { nombre:"BHP Group Limited", pais:"Australia", sector:"Minería Diversificada", riesgo:"medio-alto", desc:"Mayor minera del mundo por capitalización: hierro, cobre, carbón metalúrgico. Muy ligada a China." },
  "HDB":  { nombre:"HDFC Bank Limited", pais:"India", sector:"Banca Privada India", riesgo:"medio", desc:"Mayor banco privado de India. Beneficiado por el crecimiento económico indio y la bancarización masiva." },
  "HMC":  { nombre:"Honda Motor Co. Ltd.", pais:"Japón", sector:"Automotriz / Motocicletas", riesgo:"medio", desc:"Fabricante japonés de autos y motos. Fuerte en motores eficientes. En transición hacia vehículos eléctricos." },
  "INFY": { nombre:"Infosys Limited", pais:"India", sector:"IT / Outsourcing", riesgo:"medio", desc:"Segunda empresa de IT de India. Outsourcing, consultoría digital y servicios cloud para empresas globales." },
  "PKX":  { nombre:"POSCO Holdings Inc.", pais:"Corea del Sur", sector:"Acero / Materiales EV", riesgo:"medio-alto", desc:"Mayor acería de Corea del Sur. Invierte fuerte en litio, níquel y materiales para baterías de vehículos eléctricos." },
  "SE":   { nombre:"Sea Limited", pais:"Singapur", sector:"Gaming / E-Commerce / Fintech", riesgo:"alto", desc:"Conglomerado tech del sudeste asiático: Garena (gaming), Shopee (e-commerce) y SeaMoney (fintech)." },
  "SONY": { nombre:"Sony Group Corporation", pais:"Japón", sector:"Entretenimiento / Electrónica", riesgo:"medio", desc:"PlayStation, música (Sony Music), películas, sensores de imagen y electrónica de consumo. Muy diversificada." },
  "TM":   { nombre:"Toyota Motor Corporation", pais:"Japón", sector:"Automotriz", riesgo:"bajo-medio", desc:"Mayor fabricante de autos del mundo. Líder en híbridos (Prius). Apuesta por el hidrógeno como alternativa al EV." },
  "TSM":  { nombre:"Taiwan Semiconductor Mfg.", pais:"Taiwán", sector:"Semiconductores / Foundry", riesgo:"medio-alto", desc:"La fábrica de chips más importante del mundo. Produce chips de Apple, Nvidia, AMD. Riesgo geopolítico Taiwán/China." },

  // ── MUNDIAL: ARGENTINA ────────────────────────────────────
  "BMA":  { nombre:"Banco Macro SA", pais:"Argentina", sector:"Banca", riesgo:"muy alto", desc:"Uno de los bancos privados más grandes de Argentina. Muy expuesto a la economía y regulación argentina." },
  "BYMA": { nombre:"Bolsas y Mercados Argentinos", pais:"Argentina", sector:"Bolsa de Valores", riesgo:"muy alto", desc:"Opera la bolsa de valores de Argentina. Ingresos ligados al volumen de transacciones del mercado local." },
  "CEPU": { nombre:"Central Puerto SA", pais:"Argentina", sector:"Energía Eléctrica", riesgo:"muy alto", desc:"Generadora de electricidad térmica e hidráulica en Argentina. Expuesta a tarifas reguladas y riesgo país." },
  "EDN":  { nombre:"Empresa Distribuidora Norte (Edenor)", pais:"Argentina", sector:"Utilities", riesgo:"muy alto", desc:"Distribuidora de electricidad en el norte del Gran Buenos Aires. Tarifas reguladas, alta exposición al riesgo país." },
  "GGAL": { nombre:"Grupo Financiero Galicia SA", pais:"Argentina", sector:"Banca / Holding", riesgo:"muy alto", desc:"Holding del Banco Galicia, uno de los bancos privados líderes de Argentina. Naranja X (fintech) como apuesta digital." },
  "LOMA": { nombre:"Loma Negra Compañía Industrial", pais:"Argentina", sector:"Cementos", riesgo:"muy alto", desc:"Empresa cementera líder de Argentina. Ligada a la construcción e infraestructura local. Subsidiaria de InterCement." },
  "MELI": { nombre:"MercadoLibre Inc.", pais:"Argentina/Uruguay", sector:"E-Commerce / Fintech Latam", riesgo:"medio-alto", desc:"El Amazon + PayPal de América Latina. E-commerce líder en 18 países y MercadoPago como brazo financiero." },
  "MIRG": { nombre:"Mirgor SACIFIA", pais:"Argentina", sector:"Electrónica / Automotriz", riesgo:"muy alto", desc:"Fabrica electrónica de consumo y partes automotrices en Argentina. Operación muy ligada al mercado local." },
  "PAM":  { nombre:"Pampa Energía SA", pais:"Argentina", sector:"Energía / Gas / Electricidad", riesgo:"muy alto", desc:"Mayor empresa integrada de energía de Argentina. Generación, transmisión, distribución eléctrica y gas." },
  "SUPV": { nombre:"Grupo Supervielle SA", pais:"Argentina", sector:"Banca", riesgo:"muy alto", desc:"Banco y servicios financieros en Argentina. Fuerte en Mendoza y el interior del país. Alto riesgo regulatorio." },
  "TECO2":{ nombre:"Telecom Argentina SA", pais:"Argentina", sector:"Telecomunicaciones", riesgo:"muy alto", desc:"Mayor empresa de telecomunicaciones de Argentina: Personal (móvil), Fibertel y Cablevisión." },
  "TXAR": { nombre:"Ternium Argentina SA", pais:"Argentina", sector:"Acero", riesgo:"muy alto", desc:"Productora de acero plano en Argentina. Subsidiaria del grupo Techint. Ligada a la industria automotriz y construcción." },
  "VALO": { nombre:"Banco de Valores SA", pais:"Argentina", sector:"Banca / Inversiones", riesgo:"muy alto", desc:"Banco especializado en mercado de capitales y custodia de valores en Argentina." },
  "VIST": { nombre:"Vista Energy SAB de CV", pais:"Argentina/México", sector:"Petróleo No Convencional", riesgo:"alto", desc:"Productora de petróleo y gas no convencional en Vaca Muerta, Argentina. El shale play más importante de Latam." },
  "YPF":  { nombre:"YPF Sociedad Anónima", pais:"Argentina", sector:"Petróleo Estatal", riesgo:"muy alto", desc:"Petrolera estatal argentina. Gran exposición a Vaca Muerta. Alto riesgo político y de expropiación histórica." },

  // ── FUNDAMENTAL TICKERS ───────────────────────────────────
  "BRK-B":{ nombre:"Berkshire Hathaway Inc. Cl.B", pais:"USA", sector:"Holding / Conglomerado", riesgo:"bajo-medio", desc:"El holding de Warren Buffett. Seguros (GEICO), ferroviario (BNSF), energía y participaciones en Apple, Coke, AmEx." },
  "LIN":  { nombre:"Linde plc", pais:"Irlanda/USA", sector:"Gases Industriales", riesgo:"bajo", desc:"Mayor empresa de gases industriales del mundo: oxígeno, nitrógeno, hidrógeno. Esencial para industria y salud." },
  "PLD":  { nombre:"Prologis Inc.", pais:"USA", sector:"REIT / Logística", riesgo:"medio", desc:"El mayor REIT industrial del mundo. Almacenes y centros de distribución para e-commerce. Inquilinos: Amazon, FedEx." },
  "GS":   { nombre:"Goldman Sachs Group Inc.", pais:"USA", sector:"Banca de Inversión", riesgo:"medio-alto", desc:"El banco de inversión más prestigioso del mundo. M&A, trading, gestión de activos. Muy cíclico." },
  "NEE":  { nombre:"NextEra Energy Inc.", pais:"USA", sector:"Utilities / Renovables", riesgo:"medio", desc:"Mayor productora de energía eólica y solar del mundo. Florida Power & Light como negocio regulado estable." },
  "CAT":  { nombre:"Caterpillar Inc.", pais:"USA", sector:"Maquinaria Industrial", riesgo:"medio", desc:"Líder mundial en maquinaria de construcción y minería. Indicador del ciclo económico global. Dividendo aristócrata." },
  "JNJ":  { nombre:"Johnson & Johnson", pais:"USA", sector:"Farmacéutica / Dispositivos Médicos", riesgo:"bajo", desc:"Una de las empresas más diversificadas en salud. Medicamentos, dispositivos médicos. Dividendo aristócrata 60+ años." },
};

// Función de riesgo a color
function riesgoColor(r){
  if(!r) return '#4a4a7a';
  if(r.includes('muy alto')) return '#ff1744';
  if(r.includes('alto'))     return '#ff6d00';
  if(r.includes('medio-alto')) return '#ffab00';
  if(r.includes('medio'))    return '#ffd600';
  if(r.includes('bajo-medio')) return '#69f0ae';
  if(r.includes('bajo'))     return '#00e676';
  return '#4a4a7a';
}
