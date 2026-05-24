import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il camouflage non è una vernice né un completo: è un sistema di riduzione della segnatura su più spettri — visivo, termico, acustico, elettromagnetico. Sul fronte ucraino la sorveglianza è permanente, multispettrale e geograficamente distribuita: la vecchia logica 'mi nascondo dietro un cespuglio' non basta più. Questo capitolo descrive principi e dottrina di base, non offre formule magiche.",
    sections: [
      {
        heading: "I cinque fattori della scoperta",
        blocks: [
          {
            type: "p",
            text: "La dottrina NATO sintetizza con la sigla SSSSM (Shape, Shine, Silhouette, Shadow, Movement) i cinque fattori che fanno individuare un militare. La camuffatura agisce su tutti e cinque, ciascuno con tecniche specifiche.",
          },
          {
            type: "table",
            headers: ["Fattore", "Cosa rivela", "Contromisura"],
            rows: [
              ["Shape", "Forma riconoscibile (elmo, fucile, zaino)", "Spezzare la sagoma con vegetazione o tessuti irregolari"],
              ["Shine", "Riflessi (ottiche, vetri, lame, occhiali)", "Coprire o opacizzare ogni superficie lucida"],
              ["Silhouette", "Sagoma contro sfondo contrastante", "Mai stagliarsi contro cielo o sfondo chiaro"],
              ["Shadow", "Ombre proprie o di equipaggiamento", "Operare in ombra naturale, mai stare in pieno sole"],
              ["Movement", "Movimento — il fattore più potente di scoperta", "Movimento lento, intermittente, sincronizzato con disturbi naturali"],
            ],
          },
        ],
      },
      {
        heading: "Spettro visivo",
        blocks: [
          {
            type: "p",
            text: "Il pattern del completo deve corrispondere all'ambiente: schemi temperati per Europa centrale, schemi a contrasto basso per neve, schemi a macchia grande per terreno aperto. Il pattern sbagliato è peggio di nessun pattern.",
          },
          {
            type: "ul",
            items: [
              "Vegetazione locale aggiunta su elmo, zaino, schiena spezza la sagoma meglio di qualsiasi pattern",
              "La vegetazione tagliata si secca in poche ore: sostituirla regolarmente",
              "Volto e mani esposte sono i punti più visibili: face paint scuro su rilievi (fronte, naso, zigomi), chiaro su cavi (occhi, sotto guancia)",
              "Mai uniforme nuova in zona di combattimento — riflette luce in modo distintivo",
              "Attenzione ai colori 'sbagliati': zaini civili colorati, scarpe scure su sfondo chiaro, fasce mediche bianche",
            ],
          },
        ],
      },
      {
        heading: "Spettro termico",
        blocks: [
          {
            type: "p",
            text: "Termocamere e droni IR vedono la firma di calore del corpo umano e dei motori indipendentemente da pattern e oscurità. Sul fronte ucraino la sorveglianza termica è permanente. La contromisura termica è specialistica e parziale: nessun tessuto comune annulla completamente la firma.",
          },
          {
            type: "ul",
            items: [
              "Mantelli anti-termici (multispectral cloaks tipo Saab Barracuda, Ghosthood, Tarnkappe) riducono la firma se tenuti a distanza dal corpo",
              "Sfruttare schermi termici naturali: rocce, muri di pietra, alberi a tronco grosso, terreno fresco",
              "Evitare distanza diretta da fonti di calore (motori, fuochi, generatori)",
              "Le superfici metalliche scaldate dal sole emettono firma anche dopo il tramonto",
              "Il sudore aumenta la firma per evaporazione — limitare lo sforzo prima dell'esposizione",
              "L'urina è visibile a termocamera per ore — controllare dove e quando",
            ],
          },
          {
            type: "warn",
            title: "LIMITE TERMICO",
            body: "Nessun mantello anti-termico in commercio rende invisibili. Riducono la firma di una frazione e ritardano il riconoscimento — non lo impediscono. Un operatore esperto a 500 metri con termocamera moderna identifica un corpo umano comunque. La camuffatura termica si combina sempre con ombra, copertura e immobilità.",
          },
        ],
      },
      {
        heading: "Spettro acustico",
        blocks: [
          {
            type: "p",
            text: "Il suono è il primo allarme per il nemico in zona urbana, fra trincee e in vegetazione fitta. La firma acustica è data da movimento, equipaggiamento, voce, dispositivi elettronici. La disciplina acustica è una abitudine, non una procedura.",
          },
          {
            type: "ul",
            items: [
              "Equipaggiamento pre-tape: ogni fibbia, cinghietto, bottone metallico controllato a movimento corporeo prima dell'uscita",
              "Niente velcro aperto/chiuso in prossimità del nemico: bottoni o cinghie silenziose",
              "Borracce piene o vuote, mai mezze (rumore di sciacquio)",
              "Caricatori e granate fissati, niente metallo libero",
              "Telefoni in modalità aerea con suoni e vibrazioni disattivati — meglio spenti e in faraday",
              "Voce sempre a sussurro corto in operazione; segnali manuali e tattili per il resto",
            ],
          },
        ],
      },
      {
        heading: "Spettro elettromagnetico",
        blocks: [
          {
            type: "p",
            text: "Telefoni, radio, GPS, smartwatch, EWR civili emettono segnali misurabili. Sul fronte ucraino la EW russa e ucraina mappa la firma EM delle posizioni avversarie in tempo reale. La camuffatura EM è parte della camuffatura totale.",
          },
          {
            type: "ul",
            items: [
              "Telefoni in faraday bag o lasciati indietro — il 'modo aereo' non è garantito",
              "Smartwatch, fitness tracker, cuffie Bluetooth: rimossi prima dell'uscita",
              "Radio in modalità ricezione fino a quando il traffico è necessario",
              "GPS tattico acceso a finestre breve, spento il resto",
              "Nessun ID Bluetooth o Wi-Fi associabile a un operatore singolo",
            ],
          },
        ],
      },
      {
        heading: "Scelta del pattern",
        blocks: [
          {
            type: "p",
            text: "Il pattern di camouflage non è universale: ogni ambiente ha schemi efficaci e schemi che spiccano. La scelta tiene conto di stagione, vegetazione, illuminazione attesa.",
          },
          {
            type: "table",
            headers: ["Ambiente", "Pattern utile", "Note"],
            rows: [
              ["Bosco europeo estivo", "MM14, M81 Woodland, MultiCam Tropic", "Verde dominante, transizioni morbide"],
              ["Steppa, campi aperti UA", "MultiCam, M05 desert/woodland mix", "Macchie più grandi, toni caldi"],
              ["Inverno con neve", "Pattern snow/alpenflage, sovramaglia bianca", "Coperture bianche su elmo e schiena"],
              ["Urbano grigio/cemento", "Pattern grigi/multicam black", "Spezzare con elementi locali (asfalto, polvere)"],
              ["Notte / NVG", "Pattern scuri, niente IR luminoso", "Pattern visivo conta meno, IR e termico contano molto"],
            ],
          },
          {
            type: "callout",
            title: "PATTERN E IDENTIFICAZIONE",
            body: "In contesti multinazionali alcune unità ucraine usano pattern dedicati per riconoscimento (es. blu/giallo, scoth tape colorato). La camuffatura individuale non deve cancellare l'identificazione amica. Verificare sempre la SOP della unità ospitante prima di modificare il proprio pattern.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Camuffarsi solo dal davanti, dimenticando la sagoma posteriore",
              "Aggiungere vegetazione e non sostituirla quando si secca",
              "Camminare in pieno sole o sulla cima di colline per pigrizia di terreno",
              "Usare equipaggiamento da catalogo nuovo, brillante, ancora con etichette riflettenti",
              "Confidare in un mantello termico senza copertura aggiuntiva",
              "Lasciare lo smartwatch personale al polso durante l'operazione",
              "Indossare cuffie Bluetooth 'solo per la musica' in zona EW",
              "Spostare la maschera facciale di sotto per parlare e dimenticarla giù",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "La firma del singolo soldato sul fronte ucraino oggi è misurata su quattro spettri contemporaneamente: visivo da drone, termico da termocamera FPV, acustico in trincea, EM da EW. La sorveglianza è permanente. Le posizioni durano in proporzione alla disciplina di firma: poche ore senza disciplina, settimane con disciplina rigorosa. La camuffatura non è uno stato ma una manutenzione continua — ogni ora di posizione richiede minuti di sistemazione.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Camouflage is not a paint nor a uniform: it is a signature-reduction system across multiple spectra — visual, thermal, acoustic, electromagnetic. On the Ukrainian front, surveillance is permanent, multi-spectral and geographically distributed: the old 'I hide behind a bush' logic is no longer enough. This chapter describes basic principles and doctrine, not magic formulas.",
    sections: [
      {
        heading: "The five factors of detection",
        blocks: [
          {
            type: "p",
            text: "NATO doctrine summarises with the SSSSM acronym (Shape, Shine, Silhouette, Shadow, Movement) the five factors that cause a soldier to be detected. Camouflage acts on all five, each with specific techniques.",
          },
          {
            type: "table",
            headers: ["Factor", "What it reveals", "Countermeasure"],
            rows: [
              ["Shape", "Recognisable form (helmet, rifle, pack)", "Break the outline with vegetation or irregular fabric"],
              ["Shine", "Reflections (optics, glass, blades, glasses)", "Cover or dull every shiny surface"],
              ["Silhouette", "Outline against contrasting background", "Never skyline against open sky or pale background"],
              ["Shadow", "Own shadow or kit shadow", "Operate in natural shade, never in full sun"],
              ["Movement", "Movement — the strongest detection factor", "Slow, intermittent, synced with natural disturbance"],
            ],
          },
        ],
      },
      {
        heading: "Visual spectrum",
        blocks: [
          {
            type: "p",
            text: "Uniform pattern must match the environment: temperate patterns for Central Europe, low-contrast patterns for snow, large-macropattern for open terrain. The wrong pattern is worse than no pattern.",
          },
          {
            type: "ul",
            items: [
              "Local vegetation added to helmet, pack, back breaks the outline better than any printed pattern",
              "Cut vegetation dries within hours: replace regularly",
              "Face and hands are the most visible points: dark face paint on highlights (forehead, nose, cheekbones), light on hollows (eyes, under cheek)",
              "Never new uniform in the combat zone — reflects light distinctively",
              "Beware 'wrong' colours: bright civilian backpacks, dark boots on pale ground, white medical wrap",
            ],
          },
        ],
      },
      {
        heading: "Thermal spectrum",
        blocks: [
          {
            type: "p",
            text: "Thermal cameras and IR drones see body and engine heat signatures regardless of pattern or darkness. On the Ukrainian front, thermal surveillance is permanent. Thermal countermeasure is specialised and partial: no common fabric fully cancels the signature.",
          },
          {
            type: "ul",
            items: [
              "Anti-thermal cloaks (multi-spectral cloaks such as Saab Barracuda, Ghosthood, Tarnkappe) reduce the signature if kept off the body",
              "Use natural thermal screens: rocks, stone walls, large tree trunks, cool ground",
              "Avoid direct distance from heat sources (engines, fires, generators)",
              "Metal surfaces heated by sun continue to emit a signature well after sunset",
              "Sweat increases the signature through evaporation — limit exertion before exposure",
              "Urine is visible on thermal for hours — control where and when",
            ],
          },
          {
            type: "warn",
            title: "THERMAL LIMIT",
            body: "No anti-thermal cloak on the market makes you invisible. They reduce signature by a fraction and delay recognition — they do not prevent it. A trained operator at 500 metres with a modern thermal still identifies a human body. Thermal camouflage is always combined with shade, cover and stillness.",
          },
        ],
      },
      {
        heading: "Acoustic spectrum",
        blocks: [
          {
            type: "p",
            text: "Sound is the enemy's first alarm in urban areas, trenches and thick vegetation. Acoustic signature comes from movement, kit, voice and electronics. Acoustic discipline is a habit, not a procedure.",
          },
          {
            type: "ul",
            items: [
              "Pre-taped kit: every buckle, strap, metal button checked by body movement before going out",
              "No open/close velcro near the enemy: buttons or silent straps",
              "Canteens full or empty, never half (sloshing)",
              "Magazines and grenades secured, no loose metal",
              "Phones in airplane mode with sound and vibrate disabled — better off and in faraday",
              "Voice always short whisper in operation; hand and tactile signals for the rest",
            ],
          },
        ],
      },
      {
        heading: "Electromagnetic spectrum",
        blocks: [
          {
            type: "p",
            text: "Phones, radios, GPS, smartwatches, civilian wearables emit measurable signals. On the Ukrainian front, Russian and Ukrainian EW map the EM signature of opposing positions in near-real-time. EM camouflage is part of total camouflage.",
          },
          {
            type: "ul",
            items: [
              "Phones in faraday bag or left behind — 'airplane mode' is not guaranteed",
              "Smartwatch, fitness tracker, Bluetooth earbuds: removed before going out",
              "Radio on receive-only until traffic is needed",
              "Tactical GPS on in short windows, off the rest of the time",
              "No Bluetooth or Wi-Fi ID linkable to a single operator",
            ],
          },
        ],
      },
      {
        heading: "Pattern selection",
        blocks: [
          {
            type: "p",
            text: "Camouflage pattern is not universal: each environment has effective patterns and patterns that stand out. Selection accounts for season, vegetation and expected lighting.",
          },
          {
            type: "table",
            headers: ["Environment", "Useful pattern", "Notes"],
            rows: [
              ["European summer forest", "MM14, M81 Woodland, MultiCam Tropic", "Green dominant, soft transitions"],
              ["UA steppe, open fields", "MultiCam, M05 desert/woodland mix", "Larger macropattern, warmer tones"],
              ["Winter with snow", "Snow/alpenflage pattern, white oversmock", "White covers on helmet and back"],
              ["Urban grey/concrete", "Grey patterns / MultiCam Black", "Break with local elements (asphalt, dust)"],
              ["Night / NVG", "Dark patterns, no bright IR", "Visual pattern matters less, IR and thermal matter more"],
            ],
          },
          {
            type: "callout",
            title: "PATTERN AND IDENTIFICATION",
            body: "In multinational contexts some Ukrainian units use dedicated patterns for recognition (e.g. blue/yellow, coloured Scotch tape). Individual camouflage must not erase friendly identification. Always check the host unit's SOP before changing your pattern.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Camouflaging only from the front, forgetting the rear silhouette",
              "Adding vegetation and not replacing it when it dries",
              "Walking in full sun or on hill crests out of terrain laziness",
              "Using brand-new catalogue kit, shiny, still with reflective tags",
              "Trusting a thermal cloak without additional cover",
              "Leaving the personal smartwatch on the wrist during operations",
              "Wearing Bluetooth earbuds 'just for music' in an EW zone",
              "Pulling the face mask down to talk and forgetting it down",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The signature of a single soldier on the Ukrainian front today is measured across four spectra simultaneously: visual from drone, thermal from FPV thermal, acoustic in trench, EM from EW. Surveillance is permanent. Positions last in proportion to signature discipline: hours without it, weeks with rigorous discipline. Camouflage is not a state but ongoing maintenance — every hour in position requires minutes of adjustment.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Camuflagem não é uma tinta nem um uniforme: é um sistema de redução de assinatura em múltiplos espectros — visual, térmico, acústico, eletromagnético. No front ucraniano a vigilância é permanente, multiespectral e geograficamente distribuída: a velha lógica 'me escondo atrás de um arbusto' não basta mais. Este capítulo descreve princípios e doutrina básica, não fórmulas mágicas.",
    sections: [
      {
        heading: "Os cinco fatores de detecção",
        blocks: [
          {
            type: "p",
            text: "A doutrina OTAN sintetiza com a sigla SSSSM (Shape, Shine, Silhouette, Shadow, Movement) os cinco fatores que fazem um militar ser detectado. A camuflagem age sobre todos os cinco, cada um com técnicas específicas.",
          },
          {
            type: "table",
            headers: ["Fator", "O que revela", "Contramedida"],
            rows: [
              ["Shape", "Forma reconhecível (capacete, fuzil, mochila)", "Quebrar o contorno com vegetação ou tecidos irregulares"],
              ["Shine", "Reflexos (óticas, vidros, lâminas, óculos)", "Cobrir ou opacificar toda superfície brilhante"],
              ["Silhouette", "Silhueta contra fundo contrastante", "Nunca destacar-se contra o céu ou fundo claro"],
              ["Shadow", "Sombra própria ou do equipamento", "Operar em sombra natural, nunca em pleno sol"],
              ["Movement", "Movimento — fator de detecção mais forte", "Lento, intermitente, sincronizado com perturbação natural"],
            ],
          },
        ],
      },
      {
        heading: "Espectro visual",
        blocks: [
          {
            type: "p",
            text: "O padrão do uniforme deve combinar com o ambiente: padrões temperados para Europa central, baixo contraste para neve, macropadrão grande para terreno aberto. O padrão errado é pior que nenhum padrão.",
          },
          {
            type: "ul",
            items: [
              "Vegetação local adicionada a capacete, mochila, costas quebra o contorno melhor que qualquer padrão impresso",
              "Vegetação cortada seca em horas: substituir regularmente",
              "Rosto e mãos são os pontos mais visíveis: face paint escuro nas saliências (testa, nariz, maçãs), claro nas cavidades (olhos, sob a bochecha)",
              "Nunca uniforme novo em zona de combate — reflete luz de forma distintiva",
              "Cuidado com cores 'erradas': mochilas civis coloridas, botas escuras em chão claro, atadura branca",
            ],
          },
        ],
      },
      {
        heading: "Espectro térmico",
        blocks: [
          {
            type: "p",
            text: "Câmeras térmicas e drones IR enxergam a assinatura de calor do corpo humano e motores independente de padrão e escuridão. No front ucraniano a vigilância térmica é permanente. Contramedida térmica é especializada e parcial: nenhum tecido comum anula totalmente a assinatura.",
          },
          {
            type: "ul",
            items: [
              "Capas antitérmicas (multiespectrais tipo Saab Barracuda, Ghosthood, Tarnkappe) reduzem se mantidas afastadas do corpo",
              "Usar barreiras térmicas naturais: rochas, muros de pedra, troncos grossos, solo fresco",
              "Evitar distância direta de fontes de calor (motores, fogo, geradores)",
              "Superfícies metálicas aquecidas pelo sol emitem assinatura mesmo após o pôr do sol",
              "Suor aumenta a assinatura por evaporação — limitar esforço antes da exposição",
              "Urina é visível em térmica por horas — controlar onde e quando",
            ],
          },
          {
            type: "warn",
            title: "LIMITE TÉRMICO",
            body: "Nenhuma capa antitérmica no mercado torna invisível. Reduzem fração da assinatura e atrasam o reconhecimento — não impedem. Um operador treinado a 500 metros com térmica moderna identifica um corpo humano. A camuflagem térmica combina-se sempre com sombra, cobertura e imobilidade.",
          },
        ],
      },
      {
        heading: "Espectro acústico",
        blocks: [
          {
            type: "p",
            text: "O som é o primeiro alarme do inimigo em zona urbana, trincheiras e vegetação densa. A assinatura acústica vem de movimento, equipamento, voz e eletrônicos. Disciplina acústica é hábito, não procedimento.",
          },
          {
            type: "ul",
            items: [
              "Equipamento pré-tape: cada fivela, alça, botão metálico verificado com movimento corporal antes da saída",
              "Sem velcro abre/fecha perto do inimigo: botões ou alças silenciosas",
              "Cantis cheios ou vazios, nunca pela metade (chacoalho)",
              "Carregadores e granadas presos, sem metal solto",
              "Telefones em modo avião com som e vibração desligados — melhor desligados em faraday",
              "Voz sempre em sussurro curto em operação; sinais manuais e táteis para o resto",
            ],
          },
        ],
      },
      {
        heading: "Espectro eletromagnético",
        blocks: [
          {
            type: "p",
            text: "Celulares, rádios, GPS, smartwatches, wearables civis emitem sinais mensuráveis. No front ucraniano a EW russa e ucraniana mapeia a assinatura EM das posições adversárias quase em tempo real. Camuflagem EM faz parte da camuflagem total.",
          },
          {
            type: "ul",
            items: [
              "Telefones em faraday bag ou deixados — 'modo avião' não é garantia",
              "Smartwatch, fitness tracker, fone Bluetooth: removidos antes da saída",
              "Rádio em recepção até que o tráfego seja necessário",
              "GPS tático ligado em janelas curtas, desligado o resto",
              "Nenhum ID Bluetooth ou Wi-Fi associável a um operador único",
            ],
          },
        ],
      },
      {
        heading: "Seleção de padrão",
        blocks: [
          {
            type: "p",
            text: "Padrão de camuflagem não é universal: cada ambiente tem padrões eficazes e padrões que destacam. A seleção considera estação, vegetação e iluminação esperada.",
          },
          {
            type: "table",
            headers: ["Ambiente", "Padrão útil", "Notas"],
            rows: [
              ["Floresta europeia verão", "MM14, M81 Woodland, MultiCam Tropic", "Verde dominante, transições suaves"],
              ["Estepe UA, campos abertos", "MultiCam, M05 desert/woodland mix", "Macropadrão maior, tons quentes"],
              ["Inverno com neve", "Padrão snow/alpenflage, sobreveste branca", "Coberturas brancas no capacete e costas"],
              ["Urbano cinza/concreto", "Cinzas / MultiCam Black", "Quebrar com elementos locais (asfalto, poeira)"],
              ["Noite / NVG", "Padrões escuros, sem IR brilhante", "Padrão visual conta menos, IR e térmico contam muito"],
            ],
          },
          {
            type: "callout",
            title: "PADRÃO E IDENTIFICAÇÃO",
            body: "Em contextos multinacionais algumas unidades ucranianas usam padrões dedicados de reconhecimento (azul/amarelo, fita colorida). A camuflagem individual não deve apagar a identificação amiga. Verificar sempre a SOP da unidade hospedeira antes de alterar o padrão.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Camuflar só pela frente, esquecendo a silhueta traseira",
              "Adicionar vegetação e não trocá-la quando seca",
              "Caminhar em pleno sol ou em cumes de colina por preguiça de terreno",
              "Usar equipamento novo de catálogo, brilhante, com etiquetas refletivas",
              "Confiar em capa térmica sem cobertura adicional",
              "Deixar smartwatch pessoal no pulso durante a operação",
              "Usar fone Bluetooth 'só pra música' em zona EW",
              "Puxar a máscara facial para falar e esquecer abaixada",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A assinatura do soldado individual no front ucraniano hoje é medida em quatro espectros simultaneamente: visual por drone, térmica por FPV térmico, acústica em trincheira, EM por EW. A vigilância é permanente. As posições duram em proporção à disciplina de assinatura: horas sem ela, semanas com disciplina rigorosa. Camuflagem não é estado, é manutenção contínua — cada hora em posição exige minutos de ajuste.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le camouflage n'est ni une peinture ni un uniforme : c'est un système de réduction de signature sur plusieurs spectres — visuel, thermique, acoustique, électromagnétique. Sur le front ukrainien, la surveillance est permanente, multispectrale et géographiquement distribuée : la vieille logique « je me cache derrière un buisson » ne suffit plus. Ce chapitre décrit des principes et une doctrine de base, pas des formules magiques.",
    sections: [
      {
        heading: "Les cinq facteurs de détection",
        blocks: [
          {
            type: "p",
            text: "La doctrine OTAN résume avec l'acronyme SSSSM (Shape, Shine, Silhouette, Shadow, Movement) les cinq facteurs qui font détecter un soldat. Le camouflage agit sur les cinq, chacun avec des techniques propres.",
          },
          {
            type: "table",
            headers: ["Facteur", "Ce qu'il révèle", "Contremesure"],
            rows: [
              ["Shape", "Forme reconnaissable (casque, fusil, sac)", "Briser la silhouette avec végétation ou tissus irréguliers"],
              ["Shine", "Reflets (optiques, verre, lames, lunettes)", "Couvrir ou matifier toute surface brillante"],
              ["Silhouette", "Silhouette sur fond contrasté", "Jamais se découper sur le ciel ou un fond clair"],
              ["Shadow", "Ombre propre ou de l'équipement", "Opérer à l'ombre naturelle, jamais en plein soleil"],
              ["Movement", "Mouvement — facteur le plus puissant", "Lent, intermittent, synchronisé avec une perturbation naturelle"],
            ],
          },
        ],
      },
      {
        heading: "Spectre visuel",
        blocks: [
          {
            type: "p",
            text: "Le motif de l'uniforme doit correspondre à l'environnement : motifs tempérés pour l'Europe centrale, faible contraste pour la neige, macromotif large pour terrain ouvert. Un mauvais motif est pire qu'aucun motif.",
          },
          {
            type: "ul",
            items: [
              "La végétation locale ajoutée au casque, au sac, au dos brise la silhouette mieux que n'importe quel motif imprimé",
              "La végétation coupée sèche en quelques heures : la renouveler régulièrement",
              "Visage et mains sont les points les plus visibles : face paint sombre sur les reliefs (front, nez, pommettes), clair sur les creux (yeux, sous la joue)",
              "Jamais d'uniforme neuf en zone de combat — il réfléchit la lumière de manière distinctive",
              "Attention aux couleurs « fausses » : sacs civils colorés, chaussures sombres sur sol clair, bande médicale blanche",
            ],
          },
        ],
      },
      {
        heading: "Spectre thermique",
        blocks: [
          {
            type: "p",
            text: "Les caméras thermiques et drones IR voient la signature thermique du corps humain et des moteurs indépendamment du motif et de l'obscurité. Sur le front ukrainien la surveillance thermique est permanente. La contremesure thermique est spécialisée et partielle : aucun tissu courant n'annule complètement la signature.",
          },
          {
            type: "ul",
            items: [
              "Capes antithermiques (multispectrales type Saab Barracuda, Ghosthood, Tarnkappe) réduisent la signature si tenues à distance du corps",
              "Utiliser des écrans thermiques naturels : rochers, murs de pierre, gros troncs, sol frais",
              "Éviter la distance directe à des sources chaudes (moteurs, feux, groupes électrogènes)",
              "Les surfaces métalliques chauffées par le soleil émettent encore après le coucher",
              "La transpiration augmente la signature par évaporation — limiter l'effort avant l'exposition",
              "L'urine est visible en thermique pendant des heures — contrôler où et quand",
            ],
          },
          {
            type: "warn",
            title: "LIMITE THERMIQUE",
            body: "Aucune cape antithermique du commerce ne rend invisible. Elles réduisent la signature d'une fraction et retardent la reconnaissance — elles ne l'empêchent pas. Un opérateur entraîné à 500 mètres avec une thermique moderne identifie un corps humain. Le camouflage thermique se combine toujours avec ombre, couvert et immobilité.",
          },
        ],
      },
      {
        heading: "Spectre acoustique",
        blocks: [
          {
            type: "p",
            text: "Le son est la première alerte de l'ennemi en zone urbaine, en tranchée et en végétation dense. La signature acoustique vient du mouvement, de l'équipement, de la voix et des électroniques. La discipline acoustique est une habitude, pas une procédure.",
          },
          {
            type: "ul",
            items: [
              "Équipement pré-scotché : chaque boucle, sangle, bouton métallique vérifié au mouvement corporel avant la sortie",
              "Pas de velcro ouvert/fermé près de l'ennemi : boutons ou sangles silencieuses",
              "Gourdes pleines ou vides, jamais à moitié (clapotis)",
              "Chargeurs et grenades fixés, pas de métal libre",
              "Téléphones en mode avion son et vibration coupés — mieux : éteints et en faraday",
              "Voix toujours en chuchotement court en opération ; signaux manuels et tactiles sinon",
            ],
          },
        ],
      },
      {
        heading: "Spectre électromagnétique",
        blocks: [
          {
            type: "p",
            text: "Téléphones, radios, GPS, smartwatches, wearables civils émettent des signaux mesurables. Sur le front ukrainien, les GE russe et ukrainienne cartographient la signature EM des positions adverses en quasi temps réel. Le camouflage EM fait partie du camouflage total.",
          },
          {
            type: "ul",
            items: [
              "Téléphones en faraday bag ou laissés à l'arrière — le « mode avion » n'est pas garanti",
              "Smartwatch, tracker, écouteurs Bluetooth : retirés avant la sortie",
              "Radio en réception seule tant que le trafic n'est pas nécessaire",
              "GPS tactique allumé sur fenêtres courtes, éteint le reste",
              "Aucun ID Bluetooth ou Wi-Fi rattachable à un opérateur unique",
            ],
          },
        ],
      },
      {
        heading: "Choix du motif",
        blocks: [
          {
            type: "p",
            text: "Le motif de camouflage n'est pas universel : chaque environnement a des motifs efficaces et des motifs qui ressortent. Le choix tient compte de la saison, de la végétation et de l'éclairage attendu.",
          },
          {
            type: "table",
            headers: ["Environnement", "Motif utile", "Notes"],
            rows: [
              ["Forêt européenne été", "MM14, M81 Woodland, MultiCam Tropic", "Vert dominant, transitions douces"],
              ["Steppe UA, champs ouverts", "MultiCam, M05 desert/woodland", "Macromotif plus large, tons chauds"],
              ["Hiver neige", "Motif snow/alpenflage, surchemise blanche", "Couvertures blanches casque et dos"],
              ["Urbain gris/béton", "Gris / MultiCam Black", "Briser avec éléments locaux (bitume, poussière)"],
              ["Nuit / NVG", "Motifs sombres, pas d'IR brillant", "Motif visuel compte moins, IR et thermique comptent plus"],
            ],
          },
          {
            type: "callout",
            title: "MOTIF ET IDENTIFICATION",
            body: "En contexte multinational, certaines unités ukrainiennes utilisent des motifs dédiés de reconnaissance (bleu/jaune, scotch coloré). Le camouflage individuel ne doit pas effacer l'identification amie. Toujours vérifier la SOP de l'unité hôte avant de modifier son motif.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Se camoufler seulement de face en oubliant la silhouette arrière",
              "Ajouter de la végétation et ne pas la remplacer quand elle sèche",
              "Marcher en plein soleil ou sur la crête par paresse de terrain",
              "Utiliser un équipement neuf, brillant, encore avec étiquettes réfléchissantes",
              "Faire confiance à une cape thermique sans couvert additionnel",
              "Garder une smartwatch personnelle au poignet pendant l'opération",
              "Porter des écouteurs Bluetooth « juste pour la musique » en zone GE",
              "Baisser le masque pour parler et l'oublier baissé",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La signature du soldat individuel sur le front ukrainien aujourd'hui se mesure sur quatre spectres simultanément : visuel par drone, thermique par FPV thermique, acoustique en tranchée, EM par GE. La surveillance est permanente. Les positions durent en proportion de la discipline de signature : quelques heures sans discipline, semaines avec discipline rigoureuse. Le camouflage n'est pas un état mais un entretien continu — chaque heure en position demande des minutes d'ajustement.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
