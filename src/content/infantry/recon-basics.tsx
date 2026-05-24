import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La ricognizione è la disciplina che alimenta il ciclo decisionale del comando: senza informazione il comandante decide alla cieca. Sul fronte ucraino la ricognizione è massicciamente integrata con ISR aereo, droni, COMINT e fonti civili — ma la pattuglia di ricognizione a piedi rimane indispensabile per la verifica e per l'osservazione di dettaglio. Questo capitolo presenta scopo, tipi, disciplina di reporting e considerazioni OPSEC.",
    sections: [
      {
        heading: "Scopo della ricognizione",
        blocks: [
          {
            type: "p",
            text: "La ricognizione non è una operazione di combattimento: è una operazione di informazione. Il successo è misurato dalla qualità del report consegnato al comando, non dal numero di nemici osservati o ingaggiati. La ricognizione che ingaggia ha tipicamente fallito la sua missione primaria.",
          },
          {
            type: "ul",
            items: [
              "Determinare composizione, disposizione e attività del nemico",
              "Identificare punti chiave del terreno (linee, ostacoli, copertura)",
              "Verificare intelligence ricevuta da altre fonti (drone, COMINT, fonti civili)",
              "Identificare obiettivi per fires (artiglieria, ATGM, MLRS)",
              "Mappare avenues of approach e linee di rinforzo",
              "Confermare o rifiutare assunzioni del piano operativo",
            ],
          },
          {
            type: "callout",
            title: "REGOLA DI FERRO",
            body: "La ricognizione è furtiva di default. Una pattuglia di ricognizione che si fa ingaggiare ha perso la sua missione: il nemico ora sa che la pattuglia è uscita, conosce parzialmente le sue capacità, e ha allertato il proprio quadrante. L'informazione raccolta vale meno della informazione regalata al nemico. L'evasione viene sempre prima dell'ingaggio.",
          },
        ],
      },
      {
        heading: "Tipi di ricognizione",
        blocks: [
          {
            type: "p",
            text: "La dottrina NATO distingue tipi di ricognizione per scope e profilo. La scelta dipende dalla missione e dalla quantità di rischio accettabile per ottenere l'informazione.",
          },
          {
            type: "table",
            headers: ["Tipo", "Profilo", "Uso tipico"],
            rows: [
              ["Area reconnaissance", "Statico-mobile, settoriale", "Verifica di una zona limitata"],
              ["Route reconnaissance", "Lineare, lungo un asse", "Verifica di un percorso prima di passaggio amico"],
              ["Zone reconnaissance", "Distribuita, ampia", "Verifica di una zona estesa con più elementi"],
              ["Force-oriented", "Mirata su un nemico specifico", "Tracciare una unità nemica identificata"],
              ["Terrain-oriented", "Mirata sul terreno", "Identificare punti chiave senza riferimento a nemico"],
              ["Reconnaissance in force", "Manifesta, con potenza di fuoco", "Forzare il nemico a rivelare disposizione (raro nel contesto UA)"],
            ],
          },
          {
            type: "p",
            text: "Nel contesto ucraino la ricognizione manifesta (reconnaissance in force) è raramente usata per la saturazione di artiglieria e FPV: una unità che si manifesta diventa target. Domina invece la ricognizione furtiva integrata con ISR aereo.",
          },
        ],
      },
      {
        heading: "Disciplina di reporting",
        blocks: [
          {
            type: "p",
            text: "Un report di ricognizione utile è specifico, distinguibile (cosa è osservato vs cosa è inferito), e tempestivo. La struttura standard è SALUTE; molti unità ucraine usano formati equivalenti con priorità leggermente diverse.",
          },
          {
            type: "ul",
            items: [
              "Distinguere fatto da inferenza: 'visto 3 veicoli BMP-2' vs 'probabile compagnia meccanizzata'",
              "Coordinate sempre in MGRS o sistema concordato con il comando",
              "Orario zulu o locale dichiarato — mai ambiguo",
              "Numeri sempre comparabili: '5 effettivi' meglio di 'pochi'",
              "Affidabilità del report: indicare se osservazione diretta o riferita",
              "Priorità del report: PRIORITY (rilevante immediato), ROUTINE (per analisi)",
              "Report negativi (null): 'nulla osservato in settore X tra ore Y e Z' — informazione utile",
            ],
          },
        ],
      },
      {
        heading: "OPSEC della ricognizione",
        blocks: [
          {
            type: "p",
            text: "Una ricognizione efficace inizia prima dell'uscita: la sicurezza operativa della preparazione, dell'approccio e del rientro determina la sopravvivenza. Una pattuglia di ricognizione 'individuata' alimenta il nemico più di quanto raccoglie.",
          },
          {
            type: "ul",
            items: [
              "Briefing in spazio chiuso, lontano da finestre e personale non necessario",
              "Niente comunicazione del piano via WhatsApp/Telegram, niente foto degli effettivi",
              "Equipaggiamento controllato (rumore, riflessi) prima dell'uscita",
              "Identificativi personali lasciati in unità (dog tag generici, niente documenti personali)",
              "Comunicazioni in finestra programmata, niente trasmissione 'di gradimento'",
              "Rientro in punto diverso dall'uscita; debrief immediato in spazio chiuso",
              "Niente social, niente racconti dell'uscita a terzi, niente foto del personale dopo il rientro",
            ],
          },
        ],
      },
      {
        heading: "Integrazione con ISR",
        blocks: [
          {
            type: "p",
            text: "La ricognizione moderna è raramente solo a piedi: è integrata con droni di ricognizione, sensori COMINT, radar contro-batteria, satelliti commerciali. La pattuglia a piedi è un nodo del sistema, non l'unica fonte. Capire il proprio ruolo nel sistema è essenziale.",
          },
          {
            type: "ul",
            items: [
              "Drone ISR fornisce quadro generale, la pattuglia conferma il dettaglio",
              "COMINT identifica unità per traffico radio, la pattuglia conferma identificazione visiva",
              "Fonti civili (residenti, segnalazioni) indicano zone di interesse, la pattuglia verifica",
              "ISR aereo trova target, la pattuglia conferma per fires",
              "La pattuglia a piedi vede ciò che ISR non vede: dentro edifici, sotto copertura densa, in cantine",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni FPV in ricognizione",
        blocks: [
          {
            type: "p",
            text: "La pattuglia di ricognizione opera sotto sorveglianza drone permanente. La firma anche di una pattuglia ridotta (3-5 effettivi) è rilevabile a termocamera FPV. Le considerazioni di firma sono identiche a quelle di una pattuglia di combattimento, ma la priorità è inversa: la ricognizione preferisce sempre rinunciare alla missione invece di farsi vedere.",
          },
          {
            type: "ul",
            items: [
              "Movimento solo in copertura naturale o artificiale",
              "Pause frequenti, mai movimento continuo",
              "Niente apparecchi EM accesi non strettamente necessari",
              "Termico-discrezione: niente fuoco, niente cucina, distanza da fonti di calore",
              "Pianificare via di evasione in caso di scoperta — è la regola, non l'eccezione",
              "Se osservato da drone, immediata copertura sotterranea o vegetale densa, niente movimento",
            ],
          },
        ],
      },
      {
        heading: "Limiti del manuale",
        blocks: [
          {
            type: "warn",
            title: "FUORI SCOPE",
            body: "Le tattiche, tecniche e procedure (TTP) operative di ricognizione — infiltrazione, esfiltrazione, ricognizione close-target, prisoner snatch, sensor emplacement — non sono descritte in questo manuale. Sono materiale di unità specializzate (recon, SOF, HUR) e si apprendono in addestramento dedicato. Questo capitolo è di sola coscienza dottrinale.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Confondere ricognizione con combat patrol: ingaggiare quando si dovrebbe osservare",
              "Report ambigui ('molti soldati', 'verso est') senza precisione",
              "Trasmettere troppo dal campo invece di raccogliere e riportare a rientro",
              "Affidarsi alla memoria invece di prendere note discrete (cifratamente)",
              "Esibire l'equipaggiamento di ricognizione (NVG, termiche, antenne lunghe) in zona civile",
              "Postare foto post-missione, anche giorni dopo il rientro",
              "Dimenticare il null report quando 'nulla osservato' — è informazione cruciale",
              "Trattare la propria missione come autonoma invece che integrata con ISR e fires",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "La ricognizione sul fronte ucraino è dominata dalla integrazione tra drone, COMINT, fonti civili e pattuglia a piedi. Unità come HUR e SSO operano in formato misto: l'elemento a piedi conferma e verifica ciò che il drone ha già parzialmente indicato. Il volontario internazionale in ricognizione lavora come parte di un sistema più ampio e accetta che il proprio contributo sia complementare, non centrale. La disciplina di reporting, l'OPSEC e l'umiltà di restare nascosti sono valore — l'eroismo di scoprirsi per ingaggiare è negativo per la missione.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Reconnaissance is the discipline that feeds the commander's decision cycle: without information the commander decides blindly. On the Ukrainian front, recon is massively integrated with aerial ISR, drones, COMINT and civilian sources — but the foot reconnaissance patrol remains indispensable for verification and detailed observation. This chapter presents purpose, types, reporting discipline and OPSEC considerations.",
    sections: [
      {
        heading: "Purpose of reconnaissance",
        blocks: [
          {
            type: "p",
            text: "Reconnaissance is not a combat operation: it is an information operation. Success is measured by the quality of the report delivered to command, not by the number of enemies observed or engaged. A recon patrol that engages has typically failed its primary mission.",
          },
          {
            type: "ul",
            items: [
              "Determine composition, disposition and activity of the enemy",
              "Identify key terrain points (lines, obstacles, cover)",
              "Verify intelligence from other sources (drone, COMINT, civilian)",
              "Identify targets for fires (artillery, ATGM, MLRS)",
              "Map avenues of approach and reinforcement routes",
              "Confirm or refute assumptions in the operational plan",
            ],
          },
          {
            type: "callout",
            title: "IRON RULE",
            body: "Reconnaissance is stealthy by default. A recon patrol that gets engaged has lost its mission: the enemy now knows the patrol is out, partially knows its capabilities, and has alerted the area. The information gathered is worth less than the information given to the enemy. Evasion always comes before engagement.",
          },
        ],
      },
      {
        heading: "Types of reconnaissance",
        blocks: [
          {
            type: "p",
            text: "NATO doctrine distinguishes recon types by scope and profile. The choice depends on the mission and the acceptable risk to obtain the information.",
          },
          {
            type: "table",
            headers: ["Type", "Profile", "Typical use"],
            rows: [
              ["Area reconnaissance", "Static-mobile, sector", "Verify a limited zone"],
              ["Route reconnaissance", "Linear, along an axis", "Verify a route before friendly passage"],
              ["Zone reconnaissance", "Distributed, wide", "Verify an extended zone with multiple elements"],
              ["Force-oriented", "Targeted at a specific enemy", "Track an identified enemy unit"],
              ["Terrain-oriented", "Targeted at terrain", "Identify key points without enemy reference"],
              ["Reconnaissance in force", "Overt, with firepower", "Force the enemy to reveal disposition (rare in UA context)"],
            ],
          },
          {
            type: "p",
            text: "In the Ukrainian context, overt recon (reconnaissance in force) is rarely used due to artillery and FPV saturation: a unit that exposes itself becomes a target. Stealth recon integrated with aerial ISR dominates instead.",
          },
        ],
      },
      {
        heading: "Reporting discipline",
        blocks: [
          {
            type: "p",
            text: "A useful recon report is specific, distinguishable (what is observed vs what is inferred), and timely. The standard structure is SALUTE; many Ukrainian units use equivalent formats with slightly different priorities.",
          },
          {
            type: "ul",
            items: [
              "Distinguish fact from inference: 'saw 3 BMP-2' vs 'probable mechanised company'",
              "Coordinates always in MGRS or system agreed with command",
              "Zulu time or stated local — never ambiguous",
              "Numbers always comparable: '5 personnel' is better than 'a few'",
              "Report reliability: indicate direct observation or hearsay",
              "Report priority: PRIORITY (immediately relevant), ROUTINE (for analysis)",
              "Negative (null) reports: 'nothing observed in sector X between Y and Z' — useful information",
            ],
          },
        ],
      },
      {
        heading: "Recon OPSEC",
        blocks: [
          {
            type: "p",
            text: "Effective recon begins before going out: OPSEC of preparation, approach and return determines survival. A 'compromised' recon patrol feeds the enemy more than it gathers.",
          },
          {
            type: "ul",
            items: [
              "Briefing in a closed space, away from windows and unnecessary personnel",
              "No communication of the plan via WhatsApp/Telegram, no team photos",
              "Kit checked (noise, reflections) before going out",
              "Personal IDs left at the unit (generic dog tags, no personal documents)",
              "Comms in scheduled window only, no 'check-in' transmissions",
              "Return at a different point than exit; immediate debrief in closed space",
              "No social, no recounting of the patrol to third parties, no team photos after return",
            ],
          },
        ],
      },
      {
        heading: "Integration with ISR",
        blocks: [
          {
            type: "p",
            text: "Modern reconnaissance is rarely foot-only: it is integrated with recon drones, COMINT sensors, counter-battery radars, commercial satellites. The foot patrol is a node in the system, not the only source. Understanding your role in the system is essential.",
          },
          {
            type: "ul",
            items: [
              "ISR drone provides the general picture, the patrol confirms the detail",
              "COMINT identifies units by radio traffic, the patrol confirms visually",
              "Civilian sources (residents, tips) indicate zones of interest, the patrol verifies",
              "Aerial ISR finds targets, the patrol confirms for fires",
              "The foot patrol sees what ISR does not: inside buildings, under dense cover, in basements",
            ],
          },
        ],
      },
      {
        heading: "FPV considerations in recon",
        blocks: [
          {
            type: "p",
            text: "The recon patrol operates under permanent drone surveillance. Even a small patrol (3-5 soldiers) is detectable to thermal FPV. Signature considerations are identical to a combat patrol's, but priority is reversed: recon always prefers to abandon the mission rather than be seen.",
          },
          {
            type: "ul",
            items: [
              "Move only in natural or artificial cover",
              "Frequent halts, never continuous movement",
              "No EM devices on unless strictly necessary",
              "Thermal discretion: no fire, no cooking, distance from heat sources",
              "Plan an evasion route in case of discovery — this is the rule, not the exception",
              "If observed by drone, immediate subterranean or dense vegetal cover, no movement",
            ],
          },
        ],
      },
      {
        heading: "Manual limits",
        blocks: [
          {
            type: "warn",
            title: "OUT OF SCOPE",
            body: "Operational recon TTPs — infiltration, exfiltration, close-target recon, prisoner snatch, sensor emplacement — are not described in this manual. They are material for specialised units (recon, SOF, HUR) and learned in dedicated training. This chapter is doctrinal awareness only.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Confusing recon with combat patrol: engaging when one should observe",
              "Ambiguous reports ('lots of soldiers', 'going east') without precision",
              "Transmitting too much from the field instead of gathering and reporting on return",
              "Relying on memory instead of taking discreet notes (encrypted)",
              "Showing off recon kit (NVG, thermal, long antennas) in civilian areas",
              "Posting post-mission photos, even days after return",
              "Forgetting the null report when 'nothing observed' — it is crucial information",
              "Treating the mission as autonomous rather than integrated with ISR and fires",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Reconnaissance on the Ukrainian front is dominated by integration between drone, COMINT, civilian sources and foot patrol. Units like HUR and SSO operate in mixed format: the foot element confirms and verifies what the drone has already partially indicated. The international volunteer in recon works as part of a larger system and accepts that their contribution is complementary, not central. Reporting discipline, OPSEC and the humility of staying hidden are value — the heroism of being detected to engage is negative for the mission.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A reconhecimento é a disciplina que alimenta o ciclo decisório do comando: sem informação o comandante decide às cegas. No front ucraniano o recon é massivamente integrado com ISR aéreo, drones, COMINT e fontes civis — mas a patrulha de reconhecimento a pé permanece indispensável para verificação e observação de detalhe. Este capítulo apresenta propósito, tipos, disciplina de reporting e considerações de OPSEC.",
    sections: [
      {
        heading: "Propósito do reconhecimento",
        blocks: [
          {
            type: "p",
            text: "O reconhecimento não é operação de combate: é operação de informação. O sucesso é medido pela qualidade do report entregue ao comando, não pelo número de inimigos observados ou engajados. Uma patrulha de recon que engaja tipicamente falhou na missão primária.",
          },
          {
            type: "ul",
            items: [
              "Determinar composição, disposição e atividade do inimigo",
              "Identificar pontos-chave do terreno (linhas, obstáculos, cobertura)",
              "Verificar inteligência de outras fontes (drone, COMINT, civis)",
              "Identificar alvos para fires (artilharia, ATGM, MLRS)",
              "Mapear avenues of approach e rotas de reforço",
              "Confirmar ou refutar assunções do plano operacional",
            ],
          },
          {
            type: "callout",
            title: "REGRA DE FERRO",
            body: "O recon é furtivo por padrão. Uma patrulha de recon que é engajada perdeu a missão: o inimigo agora sabe que a patrulha saiu, conhece parcialmente as capacidades e alertou o setor. A informação coletada vale menos que a informação dada ao inimigo. A evasão sempre vem antes do engajamento.",
          },
        ],
      },
      {
        heading: "Tipos de reconhecimento",
        blocks: [
          {
            type: "p",
            text: "A doutrina OTAN distingue tipos por escopo e perfil. A escolha depende da missão e do risco aceitável para obter a informação.",
          },
          {
            type: "table",
            headers: ["Tipo", "Perfil", "Uso típico"],
            rows: [
              ["Area reconnaissance", "Estático-móvel, setorial", "Verificar zona limitada"],
              ["Route reconnaissance", "Linear, ao longo de eixo", "Verificar rota antes de passagem amiga"],
              ["Zone reconnaissance", "Distribuída, ampla", "Verificar zona ampla com múltiplos elementos"],
              ["Force-oriented", "Sobre inimigo específico", "Rastrear unidade inimiga identificada"],
              ["Terrain-oriented", "Sobre terreno", "Identificar pontos-chave sem referência ao inimigo"],
              ["Reconnaissance in force", "Manifesto, com poder de fogo", "Forçar o inimigo a revelar disposição (raro no contexto UA)"],
            ],
          },
          {
            type: "p",
            text: "No contexto ucraniano o recon manifesto é raramente usado pela saturação de artilharia e FPV: unidade que se manifesta vira alvo. Predomina o recon furtivo integrado com ISR aéreo.",
          },
        ],
      },
      {
        heading: "Disciplina de reporting",
        blocks: [
          {
            type: "p",
            text: "Um report de recon útil é específico, distinguível (o observado vs o inferido) e tempestivo. A estrutura padrão é SALUTE; muitas unidades ucranianas usam formatos equivalentes com prioridades ligeiramente diferentes.",
          },
          {
            type: "ul",
            items: [
              "Distinguir fato de inferência: 'vistos 3 BMP-2' vs 'provável companhia mecanizada'",
              "Coordenadas sempre em MGRS ou sistema acordado com comando",
              "Horário zulu ou local declarado — nunca ambíguo",
              "Números sempre comparáveis: '5 efetivos' melhor que 'alguns'",
              "Confiabilidade do report: indicar observação direta ou referida",
              "Prioridade do report: PRIORITY (relevante imediato), ROUTINE (para análise)",
              "Reports negativos (null): 'nada observado no setor X entre Y e Z' — informação útil",
            ],
          },
        ],
      },
      {
        heading: "OPSEC do recon",
        blocks: [
          {
            type: "p",
            text: "Um recon eficaz começa antes da saída: a OPSEC da preparação, aproximação e retorno determina a sobrevivência. Uma patrulha 'comprometida' alimenta o inimigo mais do que coleta.",
          },
          {
            type: "ul",
            items: [
              "Briefing em espaço fechado, longe de janelas e pessoal desnecessário",
              "Sem comunicação do plano por WhatsApp/Telegram, sem fotos do efetivo",
              "Equipamento checado (ruído, reflexos) antes de sair",
              "IDs pessoais deixadas na unidade (dog tags genéricas, sem documentos pessoais)",
              "Comms em janela programada, sem transmissões de 'check-in'",
              "Retorno em ponto diferente da saída; debrief imediato em espaço fechado",
              "Sem social, sem relatos a terceiros, sem fotos do pessoal após retorno",
            ],
          },
        ],
      },
      {
        heading: "Integração com ISR",
        blocks: [
          {
            type: "p",
            text: "O recon moderno raramente é só a pé: integra-se com drones de recon, sensores COMINT, radares contra-bateria, satélites comerciais. A patrulha a pé é um nó do sistema, não a única fonte. Entender o papel no sistema é essencial.",
          },
          {
            type: "ul",
            items: [
              "Drone ISR fornece quadro geral, a patrulha confirma o detalhe",
              "COMINT identifica unidades por tráfego de rádio, a patrulha confirma visualmente",
              "Fontes civis (moradores, dicas) indicam zonas de interesse, a patrulha verifica",
              "ISR aéreo encontra alvos, a patrulha confirma para fires",
              "A patrulha a pé vê o que o ISR não vê: dentro de prédios, sob cobertura densa, em porões",
            ],
          },
        ],
      },
      {
        heading: "Considerações FPV em recon",
        blocks: [
          {
            type: "p",
            text: "A patrulha de recon opera sob vigilância drone permanente. A assinatura mesmo de patrulha reduzida (3-5 efetivos) é detectável a térmica FPV. As considerações de assinatura são idênticas às de uma combat patrol, mas a prioridade é invertida: o recon sempre prefere abrir mão da missão em vez de ser visto.",
          },
          {
            type: "ul",
            items: [
              "Movimento só em cobertura natural ou artificial",
              "Paradas frequentes, nunca movimento contínuo",
              "Sem aparelhos EM ligados que não sejam estritamente necessários",
              "Discrição térmica: sem fogo, sem cozinha, distância de fontes de calor",
              "Planejar via de evasão se descoberto — é regra, não exceção",
              "Se observado por drone, cobertura subsuperficial imediata ou vegetação densa, sem movimento",
            ],
          },
        ],
      },
      {
        heading: "Limites do manual",
        blocks: [
          {
            type: "warn",
            title: "FORA DE ESCOPO",
            body: "TTPs operacionais de recon — infiltração, exfiltração, close-target recon, prisoner snatch, sensor emplacement — não são descritos neste manual. São material de unidades especializadas (recon, SOF, HUR) e aprendem-se em treinamento dedicado. Este capítulo é só consciência doutrinária.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Confundir recon com combat patrol: engajar quando deveria observar",
              "Reports ambíguos ('muitos soldados', 'indo para leste') sem precisão",
              "Transmitir demais do campo em vez de coletar e reportar no retorno",
              "Confiar na memória em vez de tomar notas discretas (cifradas)",
              "Exibir equipamento de recon (NVG, térmica, antenas longas) em zona civil",
              "Postar fotos pós-missão, mesmo dias após o retorno",
              "Esquecer o null report quando 'nada observado' — é informação crucial",
              "Tratar a missão como autônoma em vez de integrada com ISR e fires",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O reconhecimento no front ucraniano é dominado pela integração entre drone, COMINT, fontes civis e patrulha a pé. Unidades como HUR e SSO operam em formato misto: o elemento a pé confirma e verifica o que o drone já indicou parcialmente. O voluntário internacional em recon trabalha como parte de um sistema maior e aceita que sua contribuição seja complementar, não central. A disciplina de reporting, a OPSEC e a humildade de permanecer escondido são valor — o heroísmo de se expor para engajar é negativo para a missão.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La reconnaissance est la discipline qui alimente le cycle décisionnel du commandement : sans information le chef décide à l'aveugle. Sur le front ukrainien, le recon est massivement intégré avec l'ISR aérien, les drones, le COMINT et des sources civiles — mais la patrouille de reconnaissance à pied reste indispensable pour la vérification et l'observation de détail. Ce chapitre présente but, types, discipline de compte rendu et considérations OPSEC.",
    sections: [
      {
        heading: "But de la reconnaissance",
        blocks: [
          {
            type: "p",
            text: "La reconnaissance n'est pas une opération de combat : c'est une opération d'information. Le succès se mesure à la qualité du compte rendu livré au commandement, pas au nombre d'ennemis observés ou engagés. Une patrouille de reconnaissance qui engage a typiquement échoué dans sa mission primaire.",
          },
          {
            type: "ul",
            items: [
              "Déterminer composition, disposition et activité de l'ennemi",
              "Identifier les points clés du terrain (lignes, obstacles, couvert)",
              "Vérifier des renseignements d'autres sources (drone, COMINT, civils)",
              "Identifier des cibles pour les feux (artillerie, ATGM, MLRS)",
              "Cartographier les voies d'approche et les routes de renfort",
              "Confirmer ou réfuter les hypothèses du plan opérationnel",
            ],
          },
          {
            type: "callout",
            title: "RÈGLE D'OR",
            body: "La reconnaissance est furtive par défaut. Une patrouille de reconnaissance qui se fait engager a perdu sa mission : l'ennemi sait maintenant qu'elle est sortie, connaît partiellement ses capacités et a alerté son secteur. L'information collectée vaut moins que celle donnée à l'ennemi. L'évasion passe toujours avant l'engagement.",
          },
        ],
      },
      {
        heading: "Types de reconnaissance",
        blocks: [
          {
            type: "p",
            text: "La doctrine OTAN distingue les types par portée et profil. Le choix dépend de la mission et du risque acceptable pour obtenir l'information.",
          },
          {
            type: "table",
            headers: ["Type", "Profil", "Usage type"],
            rows: [
              ["Area reconnaissance", "Statique-mobile, secteur", "Vérifier une zone limitée"],
              ["Route reconnaissance", "Linéaire, le long d'un axe", "Vérifier un itinéraire avant passage ami"],
              ["Zone reconnaissance", "Distribuée, large", "Vérifier une zone étendue avec plusieurs éléments"],
              ["Force-oriented", "Visant un ennemi spécifique", "Pister une unité ennemie identifiée"],
              ["Terrain-oriented", "Visant le terrain", "Identifier des points clés sans référence à l'ennemi"],
              ["Reconnaissance in force", "Manifeste, avec puissance de feu", "Forcer l'ennemi à révéler sa disposition (rare au contexte UA)"],
            ],
          },
          {
            type: "p",
            text: "Dans le contexte ukrainien la reconnaissance manifeste est rarement utilisée à cause de la saturation d'artillerie et FPV : une unité qui s'expose devient cible. Domine la reconnaissance furtive intégrée avec l'ISR aérien.",
          },
        ],
      },
      {
        heading: "Discipline de compte rendu",
        blocks: [
          {
            type: "p",
            text: "Un compte rendu de reconnaissance utile est spécifique, distinguable (ce qui est observé vs ce qui est inféré) et opportun. La structure standard est SALUTE ; de nombreuses unités ukrainiennes utilisent des formats équivalents avec des priorités légèrement différentes.",
          },
          {
            type: "ul",
            items: [
              "Distinguer fait et inférence : « vus 3 BMP-2 » vs « probable compagnie mécanisée »",
              "Coordonnées toujours en MGRS ou système convenu avec le commandement",
              "Heure zoulou ou locale annoncée — jamais ambigüe",
              "Nombres toujours comparables : « 5 personnels » mieux que « quelques »",
              "Fiabilité du compte rendu : indiquer observation directe ou rapportée",
              "Priorité du compte rendu : PRIORITY (immédiatement pertinent), ROUTINE (pour analyse)",
              "Comptes rendus négatifs (null) : « rien observé dans le secteur X entre Y et Z » — information utile",
            ],
          },
        ],
      },
      {
        heading: "OPSEC de la reconnaissance",
        blocks: [
          {
            type: "p",
            text: "Une reconnaissance efficace commence avant la sortie : l'OPSEC de préparation, d'approche et de retour détermine la survie. Une patrouille « compromise » alimente l'ennemi plus qu'elle ne collecte.",
          },
          {
            type: "ul",
            items: [
              "Briefing en espace clos, loin des fenêtres et du personnel non nécessaire",
              "Pas de communication du plan par WhatsApp/Telegram, pas de photos de l'équipe",
              "Équipement contrôlé (bruit, reflets) avant la sortie",
              "Identifications personnelles laissées en unité (plaques génériques, pas de documents personnels)",
              "Comms en fenêtre programmée seulement, pas d'émission « de contrôle »",
              "Retour en point différent de la sortie ; débrief immédiat en espace clos",
              "Pas de social, pas de récit à des tiers, pas de photos du personnel après le retour",
            ],
          },
        ],
      },
      {
        heading: "Intégration avec l'ISR",
        blocks: [
          {
            type: "p",
            text: "La reconnaissance moderne est rarement seulement à pied : elle s'intègre avec drones de reconnaissance, capteurs COMINT, radars contre-batterie, satellites commerciaux. La patrouille à pied est un nœud du système, pas la seule source. Comprendre son rôle dans le système est essentiel.",
          },
          {
            type: "ul",
            items: [
              "Le drone ISR fournit le tableau général, la patrouille confirme le détail",
              "Le COMINT identifie les unités par trafic radio, la patrouille confirme visuellement",
              "Les sources civiles (résidents, signalements) indiquent les zones d'intérêt, la patrouille vérifie",
              "L'ISR aérien trouve les cibles, la patrouille confirme pour les feux",
              "La patrouille à pied voit ce que l'ISR ne voit pas : dans les bâtiments, sous couvert dense, en caves",
            ],
          },
        ],
      },
      {
        heading: "Considérations FPV en reconnaissance",
        blocks: [
          {
            type: "p",
            text: "La patrouille de reconnaissance opère sous surveillance drone permanente. La signature même d'une patrouille réduite (3-5 personnels) est détectable à la thermique FPV. Les considérations de signature sont identiques à celles d'une combat patrol, mais la priorité est inversée : la reconnaissance préfère toujours renoncer à la mission plutôt que d'être vue.",
          },
          {
            type: "ul",
            items: [
              "Mouvement seulement en couvert naturel ou artificiel",
              "Haltes fréquentes, jamais de mouvement continu",
              "Pas d'appareils EM allumés non strictement nécessaires",
              "Discrétion thermique : pas de feu, pas de cuisine, distance des sources de chaleur",
              "Planifier une voie d'évasion en cas de découverte — c'est la règle, pas l'exception",
              "Si observée par drone, couvert sous-surface immédiat ou végétation dense, pas de mouvement",
            ],
          },
        ],
      },
      {
        heading: "Limites du manuel",
        blocks: [
          {
            type: "warn",
            title: "HORS PÉRIMÈTRE",
            body: "Les TTP opérationnelles de reconnaissance — infiltration, exfiltration, close-target recon, prisoner snatch, pose de capteurs — ne sont pas décrites dans ce manuel. Elles sont matière d'unités spécialisées (recon, SOF, HUR) et s'apprennent en formation dédiée. Ce chapitre n'est que de la conscience doctrinale.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Confondre reconnaissance et combat patrol : engager quand on devrait observer",
              "Comptes rendus ambigus (« beaucoup de soldats », « vers l'est ») sans précision",
              "Émettre trop depuis le terrain au lieu de collecter et rendre compte au retour",
              "Compter sur la mémoire au lieu de prendre des notes discrètes (chiffrées)",
              "Exhiber l'équipement de reconnaissance (NVG, thermique, antennes longues) en zone civile",
              "Poster des photos post-mission, même des jours après le retour",
              "Oublier le null report quand « rien observé » — c'est une information cruciale",
              "Traiter la mission comme autonome au lieu d'intégrée à l'ISR et aux feux",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La reconnaissance sur le front ukrainien est dominée par l'intégration entre drone, COMINT, sources civiles et patrouille à pied. Des unités comme HUR et SSO opèrent en format mixte : l'élément à pied confirme et vérifie ce que le drone a déjà partiellement indiqué. Le volontaire international en reconnaissance travaille comme partie d'un système plus large et accepte que sa contribution soit complémentaire, pas centrale. La discipline de compte rendu, l'OPSEC et l'humilité de rester caché sont de la valeur — l'héroïsme de se découvrir pour engager est négatif pour la mission.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
