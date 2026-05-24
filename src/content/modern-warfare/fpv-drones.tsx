import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "I droni FPV (First Person View) hanno trasformato il fronte ucraino in un poligono di tiro a infrarossi continuo. Questo capitolo descrive cosa sono, come riconoscere la minaccia e quali principi difensivi adottare. NON è una guida al pilotaggio o all'impiego offensivo.",
    sections: [
      {
        heading: "Cos'è un drone FPV",
        blocks: [
          {
            type: "p",
            text: "Un drone FPV è una piattaforma multirotore leggera (tipicamente 7-10 pollici, 1-3 kg) pilotata in tempo reale con visore VR dal pilota. Originariamente quadcopter da racing sportivo, è stato weaponizzato in Ucraina dal 2022 con cariche cave anticarro, frammentazione, termobariche.",
          },
          {
            type: "ul",
            items: [
              "Velocità: 80-150 km/h, autonomia 5-20 minuti, raggio operativo 3-15 km",
              "Frequenze comuni di controllo: 2.4 GHz, 5.8 GHz video, ELRS 900 MHz",
              "Piattaforme: Mavic 3 / Autel EVO (ISR e droppers), build custom Betaflight (FPV kamikaze)",
              "Carico utile: 0.5-3 kg — sufficiente a perforare blindato leggero o ferire fanteria",
              "Loitering munitions russe: Lancet-3 / Izdeliye-52, Shahed-136 / Geran-2 (categoria diversa, raggio strategico)",
            ],
          },
          {
            type: "callout",
            title: "Categoria operativa",
            body: "Distinguere sempre: ISR (Mavic, Autel — osservazione), drop drones (Mavic con sganciatore), FPV kamikaze (one-way), loitering munition (Lancet — categoria semi-strategica), drone bombarider notturno (vampiri, Baba Yaga).",
          },
        ],
      },
      {
        heading: "Riconoscimento della minaccia",
        blocks: [
          {
            type: "p",
            text: "Il riconoscimento precoce è la prima difesa. Un FPV in volo emette segnali acustici e visivi caratteristici. La saturazione del fronte richiede vigilanza continua, non episodica.",
          },
          {
            type: "ul",
            items: [
              "Segnatura acustica: ronzio acuto, frequenza più alta del Mavic, distinguibile da motoseghe / generatori",
              "Segnatura visiva: punto nero in movimento veloce, traiettoria erratica, spesso bassa quota (5-50 m)",
              "Avvisaglie indirette: detector RF tattici (Bulat, ucraino), allerta sul net da posti di osservazione",
              "Indicatori contestuali: aumento del traffico EW, soppressione GPS, ridotta visibilità satellitare",
              "Pattern: i piloti FPV operano in coppia con osservatore (Mavic ricognitore + FPV attaccante)",
            ],
          },
          {
            type: "warn",
            title: "Distanza utile di reazione",
            body: "Da rilevamento acustico a impatto: 5-15 secondi. La decisione difensiva deve essere automatica, non ragionata.",
          },
        ],
      },
      {
        heading: "Principi difensivi di base",
        blocks: [
          {
            type: "p",
            text: "Non esistono procedure passo-passo universali — esistono principi che il singolo applica al contesto. Il principio guida è: ridurre il tempo durante il quale sei un bersaglio statico ed esposto.",
          },
          {
            type: "ul",
            items: [
              "Dispersione: mai concentrati a meno di 10 m senza copertura",
              "Movimento: percorsi non lineari, sosta breve, mai stesso punto due volte nella stessa giornata",
              "Cover overhead: privilegiare percorsi alberati, strutture, gallerie scavate",
              "Profili bassi: ridurre silhouette, evitare campi aperti in ore di volo FPV nemico (alba-tramonto le più attive)",
              "Awareness: un membro per squadra dedicato all'ascolto/scanning del cielo in sosta",
              "Comunicazione: callout immediato \"DRONE\" o \"FPV\" su radio interna alla squadra",
            ],
          },
        ],
      },
      {
        heading: "Ecosistema counter-FPV",
        blocks: [
          {
            type: "p",
            text: "Il counter-FPV è oggi un dominio dottrinale autonomo. La consapevolezza dei sistemi disponibili è parte della cultura del soldato moderno, anche se il loro impiego è specialistico.",
          },
          {
            type: "table",
            headers: ["Categoria", "Funzione (livello dottrinale)"],
            rows: [
              ["Detector RF passivi", "Avvisano della presenza di emissioni FPV in banda"],
              ["EW di trincea (jammer area)", "Negano link di controllo o video su bande comuni"],
              ["Reti anti-drone", "Cattura meccanica, protezione di veicoli e shelter"],
              ["Cage / slat armor", "Detonazione prematura della carica FPV all'impatto su gabbia"],
              ["Shotgun 12-gauge", "Difesa terminale a corto raggio (5-25 m), birdshot"],
              ["Hard-kill C-UAS", "Sistemi automatici, presidio di punti sensibili"],
            ],
          },
          {
            type: "callout",
            title: "Limite della tecnologia",
            body: "Nessun singolo sistema neutralizza l'intera minaccia. La sopravvivenza dipende dalla combinazione di awareness, dispersione, cover e sistemi tecnici — in quest'ordine di priorità.",
          },
        ],
      },
      {
        heading: "Comportamento in zona FPV-saturata",
        blocks: [
          {
            type: "ul",
            items: [
              "Pianificare ogni spostamento come se un FPV fosse già in aria",
              "Ridurre al minimo il tempo in spazi aperti — sprint da copertura a copertura",
              "Evitare di accumularsi su veicoli fermi: smontare e disperdere immediatamente",
              "Mantenere silenzio elettromagnetico quando possibile — meno emissioni, meno detection inversa",
              "Conoscere i punti di evasione lungo ogni percorso (fossi, alberi, edifici)",
              "Non sparare a un FPV in arrivo se non addestrato specificamente — l'attenzione persa è più costosa",
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
              "Sottovalutare il segnale acustico — \"sembrava un Mavic\" è un AAR ricorrente nei feriti",
              "Restare in piedi a guardare per identificare il drone — bersaglio offerto",
              "Affidarsi solo al jammer di squadra senza dispersione fisica",
              "Riunirsi attorno a un mezzo colpito — il secondo FPV è in attesa esattamente di quello",
              "Filmare il drone in arrivo con il telefono — distrazione fatale documentata in OSINT",
              "Pensare che la copertura vegetale sottile basti — un FPV penetra fogliame leggero",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte 2024-2026 il rapporto pubblicamente riportato è di un FPV impiegato ogni 2-5 minuti su settori attivi. Le perdite di mezzi blindati russi e ucraini sono in larga parte attribuite a FPV economici (300-500 USD) contro piattaforme da milioni. Il front-line si è ritirato di 5-15 km su entrambi i lati per uscire dal raggio FPV diretto, generando una \"kill zone\" intermedia attraversata solo di notte, in dispersione, con jamming attivo. La difesa contro FPV è oggi una skill base del fante, non più una specializzazione.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "FPV (First Person View) drones have turned the Ukrainian front into a continuous, infrared-guided shooting range. This chapter describes what they are, how to recognise the threat and which defensive principles to adopt. It is NOT a guide to piloting or offensive employment.",
    sections: [
      {
        heading: "What an FPV drone is",
        blocks: [
          {
            type: "p",
            text: "An FPV drone is a light multirotor platform (typically 7-10 inch, 1-3 kg) flown in real time by a pilot wearing a VR headset. Originally a racing sport quadcopter, it was weaponised in Ukraine from 2022 with shaped-charge anti-armour, fragmentation and thermobaric payloads.",
          },
          {
            type: "ul",
            items: [
              "Speed: 80-150 km/h, endurance 5-20 minutes, operational radius 3-15 km",
              "Common control frequencies: 2.4 GHz, 5.8 GHz video, ELRS 900 MHz",
              "Platforms: Mavic 3 / Autel EVO (ISR and droppers), custom Betaflight builds (FPV kamikaze)",
              "Payload: 0.5-3 kg — sufficient to penetrate light armour or wound dismounts",
              "Russian loitering munitions: Lancet-3 / Izdeliye-52, Shahed-136 / Geran-2 (different category, strategic radius)",
            ],
          },
          {
            type: "callout",
            title: "Operational categories",
            body: "Always distinguish: ISR (Mavic, Autel — observation), drop drones (Mavic with release), FPV kamikaze (one-way), loitering munition (Lancet — semi-strategic), night bomber drones (vampires, Baba Yaga).",
          },
        ],
      },
      {
        heading: "Threat recognition",
        blocks: [
          {
            type: "p",
            text: "Early recognition is the first defence. An FPV in flight emits characteristic acoustic and visual signatures. Front saturation requires continuous, not episodic, vigilance.",
          },
          {
            type: "ul",
            items: [
              "Acoustic signature: sharp whine, higher frequency than Mavic, distinguishable from chainsaws / generators",
              "Visual signature: fast-moving black dot, erratic trajectory, often low altitude (5-50 m)",
              "Indirect cues: tactical RF detectors (Ukrainian Bulat class), net warnings from OPs",
              "Contextual indicators: increased EW traffic, GPS suppression, reduced satellite visibility",
              "Pattern: FPV pilots operate paired with an observer (Mavic recce + FPV striker)",
            ],
          },
          {
            type: "warn",
            title: "Useful reaction window",
            body: "From acoustic detection to impact: 5-15 seconds. Defensive decision must be automatic, not reasoned.",
          },
        ],
      },
      {
        heading: "Base defensive principles",
        blocks: [
          {
            type: "p",
            text: "There are no universal step-by-step procedures — only principles applied to context. The guiding principle is: reduce the time during which you are a static, exposed target.",
          },
          {
            type: "ul",
            items: [
              "Dispersion: never grouped within 10 m without cover",
              "Movement: non-linear routes, brief halts, never the same point twice in a day",
              "Overhead cover: prefer wooded routes, structures, dug galleries",
              "Low profile: reduce silhouette, avoid open fields in peak FPV hours (dawn-dusk most active)",
              "Awareness: one team member dedicated to listening/scanning the sky at halt",
              "Comms: immediate \"DRONE\" or \"FPV\" callout on intra-team radio",
            ],
          },
        ],
      },
      {
        heading: "Counter-FPV ecosystem",
        blocks: [
          {
            type: "p",
            text: "Counter-FPV is today a doctrinal domain of its own. Awareness of available systems is part of the modern soldier's culture, even if employment remains specialist.",
          },
          {
            type: "table",
            headers: ["Category", "Function (doctrinal level)"],
            rows: [
              ["Passive RF detectors", "Warn of FPV emissions in band"],
              ["Trench EW (area jammer)", "Deny control or video link on common bands"],
              ["Anti-drone nets", "Mechanical capture, vehicle and shelter protection"],
              ["Cage / slat armour", "Premature detonation of FPV charge on cage impact"],
              ["12-gauge shotgun", "Terminal short-range defence (5-25 m), birdshot"],
              ["Hard-kill C-UAS", "Automated systems, sensitive-point defence"],
            ],
          },
          {
            type: "callout",
            title: "Technology limit",
            body: "No single system neutralises the whole threat. Survival depends on the combination of awareness, dispersion, cover and technical systems — in that priority order.",
          },
        ],
      },
      {
        heading: "Behaviour in FPV-saturated zones",
        blocks: [
          {
            type: "ul",
            items: [
              "Plan every move as if an FPV is already airborne",
              "Minimise time in open spaces — sprint cover to cover",
              "Avoid bunching on stopped vehicles: dismount and disperse immediately",
              "Maintain electromagnetic silence where possible — fewer emissions, less inverse detection",
              "Know evasion points along every route (ditches, trees, buildings)",
              "Do not shoot at an incoming FPV unless specifically trained — lost attention is more costly",
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
              "Underestimating the acoustic cue — \"it sounded like a Mavic\" is a recurring AAR among casualties",
              "Standing still to identify the drone — target offered",
              "Relying only on team jammer without physical dispersion",
              "Bunching around a hit vehicle — the second FPV is waiting for exactly that",
              "Filming the incoming drone with a phone — fatal distraction documented in OSINT",
              "Trusting thin vegetation cover — an FPV penetrates light foliage",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the 2024-2026 front, the publicly reported ratio is one FPV employed every 2-5 minutes on active sectors. Russian and Ukrainian armoured-vehicle losses are largely attributed to cheap FPVs (300-500 USD) against million-dollar platforms. The front line has receded 5-15 km on both sides to exit direct FPV range, generating an intermediate \"kill zone\" crossed only at night, in dispersion, with active jamming. Defence against FPV is now a base infantry skill, no longer a specialisation.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Drones FPV (First Person View) transformaram o front ucraniano em um polígono de tiro infravermelho contínuo. Este capítulo descreve o que são, como reconhecer a ameaça e quais princípios defensivos adotar. NÃO é um guia de pilotagem ou de emprego ofensivo.",
    sections: [
      {
        heading: "O que é um drone FPV",
        blocks: [
          {
            type: "p",
            text: "Um drone FPV é uma plataforma multirotor leve (tipicamente 7-10 polegadas, 1-3 kg) pilotada em tempo real por um piloto com headset VR. Originalmente quadcopter de corrida, foi militarizado na Ucrânia a partir de 2022 com cargas ocas anticarro, fragmentação e termobáricas.",
          },
          {
            type: "ul",
            items: [
              "Velocidade: 80-150 km/h, autonomia 5-20 minutos, raio operacional 3-15 km",
              "Frequências comuns de controle: 2.4 GHz, 5.8 GHz vídeo, ELRS 900 MHz",
              "Plataformas: Mavic 3 / Autel EVO (ISR e droppers), builds custom Betaflight (FPV kamikaze)",
              "Carga útil: 0.5-3 kg — suficiente para perfurar blindado leve ou ferir infantaria",
              "Munições loitering russas: Lancet-3 / Izdeliye-52, Shahed-136 / Geran-2 (categoria distinta, raio estratégico)",
            ],
          },
          {
            type: "callout",
            title: "Categoria operacional",
            body: "Sempre distinguir: ISR (Mavic, Autel — observação), drop drones (Mavic com soltador), FPV kamikaze (one-way), loitering munition (Lancet — semi-estratégico), drone bombardeiro noturno (vampiros, Baba Yaga).",
          },
        ],
      },
      {
        heading: "Reconhecimento da ameaça",
        blocks: [
          {
            type: "p",
            text: "Reconhecimento precoce é a primeira defesa. Um FPV em voo emite assinaturas acústicas e visuais características. A saturação do front exige vigilância contínua, não episódica.",
          },
          {
            type: "ul",
            items: [
              "Assinatura acústica: zumbido agudo, mais alto que Mavic, distinto de motosserras / geradores",
              "Assinatura visual: ponto preto rápido, trajetória errática, baixa altitude (5-50 m)",
              "Pistas indiretas: detectores RF táticos (Bulat ucraniano), alertas de OPs no net",
              "Indicadores contextuais: aumento de tráfego EW, supressão de GPS, visibilidade satélite reduzida",
              "Padrão: pilotos FPV operam em dupla com observador (Mavic recon + FPV atacante)",
            ],
          },
          {
            type: "warn",
            title: "Janela útil de reação",
            body: "Da detecção acústica ao impacto: 5-15 segundos. A decisão defensiva precisa ser automática, não raciocinada.",
          },
        ],
      },
      {
        heading: "Princípios defensivos base",
        blocks: [
          {
            type: "p",
            text: "Não há procedimentos passo-a-passo universais — só princípios aplicados ao contexto. O princípio-guia é: reduzir o tempo em que você é um alvo estático e exposto.",
          },
          {
            type: "ul",
            items: [
              "Dispersão: nunca agrupados a menos de 10 m sem cobertura",
              "Movimento: rotas não lineares, paradas breves, nunca o mesmo ponto duas vezes no dia",
              "Cobertura overhead: priorizar rotas arborizadas, estruturas, galerias escavadas",
              "Perfil baixo: reduzir silhueta, evitar campos abertos em horários de pico FPV (alvorecer-anoitecer)",
              "Awareness: um membro da equipe dedicado a escuta/scan do céu na parada",
              "Comms: callout imediato \"DRONE\" ou \"FPV\" no rádio interno",
            ],
          },
        ],
      },
      {
        heading: "Ecossistema counter-FPV",
        blocks: [
          {
            type: "p",
            text: "Counter-FPV é hoje um domínio doutrinário autônomo. Conhecer os sistemas disponíveis faz parte da cultura do soldado moderno, mesmo que o emprego seja especializado.",
          },
          {
            type: "table",
            headers: ["Categoria", "Função (nível doutrinário)"],
            rows: [
              ["Detectores RF passivos", "Avisam de emissões FPV em banda"],
              ["EW de trincheira (jammer área)", "Nega link de controle ou vídeo em bandas comuns"],
              ["Redes anti-drone", "Captura mecânica, proteção de veículos e abrigos"],
              ["Cage / slat armor", "Detonação prematura da carga FPV no impacto na gaiola"],
              ["Shotgun calibre 12", "Defesa terminal a curta distância (5-25 m), birdshot"],
              ["Hard-kill C-UAS", "Sistemas automatizados, proteção de pontos sensíveis"],
            ],
          },
          {
            type: "callout",
            title: "Limite da tecnologia",
            body: "Nenhum sistema sozinho neutraliza toda a ameaça. Sobrevivência depende da combinação de awareness, dispersão, cobertura e sistemas técnicos — nessa ordem de prioridade.",
          },
        ],
      },
      {
        heading: "Comportamento em zona FPV-saturada",
        blocks: [
          {
            type: "ul",
            items: [
              "Planejar cada deslocamento como se um FPV já estivesse no ar",
              "Minimizar tempo em espaços abertos — sprint de cobertura em cobertura",
              "Evitar aglomeração em veículos parados: desembarcar e dispersar imediatamente",
              "Manter silêncio eletromagnético quando possível — menos emissões, menos detecção inversa",
              "Conhecer pontos de evasão em cada rota (valas, árvores, edifícios)",
              "Não atirar em FPV chegando sem treinamento específico — atenção perdida custa mais",
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
              "Subestimar a pista acústica — \"parecia um Mavic\" é AAR recorrente em feridos",
              "Parar em pé para identificar o drone — alvo oferecido",
              "Confiar só no jammer de equipe sem dispersão física",
              "Aglomerar em torno de veículo atingido — o segundo FPV está esperando exatamente isso",
              "Filmar o drone chegando com o celular — distração fatal documentada em OSINT",
              "Confiar em cobertura vegetal fina — FPV penetra folhagem leve",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front 2024-2026 a proporção publicamente reportada é de um FPV empregado a cada 2-5 minutos em setores ativos. Perdas blindadas russas e ucranianas são em larga parte atribuídas a FPVs baratos (300-500 USD) contra plataformas de milhões. A linha de frente recuou 5-15 km de ambos os lados para sair do raio FPV direto, gerando uma \"kill zone\" intermediária atravessada só à noite, em dispersão, com jamming ativo. Defesa contra FPV é hoje skill base do fuzileiro, não mais especialização.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Les drones FPV (First Person View) ont transformé le front ukrainien en stand de tir infrarouge continu. Ce chapitre décrit ce qu'ils sont, comment reconnaître la menace et quels principes défensifs adopter. Ce n'est PAS un guide de pilotage ou d'emploi offensif.",
    sections: [
      {
        heading: "Ce qu'est un drone FPV",
        blocks: [
          {
            type: "p",
            text: "Un drone FPV est une plateforme multirotor légère (typiquement 7-10 pouces, 1-3 kg) pilotée en temps réel par un pilote en casque VR. À l'origine quadcopter de racing, il a été militarisé en Ukraine dès 2022 avec charges creuses antichar, fragmentation et thermobariques.",
          },
          {
            type: "ul",
            items: [
              "Vitesse : 80-150 km/h, autonomie 5-20 minutes, rayon opérationnel 3-15 km",
              "Fréquences courantes de contrôle : 2.4 GHz, 5.8 GHz vidéo, ELRS 900 MHz",
              "Plateformes : Mavic 3 / Autel EVO (ISR et droppers), builds custom Betaflight (FPV kamikaze)",
              "Charge utile : 0.5-3 kg — suffisant pour perforer blindage léger ou blesser fantassins",
              "Munitions rôdeuses russes : Lancet-3 / Izdeliye-52, Shahed-136 / Geran-2 (catégorie distincte, portée stratégique)",
            ],
          },
          {
            type: "callout",
            title: "Catégorie opérationnelle",
            body: "Toujours distinguer : ISR (Mavic, Autel — observation), drop drones (Mavic avec largueur), FPV kamikaze (one-way), munition rôdeuse (Lancet — semi-stratégique), drone bombardier de nuit (vampires, Baba Yaga).",
          },
        ],
      },
      {
        heading: "Reconnaissance de la menace",
        blocks: [
          {
            type: "p",
            text: "La reconnaissance précoce est la première défense. Un FPV en vol émet des signatures acoustique et visuelle caractéristiques. La saturation du front demande une vigilance continue, pas épisodique.",
          },
          {
            type: "ul",
            items: [
              "Signature acoustique : bourdonnement aigu, fréquence plus haute que Mavic, distinguable de tronçonneuses / générateurs",
              "Signature visuelle : point noir rapide, trajectoire erratique, souvent basse altitude (5-50 m)",
              "Indices indirects : détecteurs RF tactiques (Bulat ukrainien), alertes net depuis OP",
              "Indicateurs contextuels : hausse du trafic EW, brouillage GPS, visibilité satellite réduite",
              "Schéma : les pilotes FPV opèrent en binôme avec observateur (Mavic recce + FPV frappeur)",
            ],
          },
          {
            type: "warn",
            title: "Fenêtre utile de réaction",
            body: "De la détection acoustique à l'impact : 5-15 secondes. La décision défensive doit être automatique, pas raisonnée.",
          },
        ],
      },
      {
        heading: "Principes défensifs de base",
        blocks: [
          {
            type: "p",
            text: "Pas de procédures pas-à-pas universelles — seulement des principes appliqués au contexte. Principe directeur : réduire le temps pendant lequel vous êtes une cible statique et exposée.",
          },
          {
            type: "ul",
            items: [
              "Dispersion : jamais regroupés à moins de 10 m sans couvert",
              "Mouvement : itinéraires non linéaires, haltes brèves, jamais le même point deux fois dans la journée",
              "Couvert overhead : privilégier itinéraires boisés, structures, galeries creusées",
              "Profil bas : réduire silhouette, éviter terrains ouverts aux heures de pic FPV (aube-crépuscule)",
              "Awareness : un membre d'équipe dédié à l'écoute/scan du ciel à la halte",
              "Comms : callout immédiat « DRONE » ou « FPV » sur radio interne",
            ],
          },
        ],
      },
      {
        heading: "Écosystème counter-FPV",
        blocks: [
          {
            type: "p",
            text: "Le counter-FPV est aujourd'hui un domaine doctrinal autonome. La connaissance des systèmes disponibles fait partie de la culture du soldat moderne, même si l'emploi reste spécialisé.",
          },
          {
            type: "table",
            headers: ["Catégorie", "Fonction (niveau doctrinal)"],
            rows: [
              ["Détecteurs RF passifs", "Avertissent des émissions FPV en bande"],
              ["GE de tranchée (brouillage de zone)", "Nient lien de contrôle ou vidéo sur bandes communes"],
              ["Filets anti-drone", "Capture mécanique, protection véhicules et abris"],
              ["Cage / slat armor", "Détonation prématurée de la charge FPV à l'impact sur cage"],
              ["Fusil calibre 12", "Défense terminale à courte portée (5-25 m), birdshot"],
              ["Hard-kill C-UAS", "Systèmes automatisés, protection points sensibles"],
            ],
          },
          {
            type: "callout",
            title: "Limite de la technologie",
            body: "Aucun système seul ne neutralise toute la menace. La survie dépend de la combinaison awareness, dispersion, couvert et systèmes techniques — dans cet ordre de priorité.",
          },
        ],
      },
      {
        heading: "Comportement en zone FPV-saturée",
        blocks: [
          {
            type: "ul",
            items: [
              "Planifier chaque déplacement comme si un FPV était déjà en vol",
              "Minimiser le temps en espaces ouverts — sprint de couvert en couvert",
              "Éviter le regroupement sur véhicules arrêtés : débarquer et disperser immédiatement",
              "Maintenir silence électromagnétique quand possible — moins d'émissions, moins de détection inverse",
              "Connaître les points d'évasion sur chaque itinéraire (fossés, arbres, bâtiments)",
              "Ne pas tirer sur un FPV en approche sans entraînement spécifique — l'attention perdue coûte plus",
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
              "Sous-estimer l'indice acoustique — « ça ressemblait à un Mavic » est un AAR récurrent chez les blessés",
              "Rester debout pour identifier le drone — cible offerte",
              "Compter uniquement sur le brouilleur d'équipe sans dispersion physique",
              "Se regrouper autour d'un véhicule touché — le deuxième FPV attend exactement ça",
              "Filmer le drone entrant au téléphone — distraction fatale documentée en OSINT",
              "Faire confiance à une végétation mince — un FPV pénètre feuillage léger",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front 2024-2026 le ratio publiquement rapporté est d'un FPV employé toutes les 2-5 minutes sur les secteurs actifs. Les pertes blindées russes et ukrainiennes sont largement attribuées à des FPV bon marché (300-500 USD) contre plateformes à plusieurs millions. La ligne de front a reculé de 5-15 km des deux côtés pour sortir de la portée FPV directe, générant une « kill zone » intermédiaire traversée uniquement de nuit, en dispersion, avec brouillage actif. La défense contre FPV est aujourd'hui une compétence base du fantassin, plus une spécialisation.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
