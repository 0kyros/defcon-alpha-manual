import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const POSTURES: ReadonlyArray<ReadonlyArray<string>> = [
  ["Security — slung back", "Sling diagonally across the weak shoulder, weapon on back. Used in safe areas or on the move outside threat zones."],
  ["Security — slung front", "Sling around neck, weapon hanging at chest. Quick to access; common in mounted patrols and vehicle interiors."],
  ["Patrol — low ready", "Strong hand on grip, weak hand on handguard, muzzle 30°–45° below horizontal. Default outside contact."],
  ["Patrol — high ready", "Muzzle 30°–45° above horizontal, sights below line of sight. Used in close terrain where low ready obscures observation."],
  ["Contact — engagement", "Feet shoulder-width, weak foot slightly forward, knees unlocked, slight forward lean, weapon shouldered. Stable platform for live engagement."],
];

const POSITIONS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Standing", "Highest mobility, lowest stability and concealment"],
  ["One knee", "Compromise between mobility and stability; common transitional position"],
  ["Two knees", "More stable than one knee; slower to move"],
  ["Crouching", "Reduces silhouette; bridge between standing and ground positions"],
  ["Sitting", "Stable platform for medium ranges; slow to leave"],
  ["Prone ventral", "Most stable, smallest silhouette; very slow to manoeuvre from"],
  ["Prone lateral", "Used when terrain forces it (low cover, ditches); compromises sight alignment"],
];

