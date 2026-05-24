import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Questo capitolo raccoglie gli errori più frequenti commessi da volontari stranieri sul fronte ucraino, classificati per categoria. Non è una lista esaustiva né una lista per umiliare: è uno strumento di check-list per evitare di ripetere errori che hanno già un nome, una conseguenza documentata e in molti casi una vittima. Conoscere l'errore in anticipo non lo elimina, ma riduce la probabilità di farlo per primi.",
    sections: [
      {
        heading: "Errori di OPSEC",
        blocks: [
          {
            type: "p",
            text: "Gli errori di sicurezza operativa sono i più ricorrenti e i più documentati. Spesso non hanno conseguenza immediata, e questo li rende insidiosi: il volontario li commette per settimane prima che la firma accumulata generi un effetto.",
          },
          {
            type: "ul",
            items: [
              "Pubblicare foto su social pre-deployment con uniforme già indossata, patches visibili",
              "Postare 'sono in Polonia' o 'volo per Lviv' quando si entra nel teatro",
              "Tenere il telefono personale acceso con localizzazione attiva in zona operativa",
              "Usare WhatsApp/Telegram non cifrati per comunicare con famiglia su date di rientro",
              "Mostrare il proprio kit completo in foto private inviate a casa",
              "Pubblicare 'sano e salvo' immediatamente dopo una missione (segnala fine missione)",
              "Discutere apertamente in luoghi civili (bar, hotel) di unità, missioni, comandanti",
              "Lasciare EXIF intatto su foto inviate a contatti via app non cifrate",
              "Non informare la famiglia di come comportarsi se contattata da media o servizi stranieri",
              "Riusare nome operativo già esposto in altro conflitto",
            ],
          },
          {
            type: "warn",
            title: "TARGETING DELLA FAMIGLIA",
            body: "I servizi russi mantengono dossier OSINT su volontari internazionali identificati. La famiglia in patria è il target più accessibile. Pressioni psicologiche, contatti ostili, doxxing, contatti via 'giornalisti' con identità falsa sono documentati. La famiglia deve essere istruita prima della partenza, non dopo che inizia ad accadere.",
          },
        ],
      },
      {
        heading: "Errori di equipaggiamento",
        blocks: [
          {
            type: "p",
            text: "Il kit del volontario internazionale è spesso eccessivo, inappropriato o incompatibile con la unità ospitante. La cultura del 'porto tutto da casa' produce zaini di 35-40 kg che il fronte ucraino non sostiene.",
          },
          {
            type: "ul",
            items: [
              "Equipaggiamento da catalogo nuovo, riflettente, ancora con etichette",
              "Plate carrier di taglie americane non compatibili con i piastre ucraine forniti",
              "NVG di alto livello senza addestramento adeguato",
              "Stivali da escursionismo civili che si rompono in trincea",
              "Abbigliamento tecnico colorato che spicca sull'ambiente locale",
              "Zaino sovradimensionato che riduce mobilità e dispersione",
              "Coltelli da combattimento decorativi inutili che pesano in tasca",
              "Smart watch e fitness tracker non rimossi prima di operazioni in zona EW",
              "Cuffie Bluetooth 'per la musica' in zona EW e operativa",
              "Batterie e elettronica non testate al freddo dell'inverno ucraino",
            ],
          },
        ],
      },
      {
        heading: "Errori di integrazione con l'unità ospitante",
        blocks: [
          {
            type: "p",
            text: "L'integrazione con la unità ucraina richiede umiltà, pazienza e accettazione di una posizione iniziale subordinata anche per chi ha più esperienza pregressa. La maggior parte dei conflitti tra volontari e unità ospitanti nasce da questo punto.",
          },
          {
            type: "ul",
            items: [
              "Presentarsi come 'esperto' di una scuola dottrinale superiore",
              "Critica aperta delle SOP ucraine nei primi giorni",
              "Bypassare l'ufficiale ucraino per parlare direttamente con il comandante superiore",
              "Proporre cambi di procedura senza avere ancora accumulato credibilità",
              "Rifiutare compiti percepiti come 'sotto' la propria esperienza",
              "Mancare di rispetto del grado e dell'autorità ucraina anche quando il portatore è giovane",
              "Trattare la unità ucraina come 'cliente' del proprio expertise invece che come ospite",
              "Auto-attribuirsi titoli ('platoon commander') non riconosciuti dalla unità",
              "Insistere sulla propria lingua quando esiste un linguaggio operativo comune",
              "Non investire tempo nell'apprendimento minimo di vocabolario ucraino/russo operativo",
            ],
          },
        ],
      },
      {
        heading: "Errori di comunicazione",
        blocks: [
          {
            type: "p",
            text: "Le comunicazioni in unità multinazionale sono un punto critico costante. Lingue diverse, prowords diversi, accenti diversi, livelli di stress diversi generano errori che possono costare vite.",
          },
          {
            type: "ul",
            items: [
              "Usare prowords improvvisati ('COPY THAT', '10-4', 'ROGER THAT' fuori contesto)",
              "Usare la lingua di origine in radio quando esiste lingua operativa comune",
              "Trasmettere troppo a lungo per spiegazioni invece di rompere in chiamate brevi",
              "Non chiedere ripetizione quando non si è capita una trasmissione",
              "Trasmettere mentre ancora in contatto invece di rompere prima",
              "Usare il nome di battesimo di un compagno invece del callsign",
              "Voce alterata sotto stress che rende incomprensibile il messaggio",
              "Mancanza di acknowledge dopo ogni chiamata significativa",
              "Confidare nella cifratura come unico strato di protezione delle comms",
              "Sottostimare la EW russa e l'effetto sul proprio sistema di comms",
            ],
          },
        ],
      },
      {
        heading: "Errori di disciplina personale",
        blocks: [
          {
            type: "p",
            text: "La disciplina personale — sonno, alimentazione, idratazione, gestione dello stress — determina la performance operativa nel medio e lungo termine. I volontari che non si gestiscono diventano un peso per la unità.",
          },
          {
            type: "ul",
            items: [
              "Sottovalutare l'importanza del sonno: 4 ore notte dopo notte degradano gravemente la performance",
              "Non idratarsi sufficientemente in trincea per 'limitare le uscite'",
              "Saltare pasti perché 'non ho fame' — il corpo brucia 4000+ kcal al giorno in operazione",
              "Uso di alcol per gestire lo stress — degrada giudizio e reazione",
              "Sigarette in posizione di osservazione — firma visiva e termica",
              "Non curare i piedi in trincea — il trench foot toglie l'operatore per settimane",
              "Mancata cura igienica di base: infezioni e malattie eliminano effettivi tanto quanto il combattimento",
              "Esaurimento mentale non riconosciuto né comunicato al leader di team",
              "Comportamento eroico individuale invece di lavoro di squadra disciplinato",
              "Mancata integrazione con la routine della unità (orari, pasti, briefing)",
            ],
          },
        ],
      },
      {
        heading: "Errori operativi sul terreno",
        blocks: [
          {
            type: "p",
            text: "Gli errori operativi sono i più diretti in termini di conseguenza. Spesso sono il risultato di errori OPSEC, equipaggiamento e integrazione che si manifestano sul terreno.",
          },
          {
            type: "ul",
            items: [
              "Movimento in gruppo compatto sotto cielo aperto in zona FPV",
              "Ritmo prevedibile di pattugliamento (stesso orario, stesso percorso)",
              "Sparare a un drone con arma personale, rivelando posizione amica",
              "Esporre la termocamera amica oltre il bordo della copertura",
              "Trascurare la copertura superiore di trincee e posizioni",
              "Ignorare il rumore di motorino sopra di sé pensando 'sarà amico'",
              "Saltare la verifica di IFF al rientro da pattuglia notturna",
              "Continuare la missione invece di rompere e estrarre quando si è chiaramente scoperti",
              "Affidarsi a GPS in zona EW invece di bussola e mappa",
              "Movimento in pieno sole o su cresta per pigrizia di terreno",
            ],
          },
        ],
      },
      {
        heading: "Errori di aspettative",
        blocks: [
          {
            type: "p",
            text: "L'ultima categoria, spesso la più importante, è la categoria delle aspettative non realistiche. Il volontario arriva con un'immagine del conflitto formata da social media, film, video di YouTube e qualche briefing affrettato. La realtà sul terreno differisce profondamente.",
          },
          {
            type: "ul",
            items: [
              "Aspettarsi azione costante invece che lunghi periodi di attesa, manutenzione e routine",
              "Aspettarsi di operare 'come nei film' con assalti urbani dinamici quotidiani",
              "Sottovalutare la guerra di trincea, ipotermia, fango, ratti, stanchezza cronica",
              "Sopravvalutare la propria competenza tecnica prima di confrontarsi con il fronte",
              "Aspettarsi accoglienza eroica invece di scetticismo legittimo della unità ospitante",
              "Aspettarsi rotazioni regolari invece dei prolungamenti dovuti a difficoltà di estrazione",
              "Aspettarsi MEDEVAC NATO-style invece della realtà di evacuazione a piedi sotto FPV",
              "Aspettarsi che la propria lingua di origine sia parlata da tutti nella unità",
              "Aspettarsi di essere coinvolti in decisioni operative al di sopra del proprio livello",
              "Aspettarsi che la guerra finisca presto e di essere a casa per Natale",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari internazionali che hanno funzionato sul fronte ucraino tra il 2022 e il 2026 hanno un profilo comune: pazienza, umiltà, disciplina personale e capacità di adattarsi a un sistema che non è quello della loro scuola di origine. Non sono i più decorati, né i più equipaggiati, né i più vocali. Sono quelli che ascoltano per i primi tre mesi, che imparano il vocabolario operativo locale, che rispettano la catena di comando anche quando la giudicano subottimale, che si presentano puntuali, che non postano su social. La differenza tra il volontario utile e quello pericoloso è quasi sempre comportamentale, non tecnica. Questo capitolo è prima di tutto un invito a riconoscere se stessi negli errori prima di commetterli, non un giudizio su chi è già caduto in essi.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "This chapter collects the most frequent mistakes made by foreign volunteers on the Ukrainian front, categorised. It is neither exhaustive nor a list intended to humiliate: it is a checklist tool to avoid repeating mistakes that already have a name, a documented consequence and in many cases a casualty. Knowing the mistake in advance does not eliminate it, but reduces the probability of being among the first to make it.",
    sections: [
      {
        heading: "OPSEC mistakes",
        blocks: [
          {
            type: "p",
            text: "OPSEC mistakes are the most recurrent and best documented. They often have no immediate consequence, which is what makes them insidious: the volunteer commits them for weeks before accumulated signature generates an effect.",
          },
          {
            type: "ul",
            items: [
              "Publishing pre-deployment social photos with uniform already worn, patches visible",
              "Posting 'I'm in Poland' or 'flying to Lviv' on entering theatre",
              "Keeping the personal phone on with location enabled in operational areas",
              "Using unencrypted WhatsApp/Telegram to communicate return dates with family",
              "Showing the full kit in private photos sent home",
              "Posting 'home safe' immediately after a mission (signals mission end)",
              "Openly discussing units, missions, commanders in civilian spaces (bars, hotels)",
              "Leaving EXIF intact on photos sent to contacts via unencrypted apps",
              "Not briefing family on how to behave if contacted by media or foreign services",
              "Reusing an operational name already exposed in another conflict",
            ],
          },
          {
            type: "warn",
            title: "FAMILY TARGETING",
            body: "Russian services maintain OSINT dossiers on identified international volunteers. The family at home is the most accessible target. Psychological pressure, hostile contacts, doxxing, contacts via 'journalists' with false identity are documented. The family must be briefed before departure, not after it starts happening.",
          },
        ],
      },
      {
        heading: "Equipment mistakes",
        blocks: [
          {
            type: "p",
            text: "The international volunteer's kit is often excessive, inappropriate or incompatible with the host unit. The 'I bring everything from home' culture produces 35-40 kg rucksacks that the Ukrainian front does not sustain.",
          },
          {
            type: "ul",
            items: [
              "Brand-new catalogue kit, reflective, still with tags",
              "American-size plate carrier incompatible with Ukrainian-issued plates",
              "High-end NVGs without adequate training",
              "Civilian hiking boots that fail in the trench",
              "Brightly coloured technical clothing that stands out from the local environment",
              "Oversized rucksack that reduces mobility and dispersion",
              "Decorative combat knives that add useless weight",
              "Smartwatches and fitness trackers not removed before operations in EW zones",
              "Bluetooth headphones 'for music' in EW and operational zones",
              "Untested batteries and electronics in Ukrainian winter cold",
            ],
          },
        ],
      },
      {
        heading: "Host-unit integration mistakes",
        blocks: [
          {
            type: "p",
            text: "Integrating with the Ukrainian unit requires humility, patience and accepting an initially subordinate position even for those with prior experience. Most conflict between volunteers and host units originates here.",
          },
          {
            type: "ul",
            items: [
              "Presenting yourself as the 'expert' of a superior doctrinal school",
              "Open criticism of Ukrainian SOPs in the first days",
              "Bypassing the Ukrainian officer to talk directly to higher command",
              "Proposing procedure changes before having accumulated credibility",
              "Refusing tasks perceived as 'below' your experience",
              "Disrespecting Ukrainian rank and authority even when the bearer is young",
              "Treating the Ukrainian unit as a 'client' of your expertise rather than as a host",
              "Self-appointed titles ('platoon commander') not recognised by the unit",
              "Insisting on your own language when a common operational language exists",
              "Not investing time in minimum learning of Ukrainian/Russian operational vocabulary",
            ],
          },
        ],
      },
      {
        heading: "Communication mistakes",
        blocks: [
          {
            type: "p",
            text: "Communications in multinational units are a constant critical point. Different languages, different prowords, different accents, different stress levels generate errors that can cost lives.",
          },
          {
            type: "ul",
            items: [
              "Using improvised prowords ('COPY THAT', '10-4', 'ROGER THAT' out of context)",
              "Using the home language on radio when a common operational language exists",
              "Transmitting too long for explanations instead of breaking into short calls",
              "Not asking for repetition when you did not understand a transmission",
              "Transmitting while still in contact instead of breaking contact first",
              "Using a teammate's first name instead of the callsign",
              "Altered voice under stress that makes the message incomprehensible",
              "Lack of acknowledgement after every significant call",
              "Trusting encryption as the only layer of comms protection",
              "Underestimating Russian EW and its effect on your comms system",
            ],
          },
        ],
      },
      {
        heading: "Personal-discipline mistakes",
        blocks: [
          {
            type: "p",
            text: "Personal discipline — sleep, food, hydration, stress management — determines operational performance over the medium and long term. Volunteers who do not manage themselves become a burden to the unit.",
          },
          {
            type: "ul",
            items: [
              "Underestimating the importance of sleep: 4 hours night after night severely degrades performance",
              "Not hydrating enough in the trench to 'limit outings'",
              "Skipping meals because 'I'm not hungry' — the body burns 4000+ kcal a day in operations",
              "Using alcohol to manage stress — degrades judgement and reaction",
              "Cigarettes at the observation position — visual and thermal signature",
              "Not caring for feet in trench — trench foot removes the operator for weeks",
              "Skipping basic hygiene: infections and disease remove personnel as much as combat",
              "Mental exhaustion not recognised nor communicated to the team leader",
              "Individual heroic behaviour rather than disciplined teamwork",
              "Failure to integrate with unit routine (timings, meals, briefings)",
            ],
          },
        ],
      },
      {
        heading: "Operational mistakes on the ground",
        blocks: [
          {
            type: "p",
            text: "Operational mistakes have the most direct consequences. They are often the result of OPSEC, equipment and integration mistakes manifesting on the ground.",
          },
          {
            type: "ul",
            items: [
              "Moving in tight groups under open sky in an FPV zone",
              "Predictable patrol rhythm (same time, same route)",
              "Shooting at a drone with a personal weapon, revealing the friendly position",
              "Exposing the friendly thermal optic beyond the edge of cover",
              "Neglecting overhead cover of trenches and positions",
              "Ignoring overhead motor sound thinking 'it must be friendly'",
              "Skipping IFF check on return from night patrol",
              "Continuing the mission instead of breaking and extracting when clearly compromised",
              "Trusting GPS in an EW zone instead of compass and map",
              "Movement in full sun or on the crest out of terrain laziness",
            ],
          },
        ],
      },
      {
        heading: "Expectation mistakes",
        blocks: [
          {
            type: "p",
            text: "The last category, often the most important, is unrealistic expectations. The volunteer arrives with an image of the conflict shaped by social media, films, YouTube videos and a few hurried briefings. Ground reality differs deeply.",
          },
          {
            type: "ul",
            items: [
              "Expecting constant action rather than long periods of waiting, maintenance and routine",
              "Expecting to operate 'like in the movies' with daily dynamic urban assaults",
              "Underestimating trench warfare, hypothermia, mud, rats, chronic fatigue",
              "Overestimating own technical competence before confronting the front",
              "Expecting a heroic welcome instead of legitimate scepticism from the host unit",
              "Expecting regular rotations instead of extensions due to extraction difficulty",
              "Expecting NATO-style MEDEVAC instead of foot evacuation under FPV reality",
              "Expecting your home language to be spoken by all in the unit",
              "Expecting to be involved in operational decisions above your level",
              "Expecting the war to end soon and to be home by Christmas",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "International volunteers who have functioned on the Ukrainian front between 2022 and 2026 share a common profile: patience, humility, personal discipline and the capacity to adapt to a system that is not the one of their school of origin. They are not the most decorated, nor the best equipped, nor the most vocal. They are the ones who listen for the first three months, who learn the local operational vocabulary, who respect the chain of command even when they judge it suboptimal, who show up on time, who do not post on social. The difference between a useful volunteer and a dangerous one is almost always behavioural, not technical. This chapter is above all an invitation to recognise oneself in the mistakes before committing them, not a judgment on those who already fell into them.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Este capítulo reúne os erros mais frequentes cometidos por voluntários estrangeiros no front ucraniano, categorizados. Não é uma lista exaustiva nem uma lista para humilhar: é uma ferramenta de check-list para evitar repetir erros que já têm nome, consequência documentada e em muitos casos uma vítima. Saber o erro com antecedência não o elimina, mas reduz a probabilidade de cometê-lo entre os primeiros.",
    sections: [
      {
        heading: "Erros de OPSEC",
        blocks: [
          {
            type: "p",
            text: "Os erros de segurança operacional são os mais recorrentes e melhor documentados. Frequentemente não têm consequência imediata, o que os torna insidiosos: o voluntário os comete por semanas antes que a assinatura acumulada gere efeito.",
          },
          {
            type: "ul",
            items: [
              "Publicar fotos pré-deployment com uniforme já vestido, patches visíveis",
              "Postar 'estou na Polônia' ou 'voando para Lviv' ao entrar no teatro",
              "Manter o celular pessoal ligado com localização ativada em zona operacional",
              "Usar WhatsApp/Telegram sem cifragem para combinar datas de retorno com a família",
              "Mostrar o kit completo em fotos privadas enviadas para casa",
              "Postar 'voltei bem' imediatamente após missão (sinaliza fim de missão)",
              "Discutir abertamente em espaços civis (bares, hotéis) unidades, missões, comandantes",
              "Deixar EXIF intacto em fotos enviadas por apps não cifradas",
              "Não instruir a família sobre como agir se contactada por mídia ou serviços estrangeiros",
              "Reusar nome operacional já exposto em outro conflito",
            ],
          },
          {
            type: "warn",
            title: "TARGETING DA FAMÍLIA",
            body: "Os serviços russos mantêm dossiês OSINT sobre voluntários internacionais identificados. A família em casa é o alvo mais acessível. Pressão psicológica, contatos hostis, doxxing, contatos via 'jornalistas' com identidade falsa são documentados. A família deve ser instruída antes da partida, não depois que isso começa a acontecer.",
          },
        ],
      },
      {
        heading: "Erros de equipamento",
        blocks: [
          {
            type: "p",
            text: "O kit do voluntário internacional é frequentemente excessivo, inapropriado ou incompatível com a unidade hospedeira. A cultura do 'levo tudo de casa' produz mochilas de 35-40 kg que o front ucraniano não sustenta.",
          },
          {
            type: "ul",
            items: [
              "Equipamento novo de catálogo, refletivo, ainda com etiquetas",
              "Plate carrier tamanho americano incompatível com placas ucranianas fornecidas",
              "NVGs de alto nível sem treinamento adequado",
              "Botas civis de trilha que falham na trincheira",
              "Roupa técnica colorida que destaca do ambiente local",
              "Mochila superdimensionada que reduz mobilidade e dispersão",
              "Facas de combate decorativas que adicionam peso inútil",
              "Smartwatches e fitness trackers não removidos antes de operações em zona EW",
              "Fones Bluetooth 'para música' em zona EW e operacional",
              "Baterias e eletrônicos não testados no frio do inverno ucraniano",
            ],
          },
        ],
      },
      {
        heading: "Erros de integração com a unidade hospedeira",
        blocks: [
          {
            type: "p",
            text: "Integrar-se à unidade ucraniana exige humildade, paciência e aceitação de posição inicial subordinada mesmo para quem tem experiência prévia. A maioria dos conflitos entre voluntários e unidades hospedeiras nasce desse ponto.",
          },
          {
            type: "ul",
            items: [
              "Apresentar-se como 'especialista' de uma escola doutrinária superior",
              "Crítica aberta às SOPs ucranianas nos primeiros dias",
              "Burlar o oficial ucraniano para falar direto com o comando superior",
              "Propor mudanças de procedimento sem credibilidade acumulada",
              "Recusar tarefas percebidas como 'abaixo' da própria experiência",
              "Faltar respeito ao posto e autoridade ucraniana mesmo quando o portador é jovem",
              "Tratar a unidade ucraniana como 'cliente' do próprio expertise em vez de hospedeira",
              "Auto-atribuir-se títulos ('platoon commander') não reconhecidos pela unidade",
              "Insistir na própria língua quando existe linguagem operacional comum",
              "Não investir tempo no aprendizado mínimo de vocabulário ucraniano/russo operacional",
            ],
          },
        ],
      },
      {
        heading: "Erros de comunicação",
        blocks: [
          {
            type: "p",
            text: "Comunicações em unidade multinacional são ponto crítico constante. Línguas diferentes, prowords diferentes, sotaques diferentes, níveis de estresse diferentes geram erros que podem custar vidas.",
          },
          {
            type: "ul",
            items: [
              "Usar prowords improvisadas ('COPY THAT', '10-4', 'ROGER THAT' fora de contexto)",
              "Usar a língua de origem em rádio quando existe língua operacional comum",
              "Transmitir longo demais para explicar em vez de quebrar em chamadas curtas",
              "Não pedir repetição quando não se entendeu uma transmissão",
              "Transmitir ainda em contato em vez de quebrar o contato primeiro",
              "Usar o primeiro nome de um companheiro em vez do callsign",
              "Voz alterada sob estresse tornando a mensagem incompreensível",
              "Falta de acknowledge após cada chamada significativa",
              "Confiar na cifragem como única camada de proteção das comms",
              "Subestimar a EW russa e seu efeito sobre o próprio sistema de comms",
            ],
          },
        ],
      },
      {
        heading: "Erros de disciplina pessoal",
        blocks: [
          {
            type: "p",
            text: "A disciplina pessoal — sono, alimentação, hidratação, gestão do estresse — determina a performance operacional no médio e longo prazo. Voluntários que não se gerenciam viram peso para a unidade.",
          },
          {
            type: "ul",
            items: [
              "Subestimar a importância do sono: 4 horas noite após noite degrada gravemente a performance",
              "Não se hidratar o suficiente na trincheira para 'limitar saídas'",
              "Pular refeições porque 'não estou com fome' — o corpo queima 4000+ kcal/dia em operação",
              "Uso de álcool para gerir estresse — degrada julgamento e reação",
              "Cigarro em posição de observação — assinatura visual e térmica",
              "Não cuidar dos pés em trincheira — trench foot afasta o operador por semanas",
              "Pular higiene básica: infecções e doenças tiram efetivos tanto quanto o combate",
              "Exaustão mental não reconhecida nem comunicada ao líder de equipe",
              "Comportamento heroico individual em vez de trabalho de equipe disciplinado",
              "Falta de integração com a rotina da unidade (horários, refeições, briefings)",
            ],
          },
        ],
      },
      {
        heading: "Erros operacionais no terreno",
        blocks: [
          {
            type: "p",
            text: "Erros operacionais têm as consequências mais diretas. Frequentemente são resultado de erros de OPSEC, equipamento e integração que se manifestam no terreno.",
          },
          {
            type: "ul",
            items: [
              "Movimento em grupo compacto sob céu aberto em zona FPV",
              "Ritmo previsível de patrulhamento (mesmo horário, mesma rota)",
              "Atirar em drone com arma pessoal, revelando posição amiga",
              "Expor a térmica amiga além da borda da cobertura",
              "Negligenciar cobertura superior em trincheiras e posições",
              "Ignorar som de motorzinho acima de si pensando 'deve ser amigo'",
              "Pular verificação de IFF no retorno de patrulha noturna",
              "Continuar a missão em vez de quebrar e extrair quando claramente comprometido",
              "Confiar em GPS em zona EW em vez de bússola e mapa",
              "Movimento em pleno sol ou em cumeada por preguiça de terreno",
            ],
          },
        ],
      },
      {
        heading: "Erros de expectativa",
        blocks: [
          {
            type: "p",
            text: "A última categoria, frequentemente a mais importante, é a de expectativas irreais. O voluntário chega com imagem do conflito formada por redes sociais, filmes, vídeos do YouTube e poucos briefings apressados. A realidade no terreno difere profundamente.",
          },
          {
            type: "ul",
            items: [
              "Esperar ação constante em vez de longos períodos de espera, manutenção e rotina",
              "Esperar operar 'como nos filmes' com assaltos urbanos dinâmicos diários",
              "Subestimar guerra de trincheira, hipotermia, lama, ratos, fadiga crônica",
              "Superestimar a própria competência técnica antes de confrontar o front",
              "Esperar acolhida heroica em vez de ceticismo legítimo da unidade hospedeira",
              "Esperar rotações regulares em vez de extensões por dificuldade de extração",
              "Esperar MEDEVAC OTAN-style em vez da realidade de evacuação a pé sob FPV",
              "Esperar que a própria língua seja falada por todos na unidade",
              "Esperar ser envolvido em decisões operacionais acima do próprio nível",
              "Esperar que a guerra termine logo e estar em casa no Natal",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Os voluntários internacionais que funcionaram no front ucraniano entre 2022 e 2026 compartilham perfil comum: paciência, humildade, disciplina pessoal e capacidade de se adaptar a um sistema que não é o de sua escola de origem. Não são os mais condecorados, nem os mais equipados, nem os mais vocais. São os que escutam pelos primeiros três meses, que aprendem o vocabulário operacional local, que respeitam a cadeia de comando mesmo quando a julgam subótima, que chegam pontuais, que não postam em redes sociais. A diferença entre o voluntário útil e o perigoso é quase sempre comportamental, não técnica. Este capítulo é, antes de tudo, um convite a reconhecer-se nos erros antes de cometê-los, não um julgamento sobre quem já caiu neles.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Ce chapitre rassemble les erreurs les plus fréquentes commises par les volontaires étrangers sur le front ukrainien, classées par catégorie. Ce n'est ni une liste exhaustive ni une liste pour humilier : c'est un outil de check-list pour éviter de répéter des erreurs qui ont déjà un nom, une conséquence documentée et dans bien des cas une victime. Connaître l'erreur à l'avance ne l'élimine pas, mais réduit la probabilité de la commettre parmi les premiers.",
    sections: [
      {
        heading: "Erreurs d'OPSEC",
        blocks: [
          {
            type: "p",
            text: "Les erreurs de sécurité opérationnelle sont les plus récurrentes et les mieux documentées. Elles n'ont souvent pas de conséquence immédiate, ce qui les rend insidieuses : le volontaire les commet pendant des semaines avant que la signature accumulée ne produise un effet.",
          },
          {
            type: "ul",
            items: [
              "Publier des photos sociales pré-déploiement avec uniforme déjà porté, patches visibles",
              "Poster « je suis en Pologne » ou « je vole vers Lviv » en entrant en théâtre",
              "Garder le téléphone personnel allumé avec localisation active en zone opérationnelle",
              "Utiliser WhatsApp/Telegram non chiffrés pour convenir des dates de retour avec la famille",
              "Montrer tout son kit dans des photos privées envoyées à la maison",
              "Poster « rentré sain » juste après une mission (signale la fin de mission)",
              "Discuter ouvertement dans des lieux civils (bars, hôtels) d'unités, missions, chefs",
              "Laisser l'EXIF intact sur les photos envoyées via apps non chiffrées",
              "Ne pas instruire la famille sur la conduite à tenir si contactée par les médias ou des services étrangers",
              "Réutiliser un nom opérationnel déjà exposé dans un autre conflit",
            ],
          },
          {
            type: "warn",
            title: "CIBLAGE DE LA FAMILLE",
            body: "Les services russes tiennent des dossiers OSINT sur les volontaires internationaux identifiés. La famille au pays est la cible la plus accessible. Pression psychologique, contacts hostiles, doxxing, contacts via de « journalistes » à identité fausse sont documentés. La famille doit être briefée avant le départ, pas après le début des faits.",
          },
        ],
      },
      {
        heading: "Erreurs d'équipement",
        blocks: [
          {
            type: "p",
            text: "L'équipement du volontaire international est souvent excessif, inapproprié ou incompatible avec l'unité hôte. La culture du « j'amène tout depuis la maison » produit des sacs de 35-40 kg que le front ukrainien ne supporte pas.",
          },
          {
            type: "ul",
            items: [
              "Équipement neuf de catalogue, réfléchissant, encore étiqueté",
              "Plate carrier taille américaine incompatible avec les plaques ukrainiennes fournies",
              "NVG haut de gamme sans formation adéquate",
              "Chaussures de randonnée civiles qui cèdent en tranchée",
              "Vêtement technique coloré qui détonne dans l'environnement local",
              "Sac surdimensionné qui réduit mobilité et dispersion",
              "Couteaux de combat décoratifs ajoutant un poids inutile",
              "Smartwatch et fitness trackers non retirés avant opérations en zone GE",
              "Écouteurs Bluetooth « pour la musique » en zone GE et opérationnelle",
              "Batteries et électronique non testées au froid de l'hiver ukrainien",
            ],
          },
        ],
      },
      {
        heading: "Erreurs d'intégration à l'unité hôte",
        blocks: [
          {
            type: "p",
            text: "S'intégrer à l'unité ukrainienne exige humilité, patience et acceptation d'une position initialement subordonnée même pour ceux qui ont de l'expérience. La majorité des conflits entre volontaires et unités hôtes naissent de là.",
          },
          {
            type: "ul",
            items: [
              "Se présenter comme « expert » d'une école doctrinale supérieure",
              "Critique ouverte des SOP ukrainiennes dans les premiers jours",
              "Court-circuiter l'officier ukrainien pour parler directement au commandement supérieur",
              "Proposer des changements de procédure sans crédibilité accumulée",
              "Refuser des tâches perçues comme « en-dessous » de son expérience",
              "Manquer de respect au grade et à l'autorité ukrainienne même quand le porteur est jeune",
              "Traiter l'unité ukrainienne comme « cliente » de son expertise plutôt que comme hôte",
              "Titres auto-attribués (« chef de section ») non reconnus par l'unité",
              "Insister sur sa langue d'origine quand une langue opérationnelle commune existe",
              "Ne pas investir de temps dans l'apprentissage minimum du vocabulaire ukrainien/russe opérationnel",
            ],
          },
        ],
      },
      {
        heading: "Erreurs de communication",
        blocks: [
          {
            type: "p",
            text: "Les communications en unité multinationale sont un point critique constant. Langues différentes, prowords différents, accents différents, niveaux de stress différents engendrent des erreurs qui peuvent coûter des vies.",
          },
          {
            type: "ul",
            items: [
              "Utiliser des prowords improvisés (« COPY THAT », « 10-4 », « ROGER THAT » hors contexte)",
              "Utiliser sa langue d'origine en radio quand une langue opérationnelle commune existe",
              "Émettre trop longtemps pour des explications au lieu de découper en appels courts",
              "Ne pas demander répétition quand on n'a pas compris une transmission",
              "Émettre encore en contact au lieu de rompre le contact d'abord",
              "Utiliser le prénom d'un coéquipier au lieu de l'indicatif",
              "Voix altérée sous stress rendant le message incompréhensible",
              "Absence d'acknowledge après chaque appel significatif",
              "Faire confiance au chiffrement comme seule couche de protection des comms",
              "Sous-estimer la GE russe et son effet sur son propre système de comms",
            ],
          },
        ],
      },
      {
        heading: "Erreurs de discipline personnelle",
        blocks: [
          {
            type: "p",
            text: "La discipline personnelle — sommeil, alimentation, hydratation, gestion du stress — détermine la performance opérationnelle à moyen et long terme. Les volontaires qui ne se gèrent pas deviennent un poids pour l'unité.",
          },
          {
            type: "ul",
            items: [
              "Sous-estimer l'importance du sommeil : 4 heures nuit après nuit dégradent gravement la performance",
              "Ne pas s'hydrater suffisamment en tranchée pour « limiter les sorties »",
              "Sauter des repas parce que « je n'ai pas faim » — le corps brûle 4000+ kcal par jour en opération",
              "Usage d'alcool pour gérer le stress — dégrade le jugement et la réaction",
              "Cigarettes au poste d'observation — signature visuelle et thermique",
              "Ne pas s'occuper des pieds en tranchée — le trench foot retire l'opérateur des semaines",
              "Sauter l'hygiène de base : infections et maladies retirent des personnels autant que le combat",
              "Épuisement mental non reconnu ni communiqué au chef d'équipe",
              "Comportement héroïque individuel au lieu d'un travail d'équipe discipliné",
              "Défaut d'intégration à la routine de l'unité (horaires, repas, briefings)",
            ],
          },
        ],
      },
      {
        heading: "Erreurs opérationnelles sur le terrain",
        blocks: [
          {
            type: "p",
            text: "Les erreurs opérationnelles ont les conséquences les plus directes. Elles sont souvent le résultat d'erreurs d'OPSEC, d'équipement et d'intégration se manifestant sur le terrain.",
          },
          {
            type: "ul",
            items: [
              "Mouvement en groupe compact sous ciel ouvert en zone FPV",
              "Tempo prévisible de patrouille (même horaire, même itinéraire)",
              "Tirer sur un drone à l'arme personnelle, en révélant la position amie",
              "Exposer la thermique amie au-delà du bord du couvert",
              "Négliger le couvert supérieur des tranchées et positions",
              "Ignorer un bruit de moteur au-dessus de soi en pensant « ça doit être ami »",
              "Sauter la vérification IFF au retour de patrouille nocturne",
              "Poursuivre la mission au lieu de rompre et extraire quand on est clairement compromis",
              "Faire confiance au GPS en zone GE au lieu de la boussole et de la carte",
              "Mouvement en plein soleil ou sur crête par paresse de terrain",
            ],
          },
        ],
      },
      {
        heading: "Erreurs d'attentes",
        blocks: [
          {
            type: "p",
            text: "La dernière catégorie, souvent la plus importante, est celle des attentes irréalistes. Le volontaire arrive avec une image du conflit formée par les réseaux sociaux, les films, YouTube et quelques briefings hâtifs. La réalité sur le terrain en diffère profondément.",
          },
          {
            type: "ul",
            items: [
              "Attendre de l'action constante plutôt que de longues périodes d'attente, d'entretien et de routine",
              "Attendre opérer « comme dans les films » avec des assauts urbains dynamiques quotidiens",
              "Sous-estimer la guerre de tranchée, l'hypothermie, la boue, les rats, la fatigue chronique",
              "Surestimer sa compétence technique avant de se confronter au front",
              "Attendre un accueil héroïque plutôt qu'un scepticisme légitime de l'unité hôte",
              "Attendre des rotations régulières au lieu d'extensions dues à la difficulté d'extraction",
              "Attendre une MEDEVAC OTAN-style au lieu de la réalité d'évacuation à pied sous FPV",
              "Attendre que sa langue d'origine soit parlée par tous dans l'unité",
              "Attendre d'être impliqué dans des décisions opérationnelles au-dessus de son niveau",
              "Attendre que la guerre finisse vite et d'être à la maison pour Noël",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires internationaux qui ont fonctionné sur le front ukrainien entre 2022 et 2026 partagent un profil commun : patience, humilité, discipline personnelle et capacité à s'adapter à un système qui n'est pas celui de leur école d'origine. Ce ne sont pas les plus décorés, ni les mieux équipés, ni les plus vocaux. Ce sont ceux qui écoutent pendant les trois premiers mois, qui apprennent le vocabulaire opérationnel local, qui respectent la chaîne de commandement même quand ils la jugent sous-optimale, qui sont ponctuels, qui ne postent pas sur les réseaux. La différence entre un volontaire utile et un volontaire dangereux est presque toujours comportementale, pas technique. Ce chapitre est avant tout une invitation à se reconnaître dans les erreurs avant de les commettre, pas un jugement sur ceux qui y sont déjà tombés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
