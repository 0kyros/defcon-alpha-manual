import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";
import { Gallery, type GalleryItem } from "@/components/gallery";

interface ParentStructureItem {
  readonly name: string;
  readonly body: string;
}

interface Strings {
  intro: string;
  parent: string;
  parentBody: string;
  parentStructure: string;
  parentStructureItems: ReadonlyArray<ParentStructureItem>;
  parentMotto: string;
  parentMottoBody: string;
  parentRef: string;
  context: string;
  contextBody: string;
  identity: string;
  identityBody: string;
  ops: string;
  opsItems: ReadonlyArray<{ title: string; body: string }>;
  culture: string;
  cultureItems: ReadonlyArray<string>;
  newcomer: string;
  newcomerItems: ReadonlyArray<string>;
  gallery: string;
  galleryNote: string;
  galleryCaptions: ReadonlyArray<string>;
  psych: string;
  psychBody: string;
  notMe: string;
  notMeBody: string;
}

const GALLERY_BASE: ReadonlyArray<Omit<GalleryItem, "caption">> = [
  {
    src: "/images/defcon/team-night-nvg.jpg",
    alt: "Operator team holding Defcon Tribe flag at night, multicam, NVG mounted",
    width: 1600,
    height: 1600,
  },
  {
    src: "/images/defcon/gur-coast.jpg",
    alt: "Operator team holding HUR/GUR flag, coastal background, daylight",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/defcon/boat-team-sun.jpg",
    alt: "Four operators on RIB at sea, NVGs mounted, sunlight",
    width: 720,
    height: 900,
  },
  {
    src: "/images/defcon/rib-operator.jpg",
    alt: "Operator on RIB with NVGs and 'Veterani' helmet patch",
    width: 900,
    height: 900,
  },
] as const;

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "Defcon Alpha è un'unità di volontari internazionali integrata nell'ecosistema operativo della Direzione Generale dell'Intelligence (HUR / GUR) ucraina. Questa sezione descrive il contesto operativo e culturale, NON procedure di reclutamento, addestramento o impiego.",
    parent: "Organizzazione superiore — 2nd SOD \"KORD\"",
    parentBody:
      "Defcon Alpha non opera in isolamento: è un team del 2° Distaccamento delle Operazioni Speciali \"KORD\" (2 ЗСпД, 2nd Special Operations Detachment), reparto del Direttorato Generale dell'Intelligence (HUR) del Ministero della Difesa ucraino. Fonti OSINT pubbliche (militaryland.net, canali ufficiali HUR) attribuiscono al distaccamento un organico di circa cento effettivi, articolato in più team operativi multinazionali e ucraini.",
    parentStructure: "Struttura nota da fonti pubbliche",
    parentStructureItems: [
      { name: "HQ + Commandant Platoon", body: "Comando, supporto e plotone presidio del distaccamento." },
      { name: "Defcon Alpha", body: "Team multinazionale evoluto dal nucleo \"Defcon Tribe\". Presenza significativa di volontari brasiliani e di altri paesi NATO. Operazioni convenzionali e Mar Nero." },
      { name: "Defcon Bravo", body: "Team operativo del distaccamento, documentato in fonti pubbliche." },
      { name: "Defcon Fox", body: "Team a destinazione speciale." },
      { name: "Warfare Group", body: "Team a forte presenza internazionale: volontari da Europa, Nord America, Sud America, integrati con personale ucraino." },
      { name: "Group Delta", body: "Team a composizione interamente ucraina." },
    ],
    parentMotto: "Motto del distaccamento",
    parentMottoBody:
      "\"Amat Victoria Curam\" — la vittoria ama la preparazione. È una formulazione che corrisponde alla cultura operativa descritta in questo capitolo: nessuna scorciatoia, preparazione tecnica costante, disciplina mantenuta anche fuori contatto.",
    parentRef:
      "Riferimenti pubblici: profilo distaccamento su militaryland.net; canale Instagram ufficiale @kord.gur.ua. Tutte le informazioni qui riportate provengono da fonti aperte già indicizzate.",
    context: "Contesto",
    contextBody:
      "L'invasione russa del 2022 ha generato un flusso di volontari internazionali integrati in unità ucraine regolari e speciali. Defcon Alpha — evoluzione del nucleo \"Defcon Tribe\" — è una di queste formazioni, con presenza notevole di italiani, brasiliani, francesi e di personale con background di forze speciali NATO. La sua identità è plasmata da: integrazione multinazionale, impiego in ambiente HUR/GUR, esperienza Mar Nero, alto consumo di lezioni dal fronte 2022–2026.",
    identity: "Identità operativa",
    identityBody:
      "L'unità si colloca al limite tra fanteria leggera proiettata in avanti e reparti di ricognizione/incursione. Non è una forza speciale in senso classico americano — è una formazione di volontari professionali con dottrina ibrida NATO/SOF/post-soviet adattata. Questo significa: aspettative molto alte di iniziativa individuale, OPSEC pesante, leadership orizzontale entro la squadra, integrazione fluida con asset drone, EW e artiglieria.",
    ops: "Ambito operativo (livello dottrinale)",
    opsItems: [
      { title: "Reconnaissance", body: "Riconoscimento profondo, OP statici, designazione obiettivi, supporto target packages." },
      { title: "Drone integration", body: "Operazioni coordinate con FPV, droni da osservazione e bombardieri leggeri." },
      { title: "Maritime / Black Sea", body: "Operazioni in ambiente marittimo e costiero — formazione, attrezzatura, dottrina amphibia di base." },
      { title: "Direct action support", body: "Supporto a operazioni HUR/GUR, inserzione/estrazione di team, raid limitati." },
      { title: "Training & integration", body: "Trasferimento di conoscenza tra volontari nuovi e veterani, integrazione multinazionale, language ops." },
    ],
    culture: "Cultura operativa",
    cultureItems: [
      "Italiano e portoghese diffusi a livello informale; inglese come standard operativo",
      "Disciplina di OPSEC molto alta — niente social, niente \"hero shots\", niente posizioni",
      "Rotazioni intense, decompressione obbligatoria, AAR ad ogni operazione significativa",
      "Aspettativa di autonomia individuale: nessuno ti tiene per mano, ma la squadra ti copre",
      "Forte cultura del manutenzione equipment e disciplina di radio",
      "Tolleranza zero per atti che mettono a rischio l'unità (alcol in operazione, drug, social leaks)",
    ],
    newcomer: "Aspettative per il nuovo arrivato",
    newcomerItems: [
      "Inglese operativo funzionale (non perfetto, ma utilizzabile in radio)",
      "Forma fisica reale, non da palestra estetica — rucking, recupero, freddo, fango",
      "Conoscenza armi NATO e AK platform a livello manipolazione safe",
      "TCCC base — torniquet, packing, ventilazione",
      "Familiarità con MGRS, NATO phonetic, SALUTE, 9-line MEDEVAC",
      "Comprensione che il primo periodo non è \"combat\" ma integrazione, OPSEC, manutenzione, lingua",
    ],
    gallery: "Materiale fotografico pubblico",
    galleryNote:
      "IMMAGINI DA RILASCI PUBBLICI O DA CANALI UFFICIALI DELL'UNITÀ. FACCE OSCURATE COME DA STANDARD OPSEC ORIGINALE. EXIF/GPS RIMOSSI PRIMA DELLA PUBBLICAZIONE. NESSUNA POSIZIONE OPERATIVA È RICAVABILE DA QUESTI SCATTI.",
    galleryCaptions: [
      "Team con flag \"defcon tribe\". Operazioni notturne. Multicam, NVG montati, suppressori, ottiche notturne.",
      "Team con flag HUR (Військова Розвідка України). Setting costiero diurno — riferimento all'attività Mar Nero del distaccamento.",
      "Team su RIB. Inserzione marittima. NVG montati, armi corte coperte contro la salsedine.",
      "Operatore su RIB. Patch \"ВЕТЕРАНИ\" sul casco — comune nei reparti HUR con personale già militare prima del 2022.",
    ],
    psych: "Sopravvivenza psicologica",
    psychBody:
      "Il fronte ucraino 2024–2026 è caratterizzato da artiglieria, FPV continui, terreno saturo, sleep deprivation, perdite di compagni. La sopravvivenza psicologica non è facoltativa — è un'abilità che si costruisce. Strumenti: AAR onesti, decompressione in rotazione, parlare con chi ha già passato il proprio primo \"hit\", sonno disciplinato, niente self-medication con alcol. Chi minimizza pubblicamente l'impatto psicologico è quello che cede tre mesi dopo. Chi lo gestisce dura.",
    notMe: "Quando l'unità non è per te",
    notMeBody:
      "Se cerchi adrenalina, esposizione, contenuti per social, \"esperienza di guerra\" simbolica, o stai fuggendo da un fallimento personale a casa, Defcon Alpha — come qualsiasi unità seria — non è il posto. Le squadre lo riconoscono in poche settimane e l'integrazione fallisce. Se invece sei pronto a essere un soldato senza pubblico, in una guerra reale, in una formazione multinazionale, allora il primo passo è l'umiltà tecnica e il rispetto della struttura. Tutto il resto si costruisce.",
  },
  en: {
    intro:
      "Defcon Alpha is an international volunteer unit integrated within the operational ecosystem of Ukraine's Main Directorate of Intelligence (HUR / GUR). This section describes operational and cultural context — NOT recruitment, training, or employment procedures.",
    parent: "Parent organisation — 2nd SOD \"KORD\"",
    parentBody:
      "Defcon Alpha does not operate in isolation: it is a team within the 2nd Special Operations Detachment \"KORD\" (2 ЗСпД), an element of Ukraine's Main Intelligence Directorate (HUR) of the Ministry of Defence. Public OSINT (militaryland.net, official HUR channels) attributes to the detachment a strength of approximately one hundred personnel, structured in several multinational and Ukrainian operational teams.",
    parentStructure: "Structure as documented in public sources",
    parentStructureItems: [
      { name: "HQ + Commandant Platoon", body: "Detachment command, support and security platoon." },
      { name: "Defcon Alpha", body: "Multinational team evolved from the \"Defcon Tribe\" nucleus. Significant presence of Brazilian and other NATO-country volunteers. Conventional operations and Black Sea." },
      { name: "Defcon Bravo", body: "Detachment operational team, documented in public sources." },
      { name: "Defcon Fox", body: "Special-purpose team." },
      { name: "Warfare Group", body: "Heavily international team — volunteers from Europe, North America, South America, integrated with Ukrainian personnel." },
      { name: "Group Delta", body: "All-Ukrainian team." },
    ],
    parentMotto: "Detachment motto",
    parentMottoBody:
      "\"Amat Victoria Curam\" — victory loves preparation. The formulation matches the operational culture described in this chapter: no shortcuts, constant technical preparation, discipline maintained even out of contact.",
    parentRef:
      "Public references: detachment profile on militaryland.net; official Instagram channel @kord.gur.ua. All information cited here is sourced from openly indexed material.",
    context: "Context",
    contextBody:
      "The 2022 Russian invasion generated a flow of international volunteers into regular and special Ukrainian units. Defcon Alpha — evolved from the \"Defcon Tribe\" nucleus — is one such formation, with significant Italian, Brazilian, French and NATO-SOF-background presence. Its identity is shaped by multinational integration, HUR/GUR employment, Black Sea experience, and heavy consumption of 2022–2026 frontline lessons.",
    identity: "Operational identity",
    identityBody:
      "The unit sits between forward-deployed light infantry and recon/raiding elements. It is not a special force in the classic US sense — it is a professional volunteer formation with hybrid NATO/SOF/post-Soviet adapted doctrine. This means: very high expectations of individual initiative, heavy OPSEC, horizontal leadership inside the team, fluid integration with drone, EW and artillery assets.",
    ops: "Operational scope (doctrinal level)",
    opsItems: [
      { title: "Reconnaissance", body: "Deep recon, static OPs, target designation, target package support." },
      { title: "Drone integration", body: "Operations coordinated with FPV, ISR and light bomber drones." },
      { title: "Maritime / Black Sea", body: "Operations in maritime and coastal environment — training, kit, basic amphibious doctrine." },
      { title: "Direct action support", body: "Support to HUR/GUR operations, team insertion/extraction, limited raids." },
      { title: "Training & integration", body: "Knowledge transfer between new and veteran volunteers, multinational integration, language ops." },
    ],
    culture: "Operational culture",
    cultureItems: [
      "Italian and Portuguese widespread informally; English as operational standard",
      "Very high OPSEC discipline — no social, no hero shots, no positions",
      "Intense rotations, mandatory decompression, AAR on every significant op",
      "Expectation of individual autonomy: nobody holds your hand, but the team covers you",
      "Strong equipment-maintenance and radio-discipline culture",
      "Zero tolerance for acts that endanger the unit (alcohol on op, drug, social leaks)",
    ],
    newcomer: "Newcomer expectations",
    newcomerItems: [
      "Functional operational English (not perfect, usable on radio)",
      "Real physical condition — rucking, recovery, cold, mud — not aesthetic gym",
      "NATO and AK platform knowledge at safe-handling level",
      "Base TCCC — tourniquet, packing, ventilation",
      "Familiarity with MGRS, NATO phonetic, SALUTE, 9-line MEDEVAC",
      "Understanding that the first period is not \"combat\" but integration, OPSEC, maintenance, language",
    ],
    gallery: "Public photographic material",
    galleryNote:
      "IMAGES FROM PUBLIC RELEASES OR OFFICIAL UNIT CHANNELS. FACES OBSCURED PER ORIGINAL OPSEC STANDARD. EXIF/GPS METADATA STRIPPED BEFORE PUBLICATION. NO OPERATIONAL POSITION IS DERIVABLE FROM THESE FRAMES.",
    galleryCaptions: [
      "Team with \"defcon tribe\" flag. Night ops. Multicam, mounted NVGs, suppressors, night optics.",
      "Team with HUR flag (Військова Розвідка України). Daylight coastal setting — Black Sea activity of the detachment.",
      "Team on RIB. Maritime insertion. NVGs mounted, short weapons covered against salt spray.",
      "Operator on RIB. \"ВЕТЕРАНИ\" helmet patch — common in HUR detachments with pre-2022 military personnel.",
    ],
    psych: "Psychological survival",
    psychBody:
      "The 2024–2026 Ukrainian front features artillery, constant FPV, saturated terrain, sleep deprivation, loss of teammates. Psychological survival is not optional — it is a skill built. Tools: honest AARs, decompression in rotation, talking to those who have already had their first \"hit\", disciplined sleep, no alcohol self-medication. Those who publicly minimise psychological impact are the ones who break three months later. Those who manage it last.",
    notMe: "When the unit is not for you",
    notMeBody:
      "If you seek adrenaline, exposure, social content, symbolic \"war experience\", or you are running from a personal failure at home — Defcon Alpha, like any serious unit, is not the place. Teams spot it in weeks and integration fails. If instead you are ready to be a soldier with no audience, in a real war, in a multinational formation, the first step is technical humility and respect for the structure. Everything else gets built.",
  },
  "pt-br": {
    intro:
      "Defcon Alpha é uma unidade de voluntários internacionais integrada ao ecossistema operacional da Direção-Geral de Inteligência (HUR / GUR) ucraniana. Esta seção descreve contexto operacional e cultural — NÃO procedimentos de recrutamento, treinamento ou emprego.",
    parent: "Organização superior — 2º SOD \"KORD\"",
    parentBody:
      "Defcon Alpha não opera isolada: é um team do 2º Destacamento de Operações Especiais \"KORD\" (2 ЗСпД, 2nd Special Operations Detachment), elemento da Direção Principal de Inteligência (HUR) do Ministério da Defesa ucraniano. Fontes OSINT públicas (militaryland.net, canais oficiais da HUR) atribuem ao destacamento um efetivo de cerca de cem militares, articulado em vários teams operacionais multinacionais e ucranianos.",
    parentStructure: "Estrutura conforme fontes públicas",
    parentStructureItems: [
      { name: "HQ + Commandant Platoon", body: "Comando, apoio e pelotão de segurança do destacamento." },
      { name: "Defcon Alpha", body: "Team multinacional evoluído do núcleo \"Defcon Tribe\". Presença significativa de voluntários brasileiros e de outros países OTAN. Operações convencionais e Mar Negro." },
      { name: "Defcon Bravo", body: "Team operacional do destacamento, documentado em fontes públicas." },
      { name: "Defcon Fox", body: "Team de finalidade especial." },
      { name: "Warfare Group", body: "Team com forte presença internacional — voluntários de Europa, América do Norte, América do Sul, integrados a pessoal ucraniano." },
      { name: "Group Delta", body: "Team integralmente ucraniano." },
    ],
    parentMotto: "Lema do destacamento",
    parentMottoBody:
      "\"Amat Victoria Curam\" — a vitória ama a preparação. A formulação corresponde à cultura operacional descrita neste capítulo: sem atalhos, preparação técnica constante, disciplina mantida mesmo fora de contato.",
    parentRef:
      "Referências públicas: perfil do destacamento em militaryland.net; canal oficial no Instagram @kord.gur.ua. Toda informação aqui citada vem de material aberto já indexado.",
    context: "Contexto",
    contextBody:
      "A invasão russa de 2022 gerou fluxo de voluntários internacionais para unidades regulares e especiais ucranianas. Defcon Alpha — evolução do núcleo \"Defcon Tribe\" — é uma dessas formações, com presença significativa de italianos, brasileiros, franceses e pessoal com background NATO/SOF. Sua identidade é moldada por integração multinacional, emprego HUR/GUR, experiência no Mar Negro e consumo intenso de lições do front 2022–2026.",
    identity: "Identidade operacional",
    identityBody:
      "A unidade fica entre infantaria leve avançada e elementos de reconhecimento/incursão. Não é força especial no sentido clássico americano — é formação profissional de voluntários com doutrina híbrida NATO/SOF/pós-soviética adaptada. Isso significa: alta expectativa de iniciativa individual, OPSEC pesado, liderança horizontal dentro da equipe, integração fluida com ativos de drone, EW e artilharia.",
    ops: "Escopo operacional (nível doutrinário)",
    opsItems: [
      { title: "Reconhecimento", body: "Recon profundo, OPs estáticos, designação de alvos, suporte a target packages." },
      { title: "Integração drone", body: "Operações coordenadas com FPV, drones de ISR e bombardeiros leves." },
      { title: "Marítimo / Mar Negro", body: "Operações em ambiente marítimo e costeiro — treinamento, equipamento, doutrina anfíbia básica." },
      { title: "Suporte a direct action", body: "Apoio a operações HUR/GUR, inserção/extração de equipes, raids limitados." },
      { title: "Treinamento e integração", body: "Transferência de conhecimento entre voluntários novos e veteranos, integração multinacional, language ops." },
    ],
    culture: "Cultura operacional",
    cultureItems: [
      "Italiano e português difundidos informalmente; inglês como padrão operacional",
      "Disciplina de OPSEC altíssima — nada de social, hero shots, posições",
      "Rotações intensas, descompressão obrigatória, AAR a cada operação significativa",
      "Expectativa de autonomia individual: ninguém te leva pela mão, mas a equipe te cobre",
      "Cultura forte de manutenção de equipamento e disciplina de rádio",
      "Tolerância zero a atos que coloquem a unidade em risco (álcool em op, drogas, vazamentos)",
    ],
    newcomer: "Expectativas do recém-chegado",
    newcomerItems: [
      "Inglês operacional funcional (não perfeito, mas usável no rádio)",
      "Condição física real — ruck, recuperação, frio, lama — não academia estética",
      "Conhecimento de plataforma NATO e AK em nível de manuseio seguro",
      "TCCC básico — torniquete, packing, ventilação",
      "Familiaridade com MGRS, fonético NATO, SALUTE, 9-line MEDEVAC",
      "Entender que o primeiro período não é \"combat\" mas integração, OPSEC, manutenção, idioma",
    ],
    gallery: "Material fotográfico público",
    galleryNote:
      "IMAGENS DE LANÇAMENTOS PÚBLICOS OU DE CANAIS OFICIAIS DA UNIDADE. ROSTOS BORRADOS CONFORME PADRÃO OPSEC ORIGINAL. EXIF/GPS REMOVIDOS ANTES DA PUBLICAÇÃO. NENHUMA POSIÇÃO OPERACIONAL É DEDUTÍVEL DESTES QUADROS.",
    galleryCaptions: [
      "Team com flag \"defcon tribe\". Operações noturnas. Multicam, NVGs montados, supressores, óticas noturnas.",
      "Team com flag da HUR (Військова Розвідка України). Cenário costeiro diurno — atividade no Mar Negro do destacamento.",
      "Team em RIB. Inserção marítima. NVGs montados, armas curtas cobertas contra a maresia.",
      "Operador em RIB. Patch \"ВЕТЕРАНИ\" no capacete — comum em destacamentos da HUR com pessoal militar pré-2022.",
    ],
    psych: "Sobrevivência psicológica",
    psychBody:
      "O front ucraniano 2024–2026 tem artilharia, FPV contínuo, terreno saturado, privação de sono, perda de companheiros. Sobrevivência psicológica não é opcional — é habilidade construída. Ferramentas: AARs honestos, descompressão em rotação, conversar com quem já teve o primeiro \"hit\", sono disciplinado, sem auto-medicação com álcool. Quem minimiza publicamente o impacto psicológico é quem quebra três meses depois. Quem administra, dura.",
    notMe: "Quando a unidade não é para você",
    notMeBody:
      "Se você busca adrenalina, exposição, conteúdo para rede social, \"experiência de guerra\" simbólica ou está fugindo de fracasso pessoal em casa — Defcon Alpha, como qualquer unidade séria, não é o lugar. Equipes percebem em semanas e a integração falha. Se você está pronto para ser soldado sem plateia, em guerra real, em formação multinacional, o primeiro passo é humildade técnica e respeito à estrutura. O resto se constrói.",
  },
  fr: {
    intro:
      "Defcon Alpha est une unité de volontaires internationaux intégrée à l'écosystème opérationnel de la Direction principale du renseignement (HUR / GUR) ukrainien. Cette section décrit le contexte opérationnel et culturel — PAS les procédures de recrutement, d'entraînement ou d'emploi.",
    parent: "Organisation parente — 2ᵉ SOD « KORD »",
    parentBody:
      "Defcon Alpha n'opère pas en isolement : c'est une équipe du 2ᵉ Détachement d'Opérations Spéciales « KORD » (2 ЗСпД), élément de la Direction principale du renseignement (HUR) du ministère de la Défense ukrainien. Les sources OSINT publiques (militaryland.net, canaux officiels de la HUR) attribuent au détachement un effectif d'environ cent militaires, articulé en plusieurs équipes opérationnelles multinationales et ukrainiennes.",
    parentStructure: "Structure d'après sources publiques",
    parentStructureItems: [
      { name: "HQ + Commandant Platoon", body: "Commandement, soutien et peloton de sécurité du détachement." },
      { name: "Defcon Alpha", body: "Équipe multinationale issue du noyau « Defcon Tribe ». Présence significative de volontaires brésiliens et d'autres pays OTAN. Opérations conventionnelles et Mer Noire." },
      { name: "Defcon Bravo", body: "Équipe opérationnelle du détachement, documentée en sources publiques." },
      { name: "Defcon Fox", body: "Équipe à finalité spéciale." },
      { name: "Warfare Group", body: "Équipe fortement internationale — volontaires d'Europe, d'Amérique du Nord et du Sud, intégrés à du personnel ukrainien." },
      { name: "Group Delta", body: "Équipe entièrement ukrainienne." },
    ],
    parentMotto: "Devise du détachement",
    parentMottoBody:
      "« Amat Victoria Curam » — la victoire aime la préparation. La formulation correspond à la culture opérationnelle décrite dans ce chapitre : pas de raccourcis, préparation technique constante, discipline maintenue même hors contact.",
    parentRef:
      "Références publiques : fiche du détachement sur militaryland.net ; canal officiel Instagram @kord.gur.ua. Toute information citée ici provient de matériel ouvert déjà indexé.",
    context: "Contexte",
    contextBody:
      "L'invasion russe de 2022 a généré un flux de volontaires internationaux dans des unités régulières et spéciales ukrainiennes. Defcon Alpha — issue du noyau « Defcon Tribe » — en fait partie, avec une présence significative d'Italiens, Brésiliens, Français et de personnel issu des forces spéciales OTAN. Son identité est façonnée par l'intégration multinationale, l'emploi HUR/GUR, l'expérience Mer Noire et une consommation intense des retours d'expérience 2022–2026.",
    identity: "Identité opérationnelle",
    identityBody:
      "L'unité se place entre infanterie légère projetée et éléments de reconnaissance/raids. Ce n'est pas une force spéciale au sens classique américain — c'est une formation professionnelle de volontaires à doctrine hybride OTAN/SOF/post-soviétique adaptée. Cela implique : forte attente d'initiative individuelle, OPSEC lourd, leadership horizontal dans l'équipe, intégration fluide avec drones, EW et artillerie.",
    ops: "Périmètre opérationnel (niveau doctrinal)",
    opsItems: [
      { title: "Reconnaissance", body: "Reconnaissance profonde, OPs statiques, désignation d'objectifs, soutien target packages." },
      { title: "Intégration drone", body: "Opérations coordonnées avec FPV, drones ISR et bombardiers légers." },
      { title: "Maritime / Mer Noire", body: "Opérations en environnement maritime et côtier — entraînement, équipement, doctrine amphibie de base." },
      { title: "Soutien direct action", body: "Soutien aux opérations HUR/GUR, insertion/extraction d'équipes, raids limités." },
      { title: "Formation et intégration", body: "Transfert de connaissance entre volontaires nouveaux et vétérans, intégration multinationale, language ops." },
    ],
    culture: "Culture opérationnelle",
    cultureItems: [
      "Italien et portugais répandus de façon informelle ; anglais comme standard opérationnel",
      "Discipline OPSEC très haute — pas de social, pas de hero shots, pas de positions",
      "Rotations intenses, décompression obligatoire, AAR à chaque opération significative",
      "Attente d'autonomie individuelle : personne ne vous tient la main, mais l'équipe vous couvre",
      "Forte culture de maintenance et de discipline radio",
      "Tolérance zéro pour les actes mettant l'unité en danger (alcool en op, drogue, fuites social)",
    ],
    newcomer: "Attentes envers le nouveau",
    newcomerItems: [
      "Anglais opérationnel fonctionnel (pas parfait, utilisable en radio)",
      "Condition physique réelle — sac, récupération, froid, boue — pas de salle esthétique",
      "Connaissance des plateformes OTAN et AK au niveau manipulation sûre",
      "TCCC de base — garrot, packing, ventilation",
      "Familiarité avec MGRS, phonétique OTAN, SALUTE, MEDEVAC 9-line",
      "Comprendre que la première période n'est pas du « combat » mais intégration, OPSEC, maintenance, langue",
    ],
    gallery: "Matériel photographique public",
    galleryNote:
      "IMAGES DE PUBLICATIONS PUBLIQUES OU DE CANAUX OFFICIELS DE L'UNITÉ. VISAGES MASQUÉS SELON LE STANDARD OPSEC D'ORIGINE. EXIF/GPS RETIRÉS AVANT PUBLICATION. AUCUNE POSITION OPÉRATIONNELLE N'EST DÉDUCTIBLE DE CES IMAGES.",
    galleryCaptions: [
      "Équipe avec drapeau « defcon tribe ». Opérations de nuit. Multicam, NVG montés, silencieux, optiques de nuit.",
      "Équipe avec drapeau HUR (Військова Розвідка України). Cadre côtier diurne — activité Mer Noire du détachement.",
      "Équipe sur RIB. Insertion maritime. NVG montés, armes courtes couvertes contre les embruns.",
      "Opérateur sur RIB. Patch « ВЕТЕРАНИ » sur le casque — courant dans les détachements HUR au personnel militaire pré-2022.",
    ],
    psych: "Survie psychologique",
    psychBody:
      "Le front ukrainien 2024–2026 — artillerie, FPV continu, terrain saturé, privation de sommeil, perte de camarades. La survie psychologique n'est pas optionnelle — c'est une compétence à construire. Outils : AAR honnêtes, décompression en rotation, parler avec ceux qui ont déjà encaissé leur premier « hit », sommeil discipliné, pas d'auto-médication à l'alcool. Ceux qui minimisent publiquement l'impact psy sont ceux qui craquent trois mois plus tard. Ceux qui le gèrent durent.",
    notMe: "Quand l'unité n'est pas pour vous",
    notMeBody:
      "Si vous cherchez l'adrénaline, l'exposition, du contenu pour réseaux sociaux, une « expérience de guerre » symbolique, ou si vous fuyez un échec personnel chez vous — Defcon Alpha, comme toute unité sérieuse, n'est pas l'endroit. Les équipes le détectent en semaines et l'intégration échoue. Si vous êtes prêt à être soldat sans public, dans une guerre réelle, dans une formation multinationale, le premier pas est l'humilité technique et le respect de la structure. Tout le reste se construit.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  const galleryItems: GalleryItem[] = GALLERY_BASE.map((item, i) => ({
    ...item,
    caption: s.galleryCaptions[i],
  }));

  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.parent}</h2>
        <p>{s.parentBody}</p>

        <h3>{s.parentStructure}</h3>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {s.parentStructureItems.map((item) => (
              <tr key={item.name}>
                <td className="mono">{item.name}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="callout">
          <div className="callout-title">{s.parentMotto}</div>
          <p>{s.parentMottoBody}</p>
        </div>

        <p className="mono" style={{ fontSize: "0.85em", color: "var(--fg-3)" }}>
          {s.parentRef}
        </p>

        <h2>{s.context}</h2>
        <p>{s.contextBody}</p>

        <h2>{s.identity}</h2>
        <p>{s.identityBody}</p>

        <h2>{s.ops}</h2>
        {s.opsItems.map((o) => (
          <div key={o.title} className="callout">
            <div className="callout-title">{o.title}</div>
            <p>{o.body}</p>
          </div>
        ))}

        <h2>{s.culture}</h2>
        <ul>
          {s.cultureItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.newcomer}</h2>
        <ul>
          {s.newcomerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.gallery}</h2>
        <Gallery
          items={galleryItems}
          title={s.gallery}
          note={s.galleryNote}
          columns={2}
        />

        <h2>{s.psych}</h2>
        <blockquote>{s.psychBody}</blockquote>

        <h2>{s.notMe}</h2>
        <blockquote>{s.notMeBody}</blockquote>
      </>
    ),
  };
}
