import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "L'After Action Review (AAR) è la pratica strutturata di estrazione di lezioni da un'azione conclusa. Non è un debriefing emotivo né una sessione di colpe: è uno strumento di apprendimento organizzativo. Una unità che esegue AAR sistematici migliora sopravvivenza ed efficacia; una unità che li salta ripete gli stessi errori.",
    sections: [
      {
        heading: "Le quattro domande",
        blocks: [
          {
            type: "p",
            text: "L'AAR si struttura attorno a quattro domande standard, in quest'ordine preciso. Saltare o invertire l'ordine fa collassare il processo.",
          },
          {
            type: "ol",
            items: [
              "Cosa doveva succedere? (la missione assegnata, l'intento, il piano)",
              "Cosa è successo realmente? (i fatti, non le interpretazioni)",
              "Perché c'è stata differenza? (analisi delle cause, individuali e di sistema)",
              "Cosa miglioriamo per la prossima volta? (azioni concrete, assegnate, datate)",
            ],
          },
          {
            type: "callout",
            title: "Distinzione critica",
            body: "Cosa è successo è una ricostruzione fattuale costruita da tutti i presenti, confrontando memorie, radio log, video. Non è 'cosa pensavi fosse successo'. Le distorsioni percettive in combattimento producono inevitabilmente discrepanze fra testimoni — l'AAR le riconcilia esplicitamente.",
          },
        ],
      },
      {
        heading: "Regola no-blame",
        blocks: [
          {
            type: "p",
            text: "L'AAR funziona solo se ogni partecipante può dichiarare un errore senza conseguenze punitive. La regola no-blame non significa che gli errori siano accettati: significa che l'analisi pubblica dell'errore è separata dalla sanzione disciplinare eventuale (che si gestisce in canale separato, se necessario). Se l'errore confessato in AAR produce punizione, la prossima volta nessuno confesserà nulla — e l'unità smetterà di imparare.",
          },
          {
            type: "ul",
            items: [
              "Chi parla per primo: il subordinato di livello più basso (per non essere intimidito dopo)",
              "Chi parla per ultimo: il comandante dell'azione (per non condizionare gli altri)",
              "Nessun grado nominato in AAR — l'analisi è di azioni, non di persone",
              "Le critiche si fanno su comportamenti specifici, non su caratteristiche personali",
              "Non si discute fuori dall'AAR — quello che si dice resta, quello che non si dice non torna",
            ],
          },
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "Il leader che usa l'AAR per umiliare uno specifico subordinato distrugge non solo quel subordinato ma il valore di tutti gli AAR successivi. È un errore che si paga per mesi. La critica individuale severa, se necessaria, si fa in privato dopo l'AAR pubblico, non durante.",
          },
        ],
      },
      {
        heading: "Struttura della sessione",
        blocks: [
          {
            type: "p",
            text: "Una sessione AAR per un evento tattico (assalto, pattuglia, contatto) dura 30–60 minuti. Per operazioni più ampie può estendersi a 2 ore. Il facilitatore non deve essere il comandante dell'azione — preferibilmente il vice o un osservatore esterno. Lo strumento di supporto è una sequenza visiva: timeline, mappa, video drone se disponibile.",
          },
          {
            type: "table",
            headers: ["Fase", "Durata", "Contenuto", "Output"],
            rows: [
              ["Apertura", "5 min", "Ricapitolare regole no-blame, missione assegnata", "Allineamento"],
              ["Cosa doveva succedere", "5–10 min", "Piano, intento, condizioni di vittoria", "Riferimento"],
              ["Cosa è successo", "15–25 min", "Timeline fattuale ricostruita", "Narrativa condivisa"],
              ["Perché differenza", "10–15 min", "Cause individuali, di sistema, esterne", "Diagnosi"],
              ["Cosa miglioriamo", "5–10 min", "Azioni concrete assegnate", "To-do list"],
              ["Chiusura", "5 min", "Sintesi, lessons learned scritte", "Documento"],
            ],
          },
        ],
      },
      {
        heading: "Tipi di lezioni",
        blocks: [
          {
            type: "p",
            text: "Le lezioni estratte da un AAR si dividono in tre categorie, ognuna con destinazione diversa. Mescolarle confonde le azioni correttive.",
          },
          {
            type: "ul",
            items: [
              "Tecniche individuali: si correggono in addestramento (es. 'l'MG ha esposto 90% del corpo nel cambio caricatore — esercizio di prone reload')",
              "Procedure di team: si modifica la SOP (es. 'react-to-FPV non includeva ordine di immobilità — aggiungere step 0')",
              "Sistemiche: si comunicano al livello superiore (es. 'EW di brigata non ha coperto l'asse di assalto per 8 minuti — escalation a S3')",
            ],
          },
          {
            type: "p",
            text: "Una lezione senza azione è inutile. Ogni voce della to-do list deve avere: azione concreta, responsabile, scadenza, criterio di completamento. 'Migliorare la coordinazione drone' non è una lezione — è un titolo. 'Drone pilot riceve checklist preflight standardizzata entro venerdì, validata da team leader' è una lezione.",
          },
        ],
      },
      {
        heading: "AAR sotto stress operativo",
        blocks: [
          {
            type: "p",
            text: "In operazioni continue, l'AAR completo (30–60 min) non è sempre fattibile. Esistono varianti compresse. L'hot-wash è un AAR di 5 minuti subito dopo l'azione, con tre domande sole: cosa è andato bene, cosa è andato male, cosa cambiamo subito. L'hot-wash non sostituisce l'AAR formale (che si tiene quando le condizioni lo permettono) ma evita di perdere informazioni urgenti.",
          },
          {
            type: "ol",
            items: [
              "Hot-wash (5 min, subito dopo): cattura urgenze, allinea team",
              "AAR formale (30–60 min, entro 12–24 h): analisi completa, no-blame, documentata",
              "AAR di rotazione (2 h, fine ciclo operativo): consolidamento, lessons da propagare a unità",
              "AAR di missione (varia, fine missione complessiva): per il livello superiore",
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
              "Trasformare l'AAR in tribunale — il prossimo AAR diventerà silenzio",
              "Saltare l'AAR perché 'tutto è andato bene' — anche il successo va analizzato",
              "Permettere al comandante di parlare per primo — condiziona gli altri",
              "Confondere descrizione fattuale con interpretazione causale",
              "Produrre lessons senza azioni concrete e responsabili",
              "Non documentare — la lezione si perde con la rotazione del personale",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I battaglioni ucraini più efficaci documentano AAR scritti per ogni assalto, conservati in un repository accessibile a tutti i comandanti. L'evoluzione tattica delle unità ucraine — dalla difesa statica del 2022 al fuoco di precisione del 2024 — è in larga parte il risultato di questo processo cumulativo. I volontari internazionali che si integrano in unità con cultura AAR matura imparano in settimane ciò che altrove richiede mesi. Chi si integra in unità che saltano l'AAR ripete gli errori dei predecessori e rischia di pagarli con la vita.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "The After Action Review (AAR) is the structured practice of extracting lessons from a completed action. It is not emotional debriefing nor a blame session: it is an organisational learning tool. A unit that runs systematic AARs improves survival and effectiveness; a unit that skips them repeats the same mistakes.",
    sections: [
      {
        heading: "The four questions",
        blocks: [
          {
            type: "p",
            text: "The AAR structures around four standard questions, in this precise order. Skipping or inverting the order collapses the process.",
          },
          {
            type: "ol",
            items: [
              "What was supposed to happen? (assigned mission, intent, plan)",
              "What actually happened? (facts, not interpretations)",
              "Why was there a difference? (analysis of causes, individual and systemic)",
              "What do we improve for next time? (concrete actions, assigned, dated)",
            ],
          },
          {
            type: "callout",
            title: "Critical distinction",
            body: "What happened is a factual reconstruction built by everyone present, comparing memories, radio logs, video. It is not 'what you thought happened'. Perceptual distortions in combat inevitably produce discrepancies between witnesses — the AAR reconciles them explicitly.",
          },
        ],
      },
      {
        heading: "No-blame rule",
        blocks: [
          {
            type: "p",
            text: "AAR works only if every participant can declare an error without punitive consequences. No-blame does not mean errors are accepted: it means public analysis of error is separated from possible disciplinary sanction (handled in a separate channel, if necessary). If error confessed in AAR produces punishment, next time no one will confess anything — and the unit will stop learning.",
          },
          {
            type: "ul",
            items: [
              "Who speaks first: the lowest-ranking subordinate (so as not to be intimidated later)",
              "Who speaks last: the commander of the action (so as not to condition others)",
              "No rank named in AAR — analysis is of actions, not of persons",
              "Critiques are on specific behaviours, not personal traits",
              "No discussion outside AAR — what is said stays, what is unsaid does not return",
            ],
          },
          {
            type: "warn",
            title: "WARNING",
            body: "A leader who uses AAR to humiliate a specific subordinate destroys not only that subordinate but the value of all subsequent AARs. It is a mistake paid for months. Severe individual critique, if necessary, is done in private after the public AAR, not during.",
          },
        ],
      },
      {
        heading: "Session structure",
        blocks: [
          {
            type: "p",
            text: "An AAR session for a tactical event (assault, patrol, contact) lasts 30–60 minutes. For larger operations it may extend to 2 hours. The facilitator should not be the action's commander — preferably the deputy or an external observer. Support tools are a visual sequence: timeline, map, drone video if available.",
          },
          {
            type: "table",
            headers: ["Phase", "Duration", "Content", "Output"],
            rows: [
              ["Opening", "5 min", "Recap no-blame rules, assigned mission", "Alignment"],
              ["What should have happened", "5–10 min", "Plan, intent, victory conditions", "Reference"],
              ["What happened", "15–25 min", "Factual timeline reconstructed", "Shared narrative"],
              ["Why difference", "10–15 min", "Individual, systemic, external causes", "Diagnosis"],
              ["What we improve", "5–10 min", "Concrete actions assigned", "To-do list"],
              ["Closing", "5 min", "Summary, written lessons learned", "Document"],
            ],
          },
        ],
      },
      {
        heading: "Types of lessons",
        blocks: [
          {
            type: "p",
            text: "Lessons extracted from an AAR fall into three categories, each with a different destination. Mixing them confuses corrective actions.",
          },
          {
            type: "ul",
            items: [
              "Individual technical: corrected in training (e.g. 'MG exposed 90% of body during mag change — prone reload drill')",
              "Team procedures: modify the SOP (e.g. 'react-to-FPV did not include immobility order — add step 0')",
              "Systemic: communicated to higher level (e.g. 'brigade EW did not cover assault axis for 8 minutes — escalate to S3')",
            ],
          },
          {
            type: "p",
            text: "A lesson without an action is useless. Every to-do list item must have: concrete action, owner, deadline, completion criterion. 'Improve drone coordination' is not a lesson — it is a title. 'Drone pilot receives a standardised preflight checklist by Friday, validated by team leader' is a lesson.",
          },
        ],
      },
      {
        heading: "AAR under operational stress",
        blocks: [
          {
            type: "p",
            text: "In continuous operations, the full AAR (30–60 min) is not always feasible. Compressed variants exist. The hot-wash is a 5-minute AAR immediately after action, with three questions only: what went well, what went badly, what we change immediately. Hot-wash does not replace formal AAR (held when conditions permit) but avoids losing urgent information.",
          },
          {
            type: "ol",
            items: [
              "Hot-wash (5 min, immediately after): captures urgencies, aligns team",
              "Formal AAR (30–60 min, within 12–24 h): full analysis, no-blame, documented",
              "Rotation AAR (2 h, end of operational cycle): consolidation, lessons to propagate",
              "Mission AAR (varies, end of overall mission): for higher level",
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
              "Turning AAR into a tribunal — the next AAR becomes silence",
              "Skipping AAR because 'everything went well' — success must also be analysed",
              "Letting the commander speak first — conditions everyone else",
              "Confusing factual description with causal interpretation",
              "Producing lessons without concrete actions and owners",
              "Not documenting — the lesson is lost with personnel rotation",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The most effective Ukrainian battalions document written AARs for every assault, stored in a repository accessible to all commanders. The tactical evolution of Ukrainian units — from static 2022 defence to precision fires in 2024 — is largely the result of this cumulative process. International volunteers who integrate into units with a mature AAR culture learn in weeks what elsewhere takes months. Those who integrate into units that skip AAR repeat predecessors' mistakes and risk paying with their lives.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O After Action Review (AAR) é a prática estruturada de extração de lições de uma ação concluída. Não é debrief emocional nem sessão de culpas: é ferramenta de aprendizado organizacional. Uma unidade que executa AAR sistemáticos melhora sobrevivência e eficácia; uma unidade que os pula repete os mesmos erros.",
    sections: [
      {
        heading: "As quatro perguntas",
        blocks: [
          {
            type: "p",
            text: "O AAR se estrutura em quatro perguntas padrão, nesta ordem precisa. Pular ou inverter a ordem faz o processo colapsar.",
          },
          {
            type: "ol",
            items: [
              "O que deveria ter acontecido? (missão atribuída, intenção, plano)",
              "O que aconteceu de fato? (fatos, não interpretações)",
              "Por que houve diferença? (análise de causas, individuais e sistêmicas)",
              "O que melhoramos para a próxima vez? (ações concretas, atribuídas, datadas)",
            ],
          },
          {
            type: "callout",
            title: "Distinção crítica",
            body: "O que aconteceu é uma reconstrução factual construída por todos os presentes, comparando memórias, logs de rádio, vídeo. Não é 'o que você achou que aconteceu'. Distorções perceptivas em combate produzem inevitavelmente discrepâncias entre testemunhas — o AAR as reconcilia explicitamente.",
          },
        ],
      },
      {
        heading: "Regra no-blame",
        blocks: [
          {
            type: "p",
            text: "O AAR só funciona se cada participante puder declarar um erro sem consequência punitiva. No-blame não significa que os erros são aceitos: significa que a análise pública do erro é separada da eventual sanção disciplinar (que se gere em canal separado, se necessário). Se o erro confessado em AAR produz punição, na próxima vez ninguém confessará nada — e a unidade parará de aprender.",
          },
          {
            type: "ul",
            items: [
              "Quem fala primeiro: o subordinado de menor patente (para não ser intimidado depois)",
              "Quem fala por último: o comandante da ação (para não condicionar os outros)",
              "Sem patente nomeada no AAR — a análise é de ações, não de pessoas",
              "Críticas em comportamentos específicos, não em traços pessoais",
              "Sem discussão fora do AAR — o que se diz fica, o que não se diz não volta",
            ],
          },
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "O líder que usa o AAR para humilhar um subordinado específico destrói não só esse subordinado mas o valor de todos os AAR subsequentes. É um erro que se paga por meses. Crítica individual severa, se necessária, é feita em privado após o AAR público, não durante.",
          },
        ],
      },
      {
        heading: "Estrutura da sessão",
        blocks: [
          {
            type: "p",
            text: "Uma sessão AAR para evento tático (assalto, patrulha, contato) dura 30–60 minutos. Para operações maiores pode estender-se a 2 horas. O facilitador não deve ser o comandante da ação — preferivelmente o substituto ou observador externo. Ferramenta de apoio: sequência visual — timeline, mapa, vídeo de drone se houver.",
          },
          {
            type: "table",
            headers: ["Fase", "Duração", "Conteúdo", "Output"],
            rows: [
              ["Abertura", "5 min", "Recapitular regras no-blame, missão atribuída", "Alinhamento"],
              ["O que deveria ter acontecido", "5–10 min", "Plano, intenção, condições de vitória", "Referência"],
              ["O que aconteceu", "15–25 min", "Timeline factual reconstruída", "Narrativa compartilhada"],
              ["Por que diferença", "10–15 min", "Causas individuais, sistêmicas, externas", "Diagnóstico"],
              ["O que melhoramos", "5–10 min", "Ações concretas atribuídas", "To-do list"],
              ["Encerramento", "5 min", "Síntese, lessons learned escritas", "Documento"],
            ],
          },
        ],
      },
      {
        heading: "Tipos de lições",
        blocks: [
          {
            type: "p",
            text: "As lições extraídas de um AAR dividem-se em três categorias, cada uma com destino diferente. Misturá-las confunde as ações corretivas.",
          },
          {
            type: "ul",
            items: [
              "Técnicas individuais: corrigem-se em treino (ex.: 'o MG expôs 90% do corpo na troca de carregador — exercício de prone reload')",
              "Procedimentos de team: modifica-se a SOP (ex.: 'react-to-FPV não incluía ordem de imobilidade — adicionar step 0')",
              "Sistêmicas: comunicam-se ao escalão superior (ex.: 'EW de brigada não cobriu o eixo de assalto por 8 minutos — escalar para S3')",
            ],
          },
          {
            type: "p",
            text: "Uma lição sem ação é inútil. Cada item da to-do list deve ter: ação concreta, responsável, prazo, critério de conclusão. 'Melhorar a coordenação do drone' não é lição — é título. 'Drone pilot recebe checklist preflight padronizado até sexta-feira, validada pelo team leader' é lição.",
          },
        ],
      },
      {
        heading: "AAR sob estresse operacional",
        blocks: [
          {
            type: "p",
            text: "Em operações contínuas, o AAR completo (30–60 min) nem sempre é viável. Existem variantes comprimidas. O hot-wash é um AAR de 5 minutos imediatamente após a ação, com três perguntas: o que foi bem, o que foi mal, o que mudamos já. Hot-wash não substitui o AAR formal (que ocorre quando as condições permitem) mas evita perder informação urgente.",
          },
          {
            type: "ol",
            items: [
              "Hot-wash (5 min, logo após): captura urgências, alinha team",
              "AAR formal (30–60 min, em 12–24 h): análise completa, no-blame, documentada",
              "AAR de rotação (2 h, fim do ciclo operacional): consolidação, lessons a propagar",
              "AAR de missão (varia, fim da missão geral): para o escalão superior",
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
              "Transformar o AAR em tribunal — o próximo AAR vira silêncio",
              "Pular o AAR porque 'deu tudo certo' — sucesso também precisa ser analisado",
              "Permitir que o comandante fale primeiro — condiciona os outros",
              "Confundir descrição factual com interpretação causal",
              "Produzir lessons sem ações concretas e responsáveis",
              "Não documentar — a lição se perde com a rotação de pessoal",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Os batalhões ucranianos mais eficazes documentam AAR escritos para cada assalto, guardados em repositório acessível a todos os comandantes. A evolução tática das unidades ucranianas — da defesa estática de 2022 ao fogo de precisão de 2024 — é em larga medida resultado desse processo cumulativo. Voluntários internacionais que se integram em unidades com cultura AAR madura aprendem em semanas o que em outro lugar leva meses. Quem se integra em unidades que pulam o AAR repete os erros dos antecessores e arrisca pagá-los com a vida.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "L'After Action Review (AAR) est la pratique structurée d'extraction des leçons d'une action achevée. Ce n'est pas un debriefing émotionnel ni une session de blâme : c'est un outil d'apprentissage organisationnel. Une unité qui conduit des AAR systématiques améliore sa survie et son efficacité ; une unité qui les saute répète les mêmes erreurs.",
    sections: [
      {
        heading: "Les quatre questions",
        blocks: [
          {
            type: "p",
            text: "L'AAR se structure autour de quatre questions standard, dans cet ordre précis. Sauter ou inverser l'ordre fait s'effondrer le processus.",
          },
          {
            type: "ol",
            items: [
              "Que devait-il se passer ? (mission assignée, intention, plan)",
              "Que s'est-il réellement passé ? (faits, pas interprétations)",
              "Pourquoi y a-t-il eu une différence ? (analyse des causes, individuelles et systémiques)",
              "Que faisons-nous mieux la prochaine fois ? (actions concrètes, assignées, datées)",
            ],
          },
          {
            type: "callout",
            title: "Distinction critique",
            body: "Ce qui s'est passé est une reconstruction factuelle élaborée par tous les présents, en confrontant souvenirs, logs radio, vidéo. Ce n'est pas « ce que vous pensiez qu'il s'est passé ». Les distorsions perceptives en combat produisent inévitablement des écarts entre témoins — l'AAR les réconcilie explicitement.",
          },
        ],
      },
      {
        heading: "Règle no-blame",
        blocks: [
          {
            type: "p",
            text: "L'AAR ne fonctionne que si chaque participant peut déclarer une erreur sans conséquence punitive. No-blame ne signifie pas que les erreurs sont acceptées : cela signifie que l'analyse publique de l'erreur est séparée de la sanction disciplinaire éventuelle (gérée dans un canal séparé, si nécessaire). Si l'erreur confessée en AAR produit une punition, la prochaine fois personne ne confessera rien — et l'unité cessera d'apprendre.",
          },
          {
            type: "ul",
            items: [
              "Qui parle en premier : le subordonné le moins gradé (pour ne pas être intimidé après)",
              "Qui parle en dernier : le commandant de l'action (pour ne pas conditionner les autres)",
              "Aucun grade nommé en AAR — l'analyse porte sur des actions, pas sur des personnes",
              "Les critiques portent sur des comportements précis, pas sur des traits personnels",
              "Aucune discussion hors AAR — ce qui est dit reste, ce qui n'est pas dit ne revient pas",
            ],
          },
          {
            type: "warn",
            title: "ATTENTION",
            body: "Le chef qui utilise l'AAR pour humilier un subordonné précis détruit non seulement ce subordonné mais la valeur de tous les AAR suivants. C'est une erreur qui se paie pendant des mois. La critique individuelle sévère, si nécessaire, se fait en privé après l'AAR public, pas pendant.",
          },
        ],
      },
      {
        heading: "Structure de la session",
        blocks: [
          {
            type: "p",
            text: "Une session AAR pour un événement tactique (assaut, patrouille, contact) dure 30–60 minutes. Pour des opérations plus larges, jusqu'à 2 heures. Le facilitateur ne doit pas être le commandant de l'action — de préférence le second ou un observateur externe. Outil d'appui : séquence visuelle — timeline, carte, vidéo drone si disponible.",
          },
          {
            type: "table",
            headers: ["Phase", "Durée", "Contenu", "Output"],
            rows: [
              ["Ouverture", "5 min", "Rappeler règles no-blame, mission assignée", "Alignement"],
              ["Que devait-il se passer", "5–10 min", "Plan, intention, conditions de victoire", "Référence"],
              ["Ce qui s'est passé", "15–25 min", "Timeline factuelle reconstruite", "Récit partagé"],
              ["Pourquoi différence", "10–15 min", "Causes individuelles, systémiques, externes", "Diagnostic"],
              ["Ce qu'on améliore", "5–10 min", "Actions concrètes assignées", "To-do list"],
              ["Clôture", "5 min", "Synthèse, lessons learned écrites", "Document"],
            ],
          },
        ],
      },
      {
        heading: "Types de leçons",
        blocks: [
          {
            type: "p",
            text: "Les leçons tirées d'un AAR se rangent en trois catégories, chacune avec une destination différente. Les mélanger brouille les actions correctives.",
          },
          {
            type: "ul",
            items: [
              "Techniques individuelles : se corrigent à l'entraînement (ex. : « le MG a exposé 90% du corps au changement de chargeur — exercice de prone reload »)",
              "Procédures d'équipe : on modifie la SOP (ex. : « react-to-FPV n'incluait pas l'ordre d'immobilité — ajouter step 0 »)",
              "Systémiques : on remonte au niveau supérieur (ex. : « la GE de brigade n'a pas couvert l'axe d'assaut pendant 8 minutes — escalader au S3 »)",
            ],
          },
          {
            type: "p",
            text: "Une leçon sans action est inutile. Chaque entrée de la to-do list doit avoir : action concrète, responsable, échéance, critère d'achèvement. « Améliorer la coordination drone » n'est pas une leçon — c'est un titre. « Le pilote drone reçoit une checklist pré-vol standardisée d'ici vendredi, validée par le chef d'équipe » est une leçon.",
          },
        ],
      },
      {
        heading: "AAR sous stress opérationnel",
        blocks: [
          {
            type: "p",
            text: "En opérations continues, l'AAR complet (30–60 min) n'est pas toujours faisable. Des variantes compressées existent. Le hot-wash est un AAR de 5 minutes immédiatement après l'action, avec trois questions seulement : ce qui a bien marché, ce qui a mal marché, ce qu'on change tout de suite. Le hot-wash ne remplace pas l'AAR formel (tenu quand les conditions le permettent) mais évite de perdre des informations urgentes.",
          },
          {
            type: "ol",
            items: [
              "Hot-wash (5 min, juste après) : capture les urgences, aligne l'équipe",
              "AAR formel (30–60 min, sous 12–24 h) : analyse complète, no-blame, documentée",
              "AAR de rotation (2 h, fin de cycle opérationnel) : consolidation, leçons à propager",
              "AAR de mission (variable, fin de mission globale) : pour le niveau supérieur",
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
              "Transformer l'AAR en tribunal — le prochain AAR deviendra silence",
              "Sauter l'AAR parce que « tout s'est bien passé » — le succès doit aussi être analysé",
              "Laisser le commandant parler en premier — conditionne tous les autres",
              "Confondre description factuelle et interprétation causale",
              "Produire des leçons sans actions concrètes ni responsables",
              "Ne pas documenter — la leçon se perd avec la rotation du personnel",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les bataillons ukrainiens les plus efficaces documentent des AAR écrits pour chaque assaut, conservés dans un répertoire accessible à tous les commandants. L'évolution tactique des unités ukrainiennes — de la défense statique de 2022 aux feux de précision de 2024 — résulte largement de ce processus cumulatif. Les volontaires internationaux qui s'intègrent dans des unités à culture AAR mature apprennent en semaines ce qui ailleurs prend des mois. Ceux qui s'intègrent dans des unités qui sautent l'AAR répètent les erreurs des prédécesseurs et risquent de les payer de leur vie.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
