import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il pensiero adattivo è la capacità di mantenere intento e azione quando il piano si disintegra. Nessun piano sopravvive al primo contatto; ciò che sopravvive è il sistema di decisione del subordinato. Questo capitolo definisce improvvisazione disciplinata, giudizio sotto incertezza e i limiti dell'iniziativa.",
    sections: [
      {
        heading: "Disintegrazione del piano",
        blocks: [
          {
            type: "p",
            text: "Un piano è un'ipotesi sul futuro che diventa obsoleta nel momento in cui si esegue. La disintegrazione non è un fallimento del pianificatore: è una caratteristica del combattimento. La domanda corretta non è 'come evitiamo la disintegrazione' ma 'cosa rimane quando il piano fallisce'. La risposta: l'intento del comandante, le condizioni di vittoria, le risorse disponibili.",
          },
          {
            type: "ul",
            items: [
              "Il piano definisce il riferimento, non l'esecuzione",
              "L'intento sopravvive alla disintegrazione, il piano no",
              "Le condizioni di vittoria sono il criterio per scegliere fra opzioni",
              "Le risorse disponibili sono l'unico vincolo materiale che resta",
            ],
          },
          {
            type: "callout",
            title: "Branches e sequels",
            body: "La pianificazione moderna include branches (deviazioni dal piano principale a fronte di eventi specifici previsti) e sequels (continuazioni del piano dopo il completamento di una fase). Una branch è 'se succede X, fai Y'. Un sequel è 'dopo che hai completato A, considera B o C'. Branch e sequel sono pre-pensiero che riduce l'improvvisazione richiesta.",
          },
        ],
      },
      {
        heading: "Improvvisazione disciplinata",
        blocks: [
          {
            type: "p",
            text: "L'improvvisazione disciplinata non è creatività libera: è l'applicazione di principi noti a situazioni nuove, dentro vincoli espliciti. Tre criteri di disciplina: coerenza con l'intento, accettabilità del rischio, comunicabilità della decisione. Un'azione che non passa questi tre filtri non è improvvisazione disciplinata — è azzardo personale.",
          },
          {
            type: "ol",
            items: [
              "Coerenza: la mia azione fa ancora avanzare l'intento del comandante?",
              "Rischio: il rischio assunto è proporzionato al beneficio atteso?",
              "Comunicabilità: posso descrivere la decisione al comandante senza giustificarmi?",
              "Reversibilità: posso annullare la decisione se si rivela sbagliata?",
              "Tempo: ho il tempo per consultare, o devo decidere ora?",
            ],
          },
        ],
      },
      {
        heading: "Giudizio sotto incertezza",
        blocks: [
          {
            type: "p",
            text: "Il giudizio è la competenza che distingue il veterano dal novizio: la capacità di stimare probabilità con dati incompleti e agire di conseguenza. Si costruisce con tre meccanismi: esposizione ripetuta a situazioni reali, debrief sistematico delle decisioni passate, ricezione di feedback affidabile sull'esito. Senza i tre meccanismi, l'esperienza accumulata diventa rumore.",
          },
          {
            type: "table",
            headers: ["Tipo di decisione", "Approccio", "Errore tipico"],
            rows: [
              ["Reversibile, bassa posta", "Decidere veloce, correggere dopo", "Sovraconsultare"],
              ["Reversibile, alta posta", "Consultare brevemente, decidere", "Decidere isolato"],
              ["Irreversibile, bassa posta", "Procedura standard se esiste", "Improvvisare invece"],
              ["Irreversibile, alta posta", "Tempo per analisi, multiple opzioni", "Decidere in fretta"],
            ],
          },
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "L'incertezza non è scusa per la paralisi. Quando l'informazione manca, l'azione preferita è quella che preserva opzioni future. Quando l'informazione manca e non c'è tempo, l'azione preferita è quella che protegge il personale.",
          },
        ],
      },
      {
        heading: "Limiti dell'iniziativa",
        blocks: [
          {
            type: "p",
            text: "L'iniziativa ha confini espliciti. Il subordinato può improvvisare dentro il proprio livello, ma non può cambiare la missione, ridefinire le condizioni di vittoria, ingaggiare obiettivi fuori ROE, o impegnare risorse di livello superiore senza autorizzazione. Quando una decisione richiesta supera questi confini, la regola è: comunicare, raccomandare, attendere. Mai decidere unilateralmente su ciò che spetta al comandante.",
          },
          {
            type: "ul",
            items: [
              "Improvvisare DENTRO il proprio livello — sempre permesso",
              "Cambiare il proprio compito — solo se l'intento lo richiede e non c'è tempo",
              "Cambiare la missione del team — mai senza autorizzazione",
              "Cambiare la ROE — mai",
              "Ingaggiare obiettivi non previsti — mai senza autorizzazione",
              "Impegnare risorse non assegnate (artiglieria, aviazione) — solo via canale",
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
              "Confondere 'piano fallito' con 'missione fallita' — l'intento sopravvive",
              "Trattare l'improvvisazione come licenza per azione individuale non comunicata",
              "Aderire al piano originale quando le condizioni che lo giustificavano sono cambiate",
              "Decidere oltre il proprio livello perché 'il comandante non risponde'",
              "Ignorare branches preparate e improvvisare invece — spreco di pianificazione",
              "Comunicare l'iniziativa presa solo a operazione conclusa — il comandante deve sapere durante",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le unità ucraine documentano un fenomeno costante: il piano di assalto si disintegra entro 15 minuti dall'ingresso in linea, per via di artiglieria, FPV o reazione nemica imprevista. Le unità che vincono sono quelle dove ogni squad leader sa quali sono le tre cose che NON cambiano (l'obiettivo, il limite temporale, la regola di ingaggio sui civili) e improvvisa tutto il resto. Le unità che perdono sono quelle che cercano di ricostruire il piano originale invece di adattarsi a quello che è effettivamente possibile.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Adaptive thinking is the ability to maintain intent and action when the plan disintegrates. No plan survives first contact; what survives is the subordinate's decision system. This chapter defines disciplined improvisation, judgement under uncertainty and the limits of initiative.",
    sections: [
      {
        heading: "Plan disintegration",
        blocks: [
          {
            type: "p",
            text: "A plan is a hypothesis about the future that becomes obsolete the moment it executes. Disintegration is not a planner's failure: it is a feature of combat. The right question is not 'how do we avoid disintegration' but 'what remains when the plan fails'. Answer: commander's intent, victory conditions, available resources.",
          },
          {
            type: "ul",
            items: [
              "The plan defines the reference, not the execution",
              "Intent survives disintegration, the plan does not",
              "Victory conditions are the criterion for choosing between options",
              "Available resources are the only remaining material constraint",
            ],
          },
          {
            type: "callout",
            title: "Branches and sequels",
            body: "Modern planning includes branches (deviations from the main plan against specific anticipated events) and sequels (continuations after a phase completes). A branch is 'if X happens, do Y'. A sequel is 'after completing A, consider B or C'. Branches and sequels are pre-thinking that reduces required improvisation.",
          },
        ],
      },
      {
        heading: "Disciplined improvisation",
        blocks: [
          {
            type: "p",
            text: "Disciplined improvisation is not free creativity: it is the application of known principles to new situations, within explicit constraints. Three criteria of discipline: coherence with intent, acceptability of risk, communicability of decision. An action that fails these three filters is not disciplined improvisation — it is personal gamble.",
          },
          {
            type: "ol",
            items: [
              "Coherence: does my action still advance the commander's intent?",
              "Risk: is the risk assumed proportionate to the expected benefit?",
              "Communicability: can I describe the decision to the commander without justifying myself?",
              "Reversibility: can I undo the decision if it proves wrong?",
              "Time: do I have time to consult, or must I decide now?",
            ],
          },
        ],
      },
      {
        heading: "Judgement under uncertainty",
        blocks: [
          {
            type: "p",
            text: "Judgement is the competence that distinguishes veteran from novice: the ability to estimate probabilities from incomplete data and act accordingly. It is built by three mechanisms: repeated exposure to real situations, systematic debrief of past decisions, reliable feedback on outcomes. Without all three, accumulated experience becomes noise.",
          },
          {
            type: "table",
            headers: ["Decision type", "Approach", "Typical mistake"],
            rows: [
              ["Reversible, low stakes", "Decide fast, correct later", "Over-consulting"],
              ["Reversible, high stakes", "Briefly consult, decide", "Deciding alone"],
              ["Irreversible, low stakes", "Use standard procedure if any", "Improvise instead"],
              ["Irreversible, high stakes", "Time for analysis, multiple options", "Deciding hastily"],
            ],
          },
          {
            type: "warn",
            title: "WARNING",
            body: "Uncertainty is not an excuse for paralysis. When information is missing, the preferred action is the one preserving future options. When information is missing and time is not available, the preferred action is the one protecting personnel.",
          },
        ],
      },
      {
        heading: "Limits of initiative",
        blocks: [
          {
            type: "p",
            text: "Initiative has explicit boundaries. The subordinate may improvise within their level, but cannot change the mission, redefine victory conditions, engage out-of-ROE targets, or commit higher-echelon resources without authorisation. When a required decision exceeds these boundaries, the rule is: communicate, recommend, wait. Never decide unilaterally on what belongs to the commander.",
          },
          {
            type: "ul",
            items: [
              "Improvise WITHIN your own level — always allowed",
              "Change your own task — only if intent requires and no time",
              "Change the team's mission — never without authorisation",
              "Change ROE — never",
              "Engage unplanned targets — never without authorisation",
              "Commit unassigned resources (arty, aviation) — only through channel",
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
              "Confusing 'plan failed' with 'mission failed' — intent survives",
              "Treating improvisation as a license for uncommunicated individual action",
              "Sticking to the original plan when its underlying conditions have changed",
              "Deciding beyond your level because 'the commander does not respond'",
              "Ignoring prepared branches and improvising instead — wasted planning",
              "Communicating the initiative taken only after the operation — the commander must know during",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian units document a constant phenomenon: the assault plan disintegrates within 15 minutes of crossing the line, due to artillery, FPV or unexpected enemy reaction. Units that win are those where every squad leader knows the three things that do NOT change (the objective, the time limit, the rule of engagement on civilians) and improvises everything else. Units that lose are those that try to rebuild the original plan instead of adapting to what is actually possible.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Pensamento adaptativo é a capacidade de manter intenção e ação quando o plano se desintegra. Nenhum plano sobrevive ao primeiro contato; o que sobrevive é o sistema decisório do subordinado. Este capítulo define improvisação disciplinada, julgamento sob incerteza e os limites da iniciativa.",
    sections: [
      {
        heading: "Desintegração do plano",
        blocks: [
          {
            type: "p",
            text: "Um plano é hipótese sobre o futuro que vira obsoleta no momento em que se executa. A desintegração não é falha do planejador: é característica do combate. A pergunta certa não é 'como evitar a desintegração' mas 'o que sobra quando o plano falha'. Resposta: a intenção do comandante, as condições de vitória, os recursos disponíveis.",
          },
          {
            type: "ul",
            items: [
              "O plano define a referência, não a execução",
              "A intenção sobrevive à desintegração, o plano não",
              "As condições de vitória são o critério para escolher entre opções",
              "Os recursos disponíveis são a única restrição material que permanece",
            ],
          },
          {
            type: "callout",
            title: "Branches e sequels",
            body: "O planejamento moderno inclui branches (desvios do plano principal frente a eventos específicos previstos) e sequels (continuações após uma fase). Uma branch é 'se acontecer X, faça Y'. Um sequel é 'após completar A, considere B ou C'. Branches e sequels são pré-pensamento que reduz a improvisação necessária.",
          },
        ],
      },
      {
        heading: "Improvisação disciplinada",
        blocks: [
          {
            type: "p",
            text: "Improvisação disciplinada não é criatividade livre: é aplicação de princípios conhecidos a situações novas, dentro de restrições explícitas. Três critérios de disciplina: coerência com a intenção, aceitabilidade do risco, comunicabilidade da decisão. Uma ação que não passa nesses três filtros não é improvisação disciplinada — é aposta pessoal.",
          },
          {
            type: "ol",
            items: [
              "Coerência: minha ação ainda avança a intenção do comandante?",
              "Risco: o risco assumido é proporcional ao benefício esperado?",
              "Comunicabilidade: posso descrever a decisão ao comandante sem me justificar?",
              "Reversibilidade: posso desfazer se estiver errada?",
              "Tempo: tenho tempo para consultar, ou preciso decidir agora?",
            ],
          },
        ],
      },
      {
        heading: "Julgamento sob incerteza",
        blocks: [
          {
            type: "p",
            text: "Julgamento é a competência que separa veterano de novato: estimar probabilidades com dados incompletos e agir conforme. Constrói-se com três mecanismos: exposição repetida a situações reais, debrief sistemático das decisões passadas, feedback confiável sobre os resultados. Sem os três, a experiência acumulada vira ruído.",
          },
          {
            type: "table",
            headers: ["Tipo de decisão", "Abordagem", "Erro típico"],
            rows: [
              ["Reversível, aposta baixa", "Decidir rápido, corrigir depois", "Consultar demais"],
              ["Reversível, aposta alta", "Consultar brevemente, decidir", "Decidir isolado"],
              ["Irreversível, aposta baixa", "Procedimento padrão se houver", "Improvisar"],
              ["Irreversível, aposta alta", "Tempo para análise, múltiplas opções", "Decidir às pressas"],
            ],
          },
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "Incerteza não é desculpa para paralisia. Quando falta informação, a ação preferida é a que preserva opções futuras. Quando falta informação e não há tempo, a ação preferida é a que protege o pessoal.",
          },
        ],
      },
      {
        heading: "Limites da iniciativa",
        blocks: [
          {
            type: "p",
            text: "A iniciativa tem limites explícitos. O subordinado pode improvisar dentro de seu nível, mas não pode mudar a missão, redefinir condições de vitória, engajar alvos fora da ROE ou empenhar recursos de escalão superior sem autorização. Quando uma decisão excede esses limites, a regra é: comunicar, recomendar, aguardar. Nunca decidir unilateralmente o que cabe ao comandante.",
          },
          {
            type: "ul",
            items: [
              "Improvisar DENTRO do próprio nível — sempre permitido",
              "Mudar a própria tarefa — só se a intenção exige e não há tempo",
              "Mudar a missão do team — nunca sem autorização",
              "Mudar a ROE — nunca",
              "Engajar alvos não previstos — nunca sem autorização",
              "Empenhar recursos não atribuídos (artilharia, aviação) — só por canal",
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
              "Confundir 'plano falhou' com 'missão falhou' — a intenção sobrevive",
              "Tratar improvisação como licença para ação individual não comunicada",
              "Aderir ao plano original quando as condições que o sustentavam mudaram",
              "Decidir além do próprio nível porque 'o comandante não responde'",
              "Ignorar branches preparadas e improvisar — desperdício de planejamento",
              "Comunicar a iniciativa só após a operação — o comandante deve saber durante",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Unidades ucranianas documentam um fenômeno constante: o plano de assalto se desintegra em até 15 minutos após cruzar a linha, por artilharia, FPV ou reação inimiga imprevista. As unidades que vencem são aquelas onde cada squad leader sabe quais são as três coisas que NÃO mudam (o objetivo, o prazo, a regra de engajamento sobre civis) e improvisa todo o resto. As que perdem são as que tentam reconstruir o plano original em vez de adaptar-se ao que é de fato possível.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La pensée adaptative est la capacité à maintenir intention et action quand le plan se désintègre. Aucun plan ne survit au premier contact ; ce qui survit est le système décisionnel du subordonné. Ce chapitre définit l'improvisation disciplinée, le jugement sous incertitude et les limites de l'initiative.",
    sections: [
      {
        heading: "Désintégration du plan",
        blocks: [
          {
            type: "p",
            text: "Un plan est une hypothèse sur l'avenir qui devient obsolète au moment où elle s'exécute. La désintégration n'est pas un échec du planificateur : c'est une caractéristique du combat. La bonne question n'est pas « comment éviter la désintégration » mais « que reste-t-il quand le plan échoue ». Réponse : l'intention du commandant, les conditions de victoire, les ressources disponibles.",
          },
          {
            type: "ul",
            items: [
              "Le plan définit la référence, pas l'exécution",
              "L'intention survit à la désintégration, le plan non",
              "Les conditions de victoire sont le critère de choix entre options",
              "Les ressources disponibles sont la seule contrainte matérielle restante",
            ],
          },
          {
            type: "callout",
            title: "Branches et sequels",
            body: "La planification moderne inclut des branches (déviations du plan principal face à des événements anticipés) et des sequels (continuations après une phase). Une branche : « si X arrive, fais Y ». Un sequel : « après avoir terminé A, considère B ou C ». Branches et sequels sont du pré-raisonnement qui réduit l'improvisation requise.",
          },
        ],
      },
      {
        heading: "Improvisation disciplinée",
        blocks: [
          {
            type: "p",
            text: "L'improvisation disciplinée n'est pas créativité libre : c'est l'application de principes connus à des situations nouvelles, dans des contraintes explicites. Trois critères de discipline : cohérence avec l'intention, acceptabilité du risque, communicabilité de la décision. Une action qui ne passe pas ces trois filtres n'est pas improvisation disciplinée — c'est un pari personnel.",
          },
          {
            type: "ol",
            items: [
              "Cohérence : mon action sert-elle encore l'intention du commandant ?",
              "Risque : le risque pris est-il proportionné au bénéfice attendu ?",
              "Communicabilité : puis-je décrire la décision au commandant sans me justifier ?",
              "Réversibilité : puis-je défaire la décision si elle se révèle erronée ?",
              "Temps : ai-je le temps de consulter, ou dois-je décider maintenant ?",
            ],
          },
        ],
      },
      {
        heading: "Jugement sous incertitude",
        blocks: [
          {
            type: "p",
            text: "Le jugement est la compétence qui distingue le vétéran du novice : estimer des probabilités sur données incomplètes et agir en conséquence. Il se construit par trois mécanismes : exposition répétée à des situations réelles, debrief systématique des décisions passées, feedback fiable sur les résultats. Sans les trois, l'expérience accumulée devient du bruit.",
          },
          {
            type: "table",
            headers: ["Type de décision", "Approche", "Erreur typique"],
            rows: [
              ["Réversible, faible enjeu", "Décider vite, corriger après", "Surconsulter"],
              ["Réversible, fort enjeu", "Consulter brièvement, décider", "Décider isolé"],
              ["Irréversible, faible enjeu", "Procédure standard si possible", "Improviser"],
              ["Irréversible, fort enjeu", "Temps d'analyse, options multiples", "Décider précipitamment"],
            ],
          },
          {
            type: "warn",
            title: "ATTENTION",
            body: "L'incertitude n'est pas une excuse à la paralysie. Quand l'information manque, l'action préférée est celle qui préserve les options futures. Quand l'information manque et le temps manque, l'action préférée est celle qui protège le personnel.",
          },
        ],
      },
      {
        heading: "Limites de l'initiative",
        blocks: [
          {
            type: "p",
            text: "L'initiative a des limites explicites. Le subordonné peut improviser à son niveau, mais ne peut pas changer la mission, redéfinir les conditions de victoire, engager des objectifs hors RoE ou engager des ressources d'échelon supérieur sans autorisation. Quand une décision excède ces limites, la règle est : communiquer, recommander, attendre. Jamais décider unilatéralement de ce qui revient au commandant.",
          },
          {
            type: "ul",
            items: [
              "Improviser DANS son propre niveau — toujours autorisé",
              "Changer sa propre tâche — seulement si l'intention l'exige et qu'il n'y a pas le temps",
              "Changer la mission de l'équipe — jamais sans autorisation",
              "Changer les RoE — jamais",
              "Engager des objectifs non planifiés — jamais sans autorisation",
              "Engager des ressources non attribuées (artillerie, aviation) — uniquement par voie hiérarchique",
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
              "Confondre « plan échoué » et « mission échouée » — l'intention survit",
              "Traiter l'improvisation comme licence d'action individuelle non communiquée",
              "Coller au plan initial quand les conditions qui le justifiaient ont changé",
              "Décider au-delà de son niveau parce que « le commandant ne répond pas »",
              "Ignorer les branches préparées et improviser à la place — planification gaspillée",
              "Communiquer l'initiative prise seulement après l'opération — le commandant doit savoir pendant",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les unités ukrainiennes documentent un phénomène constant : le plan d'assaut se désintègre dans les 15 minutes après le franchissement de la ligne, à cause de l'artillerie, des FPV ou d'une réaction ennemie imprévue. Les unités qui gagnent sont celles où chaque chef de groupe connaît les trois choses qui ne changent PAS (l'objectif, la limite temporelle, la règle d'engagement sur les civils) et improvise tout le reste. Les unités qui perdent sont celles qui tentent de reconstruire le plan initial au lieu de s'adapter à ce qui est effectivement possible.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
