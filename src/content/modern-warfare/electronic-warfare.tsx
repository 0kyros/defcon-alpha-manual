import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La guerra elettronica (EW, Electronic Warfare) è oggi una dimensione costante del campo di battaglia ucraino — non un evento ma uno stato ambientale. Questo capitolo descrive la dottrina, gli effetti pratici sull'equipaggiamento del soldato e come riconoscerli. NON contiene procedure di disturbo, intercettazione o impiego offensivo.",
    sections: [
      {
        heading: "Dottrina EW: ESM, ECM, ECCM",
        blocks: [
          {
            type: "p",
            text: "La dottrina NATO suddivide la guerra elettronica in tre funzioni. Comprenderle è prerequisito per leggere il proprio ambiente operativo.",
          },
          {
            type: "table",
            headers: ["Funzione", "Descrizione (livello dottrinale)"],
            rows: [
              ["ESM (Electronic Support Measures)", "Ascolto passivo — intercettazione, classificazione, localizzazione delle emissioni avversarie"],
              ["ECM (Electronic Countermeasures)", "Attivo — disturbo (jamming), inganno (spoofing), neutralizzazione di link"],
              ["ECCM (Electronic Counter-Countermeasures)", "Protezione — frequency hopping, burst transmission, antenne direzionali, spread spectrum"],
            ],
          },
          {
            type: "callout",
            title: "Implicazione pratica",
            body: "Ogni soldato in zona EW saturata subisce ECM avversaria e dipende dall'ECCM dei propri sistemi. Conoscere quale categoria stai affrontando aiuta a leggere la situazione.",
          },
        ],
      },
      {
        heading: "Sistemi EW russi noti (OSINT)",
        blocks: [
          {
            type: "p",
            text: "I sistemi EW russi sono pubblicamente documentati. La consapevolezza della loro esistenza e del loro raggio approssimativo è parte della cultura del soldato.",
          },
          {
            type: "table",
            headers: ["Sistema", "Funzione"],
            rows: [
              ["Shipovnik-Aero", "EW tattico anti-UAV, su veicolo, raggio decine di km"],
              ["Murmansk-BN", "EW strategico HF, raggio centinaia/migliaia di km, intercettazione comms a lungo raggio"],
              ["Borisoglebsk-2", "Sistema multibanda terrestre, intercettazione e jamming comms tattiche"],
              ["Krasukha-2 / Krasukha-4", "Anti-radar, anti-AWACS, ad alta potenza"],
              ["Pole-21 / Pole-21M", "Anti-GPS area, denial GNSS su vaste aree"],
              ["Leer-3", "EW combinato con drone Orlan-10, intercettazione cellulare GSM tattica"],
            ],
          },
          {
            type: "warn",
            title: "Awareness, non operatività",
            body: "Conoscere i nomi non significa contrastarli. Significa capire che la propria esperienza EW non è casuale ma sistemica.",
          },
        ],
      },
      {
        heading: "Effetti EW riconoscibili sul soldato",
        blocks: [
          {
            type: "p",
            text: "L'EW non è invisibile: si manifesta in modi specifici sull'equipaggiamento individuale. Riconoscere i sintomi precocemente significa cambiare comportamento prima che il problema diventi tattico.",
          },
          {
            type: "ul",
            items: [
              "Radio: rumore di fondo costante in banda, perdita ricezione su frequenze normalmente pulite, voce distorta",
              "GPS: posizione che salta, deriva costante di centinaia di metri, perdita totale di fix",
              "Smartphone: rete cellulare 0 barre nonostante presenza di torri amiche, GPS instabile",
              "Datalink di drone amico: video che pixela, perdita controllo, fail-safe RTH (return-to-home) attivato",
              "Sistemi di countermeasure: detector che attivano allarmi continui senza sorgente identificata",
              "Bussola elettronica: deriva o flip improvviso (interferenza intenzionale o naturale)",
            ],
          },
          {
            type: "callout",
            title: "GPS spoofing",
            body: "Caso particolare: GPS che mostra una posizione plausibile ma falsa. Più pericoloso del jamming perché non genera allarme. Verificare con bussola magnetica e riferimenti terrestri.",
          },
        ],
      },
      {
        heading: "Effetti EW friendly (amico)",
        blocks: [
          {
            type: "p",
            text: "L'EW amica protegge le tue unità — ma può anche degradare i tuoi sistemi. La consapevolezza del jamming amico evita di interpretare un effetto difensivo come attacco nemico.",
          },
          {
            type: "ul",
            items: [
              "Jammer anti-FPV portati da squadra: degradano anche radio amiche su bande sovrapposte",
              "Jammer di trincea (omnidirezionali): creano \"bolle\" di silenzio elettromagnetico locale",
              "Jammer su veicolo: protezione in movimento, ma il veicolo è esso stesso emettitore identificabile",
              "EW amica strategica: può non essere comunicata in dettaglio per OPSEC — accettare le degradazioni",
            ],
          },
        ],
      },
      {
        heading: "Comportamento difensivo in ambiente EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Aspettarsi sempre EW — non sorprendersi quando arriva",
              "Avere PACE plan (Primary, Alternate, Contingency, Emergency) per ogni mezzo di comunicazione",
              "Mantenere navigazione tradizionale (carta, bussola magnetica) come fallback al GPS",
              "Conoscere le frequenze di fallback e i punti di rendez-vous fisici",
              "Limitare emissioni proprie: meno trasmetti, meno offri al SIGINT avversario",
              "Riconoscere i sintomi precocemente e segnalarli sulla rete (\"EW ACTIVE\" come callout)",
              "Non assumere che la radio funzioni — testare con check brevi a inizio operazione",
            ],
          },
        ],
      },
      {
        heading: "EW e droni",
        blocks: [
          {
            type: "p",
            text: "La relazione tra EW e droni è oggi il punto di equilibrio dottrinale principale del fronte. Comprenderla a livello di principio è parte del bagaglio del soldato moderno.",
          },
          {
            type: "ul",
            items: [
              "FPV su 5.8 GHz: vulnerabile a jamming commerciale, raggio del jammer 100-500 m",
              "FPV con ELRS o link cifrati: più resilienti, richiedono EW dedicata",
              "Droni in fibra ottica: immuni a EW (cavo fisico) — comparsi 2024, in espansione 2025-2026",
              "Mavic / Autel commerciali: dipendono da GPS — vulnerabili a GPS denial",
              "Loitering munitions (Shahed, Lancet): nav inerziale + GPS, parzialmente resilienti",
            ],
          },
          {
            type: "callout",
            title: "Trend 2025-2026",
            body: "L'introduzione di droni in fibra ottica ha ridotto l'efficacia dell'EW classica. La risposta è ibrida: hard-kill + EW residua + dispersione fisica. Il soldato deve assumere che alcuni FPV passeranno.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Confidare nel GPS senza fallback bussola/carta",
              "Interpretare un'interferenza come problema tecnico del proprio apparato",
              "Aumentare potenza di trasmissione per \"sfondare\" il jamming — espone di più al DF",
              "Non avere PACE plan documentato a livello di squadra",
              "Ignorare un detector EW perché \"suona sempre\" — il giorno che cambia conta",
              "Pensare che cifratura = invisibilità (la cifratura protegge contenuto, non emissione)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Il fronte ucraino è la più densa zona EW della storia operativa moderna. Pubblicamente, sistemi come Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2 e Krasukha sono in impiego rotativo lungo l'intera linea. Tatticamente, ogni squadra in linea avanzata vive con GPS instabile, radio degradate, dipendenza da link in fibra e drone-killer. L'esperienza condivisa è: la vittoria tattica non va alle unità tecnologicamente migliori, ma a quelle che hanno integrato la degradazione come stato normale, addestrandosi a operare in essa. La carta topografica e la bussola magnetica sono tornate da reliquia a equipaggiamento di sopravvivenza.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Electronic warfare (EW) is now a constant dimension of the Ukrainian battlefield — not an event but an environmental state. This chapter describes doctrine, the practical effects on a soldier's equipment, and how to recognise them. It does NOT contain jamming, intercept or offensive employment procedures.",
    sections: [
      {
        heading: "EW doctrine: ESM, ECM, ECCM",
        blocks: [
          {
            type: "p",
            text: "NATO doctrine divides electronic warfare into three functions. Understanding them is prerequisite to reading your operational environment.",
          },
          {
            type: "table",
            headers: ["Function", "Description (doctrinal level)"],
            rows: [
              ["ESM (Electronic Support Measures)", "Passive listening — intercept, classification, geolocation of enemy emissions"],
              ["ECM (Electronic Countermeasures)", "Active — jamming, spoofing, link neutralisation"],
              ["ECCM (Electronic Counter-Countermeasures)", "Protection — frequency hopping, burst transmission, directional antennas, spread spectrum"],
            ],
          },
          {
            type: "callout",
            title: "Practical implication",
            body: "Every soldier in a saturated EW zone suffers enemy ECM and depends on their own ECCM. Knowing which category you face helps read the situation.",
          },
        ],
      },
      {
        heading: "Known Russian EW systems (OSINT)",
        blocks: [
          {
            type: "p",
            text: "Russian EW systems are publicly documented. Awareness of their existence and approximate range is part of soldier culture.",
          },
          {
            type: "table",
            headers: ["System", "Function"],
            rows: [
              ["Shipovnik-Aero", "Tactical anti-UAV EW, vehicle-mounted, tens of km"],
              ["Murmansk-BN", "Strategic HF EW, hundreds/thousands of km, long-range comms intercept"],
              ["Borisoglebsk-2", "Multi-band ground system, tactical comms intercept and jamming"],
              ["Krasukha-2 / Krasukha-4", "Anti-radar, anti-AWACS, high power"],
              ["Pole-21 / Pole-21M", "Area anti-GPS, GNSS denial over wide zones"],
              ["Leer-3", "EW combined with Orlan-10 drone, tactical GSM cellular intercept"],
            ],
          },
          {
            type: "warn",
            title: "Awareness, not capability",
            body: "Knowing the names does not mean countering them. It means understanding your EW experience is not random but systemic.",
          },
        ],
      },
      {
        heading: "Recognisable EW effects on the soldier",
        blocks: [
          {
            type: "p",
            text: "EW is not invisible: it shows up in specific ways on individual gear. Catching the symptoms early means changing behaviour before the problem becomes tactical.",
          },
          {
            type: "ul",
            items: [
              "Radio: constant in-band noise floor, loss of reception on normally clear frequencies, distorted voice",
              "GPS: jumping position, constant drift of hundreds of metres, total loss of fix",
              "Smartphone: cellular 0 bars despite friendly towers, unstable GPS",
              "Friendly drone datalink: pixelating video, control loss, fail-safe RTH (return-to-home) triggered",
              "Countermeasure systems: detectors firing continuous alarms with no identified source",
              "Electronic compass: drift or sudden flip (intentional or natural interference)",
            ],
          },
          {
            type: "callout",
            title: "GPS spoofing",
            body: "Special case: GPS shows a plausible but false position. More dangerous than jamming because it triggers no alarm. Verify with magnetic compass and terrain references.",
          },
        ],
      },
      {
        heading: "Friendly EW effects",
        blocks: [
          {
            type: "p",
            text: "Friendly EW protects your units — but can also degrade your own systems. Awareness of friendly jamming avoids interpreting a defensive effect as enemy attack.",
          },
          {
            type: "ul",
            items: [
              "Team-carried anti-FPV jammers: also degrade friendly radios on overlapping bands",
              "Trench jammers (omnidirectional): create local EM-silence \"bubbles\"",
              "Vehicle jammers: protection on the move, but the vehicle itself is an identifiable emitter",
              "Strategic friendly EW: may not be communicated in detail for OPSEC — accept the degradation",
            ],
          },
        ],
      },
      {
        heading: "Defensive behaviour in EW environment",
        blocks: [
          {
            type: "ul",
            items: [
              "Always expect EW — do not be surprised when it arrives",
              "Have a PACE plan (Primary, Alternate, Contingency, Emergency) for every comms means",
              "Maintain traditional navigation (map, magnetic compass) as GPS fallback",
              "Know fallback frequencies and physical rendezvous points",
              "Limit own emissions: less you transmit, less you give enemy SIGINT",
              "Recognise symptoms early and call them on net (\"EW ACTIVE\" as callout)",
              "Do not assume the radio works — test with brief checks at op start",
            ],
          },
        ],
      },
      {
        heading: "EW and drones",
        blocks: [
          {
            type: "p",
            text: "The relationship between EW and drones is currently the main doctrinal balance point of the front. Understanding it at principle level is part of the modern soldier's kit.",
          },
          {
            type: "ul",
            items: [
              "5.8 GHz FPV: vulnerable to commercial jamming, jammer radius 100-500 m",
              "ELRS or encrypted-link FPV: more resilient, require dedicated EW",
              "Fiber-optic drones: immune to EW (physical cable) — emerged 2024, expanding 2025-2026",
              "Commercial Mavic / Autel: GPS-dependent — vulnerable to GPS denial",
              "Loitering munitions (Shahed, Lancet): inertial nav + GPS, partially resilient",
            ],
          },
          {
            type: "callout",
            title: "2025-2026 trend",
            body: "Fiber-optic drones have reduced classic EW effectiveness. The response is hybrid: hard-kill + residual EW + physical dispersion. The soldier must assume some FPVs will get through.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Trusting GPS without compass/map fallback",
              "Interpreting interference as a fault of one's own device",
              "Raising transmission power to \"punch through\" jamming — exposes more to DF",
              "No documented PACE plan at team level",
              "Ignoring an EW detector because \"it always rings\" — the day it changes matters",
              "Believing encryption = invisibility (encryption protects content, not emission)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The Ukrainian front is the densest EW environment in modern operational history. Publicly, systems such as Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2 and Krasukha are in rotational employment along the entire line. Tactically, every forward team lives with unstable GPS, degraded radios, dependency on fiber-optic links and drone killers. The shared experience: tactical victory does not go to the most technologically advanced units, but to those who have integrated degradation as a normal state and trained to operate in it. The topographic map and magnetic compass have gone from relic to survival equipment.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A guerra eletrônica (EW) é hoje dimensão constante do campo de batalha ucraniano — não um evento, mas um estado ambiental. Este capítulo descreve a doutrina, os efeitos práticos no equipamento do soldado e como reconhecê-los. NÃO contém procedimentos de jamming, interceptação ou emprego ofensivo.",
    sections: [
      {
        heading: "Doutrina EW: ESM, ECM, ECCM",
        blocks: [
          {
            type: "p",
            text: "A doutrina OTAN divide a guerra eletrônica em três funções. Compreendê-las é pré-requisito para ler o próprio ambiente operacional.",
          },
          {
            type: "table",
            headers: ["Função", "Descrição (nível doutrinário)"],
            rows: [
              ["ESM (Electronic Support Measures)", "Escuta passiva — interceptação, classificação, geolocalização de emissões inimigas"],
              ["ECM (Electronic Countermeasures)", "Ativo — jamming, spoofing, neutralização de link"],
              ["ECCM (Electronic Counter-Countermeasures)", "Proteção — frequency hopping, burst, antenas direcionais, spread spectrum"],
            ],
          },
          {
            type: "callout",
            title: "Implicação prática",
            body: "Cada soldado em zona EW saturada sofre ECM inimiga e depende do próprio ECCM. Saber qual categoria se enfrenta ajuda a ler a situação.",
          },
        ],
      },
      {
        heading: "Sistemas EW russos conhecidos (OSINT)",
        blocks: [
          {
            type: "p",
            text: "Os sistemas EW russos são publicamente documentados. Conhecer sua existência e raio aproximado faz parte da cultura do soldado.",
          },
          {
            type: "table",
            headers: ["Sistema", "Função"],
            rows: [
              ["Shipovnik-Aero", "EW tático anti-UAV, sobre veículo, dezenas de km"],
              ["Murmansk-BN", "EW estratégico HF, centenas/milhares de km, intercept comms longo alcance"],
              ["Borisoglebsk-2", "Sistema multibanda terrestre, intercept e jamming de comms tático"],
              ["Krasukha-2 / Krasukha-4", "Anti-radar, anti-AWACS, alta potência"],
              ["Pole-21 / Pole-21M", "Anti-GPS de área, negação GNSS em zonas amplas"],
              ["Leer-3", "EW combinado com drone Orlan-10, intercept GSM celular tático"],
            ],
          },
          {
            type: "warn",
            title: "Awareness, não capacidade",
            body: "Saber os nomes não significa neutralizá-los. Significa entender que sua experiência EW não é aleatória, é sistêmica.",
          },
        ],
      },
      {
        heading: "Efeitos EW reconhecíveis no soldado",
        blocks: [
          {
            type: "p",
            text: "EW não é invisível: manifesta-se de modos específicos no equipamento individual. Captar sintomas cedo é mudar comportamento antes que o problema vire tático.",
          },
          {
            type: "ul",
            items: [
              "Rádio: ruído de fundo constante em banda, perda de recepção em freqs limpas, voz distorcida",
              "GPS: posição saltando, deriva constante de centenas de metros, perda total de fix",
              "Smartphone: celular sem barras apesar de torres amigas, GPS instável",
              "Datalink de drone amigo: vídeo pixelando, perda de controle, fail-safe RTH (return-to-home)",
              "Sistemas de countermeasure: detectores alarme contínuo sem fonte identificada",
              "Bússola eletrônica: deriva ou flip súbito (interferência intencional ou natural)",
            ],
          },
          {
            type: "callout",
            title: "GPS spoofing",
            body: "Caso especial: GPS mostra posição plausível mas falsa. Mais perigoso que jamming porque não gera alarme. Verificar com bússola magnética e referências terrestres.",
          },
        ],
      },
      {
        heading: "Efeitos EW amiga",
        blocks: [
          {
            type: "p",
            text: "EW amiga protege suas unidades — mas também degrada seus próprios sistemas. Awareness disso evita interpretar efeito defensivo como ataque inimigo.",
          },
          {
            type: "ul",
            items: [
              "Jammers anti-FPV de equipe: degradam também rádios amigos em bandas sobrepostas",
              "Jammers de trincheira (omnidirecionais): criam \"bolhas\" de silêncio EM local",
              "Jammers em veículo: proteção em movimento, mas o veículo é emissor identificável",
              "EW amiga estratégica: pode não ser comunicada em detalhe por OPSEC — aceitar a degradação",
            ],
          },
        ],
      },
      {
        heading: "Comportamento defensivo em ambiente EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Sempre esperar EW — não se surpreender quando chega",
              "Ter PACE plan (Primary, Alternate, Contingency, Emergency) para cada meio de comms",
              "Manter navegação tradicional (mapa, bússola magnética) como fallback de GPS",
              "Conhecer freqs de fallback e pontos físicos de rendezvous",
              "Limitar emissões próprias: menos transmite, menos oferece ao SIGINT inimigo",
              "Reconhecer sintomas cedo e sinalizar no net (\"EW ACTIVE\" como callout)",
              "Não assumir que o rádio funciona — testar com checks breves no início da op",
            ],
          },
        ],
      },
      {
        heading: "EW e drones",
        blocks: [
          {
            type: "p",
            text: "A relação entre EW e drones é hoje o principal ponto de equilíbrio doutrinário do front. Entendê-la em nível de princípio faz parte do kit do soldado moderno.",
          },
          {
            type: "ul",
            items: [
              "FPV em 5.8 GHz: vulnerável a jamming comercial, raio do jammer 100-500 m",
              "FPV com ELRS ou link cifrado: mais resilientes, exigem EW dedicada",
              "Drones em fibra ótica: imunes a EW (cabo físico) — surgiram 2024, expandindo 2025-2026",
              "Mavic / Autel comerciais: dependem de GPS — vulneráveis a negação de GPS",
              "Loitering munitions (Shahed, Lancet): nav inercial + GPS, parcialmente resilientes",
            ],
          },
          {
            type: "callout",
            title: "Tendência 2025-2026",
            body: "Drones em fibra ótica reduziram a eficácia da EW clássica. A resposta é híbrida: hard-kill + EW residual + dispersão física. O soldado precisa assumir que alguns FPVs passarão.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Confiar no GPS sem fallback bússola/mapa",
              "Interpretar interferência como defeito do próprio aparelho",
              "Aumentar potência de transmissão para \"furar\" o jamming — expõe mais ao DF",
              "Não ter PACE plan documentado em nível de equipe",
              "Ignorar detector EW porque \"sempre toca\" — o dia em que muda importa",
              "Achar que cifragem = invisibilidade (cifragem protege conteúdo, não emissão)",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O front ucraniano é o ambiente EW mais denso da história operacional moderna. Publicamente, sistemas como Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2 e Krasukha estão em emprego rotativo ao longo de toda a linha. Taticamente, cada equipe avançada vive com GPS instável, rádios degradados, dependência de link em fibra e drone-killer. A experiência compartilhada: vitória tática não vai para as unidades tecnologicamente superiores, mas para as que integraram a degradação como estado normal e se treinaram para operar nele. Mapa topográfico e bússola magnética voltaram de relíquia a equipamento de sobrevivência.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La guerre électronique (GE / EW) est aujourd'hui une dimension constante du champ de bataille ukrainien — pas un événement mais un état ambiant. Ce chapitre décrit la doctrine, les effets pratiques sur l'équipement du soldat et comment les reconnaître. Il NE contient PAS de procédures de brouillage, d'interception ou d'emploi offensif.",
    sections: [
      {
        heading: "Doctrine GE : ESM, ECM, ECCM",
        blocks: [
          {
            type: "p",
            text: "La doctrine OTAN divise la guerre électronique en trois fonctions. Les comprendre est un prérequis pour lire son environnement opérationnel.",
          },
          {
            type: "table",
            headers: ["Fonction", "Description (niveau doctrinal)"],
            rows: [
              ["ESM (Electronic Support Measures)", "Écoute passive — interception, classification, géolocalisation des émissions ennemies"],
              ["ECM (Electronic Countermeasures)", "Actif — brouillage, leurrage, neutralisation de lien"],
              ["ECCM (Electronic Counter-Countermeasures)", "Protection — saut de fréquence, burst, antennes directionnelles, étalement de spectre"],
            ],
          },
          {
            type: "callout",
            title: "Implication pratique",
            body: "Tout soldat en zone GE saturée subit l'ECM ennemie et dépend de son propre ECCM. Savoir quelle catégorie on affronte aide à lire la situation.",
          },
        ],
      },
      {
        heading: "Systèmes GE russes connus (OSINT)",
        blocks: [
          {
            type: "p",
            text: "Les systèmes GE russes sont publiquement documentés. Connaître leur existence et leur portée approximative fait partie de la culture du soldat.",
          },
          {
            type: "table",
            headers: ["Système", "Fonction"],
            rows: [
              ["Shipovnik-Aero", "GE tactique anti-UAV, sur véhicule, dizaines de km"],
              ["Murmansk-BN", "GE stratégique HF, centaines/milliers de km, interception comms longue portée"],
              ["Borisoglebsk-2", "Système multibande terrestre, interception et brouillage comms tactiques"],
              ["Krasukha-2 / Krasukha-4", "Anti-radar, anti-AWACS, haute puissance"],
              ["Pole-21 / Pole-21M", "Anti-GPS de zone, déni GNSS sur vastes étendues"],
              ["Leer-3", "GE combinée avec drone Orlan-10, interception GSM cellulaire tactique"],
            ],
          },
          {
            type: "warn",
            title: "Awareness, pas capacité",
            body: "Connaître les noms ne signifie pas les contrer. Cela signifie comprendre que votre expérience GE n'est pas aléatoire mais systémique.",
          },
        ],
      },
      {
        heading: "Effets GE reconnaissables sur le soldat",
        blocks: [
          {
            type: "p",
            text: "La GE n'est pas invisible : elle se manifeste de façon spécifique sur l'équipement individuel. Détecter les symptômes tôt, c'est changer le comportement avant que le problème devienne tactique.",
          },
          {
            type: "ul",
            items: [
              "Radio : bruit de fond constant en bande, perte de réception sur fréquences habituellement propres, voix distordue",
              "GPS : position qui saute, dérive constante de centaines de mètres, perte totale du fix",
              "Smartphone : cellulaire 0 barre malgré tours amies, GPS instable",
              "Datalink de drone ami : vidéo pixellisée, perte de contrôle, fail-safe RTH (return-to-home) déclenché",
              "Systèmes de countermeasure : détecteurs en alarme continue sans source identifiée",
              "Boussole électronique : dérive ou flip soudain (interférence intentionnelle ou naturelle)",
            ],
          },
          {
            type: "callout",
            title: "GPS spoofing",
            body: "Cas particulier : le GPS affiche une position plausible mais fausse. Plus dangereux que le brouillage car aucune alarme. Vérifier avec boussole magnétique et références terrain.",
          },
        ],
      },
      {
        heading: "Effets GE amie",
        blocks: [
          {
            type: "p",
            text: "La GE amie protège vos unités — mais peut aussi dégrader vos propres systèmes. La conscience du brouillage ami évite d'interpréter un effet défensif comme une attaque ennemie.",
          },
          {
            type: "ul",
            items: [
              "Brouilleurs anti-FPV d'équipe : dégradent aussi les radios amies sur bandes superposées",
              "Brouilleurs de tranchée (omnidirectionnels) : créent des « bulles » de silence EM local",
              "Brouilleurs véhicule : protection en mouvement, mais le véhicule est lui-même un émetteur identifiable",
              "GE amie stratégique : peut ne pas être communiquée en détail pour OPSEC — accepter la dégradation",
            ],
          },
        ],
      },
      {
        heading: "Comportement défensif en environnement GE",
        blocks: [
          {
            type: "ul",
            items: [
              "Toujours s'attendre à la GE — ne pas être surpris quand elle arrive",
              "Avoir un plan PACE (Primary, Alternate, Contingency, Emergency) pour chaque moyen de comms",
              "Maintenir une navigation traditionnelle (carte, boussole magnétique) en repli du GPS",
              "Connaître les fréquences de repli et les points de rendez-vous physiques",
              "Limiter ses propres émissions : moins vous émettez, moins vous donnez au SIGINT ennemi",
              "Reconnaître les symptômes tôt et les annoncer sur le net (« EW ACTIVE » comme callout)",
              "Ne pas supposer que la radio fonctionne — tester avec checks brefs en début d'op",
            ],
          },
        ],
      },
      {
        heading: "GE et drones",
        blocks: [
          {
            type: "p",
            text: "La relation entre GE et drones est aujourd'hui le principal point d'équilibre doctrinal du front. La comprendre au niveau du principe fait partie du bagage du soldat moderne.",
          },
          {
            type: "ul",
            items: [
              "FPV sur 5.8 GHz : vulnérable au brouillage commercial, portée du brouilleur 100-500 m",
              "FPV avec ELRS ou lien chiffré : plus résilients, requièrent GE dédiée",
              "Drones en fibre optique : immunisés à la GE (câble physique) — apparus 2024, expansion 2025-2026",
              "Mavic / Autel commerciaux : dépendants du GPS — vulnérables au déni GPS",
              "Munitions rôdeuses (Shahed, Lancet) : nav inertielle + GPS, partiellement résilientes",
            ],
          },
          {
            type: "callout",
            title: "Tendance 2025-2026",
            body: "Les drones fibre optique ont réduit l'efficacité de la GE classique. La réponse est hybride : hard-kill + GE résiduelle + dispersion physique. Le soldat doit supposer que certains FPV passeront.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Faire confiance au GPS sans repli boussole/carte",
              "Interpréter une interférence comme panne de son propre appareil",
              "Augmenter la puissance d'émission pour « percer » le brouillage — expose davantage au DF",
              "Pas de plan PACE documenté au niveau de l'équipe",
              "Ignorer un détecteur GE parce qu'« il sonne tout le temps » — le jour où il change compte",
              "Croire que chiffrement = invisibilité (le chiffrement protège le contenu, pas l'émission)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Le front ukrainien est l'environnement GE le plus dense de l'histoire opérationnelle moderne. Publiquement, des systèmes comme Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2 et Krasukha sont en emploi rotatif sur toute la ligne. Tactiquement, chaque équipe avancée vit avec un GPS instable, des radios dégradées, une dépendance aux liens fibre optique et drone-killer. Expérience partagée : la victoire tactique ne va pas aux unités les plus avancées technologiquement, mais à celles qui ont intégré la dégradation comme état normal et se sont entraînées à y opérer. La carte topographique et la boussole magnétique sont passées de relique à équipement de survie.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
