import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La coesione di team non è amicizia: è la condizione operativa per cui ciascun membro può anticipare le azioni degli altri sotto stress. Si costruisce con prevedibilità, competenza condivisa e fiducia funzionale, non con cameratismo emotivo. Una squadra coesa è una squadra che si muove come un organismo unico, non un gruppo di amici.",
    sections: [
      {
        heading: "Fondamenti della coesione",
        blocks: [
          {
            type: "p",
            text: "Tre dimensioni della coesione operativa: orizzontale (fra pari), verticale (con il leader), e di compito (verso la missione). Le tre dimensioni sono indipendenti. Un team può avere ottima coesione orizzontale e pessima verticale, oppure ottima coesione di compito e pessima orizzontale. La coesione che conta in combattimento è quella di compito.",
          },
          {
            type: "ul",
            items: [
              "Coesione orizzontale: i pari si conoscono, si fidano, si proteggono",
              "Coesione verticale: rispetto funzionale del leader, accettazione delle decisioni",
              "Coesione di compito: tutti sanno la missione e ne condividono il senso",
              "Le dimensioni rafforzano ma non sostituiscono i propri elementi",
            ],
          },
        ],
      },
      {
        heading: "Fiducia funzionale",
        blocks: [
          {
            type: "p",
            text: "La fiducia funzionale è specifica e verificabile: si fida del compagno per il compito X, basandosi su evidenza osservata. Non si fida 'come persona' in astratto. Si costruisce con prove ripetute in addestramento e poi in operazione. Si distrugge con poche violazioni gravi: comportamento imprevedibile sotto fuoco, abbandono, menzogna sui fatti operativi.",
          },
          {
            type: "table",
            headers: ["Comportamento", "Effetto sulla fiducia", "Tempo di recupero"],
            rows: [
              ["Mantenere il proprio settore di osservazione", "Costruisce", "Cumulativo"],
              ["Comunicare onestamente la propria condizione fisica", "Costruisce", "Immediato"],
              ["Coprire un compagno sotto fuoco senza esitare", "Costruisce", "Cumulativo"],
              ["Nascondere un errore tecnico", "Distrugge", "Settimane"],
              ["Lasciare la posizione senza comunicare", "Distrugge", "Mesi"],
              ["Mentire al debrief", "Distrugge", "Irrecuperabile"],
            ],
          },
        ],
      },
      {
        heading: "Prevedibilità individuale",
        blocks: [
          {
            type: "p",
            text: "Ogni membro di un team coeso è prevedibile dentro un perimetro definito. Il team leader sa che il proprio MG userà burst da 5 colpi, terrà il settore destro, comunicherà rosso ammo a 25%. Il medico sa che il primo intervento sarà MARCH e che il compagno parlerà per identificarsi. La prevedibilità non è rigidità: è linguaggio condiviso.",
          },
          {
            type: "ol",
            items: [
              "Standardizzare le procedure interne (segnali manuali, brevity codes, react-to-contact)",
              "Esercitare le procedure fino a quando si eseguono senza pensarci",
              "Annotare le variazioni individuali (chi è lento al recupero, chi è veloce a leggere mappa)",
              "Aggiornare il modello del compagno quando cambia",
            ],
          },
        ],
      },
      {
        heading: "Gestione dei conflitti",
        blocks: [
          {
            type: "p",
            text: "I conflitti interni sono inevitabili in qualsiasi team che operi sotto stress per settimane. Non eliminarli, gestirli. Il principio operativo è la separazione fra dimensione tecnica e dimensione personale: la critica tecnica si fa subito, in pubblico se necessario, senza personalizzare; il conflitto personale si gestisce a parte, fuori operazione, con mediatore se serve.",
          },
          {
            type: "ul",
            items: [
              "Mai discussioni emotive sotto fuoco, in pattuglia, prima di operazione",
              "Critica tecnica: fatto + impatto + correzione, senza giudizi sulla persona",
              "Conflitto personale: faccia a faccia in luogo protetto, terzo presente se grave",
              "Escalation: se i pari non risolvono, lo squad leader decide; se non risolve, il PL",
              "Non tollerare faide silenziose — esplodono in operazione",
            ],
          },
          {
            type: "warn",
            title: "REGOLA DI FONDO",
            body: "Una grande regola: la critica tecnica davanti agli altri, l'apprezzamento personale in privato. Mai l'inverso. Mai distruggere un compagno pubblicamente per ragioni personali — la fiducia di tutto il team si rompe, non solo la sua.",
          },
        ],
      },
      {
        heading: "Integrazione dei nuovi arrivati",
        blocks: [
          {
            type: "p",
            text: "L'inserimento di un nuovo membro è il momento più fragile di un team coeso. Il nuovo non condivide ancora il modello degli altri e gli altri non condividono il suo modello. La fase di shakedown dura 2–4 settimane. Comprime questa fase con tre azioni: assegnare un buddy esperto, ridurre le responsabilità decisionali iniziali, esercitare le procedure standard in addestramento prima di esposizione operativa.",
          },
          {
            type: "ol",
            items: [
              "Briefing iniziale: cultura del team, regole non scritte, persone chiave",
              "Buddy assegnato: il nuovo opera con un veterano specifico nei primi 14 giorni",
              "Compiti progressivi: prima compiti tecnici limitati, poi piena partecipazione",
              "Inclusione sociale: pasti e decompressione insieme dal giorno 1",
              "Debrief settimanale con buddy: cosa funziona, cosa non funziona, ostacoli",
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
              "Confondere coesione operativa con socialità fuori servizio",
              "Tenere conflitti personali nascosti — esplodono al momento sbagliato",
              "Trattare il nuovo arrivato come outsider per troppo tempo (oltre 4 settimane)",
              "Punire la critica tecnica come fosse insubordinazione",
              "Permettere clique nazionali o linguistiche in team multinazionali",
              "Promuovere amici a posizioni che non possono coprire tecnicamente",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I team internazionali in Ucraina lavorano spesso con compagni di 5–8 nazionalità, lingue diverse, dottrine diverse, esperienza disomogenea. La coesione funzionante in queste condizioni è costruita su tre pilastri: brevity code condivisi (NATO standard), un secondo in cui la lingua operativa è una sola (inglese o ucraino), e un sistema di tag visivi sul kit per identificare ruoli sotto stress. La coesione fra culture diverse esiste, ma è interamente artificiale: deve essere progettata, non assunta.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Team cohesion is not friendship: it is the operational condition under which each member can anticipate the others' actions under stress. It is built with predictability, shared competence and functional trust, not emotional camaraderie. A cohesive squad moves as a single organism, not as a group of friends.",
    sections: [
      {
        heading: "Foundations of cohesion",
        blocks: [
          {
            type: "p",
            text: "Three dimensions of operational cohesion: horizontal (among peers), vertical (with the leader), and task (toward the mission). The three are independent. A team can have excellent horizontal and poor vertical cohesion, or excellent task and poor horizontal cohesion. The cohesion that matters in combat is task cohesion.",
          },
          {
            type: "ul",
            items: [
              "Horizontal: peers know, trust and protect each other",
              "Vertical: functional respect for the leader, acceptance of decisions",
              "Task: everyone knows the mission and shares its sense",
              "Dimensions reinforce but do not replace one another",
            ],
          },
        ],
      },
      {
        heading: "Functional trust",
        blocks: [
          {
            type: "p",
            text: "Functional trust is specific and verifiable: you trust the comrade for task X based on observed evidence. You do not trust them 'as a person' in the abstract. It is built with repeated proofs in training and then in operation. It is destroyed by a few serious violations: unpredictable behaviour under fire, abandonment, lying about operational facts.",
          },
          {
            type: "table",
            headers: ["Behaviour", "Effect on trust", "Recovery time"],
            rows: [
              ["Holding your observation sector", "Builds", "Cumulative"],
              ["Honestly communicating your physical state", "Builds", "Immediate"],
              ["Covering a comrade under fire without hesitation", "Builds", "Cumulative"],
              ["Hiding a technical mistake", "Destroys", "Weeks"],
              ["Leaving position without communicating", "Destroys", "Months"],
              ["Lying at debrief", "Destroys", "Unrecoverable"],
            ],
          },
        ],
      },
      {
        heading: "Individual predictability",
        blocks: [
          {
            type: "p",
            text: "Every member of a cohesive team is predictable within a defined perimeter. The team leader knows their MG will fire 5-round bursts, hold the right sector, call red ammo at 25%. The medic knows the first intervention will be MARCH and the comrade will speak to identify themselves. Predictability is not rigidity: it is shared language.",
          },
          {
            type: "ol",
            items: [
              "Standardise internal procedures (hand signals, brevity, react-to-contact)",
              "Rehearse procedures until they execute without thought",
              "Note individual variations (who is slow at recovery, who is fast on map)",
              "Update the model of the comrade when it changes",
            ],
          },
        ],
      },
      {
        heading: "Conflict management",
        blocks: [
          {
            type: "p",
            text: "Internal conflicts are inevitable in any team operating under stress for weeks. Do not eliminate, manage. The operational principle is separation between technical and personal: technical critique is immediate, in public if needed, without personalising; personal conflict is handled apart, off operations, with a mediator if needed.",
          },
          {
            type: "ul",
            items: [
              "No emotional arguments under fire, on patrol, before operations",
              "Technical critique: fact + impact + correction, no judgement on the person",
              "Personal conflict: face-to-face in protected location, third party if serious",
              "Escalation: if peers do not resolve, squad leader decides; if not, PL",
              "Do not tolerate silent feuds — they explode in operation",
            ],
          },
          {
            type: "warn",
            title: "FOUNDATIONAL RULE",
            body: "One golden rule: technical critique in front of others, personal appreciation in private. Never the reverse. Never publicly destroy a comrade for personal reasons — the whole team's trust breaks, not only theirs.",
          },
        ],
      },
      {
        heading: "Integrating newcomers",
        blocks: [
          {
            type: "p",
            text: "Inserting a new member is the most fragile moment of a cohesive team. The newcomer does not yet share the others' model and the others do not share theirs. The shakedown phase lasts 2–4 weeks. Compress this phase with three actions: assign an experienced buddy, reduce initial decision responsibility, rehearse standard procedures in training before operational exposure.",
          },
          {
            type: "ol",
            items: [
              "Initial briefing: team culture, unwritten rules, key people",
              "Assigned buddy: newcomer operates with a specific veteran for the first 14 days",
              "Progressive tasks: first limited technical tasks, then full participation",
              "Social inclusion: meals and decompression together from day 1",
              "Weekly debrief with buddy: what works, what does not, obstacles",
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
              "Confusing operational cohesion with off-duty sociability",
              "Keeping personal conflicts hidden — they explode at the wrong moment",
              "Treating the newcomer as outsider too long (beyond 4 weeks)",
              "Punishing technical critique as if it were insubordination",
              "Allowing national or language cliques in multinational teams",
              "Promoting friends into positions they cannot cover technically",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "International teams in Ukraine often work with 5–8 nationalities, different languages, different doctrines, heterogeneous experience. Cohesion that works in these conditions is built on three pillars: shared brevity codes (NATO standard), one operational language at a time (English or Ukrainian), and a visual tag system on kit to identify roles under stress. Cohesion between cultures exists, but is entirely artificial: it must be designed, not assumed.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Coesão de team não é amizade: é a condição operacional pela qual cada membro consegue antecipar as ações dos outros sob estresse. Constrói-se com previsibilidade, competência compartilhada e confiança funcional, não com camaradagem emocional. Uma esquadra coesa se move como um organismo único, não como grupo de amigos.",
    sections: [
      {
        heading: "Fundamentos da coesão",
        blocks: [
          {
            type: "p",
            text: "Três dimensões da coesão operacional: horizontal (entre pares), vertical (com o líder) e de tarefa (rumo à missão). As três são independentes. Um team pode ter ótima coesão horizontal e péssima vertical, ou ótima de tarefa e péssima horizontal. A coesão que importa em combate é a de tarefa.",
          },
          {
            type: "ul",
            items: [
              "Horizontal: os pares se conhecem, se confiam, se protegem",
              "Vertical: respeito funcional ao líder, aceitação das decisões",
              "Tarefa: todos conhecem a missão e compartilham o sentido",
              "As dimensões reforçam mas não substituem umas às outras",
            ],
          },
        ],
      },
      {
        heading: "Confiança funcional",
        blocks: [
          {
            type: "p",
            text: "Confiança funcional é específica e verificável: confia-se no companheiro para a tarefa X com base em evidência observada. Não se confia 'como pessoa' em abstrato. Constrói-se com provas repetidas em treino e em operação. Destrói-se com poucas violações graves: comportamento imprevisível sob fogo, abandono, mentir sobre fatos operacionais.",
          },
          {
            type: "table",
            headers: ["Comportamento", "Efeito na confiança", "Tempo de recuperação"],
            rows: [
              ["Manter o setor de observação", "Constrói", "Cumulativo"],
              ["Comunicar honestamente o estado físico", "Constrói", "Imediato"],
              ["Cobrir um companheiro sob fogo sem hesitar", "Constrói", "Cumulativo"],
              ["Esconder um erro técnico", "Destrói", "Semanas"],
              ["Sair da posição sem comunicar", "Destrói", "Meses"],
              ["Mentir no debrief", "Destrói", "Irrecuperável"],
            ],
          },
        ],
      },
      {
        heading: "Previsibilidade individual",
        blocks: [
          {
            type: "p",
            text: "Cada membro de um team coeso é previsível dentro de um perímetro definido. O team leader sabe que seu MG usará burst de 5 tiros, manterá o setor direito, comunicará red ammo aos 25%. O medic sabe que a primeira intervenção será MARCH e que o companheiro falará para se identificar. Previsibilidade não é rigidez: é linguagem compartilhada.",
          },
          {
            type: "ol",
            items: [
              "Padronizar procedimentos internos (sinais manuais, brevity, react-to-contact)",
              "Treinar até executar sem pensar",
              "Anotar variações individuais (quem é lento na recuperação, quem é rápido em mapa)",
              "Atualizar o modelo do companheiro quando muda",
            ],
          },
        ],
      },
      {
        heading: "Gestão de conflitos",
        blocks: [
          {
            type: "p",
            text: "Conflitos internos são inevitáveis em qualquer team sob estresse por semanas. Não eliminar, gerir. Princípio operacional: separar técnica de pessoal. Crítica técnica imediata, em público se preciso, sem personalizar; conflito pessoal à parte, fora de operação, com mediador se necessário.",
          },
          {
            type: "ul",
            items: [
              "Sem discussões emocionais sob fogo, em patrulha, antes de operação",
              "Crítica técnica: fato + impacto + correção, sem julgamento sobre a pessoa",
              "Conflito pessoal: cara a cara em local protegido, terceiro presente se grave",
              "Escalação: se os pares não resolvem, decide o squad leader; se não, o PL",
              "Não tolerar rusgas silenciosas — explodem em operação",
            ],
          },
          {
            type: "warn",
            title: "REGRA DE BASE",
            body: "Regra de ouro: crítica técnica na frente dos outros, apreciação pessoal em privado. Nunca o inverso. Nunca destruir um companheiro publicamente por motivos pessoais — a confiança do team todo quebra, não só a dele.",
          },
        ],
      },
      {
        heading: "Integração de recém-chegados",
        blocks: [
          {
            type: "p",
            text: "Inserir um novo membro é o momento mais frágil de um team coeso. O novo ainda não compartilha o modelo dos outros e os outros não compartilham o dele. A fase de shakedown dura 2–4 semanas. Comprime essa fase com três ações: atribuir um buddy experiente, reduzir as responsabilidades decisórias iniciais, treinar procedimentos padrão antes da exposição operacional.",
          },
          {
            type: "ol",
            items: [
              "Briefing inicial: cultura do team, regras não escritas, pessoas-chave",
              "Buddy atribuído: o novo opera com um veterano específico nos primeiros 14 dias",
              "Tarefas progressivas: primeiro técnicas limitadas, depois participação plena",
              "Inclusão social: refeições e descompressão juntos desde o dia 1",
              "Debrief semanal com buddy: o que funciona, o que não, obstáculos",
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
              "Confundir coesão operacional com sociabilidade fora de serviço",
              "Manter conflitos pessoais escondidos — explodem no momento errado",
              "Tratar o recém-chegado como outsider por tempo demais (além de 4 semanas)",
              "Punir crítica técnica como se fosse insubordinação",
              "Permitir cliques nacionais ou linguísticas em teams multinacionais",
              "Promover amigos a posições que não conseguem cobrir tecnicamente",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Teams internacionais na Ucrânia trabalham frequentemente com 5–8 nacionalidades, línguas diferentes, doutrinas diferentes, experiência heterogênea. A coesão que funciona nessas condições se constrói em três pilares: brevity codes compartilhados (NATO standard), uma língua operacional por vez (inglês ou ucraniano), e um sistema de tags visuais no kit para identificar funções sob estresse. A coesão entre culturas existe, mas é inteiramente artificial: deve ser projetada, não suposta.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La cohésion d'équipe n'est pas une amitié : c'est la condition opérationnelle qui permet à chaque membre d'anticiper les actions des autres sous stress. Elle se construit avec prévisibilité, compétence partagée et confiance fonctionnelle, pas avec une camaraderie émotionnelle. Une équipe cohésive se déplace comme un organisme unique, pas comme un groupe d'amis.",
    sections: [
      {
        heading: "Fondations de la cohésion",
        blocks: [
          {
            type: "p",
            text: "Trois dimensions de la cohésion opérationnelle : horizontale (entre pairs), verticale (avec le chef), et de tâche (vers la mission). Les trois sont indépendantes. Une équipe peut avoir une excellente cohésion horizontale et une mauvaise verticale, ou une excellente cohésion de tâche et une mauvaise horizontale. Celle qui compte au combat est la cohésion de tâche.",
          },
          {
            type: "ul",
            items: [
              "Horizontale : les pairs se connaissent, se font confiance, se protègent",
              "Verticale : respect fonctionnel du chef, acceptation des décisions",
              "Tâche : tous connaissent la mission et en partagent le sens",
              "Les dimensions se renforcent mais ne se substituent pas",
            ],
          },
        ],
      },
      {
        heading: "Confiance fonctionnelle",
        blocks: [
          {
            type: "p",
            text: "La confiance fonctionnelle est spécifique et vérifiable : on fait confiance au camarade pour la tâche X sur la base d'évidence observée. On ne lui fait pas confiance « en tant que personne » dans l'abstrait. Elle se construit par des preuves répétées en entraînement puis en opération. Elle se détruit par quelques violations graves : comportement imprévisible sous le feu, abandon, mensonge sur les faits opérationnels.",
          },
          {
            type: "table",
            headers: ["Comportement", "Effet sur la confiance", "Temps de récupération"],
            rows: [
              ["Tenir son secteur d'observation", "Construit", "Cumulatif"],
              ["Communiquer honnêtement son état physique", "Construit", "Immédiat"],
              ["Couvrir un camarade sous feu sans hésiter", "Construit", "Cumulatif"],
              ["Cacher une erreur technique", "Détruit", "Semaines"],
              ["Quitter sa position sans communiquer", "Détruit", "Mois"],
              ["Mentir au debrief", "Détruit", "Irrécupérable"],
            ],
          },
        ],
      },
      {
        heading: "Prévisibilité individuelle",
        blocks: [
          {
            type: "p",
            text: "Chaque membre d'une équipe cohésive est prévisible dans un périmètre défini. Le chef d'équipe sait que son MG tirera des rafales de 5 coups, tiendra le secteur droit, annoncera red ammo à 25%. L'infirmier sait que la première intervention sera MARCH et que le camarade parlera pour s'identifier. La prévisibilité n'est pas rigidité : c'est langage partagé.",
          },
          {
            type: "ol",
            items: [
              "Standardiser les procédures internes (signes, brevity, react-to-contact)",
              "Répéter jusqu'à exécution sans réflexion",
              "Noter les variations individuelles (qui est lent à la récupération, qui est rapide sur carte)",
              "Mettre à jour le modèle du camarade quand il change",
            ],
          },
        ],
      },
      {
        heading: "Gestion des conflits",
        blocks: [
          {
            type: "p",
            text: "Les conflits internes sont inévitables dans toute équipe opérant sous stress pendant des semaines. Ne pas les éliminer, les gérer. Principe opérationnel : séparation entre technique et personnel. Critique technique immédiate, en public si nécessaire, sans personnaliser ; conflit personnel traité à part, hors opération, avec médiateur si besoin.",
          },
          {
            type: "ul",
            items: [
              "Pas de disputes émotionnelles sous feu, en patrouille, avant opération",
              "Critique technique : fait + impact + correction, sans jugement sur la personne",
              "Conflit personnel : face-à-face en lieu protégé, tiers présent si grave",
              "Escalade : si les pairs ne résolvent pas, le chef de groupe décide ; sinon le chef de section",
              "Ne pas tolérer les querelles silencieuses — elles explosent en opération",
            ],
          },
          {
            type: "warn",
            title: "RÈGLE DE BASE",
            body: "Règle d'or : critique technique devant les autres, appréciation personnelle en privé. Jamais l'inverse. Ne jamais détruire publiquement un camarade pour des raisons personnelles — la confiance de toute l'équipe se rompt, pas seulement la sienne.",
          },
        ],
      },
      {
        heading: "Intégration des nouveaux arrivants",
        blocks: [
          {
            type: "p",
            text: "Insérer un nouveau membre est le moment le plus fragile d'une équipe cohésive. Le nouveau ne partage pas encore le modèle des autres et les autres ne partagent pas le sien. La phase de shakedown dure 2–4 semaines. Comprimer cette phase par trois actions : attribuer un binôme expérimenté, réduire les responsabilités décisionnelles initiales, répéter les procédures standard à l'entraînement avant exposition opérationnelle.",
          },
          {
            type: "ol",
            items: [
              "Briefing initial : culture de l'équipe, règles non écrites, personnes clés",
              "Binôme attribué : le nouveau opère avec un vétéran spécifique les 14 premiers jours",
              "Tâches progressives : d'abord techniques limitées, puis pleine participation",
              "Inclusion sociale : repas et décompression ensemble dès le jour 1",
              "Debrief hebdomadaire avec binôme : ce qui marche, ce qui ne marche pas, obstacles",
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
              "Confondre cohésion opérationnelle et sociabilité hors service",
              "Garder les conflits personnels cachés — ils explosent au mauvais moment",
              "Traiter le nouveau comme un outsider trop longtemps (au-delà de 4 semaines)",
              "Punir la critique technique comme s'il s'agissait d'insubordination",
              "Laisser se former des cliques nationales ou linguistiques dans des équipes multinationales",
              "Promouvoir des amis à des postes qu'ils ne peuvent pas tenir techniquement",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les équipes internationales en Ukraine travaillent souvent avec 5–8 nationalités, langues différentes, doctrines différentes, expérience hétérogène. La cohésion qui fonctionne dans ces conditions repose sur trois piliers : des brevity codes partagés (standard OTAN), une seule langue opérationnelle à la fois (anglais ou ukrainien) et un système de marquage visuel sur l'équipement pour identifier les rôles sous stress. La cohésion entre cultures existe, mais elle est entièrement artificielle : elle doit être conçue, pas supposée.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
