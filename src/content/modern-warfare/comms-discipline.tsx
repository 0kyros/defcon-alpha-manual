import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La disciplina di comunicazione sul fronte ucraino estende i principi classici di radio discipline a un ambiente EW-saturato, SIGINT-saturato e drone-saturato. Questo capitolo descrive le pratiche difensive specifiche dell'ambiente moderno: PACE plan, frequency management, OPSEC esteso. Si fonda sul capitolo Foundation Radio Discipline e NON descrive procedure di intercettazione o jamming.",
    sections: [
      {
        heading: "Estensione della radio discipline classica",
        blocks: [
          {
            type: "p",
            text: "I principi base — brevità, accuratezza, sicurezza, RSVP, struttura standard — restano validi. L'ambiente moderno aggiunge tre nuovi assi: ridondanza forzata (PACE), agilità di frequenza, disciplina contenutistica estesa.",
          },
          {
            type: "ul",
            items: [
              "Brevità: target operativo < 6 secondi (più stringente in zona EW attiva)",
              "Aspettativa di ascolto: SIGINT continuo e di alta qualità — assumere intercettazione totale",
              "DF metrico: trasmissioni > 6 secondi producono fix utile a targeting nemico",
              "Pattern of life: orari, frequenze e callsign ricorrenti sono profilati senza decifrare",
              "Operatori bilingue: russo e ucraino non offrono nessun vantaggio di occultamento",
              "Disciplina di contenuto: niente nomi, niente intenzioni, niente posizioni amiche in chiaro",
            ],
          },
        ],
      },
      {
        heading: "PACE plan — la ridondanza obbligatoria",
        blocks: [
          {
            type: "p",
            text: "PACE è il framework dottrinale NATO per ridondanza di comunicazione. In ambiente EW non è opzionale — è il framework minimo di sopravvivenza.",
          },
          {
            type: "table",
            headers: ["Livello", "Tipo", "Esempio operativo"],
            rows: [
              ["P — Primary", "Mezzo principale", "Radio tattica cifrata su frequenza primaria"],
              ["A — Alternate", "Backup di equivalente capacità", "Seconda frequenza o secondo apparato"],
              ["C — Contingency", "Capacità ridotta", "Radio in chiaro su brevity codes, satellitare"],
              ["E — Emergency", "Ultima risorsa", "Runner, segnali visivi, punti di rendez-vous fisici"],
            ],
          },
          {
            type: "callout",
            title: "Pre-pianificazione obbligatoria",
            body: "PACE non si improvvisa. I quattro livelli vanno fissati prima dell'operazione, comunicati a tutti gli elementi, ripassati. Quando il Primary cade, l'Alternate è già pronto. Senza piano scritto, sotto stress si ritorna al telefono — bersaglio facile.",
          },
        ],
      },
      {
        heading: "Frequency management",
        blocks: [
          {
            type: "ul",
            items: [
              "Frequenze rotative: cambiare ogni 24-72 ore per ridurre pattern of life",
              "Frequenze di emergenza: separate dalle operative, riservate a contact / MEDEVAC",
              "CEOI (Communications-Electronics Operating Instructions): documento sintetico distribuito prima dell'op",
              "Scanner di frequenza: monitorare bande adiacenti per rilevare jamming amico o nemico",
              "Frequenze EW \"finestra\": in alcuni settori specifiche bande restano relativamente pulite — usarle ma assumere intercettazione",
              "Disciplina su radio civili: Baofeng e PMR sono frequentissimi in volontariato — utili ma trasparenti al SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Disciplina di contenuto estesa",
        blocks: [
          {
            type: "p",
            text: "L'ambiente moderno richiede disciplina di contenuto oltre quello tradizionale. Anche brevity codes possono essere correlati e profilati.",
          },
          {
            type: "ul",
            items: [
              "Niente nomi propri di compagni o comandanti",
              "Niente unità, gradi, numerici di posizione amica in chiaro",
              "Niente intenzioni operative (\"ci muoviamo alle 0400\")",
              "Niente conferma di colpita di artiglieria amica (BDA in chiaro = SIGINT correla a sorgente)",
              "Niente celebrazione di azione riuscita su radio (alto valore SIGINT)",
              "Niente espressioni emotive identificative (\"Marco è giù\" identifica unità e perdita)",
              "MGRS in formato standard, no riferimenti a landmark riconoscibili (\"vicino alla chiesa rotta\")",
            ],
          },
        ],
      },
      {
        heading: "Smartphone e messaggistica",
        blocks: [
          {
            type: "p",
            text: "Smartphone è strumento utile (mappa, foto, app militari come Kropyva, Delta in UA) ma anche dispositivo SIGINT contro chi lo porta. Disciplina differenziata per ruolo e fase.",
          },
          {
            type: "ul",
            items: [
              "Airplane mode in zona avanzata, anche durante uso offline di mappe",
              "Power off + Faraday bag in fase di stalking o agguato statico",
              "App cifrate (Signal, Telegram) proteggono contenuto, NON identificazione dispositivo né geolocalizzazione cellulare",
              "Foto / video: metadata EXIF rimossa prima di qualsiasi condivisione",
              "App militari ucraine (Kropyva, Delta, GIS Arta): solo su dispositivi dedicati e disciplinati",
              "Sistema russo Leer-3 (con drone Orlan-10): intercetta GSM tattico, può inviare SMS phishing/propaganda",
            ],
          },
          {
            type: "warn",
            title: "Selfie e social",
            body: "Casi pubblicamente documentati di posizioni compromesse da foto pubblicate su Instagram, Telegram, TikTok. Anche \"solo per famiglia\" su account privato: il leak è strutturale, non eccezionale.",
          },
        ],
      },
      {
        heading: "Behavior della rete sotto attacco EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Riconoscere il sintomo: rumore di fondo, perdita ricezione, voce frammentata",
              "Callout breve sul net (\"EW ACTIVE\") senza ulteriore trasmissione",
              "Passaggio a frequenza Alternate secondo PACE — non improvvisare",
              "Mantenere silenzio se non urgente — il nemico aspetta il traffico di reazione",
              "Verificare se l'EW è amica o nemica (briefing pre-op deve coprire)",
              "Riportare l'evento al ritorno per analisi — pattern di EW utile a comando",
            ],
          },
        ],
      },
      {
        heading: "Pre-mission communication brief",
        blocks: [
          {
            type: "ol",
            items: [
              "Frequenze primary, alternate, emergency con tempi di shift",
              "Callsign assegnati, ruoli, sequenza di check radio",
              "PACE plan scritto e condiviso",
              "Brevity codes / CEOI distribuiti",
              "Procedure MEDEVAC: 9-line preparata, frequenze MEDEVAC dedicate",
              "Procedure di compromise: cosa fare se radio persa, catturata, rotta",
              "Conferma awareness EW prevista nel settore",
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
              "Niente PACE plan — quando Primary cade si improvvisa",
              "Trasmissioni > 10 secondi giustificate da \"sono in cifrato\"",
              "Smartphone acceso in posizione avanzata \"solo per controllare mappa\"",
              "Selfie di gruppo a fine operazione (leak strutturale di posizione e identità)",
              "Conferma in chiaro di hit di artiglieria amica (SIGINT correla a sorgente di tiro)",
              "Frequenze fisse mai cambiate — pattern of life completo per il nemico",
              "Volontari nuovi che usano prowords civili (\"COPY THAT\", \"10-4\") senza addestramento",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Il fronte 2022-2026 ha generato la più estesa esperienza pratica di radio discipline in ambiente EW-saturato della storia moderna. La sintesi operativa condivisa dalle brigate sopravvissute più a lungo: 'Non si vince con la radio migliore, si vince con la disciplina migliore.' Casi documentati di posizioni di comando perdute per: smartphone non spenti, trasmissioni lunghe in chiaro, selfie su Telegram, conferme BDA non disciplinate. Le brigate ucraine che hanno introdotto PACE rigoroso, CEOI documentati, Faraday bags obbligatori in fase avanzata, hanno ridotto significativamente perdite SIGINT-driven. La radio nel 2026 è arma a doppio taglio: usata bene salva, usata male uccide più dell'artiglieria diretta.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Communications discipline on the Ukrainian front extends classic radio discipline principles to an EW-saturated, SIGINT-saturated and drone-saturated environment. This chapter describes defensive practices specific to the modern setting: PACE plan, frequency management, extended OPSEC. It builds on the Foundation Radio Discipline chapter and does NOT describe intercept or jamming procedures.",
    sections: [
      {
        heading: "Extension of classic radio discipline",
        blocks: [
          {
            type: "p",
            text: "Base principles — brevity, accuracy, security, RSVP, standard structure — remain valid. The modern setting adds three new axes: forced redundancy (PACE), frequency agility, extended content discipline.",
          },
          {
            type: "ul",
            items: [
              "Brevity: operational target < 6 seconds (tighter in active EW zone)",
              "Expectation of listening: continuous high-quality SIGINT — assume total intercept",
              "Metric DF: transmissions > 6 seconds produce a fix useful to enemy targeting",
              "Pattern of life: recurring hours, frequencies, callsigns are profiled without decryption",
              "Bilingual operators: Russian and Ukrainian offer no concealment advantage",
              "Content discipline: no names, no intentions, no friendly positions in clear",
            ],
          },
        ],
      },
      {
        heading: "PACE plan — mandatory redundancy",
        blocks: [
          {
            type: "p",
            text: "PACE is NATO doctrine for communications redundancy. In EW environment it is not optional — it is the minimum survival framework.",
          },
          {
            type: "table",
            headers: ["Level", "Type", "Operational example"],
            rows: [
              ["P — Primary", "Main means", "Encrypted tactical radio on primary frequency"],
              ["A — Alternate", "Equivalent-capacity backup", "Second frequency or second set"],
              ["C — Contingency", "Reduced capability", "Clear radio on brevity codes, satellite"],
              ["E — Emergency", "Last resort", "Runner, visual signals, physical rendez-vous points"],
            ],
          },
          {
            type: "callout",
            title: "Mandatory pre-planning",
            body: "PACE is not improvised. The four levels must be set before the operation, communicated to all elements, rehearsed. When Primary falls, Alternate is already ready. Without written plan, under stress you fall back to phone — easy target.",
          },
        ],
      },
      {
        heading: "Frequency management",
        blocks: [
          {
            type: "ul",
            items: [
              "Rolling frequencies: change every 24-72 hours to reduce pattern of life",
              "Emergency frequencies: separate from operational, reserved for contact / MEDEVAC",
              "CEOI (Communications-Electronics Operating Instructions): synthetic doc distributed before op",
              "Frequency scanners: monitor adjacent bands to detect friendly or enemy jamming",
              "EW \"window\" frequencies: in some sectors specific bands stay relatively clean — use but assume intercept",
              "Civilian-radio discipline: Baofeng and PMR are very common in volunteer use — useful but transparent to SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Extended content discipline",
        blocks: [
          {
            type: "p",
            text: "The modern environment requires content discipline beyond the traditional. Even brevity codes can be correlated and profiled.",
          },
          {
            type: "ul",
            items: [
              "No teammate or commander proper names",
              "No unit, rank, friendly position numerics in clear",
              "No operational intent (\"we move at 0400\")",
              "No friendly artillery hit confirmation (BDA in clear = SIGINT correlates to source)",
              "No celebration of successful action on radio (high SIGINT value)",
              "No identifying emotional expression (\"Marco is down\" IDs unit and loss)",
              "MGRS in standard format, no recognisable landmark reference (\"near the broken church\")",
            ],
          },
        ],
      },
      {
        heading: "Smartphone and messaging",
        blocks: [
          {
            type: "p",
            text: "Smartphone is a useful tool (map, photo, military apps such as Kropyva, Delta in UA) but also a SIGINT device against its carrier. Discipline differs by role and phase.",
          },
          {
            type: "ul",
            items: [
              "Airplane mode in forward zone, even during offline map use",
              "Power off + Faraday bag during stalking or static ambush",
              "Encrypted apps (Signal, Telegram) protect content, NOT device identification or cellular geolocation",
              "Photo / video: EXIF metadata stripped before any sharing",
              "Ukrainian military apps (Kropyva, Delta, GIS Arta): only on dedicated, disciplined devices",
              "Russian Leer-3 system (with Orlan-10 drone): intercepts tactical GSM, can send phishing/propaganda SMS",
            ],
          },
          {
            type: "warn",
            title: "Selfies and social",
            body: "Publicly documented cases of positions compromised by photos posted on Instagram, Telegram, TikTok. Even \"just for family\" on private accounts: the leak is structural, not exceptional.",
          },
        ],
      },
      {
        heading: "Net behaviour under EW attack",
        blocks: [
          {
            type: "ul",
            items: [
              "Recognise the symptom: noise floor, reception loss, fragmented voice",
              "Brief net callout (\"EW ACTIVE\") with no further transmission",
              "Shift to Alternate frequency per PACE — do not improvise",
              "Maintain silence unless urgent — enemy awaits reaction traffic",
              "Verify whether EW is friendly or enemy (pre-op brief must cover)",
              "Report the event on return for analysis — EW pattern useful to command",
            ],
          },
        ],
      },
      {
        heading: "Pre-mission communications brief",
        blocks: [
          {
            type: "ol",
            items: [
              "Primary, alternate, emergency frequencies with shift times",
              "Assigned callsigns, roles, radio check sequence",
              "Written PACE plan shared",
              "Brevity codes / CEOI distributed",
              "MEDEVAC procedure: 9-line prepared, dedicated MEDEVAC frequencies",
              "Compromise procedures: what to do if radio lost, captured, broken",
              "Confirm EW awareness expected in sector",
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
              "No PACE plan — when Primary falls, improvisation",
              "Transmissions > 10 seconds justified by \"I'm on crypto\"",
              "Smartphone on in forward position \"just to check map\"",
              "Group selfie at end of operation (structural leak of position and identity)",
              "Friendly artillery hit confirmation in clear (SIGINT correlates to firing source)",
              "Fixed frequencies never changed — full pattern of life for the enemy",
              "New volunteers using civilian prowords (\"COPY THAT\", \"10-4\") without training",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The 2022-2026 front generated the most extensive practical experience of radio discipline in an EW-saturated environment in modern history. Operational synthesis shared by longest-surviving brigades: 'You don't win with the best radio, you win with the best discipline.' Documented cases of command posts lost to: smartphones not turned off, long unencrypted transmissions, Telegram selfies, undisciplined BDA confirmations. Ukrainian brigades that introduced rigorous PACE, documented CEOI, mandatory Faraday bags in forward phase, have significantly reduced SIGINT-driven losses. The radio in 2026 is a double-edged weapon: used well it saves, used badly it kills more than direct artillery.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A disciplina de comunicações no front ucraniano estende os princípios clássicos de radio discipline a um ambiente EW-saturado, SIGINT-saturado e drone-saturado. Este capítulo descreve práticas defensivas específicas do ambiente moderno: PACE plan, frequency management, OPSEC estendido. Apoia-se no capítulo Foundation Radio Discipline e NÃO descreve procedimentos de interceptação ou jamming.",
    sections: [
      {
        heading: "Extensão da radio discipline clássica",
        blocks: [
          {
            type: "p",
            text: "Princípios base — brevidade, acurácia, segurança, RSVP, estrutura padrão — continuam válidos. O ambiente moderno adiciona três novos eixos: redundância forçada (PACE), agilidade de frequência, disciplina de conteúdo estendida.",
          },
          {
            type: "ul",
            items: [
              "Brevidade: meta operacional < 6 segundos (mais estrita em zona EW ativa)",
              "Expectativa de escuta: SIGINT contínuo e de alta qualidade — assumir intercept total",
              "DF métrico: transmissões > 6 segundos produzem fix útil ao targeting inimigo",
              "Pattern of life: horários, frequências e callsigns recorrentes são perfilados sem decifrar",
              "Operadores bilíngues: russo e ucraniano não oferecem vantagem de ocultamento",
              "Disciplina de conteúdo: sem nomes, sem intenções, sem posições amigas em claro",
            ],
          },
        ],
      },
      {
        heading: "PACE plan — redundância obrigatória",
        blocks: [
          {
            type: "p",
            text: "PACE é doutrina OTAN para redundância de comunicação. Em ambiente EW não é opcional — é o framework mínimo de sobrevivência.",
          },
          {
            type: "table",
            headers: ["Nível", "Tipo", "Exemplo operacional"],
            rows: [
              ["P — Primary", "Meio principal", "Rádio tático cifrado em frequência primária"],
              ["A — Alternate", "Backup de capacidade equivalente", "Segunda frequência ou segundo aparelho"],
              ["C — Contingency", "Capacidade reduzida", "Rádio em claro com brevity codes, satélite"],
              ["E — Emergency", "Último recurso", "Runner, sinais visuais, pontos de rendez-vous físicos"],
            ],
          },
          {
            type: "callout",
            title: "Pré-planejamento obrigatório",
            body: "PACE não se improvisa. Os quatro níveis devem ser fixados antes da operação, comunicados a todos os elementos, ensaiados. Quando Primary cai, Alternate já está pronto. Sem plano escrito, sob estresse volta-se ao telefone — alvo fácil.",
          },
        ],
      },
      {
        heading: "Frequency management",
        blocks: [
          {
            type: "ul",
            items: [
              "Frequências rotativas: trocar a cada 24-72 horas para reduzir pattern of life",
              "Frequências de emergência: separadas das operacionais, reservadas a contact / MEDEVAC",
              "CEOI (Communications-Electronics Operating Instructions): doc sintético distribuído antes da op",
              "Scanners de frequência: monitorar bandas adjacentes para detectar jamming amigo ou inimigo",
              "Frequências EW \"janela\": em alguns setores bandas específicas ficam relativamente limpas — usar mas assumir intercept",
              "Disciplina em rádios civis: Baofeng e PMR são onipresentes em uso voluntário — úteis mas transparentes ao SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Disciplina de conteúdo estendida",
        blocks: [
          {
            type: "p",
            text: "O ambiente moderno exige disciplina de conteúdo além da tradicional. Mesmo brevity codes podem ser correlacionados e perfilados.",
          },
          {
            type: "ul",
            items: [
              "Sem nomes próprios de companheiros ou comandantes",
              "Sem unidades, postos, numéricos de posição amiga em claro",
              "Sem intenções operacionais (\"movemos às 0400\")",
              "Sem confirmação de hit de artilharia amiga (BDA em claro = SIGINT correlaciona à fonte)",
              "Sem celebração de ação bem-sucedida em rádio (alto valor SIGINT)",
              "Sem expressão emotiva identificadora (\"Marco caiu\" identifica unidade e perda)",
              "MGRS em formato padrão, sem referência a landmark reconhecível (\"perto da igreja quebrada\")",
            ],
          },
        ],
      },
      {
        heading: "Smartphone e mensageria",
        blocks: [
          {
            type: "p",
            text: "Smartphone é ferramenta útil (mapa, foto, apps militares como Kropyva, Delta na UA) mas também dispositivo SIGINT contra quem o carrega. Disciplina diferenciada por papel e fase.",
          },
          {
            type: "ul",
            items: [
              "Modo avião em zona avançada, mesmo durante uso offline de mapas",
              "Desligado + Faraday bag em fase de stalking ou emboscada estática",
              "Apps cifrados (Signal, Telegram) protegem conteúdo, NÃO ID de dispositivo nem geolocalização celular",
              "Foto / vídeo: metadata EXIF removida antes de qualquer compartilhamento",
              "Apps militares ucranianos (Kropyva, Delta, GIS Arta): só em dispositivos dedicados e disciplinados",
              "Sistema russo Leer-3 (com drone Orlan-10): intercepta GSM tático, pode enviar SMS phishing/propaganda",
            ],
          },
          {
            type: "warn",
            title: "Selfies e social",
            body: "Casos publicamente documentados de posições comprometidas por fotos no Instagram, Telegram, TikTok. Mesmo \"só para família\" em conta privada: o leak é estrutural, não excepcional.",
          },
        ],
      },
      {
        heading: "Comportamento da rede sob ataque EW",
        blocks: [
          {
            type: "ul",
            items: [
              "Reconhecer o sintoma: ruído de fundo, perda de recepção, voz fragmentada",
              "Callout breve no net (\"EW ACTIVE\") sem outra transmissão",
              "Passagem a frequência Alternate conforme PACE — não improvisar",
              "Manter silêncio se não urgente — o inimigo espera o tráfego de reação",
              "Verificar se a EW é amiga ou inimiga (briefing pré-op deve cobrir)",
              "Reportar o evento no retorno para análise — pattern de EW útil ao comando",
            ],
          },
        ],
      },
      {
        heading: "Briefing pré-missão de comms",
        blocks: [
          {
            type: "ol",
            items: [
              "Frequências primary, alternate, emergency com horários de shift",
              "Callsigns atribuídos, papéis, sequência de radio check",
              "PACE plan escrito e compartilhado",
              "Brevity codes / CEOI distribuídos",
              "Procedimentos MEDEVAC: 9-line preparada, frequências MEDEVAC dedicadas",
              "Procedimentos de compromise: o que fazer se rádio perdido, capturado, quebrado",
              "Confirmar awareness EW prevista no setor",
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
              "Sem PACE plan — quando Primary cai, se improvisa",
              "Transmissões > 10 segundos justificadas por \"estou em cifrado\"",
              "Smartphone ligado em posição avançada \"só para checar mapa\"",
              "Selfie de grupo no fim da operação (leak estrutural de posição e identidade)",
              "Confirmação em claro de hit de artilharia amiga (SIGINT correlaciona à fonte de tiro)",
              "Frequências fixas nunca trocadas — pattern of life completo para o inimigo",
              "Voluntários novos usando prowords civis (\"COPY THAT\", \"10-4\") sem treino",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O front 2022-2026 gerou a mais extensa experiência prática de radio discipline em ambiente EW-saturado da história moderna. Síntese operacional compartilhada pelas brigadas que mais sobreviveram: 'Não se vence com o melhor rádio, vence-se com a melhor disciplina.' Casos documentados de postos de comando perdidos por: smartphones não desligados, transmissões longas em claro, selfies no Telegram, confirmações BDA indisciplinadas. Brigadas ucranianas que introduziram PACE rigoroso, CEOI documentados, Faraday bags obrigatórios em fase avançada, reduziram significativamente perdas SIGINT-driven. O rádio em 2026 é arma de dois gumes: bem usado salva, mal usado mata mais que artilharia direta.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La discipline de communication sur le front ukrainien étend les principes classiques de la radio discipline à un environnement saturé en EW, en SIGINT et en drones. Ce chapitre décrit les pratiques défensives spécifiques au cadre moderne : plan PACE, gestion des fréquences, OPSEC étendu. Il s'appuie sur le chapitre Foundation Radio Discipline et NE décrit PAS de procédures d'interception ou de brouillage.",
    sections: [
      {
        heading: "Extension de la radio discipline classique",
        blocks: [
          {
            type: "p",
            text: "Les principes de base — brièveté, exactitude, sécurité, RSVP, structure standard — restent valides. Le cadre moderne ajoute trois nouveaux axes : redondance forcée (PACE), agilité de fréquence, discipline de contenu étendue.",
          },
          {
            type: "ul",
            items: [
              "Brièveté : cible opérationnelle < 6 secondes (plus stricte en zone GE active)",
              "Attente d'écoute : SIGINT continu et de haute qualité — supposer interception totale",
              "DF métrique : émissions > 6 secondes produisent un fix utile au targeting ennemi",
              "Pattern of life : horaires, fréquences et indicatifs récurrents sont profilés sans déchiffrer",
              "Opérateurs bilingues : russe et ukrainien n'offrent aucun avantage de dissimulation",
              "Discipline de contenu : pas de noms, pas d'intentions, pas de positions amies en clair",
            ],
          },
        ],
      },
      {
        heading: "Plan PACE — redondance obligatoire",
        blocks: [
          {
            type: "p",
            text: "PACE est la doctrine OTAN pour la redondance de communication. En environnement GE ce n'est pas optionnel — c'est le cadre minimum de survie.",
          },
          {
            type: "table",
            headers: ["Niveau", "Type", "Exemple opérationnel"],
            rows: [
              ["P — Primary", "Moyen principal", "Radio tactique chiffrée sur fréquence primaire"],
              ["A — Alternate", "Backup de capacité équivalente", "Seconde fréquence ou second appareil"],
              ["C — Contingency", "Capacité réduite", "Radio en clair avec brevity codes, satellite"],
              ["E — Emergency", "Dernier recours", "Runner, signaux visuels, points de rendez-vous physiques"],
            ],
          },
          {
            type: "callout",
            title: "Pré-planification obligatoire",
            body: "PACE ne s'improvise pas. Les quatre niveaux doivent être fixés avant l'opération, communiqués à tous les éléments, répétés. Quand le Primary tombe, l'Alternate est déjà prêt. Sans plan écrit, sous stress on retourne au téléphone — cible facile.",
          },
        ],
      },
      {
        heading: "Gestion des fréquences",
        blocks: [
          {
            type: "ul",
            items: [
              "Fréquences tournantes : changer toutes les 24-72 heures pour réduire le pattern of life",
              "Fréquences d'urgence : séparées des opérationnelles, réservées à contact / MEDEVAC",
              "CEOI (Communications-Electronics Operating Instructions) : document synthétique distribué avant l'op",
              "Scanners de fréquence : surveiller les bandes adjacentes pour détecter brouillage ami ou ennemi",
              "Fréquences GE « fenêtres » : dans certains secteurs des bandes spécifiques restent relativement propres — utiliser mais supposer l'interception",
              "Discipline radios civiles : Baofeng et PMR très fréquents en volontariat — utiles mais transparents au SIGINT",
            ],
          },
        ],
      },
      {
        heading: "Discipline de contenu étendue",
        blocks: [
          {
            type: "p",
            text: "L'environnement moderne demande une discipline de contenu au-delà du traditionnel. Même les brevity codes peuvent être corrélés et profilés.",
          },
          {
            type: "ul",
            items: [
              "Pas de noms propres de camarades ou commandants",
              "Pas d'unité, grade, numérique de position amie en clair",
              "Pas d'intention opérationnelle (« on bouge à 0400 »)",
              "Pas de confirmation de hit d'artillerie amie (BDA en clair = SIGINT corrèle à la source)",
              "Pas de célébration d'action réussie sur radio (haute valeur SIGINT)",
              "Pas d'expression émotive identifiante (« Marco est à terre » identifie unité et perte)",
              "MGRS en format standard, pas de référence à landmark reconnaissable (« près de l'église cassée »)",
            ],
          },
        ],
      },
      {
        heading: "Smartphone et messagerie",
        blocks: [
          {
            type: "p",
            text: "Le smartphone est un outil utile (carte, photo, applis militaires comme Kropyva, Delta en UA) mais aussi un dispositif SIGINT contre celui qui le porte. Discipline différenciée par rôle et phase.",
          },
          {
            type: "ul",
            items: [
              "Mode avion en zone avancée, même pendant usage offline des cartes",
              "Éteint + sac Faraday en phase de stalking ou embuscade statique",
              "Applis chiffrées (Signal, Telegram) protègent le contenu, PAS l'identification du dispositif ni la géolocalisation cellulaire",
              "Photo / vidéo : métadonnées EXIF retirées avant tout partage",
              "Applis militaires ukrainiennes (Kropyva, Delta, GIS Arta) : uniquement sur dispositifs dédiés et disciplinés",
              "Système russe Leer-3 (avec drone Orlan-10) : intercepte GSM tactique, peut envoyer SMS phishing/propagande",
            ],
          },
          {
            type: "warn",
            title: "Selfies et social",
            body: "Cas publiquement documentés de positions compromises par photos publiées sur Instagram, Telegram, TikTok. Même « juste pour la famille » sur compte privé : la fuite est structurelle, pas exceptionnelle.",
          },
        ],
      },
      {
        heading: "Comportement du réseau sous attaque GE",
        blocks: [
          {
            type: "ul",
            items: [
              "Reconnaître le symptôme : bruit de fond, perte de réception, voix fragmentée",
              "Callout bref sur le net (« EW ACTIVE ») sans autre émission",
              "Passage à fréquence Alternate selon PACE — ne pas improviser",
              "Maintenir le silence sauf urgence — l'ennemi attend le trafic de réaction",
              "Vérifier si la GE est amie ou ennemie (briefing pré-op doit couvrir)",
              "Reporter l'événement au retour pour analyse — pattern GE utile au commandement",
            ],
          },
        ],
      },
      {
        heading: "Briefing pré-mission comms",
        blocks: [
          {
            type: "ol",
            items: [
              "Fréquences primary, alternate, emergency avec heures de shift",
              "Indicatifs assignés, rôles, séquence de radio check",
              "Plan PACE écrit et partagé",
              "Brevity codes / CEOI distribués",
              "Procédure MEDEVAC : 9-line préparée, fréquences MEDEVAC dédiées",
              "Procédures de compromise : que faire si radio perdue, capturée, cassée",
              "Confirmer l'awareness GE prévue dans le secteur",
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
              "Pas de plan PACE — quand Primary tombe, on improvise",
              "Émissions > 10 secondes justifiées par « je suis en crypto »",
              "Smartphone allumé en position avancée « juste pour vérifier la carte »",
              "Selfie de groupe en fin d'opération (fuite structurelle de position et d'identité)",
              "Confirmation en clair de hit d'artillerie amie (SIGINT corrèle à la source de tir)",
              "Fréquences fixes jamais changées — pattern of life complet pour l'ennemi",
              "Volontaires nouveaux utilisant des prowords civils (« COPY THAT », « 10-4 ») sans formation",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Le front 2022-2026 a généré l'expérience pratique la plus étendue de radio discipline en environnement saturé en GE de l'histoire moderne. Synthèse opérationnelle partagée par les brigades les plus survivantes : « On ne gagne pas avec la meilleure radio, on gagne avec la meilleure discipline. » Cas documentés de postes de commandement perdus à cause de : smartphones non éteints, émissions longues en clair, selfies sur Telegram, confirmations BDA indisciplinées. Les brigades ukrainiennes ayant introduit PACE rigoureux, CEOI documentés, sacs Faraday obligatoires en phase avancée, ont significativement réduit les pertes SIGINT-driven. La radio en 2026 est une arme à double tranchant : bien utilisée elle sauve, mal utilisée elle tue plus que l'artillerie directe.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
