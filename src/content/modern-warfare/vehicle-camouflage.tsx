import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Un veicolo sul fronte ucraino è bersaglio prima ancora di muoversi. Camouflage moderno è multi-dominio: visivo, termico, radar, RF. Questo capitolo descrive principi difensivi di mascheramento, riduzione firma termica, anti-drone netting e dispersione. NON contiene tecniche di camuffamento offensive o procedure di imboscata.",
    sections: [
      {
        heading: "Le quattro firme di un veicolo",
        blocks: [
          {
            type: "p",
            text: "Ogni veicolo emette quattro firme rilevabili. Camouflage efficace agisce su tutte e quattro, non solo sulla visiva — la firma più facile da neutralizzare ma anche la meno usata dal nemico moderno.",
          },
          {
            type: "table",
            headers: ["Firma", "Rivelatore tipico"],
            rows: [
              ["Visiva (luce visibile)", "Occhio umano, telecamera RGB drone (Mavic, Autel diurna)"],
              ["Termica (IR)", "Drone con sensore termico (Mavic 3T, Autel 640T, Baba Yaga)"],
              ["Radar / radiocomandata", "Counter-battery radar, sistemi di ricognizione veicolari russi"],
              ["RF / elettronica", "SIGINT che identifica radio interna, BMS, sistemi attivi"],
            ],
          },
        ],
      },
      {
        heading: "Camouflage visivo — basi e limiti",
        blocks: [
          {
            type: "p",
            text: "Il camouflage visivo è il livello più antico ma resta il primo strato. La sua efficacia dipende da contesto, contrasto, scala e movimento.",
          },
          {
            type: "ul",
            items: [
              "Verniciatura adattata al teatro: ucraino disruptive (verde / marrone / beige), evitare combinazioni esotiche",
              "Pattern disruptive: rompe la silhouette del veicolo, riducendo riconoscimento a distanza",
              "Cespugli e rami freschi (camo branches): integrano sagoma con vegetazione locale, vanno sostituiti regolarmente",
              "Reti standard: utili contro vista diretta, meno contro fotografia drone in HD ad alta risoluzione",
              "Anti-glare: opacizzare vetri, fanali, parti riflettenti — il riflesso solare tradisce a chilometri",
              "Tracce di traccia: cancellare o variare percorsi di accesso, le ruote rivelano posizione anche se veicolo è coperto",
            ],
          },
          {
            type: "warn",
            title: "Limiti del visivo",
            body: "Un veicolo \"invisibile\" all'occhio umano resta evidente al termico se motore caldo, e al RF se trasmette. Camo visivo è necessario ma insufficiente.",
          },
        ],
      },
      {
        heading: "Riduzione firma termica",
        blocks: [
          {
            type: "p",
            text: "La firma termica è la più letale sul fronte moderno. La sua riduzione richiede materiali dedicati o disciplina di raffreddamento — il camuffamento visivo da solo non basta.",
          },
          {
            type: "ul",
            items: [
              "Coperture termiche dedicate: Saab Barracuda MCS, sistemi ucraini equivalenti, tessuti low-emissivity",
              "Coperte mylar/foglio termico sopra superfici calde (cofano motore, scatole di trasmissione) per uso temporaneo",
              "Spegnimento motore appena fermi — il calore residuo emette per 30-60 minuti",
              "Schermatura scappamento: deviatori che disperdono il calore, raffreddatori water-cooled in alcuni sistemi",
              "Posizionamento sotto vegetazione densa che intercetta IR (non basta fogliame rado)",
              "Dispersione: due veicoli vicini formano una firma doppia identificabile come unità",
            ],
          },
          {
            type: "callout",
            title: "Tempi di cool-down",
            body: "Un veicolo cingolato medio raffredda termicamente in 45-90 minuti dopo spegnimento. Un veicolo ruotato leggero in 20-40 minuti. Il blocco motore è l'ultimo a raffreddarsi. Pianificare le soste in base a questo.",
          },
        ],
      },
      {
        heading: "Anti-drone netting e copertura overhead",
        blocks: [
          {
            type: "p",
            text: "Le reti anti-drone sono il complemento standard del veicolo da combattimento moderno. Non sono camuffamento ma barriera meccanica contro FPV e droni armati.",
          },
          {
            type: "ul",
            items: [
              "Cage / slat armor: gabbie metalliche che detonano FPV prima dell'impatto su corazza",
              "Reti maglia stretta sopra torretta e top deck: intrappolano FPV in fase terminale",
              "Tetti improvvisati \"cope cages\": comuni su T-72/T-80 russi e blindati ucraini, riducono perdite documentate",
              "Mantenimento: reti vanno verificate dopo ogni movimento — un foglio strappato è una vulnerabilità",
              "Equilibrio peso/utilità: copertura troppo pesante degrada cingolatura e visibilità",
              "Ramaglia fresca sopra rete: aggiunge ombra termica e visiva, va sostituita",
            ],
          },
        ],
      },
      {
        heading: "Dispersione e posizionamento",
        blocks: [
          {
            type: "p",
            text: "Il singolo veicolo meglio camuffato del mondo perde efficacia se posizionato male o in cluster. Dispersione e posizionamento sono parte integrante del mascheramento operativo.",
          },
          {
            type: "ul",
            items: [
              "Distanza tra veicoli in sosta: > 50 m, idealmente > 100 m",
              "Mai allineamento su strada o sentiero (pattern visibile dal drone)",
              "Mai stessa traccia: alternare percorsi di accesso, cancellare tracce evidenti",
              "Sosta in defilade naturale: fianco di collina, dietro edificio, in bosco fitto",
              "Hide spots verificati con drone amico: vedere il proprio posizionamento come lo vede il nemico",
              "Veicoli decoys: modelli falsi documentati su entrambi i lati, distraggono targeting nemico",
            ],
          },
        ],
      },
      {
        heading: "Disciplina elettronica veicolare",
        blocks: [
          {
            type: "ul",
            items: [
              "Spegnere sistemi non necessari quando in sosta (radio, BMS, datalink)",
              "Antenne abbattute o coperte se non in trasmissione",
              "Limitare emissioni RF dal veicolo a quanto strettamente necessario per missione",
              "Verificare che impianti di bordo non emettano spurie identificabili",
              "Coordinare con jammer di squadra: il veicolo è dentro la bolla, non fuori",
            ],
          },
        ],
      },
      {
        heading: "Mantenimento del camouflage",
        blocks: [
          {
            type: "ul",
            items: [
              "Foliage fresco: sostituire ogni 12-24 ore (perde colore e proprietà termiche seccandosi)",
              "Reti: ispezionare dopo ogni transito, riparare strappi",
              "Coperture termiche: pulire periodicamente per mantenere proprietà emissività",
              "Vernice: ritoccare graffi e zone sbiadite, evitare lucidità da nuova vernice spray",
              "Tracce: cancellare con scopa o ramoscello dopo ogni arrivo/partenza in hide",
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
              "Camo visivo ottimo ma motore acceso al minimo per ore (firma termica massima)",
              "Veicoli allineati \"per ordine\" in hide — pattern visibile dall'alto",
              "Rete anti-drone con buchi non riparati (un FPV trova lo spazio)",
              "Fogliame secco da giorni che cambia colore rispetto alla vegetazione viva intorno",
              "Antenne dritte e visibili a chilometri sopra mascheramento perfetto del resto",
              "Tracce di ruote fresche che convergono in un punto coperto — fa luce sul hide",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le perdite documentate di veicoli blindati russi e ucraini dal 2022 mostrano un pattern chiaro: i veicoli che sopravvivono più a lungo non sono quelli più moderni — sono quelli mascherati meglio. Le perdite catastrofiche di colonne meccanizzate ai primi mesi della guerra (febbraio-aprile 2022) sono state largamente attribuite a mancata dispersione, mancata disciplina di firma termica, e cluster su strade. Dal 2023 entrambi gli eserciti hanno introdotto cope cages, anti-drone netting, dispersione obbligatoria e patterns di hide ruotanti. La regola sintetica del fronte 2024-2026: \"Se il tuo veicolo è visibile, è già perso. La domanda è quando.\"",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "A vehicle on the Ukrainian front is a target before it even moves. Modern camouflage is multi-domain: visual, thermal, radar, RF. This chapter describes defensive masking principles, thermal signature reduction, anti-drone netting and dispersion. It does NOT contain offensive camouflage techniques or ambush procedures.",
    sections: [
      {
        heading: "The four vehicle signatures",
        blocks: [
          {
            type: "p",
            text: "Every vehicle emits four detectable signatures. Effective camouflage acts on all four, not only the visual — the easiest to neutralise but also the least used by the modern enemy.",
          },
          {
            type: "table",
            headers: ["Signature", "Typical detector"],
            rows: [
              ["Visual (visible light)", "Human eye, RGB drone camera (Mavic, Autel daytime)"],
              ["Thermal (IR)", "Thermal-sensor drone (Mavic 3T, Autel 640T, Baba Yaga)"],
              ["Radar / radio-actuated", "Counter-battery radar, Russian vehicle recce systems"],
              ["RF / electronic", "SIGINT identifying internal radios, BMS, active systems"],
            ],
          },
        ],
      },
      {
        heading: "Visual camouflage — basics and limits",
        blocks: [
          {
            type: "p",
            text: "Visual camouflage is the oldest layer but remains the first. Effectiveness depends on context, contrast, scale and movement.",
          },
          {
            type: "ul",
            items: [
              "Theatre-adapted paint: Ukrainian disruptive (green / brown / beige), avoid exotic combinations",
              "Disruptive pattern: breaks the vehicle silhouette, reducing distance recognition",
              "Fresh branches and brush (camo branches): blend silhouette with local vegetation, replace regularly",
              "Standard nets: useful against direct sight, less against HD high-resolution drone photography",
              "Anti-glare: matte glass, headlights, reflective parts — solar glint betrays kilometres away",
              "Track traces: erase or vary access paths, wheels reveal position even if vehicle is covered",
            ],
          },
          {
            type: "warn",
            title: "Visual limits",
            body: "A vehicle \"invisible\" to the eye remains evident on thermal if engine is hot, and on RF if it transmits. Visual camo is necessary but insufficient.",
          },
        ],
      },
      {
        heading: "Thermal signature reduction",
        blocks: [
          {
            type: "p",
            text: "Thermal signature is the most lethal on the modern front. Reducing it requires dedicated materials or cooldown discipline — visual camo alone is not enough.",
          },
          {
            type: "ul",
            items: [
              "Dedicated thermal covers: Saab Barracuda MCS, equivalent Ukrainian systems, low-emissivity fabrics",
              "Mylar blankets / thermal foil over hot surfaces (engine hood, transmission boxes) for temporary use",
              "Engine off as soon as stopped — residual heat radiates for 30-60 minutes",
              "Exhaust shielding: deflectors dispersing heat, water-cooled coolers on some systems",
              "Positioning under dense vegetation that intercepts IR (thin foliage not enough)",
              "Dispersion: two close vehicles form a double signature identifiable as a unit",
            ],
          },
          {
            type: "callout",
            title: "Cooldown times",
            body: "A medium tracked vehicle cools thermally in 45-90 minutes after shutdown. A light wheeled vehicle in 20-40 minutes. The engine block is last to cool. Plan halts accordingly.",
          },
        ],
      },
      {
        heading: "Anti-drone netting and overhead cover",
        blocks: [
          {
            type: "p",
            text: "Anti-drone nets are the modern combat-vehicle standard complement. They are not camouflage but mechanical barriers against FPV and armed drones.",
          },
          {
            type: "ul",
            items: [
              "Cage / slat armour: metal cages detonating FPV before impact on armour",
              "Tight-mesh nets over turret and top deck: trap FPV in terminal phase",
              "Improvised \"cope cages\": common on Russian T-72/T-80 and Ukrainian armour, reduce documented losses",
              "Maintenance: nets must be checked after each move — torn fabric is a vulnerability",
              "Weight/utility balance: too heavy cover degrades tracks and visibility",
              "Fresh branches on top of net: add thermal and visual shadow, must be replaced",
            ],
          },
        ],
      },
      {
        heading: "Dispersion and positioning",
        blocks: [
          {
            type: "p",
            text: "The single best-camouflaged vehicle in the world loses effectiveness if poorly positioned or in cluster. Dispersion and positioning are integral to operational masking.",
          },
          {
            type: "ul",
            items: [
              "Inter-vehicle distance at halt: > 50 m, ideally > 100 m",
              "Never aligned on road or trail (pattern visible from drone)",
              "Never same track: alternate access paths, erase obvious tracks",
              "Halt in natural defilade: hillside, behind building, in dense woods",
              "Hide spots verified with friendly drone: see your positioning as the enemy sees it",
              "Decoy vehicles: false models documented on both sides, distract enemy targeting",
            ],
          },
        ],
      },
      {
        heading: "Vehicle electronic discipline",
        blocks: [
          {
            type: "ul",
            items: [
              "Switch off non-essential systems at halt (radios, BMS, datalinks)",
              "Antennas lowered or covered if not transmitting",
              "Limit RF emissions from vehicle to strictly mission-needed",
              "Verify on-board systems do not emit identifiable spurious signals",
              "Coordinate with team jammer: the vehicle is inside the bubble, not outside",
            ],
          },
        ],
      },
      {
        heading: "Camouflage maintenance",
        blocks: [
          {
            type: "ul",
            items: [
              "Fresh foliage: replace every 12-24 hours (loses colour and thermal properties when drying)",
              "Nets: inspect after each transit, repair tears",
              "Thermal covers: clean periodically to keep emissivity properties",
              "Paint: touch up scratches and faded areas, avoid fresh spray gloss",
              "Tracks: erase with broom or branch after each arrival/departure in hide",
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
              "Excellent visual camo but engine idling for hours (maximum thermal signature)",
              "Vehicles aligned \"in order\" in hide — pattern visible from above",
              "Anti-drone net with unrepaired holes (an FPV finds the gap)",
              "Days-dry foliage shifting colour from surrounding live vegetation",
              "Antennas straight and visible kilometres away over perfectly masked rest",
              "Fresh wheel tracks converging on a covered point — point a light at the hide",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Documented Russian and Ukrainian armour losses since 2022 show a clear pattern: longest-surviving vehicles are not the most modern — they are the best-masked. Catastrophic losses of mechanised columns in the first months (February-April 2022) were largely attributed to no dispersion, no thermal-signature discipline, and clustering on roads. From 2023 both armies introduced cope cages, anti-drone netting, mandatory dispersion and rotating hide patterns. The 2024-2026 synthetic rule: \"If your vehicle is visible, it is already lost. The question is when.\"",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Um veículo no front ucraniano é alvo antes mesmo de se mover. Camouflage moderno é multi-domínio: visual, térmico, radar, RF. Este capítulo descreve princípios defensivos de mascaramento, redução de assinatura térmica, anti-drone netting e dispersão. NÃO contém técnicas de camuflagem ofensiva ou procedimentos de emboscada.",
    sections: [
      {
        heading: "As quatro assinaturas de um veículo",
        blocks: [
          {
            type: "p",
            text: "Cada veículo emite quatro assinaturas detectáveis. Camouflage eficaz atua nas quatro, não só na visual — a mais fácil de neutralizar mas a menos usada pelo inimigo moderno.",
          },
          {
            type: "table",
            headers: ["Assinatura", "Detector típico"],
            rows: [
              ["Visual (luz visível)", "Olho humano, câmera RGB drone (Mavic, Autel diurna)"],
              ["Térmica (IR)", "Drone com sensor térmico (Mavic 3T, Autel 640T, Baba Yaga)"],
              ["Radar / radiocomandado", "Counter-battery radar, sistemas russos de recon veicular"],
              ["RF / eletrônica", "SIGINT identificando rádios internos, BMS, sistemas ativos"],
            ],
          },
        ],
      },
      {
        heading: "Camouflage visual — bases e limites",
        blocks: [
          {
            type: "p",
            text: "Camouflage visual é a camada mais antiga mas continua sendo a primeira. Eficácia depende de contexto, contraste, escala e movimento.",
          },
          {
            type: "ul",
            items: [
              "Pintura adaptada ao teatro: ucraniano disruptive (verde / marrom / bege), evitar combinações exóticas",
              "Pattern disruptive: quebra a silhueta do veículo, reduzindo reconhecimento à distância",
              "Galhos e arbustos frescos (camo branches): integram silhueta à vegetação local, trocar regularmente",
              "Redes padrão: úteis contra vista direta, menos contra fotografia drone HD de alta resolução",
              "Anti-glare: opacizar vidros, faróis, partes refletivas — reflexo solar trai a km",
              "Trilhas: apagar ou variar caminhos de acesso, rodas revelam posição mesmo se veículo está coberto",
            ],
          },
          {
            type: "warn",
            title: "Limites do visual",
            body: "Um veículo \"invisível\" ao olho continua evidente em térmico se motor quente, e em RF se transmite. Camo visual é necessário mas insuficiente.",
          },
        ],
      },
      {
        heading: "Redução de assinatura térmica",
        blocks: [
          {
            type: "p",
            text: "Assinatura térmica é a mais letal no front moderno. Reduzi-la exige materiais dedicados ou disciplina de cooldown — camo visual sozinho não basta.",
          },
          {
            type: "ul",
            items: [
              "Coberturas térmicas dedicadas: Saab Barracuda MCS, sistemas ucranianos equivalentes, tecidos low-emissivity",
              "Cobertores mylar / folha térmica sobre superfícies quentes (capô motor, caixas de transmissão) para uso temporário",
              "Desligar motor assim que parado — calor residual irradia 30-60 minutos",
              "Blindagem de escapamento: defletores que dispersam calor, resfriadores water-cooled em alguns sistemas",
              "Posicionamento sob vegetação densa que intercepta IR (folhagem rala não basta)",
              "Dispersão: dois veículos próximos formam dupla assinatura identificável como unidade",
            ],
          },
          {
            type: "callout",
            title: "Tempos de cool-down",
            body: "Um veículo cingolado médio resfria termicamente em 45-90 minutos após desligar. Veículo rodado leve em 20-40 minutos. O bloco do motor é o último a resfriar. Planejar paradas com isso.",
          },
        ],
      },
      {
        heading: "Anti-drone netting e cobertura overhead",
        blocks: [
          {
            type: "p",
            text: "Redes anti-drone são o complemento padrão do veículo de combate moderno. Não são camuflagem mas barreira mecânica contra FPV e drones armados.",
          },
          {
            type: "ul",
            items: [
              "Cage / slat armor: gaiolas metálicas que detonam FPV antes do impacto na blindagem",
              "Redes malha estreita sobre torre e top deck: prendem FPV em fase terminal",
              "Teto improvisado \"cope cages\": comum em T-72/T-80 russos e blindados ucranianos, reduzem perdas documentadas",
              "Manutenção: redes precisam ser verificadas após cada movimento — folha rasgada é vulnerabilidade",
              "Equilíbrio peso/utilidade: cobertura pesada demais degrada cingolado e visibilidade",
              "Galhos frescos sobre rede: adicionam sombra térmica e visual, devem ser trocados",
            ],
          },
        ],
      },
      {
        heading: "Dispersão e posicionamento",
        blocks: [
          {
            type: "p",
            text: "O melhor veículo camuflado do mundo perde eficácia se mal posicionado ou em cluster. Dispersão e posicionamento são parte integral do mascaramento operacional.",
          },
          {
            type: "ul",
            items: [
              "Distância entre veículos em parada: > 50 m, idealmente > 100 m",
              "Nunca alinhamento em estrada ou trilha (pattern visível do drone)",
              "Nunca mesma trilha: alternar caminhos de acesso, apagar trilhas evidentes",
              "Parada em defilade natural: lado de colina, atrás de edifício, em mata densa",
              "Hide spots verificados com drone amigo: ver o próprio posicionamento como o inimigo o vê",
              "Veículos decoys: modelos falsos documentados em ambos os lados, distraem targeting inimigo",
            ],
          },
        ],
      },
      {
        heading: "Disciplina eletrônica veicular",
        blocks: [
          {
            type: "ul",
            items: [
              "Desligar sistemas não essenciais em parada (rádios, BMS, datalinks)",
              "Antenas abaixadas ou cobertas se não em transmissão",
              "Limitar emissões RF do veículo ao estritamente necessário para missão",
              "Verificar que sistemas de bordo não emitem spúrias identificáveis",
              "Coordenar com jammer de equipe: o veículo está dentro da bolha, não fora",
            ],
          },
        ],
      },
      {
        heading: "Manutenção do camouflage",
        blocks: [
          {
            type: "ul",
            items: [
              "Folhagem fresca: trocar a cada 12-24 horas (perde cor e propriedades térmicas secando)",
              "Redes: inspecionar após cada trânsito, reparar rasgos",
              "Coberturas térmicas: limpar periodicamente para manter propriedades de emissividade",
              "Pintura: retocar arranhões e áreas desbotadas, evitar brilho de tinta spray nova",
              "Trilhas: apagar com vassoura ou galho após cada chegada/partida no hide",
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
              "Camo visual ótimo mas motor em marcha lenta por horas (assinatura térmica máxima)",
              "Veículos alinhados \"em ordem\" no hide — pattern visível do alto",
              "Rede anti-drone com buracos não reparados (FPV acha o vão)",
              "Folhagem seca há dias mudando de cor versus vegetação viva ao redor",
              "Antenas retas visíveis a km sobre mascaramento perfeito do resto",
              "Trilhas de rodas frescas convergindo em ponto coberto — joga luz no hide",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "As perdas documentadas de blindados russos e ucranianos desde 2022 mostram padrão claro: os veículos que sobrevivem mais não são os mais modernos — são os melhor mascarados. Perdas catastróficas de colunas mecanizadas nos primeiros meses (fev-abr 2022) foram amplamente atribuídas a falta de dispersão, falta de disciplina de assinatura térmica, e cluster em estradas. Desde 2023 ambos os exércitos introduziram cope cages, anti-drone netting, dispersão obrigatória e patterns de hide rotativos. Regra sintética do front 2024-2026: \"Se seu veículo está visível, já está perdido. A pergunta é quando.\"",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Un véhicule sur le front ukrainien est une cible avant même de bouger. Le camouflage moderne est multi-domaine : visuel, thermique, radar, RF. Ce chapitre décrit les principes défensifs de masquage, la réduction de signature thermique, le filet anti-drone et la dispersion. Il NE contient PAS de techniques de camouflage offensif ou de procédures d'embuscade.",
    sections: [
      {
        heading: "Les quatre signatures d'un véhicule",
        blocks: [
          {
            type: "p",
            text: "Tout véhicule émet quatre signatures détectables. Le camouflage efficace agit sur les quatre, pas seulement la visuelle — la plus facile à neutraliser mais aussi la moins utilisée par l'ennemi moderne.",
          },
          {
            type: "table",
            headers: ["Signature", "Détecteur typique"],
            rows: [
              ["Visuelle (lumière visible)", "Œil humain, caméra RGB drone (Mavic, Autel jour)"],
              ["Thermique (IR)", "Drone à capteur thermique (Mavic 3T, Autel 640T, Baba Yaga)"],
              ["Radar / radio-commandé", "Counter-battery radar, systèmes russes de recce véhiculaire"],
              ["RF / électronique", "SIGINT identifiant radios internes, BMS, systèmes actifs"],
            ],
          },
        ],
      },
      {
        heading: "Camouflage visuel — bases et limites",
        blocks: [
          {
            type: "p",
            text: "Le camouflage visuel est la couche la plus ancienne mais reste la première. Son efficacité dépend du contexte, du contraste, de l'échelle et du mouvement.",
          },
          {
            type: "ul",
            items: [
              "Peinture adaptée au théâtre : ukrainien disruptif (vert / marron / beige), éviter combinaisons exotiques",
              "Pattern disruptif : brise la silhouette du véhicule, réduit la reconnaissance à distance",
              "Branches et buissons frais (camo branches) : intègrent la silhouette à la végétation locale, remplacer régulièrement",
              "Filets standard : utiles contre vue directe, moins contre photographie drone HD haute résolution",
              "Anti-glare : matifier vitres, phares, parties réfléchissantes — le reflet solaire trahit à des km",
              "Traces : effacer ou varier chemins d'accès, les roues révèlent la position même si le véhicule est couvert",
            ],
          },
          {
            type: "warn",
            title: "Limites du visuel",
            body: "Un véhicule « invisible » à l'œil reste évident au thermique si moteur chaud, et au RF s'il émet. Le camo visuel est nécessaire mais insuffisant.",
          },
        ],
      },
      {
        heading: "Réduction de signature thermique",
        blocks: [
          {
            type: "p",
            text: "La signature thermique est la plus létale sur le front moderne. La réduire demande des matériaux dédiés ou une discipline de cooldown — le camo visuel seul ne suffit pas.",
          },
          {
            type: "ul",
            items: [
              "Couvertures thermiques dédiées : Saab Barracuda MCS, systèmes ukrainiens équivalents, tissus low-emissivity",
              "Couvertures mylar / feuille thermique sur surfaces chaudes (capot moteur, boîtes de transmission) en usage temporaire",
              "Moteur coupé dès l'arrêt — la chaleur résiduelle rayonne 30-60 minutes",
              "Blindage d'échappement : déflecteurs dispersant la chaleur, refroidisseurs water-cooled sur certains systèmes",
              "Positionnement sous végétation dense interceptant l'IR (feuillage rare ne suffit pas)",
              "Dispersion : deux véhicules proches forment une double signature identifiable comme unité",
            ],
          },
          {
            type: "callout",
            title: "Temps de cool-down",
            body: "Un véhicule chenillé moyen refroidit thermiquement en 45-90 minutes après extinction. Un véhicule à roues léger en 20-40 minutes. Le bloc moteur est le dernier à refroidir. Planifier les haltes en conséquence.",
          },
        ],
      },
      {
        heading: "Filets anti-drone et couvert overhead",
        blocks: [
          {
            type: "p",
            text: "Les filets anti-drone sont le complément standard du véhicule de combat moderne. Ce n'est pas du camouflage mais une barrière mécanique contre les FPV et drones armés.",
          },
          {
            type: "ul",
            items: [
              "Cage / slat armor : cages métalliques détonant le FPV avant impact sur le blindage",
              "Filets maille serrée sur tourelle et top deck : piègent le FPV en phase terminale",
              "Toits improvisés « cope cages » : courants sur T-72/T-80 russes et blindés ukrainiens, réduisent les pertes documentées",
              "Entretien : vérifier les filets après chaque mouvement — une toile déchirée est une vulnérabilité",
              "Équilibre poids/utilité : couverture trop lourde dégrade chenilles et visibilité",
              "Branches fraîches sur le filet : ajoutent ombre thermique et visuelle, à remplacer",
            ],
          },
        ],
      },
      {
        heading: "Dispersion et positionnement",
        blocks: [
          {
            type: "p",
            text: "Le meilleur véhicule camouflé au monde perd son efficacité s'il est mal placé ou en cluster. Dispersion et positionnement font partie intégrante du masquage opérationnel.",
          },
          {
            type: "ul",
            items: [
              "Distance inter-véhicule à la halte : > 50 m, idéalement > 100 m",
              "Jamais d'alignement sur route ou sentier (pattern visible depuis le drone)",
              "Jamais la même trace : alterner les chemins d'accès, effacer les traces évidentes",
              "Halte en défilement naturel : flanc de colline, derrière bâtiment, en bois dense",
              "Spots de hide vérifiés au drone ami : voir son positionnement comme l'ennemi le voit",
              "Véhicules leurres : modèles factices documentés des deux côtés, distraient le targeting ennemi",
            ],
          },
        ],
      },
      {
        heading: "Discipline électronique véhicule",
        blocks: [
          {
            type: "ul",
            items: [
              "Éteindre les systèmes non essentiels à la halte (radios, BMS, datalinks)",
              "Antennes abaissées ou couvertes si pas en émission",
              "Limiter les émissions RF du véhicule au strict besoin mission",
              "Vérifier que les systèmes embarqués n'émettent pas de signaux parasites identifiables",
              "Coordonner avec brouilleur d'équipe : le véhicule est dans la bulle, pas dehors",
            ],
          },
        ],
      },
      {
        heading: "Entretien du camouflage",
        blocks: [
          {
            type: "ul",
            items: [
              "Feuillage frais : remplacer toutes les 12-24 heures (perd couleur et propriétés thermiques en séchant)",
              "Filets : inspecter après chaque transit, réparer les déchirures",
              "Couvertures thermiques : nettoyer périodiquement pour garder les propriétés d'émissivité",
              "Peinture : retoucher les éraflures et zones délavées, éviter le brillant de spray frais",
              "Traces : effacer au balai ou à la branche après chaque arrivée/départ en hide",
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
              "Excellent camo visuel mais moteur au ralenti pendant des heures (signature thermique maximale)",
              "Véhicules alignés « en ordre » dans le hide — pattern visible d'en haut",
              "Filet anti-drone avec trous non réparés (un FPV trouve le passage)",
              "Feuillage sec depuis des jours changeant de couleur par rapport à la végétation vivante autour",
              "Antennes droites visibles à des km au-dessus d'un masquage parfait du reste",
              "Traces de roues fraîches convergeant vers un point couvert — éclairent le hide",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les pertes blindées documentées russes et ukrainiennes depuis 2022 montrent un schéma clair : les véhicules qui survivent le plus longtemps ne sont pas les plus modernes — ce sont les mieux masqués. Les pertes catastrophiques de colonnes mécanisées dans les premiers mois (février-avril 2022) ont été largement attribuées à l'absence de dispersion, à l'absence de discipline de signature thermique, et au regroupement sur routes. Depuis 2023, les deux armées ont introduit cope cages, filets anti-drone, dispersion obligatoire et schémas de hide tournants. Règle synthétique du front 2024-2026 : « Si votre véhicule est visible, il est déjà perdu. La question est quand. »",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
