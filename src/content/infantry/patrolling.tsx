import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Una pattuglia è un'unità che esce da una posizione amica, opera autonomamente in zona di rischio per un tempo definito e rientra. È la forma più antica di operazione di fanteria e una delle più pericolose: la maggior parte delle perdite in pattuglie ucraine moderne avviene durante avvicinamento, rotazione e rientro — non sull'obiettivo. Questo capitolo espone dottrina e considerazioni di pianificazione; non descrive procedure offensive di esecuzione.",
    sections: [
      {
        heading: "Tipi di pattuglia",
        blocks: [
          {
            type: "p",
            text: "La dottrina NATO distingue tipologie di pattuglia per missione. Le tipologie non si combinano arbitrariamente: ognuna ha regole d'ingaggio, profilo di firma e supporti diversi.",
          },
          {
            type: "table",
            headers: ["Tipo", "Missione", "Carattere"],
            rows: [
              ["Reconnaissance (recon)", "Raccogliere informazione", "Silenziosa, evita contatto, riporta"],
              ["Area recon", "Ricognire area definita", "Movimento dispersivo, osservazione multipla"],
              ["Route recon", "Ricognire un percorso", "Lineare, osservazione lungo asse"],
              ["Zone recon", "Ricognire zona estesa", "Pattuglia maggiore, articolata in elementi"],
              ["Standing patrol / OP", "Sorveglianza prolungata da posizione fissa", "Statica, mascherata, copre settore"],
              ["Combat patrol", "Generare effetto contro nemico", "Ingaggia (raid, fighting patrol)"],
              ["Security patrol", "Garantire sicurezza area amica", "Disturbo a infiltrazioni nemiche"],
            ],
          },
          {
            type: "callout",
            title: "PERIMETRO DEL MANUALE",
            body: "Per le combat patrol questo manuale tratta solo aspetti di pianificazione e considerazioni doctrinali. Le sequenze di esecuzione (raid, ambush, fighting patrol) non sono descritte: la loro esecuzione richiede addestramento specifico in unità, repliche dal vivo e supervisione di istruttori qualificati.",
          },
        ],
      },
      {
        heading: "Pianificazione: il modello in 5 paragrafi",
        blocks: [
          {
            type: "p",
            text: "La pianificazione di pattuglia NATO segue il formato dell'Operations Order in 5 paragrafi (SMEAC). È lo standard cui qualsiasi unità multinazionale fa riferimento; saperlo permette di comprendere ordini ucraini quando vengono dati nello stesso formato.",
          },
          {
            type: "ol",
            items: [
              "Situation: nemico (composizione, intenzione, capacità), amici (a destra/sinistra/dietro/davanti), attaccamenti e distacchi, considerazioni civili",
              "Mission: chi, cosa, quando, dove, perché — frase unica, ripetuta due volte",
              "Execution: intent del comandante, schema di manovra, missioni a sub-unità, fuoco, coordinamento",
              "Service support: classi di rifornimento, evacuazione sanitaria, prigionieri, materiale catturato",
              "Command and signal: catena di comando, posizione del comandante, frequenze e callsign, segnali pirotecnici",
            ],
          },
        ],
      },
      {
        heading: "PACE e ridondanza comunicativa",
        blocks: [
          {
            type: "p",
            text: "Una pattuglia che perde comunicazione con il comando perde anche capacità di richiamare supporto, MEDEVAC e fires. La pianificazione delle comunicazioni segue il principio PACE: Primary, Alternate, Contingency, Emergency — quattro modalità di comunicare, ciascuna utilizzabile in modo indipendente.",
          },
          {
            type: "ul",
            items: [
              "Primary: radio tattica cifrata principale (es. Motorola APX, sistema UA dedicato)",
              "Alternate: radio backup su frequenza alternata (es. seconda radio, freq di emergenza)",
              "Contingency: mezzo non-radio (runner, segnale visivo pre-concordato, app cifrata su rete civile)",
              "Emergency: segnali pirotecnici, fumogeni, ultima frequenza di emergenza, marker visivo",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni di firma",
        blocks: [
          {
            type: "p",
            text: "Ogni pattuglia produce firme: visiva, termica, acustica, EM, chimica (urina, fumo, cibo). La pianificazione include la gestione di ogni firma lungo l'intero ciclo della pattuglia.",
          },
          {
            type: "ul",
            items: [
              "Uscita e rientro: punti diversi per ridurre pattern of life sulla posizione amica",
              "Percorso di andata e ritorno: mai identico — un percorso ripetuto diventa zona di ambush",
              "Soste: pianificate in copertura, mai sul percorso visibile",
              "Rifiuti corporei: pianificati in punti coperti, mai in vicinanza dell'OP",
              "Cibo e bevande calde: solo se la sosta è abbastanza coperta termicamente",
              "Riposo: rotazione, mai più del 50% del personale a riposo simultaneamente",
            ],
          },
        ],
      },
      {
        heading: "Procedure di rientro",
        blocks: [
          {
            type: "p",
            text: "Il rientro è la fase più pericolosa: il personale è stanco, il nemico conosce il pattern, la posizione amica è esposta. Le procedure di rientro sono codificate per evitare fratricidio e ingaggio nemico in prossimità delle linee amiche.",
          },
          {
            type: "ul",
            items: [
              "Re-entry point (REP) pre-concordato e identificato sul terreno",
              "Challenge/password con periodo di validità definito, modificati a ogni rotazione",
              "Far recognition signal: visivo, a distanza maggiore della portata di tiro amica",
              "Near recognition signal: a distanza inferiore, verbale o tattile",
              "Linkup: un solo elemento si avvicina alle linee amiche per evitare confusione",
              "Briefing post-pattuglia (debrief) sempre, anche se nulla è successo — il nulla è informazione",
            ],
          },
          {
            type: "warn",
            title: "RIENTRO E FRATRICIDIO",
            body: "Sul fronte ucraino è documentato fratricidio causato da pattuglie che rientrano senza challenge/password aggiornata o senza segnale di riconoscimento. La sentinella alle linee amiche è esposta, nervosa, spesso sotto effetto di privazione del sonno. Avvicinarsi senza segnale è un errore che si paga.",
          },
        ],
      },
      {
        heading: "Considerazioni MEDEVAC",
        blocks: [
          {
            type: "p",
            text: "Ogni pattuglia pianifica MEDEVAC prima di uscire. Sul fronte ucraino la MEDEVAC veicolare è limitata da minaccia drone; spesso il ferito viene mosso a piedi su barella o evacuato in fasi brevi tra coperture.",
          },
          {
            type: "ul",
            items: [
              "Casualty Collection Point (CCP) pre-identificato lungo il percorso",
              "Casualty evacuation lines: percorsi di evacuazione pre-mappati con copertura",
              "Stretchers, tourniquets, IFAK disponibili a ogni effettivo",
              "Combat lifesavers o medici di pattuglia identificati nel briefing",
              "9-line MEDEVAC composto in anticipo per ogni segmento del percorso",
              "Decisione 'continuare la missione' vs 'estrarre il ferito' definita nei criteria di pianificazione",
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
              "Riutilizzare lo stesso percorso di andata per il rientro",
              "Tenere lo stesso challenge/password per più giorni",
              "Pianificare per il caso normale e non per il caso peggiore",
              "Non eseguire rehearsal (prova) della pattuglia con tutto il personale",
              "Affidare la navigazione a una sola persona senza backup",
              "Caricarsi di equipaggiamento eccessivo che rallenta in caso di contatto",
              "Trascurare il debrief al rientro perché 'non è successo niente'",
              "Mancare di SOP fisse per cosa fare se separati dal gruppo",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le pattuglie sul fronte ucraino sono diverse da quelle di scuola NATO storica: più brevi nello spazio percorso, più lunghe nel tempo trascorso in copertura, dominate dalla minaccia FPV. La pattuglia tipo non è una marcia notturna di 10 km — è un avvicinamento di 800 metri condotto in 4 ore con tre soste lunghe, un'osservazione di 6 ore e un rientro in 3 ore. La pianificazione del tempo è più importante della pianificazione del percorso. Il debrief post-pattuglia, sempre, anche su nulla osservato, alimenta il quadro di intelligence dell'unità ospitante.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "A patrol is a unit that leaves a friendly position, operates autonomously in a risk zone for a defined time, and returns. It is the oldest form of infantry operation and one of the most dangerous: the majority of losses in modern Ukrainian patrols occur during approach, rotation and return — not on the objective. This chapter sets out doctrine and planning considerations; it does not describe offensive execution procedures.",
    sections: [
      {
        heading: "Types of patrol",
        blocks: [
          {
            type: "p",
            text: "NATO doctrine distinguishes patrol types by mission. Types do not combine arbitrarily: each has different ROE, signature profile and supports.",
          },
          {
            type: "table",
            headers: ["Type", "Mission", "Character"],
            rows: [
              ["Reconnaissance (recon)", "Collect information", "Silent, avoids contact, reports"],
              ["Area recon", "Reconnoitre defined area", "Dispersive movement, multiple observation"],
              ["Route recon", "Reconnoitre a route", "Linear, observation along the axis"],
              ["Zone recon", "Reconnoitre wide zone", "Larger patrol, structured in elements"],
              ["Standing patrol / OP", "Extended surveillance from fixed position", "Static, concealed, covers a sector"],
              ["Combat patrol", "Generate effect against the enemy", "Engages (raid, fighting patrol)"],
              ["Security patrol", "Provide security in friendly area", "Disrupts enemy infiltration"],
            ],
          },
          {
            type: "callout",
            title: "MANUAL SCOPE",
            body: "For combat patrols this manual covers only planning and doctrinal considerations. Execution sequences (raid, ambush, fighting patrol) are not described: their execution requires specific in-unit training, live rehearsals and supervision by qualified instructors.",
          },
        ],
      },
      {
        heading: "Planning: the 5-paragraph model",
        blocks: [
          {
            type: "p",
            text: "NATO patrol planning follows the 5-paragraph Operations Order format (SMEAC). It is the standard that any multinational unit refers to; knowing it lets you understand Ukrainian orders when given in the same format.",
          },
          {
            type: "ol",
            items: [
              "Situation: enemy (composition, intent, capability), friendlies (left/right/rear/front), attachments and detachments, civil considerations",
              "Mission: who, what, when, where, why — single sentence, repeated twice",
              "Execution: commander's intent, scheme of manoeuvre, missions to sub-units, fires, coordination",
              "Service support: classes of supply, casevac, prisoners, captured material",
              "Command and signal: chain of command, commander's location, frequencies and callsigns, pyrotechnic signals",
            ],
          },
        ],
      },
      {
        heading: "PACE and communications redundancy",
        blocks: [
          {
            type: "p",
            text: "A patrol that loses comms with higher also loses the ability to call for support, MEDEVAC and fires. Communications planning follows the PACE principle: Primary, Alternate, Contingency, Emergency — four ways to communicate, each usable independently.",
          },
          {
            type: "ul",
            items: [
              "Primary: main encrypted tactical radio (e.g. Motorola APX, dedicated UA system)",
              "Alternate: backup radio on alternate frequency (second radio, emergency freq)",
              "Contingency: non-radio means (runner, pre-agreed visual signal, encrypted app on civilian net)",
              "Emergency: pyrotechnic signals, smoke, final emergency frequency, visual marker",
            ],
          },
        ],
      },
      {
        heading: "Signature considerations",
        blocks: [
          {
            type: "p",
            text: "Every patrol produces signatures: visual, thermal, acoustic, EM, chemical (urine, smoke, food). Planning includes managing every signature across the entire patrol cycle.",
          },
          {
            type: "ul",
            items: [
              "Exit and re-entry: different points to reduce pattern of life on the friendly position",
              "Outbound and inbound routes: never identical — a repeated route becomes an ambush zone",
              "Halts: planned in cover, never on the visible route",
              "Bodily waste: planned in covered points, never near the OP",
              "Hot food and drinks: only if the halt is sufficiently thermally covered",
              "Rest: rotation, never more than 50% of personnel resting at once",
            ],
          },
        ],
      },
      {
        heading: "Return procedures",
        blocks: [
          {
            type: "p",
            text: "Return is the most dangerous phase: personnel are tired, the enemy knows the pattern, the friendly position is exposed. Return procedures are codified to avoid fratricide and enemy engagement near friendly lines.",
          },
          {
            type: "ul",
            items: [
              "Re-entry point (REP) pre-agreed and identified on the ground",
              "Challenge/password with defined validity, changed at every rotation",
              "Far recognition signal: visual, beyond friendly weapon range",
              "Near recognition signal: shorter range, verbal or tactile",
              "Linkup: one element approaches the friendly line to avoid confusion",
              "Post-patrol briefing (debrief) always, even if nothing happened — nothing is information",
            ],
          },
          {
            type: "warn",
            title: "RETURN AND FRATRICIDE",
            body: "On the Ukrainian front, fratricide is documented when patrols return without updated challenge/password or without recognition signal. The sentry on the friendly line is exposed, nervous, often sleep-deprived. Approaching without signal is an error that gets paid for.",
          },
        ],
      },
      {
        heading: "MEDEVAC considerations",
        blocks: [
          {
            type: "p",
            text: "Every patrol plans MEDEVAC before leaving. On the Ukrainian front, vehicular MEDEVAC is limited by drone threat; often the casualty is moved on foot on a stretcher or evacuated in short phases between covers.",
          },
          {
            type: "ul",
            items: [
              "Casualty Collection Point (CCP) pre-identified along the route",
              "Casualty evacuation lines: pre-mapped evacuation routes with cover",
              "Stretchers, tourniquets, IFAK available on every soldier",
              "Combat lifesavers or patrol medics identified in the briefing",
              "9-line MEDEVAC drafted in advance for each segment of the route",
              "'Continue mission' vs 'extract casualty' decision defined in planning criteria",
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
              "Reusing the outbound route for the return",
              "Keeping the same challenge/password for multiple days",
              "Planning for the normal case and not the worst case",
              "No rehearsal of the patrol with full personnel",
              "Entrusting navigation to a single person with no backup",
              "Loading excessive kit that slows movement in contact",
              "Skipping post-return debrief because 'nothing happened'",
              "Lacking fixed SOPs for actions on separation",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Patrols on the Ukrainian front differ from historical NATO school patrols: shorter in distance covered, longer in time spent in cover, dominated by the FPV threat. A typical patrol is not a 10 km night march — it is an 800-metre approach conducted in 4 hours with three long halts, 6 hours of observation, and a 3-hour return. Time planning matters more than route planning. The post-patrol debrief, always, even on 'nothing observed', feeds the host unit's intelligence picture.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Uma patrulha é uma unidade que sai de uma posição amiga, opera autonomamente em zona de risco por tempo definido e retorna. É a forma mais antiga de operação de infantaria e uma das mais perigosas: a maior parte das baixas em patrulhas ucranianas modernas ocorre durante aproximação, rotação e retorno — não no objetivo. Este capítulo expõe doutrina e considerações de planejamento; não descreve procedimentos ofensivos de execução.",
    sections: [
      {
        heading: "Tipos de patrulha",
        blocks: [
          {
            type: "p",
            text: "A doutrina OTAN distingue tipos de patrulha por missão. Os tipos não se combinam arbitrariamente: cada um tem ROE, perfil de assinatura e apoios diferentes.",
          },
          {
            type: "table",
            headers: ["Tipo", "Missão", "Caráter"],
            rows: [
              ["Reconnaissance (recon)", "Coletar informação", "Silenciosa, evita contato, reporta"],
              ["Area recon", "Reconhecer área definida", "Movimento dispersivo, observação múltipla"],
              ["Route recon", "Reconhecer rota", "Linear, observação ao longo do eixo"],
              ["Zone recon", "Reconhecer zona ampla", "Patrulha maior, articulada em elementos"],
              ["Standing patrol / OP", "Vigilância prolongada de posição fixa", "Estática, oculta, cobre setor"],
              ["Combat patrol", "Gerar efeito contra inimigo", "Engaja (raid, fighting patrol)"],
              ["Security patrol", "Garantir segurança em área amiga", "Atrapalha infiltração inimiga"],
            ],
          },
          {
            type: "callout",
            title: "ESCOPO DO MANUAL",
            body: "Para combat patrols este manual cobre apenas planejamento e considerações doutrinárias. Sequências de execução (raid, ambush, fighting patrol) não são descritas: sua execução exige treinamento específico em unidade, ensaios reais e supervisão de instrutores qualificados.",
          },
        ],
      },
      {
        heading: "Planejamento: modelo de 5 parágrafos",
        blocks: [
          {
            type: "p",
            text: "O planejamento de patrulha OTAN segue o formato Operations Order em 5 parágrafos (SMEAC). É o padrão a que qualquer unidade multinacional se refere; conhecê-lo permite entender ordens ucranianas quando dadas no mesmo formato.",
          },
          {
            type: "ol",
            items: [
              "Situation: inimigo (composição, intenção, capacidades), amigos (direita/esquerda/atrás/frente), agregações e destacamentos, considerações civis",
              "Mission: quem, o quê, quando, onde, por que — frase única, repetida duas vezes",
              "Execution: intenção do comandante, esquema de manobra, missões para sub-unidades, fogo, coordenação",
              "Service support: classes de suprimento, casevac, prisioneiros, material capturado",
              "Command and signal: cadeia de comando, posição do comandante, frequências e callsigns, sinais pirotécnicos",
            ],
          },
        ],
      },
      {
        heading: "PACE e redundância de comunicações",
        blocks: [
          {
            type: "p",
            text: "Uma patrulha que perde comunicação com o comando perde também a capacidade de chamar apoio, MEDEVAC e fires. O planejamento de comunicações segue o princípio PACE: Primary, Alternate, Contingency, Emergency — quatro modos, cada um usável de forma independente.",
          },
          {
            type: "ul",
            items: [
              "Primary: rádio tático criptografado principal (ex. Motorola APX, sistema UA dedicado)",
              "Alternate: rádio backup em frequência alternativa (segundo rádio, freq de emergência)",
              "Contingency: meio não-rádio (runner, sinal visual pré-combinado, app cifrado em rede civil)",
              "Emergency: sinais pirotécnicos, fumaça, frequência de emergência final, marcador visual",
            ],
          },
        ],
      },
      {
        heading: "Considerações de assinatura",
        blocks: [
          {
            type: "p",
            text: "Toda patrulha produz assinaturas: visual, térmica, acústica, EM, química (urina, fumaça, comida). O planejamento inclui gerir cada assinatura ao longo do ciclo da patrulha.",
          },
          {
            type: "ul",
            items: [
              "Saída e retorno: pontos diferentes para reduzir pattern of life na posição amiga",
              "Rotas de ida e volta: nunca idênticas — rota repetida vira zona de ambush",
              "Paradas: planejadas em cobertura, nunca na rota visível",
              "Resíduos corporais: planejados em pontos cobertos, nunca perto do OP",
              "Comida e bebidas quentes: só se a parada estiver suficientemente coberta termicamente",
              "Descanso: rotação, nunca mais de 50% do pessoal descansando simultaneamente",
            ],
          },
        ],
      },
      {
        heading: "Procedimentos de retorno",
        blocks: [
          {
            type: "p",
            text: "O retorno é a fase mais perigosa: o pessoal está cansado, o inimigo conhece o pattern, a posição amiga está exposta. Os procedimentos de retorno são codificados para evitar fratricídio e engajamento inimigo perto das linhas amigas.",
          },
          {
            type: "ul",
            items: [
              "Re-entry point (REP) pré-combinado e identificado no terreno",
              "Challenge/password com validade definida, trocados a cada rotação",
              "Far recognition signal: visual, além do alcance de tiro amigo",
              "Near recognition signal: alcance menor, verbal ou tátil",
              "Linkup: um único elemento se aproxima da linha amiga para evitar confusão",
              "Briefing pós-patrulha (debrief) sempre, mesmo que nada tenha acontecido — nada é informação",
            ],
          },
          {
            type: "warn",
            title: "RETORNO E FRATRICÍDIO",
            body: "No front ucraniano há fratricídio documentado por patrulhas que retornam sem challenge/password atualizado ou sem sinal de reconhecimento. A sentinela na linha amiga está exposta, nervosa, frequentemente em privação de sono. Aproximar-se sem sinal é erro que se paga.",
          },
        ],
      },
      {
        heading: "Considerações MEDEVAC",
        blocks: [
          {
            type: "p",
            text: "Toda patrulha planeja MEDEVAC antes de sair. No front ucraniano a MEDEVAC veicular é limitada pela ameaça drone; muitas vezes o ferido é movido a pé em maca ou evacuado em fases curtas entre coberturas.",
          },
          {
            type: "ul",
            items: [
              "Casualty Collection Point (CCP) pré-identificado ao longo da rota",
              "Casualty evacuation lines: rotas de evacuação pré-mapeadas com cobertura",
              "Macas, torniquetes, IFAK disponíveis em cada militar",
              "Combat lifesavers ou médicos de patrulha identificados no briefing",
              "9-line MEDEVAC pré-redigida para cada segmento da rota",
              "Decisão 'continuar missão' vs 'extrair ferido' definida em critérios de planejamento",
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
              "Reusar a rota de ida para o retorno",
              "Manter o mesmo challenge/password por vários dias",
              "Planejar pro caso normal, não pro pior caso",
              "Não fazer rehearsal (ensaio) da patrulha com todo o pessoal",
              "Confiar navegação a uma só pessoa sem backup",
              "Carregar equipamento excessivo que atrasa em contato",
              "Pular o debrief no retorno porque 'não aconteceu nada'",
              "Faltar SOPs fixas para o que fazer se separado do grupo",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Patrulhas no front ucraniano são diferentes das de escola OTAN histórica: mais curtas em distância, mais longas em tempo em cobertura, dominadas pela ameaça FPV. A patrulha típica não é uma marcha noturna de 10 km — é uma aproximação de 800 metros em 4 horas com três paradas longas, 6 horas de observação e 3 horas de retorno. Planejamento de tempo importa mais que planejamento de rota. O debrief pós-patrulha, sempre, mesmo em 'nada observado', alimenta o quadro de inteligência da unidade hospedeira.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Une patrouille est une unité qui quitte une position amie, opère de façon autonome en zone de risque pendant un temps défini et rentre. C'est la forme la plus ancienne d'opération d'infanterie et l'une des plus dangereuses : la majorité des pertes dans les patrouilles ukrainiennes modernes survient pendant l'approche, la rotation et le retour — pas sur l'objectif. Ce chapitre expose la doctrine et les considérations de planification ; il ne décrit pas des procédures offensives d'exécution.",
    sections: [
      {
        heading: "Types de patrouille",
        blocks: [
          {
            type: "p",
            text: "La doctrine OTAN distingue les types de patrouille par mission. Les types ne se combinent pas arbitrairement : chacun a des ROE, un profil de signature et des appuis différents.",
          },
          {
            type: "table",
            headers: ["Type", "Mission", "Caractère"],
            rows: [
              ["Reconnaissance (recon)", "Recueillir l'information", "Silencieuse, évite le contact, rend compte"],
              ["Area recon", "Reconnaître une zone définie", "Mouvement dispersif, observation multiple"],
              ["Route recon", "Reconnaître un itinéraire", "Linéaire, observation le long de l'axe"],
              ["Zone recon", "Reconnaître une zone large", "Patrouille plus grande, articulée en éléments"],
              ["Standing patrol / OP", "Surveillance prolongée d'une position fixe", "Statique, masquée, couvre un secteur"],
              ["Combat patrol", "Produire un effet contre l'ennemi", "Engage (raid, fighting patrol)"],
              ["Security patrol", "Sécuriser une zone amie", "Perturbe l'infiltration ennemie"],
            ],
          },
          {
            type: "callout",
            title: "PÉRIMÈTRE DU MANUEL",
            body: "Pour les combat patrols ce manuel ne couvre que la planification et les considérations doctrinales. Les séquences d'exécution (raid, embuscade, fighting patrol) ne sont pas décrites : leur exécution exige un entraînement spécifique en unité, des répétitions réelles et la supervision d'instructeurs qualifiés.",
          },
        ],
      },
      {
        heading: "Planification : le modèle en 5 paragraphes",
        blocks: [
          {
            type: "p",
            text: "La planification de patrouille OTAN suit le format Operations Order en 5 paragraphes (SMEAC). C'est le standard auquel toute unité multinationale se réfère ; le connaître permet de comprendre les ordres ukrainiens quand ils sont donnés dans ce format.",
          },
          {
            type: "ol",
            items: [
              "Situation : ennemi (composition, intention, capacités), amis (droite/gauche/arrière/avant), rattachements et détachements, considérations civiles",
              "Mission : qui, quoi, quand, où, pourquoi — phrase unique, répétée deux fois",
              "Execution : intention du chef, schéma de manœuvre, missions aux sous-unités, feux, coordination",
              "Service support : classes de ravitaillement, casevac, prisonniers, matériel capturé",
              "Command and signal : chaîne de commandement, position du chef, fréquences et indicatifs, signaux pyrotechniques",
            ],
          },
        ],
      },
      {
        heading: "PACE et redondance des communications",
        blocks: [
          {
            type: "p",
            text: "Une patrouille qui perd les comms avec le supérieur perd aussi la capacité d'appeler appuis, MEDEVAC et feux. La planification suit le principe PACE : Primary, Alternate, Contingency, Emergency — quatre moyens, chacun utilisable indépendamment.",
          },
          {
            type: "ul",
            items: [
              "Primary : radio tactique chiffrée principale (ex. Motorola APX, système UA dédié)",
              "Alternate : radio de secours sur fréquence alternative (seconde radio, freq d'urgence)",
              "Contingency : moyen non-radio (estafette, signal visuel pré-convenu, app chiffrée sur réseau civil)",
              "Emergency : signaux pyrotechniques, fumigènes, fréquence d'urgence finale, marqueur visuel",
            ],
          },
        ],
      },
      {
        heading: "Considérations de signature",
        blocks: [
          {
            type: "p",
            text: "Toute patrouille produit des signatures : visuelle, thermique, acoustique, EM, chimique (urine, fumée, nourriture). La planification inclut la gestion de chaque signature sur tout le cycle.",
          },
          {
            type: "ul",
            items: [
              "Sortie et rentrée : points différents pour réduire le pattern of life sur la position amie",
              "Itinéraires aller et retour : jamais identiques — un itinéraire répété devient zone d'embuscade",
              "Haltes : planifiées en couvert, jamais sur l'itinéraire visible",
              "Déchets corporels : planifiés en points couverts, jamais près de l'OP",
              "Nourriture et boisson chaudes : seulement si la halte est suffisamment couverte thermiquement",
              "Repos : rotation, jamais plus de 50 % du personnel au repos simultanément",
            ],
          },
        ],
      },
      {
        heading: "Procédures de rentrée",
        blocks: [
          {
            type: "p",
            text: "La rentrée est la phase la plus dangereuse : le personnel est fatigué, l'ennemi connaît le pattern, la position amie est exposée. Les procédures de rentrée sont codifiées pour éviter le fratricide et l'engagement ennemi près des lignes amies.",
          },
          {
            type: "ul",
            items: [
              "Re-entry point (REP) pré-convenu et identifié sur le terrain",
              "Challenge/password à validité définie, changés à chaque rotation",
              "Far recognition signal : visuel, au-delà de la portée amie",
              "Near recognition signal : portée plus courte, verbal ou tactile",
              "Linkup : un seul élément approche la ligne amie pour éviter la confusion",
              "Debrief post-patrouille toujours, même si rien ne s'est passé — rien est une information",
            ],
          },
          {
            type: "warn",
            title: "RENTRÉE ET FRATRICIDE",
            body: "Sur le front ukrainien, des fratricides sont documentés à la rentrée de patrouilles sans challenge/password à jour ou sans signal de reconnaissance. La sentinelle sur la ligne amie est exposée, nerveuse, souvent en privation de sommeil. Approcher sans signal est une erreur qui se paie.",
          },
        ],
      },
      {
        heading: "Considérations MEDEVAC",
        blocks: [
          {
            type: "p",
            text: "Toute patrouille planifie la MEDEVAC avant de sortir. Sur le front ukrainien la MEDEVAC véhiculée est limitée par la menace drone ; souvent le blessé est déplacé à pied sur civière ou évacué par phases courtes entre couverts.",
          },
          {
            type: "ul",
            items: [
              "Casualty Collection Point (CCP) pré-identifié sur l'itinéraire",
              "Casualty evacuation lines : itinéraires d'évacuation pré-cartographiés avec couvert",
              "Civières, garrots, IFAK disponibles sur chaque soldat",
              "Combat lifesavers ou médecins de patrouille identifiés au briefing",
              "9-line MEDEVAC rédigée à l'avance pour chaque segment de l'itinéraire",
              "Décision « continuer la mission » vs « extraire le blessé » définie dans les critères de planification",
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
              "Réutiliser l'itinéraire aller pour le retour",
              "Garder le même challenge/password plusieurs jours",
              "Planifier pour le cas normal et pas le pire cas",
              "Pas de répétition de la patrouille avec tout le personnel",
              "Confier la navigation à une seule personne sans backup",
              "Charger un équipement excessif qui ralentit en contact",
              "Sauter le debrief de retour parce que « rien ne s'est passé »",
              "Manquer de SOP fixes pour les actions en cas de séparation",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les patrouilles sur le front ukrainien diffèrent de celles de l'école OTAN historique : plus courtes en distance, plus longues en temps passé en couvert, dominées par la menace FPV. La patrouille type n'est pas une marche nocturne de 10 km — c'est une approche de 800 mètres en 4 heures avec trois haltes longues, 6 heures d'observation et 3 heures de retour. La planification du temps compte plus que la planification de l'itinéraire. Le debrief post-patrouille, toujours, même sur « rien observé », alimente le tableau de renseignement de l'unité hôte.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
