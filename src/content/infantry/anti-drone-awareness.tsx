import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La saturazione di droni — di ricognizione, di osservazione di tiro, FPV con cariche varie — è la singola caratteristica che più distingue il fronte ucraino del 2024-2026 da ogni conflitto precedente. La fanteria moderna deve riconoscere, classificare e reagire ai droni come parte della propria coscienza tattica di base. Questo capitolo descrive principi di riconoscimento, comportamento difensivo e considerazioni di mitigazione — non procedure offensive contro-drone.",
    sections: [
      {
        heading: "Classificazione dei droni",
        blocks: [
          {
            type: "p",
            text: "Il termine 'drone' copre realtà operative molto diverse. La risposta corretta dipende dal tipo, e il riconoscimento veloce è il primo skill da apprendere.",
          },
          {
            type: "table",
            headers: ["Tipo", "Quota tipica", "Funzione", "Indicatori"],
            rows: [
              ["Quadcopter recon (es. Mavic)", "30-300 m", "Osservazione visiva, correzione fires", "Suono di motorini a frequenza alta, sospeso o spostamento lento"],
              ["FPV monouso", "5-200 m", "Attacco kinetico con carica", "Volo veloce, rumore aggressivo, traiettoria diretta verso target"],
              ["Bomber drone (es. Baba Yaga)", "100-500 m", "Rilascio di munizioni", "Drone più grande, multirotore, suono profondo"],
              ["Fixed-wing ISR (es. Orlan-10)", "300-2000 m", "Ricognizione ampia, jamming", "Suono di motore a scoppio, traiettoria curva"],
              ["Loitering munition (Shahed, Lancet)", "Variabile", "Attacco di precisione su target identificato", "Suono caratteristico (motoclasse, 2-tempi), traiettoria diretta"],
              ["Quadcopter civile riconvertito", "Bassa", "Spotting tattico, drop di granate", "Identico a uso civile, può essere ostile"],
            ],
          },
          {
            type: "p",
            text: "La distinzione tra drone amico e nemico in volo è spesso impossibile a vista in zone contese. La regola operativa è: ogni drone non identificato è ostile finché provato altrimenti. La rapida segnalazione al comando permette ai droni amici di confermarsi.",
          },
        ],
      },
      {
        heading: "Riconoscimento per suono",
        blocks: [
          {
            type: "p",
            text: "L'identificazione acustica è il singolo skill più importante anti-drone. Spesso il suono precede la vista di alcuni secondi — il tempo necessario per coprirsi. La pratica di ascolto e classificazione è una abitudine da costruire.",
          },
          {
            type: "ul",
            items: [
              "FPV: frequenza acuta, motorino elettrico, intensità che cresce velocemente",
              "Quadcopter di osservazione: frequenza simile a FPV ma stabile, non in accelerazione",
              "Bomber drone: suono più basso e profondo, multirotore pesante",
              "Fixed-wing: motore a scoppio o elettrico, suono costante a quota più alta",
              "Loitering munition (Shahed): caratteristico motoscooter a 2-tempi, suono prolungato",
              "Le condizioni meteorologiche modificano la propagazione: vento e neve attutiscono, nebbia trasmette suono",
            ],
          },
          {
            type: "callout",
            title: "DISCIPLINA ACUSTICA",
            body: "L'ascolto efficace di droni richiede silenzio personale: niente conversazione durante il movimento, niente musica, niente cuffie acustiche normali. In trincea o in posizione, una persona ha sempre la responsabilità dell'ascolto verso l'alto.",
          },
        ],
      },
      {
        heading: "Comportamento difensivo immediato",
        blocks: [
          {
            type: "p",
            text: "Quando un drone viene rilevato, la risposta deve essere immediata e basata sul tipo. Le risposte sbagliate hanno conseguenze documentate sul fronte ucraino.",
          },
          {
            type: "table",
            headers: ["Drone identificato", "Risposta immediata"],
            rows: [
              ["Quadcopter recon stabile (osservando)", "Cessare ogni movimento, copertura visiva, non sparare (rivelerebbe posizione)"],
              ["FPV in approccio veloce", "Copertura immediata (cantina, edificio, alberi densi). Vie di fuga laterali"],
              ["Bomber drone", "Copertura sotterranea preferenziale. Coperture rigide superiori"],
              ["Fixed-wing ISR", "Cessare attività osservabili. Continuare la missione se l'identificazione è valida"],
              ["Loitering munition (Shahed)", "Copertura migliore disponibile. Non sparare se non con AA specifica"],
              ["Drone non identificato", "Trattare come ostile. Copertura, segnalazione radio al comando"],
            ],
          },
          {
            type: "warn",
            title: "ERRORE COMUNE",
            body: "Sparare a un drone con arma personale è quasi sempre inutile e quasi sempre dannoso. Inutile: la probabilità di abbattere un drone in movimento con fucile è bassissima. Dannoso: lo sparo rivela la posizione amica al drone stesso (operatore vede il muzzle flash) e ai sistemi di sorveglianza nemica. Sparare a un drone è giustificato solo con armi anti-drone dedicate (shotgun specializzati, AA portatile) e solo quando autorizzato dalla SOP.",
          },
        ],
      },
      {
        heading: "Protezione passiva",
        blocks: [
          {
            type: "p",
            text: "La protezione passiva — disciplina di firma e copertura — è il primo livello di anti-drone. Una posizione che il drone non vede non viene ingaggiata.",
          },
          {
            type: "ul",
            items: [
              "Copertura superiore: reti, tetti rigidi, vegetazione densa, edifici",
              "Discrezione termica: niente fuochi, niente cucina aperta, distanza da motori caldi",
              "Movimento sotto copertura: passare da una copertura all'altra senza esposizione",
              "Dispersione del personale: un singolo drone non può colpire tutti se dispersi",
              "Disciplina di firma EM: i droni FPV usano canali video specifici, la rilevazione di firma può precedere la vista",
              "Mascheramento di veicoli: reti, ombre, dissimulazione lateralmente e dall'alto",
            ],
          },
        ],
      },
      {
        heading: "Protezione attiva (cenni)",
        blocks: [
          {
            type: "p",
            text: "La protezione attiva include sistemi che intercettano, jammano o abbattono droni. Sono materiale di team specializzati e non di fanteria leggera. Il volontario internazionale deve conoscere l'esistenza ma raramente li opera direttamente.",
          },
          {
            type: "ul",
            items: [
              "EW jamming portatile: bolla di protezione di alcune decine di metri",
              "Sistemi AA dedicati anti-drone (shotgun, fucili speciali)",
              "Drone counter-FPV: drone amico che intercetta o disturba il drone nemico",
              "Sistemi automatici di posizioni fisse (raro, in HUR/SSO)",
              "Sistemi a microonde direzionate (estremamente rari sul fronte attuale)",
            ],
          },
        ],
      },
      {
        heading: "EW e jamming",
        blocks: [
          {
            type: "p",
            text: "L'ambiente EW del fronte ucraino è il più intenso al mondo. Sistemi russi (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) e ucraini operano costantemente, modificando in tempo reale la usabilità di frequenze per droni e radio. La conoscenza del proprio ambiente EW è parte del briefing.",
          },
          {
            type: "ul",
            items: [
              "Jamming di banda larga: rompe il segnale del drone, può atterrarlo o farlo deviare",
              "Spoofing GPS: induce drone amico o nemico a deviare dalla rotta",
              "Jamming controllo: rompe il link operatore-drone — il drone perde guida",
              "Jamming video: rompe il video del FPV, riducendo la capacità di colpire bersaglio piccolo",
              "L'EW è bidirezionale: l'azione EW amica rivela posizione del jammer al nemico SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni notturne",
        blocks: [
          {
            type: "p",
            text: "I droni operano di notte con termocamere e visione notturna. La notte non è più la sicurezza che era nel ventesimo secolo. La firma termica del corpo umano, dei motori e delle posizioni di calore è visibile da drone anche in oscurità totale.",
          },
          {
            type: "ul",
            items: [
              "Niente luce visibile o IR senza copertura: il drone IR rileva entrambe",
              "Le posizioni di calore in vegetazione fitta sono ancora visibili termicamente",
              "La nebbia e la pioggia degradano termiche e ottica, riducendo la capacità del drone",
              "Il vento forte rende difficile per il quadcopter il volo stabile",
              "Le notti senza luna favoriscono comunque l'operazione termica nemica",
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
              "Sparare al drone con arma personale invece di cercare copertura",
              "Trattare ogni rumore di motorino come falso allarme",
              "Affidarsi a 'la mia camuffatura' invece che a copertura superiore",
              "Continuare a muoversi mentre il drone osserva, sperando di non essere visto",
              "Concentrarsi in gruppi sotto cielo aperto",
              "Ignorare il drone come 'amico' senza verificare con comando",
              "Sottovalutare l'estensione del raggio FPV (10-25 km dalla base)",
              "Smartwatch e fitness tracker accesi che firmano EM in zona FPV",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "La saturazione FPV sul fronte ucraino ha modificato la fanteria leggera in modo permanente. Il movimento di unità più grandi del fire team in spazi aperti è quasi impossibile in zone calde. La logistica veicolare avanza in notte e in copertura. L'OP che spara a un drone con un fucile rivela la sua posizione. Il volontario internazionale deve interiorizzare una verità non intuitiva: il drone è il nemico più probabile di morte, non il soldato russo che vede a 200 metri. La disciplina di firma, la copertura superiore, la dispersione e il riconoscimento acustico sono la prima linea di difesa, prima di qualsiasi sistema attivo.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Drone saturation — reconnaissance, fire-spotting, FPV with various warheads — is the single characteristic that most distinguishes the 2024-2026 Ukrainian front from any previous conflict. Modern infantry must recognise, classify and react to drones as part of baseline tactical awareness. This chapter describes recognition principles, defensive behaviour and mitigation considerations — not offensive counter-drone procedures.",
    sections: [
      {
        heading: "Drone classification",
        blocks: [
          {
            type: "p",
            text: "The term 'drone' covers very different operational realities. The correct response depends on the type, and quick recognition is the first skill to learn.",
          },
          {
            type: "table",
            headers: ["Type", "Typical altitude", "Function", "Indicators"],
            rows: [
              ["Quadcopter recon (e.g. Mavic)", "30-300 m", "Visual observation, fires correction", "High-pitch motor sound, hovering or slow movement"],
              ["Single-use FPV", "5-200 m", "Kinetic attack with warhead", "Fast flight, aggressive noise, direct trajectory to target"],
              ["Bomber drone (e.g. Baba Yaga)", "100-500 m", "Munition drop", "Larger multirotor drone, deeper sound"],
              ["Fixed-wing ISR (e.g. Orlan-10)", "300-2000 m", "Wide reconnaissance, jamming", "Combustion engine sound, curved trajectory"],
              ["Loitering munition (Shahed, Lancet)", "Variable", "Precision strike on identified target", "Characteristic 2-stroke moped sound, direct trajectory"],
              ["Repurposed civilian quadcopter", "Low", "Tactical spotting, grenade drop", "Identical to civilian use, may be hostile"],
            ],
          },
          {
            type: "p",
            text: "Distinguishing friendly from hostile drone in flight is often impossible by sight in contested areas. The operational rule is: every unidentified drone is hostile until proven otherwise. Rapid reporting to command lets friendly drones identify themselves.",
          },
        ],
      },
      {
        heading: "Sound recognition",
        blocks: [
          {
            type: "p",
            text: "Acoustic identification is the single most important anti-drone skill. Sound often precedes sight by seconds — the time needed to take cover. Listening and classifying are habits to build.",
          },
          {
            type: "ul",
            items: [
              "FPV: high frequency, electric motor, quickly growing intensity",
              "Observation quadcopter: similar frequency to FPV but stable, not accelerating",
              "Bomber drone: deeper sound, heavy multirotor",
              "Fixed-wing: combustion or electric engine, constant sound at higher altitude",
              "Loitering munition (Shahed): characteristic 2-stroke moped, prolonged sound",
              "Weather changes propagation: wind and snow dampen, fog transmits sound",
            ],
          },
          {
            type: "callout",
            title: "ACOUSTIC DISCIPLINE",
            body: "Effective drone listening requires personal silence: no chatter during movement, no music, no normal acoustic earbuds. In trench or position, one person always has responsibility for listening upward.",
          },
        ],
      },
      {
        heading: "Immediate defensive behaviour",
        blocks: [
          {
            type: "p",
            text: "When a drone is detected, the response must be immediate and type-based. Wrong responses have documented consequences on the Ukrainian front.",
          },
          {
            type: "table",
            headers: ["Identified drone", "Immediate response"],
            rows: [
              ["Stable observation quadcopter", "Cease all movement, visual cover, do not fire (would reveal position)"],
              ["Fast-approaching FPV", "Immediate cover (basement, building, dense trees). Lateral egress routes"],
              ["Bomber drone", "Subterranean cover preferred. Rigid overhead cover"],
              ["Fixed-wing ISR", "Cease observable activity. Continue mission if ID is valid"],
              ["Loitering munition (Shahed)", "Best available cover. Do not fire unless with specific AA"],
              ["Unidentified drone", "Treat as hostile. Cover, report by radio to command"],
            ],
          },
          {
            type: "warn",
            title: "COMMON ERROR",
            body: "Shooting at a drone with a personal weapon is almost always useless and almost always harmful. Useless: probability of downing a moving drone with a rifle is very low. Harmful: the shot reveals the friendly position to the drone itself (operator sees the muzzle flash) and to enemy surveillance. Shooting at a drone is justified only with dedicated AA weapons (specialised shotguns, portable AA) and only when authorised by SOP.",
          },
        ],
      },
      {
        heading: "Passive protection",
        blocks: [
          {
            type: "p",
            text: "Passive protection — signature discipline and cover — is the first anti-drone layer. A position the drone does not see is not engaged.",
          },
          {
            type: "ul",
            items: [
              "Overhead cover: nets, rigid roofs, dense vegetation, buildings",
              "Thermal discretion: no fires, no open cooking, distance from hot engines",
              "Movement in cover: pass from one cover to the next without exposure",
              "Personnel dispersion: a single drone cannot hit all if dispersed",
              "EM signature discipline: FPV drones use specific video channels, detection can precede sight",
              "Vehicle masking: nets, shade, concealment laterally and from above",
            ],
          },
        ],
      },
      {
        heading: "Active protection (notes)",
        blocks: [
          {
            type: "p",
            text: "Active protection includes systems that intercept, jam or down drones. These are specialised-team material, not light infantry. The international volunteer must know they exist but rarely operates them directly.",
          },
          {
            type: "ul",
            items: [
              "Portable EW jamming: protective bubble a few dozen metres wide",
              "Dedicated anti-drone AA systems (shotguns, special rifles)",
              "Counter-FPV drones: friendly drones intercepting or disrupting the enemy drone",
              "Fixed-position automatic systems (rare, in HUR/SSO)",
              "Directed microwave systems (extremely rare on the current front)",
            ],
          },
        ],
      },
      {
        heading: "EW and jamming",
        blocks: [
          {
            type: "p",
            text: "The EW environment of the Ukrainian front is the most intense in the world. Russian systems (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) and Ukrainian ones operate constantly, changing usable frequencies for drones and radio in real time. Knowing your EW environment is part of the briefing.",
          },
          {
            type: "ul",
            items: [
              "Wideband jamming: breaks the drone signal, can land it or divert it",
              "GPS spoofing: induces friendly or hostile drones to deviate from route",
              "Control jamming: breaks the operator-drone link — drone loses guidance",
              "Video jamming: breaks FPV video, reducing capacity to hit small targets",
              "EW is bidirectional: friendly EW action reveals the jammer's position to enemy SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Night considerations",
        blocks: [
          {
            type: "p",
            text: "Drones operate at night with thermal and night vision. Night is no longer the safety it was in the 20th century. Thermal signature of body, engines and heat positions is visible to drones even in total darkness.",
          },
          {
            type: "ul",
            items: [
              "No visible or IR light without cover: IR drones detect both",
              "Heat positions in dense vegetation are still visible thermally",
              "Fog and rain degrade thermal and optics, reducing drone capability",
              "Strong wind makes stable quadcopter flight harder",
              "Moonless nights still favour enemy thermal operations",
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
              "Shooting at the drone with a personal weapon instead of seeking cover",
              "Treating every motor sound as false alarm",
              "Relying on 'my camouflage' instead of overhead cover",
              "Continuing to move while the drone observes, hoping not to be seen",
              "Grouping under open sky",
              "Treating the drone as 'friendly' without verifying with command",
              "Underestimating the FPV range (10-25 km from base)",
              "Smartwatch and fitness trackers on, signalling EM in FPV zone",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "FPV saturation on the Ukrainian front has permanently changed light infantry. Movement of units larger than a fire team in open spaces is nearly impossible in hot zones. Vehicular logistics moves at night and in cover. An OP shooting at a drone with a rifle reveals its position. The international volunteer must internalise a non-intuitive truth: the drone is the most probable cause of death, not the Russian soldier visible at 200 metres. Signature discipline, overhead cover, dispersion and acoustic recognition are the first line of defence, before any active system.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A saturação de drones — de reconhecimento, de spotting de tiro, FPV com cargas várias — é a única característica que mais distingue o front ucraniano de 2024-2026 de qualquer conflito anterior. A infantaria moderna deve reconhecer, classificar e reagir a drones como parte da consciência tática básica. Este capítulo descreve princípios de reconhecimento, comportamento defensivo e considerações de mitigação — não procedimentos ofensivos contra-drone.",
    sections: [
      {
        heading: "Classificação de drones",
        blocks: [
          {
            type: "p",
            text: "O termo 'drone' cobre realidades operacionais muito diferentes. A resposta correta depende do tipo, e o reconhecimento rápido é a primeira habilidade a aprender.",
          },
          {
            type: "table",
            headers: ["Tipo", "Altitude típica", "Função", "Indicadores"],
            rows: [
              ["Quadcopter recon (ex. Mavic)", "30-300 m", "Observação visual, correção de fires", "Som de motor de alta frequência, pairando ou movendo lentamente"],
              ["FPV descartável", "5-200 m", "Ataque cinético com carga", "Voo rápido, ruído agressivo, trajetória direta ao alvo"],
              ["Bomber drone (ex. Baba Yaga)", "100-500 m", "Lançamento de munições", "Drone maior multirotor, som mais grave"],
              ["Fixed-wing ISR (ex. Orlan-10)", "300-2000 m", "Reconhecimento amplo, jamming", "Som de motor a combustão, trajetória curva"],
              ["Loitering munition (Shahed, Lancet)", "Variável", "Ataque preciso em alvo identificado", "Som característico de moto 2 tempos, trajetória direta"],
              ["Quadcopter civil reaproveitado", "Baixa", "Spotting tático, drop de granada", "Idêntico ao civil, pode ser hostil"],
            ],
          },
          {
            type: "p",
            text: "Distinguir drone amigo de hostil em voo é frequentemente impossível à vista em áreas contestadas. A regra operacional é: todo drone não identificado é hostil até prova em contrário. Reportar rápido ao comando permite que drones amigos se identifiquem.",
          },
        ],
      },
      {
        heading: "Reconhecimento por som",
        blocks: [
          {
            type: "p",
            text: "A identificação acústica é a única habilidade mais importante anti-drone. O som frequentemente precede a vista por alguns segundos — tempo necessário para se cobrir. Praticar escuta e classificação é hábito a construir.",
          },
          {
            type: "ul",
            items: [
              "FPV: frequência aguda, motor elétrico, intensidade crescendo rápido",
              "Quadcopter de observação: frequência similar a FPV, mas estável, não acelerando",
              "Bomber drone: som mais grave, multirotor pesado",
              "Fixed-wing: motor a combustão ou elétrico, som constante em altitude maior",
              "Loitering munition (Shahed): característico moto 2 tempos, som prolongado",
              "Tempo altera propagação: vento e neve abafam, neblina transmite som",
            ],
          },
          {
            type: "callout",
            title: "DISCIPLINA ACÚSTICA",
            body: "A escuta eficaz de drones exige silêncio pessoal: sem conversa em movimento, sem música, sem fones acústicos normais. Em trincheira ou posição, uma pessoa tem sempre a responsabilidade da escuta para cima.",
          },
        ],
      },
      {
        heading: "Comportamento defensivo imediato",
        blocks: [
          {
            type: "p",
            text: "Quando um drone é detectado, a resposta deve ser imediata e baseada no tipo. Respostas erradas têm consequências documentadas no front ucraniano.",
          },
          {
            type: "table",
            headers: ["Drone identificado", "Resposta imediata"],
            rows: [
              ["Quadcopter recon estável (observando)", "Cessar todo movimento, cobertura visual, não atirar (revelaria posição)"],
              ["FPV em aproximação rápida", "Cobertura imediata (porão, prédio, árvores densas). Vias laterais"],
              ["Bomber drone", "Cobertura subsuperficial preferencial. Cobertura rígida superior"],
              ["Fixed-wing ISR", "Cessar atividade observável. Continuar missão se ID válida"],
              ["Loitering munition (Shahed)", "Melhor cobertura disponível. Não atirar se não tiver AA específica"],
              ["Drone não identificado", "Tratar como hostil. Cobertura, reportar por rádio ao comando"],
            ],
          },
          {
            type: "warn",
            title: "ERRO COMUM",
            body: "Atirar em drone com arma pessoal é quase sempre inútil e quase sempre prejudicial. Inútil: probabilidade de derrubar drone em movimento com fuzil é muito baixa. Prejudicial: o tiro revela a posição amiga ao próprio drone (operador vê muzzle flash) e a sistemas de vigilância inimiga. Atirar em drone se justifica só com AA dedicada (shotguns especializados, AA portátil) e só quando autorizado pela SOP.",
          },
        ],
      },
      {
        heading: "Proteção passiva",
        blocks: [
          {
            type: "p",
            text: "A proteção passiva — disciplina de assinatura e cobertura — é a primeira camada anti-drone. Uma posição que o drone não vê não é engajada.",
          },
          {
            type: "ul",
            items: [
              "Cobertura superior: redes, tetos rígidos, vegetação densa, prédios",
              "Discrição térmica: sem fogo, sem cozinha aberta, distância de motores quentes",
              "Movimento em cobertura: passar de uma cobertura à outra sem exposição",
              "Dispersão de pessoal: um único drone não pode atingir todos se dispersos",
              "Disciplina de assinatura EM: FPVs usam canais de vídeo específicos, detecção pode preceder a vista",
              "Mascaramento de veículos: redes, sombra, dissimulação lateral e de cima",
            ],
          },
        ],
      },
      {
        heading: "Proteção ativa (notas)",
        blocks: [
          {
            type: "p",
            text: "A proteção ativa inclui sistemas que interceptam, jammam ou derrubam drones. São material de equipes especializadas, não de infantaria leve. O voluntário internacional deve saber que existem mas raramente os opera diretamente.",
          },
          {
            type: "ul",
            items: [
              "EW jamming portátil: bolha protetora de algumas dezenas de metros",
              "Sistemas AA dedicados anti-drone (shotguns, fuzis especiais)",
              "Drones counter-FPV: drone amigo interceptando ou perturbando o inimigo",
              "Sistemas automáticos de posição fixa (raros, em HUR/SSO)",
              "Sistemas de micro-ondas direcionadas (extremamente raros no front atual)",
            ],
          },
        ],
      },
      {
        heading: "EW e jamming",
        blocks: [
          {
            type: "p",
            text: "O ambiente EW do front ucraniano é o mais intenso do mundo. Sistemas russos (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) e ucranianos operam constantemente, alterando em tempo real a usabilidade de frequências para drones e rádio. Conhecer o ambiente EW é parte do briefing.",
          },
          {
            type: "ul",
            items: [
              "Jamming de banda larga: quebra o sinal do drone, pode aterrissá-lo ou desviá-lo",
              "Spoofing GPS: induz drone amigo ou inimigo a desviar da rota",
              "Jamming de controle: quebra o link operador-drone — drone perde guia",
              "Jamming de vídeo: quebra o vídeo do FPV, reduzindo a capacidade de atingir alvo pequeno",
              "EW é bidirecional: ação EW amiga revela posição do jammer ao SIGINT inimigo",
            ],
          },
        ],
      },
      {
        heading: "Considerações noturnas",
        blocks: [
          {
            type: "p",
            text: "Drones operam à noite com térmica e visão noturna. A noite não é mais a segurança que era no século XX. A assinatura térmica do corpo, motores e posições de calor é visível ao drone mesmo em escuridão total.",
          },
          {
            type: "ul",
            items: [
              "Sem luz visível ou IR sem cobertura: drones IR detectam ambas",
              "Posições de calor em vegetação densa ainda são visíveis em térmica",
              "Neblina e chuva degradam térmica e ótica, reduzindo a capacidade do drone",
              "Vento forte dificulta voo estável do quadcopter",
              "Noites sem lua ainda favorecem operações térmicas inimigas",
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
              "Atirar no drone com arma pessoal em vez de buscar cobertura",
              "Tratar cada ruído de motor como alarme falso",
              "Confiar em 'minha camuflagem' em vez de cobertura superior",
              "Continuar a se mover enquanto o drone observa, esperando não ser visto",
              "Agrupar-se sob céu aberto",
              "Tratar o drone como 'amigo' sem verificar com comando",
              "Subestimar o alcance do FPV (10-25 km da base)",
              "Smartwatch e fitness trackers ligados, sinalizando EM em zona FPV",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A saturação FPV no front ucraniano mudou a infantaria leve de forma permanente. O movimento de unidades maiores que fire team em espaços abertos é quase impossível em zonas quentes. A logística veicular avança à noite e em cobertura. O OP que atira em drone com fuzil revela sua posição. O voluntário internacional precisa interiorizar uma verdade não intuitiva: o drone é o inimigo mais provável de morte, não o soldado russo visível a 200 metros. Disciplina de assinatura, cobertura superior, dispersão e reconhecimento acústico são a primeira linha de defesa, antes de qualquer sistema ativo.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La saturation des drones — reconnaissance, observation de tir, FPV avec charges variées — est la caractéristique unique qui distingue le plus le front ukrainien de 2024-2026 de tout conflit précédent. L'infanterie moderne doit reconnaître, classer et réagir aux drones comme partie de la conscience tactique de base. Ce chapitre décrit des principes de reconnaissance, un comportement défensif et des considérations de mitigation — pas des procédures offensives contre-drone.",
    sections: [
      {
        heading: "Classification des drones",
        blocks: [
          {
            type: "p",
            text: "Le terme « drone » recouvre des réalités opérationnelles très différentes. La réponse correcte dépend du type, et la reconnaissance rapide est la première compétence à acquérir.",
          },
          {
            type: "table",
            headers: ["Type", "Altitude typique", "Fonction", "Indicateurs"],
            rows: [
              ["Quadcopter recon (ex. Mavic)", "30-300 m", "Observation visuelle, correction de feux", "Son de moteur aigu, en vol stationnaire ou mouvement lent"],
              ["FPV à usage unique", "5-200 m", "Attaque cinétique avec charge", "Vol rapide, bruit agressif, trajectoire directe vers la cible"],
              ["Bomber drone (ex. Baba Yaga)", "100-500 m", "Largage de munitions", "Drone plus grand multirotor, son plus grave"],
              ["Fixed-wing ISR (ex. Orlan-10)", "300-2000 m", "Reconnaissance large, brouillage", "Son de moteur thermique, trajectoire courbe"],
              ["Loitering munition (Shahed, Lancet)", "Variable", "Frappe de précision sur cible identifiée", "Son caractéristique de moto 2 temps, trajectoire directe"],
              ["Quadcopter civil reconverti", "Bas", "Spotting tactique, largage de grenade", "Identique à l'usage civil, peut être hostile"],
            ],
          },
          {
            type: "p",
            text: "Distinguer un drone ami d'un hostile en vol est souvent impossible à vue en zones contestées. La règle opérationnelle : tout drone non identifié est hostile jusqu'à preuve du contraire. Le signalement rapide au commandement permet aux drones amis de s'identifier.",
          },
        ],
      },
      {
        heading: "Reconnaissance par le son",
        blocks: [
          {
            type: "p",
            text: "L'identification acoustique est la compétence unique la plus importante anti-drone. Le son précède souvent la vue de quelques secondes — le temps nécessaire pour se mettre à couvert. La pratique d'écoute et de classification est une habitude à construire.",
          },
          {
            type: "ul",
            items: [
              "FPV : fréquence aiguë, moteur électrique, intensité qui croît rapidement",
              "Quadcopter d'observation : fréquence similaire au FPV mais stable, sans accélération",
              "Bomber drone : son plus grave, multirotor lourd",
              "Fixed-wing : moteur thermique ou électrique, son constant à altitude plus élevée",
              "Loitering munition (Shahed) : moto 2 temps caractéristique, son prolongé",
              "La météo modifie la propagation : vent et neige amortissent, brouillard transmet le son",
            ],
          },
          {
            type: "callout",
            title: "DISCIPLINE ACOUSTIQUE",
            body: "L'écoute efficace de drones exige le silence personnel : pas de bavardage en mouvement, pas de musique, pas d'écouteurs acoustiques normaux. En tranchée ou en position, une personne a toujours la responsabilité de l'écoute vers le haut.",
          },
        ],
      },
      {
        heading: "Comportement défensif immédiat",
        blocks: [
          {
            type: "p",
            text: "Quand un drone est détecté, la réponse doit être immédiate et basée sur le type. Les mauvaises réponses ont des conséquences documentées sur le front ukrainien.",
          },
          {
            type: "table",
            headers: ["Drone identifié", "Réponse immédiate"],
            rows: [
              ["Quadcopter d'observation stable", "Cesser tout mouvement, couvert visuel, ne pas tirer (révélerait la position)"],
              ["FPV en approche rapide", "Couvert immédiat (cave, bâtiment, arbres denses). Voies de fuite latérales"],
              ["Bomber drone", "Couvert sous-surface préféré. Couvert rigide supérieur"],
              ["Fixed-wing ISR", "Cesser l'activité observable. Continuer la mission si l'ID est valide"],
              ["Loitering munition (Shahed)", "Meilleur couvert disponible. Ne pas tirer sauf avec AA spécifique"],
              ["Drone non identifié", "Traiter comme hostile. Couvert, signalement radio au commandement"],
            ],
          },
          {
            type: "warn",
            title: "ERREUR FRÉQUENTE",
            body: "Tirer sur un drone avec une arme personnelle est presque toujours inutile et presque toujours nuisible. Inutile : la probabilité d'abattre un drone en mouvement au fusil est très faible. Nuisible : le tir révèle la position amie au drone lui-même (l'opérateur voit le départ de coup) et aux systèmes de surveillance ennemis. Tirer sur un drone n'est justifié qu'avec des armes anti-drone dédiées (fusils à pompe spécialisés, AA portative) et seulement quand la SOP l'autorise.",
          },
        ],
      },
      {
        heading: "Protection passive",
        blocks: [
          {
            type: "p",
            text: "La protection passive — discipline de signature et couvert — est la première couche anti-drone. Une position que le drone ne voit pas n'est pas engagée.",
          },
          {
            type: "ul",
            items: [
              "Couvert supérieur : filets, toits rigides, végétation dense, bâtiments",
              "Discrétion thermique : pas de feux, pas de cuisine ouverte, distance des moteurs chauds",
              "Mouvement sous couvert : passer d'un couvert à l'autre sans exposition",
              "Dispersion du personnel : un seul drone ne peut frapper tout le monde si dispersés",
              "Discipline de signature EM : les FPV utilisent des canaux vidéo spécifiques, la détection peut précéder la vue",
              "Masquage des véhicules : filets, ombre, dissimulation latérale et par le haut",
            ],
          },
        ],
      },
      {
        heading: "Protection active (notes)",
        blocks: [
          {
            type: "p",
            text: "La protection active comprend des systèmes qui interceptent, brouillent ou abattent les drones. Ce sont des matériels d'équipes spécialisées, pas d'infanterie légère. Le volontaire international doit en connaître l'existence mais les opère rarement directement.",
          },
          {
            type: "ul",
            items: [
              "Brouillage EW portatif : bulle protectrice de quelques dizaines de mètres",
              "Systèmes AA dédiés anti-drone (fusils à pompe, fusils spéciaux)",
              "Drones counter-FPV : drone ami interceptant ou perturbant le drone ennemi",
              "Systèmes automatiques de positions fixes (rares, en HUR/SSO)",
              "Systèmes à micro-ondes dirigées (extrêmement rares sur le front actuel)",
            ],
          },
        ],
      },
      {
        heading: "GE et brouillage",
        blocks: [
          {
            type: "p",
            text: "L'environnement GE du front ukrainien est le plus intense au monde. Les systèmes russes (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) et ukrainiens opèrent en permanence, modifiant en temps réel la praticabilité des fréquences pour drones et radio. Connaître son environnement GE fait partie du briefing.",
          },
          {
            type: "ul",
            items: [
              "Brouillage large bande : casse le signal du drone, peut l'atterrir ou le dévier",
              "Spoofing GPS : induit un drone ami ou ennemi à dévier de sa route",
              "Brouillage de contrôle : casse le lien opérateur-drone — le drone perd son guidage",
              "Brouillage vidéo : casse la vidéo du FPV, réduit la capacité à toucher une cible petite",
              "La GE est bidirectionnelle : l'action GE amie révèle la position du brouilleur au SIGINT ennemi",
            ],
          },
        ],
      },
      {
        heading: "Considérations nocturnes",
        blocks: [
          {
            type: "p",
            text: "Les drones opèrent la nuit avec thermique et vision nocturne. La nuit n'est plus la sécurité qu'elle était au XXe siècle. La signature thermique du corps, des moteurs et des positions chaudes est visible aux drones même dans l'obscurité totale.",
          },
          {
            type: "ul",
            items: [
              "Pas de lumière visible ou IR sans couvert : les drones IR détectent les deux",
              "Les positions chaudes en végétation dense restent visibles thermiquement",
              "Brouillard et pluie dégradent thermique et optique, réduisent la capacité du drone",
              "Vent fort rend le vol stable du quadcopter difficile",
              "Les nuits sans lune favorisent encore les opérations thermiques ennemies",
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
              "Tirer sur le drone à l'arme personnelle au lieu de chercher un couvert",
              "Traiter tout bruit de moteur comme fausse alerte",
              "Compter sur « mon camouflage » au lieu d'un couvert supérieur",
              "Continuer à se déplacer pendant que le drone observe, en espérant ne pas être vu",
              "Se regrouper sous ciel ouvert",
              "Traiter le drone comme « ami » sans vérifier avec le commandement",
              "Sous-estimer la portée du FPV (10-25 km depuis la base)",
              "Smartwatch et fitness trackers allumés, signalant EM en zone FPV",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La saturation FPV sur le front ukrainien a modifié l'infanterie légère de manière permanente. Le mouvement d'unités plus grandes qu'un fire team en espace ouvert est presque impossible en zones chaudes. La logistique véhiculée progresse de nuit et sous couvert. L'OP qui tire sur un drone au fusil révèle sa position. Le volontaire international doit intérioriser une vérité non intuitive : le drone est l'ennemi le plus probable de mort, pas le soldat russe visible à 200 mètres. Discipline de signature, couvert supérieur, dispersion et reconnaissance acoustique sont la première ligne de défense, avant tout système actif.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
