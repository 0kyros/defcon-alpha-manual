import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La leadership di piccola unità — fire team, squad, plotone — è il livello dove la dottrina incontra il fango. Non si comanda con il grado: si comanda con la chiarezza dell'intento, la prevedibilità del comportamento e la responsabilità sulle decisioni prese. Questo capitolo definisce mission command, l'autorità del NCO e i meccanismi di delega che reggono sotto fuoco.",
    sections: [
      {
        heading: "Mission command",
        blocks: [
          {
            type: "p",
            text: "Mission command è la dottrina che assegna a un subordinato un obiettivo (what) e una intenzione (why), lasciandogli la libertà di scegliere il come. È l'opposto del command and control puntuale dove ogni movimento richiede approvazione. Mission command non significa assenza di disciplina: significa che la disciplina è interiorizzata e l'iniziativa è attesa.",
          },
          {
            type: "ol",
            items: [
              "Intento del comandante: una frase che dichiara stato finale desiderato",
              "Compito (task): cosa fare in concreto",
              "Scopo (purpose): perché lo facciamo, in relazione alla missione di livello superiore",
              "Vincoli: ciò che non si può fare (regole d'ingaggio, limiti geografici, tempi)",
              "Risorse: ciò che hai a disposizione",
              "Libertà: tutto il resto è scelta tua",
            ],
          },
          {
            type: "callout",
            title: "Esempio di intento",
            body: "'Entro le 0600 il fire team Bravo nega al nemico l'uso della strada T-0504 in corrispondenza del bivio sud. Mantieni la posizione fino a quando il plotone passa. Se sei scoperto da drone e non puoi reagire, ripiega sulla rally point Echo. Vincolo: nessun fuoco sulle case civili a nord. Risorse: 2 AT, MG, 4 UAS Mavic.'",
          },
        ],
      },
      {
        heading: "L'autorità del NCO",
        blocks: [
          {
            type: "p",
            text: "L'NCO (sergente, caporale, squad leader) è il livello dove la guerra è effettivamente combattuta. La sua autorità è funzionale, non simbolica: deriva dalla competenza tecnica, dalla conoscenza del proprio personale e dalla capacità di tradurre intento in azione concreta. Un plotone con NCO forti sopravvive a un comandante di plotone mediocre; un plotone con NCO deboli non sopravvive a un comandante di plotone eccellente.",
          },
          {
            type: "ul",
            items: [
              "Possiede e applica gli standard tecnici (armi, comms, medical)",
              "Conosce ogni membro del team — punti di forza, debolezze, stato familiare",
              "Traduce l'intento dell'ufficiale in compiti eseguibili",
              "Difende il team dalle stupidaggini di livello superiore quando serve",
              "Fa rispettare la disciplina senza farne uno spettacolo",
            ],
          },
        ],
      },
      {
        heading: "Meccanismi di delega",
        blocks: [
          {
            type: "table",
            headers: ["Livello", "Cosa delegare", "Cosa non delegare"],
            rows: [
              ["Team leader", "Movimento del singolo, fuoco individuale", "Decisione di ingaggio prolungato"],
              ["Squad leader", "Manovra del fire team, scelta della copertura", "Cambio di missione, ROE"],
              ["Plotone leader", "Manovra dello squad, allocazione fuoco", "Decisione di rottura del contatto"],
              ["Compagnia", "Manovra del plotone, supporti puntuali", "Cambio di obiettivo strategico"],
            ],
          },
          {
            type: "p",
            text: "Il principio: ogni livello decide ciò che il livello inferiore non può vedere. Se il team leader vede il bersaglio e l'NCO no, decide il team leader. Se l'NCO vede il quadro dello squad e il PL no, decide l'NCO. Salire di livello solo quando il problema eccede il proprio orizzonte di osservazione.",
          },
        ],
      },
      {
        heading: "Prevedibilità sotto stress",
        blocks: [
          {
            type: "p",
            text: "Il leader sotto stress deve essere prevedibile prima che geniale. I subordinati hanno bisogno di sapere come reagirà a un evento, non di essere sorpresi dalla sua creatività. La prevedibilità nasce dall'addestramento ripetuto degli stessi pattern decisionali e dalla coerenza fra ciò che si dice e ciò che si fa.",
          },
          {
            type: "ul",
            items: [
              "Stesso tono di voce in routine e in contatto",
              "Stesse domande nelle SITREP (effective, ammo, position, intent)",
              "Stesse priorità nelle emergenze (security, casualty, comms)",
              "Stessa reazione alle violazioni minori (correzione immediata, non punitiva)",
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
              "Dare ordini senza spiegare l'intento — il subordinato non può adattare quando il piano cambia",
              "Microgestire il movimento di un fire team mentre si dovrebbe pensare alla compagnia",
              "Confondere autorità formale (grado) con autorità funzionale (competenza)",
              "Trattare i propri NCO come postini di ordini invece che come livello decisionale",
              "Cambiare regole o tono quando si è osservati dal comando superiore",
              "Punire l'iniziativa che ha avuto un esito imperfetto invece di correggerla",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I battaglioni ucraini che funzionano sono quelli dove lo squad leader può decidere di ripiegare di 200 metri senza chiedere autorizzazione, e il plotone leader sa che quella decisione era nelle prerogative del subordinato. Le strutture ex-sovietiche dove ogni movimento attende l'OK del comandante di compagnia perdono uomini perché il fronte si muove più veloce dell'autorizzazione. I volontari internazionali inseriti in unità funzionanti devono adattarsi a questa libertà: chi resta in attesa di ordine puntuale finisce isolato.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Small-unit leadership — fire team, squad, platoon — is the level where doctrine meets mud. You do not lead by rank: you lead by clarity of intent, predictability of behaviour and accountability for decisions taken. This chapter defines mission command, NCO authority and the delegation mechanisms that hold up under fire.",
    sections: [
      {
        heading: "Mission command",
        blocks: [
          {
            type: "p",
            text: "Mission command is the doctrine that assigns a subordinate an objective (what) and an intent (why), leaving them free to choose the how. It is the opposite of point command-and-control where every movement requires approval. Mission command is not absence of discipline: it means discipline is internalised and initiative is expected.",
          },
          {
            type: "ol",
            items: [
              "Commander's intent: one sentence stating the desired end state",
              "Task: what to do concretely",
              "Purpose: why we do it, in relation to higher's mission",
              "Constraints: what you cannot do (ROE, geographic limits, timings)",
              "Resources: what you have",
              "Freedom: everything else is your choice",
            ],
          },
          {
            type: "callout",
            title: "Sample intent",
            body: "'By 0600, fire team Bravo denies the enemy use of road T-0504 at the south junction. Hold until the platoon passes. If compromised by drone and unable to react, withdraw to rally point Echo. Constraint: no fires on the civilian houses north. Resources: 2 AT, MG, 4 Mavic UAS.'",
          },
        ],
      },
      {
        heading: "NCO authority",
        blocks: [
          {
            type: "p",
            text: "The NCO (sergeant, corporal, squad leader) is the level where war is actually fought. Their authority is functional, not symbolic: it comes from technical competence, knowledge of their personnel and the ability to translate intent into concrete action. A platoon with strong NCOs survives a mediocre platoon leader; a platoon with weak NCOs does not survive an excellent platoon leader.",
          },
          {
            type: "ul",
            items: [
              "Owns and enforces technical standards (weapons, comms, medical)",
              "Knows every team member — strengths, weaknesses, family status",
              "Translates officer intent into executable tasks",
              "Defends the team from higher-level nonsense when needed",
              "Enforces discipline without making a show of it",
            ],
          },
        ],
      },
      {
        heading: "Delegation mechanisms",
        blocks: [
          {
            type: "table",
            headers: ["Level", "Delegate", "Do not delegate"],
            rows: [
              ["Team leader", "Individual movement, individual fire", "Decision to engage at length"],
              ["Squad leader", "Fire-team manoeuvre, cover choice", "Mission change, ROE"],
              ["Platoon leader", "Squad manoeuvre, fires allocation", "Break-contact decision"],
              ["Company", "Platoon manoeuvre, point supports", "Strategic objective change"],
            ],
          },
          {
            type: "p",
            text: "Principle: each level decides what the lower level cannot see. If the team leader sees the target and the NCO does not, the team leader decides. If the NCO sees the squad picture and the PL does not, the NCO decides. Escalate only when the problem exceeds your observation horizon.",
          },
        ],
      },
      {
        heading: "Predictability under stress",
        blocks: [
          {
            type: "p",
            text: "The leader under stress must be predictable before being brilliant. Subordinates need to know how they will react to an event, not be surprised by their creativity. Predictability comes from repeated training of the same decision patterns and coherence between what is said and what is done.",
          },
          {
            type: "ul",
            items: [
              "Same tone of voice in routine and in contact",
              "Same questions in SITREPs (effective, ammo, position, intent)",
              "Same priorities in emergencies (security, casualty, comms)",
              "Same reaction to minor violations (immediate, non-punitive correction)",
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
              "Giving orders without explaining intent — subordinate cannot adapt when the plan changes",
              "Micromanaging a fire team's movement while you should be thinking about the company",
              "Confusing formal authority (rank) with functional authority (competence)",
              "Treating your NCOs as order-postmen instead of as a decision layer",
              "Changing rules or tone when observed by higher command",
              "Punishing initiative with imperfect outcome instead of correcting it",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The Ukrainian battalions that function are those where the squad leader can decide to fall back 200 metres without requesting authorisation, and the platoon leader knows that decision was the subordinate's prerogative. Ex-Soviet structures where every movement awaits the company commander's OK lose men because the front moves faster than the authorisation. International volunteers inserted into functional units must adapt to that freedom: those who wait for a point order end up isolated.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Liderança de pequena unidade — fire team, esquadra, pelotão — é o nível onde a doutrina encontra a lama. Não se lidera pela patente: lidera-se pela clareza de intenção, previsibilidade de comportamento e responsabilidade sobre as decisões tomadas. Este capítulo define mission command, a autoridade do NCO e os mecanismos de delegação que aguentam sob fogo.",
    sections: [
      {
        heading: "Mission command",
        blocks: [
          {
            type: "p",
            text: "Mission command é a doutrina que atribui ao subordinado um objetivo (what) e uma intenção (why), deixando-o livre para escolher o como. É o oposto do command and control pontual onde cada movimento exige aprovação. Mission command não é ausência de disciplina: é disciplina interiorizada com iniciativa esperada.",
          },
          {
            type: "ol",
            items: [
              "Intenção do comandante: uma frase com o estado final desejado",
              "Tarefa (task): o que fazer concretamente",
              "Propósito (purpose): porque fazemos, em relação à missão do nível superior",
              "Restrições: o que não pode (ROE, limites geográficos, prazos)",
              "Recursos: o que está disponível",
              "Liberdade: o resto é escolha sua",
            ],
          },
          {
            type: "callout",
            title: "Exemplo de intenção",
            body: "'Até 0600, fire team Bravo nega ao inimigo o uso da estrada T-0504 no entroncamento sul. Manter até o pelotão passar. Se comprometido por drone e sem reação, retirar para rally point Echo. Restrição: sem fogo nas casas civis ao norte. Recursos: 2 AT, MG, 4 Mavic UAS.'",
          },
        ],
      },
      {
        heading: "Autoridade do NCO",
        blocks: [
          {
            type: "p",
            text: "O NCO (sargento, cabo, squad leader) é o nível onde a guerra é de fato combatida. Sua autoridade é funcional, não simbólica: vem da competência técnica, do conhecimento do pessoal e da capacidade de traduzir intenção em ação concreta. Um pelotão com NCOs fortes sobrevive a um PL medíocre; um pelotão com NCOs fracos não sobrevive a um PL excelente.",
          },
          {
            type: "ul",
            items: [
              "Detém e aplica os padrões técnicos (armas, comms, medical)",
              "Conhece cada membro do team — forças, fraquezas, situação familiar",
              "Traduz a intenção do oficial em tarefas executáveis",
              "Defende o team de bobagens do nível superior quando necessário",
              "Faz cumprir disciplina sem fazer espetáculo dela",
            ],
          },
        ],
      },
      {
        heading: "Mecanismos de delegação",
        blocks: [
          {
            type: "table",
            headers: ["Nível", "Delegar", "Não delegar"],
            rows: [
              ["Team leader", "Movimento individual, fogo individual", "Decisão de engajamento prolongado"],
              ["Squad leader", "Manobra do fire team, escolha de cobertura", "Mudança de missão, ROE"],
              ["Platoon leader", "Manobra de esquadra, alocação de fogo", "Decisão de quebra de contato"],
              ["Companhia", "Manobra de pelotão, apoios pontuais", "Mudança de objetivo estratégico"],
            ],
          },
          {
            type: "p",
            text: "Princípio: cada nível decide o que o nível inferior não pode ver. Se o team leader vê o alvo e o NCO não, decide o team leader. Se o NCO vê o quadro da esquadra e o PL não, decide o NCO. Escalar só quando o problema excede o horizonte de observação.",
          },
        ],
      },
      {
        heading: "Previsibilidade sob estresse",
        blocks: [
          {
            type: "p",
            text: "O líder sob estresse precisa ser previsível antes de genial. Os subordinados precisam saber como ele vai reagir, não ser surpreendidos pela criatividade. Previsibilidade nasce do treino repetido dos mesmos padrões decisórios e da coerência entre o que se diz e o que se faz.",
          },
          {
            type: "ul",
            items: [
              "Mesmo tom de voz na rotina e no contato",
              "Mesmas perguntas nos SITREP (efetivo, munição, posição, intenção)",
              "Mesmas prioridades em emergência (segurança, baixa, comms)",
              "Mesma reação a violações menores (correção imediata, não punitiva)",
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
              "Dar ordens sem explicar a intenção — o subordinado não adapta quando o plano muda",
              "Microgerenciar movimento de fire team enquanto deveria pensar na companhia",
              "Confundir autoridade formal (patente) com autoridade funcional (competência)",
              "Tratar os NCOs como carteiros de ordem em vez de camada decisória",
              "Mudar regras ou tom quando observado pelo comando superior",
              "Punir iniciativa com resultado imperfeito em vez de corrigir",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Os batalhões ucranianos que funcionam são aqueles onde o squad leader pode decidir recuar 200 metros sem pedir autorização, e o PL sabe que a decisão era prerrogativa do subordinado. Estruturas ex-soviéticas onde cada movimento espera o OK do CO de companhia perdem homens porque o front se move mais rápido que a autorização. Voluntários internacionais inseridos em unidades funcionais precisam se adaptar a essa liberdade: quem espera ordem pontual acaba isolado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le commandement de petite unité — équipe, groupe, section — est le niveau où la doctrine rencontre la boue. On ne commande pas avec le grade : on commande avec la clarté de l'intention, la prévisibilité du comportement et la responsabilité sur les décisions prises. Ce chapitre définit le mission command, l'autorité du sous-officier et les mécanismes de délégation qui tiennent sous le feu.",
    sections: [
      {
        heading: "Mission command",
        blocks: [
          {
            type: "p",
            text: "Le mission command est la doctrine qui assigne au subordonné un objectif (what) et une intention (why), en lui laissant le choix du comment. C'est l'opposé du command and control ponctuel où chaque mouvement exige approbation. Mission command n'est pas absence de discipline : c'est une discipline intériorisée avec initiative attendue.",
          },
          {
            type: "ol",
            items: [
              "Intention du commandant : une phrase indiquant l'état final souhaité",
              "Tâche : ce qu'il faut faire concrètement",
              "But : pourquoi on le fait, en lien avec la mission supérieure",
              "Contraintes : ce qu'on ne peut pas faire (RoE, limites géographiques, délais)",
              "Ressources : ce dont on dispose",
              "Liberté : tout le reste est votre choix",
            ],
          },
          {
            type: "callout",
            title: "Exemple d'intention",
            body: "« À 0600, l'équipe Bravo interdit à l'ennemi l'usage de la route T-0504 au carrefour sud. Tenir jusqu'au passage de la section. Si compromis par drone et sans réaction, repli sur le rally point Echo. Contrainte : pas de feu sur les maisons civiles au nord. Ressources : 2 AT, MG, 4 Mavic UAS. »",
          },
        ],
      },
      {
        heading: "L'autorité du sous-officier",
        blocks: [
          {
            type: "p",
            text: "Le sous-officier (sergent, caporal, chef de groupe) est le niveau où la guerre se fait réellement. Son autorité est fonctionnelle, pas symbolique : elle vient de la compétence technique, de la connaissance de son personnel et de la capacité à traduire l'intention en action concrète. Une section avec des sous-officiers solides survit à un chef de section médiocre ; une section avec des sous-officiers faibles ne survit pas à un excellent chef de section.",
          },
          {
            type: "ul",
            items: [
              "Détient et applique les standards techniques (armes, comms, secourisme)",
              "Connaît chaque membre — forces, faiblesses, situation familiale",
              "Traduit l'intention de l'officier en tâches exécutables",
              "Protège l'équipe des bêtises du niveau supérieur quand il le faut",
              "Fait respecter la discipline sans en faire un spectacle",
            ],
          },
        ],
      },
      {
        heading: "Mécanismes de délégation",
        blocks: [
          {
            type: "table",
            headers: ["Niveau", "Déléguer", "Ne pas déléguer"],
            rows: [
              ["Chef d'équipe", "Mouvement individuel, feu individuel", "Décision d'engagement prolongé"],
              ["Chef de groupe", "Manœuvre d'équipe, choix du couvert", "Changement de mission, RoE"],
              ["Chef de section", "Manœuvre de groupe, allocation feux", "Décision de rupture de contact"],
              ["Compagnie", "Manœuvre de section, appuis ponctuels", "Changement d'objectif stratégique"],
            ],
          },
          {
            type: "p",
            text: "Principe : chaque niveau décide ce que le niveau inférieur ne peut pas voir. Si le chef d'équipe voit la cible et le sous-officier non, c'est le chef d'équipe qui décide. Si le sous-officier voit le tableau du groupe et le chef de section non, c'est le sous-officier. Remonter au niveau supérieur seulement quand le problème dépasse l'horizon d'observation.",
          },
        ],
      },
      {
        heading: "Prévisibilité sous stress",
        blocks: [
          {
            type: "p",
            text: "Le chef sous stress doit être prévisible avant d'être brillant. Les subordonnés ont besoin de savoir comment il réagira, pas d'être surpris par sa créativité. La prévisibilité naît de l'entraînement répété des mêmes schémas décisionnels et de la cohérence entre ce qui est dit et ce qui est fait.",
          },
          {
            type: "ul",
            items: [
              "Même ton de voix en routine et au contact",
              "Mêmes questions dans les SITREP (effectif, munitions, position, intention)",
              "Mêmes priorités en urgence (sûreté, blessés, comms)",
              "Même réaction aux violations mineures (correction immédiate, non punitive)",
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
              "Donner des ordres sans expliquer l'intention — le subordonné ne peut s'adapter quand le plan change",
              "Micro-gérer le mouvement d'une équipe alors qu'on devrait penser à la compagnie",
              "Confondre autorité formelle (grade) et autorité fonctionnelle (compétence)",
              "Traiter ses sous-officiers en facteurs d'ordres plutôt qu'en couche décisionnelle",
              "Changer de règles ou de ton quand on est observé par le commandement supérieur",
              "Punir une initiative au résultat imparfait plutôt que la corriger",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les bataillons ukrainiens qui fonctionnent sont ceux où le chef de groupe peut décider de se replier de 200 mètres sans demander d'autorisation, et où le chef de section sait que cette décision relevait du subordonné. Les structures ex-soviétiques où chaque mouvement attend l'OK du commandant de compagnie perdent des hommes car le front bouge plus vite que l'autorisation. Les volontaires internationaux insérés dans des unités fonctionnelles doivent s'adapter à cette liberté : ceux qui attendent un ordre ponctuel finissent isolés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
