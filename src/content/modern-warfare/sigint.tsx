import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "SIGINT (Signals Intelligence) è l'attività di intercettazione e analisi di emissioni elettromagnetiche avversarie. Questo capitolo descrive la dottrina, perché ogni trasmissione amica è esposta e quale disciplina difensiva deriva da questa realtà. NON contiene procedure di intercettazione, decifratura o impiego offensivo.",
    sections: [
      {
        heading: "Le tre componenti del SIGINT",
        blocks: [
          {
            type: "p",
            text: "Il SIGINT si articola in tre sottodiscipline, ciascuna con effetto specifico sulle unità in linea.",
          },
          {
            type: "table",
            headers: ["Componente", "Funzione"],
            rows: [
              ["COMINT (Communications Intelligence)", "Intercettazione di comunicazioni vocali, dati, messaggistica"],
              ["ELINT (Electronic Intelligence)", "Intercettazione di emissioni non-comunicazione (radar, datalink, telemetria drone)"],
              ["FISINT (Foreign Instrumentation SIGINT)", "Intercettazione di telemetria, datalink di test, segnali strumentali"],
            ],
          },
          {
            type: "callout",
            title: "Implicazione",
            body: "Anche un drone amico in volo emette ELINT al nemico. Anche una stazione meteo trasmette FISINT. Tutto ciò che irradia in spettro è osservabile.",
          },
        ],
      },
      {
        heading: "Perché ogni trasmissione è esposta",
        blocks: [
          {
            type: "p",
            text: "L'idea che \"il mio segnale è troppo debole / la mia banda è strana / parlo in dialetto\" è il primo errore dottrinale. Una rete SIGINT moderna non lavora come un orecchio umano.",
          },
          {
            type: "ul",
            items: [
              "Sensibilità: ricevitori SDR moderni captano segnali in banda larga continuamente, anche -120 dBm",
              "Spettro: tutto lo spettro utilizzabile (3 kHz - 40 GHz) è ascoltato simultaneamente",
              "Memoria: traffico catturato è archiviato e analizzato in post-elaborazione, non in tempo reale obbligatoriamente",
              "Triangolazione: tre ricevitori producono fix metrico su qualsiasi emissione > 6 secondi",
              "Analisi pattern: callsign ricorrenti, orari, sequenze sono profilati senza decifrare contenuto",
              "Crowdsourcing: in Ucraina anche operatori amatoriali con SDR partecipano al pool",
            ],
          },
        ],
      },
      {
        heading: "Cosa produce il SIGINT in output",
        blocks: [
          {
            type: "p",
            text: "Il prodotto SIGINT non è un \"messaggio decifrato\". È più spesso un pacchetto di indicatori che alimentano il targeting o l'analisi di intelligence.",
          },
          {
            type: "table",
            headers: ["Output", "Uso operativo"],
            rows: [
              ["Grid MGRS di trasmettitore", "Targeting artiglieria / drone (kill chain 2-15 min)"],
              ["Profilo di rete amica", "Ordine di battaglia, struttura comando-controllo"],
              ["Pattern of life", "Orari di attività, rotazioni, abitudini di unità"],
              ["Identificazione personale", "Riconoscimento vocale, biometria vocale di comandanti"],
              ["Stato operativo", "Tono, urgenza, traffico aumentato = operazione imminente"],
              ["Equipaggiamento", "Identificazione apparati dalle loro firme elettromagnetiche"],
            ],
          },
        ],
      },
      {
        heading: "Cifratura: cosa protegge e cosa no",
        blocks: [
          {
            type: "p",
            text: "La cifratura è uno strumento parziale. Comprenderne i limiti è fondamentale per non avere falsa sicurezza.",
          },
          {
            type: "ul",
            items: [
              "Protegge: il contenuto del messaggio (se la cifra è robusta e ben implementata)",
              "NON protegge: l'esistenza della trasmissione (emissione rilevabile)",
              "NON protegge: la durata della trasmissione (utile a DF)",
              "NON protegge: la frequenza (analizzabile per identificare sistema)",
              "NON protegge: la posizione del trasmettitore (DF su qualsiasi onda EM)",
              "NON protegge: il pattern of life (orari, frequenze di scambio)",
            ],
          },
          {
            type: "warn",
            title: "Cifratura ≠ invisibilità",
            body: "La domanda non è \"il nemico capirà cosa ho detto?\" ma \"il nemico saprà che ho trasmesso, da dove e per quanto?\". La risposta è quasi sempre sì.",
          },
        ],
      },
      {
        heading: "Disciplina difensiva derivata",
        blocks: [
          {
            type: "ul",
            items: [
              "Assumere SEMPRE l'ascolto: ogni PTT è un evento osservato",
              "Brevità: trasmissioni < 6 secondi quando possibile, < 15 secondi per report",
              "Movimento dopo trasmissione lunga: spostarsi entro 60 secondi se la trasmissione ha superato i 10 secondi",
              "Niente nomi propri, niente intenzioni operative in chiaro, niente posizioni amiche",
              "PACE plan: ridondanza di canali per evitare di forzare un canale compromesso",
              "Silenzio elettromagnetico in preparazione di operazione sensibile",
              "Mai trasmettere da posizione fissa esposta — sempre coperta o mobile",
              "Disciplina di lingua: russo o ucraino non nascondono nulla, entrambe le parti hanno bilingue",
            ],
          },
        ],
      },
      {
        heading: "Cellulari, smartphone, app",
        blocks: [
          {
            type: "p",
            text: "Lo smartphone è un dispositivo SIGINT contro chi lo porta. Anche spento può essere problematico in certi contesti.",
          },
          {
            type: "ul",
            items: [
              "GSM / 4G: identifica IMEI e SIM, geolocalizza tramite cell tower triangolation",
              "Wi-Fi attivo: trasmette MAC e probe per reti note (rivela storia di movimento)",
              "Bluetooth: scoperto come dispositivo unico in beacon",
              "App social: metadata EXIF, geolocalizzazione foto, pattern di posting",
              "Sistema Leer-3 russo (con drone Orlan-10): intercetta GSM tattico e inietta SMS",
              "Regola di campo: smartphone in airplane mode + spento + sacchetto Faraday in zona avanzata",
            ],
          },
          {
            type: "callout",
            title: "Telegram, Signal, WhatsApp",
            body: "Le app cifrate proteggono il contenuto, NON l'identificazione del dispositivo né la sua geolocalizzazione cellulare. Su fronte russo-ucraino, l'uso di smartphone è una causa documentata di colpi mirati su posizioni amiche.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Pensare che cifratura = sicurezza totale",
              "Trasmettere a lungo perché \"siamo lontani dal fronte\" (Murmansk-BN ascolta a centinaia di km)",
              "Usare smartphone in zona avanzata anche solo \"per controllare la mappa\"",
              "Selfie / video con uniforme in posizioni operative (geolocalizzazione automatica)",
              "Fidarsi di \"frequenze poco usate\" — i ricevitori SDR coprono tutto in continuo",
              "Discutere intenzioni operative in chiamata vocale anche se cifrata",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Casi pubblicamente documentati: posizioni di comando rivelate da uso di smartphone, perdite mirate da intercettazione di radio Baofeng non cifrate, colpi di artiglieria a 5-10 minuti da una trasmissione lunga in chiaro. Operativamente, ogni unità in linea opera sotto l'assunzione che il SIGINT avversario sia continuo, di alta qualità, e collegato direttamente a unità di tiro. Il principio sintetizzato dai veterani: 'Se trasmetti, ti vedono. Se ti vedono, ti contano. Se ti contano, ti colpiscono.' La risposta non è non trasmettere — è trasmettere male per il nemico: breve, cifrato dove possibile, da posizione mobile, con disciplina di contenuto.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "SIGINT (Signals Intelligence) is the activity of intercepting and analysing enemy electromagnetic emissions. This chapter describes the doctrine, why every friendly transmission is exposed, and the defensive discipline that follows. It does NOT contain intercept, decryption or offensive procedures.",
    sections: [
      {
        heading: "The three SIGINT components",
        blocks: [
          {
            type: "p",
            text: "SIGINT breaks into three sub-disciplines, each with specific effect on units in the line.",
          },
          {
            type: "table",
            headers: ["Component", "Function"],
            rows: [
              ["COMINT (Communications Intelligence)", "Intercept of voice, data, messaging communications"],
              ["ELINT (Electronic Intelligence)", "Intercept of non-comms emissions (radar, datalinks, drone telemetry)"],
              ["FISINT (Foreign Instrumentation SIGINT)", "Intercept of telemetry, test datalinks, instrumentation signals"],
            ],
          },
          {
            type: "callout",
            title: "Implication",
            body: "Even a friendly drone in flight emits ELINT to the enemy. Even a weather station transmits FISINT. Anything radiating in spectrum is observable.",
          },
        ],
      },
      {
        heading: "Why every transmission is exposed",
        blocks: [
          {
            type: "p",
            text: "The idea that \"my signal is too weak / my band is unusual / I speak dialect\" is the first doctrinal error. A modern SIGINT net does not work like a human ear.",
          },
          {
            type: "ul",
            items: [
              "Sensitivity: modern SDR receivers capture wideband signals continuously, even at -120 dBm",
              "Spectrum: the whole usable spectrum (3 kHz - 40 GHz) is listened simultaneously",
              "Memory: captured traffic is stored and analysed in post-processing, not necessarily live",
              "Triangulation: three receivers produce a metric fix on any emission > 6 seconds",
              "Pattern analysis: recurring callsigns, hours, sequences profiled without decrypting content",
              "Crowdsourcing: in Ukraine, amateur SDR operators contribute to the pool",
            ],
          },
        ],
      },
      {
        heading: "SIGINT output products",
        blocks: [
          {
            type: "p",
            text: "SIGINT output is not a \"decrypted message\". It is more often a package of indicators feeding targeting or intelligence analysis.",
          },
          {
            type: "table",
            headers: ["Output", "Operational use"],
            rows: [
              ["Transmitter MGRS grid", "Artillery / drone targeting (kill chain 2-15 min)"],
              ["Friendly net profile", "Order of battle, command-control structure"],
              ["Pattern of life", "Activity hours, rotations, unit habits"],
              ["Personal identification", "Voice recognition, voice biometrics of commanders"],
              ["Operational state", "Tone, urgency, traffic surge = imminent operation"],
              ["Equipment", "System identification from electromagnetic fingerprint"],
            ],
          },
        ],
      },
      {
        heading: "Encryption: what it protects, what it does not",
        blocks: [
          {
            type: "p",
            text: "Encryption is a partial tool. Understanding its limits is fundamental to avoid false security.",
          },
          {
            type: "ul",
            items: [
              "Protects: message content (if cipher is robust and well-implemented)",
              "Does NOT protect: existence of the transmission (emission detectable)",
              "Does NOT protect: transmission duration (useful for DF)",
              "Does NOT protect: frequency (analysable for system ID)",
              "Does NOT protect: transmitter position (DF on any EM wave)",
              "Does NOT protect: pattern of life (hours, exchange frequencies)",
            ],
          },
          {
            type: "warn",
            title: "Encryption ≠ invisibility",
            body: "The question is not \"will the enemy understand what I said?\" but \"will the enemy know I transmitted, from where and for how long?\". The answer is almost always yes.",
          },
        ],
      },
      {
        heading: "Derived defensive discipline",
        blocks: [
          {
            type: "ul",
            items: [
              "ALWAYS assume listening: every PTT is an observed event",
              "Brevity: transmissions < 6 seconds when possible, < 15 seconds for reports",
              "Move after long transmission: relocate within 60 seconds if a transmission exceeded 10 seconds",
              "No proper names, no operational intent in clear, no friendly positions",
              "PACE plan: channel redundancy to avoid forcing a compromised channel",
              "Electromagnetic silence preparing a sensitive operation",
              "Never transmit from a fixed exposed position — always covered or mobile",
              "Language discipline: Russian or Ukrainian hides nothing, both sides have bilinguals",
            ],
          },
        ],
      },
      {
        heading: "Phones, smartphones, apps",
        blocks: [
          {
            type: "p",
            text: "The smartphone is a SIGINT device against its carrier. Even off, it can be problematic in certain contexts.",
          },
          {
            type: "ul",
            items: [
              "GSM / 4G: IDs IMEI and SIM, geolocates via cell tower triangulation",
              "Active Wi-Fi: broadcasts MAC and probes for known nets (reveals movement history)",
              "Bluetooth: discoverable as a unique device in beacon",
              "Social apps: EXIF metadata, photo geolocation, posting patterns",
              "Russian Leer-3 system (with Orlan-10 drone): intercepts tactical GSM and injects SMS",
              "Field rule: smartphone in airplane mode + powered off + Faraday bag in forward zone",
            ],
          },
          {
            type: "callout",
            title: "Telegram, Signal, WhatsApp",
            body: "Encrypted apps protect content, NOT device identification or cellular geolocation. On the Russo-Ukrainian front, smartphone use is a documented cause of targeted strikes on friendly positions.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Thinking encryption = full security",
              "Long transmissions because \"we're far from the front\" (Murmansk-BN listens hundreds of km away)",
              "Smartphone in forward zone even \"just to check the map\"",
              "Selfies / video in uniform at operational positions (automatic geolocation)",
              "Trusting \"rarely used frequencies\" — SDR receivers cover everything continuously",
              "Discussing operational intent on voice call even if encrypted",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Publicly documented cases: command posts revealed by smartphone use, targeted casualties from unencrypted Baofeng intercept, artillery rounds 5-10 minutes after a long unencrypted transmission. Operationally, every forward unit operates assuming enemy SIGINT is continuous, high-quality, and directly linked to fires units. Veteran synthesis: 'If you transmit, they see you. If they see you, they count you. If they count you, they hit you.' The answer is not to stop transmitting — it is to transmit badly for the enemy: short, encrypted where possible, from a mobile position, with content discipline.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "SIGINT (Signals Intelligence) é a atividade de interceptação e análise de emissões eletromagnéticas inimigas. Este capítulo descreve a doutrina, por que cada transmissão amiga está exposta e a disciplina defensiva derivada. NÃO contém procedimentos de interceptação, decifragem ou emprego ofensivo.",
    sections: [
      {
        heading: "Os três componentes do SIGINT",
        blocks: [
          {
            type: "p",
            text: "SIGINT se divide em três subdisciplinas, cada uma com efeito específico nas unidades em linha.",
          },
          {
            type: "table",
            headers: ["Componente", "Função"],
            rows: [
              ["COMINT (Communications Intelligence)", "Intercept de comms voz, dados, mensageria"],
              ["ELINT (Electronic Intelligence)", "Intercept de emissões não-comms (radar, datalinks, telemetria drone)"],
              ["FISINT (Foreign Instrumentation SIGINT)", "Intercept de telemetria, datalinks de teste, sinais instrumentais"],
            ],
          },
          {
            type: "callout",
            title: "Implicação",
            body: "Mesmo um drone amigo em voo emite ELINT ao inimigo. Mesmo uma estação meteo transmite FISINT. Tudo que irradia em espectro é observável.",
          },
        ],
      },
      {
        heading: "Por que cada transmissão está exposta",
        blocks: [
          {
            type: "p",
            text: "A ideia de \"meu sinal é fraco demais / minha banda é incomum / falo dialeto\" é o primeiro erro doutrinário. Uma rede SIGINT moderna não funciona como ouvido humano.",
          },
          {
            type: "ul",
            items: [
              "Sensibilidade: receptores SDR modernos captam sinais de banda larga continuamente, mesmo -120 dBm",
              "Espectro: todo o espectro utilizável (3 kHz - 40 GHz) é escutado simultaneamente",
              "Memória: tráfego capturado é armazenado e analisado em pós-processamento, não obrigatoriamente ao vivo",
              "Triangulação: três receptores produzem fix métrico em qualquer emissão > 6 segundos",
              "Análise pattern: indicativos recorrentes, horários, sequências são perfilados sem decifrar conteúdo",
              "Crowdsourcing: na Ucrânia até operadores SDR amadores contribuem ao pool",
            ],
          },
        ],
      },
      {
        heading: "Produtos de saída do SIGINT",
        blocks: [
          {
            type: "p",
            text: "A saída SIGINT não é \"mensagem decifrada\". É mais frequentemente um pacote de indicadores alimentando targeting ou análise de intel.",
          },
          {
            type: "table",
            headers: ["Output", "Uso operacional"],
            rows: [
              ["Grid MGRS de transmissor", "Targeting artilharia / drone (kill chain 2-15 min)"],
              ["Perfil de rede amiga", "Ordem de batalha, estrutura comando-controle"],
              ["Pattern of life", "Horários de atividade, rotações, hábitos de unidade"],
              ["Identificação pessoal", "Reconhecimento vocal, biometria vocal de comandantes"],
              ["Estado operacional", "Tom, urgência, tráfego aumentado = operação iminente"],
              ["Equipamento", "ID de sistema pela impressão digital eletromagnética"],
            ],
          },
        ],
      },
      {
        heading: "Cifragem: o que protege e o que não",
        blocks: [
          {
            type: "p",
            text: "Cifragem é ferramenta parcial. Entender os limites é fundamental para evitar falsa segurança.",
          },
          {
            type: "ul",
            items: [
              "Protege: conteúdo da mensagem (se a cifra é robusta e bem implementada)",
              "NÃO protege: existência da transmissão (emissão detectável)",
              "NÃO protege: duração da transmissão (útil para DF)",
              "NÃO protege: frequência (analisável para ID de sistema)",
              "NÃO protege: posição do transmissor (DF em qualquer onda EM)",
              "NÃO protege: pattern of life (horários, freqs de troca)",
            ],
          },
          {
            type: "warn",
            title: "Cifragem ≠ invisibilidade",
            body: "A pergunta não é \"o inimigo entenderá o que disse?\" mas \"o inimigo saberá que transmiti, de onde e por quanto tempo?\". A resposta é quase sempre sim.",
          },
        ],
      },
      {
        heading: "Disciplina defensiva derivada",
        blocks: [
          {
            type: "ul",
            items: [
              "SEMPRE assumir escuta: cada PTT é evento observado",
              "Brevidade: transmissões < 6 segundos quando possível, < 15 segundos para reports",
              "Mover-se após transmissão longa: deslocar em 60 segundos se transmissão passou de 10 segundos",
              "Sem nomes próprios, sem intenção operacional em claro, sem posições amigas",
              "PACE plan: redundância de canais para não forçar canal comprometido",
              "Silêncio eletromagnético na preparação de operação sensível",
              "Nunca transmitir de posição fixa exposta — sempre coberta ou móvel",
              "Disciplina de língua: russo ou ucraniano não escondem nada, os dois lados têm bilíngues",
            ],
          },
        ],
      },
      {
        heading: "Celulares, smartphones, apps",
        blocks: [
          {
            type: "p",
            text: "O smartphone é dispositivo SIGINT contra quem o carrega. Mesmo desligado, pode ser problemático em certos contextos.",
          },
          {
            type: "ul",
            items: [
              "GSM / 4G: identifica IMEI e SIM, geolocaliza via triangulação de torre celular",
              "Wi-Fi ativo: transmite MAC e probes para redes conhecidas (revela histórico de movimento)",
              "Bluetooth: descobrível como dispositivo único em beacon",
              "Apps sociais: metadata EXIF, geolocalização de fotos, padrões de postagem",
              "Sistema russo Leer-3 (com drone Orlan-10): intercepta GSM tático e injeta SMS",
              "Regra de campo: smartphone em modo avião + desligado + saco Faraday em zona avançada",
            ],
          },
          {
            type: "callout",
            title: "Telegram, Signal, WhatsApp",
            body: "Apps cifrados protegem conteúdo, NÃO identificação de dispositivo nem geolocalização celular. No front russo-ucraniano, uso de smartphone é causa documentada de ataques mirados em posições amigas.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Achar que cifragem = segurança total",
              "Transmitir longo porque \"estamos longe do front\" (Murmansk-BN escuta a centenas de km)",
              "Usar smartphone em zona avançada mesmo só \"para checar o mapa\"",
              "Selfies / vídeo de uniforme em posições operacionais (geolocalização automática)",
              "Confiar em \"freqs pouco usadas\" — receptores SDR cobrem tudo em contínuo",
              "Discutir intenção operacional em chamada de voz mesmo cifrada",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Casos publicamente documentados: posições de comando reveladas por uso de smartphone, perdas mirados por intercept de Baofeng não cifrado, tiros de artilharia 5-10 minutos após transmissão longa em claro. Operacionalmente, cada unidade avançada opera assumindo que o SIGINT inimigo é contínuo, de alta qualidade, e ligado diretamente a unidades de fogo. Síntese veterana: 'Se transmite, te veem. Se te veem, te contam. Se te contam, te atingem.' A resposta não é parar de transmitir — é transmitir mal para o inimigo: breve, cifrado onde possível, de posição móvel, com disciplina de conteúdo.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le SIGINT (Signals Intelligence) est l'activité d'interception et d'analyse des émissions électromagnétiques ennemies. Ce chapitre décrit la doctrine, pourquoi chaque émission amie est exposée, et la discipline défensive qui en découle. Il NE contient PAS de procédures d'interception, de déchiffrement ou d'emploi offensif.",
    sections: [
      {
        heading: "Les trois composantes du SIGINT",
        blocks: [
          {
            type: "p",
            text: "Le SIGINT se décompose en trois sous-disciplines, chacune avec un effet spécifique sur les unités en ligne.",
          },
          {
            type: "table",
            headers: ["Composante", "Fonction"],
            rows: [
              ["COMINT (Communications Intelligence)", "Interception voix, données, messagerie"],
              ["ELINT (Electronic Intelligence)", "Interception d'émissions non-comms (radar, datalinks, télémétrie drone)"],
              ["FISINT (Foreign Instrumentation SIGINT)", "Interception télémétrie, datalinks de test, signaux d'instrumentation"],
            ],
          },
          {
            type: "callout",
            title: "Implication",
            body: "Même un drone ami en vol émet de l'ELINT vers l'ennemi. Même une station météo transmet du FISINT. Tout ce qui rayonne en spectre est observable.",
          },
        ],
      },
      {
        heading: "Pourquoi chaque émission est exposée",
        blocks: [
          {
            type: "p",
            text: "L'idée que « mon signal est trop faible / ma bande est inhabituelle / je parle en dialecte » est la première erreur doctrinale. Un réseau SIGINT moderne ne fonctionne pas comme une oreille humaine.",
          },
          {
            type: "ul",
            items: [
              "Sensibilité : les récepteurs SDR modernes captent du large bande en continu, même à -120 dBm",
              "Spectre : tout le spectre utilisable (3 kHz - 40 GHz) est écouté simultanément",
              "Mémoire : le trafic capturé est stocké et analysé en post-traitement, pas obligatoirement en direct",
              "Triangulation : trois récepteurs produisent un fix métrique sur toute émission > 6 secondes",
              "Analyse pattern : indicatifs récurrents, horaires, séquences profilés sans déchiffrer le contenu",
              "Crowdsourcing : en Ukraine, des opérateurs SDR amateurs contribuent au pool",
            ],
          },
        ],
      },
      {
        heading: "Produits de sortie du SIGINT",
        blocks: [
          {
            type: "p",
            text: "La sortie SIGINT n'est pas un « message déchiffré ». C'est plus souvent un paquet d'indicateurs nourrissant le targeting ou l'analyse de renseignement.",
          },
          {
            type: "table",
            headers: ["Sortie", "Usage opérationnel"],
            rows: [
              ["Grille MGRS de l'émetteur", "Targeting artillerie / drone (kill chain 2-15 min)"],
              ["Profil de réseau ami", "Ordre de bataille, structure commandement-contrôle"],
              ["Pattern of life", "Horaires d'activité, rotations, habitudes d'unité"],
              ["Identification personnelle", "Reconnaissance vocale, biométrie vocale de commandants"],
              ["État opérationnel", "Ton, urgence, hausse de trafic = opération imminente"],
              ["Équipement", "Identification de système par empreinte électromagnétique"],
            ],
          },
        ],
      },
      {
        heading: "Chiffrement : ce qu'il protège et ce qu'il ne protège pas",
        blocks: [
          {
            type: "p",
            text: "Le chiffrement est un outil partiel. Comprendre ses limites est fondamental pour éviter une fausse sécurité.",
          },
          {
            type: "ul",
            items: [
              "Protège : le contenu du message (si chiffre robuste et bien implémenté)",
              "NE protège PAS : l'existence de l'émission (émission détectable)",
              "NE protège PAS : la durée de l'émission (utile au DF)",
              "NE protège PAS : la fréquence (analysable pour identification de système)",
              "NE protège PAS : la position de l'émetteur (DF sur toute onde EM)",
              "NE protège PAS : le pattern of life (horaires, fréquences d'échange)",
            ],
          },
          {
            type: "warn",
            title: "Chiffrement ≠ invisibilité",
            body: "La question n'est pas « l'ennemi comprendra-t-il ce que j'ai dit ? » mais « l'ennemi saura-t-il que j'ai émis, d'où et combien de temps ? ». La réponse est presque toujours oui.",
          },
        ],
      },
      {
        heading: "Discipline défensive dérivée",
        blocks: [
          {
            type: "ul",
            items: [
              "TOUJOURS supposer l'écoute : chaque PTT est un événement observé",
              "Brièveté : émissions < 6 secondes quand possible, < 15 secondes pour reports",
              "Mouvement après émission longue : déplacer dans les 60 secondes si l'émission a dépassé 10 secondes",
              "Pas de noms propres, pas d'intention opérationnelle en clair, pas de positions amies",
              "Plan PACE : redondance de canaux pour ne pas forcer un canal compromis",
              "Silence électromagnétique en préparation d'opération sensible",
              "Jamais émettre depuis position fixe exposée — toujours couvert ou mobile",
              "Discipline de langue : russe ou ukrainien ne cachent rien, les deux camps ont des bilingues",
            ],
          },
        ],
      },
      {
        heading: "Téléphones, smartphones, applis",
        blocks: [
          {
            type: "p",
            text: "Le smartphone est un dispositif SIGINT contre celui qui le porte. Même éteint il peut être problématique dans certains contextes.",
          },
          {
            type: "ul",
            items: [
              "GSM / 4G : identifie IMEI et SIM, géolocalise par triangulation de tour cellulaire",
              "Wi-Fi actif : émet MAC et probes pour réseaux connus (révèle l'historique de mouvement)",
              "Bluetooth : découvrable comme dispositif unique en beacon",
              "Applis sociales : métadonnées EXIF, géolocalisation des photos, schémas de post",
              "Système russe Leer-3 (avec drone Orlan-10) : intercepte GSM tactique et injecte des SMS",
              "Règle terrain : smartphone en mode avion + éteint + sac de Faraday en zone avancée",
            ],
          },
          {
            type: "callout",
            title: "Telegram, Signal, WhatsApp",
            body: "Les applis chiffrées protègent le contenu, PAS l'identification du dispositif ni sa géolocalisation cellulaire. Sur le front russo-ukrainien, l'usage du smartphone est une cause documentée de frappes ciblées sur positions amies.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Penser que chiffrement = sécurité totale",
              "Émettre longtemps parce que « on est loin du front » (Murmansk-BN écoute à des centaines de km)",
              "Smartphone en zone avancée même seulement « pour vérifier la carte »",
              "Selfies / vidéo en uniforme aux positions opérationnelles (géolocalisation automatique)",
              "Faire confiance aux « fréquences peu utilisées » — les récepteurs SDR couvrent tout en continu",
              "Discuter intention opérationnelle en appel vocal même chiffré",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Cas publiquement documentés : postes de commandement révélés par usage de smartphone, pertes ciblées sur interception de Baofeng non chiffrés, obus d'artillerie 5-10 minutes après une émission longue en clair. Opérationnellement, chaque unité avancée opère en supposant que le SIGINT ennemi est continu, de haute qualité, et directement lié à des unités de feu. Synthèse vétéran : « Si tu émets, ils te voient. S'ils te voient, ils te comptent. S'ils te comptent, ils te frappent. » La réponse n'est pas d'arrêter d'émettre — c'est d'émettre mal pour l'ennemi : bref, chiffré si possible, depuis une position mobile, avec discipline de contenu.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
