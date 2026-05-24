import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il combattimento moderno punisce la decisione tardiva più dell'errore di esecuzione. Il problema dell'operatore non è scegliere la soluzione perfetta: è chiudere il ciclo decisionale prima che il nemico chiuda il proprio. Questo capitolo tratta il framework di decisione sotto stress, i tempi reali disponibili e la regola del 70%.",
    sections: [
      {
        heading: "Il ciclo OODA",
        blocks: [
          {
            type: "p",
            text: "Osservare, Orientare, Decidere, Agire. Il valore del modello non è il diagramma: è ricordare che l'orientamento (Orient) è la fase dove si fanno gli errori, non la decisione. L'orientamento è il filtro composto da esperienza, dottrina, stato fisiologico e quadro situazionale. Sotto stress il filtro si restringe — la visione diventa tunnel, l'udito perde frequenze, la memoria operativa cala a 2–3 elementi.",
          },
          {
            type: "ol",
            items: [
              "Osservare: input grezzi (visivi, radio, fisici) — non interpretare ancora",
              "Orientare: ricondurre l'input a un pattern noto (drone, MG, fuoco indiretto, civile)",
              "Decidere: scegliere una azione fra opzioni preparate, non improvvisate",
              "Agire: eseguire e tornare a osservare l'effetto",
            ],
          },
          {
            type: "callout",
            title: "Tempo reale disponibile",
            body: "Sotto fuoco efficace la finestra utile per decidere si misura in secondi singoli. Un OODA da 30 secondi che produce la soluzione 'giusta' viene battuto da un OODA da 4 secondi che produce una soluzione 'sufficiente'. La velocità è essa stessa una soluzione.",
          },
        ],
      },
      {
        heading: "La regola del 70%",
        blocks: [
          {
            type: "p",
            text: "Se hai il 70% delle informazioni necessarie e il 70% di confidenza nel piano, esegui. Aspettare il 90% costa tempo che il nemico usa per recuperare iniziativa. La regola non è una scusa per la sciatteria: è il riconoscimento che l'informazione completa non arriva mai sul campo, e che la decisione è uno strumento di pressione tanto quanto il fuoco.",
          },
          {
            type: "ul",
            items: [
              "Sotto il 50%: raccogli ancora informazioni, sposta il problema",
              "50–70%: prepara opzioni, mantieni libertà di scelta",
              "70%+: decidi ed esegui, accetta il rischio residuo",
              "Aspettare il 90%: il nemico ha già deciso al tuo posto",
            ],
          },
        ],
      },
      {
        heading: "Decisioni preparate vs improvvisate",
        blocks: [
          {
            type: "p",
            text: "Una decisione 'in tempo reale' sotto fuoco non si inventa: si pesca da un repertorio di opzioni preparate durante l'addestramento e il briefing. Più ampio il repertorio, meno improvvisazione richiesta. Il battle drill — la sequenza addestrata di reazione a un evento specifico (contatto frontale, fuoco indiretto, IED) — è l'incarnazione operativa di questo principio.",
          },
          {
            type: "table",
            headers: ["Evento", "Decisione preparata", "Tempo target"],
            rows: [
              ["Contatto frontale", "Suppress, manovra, comunica", "< 5 s"],
              ["Fuoco indiretto in arrivo", "Disperdersi, scendere, comunicare grid", "< 3 s"],
              ["Drone FPV udito", "Coperture rigide, EW se disponibile, immobilità", "< 2 s"],
              ["IED sospetto", "Stop, 5/25, marca, by-pass", "< 10 s"],
              ["Compagno ferito grave", "Suppress, MARCH, CASEVAC request", "< 30 s"],
            ],
          },
        ],
      },
      {
        heading: "Stress e degrado decisionale",
        blocks: [
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "A frequenza cardiaca sostenuta sopra 175 bpm la capacità decisionale complessa collassa. Resta solo il riflesso addestrato. Questo non è opinione: è fisiologia documentata. L'addestramento serve a creare automatismi che funzionino al di sotto del livello cognitivo.",
          },
          {
            type: "ul",
            items: [
              "Box breathing (4-4-4-4) per riportare la FC sotto i 150 bpm prima di decidere",
              "Limitare le opzioni a 2 — sotto stress il cervello non sceglie tra 5",
              "Decidere ad alta voce — verbalizzare forza il pensiero strutturato",
              "Delegare al livello più basso possibile — meno colli di bottiglia",
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
              "Cercare il piano perfetto invece di un piano eseguibile adesso",
              "Riconsiderare la decisione mentre la si esegue — paralisi a metà azione",
              "Sovraccaricare il team leader con dettagli che dovrebbero essere automatici",
              "Confondere coraggio con velocità di decisione (sono cose diverse)",
              "Trattare l'orientamento come passaggio rapido invece che come fase critica",
              "Non aggiornare la decisione quando il quadro cambia (rigid plan trap)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte ucraino la finestra fra rilevamento e impatto si è ridotta a minuti, talvolta a secondi quando entra in gioco un FPV. Le unità che sopravvivono non sono quelle con il piano migliore — sono quelle con il ciclo decisionale più stretto al livello squad e fire team. Il comandante di plotone che vuole approvare ogni movimento perde la guerra prima di perdere il primo soldato. Mission command — intento chiaro, libertà tattica al subordinato — non è preferenza dottrinale: è condizione di sopravvivenza.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Modern combat punishes late decisions more than execution errors. The operator's problem is not picking the perfect solution: it is closing the decision cycle before the enemy closes theirs. This chapter covers the decision framework under stress, the real time windows available and the 70% rule.",
    sections: [
      {
        heading: "The OODA loop",
        blocks: [
          {
            type: "p",
            text: "Observe, Orient, Decide, Act. The value of the model is not the diagram: it is remembering that orientation is where errors are made, not decision. Orientation is the filter composed of experience, doctrine, physiological state and situational picture. Under stress the filter narrows — vision becomes tunnel, hearing loses frequencies, working memory drops to 2–3 elements.",
          },
          {
            type: "ol",
            items: [
              "Observe: raw inputs (visual, radio, physical) — do not interpret yet",
              "Orient: map the input to a known pattern (drone, MG, indirect, civilian)",
              "Decide: pick an action from prepared options, not improvised ones",
              "Act: execute and return to observing the effect",
            ],
          },
          {
            type: "callout",
            title: "Real time available",
            body: "Under effective fire the usable window to decide is measured in single seconds. A 30-second OODA that yields the 'right' solution is beaten by a 4-second OODA that yields a 'good enough' solution. Speed is itself a solution.",
          },
        ],
      },
      {
        heading: "The 70% rule",
        blocks: [
          {
            type: "p",
            text: "If you have 70% of the information needed and 70% confidence in the plan, execute. Waiting for 90% costs time the enemy uses to recover initiative. The rule is not an excuse for sloppiness: it is recognition that complete information never arrives in the field, and that decision is a pressure tool as much as fire is.",
          },
          {
            type: "ul",
            items: [
              "Below 50%: gather more, displace the problem",
              "50–70%: prepare options, retain freedom of choice",
              "70%+: decide and execute, accept residual risk",
              "Wait for 90%: the enemy has already decided for you",
            ],
          },
        ],
      },
      {
        heading: "Prepared vs improvised decisions",
        blocks: [
          {
            type: "p",
            text: "A 'real-time' decision under fire is not invented: it is drawn from a repertoire of options prepared during training and briefing. The wider the repertoire, the less improvisation required. Battle drills — the trained reaction sequences to specific events (frontal contact, indirect, IED) — are the operational embodiment of this principle.",
          },
          {
            type: "table",
            headers: ["Event", "Prepared decision", "Target time"],
            rows: [
              ["Frontal contact", "Suppress, manoeuvre, communicate", "< 5 s"],
              ["Indirect incoming", "Disperse, get low, send grid", "< 3 s"],
              ["FPV drone heard", "Hard cover, EW if available, freeze", "< 2 s"],
              ["Suspected IED", "Stop, 5/25, mark, bypass", "< 10 s"],
              ["Casualty critical", "Suppress, MARCH, CASEVAC request", "< 30 s"],
            ],
          },
        ],
      },
      {
        heading: "Stress and decision degradation",
        blocks: [
          {
            type: "warn",
            title: "WARNING",
            body: "Sustained heart rate above 175 bpm collapses complex decision-making. Only trained reflex remains. This is not opinion: it is documented physiology. Training exists to build automatisms that function below the cognitive level.",
          },
          {
            type: "ul",
            items: [
              "Box breathing (4-4-4-4) to bring HR below 150 bpm before deciding",
              "Limit options to 2 — under stress the brain does not pick between 5",
              "Decide out loud — verbalising forces structured thought",
              "Delegate to the lowest possible level — fewer bottlenecks",
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
              "Seeking the perfect plan instead of an executable plan now",
              "Reconsidering the decision while executing it — mid-action paralysis",
              "Overloading the team leader with details that should be automatic",
              "Confusing courage with decision speed (different things)",
              "Treating orientation as a quick pass instead of the critical phase",
              "Failing to update the decision when the picture changes (rigid plan trap)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Ukrainian front the window between detection and impact has shrunk to minutes, sometimes seconds when an FPV is involved. Units that survive are not those with the best plan — they are those with the tightest decision cycle at squad and fire-team level. The platoon leader who wants to approve every movement loses the war before losing the first soldier. Mission command — clear intent, tactical freedom to the subordinate — is not doctrinal preference: it is a survival condition.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O combate moderno pune a decisão tardia mais que o erro de execução. O problema do operador não é escolher a solução perfeita: é fechar o ciclo decisório antes que o inimigo feche o dele. Este capítulo cobre o framework de decisão sob estresse, as janelas reais disponíveis e a regra dos 70%.",
    sections: [
      {
        heading: "O ciclo OODA",
        blocks: [
          {
            type: "p",
            text: "Observar, Orientar, Decidir, Agir. O valor do modelo não é o diagrama: é lembrar que a orientação é onde se erra, não a decisão. A orientação é o filtro composto por experiência, doutrina, estado fisiológico e quadro situacional. Sob estresse o filtro estreita — a visão vira túnel, a audição perde frequências, a memória de trabalho cai para 2–3 elementos.",
          },
          {
            type: "ol",
            items: [
              "Observar: inputs brutos (visuais, rádio, físicos) — sem interpretar ainda",
              "Orientar: mapear o input para um padrão conhecido (drone, MG, indireto, civil)",
              "Decidir: escolher uma ação entre opções preparadas, não improvisadas",
              "Agir: executar e voltar a observar o efeito",
            ],
          },
          {
            type: "callout",
            title: "Tempo real disponível",
            body: "Sob fogo eficaz a janela útil para decidir mede-se em segundos. Um OODA de 30 s que produz a solução 'certa' é batido por um OODA de 4 s que produz uma 'suficiente'. Velocidade já é solução.",
          },
        ],
      },
      {
        heading: "A regra dos 70%",
        blocks: [
          {
            type: "p",
            text: "Se você tem 70% da informação necessária e 70% de confiança no plano, execute. Esperar 90% custa tempo que o inimigo usa para recuperar iniciativa. A regra não é desculpa para descuido: é reconhecimento de que informação completa não chega no campo, e de que decisão é tanto pressão quanto fogo.",
          },
          {
            type: "ul",
            items: [
              "Abaixo de 50%: colete mais, desloque o problema",
              "50–70%: prepare opções, mantenha liberdade de escolha",
              "70%+: decida e execute, aceite o risco residual",
              "Esperar 90%: o inimigo já decidiu por você",
            ],
          },
        ],
      },
      {
        heading: "Decisões preparadas vs improvisadas",
        blocks: [
          {
            type: "p",
            text: "Uma decisão 'em tempo real' sob fogo não se inventa: extrai-se de um repertório de opções preparadas no treino e no briefing. Quanto mais amplo o repertório, menos improvisação. O battle drill — a sequência treinada de reação a um evento específico (contato frontal, indireto, IED) — é a encarnação operacional desse princípio.",
          },
          {
            type: "table",
            headers: ["Evento", "Decisão preparada", "Tempo-alvo"],
            rows: [
              ["Contato frontal", "Suprimir, manobrar, comunicar", "< 5 s"],
              ["Fogo indireto", "Dispersar, descer, mandar grid", "< 3 s"],
              ["FPV ouvido", "Cobertura dura, EW se houver, imobilidade", "< 2 s"],
              ["IED suspeito", "Parar, 5/25, marcar, by-pass", "< 10 s"],
              ["Baixa crítica", "Suprimir, MARCH, pedir CASEVAC", "< 30 s"],
            ],
          },
        ],
      },
      {
        heading: "Estresse e degradação decisória",
        blocks: [
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "Frequência cardíaca sustentada acima de 175 bpm colapsa a decisão complexa. Resta só o reflexo treinado. Não é opinião: é fisiologia documentada. O treino existe para criar automatismos que funcionam abaixo do nível cognitivo.",
          },
          {
            type: "ul",
            items: [
              "Box breathing (4-4-4-4) para baixar FC abaixo de 150 bpm antes de decidir",
              "Limitar opções a 2 — sob estresse o cérebro não escolhe entre 5",
              "Decidir em voz alta — verbalizar força pensamento estruturado",
              "Delegar ao nível mais baixo possível — menos gargalos",
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
              "Buscar o plano perfeito em vez de um plano executável agora",
              "Reconsiderar a decisão durante a execução — paralisia no meio",
              "Sobrecarregar o team leader com detalhes que deviam ser automáticos",
              "Confundir coragem com velocidade de decisão (são coisas diferentes)",
              "Tratar orientação como passagem rápida em vez de fase crítica",
              "Não atualizar a decisão quando o quadro muda (rigid plan trap)",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front ucraniano a janela entre detecção e impacto encolheu para minutos, às vezes segundos com FPV. As unidades que sobrevivem não são as com o melhor plano — são as com o ciclo decisório mais estreito em nível squad e fire team. O comandante de pelotão que quer aprovar cada movimento perde a guerra antes de perder o primeiro soldado. Mission command — intenção clara, liberdade tática ao subordinado — não é preferência doutrinária: é condição de sobrevivência.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le combat moderne sanctionne la décision tardive plus que l'erreur d'exécution. Le problème de l'opérateur n'est pas de choisir la solution parfaite : c'est de boucler son cycle décisionnel avant que l'ennemi ne boucle le sien. Ce chapitre traite du cadre décisionnel sous stress, des fenêtres temporelles réelles et de la règle des 70%.",
    sections: [
      {
        heading: "La boucle OODA",
        blocks: [
          {
            type: "p",
            text: "Observer, Orienter, Décider, Agir. La valeur du modèle n'est pas le schéma : c'est de rappeler que l'orientation est l'étape où l'on se trompe, pas la décision. L'orientation est le filtre composé d'expérience, de doctrine, d'état physiologique et de quadro situationnel. Sous stress le filtre se rétrécit — la vision devient tunnel, l'ouïe perd des fréquences, la mémoire de travail tombe à 2–3 éléments.",
          },
          {
            type: "ol",
            items: [
              "Observer : entrées brutes (visuelles, radio, physiques) — ne pas interpréter encore",
              "Orienter : ramener l'entrée à un schéma connu (drone, MG, tir indirect, civil)",
              "Décider : choisir une action parmi des options préparées, pas improvisées",
              "Agir : exécuter et revenir à l'observation de l'effet",
            ],
          },
          {
            type: "callout",
            title: "Temps réel disponible",
            body: "Sous feu efficace la fenêtre utile pour décider se mesure en secondes. Un OODA de 30 s qui produit la « bonne » solution est battu par un OODA de 4 s qui produit une solution « suffisante ». La vitesse est elle-même une solution.",
          },
        ],
      },
      {
        heading: "La règle des 70%",
        blocks: [
          {
            type: "p",
            text: "Si vous avez 70% de l'information nécessaire et 70% de confiance dans le plan, exécutez. Attendre 90% coûte du temps que l'ennemi utilise pour reprendre l'initiative. La règle n'est pas une excuse à la négligence : c'est la reconnaissance que l'information complète n'arrive jamais sur le terrain, et que la décision est un outil de pression au même titre que le feu.",
          },
          {
            type: "ul",
            items: [
              "Sous 50% : collecter encore, déplacer le problème",
              "50–70% : préparer les options, garder la liberté de choix",
              "70%+ : décider et exécuter, accepter le risque résiduel",
              "Attendre 90% : l'ennemi a déjà décidé à votre place",
            ],
          },
        ],
      },
      {
        heading: "Décisions préparées vs improvisées",
        blocks: [
          {
            type: "p",
            text: "Une décision « en temps réel » sous feu ne s'invente pas : elle se puise dans un répertoire d'options préparées à l'entraînement et au briefing. Plus le répertoire est large, moins l'improvisation est nécessaire. Le battle drill — la séquence entraînée de réaction à un événement (contact frontal, tir indirect, IED) — est l'incarnation opérationnelle de ce principe.",
          },
          {
            type: "table",
            headers: ["Événement", "Décision préparée", "Temps cible"],
            rows: [
              ["Contact frontal", "Neutraliser, manœuvrer, communiquer", "< 5 s"],
              ["Tir indirect", "Disperser, descendre, transmettre grid", "< 3 s"],
              ["FPV entendu", "Couvert dur, GE si dispo, immobilité", "< 2 s"],
              ["IED suspecté", "Stop, 5/25, marquer, contournement", "< 10 s"],
              ["Blessé critique", "Neutraliser, MARCH, demande CASEVAC", "< 30 s"],
            ],
          },
        ],
      },
      {
        heading: "Stress et dégradation décisionnelle",
        blocks: [
          {
            type: "warn",
            title: "ATTENTION",
            body: "À fréquence cardiaque soutenue au-dessus de 175 bpm, la décision complexe s'effondre. Il ne reste que le réflexe entraîné. Ce n'est pas une opinion : c'est de la physiologie documentée. L'entraînement existe pour bâtir des automatismes qui fonctionnent en dessous du niveau cognitif.",
          },
          {
            type: "ul",
            items: [
              "Box breathing (4-4-4-4) pour ramener la FC sous 150 bpm avant de décider",
              "Limiter les options à 2 — sous stress le cerveau ne choisit pas entre 5",
              "Décider à voix haute — la verbalisation force la pensée structurée",
              "Déléguer au niveau le plus bas possible — moins de goulots",
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
              "Chercher le plan parfait au lieu d'un plan exécutable maintenant",
              "Reconsidérer la décision pendant son exécution — paralysie à mi-action",
              "Surcharger le team leader avec des détails qui devraient être automatiques",
              "Confondre courage et vitesse de décision (ce sont deux choses)",
              "Traiter l'orientation comme un passage rapide au lieu d'une phase critique",
              "Ne pas réviser la décision quand le tableau change (rigid plan trap)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front ukrainien la fenêtre entre détection et impact s'est réduite à des minutes, parfois des secondes avec un FPV. Les unités qui survivent ne sont pas celles au meilleur plan — ce sont celles dont le cycle décisionnel est le plus serré au niveau groupe et équipe. Le chef de section qui veut approuver chaque mouvement perd la guerre avant de perdre le premier soldat. Mission command — intention claire, liberté tactique au subordonné — n'est pas une préférence doctrinale : c'est une condition de survie.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
