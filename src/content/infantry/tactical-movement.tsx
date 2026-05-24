import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il movimento tattico è la disciplina con cui un'unità si sposta sul terreno riducendo al minimo la probabilità di essere osservata, ingaggiata o tracciata da artiglieria e droni. Sul fronte ucraino il movimento è la variabile che separa una squadra che arriva intera da una che subisce perdite durante il solo avvicinamento. Questo capitolo presenta principi dottrinali — non procedure offensive d'assalto.",
    sections: [
      {
        heading: "Principi fondamentali",
        blocks: [
          {
            type: "p",
            text: "Quattro principi reggono tutto il movimento di fanteria leggera: dispersione, sfruttamento del terreno, sicurezza reciproca, ritmo controllato. La saturazione di FPV e ISR rende ogni concentrazione visibile un bersaglio. Ogni metro percorso deve essere coperto in modo cosciente.",
          },
          {
            type: "ul",
            items: [
              "Dispersione: distanza tra i militari sufficiente a evitare che una singola munizione neutralizzi più di uno",
              "Sfruttamento del terreno: usare ondulazioni, vegetazione, ombre, edifici per spezzare la linea di vista",
              "Sicurezza reciproca: ogni elemento ha qualcuno che lo osserva mentre si muove",
              "Ritmo controllato: alternanza tra spostamento, pausa, osservazione — mai movimento continuo senza ascolto",
            ],
          },
        ],
      },
      {
        heading: "Formazioni di base",
        blocks: [
          {
            type: "p",
            text: "Le formazioni sono linguaggio visivo: comunicano al comandante dove sta il rischio e dove sta la potenza di fuoco. Nessuna formazione è universalmente buona; la scelta dipende da terreno, minaccia attesa e missione.",
          },
          {
            type: "table",
            headers: ["Formazione", "Uso tipico", "Vantaggio", "Limite"],
            rows: [
              ["Colonna", "Movimento rapido su sentiero o linea di copertura", "Velocità, controllo, basso ingombro frontale", "Vulnerabile a fuoco frontale e mine"],
              ["Fila", "Movimento dietro copertura lineare (muro, fossato)", "Massima riduzione della silhouette laterale", "Vulnerabile a fuoco di infilata"],
              ["Cuneo", "Avanzata in terreno aperto", "Fuoco verso 3 settori, riconoscimento ampio", "Ingombro maggiore, segnatura visibile"],
              ["Linea", "Avvicinamento finale o sweep", "Massima potenza di fuoco frontale", "Controllo difficile, esposizione massima"],
              ["Diamante", "Sicurezza a 360°, pause, sosta", "Copertura completa, adatto a halt", "Lento in movimento, ingombro"],
            ],
          },
          {
            type: "p",
            text: "Le formazioni si modificano fluidamente: una squadra passa da cuneo a fila a colonna nel giro di pochi minuti a seconda della copertura disponibile. La transizione deve essere silenziosa e basata su segnali pre-concordati.",
          },
        ],
      },
      {
        heading: "Dispersione e minaccia FPV",
        blocks: [
          {
            type: "p",
            text: "La distanza tra militari, storicamente fissata in 3-5 metri per fanteria leggera, è cresciuta sul fronte ucraino. La logica è semplice: un FPV con carica anti-personale colpisce un raggio di pochi metri; la dispersione spezza la capacità di una singola munizione di colpire più di un effettivo.",
          },
          {
            type: "ul",
            items: [
              "Distanza minima in zona di minaccia FPV: 8-15 metri tra effettivi",
              "Distanza maggiore in spazi aperti, ridotta in copertura densa",
              "Mai concentrarsi durante pause, scambi di informazione, attesa",
              "Considerare la verticale: un edificio multipiano disperde anche in altezza",
              "Le squadre di soccorso non corrono insieme verso un ferito — alternano",
            ],
          },
          {
            type: "warn",
            title: "LIMITI DEL MANUALE",
            body: "Questo capitolo descrive principi di movimento e dispersione. Le procedure di assalto, di sgombero di trincee o di ingaggio in copertura sono fuori dallo scope di un manuale di consultazione: vanno apprese in unità con istruttori qualificati e ripetute in addestramento dal vivo.",
          },
        ],
      },
      {
        heading: "Bounding overwatch — concetto",
        blocks: [
          {
            type: "p",
            text: "Il bounding overwatch è il principio per cui un elemento si muove mentre un altro lo osserva, pronto a fornire fuoco di soppressione. È un concetto dottrinale, non una procedura rigida: si applica a livello di team (i due fire team di uno squad), squad (i due squad di un plotone) o singolo militare in spazi ristretti.",
          },
          {
            type: "ul",
            items: [
              "Elemento A si muove verso una posizione di copertura identificata in anticipo",
              "Elemento B resta in posizione di osservazione con armi pronte a coprire A",
              "Quando A è in copertura e ha osservato il settore, A diventa overwatch",
              "B si muove verso la posizione successiva mentre A copre",
              "Le distanze tra balzi dipendono dalla minaccia: corte sotto fuoco, più lunghe in approccio",
            ],
          },
          {
            type: "p",
            text: "La variante 'successive bounds' fa muovere A oltre B; la variante 'alternate bounds' fa muovere A fino alla linea di B e poi B oltre A. La scelta dipende dalla disponibilità di copertura e dal ritmo richiesto.",
          },
        ],
      },
      {
        heading: "Lettura del terreno",
        blocks: [
          {
            type: "p",
            text: "Il terreno detta il movimento. Prima di muoversi, l'unità identifica linee di vista, linee di tiro, linee di copertura, ostacoli, punti chiave e direzioni di possibile minaccia. La sigla OCOKA (Observation, Cover and concealment, Obstacles, Key terrain, Avenues of approach) è uno strumento mnemonico NATO standard.",
          },
          {
            type: "ul",
            items: [
              "Observation: da dove il nemico può vederci, da dove possiamo vedere lui",
              "Cover and concealment: copertura (ferma proiettili) e dissimulazione (nasconde alla vista)",
              "Obstacles: ostacoli naturali (fiumi, dirupi) e artificiali (mine, filo spinato)",
              "Key terrain: punti chiave (altura, incrocio, ponte) il cui possesso dà vantaggio",
              "Avenues of approach: vie di avvicinamento utilizzabili da noi o dal nemico",
            ],
          },
          {
            type: "callout",
            title: "COPERTURA vs DISSIMULAZIONE",
            body: "Un cespuglio nasconde ma non ferma un proiettile. Un muro di mattoni ferma proiettili ma non un FPV con carica anticarro. La copertura è specifica per la minaccia: valutarla sempre rispetto all'arma attesa, non in astratto.",
          },
        ],
      },
      {
        heading: "Ciclo di osservazione",
        blocks: [
          {
            type: "p",
            text: "Il movimento alterna fasi attive e fasi passive. La fase passiva — halt, listen, observe — è dove l'unità riduce la propria segnatura e legge l'ambiente. Saltarla per fretta è uno degli errori più comuni dei volontari non addestrati.",
          },
          {
            type: "ol",
            items: [
              "Halt: fermarsi in copertura, non sul percorso",
              "Listen: 30-60 secondi di ascolto totale, niente parole, niente movimento",
              "Observe: settorizzazione visiva, ogni effettivo osserva un arco assegnato",
              "Decide: il leader decide il prossimo balzo sulla base di ciò che si è raccolto",
              "Move: spostamento rapido alla copertura successiva",
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
              "Camminare in gruppo compatto perché 'ci si sente più sicuri'",
              "Tagliare attraverso campi aperti per risparmiare tempo",
              "Fermarsi sul percorso anziché ai lati in copertura",
              "Continuare a muoversi sotto cielo aperto sapendo di essere osservati",
              "Ritmo costante e prevedibile, che facilita il targeting",
              "Affidarsi alla velocità invece che alla copertura",
              "Ignorare la verticale: edifici, alberi, droni in quota",
              "Parlare durante le pause di osservazione",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte di Bakhmut, di Avdiivka, di Robotyne e oggi nelle zone di Kharkiv e Pokrovsk, la dispersione è passata da norma teorica a condizione di sopravvivenza. Le squadre che si muovono come unità compatta vengono individuate da ISR persistente in minuti e ingaggiate da FPV o artiglieria entro la prima ora. Le squadre che si muovono dispersamente, brevemente, fra coperture pre-identificate, completano lo spostamento. Il movimento non è una corsa: è una sequenza di pause intelligenti tra balzi corti.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Tactical movement is the discipline by which a unit moves on terrain minimising the probability of being observed, engaged or tracked by artillery and drones. On the Ukrainian front, movement is the variable that separates a squad that arrives intact from one that takes losses during the approach alone. This chapter presents doctrinal principles — not offensive assault procedures.",
    sections: [
      {
        heading: "Foundational principles",
        blocks: [
          {
            type: "p",
            text: "Four principles govern all light-infantry movement: dispersion, terrain use, mutual security, controlled tempo. FPV and ISR saturation make any visible concentration a target. Every metre moved must be covered deliberately.",
          },
          {
            type: "ul",
            items: [
              "Dispersion: spacing between soldiers sufficient to prevent a single munition neutralising more than one",
              "Terrain use: exploit undulations, vegetation, shadow, buildings to break line of sight",
              "Mutual security: every element has someone watching while it moves",
              "Controlled tempo: alternation of movement, halt, observation — never continuous travel without listening",
            ],
          },
        ],
      },
      {
        heading: "Basic formations",
        blocks: [
          {
            type: "p",
            text: "Formations are a visual language: they communicate to the commander where the risk sits and where the firepower sits. No formation is universally good; the choice depends on terrain, expected threat and mission.",
          },
          {
            type: "table",
            headers: ["Formation", "Typical use", "Advantage", "Limit"],
            rows: [
              ["Column", "Fast movement on trail or covered line", "Speed, control, low frontal signature", "Vulnerable to frontal fire and mines"],
              ["File", "Movement behind linear cover (wall, ditch)", "Maximum lateral silhouette reduction", "Vulnerable to enfilade fire"],
              ["Wedge", "Advance in open terrain", "Fire in 3 sectors, wide reconnaissance", "Larger footprint, visible signature"],
              ["Line", "Final approach or sweep", "Maximum frontal firepower", "Hard to control, maximum exposure"],
              ["Diamond", "360° security, halts, rest", "Full coverage, suited to halt", "Slow in movement, footprint"],
            ],
          },
          {
            type: "p",
            text: "Formations shift fluidly: a squad goes from wedge to file to column within minutes depending on the cover available. Transitions must be silent and based on pre-agreed signals.",
          },
        ],
      },
      {
        heading: "Dispersion and FPV threat",
        blocks: [
          {
            type: "p",
            text: "Spacing between soldiers, historically fixed at 3-5 metres for light infantry, has grown on the Ukrainian front. The logic is simple: an FPV with anti-personnel charge affects a few-metre radius; dispersion breaks the ability of a single munition to hit more than one.",
          },
          {
            type: "ul",
            items: [
              "Minimum spacing in FPV threat zone: 8-15 metres between soldiers",
              "Greater spacing in open ground, reduced in dense cover",
              "Never concentrate during halts, information exchange, waiting",
              "Consider the vertical: a multi-storey building disperses in height too",
              "Rescue teams do not run together toward a casualty — they alternate",
            ],
          },
          {
            type: "warn",
            title: "MANUAL LIMITS",
            body: "This chapter describes movement and dispersion principles. Assault procedures, trench-clearing or close-cover engagement procedures are out of scope for a reference manual: they must be learned in units with qualified instructors and rehearsed in live training.",
          },
        ],
      },
      {
        heading: "Bounding overwatch — concept",
        blocks: [
          {
            type: "p",
            text: "Bounding overwatch is the principle by which one element moves while another observes, ready to provide suppressive fire. It is a doctrinal concept, not a rigid procedure: it applies at team level (two fire teams of a squad), squad level (two squads of a platoon), or single soldier in tight spaces.",
          },
          {
            type: "ul",
            items: [
              "Element A moves to a pre-identified covered position",
              "Element B stays in observation position with weapons ready to cover A",
              "When A is in cover and has cleared the sector, A becomes overwatch",
              "B moves to the next position while A covers",
              "Bound length depends on threat: short under fire, longer in approach",
            ],
          },
          {
            type: "p",
            text: "The 'successive bounds' variant moves A beyond B; the 'alternate bounds' variant moves A up to B's line then B beyond A. Choice depends on cover availability and required tempo.",
          },
        ],
      },
      {
        heading: "Reading the terrain",
        blocks: [
          {
            type: "p",
            text: "Terrain dictates movement. Before moving, the unit identifies lines of sight, lines of fire, lines of cover, obstacles, key points and likely threat directions. The OCOKA acronym (Observation, Cover and concealment, Obstacles, Key terrain, Avenues of approach) is a standard NATO mnemonic.",
          },
          {
            type: "ul",
            items: [
              "Observation: from where the enemy can see us, from where we can see them",
              "Cover and concealment: cover (stops rounds) and concealment (hides from view)",
              "Obstacles: natural (rivers, cliffs) and artificial (mines, wire)",
              "Key terrain: points (high ground, junctions, bridges) whose possession confers advantage",
              "Avenues of approach: usable approach routes for us or the enemy",
            ],
          },
          {
            type: "callout",
            title: "COVER vs CONCEALMENT",
            body: "A bush conceals but does not stop a round. A brick wall stops rounds but not an FPV with anti-armour charge. Cover is threat-specific: always assess it against the expected weapon, not in the abstract.",
          },
        ],
      },
      {
        heading: "Observation cycle",
        blocks: [
          {
            type: "p",
            text: "Movement alternates active and passive phases. The passive phase — halt, listen, observe — is where the unit reduces its signature and reads the environment. Skipping it for haste is one of the most common errors of untrained volunteers.",
          },
          {
            type: "ol",
            items: [
              "Halt: stop in cover, not on the route",
              "Listen: 30-60 seconds of full listening, no talking, no movement",
              "Observe: visual sectorisation, each soldier watches an assigned arc",
              "Decide: the leader decides the next bound based on what was gathered",
              "Move: rapid movement to the next cover",
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
              "Walking as a tight group because 'it feels safer'",
              "Cutting across open fields to save time",
              "Stopping on the route instead of in cover off to the side",
              "Continuing to move under open sky while knowing you are observed",
              "Constant predictable tempo that aids enemy targeting",
              "Relying on speed instead of cover",
              "Ignoring the vertical: buildings, trees, drones at altitude",
              "Talking during observation halts",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Bakhmut, Avdiivka, Robotyne fronts, and today in the Kharkiv and Pokrovsk zones, dispersion has moved from theoretical norm to condition of survival. Squads moving as compact units are detected by persistent ISR within minutes and engaged by FPV or artillery within the first hour. Squads moving dispersed, briefly, between pre-identified covers, complete the move. Movement is not a run: it is a sequence of intelligent pauses between short bounds.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O movimento tático é a disciplina pela qual uma unidade se desloca no terreno minimizando a probabilidade de ser observada, engajada ou rastreada por artilharia e drones. No front ucraniano, o movimento é a variável que separa uma esquadra que chega íntegra de uma que sofre baixas só durante a aproximação. Este capítulo apresenta princípios doutrinários — não procedimentos ofensivos de assalto.",
    sections: [
      {
        heading: "Princípios fundamentais",
        blocks: [
          {
            type: "p",
            text: "Quatro princípios regem todo movimento de infantaria leve: dispersão, exploração do terreno, segurança mútua, ritmo controlado. A saturação de FPV e ISR torna qualquer concentração visível um alvo. Cada metro percorrido deve ser coberto de forma consciente.",
          },
          {
            type: "ul",
            items: [
              "Dispersão: distância entre militares suficiente para evitar que uma única munição neutralize mais de um",
              "Exploração do terreno: usar ondulações, vegetação, sombra, edifícios para quebrar linha de visada",
              "Segurança mútua: cada elemento tem alguém o observando enquanto se desloca",
              "Ritmo controlado: alternância entre deslocamento, parada, observação — nunca movimento contínuo sem escuta",
            ],
          },
        ],
      },
      {
        heading: "Formações básicas",
        blocks: [
          {
            type: "p",
            text: "As formações são linguagem visual: comunicam ao comandante onde está o risco e onde está o poder de fogo. Nenhuma formação é universalmente boa; a escolha depende de terreno, ameaça esperada e missão.",
          },
          {
            type: "table",
            headers: ["Formação", "Uso típico", "Vantagem", "Limite"],
            rows: [
              ["Coluna", "Movimento rápido em trilha ou linha de cobertura", "Velocidade, controle, baixa frente", "Vulnerável a fogo frontal e minas"],
              ["Fila", "Movimento atrás de cobertura linear (muro, valeta)", "Máxima redução da silhueta lateral", "Vulnerável a fogo de enfiada"],
              ["Cunha", "Avanço em terreno aberto", "Fogo em 3 setores, reconhecimento amplo", "Maior pegada, assinatura visível"],
              ["Linha", "Aproximação final ou varredura", "Máximo poder de fogo frontal", "Difícil controle, exposição máxima"],
              ["Diamante", "Segurança 360°, paradas, descanso", "Cobertura completa, adequado a halt", "Lento em movimento, pegada grande"],
            ],
          },
          {
            type: "p",
            text: "As formações mudam fluidamente: uma esquadra passa de cunha a fila a coluna em minutos conforme a cobertura disponível. As transições devem ser silenciosas e por sinais pré-combinados.",
          },
        ],
      },
      {
        heading: "Dispersão e ameaça FPV",
        blocks: [
          {
            type: "p",
            text: "A distância entre militares, historicamente fixada em 3-5 metros para infantaria leve, cresceu no front ucraniano. A lógica é simples: um FPV com carga antipessoal afeta poucos metros de raio; a dispersão quebra a capacidade de uma única munição atingir mais de um.",
          },
          {
            type: "ul",
            items: [
              "Distância mínima em zona de ameaça FPV: 8-15 metros entre militares",
              "Maior em terreno aberto, menor em cobertura densa",
              "Nunca concentrar durante paradas, troca de informação, espera",
              "Considerar a vertical: prédio multipiso dispersa em altura também",
              "Equipes de socorro não correm juntas para um ferido — alternam",
            ],
          },
          {
            type: "warn",
            title: "LIMITES DO MANUAL",
            body: "Este capítulo descreve princípios de movimento e dispersão. Procedimentos de assalto, varredura de trincheiras ou engajamento em cobertura próxima estão fora do escopo de um manual de consulta: devem ser aprendidos em unidade, com instrutores qualificados, e repetidos em treinamento real.",
          },
        ],
      },
      {
        heading: "Bounding overwatch — conceito",
        blocks: [
          {
            type: "p",
            text: "Bounding overwatch é o princípio pelo qual um elemento se move enquanto outro o observa, pronto a fornecer fogo de supressão. É conceito doutrinário, não procedimento rígido: aplica-se em nível team (dois fire teams de uma esquadra), esquadra (duas esquadras de um pelotão) ou militar individual em espaços apertados.",
          },
          {
            type: "ul",
            items: [
              "Elemento A se move até posição de cobertura pré-identificada",
              "Elemento B fica em observação com armas prontas a cobrir A",
              "Quando A está em cobertura e limpou o setor, A vira overwatch",
              "B se move para a próxima posição enquanto A cobre",
              "Comprimento do bound depende da ameaça: curto sob fogo, longo na aproximação",
            ],
          },
          {
            type: "p",
            text: "A variante 'successive bounds' move A além de B; a 'alternate bounds' move A até a linha de B e depois B além de A. A escolha depende da disponibilidade de cobertura e do ritmo necessário.",
          },
        ],
      },
      {
        heading: "Leitura do terreno",
        blocks: [
          {
            type: "p",
            text: "O terreno dita o movimento. Antes de se mover, a unidade identifica linhas de visada, de tiro, de cobertura, obstáculos, pontos-chave e direções prováveis de ameaça. A sigla OCOKA (Observation, Cover and concealment, Obstacles, Key terrain, Avenues of approach) é mnemônico OTAN padrão.",
          },
          {
            type: "ul",
            items: [
              "Observation: de onde o inimigo nos vê, de onde nós o vemos",
              "Cover and concealment: cobertura (para projéteis) e dissimulação (esconde da vista)",
              "Obstacles: naturais (rios, despenhadeiros) e artificiais (minas, arame)",
              "Key terrain: pontos (altura, cruzamento, ponte) cuja posse dá vantagem",
              "Avenues of approach: rotas de aproximação usáveis por nós ou inimigo",
            ],
          },
          {
            type: "callout",
            title: "COBERTURA vs DISSIMULAÇÃO",
            body: "Um arbusto esconde mas não para projétil. Um muro de tijolo para projétil mas não FPV com carga anticarro. Cobertura é específica para a ameaça: avaliar sempre contra a arma esperada, não em abstrato.",
          },
        ],
      },
      {
        heading: "Ciclo de observação",
        blocks: [
          {
            type: "p",
            text: "O movimento alterna fases ativas e passivas. A fase passiva — halt, listen, observe — é onde a unidade reduz sua assinatura e lê o ambiente. Pular por pressa é um dos erros mais comuns de voluntários não treinados.",
          },
          {
            type: "ol",
            items: [
              "Halt: parar em cobertura, não no percurso",
              "Listen: 30-60 segundos de escuta total, sem fala, sem movimento",
              "Observe: setorização visual, cada militar observa arco atribuído",
              "Decide: o líder decide o próximo bound com base no que foi colhido",
              "Move: deslocamento rápido para a próxima cobertura",
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
              "Caminhar em grupo compacto porque 'se sente mais seguro'",
              "Cortar por campos abertos para economizar tempo",
              "Parar no percurso em vez de em cobertura lateral",
              "Continuar a se mover sob céu aberto sabendo estar observado",
              "Ritmo constante e previsível, que facilita o targeting inimigo",
              "Confiar na velocidade em vez da cobertura",
              "Ignorar a vertical: prédios, árvores, drones em altitude",
              "Falar durante as paradas de observação",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Nos fronts de Bakhmut, Avdiivka, Robotyne e hoje nas zonas de Kharkiv e Pokrovsk, a dispersão passou de norma teórica a condição de sobrevivência. Esquadras movendo-se como unidade compacta são detectadas por ISR persistente em minutos e engajadas por FPV ou artilharia na primeira hora. Esquadras movendo-se dispersas, brevemente, entre coberturas pré-identificadas, completam o deslocamento. Movimento não é corrida: é uma sequência de pausas inteligentes entre bounds curtos.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le mouvement tactique est la discipline par laquelle une unité se déplace sur le terrain en minimisant la probabilité d'être observée, engagée ou suivie par l'artillerie et les drones. Sur le front ukrainien, le mouvement est la variable qui sépare un groupe qui arrive intact de celui qui subit des pertes pendant la seule approche. Ce chapitre présente des principes doctrinaux — pas des procédures offensives d'assaut.",
    sections: [
      {
        heading: "Principes fondamentaux",
        blocks: [
          {
            type: "p",
            text: "Quatre principes régissent tout le mouvement d'infanterie légère : dispersion, exploitation du terrain, sécurité mutuelle, tempo contrôlé. La saturation FPV et ISR transforme toute concentration visible en cible. Chaque mètre parcouru doit être couvert de manière consciente.",
          },
          {
            type: "ul",
            items: [
              "Dispersion : intervalle entre soldats suffisant pour qu'une seule munition ne neutralise pas plus d'un homme",
              "Exploitation du terrain : utiliser ondulations, végétation, ombre, bâtiments pour rompre la ligne de vue",
              "Sécurité mutuelle : chaque élément a quelqu'un qui l'observe pendant qu'il se déplace",
              "Tempo contrôlé : alternance déplacement, halte, observation — jamais de déplacement continu sans écoute",
            ],
          },
        ],
      },
      {
        heading: "Formations de base",
        blocks: [
          {
            type: "p",
            text: "Les formations sont un langage visuel : elles communiquent au chef où est le risque et où est la puissance de feu. Aucune formation n'est universellement bonne ; le choix dépend du terrain, de la menace attendue et de la mission.",
          },
          {
            type: "table",
            headers: ["Formation", "Usage type", "Avantage", "Limite"],
            rows: [
              ["Colonne", "Déplacement rapide sur piste ou ligne de couvert", "Vitesse, contrôle, faible front", "Vulnérable au feu frontal et aux mines"],
              ["File", "Déplacement derrière un couvert linéaire (mur, fossé)", "Réduction maximale de la silhouette latérale", "Vulnérable au feu d'enfilade"],
              ["Coin", "Progression en terrain ouvert", "Feu sur 3 secteurs, large reconnaissance", "Emprise plus grande, signature visible"],
              ["Ligne", "Approche finale ou ratissage", "Puissance de feu frontale maximale", "Contrôle difficile, exposition maximale"],
              ["Diamant", "Sécurité à 360°, haltes, repos", "Couverture complète, adapté à la halte", "Lent en mouvement, emprise"],
            ],
          },
          {
            type: "p",
            text: "Les formations changent fluidement : un groupe passe de coin à file à colonne en quelques minutes selon le couvert disponible. Les transitions doivent être silencieuses et basées sur des signaux pré-convenus.",
          },
        ],
      },
      {
        heading: "Dispersion et menace FPV",
        blocks: [
          {
            type: "p",
            text: "L'intervalle entre soldats, historiquement fixé à 3-5 mètres pour l'infanterie légère, a grandi sur le front ukrainien. La logique est simple : un FPV avec charge antipersonnel affecte un rayon de quelques mètres ; la dispersion brise la capacité d'une seule munition à toucher plus d'un homme.",
          },
          {
            type: "ul",
            items: [
              "Intervalle minimum en zone de menace FPV : 8-15 mètres entre soldats",
              "Plus grand en terrain ouvert, réduit en couvert dense",
              "Ne jamais se concentrer pendant les haltes, échanges d'information, attente",
              "Penser à la verticale : un bâtiment multi-étages disperse aussi en hauteur",
              "Les équipes de secours ne courent pas ensemble vers un blessé — elles alternent",
            ],
          },
          {
            type: "warn",
            title: "LIMITES DU MANUEL",
            body: "Ce chapitre décrit des principes de mouvement et de dispersion. Les procédures d'assaut, de nettoyage de tranchée ou d'engagement en couvert proche sont hors du périmètre d'un manuel de référence : elles doivent être apprises en unité, avec des instructeurs qualifiés, et répétées en entraînement réel.",
          },
        ],
      },
      {
        heading: "Bounding overwatch — concept",
        blocks: [
          {
            type: "p",
            text: "Le bounding overwatch est le principe par lequel un élément se déplace pendant qu'un autre observe, prêt à fournir un feu de suppression. C'est un concept doctrinal, pas une procédure rigide : il s'applique au niveau team (deux fire teams d'un groupe), groupe (deux groupes d'une section), ou soldat isolé en espace réduit.",
          },
          {
            type: "ul",
            items: [
              "L'élément A se déplace vers une position couverte pré-identifiée",
              "L'élément B reste en observation, armes prêtes à couvrir A",
              "Quand A est en couvert et a balayé le secteur, A devient overwatch",
              "B se déplace vers la position suivante pendant que A couvre",
              "La longueur du bond dépend de la menace : court sous le feu, plus long en approche",
            ],
          },
          {
            type: "p",
            text: "La variante « successive bounds » fait passer A au-delà de B ; la « alternate bounds » fait avancer A jusqu'à la ligne de B puis B au-delà de A. Le choix dépend du couvert disponible et du tempo requis.",
          },
        ],
      },
      {
        heading: "Lecture du terrain",
        blocks: [
          {
            type: "p",
            text: "Le terrain dicte le mouvement. Avant de se déplacer, l'unité identifie lignes de vue, lignes de tir, lignes de couvert, obstacles, points clés et directions probables de menace. L'acronyme OCOKA (Observation, Cover and concealment, Obstacles, Key terrain, Avenues of approach) est un mnémonique OTAN standard.",
          },
          {
            type: "ul",
            items: [
              "Observation : d'où l'ennemi nous voit, d'où nous le voyons",
              "Cover and concealment : couvert (arrête les balles) et masque (cache à la vue)",
              "Obstacles : naturels (rivières, falaises) et artificiels (mines, barbelés)",
              "Key terrain : points (hauteur, carrefour, pont) dont la possession donne l'avantage",
              "Avenues of approach : voies d'approche utilisables par nous ou l'ennemi",
            ],
          },
          {
            type: "callout",
            title: "COUVERT vs MASQUE",
            body: "Un buisson masque mais n'arrête pas une balle. Un mur de briques arrête les balles mais pas un FPV avec charge anti-blindé. Le couvert est spécifique à la menace : toujours l'évaluer contre l'arme attendue, pas dans l'abstrait.",
          },
        ],
      },
      {
        heading: "Cycle d'observation",
        blocks: [
          {
            type: "p",
            text: "Le mouvement alterne phases actives et passives. La phase passive — halte, écoute, observation — est celle où l'unité réduit sa signature et lit l'environnement. La sauter par hâte est l'une des erreurs les plus fréquentes des volontaires non formés.",
          },
          {
            type: "ol",
            items: [
              "Halte : s'arrêter en couvert, pas sur l'itinéraire",
              "Écoute : 30-60 secondes d'écoute totale, pas de parole, pas de mouvement",
              "Observation : sectorisation visuelle, chaque soldat surveille un arc attribué",
              "Décision : le chef décide le prochain bond selon ce qui a été collecté",
              "Mouvement : déplacement rapide vers le couvert suivant",
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
              "Marcher en groupe compact parce qu'on « se sent plus en sécurité »",
              "Couper à travers champs ouverts pour gagner du temps",
              "S'arrêter sur l'itinéraire au lieu d'un couvert latéral",
              "Continuer à se déplacer sous ciel ouvert en sachant être observé",
              "Tempo constant et prévisible, facilitant le ciblage ennemi",
              "Compter sur la vitesse au lieu du couvert",
              "Ignorer la verticale : bâtiments, arbres, drones en altitude",
              "Parler pendant les haltes d'observation",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur les fronts de Bakhmout, Avdiïvka, Robotyne et aujourd'hui dans les zones de Kharkiv et Pokrovsk, la dispersion est passée de norme théorique à condition de survie. Les groupes se déplaçant en formation compacte sont détectés par l'ISR persistant en quelques minutes et engagés par FPV ou artillerie dans la première heure. Les groupes se déplaçant dispersés, brièvement, entre des couverts pré-identifiés, achèvent leur déplacement. Le mouvement n'est pas une course : c'est une séquence de pauses intelligentes entre des bonds courts.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
