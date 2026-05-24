import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

interface Strings {
  intro: string;
  threat: string;
  threatBody: string;
  threatItems: ReadonlyArray<{ title: string; body: string }>;
  principles: string;
  principlesBody: string;
  principlesItems: ReadonlyArray<{ title: string; body: string }>;
  rsvp: string;
  rsvpBody: string;
  rsvpRows: ReadonlyArray<[string, string]>;
  structure: string;
  structureBody: string;
  structureExample: ReadonlyArray<string>;
  netiquette: string;
  netiquetteItems: ReadonlyArray<string>;
  encryption: string;
  encryptionBody: string;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
  checklist: string;
  checklistItems: ReadonlyArray<string>;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "La disciplina radio è la differenza tra una rete che lavora e una rete che diventa, nel giro di minuti, un sistema di puntamento d'artiglieria per il nemico. Ogni trasmissione è un evento elettromagnetico misurabile: trasmettere è esporsi. Tutto il capitolo si fonda su questo assunto.",
    threat: "Cosa intercetta una trasmissione",
    threatBody:
      "Una stazione che chiama \"BRAVO TWO\" su VHF non sta solo parlando con BRAVO TWO. Sta parlando con chiunque sia in banda nel raggio di propagazione — incluse stazioni di intercettazione, COMINT, ESM e sistemi di goniometria che convertono i segnali in coordinate.",
    threatItems: [
      { title: "SIGINT / COMINT", body: "Intercettazione e analisi del contenuto. Cattura traffico, voci, sequenze. In Ucraina anche operatori amatoriali con SDR partecipano." },
      { title: "Direction Finding (DF)", body: "Triangolazione della posizione del trasmettitore. Tre stazioni di goniometria producono una griglia metrica in pochi secondi su trasmissioni > 6 secondi." },
      { title: "Electronic Support Measures (ESM)", body: "Monitoraggio passivo di frequenze, potenze, modulazioni. Costruisce un profilo elettromagnetico dell'unità." },
      { title: "Pattern of Life", body: "Analisi dei tempi di trasmissione, ricorrenze, callsign per dedurre struttura, attività e prossime mosse senza decifrare." },
      { title: "Targeting", body: "L'output finale: una griglia MGRS verso un'unità di tiro. Tempo medio osservato sul fronte ucraino dall'intercettazione al primo colpo: 2-15 minuti." },
    ],
    principles: "Principi",
    principlesBody:
      "Tre principi reggono la disciplina radio. Sono in tensione tra loro: ottimizzare uno solo è un errore. Vanno bilanciati per ogni trasmissione.",
    principlesItems: [
      { title: "Brevità", body: "Trasmettere il minimo necessario. Una trasmissione lunga è un faro elettromagnetico. Target operativo: meno di 6 secondi per messaggio, meno di 15 secondi per report complessi." },
      { title: "Accuratezza", body: "Niente ambiguità, niente improvvisazione lessicale. Formati standard (SALUTE, SITREP, 9-line), prowords standard, terminologia standard." },
      { title: "Sicurezza", body: "Niente nomi propri, niente posizioni amiche in chiaro, niente intenzioni dichiarate in chiaro. Quando la cifratura non c'è, si usano brevity codes e CEOI." },
    ],
    rsvp: "Pre-trasmissione: RSVP",
    rsvpBody:
      "Prima di premere il PTT, quattro controlli mentali. RSVP è il mnemonico anglosassone diffuso nelle scuole NATO. Saltarlo è la causa più frequente di trasmissioni inutili o pericolose.",
    rsvpRows: [
      ["R — Rhythm", "Ritmo costante, voce naturale. No urla, no sussurri innaturali."],
      ["S — Speed", "Velocità di dettatura — chi ascolta deve poter scrivere. Né più veloce, né più lento."],
      ["V — Volume", "Volume normale di conversazione. Il PTT fa il resto. Urlare distorce e non aiuta il segnale."],
      ["P — Pitch", "Tonalità leggermente più alta del parlato naturale per migliorare l'intelligibilità su voce compressa."],
    ],
    structure: "Struttura standard di una chiamata",
    structureBody:
      "Ogni chiamata segue una struttura fissa: callsign destinatario → callsign emittente → contenuto → END proword. Il destinatario viene per primo perché è chi deve riconoscere la chiamata e prepararsi a ricevere.",
    structureExample: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, ROGER, OUT.",
    ],
    netiquette: "Netiquette di rete",
    netiquetteItems: [
      "Monitorare 5 secondi prima di trasmettere — non interrompere traffico in corso",
      "Chiamare una volta, ascoltare 5 secondi, chiamare di nuovo — mai catene rapide di chiamate",
      "Cedere la rete a chi ha priorità (MEDEVAC, contact, EW)",
      "Usare BREAK per pausa tecnica, WAIT per pausa breve, WAIT OUT per pausa prolungata",
      "OVER cede la parola; OUT termina lo scambio. Mai \"OVER AND OUT\" — è un errore civile",
      "Non rispondere a chiamate non destinate al proprio callsign",
      "Mantenere PTT pulito — niente \"hot mic\", niente click, niente respiri sul microfono",
    ],
    encryption: "Cifratura e chiaro",
    encryptionBody:
      "Su rete cifrata (SINCGARS, Motorola DMR/TETRA, sistemi tattici criptati) la disciplina rimane identica: la cifratura protegge il contenuto, NON la metadata di trasmissione (esistenza, durata, frequenza, posizione). DF e pattern of life funzionano su qualsiasi segnale. Su rete in chiaro (Baofeng, civilian PMR, freq civili) la regola è: solo prowords, brevity codes, MGRS, nessun nome proprio, nessuna intenzione operativa. Se serve passare informazione sensibile in chiaro, si usa canale alternativo o si difertisce a runner.",
    errors: "Errori comuni",
    errorsItems: [
      "Trasmissioni > 10 secondi che permettono DF metrico",
      "Dichiarare in chiaro nomi propri, gradi, unità, posizioni amiche",
      "Improvvisare prowords (\"COPY THAT\", \"10-4\", \"ROGER THAT\") — segnano subito il volontario non addestrato",
      "Doppio click sul PTT senza intento — riempie la rete di rumore",
      "Trasmettere mentre ancora a contatto invece di rompere prima il contatto",
      "Usare il nome di battesimo di un compagno (\"Marco, sposta a sinistra\")",
      "Confermare la ricezione con voce diversa da quella del callsign assegnato — un'altra persona ha preso la radio: chiarire subito",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Sul fronte ucraino le radio civili Baofeng sono diffusissime tra volontari e unità irregolari per costo e flessibilità — sono anche le più facili da intercettare e localizzare. La regola di campo è: assumere SEMPRE che il nemico ascolti. Le trasmissioni in russo o ucraino \"per nascondersi\" non funzionano — entrambe le parti hanno operatori che parlano entrambe le lingue. La cifratura tattica (DMR criptato, Motorola APX, sistemi UA dedicati) riduce SIGINT ma non DF: la disciplina sulla durata resta critica. EW russa (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) è attiva quasi ovunque e modifica continuamente le frequenze utili.",
    checklist: "Checklist pre-trasmissione",
    checklistItems: [
      "Frequenza corretta verificata",
      "Callsign destinatario e proprio chiari nella testa",
      "Messaggio composto mentalmente in formato standard prima del PTT",
      "Durata stimata sotto i 6 secondi (o 15 per report complessi)",
      "Nessun nome proprio, nessuna posizione amica in chiaro",
      "Posizione di trasmissione coperta o mobile, non statica esposta",
      "Pronto a spostarsi entro 60 secondi se la trasmissione è stata lunga",
    ],
  },
  en: {
    intro:
      "Radio discipline is the difference between a net that works and a net that becomes, within minutes, an artillery targeting system for the enemy. Every transmission is a measurable electromagnetic event: transmitting is exposing. The whole chapter rests on that premise.",
    threat: "What intercepts a transmission",
    threatBody:
      "A station calling \"BRAVO TWO\" on VHF is not just talking to BRAVO TWO. It is talking to anyone in band within propagation range — including intercept stations, COMINT, ESM, and direction-finding systems that turn signals into grid coordinates.",
    threatItems: [
      { title: "SIGINT / COMINT", body: "Intercept and content analysis. Captures traffic, voices, sequences. In Ukraine, even amateur operators with SDR participate." },
      { title: "Direction Finding (DF)", body: "Triangulating the transmitter's position. Three DF stations produce a metric grid within seconds on transmissions > 6 seconds." },
      { title: "Electronic Support Measures (ESM)", body: "Passive monitoring of frequencies, powers, modulations. Builds an electromagnetic profile of the unit." },
      { title: "Pattern of Life", body: "Analysis of transmission times, recurrences, callsigns to infer structure, activity and next moves without decryption." },
      { title: "Targeting", body: "The final output: an MGRS grid passed to a fires unit. Mean observed time on Ukrainian front from intercept to first round: 2–15 minutes." },
    ],
    principles: "Principles",
    principlesBody:
      "Three principles govern radio discipline. They are in tension: optimising one alone is an error. Balance them on every transmission.",
    principlesItems: [
      { title: "Brevity", body: "Transmit the minimum required. A long transmission is an electromagnetic beacon. Operational target: under 6 seconds per message, under 15 seconds for complex reports." },
      { title: "Accuracy", body: "No ambiguity, no lexical improvisation. Standard formats (SALUTE, SITREP, 9-line), standard prowords, standard terminology." },
      { title: "Security", body: "No proper names, no friendly positions in clear, no declared intentions in clear. When encryption is absent, use brevity codes and CEOI." },
    ],
    rsvp: "Pre-transmission: RSVP",
    rsvpBody:
      "Before pressing PTT, four mental checks. RSVP is the Anglo NATO-school mnemonic. Skipping it is the most frequent cause of useless or dangerous transmissions.",
    rsvpRows: [
      ["R — Rhythm", "Steady rhythm, natural voice. No shouting, no unnatural whispering."],
      ["S — Speed", "Dictation pace — the receiver must be able to write. Not faster, not slower."],
      ["V — Volume", "Normal conversational volume. The PTT does the rest. Shouting distorts and does not help the signal."],
      ["P — Pitch", "Slightly higher than natural speech to improve intelligibility on compressed voice."],
    ],
    structure: "Standard call structure",
    structureBody:
      "Every call follows a fixed structure: receiving callsign → transmitting callsign → content → end proword. The receiver comes first because they must recognise the call and prepare to receive.",
    structureExample: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, ROGER, OUT.",
    ],
    netiquette: "Net etiquette",
    netiquetteItems: [
      "Monitor 5 seconds before transmitting — do not step on ongoing traffic",
      "Call once, listen 5 seconds, call again — never rapid chains of calls",
      "Yield the net to priority traffic (MEDEVAC, contact, EW)",
      "Use BREAK for technical pause, WAIT for short hold, WAIT OUT for extended hold",
      "OVER yields the floor; OUT ends the exchange. Never \"OVER AND OUT\" — civilian error",
      "Do not respond to calls not addressed to your callsign",
      "Keep the PTT clean — no hot mic, no clicks, no breathing on the mic",
    ],
    encryption: "Encrypted vs clear",
    encryptionBody:
      "On encrypted nets (SINCGARS, Motorola DMR/TETRA, encrypted tactical systems), discipline is identical: encryption protects content, NOT transmission metadata (existence, duration, frequency, position). DF and pattern of life work on any signal. On clear nets (Baofeng, civilian PMR, civilian frequencies) the rule is: prowords only, brevity codes, MGRS, no proper names, no declared intent. If sensitive information must move in clear, use an alternate channel or hand off to a runner.",
    errors: "Common mistakes",
    errorsItems: [
      "Transmissions > 10 seconds enabling metric DF",
      "Declaring proper names, ranks, unit IDs, friendly positions in clear",
      "Improvising prowords (\"COPY THAT\", \"10-4\", \"ROGER THAT\") — instantly flag the untrained volunteer",
      "Double-clicking PTT without intent — fills the net with noise",
      "Transmitting while still in contact instead of breaking contact first",
      "Using a teammate's first name (\"Marco, shift left\")",
      "A different voice replying from an assigned callsign — clarify immediately",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On the Ukrainian front, civilian Baofeng radios are widespread among volunteers and irregular units for cost and flexibility — they are also the easiest to intercept and locate. Field rule: ALWAYS assume enemy is listening. Transmitting in Russian or Ukrainian \"to hide\" does not work — both sides have operators fluent in both. Tactical encryption (encrypted DMR, Motorola APX, dedicated UA systems) cuts SIGINT but not DF: duration discipline stays critical. Russian EW (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) is active almost everywhere and constantly shifts usable frequencies.",
    checklist: "Pre-transmission checklist",
    checklistItems: [
      "Correct frequency verified",
      "Receiver and own callsign clear in mind",
      "Message composed mentally in standard format before PTT",
      "Estimated duration under 6 seconds (or 15 for complex reports)",
      "No proper names, no friendly positions in clear",
      "Transmission position covered or mobile, not static exposed",
      "Ready to move within 60 seconds if transmission was long",
    ],
  },
  "pt-br": {
    intro:
      "A disciplina de rádio é a diferença entre uma rede que funciona e uma rede que se transforma, em minutos, em um sistema de pontaria de artilharia para o inimigo. Cada transmissão é um evento eletromagnético mensurável: transmitir é se expor. Todo o capítulo se apoia nessa premissa.",
    threat: "O que intercepta uma transmissão",
    threatBody:
      "Uma estação chamando \"BRAVO TWO\" em VHF não está só falando com BRAVO TWO. Está falando com qualquer um na banda dentro do alcance de propagação — incluindo estações de interceptação, COMINT, ESM e sistemas de goniometria que transformam sinais em coordenadas.",
    threatItems: [
      { title: "SIGINT / COMINT", body: "Interceptação e análise de conteúdo. Captura tráfego, vozes, sequências. Na Ucrânia até operadores amadores com SDR participam." },
      { title: "Direction Finding (DF)", body: "Triangulação da posição do transmissor. Três estações DF produzem grid métrica em segundos sobre transmissões > 6 segundos." },
      { title: "Electronic Support Measures (ESM)", body: "Monitoramento passivo de frequências, potências, modulações. Constrói perfil eletromagnético da unidade." },
      { title: "Pattern of Life", body: "Análise de horários de transmissão, recorrências, indicativos para inferir estrutura, atividade e próximos movimentos sem decifrar." },
      { title: "Targeting", body: "Saída final: grid MGRS para unidade de tiro. Tempo médio observado no front ucraniano da interceptação ao primeiro tiro: 2–15 minutos." },
    ],
    principles: "Princípios",
    principlesBody:
      "Três princípios regem a disciplina de rádio. Estão em tensão: otimizar só um é erro. Balancear em cada transmissão.",
    principlesItems: [
      { title: "Brevidade", body: "Transmitir o mínimo necessário. Transmissão longa é farol eletromagnético. Meta operacional: menos de 6 segundos por mensagem, menos de 15 segundos para reports complexos." },
      { title: "Acurácia", body: "Sem ambiguidade, sem improvisação lexical. Formatos padrão (SALUTE, SITREP, 9-line), prowords padrão, terminologia padrão." },
      { title: "Segurança", body: "Sem nomes próprios, sem posições amigas em claro, sem intenções declaradas em claro. Sem cifragem, usar brevity codes e CEOI." },
    ],
    rsvp: "Pré-transmissão: RSVP",
    rsvpBody:
      "Antes de apertar o PTT, quatro checagens mentais. RSVP é o mnemônico anglo das escolas OTAN. Pular é a causa mais frequente de transmissões inúteis ou perigosas.",
    rsvpRows: [
      ["R — Rhythm", "Ritmo constante, voz natural. Sem gritos, sem sussurro forçado."],
      ["S — Speed", "Velocidade de ditado — quem ouve precisa anotar. Nem mais rápido, nem mais lento."],
      ["V — Volume", "Volume normal de conversa. O PTT faz o resto. Gritar distorce e não ajuda o sinal."],
      ["P — Pitch", "Tom levemente acima do natural para melhorar inteligibilidade sobre voz comprimida."],
    ],
    structure: "Estrutura padrão de chamada",
    structureBody:
      "Toda chamada segue estrutura fixa: indicativo destinatário → indicativo emissor → conteúdo → proword de fechamento. O destinatário vem primeiro porque precisa reconhecer e se preparar.",
    structureExample: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, ROGER, OUT.",
    ],
    netiquette: "Netiqueta de rede",
    netiquetteItems: [
      "Monitorar 5 segundos antes de transmitir — não atropelar tráfego",
      "Chamar uma vez, ouvir 5 segundos, chamar de novo — nunca cadeias rápidas",
      "Ceder a rede a tráfego prioritário (MEDEVAC, contact, EW)",
      "Usar BREAK para pausa técnica, WAIT para pausa curta, WAIT OUT para pausa longa",
      "OVER cede a palavra; OUT encerra. Nunca \"OVER AND OUT\" — erro civil",
      "Não responder a chamadas que não sejam para seu indicativo",
      "Manter PTT limpo — sem hot mic, sem cliques, sem respiração no microfone",
    ],
    encryption: "Cifrado vs em claro",
    encryptionBody:
      "Em rede cifrada (SINCGARS, Motorola DMR/TETRA, sistemas táticos criptografados), a disciplina é idêntica: a cifragem protege o conteúdo, NÃO os metadados (existência, duração, frequência, posição). DF e pattern of life funcionam em qualquer sinal. Em rede em claro (Baofeng, PMR civil, freq civis): só prowords, brevity codes, MGRS, sem nomes próprios, sem intenção declarada. Se for preciso passar informação sensível em claro, usar canal alternativo ou runner.",
    errors: "Erros comuns",
    errorsItems: [
      "Transmissões > 10 segundos que permitem DF métrico",
      "Declarar em claro nomes, postos, IDs de unidade, posições amigas",
      "Improvisar prowords (\"COPY THAT\", \"10-4\", \"ROGER THAT\") — marca o voluntário não treinado",
      "Duplo clique no PTT sem intenção — enche a rede de ruído",
      "Transmitir ainda em contato em vez de quebrar o contato primeiro",
      "Usar primeiro nome de companheiro (\"Marco, mude para esquerda\")",
      "Voz diferente respondendo de indicativo atribuído — esclarecer imediatamente",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "No front ucraniano, rádios civis Baofeng são onipresentes entre voluntários e unidades irregulares por custo e flexibilidade — são também os mais fáceis de interceptar e localizar. Regra de campo: SEMPRE assumir que o inimigo escuta. Transmitir em russo ou ucraniano \"para esconder\" não funciona — os dois lados têm operadores nas duas línguas. A cifragem tática (DMR criptografado, Motorola APX, sistemas UA dedicados) corta SIGINT mas não DF: a disciplina de duração continua crítica. EW russa (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) está ativa em quase toda parte e desloca constantemente as frequências úteis.",
    checklist: "Checklist pré-transmissão",
    checklistItems: [
      "Frequência correta verificada",
      "Indicativo destinatário e próprio claros na cabeça",
      "Mensagem composta mentalmente em formato padrão antes do PTT",
      "Duração estimada abaixo de 6 segundos (ou 15 para reports complexos)",
      "Sem nomes próprios, sem posições amigas em claro",
      "Posição de transmissão coberta ou móvel, não estática exposta",
      "Pronto para deslocar em 60 segundos se a transmissão foi longa",
    ],
  },
  fr: {
    intro:
      "La discipline radio est la différence entre un réseau qui fonctionne et un réseau qui devient, en quelques minutes, un système de pointage d'artillerie pour l'ennemi. Chaque émission est un événement électromagnétique mesurable : émettre, c'est s'exposer. Tout le chapitre repose sur cette prémisse.",
    threat: "Ce qui intercepte une transmission",
    threatBody:
      "Une station appelant « BRAVO TWO » sur VHF ne parle pas qu'à BRAVO TWO. Elle parle à quiconque est en bande dans la zone de propagation — y compris stations d'interception, COMINT, ESM, et systèmes de goniométrie qui transforment les signaux en coordonnées.",
    threatItems: [
      { title: "SIGINT / COMINT", body: "Interception et analyse du contenu. Capture trafic, voix, séquences. En Ukraine, même des opérateurs amateurs en SDR participent." },
      { title: "Direction Finding (DF)", body: "Triangulation de la position de l'émetteur. Trois stations DF produisent une grille métrique en secondes sur des émissions > 6 secondes." },
      { title: "Electronic Support Measures (ESM)", body: "Surveillance passive des fréquences, puissances, modulations. Construit le profil électromagnétique de l'unité." },
      { title: "Pattern of Life", body: "Analyse des horaires d'émission, récurrences, indicatifs pour déduire structure, activité et prochains mouvements sans déchiffrer." },
      { title: "Targeting", body: "Sortie finale : une grille MGRS vers une unité de feu. Temps moyen observé sur le front ukrainien de l'interception au premier obus : 2–15 minutes." },
    ],
    principles: "Principes",
    principlesBody:
      "Trois principes régissent la discipline radio. Ils sont en tension : optimiser un seul est une erreur. Les équilibrer à chaque émission.",
    principlesItems: [
      { title: "Brièveté", body: "Émettre le minimum nécessaire. Une émission longue est un phare électromagnétique. Cible opérationnelle : moins de 6 secondes par message, moins de 15 secondes pour des reports complexes." },
      { title: "Exactitude", body: "Pas d'ambiguïté, pas d'improvisation lexicale. Formats standard (SALUTE, SITREP, 9-line), prowords standard, terminologie standard." },
      { title: "Sécurité", body: "Pas de noms propres, pas de positions amies en clair, pas d'intentions déclarées en clair. Sans chiffrement, brevity codes et CEOI." },
    ],
    rsvp: "Préémission : RSVP",
    rsvpBody:
      "Avant d'appuyer sur le PTT, quatre vérifications mentales. RSVP est le mnémonique anglo des écoles OTAN. L'omettre est la cause la plus fréquente d'émissions inutiles ou dangereuses.",
    rsvpRows: [
      ["R — Rhythm", "Rythme constant, voix naturelle. Pas de cris, pas de chuchotement forcé."],
      ["S — Speed", "Vitesse de dictée — le receveur doit pouvoir noter. Ni plus vite, ni plus lent."],
      ["V — Volume", "Volume normal de conversation. Le PTT fait le reste. Crier distord et n'aide pas le signal."],
      ["P — Pitch", "Tonalité légèrement plus haute que la parole naturelle pour améliorer l'intelligibilité sur voix compressée."],
    ],
    structure: "Structure d'appel standard",
    structureBody:
      "Tout appel suit une structure figée : indicatif destinataire → indicatif émetteur → contenu → proword final. Le destinataire en premier parce qu'il doit reconnaître l'appel et se préparer à recevoir.",
    structureExample: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, ROGER, OUT.",
    ],
    netiquette: "Étiquette de réseau",
    netiquetteItems: [
      "Surveiller 5 secondes avant d'émettre — ne pas couper un trafic en cours",
      "Appeler une fois, écouter 5 secondes, rappeler — jamais de chaînes rapides",
      "Céder le réseau au trafic prioritaire (MEDEVAC, contact, EW)",
      "Utiliser BREAK pour pause technique, WAIT pour pause courte, WAIT OUT pour pause prolongée",
      "OVER cède la parole ; OUT clôt l'échange. Jamais « OVER AND OUT » — erreur civile",
      "Ne pas répondre à un appel non destiné à votre indicatif",
      "PTT propre — pas de hot mic, pas de clics, pas de souffle sur le micro",
    ],
    encryption: "Chiffré vs en clair",
    encryptionBody:
      "Sur réseau chiffré (SINCGARS, Motorola DMR/TETRA, systèmes tactiques chiffrés), la discipline est identique : le chiffrement protège le contenu, PAS les métadonnées (existence, durée, fréquence, position). DF et pattern of life fonctionnent sur n'importe quel signal. Sur réseau en clair (Baofeng, PMR civil, fréquences civiles) : prowords uniquement, brevity codes, MGRS, pas de noms propres, pas d'intention déclarée. Si une information sensible doit passer en clair, utiliser un canal alternatif ou un runner.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Émissions > 10 secondes permettant un DF métrique",
      "Déclarer en clair noms, grades, identifiants d'unité, positions amies",
      "Improviser des prowords (« COPY THAT », « 10-4 », « ROGER THAT ») — marque immédiatement le volontaire non formé",
      "Double clic sur le PTT sans intention — pollue le réseau",
      "Émettre encore en contact au lieu de rompre le contact d'abord",
      "Utiliser le prénom d'un camarade (« Marco, décale à gauche »)",
      "Voix différente répondant à un indicatif assigné — clarifier immédiatement",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur le front ukrainien, les radios civiles Baofeng sont omniprésentes chez les volontaires et unités irrégulières pour leur coût et leur flexibilité — elles sont aussi les plus faciles à intercepter et localiser. Règle terrain : TOUJOURS supposer que l'ennemi écoute. Émettre en russe ou ukrainien « pour se cacher » ne fonctionne pas — les deux camps ont des opérateurs dans les deux langues. Le chiffrement tactique (DMR chiffré, Motorola APX, systèmes UA dédiés) coupe le SIGINT mais pas le DF : la discipline de durée reste critique. La GE russe (Shipovnik-Aero, Murmansk-BN, Borisoglebsk-2) est active presque partout et déplace constamment les fréquences utilisables.",
    checklist: "Checklist préémission",
    checklistItems: [
      "Fréquence correcte vérifiée",
      "Indicatifs destinataire et propre clairs en tête",
      "Message composé mentalement en format standard avant le PTT",
      "Durée estimée sous 6 secondes (ou 15 pour des reports complexes)",
      "Pas de noms propres, pas de positions amies en clair",
      "Position d'émission couverte ou mobile, pas statique exposée",
      "Prêt à se déplacer dans les 60 secondes si l'émission a été longue",
    ],
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.threat}</h2>
        <p>{s.threatBody}</p>
        {s.threatItems.map((t) => (
          <div key={t.title} className="callout">
            <div className="callout-title">{t.title}</div>
            <p>{t.body}</p>
          </div>
        ))}

        <h2>{s.principles}</h2>
        <p>{s.principlesBody}</p>
        <ul>
          {s.principlesItems.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong> — {p.body}
            </li>
          ))}
        </ul>

        <h2>{s.rsvp}</h2>
        <p>{s.rsvpBody}</p>
        <table>
          <thead>
            <tr>
              <th>—</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {s.rsvpRows.map(([letter, body]) => (
              <tr key={letter}>
                <td className="mono">{letter}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.structure}</h2>
        <p>{s.structureBody}</p>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.structureExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.netiquette}</h2>
        <ul>
          {s.netiquetteItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.encryption}</h2>
        <p>{s.encryptionBody}</p>

        <h2>{s.errors}</h2>
        <ul>
          {s.errorsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>

        <h2>{s.checklist}</h2>
        <ul>
          {s.checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  };
}
