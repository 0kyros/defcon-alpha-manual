import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Un Observation Post (OP) è una posizione di osservazione statica e occultata in cui un piccolo elemento monitora un settore per ore o giorni, riportando alla rete intelligence dell'unità. Sul fronte ucraino gli OP sono uno dei moltiplicatori di forza più importanti e uno dei più rischiosi: una posizione individuata genera artiglieria entro pochi minuti. Questo capitolo descrive scopo, siting, disciplina e considerazioni operative.",
    sections: [
      {
        heading: "Scopo dell'OP",
        blocks: [
          {
            type: "p",
            text: "L'OP esiste per raccogliere informazione visiva, acustica e in qualche caso elettromagnetica, e ritrasmetterla al comando in forma utilizzabile. La differenza fondamentale rispetto a una pattuglia è la staticità: l'OP non si muove, accumula osservazione nel tempo, costruisce un quadro di pattern of life del nemico.",
          },
          {
            type: "ul",
            items: [
              "Sorveglianza di una via di avvicinamento del nemico",
              "Osservazione di un punto chiave (incrocio, ponte, posizione di tiro)",
              "Spotting per artiglieria amica o per ISR aerei",
              "Verifica di intelligence ricevuta da altre fonti",
              "Allerta precoce in caso di avvicinamento nemico",
              "Costruzione di pattern of life del settore avversario",
            ],
          },
        ],
      },
      {
        heading: "Siting — scegliere la posizione",
        blocks: [
          {
            type: "p",
            text: "La scelta della posizione dell'OP è la decisione critica più importante: una buona posizione vede senza essere vista, ha vie di ingresso e uscita coperte, comms con il CP, e può sostenere il personale per la durata pianificata. Una cattiva posizione viene scoperta in poche ore e diventa un target.",
          },
          {
            type: "ul",
            items: [
              "Linea di vista sul settore di responsabilità — il singolo requisito primario",
              "Sfondo: posizionarsi davanti a uno sfondo che dissolve la sagoma, non contro il cielo",
              "Vie di ingresso e uscita coperte e diverse (almeno due)",
              "Cover and concealment: copertura da artiglieria e dissimulazione visiva",
              "Distanza dalla linea: né troppo vicino (osservazione limitata da topografia), né troppo lontano (intelligence ritardata)",
              "Comunicazioni: copertura radio verificata prima dell'occupazione",
              "Acqua, drenaggio: una posizione che si allaga in 24 ore non è sostenibile",
              "Verticale: considerare cosa sta sopra (drone, sniper opposto) e cosa sotto (tunnel, fognature)",
            ],
          },
          {
            type: "callout",
            title: "REGOLA EMPIRICA",
            body: "Una buona posizione di OP è scoperta dalla pattuglia di ricognizione dopo 10 minuti di osservazione attenta dalla direzione del nemico. Se la sua presenza è evidente al primo sguardo, va spostata. Se non è scopribile nemmeno dopo 10 minuti di scrutinio professionale, è probabilmente troppo nascosta per vedere a sua volta.",
          },
        ],
      },
      {
        heading: "Composizione dell'OP",
        blocks: [
          {
            type: "p",
            text: "Un OP minimo è composto da 2 effettivi (mai 1 — la sicurezza richiede sempre qualcuno sveglio mentre l'altro riposa o osserva). Un OP completo per 24/48 ore è composto da 3-4 effettivi che ruotano i compiti.",
          },
          {
            type: "table",
            headers: ["Ruolo", "Responsabilità", "Note"],
            rows: [
              ["Osservatore", "Scrutinio attivo del settore", "Turno di 1-2 ore massimo, poi rotazione"],
              ["Operatore radio", "Comms con CP, report periodici", "Vicino all'osservatore, prowords codificati"],
              ["Sicurezza / 360", "Sorveglianza retroguardia e fianchi", "Critico per evitare aggiramento"],
              ["Riposo (rotazione)", "Recupero, idratazione, manutenzione", "Mai più di uno in riposo simultaneamente"],
            ],
          },
        ],
      },
      {
        heading: "Disciplina di reporting",
        blocks: [
          {
            type: "p",
            text: "Il valore di un OP dipende dalla qualità del reporting, non dalla quantità. Un report ambiguo o sovrabbondante è peggio di nessun report: rumore che ostacola la presa di decisione del comando. Lo standard NATO è il formato SALUTE, ucraine units spesso usano formati equivalenti.",
          },
          {
            type: "ul",
            items: [
              "S — Size: dimensione (numero di effettivi, di veicoli)",
              "A — Activity: cosa fanno (muovendo, stazionando, fortificando)",
              "L — Location: dove (MGRS, riferimento a punto noto)",
              "U — Unit: identificazione (uniforme, mezzi, simboli) se nota",
              "T — Time: quando osservato (orario in zulu o locale, dichiarato)",
              "E — Equipment: armi e mezzi visibili",
            ],
          },
          {
            type: "p",
            text: "Reporting periodico anche su 'niente osservato': il null report alimenta il quadro di intelligence quanto il report di attività. Un OP che tace è un OP che potrebbe essere stato neutralizzato.",
          },
        ],
      },
      {
        heading: "Disciplina di firma in OP",
        blocks: [
          {
            type: "p",
            text: "Una volta occupato, l'OP deve scomparire visivamente, termicamente, acusticamente e EM. Le abitudini scoprono la posizione in ore. La disciplina è permanente, non solo durante avvicinamento del nemico.",
          },
          {
            type: "ul",
            items: [
              "Niente sigarette, niente cucina calda, niente caldo prolungato in vista termica",
              "Movimento all'esterno minimo, mai a intervalli regolari",
              "Voce sempre a sussurro corto, niente discussioni durante turni di osservazione",
              "Rifiuti corporei pianificati in punto coperto, ben distante dalla posizione di osservazione",
              "Equipaggiamento sempre coperto: ottiche con cappucci, armi camuffate, niente brilli visibili",
              "Radio in ricezione, trasmissione solo in finestra programmata o per priorità",
              "Telefoni in faraday — la firma EM è il modo più frequente di scoperta di OP",
              "Manutenzione della camuffatura: vegetazione tagliata si secca, va sostituita",
            ],
          },
        ],
      },
      {
        heading: "Procedure di occupazione e abbandono",
        blocks: [
          {
            type: "p",
            text: "L'occupazione e l'abbandono dell'OP sono i momenti più rischiosi: la posizione è in movimento, le firme aumentano, il nemico può osservare l'azione. Sono pianificate con la stessa cura della posizione stessa.",
          },
          {
            type: "ul",
            items: [
              "Occupazione preferibilmente in oscurità o in basso meteo (nuvole, nebbia, pioggia)",
              "Approccio non lineare: spezzare il percorso con copertura intermedia",
              "Ultima parte dell'approccio in singola fila a copertura, mai in cuneo visibile",
              "Sentinella di sorveglianza verso il nemico mentre il resto si installa",
              "Abbandono in oscurità, lasciando l'OP 'sterile' (niente rifiuti, niente indizi)",
              "Rotazione del personale: idealmente l'unità incoming arriva prima che l'outgoing parta, sovrapposizione di 15-30 minuti",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni FPV e drone",
        blocks: [
          {
            type: "p",
            text: "L'OP moderno sul fronte ucraino opera sotto sorveglianza drone permanente del nemico. La sopravvivenza dipende dalla disciplina di copertura aerea e dalla discrezione termica.",
          },
          {
            type: "ul",
            items: [
              "Copertura superiore (rete o tetto rigido): la posizione di osservazione non deve essere visibile dall'alto",
              "Ottiche e termocamere amiche dietro feritoia camuffata: niente protrusione visibile",
              "Drone amico per controllo da terra: utile ma genera firma EM, da gestire con disciplina",
              "Se un drone nemico vola sopra: niente movimento, niente trasmissione, attendere che passi",
              "FPV inbound: piano di evasione preparato — OP secondario, copertura sotterranea, posizione di fuoco contrarea",
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
              "Scegliere una posizione comoda invece di una efficace",
              "Sottovalutare la durata: pianificare per 24 ore e restare 5 giorni",
              "Trasmettere troppo: ogni trasmissione corrisponde a possibile DF",
              "Lasciare segni di occupazione (rifiuti, vegetazione disturbata, sentieri visibili)",
              "Movimento esterno a orari regolari (alba, pasti) — pattern of life sfruttabile",
              "Rotazione del personale che arriva direttamente sulla posizione visibile",
              "Trascurare la sicurezza retroguardia perché 'il nemico è davanti'",
              "Ignorare il quadro EM (telefono accesso, smartwatch attivo)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Gli OP sul fronte ucraino sono diventati il fulcro della targeting cycle: una posizione di osservazione che identifica un movimento avversario può chiamare artiglieria amica con correzione real-time, e generare effetti devastanti in pochi minuti. L'OP è quindi target prioritario per il nemico: la sua localizzazione vale come quella di un command post. Le perdite di OP non avvengono per incompetenza tattica ma per accumulo di piccole indiscipline di firma. La sopravvivenza dipende dalla disciplina sostenuta nel tempo, non dalle azioni di un singolo momento.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "An Observation Post (OP) is a static, concealed observation position from which a small element monitors a sector for hours or days, reporting to the unit's intelligence net. On the Ukrainian front, OPs are one of the most important force multipliers and one of the most exposed: a detected position generates artillery within minutes. This chapter describes purpose, siting, discipline and operational considerations.",
    sections: [
      {
        heading: "Purpose of the OP",
        blocks: [
          {
            type: "p",
            text: "The OP exists to gather visual, acoustic and in some cases electromagnetic information and forward it to command in usable form. The fundamental difference from a patrol is stasis: the OP does not move; it accumulates observation over time, building a pattern-of-life picture of the enemy.",
          },
          {
            type: "ul",
            items: [
              "Surveillance of an enemy avenue of approach",
              "Observation of a key point (junction, bridge, firing position)",
              "Spotting for friendly artillery or aerial ISR",
              "Verification of intelligence received from other sources",
              "Early warning of enemy approach",
              "Building a pattern of life of the adversary sector",
            ],
          },
        ],
      },
      {
        heading: "Siting — choosing the position",
        blocks: [
          {
            type: "p",
            text: "Choosing the OP location is the single most important decision: a good position sees without being seen, has covered ingress and egress routes, comms with the CP, and can sustain personnel for the planned duration. A bad position is discovered within hours and becomes a target.",
          },
          {
            type: "ul",
            items: [
              "Line of sight on the responsibility sector — the single primary requirement",
              "Background: stand before a background that dissolves the silhouette, not against the sky",
              "Covered, different ingress/egress routes (at least two)",
              "Cover and concealment: protection from artillery and visual concealment",
              "Distance from the line: not too close (limited observation), not too far (delayed intelligence)",
              "Communications: radio coverage verified before occupation",
              "Water, drainage: a position that floods in 24 hours is not sustainable",
              "Vertical: consider what is above (drone, opposing sniper) and below (tunnel, sewers)",
            ],
          },
          {
            type: "callout",
            title: "RULE OF THUMB",
            body: "A good OP location is discovered by the reconnaissance patrol after 10 minutes of careful observation from the enemy direction. If its presence is obvious at first glance, move it. If it cannot be detected even after 10 minutes of professional scrutiny, it is probably too hidden to see out in turn.",
          },
        ],
      },
      {
        heading: "OP composition",
        blocks: [
          {
            type: "p",
            text: "A minimum OP has 2 soldiers (never 1 — security always requires someone awake while the other rests or observes). A full OP for 24-48 hours has 3-4 soldiers rotating tasks.",
          },
          {
            type: "table",
            headers: ["Role", "Responsibility", "Notes"],
            rows: [
              ["Observer", "Active scrutiny of the sector", "Max 1-2 hour shifts, then rotation"],
              ["Radio operator", "Comms with CP, periodic reports", "Near the observer, coded prowords"],
              ["Security / 360", "Rear and flank surveillance", "Critical to avoid being flanked"],
              ["Rest (rotation)", "Recovery, hydration, maintenance", "Never more than one resting at once"],
            ],
          },
        ],
      },
      {
        heading: "Reporting discipline",
        blocks: [
          {
            type: "p",
            text: "The value of an OP depends on reporting quality, not quantity. An ambiguous or excessive report is worse than no report: noise that hinders command decision. NATO standard is the SALUTE format; Ukrainian units often use equivalent formats.",
          },
          {
            type: "ul",
            items: [
              "S — Size: numbers (men, vehicles)",
              "A — Activity: what they are doing (moving, stationary, fortifying)",
              "L — Location: where (MGRS, known-point reference)",
              "U — Unit: identification (uniform, vehicles, symbols) if known",
              "T — Time: when observed (zulu or stated local)",
              "E — Equipment: visible weapons and vehicles",
            ],
          },
          {
            type: "p",
            text: "Periodic reporting even on 'nothing observed': the null report feeds the intelligence picture as much as the activity report. A silent OP is an OP that may have been neutralised.",
          },
        ],
      },
      {
        heading: "Signature discipline in OP",
        blocks: [
          {
            type: "p",
            text: "Once occupied, the OP must vanish visually, thermally, acoustically and EM. Habits expose the position within hours. Discipline is permanent, not only during enemy approach.",
          },
          {
            type: "ul",
            items: [
              "No smoking, no hot cooking, no prolonged heat in thermal view",
              "Minimum external movement, never at regular intervals",
              "Voice always short whisper, no chatting during observation shifts",
              "Bodily waste planned in a covered point, well away from the observation position",
              "Kit always covered: optic caps, camouflaged weapons, no visible shine",
              "Radio on receive, transmission only in scheduled window or for priority",
              "Phones in faraday — EM signature is the most frequent way OPs are detected",
              "Camouflage maintenance: cut vegetation dries, must be replaced",
            ],
          },
        ],
      },
      {
        heading: "Occupation and withdrawal procedures",
        blocks: [
          {
            type: "p",
            text: "OP occupation and withdrawal are the riskiest moments: the position is in motion, signatures grow, the enemy can observe the action. They are planned with the same care as the position itself.",
          },
          {
            type: "ul",
            items: [
              "Occupation preferably in darkness or in poor weather (cloud, fog, rain)",
              "Non-linear approach: break the route with intermediate cover",
              "Final approach in single file in cover, never in visible wedge",
              "Security sentry toward the enemy while the rest installs",
              "Withdrawal in darkness, leaving the OP 'sterile' (no waste, no signs)",
              "Personnel rotation: ideally the incoming team arrives before outgoing leaves, 15-30 minutes overlap",
            ],
          },
        ],
      },
      {
        heading: "FPV and drone considerations",
        blocks: [
          {
            type: "p",
            text: "The modern OP on the Ukrainian front operates under permanent enemy drone surveillance. Survival depends on overhead-cover discipline and thermal discretion.",
          },
          {
            type: "ul",
            items: [
              "Overhead cover (net or rigid roof): the observation position must not be visible from above",
              "Friendly optics and thermal cameras behind a camouflaged aperture: no visible protrusion",
              "Friendly drone for ground control: useful but generates EM signature, manage with discipline",
              "If an enemy drone flies over: no movement, no transmission, wait for it to pass",
              "Inbound FPV: evasion plan prepared — secondary OP, subsurface cover, AA firing position",
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
              "Choosing a comfortable rather than effective position",
              "Underestimating duration: planning for 24 hours and staying 5 days",
              "Transmitting too much: each transmission is a possible DF",
              "Leaving occupation signs (waste, disturbed vegetation, visible paths)",
              "External movement at regular times (dawn, meals) — exploitable pattern of life",
              "Personnel rotation arriving directly at the visible position",
              "Neglecting rear security because 'the enemy is in front'",
              "Ignoring the EM picture (phone on, active smartwatch)",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "OPs on the Ukrainian front have become the fulcrum of the targeting cycle: an observation position that identifies enemy movement can call friendly artillery with real-time correction and generate devastating effects within minutes. The OP is therefore a priority target for the enemy: its localisation is worth that of a command post. OP losses do not happen through tactical incompetence but through accumulation of small signature indiscipline. Survival depends on sustained discipline over time, not on the actions of a single moment.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Um Observation Post (OP) é uma posição de observação estática e oculta da qual um pequeno elemento monitora um setor por horas ou dias, reportando à rede de inteligência da unidade. No front ucraniano os OPs são um dos multiplicadores de força mais importantes e mais expostos: uma posição detectada gera artilharia em minutos. Este capítulo descreve propósito, siting, disciplina e considerações operacionais.",
    sections: [
      {
        heading: "Propósito do OP",
        blocks: [
          {
            type: "p",
            text: "O OP existe para coletar informação visual, acústica e em alguns casos eletromagnética, e retransmiti-la ao comando em forma utilizável. A diferença fundamental em relação a uma patrulha é a estaticidade: o OP não se move, acumula observação ao longo do tempo, constrói um pattern of life do inimigo.",
          },
          {
            type: "ul",
            items: [
              "Vigilância de via de aproximação inimiga",
              "Observação de ponto-chave (cruzamento, ponte, posição de tiro)",
              "Spotting para artilharia amiga ou ISR aéreo",
              "Verificação de inteligência recebida de outras fontes",
              "Alerta precoce em caso de aproximação inimiga",
              "Construção de pattern of life do setor adversário",
            ],
          },
        ],
      },
      {
        heading: "Siting — escolher a posição",
        blocks: [
          {
            type: "p",
            text: "A escolha da posição do OP é a decisão crítica mais importante: uma boa posição vê sem ser vista, tem vias de ingresso e saída cobertas, comms com o CP, e sustenta o pessoal pela duração planejada. Uma má posição é descoberta em horas e vira alvo.",
          },
          {
            type: "ul",
            items: [
              "Linha de visada sobre o setor de responsabilidade — requisito primário único",
              "Fundo: posicionar-se diante de fundo que dissolve a silhueta, não contra o céu",
              "Vias de ingresso e saída cobertas e diferentes (ao menos duas)",
              "Cover and concealment: proteção contra artilharia e dissimulação visual",
              "Distância da linha: nem perto demais (observação limitada), nem longe demais (inteligência atrasada)",
              "Comunicações: cobertura de rádio verificada antes da ocupação",
              "Água, drenagem: uma posição que inunda em 24 horas não é sustentável",
              "Vertical: considerar o que está acima (drone, sniper oposto) e abaixo (túnel, esgoto)",
            ],
          },
          {
            type: "callout",
            title: "REGRA EMPÍRICA",
            body: "Uma boa posição de OP é descoberta pela patrulha de reconhecimento após 10 minutos de observação atenta a partir da direção do inimigo. Se a presença é óbvia ao primeiro olhar, move-la. Se não é detectável nem após 10 minutos de escrutínio profissional, provavelmente está oculta demais para ver de volta.",
          },
        ],
      },
      {
        heading: "Composição do OP",
        blocks: [
          {
            type: "p",
            text: "Um OP mínimo é de 2 militares (nunca 1 — segurança exige sempre alguém acordado enquanto outro repousa ou observa). Um OP completo para 24-48 horas tem 3-4 militares que rotacionam tarefas.",
          },
          {
            type: "table",
            headers: ["Papel", "Responsabilidade", "Notas"],
            rows: [
              ["Observador", "Escrutínio ativo do setor", "Turno de 1-2 horas máximo, depois rotação"],
              ["Operador de rádio", "Comms com CP, reports periódicos", "Próximo ao observador, prowords codificadas"],
              ["Segurança / 360", "Vigilância da retaguarda e flancos", "Crítico para evitar flanqueio"],
              ["Descanso (rotação)", "Recuperação, hidratação, manutenção", "Nunca mais de um em descanso simultâneo"],
            ],
          },
        ],
      },
      {
        heading: "Disciplina de reporting",
        blocks: [
          {
            type: "p",
            text: "O valor de um OP depende da qualidade do reporting, não da quantidade. Um report ambíguo ou excessivo é pior do que nenhum: ruído que atrapalha a decisão do comando. O padrão OTAN é o formato SALUTE; unidades ucranianas frequentemente usam formatos equivalentes.",
          },
          {
            type: "ul",
            items: [
              "S — Size: tamanho (número de homens, veículos)",
              "A — Activity: o que fazem (movendo, parados, fortificando)",
              "L — Location: onde (MGRS, referência a ponto conhecido)",
              "U — Unit: identificação (uniforme, meios, símbolos) se conhecida",
              "T — Time: quando observado (zulu ou local declarado)",
              "E — Equipment: armas e veículos visíveis",
            ],
          },
          {
            type: "p",
            text: "Reporting periódico mesmo em 'nada observado': o null report alimenta o quadro de inteligência tanto quanto o de atividade. Um OP em silêncio é um OP que pode ter sido neutralizado.",
          },
        ],
      },
      {
        heading: "Disciplina de assinatura no OP",
        blocks: [
          {
            type: "p",
            text: "Uma vez ocupado, o OP deve sumir visual, térmica, acústica e EM. Os hábitos expõem a posição em horas. A disciplina é permanente, não apenas durante a aproximação inimiga.",
          },
          {
            type: "ul",
            items: [
              "Sem cigarro, sem cozinha quente, sem calor prolongado em térmica",
              "Movimento externo mínimo, nunca em intervalos regulares",
              "Voz sempre em sussurro curto, sem conversa durante turnos de observação",
              "Resíduos corporais planejados em ponto coberto, bem distante da posição de observação",
              "Equipamento sempre coberto: tampas de ótica, armas camufladas, sem brilho visível",
              "Rádio em recepção, transmissão só em janela programada ou prioridade",
              "Telefones em faraday — assinatura EM é o modo mais frequente de detecção de OP",
              "Manutenção da camuflagem: vegetação cortada seca, deve ser substituída",
            ],
          },
        ],
      },
      {
        heading: "Procedimentos de ocupação e saída",
        blocks: [
          {
            type: "p",
            text: "Ocupação e saída do OP são os momentos mais arriscados: a posição está em movimento, as assinaturas crescem, o inimigo pode observar a ação. São planejadas com o mesmo cuidado da própria posição.",
          },
          {
            type: "ul",
            items: [
              "Ocupação preferencialmente em escuridão ou tempo ruim (nuvens, neblina, chuva)",
              "Aproximação não linear: quebrar o percurso com cobertura intermediária",
              "Parte final da aproximação em fila única em cobertura, nunca em cunha visível",
              "Sentinela de vigilância para o inimigo enquanto o resto se instala",
              "Saída em escuridão, deixando o OP 'estéril' (sem resíduos, sem indícios)",
              "Rotação de pessoal: idealmente equipe nova chega antes da antiga sair, sobreposição de 15-30 minutos",
            ],
          },
        ],
      },
      {
        heading: "Considerações FPV e drone",
        blocks: [
          {
            type: "p",
            text: "O OP moderno no front ucraniano opera sob vigilância drone permanente do inimigo. A sobrevivência depende da disciplina de cobertura aérea e da discrição térmica.",
          },
          {
            type: "ul",
            items: [
              "Cobertura superior (rede ou teto rígido): a posição de observação não deve ser visível do alto",
              "Óticas e térmicas amigas atrás de fresta camuflada: sem protuberância visível",
              "Drone amigo para controle do solo: útil mas gera assinatura EM, gerenciar com disciplina",
              "Se drone inimigo voa por cima: sem movimento, sem transmissão, esperar passar",
              "FPV inbound: plano de evasão preparado — OP secundário, cobertura subsuperficial, posição AA",
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
              "Escolher posição confortável em vez de eficaz",
              "Subestimar a duração: planejar para 24 horas e ficar 5 dias",
              "Transmitir demais: cada transmissão é possível DF",
              "Deixar sinais de ocupação (lixo, vegetação perturbada, trilhas visíveis)",
              "Movimento externo em horários regulares (amanhecer, refeições) — pattern of life explorável",
              "Rotação de pessoal chegando direto à posição visível",
              "Negligenciar segurança da retaguarda porque 'o inimigo está na frente'",
              "Ignorar o quadro EM (telefone ligado, smartwatch ativo)",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Os OPs no front ucraniano tornaram-se o fulcro do targeting cycle: uma posição de observação que identifica movimento adversário pode chamar artilharia amiga com correção em tempo real e gerar efeitos devastadores em minutos. O OP é, portanto, alvo prioritário do inimigo: sua localização vale como a de um command post. As perdas de OP não ocorrem por incompetência tática mas por acúmulo de pequenas indisciplinas de assinatura. A sobrevivência depende de disciplina sustentada no tempo, não de ações em um único momento.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Un Observation Post (OP) est une position d'observation statique et masquée depuis laquelle un petit élément surveille un secteur pendant des heures ou des jours, en rendant compte au réseau de renseignement de l'unité. Sur le front ukrainien les OP sont l'un des multiplicateurs de force les plus importants et l'un des plus exposés : une position détectée génère de l'artillerie en quelques minutes. Ce chapitre décrit but, siting, discipline et considérations opérationnelles.",
    sections: [
      {
        heading: "But de l'OP",
        blocks: [
          {
            type: "p",
            text: "L'OP existe pour recueillir des informations visuelles, acoustiques et parfois électromagnétiques, et les retransmettre au commandement sous une forme exploitable. La différence fondamentale avec une patrouille est la staticité : l'OP ne bouge pas, il accumule l'observation dans le temps, construit un pattern of life de l'ennemi.",
          },
          {
            type: "ul",
            items: [
              "Surveillance d'une voie d'approche ennemie",
              "Observation d'un point clé (carrefour, pont, position de tir)",
              "Spotting pour artillerie amie ou ISR aérien",
              "Vérification de renseignement provenant d'autres sources",
              "Alerte précoce en cas d'approche ennemie",
              "Construction d'un pattern of life du secteur adverse",
            ],
          },
        ],
      },
      {
        heading: "Siting — choisir la position",
        blocks: [
          {
            type: "p",
            text: "Le choix de l'emplacement de l'OP est la décision critique la plus importante : une bonne position voit sans être vue, a des voies d'entrée et de sortie couvertes, des comms avec le CP, et peut soutenir le personnel sur la durée prévue. Une mauvaise position est découverte en quelques heures et devient une cible.",
          },
          {
            type: "ul",
            items: [
              "Ligne de vue sur le secteur de responsabilité — l'exigence primaire unique",
              "Arrière-plan : se placer devant un fond qui dissout la silhouette, pas contre le ciel",
              "Voies d'entrée et de sortie couvertes et différentes (au moins deux)",
              "Cover and concealment : protection contre l'artillerie et masque visuel",
              "Distance à la ligne : ni trop près (observation limitée), ni trop loin (renseignement retardé)",
              "Communications : couverture radio vérifiée avant l'occupation",
              "Eau, drainage : une position qui s'inonde en 24 heures n'est pas tenable",
              "Verticale : considérer ce qui est au-dessus (drone, sniper en face) et en dessous (tunnel, égouts)",
            ],
          },
          {
            type: "callout",
            title: "RÈGLE EMPIRIQUE",
            body: "Une bonne position d'OP est découverte par la patrouille de reconnaissance après 10 minutes d'observation attentive depuis la direction de l'ennemi. Si sa présence est évidente au premier regard, la déplacer. Si elle n'est pas détectable même après 10 minutes de scrutin professionnel, elle est probablement trop cachée pour voir à son tour.",
          },
        ],
      },
      {
        heading: "Composition de l'OP",
        blocks: [
          {
            type: "p",
            text: "Un OP minimum est composé de 2 soldats (jamais 1 — la sécurité exige toujours quelqu'un d'éveillé pendant que l'autre se repose ou observe). Un OP complet pour 24-48 heures comprend 3-4 soldats qui se relaient.",
          },
          {
            type: "table",
            headers: ["Rôle", "Responsabilité", "Notes"],
            rows: [
              ["Observateur", "Scrutation active du secteur", "Tour de 1-2 heures max, puis rotation"],
              ["Opérateur radio", "Comms avec CP, comptes-rendus périodiques", "Près de l'observateur, prowords codés"],
              ["Sécurité / 360", "Surveillance arrière et flancs", "Critique pour éviter le contournement"],
              ["Repos (rotation)", "Récupération, hydratation, entretien", "Jamais plus d'un au repos simultanément"],
            ],
          },
        ],
      },
      {
        heading: "Discipline de compte rendu",
        blocks: [
          {
            type: "p",
            text: "La valeur d'un OP dépend de la qualité du compte rendu, pas de la quantité. Un compte rendu ambigu ou surabondant est pire qu'aucun : du bruit qui gêne la décision du commandement. La norme OTAN est le format SALUTE ; les unités ukrainiennes utilisent souvent des formats équivalents.",
          },
          {
            type: "ul",
            items: [
              "S — Size : dimension (nombre d'hommes, de véhicules)",
              "A — Activity : ce qu'ils font (déplaçant, stationnant, fortifiant)",
              "L — Location : où (MGRS, référence à point connu)",
              "U — Unit : identification (uniforme, véhicules, symboles) si connue",
              "T — Time : quand observé (zoulou ou local annoncé)",
              "E — Equipment : armes et véhicules visibles",
            ],
          },
          {
            type: "p",
            text: "Compte rendu périodique même sur « rien observé » : le null report alimente le tableau de renseignement autant que le compte rendu d'activité. Un OP silencieux est un OP qui peut avoir été neutralisé.",
          },
        ],
      },
      {
        heading: "Discipline de signature en OP",
        blocks: [
          {
            type: "p",
            text: "Une fois occupé, l'OP doit disparaître visuellement, thermiquement, acoustiquement et en EM. Les habitudes découvrent la position en quelques heures. La discipline est permanente, pas seulement pendant l'approche ennemie.",
          },
          {
            type: "ul",
            items: [
              "Pas de cigarettes, pas de cuisine chaude, pas de chaleur prolongée en vue thermique",
              "Mouvement extérieur minimum, jamais à intervalles réguliers",
              "Voix toujours en chuchotement court, pas de discussion pendant les tours d'observation",
              "Déchets corporels planifiés en point couvert, loin de la position d'observation",
              "Équipement toujours couvert : bouchons d'optique, armes camouflées, pas de brillance visible",
              "Radio en réception, émission seulement en fenêtre programmée ou pour priorité",
              "Téléphones en faraday — la signature EM est le mode le plus fréquent de détection d'OP",
              "Entretien du camouflage : la végétation coupée sèche, doit être remplacée",
            ],
          },
        ],
      },
      {
        heading: "Procédures d'occupation et d'évacuation",
        blocks: [
          {
            type: "p",
            text: "L'occupation et l'évacuation de l'OP sont les moments les plus risqués : la position est en mouvement, les signatures grandissent, l'ennemi peut observer l'action. Elles se planifient avec le même soin que la position elle-même.",
          },
          {
            type: "ul",
            items: [
              "Occupation de préférence à l'obscurité ou par mauvaise météo (nuages, brouillard, pluie)",
              "Approche non linéaire : briser l'itinéraire par un couvert intermédiaire",
              "Dernière partie de l'approche en file unique sous couvert, jamais en coin visible",
              "Sentinelle de surveillance vers l'ennemi pendant que le reste s'installe",
              "Évacuation dans l'obscurité, en laissant l'OP « stérile » (pas de déchets, pas d'indices)",
              "Rotation du personnel : idéalement l'équipe entrante arrive avant que la sortante parte, 15-30 minutes de recouvrement",
            ],
          },
        ],
      },
      {
        heading: "Considérations FPV et drone",
        blocks: [
          {
            type: "p",
            text: "L'OP moderne sur le front ukrainien opère sous surveillance drone ennemi permanente. La survie dépend de la discipline de couvert aérien et de la discrétion thermique.",
          },
          {
            type: "ul",
            items: [
              "Couvert supérieur (filet ou toit rigide) : la position d'observation ne doit pas être visible d'en haut",
              "Optiques et thermiques amies derrière une meurtrière camouflée : pas de protrusion visible",
              "Drone ami pour contrôle au sol : utile mais génère une signature EM, à gérer avec discipline",
              "Si un drone ennemi survole : pas de mouvement, pas d'émission, attendre qu'il passe",
              "FPV inbound : plan d'évasion préparé — OP secondaire, couvert sous-surface, position AA",
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
              "Choisir une position confortable plutôt qu'efficace",
              "Sous-estimer la durée : planifier 24 heures et rester 5 jours",
              "Émettre trop : chaque émission est une possibilité de DF",
              "Laisser des signes d'occupation (déchets, végétation perturbée, sentes visibles)",
              "Mouvement extérieur à heures régulières (aube, repas) — pattern of life exploitable",
              "Rotation du personnel arrivant directement à la position visible",
              "Négliger la sécurité arrière parce que « l'ennemi est devant »",
              "Ignorer le tableau EM (téléphone allumé, smartwatch active)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les OP sur le front ukrainien sont devenus le pivot du targeting cycle : une position d'observation qui identifie un mouvement adverse peut appeler l'artillerie amie avec correction en temps réel, et produire des effets dévastateurs en quelques minutes. L'OP est donc une cible prioritaire pour l'ennemi : sa localisation vaut celle d'un command post. Les pertes d'OP ne viennent pas d'incompétence tactique mais d'accumulation de petites indisciplines de signature. La survie dépend de la discipline soutenue dans la durée, pas d'actions d'un seul instant.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
