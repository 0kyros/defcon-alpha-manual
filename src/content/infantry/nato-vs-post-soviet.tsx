import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Le forze armate ucraine si trovano in transizione doctrinale tra il modello post-sovietico ereditato dal proprio passato e il modello NATO con cui hanno operato dal 2014, e in misura intensa dal 2022. Sul fronte attuale i due modelli coesistono nello stesso teatro, nelle stesse brigate, talvolta nello stesso plotone. Capire le differenze e i punti di contatto è essenziale per un volontario internazionale che opera in questo ambiente ibrido.",
    sections: [
      {
        heading: "Le due tradizioni in sintesi",
        blocks: [
          {
            type: "p",
            text: "I due modelli derivano da storie operative, culture militari e contesti politici diversi. Nessuno è 'giusto' in assoluto: ciascuno ottimizza per circostanze diverse. Conoscere le rispettive logiche permette di operare in entrambe.",
          },
          {
            type: "table",
            headers: ["Dimensione", "Modello NATO (mission command)", "Modello post-sovietico (directive)"],
            rows: [
              ["Filosofia di comando", "Auftragstaktik: dare intent, decentralizzare", "Befehlstaktik: ordine dettagliato, esecuzione disciplinata"],
              ["Iniziativa NCO", "Alta — NCO decide nel proprio settore", "Bassa — NCO esegue, l'ufficiale decide"],
              ["Ufficiale di plotone", "Manager e coach del team", "Esecutore di ordini di compagnia"],
              ["Pianificazione", "Top-down + bottom-up, war-gaming", "Top-down rigorosa, time-tested templates"],
              ["Comunicazione", "Bidirezionale, feedback richiesto", "Unidirezionale, ricevuta richiesta"],
              ["Tolleranza ad ambiguità", "Alta — incoraggiata", "Bassa — l'ordine elimina ambiguità"],
              ["Velocità di adattamento", "Veloce a livello tattico", "Veloce a livello operativo, lenta tatticamente"],
              ["Rischio politico per il leader", "Bassa — l'errore è apprendimento", "Alta — l'errore è sanzionato"],
            ],
          },
        ],
      },
      {
        heading: "Mission command — il concetto NATO",
        blocks: [
          {
            type: "p",
            text: "Il mission command (Auftragstaktik in tedesco) è la filosofia di comando NATO ereditata dalla Prussia ottocentesca e formalizzata nel dopoguerra. Si basa sulla idea che il subordinato più vicino all'evento è meglio posizionato per decidere, purché conosca l'intent del comandante.",
          },
          {
            type: "ul",
            items: [
              "Il comandante esprime intent (cosa, perché), non procedura (come)",
              "Il subordinato decide il 'come' nel proprio settore di competenza",
              "Il feedback è permanente: il subordinato segnala deviazioni e variazioni",
              "L'errore di iniziativa è preferibile all'inerzia per attesa di ordini",
              "L'NCO ha autorità decisionale entro il proprio livello, non solo esecutiva",
              "La SOP è la base, ma può essere modificata se la situazione lo richiede",
            ],
          },
          {
            type: "p",
            text: "Mission command richiede tre condizioni: fiducia reciproca tra livelli, condivisione dell'intent, addestramento omogeneo. Quando una di queste manca, mission command si trasforma in caos. È più difficile da implementare di quanto sembri in teoria.",
          },
        ],
      },
      {
        heading: "Directive command — il concetto post-sovietico",
        blocks: [
          {
            type: "p",
            text: "Il directive command (Befehlstaktik nel suo opposto teorico) deriva dalla tradizione militare zarista e poi sovietica. Si basa sull'idea che la complessità del campo di battaglia richiede pianificazione centralizzata dettagliata, eseguita con disciplina dai livelli sottostanti.",
          },
          {
            type: "ul",
            items: [
              "Il comandante a livello superiore pianifica con dettaglio gli ordini",
              "Il subordinato esegue secondo il piano, riportando l'esecuzione",
              "L'iniziativa individuale è eccezionale e richiede autorizzazione",
              "I templates operativi (norms, normatives) coprono casi previsti",
              "La compagnia ha autonomia limitata; il battaglione è la prima unità tatticamente flessibile",
              "L'errore di iniziativa non autorizzata è sanzionato",
            ],
          },
          {
            type: "p",
            text: "Directive command funziona bene quando la pianificazione superiore è accurata e quando l'esecuzione disciplinata produce risultati prevedibili. Funziona male quando la situazione cambia più velocemente del ciclo di pianificazione, o quando la pianificazione superiore è scollegata dalla realtà sul terreno.",
          },
        ],
      },
      {
        heading: "La transizione ucraina (2014-2026)",
        blocks: [
          {
            type: "p",
            text: "Le forze armate ucraine hanno iniziato la transizione verso mission command dopo il 2014 con il supporto NATO. La transizione non è completa né uniforme: alcune brigate (HUR, SSO, alcune brigate di assalto aereo, alcune neoformate) operano in modalità prevalentemente mission-command; altre (parti delle forze territoriali, brigate mobilitate, vecchie brigate meccanizzate) operano in modalità più directive. La realtà 2024-2026 è ibrida.",
          },
          {
            type: "ul",
            items: [
              "HUR, SSO: prossimi al modello NATO, iniziativa NCO alta",
              "Brigate di assalto aereo (es. 25th, 79th, 80th, 95th Air Assault): integrazione NATO-style avanzata",
              "Brigate meccanizzate consolidate: misto, con elementi di entrambi i modelli",
              "Brigate mobilitate recentemente: spesso più directive per inesperienza tattica",
              "Forze territoriali (TerO): variabili, dipendenti dal comandante locale",
              "Unità di volontari internazionali: tipicamente NATO-style internamente, directive verso il comando ucraino superiore",
            ],
          },
        ],
      },
      {
        heading: "Implicazioni pratiche per il volontario",
        blocks: [
          {
            type: "p",
            text: "Il volontario internazionale, anche addestrato in scuola NATO, opera in catena di comando ucraina e deve adattarsi. La mancanza di adattamento è una delle cause più frequenti di attrito tra volontari e unità ospitanti.",
          },
          {
            type: "ul",
            items: [
              "Non assumere mission command come default: chiedere il modello in uso nella unità",
              "Se l'ordine è dettagliato, eseguirlo come tale, non 'interpretarlo' liberamente",
              "Se l'ordine è di intent, chiedere conferma di aver compreso correttamente",
              "Mai bypassare la catena di comando 'per efficienza' — è la singola causa più frequente di espulsione di volontari",
              "Riportare sempre, anche se l'ordine non lo richiede esplicitamente",
              "Lo stile di comunicazione si adatta alla unità: meno questioning, più affermazioni nei contesti directive",
              "L'NCO ucraino può avere autorità diversa dall'NCO NATO comparabile: rispettare l'autorità reale, non quella attesa",
            ],
          },
        ],
      },
      {
        heading: "Decision flow — confronto",
        blocks: [
          {
            type: "p",
            text: "Il flusso decisionale dei due modelli differisce per dove si concentra la decisione, dove si trova il ciclo di feedback e quanto tempo richiede l'aggiornamento del piano.",
          },
          {
            type: "table",
            headers: ["Fase", "NATO", "Post-sovietico"],
            rows: [
              ["Raccolta informazione", "Distribuita, ogni livello contribuisce", "Centralizzata, fonti dedicate"],
              ["Analisi", "Staff misto, war-gaming di opzioni", "Staff alto, applicazione di templates"],
              ["Decisione", "Comandante in dialogo con staff", "Comandante in autorità diretta"],
              ["Diffusione", "Intent + minimo ordine, briefing breve", "Ordine dettagliato, briefing lungo"],
              ["Esecuzione", "Adattiva nel settore", "Conforme al piano"],
              ["Feedback", "Continuo, bidirezionale", "Periodico, report di completamento"],
              ["Aggiornamento", "Real-time, modifiche locali", "Per cicli, modifiche dall'alto"],
            ],
          },
        ],
      },
      {
        heading: "Cultura militare e gerarchia",
        blocks: [
          {
            type: "p",
            text: "Oltre alla dottrina formale, esiste una cultura militare. Il rapporto tra ufficiali e NCO, il modo di rivolgersi al comandante, il livello di formalità nei rapporti — tutto questo varia tra modelli. Il volontario deve riconoscere queste differenze e adattarsi senza giudicarle.",
          },
          {
            type: "ul",
            items: [
              "Forma di rivolgersi al comandante: più formale in contesti directive",
              "Vesperi e cerimonie: più strutturati in contesti post-sovietici",
              "Distanza sociale tra gradi: maggiore in contesti directive, minore in mission command",
              "Espressione di dissenso: in mission command è incoraggiata nei canali appropriati, in directive è limitata",
              "Cultura del 'no, signore': in mission command il subordinato può dichiarare di non poter eseguire; in directive è raro",
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
              "Assumere che la propria scuola dottrinale sia quella della unità ospitante",
              "Critica ad alta voce del modello directive ('siamo nel ventunesimo secolo')",
              "Bypassare l'ufficiale ucraino di plotone per parlare direttamente al comandante di compagnia",
              "Proporre cambi di SOP nei primi giorni senza credibilità accumulata",
              "Trattare gli NCO ucraini come si trattano gli NCO NATO senza verificare l'autorità reale",
              "Confondere autoritarismo culturale con incompetenza tecnica",
              "Aspettarsi feedback continuo (mission command) in un contesto directive",
              "Non chiedere chiarimenti per paura di apparire incompetenti — produce errori operativi",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le forze armate ucraine 2024-2026 sono in piena transizione dottrinale, e questa transizione è essa stessa una caratteristica del campo di battaglia. Il volontario internazionale che entra in Ucraina assume per definizione di lavorare in un sistema ibrido, non in un sistema purificato. La sua capacità di rispettare la catena di comando ucraina, di adattare lo stile alla unità ospitante, di rinunciare alla 'sicurezza' della propria dottrina di origine è il singolo fattore più importante per integrarsi efficacemente. La superiorità dottrinale è un mito: la flessibilità di apprendere e adattarsi è una virtù operativa.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "The Ukrainian armed forces are in a doctrinal transition between the post-Soviet model inherited from their past and the NATO model with which they have operated since 2014, and intensely since 2022. On the current front the two models coexist in the same theatre, in the same brigades, sometimes in the same platoon. Understanding the differences and points of contact is essential for an international volunteer operating in this hybrid environment.",
    sections: [
      {
        heading: "The two traditions summarised",
        blocks: [
          {
            type: "p",
            text: "The two models derive from different operational histories, military cultures and political contexts. Neither is 'right' absolutely: each optimises for different circumstances. Knowing the respective logics allows operating in both.",
          },
          {
            type: "table",
            headers: ["Dimension", "NATO model (mission command)", "Post-Soviet model (directive)"],
            rows: [
              ["Command philosophy", "Auftragstaktik: give intent, decentralise", "Befehlstaktik: detailed order, disciplined execution"],
              ["NCO initiative", "High — NCO decides in their sector", "Low — NCO executes, officer decides"],
              ["Platoon officer", "Manager and team coach", "Executor of company orders"],
              ["Planning", "Top-down + bottom-up, war-gaming", "Strict top-down, time-tested templates"],
              ["Communication", "Bidirectional, feedback expected", "Unidirectional, acknowledgement expected"],
              ["Ambiguity tolerance", "High — encouraged", "Low — the order removes ambiguity"],
              ["Adaptation speed", "Fast tactically", "Fast operationally, slow tactically"],
              ["Political risk for the leader", "Low — error is learning", "High — error is sanctioned"],
            ],
          },
        ],
      },
      {
        heading: "Mission command — the NATO concept",
        blocks: [
          {
            type: "p",
            text: "Mission command (Auftragstaktik in German) is the NATO command philosophy inherited from 19th-century Prussia and formalised post-war. It rests on the idea that the subordinate closest to the event is best placed to decide, provided they know the commander's intent.",
          },
          {
            type: "ul",
            items: [
              "The commander expresses intent (what, why), not procedure (how)",
              "The subordinate decides the 'how' in their area of competence",
              "Feedback is permanent: the subordinate reports deviations and variations",
              "Error of initiative is preferable to inertia waiting for orders",
              "The NCO has decision authority within their level, not only executive",
              "SOP is the baseline, but can be modified if the situation requires",
            ],
          },
          {
            type: "p",
            text: "Mission command requires three conditions: mutual trust between levels, shared intent, homogeneous training. When one is missing, mission command turns into chaos. It is harder to implement than it sounds in theory.",
          },
        ],
      },
      {
        heading: "Directive command — the post-Soviet concept",
        blocks: [
          {
            type: "p",
            text: "Directive command (Befehlstaktik as its theoretical opposite) derives from the tsarist and then Soviet military tradition. It rests on the idea that battlefield complexity requires detailed centralised planning, executed with discipline by lower levels.",
          },
          {
            type: "ul",
            items: [
              "The senior commander plans orders in detail",
              "The subordinate executes per the plan, reporting execution",
              "Individual initiative is exceptional and requires authorisation",
              "Operational templates (norms, normatives) cover anticipated cases",
              "The company has limited autonomy; the battalion is the first tactically flexible unit",
              "Unauthorised initiative is sanctioned",
            ],
          },
          {
            type: "p",
            text: "Directive command works well when senior planning is accurate and disciplined execution produces predictable results. It works poorly when the situation changes faster than the planning cycle, or when senior planning is disconnected from ground reality.",
          },
        ],
      },
      {
        heading: "The Ukrainian transition (2014-2026)",
        blocks: [
          {
            type: "p",
            text: "Ukrainian armed forces began the transition toward mission command after 2014 with NATO support. The transition is neither complete nor uniform: some brigades (HUR, SSO, certain air assault brigades, certain newly formed) operate predominantly in mission-command mode; others (parts of territorial forces, mobilised brigades, older mechanised brigades) operate in a more directive mode. The 2024-2026 reality is hybrid.",
          },
          {
            type: "ul",
            items: [
              "HUR, SSO: close to NATO model, high NCO initiative",
              "Air assault brigades (e.g. 25th, 79th, 80th, 95th): advanced NATO-style integration",
              "Established mechanised brigades: mixed, with elements of both models",
              "Recently mobilised brigades: often more directive due to tactical inexperience",
              "Territorial forces (TerO): variable, depending on local commander",
              "International volunteer units: typically NATO-style internally, directive toward higher Ukrainian command",
            ],
          },
        ],
      },
      {
        heading: "Practical implications for the volunteer",
        blocks: [
          {
            type: "p",
            text: "The international volunteer, even NATO-school trained, operates in a Ukrainian chain of command and must adapt. Failure to adapt is one of the most frequent causes of friction between volunteers and host units.",
          },
          {
            type: "ul",
            items: [
              "Do not assume mission command as default: ask the model in use in the unit",
              "If the order is detailed, execute it as such, not 'interpret' it freely",
              "If the order is intent-based, ask for confirmation you understood correctly",
              "Never bypass the chain of command 'for efficiency' — the single most frequent cause of volunteer expulsion",
              "Always report, even if the order does not explicitly require it",
              "Communication style adapts to the unit: less questioning, more affirmation in directive contexts",
              "A Ukrainian NCO may have different authority from a comparable NATO NCO: respect real authority, not expected",
            ],
          },
        ],
      },
      {
        heading: "Decision flow — comparison",
        blocks: [
          {
            type: "p",
            text: "The decision flow of the two models differs in where the decision concentrates, where the feedback cycle sits and how long the plan update takes.",
          },
          {
            type: "table",
            headers: ["Phase", "NATO", "Post-Soviet"],
            rows: [
              ["Information collection", "Distributed, every level contributes", "Centralised, dedicated sources"],
              ["Analysis", "Mixed staff, option war-gaming", "Senior staff, template application"],
              ["Decision", "Commander in dialogue with staff", "Commander in direct authority"],
              ["Diffusion", "Intent + minimal order, short briefing", "Detailed order, long briefing"],
              ["Execution", "Adaptive in sector", "Conforming to the plan"],
              ["Feedback", "Continuous, bidirectional", "Periodic, completion reports"],
              ["Update", "Real-time, local modifications", "By cycles, top-down modifications"],
            ],
          },
        ],
      },
      {
        heading: "Military culture and hierarchy",
        blocks: [
          {
            type: "p",
            text: "Beyond formal doctrine there is a military culture. The relationship between officers and NCOs, the manner of addressing the commander, the level of formality in relations — all vary between models. The volunteer must recognise these differences and adapt without judging them.",
          },
          {
            type: "ul",
            items: [
              "Form of addressing the commander: more formal in directive contexts",
              "Drills and ceremonies: more structured in post-Soviet contexts",
              "Social distance between ranks: greater in directive, less in mission command",
              "Expression of dissent: in mission command, encouraged through appropriate channels; in directive, limited",
              "Culture of 'no, sir': in mission command the subordinate can state they cannot execute; in directive, rare",
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
              "Assuming your school of doctrine is that of the host unit",
              "Loud criticism of the directive model ('we're in the twenty-first century')",
              "Bypassing the Ukrainian platoon officer to speak directly to the company commander",
              "Proposing SOP changes in the first days without accumulated credibility",
              "Treating Ukrainian NCOs the way NATO NCOs are treated without verifying real authority",
              "Confusing cultural authoritarianism with technical incompetence",
              "Expecting continuous feedback (mission command) in a directive context",
              "Not asking clarification for fear of looking incompetent — produces operational errors",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian armed forces 2024-2026 are in full doctrinal transition, and this transition is itself a feature of the battlefield. The international volunteer entering Ukraine assumes by definition to work in a hybrid system, not a purified one. Their ability to respect the Ukrainian chain of command, adapt style to the host unit, give up the 'safety' of their school of origin is the single most important factor for effective integration. Doctrinal superiority is a myth: the flexibility to learn and adapt is an operational virtue.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "As forças armadas ucranianas estão em transição doutrinária entre o modelo pós-soviético herdado do passado e o modelo OTAN com que operam desde 2014, e intensamente desde 2022. No front atual os dois modelos coexistem no mesmo teatro, nas mesmas brigadas, às vezes no mesmo pelotão. Entender as diferenças e os pontos de contato é essencial para um voluntário internacional que opera nesse ambiente híbrido.",
    sections: [
      {
        heading: "As duas tradições em síntese",
        blocks: [
          {
            type: "p",
            text: "Os dois modelos derivam de histórias operacionais, culturas militares e contextos políticos diferentes. Nenhum é 'certo' em absoluto: cada um otimiza para circunstâncias diferentes. Conhecer as lógicas respectivas permite operar em ambos.",
          },
          {
            type: "table",
            headers: ["Dimensão", "Modelo OTAN (mission command)", "Modelo pós-soviético (directive)"],
            rows: [
              ["Filosofia de comando", "Auftragstaktik: dar intent, descentralizar", "Befehlstaktik: ordem detalhada, execução disciplinada"],
              ["Iniciativa do NCO", "Alta — NCO decide no setor", "Baixa — NCO executa, oficial decide"],
              ["Oficial de pelotão", "Gerente e coach da equipe", "Executor de ordens da companhia"],
              ["Planejamento", "Top-down + bottom-up, war-gaming", "Top-down rigoroso, templates testados"],
              ["Comunicação", "Bidirecional, feedback esperado", "Unidirecional, recibo esperado"],
              ["Tolerância à ambiguidade", "Alta — encorajada", "Baixa — a ordem elimina ambiguidade"],
              ["Velocidade de adaptação", "Rápida no tático", "Rápida no operacional, lenta no tático"],
              ["Risco político para o líder", "Baixo — erro é aprendizado", "Alto — erro é sancionado"],
            ],
          },
        ],
      },
      {
        heading: "Mission command — o conceito OTAN",
        blocks: [
          {
            type: "p",
            text: "O mission command (Auftragstaktik em alemão) é a filosofia de comando OTAN herdada da Prússia do século XIX e formalizada no pós-guerra. Baseia-se na ideia de que o subordinado mais próximo do evento está melhor posicionado para decidir, desde que conheça o intent do comandante.",
          },
          {
            type: "ul",
            items: [
              "O comandante expressa intent (o quê, por quê), não procedimento (como)",
              "O subordinado decide o 'como' em sua área de competência",
              "O feedback é permanente: o subordinado reporta desvios e variações",
              "O erro de iniciativa é preferível à inércia esperando ordens",
              "O NCO tem autoridade decisória no seu nível, não só executiva",
              "A SOP é a base, mas pode ser modificada se a situação exigir",
            ],
          },
          {
            type: "p",
            text: "O mission command exige três condições: confiança mútua entre níveis, intent compartilhado, treinamento homogêneo. Quando uma delas falta, vira caos. É mais difícil de implementar do que parece em teoria.",
          },
        ],
      },
      {
        heading: "Directive command — o conceito pós-soviético",
        blocks: [
          {
            type: "p",
            text: "O directive command (Befehlstaktik como oposto teórico) deriva da tradição militar czarista e depois soviética. Baseia-se na ideia de que a complexidade do campo de batalha exige planejamento centralizado detalhado, executado com disciplina pelos níveis inferiores.",
          },
          {
            type: "ul",
            items: [
              "O comandante superior planeja as ordens em detalhe",
              "O subordinado executa conforme o plano, reportando a execução",
              "Iniciativa individual é exceção e exige autorização",
              "Templates operacionais (norms, normatives) cobrem casos previstos",
              "A companhia tem autonomia limitada; o batalhão é a primeira unidade tática flexível",
              "Iniciativa não autorizada é sancionada",
            ],
          },
          {
            type: "p",
            text: "O directive command funciona bem quando o planejamento superior é acurado e a execução disciplinada produz resultados previsíveis. Funciona mal quando a situação muda mais rápido que o ciclo de planejamento ou quando o planejamento superior está desconectado da realidade no terreno.",
          },
        ],
      },
      {
        heading: "A transição ucraniana (2014-2026)",
        blocks: [
          {
            type: "p",
            text: "As forças armadas ucranianas iniciaram a transição para mission command depois de 2014 com apoio OTAN. A transição não é completa nem uniforme: algumas brigadas (HUR, SSO, certas brigadas de assalto aéreo, certas recém-formadas) operam predominantemente em mission-command; outras (partes das forças territoriais, brigadas mobilizadas, brigadas mecanizadas antigas) operam em modo mais directive. A realidade 2024-2026 é híbrida.",
          },
          {
            type: "ul",
            items: [
              "HUR, SSO: próximos ao modelo OTAN, alta iniciativa NCO",
              "Brigadas de assalto aéreo (ex. 25, 79, 80, 95): integração OTAN-style avançada",
              "Brigadas mecanizadas consolidadas: mistas, com elementos dos dois modelos",
              "Brigadas mobilizadas recentemente: frequentemente mais directive por inexperiência tática",
              "Forças territoriais (TerO): variáveis, dependentes do comandante local",
              "Unidades de voluntários internacionais: tipicamente OTAN-style internamente, directive em relação ao comando superior ucraniano",
            ],
          },
        ],
      },
      {
        heading: "Implicações práticas para o voluntário",
        blocks: [
          {
            type: "p",
            text: "O voluntário internacional, mesmo treinado em escola OTAN, opera em cadeia de comando ucraniana e deve se adaptar. A falta de adaptação é uma das causas mais frequentes de atrito entre voluntários e unidades hospedeiras.",
          },
          {
            type: "ul",
            items: [
              "Não assumir mission command como padrão: perguntar o modelo em uso na unidade",
              "Se a ordem é detalhada, executá-la como tal, não 'interpretá-la' livremente",
              "Se a ordem é por intent, pedir confirmação de ter entendido corretamente",
              "Nunca burlar a cadeia de comando 'por eficiência' — única causa mais frequente de expulsão de voluntários",
              "Sempre reportar, mesmo se a ordem não exigir explicitamente",
              "Estilo de comunicação se adapta à unidade: menos questionar, mais afirmar em contextos directive",
              "Um NCO ucraniano pode ter autoridade diferente de NCO OTAN comparável: respeitar autoridade real, não esperada",
            ],
          },
        ],
      },
      {
        heading: "Fluxo decisório — comparação",
        blocks: [
          {
            type: "p",
            text: "O fluxo decisório dos dois modelos difere em onde a decisão se concentra, onde está o ciclo de feedback e quanto tempo leva a atualização do plano.",
          },
          {
            type: "table",
            headers: ["Fase", "OTAN", "Pós-soviético"],
            rows: [
              ["Coleta de informação", "Distribuída, cada nível contribui", "Centralizada, fontes dedicadas"],
              ["Análise", "Staff misto, war-gaming de opções", "Staff alto, aplicação de templates"],
              ["Decisão", "Comandante em diálogo com staff", "Comandante em autoridade direta"],
              ["Difusão", "Intent + ordem mínima, briefing curto", "Ordem detalhada, briefing longo"],
              ["Execução", "Adaptativa no setor", "Conforme o plano"],
              ["Feedback", "Contínuo, bidirecional", "Periódico, reports de conclusão"],
              ["Atualização", "Tempo real, modificações locais", "Por ciclos, modificações do alto"],
            ],
          },
        ],
      },
      {
        heading: "Cultura militar e hierarquia",
        blocks: [
          {
            type: "p",
            text: "Além da doutrina formal há uma cultura militar. A relação entre oficiais e NCOs, o modo de se dirigir ao comandante, o nível de formalidade nas relações — tudo isso varia entre modelos. O voluntário deve reconhecer essas diferenças e se adaptar sem julgá-las.",
          },
          {
            type: "ul",
            items: [
              "Forma de se dirigir ao comandante: mais formal em contextos directive",
              "Cerimônias e instruções: mais estruturadas em contextos pós-soviéticos",
              "Distância social entre postos: maior em directive, menor em mission command",
              "Expressão de discordância: em mission command, encorajada nos canais apropriados; em directive, limitada",
              "Cultura do 'não, senhor': em mission command o subordinado pode declarar não poder executar; em directive, raro",
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
              "Assumir que a própria escola doutrinária é a da unidade hospedeira",
              "Críticas em voz alta ao modelo directive ('estamos no século XXI')",
              "Burlar o oficial ucraniano de pelotão para falar direto com o comandante de companhia",
              "Propor mudanças de SOP nos primeiros dias sem credibilidade acumulada",
              "Tratar NCOs ucranianos como se tratam NCOs OTAN sem verificar a autoridade real",
              "Confundir autoritarismo cultural com incompetência técnica",
              "Esperar feedback contínuo (mission command) em contexto directive",
              "Não pedir esclarecimentos por medo de parecer incompetente — gera erros operacionais",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "As forças armadas ucranianas 2024-2026 estão em plena transição doutrinária, e essa transição é por si só uma característica do campo de batalha. O voluntário internacional que entra na Ucrânia assume por definição trabalhar em sistema híbrido, não em sistema purificado. Sua capacidade de respeitar a cadeia de comando ucraniana, adaptar o estilo à unidade hospedeira e abrir mão da 'segurança' da própria doutrina de origem é o único fator mais importante para integrar-se eficazmente. A superioridade doutrinária é mito: a flexibilidade de aprender e se adaptar é virtude operacional.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Les forces armées ukrainiennes sont en transition doctrinale entre le modèle post-soviétique hérité de leur passé et le modèle OTAN avec lequel elles opèrent depuis 2014, et intensément depuis 2022. Sur le front actuel les deux modèles coexistent dans le même théâtre, dans les mêmes brigades, parfois dans la même section. Comprendre les différences et les points de contact est essentiel pour un volontaire international opérant dans cet environnement hybride.",
    sections: [
      {
        heading: "Les deux traditions en synthèse",
        blocks: [
          {
            type: "p",
            text: "Les deux modèles dérivent d'histoires opérationnelles, de cultures militaires et de contextes politiques différents. Aucun n'est « juste » dans l'absolu : chacun optimise pour des circonstances différentes. Connaître leurs logiques respectives permet d'opérer dans les deux.",
          },
          {
            type: "table",
            headers: ["Dimension", "Modèle OTAN (mission command)", "Modèle post-soviétique (directive)"],
            rows: [
              ["Philosophie de commandement", "Auftragstaktik : donner l'intent, décentraliser", "Befehlstaktik : ordre détaillé, exécution disciplinée"],
              ["Initiative NCO", "Élevée — le NCO décide dans son secteur", "Faible — le NCO exécute, l'officier décide"],
              ["Officier de section", "Manager et coach de l'équipe", "Exécutant des ordres de compagnie"],
              ["Planification", "Top-down + bottom-up, war-gaming", "Top-down stricte, templates éprouvés"],
              ["Communication", "Bidirectionnelle, feedback attendu", "Unidirectionnelle, accusé attendu"],
              ["Tolérance à l'ambiguïté", "Élevée — encouragée", "Faible — l'ordre lève l'ambiguïté"],
              ["Vitesse d'adaptation", "Rapide au tactique", "Rapide à l'opérationnel, lente au tactique"],
              ["Risque politique pour le chef", "Faible — l'erreur est apprentissage", "Élevé — l'erreur est sanctionnée"],
            ],
          },
        ],
      },
      {
        heading: "Mission command — le concept OTAN",
        blocks: [
          {
            type: "p",
            text: "Le mission command (Auftragstaktik en allemand) est la philosophie de commandement OTAN héritée de la Prusse du XIXe siècle et formalisée après-guerre. Elle repose sur l'idée que le subordonné le plus proche de l'événement est le mieux placé pour décider, à condition de connaître l'intent du chef.",
          },
          {
            type: "ul",
            items: [
              "Le chef exprime l'intent (quoi, pourquoi), pas la procédure (comment)",
              "Le subordonné décide du « comment » dans son secteur de compétence",
              "Le feedback est permanent : le subordonné signale les écarts et variations",
              "L'erreur d'initiative est préférable à l'inertie en attente d'ordres",
              "Le NCO a une autorité décisionnelle à son niveau, pas seulement exécutive",
              "La SOP est la base, mais peut être modifiée si la situation l'exige",
            ],
          },
          {
            type: "p",
            text: "Le mission command exige trois conditions : confiance mutuelle entre niveaux, intent partagé, formation homogène. Quand l'une manque, le mission command se transforme en chaos. Il est plus difficile à mettre en œuvre qu'il n'y paraît en théorie.",
          },
        ],
      },
      {
        heading: "Directive command — le concept post-soviétique",
        blocks: [
          {
            type: "p",
            text: "Le directive command (Befehlstaktik comme opposé théorique) dérive de la tradition militaire tsariste puis soviétique. Il repose sur l'idée que la complexité du champ de bataille exige une planification centralisée détaillée, exécutée avec discipline par les niveaux inférieurs.",
          },
          {
            type: "ul",
            items: [
              "Le chef supérieur planifie les ordres en détail",
              "Le subordonné exécute selon le plan, en rendant compte de l'exécution",
              "L'initiative individuelle est exceptionnelle et exige autorisation",
              "Les templates opérationnels (normes, normatives) couvrent les cas prévus",
              "La compagnie a une autonomie limitée ; le bataillon est la première unité tactiquement flexible",
              "L'initiative non autorisée est sanctionnée",
            ],
          },
          {
            type: "p",
            text: "Le directive command fonctionne bien quand la planification supérieure est exacte et que l'exécution disciplinée produit des résultats prévisibles. Il fonctionne mal quand la situation change plus vite que le cycle de planification, ou quand la planification supérieure est déconnectée de la réalité du terrain.",
          },
        ],
      },
      {
        heading: "La transition ukrainienne (2014-2026)",
        blocks: [
          {
            type: "p",
            text: "Les forces armées ukrainiennes ont commencé la transition vers le mission command après 2014 avec l'appui OTAN. La transition n'est ni complète ni uniforme : certaines brigades (HUR, SSO, certaines brigades d'assaut aérien, certaines néo-formées) opèrent principalement en mission-command ; d'autres (parties des forces territoriales, brigades mobilisées, brigades mécanisées anciennes) opèrent dans un mode plus directive. La réalité 2024-2026 est hybride.",
          },
          {
            type: "ul",
            items: [
              "HUR, SSO : proches du modèle OTAN, initiative NCO élevée",
              "Brigades d'assaut aérien (ex. 25, 79, 80, 95) : intégration OTAN-style avancée",
              "Brigades mécanisées établies : mixtes, avec éléments des deux modèles",
              "Brigades mobilisées récemment : souvent plus directive par inexpérience tactique",
              "Forces territoriales (TerO) : variables, dépendantes du commandant local",
              "Unités de volontaires internationaux : typiquement OTAN-style en interne, directive vers le commandement supérieur ukrainien",
            ],
          },
        ],
      },
      {
        heading: "Implications pratiques pour le volontaire",
        blocks: [
          {
            type: "p",
            text: "Le volontaire international, même formé en école OTAN, opère en chaîne de commandement ukrainienne et doit s'adapter. Le défaut d'adaptation est l'une des causes les plus fréquentes de friction entre volontaires et unités hôtes.",
          },
          {
            type: "ul",
            items: [
              "Ne pas supposer le mission command par défaut : demander le modèle en usage dans l'unité",
              "Si l'ordre est détaillé, l'exécuter comme tel, ne pas « l'interpréter » librement",
              "Si l'ordre est en intent, demander confirmation d'avoir bien compris",
              "Ne jamais court-circuiter la chaîne de commandement « pour l'efficacité » — cause la plus fréquente de renvoi de volontaires",
              "Toujours rendre compte, même si l'ordre ne l'exige pas explicitement",
              "Le style de communication s'adapte à l'unité : moins de questionnement, plus d'affirmation en contexte directive",
              "Un NCO ukrainien peut avoir une autorité différente d'un NCO OTAN comparable : respecter l'autorité réelle, pas attendue",
            ],
          },
        ],
      },
      {
        heading: "Flux décisionnel — comparaison",
        blocks: [
          {
            type: "p",
            text: "Le flux décisionnel des deux modèles diffère par l'endroit où la décision se concentre, où se trouve la boucle de feedback et combien de temps prend la mise à jour du plan.",
          },
          {
            type: "table",
            headers: ["Phase", "OTAN", "Post-soviétique"],
            rows: [
              ["Recueil d'information", "Distribué, chaque niveau contribue", "Centralisé, sources dédiées"],
              ["Analyse", "État-major mixte, war-gaming d'options", "État-major élevé, application de templates"],
              ["Décision", "Chef en dialogue avec l'état-major", "Chef en autorité directe"],
              ["Diffusion", "Intent + ordre minimal, briefing court", "Ordre détaillé, briefing long"],
              ["Exécution", "Adaptative dans le secteur", "Conforme au plan"],
              ["Feedback", "Continu, bidirectionnel", "Périodique, comptes rendus de fin"],
              ["Mise à jour", "Temps réel, modifications locales", "Par cycles, modifications du haut"],
            ],
          },
        ],
      },
      {
        heading: "Culture militaire et hiérarchie",
        blocks: [
          {
            type: "p",
            text: "Au-delà de la doctrine formelle, il y a une culture militaire. La relation entre officiers et NCO, la manière de s'adresser au chef, le niveau de formalisme dans les rapports — tout cela varie entre modèles. Le volontaire doit reconnaître ces différences et s'adapter sans les juger.",
          },
          {
            type: "ul",
            items: [
              "Forme d'adresse au chef : plus formelle en contexte directive",
              "Cérémonies et exercices : plus structurés en contexte post-soviétique",
              "Distance sociale entre grades : plus grande en directive, moindre en mission command",
              "Expression du désaccord : en mission command encouragée par les canaux appropriés ; en directive, limitée",
              "Culture du « non, monsieur » : en mission command, le subordonné peut déclarer ne pas pouvoir exécuter ; en directive, rare",
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
              "Supposer que sa propre école doctrinale est celle de l'unité hôte",
              "Critique à voix haute du modèle directive (« nous sommes au XXIe siècle »)",
              "Court-circuiter l'officier ukrainien de section pour parler directement au commandant de compagnie",
              "Proposer des changements de SOP dans les premiers jours sans crédibilité accumulée",
              "Traiter les NCO ukrainiens comme on traite les NCO OTAN sans vérifier l'autorité réelle",
              "Confondre autoritarisme culturel et incompétence technique",
              "Attendre un feedback continu (mission command) en contexte directive",
              "Ne pas demander de clarifications par peur de paraître incompétent — produit des erreurs opérationnelles",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les forces armées ukrainiennes 2024-2026 sont en pleine transition doctrinale, et cette transition est elle-même une caractéristique du champ de bataille. Le volontaire international qui entre en Ukraine suppose par définition travailler dans un système hybride, pas dans un système purifié. Sa capacité à respecter la chaîne de commandement ukrainienne, à adapter son style à l'unité hôte, à renoncer à la « sécurité » de sa doctrine d'origine est le facteur unique le plus important pour s'intégrer efficacement. La supériorité doctrinale est un mythe : la flexibilité à apprendre et à s'adapter est une vertu opérationnelle.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
