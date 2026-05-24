import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il comportamento anti-FPV è oggi parte della disciplina di base del fante in linea. Non si tratta di tecniche specialistiche ma di principi applicati a ogni minuto sul fronte: movimento, dispersione, cover, awareness di jamming amico. Questo capitolo è esclusivamente difensivo — NON descrive impiego di FPV o procedure offensive.",
    sections: [
      {
        heading: "I cinque principi anti-FPV",
        blocks: [
          {
            type: "p",
            text: "Non esiste contro-misura assoluta a un FPV. Esiste un sistema di principi che, applicati con disciplina costante, riducono drasticamente la probabilità di essere colpiti.",
          },
          {
            type: "table",
            headers: ["Principio", "Applicazione"],
            rows: [
              ["Awareness", "Ascolto continuo, scanning del cielo, riconoscimento RF/segnali di squadra"],
              ["Dispersione", "Mai concentrati, mai allineati, distanza ≥ 10 m senza copertura"],
              ["Cover overhead", "Sempre cercare protezione dall'alto: alberi, edifici, gallerie, reti"],
              ["Movimento", "Brevità delle soste, percorsi non lineari, mai stesso punto due volte"],
              ["Jamming awareness", "Conoscere effetti del jammer amico, posizione relativa, distanze utili"],
            ],
          },
        ],
      },
      {
        heading: "Awareness — ascolto e scanning",
        blocks: [
          {
            type: "p",
            text: "Il primo livello di difesa è il rilevamento precoce. Un FPV percepito a 200 m di distanza dà 5-10 secondi di tempo per agire; rilevato a 50 m, 1-2 secondi.",
          },
          {
            type: "ul",
            items: [
              "Un membro della squadra in sosta dedicato all'ascolto/scanning cielo a 360°",
              "Detector RF tattici (es. classe Bulat) se disponibili — allarme sonoro/vibro su emissioni FPV in banda",
              "Comunicazione: callout immediato \"DRONE\" o \"FPV\" su radio interna, breve, una sola parola",
              "Ricezione passiva: ascolto della rete superiore per warnings da OP avanzati",
              "Riconoscimento acustico: differenza tra Mavic (ronzio basso costante), FPV racing (acuto erratico), bomber notturno (rombo grosso lento)",
              "Vista: cercare punti neri mobili contro cielo, ombre rapide sul terreno",
            ],
          },
        ],
      },
      {
        heading: "Dispersione — non essere un cluster",
        blocks: [
          {
            type: "p",
            text: "Un FPV con carica frammentazione ha raggio letale 5-10 m, con HEAT (anticarro) 1-3 m. La dispersione trasforma una vittima in un caso isolato, non in una squadra perduta.",
          },
          {
            type: "ul",
            items: [
              "All'aperto: distanza minima 10-15 m tra elementi in movimento",
              "Fermi all'aperto: 20-30 m, mai allineati su strada o sentiero",
              "Veicoli: smontare e disperdere immediatamente all'arresto, non sostare sul mezzo",
              "Pause: scegliere posizioni che permettano dispersione naturale (alberi separati, muri spezzati)",
              "Evitare imbottigliamenti: passaggi obbligati (ponti, intersezioni) attraversati uno per uno con intervallo",
              "Comunicazione visiva pre-attacco: se il drone è già localizzato, indicare direzione di evasione opposta",
            ],
          },
          {
            type: "warn",
            title: "Il cluster vince sempre",
            body: "I peggiori AAR del fronte 2024-2026 documentano FPV che colpiscono gruppi di 4-8 persone strette. Singolo colpo = perdite multiple. La dispersione di 10 m basta a salvare la maggioranza.",
          },
        ],
      },
      {
        heading: "Cover overhead — usare il terreno",
        blocks: [
          {
            type: "p",
            text: "L'FPV viene dall'alto, ma la sua traiettoria d'attacco è laterale-discendente. Cover overhead, anche parziale, costringe il pilota a manovrare nello spazio 3D, riducendo la sua precisione e dandogli meno tempo.",
          },
          {
            type: "ul",
            items: [
              "Alberi densi: l'FPV deve volare basso fino al bersaglio, perdendo velocità e visibilità",
              "Edifici / strutture: bloccano l'avvicinamento diretto dal cielo",
              "Gallerie e trincee coperte: rifugio quasi totale se accessibili rapidamente",
              "Reti anti-drone: barriera meccanica, detonazione prematura della carica",
              "Camionette / autocarri con casing: cage protective intercetta carica prima del veicolo",
              "Sotto-veicolo: rifugio temporaneo se l'FPV non ha già fissato il mezzo come bersaglio",
            ],
          },
          {
            type: "callout",
            title: "Fogliame leggero non basta",
            body: "Un FPV può penetrare fogliame sottile o cadere attraverso fessure. La copertura overhead efficace ha massa fisica (legno spesso, muratura, terra, metallo).",
          },
        ],
      },
      {
        heading: "Movimento — disciplina temporale",
        blocks: [
          {
            type: "ul",
            items: [
              "Sosta minima: ogni stop visibile è un'opportunità per il pilota FPV",
              "Sprint corti tra cover, lunghezza < 30 m, mai linearmente continuo",
              "Variazione di rotta: cambiare percorso ogni transito, evitare \"sentieri della morte\"",
              "Orari: alba e tramonto sono ore di volo FPV intensificato — preferire transiti in ore meteo sfavorevole o cuore della notte",
              "Velocità di marcia: bilanciare tra rapidità (esposizione breve) e silenzio (acustico/respiratorio)",
              "Approccio a posizione coperta: ultimi 50 m sono i più pericolosi — sprint, non camminata",
            ],
          },
        ],
      },
      {
        heading: "Jamming amico — convivere con la bolla EM",
        blocks: [
          {
            type: "p",
            text: "Il jammer amico (di trincea o portato dalla squadra) è la prima difesa attiva. Ma genera effetti collaterali sulle proprie comunicazioni e ha limiti precisi che vanno conosciuti.",
          },
          {
            type: "ul",
            items: [
              "Raggio: jammer di squadra 50-200 m, jammer di trincea 200-500 m, sistemi veicolari maggiori",
              "Bande coperte: 2.4 GHz, 5.8 GHz, 900 MHz tipicamente — non sempre tutte simultaneamente",
              "Effetto collaterale: degrada anche le proprie comms se in stesse bande",
              "Limiti: FPV in fibra ottica è immune; FPV con link ELRS può essere parzialmente resiliente",
              "Posizione: stare dentro la bolla del jammer di squadra durante movimento; consapevole della distanza",
              "Disciplina: jammer acceso non sostituisce dispersione e cover — è strato addizionale",
            ],
          },
        ],
      },
      {
        heading: "Cosa NON fare",
        blocks: [
          {
            type: "ul",
            items: [
              "Sparare a un FPV in arrivo senza addestramento specifico — distrae e raramente funziona",
              "Restare in piedi a guardare per identificare il drone (riflesso comune fatale)",
              "Riunirsi attorno a un compagno colpito — il secondo FPV aspetta esattamente questo",
              "Filmare con telefono il drone in arrivo (curiosità documentata in casualty AAR)",
              "Affidarsi solo a jammer senza dispersione fisica",
              "Continuare la stessa rotta dopo un primo FPV — il secondo già conosce la direzione",
              "Sostare in spazio aperto per radio call non urgente",
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
              "Fidarsi della velocità di reazione personale (\"lo schiverò\" — non lo schivi)",
              "Ignorare il ronzio in lontananza come \"distante\"",
              "Pensare che il proprio jammer sia attivo quando in realtà è scarico o spento",
              "Sottovalutare droni in fibra ottica come \"rari\" (in espansione 2025-2026)",
              "Riposare in posizione comoda ma esposta (\"siamo nella retrovia\")",
              "Trasportare ferito senza pianificare protezione overhead lungo il percorso",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Tra le statistiche pubblicamente discusse del fronte 2024-2026, una grande percentuale delle perdite di fanteria su settori attivi è attribuita a FPV. La risposta dottrinale ucraina è stata l'integrazione del comportamento anti-FPV a livello di addestramento base, prima ancora che specialistico. Le brigate che hanno introdotto routine di scanning costante, dispersione fissa a 10-15 m, jammer di squadra e disciplina di sosta hanno ridotto significativamente perdite documentate in OSINT. Il messaggio operativo è univoco: il comportamento anti-FPV non è più una specializzazione, è la nuova baseline del soldato moderno. Un soldato che non opera in quel modo è una statistica futura.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Anti-FPV behaviour is today part of base infantry discipline on the line. It is not specialist technique but principles applied every minute on the front: movement, dispersion, cover, friendly-jamming awareness. This chapter is purely defensive — it does NOT describe FPV employment or offensive procedures.",
    sections: [
      {
        heading: "The five anti-FPV principles",
        blocks: [
          {
            type: "p",
            text: "There is no absolute counter-measure to an FPV. There is a system of principles which, applied with constant discipline, dramatically reduce the probability of being hit.",
          },
          {
            type: "table",
            headers: ["Principle", "Application"],
            rows: [
              ["Awareness", "Continuous listening, sky scanning, recognition of RF / team signals"],
              ["Dispersion", "Never bunched, never aligned, distance ≥ 10 m without cover"],
              ["Overhead cover", "Always seek overhead protection: trees, buildings, galleries, nets"],
              ["Movement", "Brief halts, non-linear routes, never same point twice"],
              ["Jamming awareness", "Know effects of friendly jammer, relative position, useful distances"],
            ],
          },
        ],
      },
      {
        heading: "Awareness — listen and scan",
        blocks: [
          {
            type: "p",
            text: "The first defence layer is early detection. An FPV picked up at 200 m gives 5-10 seconds to act; detected at 50 m, 1-2 seconds.",
          },
          {
            type: "ul",
            items: [
              "One team member at halt dedicated to listening/scanning sky 360°",
              "Tactical RF detectors (e.g. Bulat class) where available — audio/vibration alarm on FPV-band emissions",
              "Comms: immediate \"DRONE\" or \"FPV\" callout on intra-team radio, brief, single word",
              "Passive reception: monitor higher net for warnings from forward OPs",
              "Acoustic recognition: difference between Mavic (steady low whine), FPV racing (sharp erratic), night bomber (heavy slow rumble)",
              "Sight: scan for moving black dots against sky, fast shadows on ground",
            ],
          },
        ],
      },
      {
        heading: "Dispersion — do not be a cluster",
        blocks: [
          {
            type: "p",
            text: "An FPV with fragmentation charge has a lethal radius of 5-10 m, with HEAT 1-3 m. Dispersion turns a casualty into an isolated case, not a lost squad.",
          },
          {
            type: "ul",
            items: [
              "In open: minimum 10-15 m between moving elements",
              "Halted in open: 20-30 m, never aligned on road or trail",
              "Vehicles: dismount and disperse immediately on halt, do not linger on vehicle",
              "Halts: choose positions allowing natural dispersion (separate trees, broken walls)",
              "Avoid bottlenecks: forced passages (bridges, junctions) crossed one by one with interval",
              "Pre-attack visual comm: if the drone is already spotted, indicate opposite evasion direction",
            ],
          },
          {
            type: "warn",
            title: "Cluster always loses",
            body: "The worst 2024-2026 AARs document FPVs hitting tight groups of 4-8 people. One hit = multiple casualties. 10 m dispersion is enough to save most.",
          },
        ],
      },
      {
        heading: "Overhead cover — use the terrain",
        blocks: [
          {
            type: "p",
            text: "The FPV comes from above, but its attack trajectory is lateral-descending. Overhead cover, even partial, forces the pilot to manoeuvre in 3D, reducing accuracy and giving him less time.",
          },
          {
            type: "ul",
            items: [
              "Dense trees: FPV must fly low to target, losing speed and visibility",
              "Buildings / structures: block direct approach from sky",
              "Galleries and covered trenches: near-total shelter if accessed quickly",
              "Anti-drone nets: mechanical barrier, premature charge detonation",
              "Trucks / carriers with casing: protective cage intercepts charge before vehicle",
              "Under vehicle: temporary shelter if FPV has not already fixed vehicle as target",
            ],
          },
          {
            type: "callout",
            title: "Light foliage is not enough",
            body: "An FPV can penetrate thin foliage or drop through gaps. Effective overhead cover has physical mass (thick wood, masonry, earth, metal).",
          },
        ],
      },
      {
        heading: "Movement — time discipline",
        blocks: [
          {
            type: "ul",
            items: [
              "Minimum halt: every visible stop is opportunity for the FPV pilot",
              "Short sprints between cover, length < 30 m, never continuously linear",
              "Route variation: change path every transit, avoid \"death trails\"",
              "Hours: dawn and dusk are intensified FPV-flight hours — prefer transit in unfavourable weather or deep night",
              "March speed: balance speed (short exposure) and silence (acoustic/breathing)",
              "Approach to covered position: last 50 m most dangerous — sprint, not walk",
            ],
          },
        ],
      },
      {
        heading: "Friendly jamming — living with the EM bubble",
        blocks: [
          {
            type: "p",
            text: "The friendly jammer (trench or team-carried) is the first active defence. But it has side effects on own comms and precise limits that must be known.",
          },
          {
            type: "ul",
            items: [
              "Range: team jammer 50-200 m, trench jammer 200-500 m, larger vehicle systems",
              "Covered bands: 2.4 GHz, 5.8 GHz, 900 MHz typically — not always all simultaneously",
              "Side effect: degrades own comms if in same bands",
              "Limits: fiber-optic FPV is immune; ELRS-link FPV partially resilient",
              "Position: stay inside team jammer bubble during movement; aware of distance",
              "Discipline: jammer on does not replace dispersion and cover — it is an additional layer",
            ],
          },
        ],
      },
      {
        heading: "What NOT to do",
        blocks: [
          {
            type: "ul",
            items: [
              "Shoot at incoming FPV without specific training — distracts and rarely works",
              "Stand to identify the drone (common fatal reflex)",
              "Bunch around a hit teammate — second FPV waits for exactly that",
              "Film incoming drone with phone (documented in casualty AARs)",
              "Rely only on jammer without physical dispersion",
              "Continue same route after first FPV — second already knows the direction",
              "Halt in open space for non-urgent radio call",
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
              "Trusting personal reaction speed (\"I'll dodge it\" — you won't)",
              "Ignoring distant buzzing as \"far away\"",
              "Thinking own jammer is on when actually flat or off",
              "Underestimating fiber-optic drones as \"rare\" (expanding 2025-2026)",
              "Resting in comfortable but exposed position (\"we're in the rear\")",
              "Casualty transport without planning overhead protection along route",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Among the publicly discussed 2024-2026 front statistics, a large percentage of infantry losses on active sectors is attributed to FPVs. The Ukrainian doctrinal response has been integration of anti-FPV behaviour at base training level, before any specialist track. Brigades that introduced constant scanning routine, fixed 10-15 m dispersion, team jammers and halt discipline reduced significantly losses documented in OSINT. The operational message is univocal: anti-FPV behaviour is no longer a specialisation, it is the new baseline of the modern soldier. A soldier who does not operate that way is a future statistic.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O comportamento anti-FPV é hoje parte da disciplina base do fuzileiro avançado. Não é técnica especializada, são princípios aplicados a cada minuto no front: movimento, dispersão, cobertura, awareness de jamming amigo. Este capítulo é puramente defensivo — NÃO descreve emprego de FPV ou procedimentos ofensivos.",
    sections: [
      {
        heading: "Os cinco princípios anti-FPV",
        blocks: [
          {
            type: "p",
            text: "Não existe contramedida absoluta a um FPV. Existe um sistema de princípios que, aplicados com disciplina constante, reduzem drasticamente a probabilidade de ser atingido.",
          },
          {
            type: "table",
            headers: ["Princípio", "Aplicação"],
            rows: [
              ["Awareness", "Escuta contínua, scanning do céu, reconhecimento RF / sinais de equipe"],
              ["Dispersão", "Nunca agrupados, nunca alinhados, distância ≥ 10 m sem cobertura"],
              ["Cobertura overhead", "Sempre buscar proteção do alto: árvores, edifícios, galerias, redes"],
              ["Movimento", "Paradas breves, rotas não lineares, nunca o mesmo ponto duas vezes"],
              ["Jamming awareness", "Saber efeitos do jammer amigo, posição relativa, distâncias úteis"],
            ],
          },
        ],
      },
      {
        heading: "Awareness — escuta e scanning",
        blocks: [
          {
            type: "p",
            text: "A primeira camada de defesa é detecção precoce. Um FPV percebido a 200 m dá 5-10 segundos para agir; detectado a 50 m, 1-2 segundos.",
          },
          {
            type: "ul",
            items: [
              "Um membro da equipe em parada dedicado a escuta/scanning de céu 360°",
              "Detectores RF táticos (ex. classe Bulat) se disponíveis — alarme sonoro/vibro em emissões FPV em banda",
              "Comms: callout imediato \"DRONE\" ou \"FPV\" em rádio interno, breve, uma palavra",
              "Recepção passiva: monitorar net superior para warnings de OPs avançados",
              "Reconhecimento acústico: diferença entre Mavic (zumbido baixo constante), FPV racing (agudo errático), bombardeiro noturno (estrondo grosso lento)",
              "Visão: buscar pontos pretos móveis contra céu, sombras rápidas no solo",
            ],
          },
        ],
      },
      {
        heading: "Dispersão — não ser um cluster",
        blocks: [
          {
            type: "p",
            text: "Um FPV com carga de fragmentação tem raio letal 5-10 m, com HEAT 1-3 m. A dispersão transforma uma vítima em caso isolado, não em uma esquadra perdida.",
          },
          {
            type: "ul",
            items: [
              "Em aberto: distância mínima 10-15 m entre elementos em movimento",
              "Parados em aberto: 20-30 m, nunca alinhados em estrada ou trilha",
              "Veículos: desembarcar e dispersar imediatamente na parada, não ficar no veículo",
              "Paradas: escolher posições que permitam dispersão natural (árvores separadas, muros quebrados)",
              "Evitar gargalos: passagens forçadas (pontes, cruzamentos) atravessadas um a um com intervalo",
              "Comunicação visual pré-ataque: se o drone já está localizado, indicar direção de evasão oposta",
            ],
          },
          {
            type: "warn",
            title: "O cluster sempre perde",
            body: "Os piores AARs do front 2024-2026 documentam FPVs atingindo grupos compactos de 4-8 pessoas. Um impacto = múltiplas vítimas. 10 m de dispersão basta para salvar a maioria.",
          },
        ],
      },
      {
        heading: "Cobertura overhead — usar o terreno",
        blocks: [
          {
            type: "p",
            text: "O FPV vem do alto, mas sua trajetória de ataque é lateral-descendente. Cobertura overhead, mesmo parcial, força o piloto a manobrar em 3D, reduzindo precisão e dando-lhe menos tempo.",
          },
          {
            type: "ul",
            items: [
              "Árvores densas: o FPV precisa voar baixo até o alvo, perdendo velocidade e visibilidade",
              "Edifícios / estruturas: bloqueiam aproximação direta do céu",
              "Galerias e trincheiras cobertas: abrigo quase total se acessadas rápido",
              "Redes anti-drone: barreira mecânica, detonação prematura da carga",
              "Caminhões / blindados com casing: gaiola protetora intercepta a carga antes do veículo",
              "Embaixo do veículo: abrigo temporário se FPV ainda não fixou o veículo como alvo",
            ],
          },
          {
            type: "callout",
            title: "Folhagem fina não basta",
            body: "Um FPV pode penetrar folhagem fina ou cair por frestas. Cobertura overhead eficaz tem massa física (madeira espessa, alvenaria, terra, metal).",
          },
        ],
      },
      {
        heading: "Movimento — disciplina temporal",
        blocks: [
          {
            type: "ul",
            items: [
              "Parada mínima: cada stop visível é oportunidade para o piloto FPV",
              "Sprints curtos entre coberturas, comprimento < 30 m, nunca linearmente contínuo",
              "Variação de rota: trocar caminho a cada trânsito, evitar \"trilhas da morte\"",
              "Horários: alvorecer e anoitecer são horas de voo FPV intensificado — preferir trânsito em meteo desfavorável ou madrugada profunda",
              "Velocidade de marcha: equilíbrio entre rapidez (exposição curta) e silêncio (acústico/respiratório)",
              "Aproximação a posição coberta: últimos 50 m os mais perigosos — sprint, não caminhada",
            ],
          },
        ],
      },
      {
        heading: "Jamming amigo — conviver com a bolha EM",
        blocks: [
          {
            type: "p",
            text: "O jammer amigo (de trincheira ou de equipe) é a primeira defesa ativa. Mas gera efeitos colaterais nas próprias comms e tem limites precisos que precisam ser conhecidos.",
          },
          {
            type: "ul",
            items: [
              "Alcance: jammer de equipe 50-200 m, jammer de trincheira 200-500 m, sistemas veiculares maiores",
              "Bandas cobertas: 2.4 GHz, 5.8 GHz, 900 MHz tipicamente — nem sempre todas simultaneamente",
              "Efeito colateral: degrada também as próprias comms se em mesmas bandas",
              "Limites: FPV em fibra ótica é imune; FPV com link ELRS parcialmente resiliente",
              "Posição: ficar dentro da bolha do jammer de equipe em movimento; consciente da distância",
              "Disciplina: jammer ligado não substitui dispersão e cobertura — é camada adicional",
            ],
          },
        ],
      },
      {
        heading: "O que NÃO fazer",
        blocks: [
          {
            type: "ul",
            items: [
              "Atirar em FPV chegando sem treinamento específico — distrai e raramente funciona",
              "Ficar em pé para identificar o drone (reflexo comum fatal)",
              "Aglomerar em torno de companheiro atingido — segundo FPV espera exatamente isso",
              "Filmar drone chegando com celular (curiosidade documentada em casualty AAR)",
              "Confiar só em jammer sem dispersão física",
              "Continuar mesma rota após primeiro FPV — o segundo já conhece a direção",
              "Parar em espaço aberto para chamada de rádio não urgente",
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
              "Confiar na velocidade de reação pessoal (\"vou desviar\" — não desvia)",
              "Ignorar zumbido distante como \"longe\"",
              "Achar que o próprio jammer está ligado quando está descarregado ou desligado",
              "Subestimar drones em fibra ótica como \"raros\" (em expansão 2025-2026)",
              "Descansar em posição confortável mas exposta (\"estamos na retaguarda\")",
              "Transporte de ferido sem planejar proteção overhead ao longo da rota",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Entre as estatísticas publicamente discutidas do front 2024-2026, grande percentual de perdas de infantaria em setores ativos é atribuído a FPVs. A resposta doutrinária ucraniana foi a integração do comportamento anti-FPV no treinamento base, antes mesmo de qualquer trilha especialista. Brigadas que introduziram rotinas de scanning constante, dispersão fixa de 10-15 m, jammers de equipe e disciplina de parada reduziram significativamente perdas documentadas em OSINT. Mensagem operacional unívoca: comportamento anti-FPV não é mais especialização, é o novo baseline do soldado moderno. Um soldado que não opera assim é uma estatística futura.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le comportement anti-FPV fait aujourd'hui partie de la discipline de base du fantassin en ligne. Ce ne sont pas des techniques spécialisées mais des principes appliqués chaque minute sur le front : mouvement, dispersion, couvert, awareness du brouillage ami. Ce chapitre est purement défensif — il NE décrit PAS l'emploi de FPV ou des procédures offensives.",
    sections: [
      {
        heading: "Les cinq principes anti-FPV",
        blocks: [
          {
            type: "p",
            text: "Il n'existe pas de contre-mesure absolue à un FPV. Il existe un système de principes qui, appliqués avec une discipline constante, réduisent drastiquement la probabilité d'être touché.",
          },
          {
            type: "table",
            headers: ["Principe", "Application"],
            rows: [
              ["Awareness", "Écoute continue, scan du ciel, reconnaissance RF / signaux d'équipe"],
              ["Dispersion", "Jamais regroupés, jamais alignés, distance ≥ 10 m sans couvert"],
              ["Couvert overhead", "Toujours chercher protection d'en haut : arbres, bâtiments, galeries, filets"],
              ["Mouvement", "Haltes brèves, itinéraires non linéaires, jamais le même point deux fois"],
              ["Jamming awareness", "Connaître les effets du brouilleur ami, position relative, distances utiles"],
            ],
          },
        ],
      },
      {
        heading: "Awareness — écouter et scanner",
        blocks: [
          {
            type: "p",
            text: "La première couche de défense est la détection précoce. Un FPV repéré à 200 m donne 5-10 secondes pour agir ; détecté à 50 m, 1-2 secondes.",
          },
          {
            type: "ul",
            items: [
              "Un membre d'équipe à la halte dédié à l'écoute/scan ciel à 360°",
              "Détecteurs RF tactiques (par ex. classe Bulat) si disponibles — alarme audio/vibrante sur émissions FPV en bande",
              "Comms : callout immédiat « DRONE » ou « FPV » sur radio interne, bref, un seul mot",
              "Réception passive : surveiller le net supérieur pour warnings d'OPs avancés",
              "Reconnaissance acoustique : différence entre Mavic (bourdon bas constant), FPV racing (aigu erratique), bombardier de nuit (grondement lourd lent)",
              "Vue : chercher points noirs mobiles contre le ciel, ombres rapides au sol",
            ],
          },
        ],
      },
      {
        heading: "Dispersion — ne pas être un cluster",
        blocks: [
          {
            type: "p",
            text: "Un FPV avec charge à fragmentation a un rayon létal de 5-10 m, avec HEAT 1-3 m. La dispersion transforme une victime en cas isolé, pas en escouade perdue.",
          },
          {
            type: "ul",
            items: [
              "En ouvert : distance minimale 10-15 m entre éléments en mouvement",
              "À l'arrêt en ouvert : 20-30 m, jamais alignés sur route ou sentier",
              "Véhicules : débarquer et disperser immédiatement à l'arrêt, ne pas rester sur le véhicule",
              "Haltes : choisir positions permettant dispersion naturelle (arbres séparés, murs brisés)",
              "Éviter goulots : passages forcés (ponts, intersections) traversés un par un avec intervalle",
              "Comm visuelle pré-attaque : si le drone est déjà repéré, indiquer direction d'évasion opposée",
            ],
          },
          {
            type: "warn",
            title: "Le cluster perd toujours",
            body: "Les pires AARs du front 2024-2026 documentent des FPV frappant des groupes serrés de 4-8 personnes. Un impact = pertes multiples. 10 m de dispersion suffisent à sauver la majorité.",
          },
        ],
      },
      {
        heading: "Couvert overhead — utiliser le terrain",
        blocks: [
          {
            type: "p",
            text: "Le FPV vient d'en haut, mais sa trajectoire d'attaque est latérale-descendante. Le couvert overhead, même partiel, force le pilote à manœuvrer en 3D, réduisant sa précision et lui donnant moins de temps.",
          },
          {
            type: "ul",
            items: [
              "Arbres denses : le FPV doit voler bas jusqu'à la cible, perdant vitesse et visibilité",
              "Bâtiments / structures : bloquent l'approche directe depuis le ciel",
              "Galeries et tranchées couvertes : refuge quasi total si accédées rapidement",
              "Filets anti-drone : barrière mécanique, détonation prématurée de la charge",
              "Camions / blindés avec casing : cage protectrice intercepte la charge avant le véhicule",
              "Sous le véhicule : refuge temporaire si le FPV n'a pas déjà fixé le véhicule comme cible",
            ],
          },
          {
            type: "callout",
            title: "Le feuillage léger ne suffit pas",
            body: "Un FPV peut pénétrer un feuillage mince ou tomber par des interstices. Le couvert overhead efficace a une masse physique (bois épais, maçonnerie, terre, métal).",
          },
        ],
      },
      {
        heading: "Mouvement — discipline temporelle",
        blocks: [
          {
            type: "ul",
            items: [
              "Halte minimale : chaque arrêt visible est une opportunité pour le pilote FPV",
              "Sprints courts entre couverts, longueur < 30 m, jamais continûment linéaire",
              "Variation d'itinéraire : changer de chemin à chaque transit, éviter les « sentiers de la mort »",
              "Heures : aube et crépuscule sont des heures de vol FPV intensifié — préférer transit par météo défavorable ou cœur de nuit",
              "Vitesse de marche : équilibrer rapidité (exposition courte) et silence (acoustique/respiratoire)",
              "Approche d'une position couverte : derniers 50 m les plus dangereux — sprint, pas marche",
            ],
          },
        ],
      },
      {
        heading: "Brouillage ami — vivre avec la bulle EM",
        blocks: [
          {
            type: "p",
            text: "Le brouilleur ami (de tranchée ou porté par l'équipe) est la première défense active. Mais il a des effets de bord sur ses propres comms et des limites précises à connaître.",
          },
          {
            type: "ul",
            items: [
              "Portée : brouilleur d'équipe 50-200 m, brouilleur de tranchée 200-500 m, systèmes véhicule plus larges",
              "Bandes couvertes : 2.4 GHz, 5.8 GHz, 900 MHz typiquement — pas toujours toutes simultanément",
              "Effet de bord : dégrade aussi ses propres comms si en mêmes bandes",
              "Limites : FPV fibre optique immunisé ; FPV avec lien ELRS partiellement résilient",
              "Position : rester dans la bulle du brouilleur d'équipe en mouvement ; conscient de la distance",
              "Discipline : brouilleur allumé ne remplace pas dispersion et couvert — c'est une couche additionnelle",
            ],
          },
        ],
      },
      {
        heading: "Ce qu'il NE faut PAS faire",
        blocks: [
          {
            type: "ul",
            items: [
              "Tirer sur un FPV entrant sans entraînement spécifique — distrait et fonctionne rarement",
              "Rester debout pour identifier le drone (réflexe courant fatal)",
              "Se regrouper autour d'un camarade touché — le deuxième FPV attend exactement cela",
              "Filmer le drone entrant au téléphone (curiosité documentée en casualty AARs)",
              "Compter seulement sur le brouilleur sans dispersion physique",
              "Continuer le même itinéraire après un premier FPV — le second connaît déjà la direction",
              "Faire halte en espace ouvert pour appel radio non urgent",
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
              "Faire confiance à sa vitesse de réaction personnelle (« je l'esquiverai » — non)",
              "Ignorer un bourdonnement distant comme « loin »",
              "Croire que son propre brouilleur est allumé alors qu'il est à plat ou éteint",
              "Sous-estimer les drones fibre optique comme « rares » (en expansion 2025-2026)",
              "Se reposer en position confortable mais exposée (« on est à l'arrière »)",
              "Transport de blessé sans planifier protection overhead le long du parcours",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Parmi les statistiques publiquement discutées du front 2024-2026, un fort pourcentage des pertes d'infanterie sur secteurs actifs est attribué aux FPV. La réponse doctrinale ukrainienne a été l'intégration du comportement anti-FPV au niveau de l'entraînement de base, avant toute spécialisation. Les brigades ayant introduit routine de scanning constant, dispersion fixe à 10-15 m, brouilleurs d'équipe et discipline de halte ont significativement réduit les pertes documentées en OSINT. Message opérationnel univoque : le comportement anti-FPV n'est plus une spécialisation, c'est la nouvelle baseline du soldat moderne. Un soldat qui n'opère pas ainsi est une statistique future.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
