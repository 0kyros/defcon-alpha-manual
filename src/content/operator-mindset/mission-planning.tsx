import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La pianificazione di missione è il processo che trasforma un compito assegnato in un'esecuzione coordinata. Un piano scarso non viene salvato dall'eroismo; un piano completo riduce il numero di decisioni che vanno prese sotto fuoco. Questo capitolo descrive l'analisi METT-TC, lo sviluppo dei corsi d'azione, le contingenze e il back-brief.",
    sections: [
      {
        heading: "Analisi METT-TC",
        blocks: [
          {
            type: "p",
            text: "METT-TC è il framework standard NATO per l'analisi della missione. Sei fattori da considerare prima di formulare qualunque corso d'azione. Saltare uno dei sei è la causa più frequente di piani fragili.",
          },
          {
            type: "table",
            headers: ["Fattore", "Domanda chiave", "Output"],
            rows: [
              ["M — Mission", "Cosa devo ottenere e perché", "Task + Purpose"],
              ["E — Enemy", "Chi c'è, dove, con cosa, cosa probabilmente fa", "Most likely / Most dangerous COA"],
              ["T — Terrain & Weather", "OCOKA: osservazione, copertura, ostacoli, key terrain, avvicinamenti", "Mappa con annotazioni tattiche"],
              ["T — Troops available", "Cosa ho: uomini, armi, supporti, EW, droni", "Inventario operativo"],
              ["T — Time available", "Quanto tempo per pianificare, prepararsi, eseguire", "Timeline 1/3 — 2/3"],
              ["C — Civil considerations", "Civili presenti, infrastrutture, conseguenze politiche", "Constraint list"],
            ],
          },
          {
            type: "callout",
            title: "Regola del terzo",
            body: "Del tempo totale disponibile, il comandante usa al massimo 1/3 per il proprio pianificare. Gli altri 2/3 sono riservati ai subordinati per il loro pianificare, briefing, rehearsal. Se ricevi una missione alle 1800 per le 0600, devi emetterla ai subordinati entro le 2200. Saltare la regola del terzo strozza il team.",
          },
        ],
      },
      {
        heading: "Sviluppo del corso d'azione (COA)",
        blocks: [
          {
            type: "p",
            text: "Un COA è una soluzione completa al problema della missione. Si sviluppano almeno due COA contrapposti e si scelgono confrontandoli su criteri espliciti. Un solo COA non è una pianificazione — è un wishful thinking.",
          },
          {
            type: "ol",
            items: [
              "Generare 2–3 COA che soddisfino la missione con approcci diversi",
              "Verificare ogni COA contro criteri di fattibilità (suitable, feasible, acceptable, distinguishable, complete)",
              "Confrontare i COA sui criteri di confronto (rischio, sorpresa, semplicità, flessibilità, tempo)",
              "Selezionare il COA preferito e identificare branches/sequels",
              "Sviluppare il COA selezionato in piano dettagliato",
            ],
          },
          {
            type: "ul",
            items: [
              "Suitable: il COA realizza la missione se eseguito",
              "Feasible: si può eseguire con le risorse disponibili nel tempo disponibile",
              "Acceptable: il costo (rischio, perdite) è giustificabile",
              "Distinguishable: si distingue dagli altri COA in modo significativo",
              "Complete: copre tutta la durata della missione",
            ],
          },
        ],
      },
      {
        heading: "Contingenze",
        blocks: [
          {
            type: "p",
            text: "Una contingenza è un piano subordinato per affrontare un evento imprevisto ma plausibile. Non si pianifica tutto: si pianificano gli eventi ad alta probabilità e alto impatto. Tre tipi: branches (devi cambiare strada), sequels (cosa fare dopo aver completato), abort criteria (quando interrompere).",
          },
          {
            type: "table",
            headers: ["Evento", "Contingenza", "Trigger"],
            rows: [
              ["Compagno ferito grave", "CASEVAC prioritario, rally point Echo", "MARCH risultato rosso"],
              ["FPV in arrivo", "Hard cover, EW se disponibile, freeze 60 s", "Buzzing sonoro o spotter avvisa"],
              ["Strada bloccata", "Bypass su rotta alternativa Bravo", "Recon avvisa o veicolo punto"],
              ["Compromissione OPSEC", "Rottura contatto, ripiego, riposizionamento", "Drone osservato, contatto inatteso"],
              ["Comms perse", "Rendez-vous a check point Charlie alle xx:30", "30 min di buio radio"],
            ],
          },
          {
            type: "p",
            text: "Le abort criteria sono le condizioni che fanno annullare la missione. Devono essere stabilite prima, non improvvisate. Esempio: 'aborta se perdiamo 2 uomini prima di raggiungere l'obiettivo' oppure 'aborta se i droni di supporto non sono on-station entro H+15'.",
          },
        ],
      },
      {
        heading: "Briefing e back-brief",
        blocks: [
          {
            type: "p",
            text: "Il briefing trasmette il piano ai subordinati. Il back-brief è il momento in cui i subordinati ripetono il piano nella propria sintesi al comandante, dimostrando di averlo capito. Saltare il back-brief produce esecuzioni divergenti dal piano. Il formato standard di briefing è OPORD o, in versione compressa, FRAGO.",
          },
          {
            type: "ol",
            items: [
              "1. Situation: nemico, amici, terreno, civili",
              "2. Mission: il task + purpose espresso in una frase",
              "3. Execution: intento, schema di manovra, compiti per ciascun elemento, coordination",
              "4. Service & support: logistica, medical, CASEVAC, ammo",
              "5. Command & signal: chi comanda, frequenze, brevity codes",
            ],
          },
          {
            type: "callout",
            title: "Back-brief in 60 secondi",
            body: "Ogni team leader subordinato ripete: 'La nostra missione è X entro Y, perché Z. Il mio compito è A; lavoro con B nella fase 1; in fase 2 ripiego su C. Vincoli: D, E. Comms su frequenza F. ROE: G.' Se non riesce a farlo in 60 secondi, il piano non è ancora stato compreso.",
          },
        ],
      },
      {
        heading: "Rehearsal",
        blocks: [
          {
            type: "p",
            text: "Il rehearsal è la prova concreta del piano prima dell'esecuzione. Tre forme: rock drill (modello fisico in 2D con sassi e corde), walk-through (esecuzione lenta in terreno simile), live rehearsal (esecuzione completa con armi senza fuoco). Anche un rock drill di 20 minuti aumenta enormemente la probabilità di successo.",
          },
          {
            type: "ul",
            items: [
              "Identifica i punti di sincronizzazione critici (chi muove quando rispetto a chi)",
              "Espone gli errori del piano prima che costino vite",
              "Forza i subordinati a verbalizzare il loro ruolo",
              "Permette al medico, allo specialist comms, al drone team di provare le proprie sequenze",
              "Ultimo rehearsal: in piena attrezzatura, in condizioni di luce simili all'esecuzione",
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
              "Saltare l'analisi del terreno perché 'lo conosco a memoria'",
              "Sviluppare un solo COA e dichiararlo 'il piano' senza confronto",
              "Trasmettere il piano via chat senza back-brief — frammentazione delle interpretazioni",
              "Non definire abort criteria — la missione si autoperpetua oltre il punto sensato",
              "Ignorare i civili nell'analisi — sorprese politiche e propagandistiche",
              "Saltare il rehearsal per fretta — costoso dopo, gratuito prima",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le unità ucraine che vincono assalti in zona LOC documentano un pattern: 4–8 ore di pianificazione METT-TC formale per ogni ora di assalto, due COA confrontati su rischio drone vs rischio artiglieria, almeno un rock drill di 20–40 minuti, back-brief individuale per ogni squad leader. Le unità che perdono saltano la pianificazione formale ('non c'è tempo'), poi spendono il tempo risparmiato a improvvisare sotto fuoco. La pianificazione non è tempo perso — è tempo investito nella riduzione delle decisioni sotto stress.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Mission planning is the process that turns an assigned task into a coordinated execution. A poor plan is not rescued by heroism; a complete plan reduces the number of decisions that must be taken under fire. This chapter describes METT-TC analysis, course of action development, contingencies and back-brief.",
    sections: [
      {
        heading: "METT-TC analysis",
        blocks: [
          {
            type: "p",
            text: "METT-TC is the NATO-standard framework for mission analysis. Six factors to consider before formulating any course of action. Skipping one of the six is the most frequent cause of fragile plans.",
          },
          {
            type: "table",
            headers: ["Factor", "Key question", "Output"],
            rows: [
              ["M — Mission", "What must I achieve and why", "Task + Purpose"],
              ["E — Enemy", "Who, where, with what, what they likely do", "Most likely / Most dangerous COA"],
              ["T — Terrain & Weather", "OCOKA: observation, cover, obstacles, key terrain, avenues", "Map with tactical annotations"],
              ["T — Troops available", "What I have: men, weapons, supports, EW, drones", "Operational inventory"],
              ["T — Time available", "How much time to plan, prepare, execute", "Timeline 1/3 — 2/3"],
              ["C — Civil considerations", "Civilians present, infrastructure, political consequences", "Constraint list"],
            ],
          },
          {
            type: "callout",
            title: "One-third rule",
            body: "Of total available time, the commander uses at most 1/3 for their own planning. The other 2/3 are reserved for subordinates for their planning, briefing, rehearsal. If you receive a mission at 1800 for 0600, you must issue it to subordinates by 2200. Skipping the one-third rule strangles the team.",
          },
        ],
      },
      {
        heading: "Course of action (COA) development",
        blocks: [
          {
            type: "p",
            text: "A COA is a complete solution to the mission problem. At least two contrasting COAs are developed and chosen by comparing them on explicit criteria. A single COA is not planning — it is wishful thinking.",
          },
          {
            type: "ol",
            items: [
              "Generate 2–3 COAs that satisfy the mission with different approaches",
              "Test each COA against feasibility criteria (suitable, feasible, acceptable, distinguishable, complete)",
              "Compare COAs on comparison criteria (risk, surprise, simplicity, flexibility, time)",
              "Select preferred COA and identify branches/sequels",
              "Develop selected COA into detailed plan",
            ],
          },
          {
            type: "ul",
            items: [
              "Suitable: COA achieves the mission if executed",
              "Feasible: can be executed with available resources in available time",
              "Acceptable: cost (risk, losses) is justifiable",
              "Distinguishable: significantly distinct from other COAs",
              "Complete: covers the entire mission duration",
            ],
          },
        ],
      },
      {
        heading: "Contingencies",
        blocks: [
          {
            type: "p",
            text: "A contingency is a subordinate plan for an unforeseen but plausible event. You do not plan everything: you plan high-probability high-impact events. Three types: branches (you must change path), sequels (what to do after completion), abort criteria (when to break off).",
          },
          {
            type: "table",
            headers: ["Event", "Contingency", "Trigger"],
            rows: [
              ["Critical casualty", "Priority CASEVAC, rally Echo", "MARCH red"],
              ["FPV incoming", "Hard cover, EW if available, freeze 60 s", "Audible buzz or spotter call"],
              ["Road blocked", "Bypass on alternate route Bravo", "Recon call or point vehicle"],
              ["OPSEC compromise", "Break contact, withdraw, reposition", "Drone observed, unexpected contact"],
              ["Comms lost", "Rendezvous at check point Charlie at xx:30", "30 min of radio silence"],
            ],
          },
          {
            type: "p",
            text: "Abort criteria are the conditions that cancel the mission. They must be set in advance, not improvised. Example: 'abort if we lose 2 men before reaching the objective' or 'abort if support drones are not on-station by H+15'.",
          },
        ],
      },
      {
        heading: "Briefing and back-brief",
        blocks: [
          {
            type: "p",
            text: "The briefing transmits the plan to subordinates. The back-brief is the moment when subordinates repeat the plan in their own synthesis to the commander, demonstrating understanding. Skipping back-brief produces divergent executions. Standard briefing format is OPORD or, in compressed version, FRAGO.",
          },
          {
            type: "ol",
            items: [
              "1. Situation: enemy, friendlies, terrain, civilians",
              "2. Mission: task + purpose in one sentence",
              "3. Execution: intent, scheme of manoeuvre, tasks per element, coordination",
              "4. Service & support: logistics, medical, CASEVAC, ammo",
              "5. Command & signal: who commands, frequencies, brevity codes",
            ],
          },
          {
            type: "callout",
            title: "60-second back-brief",
            body: "Each subordinate team leader repeats: 'Our mission is X by Y, because Z. My task is A; I work with B in phase 1; in phase 2 I withdraw on C. Constraints: D, E. Comms on freq F. ROE: G.' If they cannot do it in 60 seconds, the plan is not yet understood.",
          },
        ],
      },
      {
        heading: "Rehearsal",
        blocks: [
          {
            type: "p",
            text: "Rehearsal is the concrete test of the plan before execution. Three forms: rock drill (2D physical model with rocks and string), walk-through (slow execution in similar terrain), live rehearsal (full execution with weapons no live fire). Even a 20-minute rock drill greatly increases the probability of success.",
          },
          {
            type: "ul",
            items: [
              "Identify critical synchronisation points (who moves when relative to whom)",
              "Surface plan errors before they cost lives",
              "Forces subordinates to verbalise their role",
              "Lets medic, comms specialist, drone team rehearse their sequences",
              "Final rehearsal: full kit, light conditions similar to execution",
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
              "Skipping terrain analysis because 'I know it by heart'",
              "Developing only one COA and calling it 'the plan' without comparison",
              "Transmitting the plan by chat without back-brief — fragmented interpretations",
              "Not defining abort criteria — mission self-perpetuates beyond the sensible point",
              "Ignoring civilians in analysis — political and propaganda surprises",
              "Skipping rehearsal for haste — expensive afterwards, free beforehand",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian units that win LOC assaults document a pattern: 4–8 hours of formal METT-TC planning per assault hour, two COAs compared on drone risk vs artillery risk, at least a 20–40 minute rock drill, individual back-brief per squad leader. Units that lose skip formal planning ('no time'), then spend the saved time improvising under fire. Planning is not wasted time — it is time invested in reducing the decisions taken under stress.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Planejamento de missão é o processo que transforma uma tarefa atribuída em execução coordenada. Um plano ruim não é salvo por heroísmo; um plano completo reduz o número de decisões tomadas sob fogo. Este capítulo descreve a análise METT-TC, o desenvolvimento de cursos de ação, contingências e back-brief.",
    sections: [
      {
        heading: "Análise METT-TC",
        blocks: [
          {
            type: "p",
            text: "METT-TC é o framework padrão da OTAN para análise de missão. Seis fatores a considerar antes de formular qualquer curso de ação. Pular um dos seis é a causa mais frequente de planos frágeis.",
          },
          {
            type: "table",
            headers: ["Fator", "Pergunta-chave", "Output"],
            rows: [
              ["M — Mission", "O que devo alcançar e por quê", "Task + Purpose"],
              ["E — Enemy", "Quem, onde, com o quê, o que ele provavelmente faz", "Most likely / Most dangerous COA"],
              ["T — Terrain & Weather", "OCOKA: observação, cobertura, obstáculos, key terrain, avenidas", "Mapa com anotações táticas"],
              ["T — Troops available", "O que tenho: homens, armas, apoios, EW, drones", "Inventário operacional"],
              ["T — Time available", "Quanto tempo para planejar, preparar, executar", "Timeline 1/3 — 2/3"],
              ["C — Civil considerations", "Civis presentes, infraestrutura, consequências políticas", "Constraint list"],
            ],
          },
          {
            type: "callout",
            title: "Regra do terço",
            body: "Do tempo total disponível, o comandante usa no máximo 1/3 para seu próprio planejamento. Os outros 2/3 são reservados aos subordinados para planejamento, briefing, rehearsal. Se você recebe a missão às 1800 para as 0600, deve emiti-la aos subordinados até as 2200. Pular a regra do terço estrangula o team.",
          },
        ],
      },
      {
        heading: "Desenvolvimento do curso de ação (COA)",
        blocks: [
          {
            type: "p",
            text: "Um COA é uma solução completa para o problema da missão. Pelo menos dois COAs contrastantes são desenvolvidos e escolhidos comparando-os em critérios explícitos. Um único COA não é planejamento — é wishful thinking.",
          },
          {
            type: "ol",
            items: [
              "Gerar 2–3 COAs que satisfaçam a missão com abordagens diferentes",
              "Testar cada COA contra critérios de viabilidade (suitable, feasible, acceptable, distinguishable, complete)",
              "Comparar COAs em critérios de comparação (risco, surpresa, simplicidade, flexibilidade, tempo)",
              "Selecionar COA preferido e identificar branches/sequels",
              "Desenvolver o COA selecionado em plano detalhado",
            ],
          },
          {
            type: "ul",
            items: [
              "Suitable: o COA cumpre a missão se executado",
              "Feasible: pode ser executado com recursos e tempo disponíveis",
              "Acceptable: o custo (risco, perdas) é justificável",
              "Distinguishable: significativamente distinto dos outros COAs",
              "Complete: cobre toda a duração da missão",
            ],
          },
        ],
      },
      {
        heading: "Contingências",
        blocks: [
          {
            type: "p",
            text: "Uma contingência é um plano subordinado para evento imprevisto mas plausível. Não se planeja tudo: planeja-se eventos de alta probabilidade e alto impacto. Três tipos: branches (precisa mudar rota), sequels (o que fazer após completar), abort criteria (quando interromper).",
          },
          {
            type: "table",
            headers: ["Evento", "Contingência", "Gatilho"],
            rows: [
              ["Baixa crítica", "CASEVAC prioritário, rally Echo", "MARCH vermelho"],
              ["FPV em aproximação", "Cobertura dura, EW se houver, freeze 60 s", "Zumbido ou alerta de spotter"],
              ["Estrada bloqueada", "Bypass por rota alternativa Bravo", "Recon alerta ou veículo ponta"],
              ["Comprometimento OPSEC", "Quebra de contato, retirada, reposicionamento", "Drone observado, contato inesperado"],
              ["Comms perdidas", "Rendez-vous no check point Charlie às xx:30", "30 min de silêncio rádio"],
            ],
          },
          {
            type: "p",
            text: "Abort criteria são as condições que cancelam a missão. Devem ser definidas antes, não improvisadas. Exemplo: 'aborta se perdermos 2 homens antes de chegar ao objetivo' ou 'aborta se os drones de apoio não estiverem on-station até H+15'.",
          },
        ],
      },
      {
        heading: "Briefing e back-brief",
        blocks: [
          {
            type: "p",
            text: "O briefing transmite o plano aos subordinados. O back-brief é o momento em que os subordinados repetem o plano em sua própria síntese ao comandante, demonstrando compreensão. Pular back-brief produz execuções divergentes. O formato padrão de briefing é OPORD ou, em versão compressa, FRAGO.",
          },
          {
            type: "ol",
            items: [
              "1. Situation: inimigo, amigos, terreno, civis",
              "2. Mission: task + purpose em uma frase",
              "3. Execution: intenção, esquema de manobra, tarefas por elemento, coordenação",
              "4. Service & support: logística, médico, CASEVAC, munição",
              "5. Command & signal: quem comanda, frequências, brevity codes",
            ],
          },
          {
            type: "callout",
            title: "Back-brief em 60 segundos",
            body: "Cada team leader subordinado repete: 'Nossa missão é X até Y, porque Z. Minha tarefa é A; trabalho com B na fase 1; na fase 2 retiro para C. Restrições: D, E. Comms na freq F. ROE: G.' Se não consegue em 60 segundos, o plano ainda não foi compreendido.",
          },
        ],
      },
      {
        heading: "Rehearsal",
        blocks: [
          {
            type: "p",
            text: "Rehearsal é o teste concreto do plano antes da execução. Três formas: rock drill (modelo físico 2D com pedras e cordões), walk-through (execução lenta em terreno semelhante), live rehearsal (execução completa com armas sem fogo real). Mesmo um rock drill de 20 minutos aumenta enormemente a probabilidade de sucesso.",
          },
          {
            type: "ul",
            items: [
              "Identifica os pontos críticos de sincronização (quem move quando em relação a quem)",
              "Expõe erros do plano antes que custem vidas",
              "Força os subordinados a verbalizar seu papel",
              "Permite que medic, comms specialist, drone team ensaiem suas sequências",
              "Último rehearsal: equipamento completo, condições de luz similares à execução",
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
              "Pular análise do terreno porque 'conheço de cor'",
              "Desenvolver um único COA e chamá-lo de 'o plano' sem comparação",
              "Transmitir o plano por chat sem back-brief — interpretações fragmentadas",
              "Não definir abort criteria — a missão se autoperpetua além do ponto sensato",
              "Ignorar civis na análise — surpresas políticas e propagandísticas",
              "Pular rehearsal por pressa — caro depois, gratuito antes",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Unidades ucranianas que vencem assaltos em zona LOC documentam um padrão: 4–8 horas de planejamento METT-TC formal por hora de assalto, dois COAs comparados em risco de drone vs risco de artilharia, ao menos um rock drill de 20–40 minutos, back-brief individual por squad leader. Unidades que perdem pulam o planejamento formal ('não há tempo'), e depois gastam o tempo poupado improvisando sob fogo. Planejamento não é tempo perdido — é tempo investido em reduzir decisões sob estresse.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La planification de mission est le processus qui transforme une tâche assignée en exécution coordonnée. Un mauvais plan n'est pas sauvé par l'héroïsme ; un plan complet réduit le nombre de décisions à prendre sous le feu. Ce chapitre décrit l'analyse METT-TC, le développement de modes d'action, les contingences et le back-brief.",
    sections: [
      {
        heading: "Analyse METT-TC",
        blocks: [
          {
            type: "p",
            text: "METT-TC est le cadre standard OTAN d'analyse de mission. Six facteurs à considérer avant de formuler tout mode d'action. Sauter l'un des six est la cause la plus fréquente de plans fragiles.",
          },
          {
            type: "table",
            headers: ["Facteur", "Question clé", "Output"],
            rows: [
              ["M — Mission", "Que dois-je accomplir et pourquoi", "Tâche + Intention"],
              ["E — Enemy", "Qui, où, avec quoi, ce qu'il fait probablement", "MA probable / MA dangereux"],
              ["T — Terrain & Weather", "OCOKA : observation, couvert, obstacles, key terrain, avenues", "Carte annotée tactiquement"],
              ["T — Troops available", "Ce dont je dispose : hommes, armes, appuis, GE, drones", "Inventaire opérationnel"],
              ["T — Time available", "Temps pour planifier, préparer, exécuter", "Timeline 1/3 — 2/3"],
              ["C — Civil considerations", "Civils présents, infrastructures, conséquences politiques", "Liste de contraintes"],
            ],
          },
          {
            type: "callout",
            title: "Règle du tiers",
            body: "Du temps total disponible, le commandant utilise au plus 1/3 pour sa propre planification. Les 2/3 restants sont réservés aux subordonnés pour leur planification, briefing, rehearsal. Si vous recevez une mission à 1800 pour 0600, vous devez la diffuser aux subordonnés avant 2200. Sauter la règle du tiers étrangle l'équipe.",
          },
        ],
      },
      {
        heading: "Développement du mode d'action (MA)",
        blocks: [
          {
            type: "p",
            text: "Un MA est une solution complète au problème de mission. On développe au moins deux MA contrastés et on choisit en les comparant sur des critères explicites. Un seul MA n'est pas de la planification — c'est du wishful thinking.",
          },
          {
            type: "ol",
            items: [
              "Générer 2–3 MA satisfaisant la mission par des approches différentes",
              "Tester chaque MA selon les critères de faisabilité (suitable, feasible, acceptable, distinguishable, complete)",
              "Comparer les MA selon les critères de comparaison (risque, surprise, simplicité, flexibilité, temps)",
              "Sélectionner le MA préféré et identifier branches/sequels",
              "Développer le MA retenu en plan détaillé",
            ],
          },
          {
            type: "ul",
            items: [
              "Suitable : le MA atteint la mission s'il est exécuté",
              "Feasible : exécutable avec les ressources et le temps disponibles",
              "Acceptable : le coût (risque, pertes) est justifiable",
              "Distinguishable : significativement distinct des autres MA",
              "Complete : couvre toute la durée de la mission",
            ],
          },
        ],
      },
      {
        heading: "Contingences",
        blocks: [
          {
            type: "p",
            text: "Une contingence est un plan subordonné face à un événement imprévu mais plausible. On ne planifie pas tout : on planifie les événements à haute probabilité et à fort impact. Trois types : branches (vous devez changer de voie), sequels (que faire après accomplissement), abort criteria (quand interrompre).",
          },
          {
            type: "table",
            headers: ["Événement", "Contingence", "Déclencheur"],
            rows: [
              ["Blessé critique", "CASEVAC prioritaire, rally Echo", "MARCH rouge"],
              ["FPV en approche", "Couvert dur, GE si dispo, freeze 60 s", "Vrombissement audible ou alerte spotter"],
              ["Route bloquée", "Contournement par itinéraire alternatif Bravo", "Recon avertit ou véhicule de tête"],
              ["Compromission OPSEC", "Rupture de contact, repli, repositionnement", "Drone observé, contact inattendu"],
              ["Comms perdues", "Rendez-vous au check point Charlie à xx:30", "30 min de silence radio"],
            ],
          },
          {
            type: "p",
            text: "Les abort criteria sont les conditions qui annulent la mission. À fixer avant, pas à improviser. Exemple : « abort si nous perdons 2 hommes avant d'atteindre l'objectif » ou « abort si les drones d'appui ne sont pas on-station à H+15 ».",
          },
        ],
      },
      {
        heading: "Briefing et back-brief",
        blocks: [
          {
            type: "p",
            text: "Le briefing transmet le plan aux subordonnés. Le back-brief est le moment où les subordonnés restituent le plan dans leur propre synthèse au commandant, démontrant la compréhension. Sauter le back-brief produit des exécutions divergentes. Le format standard est OPORD ou, en version compressée, FRAGO.",
          },
          {
            type: "ol",
            items: [
              "1. Situation : ennemi, amis, terrain, civils",
              "2. Mission : tâche + intention en une phrase",
              "3. Exécution : intention, schéma de manœuvre, tâches par élément, coordination",
              "4. Service & support : logistique, santé, CASEVAC, munitions",
              "5. Command & signal : qui commande, fréquences, brevity codes",
            ],
          },
          {
            type: "callout",
            title: "Back-brief en 60 secondes",
            body: "Chaque chef d'équipe subordonné restitue : « Notre mission est X pour Y, parce que Z. Ma tâche est A ; je travaille avec B en phase 1 ; en phase 2 je me replie sur C. Contraintes : D, E. Comms sur fréq F. RoE : G. » S'il n'y arrive pas en 60 secondes, le plan n'est pas encore compris.",
          },
        ],
      },
      {
        heading: "Rehearsal",
        blocks: [
          {
            type: "p",
            text: "Le rehearsal est l'épreuve concrète du plan avant l'exécution. Trois formes : rock drill (maquette physique 2D avec cailloux et ficelles), walk-through (exécution lente en terrain similaire), live rehearsal (exécution complète armes sans tir réel). Même un rock drill de 20 minutes augmente fortement la probabilité de succès.",
          },
          {
            type: "ul",
            items: [
              "Identifier les points de synchronisation critiques (qui bouge quand par rapport à qui)",
              "Faire apparaître les erreurs du plan avant qu'elles coûtent des vies",
              "Forcer les subordonnés à verbaliser leur rôle",
              "Permettre à l'infirmier, au spécialiste comms, à l'équipe drone de répéter leurs séquences",
              "Dernier rehearsal : équipement complet, conditions de lumière proches de l'exécution",
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
              "Sauter l'analyse du terrain parce qu'« on le connaît par cœur »",
              "Ne développer qu'un seul MA et l'appeler « le plan » sans comparaison",
              "Transmettre le plan par chat sans back-brief — interprétations fragmentées",
              "Ne pas définir d'abort criteria — la mission s'auto-perpétue au-delà du raisonnable",
              "Ignorer les civils dans l'analyse — surprises politiques et propagandistes",
              "Sauter le rehearsal par hâte — coûteux après, gratuit avant",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les unités ukrainiennes qui gagnent des assauts en zone LOC documentent un schéma : 4–8 heures de planification METT-TC formelle par heure d'assaut, deux MA comparés risque drone vs risque artillerie, au moins un rock drill de 20–40 minutes, back-brief individuel par chef de groupe. Les unités qui perdent sautent la planification formelle (« pas le temps »), puis dépensent le temps économisé à improviser sous le feu. La planification n'est pas du temps perdu — c'est du temps investi dans la réduction des décisions sous stress.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
