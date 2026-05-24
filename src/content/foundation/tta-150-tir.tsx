import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const PDF_PATH = "/docs/tta-150-tir.pdf";
const PDF_SIZE_MB = "2.5";
const PDF_PAGES = 168;
const PDF_YEAR = 2012;

interface SectionRow {
  readonly num: string;
  readonly title: string;
  readonly body: string;
}

interface Strings {
  intro: string;
  whatIs: string;
  whatIsBody: string;
  scope: string;
  scopeBody: string;
  toc: string;
  tocBody: string;
  sections: ReadonlyArray<SectionRow>;
  related: string;
  relatedItems: ReadonlyArray<string>;
  language: string;
  languageBody: string;
  howToUse: string;
  howToUseItems: ReadonlyArray<string>;
  download: string;
  downloadLabel: string;
  downloadMeta: string;
  source: string;
  sourceBody: string;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "Il TTA 150 (Toutes Armes 150) è il manuale di formazione generale dell'Armée de Terre francese. Il suo Titre VII — Tir et Instruction du Tir, edizione 2012, è uno dei documenti di tiro più completi pubblicati in lingua francese: 168 pagine, dieci sezioni, copertura sistematica dalla balistica elementare alle procedure d'arma. Questo capitolo introduce il documento ed espone la sua struttura. La versione integrale in francese è disponibile per il download in fondo alla pagina.",
    whatIs: "Cos'è il TTA 150",
    whatIsBody:
      "Il TTA 150 è uno dei volumi della collana \"Toutes Armes\" (tutte le armi) usata dall'Armée de Terre per la formazione iniziale di base. È pensato come riferimento unico per il personale che si prepara ai brevetti militari e per le unità che mettono in piedi distaccamenti PROTERRE (forze terrestri proiettate). Il Titre VII è la sezione dedicata interamente al tiro: presenta l'armamento leggero di piccolo calibro impiegato nell'istruzione e detta i fondamenti dottrinali necessari per la sua messa in servizio.",
    scope: "Scopo del Titre VII",
    scopeBody:
      "Riunire in un solo documento le conoscenze relative all'impiego dell'armamento individuale leggero, in modo che il candidato ai brevetti militari abbia un riferimento unico. Sezioni I-III coprono nozioni generali (definizioni, sicurezza, traiettoria, conduzione dell'istruzione). Sezioni IV-X coprono ciascuna arma in dettaglio.",
    toc: "Struttura delle dieci sezioni",
    tocBody:
      "Per ciascuna sezione, una sintesi di una riga. Il documento integrale espone ogni sezione con: descrizione tecnica, nomenclatura, funzionamento, sicurezza specifica, esercizi di istruzione e schemi.",
    sections: [
      { num: "I", title: "Nozioni generali sul tiro", body: "Definizioni fondamentali: sicurezza, traiettoria, dispersione, esami delle posizioni di tiro." },
      { num: "II", title: "Nozioni per il FAMAS", body: "Particolarità del FAMAS come arma scelta per l'istruzione di base del tiro." },
      { num: "III", title: "Conduzione e organizzazione dell'istruzione", body: "Pedagogia del tiro, riferimenti incrociati a TTA 203 e INF 300, organizzazione delle sessioni." },
      { num: "IV", title: "Pistola Automatica (PA)", body: "Pistola automatica in dotazione: nomenclatura, funzionamento, manipolazione sicura, principi di puntamento e tiro." },
      { num: "V", title: "FAMAS 5.56 mm F1", body: "Fucile d'assalto standard francese (in transizione progressiva verso HK416). Studio completo." },
      { num: "VI", title: "Fucile mitragliatore 7.62 MDL F1", body: "Fucile mitragliatore di squadra in calibro 7.62×51 NATO. Funzionamento, manipolazione, principi di tiro." },
      { num: "VII", title: "LRAC 89 mm", body: "Lance-Roquette Anti-Char di 89 mm: arma anti-carro di reparto, nomenclatura e principi di tiro." },
      { num: "VIII", title: "Lancio granate a mano", body: "Tecnica e sicurezza del lancio di granate a frammentazione e da addestramento." },
      { num: "IX", title: "Tiro granate al FAMAS", body: "Granate da fucile (VBR, VPS) lanciate dal FAMAS: procedure di carico e tiro." },
      { num: "X", title: "Munizione AT4CS", body: "Sistema anti-carro monocolpo AT4CS: caratteristiche, sicurezza, principi di impiego." },
    ],
    related: "Riferimenti citati nel TTA 150",
    relatedItems: [
      "TTA 203 — Manuale d'istruzione del tiro alle armi leggere per FGI dell'Armée de Terre",
      "INF 300 — Manuale d'istruzione del tiro per la fanteria (sviluppo della formazione individuale complementare)",
      "PIA 207 — Istruzione interforze sulle misure di sicurezza per tiri tecnici e tattici",
      "TTA 207 — Schede di sicurezza per armi, munizioni e sistemi d'arma",
      "ISTC — Instruction sur le Tir de Combat (manuale operativo del tiro di combattimento)",
    ],
    language: "Lingua del documento e accessibilità multilingua",
    languageBody:
      "Il PDF originale è in francese. È stato volutamente conservato nella sua lingua originale perché qualsiasi traduzione perderebbe l'integrità tecnica della fonte ufficiale dell'Armée de Terre. La presente pagina, in versione italiana / inglese / portoghese brasiliano / francese, fornisce il contesto necessario per orientarsi nel documento anche senza padronanza completa del francese. I termini tecnici francesi più importanti hanno equivalenti standardizzati (NATO STANAG, ITU) reperibili nei glossari del Livello VII di questo manuale.",
    howToUse: "Come usare il documento",
    howToUseItems: [
      "Leggere PRIMA il capitolo Sicurezza armi di questo manuale (le 4 regole IST-C derivano direttamente dal Titre VII §I-1)",
      "Studiare la Sezione I del PDF per le definizioni di base (traiettoria, dispersione, angoli di tiro)",
      "Passare alla sezione dell'arma di interesse (IV-X) solo dopo Sezione I e II",
      "Le procedure specifiche del FAMAS e LRAC 89 sono storiche — molte unità sono passate a HK416 e altri sistemi; usare il documento come riferimento dottrinale, NON come manuale operativo aggiornato",
      "Il documento è del 2012 — alcune sezioni (in particolare armi e munizioni) possono essere superate. La struttura pedagogica e le sezioni sicurezza/traiettoria restano valide",
      "Per impiego operativo attuale: integrare sempre con ISTC e con i manuali specifici dell'arma in dotazione",
    ],
    download: "Download del documento integrale",
    downloadLabel: "Scarica il PDF",
    downloadMeta: `Edizione ${PDF_YEAR} · ${PDF_PAGES} pagine · ${PDF_SIZE_MB} MB · Francese`,
    source: "Fonte e licenza",
    sourceBody:
      "Documento pubblicato originariamente dall'Armée de Terre francese (Direction des Ressources Humaines, Sous-Direction Formation Écoles) ed indicizzato pubblicamente da guerredefrance.fr. Riprodotto qui senza modifiche per uso educativo, con attribuzione alla fonte originale. Il manuale TTA 150 è un riferimento dottrinale aperto, citato in ogni formazione di base dell'esercito francese.",
    lessons: "Lessons learned",
    lessonsBody:
      "Le quattro regole di sicurezza nella formulazione esatta del Titre VII sono le stesse che ritroviamo nel resto del manuale e in tutte le scuole NATO occidentali. Il documento dimostra perché: la formulazione francese (D.I.D. — Détecter, Identifier, Décider) è una delle più chiare in circolazione, e l'enfasi sulla regola che le abitudini non devono mai rilassare le procedure è coerente con quanto osservato sul fronte ucraino dove la maggior parte degli incidenti da arma amica avviene fuori contatto, in fase di pulizia o trasporto. Studiare le sezioni I-III del Titre VII è un eccellente punto di partenza prima di qualsiasi addestramento pratico al tiro.",
  },
  en: {
    intro:
      "The TTA 150 (Toutes Armes 150) is the French Army's general training manual. Its Title VII — Tir et Instruction du Tir, 2012 edition, is one of the most complete shooting documents published in French: 168 pages, ten sections, systematic coverage from elementary ballistics to weapon-specific procedures. This chapter introduces the document and outlines its structure. The full document in French is available for download at the bottom of this page.",
    whatIs: "What the TTA 150 is",
    whatIsBody:
      "The TTA 150 is one of the volumes of the \"Toutes Armes\" (all-arms) series used by the French Army for initial baseline training. It is designed as a single reference for personnel preparing for military qualifications and for units fielding PROTERRE detachments (deployable ground forces). Title VII is the section dedicated entirely to shooting: it presents the light small-calibre armament used in instruction and lays down the doctrinal fundamentals needed to bring it into service.",
    scope: "Scope of Title VII",
    scopeBody:
      "To bring together in a single document the knowledge required to employ individual small arms, so that a candidate for military qualifications has a single reference. Sections I-III cover general notions (definitions, safety, trajectory, instruction conduct). Sections IV-X cover each weapon in detail.",
    toc: "Structure of the ten sections",
    tocBody:
      "For each section, a one-line summary. The full document presents each section with: technical description, nomenclature, function, weapon-specific safety, instruction drills and diagrams.",
    sections: [
      { num: "I", title: "General notions on shooting", body: "Fundamental definitions: safety, trajectory, dispersion, examination of firing positions." },
      { num: "II", title: "FAMAS-specific notions", body: "Characteristics of the FAMAS as the weapon chosen for basic shooting instruction." },
      { num: "III", title: "Instruction conduct and organisation", body: "Shooting pedagogy, cross-references to TTA 203 and INF 300, organisation of sessions." },
      { num: "IV", title: "Automatic pistol (PA)", body: "Issued automatic pistol: nomenclature, function, safe handling, aiming and firing principles." },
      { num: "V", title: "FAMAS 5.56 mm F1", body: "French standard assault rifle (progressively replaced by HK416). Full study." },
      { num: "VI", title: "Squad MG 7.62 MDL F1", body: "Squad machine gun in 7.62×51 NATO. Function, handling, firing principles." },
      { num: "VII", title: "LRAC 89 mm", body: "89 mm Anti-Tank Rocket Launcher: unit-level anti-armour, nomenclature and firing principles." },
      { num: "VIII", title: "Hand grenades", body: "Technique and safety for fragmentation and training grenade throwing." },
      { num: "IX", title: "FAMAS rifle grenades", body: "Rifle grenades (VBR, VPS) launched from the FAMAS: loading and firing procedures." },
      { num: "X", title: "AT4CS munition", body: "AT4CS one-shot anti-armour system: characteristics, safety, employment principles." },
    ],
    related: "Documents referenced inside TTA 150",
    relatedItems: [
      "TTA 203 — Small-arms shooting instruction manual for Army instructor cadres",
      "INF 300 — Infantry shooting instruction manual (complementary individual training)",
      "PIA 207 — Joint instruction on safety measures for technical and tactical firing",
      "TTA 207 — Safety data sheets for weapons, munitions and weapon systems",
      "ISTC — Instruction sur le Tir de Combat (combat-shooting operational manual)",
    ],
    language: "Document language and multilingual access",
    languageBody:
      "The original PDF is in French. It has deliberately been kept in its original language because any translation would compromise the technical integrity of the French Army's official source. This page, in Italian / English / Brazilian Portuguese / French, provides the context needed to navigate the document even without full command of French. The most important French technical terms have standardised NATO STANAG / ITU equivalents available in Level VII glossaries of this manual.",
    howToUse: "How to use the document",
    howToUseItems: [
      "Read FIRST the Firearm safety chapter of this manual (the 4 IST-C rules derive directly from Title VII §I-1)",
      "Study Section I of the PDF for base definitions (trajectory, dispersion, firing angles)",
      "Move to the weapon-specific section (IV-X) only after Sections I and II",
      "FAMAS and LRAC 89 specific procedures are historical — many units have moved to HK416 and other systems; use the document as doctrinal reference, NOT as an up-to-date operational manual",
      "The document is from 2012 — some sections (especially weapons and munitions) may be superseded. The pedagogical structure and the safety/trajectory sections remain valid",
      "For current operational employment: always integrate with ISTC and with weapon-specific manuals for the issued weapon",
    ],
    download: "Full document download",
    downloadLabel: "Download the PDF",
    downloadMeta: `${PDF_YEAR} edition · ${PDF_PAGES} pages · ${PDF_SIZE_MB} MB · French`,
    source: "Source and licence",
    sourceBody:
      "Document originally published by the French Army (Direction des Ressources Humaines, Sous-Direction Formation Écoles) and publicly indexed by guerredefrance.fr. Reproduced here without modification for educational use, with attribution to the original source. The TTA 150 manual is an open doctrinal reference cited in every French Army baseline training programme.",
    lessons: "Lessons learned",
    lessonsBody:
      "The four safety rules in the exact wording of Title VII are the same we find throughout this manual and in every Western NATO school. The document shows why: the French formulation (D.I.D. — Détecter, Identifier, Décider) is among the clearest in circulation, and the emphasis on the rule that habit must never relax procedures is consistent with what is observed on the Ukrainian front, where most friendly-fire incidents happen out of contact, during cleaning or transport. Studying sections I-III of Title VII is an excellent starting point before any practical shooting training.",
  },
  "pt-br": {
    intro:
      "O TTA 150 (Toutes Armes 150) é o manual de formação geral do Exército francês. Seu Título VII — Tir et Instruction du Tir, edição 2012, é um dos documentos de tiro mais completos publicados em francês: 168 páginas, dez seções, cobertura sistemática da balística elementar a procedimentos específicos por arma. Este capítulo apresenta o documento e descreve sua estrutura. A versão integral em francês está disponível para download no rodapé da página.",
    whatIs: "O que é o TTA 150",
    whatIsBody:
      "O TTA 150 é um dos volumes da coleção \"Toutes Armes\" (todas as armas) usada pelo Exército francês para a formação inicial básica. É concebido como referência única para o pessoal que se prepara para os brevês militares e para unidades que formam destacamentos PROTERRE (forças terrestres projetáveis). O Título VII é a seção integralmente dedicada ao tiro: apresenta o armamento leve de pequeno calibre usado na instrução e fixa os fundamentos doutrinários necessários ao seu emprego.",
    scope: "Escopo do Título VII",
    scopeBody:
      "Reunir em um único documento os conhecimentos necessários ao emprego do armamento individual leve, para que o candidato aos brevês militares tenha uma referência única. Seções I-III cobrem noções gerais (definições, segurança, trajetória, condução da instrução). Seções IV-X cobrem cada arma em detalhe.",
    toc: "Estrutura das dez seções",
    tocBody:
      "Para cada seção, uma síntese de uma linha. O documento integral apresenta cada seção com: descrição técnica, nomenclatura, funcionamento, segurança específica, exercícios de instrução e diagramas.",
    sections: [
      { num: "I", title: "Noções gerais sobre tiro", body: "Definições fundamentais: segurança, trajetória, dispersão, exame das posições de tiro." },
      { num: "II", title: "Noções específicas do FAMAS", body: "Particularidades do FAMAS como arma escolhida para a instrução básica de tiro." },
      { num: "III", title: "Condução e organização da instrução", body: "Pedagogia do tiro, referências cruzadas a TTA 203 e INF 300, organização das sessões." },
      { num: "IV", title: "Pistola automática (PA)", body: "Pistola automática em dotação: nomenclatura, funcionamento, manuseio seguro, princípios de pontaria e tiro." },
      { num: "V", title: "FAMAS 5.56 mm F1", body: "Fuzil de assalto padrão francês (em transição progressiva para HK416). Estudo completo." },
      { num: "VI", title: "Metralhadora de esquadra 7.62 MDL F1", body: "Metralhadora de esquadra em 7.62×51 OTAN. Funcionamento, manuseio, princípios de tiro." },
      { num: "VII", title: "LRAC 89 mm", body: "Lança-foguete anticarro de 89 mm: arma anticarro de nível unidade, nomenclatura e princípios de tiro." },
      { num: "VIII", title: "Granadas de mão", body: "Técnica e segurança no lançamento de granadas de fragmentação e de treinamento." },
      { num: "IX", title: "Tiro de granadas no FAMAS", body: "Granadas de fuzil (VBR, VPS) lançadas pelo FAMAS: procedimentos de carga e tiro." },
      { num: "X", title: "Munição AT4CS", body: "Sistema anticarro monotiro AT4CS: características, segurança, princípios de emprego." },
    ],
    related: "Documentos referenciados no TTA 150",
    relatedItems: [
      "TTA 203 — Manual de instrução de tiro com armas leves para quadros instrutores do Exército",
      "INF 300 — Manual de instrução de tiro para a infantaria (formação individual complementar)",
      "PIA 207 — Instrução interforças sobre medidas de segurança em tiros técnicos e táticos",
      "TTA 207 — Fichas de segurança de armas, munições e sistemas de armas",
      "ISTC — Instruction sur le Tir de Combat (manual operacional de tiro de combate)",
    ],
    language: "Idioma do documento e acesso multilíngue",
    languageBody:
      "O PDF original está em francês. Foi deliberadamente mantido na língua original porque qualquer tradução comprometeria a integridade técnica da fonte oficial do Exército francês. Esta página, em italiano / inglês / português brasileiro / francês, fornece o contexto necessário para navegar o documento mesmo sem domínio pleno do francês. Os termos técnicos franceses mais importantes têm equivalentes padronizados (OTAN STANAG, ITU) disponíveis nos glossários do Nível VII deste manual.",
    howToUse: "Como usar o documento",
    howToUseItems: [
      "Ler ANTES o capítulo Segurança de armas deste manual (as 4 regras IST-C derivam diretamente do Título VII §I-1)",
      "Estudar a Seção I do PDF para definições básicas (trajetória, dispersão, ângulos de tiro)",
      "Passar à seção específica da arma (IV-X) somente depois das Seções I e II",
      "Procedimentos específicos do FAMAS e LRAC 89 são históricos — muitas unidades migraram para HK416 e outros sistemas; usar o documento como referência doutrinária, NÃO como manual operacional atualizado",
      "O documento é de 2012 — algumas seções (especialmente armas e munições) podem estar superadas. A estrutura pedagógica e as seções segurança/trajetória permanecem válidas",
      "Para emprego operacional atual: integrar sempre com ISTC e com manuais específicos da arma em uso",
    ],
    download: "Download do documento integral",
    downloadLabel: "Baixar o PDF",
    downloadMeta: `Edição ${PDF_YEAR} · ${PDF_PAGES} páginas · ${PDF_SIZE_MB} MB · Francês`,
    source: "Fonte e licença",
    sourceBody:
      "Documento originalmente publicado pelo Exército francês (Direction des Ressources Humaines, Sous-Direction Formation Écoles) e indexado publicamente por guerredefrance.fr. Reproduzido aqui sem modificações para uso educacional, com atribuição à fonte original. O manual TTA 150 é uma referência doutrinária aberta, citada em todo programa de formação básica do exército francês.",
    lessons: "Lições aprendidas",
    lessonsBody:
      "As quatro regras de segurança na formulação exata do Título VII são as mesmas que encontramos no resto deste manual e em todas as escolas OTAN ocidentais. O documento mostra por quê: a formulação francesa (D.I.D. — Détecter, Identifier, Décider) é uma das mais claras em circulação, e a ênfase na regra de que o hábito nunca deve relaxar os procedimentos é consistente com o observado no front ucraniano, onde a maioria dos incidentes com arma amiga ocorre fora de contato, durante limpeza ou transporte. Estudar as seções I-III do Título VII é um excelente ponto de partida antes de qualquer treinamento prático de tiro.",
  },
  fr: {
    intro:
      "Le TTA 150 (Toutes Armes 150) est le manuel de formation générale de l'Armée de Terre française. Son Titre VII — Tir et Instruction du Tir, édition 2012, est l'un des documents de tir les plus complets publiés en français : 168 pages, dix sections, couverture systématique de la balistique élémentaire aux procédures spécifiques par arme. Ce chapitre présente le document et expose sa structure. La version intégrale en français est disponible au téléchargement en bas de page.",
    whatIs: "Ce qu'est le TTA 150",
    whatIsBody:
      "Le TTA 150 est l'un des volumes de la collection « Toutes Armes » utilisée par l'Armée de Terre pour la formation initiale de base. Il est conçu comme référence unique pour le personnel se préparant aux brevets militaires et pour les unités susceptibles de mettre sur pied des détachements PROTERRE (forces terrestres projetables). Le Titre VII est la section intégralement dédiée au tir : il présente l'armement léger de petit calibre mis en œuvre dans l'instruction et fixe les fondamentaux doctrinaux nécessaires à sa mise en service.",
    scope: "Portée du Titre VII",
    scopeBody:
      "Réunir dans un seul document les connaissances relatives à la mise en œuvre de l'armement individuel léger, afin que le candidat aux brevets militaires dispose d'une référence unique. Les sections I-III traitent des notions générales (définitions, sécurité, trajectoire, conduite de l'instruction). Les sections IV-X traitent chaque arme en détail.",
    toc: "Structure des dix sections",
    tocBody:
      "Pour chaque section, une synthèse d'une ligne. Le document intégral expose chaque section avec : description technique, nomenclature, fonctionnement, sécurité spécifique, exercices d'instruction et schémas.",
    sections: [
      { num: "I", title: "Notions générales sur le tir", body: "Définitions fondamentales : sécurité, trajectoire, dispersion, examen des positions de tir." },
      { num: "II", title: "Notions propres au FAMAS", body: "Particularités du FAMAS comme arme retenue pour l'instruction de base du tir." },
      { num: "III", title: "Conduite et organisation de l'instruction", body: "Pédagogie du tir, renvois au TTA 203 et à l'INF 300, organisation des séances." },
      { num: "IV", title: "Pistolet automatique (PA)", body: "Pistolet automatique en dotation : nomenclature, fonctionnement, manipulation sûre, principes de visée et de tir." },
      { num: "V", title: "FAMAS 5.56 mm F1", body: "Fusil d'assaut standard français (en transition progressive vers HK416). Étude complète." },
      { num: "VI", title: "Fusil-mitrailleur 7.62 MDL F1", body: "Fusil-mitrailleur de groupe en 7.62×51 OTAN. Fonctionnement, manipulation, principes de tir." },
      { num: "VII", title: "LRAC 89 mm", body: "Lance-Roquette Anti-Char 89 mm : arme antichar de niveau unité, nomenclature et principes de tir." },
      { num: "VIII", title: "Lancer de grenades à main", body: "Technique et sécurité du lancer de grenades de fragmentation et d'instruction." },
      { num: "IX", title: "Tir de grenades au FAMAS", body: "Grenades à fusil (VBR, VPS) tirées au FAMAS : procédures de chargement et de tir." },
      { num: "X", title: "Munition AT4CS", body: "Système antichar mono-coup AT4CS : caractéristiques, sécurité, principes d'emploi." },
    ],
    related: "Documents cités dans le TTA 150",
    relatedItems: [
      "TTA 203 — Manuel d'instruction du tir aux armes légères à l'usage des FGI de l'Armée de Terre",
      "INF 300 — Manuel d'instruction du tir aux armes légères pour l'infanterie (formation individuelle complémentaire)",
      "PIA 207 — Instruction interarmées sur les mesures de sécurité pour les tirs techniques et tactiques",
      "TTA 207 — Fiches de sécurité des armes, munitions et systèmes d'arme",
      "ISTC — Instruction sur le Tir de Combat (manuel opérationnel du tir de combat)",
    ],
    language: "Langue du document et accessibilité multilingue",
    languageBody:
      "Le PDF original est en français. Il a délibérément été conservé dans sa langue d'origine parce qu'une traduction altérerait l'intégrité technique de la source officielle de l'Armée de Terre. La présente page, en italien / anglais / portugais brésilien / français, fournit le contexte nécessaire pour s'orienter dans le document même sans maîtrise complète du français. Les termes techniques français les plus importants ont des équivalents standardisés (OTAN STANAG, UIT) disponibles dans les glossaires du Niveau VII de ce manuel.",
    howToUse: "Comment utiliser le document",
    howToUseItems: [
      "Lire D'ABORD le chapitre Sécurité des armes de ce manuel (les 4 règles IST-C dérivent directement du Titre VII §I-1)",
      "Étudier la Section I du PDF pour les définitions de base (trajectoire, dispersion, angles de tir)",
      "Passer à la section spécifique de l'arme (IV-X) seulement après les Sections I et II",
      "Les procédures propres au FAMAS et au LRAC 89 sont historiques — de nombreuses unités sont passées au HK416 et à d'autres systèmes ; utiliser le document comme référence doctrinale, PAS comme manuel opérationnel à jour",
      "Le document date de 2012 — certaines sections (notamment armes et munitions) peuvent être obsolètes. La structure pédagogique et les sections sécurité/trajectoire restent valides",
      "Pour l'emploi opérationnel actuel : intégrer toujours avec l'ISTC et avec les manuels spécifiques de l'arme en dotation",
    ],
    download: "Téléchargement du document intégral",
    downloadLabel: "Télécharger le PDF",
    downloadMeta: `Édition ${PDF_YEAR} · ${PDF_PAGES} pages · ${PDF_SIZE_MB} Mo · Français`,
    source: "Source et licence",
    sourceBody:
      "Document publié à l'origine par l'Armée de Terre française (Direction des Ressources Humaines, Sous-Direction Formation Écoles) et indexé publiquement par guerredefrance.fr. Reproduit ici sans modification à des fins éducatives, avec attribution à la source originale. Le manuel TTA 150 est une référence doctrinale ouverte, citée dans tout programme de formation de base de l'Armée de Terre.",
    lessons: "Retours d'expérience",
    lessonsBody:
      "Les quatre règles de sécurité dans la formulation exacte du Titre VII sont celles que l'on retrouve dans tout ce manuel et dans toutes les écoles OTAN occidentales. Le document montre pourquoi : la formulation française (D.I.D. — Détecter, Identifier, Décider) est l'une des plus claires en circulation, et l'accent mis sur la règle que l'habitude ne doit jamais relâcher les procédures est cohérent avec ce qu'on observe sur le front ukrainien, où la majorité des incidents d'arme amie surviennent hors contact, lors du nettoyage ou du transport. Étudier les sections I-III du Titre VII est un excellent point de départ avant tout entraînement pratique au tir.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.whatIs}</h2>
        <p>{s.whatIsBody}</p>

        <h2>{s.scope}</h2>
        <p>{s.scopeBody}</p>

        <h2>{s.toc}</h2>
        <p>{s.tocBody}</p>
        <table>
          <thead>
            <tr>
              <th>§</th>
              <th>Section</th>
              <th>—</th>
            </tr>
          </thead>
          <tbody>
            {s.sections.map((sec) => (
              <tr key={sec.num}>
                <td className="mono font-semibold">{sec.num}</td>
                <td className="mono">{sec.title}</td>
                <td>{sec.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.related}</h2>
        <ul>
          {s.relatedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.language}</h2>
        <p>{s.languageBody}</p>

        <h2>{s.howToUse}</h2>
        <ul>
          {s.howToUseItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.download}</h2>
        <div
          className="callout"
          style={{ borderColor: "var(--accent)" }}
        >
          <div className="callout-title">PDF</div>
          <p style={{ marginBottom: "1rem" }}>{s.downloadMeta}</p>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="mono stencil"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "0.65rem 1.25rem",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            ↓ {s.downloadLabel}
          </a>
        </div>

        <h3>{s.source}</h3>
        <p
          className="mono"
          style={{ fontSize: "0.85em", color: "var(--fg-3)" }}
        >
          {s.sourceBody}
        </p>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>
      </>
    ),
  };
}