const FR_CATEGORIES: ReadonlyArray<ReadonlyArray<string>> = [
  ["A — Prohibée", "Civils exclus", "Détention réservée à l'État, professionnels habilités, certaines collections"],
  ["B — Soumise à autorisation", "Préfecture, validité 5 ans", "Visite médicale, motif sportif/professionnel, casier judiciaire vierge"],
  ["C — Soumise à déclaration", "Préfecture via SIA", "Permis de chasse validé ou licence de tir en cours"],
  ["D — Vente libre", "Achat direct", "Majorité, justificatif d'identité"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La sicurezza nel maneggio delle armi è la base operativa che precede qualsiasi addestramento tattico. Le quattro regole universali (formalizzate da Jeff Cooper e adottate in versione IST-C dall'Armée de Terre francese e in forme analoghe da tutte le scuole NATO) non sono regole burocratiche: sono la differenza tra un operatore funzionale e un incidente. Il capitolo include anche le posture e le posizioni di tiro a livello concettuale, e un riferimento al quadro normativo francese — utile a volontari francofoni che operano fuori e rientrano in territorio nazionale.",
    sections: [
      {
        heading: "Le quattro regole fondamentali",
        blocks: [
          {
            type: "p",
            text: "Ogni regola compensa un fallimento delle altre. Sono ridondanti per design: un'arma scarica puntata male, con il dito sul grilletto, in un ambiente non identificato — è ancora un incidente. Sono ridondanti per design: tre regole devono fallire contemporaneamente per produrre un ferito.",
          },
          {
            type: "ol",
            items: [
              "Ogni arma è considerata carica. Sempre. La maggior parte degli incidenti avviene con armi \"scariche\". La verifica visiva non sostituisce la regola: l'arma resta concettualmente carica anche dopo aver visto la camera vuota.",
              "La canna non si punta mai verso ciò che non si è disposti a distruggere. Vale in poligono, in armeria, durante la pulizia, in caserma, in posizione di riposo. Non esiste \"momento sicuro\".",
              "Il dito resta fuori dal grilletto fino a quando la mira è allineata sul bersaglio e la decisione di sparare è presa. Lo stress riflesso a sorpresa scarica involontariamente armi pronte al fuoco — è documentato in centinaia di incidenti operativi.",
              "Identificare il bersaglio, ciò che gli sta davanti e ciò che gli sta dietro. Il proiettile penetra muri, attraversa coperture leggere, rimbalza. La responsabilità di ogni colpo è di chi lo spara — non del bersaglio.",
            ],
          },
          {
            type: "warn",
            title: "PRINCIPIO IST-C",
            body: "Le regole non si memorizzano: si interiorizzano. L'obiettivo non è recitarle, è non poterle violare anche distratti, stanchi, sotto stress, nel buio.",
          },
        ],
      },
      {
        heading: "Posture (livello concettuale)",
        blocks: [
          {
            type: "p",
            text: "Le posture definiscono come l'arma è portata in relazione al livello di minaccia ambientale. Sono concetti dottrinali, non procedure di esecuzione. Ogni unità adatta le posture al proprio contesto operativo.",
          },
          {
            type: "table",
            headers: ["Postura", "Descrizione"],
            rows: POSTURES,
          },
        ],
      },
      {
        heading: "Posizioni di tiro",
        blocks: [
          {
            type: "p",
            text: "Le posizioni rappresentano un compromesso tra mobilità, stabilità e silhouette esposta. Sono insegnate in ordine di stabilità crescente, ma ogni posizione ha il suo dominio d'uso. Il tiratore funzionale transita tra posizioni in risposta a terreno, distanza, copertura disponibile.",
          },
          {
            type: "table",
            headers: ["Posizione", "Caratteristica"],
            rows: POSITIONS,
          },
        ],
      },
      {
        heading: "Quadro legale francese (riferimento nazionale)",
        blocks: [
          {
            type: "p",
            text: "La legge francese classifica le armi in quattro categorie. La conoscenza di questo quadro è prerequisito per ogni volontario francofono che rientra in territorio nazionale o trasporta materiale attraverso confini UE. Sintesi non sostitutiva di consultazione legale.",
          },
          {
            type: "table",
            headers: ["Categoria", "Acquisizione", "Requisiti"],
            rows: FR_CATEGORIES,
          },
          {
            type: "ul",
            items: [
              "Storage A/B: cassaforte o armadio rinforzato obbligatorio",
              "Storage C: cassaforte, arma neutralizzata o fissata in modo sicuro; munizioni separate",
              "Munizioni B/C: fino a 1 000 cartucce per arma autorizzata",
              "Porto: vietato salvo eccezioni (rievocazione storica, motivi professionali)",
              "Trasporto: motivo legittimo richiesto (permesso caccia per C; licenza tiro per B/C)",
            ],
          },
          {
            type: "callout",
            title: "ALTRE GIURISDIZIONI",
            body: "Italia, Brasile, Belgio, Polonia hanno framework distinti. Il volontario che rientra in patria con esperienza acquisita all'estero deve verificare in anticipo lo status delle armi possedute, le autorizzazioni necessarie, e gli obblighi di dichiarazione doganale. La consultazione di un avvocato specializzato è raccomandata prima del rimpatrio definitivo.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Trattare la verifica visiva come permesso di violare regola 1 (\"l'ho controllata, è scarica\")",
              "Puntare la canna verso compagni durante movimenti veloci, in salita di mezzi, durante pulizia",
              "Dito sul grilletto in posizione di riposo o di trasporto (\"trigger discipline\" è un'abitudine, non una scelta)",
              "Sparare senza identificare il backstop — comune in scenari urbani notturni",
              "Confondere la sicurezza meccanica dell'arma con la sicurezza procedurale (le regole valgono anche con safety ON)",
              "Improvvisare \"posture\" non standard sotto stress — quando il riflesso prende il sopravvento, l'addestramento eseguito 10 000 volte è quello che esce",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte ucraino la maggior parte degli incidenti da arma da fuoco amica non è in combattimento — è nelle prime ore dopo il rientro, in stato di stanchezza estrema, durante pulizia o scarico, dentro veicoli o ricoveri. L'arma scarica che spara è una statistica documentata. La cultura delle quattro regole, mantenuta come abitudine anche dopo 72 ore senza sonno, è la differenza tra un'unità con zero blue-on-blue e un'unità che perde un compagno ogni rotazione per un colpo \"partito da solo\". Non parte da solo mai — parte sempre da un dito.",
          },
        ],
      },
      {
        heading: "Riferimento sorgente",
        blocks: [
          {
            type: "p",
            text: "Sintesi adattata da materiale pubblico IST-C (Instruction sur le Tir de Combat) dell'Armée de Terre francese e dalle Cooper Rules universalmente adottate. Quadro legale FR fonte: Code de la Sécurité Intérieure, articoli L311-1 e seguenti. Aggiornamento normativo: verificare il sito service-public.fr per le ultime modifiche.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Firearm safety is the operational baseline that precedes any tactical training. The four universal rules (formalised by Jeff Cooper and adopted in IST-C form by the French Army, and in analogous forms by every NATO school) are not bureaucratic rules: they are the difference between a functional operator and an accident. This chapter also covers postures and shooting positions at the conceptual level, and includes a reference to the French legal framework — useful for francophone volunteers operating abroad and returning to national territory.",
    sections: [
      {
        heading: "The four cardinal rules",
        blocks: [
          {
            type: "p",
            text: "Each rule compensates for the failure of the others. They are redundant by design: an unloaded weapon, pointed wrong, with finger on trigger, in an unidentified environment — is still an accident. Three rules must fail simultaneously to produce a casualty.",
          },
          {
            type: "ol",
            items: [
              "Every weapon is considered loaded. Always. Most accidents happen with \"unloaded\" weapons. Visual check does not replace the rule: the weapon remains conceptually loaded even after seeing an empty chamber.",
              "Never point the muzzle at anything you are not willing to destroy. Holds in range, in armoury, during cleaning, in barracks, at rest. There is no \"safe moment\".",
              "Finger off the trigger until the sights are aligned on the target and the decision to fire is made. The startle reflex involuntarily discharges weapons ready to fire — documented in hundreds of operational incidents.",
              "Identify the target, what is in front of it and what is behind it. The round penetrates walls, passes through light cover, ricochets. Responsibility for every shot rests with the shooter — not the target.",
            ],
          },
          {
            type: "warn",
            title: "IST-C PRINCIPLE",
            body: "The rules are not memorised: they are internalised. The objective is not to recite them, it is to be unable to violate them while distracted, exhausted, under stress, in darkness.",
          },
        ],
      },
      {
        heading: "Postures (conceptual level)",
        blocks: [
          {
            type: "p",
            text: "Postures define how the weapon is carried relative to ambient threat level. These are doctrinal concepts, not execution procedures. Each unit adapts postures to its operational context.",
          },
          {
            type: "table",
            headers: ["Posture", "Description"],
            rows: POSTURES,
          },
        ],
      },
      {
        heading: "Shooting positions",
        blocks: [
          {
            type: "p",
            text: "Positions are a compromise between mobility, stability and exposed silhouette. Taught in order of increasing stability, but each has its domain of use. The functional shooter transitions between positions in response to terrain, distance and available cover.",
          },
          {
            type: "table",
            headers: ["Position", "Characteristic"],
            rows: POSITIONS,
          },
        ],
      },
      {
        heading: "French legal framework (national reference)",
        blocks: [
          {
            type: "p",
            text: "French law classifies firearms into four categories. Knowledge of this framework is a prerequisite for any francophone volunteer returning to national territory or moving material across EU borders. Summary is not a substitute for legal consultation.",
          },
          {
            type: "table",
            headers: ["Category", "Acquisition", "Requirements"],
            rows: FR_CATEGORIES,
          },
          {
            type: "ul",
            items: [
              "Storage A/B: safe or reinforced cabinet mandatory",
              "Storage C: safe, neutralised weapon or securely fixed; ammunition separate",
              "Ammunition B/C: up to 1 000 cartridges per authorised weapon",
              "Carrying: prohibited except for exceptions (historical re-enactment, professional reasons)",
              "Transport: legitimate purpose required (hunting permit for C; sports licence for B/C)",
            ],
          },
          {
            type: "callout",
            title: "OTHER JURISDICTIONS",
            body: "Italy, Brazil, Belgium, Poland have distinct frameworks. The volunteer returning home with experience acquired abroad must verify in advance the status of weapons held, required permits, and customs declaration obligations. Consultation with a specialised lawyer is recommended before definitive return.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Treating visual check as permission to violate rule 1 (\"I checked, it's empty\")",
              "Pointing the muzzle at teammates during fast movement, vehicle mount/dismount, cleaning",
              "Finger on trigger at rest or in transport (\"trigger discipline\" is a habit, not a choice)",
              "Firing without identifying the backstop — common in urban night scenarios",
              "Confusing mechanical safety with procedural safety (rules apply even with safety ON)",
              "Improvising non-standard postures under stress — when the reflex takes over, the training rehearsed 10 000 times is what comes out",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Ukrainian front, most friendly firearm incidents are not in combat — they are in the first hours after return, in extreme fatigue, during cleaning or unloading, inside vehicles or shelters. The unloaded weapon that fires is a documented statistic. The culture of the four rules, maintained as habit even after 72 hours without sleep, is the difference between a unit with zero blue-on-blue and a unit losing a teammate per rotation to a \"shot that fired by itself\". It never fires by itself — it always fires from a finger.",
          },
        ],
      },
      {
        heading: "Source reference",
        blocks: [
          {
            type: "p",
            text: "Synthesis adapted from public IST-C (Instruction sur le Tir de Combat) material of the French Army and from the universally adopted Cooper Rules. FR legal framework source: Code de la Sécurité Intérieure, article L311-1 et seq. Regulatory updates: verify service-public.fr for latest amendments.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Segurança no manuseio de armas é a base operacional que precede qualquer treinamento tático. As quatro regras universais (formalizadas por Jeff Cooper e adotadas em forma IST-C pelo Exército francês, e em formas análogas por todas as escolas OTAN) não são burocráticas: são a diferença entre um operador funcional e um acidente. O capítulo cobre também as posturas e posições de tiro em nível conceitual e inclui referência ao quadro legal francês — útil para voluntários francófonos que operam no exterior e retornam ao território nacional.",
    sections: [
      {
        heading: "As quatro regras cardinais",
        blocks: [
          {
            type: "p",
            text: "Cada regra compensa a falha das outras. São redundantes por design: arma descarregada, apontada errado, com dedo no gatilho, em ambiente não identificado — ainda é acidente. Três regras precisam falhar simultaneamente para gerar uma vítima.",
          },
          {
            type: "ol",
            items: [
              "Toda arma é considerada carregada. Sempre. A maioria dos acidentes acontece com armas \"descarregadas\". A verificação visual não substitui a regra: a arma permanece conceitualmente carregada mesmo após ver a câmara vazia.",
              "A boca do cano nunca aponta para nada que você não esteja disposto a destruir. Vale no estande, na armaria, durante a limpeza, no quartel, em repouso. Não existe \"momento seguro\".",
              "O dedo fica fora do gatilho até a mira estar alinhada no alvo e a decisão de atirar ter sido tomada. O reflexo de susto descarrega involuntariamente armas prontas para disparar — documentado em centenas de incidentes operacionais.",
              "Identificar o alvo, o que está à frente e o que está atrás dele. O projétil penetra paredes, atravessa cobertura leve, ricocheteia. A responsabilidade de cada disparo é do atirador — não do alvo.",
            ],
          },
          {
            type: "warn",
            title: "PRINCÍPIO IST-C",
            body: "As regras não se memorizam: se internalizam. O objetivo não é recitá-las, é não poder violá-las mesmo distraído, exausto, sob estresse, no escuro.",
          },
        ],
      },
      {
        heading: "Posturas (nível conceitual)",
        blocks: [
          {
            type: "p",
            text: "As posturas definem como a arma é portada em relação ao nível de ameaça ambiental. São conceitos doutrinários, não procedimentos de execução. Cada unidade adapta as posturas ao seu contexto operacional.",
          },
          {
            type: "table",
            headers: ["Postura", "Descrição"],
            rows: POSTURES,
          },
        ],
      },
      {
        heading: "Posições de tiro",
        blocks: [
          {
            type: "p",
            text: "As posições representam compromisso entre mobilidade, estabilidade e silhueta exposta. São ensinadas em ordem de estabilidade crescente, mas cada uma tem seu domínio de uso. O atirador funcional transita entre posições em resposta ao terreno, distância e cobertura disponível.",
          },
          {
            type: "table",
            headers: ["Posição", "Característica"],
            rows: POSITIONS,
          },
        ],
      },
      {
        heading: "Quadro legal francês (referência nacional)",
        blocks: [
          {
            type: "p",
            text: "A lei francesa classifica as armas em quatro categorias. O conhecimento desse quadro é pré-requisito para qualquer voluntário francófono que retorne ao território nacional ou transporte material através de fronteiras UE. Síntese não substitui consulta jurídica.",
          },
          {
            type: "table",
            headers: ["Categoria", "Aquisição", "Requisitos"],
            rows: FR_CATEGORIES,
          },
          {
            type: "ul",
            items: [
              "Storage A/B: cofre ou armário reforçado obrigatório",
              "Storage C: cofre, arma neutralizada ou fixada com segurança; munição separada",
              "Munição B/C: até 1 000 cartuchos por arma autorizada",
              "Porte: proibido salvo exceções (reconstituição histórica, motivos profissionais)",
              "Transporte: motivo legítimo necessário (permissão de caça para C; licença esportiva para B/C)",
            ],
          },
          {
            type: "callout",
            title: "OUTRAS JURISDIÇÕES",
            body: "Itália, Brasil, Bélgica, Polônia têm frameworks distintos. O voluntário que retorna ao país com experiência adquirida no exterior deve verificar com antecedência o status das armas possuídas, autorizações necessárias e obrigações de declaração alfandegária. Consulta com advogado especializado é recomendada antes do retorno definitivo.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Tratar a verificação visual como permissão para violar a regra 1 (\"verifiquei, está descarregada\")",
              "Apontar a boca do cano para companheiros durante movimento rápido, embarque/desembarque, limpeza",
              "Dedo no gatilho em repouso ou transporte (\"trigger discipline\" é hábito, não escolha)",
              "Atirar sem identificar o backstop — comum em cenários urbanos noturnos",
              "Confundir trava mecânica da arma com segurança procedural (as regras valem mesmo com trava acionada)",
              "Improvisar posturas não padrão sob estresse — quando o reflexo assume, o treinamento repetido 10 000 vezes é o que sai",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front ucraniano, a maioria dos incidentes com arma amiga não acontece em combate — acontece nas primeiras horas após o retorno, em fadiga extrema, durante limpeza ou descarga, dentro de veículos ou abrigos. A arma descarregada que dispara é estatística documentada. A cultura das quatro regras, mantida como hábito mesmo após 72 horas sem sono, é a diferença entre uma unidade com zero blue-on-blue e uma unidade que perde um companheiro por rotação por um \"tiro que saiu sozinho\". Não sai sozinho nunca — sai sempre de um dedo.",
          },
        ],
      },
      {
        heading: "Referência da fonte",
        blocks: [
          {
            type: "p",
            text: "Síntese adaptada de material público IST-C (Instruction sur le Tir de Combat) do Exército francês e das Cooper Rules universalmente adotadas. Quadro legal FR: Code de la Sécurité Intérieure, art. L311-1 e seguintes. Atualização normativa: verificar service-public.fr para as últimas alterações.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La sécurité dans le maniement des armes est la base opérationnelle qui précède tout entraînement tactique. Les quatre règles universelles (formalisées par Jeff Cooper et adoptées sous forme IST-C par l'Armée de Terre française, et sous des formes analogues par toutes les écoles OTAN) ne sont pas des règles administratives : elles sont la différence entre un opérateur fonctionnel et un accident. Le chapitre couvre aussi les postures et positions de tir au niveau conceptuel, et inclut une référence au cadre légal français — utile aux volontaires francophones opérant à l'étranger et rentrant en territoire national.",
    sections: [
      {
        heading: "Les quatre règles cardinales",
        blocks: [
          {
            type: "p",
            text: "Chaque règle compense l'échec des autres. Elles sont redondantes par construction : une arme déchargée, mal pointée, avec le doigt sur la queue de détente, dans un environnement non identifié — c'est encore un accident. Trois règles doivent échouer simultanément pour produire une victime.",
          },
          {
            type: "ol",
            items: [
              "Toute arme est considérée comme chargée. Toujours. La majorité des accidents survient avec des armes « déchargées ». La vérification visuelle ne remplace pas la règle : l'arme reste conceptuellement chargée même après avoir vu la chambre vide.",
              "Le canon ne se pointe jamais vers ce qu'on n'est pas disposé à détruire. Vaut au stand, à l'armurerie, pendant l'entretien, en caserne, au repos. Il n'existe pas de « moment sûr ».",
              "Le doigt reste hors de la queue de détente jusqu'à ce que la visée soit alignée sur la cible et que la décision de tirer soit prise. Le réflexe de sursaut décharge involontairement des armes prêtes au tir — documenté dans des centaines d'incidents opérationnels.",
              "Identifier la cible, ce qui se trouve devant et ce qui se trouve derrière. Le projectile traverse les cloisons, franchit la couverture légère, ricoche. La responsabilité de chaque tir incombe au tireur — pas à la cible.",
            ],
          },
          {
            type: "warn",
            title: "PRINCIPE IST-C",
            body: "Les règles ne se mémorisent pas : elles s'intériorisent. L'objectif n'est pas de les réciter, c'est de ne pas pouvoir les violer même distrait, épuisé, sous stress, dans le noir.",
          },
        ],
      },
      {
        heading: "Postures (niveau conceptuel)",
        blocks: [
          {
            type: "p",
            text: "Les postures définissent la manière dont l'arme est portée par rapport au niveau de menace ambiante. Ce sont des concepts doctrinaux, pas des procédures d'exécution. Chaque unité adapte les postures à son contexte opérationnel.",
          },
          {
            type: "table",
            headers: ["Posture", "Description"],
            rows: POSTURES,
          },
        ],
      },
      {
        heading: "Positions de tir",
        blocks: [
          {
            type: "p",
            text: "Les positions représentent un compromis entre mobilité, stabilité et silhouette exposée. Elles sont enseignées par ordre de stabilité croissante, mais chacune a son domaine d'emploi. Le tireur fonctionnel transite entre les positions en réponse au terrain, à la distance et à la couverture disponible.",
          },
          {
            type: "table",
            headers: ["Position", "Caractéristique"],
            rows: POSITIONS,
          },
        ],
      },
      {
        heading: "Cadre légal français (référence nationale)",
        blocks: [
          {
            type: "p",
            text: "La loi française classe les armes en quatre catégories. La connaissance de ce cadre est un prérequis pour tout volontaire francophone qui rentre en territoire national ou transporte du matériel à travers les frontières UE. Synthèse non substitutive d'une consultation juridique.",
          },
          {
            type: "table",
            headers: ["Catégorie", "Acquisition", "Exigences"],
            rows: FR_CATEGORIES,
          },
          {
            type: "ul",
            items: [
              "Stockage A/B : coffre ou armoire renforcée obligatoire",
              "Stockage C : coffre, arme neutralisée ou fixée de manière sûre ; munitions séparées",
              "Munitions B/C : jusqu'à 1 000 cartouches par arme autorisée",
              "Port : interdit sauf exceptions (reconstitution historique, motifs professionnels)",
              "Transport : motif légitime requis (permis de chasse pour C ; licence de tir pour B/C)",
            ],
          },
          {
            type: "callout",
            title: "AUTRES JURIDICTIONS",
            body: "Italie, Brésil, Belgique, Pologne ont des cadres distincts. Le volontaire qui rentre au pays avec une expérience acquise à l'étranger doit vérifier à l'avance le statut des armes détenues, les autorisations nécessaires et les obligations de déclaration douanière. La consultation d'un avocat spécialisé est recommandée avant un retour définitif.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Traiter la vérification visuelle comme une permission de violer la règle 1 (« je l'ai vérifiée, elle est vide »)",
              "Pointer le canon vers des camarades lors de déplacements rapides, montée/descente de véhicule, entretien",
              "Doigt sur la queue de détente au repos ou en transport (la « trigger discipline » est une habitude, pas un choix)",
              "Tirer sans identifier l'arrière-plan — courant en scénario urbain de nuit",
              "Confondre sûreté mécanique et sûreté procédurale (les règles s'appliquent même sûreté engagée)",
              "Improviser des postures non standard sous stress — quand le réflexe prend le relais, c'est l'entraînement répété 10 000 fois qui sort",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front ukrainien, la plupart des incidents d'arme amie n'arrivent pas au combat — ils arrivent dans les premières heures après le retour, en fatigue extrême, pendant l'entretien ou le déchargement, dans les véhicules ou les abris. L'arme déchargée qui tire est une statistique documentée. La culture des quatre règles, maintenue comme habitude même après 72 heures sans sommeil, est la différence entre une unité à zéro blue-on-blue et une unité qui perd un camarade par rotation à un « coup parti tout seul ». Il ne part jamais tout seul — il part toujours d'un doigt.",
          },
        ],
      },
      {
        heading: "Référence source",
        blocks: [
          {
            type: "p",
            text: "Synthèse adaptée du matériel public IST-C (Instruction sur le Tir de Combat) de l'Armée de Terre française et des Cooper Rules universellement adoptées. Source du cadre légal FR : Code de la Sécurité Intérieure, articles L311-1 et suivants. Mise à jour réglementaire : vérifier service-public.fr pour les dernières modifications.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
