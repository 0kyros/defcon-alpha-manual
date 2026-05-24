import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il combattimento a distanza ravvicinata (CQB — Close Quarters Battle) è la disciplina più rischiosa, più tecnicamente complessa e meno apprendibile da manuale di tutta la fanteria. Questo capitolo presenta soltanto principi e concetti — angoli, fatal funnel, comunicazione di squadra — necessari a comprenderne la logica. Le procedure di esecuzione (sgombero stanza, breach, dynamic entry) non sono descritte: si imparano in scuole specializzate, in unità, con repliche dal vivo e supervisione.",
    sections: [
      {
        heading: "Cos'è e cosa non è il CQB",
        blocks: [
          {
            type: "p",
            text: "CQB è il combattimento a distanza inferiore a 25 metri, tipicamente all'interno di edifici, trincee, tunnel o veicoli. È caratterizzato da identificazione del target rapidissima, fuoco amico potenziale costante, sovraccarico sensoriale e dipendenza dal lavoro di squadra. Non è un duello individuale: è coordinamento di squadra in cui la cattiva azione di uno solo distrugge l'efficacia di tutti.",
          },
          {
            type: "warn",
            title: "LIMITE FONDAMENTALE",
            body: "Nessuno impara CQB da un libro o da un manuale online. Le procedure richiedono centinaia di ore di addestramento dal vivo, repliche in shoothouse, supervisione di istruttori esperti. Questo capitolo è di sola coscienza: aiuta a riconoscere ciò che si è imparato in unità, non sostituisce l'addestramento.",
          },
        ],
      },
      {
        heading: "Il concetto di angoli",
        blocks: [
          {
            type: "p",
            text: "In CQB ogni spazio è descritto in termini di angoli: aree non viste da una data posizione fino al movimento successivo. Il principio fondamentale è 'pieing the angle' — esporre un angolo gradualmente piuttosto che tutto in una volta. Più ampio l'angolo non visto, più probabile è la presenza del nemico.",
          },
          {
            type: "ul",
            items: [
              "Hard corner: angolo dietro cui il nemico è completamente nascosto, scoperto solo dal movimento",
              "Limited penetration: esporre il proprio settore minimo, vedere il massimo dell'angolo nemico",
              "Slicing the pie: muoversi lentamente lungo l'arco esterno dell'angolo, scoprire una fetta alla volta",
              "Quick peek: esposizione minima e ritiro — informazione, non ingaggio",
              "Mirror / camera: in unità avanzate, strumenti per vedere oltre l'angolo senza esporsi",
            ],
          },
        ],
      },
      {
        heading: "Il concetto di fatal funnel",
        blocks: [
          {
            type: "p",
            text: "Il fatal funnel — imbuto fatale — è il termine tecnico per ogni soglia: porta, finestra, varco, accesso al tunnel, ingresso del bunker. È il punto in cui chi entra è massimamente esposto e chi è dentro ha massima vantaggio di copertura. Attraversare un fatal funnel è una azione che genera vulnerabilità immediata.",
          },
          {
            type: "ul",
            items: [
              "Il fatal funnel non si attraversa lentamente: o si attraversa rapidamente, o non si attraversa",
              "Prima del fatal funnel: massima informazione possibile sull'altro lato",
              "Durante il fatal funnel: minima esposizione temporale",
              "Dopo il fatal funnel: ricerca immediata di copertura, mai fermarsi sulla soglia",
              "Mai due persone simultaneamente nel fatal funnel: una passa, l'altra segue",
            ],
          },
          {
            type: "callout",
            title: "FATAL FUNNEL — PRINCIPIO",
            body: "Il fatal funnel è il singolo concetto CQB più importante da apprendere mentalmente prima di entrare in addestramento pratico. Riconoscerlo a vista — qui è un fatal funnel — è la base per non essere ucciso durante le prime esposizioni reali. Quando in dubbio se uno spazio sia un fatal funnel, trattarlo come tale.",
          },
        ],
      },
      {
        heading: "Comunicazione di squadra",
        blocks: [
          {
            type: "p",
            text: "In CQB la comunicazione è il principale strumento di coordinamento e prevenzione del fuoco amico. Le parole sono brevissime, codificate, ripetute. Non c'è spazio per ambiguità, e ogni squadra ha il proprio set di calls — chi entra in unità apprende il set della unità ospitante, non lo importa da altrove.",
          },
          {
            type: "ul",
            items: [
              "Annunciare la propria intenzione prima dell'azione (es. 'MOVING', 'GOING LEFT')",
              "Annunciare lo stato corrente (es. 'STACK READY', 'CLEAR', 'CONTACT FRONT')",
              "Acknowledge ogni chiamata: silenzio è dissenso o incomprensione",
              "Brevità assoluta: una parola di una sillaba se possibile",
              "Mai voci sovrapposte: una persona parla per volta, in ordine di anzianità di chiamata",
              "Linguaggio comune nella squadra: il set di calls è la SOP, non la creatività individuale",
            ],
          },
        ],
      },
      {
        heading: "Stack e ruoli",
        blocks: [
          {
            type: "p",
            text: "Lo 'stack' è la formazione di squadra immediatamente prima di un fatal funnel. Ogni posizione nello stack ha ruolo, settore di responsabilità e azione predefinita. Capire il proprio ruolo dentro lo stack è il primo passo dell'apprendimento CQB.",
          },
          {
            type: "ul",
            items: [
              "Stack leader (#1): controllo della direzione, segnala il via",
              "#2: segue il leader, copre il settore opposto",
              "#3: copre i settori non coperti da #1 e #2",
              "#4 (tail): protegge la retroguardia, gestisce rinforzi",
              "Ogni numero conosce settori a destra/sinistra/alto/basso del proprio target di responsabilità",
            ],
          },
          {
            type: "p",
            text: "I numeri e i settori sono SOP di unità: una squadra di SOF italiana, una di SBS britannica, una di SSO ucraina hanno set parzialmente diversi. Imparare quello dell'unità in cui si opera, non importare il proprio.",
          },
        ],
      },
      {
        heading: "Prevenzione del fuoco amico",
        blocks: [
          {
            type: "p",
            text: "Il fuoco amico in CQB è una delle prime cause di perdite non da nemico. Spazi piccoli, sovrapposizione di archi di tiro, identificazione difficile sotto stress generano errori. La prevenzione è multilivello: SOP di stack, comunicazione, identificazione visiva, disciplina di muzzle.",
          },
          {
            type: "ul",
            items: [
              "Muzzle awareness: la canna mai sull'arco di un compagno",
              "Trigger discipline: dito fuori dal grilletto fino al PID e all'arco libero",
              "Identification: prima di sparare, conferma visiva del target come nemico",
              "Ordine di ingresso: lo stack mantiene l'ordine, niente sorpassi",
              "Color/marker: in unità multinazionali, marker IR o colori per identificazione veloce",
              "Last man clear: dopo l'azione, dichiarare il proprio ingresso prima di entrare in stanza già occupata",
            ],
          },
        ],
      },
      {
        heading: "Stress e cognizione",
        blocks: [
          {
            type: "p",
            text: "Il CQB è cognitivamente sovraccarico: identificazione, decisione e azione in frazioni di secondo, sotto rumore, fumo, sangue, urla. La performance cognitiva sotto stress decade in modo non lineare: chi non è abituato perde il 70-80% delle proprie capacità in pochi secondi. L'addestramento ripetuto è il solo modo di mantenere prestazione.",
          },
          {
            type: "ul",
            items: [
              "Respiro tattico (4-4-4-4) prima dell'ingresso per riportare il battito",
              "Visione panoramica: niente tunnel vision, scanning attivo",
              "Ridurre il carico decisionale con SOP: meno decisioni in tempo reale = più velocità",
              "Aspettarsi l'imprevisto: civili, ostaggi, configurazioni atipiche delle stanze",
              "Pause mentali quando possibile: dopo ogni stanza, reset cognitivo di 1-2 secondi",
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
              "Aspettarsi che il CQB si impari guardando video o leggendo libri",
              "Improvvisare segnali e calls invece di usare la SOP della unità",
              "Entrare in fatal funnel senza preparazione mentale e fisica",
              "Sparare senza PID positivo perché 'c'è movimento'",
              "Disposizione di stack improvvisata senza chiarire ruoli",
              "Comunicazione lunga e dettagliata in spazio dove la brevità è critica",
              "Ignorare la verticale (sopra/sotto) nelle stanze a più piani",
              "Trascurare la disciplina della canna in spazio ristretto",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte ucraino il CQB è cambiato rispetto al CQB delle scuole NATO post-2001: include FPV che entrano in stanza, drone visibili dall'esterno, EW che fa cadere comunicazioni, e ambienti urbani parzialmente collassati. Le unità ucraine che operano in città — HUR, SSO, brigate selezionate — adattano costantemente le SOP. Il volontario internazionale che entra in CQB lo fa solo dopo aver superato la valutazione interna della unità ospitante. Chi non l'ha superata non ha posto in stack: la sua presenza è un rischio per i compagni. Questo non è una opinione: è la posizione esplicita delle unità ucraine che hanno ricevuto e ricevono volontari internazionali.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Close Quarters Battle (CQB) is the most dangerous, most technically complex and least book-learnable discipline in all of infantry. This chapter presents only principles and concepts — angles, fatal funnel, team communication — necessary to understand its logic. Execution procedures (room-clearing, breach, dynamic entry) are not described: they are learned in specialised schools, in units, with live rehearsals and supervision.",
    sections: [
      {
        heading: "What CQB is and is not",
        blocks: [
          {
            type: "p",
            text: "CQB is combat at distance under 25 metres, typically inside buildings, trenches, tunnels or vehicles. It is characterised by very rapid target identification, constant potential for friendly fire, sensory overload, and dependence on team work. It is not an individual duel: it is squad coordination in which the bad action of a single member destroys the effectiveness of all.",
          },
          {
            type: "warn",
            title: "FUNDAMENTAL LIMIT",
            body: "Nobody learns CQB from a book or online manual. Procedures require hundreds of hours of live training, shoothouse rehearsals, supervision by experienced instructors. This chapter is awareness-only: it helps recognise what you have learned in your unit, it does not replace training.",
          },
        ],
      },
      {
        heading: "The concept of angles",
        blocks: [
          {
            type: "p",
            text: "In CQB every space is described in terms of angles: areas unseen from a given position until the next movement. The fundamental principle is 'pieing the angle' — exposing an angle gradually rather than all at once. The wider the unseen angle, the more probable the enemy presence.",
          },
          {
            type: "ul",
            items: [
              "Hard corner: the angle behind which the enemy is fully hidden, exposed only by movement",
              "Limited penetration: expose minimum of own sector, see maximum of enemy angle",
              "Slicing the pie: move slowly along the outer arc of the angle, expose one slice at a time",
              "Quick peek: minimum exposure and withdrawal — information, not engagement",
              "Mirror / camera: in advanced units, tools to see past the angle without exposure",
            ],
          },
        ],
      },
      {
        heading: "The fatal-funnel concept",
        blocks: [
          {
            type: "p",
            text: "The fatal funnel is the technical term for any threshold: door, window, opening, tunnel access, bunker entry. It is the point at which the entrant is maximally exposed and the defender has maximum cover advantage. Crossing a fatal funnel is an action that generates immediate vulnerability.",
          },
          {
            type: "ul",
            items: [
              "The fatal funnel is not crossed slowly: either crossed quickly, or not crossed",
              "Before the fatal funnel: maximum information possible on the other side",
              "During the fatal funnel: minimum time exposure",
              "After the fatal funnel: immediate cover search, never stop on the threshold",
              "Never two people in the fatal funnel simultaneously: one crosses, the other follows",
            ],
          },
          {
            type: "callout",
            title: "FATAL FUNNEL — PRINCIPLE",
            body: "The fatal funnel is the single most important CQB concept to learn mentally before entering practical training. Recognising it by sight — here is a fatal funnel — is the basis for not being killed during the first real exposures. When in doubt whether a space is a fatal funnel, treat it as one.",
          },
        ],
      },
      {
        heading: "Team communication",
        blocks: [
          {
            type: "p",
            text: "In CQB communication is the main tool for coordination and friendly-fire prevention. Words are extremely short, codified, repeated. There is no room for ambiguity, and every team has its own set of calls — entering a unit you learn the host unit's set, you do not import yours.",
          },
          {
            type: "ul",
            items: [
              "Announce intent before action (e.g. 'MOVING', 'GOING LEFT')",
              "Announce current status (e.g. 'STACK READY', 'CLEAR', 'CONTACT FRONT')",
              "Acknowledge every call: silence is dissent or misunderstanding",
              "Absolute brevity: one-syllable word if possible",
              "Never overlapping voices: one person talks at a time, in seniority order",
              "Shared language in the squad: the calls set is SOP, not individual creativity",
            ],
          },
        ],
      },
      {
        heading: "Stack and roles",
        blocks: [
          {
            type: "p",
            text: "The 'stack' is the squad formation immediately before a fatal funnel. Each position in the stack has a role, a sector of responsibility and a predefined action. Understanding your role in the stack is the first step in learning CQB.",
          },
          {
            type: "ul",
            items: [
              "Stack leader (#1): direction control, signals go",
              "#2: follows the leader, covers the opposite sector",
              "#3: covers sectors not covered by #1 and #2",
              "#4 (tail): protects the rear, manages reinforcements",
              "Each number knows the right/left/up/down sectors of their responsibility target",
            ],
          },
          {
            type: "p",
            text: "Numbers and sectors are unit SOPs: an Italian SOF squad, a British SBS one, a Ukrainian SSO one have partially different sets. Learn the one of the unit you operate in, do not import your own.",
          },
        ],
      },
      {
        heading: "Friendly-fire prevention",
        blocks: [
          {
            type: "p",
            text: "Friendly fire in CQB is one of the first causes of non-enemy losses. Small spaces, overlap of arcs of fire, hard ID under stress all generate errors. Prevention is multilevel: stack SOPs, communication, visual identification, muzzle discipline.",
          },
          {
            type: "ul",
            items: [
              "Muzzle awareness: the muzzle never crosses a teammate's arc",
              "Trigger discipline: finger off the trigger until PID and free arc",
              "Identification: before firing, visual confirmation of target as enemy",
              "Order of entry: the stack keeps the order, no overtaking",
              "Color/marker: in multinational units, IR markers or colours for fast ID",
              "Last man clear: after the action, declare your entry before entering an already-occupied room",
            ],
          },
        ],
      },
      {
        heading: "Stress and cognition",
        blocks: [
          {
            type: "p",
            text: "CQB is cognitively overloaded: identification, decision and action in fractions of a second, under noise, smoke, blood, shouts. Cognitive performance under stress decays non-linearly: the unaccustomed lose 70-80% of their capacities within seconds. Repeated training is the only way to maintain performance.",
          },
          {
            type: "ul",
            items: [
              "Tactical breathing (4-4-4-4) before entry to bring the heart rate down",
              "Panoramic vision: no tunnel vision, active scanning",
              "Reduce decision load with SOPs: fewer real-time decisions = more speed",
              "Expect the unexpected: civilians, hostages, atypical room layouts",
              "Mental pauses when possible: after every room, 1-2-second cognitive reset",
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
              "Expecting CQB to be learned from watching videos or reading books",
              "Improvising signals and calls instead of using the unit's SOP",
              "Entering a fatal funnel without mental and physical preparation",
              "Firing without positive PID because 'there is movement'",
              "Improvised stack disposition without clarifying roles",
              "Long detailed communication in a space where brevity is critical",
              "Ignoring the vertical (above/below) in multi-floor rooms",
              "Neglecting muzzle discipline in tight space",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Ukrainian front, CQB has changed compared to the post-2001 NATO school CQB: it includes FPVs entering rooms, drones visible from outside, EW dropping communications, and partially collapsed urban environments. Ukrainian units operating in cities — HUR, SSO, selected brigades — constantly adapt their SOPs. The international volunteer entering CQB does so only after passing the host unit's internal evaluation. Those who have not passed it have no place in a stack: their presence is a risk to their teammates. This is not opinion: it is the explicit position of Ukrainian units that have received and receive international volunteers.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O combate a curta distância (CQB — Close Quarters Battle) é a disciplina mais perigosa, mais tecnicamente complexa e menos aprendível por manual de toda a infantaria. Este capítulo apresenta apenas princípios e conceitos — ângulos, fatal funnel, comunicação de equipe — necessários a entender sua lógica. Os procedimentos de execução (varredura de cômodo, breach, entrada dinâmica) não são descritos: aprendem-se em escolas especializadas, em unidade, com ensaios reais e supervisão.",
    sections: [
      {
        heading: "O que CQB é e o que não é",
        blocks: [
          {
            type: "p",
            text: "CQB é combate a distância inferior a 25 metros, tipicamente dentro de edifícios, trincheiras, túneis ou veículos. Caracteriza-se por identificação rápida de alvo, potencial constante de fogo amigo, sobrecarga sensorial e dependência do trabalho em equipe. Não é duelo individual: é coordenação de esquadra onde a ação ruim de um destrói a eficácia de todos.",
          },
          {
            type: "warn",
            title: "LIMITE FUNDAMENTAL",
            body: "Ninguém aprende CQB por livro ou manual online. Os procedimentos exigem centenas de horas de treinamento real, ensaios em shoothouse, supervisão de instrutores experientes. Este capítulo é só consciência: ajuda a reconhecer o que se aprendeu em unidade, não substitui o treinamento.",
          },
        ],
      },
      {
        heading: "O conceito de ângulos",
        blocks: [
          {
            type: "p",
            text: "Em CQB cada espaço é descrito em termos de ângulos: áreas não vistas de uma dada posição até o movimento seguinte. O princípio fundamental é 'pieing the angle' — expor um ângulo gradualmente em vez de todo de uma vez. Quanto maior o ângulo não visto, mais provável a presença do inimigo.",
          },
          {
            type: "ul",
            items: [
              "Hard corner: ângulo atrás do qual o inimigo está totalmente oculto, descoberto só pelo movimento",
              "Limited penetration: expor mínimo do próprio setor, ver máximo do ângulo inimigo",
              "Slicing the pie: mover-se lentamente pelo arco externo do ângulo, descobrir uma fatia por vez",
              "Quick peek: exposição mínima e recuo — informação, não engajamento",
              "Espelho / câmera: em unidades avançadas, ferramentas para ver além do ângulo sem expor-se",
            ],
          },
        ],
      },
      {
        heading: "O conceito de fatal funnel",
        blocks: [
          {
            type: "p",
            text: "O fatal funnel — funil fatal — é o termo técnico para qualquer soleira: porta, janela, abertura, acesso a túnel, entrada de bunker. É o ponto em que quem entra está maximamente exposto e quem está dentro tem máxima vantagem de cobertura. Atravessar um fatal funnel é ação que gera vulnerabilidade imediata.",
          },
          {
            type: "ul",
            items: [
              "O fatal funnel não se atravessa devagar: ou se atravessa rápido, ou não se atravessa",
              "Antes do fatal funnel: máxima informação possível do outro lado",
              "Durante o fatal funnel: mínima exposição temporal",
              "Depois do fatal funnel: busca imediata de cobertura, nunca parar na soleira",
              "Nunca duas pessoas no fatal funnel simultaneamente: uma passa, outra segue",
            ],
          },
          {
            type: "callout",
            title: "FATAL FUNNEL — PRINCÍPIO",
            body: "O fatal funnel é o conceito único mais importante de CQB a aprender mentalmente antes do treinamento prático. Reconhecê-lo de vista — aqui há um fatal funnel — é a base para não ser morto nas primeiras exposições reais. Em dúvida se um espaço é fatal funnel, tratá-lo como tal.",
          },
        ],
      },
      {
        heading: "Comunicação de equipe",
        blocks: [
          {
            type: "p",
            text: "Em CQB a comunicação é o principal instrumento de coordenação e prevenção de fogo amigo. As palavras são curtíssimas, codificadas, repetidas. Não há espaço para ambiguidade, e cada equipe tem seu conjunto de calls — ao entrar em unidade aprende-se o set da unidade hospedeira, não se importa o próprio.",
          },
          {
            type: "ul",
            items: [
              "Anunciar a intenção antes da ação (ex. 'MOVING', 'GOING LEFT')",
              "Anunciar o estado atual (ex. 'STACK READY', 'CLEAR', 'CONTACT FRONT')",
              "Acknowledge cada chamada: silêncio é discordância ou incompreensão",
              "Brevidade absoluta: palavra de uma sílaba se possível",
              "Nunca vozes sobrepostas: uma pessoa fala por vez, em ordem de senioridade",
              "Linguagem comum no esquadrão: o set de calls é SOP, não criatividade individual",
            ],
          },
        ],
      },
      {
        heading: "Stack e papéis",
        blocks: [
          {
            type: "p",
            text: "O 'stack' é a formação de esquadrão imediatamente antes de um fatal funnel. Cada posição no stack tem papel, setor de responsabilidade e ação predefinida. Entender o próprio papel no stack é o primeiro passo no aprendizado de CQB.",
          },
          {
            type: "ul",
            items: [
              "Stack leader (#1): controle da direção, sinaliza o go",
              "#2: segue o líder, cobre o setor oposto",
              "#3: cobre setores não cobertos por #1 e #2",
              "#4 (tail): protege a retaguarda, gerencia reforços",
              "Cada número conhece setores direita/esquerda/alto/baixo do próprio target de responsabilidade",
            ],
          },
          {
            type: "p",
            text: "Números e setores são SOP de unidade: uma esquadra SOF italiana, uma SBS britânica, uma SSO ucraniana têm sets parcialmente diferentes. Aprender o da unidade em que se opera, não importar o próprio.",
          },
        ],
      },
      {
        heading: "Prevenção de fogo amigo",
        blocks: [
          {
            type: "p",
            text: "O fogo amigo em CQB é uma das principais causas de baixas não-inimigas. Espaços pequenos, sobreposição de arcos de tiro, ID difícil sob estresse geram erros. A prevenção é multinível: SOPs de stack, comunicação, ID visual, disciplina de muzzle.",
          },
          {
            type: "ul",
            items: [
              "Muzzle awareness: a boca do cano nunca cruza o arco de um companheiro",
              "Disciplina de gatilho: dedo fora do gatilho até PID e arco livre",
              "Identificação: antes de atirar, confirmação visual do alvo como inimigo",
              "Ordem de entrada: o stack mantém a ordem, sem ultrapassagens",
              "Cor/marker: em unidades multinacionais, marcadores IR ou cores para ID rápida",
              "Last man clear: após a ação, declarar a entrada antes de entrar em sala já ocupada",
            ],
          },
        ],
      },
      {
        heading: "Estresse e cognição",
        blocks: [
          {
            type: "p",
            text: "O CQB é cognitivamente sobrecarregado: identificação, decisão e ação em frações de segundo, sob ruído, fumaça, sangue, gritos. A performance cognitiva sob estresse cai de forma não linear: quem não está acostumado perde 70-80% das capacidades em segundos. O treinamento repetido é o único modo de manter a performance.",
          },
          {
            type: "ul",
            items: [
              "Respiração tática (4-4-4-4) antes da entrada para baixar a frequência cardíaca",
              "Visão panorâmica: sem tunnel vision, scanning ativo",
              "Reduzir carga decisional com SOPs: menos decisões em tempo real = mais velocidade",
              "Esperar o inesperado: civis, reféns, layouts atípicos de cômodos",
              "Pausas mentais quando possível: após cada cômodo, reset cognitivo de 1-2 segundos",
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
              "Esperar aprender CQB vendo vídeo ou lendo livro",
              "Improvisar sinais e calls em vez de usar a SOP da unidade",
              "Entrar em fatal funnel sem preparação mental e física",
              "Atirar sem PID positivo porque 'há movimento'",
              "Stack improvisado sem definir papéis",
              "Comunicação longa e detalhada em espaço onde brevidade é crítica",
              "Ignorar a vertical (acima/abaixo) em cômodos de múltiplos pavimentos",
              "Negligenciar disciplina de cano em espaço apertado",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front ucraniano o CQB mudou em relação ao CQB de escolas OTAN pós-2001: inclui FPV entrando em cômodos, drones visíveis de fora, EW derrubando comms e ambientes urbanos parcialmente colapsados. As unidades ucranianas que operam em cidade — HUR, SSO, brigadas selecionadas — adaptam constantemente as SOPs. O voluntário internacional que entra em CQB só o faz após passar pela avaliação interna da unidade hospedeira. Quem não passou não tem lugar no stack: sua presença é risco para os companheiros. Isso não é opinião: é a posição explícita das unidades ucranianas que receberam e recebem voluntários internacionais.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le combat à courte distance (CQB — Close Quarters Battle) est la discipline la plus dangereuse, la plus techniquement complexe et la moins apprenable par manuel de toute l'infanterie. Ce chapitre ne présente que des principes et concepts — angles, fatal funnel, communication d'équipe — nécessaires pour en comprendre la logique. Les procédures d'exécution (nettoyage de pièce, breach, entrée dynamique) ne sont pas décrites : elles s'apprennent en écoles spécialisées, en unité, avec répétitions réelles et supervision.",
    sections: [
      {
        heading: "Ce qu'est et n'est pas le CQB",
        blocks: [
          {
            type: "p",
            text: "Le CQB est le combat à distance inférieure à 25 mètres, typiquement à l'intérieur de bâtiments, tranchées, tunnels ou véhicules. Il se caractérise par une identification de cible très rapide, un potentiel constant de tir fratricide, une surcharge sensorielle et une dépendance au travail d'équipe. Ce n'est pas un duel individuel : c'est une coordination de groupe où la mauvaise action d'un seul détruit l'efficacité de tous.",
          },
          {
            type: "warn",
            title: "LIMITE FONDAMENTALE",
            body: "Personne n'apprend le CQB dans un livre ou un manuel en ligne. Les procédures demandent des centaines d'heures d'entraînement réel, des répétitions en shoothouse, la supervision d'instructeurs expérimentés. Ce chapitre n'est que de la conscience : il aide à reconnaître ce que vous avez appris en unité, il ne remplace pas l'entraînement.",
          },
        ],
      },
      {
        heading: "Le concept d'angles",
        blocks: [
          {
            type: "p",
            text: "En CQB, chaque espace est décrit en termes d'angles : zones non vues depuis une position donnée jusqu'au mouvement suivant. Le principe fondamental est « pieing the angle » — exposer un angle progressivement plutôt que tout d'un coup. Plus l'angle non vu est large, plus la présence ennemie est probable.",
          },
          {
            type: "ul",
            items: [
              "Hard corner : angle derrière lequel l'ennemi est totalement caché, découvert seulement par le mouvement",
              "Limited penetration : exposer le minimum de son secteur, voir le maximum de l'angle ennemi",
              "Slicing the pie : se déplacer lentement le long de l'arc extérieur de l'angle, découvrir une part à la fois",
              "Quick peek : exposition minimale et retrait — information, pas engagement",
              "Miroir / caméra : dans des unités avancées, outils pour voir derrière l'angle sans s'exposer",
            ],
          },
        ],
      },
      {
        heading: "Le concept de fatal funnel",
        blocks: [
          {
            type: "p",
            text: "Le fatal funnel — entonnoir fatal — est le terme technique pour tout seuil : porte, fenêtre, ouverture, accès de tunnel, entrée de bunker. C'est le point où celui qui entre est maximalement exposé et où celui qui est dedans a l'avantage maximal de couvert. Traverser un fatal funnel est une action qui génère une vulnérabilité immédiate.",
          },
          {
            type: "ul",
            items: [
              "Le fatal funnel ne se traverse pas lentement : soit on le traverse vite, soit on ne le traverse pas",
              "Avant le fatal funnel : maximum d'information possible de l'autre côté",
              "Pendant le fatal funnel : exposition temporelle minimale",
              "Après le fatal funnel : recherche immédiate de couvert, jamais s'arrêter sur le seuil",
              "Jamais deux personnes simultanément dans le fatal funnel : une passe, l'autre suit",
            ],
          },
          {
            type: "callout",
            title: "FATAL FUNNEL — PRINCIPE",
            body: "Le fatal funnel est le concept CQB unique le plus important à apprendre mentalement avant l'entraînement pratique. Le reconnaître à vue — ici est un fatal funnel — est la base pour ne pas être tué pendant les premières expositions réelles. En cas de doute si un espace est un fatal funnel, le traiter comme tel.",
          },
        ],
      },
      {
        heading: "Communication d'équipe",
        blocks: [
          {
            type: "p",
            text: "En CQB la communication est le principal outil de coordination et de prévention du tir fratricide. Les mots sont extrêmement courts, codifiés, répétés. Aucune place pour l'ambiguïté, et chaque équipe a son propre jeu de calls — en entrant en unité on apprend le jeu de l'unité hôte, on n'importe pas le sien.",
          },
          {
            type: "ul",
            items: [
              "Annoncer l'intention avant l'action (ex. « MOVING », « GOING LEFT »)",
              "Annoncer l'état courant (ex. « STACK READY », « CLEAR », « CONTACT FRONT »)",
              "Acknowledge chaque appel : le silence est dissension ou incompréhension",
              "Brièveté absolue : mot d'une syllabe si possible",
              "Jamais voix superposées : une personne parle à la fois, par ordre d'ancienneté d'appel",
              "Langage commun à l'équipe : le jeu de calls est SOP, pas créativité individuelle",
            ],
          },
        ],
      },
      {
        heading: "Stack et rôles",
        blocks: [
          {
            type: "p",
            text: "Le « stack » est la formation de l'équipe juste avant un fatal funnel. Chaque position dans le stack a un rôle, un secteur de responsabilité et une action prédéfinie. Comprendre son rôle dans le stack est le premier pas de l'apprentissage CQB.",
          },
          {
            type: "ul",
            items: [
              "Stack leader (#1) : contrôle de la direction, signale le top",
              "#2 : suit le leader, couvre le secteur opposé",
              "#3 : couvre les secteurs non couverts par #1 et #2",
              "#4 (tail) : protège l'arrière, gère les renforts",
              "Chaque numéro connaît les secteurs droite/gauche/haut/bas de sa cible de responsabilité",
            ],
          },
          {
            type: "p",
            text: "Numéros et secteurs sont des SOP d'unité : un groupe SOF italien, un SBS britannique, un SSO ukrainien ont des jeux partiellement différents. Apprendre celui de l'unité dans laquelle on opère, ne pas importer le sien.",
          },
        ],
      },
      {
        heading: "Prévention du tir fratricide",
        blocks: [
          {
            type: "p",
            text: "Le tir fratricide en CQB est l'une des premières causes de pertes non-ennemies. Petits espaces, recoupement d'arcs de tir, ID difficile sous stress engendrent des erreurs. La prévention est multiniveau : SOP de stack, communication, identification visuelle, discipline du canon.",
          },
          {
            type: "ul",
            items: [
              "Muzzle awareness : le canon ne croise jamais l'arc d'un coéquipier",
              "Discipline de détente : doigt hors de la détente jusqu'au PID et à l'arc libre",
              "Identification : avant de tirer, confirmation visuelle de la cible comme ennemie",
              "Ordre d'entrée : le stack garde l'ordre, pas de dépassement",
              "Couleur/marqueur : en unité multinationale, marqueurs IR ou couleurs pour ID rapide",
              "Last man clear : après l'action, déclarer son entrée avant d'entrer dans une pièce déjà occupée",
            ],
          },
        ],
      },
      {
        heading: "Stress et cognition",
        blocks: [
          {
            type: "p",
            text: "Le CQB est cognitivement surchargé : identification, décision et action en fractions de seconde, sous bruit, fumée, sang, cris. La performance cognitive sous stress décroît de manière non linéaire : ceux qui n'y sont pas habitués perdent 70-80 % de leurs capacités en quelques secondes. L'entraînement répété est le seul moyen de maintenir la performance.",
          },
          {
            type: "ul",
            items: [
              "Respiration tactique (4-4-4-4) avant l'entrée pour baisser le rythme cardiaque",
              "Vision panoramique : pas de tunnel vision, scanning actif",
              "Réduire la charge décisionnelle par les SOP : moins de décisions temps réel = plus de vitesse",
              "Attendre l'inattendu : civils, otages, configurations atypiques de pièces",
              "Pauses mentales quand possible : après chaque pièce, reset cognitif de 1-2 secondes",
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
              "Attendre apprendre le CQB en regardant des vidéos ou en lisant des livres",
              "Improviser signaux et calls au lieu d'utiliser la SOP de l'unité",
              "Entrer dans un fatal funnel sans préparation mentale et physique",
              "Tirer sans PID positif parce qu'« il y a du mouvement »",
              "Disposition de stack improvisée sans clarifier les rôles",
              "Communication longue et détaillée dans un espace où la brièveté est critique",
              "Ignorer la verticale (haut/bas) dans des pièces à plusieurs niveaux",
              "Négliger la discipline du canon en espace restreint",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front ukrainien, le CQB a changé par rapport à celui des écoles OTAN post-2001 : il inclut des FPV entrant dans les pièces, des drones visibles depuis l'extérieur, une GE qui fait tomber les comms et des environnements urbains partiellement effondrés. Les unités ukrainiennes opérant en ville — HUR, SSO, brigades sélectionnées — adaptent constamment leurs SOP. Le volontaire international qui entre en CQB ne le fait qu'après avoir passé l'évaluation interne de l'unité hôte. Celui qui ne l'a pas passée n'a pas sa place dans un stack : sa présence est un risque pour ses coéquipiers. Ce n'est pas une opinion : c'est la position explicite des unités ukrainiennes qui ont reçu et reçoivent des volontaires internationaux.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
