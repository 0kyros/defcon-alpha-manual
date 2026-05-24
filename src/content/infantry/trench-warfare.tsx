import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La guerra di trincea, considerata un fenomeno della Prima Guerra Mondiale, è tornata a essere la forma dominante di combattimento di linea sul fronte ucraino tra il 2023 e il 2026. La saturazione di artiglieria, ISR e FPV ha reso la posizione coperta sotterranea la sola posizione che sopravvive. Questo capitolo descrive caratteristiche, pericoli e considerazioni difensive — non procedure di assalto a trincea, fuori scope del manuale.",
    sections: [
      {
        heading: "Perché la trincea è tornata",
        blocks: [
          {
            type: "p",
            text: "Tre fattori convergenti hanno riportato la trincea al centro della tattica di fanteria moderna: artiglieria continua e diffusa, sorveglianza drone persistente, FPV economici di massa. In questo contesto qualsiasi struttura sopra-superficie viene scoperta e distrutta in poche ore. La protezione richiede profondità verticale: ogni metro sotto il livello del suolo riduce drasticamente la probabilità di essere ingaggiati.",
          },
          {
            type: "ul",
            items: [
              "Sorveglianza drone permanente: ogni movimento esterno viene osservato",
              "Artiglieria di precisione (con correzione drone): tempo medio di reazione 5-15 minuti",
              "FPV con cariche varie (anti-personale, anti-veicolo, termobariche): minaccia entro 10-25 km dalla linea",
              "Cluster munitions e mine scatter: contaminazione dell'area intorno alle trincee",
              "Disponibilità di artiglieria di entrambe le parti: nessun lato ha più 'sorpresa' di artiglieria",
            ],
          },
        ],
      },
      {
        heading: "Tipologia di posizioni",
        blocks: [
          {
            type: "p",
            text: "La 'trincea' moderna sul fronte ucraino non è una struttura unica: è un sistema di posizioni coordinate con livelli diversi di protezione. La terminologia varia tra unità, ma la struttura funzionale è comune.",
          },
          {
            type: "table",
            headers: ["Tipo", "Funzione", "Caratteristiche"],
            rows: [
              ["Fighting position (FP)", "Posizione di tiro individuale o di coppia", "Profondità a torso, parapetto frontale, alternativa di copertura"],
              ["Trincea di comunicazione", "Collegamento tra FP e arretrato", "Zigzag o sinuosa, copertura parziale, fango costante"],
              ["Bunker / rifugio", "Riparo da artiglieria e droni", "Sotterraneo, accessi multipli, materiali in copertura"],
              ["Command post (CP)", "Comando di sezione/plotone", "Più protetto, comms, mappa, sistema di osservazione"],
              ["Casualty Collection Point (CCP)", "Stabilizzazione feriti", "Vicino a evacuazione, riscaldato se possibile"],
              ["OP avanzato", "Osservazione del nemico", "Mascherato, isolato, comms con CP"],
              ["Re-supply cache", "Munizioni e acqua avanzate", "Distribuito in punti coperti, mai centralizzato"],
            ],
          },
        ],
      },
      {
        heading: "Pericoli specifici della trincea",
        blocks: [
          {
            type: "p",
            text: "La trincea protegge da alcune minacce ma ne genera altre. La conoscenza dei pericoli specifici è fondamentale per chi opera in posizione statica.",
          },
          {
            type: "ul",
            items: [
              "FPV dall'alto: entrano direttamente nei parapetti aperti — coperture superiori e reti sono necessarie",
              "Granate gettate dall'alto: il punto cieco verticale è il pericolo principale di trincea",
              "Crollo strutturale: dopo artiglieria pesante, pareti e tetti cedono",
              "Trench foot e ipotermia: piede e gambe nell'acqua fredda generano lesioni croniche",
              "Affaticamento estremo: turni lunghi con sonno limitato erodono giudizio e reattività",
              "Ratti, parassiti, malattie da contaminazione (epatite A, dissenteria)",
              "Munizioni inesplose interne: granate, proiettili, sub-munizioni nei detriti",
              "Gas tossici: in spazi chiusi anche fumi e residui di combustione diventano pericolosi",
            ],
          },
          {
            type: "warn",
            title: "TRENCH FOOT",
            body: "Le perdite non da combattimento per piede d'immersione sono documentate sul fronte ucraino in proporzione significativa, soprattutto in autunno e primavera. Le calzature impermeabili, il cambio frequente di calze (3+ al giorno), l'asciugatura dei piedi a ogni rotazione sono prevenzione fondamentale. Una settimana di piede bagnato genera lesioni che escludono l'effettivo da operazioni per settimane.",
          },
        ],
      },
      {
        heading: "Sistemi di copertura superiore",
        blocks: [
          {
            type: "p",
            text: "La copertura aerea della trincea è la singola innovazione difensiva più documentata sul fronte ucraino. Reti, coperture rigide, e sistemi misti riducono la vulnerabilità a FPV e granate dall'alto.",
          },
          {
            type: "ul",
            items: [
              "Reti anti-drone: maglia stretta che blocca la traiettoria diretta del FPV ma permette osservazione",
              "Tetti rigidi (legno, lamiera, terriccio sopra): proteggono da granate ma rendono cieca la posizione",
              "Sistema misto: rete sopra il transito, tetto rigido sopra posizioni di tiro e bunker",
              "Camuffatura della copertura: niente brilli, niente colori distintivi, vegetazione integrata",
              "Manutenzione: la copertura si rompe sotto vento, neve, urti — controllo continuo",
            ],
          },
        ],
      },
      {
        heading: "Disciplina di vita in trincea",
        blocks: [
          {
            type: "p",
            text: "Vivere in trincea per giorni o settimane richiede disciplina personale che differisce dal combattimento di movimento. La trincea è osservata costantemente; ogni abitudine diventa pattern of life sfruttabile.",
          },
          {
            type: "ul",
            items: [
              "Movimento all'esterno solo se necessario, mai in ore prevedibili",
              "Rifiuti corporei in punti dedicati, mai esterno casuale — visibili a termocamere e drone",
              "Cibo caldo solo in copertura termica, evitare di scaldare cibi all'aperto",
              "Sonno in rotazione, mai più del 50% del personale dormendo simultaneamente",
              "Equipaggiamento sempre pronto: elmo, plate carrier, IFAK, arma a portata",
              "Telefoni e dispositivi EM in faraday o lontano dalla posizione di tiro",
              "Niente luce visibile o IR senza copertura (anche torce piccole sono visibili da drone IR)",
            ],
          },
        ],
      },
      {
        heading: "Rotazioni e supporto",
        blocks: [
          {
            type: "p",
            text: "La sopravvivenza in trincea dipende dalla durata della rotazione e dalla capacità di rifornimento. Sul fronte ucraino le rotazioni sono spesso più lunghe del previsto a causa della difficoltà di estrazione veicolare. Le unità che pianificano per rotazioni teoriche di 24-48 ore e finiscono per restare 5-10 giorni soffrono perdite per esaurimento e ipotermia.",
          },
          {
            type: "ul",
            items: [
              "Pianificare per il caso peggiore: rifornimento alimentare e idrico per 5-7 giorni",
              "Acqua: 3-4 litri al giorno per persona minimo, più in estate",
              "Munizioni: stock per ingaggio prolungato senza rifornimento",
              "Caldo/freddo: equipaggiamento adatto alla stagione e al microclima della trincea",
              "Mezzi di evacuazione sanitaria: stretcher, sleds, vie pre-identificate",
              "Comms con il CP: ridondanza PACE sempre, mai una sola via di comunicazione",
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
            body: "Le procedure di assalto a trincea (trench raid, trench clearing) sono fuori scope di questo manuale. Sono fra le procedure più rischiose dell'intera dottrina di fanteria: richiedono addestramento intensivo, repliche in trincea-modello dal vivo, e una catena di comando integrata con fires di supporto. Apprenderle da un manuale di consultazione è impossibile e pericoloso. Questo capitolo presenta solo caratteristiche, pericoli e considerazioni difensive.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Sottovalutare la durata della rotazione e la logistica necessaria",
              "Trascurare la copertura superiore per pigrizia o mancanza di materiali",
              "Vivere con scarpe bagnate per giorni e ignorare i sintomi di trench foot",
              "Dormire tutti contemporaneamente perché 'la trincea è tranquilla'",
              "Uscire all'esterno in orari prevedibili (alba, pranzo, tramonto)",
              "Accendere torce o telefono dentro la trincea, scoprendo IR signature",
              "Affidarsi a una singola via di evacuazione",
              "Non praticare il fuoco amico quando una unità vicina cambia",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "La trincea ucraina del 2024-2026 non è la trincea del 1916: è una rete di posizioni coordinate, coperte sopra, supportate da artiglieria a richiesta, sorvegliate da entrambi i lati con drone persistente. La sopravvivenza richiede disciplina di firma, profondità verticale, copertura superiore e logistica robusta. Le perdite documentate per ipotermia, trench foot e esaurimento sono comparabili alle perdite per combattimento diretto. Il volontario internazionale che entra in trincea deve abbandonare ogni immagine cinematografica: la trincea è ambiente di pazienza, manutenzione e disciplina di vita, non di gesta eroiche.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Trench warfare, considered a WWI phenomenon, has returned as the dominant form of line combat on the Ukrainian front between 2023 and 2026. The saturation of artillery, ISR and FPV has made covered subterranean positions the only positions that survive. This chapter describes characteristics, hazards and defensive considerations — not trench-assault procedures, which are outside the scope of the manual.",
    sections: [
      {
        heading: "Why the trench returned",
        blocks: [
          {
            type: "p",
            text: "Three converging factors have brought the trench back to the centre of modern infantry tactics: continuous and widespread artillery, persistent drone surveillance, mass-produced cheap FPV. In this context any above-surface structure is detected and destroyed within hours. Protection requires vertical depth: every metre below ground drastically reduces the probability of engagement.",
          },
          {
            type: "ul",
            items: [
              "Permanent drone surveillance: every external movement is observed",
              "Precision artillery (drone-corrected): average reaction time 5-15 minutes",
              "FPV with various warheads (anti-personnel, anti-vehicle, thermobaric): threat within 10-25 km of the line",
              "Cluster munitions and scatterable mines: contamination of the area around trenches",
              "Artillery on both sides: neither side has artillery 'surprise' anymore",
            ],
          },
        ],
      },
      {
        heading: "Position typology",
        blocks: [
          {
            type: "p",
            text: "The modern 'trench' on the Ukrainian front is not a single structure: it is a system of coordinated positions with different protection levels. Terminology varies between units, but the functional structure is common.",
          },
          {
            type: "table",
            headers: ["Type", "Function", "Characteristics"],
            rows: [
              ["Fighting position (FP)", "Individual or buddy firing position", "Chest-deep, frontal parapet, alternate cover"],
              ["Communication trench", "Link between FP and rear", "Zigzag or sinuous, partial cover, constant mud"],
              ["Bunker / shelter", "Shelter from artillery and drones", "Subterranean, multiple accesses, overburden material"],
              ["Command post (CP)", "Section/platoon command", "More protected, comms, map, observation system"],
              ["Casualty Collection Point (CCP)", "Casualty stabilisation", "Near evacuation, heated if possible"],
              ["Forward OP", "Enemy observation", "Concealed, isolated, comms to CP"],
              ["Resupply cache", "Forward ammunition and water", "Distributed in covered points, never centralised"],
            ],
          },
        ],
      },
      {
        heading: "Trench-specific hazards",
        blocks: [
          {
            type: "p",
            text: "The trench protects against some threats but generates others. Knowing the specific hazards is fundamental for those operating in static positions.",
          },
          {
            type: "ul",
            items: [
              "FPV from above: enter directly into open parapets — overhead cover and nets are needed",
              "Grenades thrown from above: the vertical blind spot is the main trench danger",
              "Structural collapse: after heavy artillery, walls and overhead cover give way",
              "Trench foot and hypothermia: foot and legs in cold water cause chronic injury",
              "Extreme fatigue: long shifts with limited sleep erode judgement and reactivity",
              "Rats, parasites, contamination diseases (hep A, dysentery)",
              "Internal UXO: grenades, shells, sub-munitions in debris",
              "Toxic gases: in confined spaces fumes and combustion residue become dangerous",
            ],
          },
          {
            type: "warn",
            title: "TRENCH FOOT",
            body: "Non-combat losses to immersion foot are documented on the Ukrainian front in significant proportion, especially in autumn and spring. Waterproof footwear, frequent sock change (3+ per day), and foot drying at each rotation are fundamental prevention. A week of wet feet causes injury that removes the soldier from operations for weeks.",
          },
        ],
      },
      {
        heading: "Overhead cover systems",
        blocks: [
          {
            type: "p",
            text: "Aerial trench cover is the single most documented defensive innovation on the Ukrainian front. Nets, rigid cover, and mixed systems reduce vulnerability to FPV and overhead grenades.",
          },
          {
            type: "ul",
            items: [
              "Anti-drone netting: tight mesh blocks direct FPV trajectory but allows observation",
              "Rigid roofs (wood, sheet, soil overburden): protect against grenades but blind the position",
              "Mixed system: net over transit corridors, rigid roof over firing positions and bunkers",
              "Cover camouflage: no shine, no distinctive colours, integrated vegetation",
              "Maintenance: cover breaks under wind, snow, impact — continuous checking",
            ],
          },
        ],
      },
      {
        heading: "Trench-life discipline",
        blocks: [
          {
            type: "p",
            text: "Living in a trench for days or weeks requires personal discipline different from movement combat. The trench is constantly observed; every habit becomes exploitable pattern of life.",
          },
          {
            type: "ul",
            items: [
              "External movement only when necessary, never at predictable times",
              "Bodily waste in dedicated points, never random external — visible to thermal and drone",
              "Hot food only in thermal cover, avoid heating food in the open",
              "Sleep in rotation, never more than 50% of personnel sleeping simultaneously",
              "Kit always ready: helmet, plate carrier, IFAK, weapon within reach",
              "Phones and EM devices in faraday or away from the firing position",
              "No visible or IR light without cover (even small torches are visible to IR drones)",
            ],
          },
        ],
      },
      {
        heading: "Rotations and support",
        blocks: [
          {
            type: "p",
            text: "Trench survival depends on rotation length and resupply capacity. On the Ukrainian front, rotations are often longer than planned due to difficulty of vehicular extraction. Units planning theoretical 24-48-hour rotations and ending up staying 5-10 days suffer losses to exhaustion and hypothermia.",
          },
          {
            type: "ul",
            items: [
              "Plan for the worst case: food and water resupply for 5-7 days",
              "Water: 3-4 litres per person per day minimum, more in summer",
              "Munitions: stock for extended engagement without resupply",
              "Hot/cold: kit suited to season and trench microclimate",
              "Medical evacuation means: stretchers, sleds, pre-identified routes",
              "Comms with CP: PACE redundancy always, never one single comm path",
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
            body: "Trench-assault procedures (trench raid, trench clearing) are out of scope for this manual. They are among the riskiest procedures in the entire infantry doctrine: they require intensive training, live rehearsals in mock-trench, and a chain of command integrated with supporting fires. Learning them from a reference manual is impossible and dangerous. This chapter only presents characteristics, hazards and defensive considerations.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Underestimating rotation length and required logistics",
              "Neglecting overhead cover out of laziness or lack of materials",
              "Living in wet boots for days and ignoring trench-foot symptoms",
              "Sleeping all together because 'the trench is quiet'",
              "Going outside at predictable times (dawn, lunch, dusk)",
              "Turning on torches or phone inside the trench, exposing IR signature",
              "Relying on a single evacuation route",
              "Not practising friendly fire prevention when a neighbouring unit changes",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The Ukrainian trench of 2024-2026 is not the 1916 trench: it is a network of coordinated positions, overhead-covered, supported by on-call artillery, surveilled by both sides with persistent drone. Survival requires signature discipline, vertical depth, overhead cover and robust logistics. Documented losses to hypothermia, trench foot and exhaustion are comparable to losses from direct combat. The international volunteer entering a trench must drop every cinematic image: the trench is an environment of patience, maintenance and life discipline, not of heroic feats.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A guerra de trincheira, considerada fenômeno da Primeira Guerra, voltou a ser a forma dominante de combate de linha no front ucraniano entre 2023 e 2026. A saturação de artilharia, ISR e FPV tornou a posição coberta subterrânea a única posição que sobrevive. Este capítulo descreve características, perigos e considerações defensivas — não procedimentos de assalto a trincheira, fora do escopo do manual.",
    sections: [
      {
        heading: "Por que a trincheira voltou",
        blocks: [
          {
            type: "p",
            text: "Três fatores convergentes trouxeram a trincheira ao centro da tática moderna de infantaria: artilharia contínua e difusa, vigilância drone persistente, FPV baratos em massa. Neste contexto qualquer estrutura acima do solo é detectada e destruída em horas. A proteção exige profundidade vertical: cada metro abaixo do solo reduz drasticamente a probabilidade de engajamento.",
          },
          {
            type: "ul",
            items: [
              "Vigilância drone permanente: cada movimento externo é observado",
              "Artilharia de precisão (corrigida por drone): tempo médio de reação 5-15 minutos",
              "FPV com cargas várias (antipessoal, anti-veículo, termobárica): ameaça em 10-25 km da linha",
              "Munições cluster e minas scatter: contaminação ao redor das trincheiras",
              "Artilharia em ambos os lados: nenhum lado tem mais 'surpresa' de artilharia",
            ],
          },
        ],
      },
      {
        heading: "Tipologia de posições",
        blocks: [
          {
            type: "p",
            text: "A 'trincheira' moderna no front ucraniano não é estrutura única: é sistema de posições coordenadas com níveis diferentes de proteção. A terminologia varia entre unidades, mas a estrutura funcional é comum.",
          },
          {
            type: "table",
            headers: ["Tipo", "Função", "Características"],
            rows: [
              ["Fighting position (FP)", "Posição de tiro individual ou de dupla", "Profundidade no peito, parapeito frontal, alternativa de cobertura"],
              ["Trincheira de comunicação", "Ligação entre FP e retaguarda", "Zigue-zague ou sinuosa, cobertura parcial, lama constante"],
              ["Bunker / abrigo", "Abrigo contra artilharia e drones", "Subterrâneo, acessos múltiplos, material em sobrecobertura"],
              ["Command post (CP)", "Comando de seção/pelotão", "Mais protegido, comms, mapa, sistema de observação"],
              ["Casualty Collection Point (CCP)", "Estabilização de feridos", "Próximo à evacuação, aquecido se possível"],
              ["OP avançado", "Observação do inimigo", "Mascarado, isolado, comms com CP"],
              ["Cache de reabastecimento", "Munição e água avançadas", "Distribuído em pontos cobertos, nunca centralizado"],
            ],
          },
        ],
      },
      {
        heading: "Perigos específicos da trincheira",
        blocks: [
          {
            type: "p",
            text: "A trincheira protege contra algumas ameaças mas gera outras. Conhecer os perigos específicos é fundamental para quem opera em posição estática.",
          },
          {
            type: "ul",
            items: [
              "FPV do alto: entram direto em parapeitos abertos — cobertura superior e redes são necessárias",
              "Granadas lançadas do alto: ponto cego vertical é o perigo principal da trincheira",
              "Colapso estrutural: após artilharia pesada, paredes e tetos cedem",
              "Trench foot e hipotermia: pé e perna em água fria geram lesões crônicas",
              "Fadiga extrema: turnos longos com sono limitado degradam julgamento e reatividade",
              "Ratos, parasitas, doenças por contaminação (hepatite A, disenteria)",
              "UXO interno: granadas, projéteis, sub-munições nos escombros",
              "Gases tóxicos: em espaços fechados fumaça e resíduos de combustão tornam-se perigosos",
            ],
          },
          {
            type: "warn",
            title: "TRENCH FOOT",
            body: "Baixas não-combate por pé de imersão são documentadas no front ucraniano em proporção significativa, sobretudo no outono e primavera. Calçados impermeáveis, troca frequente de meias (3+ por dia), secagem dos pés a cada rotação são prevenção fundamental. Uma semana de pé molhado gera lesões que afastam o militar por semanas.",
          },
        ],
      },
      {
        heading: "Sistemas de cobertura superior",
        blocks: [
          {
            type: "p",
            text: "A cobertura aérea da trincheira é a única inovação defensiva mais documentada no front ucraniano. Redes, coberturas rígidas e sistemas mistos reduzem a vulnerabilidade a FPV e granadas do alto.",
          },
          {
            type: "ul",
            items: [
              "Redes anti-drone: malha apertada bloqueia trajetória direta do FPV mas permite observação",
              "Tetos rígidos (madeira, chapa, terra sobreposta): protegem contra granadas mas cegam a posição",
              "Sistema misto: rede sobre trânsito, teto rígido sobre posições de tiro e bunkers",
              "Camuflagem da cobertura: sem brilho, sem cores distintivas, vegetação integrada",
              "Manutenção: a cobertura quebra com vento, neve, impacto — checagem contínua",
            ],
          },
        ],
      },
      {
        heading: "Disciplina de vida na trincheira",
        blocks: [
          {
            type: "p",
            text: "Viver em trincheira por dias ou semanas exige disciplina pessoal diferente do combate de movimento. A trincheira é observada constantemente; cada hábito vira pattern of life explorável.",
          },
          {
            type: "ul",
            items: [
              "Movimento externo só quando necessário, nunca em horários previsíveis",
              "Resíduos corporais em pontos dedicados, nunca externo aleatório — visíveis a térmica e drone",
              "Comida quente só em cobertura térmica, evitar aquecer ao ar livre",
              "Sono em rotação, nunca mais de 50% do pessoal dormindo simultaneamente",
              "Equipamento sempre pronto: capacete, plate carrier, IFAK, arma ao alcance",
              "Telefones e dispositivos EM em faraday ou longe da posição de tiro",
              "Sem luz visível ou IR sem cobertura (mesmo lanternas pequenas são visíveis a drone IR)",
            ],
          },
        ],
      },
      {
        heading: "Rotações e apoio",
        blocks: [
          {
            type: "p",
            text: "A sobrevivência em trincheira depende da duração da rotação e da capacidade de reabastecimento. No front ucraniano as rotações são frequentemente mais longas que o planejado devido à dificuldade de extração veicular. Unidades que planejam para rotações teóricas de 24-48 horas e acabam ficando 5-10 dias sofrem baixas por exaustão e hipotermia.",
          },
          {
            type: "ul",
            items: [
              "Planejar para o pior caso: reabastecimento de alimento e água para 5-7 dias",
              "Água: 3-4 litros por pessoa por dia no mínimo, mais no verão",
              "Munições: estoque para engajamento prolongado sem reabastecimento",
              "Quente/frio: equipamento adequado à estação e ao microclima da trincheira",
              "Meios de evacuação sanitária: macas, sleds, rotas pré-identificadas",
              "Comms com CP: redundância PACE sempre, nunca via única",
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
            body: "Procedimentos de assalto a trincheira (trench raid, trench clearing) estão fora do escopo deste manual. São das procedimentos mais arriscados de toda doutrina de infantaria: exigem treinamento intensivo, ensaios reais em trincheira-modelo e cadeia de comando integrada com fires de apoio. Aprender por manual é impossível e perigoso. Este capítulo apresenta apenas características, perigos e considerações defensivas.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Subestimar a duração da rotação e a logística necessária",
              "Negligenciar cobertura superior por preguiça ou falta de material",
              "Ficar com botas molhadas por dias e ignorar sintomas de trench foot",
              "Dormir todos juntos porque 'a trincheira está calma'",
              "Sair em horários previsíveis (amanhecer, almoço, entardecer)",
              "Acender lanterna ou celular dentro da trincheira, expondo assinatura IR",
              "Confiar em via única de evacuação",
              "Não praticar prevenção de fogo amigo quando unidade vizinha muda",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A trincheira ucraniana de 2024-2026 não é a trincheira de 1916: é uma rede de posições coordenadas, cobertas em cima, apoiadas por artilharia sob demanda, vigiadas dos dois lados com drone persistente. A sobrevivência exige disciplina de assinatura, profundidade vertical, cobertura superior e logística robusta. Baixas documentadas por hipotermia, trench foot e exaustão são comparáveis às baixas por combate direto. O voluntário internacional que entra em trincheira deve abandonar qualquer imagem cinematográfica: a trincheira é ambiente de paciência, manutenção e disciplina de vida, não de feitos heroicos.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La guerre de tranchée, considérée comme un phénomène de la Première Guerre mondiale, est redevenue la forme dominante de combat de ligne sur le front ukrainien entre 2023 et 2026. La saturation d'artillerie, d'ISR et de FPV a fait des positions enterrées couvertes les seules positions qui survivent. Ce chapitre décrit caractéristiques, dangers et considérations défensives — pas des procédures d'assaut de tranchée, hors du périmètre du manuel.",
    sections: [
      {
        heading: "Pourquoi la tranchée est revenue",
        blocks: [
          {
            type: "p",
            text: "Trois facteurs convergents ont ramené la tranchée au cœur de la tactique d'infanterie moderne : artillerie continue et diffuse, surveillance drone persistante, FPV bon marché en masse. Dans ce contexte, toute structure en surface est détectée et détruite en quelques heures. La protection exige une profondeur verticale : chaque mètre sous le sol réduit drastiquement la probabilité d'engagement.",
          },
          {
            type: "ul",
            items: [
              "Surveillance drone permanente : chaque mouvement extérieur est observé",
              "Artillerie de précision (corrigée par drone) : temps de réaction moyen 5-15 minutes",
              "FPV avec charges variées (antipersonnel, antichar, thermobarique) : menace dans les 10-25 km de la ligne",
              "Sous-munitions et mines scatter : contamination de la zone autour des tranchées",
              "Artillerie des deux côtés : aucune partie n'a plus la « surprise » d'artillerie",
            ],
          },
        ],
      },
      {
        heading: "Typologie de positions",
        blocks: [
          {
            type: "p",
            text: "La « tranchée » moderne sur le front ukrainien n'est pas une structure unique : c'est un système de positions coordonnées à niveaux de protection différents. La terminologie varie selon les unités, mais la structure fonctionnelle est commune.",
          },
          {
            type: "table",
            headers: ["Type", "Fonction", "Caractéristiques"],
            rows: [
              ["Fighting position (FP)", "Poste de tir individuel ou en binôme", "Profondeur poitrine, parapet frontal, couvert alterné"],
              ["Boyau de communication", "Liaison entre FP et arrière", "Zigzag ou sinueux, couvert partiel, boue constante"],
              ["Bunker / abri", "Abri contre artillerie et drones", "Enterré, accès multiples, matériaux en surcouche"],
              ["Command post (CP)", "Commandement de section/peloton", "Plus protégé, comms, carte, système d'observation"],
              ["Casualty Collection Point (CCP)", "Stabilisation des blessés", "Près de l'évacuation, chauffé si possible"],
              ["OP avancé", "Observation de l'ennemi", "Masqué, isolé, comms avec le CP"],
              ["Cache de réapprovisionnement", "Munitions et eau avancées", "Distribuée en points couverts, jamais centralisée"],
            ],
          },
        ],
      },
      {
        heading: "Dangers spécifiques de la tranchée",
        blocks: [
          {
            type: "p",
            text: "La tranchée protège contre certaines menaces mais en génère d'autres. Connaître les dangers spécifiques est fondamental pour qui opère en position statique.",
          },
          {
            type: "ul",
            items: [
              "FPV par le haut : entrent directement dans les parapets ouverts — couvert supérieur et filets nécessaires",
              "Grenades lancées par le haut : le point aveugle vertical est le principal danger en tranchée",
              "Effondrement structurel : après une artillerie lourde, murs et toits cèdent",
              "Trench foot et hypothermie : pieds et jambes dans l'eau froide provoquent des lésions chroniques",
              "Fatigue extrême : longues gardes avec sommeil limité érodent jugement et réactivité",
              "Rats, parasites, maladies par contamination (hépatite A, dysenterie)",
              "UXO interne : grenades, obus, sous-munitions dans les débris",
              "Gaz toxiques : en espace confiné fumées et résidus de combustion deviennent dangereux",
            ],
          },
          {
            type: "warn",
            title: "TRENCH FOOT",
            body: "Les pertes non-combat dues au pied d'immersion sont documentées sur le front ukrainien en proportion significative, surtout en automne et au printemps. Chaussures imperméables, changement fréquent de chaussettes (3+ par jour), séchage des pieds à chaque rotation sont la prévention fondamentale. Une semaine de pieds mouillés génère des lésions qui éloignent le soldat des opérations pendant des semaines.",
          },
        ],
      },
      {
        heading: "Systèmes de couvert supérieur",
        blocks: [
          {
            type: "p",
            text: "Le couvert aérien de la tranchée est l'innovation défensive la plus documentée sur le front ukrainien. Filets, couverts rigides et systèmes mixtes réduisent la vulnérabilité aux FPV et grenades du haut.",
          },
          {
            type: "ul",
            items: [
              "Filets anti-drones : maille serrée qui bloque la trajectoire directe du FPV mais permet l'observation",
              "Toits rigides (bois, tôle, terre par-dessus) : protègent contre les grenades mais aveuglent la position",
              "Système mixte : filet sur les transits, toit rigide sur les postes de tir et bunkers",
              "Camouflage du couvert : pas de brillance, pas de couleurs distinctives, végétation intégrée",
              "Entretien : le couvert se casse au vent, à la neige, aux chocs — contrôle continu",
            ],
          },
        ],
      },
      {
        heading: "Discipline de vie en tranchée",
        blocks: [
          {
            type: "p",
            text: "Vivre en tranchée pendant des jours ou des semaines exige une discipline personnelle différente du combat de mouvement. La tranchée est observée en permanence ; chaque habitude devient pattern of life exploitable.",
          },
          {
            type: "ul",
            items: [
              "Mouvement extérieur seulement si nécessaire, jamais à horaires prévisibles",
              "Déchets corporels en points dédiés, jamais extérieur aléatoire — visibles à la thermique et au drone",
              "Nourriture chaude seulement sous couvert thermique, éviter de chauffer à l'air libre",
              "Sommeil en rotation, jamais plus de 50 % du personnel dormant simultanément",
              "Équipement toujours prêt : casque, plate carrier, IFAK, arme à portée",
              "Téléphones et appareils EM en faraday ou loin du poste de tir",
              "Pas de lumière visible ou IR sans couvert (même de petites lampes sont visibles aux drones IR)",
            ],
          },
        ],
      },
      {
        heading: "Rotations et soutien",
        blocks: [
          {
            type: "p",
            text: "La survie en tranchée dépend de la durée de la rotation et de la capacité de réapprovisionnement. Sur le front ukrainien, les rotations sont souvent plus longues que prévu en raison de la difficulté d'extraction véhiculée. Les unités planifiant des rotations théoriques de 24-48 heures et finissant par rester 5-10 jours subissent des pertes par épuisement et hypothermie.",
          },
          {
            type: "ul",
            items: [
              "Planifier pour le pire cas : réapprovisionnement alimentaire et hydrique pour 5-7 jours",
              "Eau : 3-4 litres par personne par jour minimum, plus l'été",
              "Munitions : stock pour engagement prolongé sans réapprovisionnement",
              "Chaud/froid : équipement adapté à la saison et au microclimat de la tranchée",
              "Moyens d'évacuation sanitaire : civières, sleds, voies pré-identifiées",
              "Comms avec le CP : redondance PACE toujours, jamais une seule voie",
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
            body: "Les procédures d'assaut de tranchée (trench raid, trench clearing) sont hors du périmètre de ce manuel. Ce sont parmi les procédures les plus risquées de toute la doctrine d'infanterie : elles exigent un entraînement intensif, des répétitions réelles en tranchée-modèle et une chaîne de commandement intégrée avec des feux d'appui. Les apprendre par un manuel de référence est impossible et dangereux. Ce chapitre ne présente que caractéristiques, dangers et considérations défensives.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Sous-estimer la durée de la rotation et la logistique nécessaire",
              "Négliger le couvert supérieur par paresse ou manque de matériaux",
              "Vivre avec des chaussures mouillées pendant des jours et ignorer les symptômes de trench foot",
              "Dormir tous ensemble parce que « la tranchée est calme »",
              "Sortir à heures prévisibles (aube, déjeuner, crépuscule)",
              "Allumer lampe ou téléphone dans la tranchée, exposant la signature IR",
              "Compter sur une seule voie d'évacuation",
              "Ne pas pratiquer la prévention du tir fratricide quand une unité voisine change",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La tranchée ukrainienne de 2024-2026 n'est pas celle de 1916 : c'est un réseau de positions coordonnées, couvertes en haut, appuyées par une artillerie à la demande, surveillées des deux côtés par drone persistant. La survie exige une discipline de signature, une profondeur verticale, un couvert supérieur et une logistique robuste. Les pertes documentées par hypothermie, trench foot et épuisement sont comparables à celles par combat direct. Le volontaire international qui entre en tranchée doit abandonner toute image cinématographique : la tranchée est un environnement de patience, d'entretien et de discipline de vie, pas d'exploits héroïques.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
