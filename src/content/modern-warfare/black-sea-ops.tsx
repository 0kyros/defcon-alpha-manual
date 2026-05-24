import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il teatro del Mar Nero è una delle dimensioni più innovative del conflitto russo-ucraino 2022-2026. Questo capitolo descrive il contesto, la dottrina e la consapevolezza operativa a livello educativo. NON contiene procedure di inserzione, raid, navigazione tattica o impiego di sistemi navali.",
    sections: [
      {
        heading: "Il contesto strategico",
        blocks: [
          {
            type: "p",
            text: "Il Mar Nero è il punto di intersezione tra geografia, economia e potere militare. Dal 2022, è stato teatro di una trasformazione dottrinale: una nazione senza marina convenzionale ha imposto costi significativi a una flotta tradizionale grazie a sistemi asimmetrici.",
          },
          {
            type: "ul",
            items: [
              "Geografia: collega Russia, Ucraina, Turchia, Romania, Bulgaria, Georgia",
              "Importanza economica: corridoio del grano ucraino, vie energetiche, accesso al Mediterraneo via Bosforo",
              "Squilibrio iniziale: Flotta russa del Mar Nero (BSF) vs marina ucraina ridotta nel 2014",
              "Trasformazione 2022-2026: drone navali, missili anti-nave, deception, isolamento di Sebastopoli",
              "Convenzione di Montreux: chiusura degli Stretti turchi a navi da guerra in tempo di guerra — limite strategico significativo",
              "Ridislocazione BSF: forzata fuori da Sebastopoli verso Novorossiysk dopo perdite documentate",
            ],
          },
        ],
      },
      {
        heading: "Sistemi e capacità ucraine (livello OSINT)",
        blocks: [
          {
            type: "p",
            text: "Le capacità ucraine nel Mar Nero sono pubblicamente documentate. Questo paragrafo le descrive a livello informativo come parte della consapevolezza del soldato volontario.",
          },
          {
            type: "table",
            headers: ["Sistema / capacità", "Funzione (livello pubblico)"],
            rows: [
              ["Magura V5", "USV (drone navale) ucraino, raggio centinaia di km, carica esplosiva"],
              ["Sea Baby", "USV impiegata in attacchi documentati su navi russe e ponte di Crimea"],
              ["Missili Neptune", "Anti-nave a basa terrestre, documentato affondamento incrociatore Moskva (aprile 2022)"],
              ["Storm Shadow / SCALP-EG", "Missili da crociera air-launched contro infrastruttura navale (forniti UK/FR)"],
              ["HUR / SSO / SBU", "Servizi di intelligence con responsabilità di operazioni speciali navali"],
              ["Aviazione navale", "Capacità ridotta, integrata con assetti partner / NATO"],
            ],
          },
        ],
      },
      {
        heading: "Sistemi russi nel teatro (livello OSINT)",
        blocks: [
          {
            type: "ul",
            items: [
              "Flotta del Mar Nero (BSF): incrociatori, fregate, sottomarini classe Kilo, navi di sbarco",
              "Sistemi di difesa costiera: S-400, Bastion, Bal-E",
              "Aviazione navale: Su-30SM, Su-24M, elicotteri Ka-27/Ka-29",
              "Sistemi di sorveglianza: radar Mineral-ME, sistemi di osservazione costiera",
              "Vettori per Kalibr (missili da crociera): piattaforme navali, aria, terra",
              "Perdite documentate: Moskva (apr 2022), Saratov (mar 2022), Sergei Kotov (mar 2024), Tsezar Kunikov (feb 2024), Caesar Kunikov, Ivanovets, e altre — fonti OSINT pubbliche",
            ],
          },
          {
            type: "callout",
            title: "Riduzione presenza BSF",
            body: "Dalla fine del 2023, la presenza significativa della BSF a Sebastopoli è stata fortemente ridotta. La maggior parte degli asset operativi è stata spostata a Novorossiysk. Questo cambiamento è pubblicamente documentato da imagery satellitare commerciale.",
          },
        ],
      },
      {
        heading: "Dottrina di guerra navale asimmetrica",
        blocks: [
          {
            type: "p",
            text: "L'esperienza Mar Nero ha generato osservazioni dottrinali ora studiate da marine NATO. Comprenderle a livello educativo è parte della cultura del soldato moderno.",
          },
          {
            type: "ul",
            items: [
              "USV (Unmanned Surface Vehicles): rapporto costo/efficacia che ricalca la disruption FPV in terra",
              "Layered attack: USV + missili da crociera + drone aereo coordinati in attacchi complessi",
              "Saturazione: attacchi multipli simultanei per saturare difese punto-difesa",
              "Deception e timing: attacchi in finestre meteo / oscurità che limitano sorveglianza aerea",
              "Cyber e EW: integrazione di azione cyber con cinetica navale",
              "Geografia di rifugio: dispersione dei mezzi navali per ridurre vulnerabilità",
            ],
          },
        ],
      },
      {
        heading: "Ambiente operativo costiero",
        blocks: [
          {
            type: "p",
            text: "L'ambiente costiero ha caratteristiche specifiche che il volontario in eventuale impiego costiero deve conoscere — anche se l'impiego attivo è ovviamente specialistico e riservato a unità qualificate.",
          },
          {
            type: "ul",
            items: [
              "Meteo: vento, mare, escursioni termiche più estreme che entroterra",
              "Salsedine: degrado di equipaggiamento (armi, ottiche, elettronica) accelerato",
              "Visibilità: notte costiera può essere più scura (no light pollution) ma anche più piatta termicamente",
              "Maree: in alcuni tratti del Mar Nero limitate, ma rilevanti per inserzione/estrazione",
              "Sorveglianza nemica: radar costieri, droni a media quota, satelliti commerciali e militari",
              "Civili in zona: pescatori, residenti — distinzione legale e operativa fondamentale",
            ],
          },
        ],
      },
      {
        heading: "Awareness — non operazioni",
        blocks: [
          {
            type: "p",
            text: "Questo capitolo NON descrive procedure di insertion/extraction marittima, raid, infiltrazione costiera, sabotaggio. Tali capacità sono dominio di unità specifiche (HUR, SSO, brigate di Marines) con addestramento dedicato. Il volontario non-specialista che si trovasse in supporto a operazioni Mar Nero opera sotto guida di personale qualificato, in ruolo subordinato e con quadro etico-legale ben definito.",
          },
          {
            type: "ul",
            items: [
              "Conoscere la dottrina è informazione utile — applicarla è specializzazione",
              "L'integrazione in unità Mar Nero passa per formazione dedicata, non improvvisazione",
              "Awareness OPSEC marittimo: niente foto a bordo, niente posizioni, niente compagni in foto",
              "Rispetto del diritto del mare e LOAC anche in operazioni navali",
              "Coordinamento con Marina ucraina e servizi (HUR, SBU) tramite catene di comando regolari",
              "Sicurezza personale: ambiente marittimo è meno indulgente di terreno per errori",
            ],
          },
        ],
      },
      {
        heading: "Impatto strategico documentato",
        blocks: [
          {
            type: "ul",
            items: [
              "Apertura del corridoio del grano ucraino (luglio 2023 - presente) come effetto della pressione anti-BSF",
              "Riduzione operativa della BSF a Sebastopoli, ridislocazione a Novorossiysk",
              "Affondamenti documentati di asset navali russi maggiori (incluso Moskva, varie corvette, ponte di Crimea danneggiato)",
              "Inversione del rapporto storico costo/effetto in guerra navale tramite USV",
              "Cambio dottrinale nelle marine NATO che studiano il caso ucraino",
              "Conferma del valore di sistemi missili anti-nave terrestri (Neptune, Harpoon) come deterrenza low-cost",
            ],
          },
        ],
      },
      {
        heading: "Errori comuni nella narrazione e percezione",
        blocks: [
          {
            type: "ul",
            items: [
              "Pensare che il Mar Nero sia teatro \"secondario\" — è centrale per economia e morale strategico",
              "Sottovalutare il ruolo dell'OSINT navale (imagery commerciale rivela movimenti BSF)",
              "Confondere capacità di drone navale ucraino con la marina convenzionale (sono due cose diverse)",
              "Romanticizzare \"raid Mar Nero\" — sono operazioni di alto rischio, specialistiche, costose",
              "Pubblicare materiale di brigate marittime su social: OSINT immediato per il nemico",
              "Volontari che cercano \"esperienza Mar Nero\" come distintivo: l'unità sceglie chi è pronto, non viceversa",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina (Mar Nero)",
        blocks: [
          {
            type: "quote",
            text: "Il caso Mar Nero 2022-2026 è studiato pubblicamente come esempio storico di guerra asimmetrica navale efficace. Una nazione senza marina convenzionale, attraverso USV, missili anti-nave e attacchi integrati, ha imposto a una flotta nucleare-capable costi tali da forzare riduzione operativa significativa. Per il volontario internazionale, questo significa un teatro a maturità dottrinale alta, dove l'integrazione è specialistica e l'OPSEC è la massima possibile. La cultura della brigata Mar Nero — silenzio operativo, decompressione rigorosa, training continuo, rispetto della catena — riflette le condizioni dell'ambiente. Il messaggio sintetico: 'Il Mar Nero non perdona errori. Si entra in quel teatro solo quando si è pronti, non quando lo si vuole.'",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "The Black Sea theatre is one of the most innovative dimensions of the 2022-2026 Russo-Ukrainian conflict. This chapter describes context, doctrine and operational awareness at educational level. It does NOT contain insertion, raid, tactical navigation or naval-system employment procedures.",
    sections: [
      {
        heading: "Strategic context",
        blocks: [
          {
            type: "p",
            text: "The Black Sea is the intersection of geography, economy and military power. Since 2022, it has been the theatre of a doctrinal transformation: a nation without a conventional navy has imposed significant costs on a traditional fleet through asymmetric systems.",
          },
          {
            type: "ul",
            items: [
              "Geography: connects Russia, Ukraine, Turkey, Romania, Bulgaria, Georgia",
              "Economic importance: Ukrainian grain corridor, energy routes, Mediterranean access via Bosphorus",
              "Initial imbalance: Russian Black Sea Fleet (BSF) vs reduced Ukrainian navy after 2014",
              "Transformation 2022-2026: naval drones, anti-ship missiles, deception, isolation of Sevastopol",
              "Montreux Convention: closure of Turkish Straits to warships in wartime — significant strategic limit",
              "BSF relocation: forced out of Sevastopol to Novorossiysk after documented losses",
            ],
          },
        ],
      },
      {
        heading: "Ukrainian systems and capabilities (OSINT level)",
        blocks: [
          {
            type: "p",
            text: "Ukrainian capabilities in the Black Sea are publicly documented. This paragraph describes them at informational level as part of the volunteer soldier's awareness.",
          },
          {
            type: "table",
            headers: ["System / capability", "Function (public level)"],
            rows: [
              ["Magura V5", "Ukrainian USV (naval drone), hundreds of km range, explosive payload"],
              ["Sea Baby", "USV employed in documented attacks on Russian ships and Crimean bridge"],
              ["Neptune missiles", "Land-based anti-ship, documented sinking of cruiser Moskva (April 2022)"],
              ["Storm Shadow / SCALP-EG", "Air-launched cruise missiles against naval infrastructure (UK/FR supplied)"],
              ["HUR / SSO / SBU", "Intelligence services with responsibility for naval special operations"],
              ["Naval aviation", "Reduced capability, integrated with partner / NATO assets"],
            ],
          },
        ],
      },
      {
        heading: "Russian systems in theatre (OSINT level)",
        blocks: [
          {
            type: "ul",
            items: [
              "Black Sea Fleet (BSF): cruisers, frigates, Kilo-class submarines, landing ships",
              "Coastal defence systems: S-400, Bastion, Bal-E",
              "Naval aviation: Su-30SM, Su-24M, Ka-27/Ka-29 helicopters",
              "Surveillance systems: Mineral-ME radar, coastal observation systems",
              "Kalibr cruise-missile carriers: naval, air, ground platforms",
              "Documented losses: Moskva (Apr 2022), Saratov (Mar 2022), Sergei Kotov (Mar 2024), Tsezar Kunikov (Feb 2024), Caesar Kunikov, Ivanovets, and others — public OSINT sources",
            ],
          },
          {
            type: "callout",
            title: "BSF presence reduction",
            body: "From late 2023, significant BSF presence at Sevastopol has been strongly reduced. Most operational assets have moved to Novorossiysk. This shift is publicly documented by commercial satellite imagery.",
          },
        ],
      },
      {
        heading: "Asymmetric naval warfare doctrine",
        blocks: [
          {
            type: "p",
            text: "The Black Sea experience has generated doctrinal observations now studied by NATO navies. Understanding them at educational level is part of the modern soldier's culture.",
          },
          {
            type: "ul",
            items: [
              "USV (Unmanned Surface Vehicles): cost/effectiveness mirroring land FPV disruption",
              "Layered attack: USV + cruise missiles + aerial drone coordinated in complex strikes",
              "Saturation: multiple simultaneous attacks saturating point-defence",
              "Deception and timing: attacks in weather / darkness windows limiting aerial surveillance",
              "Cyber and EW: integration of cyber action with naval kinetic",
              "Refuge geography: dispersing naval assets to reduce vulnerability",
            ],
          },
        ],
      },
      {
        heading: "Coastal operating environment",
        blocks: [
          {
            type: "p",
            text: "The coastal environment has specific characteristics that the volunteer in possible coastal employment must know — even though active employment is obviously specialist and reserved for qualified units.",
          },
          {
            type: "ul",
            items: [
              "Weather: more extreme wind, sea, thermal swings than inland",
              "Salinity: equipment degradation (weapons, optics, electronics) accelerated",
              "Visibility: coastal night can be darker (no light pollution) but also thermally flatter",
              "Tides: limited in parts of Black Sea but relevant for insertion/extraction",
              "Enemy surveillance: coastal radars, medium-altitude drones, commercial and military satellites",
              "Civilians in area: fishermen, residents — legal and operational distinction fundamental",
            ],
          },
        ],
      },
      {
        heading: "Awareness — not operations",
        blocks: [
          {
            type: "p",
            text: "This chapter does NOT describe maritime insertion/extraction procedures, raids, coastal infiltration, sabotage. Such capabilities are domain of specific units (HUR, SSO, Marine brigades) with dedicated training. The non-specialist volunteer who finds themselves in support of Black Sea operations operates under qualified personnel guidance, in subordinate role and within a well-defined ethical-legal framework.",
          },
          {
            type: "ul",
            items: [
              "Knowing doctrine is useful information — applying it is specialisation",
              "Integration in Black Sea units goes through dedicated training, not improvisation",
              "Maritime OPSEC awareness: no on-board photos, no positions, no teammates in photos",
              "Respect for maritime law and LOAC even in naval operations",
              "Coordination with Ukrainian Navy and services (HUR, SBU) through regular chains of command",
              "Personal safety: maritime environment is less forgiving of error than land",
            ],
          },
        ],
      },
      {
        heading: "Documented strategic impact",
        blocks: [
          {
            type: "ul",
            items: [
              "Opening of Ukrainian grain corridor (July 2023 - present) as effect of anti-BSF pressure",
              "BSF operational reduction at Sevastopol, relocation to Novorossiysk",
              "Documented sinkings of major Russian naval assets (including Moskva, several corvettes, damaged Crimean bridge)",
              "Reversal of historic cost/effect ratio in naval warfare via USVs",
              "Doctrinal shift in NATO navies studying the Ukrainian case",
              "Confirmation of value of land-based anti-ship missile systems (Neptune, Harpoon) as low-cost deterrence",
            ],
          },
        ],
      },
      {
        heading: "Common errors in narrative and perception",
        blocks: [
          {
            type: "ul",
            items: [
              "Thinking the Black Sea is a \"secondary\" theatre — it is central to economy and strategic morale",
              "Underestimating the role of naval OSINT (commercial imagery reveals BSF movements)",
              "Confusing Ukrainian naval-drone capability with conventional navy (two different things)",
              "Romanticising \"Black Sea raids\" — they are high-risk, specialist, costly operations",
              "Publishing maritime brigade material on social: instant OSINT for the enemy",
              "Volunteers seeking \"Black Sea experience\" as badge: the unit chooses who is ready, not the reverse",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine (Black Sea)",
        blocks: [
          {
            type: "quote",
            text: "The 2022-2026 Black Sea case is publicly studied as a historical example of effective asymmetric naval warfare. A nation without conventional navy, through USVs, anti-ship missiles and integrated strikes, has imposed on a nuclear-capable fleet costs forcing significant operational reduction. For the international volunteer, this means a doctrinally high-maturity theatre, where integration is specialist and OPSEC is the highest possible. Black Sea brigade culture — operational silence, rigorous decompression, continuous training, chain-of-command respect — reflects the environment. Synthetic message: 'The Black Sea does not forgive mistakes. You enter that theatre only when ready, not when you want.'",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O teatro do Mar Negro é uma das dimensões mais inovadoras do conflito russo-ucraniano 2022-2026. Este capítulo descreve contexto, doutrina e awareness operacional em nível educacional. NÃO contém procedimentos de inserção, raid, navegação tática ou emprego de sistemas navais.",
    sections: [
      {
        heading: "Contexto estratégico",
        blocks: [
          {
            type: "p",
            text: "O Mar Negro é o ponto de intersecção entre geografia, economia e poder militar. Desde 2022, foi teatro de uma transformação doutrinária: uma nação sem marinha convencional impôs custos significativos a uma frota tradicional via sistemas assimétricos.",
          },
          {
            type: "ul",
            items: [
              "Geografia: conecta Rússia, Ucrânia, Turquia, Romênia, Bulgária, Geórgia",
              "Importância econômica: corredor de grãos ucraniano, rotas energéticas, acesso ao Mediterrâneo via Bósforo",
              "Desequilíbrio inicial: Frota Russa do Mar Negro (BSF) vs marinha ucraniana reduzida desde 2014",
              "Transformação 2022-2026: drones navais, mísseis anti-navio, deception, isolamento de Sebastopol",
              "Convenção de Montreux: fechamento dos Estreitos turcos a navios de guerra em tempo de guerra — limite estratégico significativo",
              "Realocação BSF: forçada para fora de Sebastopol em direção a Novorossiysk após perdas documentadas",
            ],
          },
        ],
      },
      {
        heading: "Sistemas e capacidades ucranianos (nível OSINT)",
        blocks: [
          {
            type: "p",
            text: "Capacidades ucranianas no Mar Negro são publicamente documentadas. Este parágrafo as descreve em nível informativo como parte do awareness do soldado voluntário.",
          },
          {
            type: "table",
            headers: ["Sistema / capacidade", "Função (nível público)"],
            rows: [
              ["Magura V5", "USV (drone naval) ucraniano, alcance centenas de km, carga explosiva"],
              ["Sea Baby", "USV empregada em ataques documentados a navios russos e à ponte da Crimeia"],
              ["Mísseis Neptune", "Anti-navio terrestre, documentado afundamento do cruzador Moskva (abril 2022)"],
              ["Storm Shadow / SCALP-EG", "Mísseis de cruzeiro lançados do ar contra infraestrutura naval (fornecidos UK/FR)"],
              ["HUR / SSO / SBU", "Serviços de inteligência com responsabilidade de operações especiais navais"],
              ["Aviação naval", "Capacidade reduzida, integrada a ativos parceiros / OTAN"],
            ],
          },
        ],
      },
      {
        heading: "Sistemas russos no teatro (nível OSINT)",
        blocks: [
          {
            type: "ul",
            items: [
              "Frota do Mar Negro (BSF): cruzadores, fragatas, submarinos classe Kilo, navios de desembarque",
              "Sistemas de defesa costeira: S-400, Bastion, Bal-E",
              "Aviação naval: Su-30SM, Su-24M, helicópteros Ka-27/Ka-29",
              "Sistemas de vigilância: radar Mineral-ME, sistemas de observação costeira",
              "Vetores Kalibr (mísseis de cruzeiro): plataformas navais, aéreas, terrestres",
              "Perdas documentadas: Moskva (abr 2022), Saratov (mar 2022), Sergei Kotov (mar 2024), Tsezar Kunikov (fev 2024), Caesar Kunikov, Ivanovets, e outros — fontes OSINT públicas",
            ],
          },
          {
            type: "callout",
            title: "Redução de presença BSF",
            body: "Desde o fim de 2023, presença significativa da BSF em Sebastopol foi fortemente reduzida. Maior parte dos ativos operacionais foi movida para Novorossiysk. Mudança publicamente documentada por imagery satélite comercial.",
          },
        ],
      },
      {
        heading: "Doutrina de guerra naval assimétrica",
        blocks: [
          {
            type: "p",
            text: "A experiência Mar Negro gerou observações doutrinárias agora estudadas por marinhas OTAN. Entendê-las em nível educacional faz parte da cultura do soldado moderno.",
          },
          {
            type: "ul",
            items: [
              "USV (Unmanned Surface Vehicles): razão custo/eficácia que espelha a disruption FPV em terra",
              "Layered attack: USV + mísseis de cruzeiro + drone aéreo coordenados em ataques complexos",
              "Saturação: ataques múltiplos simultâneos saturando defesas point-defence",
              "Deception e timing: ataques em janelas meteo / escuridão limitando vigilância aérea",
              "Cyber e EW: integração de ação cyber com cinética naval",
              "Geografia de refúgio: dispersão dos meios navais para reduzir vulnerabilidade",
            ],
          },
        ],
      },
      {
        heading: "Ambiente operacional costeiro",
        blocks: [
          {
            type: "p",
            text: "O ambiente costeiro tem características específicas que o voluntário em eventual emprego costeiro precisa conhecer — embora emprego ativo seja obviamente especialista e reservado a unidades qualificadas.",
          },
          {
            type: "ul",
            items: [
              "Meteo: vento, mar, variações térmicas mais extremas que interior",
              "Salinidade: degrado de equipamento (armas, óticas, eletrônica) acelerado",
              "Visibilidade: noite costeira pode ser mais escura (sem poluição luminosa) mas também mais plana termicamente",
              "Marés: limitadas em partes do Mar Negro mas relevantes para inserção/extração",
              "Vigilância inimiga: radares costeiros, drones de média altitude, satélites comerciais e militares",
              "Civis na área: pescadores, residentes — distinção legal e operacional fundamental",
            ],
          },
        ],
      },
      {
        heading: "Awareness — não operações",
        blocks: [
          {
            type: "p",
            text: "Este capítulo NÃO descreve procedimentos de inserção/extração marítima, raids, infiltração costeira, sabotagem. Tais capacidades são domínio de unidades específicas (HUR, SSO, brigadas de Marines) com treino dedicado. O voluntário não especialista que se encontrar em apoio a operações Mar Negro opera sob orientação de pessoal qualificado, em papel subordinado e dentro de framework ético-legal bem definido.",
          },
          {
            type: "ul",
            items: [
              "Conhecer a doutrina é informação útil — aplicá-la é especialização",
              "Integração em unidades Mar Negro passa por formação dedicada, não improvisação",
              "Awareness OPSEC marítimo: sem fotos a bordo, sem posições, sem companheiros em fotos",
              "Respeito ao direito do mar e LOAC mesmo em operações navais",
              "Coordenação com Marinha ucraniana e serviços (HUR, SBU) via cadeias de comando regulares",
              "Segurança pessoal: ambiente marítimo é menos indulgente que terreno para erros",
            ],
          },
        ],
      },
      {
        heading: "Impacto estratégico documentado",
        blocks: [
          {
            type: "ul",
            items: [
              "Abertura do corredor de grãos ucraniano (julho 2023 - presente) como efeito da pressão anti-BSF",
              "Redução operacional da BSF em Sebastopol, realocação para Novorossiysk",
              "Afundamentos documentados de ativos navais russos maiores (incluso Moskva, várias corvetas, ponte da Crimeia danificada)",
              "Inversão da razão histórica custo/efeito em guerra naval via USVs",
              "Mudança doutrinária em marinhas OTAN que estudam o caso ucraniano",
              "Confirmação do valor de sistemas de mísseis anti-navio terrestres (Neptune, Harpoon) como deterrência low-cost",
            ],
          },
        ],
      },
      {
        heading: "Erros comuns na narrativa e percepção",
        blocks: [
          {
            type: "ul",
            items: [
              "Achar que o Mar Negro é teatro \"secundário\" — é central para economia e moral estratégico",
              "Subestimar o papel da OSINT naval (imagery comercial revela movimentos BSF)",
              "Confundir capacidade de drone naval ucraniano com marinha convencional (são duas coisas diferentes)",
              "Romantizar \"raids Mar Negro\" — são operações de alto risco, especialistas, caras",
              "Publicar material de brigadas marítimas no social: OSINT imediato para o inimigo",
              "Voluntários que buscam \"experiência Mar Negro\" como distintivo: a unidade escolhe quem está pronto, não o contrário",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia (Mar Negro)",
        blocks: [
          {
            type: "quote",
            text: "O caso Mar Negro 2022-2026 é publicamente estudado como exemplo histórico de guerra naval assimétrica eficaz. Uma nação sem marinha convencional, via USVs, mísseis anti-navio e ataques integrados, impôs a uma frota nuclear-capable custos que forçaram redução operacional significativa. Para o voluntário internacional, isso significa um teatro de alta maturidade doutrinária, onde a integração é especialista e o OPSEC é o máximo possível. A cultura da brigada Mar Negro — silêncio operacional, descompressão rigorosa, treino contínuo, respeito à cadeia — reflete as condições do ambiente. Mensagem sintética: 'O Mar Negro não perdoa erros. Entra-se nesse teatro só quando se está pronto, não quando se quer.'",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le théâtre de la mer Noire est une des dimensions les plus innovantes du conflit russo-ukrainien 2022-2026. Ce chapitre décrit le contexte, la doctrine et l'awareness opérationnelle au niveau éducatif. Il NE contient PAS de procédures d'insertion, de raid, de navigation tactique ou d'emploi de systèmes navals.",
    sections: [
      {
        heading: "Contexte stratégique",
        blocks: [
          {
            type: "p",
            text: "La mer Noire est le point d'intersection entre géographie, économie et puissance militaire. Depuis 2022, elle a été le théâtre d'une transformation doctrinale : une nation sans marine conventionnelle a imposé des coûts significatifs à une flotte traditionnelle grâce à des systèmes asymétriques.",
          },
          {
            type: "ul",
            items: [
              "Géographie : relie Russie, Ukraine, Turquie, Roumanie, Bulgarie, Géorgie",
              "Importance économique : corridor du grain ukrainien, routes énergétiques, accès à la Méditerranée via le Bosphore",
              "Déséquilibre initial : Flotte russe de la mer Noire (BSF) vs marine ukrainienne réduite depuis 2014",
              "Transformation 2022-2026 : drones navals, missiles anti-navire, deception, isolement de Sébastopol",
              "Convention de Montreux : fermeture des Détroits turcs aux navires de guerre en temps de guerre — limite stratégique significative",
              "Redéploiement BSF : forcé hors de Sébastopol vers Novorossiysk après pertes documentées",
            ],
          },
        ],
      },
      {
        heading: "Systèmes et capacités ukrainiens (niveau OSINT)",
        blocks: [
          {
            type: "p",
            text: "Les capacités ukrainiennes en mer Noire sont publiquement documentées. Ce paragraphe les décrit au niveau informatif dans le cadre de l'awareness du soldat volontaire.",
          },
          {
            type: "table",
            headers: ["Système / capacité", "Fonction (niveau public)"],
            rows: [
              ["Magura V5", "USV (drone naval) ukrainien, portée des centaines de km, charge explosive"],
              ["Sea Baby", "USV employé dans des attaques documentées sur navires russes et pont de Crimée"],
              ["Missiles Neptune", "Anti-navire au sol, coulage documenté du croiseur Moskva (avril 2022)"],
              ["Storm Shadow / SCALP-EG", "Missiles de croisière air-sol contre infrastructure navale (fournis UK/FR)"],
              ["HUR / SSO / SBU", "Services de renseignement avec responsabilité d'opérations spéciales navales"],
              ["Aviation navale", "Capacité réduite, intégrée à des moyens partenaires / OTAN"],
            ],
          },
        ],
      },
      {
        heading: "Systèmes russes dans le théâtre (niveau OSINT)",
        blocks: [
          {
            type: "ul",
            items: [
              "Flotte de la mer Noire (BSF) : croiseurs, frégates, sous-marins classe Kilo, bâtiments de débarquement",
              "Systèmes de défense côtière : S-400, Bastion, Bal-E",
              "Aviation navale : Su-30SM, Su-24M, hélicoptères Ka-27/Ka-29",
              "Systèmes de surveillance : radar Mineral-ME, systèmes d'observation côtière",
              "Vecteurs Kalibr (missiles de croisière) : plateformes navales, aériennes, terrestres",
              "Pertes documentées : Moskva (avr 2022), Saratov (mars 2022), Sergei Kotov (mars 2024), Tsezar Kunikov (févr 2024), Caesar Kunikov, Ivanovets, et autres — sources OSINT publiques",
            ],
          },
          {
            type: "callout",
            title: "Réduction de présence BSF",
            body: "Depuis la fin 2023, la présence significative de la BSF à Sébastopol a été fortement réduite. La plupart des moyens opérationnels ont été déplacés vers Novorossiysk. Ce changement est publiquement documenté par imagerie satellite commerciale.",
          },
        ],
      },
      {
        heading: "Doctrine de guerre navale asymétrique",
        blocks: [
          {
            type: "p",
            text: "L'expérience mer Noire a généré des observations doctrinales aujourd'hui étudiées par les marines OTAN. Les comprendre au niveau éducatif fait partie de la culture du soldat moderne.",
          },
          {
            type: "ul",
            items: [
              "USV (Unmanned Surface Vehicles) : rapport coût/efficacité qui reflète la disruption FPV à terre",
              "Layered attack : USV + missiles de croisière + drone aérien coordonnés en frappes complexes",
              "Saturation : attaques multiples simultanées saturant les défenses point-defence",
              "Deception et timing : attaques dans des fenêtres météo / obscurité limitant la surveillance aérienne",
              "Cyber et GE : intégration d'action cyber avec cinétique navale",
              "Géographie de refuge : dispersion des moyens navals pour réduire la vulnérabilité",
            ],
          },
        ],
      },
      {
        heading: "Environnement opérationnel côtier",
        blocks: [
          {
            type: "p",
            text: "L'environnement côtier a des caractéristiques spécifiques que le volontaire en emploi côtier éventuel doit connaître — même si l'emploi actif est évidemment spécialisé et réservé aux unités qualifiées.",
          },
          {
            type: "ul",
            items: [
              "Météo : vent, mer, écarts thermiques plus extrêmes qu'à l'intérieur",
              "Salinité : dégradation d'équipement (armes, optiques, électronique) accélérée",
              "Visibilité : nuit côtière peut être plus sombre (pas de pollution lumineuse) mais aussi plus plate thermiquement",
              "Marées : limitées dans certaines parties de la mer Noire mais pertinentes pour insertion/extraction",
              "Surveillance ennemie : radars côtiers, drones d'altitude moyenne, satellites commerciaux et militaires",
              "Civils en zone : pêcheurs, résidents — distinction légale et opérationnelle fondamentale",
            ],
          },
        ],
      },
      {
        heading: "Awareness — pas d'opérations",
        blocks: [
          {
            type: "p",
            text: "Ce chapitre NE décrit PAS de procédures d'insertion/extraction maritime, raids, infiltration côtière, sabotage. De telles capacités sont du domaine d'unités spécifiques (HUR, SSO, brigades de Marines) avec entraînement dédié. Le volontaire non spécialiste qui se retrouverait en soutien d'opérations mer Noire opère sous la conduite de personnel qualifié, dans un rôle subordonné et dans un cadre éthico-légal bien défini.",
          },
          {
            type: "ul",
            items: [
              "Connaître la doctrine est information utile — l'appliquer est spécialisation",
              "L'intégration dans des unités mer Noire passe par formation dédiée, pas improvisation",
              "Awareness OPSEC maritime : pas de photos à bord, pas de positions, pas de camarades en photo",
              "Respect du droit de la mer et du LOAC même en opérations navales",
              "Coordination avec la Marine ukrainienne et services (HUR, SBU) via chaînes de commandement régulières",
              "Sécurité personnelle : l'environnement maritime est moins indulgent aux erreurs que le terrain",
            ],
          },
        ],
      },
      {
        heading: "Impact stratégique documenté",
        blocks: [
          {
            type: "ul",
            items: [
              "Ouverture du corridor du grain ukrainien (juillet 2023 - présent) comme effet de la pression anti-BSF",
              "Réduction opérationnelle de la BSF à Sébastopol, redéploiement vers Novorossiysk",
              "Coulages documentés de moyens navals russes majeurs (dont Moskva, plusieurs corvettes, pont de Crimée endommagé)",
              "Inversion du rapport historique coût/effet en guerre navale via USVs",
              "Changement doctrinal dans les marines OTAN qui étudient le cas ukrainien",
              "Confirmation de la valeur des systèmes de missiles anti-navire terrestres (Neptune, Harpoon) comme dissuasion low-cost",
            ],
          },
        ],
      },
      {
        heading: "Erreurs courantes dans la narration et la perception",
        blocks: [
          {
            type: "ul",
            items: [
              "Penser que la mer Noire est un théâtre « secondaire » — elle est centrale pour l'économie et le moral stratégique",
              "Sous-estimer le rôle de l'OSINT navale (imagerie commerciale révèle les mouvements BSF)",
              "Confondre la capacité de drone naval ukrainien avec la marine conventionnelle (deux choses différentes)",
              "Romancer les « raids mer Noire » — ce sont des opérations à haut risque, spécialisées, coûteuses",
              "Publier du matériel de brigades maritimes sur les réseaux sociaux : OSINT immédiat pour l'ennemi",
              "Volontaires cherchant l'« expérience mer Noire » comme insigne : l'unité choisit qui est prêt, pas l'inverse",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine (mer Noire)",
        blocks: [
          {
            type: "quote",
            text: "Le cas mer Noire 2022-2026 est publiquement étudié comme exemple historique de guerre navale asymétrique efficace. Une nation sans marine conventionnelle, par des USV, missiles anti-navire et frappes intégrées, a imposé à une flotte nuclear-capable des coûts forçant une réduction opérationnelle significative. Pour le volontaire international, cela signifie un théâtre à maturité doctrinale élevée, où l'intégration est spécialisée et l'OPSEC est le plus haut possible. La culture de la brigade mer Noire — silence opérationnel, décompression rigoureuse, formation continue, respect de la chaîne — reflète les conditions de l'environnement. Message synthétique : « La mer Noire ne pardonne pas les erreurs. On entre dans ce théâtre seulement quand on est prêt, pas quand on le veut. »",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
