import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La consapevolezza del campo di battaglia (battlefield awareness) è la capacità di leggere segnali, indicatori e cambiamenti ambientali per anticipare la minaccia. Questo capitolo descrive il framework dottrinale e gli indicatori comuni sul fronte ucraino. NON contiene procedure di ricognizione attiva o targeting offensivo.",
    sections: [
      {
        heading: "Le tre dimensioni della consapevolezza",
        blocks: [
          {
            type: "p",
            text: "La consapevolezza non è uno stato passivo — è un'attività continua su tre dimensioni che si rinforzano a vicenda.",
          },
          {
            type: "table",
            headers: ["Dimensione", "Descrizione"],
            rows: [
              ["Consapevolezza ambientale", "Terreno, meteo, ora del giorno, vegetazione, segnatura termica del paesaggio"],
              ["Consapevolezza della minaccia", "Posizione/intenzione nemica nota o inferita, attività EW, presenza drone"],
              ["Consapevolezza propria", "Posizione amica, stato squadra, equipaggiamento, emissioni, percorsi di evasione"],
            ],
          },
          {
            type: "callout",
            title: "Loop OODA",
            body: "Observe, Orient, Decide, Act. Il loop dottrinale di John Boyd. La consapevolezza nutre i primi due step. Chi vince il loop più velocemente del nemico vive. Senza informazione, il loop non parte.",
          },
        ],
      },
      {
        heading: "Indicatori di artiglieria imminente",
        blocks: [
          {
            type: "p",
            text: "L'artiglieria nemica raramente colpisce \"alla cieca\" sul fronte moderno. C'è quasi sempre un preavviso identificabile per chi sa leggerlo.",
          },
          {
            type: "ul",
            items: [
              "Drone osservatore (Orlan-10, Zala) visibile o segnalato sopra la zona",
              "Aumento traffico SIGINT amico che intercetta callsign nemici di artiglieria",
              "Boati lontani che non corrispondono a colpi in arrivo — preparazione di tiro",
              "Cellulare con segnale GSM improvvisamente blocato — possibile Pole-21 o Leer-3 in attivazione",
              "Movimento sospetto avversario in zona di osservazione — può preparare correzione di tiro",
              "Allerta dal net superiore (\"INCOMING ETA 2 MIN sector X\")",
            ],
          },
        ],
      },
      {
        heading: "Indicatori di attacco drone",
        blocks: [
          {
            type: "ul",
            items: [
              "Ronzio acuto (FPV) o basso costante (Mavic) — vedi cap FPV droni",
              "Detector RF tattico che allarma in banda 5.8 / 2.4 GHz",
              "EW di squadra che si attiva automaticamente",
              "Allerta vocale da membro di squadra dedicato al scanning cielo",
              "Aumento traffico radio nemico che indica coordinazione di pilota",
              "Avvistamento osservatore con binocolo a media distanza — pre-staging dell'attacco",
            ],
          },
        ],
      },
      {
        heading: "Indicatori di attività di fanteria nemica",
        blocks: [
          {
            type: "ul",
            items: [
              "Rumore di passi su vegetazione, frasche spezzate, fango smosso",
              "Tracce fresche di calzature, mozziconi recenti, rifiuti recenti",
              "Lampi di vista breve di silhouette in copertura",
              "Movimento di vegetazione contro il vento o senza motivo apparente",
              "Silenzio improvviso della fauna locale (uccelli, insetti notturni)",
              "Riflessi di vetro / ottiche in posizioni di osservazione potenziali",
            ],
          },
        ],
      },
      {
        heading: "Indicatori di attività EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Radio amica con rumore di fondo costante o perdita di ricezione",
              "GPS che salta, deriva o si spegne",
              "Smartphone senza barre cellulare nonostante torri amiche vicine",
              "Drone amico che torna automaticamente (fail-safe RTH attivato)",
              "Bussola elettronica con deriva non spiegabile da magnetismo locale",
              "Detector EW di squadra che allarma in banda specifica",
            ],
          },
        ],
      },
      {
        heading: "Reading the terrain — terreno come informazione",
        blocks: [
          {
            type: "p",
            text: "Il terreno parla a chi sa ascoltarlo. Ogni dettaglio è un'informazione potenziale sulla minaccia o sulla sopravvivenza.",
          },
          {
            type: "ul",
            items: [
              "Crateri freschi: rivelano direzione di tiro e tipo di munizione",
              "Bossoli, frammenti di guida (Krasnopol fin) — identificano sistema impiegato",
              "Tracce di mezzi cingolati o ruotati — direzione e tipo di forza in transito",
              "Vegetazione spezzata in pattern: passaggio recente o linea di tiro",
              "Macchie di olio, carburante: mezzi danneggiati recentemente nella zona",
              "Mine / IED indicatori: terra smossa, fili sospetti, oggetti incongrui",
              "Cordoli, edifici, alberi come riferimenti permanenti per orientamento e MGRS rapido",
            ],
          },
        ],
      },
      {
        heading: "Pattern of life nemico",
        blocks: [
          {
            type: "p",
            text: "Il nemico ha routine. Riconoscerle è informazione. Senza ricognizione attiva, l'osservazione passiva dalla propria posizione produce un quadro col tempo.",
          },
          {
            type: "ul",
            items: [
              "Orari ricorrenti di volo drone nemico (alba, tramonto, momenti di luce piatta)",
              "Orari di rotazione di unità di artiglieria (silenzio di X ore = movimento)",
              "Pattern di EW: certi sistemi si accendono ad orari prevedibili",
              "Pattern di MEDEVAC nemico: indica posizione di feriti, attività",
              "Traffico veicolare nemico udibile di notte — direzione di rifornimento o ritiro",
              "Frequenze di traffico radio nemico aumentato = operazione imminente",
            ],
          },
        ],
      },
      {
        heading: "Comunicazione della awareness in squadra",
        blocks: [
          {
            type: "ul",
            items: [
              "Briefing daily condiviso: cosa è cambiato, cosa è confermato, cosa è in dubbio",
              "Callouts standardizzati: \"DRONE\", \"EW\", \"INCOMING\", \"CONTACT\", \"MEDEVAC\"",
              "Mappatura collettiva: ogni membro contribuisce a quadro situazionale",
              "Decompressione e debriefing: post-azione raccogliere indicatori per la prossima",
              "Cultura dell'osservazione: chi nota qualcosa lo segnala, anche se sembra piccolo",
              "Niente assumere — verificare e comunicare in formato standard",
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
              "Affidarsi solo alla tecnologia (drone, sensori) trascurando l'osservazione umana",
              "Assumere stabilità della situazione perché \"è sempre stato così\"",
              "Ignorare indicatori \"piccoli\" che sembrano insignificanti (un solo segnale è significativo)",
              "Sovraccarico cognitivo: troppi indicatori senza priorità portano a paralisi",
              "Comunicare osservazioni in modo non standard, non comprensibili in stress",
              "Non aggiornare il quadro situazionale dopo eventi maggiori (impatto, contact, EW)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le brigate ucraine con maggiore esperienza 2022-2026 hanno costruito una cultura dell'osservazione capillare: ogni soldato è un sensore. App militari come Kropyva, Delta, GIS Arta hanno integrato osservazioni di campo in un quadro condiviso, ma il livello di base resta l'awareness umana. Casi documentati di unità che hanno evitato perdite catastrofiche grazie a un singolo soldato che ha notato il drone osservatore a 1 km, o l'aumento di traffico radio nemico la sera prima di un attacco. Sintesi operativa: 'L'informazione vince il 70% dello scontro prima che inizi.' La consapevolezza è un'abilità coltivata — non un dono.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Battlefield awareness is the capacity to read signals, indicators and environmental changes to anticipate the threat. This chapter describes the doctrinal framework and common indicators on the Ukrainian front. It does NOT contain active reconnaissance or offensive targeting procedures.",
    sections: [
      {
        heading: "The three awareness dimensions",
        blocks: [
          {
            type: "p",
            text: "Awareness is not a passive state — it is a continuous activity across three dimensions reinforcing each other.",
          },
          {
            type: "table",
            headers: ["Dimension", "Description"],
            rows: [
              ["Environmental awareness", "Terrain, weather, time of day, vegetation, landscape thermal signature"],
              ["Threat awareness", "Known or inferred enemy position/intent, EW activity, drone presence"],
              ["Own awareness", "Friendly position, squad state, equipment, emissions, evasion routes"],
            ],
          },
          {
            type: "callout",
            title: "OODA Loop",
            body: "Observe, Orient, Decide, Act. John Boyd's doctrinal loop. Awareness feeds the first two steps. Whoever wins the loop faster than the enemy lives. Without information, the loop does not start.",
          },
        ],
      },
      {
        heading: "Indicators of incoming artillery",
        blocks: [
          {
            type: "p",
            text: "Enemy artillery rarely strikes \"blind\" on the modern front. There is almost always an identifiable warning for those who can read it.",
          },
          {
            type: "ul",
            items: [
              "Observer drone (Orlan-10, Zala) visible or reported over the area",
              "Friendly SIGINT traffic surge intercepting enemy artillery callsigns",
              "Distant booms not matching incoming rounds — fire preparation",
              "Cell GSM signal suddenly blocked — possible Pole-21 or Leer-3 activation",
              "Suspicious enemy movement in observation zone — may prepare fire correction",
              "Higher net warning (\"INCOMING ETA 2 MIN sector X\")",
            ],
          },
        ],
      },
      {
        heading: "Indicators of drone attack",
        blocks: [
          {
            type: "ul",
            items: [
              "Sharp whine (FPV) or steady low (Mavic) — see FPV drones chapter",
              "Tactical RF detector alarming in 5.8 / 2.4 GHz band",
              "Team EW activating automatically",
              "Voice alert from team member dedicated to sky scanning",
              "Enemy radio traffic surge indicating pilot coordination",
              "Observer spotting with binoculars at medium distance — attack pre-staging",
            ],
          },
        ],
      },
      {
        heading: "Indicators of enemy infantry activity",
        blocks: [
          {
            type: "ul",
            items: [
              "Footstep noise on vegetation, broken twigs, churned mud",
              "Fresh footwear tracks, recent cigarette butts, recent trash",
              "Brief flashes of silhouette in cover",
              "Vegetation movement against wind or without apparent reason",
              "Sudden silence of local fauna (birds, night insects)",
              "Glass / optics reflections in potential observation positions",
            ],
          },
        ],
      },
      {
        heading: "Indicators of EW activity",
        blocks: [
          {
            type: "ul",
            items: [
              "Friendly radio with constant noise floor or reception loss",
              "GPS jumping, drifting or dropping",
              "Smartphone with no cell bars despite nearby friendly towers",
              "Friendly drone auto-returning (fail-safe RTH triggered)",
              "Electronic compass with drift unexplained by local magnetism",
              "Team EW detector alarming in specific band",
            ],
          },
        ],
      },
      {
        heading: "Reading the terrain — ground as information",
        blocks: [
          {
            type: "p",
            text: "Terrain speaks to those who listen. Every detail is potential information about threat or survival.",
          },
          {
            type: "ul",
            items: [
              "Fresh craters: reveal firing direction and munition type",
              "Casings, guidance fragments (Krasnopol fin) — identify employed system",
              "Tracked or wheeled vehicle tracks — direction and force type in transit",
              "Vegetation broken in pattern: recent passage or line of fire",
              "Oil, fuel stains: vehicles recently damaged in area",
              "Mine / IED indicators: disturbed earth, suspicious wires, incongruous objects",
              "Curbs, buildings, trees as permanent landmarks for orientation and quick MGRS",
            ],
          },
        ],
      },
      {
        heading: "Enemy pattern of life",
        blocks: [
          {
            type: "p",
            text: "The enemy has routines. Recognising them is information. Without active recon, passive observation from one's position produces a picture over time.",
          },
          {
            type: "ul",
            items: [
              "Recurring enemy drone flight hours (dawn, dusk, flat-light moments)",
              "Artillery unit rotation hours (silence for X hours = movement)",
              "EW pattern: certain systems power up at predictable times",
              "Enemy MEDEVAC pattern: indicates casualty location, activity",
              "Audible enemy vehicle traffic at night — resupply or withdrawal direction",
              "Increased enemy radio traffic frequency = imminent operation",
            ],
          },
        ],
      },
      {
        heading: "Squad awareness communication",
        blocks: [
          {
            type: "ul",
            items: [
              "Shared daily briefing: what changed, what is confirmed, what is in doubt",
              "Standardised callouts: \"DRONE\", \"EW\", \"INCOMING\", \"CONTACT\", \"MEDEVAC\"",
              "Collective mapping: every member contributes to situational picture",
              "Decompression and debrief: post-action gather indicators for the next",
              "Observation culture: anyone noticing something reports it, even if small",
              "No assumption — verify and report in standard format",
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
              "Relying only on technology (drone, sensors) neglecting human observation",
              "Assuming situation stability because \"it's always been like this\"",
              "Ignoring \"small\" indicators that seem insignificant (a single signal is significant)",
              "Cognitive overload: too many indicators without priority lead to paralysis",
              "Communicating observations in non-standard ways, not understandable under stress",
              "Not updating situational picture after major events (impact, contact, EW)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The most experienced Ukrainian brigades of 2022-2026 have built a capillary observation culture: every soldier is a sensor. Military apps such as Kropyva, Delta, GIS Arta have integrated field observations into a shared picture, but the base level remains human awareness. Documented cases of units that avoided catastrophic losses thanks to a single soldier who noticed the observer drone at 1 km, or the increase in enemy radio traffic the evening before an attack. Operational synthesis: 'Information wins 70% of the engagement before it begins.' Awareness is a cultivated skill — not a gift.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Battlefield awareness é a capacidade de ler sinais, indicadores e mudanças ambientais para antecipar a ameaça. Este capítulo descreve o framework doutrinário e indicadores comuns no front ucraniano. NÃO contém procedimentos de reconhecimento ativo ou targeting ofensivo.",
    sections: [
      {
        heading: "As três dimensões da awareness",
        blocks: [
          {
            type: "p",
            text: "Awareness não é estado passivo — é atividade contínua em três dimensões que se reforçam mutuamente.",
          },
          {
            type: "table",
            headers: ["Dimensão", "Descrição"],
            rows: [
              ["Awareness ambiental", "Terreno, meteo, hora do dia, vegetação, assinatura térmica da paisagem"],
              ["Awareness da ameaça", "Posição/intenção inimiga conhecida ou inferida, atividade EW, presença de drone"],
              ["Awareness própria", "Posição amiga, estado de equipe, equipamento, emissões, rotas de evasão"],
            ],
          },
          {
            type: "callout",
            title: "Loop OODA",
            body: "Observe, Orient, Decide, Act. O loop doutrinário de John Boyd. A awareness alimenta os dois primeiros passos. Quem vence o loop mais rápido que o inimigo vive. Sem informação, o loop não começa.",
          },
        ],
      },
      {
        heading: "Indicadores de artilharia iminente",
        blocks: [
          {
            type: "p",
            text: "A artilharia inimiga raramente bate \"às cegas\" no front moderno. Quase sempre há aviso identificável para quem sabe ler.",
          },
          {
            type: "ul",
            items: [
              "Drone observador (Orlan-10, Zala) visível ou sinalizado sobre a área",
              "Aumento de tráfego SIGINT amigo interceptando callsigns de artilharia inimiga",
              "Estrondos distantes que não batem com tiros chegando — preparação de tiro",
              "Sinal GSM celular bloqueado de repente — possível Pole-21 ou Leer-3 ativando",
              "Movimento suspeito inimigo em zona de observação — pode preparar correção de tiro",
              "Aviso do net superior (\"INCOMING ETA 2 MIN sector X\")",
            ],
          },
        ],
      },
      {
        heading: "Indicadores de ataque drone",
        blocks: [
          {
            type: "ul",
            items: [
              "Zumbido agudo (FPV) ou baixo constante (Mavic) — ver cap drones FPV",
              "Detector RF tático alarmando em banda 5.8 / 2.4 GHz",
              "EW de equipe ativando automaticamente",
              "Alerta vocal de membro de equipe dedicado ao scanning de céu",
              "Aumento de tráfego rádio inimigo indicando coordenação de piloto",
              "Avistamento de observador com binóculos a média distância — pre-staging do ataque",
            ],
          },
        ],
      },
      {
        heading: "Indicadores de atividade de infantaria inimiga",
        blocks: [
          {
            type: "ul",
            items: [
              "Ruído de passos em vegetação, galhos quebrados, lama revolvida",
              "Pegadas frescas, bitucas recentes, lixo recente",
              "Flashes breves de silhueta em cobertura",
              "Movimento de vegetação contra o vento ou sem razão aparente",
              "Silêncio súbito da fauna local (pássaros, insetos noturnos)",
              "Reflexos de vidro / óticas em posições de observação potenciais",
            ],
          },
        ],
      },
      {
        heading: "Indicadores de atividade EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Rádio amigo com ruído de fundo constante ou perda de recepção",
              "GPS saltando, derivando ou caindo",
              "Smartphone sem barras celular apesar de torres amigas próximas",
              "Drone amigo retornando automaticamente (fail-safe RTH ativado)",
              "Bússola eletrônica com deriva inexplicada por magnetismo local",
              "Detector EW de equipe alarmando em banda específica",
            ],
          },
        ],
      },
      {
        heading: "Reading the terrain — terreno como informação",
        blocks: [
          {
            type: "p",
            text: "O terreno fala para quem sabe ouvir. Cada detalhe é informação potencial sobre ameaça ou sobrevivência.",
          },
          {
            type: "ul",
            items: [
              "Crateras frescas: revelam direção de tiro e tipo de munição",
              "Cartuchos, fragmentos de guidance (aleta Krasnopol) — identificam sistema empregado",
              "Trilhas de veículos cingolados ou rodados — direção e tipo de força em trânsito",
              "Vegetação quebrada em padrão: passagem recente ou linha de tiro",
              "Manchas de óleo, combustível: veículos recentemente danificados na área",
              "Indicadores de mina / IED: terra revolvida, fios suspeitos, objetos incongruentes",
              "Meios-fios, edifícios, árvores como referências permanentes para orientação e MGRS rápido",
            ],
          },
        ],
      },
      {
        heading: "Pattern of life inimigo",
        blocks: [
          {
            type: "p",
            text: "O inimigo tem rotinas. Reconhecê-las é informação. Sem recon ativo, observação passiva da própria posição produz quadro ao longo do tempo.",
          },
          {
            type: "ul",
            items: [
              "Horários recorrentes de voo de drone inimigo (alvorecer, anoitecer, momentos de luz plana)",
              "Horários de rotação de unidades de artilharia (silêncio de X horas = movimento)",
              "Pattern de EW: certos sistemas ligam em horários previsíveis",
              "Pattern de MEDEVAC inimigo: indica posição de feridos, atividade",
              "Tráfego veicular inimigo audível de noite — direção de reabastecimento ou retirada",
              "Frequência de tráfego rádio inimigo aumentada = operação iminente",
            ],
          },
        ],
      },
      {
        heading: "Comunicação da awareness em equipe",
        blocks: [
          {
            type: "ul",
            items: [
              "Briefing diário compartilhado: o que mudou, o que está confirmado, o que está em dúvida",
              "Callouts padronizados: \"DRONE\", \"EW\", \"INCOMING\", \"CONTACT\", \"MEDEVAC\"",
              "Mapeamento coletivo: cada membro contribui ao quadro situacional",
              "Decompressão e debrief: pós-ação coletar indicadores para a próxima",
              "Cultura de observação: quem nota algo sinaliza, mesmo se pequeno",
              "Sem assumir — verificar e comunicar em formato padrão",
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
              "Confiar só na tecnologia (drone, sensores) desprezando a observação humana",
              "Assumir estabilidade da situação porque \"sempre foi assim\"",
              "Ignorar indicadores \"pequenos\" que parecem insignificantes (um único sinal é significativo)",
              "Sobrecarga cognitiva: muitos indicadores sem prioridade levam à paralisia",
              "Comunicar observações de forma não padronizada, incompreensível sob estresse",
              "Não atualizar o quadro situacional após eventos maiores (impacto, contact, EW)",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "As brigadas ucranianas mais experientes 2022-2026 construíram cultura de observação capilar: cada soldado é um sensor. Apps militares como Kropyva, Delta, GIS Arta integraram observações de campo em quadro compartilhado, mas o nível base segue sendo a awareness humana. Casos documentados de unidades que evitaram perdas catastróficas graças a um único soldado que percebeu o drone observador a 1 km, ou o aumento de tráfego rádio inimigo na véspera de um ataque. Síntese operacional: 'A informação ganha 70% do confronto antes dele começar.' Awareness é skill cultivada — não dom.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La conscience du champ de bataille (battlefield awareness) est la capacité à lire signaux, indicateurs et changements environnementaux pour anticiper la menace. Ce chapitre décrit le cadre doctrinal et les indicateurs courants sur le front ukrainien. Il NE contient PAS de procédures de reconnaissance active ou de targeting offensif.",
    sections: [
      {
        heading: "Les trois dimensions de la conscience",
        blocks: [
          {
            type: "p",
            text: "La conscience n'est pas un état passif — c'est une activité continue sur trois dimensions qui se renforcent mutuellement.",
          },
          {
            type: "table",
            headers: ["Dimension", "Description"],
            rows: [
              ["Conscience environnementale", "Terrain, météo, heure du jour, végétation, signature thermique du paysage"],
              ["Conscience de la menace", "Position/intention ennemie connue ou inférée, activité GE, présence drone"],
              ["Conscience propre", "Position amie, état d'équipe, équipement, émissions, routes d'évasion"],
            ],
          },
          {
            type: "callout",
            title: "Boucle OODA",
            body: "Observe, Orient, Decide, Act. La boucle doctrinale de John Boyd. La conscience nourrit les deux premières étapes. Celui qui gagne la boucle plus vite que l'ennemi vit. Sans information, la boucle ne démarre pas.",
          },
        ],
      },
      {
        heading: "Indicateurs d'artillerie imminente",
        blocks: [
          {
            type: "p",
            text: "L'artillerie ennemie frappe rarement « à l'aveugle » sur le front moderne. Il y a presque toujours un préavis identifiable pour qui sait le lire.",
          },
          {
            type: "ul",
            items: [
              "Drone observateur (Orlan-10, Zala) visible ou signalé sur la zone",
              "Hausse de trafic SIGINT ami interceptant indicatifs d'artillerie ennemie",
              "Boums lointains ne correspondant pas à des coups entrants — préparation de tir",
              "Signal GSM cellulaire soudainement bloqué — possible Pole-21 ou Leer-3 en activation",
              "Mouvement suspect adverse en zone d'observation — peut préparer une correction de tir",
              "Alerte du net supérieur (« INCOMING ETA 2 MIN secteur X »)",
            ],
          },
        ],
      },
      {
        heading: "Indicateurs d'attaque drone",
        blocks: [
          {
            type: "ul",
            items: [
              "Bourdonnement aigu (FPV) ou bas constant (Mavic) — voir cap FPV drones",
              "Détecteur RF tactique en alarme en bande 5.8 / 2.4 GHz",
              "GE d'équipe s'activant automatiquement",
              "Alerte vocale du membre d'équipe dédié au scan ciel",
              "Hausse de trafic radio ennemi indiquant coordination de pilote",
              "Repérage d'observateur aux jumelles à moyenne distance — pré-staging de l'attaque",
            ],
          },
        ],
      },
      {
        heading: "Indicateurs d'activité d'infanterie ennemie",
        blocks: [
          {
            type: "ul",
            items: [
              "Bruit de pas sur végétation, brindilles cassées, boue remuée",
              "Empreintes fraîches, mégots récents, déchets récents",
              "Flashes brefs de silhouette sous couvert",
              "Mouvement de végétation contre le vent ou sans raison apparente",
              "Silence soudain de la faune locale (oiseaux, insectes nocturnes)",
              "Reflets de verre / optiques sur positions d'observation potentielles",
            ],
          },
        ],
      },
      {
        heading: "Indicateurs d'activité GE",
        blocks: [
          {
            type: "ul",
            items: [
              "Radio amie avec bruit de fond constant ou perte de réception",
              "GPS qui saute, dérive ou tombe",
              "Smartphone sans barre cellulaire malgré tours amies proches",
              "Drone ami qui retourne automatiquement (fail-safe RTH déclenché)",
              "Boussole électronique avec dérive inexpliquée par le magnétisme local",
              "Détecteur GE d'équipe en alarme en bande spécifique",
            ],
          },
        ],
      },
      {
        heading: "Reading the terrain — le terrain comme information",
        blocks: [
          {
            type: "p",
            text: "Le terrain parle à qui sait l'écouter. Chaque détail est information potentielle sur la menace ou la survie.",
          },
          {
            type: "ul",
            items: [
              "Cratères frais : révèlent direction de tir et type de munition",
              "Douilles, fragments de guidance (ailette Krasnopol) — identifient le système employé",
              "Traces de véhicules chenillés ou à roues — direction et type de force en transit",
              "Végétation cassée en pattern : passage récent ou ligne de tir",
              "Taches d'huile, carburant : véhicules récemment endommagés dans la zone",
              "Indicateurs mine / IED : terre remuée, fils suspects, objets incongrus",
              "Bordures, bâtiments, arbres comme repères permanents pour l'orientation et le MGRS rapide",
            ],
          },
        ],
      },
      {
        heading: "Pattern of life ennemi",
        blocks: [
          {
            type: "p",
            text: "L'ennemi a des routines. Les reconnaître est information. Sans recon active, l'observation passive depuis sa position produit un tableau avec le temps.",
          },
          {
            type: "ul",
            items: [
              "Heures récurrentes de vol de drone ennemi (aube, crépuscule, lumière plate)",
              "Heures de rotation des unités d'artillerie (silence de X heures = mouvement)",
              "Pattern GE : certains systèmes s'allument à des heures prévisibles",
              "Pattern MEDEVAC ennemi : indique position de blessés, activité",
              "Trafic véhicule ennemi audible de nuit — direction de ravitaillement ou retrait",
              "Hausse de fréquence de trafic radio ennemi = opération imminente",
            ],
          },
        ],
      },
      {
        heading: "Communication de la conscience en équipe",
        blocks: [
          {
            type: "ul",
            items: [
              "Briefing quotidien partagé : ce qui a changé, ce qui est confirmé, ce qui est en doute",
              "Callouts standardisés : « DRONE », « EW », « INCOMING », « CONTACT », « MEDEVAC »",
              "Cartographie collective : chaque membre contribue au tableau situationnel",
              "Décompression et debrief : post-action récolter indicateurs pour la prochaine",
              "Culture de l'observation : qui remarque quelque chose le signale, même petit",
              "Pas de supposition — vérifier et communiquer en format standard",
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
              "Compter uniquement sur la technologie (drone, capteurs) en négligeant l'observation humaine",
              "Supposer la stabilité de la situation parce que « ça a toujours été comme ça »",
              "Ignorer les indicateurs « petits » qui semblent insignifiants (un seul signal est significatif)",
              "Surcharge cognitive : trop d'indicateurs sans priorité mènent à la paralysie",
              "Communiquer des observations de façon non standard, incompréhensibles sous stress",
              "Ne pas mettre à jour le tableau situationnel après événements majeurs (impact, contact, GE)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les brigades ukrainiennes les plus expérimentées 2022-2026 ont construit une culture d'observation capillaire : chaque soldat est un capteur. Des applis militaires comme Kropyva, Delta, GIS Arta ont intégré les observations de terrain dans un tableau partagé, mais le niveau de base reste la conscience humaine. Cas documentés d'unités ayant évité des pertes catastrophiques grâce à un seul soldat ayant remarqué le drone observateur à 1 km, ou la hausse du trafic radio ennemi la veille d'une attaque. Synthèse opérationnelle : « L'information gagne 70 % de l'engagement avant qu'il commence. » La conscience est une compétence cultivée — pas un don.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
