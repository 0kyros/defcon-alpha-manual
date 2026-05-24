import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La guerra termica è la conseguenza della diffusione massiva di ottiche IR su droni, fucili e veicoli. Ogni corpo umano, ogni motore, ogni canna calda è un faro IR. Questo capitolo descrive le firme termiche, i principi difensivi di mitigazione e le tecniche di concealment. NON contiene procedure di acquisizione obiettivo o impiego offensivo dell'IR.",
    sections: [
      {
        heading: "Cosa vede una termica",
        blocks: [
          {
            type: "p",
            text: "Una termica (thermal imager) rileva la radiazione infrarossa emessa da ogni oggetto sopra lo zero assoluto. Non è visione notturna amplificata di luce visibile (I²) — è una banda completamente diversa, basata su temperatura.",
          },
          {
            type: "ul",
            items: [
              "Banda comune: LWIR (Long-Wave Infrared, 8-14 μm) per visione termica passiva",
              "Banda alternativa: MWIR (Mid-Wave Infrared, 3-5 μm) per sistemi militari avanzati",
              "Risoluzione tipica: 320×240 a 640×512 pixel sui droni commerciali (Mavic 3T, Autel 640T)",
              "Risoluzione militare: 1024×768+ su piattaforme avanzate",
              "Distanza di rilevamento umano: 500 m - 2 km a seconda del sensore e dello sfondo termico",
              "Punto critico: distingue ΔT (differenza di temperatura) tra oggetto e sfondo, non temperatura assoluta",
            ],
          },
          {
            type: "callout",
            title: "Implicazione fondamentale",
            body: "Se sei più caldo (o più freddo) dello sfondo, sei visibile. Anche di giorno. Anche sotto vegetazione fitta se la copertura termica è incompleta.",
          },
        ],
      },
      {
        heading: "Firme termiche tipiche",
        blocks: [
          {
            type: "p",
            text: "Conoscere le firme che emetti è il primo passo per ridurle. Ogni elemento del kit ha una firma propria.",
          },
          {
            type: "table",
            headers: ["Sorgente", "Caratteristica termica"],
            rows: [
              ["Corpo umano", "Volto, mani, collo a 30-35°C — più caldi di quasi ogni sfondo invernale"],
              ["Canna fucile dopo sparo", "Picco 100-300°C, visibile per minuti"],
              ["Veicolo motore", "Picco 80-120°C, visibile chilometri, raffredda in 30-60 min"],
              ["Scappamento", "Picco fino a 600°C, faro IR a lunga distanza"],
              ["Fuoco / stufetta", "Sorgente intensa, traditrice anche schermata"],
              ["Tracce di passaggio recente", "Piedi su erba/terra lasciano firma per 5-15 minuti"],
              ["Mezzo fermo da poco", "Ombra termica residua sul terreno sotto"],
            ],
          },
        ],
      },
      {
        heading: "Concealment termico — principi",
        blocks: [
          {
            type: "p",
            text: "Ridurre la firma non significa eliminarla — significa fonderla con lo sfondo termico circostante. Il principio è equalizzazione, non isolamento.",
          },
          {
            type: "ul",
            items: [
              "Materiali low-emissivity: coperte mylar, teli IR-defeating (ghillie termici), tessuti tecnici dedicati",
              "Massa termica: terra, pietre, legna — buffer naturali, riducono ΔT se interposti",
              "Acqua: penetra meno gli IR ma è efficace solo se completa (umidità sottile non basta)",
              "Vegetazione: fogliame denso e umido riduce significativamente, foglie secche poco",
              "Distanza dal sensore: la risoluzione termica degrada rapidamente, dispersione + distanza aiuta",
              "Tempistica: alba e tramonto invertono il contrasto termico (crossover) — sfruttarli",
            ],
          },
          {
            type: "warn",
            title: "Tessuti normali non bastano",
            body: "Coperta lana, giacca standard, tarp poliestere riducono pochissimo. Una buona termica li attraversa. La differenza la fanno materiali IR-defeating dedicati o massa termica naturale.",
          },
        ],
      },
      {
        heading: "Difesa individuale dalla termica",
        blocks: [
          {
            type: "ul",
            items: [
              "Coprire volto e mani (zone più calde) in ambienti freddi — bandana, guanti, balaclava IR-defeating",
              "Operare bassi, vicini a massa termica fredda (muri di pietra, terra, neve)",
              "Movimento breve, sosta in posizione coperta — il movimento è doppiamente visibile (firma + scia)",
              "Evitare fonti calde portate (stufette portatili, fuochi) in zona di osservazione drone",
              "Dopo sparo: muoversi rapidamente — la canna calda + flash IR ti localizza per minuti",
              "Sleep system: non isolarsi in tenda calda in zona di volo termico — usare bivvy interrato",
              "Smartphone, batterie, dispositivi caldi: schermati o spenti in fase di stalking",
            ],
          },
        ],
      },
      {
        heading: "Difesa veicolare dalla termica",
        blocks: [
          {
            type: "ul",
            items: [
              "Coperture termiche dedicate (Saab Barracuda MCS o equivalente artigianale)",
              "Posizionamento sotto vegetazione densa, non solo per visivo ma per termico",
              "Spegnimento motore appena fermi — il calore residuo è visibile fino a 30-60 minuti",
              "Schermatura scappamento (raffreddatori, deviatori, schermi metallici)",
              "Dispersione: due veicoli vicini formano una doppia firma riconoscibile come unità",
              "Ramaglia fresca sul cofano: riduce parzialmente, sostituire ogni poche ore (si secca)",
            ],
          },
        ],
      },
      {
        heading: "Terreno e tempo",
        blocks: [
          {
            type: "p",
            text: "Il terreno e le condizioni meteo cambiano radicalmente la visibilità termica. Comprenderlo significa scegliere quando e dove muoversi.",
          },
          {
            type: "ul",
            items: [
              "Pioggia battente: degrada termica IR — finestra di mobilità",
              "Nebbia umida densa: riduce range termico significativamente",
              "Neve fresca: sfondo molto freddo, aumenta contrasto su corpi caldi",
              "Sole basso (alba/tramonto): crossover termico, paesaggio è 'piatto' termicamente — finestra di stalking",
              "Notte fredda chiara: massima visibilità termica, evitare movimenti esposti",
              "Suolo riscaldato dal sole: dopo tramonto irradia per ore, può mascherare firme su sfondo caldo",
            ],
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Pensare che camo visivo = camo termico (non c'è correlazione)",
              "Coprirsi solo con vestiario standard contro ottica termica avanzata",
              "Fermarsi a fumare in posizione esposta — sigaretta a 700°C, faro a chilometri",
              "Lasciare motore al minimo per \"essere pronti\" — firma persistente",
              "Riunirsi sotto un albero per la pausa: gruppo umano = blob IR enorme",
              "Sottovalutare un drone Mavic 3T con sensore termico 640 — è disponibile commercialmente",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte 2024-2026 la termica è onnipresente: Mavic 3T, Autel EVO II Pro 640T, droni notturni 'Baba Yaga' con FLIR, ottiche russe IRBIS e PNV-10T. La regola operativa condivisa è: si muove di notte solo coperti dal terreno, in dispersione, con tempistica scelta (pioggia, nebbia, crossover) o sotto coperture termiche dedicate. Veicoli sono morti se fermi all'aperto > 30 minuti in zona di volo termico. La differenza tra unità sopravvissute e perdute è quasi sempre nella disciplina termica — coperture, dispersione, scelta dell'ora, raffreddamento motori — più che nel kit di alta fascia. Una coperta mylar ben usata batte un veicolo moderno usato male.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Thermal warfare is the consequence of the mass diffusion of IR optics on drones, rifles and vehicles. Every human body, every engine, every hot barrel is an IR beacon. This chapter describes thermal signatures, defensive mitigation principles and concealment techniques. It does NOT contain target acquisition or offensive IR procedures.",
    sections: [
      {
        heading: "What a thermal sees",
        blocks: [
          {
            type: "p",
            text: "A thermal imager detects infrared radiation emitted by every object above absolute zero. It is not amplified visible-light night vision (I²) — it is a completely different band, temperature-based.",
          },
          {
            type: "ul",
            items: [
              "Common band: LWIR (Long-Wave Infrared, 8-14 μm) for passive thermal imaging",
              "Alternate band: MWIR (Mid-Wave Infrared, 3-5 μm) for advanced military systems",
              "Typical resolution: 320×240 to 640×512 pixels on commercial drones (Mavic 3T, Autel 640T)",
              "Military resolution: 1024×768+ on advanced platforms",
              "Human detection range: 500 m - 2 km depending on sensor and thermal background",
              "Critical point: distinguishes ΔT (temperature difference) between object and background, not absolute temperature",
            ],
          },
          {
            type: "callout",
            title: "Fundamental implication",
            body: "If you are warmer (or colder) than the background, you are visible. Even in daylight. Even under thick vegetation if the thermal cover is incomplete.",
          },
        ],
      },
      {
        heading: "Typical thermal signatures",
        blocks: [
          {
            type: "p",
            text: "Knowing your signatures is the first step to reducing them. Every kit element has its own signature.",
          },
          {
            type: "table",
            headers: ["Source", "Thermal characteristic"],
            rows: [
              ["Human body", "Face, hands, neck at 30-35°C — hotter than almost any winter background"],
              ["Rifle barrel after firing", "Peak 100-300°C, visible for minutes"],
              ["Vehicle engine", "Peak 80-120°C, visible km, cools in 30-60 min"],
              ["Exhaust", "Peak up to 600°C, long-range IR beacon"],
              ["Fire / heater", "Intense source, betraying even when screened"],
              ["Recent footprints", "Feet on grass/dirt leave signature for 5-15 minutes"],
              ["Recently parked vehicle", "Residual thermal shadow on ground beneath"],
            ],
          },
        ],
      },
      {
        heading: "Thermal concealment — principles",
        blocks: [
          {
            type: "p",
            text: "Reducing signature does not mean eliminating it — it means blending with the surrounding thermal background. The principle is equalisation, not isolation.",
          },
          {
            type: "ul",
            items: [
              "Low-emissivity materials: mylar blankets, IR-defeating tarps (thermal ghillies), dedicated technical fabrics",
              "Thermal mass: earth, rocks, wood — natural buffers, reduce ΔT when interposed",
              "Water: less IR-penetrable but effective only if complete (light moisture is insufficient)",
              "Vegetation: dense wet foliage significantly reduces, dry leaves little",
              "Distance from sensor: thermal resolution degrades fast, dispersion + distance helps",
              "Timing: dawn and dusk invert thermal contrast (crossover) — exploit it",
            ],
          },
          {
            type: "warn",
            title: "Normal fabrics are insufficient",
            body: "Wool blanket, standard jacket, polyester tarp barely reduce. A good thermal sees through them. The difference is made by dedicated IR-defeating materials or natural thermal mass.",
          },
        ],
      },
      {
        heading: "Individual thermal defence",
        blocks: [
          {
            type: "ul",
            items: [
              "Cover face and hands (hottest zones) in cold environments — bandana, gloves, IR-defeating balaclava",
              "Operate low, close to cold thermal mass (stone walls, earth, snow)",
              "Brief movement, halt in covered position — movement is doubly visible (signature + trail)",
              "Avoid carried heat sources (portable heaters, fires) in drone observation zones",
              "After firing: move fast — hot barrel + IR flash locates you for minutes",
              "Sleep system: do not isolate in a warm tent in thermal flight zone — use buried bivvy",
              "Smartphone, batteries, warm devices: shielded or off during stalking phase",
            ],
          },
        ],
      },
      {
        heading: "Vehicle thermal defence",
        blocks: [
          {
            type: "ul",
            items: [
              "Dedicated thermal covers (Saab Barracuda MCS or improvised equivalent)",
              "Positioning under dense vegetation, not only for visual but for thermal",
              "Engine off as soon as stopped — residual heat is visible 30-60 minutes",
              "Exhaust shielding (coolers, deflectors, metal screens)",
              "Dispersion: two vehicles close together form a double signature recognisable as a unit",
              "Fresh branches on hood: partial reduction, replace every few hours (drying)",
            ],
          },
        ],
      },
      {
        heading: "Terrain and weather",
        blocks: [
          {
            type: "p",
            text: "Terrain and weather conditions radically change thermal visibility. Understanding this means choosing when and where to move.",
          },
          {
            type: "ul",
            items: [
              "Heavy rain: degrades IR thermal — mobility window",
              "Dense humid fog: significantly reduces thermal range",
              "Fresh snow: very cold background, increases contrast on warm bodies",
              "Low sun (dawn/dusk): thermal crossover, landscape is thermally 'flat' — stalking window",
              "Cold clear night: maximum thermal visibility, avoid exposed movement",
              "Sun-heated ground: after sundown radiates for hours, can mask signatures on warm background",
            ],
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Believing visual camo = thermal camo (no correlation)",
              "Covering only with standard clothing against advanced thermal optics",
              "Smoking in exposed position — cigarette at 700°C, beacon kilometres away",
              "Idling engine to \"stay ready\" — persistent signature",
              "Grouping under a tree for a break: human cluster = huge IR blob",
              "Underestimating a Mavic 3T with thermal sensor 640 — commercially available",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the 2024-2026 front, thermal is ubiquitous: Mavic 3T, Autel EVO II Pro 640T, 'Baba Yaga' night drones with FLIR, Russian IRBIS optics and PNV-10T. The shared operational rule: move at night only covered by terrain, in dispersion, with chosen timing (rain, fog, crossover) or under dedicated thermal covers. Vehicles are dead if stationary in the open > 30 minutes in thermal flight zone. The difference between surviving and lost units is almost always in thermal discipline — covers, dispersion, time selection, engine cooldown — more than in top-tier kit. A well-used mylar blanket beats a poorly-used modern vehicle.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A guerra térmica é consequência da difusão massiva de óticas IR em drones, fuzis e veículos. Cada corpo humano, cada motor, cada cano quente é um farol IR. Este capítulo descreve assinaturas térmicas, princípios defensivos de mitigação e técnicas de concealment. NÃO contém procedimentos de aquisição de alvo ou emprego ofensivo de IR.",
    sections: [
      {
        heading: "O que uma térmica vê",
        blocks: [
          {
            type: "p",
            text: "Uma térmica detecta radiação infravermelha emitida por todo objeto acima do zero absoluto. Não é visão noturna amplificada de luz visível (I²) — é banda completamente diferente, baseada em temperatura.",
          },
          {
            type: "ul",
            items: [
              "Banda comum: LWIR (Long-Wave Infrared, 8-14 μm) para imaging térmico passivo",
              "Banda alternativa: MWIR (Mid-Wave Infrared, 3-5 μm) para sistemas militares avançados",
              "Resolução típica: 320×240 a 640×512 pixels em drones comerciais (Mavic 3T, Autel 640T)",
              "Resolução militar: 1024×768+ em plataformas avançadas",
              "Distância de detecção humana: 500 m - 2 km dependendo de sensor e fundo térmico",
              "Ponto crítico: distingue ΔT (diferença de temperatura) entre objeto e fundo, não temperatura absoluta",
            ],
          },
          {
            type: "callout",
            title: "Implicação fundamental",
            body: "Se você é mais quente (ou mais frio) que o fundo, é visível. Mesmo de dia. Mesmo sob vegetação densa se a cobertura térmica for incompleta.",
          },
        ],
      },
      {
        heading: "Assinaturas térmicas típicas",
        blocks: [
          {
            type: "p",
            text: "Conhecer suas assinaturas é o primeiro passo para reduzi-las. Cada elemento do kit tem assinatura própria.",
          },
          {
            type: "table",
            headers: ["Fonte", "Característica térmica"],
            rows: [
              ["Corpo humano", "Rosto, mãos, pescoço a 30-35°C — mais quentes que quase qualquer fundo de inverno"],
              ["Cano de fuzil após tiro", "Pico 100-300°C, visível por minutos"],
              ["Motor de veículo", "Pico 80-120°C, visível km, esfria em 30-60 min"],
              ["Escapamento", "Pico até 600°C, farol IR a longa distância"],
              ["Fogo / aquecedor", "Fonte intensa, traidora mesmo blindada"],
              ["Pegadas recentes", "Pés em grama/terra deixam assinatura por 5-15 minutos"],
              ["Veículo recém-parado", "Sombra térmica residual no solo embaixo"],
            ],
          },
        ],
      },
      {
        heading: "Concealment térmico — princípios",
        blocks: [
          {
            type: "p",
            text: "Reduzir a assinatura não significa eliminá-la — significa fundir-se ao fundo térmico circundante. O princípio é equalização, não isolamento.",
          },
          {
            type: "ul",
            items: [
              "Materiais low-emissivity: cobertores mylar, telas IR-defeating (ghillies térmicos), tecidos técnicos dedicados",
              "Massa térmica: terra, pedras, madeira — buffers naturais, reduzem ΔT se interpostos",
              "Água: menos IR-penetrável mas eficaz só se completa (umidade leve não basta)",
              "Vegetação: folhagem densa úmida reduz significativamente, folhas secas pouco",
              "Distância do sensor: resolução térmica degrada rápido, dispersão + distância ajudam",
              "Tempo: alvorecer e anoitecer invertem o contraste térmico (crossover) — aproveitar",
            ],
          },
          {
            type: "warn",
            title: "Tecidos comuns não bastam",
            body: "Cobertor de lã, jaqueta padrão, lona poliéster reduzem muito pouco. Uma boa térmica atravessa. A diferença vem de materiais IR-defeating dedicados ou massa térmica natural.",
          },
        ],
      },
      {
        heading: "Defesa individual contra térmica",
        blocks: [
          {
            type: "ul",
            items: [
              "Cobrir rosto e mãos (zonas mais quentes) em ambiente frio — bandana, luvas, balaclava IR-defeating",
              "Operar baixo, próximo a massa térmica fria (muros de pedra, terra, neve)",
              "Movimento breve, parada em posição coberta — movimento é duplamente visível (assinatura + trilha)",
              "Evitar fontes de calor portáteis (aquecedores, fogos) em zona de observação drone",
              "Após tiro: mover-se rápido — cano quente + flash IR localizam por minutos",
              "Sleep system: não se isolar em barraca quente em zona de voo térmico — usar bivvy enterrado",
              "Smartphone, baterias, dispositivos quentes: blindados ou desligados em fase de stalking",
            ],
          },
        ],
      },
      {
        heading: "Defesa veicular contra térmica",
        blocks: [
          {
            type: "ul",
            items: [
              "Coberturas térmicas dedicadas (Saab Barracuda MCS ou equivalente improvisado)",
              "Posicionamento sob vegetação densa, não só por visual mas por térmico",
              "Desligar motor assim que parado — calor residual visível 30-60 minutos",
              "Blindagem de escapamento (resfriadores, defletores, telas metálicas)",
              "Dispersão: dois veículos próximos formam dupla assinatura reconhecível como unidade",
              "Galhos frescos no capô: redução parcial, trocar a cada poucas horas (secam)",
            ],
          },
        ],
      },
      {
        heading: "Terreno e tempo",
        blocks: [
          {
            type: "p",
            text: "Terreno e meteo mudam radicalmente a visibilidade térmica. Entender isso é escolher quando e onde se mover.",
          },
          {
            type: "ul",
            items: [
              "Chuva forte: degrada térmica IR — janela de mobilidade",
              "Neblina úmida densa: reduz alcance térmico significativamente",
              "Neve fresca: fundo muito frio, aumenta contraste em corpos quentes",
              "Sol baixo (alvorecer/anoitecer): crossover térmico, paisagem 'plana' termicamente — janela de stalking",
              "Noite fria limpa: visibilidade térmica máxima, evitar movimento exposto",
              "Solo aquecido pelo sol: após pôr-do-sol irradia por horas, pode mascarar assinaturas em fundo quente",
            ],
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Achar que camo visual = camo térmico (sem correlação)",
              "Cobrir-se só com vestuário padrão contra ótica térmica avançada",
              "Parar para fumar em posição exposta — cigarro a 700°C, farol a km",
              "Deixar motor em marcha lenta para \"estar pronto\" — assinatura persistente",
              "Agrupar sob árvore na pausa: grupo humano = blob IR enorme",
              "Subestimar Mavic 3T com sensor térmico 640 — disponível comercialmente",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front 2024-2026 a térmica é onipresente: Mavic 3T, Autel EVO II Pro 640T, drones noturnos 'Baba Yaga' com FLIR, óticas russas IRBIS e PNV-10T. Regra operacional compartilhada: move-se à noite só coberto pelo terreno, em dispersão, com tempo escolhido (chuva, neblina, crossover) ou sob coberturas térmicas dedicadas. Veículos estão mortos se parados ao ar livre > 30 minutos em zona de voo térmico. A diferença entre unidades sobreviventes e perdidas está quase sempre na disciplina térmica — coberturas, dispersão, escolha de hora, cooldown de motor — mais que em kit top-tier. Um cobertor mylar bem usado bate um veículo moderno mal usado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La guerre thermique est la conséquence de la diffusion massive d'optiques IR sur drones, fusils et véhicules. Tout corps humain, tout moteur, tout canon chaud est un phare IR. Ce chapitre décrit les signatures thermiques, les principes défensifs d'atténuation et les techniques de concealment. Il NE contient PAS de procédures d'acquisition d'objectif ou d'emploi offensif de l'IR.",
    sections: [
      {
        heading: "Ce que voit une thermique",
        blocks: [
          {
            type: "p",
            text: "Une thermique détecte le rayonnement infrarouge émis par tout objet au-dessus du zéro absolu. Ce n'est pas de la vision nocturne amplifiée de lumière visible (I²) — c'est une bande complètement différente, basée sur la température.",
          },
          {
            type: "ul",
            items: [
              "Bande commune : LWIR (Long-Wave Infrared, 8-14 μm) pour imagerie thermique passive",
              "Bande alternative : MWIR (Mid-Wave Infrared, 3-5 μm) pour systèmes militaires avancés",
              "Résolution typique : 320×240 à 640×512 pixels sur drones commerciaux (Mavic 3T, Autel 640T)",
              "Résolution militaire : 1024×768+ sur plateformes avancées",
              "Distance de détection humaine : 500 m - 2 km selon capteur et fond thermique",
              "Point critique : distingue ΔT (différence de température) entre objet et fond, pas la température absolue",
            ],
          },
          {
            type: "callout",
            title: "Implication fondamentale",
            body: "Si vous êtes plus chaud (ou plus froid) que le fond, vous êtes visible. Même de jour. Même sous végétation dense si la couverture thermique est incomplète.",
          },
        ],
      },
      {
        heading: "Signatures thermiques typiques",
        blocks: [
          {
            type: "p",
            text: "Connaître ses signatures est la première étape pour les réduire. Chaque élément du kit a sa propre signature.",
          },
          {
            type: "table",
            headers: ["Source", "Caractéristique thermique"],
            rows: [
              ["Corps humain", "Visage, mains, cou à 30-35°C — plus chauds que presque tout fond hivernal"],
              ["Canon de fusil après tir", "Pic 100-300°C, visible pendant des minutes"],
              ["Moteur de véhicule", "Pic 80-120°C, visible sur km, refroidit en 30-60 min"],
              ["Échappement", "Pic jusqu'à 600°C, phare IR longue portée"],
              ["Feu / chauffage", "Source intense, trahit même blindée"],
              ["Empreintes récentes", "Pieds sur herbe/terre laissent signature 5-15 minutes"],
              ["Véhicule fraîchement stationné", "Ombre thermique résiduelle au sol en-dessous"],
            ],
          },
        ],
      },
      {
        heading: "Concealment thermique — principes",
        blocks: [
          {
            type: "p",
            text: "Réduire la signature ne signifie pas l'éliminer — c'est se fondre au fond thermique environnant. Le principe est l'égalisation, pas l'isolement.",
          },
          {
            type: "ul",
            items: [
              "Matériaux low-emissivity : couvertures mylar, bâches IR-defeating (ghillies thermiques), tissus techniques dédiés",
              "Masse thermique : terre, pierres, bois — buffers naturels, réduisent le ΔT si interposés",
              "Eau : moins IR-pénétrable mais efficace seulement si complète (humidité légère ne suffit pas)",
              "Végétation : feuillage dense humide réduit significativement, feuilles sèches peu",
              "Distance du capteur : la résolution thermique se dégrade vite, dispersion + distance aident",
              "Timing : aube et crépuscule inversent le contraste thermique (crossover) — l'exploiter",
            ],
          },
          {
            type: "warn",
            title: "Les tissus normaux ne suffisent pas",
            body: "Couverture laine, veste standard, bâche polyester réduisent très peu. Une bonne thermique passe à travers. La différence se fait avec des matériaux IR-defeating dédiés ou de la masse thermique naturelle.",
          },
        ],
      },
      {
        heading: "Défense individuelle thermique",
        blocks: [
          {
            type: "ul",
            items: [
              "Couvrir visage et mains (zones les plus chaudes) en environnement froid — bandana, gants, balaclava IR-defeating",
              "Opérer bas, près de masse thermique froide (murs de pierre, terre, neige)",
              "Mouvement bref, halte en position couverte — le mouvement est doublement visible (signature + traînée)",
              "Éviter sources de chaleur portées (chauffages, feux) en zone d'observation drone",
              "Après tir : se déplacer vite — canon chaud + flash IR vous localisent pendant des minutes",
              "Sleep system : pas s'isoler en tente chaude en zone de vol thermique — utiliser bivvy enterré",
              "Smartphone, batteries, appareils chauds : blindés ou éteints en phase de stalking",
            ],
          },
        ],
      },
      {
        heading: "Défense véhicule thermique",
        blocks: [
          {
            type: "ul",
            items: [
              "Couvertures thermiques dédiées (Saab Barracuda MCS ou équivalent improvisé)",
              "Positionnement sous végétation dense, pas seulement pour le visuel mais pour le thermique",
              "Moteur coupé dès l'arrêt — la chaleur résiduelle est visible 30-60 minutes",
              "Blindage d'échappement (refroidisseurs, déflecteurs, écrans métalliques)",
              "Dispersion : deux véhicules proches forment une double signature reconnaissable comme unité",
              "Branches fraîches sur capot : réduction partielle, remplacer toutes les quelques heures (sèchent)",
            ],
          },
        ],
      },
      {
        heading: "Terrain et météo",
        blocks: [
          {
            type: "p",
            text: "Le terrain et la météo changent radicalement la visibilité thermique. Le comprendre, c'est choisir quand et où se déplacer.",
          },
          {
            type: "ul",
            items: [
              "Pluie battante : dégrade la thermique IR — fenêtre de mobilité",
              "Brouillard humide dense : réduit significativement la portée thermique",
              "Neige fraîche : fond très froid, augmente le contraste sur corps chauds",
              "Soleil bas (aube/crépuscule) : crossover thermique, paysage 'plat' thermiquement — fenêtre de stalking",
              "Nuit froide claire : visibilité thermique maximale, éviter mouvement exposé",
              "Sol chauffé par le soleil : après le coucher rayonne pendant des heures, peut masquer signatures sur fond chaud",
            ],
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Croire que camo visuel = camo thermique (aucune corrélation)",
              "Se couvrir uniquement avec vêtements standard contre optique thermique avancée",
              "S'arrêter fumer en position exposée — cigarette à 700°C, phare à km",
              "Laisser le moteur au ralenti pour « être prêt » — signature persistante",
              "Se regrouper sous un arbre à la pause : groupe humain = énorme blob IR",
              "Sous-estimer un Mavic 3T avec capteur thermique 640 — disponible commercialement",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front 2024-2026 la thermique est omniprésente : Mavic 3T, Autel EVO II Pro 640T, drones de nuit « Baba Yaga » avec FLIR, optiques russes IRBIS et PNV-10T. Règle opérationnelle partagée : on se déplace de nuit uniquement couvert par le terrain, en dispersion, avec un timing choisi (pluie, brouillard, crossover) ou sous couvertures thermiques dédiées. Les véhicules sont morts s'ils stationnent à découvert > 30 minutes en zone de vol thermique. La différence entre unités survivantes et perdues est presque toujours dans la discipline thermique — couvertures, dispersion, choix d'heure, cooldown moteur — plus que dans le kit haut de gamme. Une couverture mylar bien utilisée bat un véhicule moderne mal utilisé.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
