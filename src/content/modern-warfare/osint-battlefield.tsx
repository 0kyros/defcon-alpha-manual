import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "OSINT (Open-Source Intelligence) sul fronte ucraino è arma a doppio taglio. Questo capitolo descrive come il nemico la usa contro di te e quali principi difensivi adottare. NON contiene tecniche di OSINT offensiva contro persone o procedure di targeting via fonti aperte.",
    sections: [
      {
        heading: "Cos'è l'OSINT sul campo di battaglia moderno",
        blocks: [
          {
            type: "p",
            text: "OSINT è la raccolta sistematica di informazioni da fonti pubbliche (social media, immagini satellitari commerciali, registrazioni di vita quotidiana, forum, rilievi di sensori civili). Sul fronte 2022-2026 ha un ruolo che è sia strategico sia tattico, in tempi compressi.",
          },
          {
            type: "ul",
            items: [
              "Social media: Telegram, Twitter/X, Instagram, TikTok — fonte primaria pubblica",
              "Satellite commerciale: Maxar, Planet, ICEYE SAR — risoluzione 30-50 cm",
              "Mappe e crowd-sourcing: OpenStreetMap, geo-confirmation di canali OSINT (GeoConfirmed, OSINTtechnical)",
              "Comunità OSINT: analisti volontari aggregano evidenze, alcune di alta qualità",
              "AI-assisted geo-localization: tool che identificano luoghi da foto in pochi minuti",
              "Cellulari civili: pattern di traffico cellulare anomalo identificabile da fonti pubbliche",
            ],
          },
        ],
      },
      {
        heading: "Come il nemico usa OSINT contro di te",
        blocks: [
          {
            type: "p",
            text: "Il nemico raccoglie OSINT in modo strutturato. Casi pubblicamente documentati mostrano targeting ottenuto direttamente da pubblicazioni amiche.",
          },
          {
            type: "ul",
            items: [
              "Foto / selfie pubblicati: geo-confirmati per identificare posizione di unità",
              "Video di addestramento: rivelano equipaggiamento, tattiche, numeri",
              "Storie di unità su Telegram: pattern of life, comandanti, organico",
              "Profili LinkedIn / Facebook di volontari: identificazione, background, network",
              "Necrologi e onorificenze: identificazione perdite, valutazione brigata",
              "Tracking di volontari stranieri: rotte di ingresso, brigate di destinazione",
              "Crowdsource civile: cittadini russi/occupati segnalano posizioni amiche su Telegram",
            ],
          },
          {
            type: "warn",
            title: "Esempio documentato",
            body: "Posizioni di comando, centri logistici, depositi di munizioni sono stati pubblicamente compromessi da foto sui social network di personale o residenti. Le perdite documentate da OSINT amica sono significative su entrambi i lati del conflitto.",
          },
        ],
      },
      {
        heading: "OPSEC contro OSINT — principi difensivi",
        blocks: [
          {
            type: "p",
            text: "L'OPSEC difensivo contro OSINT non è 'non pubblicare nulla' (impraticabile per molti volontari) ma 'pubblicare con disciplina, fuori contesto operativo, con metadati neutri'.",
          },
          {
            type: "ul",
            items: [
              "Niente foto in zona operativa, niente foto durante operazione, niente foto identificabili come tale",
              "Niente metadata EXIF — sempre rimossa prima di qualsiasi condivisione",
              "Niente background identificabili (edifici noti, paesaggi unici, segnali stradali)",
              "Niente uniforme con patches identificative su account pubblico",
              "Niente date / orari precisi (ritardo di settimane minimo per qualsiasi pubblicazione)",
              "Niente nomi di compagni, anche soprannomi che indicano legame con brigata",
              "Niente menzione di posizioni geografiche, anche generiche (\"vicino al Donbas\")",
            ],
          },
          {
            type: "callout",
            title: "La regola dei 30 giorni",
            body: "Una linea guida adottata da volontari esperti: non pubblicare nulla che si riferisca a meno di 30 giorni di anzianità. Il pattern of life è invecchiato, il targeting è meno utile. Funziona se applicata da tutta la squadra.",
          },
        ],
      },
      {
        heading: "Disciplina di pubblicazione",
        blocks: [
          {
            type: "ul",
            items: [
              "Profili personali pubblici: contenuto pre-2022, niente di operativo recente",
              "Profili di unità: solo materiale ufficiale autorizzato dalla brigata",
              "Foto private a famiglia: via app cifrate (Signal), non social network",
              "Pattern: variare orari e contesti per evitare di rivelare presenza in teatro",
              "Coordinamento di squadra: nessuno pubblica senza approvazione tacita o esplicita",
              "Revisione periodica: rimuovere contenuto storico che, retrospettivamente, è ora compromettente",
            ],
          },
        ],
      },
      {
        heading: "OSINT amica — principi etici e operativi",
        blocks: [
          {
            type: "p",
            text: "L'OSINT amica esiste — i servizi ucraini, brigate, comunità OSINT pubblica lavorano su materiale aperto nemico. Per il volontario, comprendere i principi è parte della cultura, ma l'impiego attivo è specialistico.",
          },
          {
            type: "ul",
            items: [
              "Targeting basato su OSINT: la propria brigata può ricevere intelligence prodotta da OSINT — sapere significa rispettare la fonte",
              "Verifica delle fonti: l'OSINT è soggetta a deception, fonti vanno triangolate prima di azione",
              "Etica: niente identificazione di civili, niente targeting di non combattenti, distinzione legale",
              "Disciplina: OSINT amica deve operare entro framework giuridico (LOAC, IHL)",
              "Reporting: contributi OSINT da volontari individuali devono passare via canali brigata, non pubblicati",
              "Awareness: ogni informazione che si vede sui social potrebbe essere parte di operazione PsyOp / deception nemica",
            ],
          },
        ],
      },
      {
        heading: "Deception e contro-OSINT",
        blocks: [
          {
            type: "p",
            text: "L'OSINT non è solo raccolta — è anche manipolazione. Entrambi i lati conducono operazioni di deception via canali OSINT.",
          },
          {
            type: "ul",
            items: [
              "Profili falsi: account social progettati per attirare contatti amici e raccoglierne dati",
              "Foto manipolate: deepfake e immagini fuori contesto per influenzare percezione",
              "Pattern falsi: pubblicare materiale che suggerisce posizioni inesatte come deception attiva",
              "Phishing: messaggi inviati a volontari identificati via OSINT, ricerca di accesso ulteriore",
              "Contro-narrazione: testimonianze inventate per minare morale o reputazione",
              "Sospetto sano: ogni contatto non sollecitato che chiede dettagli operativi è potenzialmente ostile",
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
              "Selfie in uniforme su Instagram \"per amici\" — account privato non è privato",
              "Storia Telegram con location tag attivo",
              "Foto di gruppo con backdrop identificabile (edificio specifico, paesaggio unico)",
              "Pubblicazione di video pubblici dalla brigata con dati identificativi visibili",
              "LinkedIn aggiornato durante deployment con \"volunteer in Ukraine\"",
              "Necrologio di compagno con dettagli di unità e posizione",
              "Confidare in DM cifrato per discutere dettagli operativi (l'app è cifrata, il dispositivo no)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "L'esperienza pubblica del fronte 2022-2026 ha mostrato OSINT come arma autonoma — non più solo strumento di intelligence ma fonte primaria di targeting. Comunità OSINT ucraine e occidentali hanno tracciato unità russe da social media, prodotto BDA pubblico, identificato comandanti. Specularmente, OSINT russa ha colpito brigate ucraine attraverso analisi social di volontari. Le brigate che hanno introdotto policy strict di OPSEC pubblica — niente social in deployment, contenuto vecchio solo, revisione periodica di profili — hanno ridotto significativamente perdite documentate da OSINT-driven targeting. Il messaggio è univoco: il primo nemico della tua unità è il tuo telefono. Il secondo è il telefono dei tuoi compagni. La disciplina è collettiva o non esiste.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "OSINT (Open-Source Intelligence) on the Ukrainian front is a double-edged weapon. This chapter describes how the enemy uses it against you and which defensive principles to adopt. It does NOT contain offensive OSINT techniques against people or targeting procedures via open sources.",
    sections: [
      {
        heading: "What OSINT is on the modern battlefield",
        blocks: [
          {
            type: "p",
            text: "OSINT is systematic collection of information from public sources (social media, commercial satellite imagery, daily-life recordings, forums, civilian sensor data). On the 2022-2026 front it plays both strategic and tactical roles, in compressed times.",
          },
          {
            type: "ul",
            items: [
              "Social media: Telegram, Twitter/X, Instagram, TikTok — primary public source",
              "Commercial satellite: Maxar, Planet, ICEYE SAR — 30-50 cm resolution",
              "Maps and crowd-sourcing: OpenStreetMap, OSINT-channel geo-confirmation (GeoConfirmed, OSINTtechnical)",
              "OSINT communities: volunteer analysts aggregate evidence, some high quality",
              "AI-assisted geo-localisation: tools identifying locations from photos in minutes",
              "Civilian phones: anomalous cellular-traffic patterns identifiable from public sources",
            ],
          },
        ],
      },
      {
        heading: "How the enemy uses OSINT against you",
        blocks: [
          {
            type: "p",
            text: "The enemy collects OSINT in a structured way. Publicly documented cases show targeting obtained directly from friendly publications.",
          },
          {
            type: "ul",
            items: [
              "Published photos / selfies: geo-confirmed to identify unit position",
              "Training videos: reveal equipment, tactics, numbers",
              "Unit stories on Telegram: pattern of life, commanders, strength",
              "LinkedIn / Facebook profiles of volunteers: identification, background, network",
              "Obituaries and decorations: identify losses, assess brigade",
              "Foreign-volunteer tracking: entry routes, destination brigades",
              "Civilian crowdsource: Russian/occupied citizens flag friendly positions on Telegram",
            ],
          },
          {
            type: "warn",
            title: "Documented example",
            body: "Command posts, logistic hubs, ammunition depots have been publicly compromised by social-network photos from personnel or residents. OSINT-driven losses documented on both sides of the conflict are significant.",
          },
        ],
      },
      {
        heading: "OPSEC against OSINT — defensive principles",
        blocks: [
          {
            type: "p",
            text: "Defensive OPSEC against OSINT is not 'publish nothing' (impractical for many volunteers) but 'publish with discipline, outside operational context, with neutral metadata'.",
          },
          {
            type: "ul",
            items: [
              "No photos in operational zone, no photos during op, no photos identifiable as such",
              "No EXIF metadata — always stripped before any sharing",
              "No identifiable backgrounds (known buildings, unique landscapes, road signs)",
              "No uniform with identifying patches on public account",
              "No precise dates / times (minimum weeks of delay for any publication)",
              "No teammate names, even nicknames indicating brigade link",
              "No geographic mentions, even generic (\"near Donbas\")",
            ],
          },
          {
            type: "callout",
            title: "The 30-day rule",
            body: "A guideline adopted by experienced volunteers: publish nothing referring to less than 30 days of age. Pattern of life has aged, targeting is less useful. Works only if applied by the whole squad.",
          },
        ],
      },
      {
        heading: "Publication discipline",
        blocks: [
          {
            type: "ul",
            items: [
              "Public personal profiles: pre-2022 content, nothing recently operational",
              "Unit profiles: only brigade-authorised official material",
              "Private photos to family: via encrypted apps (Signal), not social",
              "Pattern: vary hours and contexts to avoid revealing theatre presence",
              "Squad coordination: nobody publishes without tacit or explicit approval",
              "Periodic review: remove historic content that retrospectively becomes compromising",
            ],
          },
        ],
      },
      {
        heading: "Friendly OSINT — ethical and operational principles",
        blocks: [
          {
            type: "p",
            text: "Friendly OSINT exists — Ukrainian services, brigades, public OSINT communities work on open enemy material. For the volunteer, understanding principles is part of the culture, but active employment is specialist.",
          },
          {
            type: "ul",
            items: [
              "OSINT-based targeting: your own brigade may receive intel produced by OSINT — knowing means respecting the source",
              "Source verification: OSINT is subject to deception, sources must be triangulated before action",
              "Ethics: no civilian identification, no targeting of non-combatants, legal distinction",
              "Discipline: friendly OSINT must operate within legal framework (LOAC, IHL)",
              "Reporting: OSINT contributions from individual volunteers go via brigade channels, not published",
              "Awareness: every piece of info on social may be part of enemy PsyOp / deception",
            ],
          },
        ],
      },
      {
        heading: "Deception and counter-OSINT",
        blocks: [
          {
            type: "p",
            text: "OSINT is not only collection — it is also manipulation. Both sides conduct deception operations via OSINT channels.",
          },
          {
            type: "ul",
            items: [
              "Fake profiles: social accounts designed to attract friendly contacts and harvest data",
              "Manipulated photos: deepfakes and out-of-context images to influence perception",
              "False patterns: publish material suggesting inaccurate positions as active deception",
              "Phishing: messages sent to OSINT-identified volunteers, seeking further access",
              "Counter-narrative: fabricated testimonies to undermine morale or reputation",
              "Healthy suspicion: any unsolicited contact asking operational details is potentially hostile",
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
              "Uniform selfie on Instagram \"for friends\" — private account is not private",
              "Telegram story with location tag on",
              "Group photo with identifiable backdrop (specific building, unique landscape)",
              "Brigade public-video publication with identifying data visible",
              "LinkedIn updated during deployment with \"volunteer in Ukraine\"",
              "Teammate obituary with unit and location details",
              "Trusting encrypted DM to discuss operational detail (app is encrypted, device is not)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Public experience of the 2022-2026 front has shown OSINT as an autonomous weapon — no longer only an intelligence tool but a primary targeting source. Ukrainian and Western OSINT communities have tracked Russian units from social media, produced public BDA, identified commanders. Mirroring, Russian OSINT has hit Ukrainian brigades through social analysis of volunteers. Brigades that introduced strict public OPSEC policy — no social in deployment, only old content, periodic profile review — significantly reduced losses documented as OSINT-driven targeting. Message is univocal: the first enemy of your unit is your phone. The second is your teammates' phones. Discipline is collective or doesn't exist.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "OSINT (Open-Source Intelligence) no front ucraniano é arma de dois gumes. Este capítulo descreve como o inimigo a usa contra você e quais princípios defensivos adotar. NÃO contém técnicas ofensivas de OSINT contra pessoas ou procedimentos de targeting via fontes abertas.",
    sections: [
      {
        heading: "O que é OSINT no campo de batalha moderno",
        blocks: [
          {
            type: "p",
            text: "OSINT é a coleta sistemática de informação de fontes públicas (social media, imagens satélite comerciais, registros de vida cotidiana, fóruns, dados de sensores civis). No front 2022-2026 tem papel estratégico e tático, em tempos comprimidos.",
          },
          {
            type: "ul",
            items: [
              "Social media: Telegram, Twitter/X, Instagram, TikTok — fonte pública primária",
              "Satélite comercial: Maxar, Planet, ICEYE SAR — resolução 30-50 cm",
              "Mapas e crowd-sourcing: OpenStreetMap, geo-confirmação de canais OSINT (GeoConfirmed, OSINTtechnical)",
              "Comunidades OSINT: analistas voluntários agregam evidências, algumas de alta qualidade",
              "Geo-localização assistida por IA: ferramentas que identificam locais a partir de fotos em minutos",
              "Celulares civis: padrões anômalos de tráfego celular identificáveis de fontes públicas",
            ],
          },
        ],
      },
      {
        heading: "Como o inimigo usa OSINT contra você",
        blocks: [
          {
            type: "p",
            text: "O inimigo coleta OSINT de modo estruturado. Casos publicamente documentados mostram targeting obtido diretamente de publicações amigas.",
          },
          {
            type: "ul",
            items: [
              "Fotos / selfies publicados: geo-confirmados para identificar posição de unidade",
              "Vídeos de treinamento: revelam equipamento, táticas, números",
              "Histórias de unidade no Telegram: pattern of life, comandantes, efetivo",
              "Perfis LinkedIn / Facebook de voluntários: identificação, background, rede",
              "Necrológios e condecorações: identificam perdas, avaliam brigada",
              "Tracking de voluntários estrangeiros: rotas de entrada, brigadas de destino",
              "Crowdsource civil: cidadãos russos/ocupados sinalizam posições amigas no Telegram",
            ],
          },
          {
            type: "warn",
            title: "Exemplo documentado",
            body: "Postos de comando, hubs logísticos, depósitos de munição foram publicamente comprometidos por fotos de redes sociais de pessoal ou residentes. Perdas OSINT-driven documentadas em ambos os lados do conflito são significativas.",
          },
        ],
      },
      {
        heading: "OPSEC contra OSINT — princípios defensivos",
        blocks: [
          {
            type: "p",
            text: "OPSEC defensiva contra OSINT não é 'não publicar nada' (impraticável para muitos voluntários) mas 'publicar com disciplina, fora de contexto operacional, com metadata neutra'.",
          },
          {
            type: "ul",
            items: [
              "Sem fotos em zona operacional, sem fotos durante operação, sem fotos identificáveis como tal",
              "Sem metadata EXIF — sempre removida antes de qualquer compartilhamento",
              "Sem fundos identificáveis (edifícios conhecidos, paisagens únicas, placas)",
              "Sem uniforme com patches identificativas em conta pública",
              "Sem datas / horários precisos (mínimo de semanas de atraso para qualquer publicação)",
              "Sem nomes de companheiros, mesmo apelidos que indiquem ligação com brigada",
              "Sem menções geográficas, mesmo genéricas (\"perto do Donbas\")",
            ],
          },
          {
            type: "callout",
            title: "A regra dos 30 dias",
            body: "Diretriz adotada por voluntários experientes: não publicar nada que se refira a menos de 30 dias de idade. Pattern of life envelheceu, targeting é menos útil. Funciona se aplicada pela esquadra toda.",
          },
        ],
      },
      {
        heading: "Disciplina de publicação",
        blocks: [
          {
            type: "ul",
            items: [
              "Perfis pessoais públicos: conteúdo pré-2022, nada operacional recente",
              "Perfis de unidade: apenas material oficial autorizado pela brigada",
              "Fotos privadas para família: via apps cifrados (Signal), não social",
              "Pattern: variar horários e contextos para evitar revelar presença em teatro",
              "Coordenação de equipe: ninguém publica sem aprovação tácita ou explícita",
              "Revisão periódica: remover conteúdo histórico que retrospectivamente se tornou comprometedor",
            ],
          },
        ],
      },
      {
        heading: "OSINT amiga — princípios éticos e operacionais",
        blocks: [
          {
            type: "p",
            text: "OSINT amiga existe — serviços ucranianos, brigadas, comunidades OSINT públicas trabalham em material aberto inimigo. Para o voluntário, entender os princípios faz parte da cultura, mas emprego ativo é especializado.",
          },
          {
            type: "ul",
            items: [
              "Targeting baseado em OSINT: sua brigada pode receber intel produzido por OSINT — saber significa respeitar a fonte",
              "Verificação de fontes: OSINT está sujeita a deception, fontes precisam ser triangu­ladas antes de ação",
              "Ética: sem identificação de civis, sem targeting de não combatentes, distinção legal",
              "Disciplina: OSINT amiga deve operar dentro de framework jurídico (LOAC, IHL)",
              "Reporting: contribuições OSINT de voluntários individuais vão via canais brigada, não publicadas",
              "Awareness: cada informação que se vê nos social pode ser parte de operação PsyOp / deception inimiga",
            ],
          },
        ],
      },
      {
        heading: "Deception e contra-OSINT",
        blocks: [
          {
            type: "p",
            text: "OSINT não é só coleta — também é manipulação. Ambos os lados conduzem operações de deception via canais OSINT.",
          },
          {
            type: "ul",
            items: [
              "Perfis falsos: contas social projetadas para atrair contatos amigos e coletar dados",
              "Fotos manipuladas: deepfakes e imagens fora de contexto para influenciar percepção",
              "Padrões falsos: publicar material sugerindo posições inexatas como deception ativa",
              "Phishing: mensagens enviadas a voluntários identificados via OSINT, buscando acesso ulterior",
              "Contra-narrativa: testemunhos inventados para minar moral ou reputação",
              "Suspeita saudável: cada contato não solicitado pedindo detalhes operacionais é potencialmente hostil",
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
              "Selfie de uniforme no Instagram \"para amigos\" — conta privada não é privada",
              "História Telegram com location tag ativa",
              "Foto de grupo com fundo identificável (edifício específico, paisagem única)",
              "Publicação de vídeo público da brigada com dados identificativos visíveis",
              "LinkedIn atualizado durante deployment com \"volunteer in Ukraine\"",
              "Necrológio de companheiro com detalhes de unidade e posição",
              "Confiar em DM cifrado para discutir detalhes operacionais (app cifrado, dispositivo não)",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A experiência pública do front 2022-2026 mostrou OSINT como arma autônoma — não mais só ferramenta de intel mas fonte primária de targeting. Comunidades OSINT ucranianas e ocidentais rastrearam unidades russas a partir de social media, produziram BDA público, identificaram comandantes. Especularmente, OSINT russa atingiu brigadas ucranianas através de análise social de voluntários. As brigadas que introduziram policy estrita de OPSEC pública — sem social em deployment, conteúdo velho só, revisão periódica de perfis — reduziram significativamente perdas documentadas por OSINT-driven targeting. Mensagem unívoca: o primeiro inimigo da sua unidade é seu telefone. O segundo é o telefone dos companheiros. A disciplina é coletiva ou não existe.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "L'OSINT (Open-Source Intelligence) sur le front ukrainien est une arme à double tranchant. Ce chapitre décrit comment l'ennemi l'utilise contre vous et quels principes défensifs adopter. Il NE contient PAS de techniques d'OSINT offensives contre des personnes ou de procédures de targeting via sources ouvertes.",
    sections: [
      {
        heading: "Ce qu'est l'OSINT sur le champ de bataille moderne",
        blocks: [
          {
            type: "p",
            text: "L'OSINT est la collecte systématique d'informations depuis des sources publiques (médias sociaux, imagerie satellite commerciale, enregistrements de vie quotidienne, forums, données de capteurs civils). Sur le front 2022-2026 il joue un rôle à la fois stratégique et tactique, en temps comprimés.",
          },
          {
            type: "ul",
            items: [
              "Médias sociaux : Telegram, Twitter/X, Instagram, TikTok — source publique primaire",
              "Satellite commercial : Maxar, Planet, ICEYE SAR — résolution 30-50 cm",
              "Cartes et crowd-sourcing : OpenStreetMap, géo-confirmation de canaux OSINT (GeoConfirmed, OSINTtechnical)",
              "Communautés OSINT : des analystes bénévoles agrègent les preuves, certaines de haute qualité",
              "Géo-localisation assistée par IA : outils identifiant des lieux à partir de photos en quelques minutes",
              "Téléphones civils : motifs de trafic cellulaire anormaux identifiables depuis sources publiques",
            ],
          },
        ],
      },
      {
        heading: "Comment l'ennemi utilise l'OSINT contre vous",
        blocks: [
          {
            type: "p",
            text: "L'ennemi collecte l'OSINT de façon structurée. Des cas publiquement documentés montrent du targeting obtenu directement depuis des publications amies.",
          },
          {
            type: "ul",
            items: [
              "Photos / selfies publiés : géo-confirmés pour identifier la position d'une unité",
              "Vidéos d'entraînement : révèlent équipement, tactiques, effectifs",
              "Histoires d'unité sur Telegram : pattern of life, commandants, effectif",
              "Profils LinkedIn / Facebook de volontaires : identification, background, réseau",
              "Nécrologies et décorations : identification des pertes, évaluation de la brigade",
              "Tracking de volontaires étrangers : routes d'entrée, brigades de destination",
              "Crowdsource civil : citoyens russes/occupés signalent positions amies sur Telegram",
            ],
          },
          {
            type: "warn",
            title: "Exemple documenté",
            body: "Postes de commandement, hubs logistiques, dépôts de munitions ont été publiquement compromis par des photos de réseaux sociaux de personnel ou de résidents. Les pertes OSINT-driven documentées des deux côtés du conflit sont significatives.",
          },
        ],
      },
      {
        heading: "OPSEC contre OSINT — principes défensifs",
        blocks: [
          {
            type: "p",
            text: "L'OPSEC défensive contre l'OSINT n'est pas « ne rien publier » (impraticable pour de nombreux volontaires) mais « publier avec discipline, hors contexte opérationnel, avec des métadonnées neutres ».",
          },
          {
            type: "ul",
            items: [
              "Pas de photos en zone opérationnelle, pas de photos pendant l'op, pas de photos identifiables comme telles",
              "Pas de métadonnées EXIF — toujours retirées avant tout partage",
              "Pas de fonds identifiables (bâtiments connus, paysages uniques, panneaux routiers)",
              "Pas d'uniforme avec patches identifiants sur compte public",
              "Pas de dates / heures précises (minimum de semaines de délai pour toute publication)",
              "Pas de noms de camarades, même surnoms indiquant un lien de brigade",
              "Pas de mentions géographiques, même génériques (« près du Donbass »)",
            ],
          },
          {
            type: "callout",
            title: "La règle des 30 jours",
            body: "Ligne directrice adoptée par des volontaires expérimentés : ne rien publier qui se réfère à moins de 30 jours d'ancienneté. Le pattern of life a vieilli, le targeting est moins utile. Fonctionne uniquement si appliquée par toute l'équipe.",
          },
        ],
      },
      {
        heading: "Discipline de publication",
        blocks: [
          {
            type: "ul",
            items: [
              "Profils personnels publics : contenu pré-2022, rien d'opérationnel récent",
              "Profils d'unité : seulement matériel officiel autorisé par la brigade",
              "Photos privées à la famille : via applis chiffrées (Signal), pas réseaux sociaux",
              "Pattern : varier heures et contextes pour éviter de révéler la présence en théâtre",
              "Coordination d'équipe : personne ne publie sans approbation tacite ou explicite",
              "Revue périodique : retirer le contenu historique qui rétrospectivement devient compromettant",
            ],
          },
        ],
      },
      {
        heading: "OSINT amie — principes éthiques et opérationnels",
        blocks: [
          {
            type: "p",
            text: "L'OSINT amie existe — services ukrainiens, brigades, communautés OSINT publiques travaillent sur du matériel ouvert ennemi. Pour le volontaire, comprendre les principes fait partie de la culture, mais l'emploi actif est spécialisé.",
          },
          {
            type: "ul",
            items: [
              "Targeting basé sur OSINT : votre brigade peut recevoir du renseignement produit par OSINT — savoir signifie respecter la source",
              "Vérification des sources : l'OSINT est sujette à la deception, les sources doivent être triangulées avant action",
              "Éthique : pas d'identification de civils, pas de targeting de non-combattants, distinction légale",
              "Discipline : l'OSINT amie doit opérer dans un cadre juridique (LOAC, IHL)",
              "Reporting : les contributions OSINT de volontaires individuels passent par les canaux brigade, ne sont pas publiées",
              "Awareness : chaque information vue sur les réseaux sociaux peut faire partie d'une opération PsyOp / deception ennemie",
            ],
          },
        ],
      },
      {
        heading: "Deception et contre-OSINT",
        blocks: [
          {
            type: "p",
            text: "L'OSINT n'est pas que collecte — c'est aussi manipulation. Les deux camps mènent des opérations de deception via canaux OSINT.",
          },
          {
            type: "ul",
            items: [
              "Faux profils : comptes sociaux conçus pour attirer des contacts amis et récolter des données",
              "Photos manipulées : deepfakes et images sorties de leur contexte pour influencer la perception",
              "Faux motifs : publier du matériel suggérant des positions inexactes comme deception active",
              "Phishing : messages envoyés à des volontaires identifiés via OSINT, recherchant accès supplémentaire",
              "Contre-récit : témoignages fabriqués pour saper morale ou réputation",
              "Suspicion saine : tout contact non sollicité demandant des détails opérationnels est potentiellement hostile",
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
              "Selfie en uniforme sur Instagram « pour les amis » — compte privé n'est pas privé",
              "Story Telegram avec location tag activé",
              "Photo de groupe avec fond identifiable (bâtiment spécifique, paysage unique)",
              "Publication de vidéo publique de brigade avec données identifiantes visibles",
              "LinkedIn mis à jour pendant deployment avec « volunteer in Ukraine »",
              "Nécrologie de camarade avec détails d'unité et de position",
              "Faire confiance à un DM chiffré pour discuter de détails opérationnels (l'appli est chiffrée, le dispositif non)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "L'expérience publique du front 2022-2026 a montré l'OSINT comme arme autonome — plus seulement outil de renseignement mais source primaire de targeting. Les communautés OSINT ukrainiennes et occidentales ont suivi des unités russes depuis les médias sociaux, produit du BDA public, identifié des commandants. En miroir, l'OSINT russe a frappé des brigades ukrainiennes par analyse sociale de volontaires. Les brigades ayant introduit une policy stricte d'OPSEC publique — pas de réseaux sociaux en deployment, contenu ancien uniquement, revue périodique des profils — ont significativement réduit les pertes documentées par OSINT-driven targeting. Message univoque : le premier ennemi de votre unité est votre téléphone. Le second est le téléphone de vos camarades. La discipline est collective ou n'existe pas.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
