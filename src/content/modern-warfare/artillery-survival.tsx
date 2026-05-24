import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "L'artiglieria è oggi, come nel 1916, il principale produttore di vittime sul fronte ucraino. Questo capitolo descrive la sopravvivenza all'artiglieria a livello dottrinale: terreno, dispersione, copertura overhead, riconoscimento sonoro, comportamento post-impatto. NON contiene procedure di osservazione, correzione o impiego offensivo dell'artiglieria.",
    sections: [
      {
        heading: "L'artiglieria sul fronte 2022-2026",
        blocks: [
          {
            type: "p",
            text: "Il fronte ucraino è caratterizzato da intensità di fuoco indiretto storicamente alta. Sistemi noti pubblicamente: 152 mm 2S19 Msta, 122 mm 2S1 Gvozdika, 152 mm 2S3 Akatsiya, 220 mm BM-27 Uragan, 300 mm BM-30 Smerch, 240 mm 2S4 Tyulpan (lato russo); 155 mm M777, M109, PzH 2000, CAESAR, Krab, M270 MLRS, HIMARS (lato ucraino/NATO).",
          },
          {
            type: "ul",
            items: [
              "Cadenza: settori attivi possono ricevere 100-500 colpi al giorno per chilometro lineare",
              "Precisione: artiglieria moderna con UAV correzione raggiunge CEP < 50 m a 20 km",
              "Tempo di volo: 152 mm a 15 km ≈ 25-40 secondi; MLRS a 40 km ≈ 60-90 secondi",
              "Effetti: frammentazione (raggio letale 15-25 m), onda d'urto, schegge ad alta velocità",
              "Munizioni speciali: cluster (illegali, ancora impiegate), termobariche, illuminanti, fumo, guidate (Krasnopol)",
            ],
          },
          {
            type: "callout",
            title: "Premessa dottrinale",
            body: "Non c'è 'fortuna' nell'artiglieria. C'è geometria del terreno, disciplina di dispersione, qualità della copertura overhead. La differenza tra vivi e feriti è quasi sempre nei dettagli.",
          },
        ],
      },
      {
        heading: "Terreno — leggere la mappa per sopravvivere",
        blocks: [
          {
            type: "p",
            text: "L'artiglieria colpisce dall'alto. La protezione viene dall'altimetria locale e dalla qualità della copertura. Saper leggere il terreno è la prima skill di sopravvivenza.",
          },
          {
            type: "ul",
            items: [
              "Reverse slope: pendio rivolto in direzione opposta al nemico — protezione naturale da tiro diretto",
              "Defilade: posizione coperta dalla vista nemica grazie al terreno (avvallamento, dietro cresta)",
              "Burma trench / dugout: trincea con copertura overhead, gold standard di sopravvivenza",
              "Cellar / basement: cantine di edifici rurali, eccellenti se solide",
              "Tubi e canali: drenaggi profondi, fossati con copertura — ripari di emergenza",
              "Da evitare: terreni piatti aperti, posizioni dominanti senza cover, intersezioni stradali",
            ],
          },
          {
            type: "table",
            headers: ["Tipo di posizione", "Sopravvivenza relativa"],
            rows: [
              ["All'aperto, in piedi", "Quasi zero — ferimento certo a 20-50 m"],
              ["A terra, esposto", "Bassa — protegge da schegge piatte, non da quelle dall'alto"],
              ["Buca/crater", "Media — i crater colpiti due volte sono rari ma esistono"],
              ["Trincea senza overhead", "Media — protegge laterale, vulnerabile a airburst"],
              ["Trincea con overhead", "Alta — sopravvive a frammentazione, non a colpo diretto"],
              ["Bunker o cantina solida", "Molto alta — sopravvive anche a impatto vicino"],
            ],
          },
        ],
      },
      {
        heading: "Dispersione e pattern",
        blocks: [
          {
            type: "ul",
            items: [
              "Distanza minima tra elementi in sosta: 10-15 m in trincea, 25-50 m all'aperto",
              "Mai più di 4-5 persone visibili insieme dall'alto (drone osservatore)",
              "Veicoli: dispersi a > 50 m, mai allineati su strada, mai stessa traccia",
              "Movimento per piccoli gruppi (binomi o terzetti) anziché squadra intera",
              "Pattern di vita: variare ore di transito, mai stesso punto di sosta",
              "Posizioni di tiro: cambiare ogni 1-3 raffiche per evitare correzione",
            ],
          },
        ],
      },
      {
        heading: "Riconoscimento sonoro",
        blocks: [
          {
            type: "p",
            text: "L'orecchio addestrato distingue tipologie di munizione in arrivo, direzione di provenienza e fase di volo. È una skill che si costruisce con esperienza ma le basi dottrinali si imparano.",
          },
          {
            type: "ul",
            items: [
              "Boom + sibilo: colpo già partito, in volo, in arrivo entro pochi secondi",
              "Sibilo crescente: traiettoria diretta verso di te — buttarsi a terra immediatamente",
              "Sibilo decrescente: traiettoria che si allontana — colpo passa oltre",
              "Whump sordo: mortaio o colpo a grande distanza",
              "Crackle continuo: MLRS / Grad in arrivo — multipli colpi a pochi secondi di distanza",
              "Tac-tac veloce: cluster sub-munition in fase terminale",
              "Suono \"hot\" del proietto: oltre velocità del suono, può precedere il boom di partenza",
            ],
          },
          {
            type: "warn",
            title: "Limite sensoriale",
            body: "L'orecchio non sente sempre l'artiglieria a lunga gittata in arrivo: il colpo arriva in silenzio relativo per chi è al ricevente. La protezione passiva (cover overhead permanente quando in sosta) supera il riconoscimento sonoro.",
          },
        ],
      },
      {
        heading: "Comportamento sotto fuoco",
        blocks: [
          {
            type: "ol",
            items: [
              "Buttarsi a terra immediatamente — anche all'aperto è meglio che restare in piedi",
              "Cercare cover overhead più vicina: trincea, fosso, dietro muro spesso, dentro edificio",
              "Coprire testa con braccia, bocca aperta (riduce shock onda da pressione su timpani)",
              "Restare basso fino a fine raffica + minimo 60 secondi (rischio second salvo / cluster in fase secondaria)",
              "Comunicare via radio breve solo se necessario — l'osservatore drone aspetta callout",
              "Riassettarsi: verificare equipaggiamento, controllare compagni, riposizionarsi se posizione compromessa",
            ],
          },
        ],
      },
      {
        heading: "Post-impatto — i primi 5 minuti",
        blocks: [
          {
            type: "p",
            text: "Il periodo più letale è spesso non il primo impatto ma i minuti successivi. Il second salvo, il drone correttore, lo sciame FPV — tutti aspettano il movimento sbagliato.",
          },
          {
            type: "ul",
            items: [
              "Non riunirsi attorno a un ferito in spazio aperto — trattare in dispersione, poi muovere",
              "TCCC: tourniquet immediato, packing, controllo respirazione — niente improvvisazioni",
              "MEDEVAC: callout 9-line solo da posizione coperta o mobile, non sull'impatto",
              "Cambiare posizione entro 5-10 minuti — la prima posizione è ora compromessa",
              "Verificare se l'attacco è stato 'find' (drone) o 'cieco' (mappa) — il primo è seguito da seconda raffica",
              "Spegnere telefoni, ridurre emissioni — il SIGINT aspetta l'aumento di traffico post-impatto",
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
              "Restare in piedi a guardare il primo impatto (curiosità fatale)",
              "Correre a soccorrere senza valutare se siamo ancora sotto tiro",
              "Riunirsi in cluster compatto in trincea (un colpo diretto = molte vittime)",
              "Affidarsi a copertura visiva pensando che basti — la frammentazione attraversa tessuto",
              "Trasmettere a lungo subito dopo l'attacco (segnale che amplifica il targeting)",
              "Non spostarsi mai dalla posizione 'storica' (\"qui non ci hanno mai colpito\")",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "La frase ricorrente nei veterani 2022-2026: 'L'artiglieria non sa che ci sei finché non glielo dici tu.' Il targeting di artiglieria dipende da drone osservatore, SIGINT, OSINT, e prima ancora da disciplina propria. Le perdite documentate maggiori non vengono da impatti diretti su trincee profonde — vengono da assembramenti, ritardi nel coprirsi, secondo salvo dopo un primo che ha 'scoperto' la posizione, e da sottovalutazione del tempo di volo (decine di secondi sono sufficienti per cambiare postura, non per spostarsi). La regola sintetica: 'Quando senti il sibilo, sei già o vivo o morto in base a cosa hai fatto nei dieci minuti precedenti.'",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Artillery is today, as in 1916, the main producer of casualties on the Ukrainian front. This chapter describes artillery survival at doctrinal level: terrain, dispersion, overhead cover, sound recognition, post-impact behaviour. It does NOT contain observation, correction or offensive employment procedures.",
    sections: [
      {
        heading: "Artillery on the 2022-2026 front",
        blocks: [
          {
            type: "p",
            text: "The Ukrainian front features historically high indirect-fire intensity. Publicly known systems: 152 mm 2S19 Msta, 122 mm 2S1 Gvozdika, 152 mm 2S3 Akatsiya, 220 mm BM-27 Uragan, 300 mm BM-30 Smerch, 240 mm 2S4 Tyulpan (Russian side); 155 mm M777, M109, PzH 2000, CAESAR, Krab, M270 MLRS, HIMARS (Ukrainian/NATO side).",
          },
          {
            type: "ul",
            items: [
              "Tempo: active sectors can receive 100-500 rounds per day per linear kilometre",
              "Accuracy: modern artillery with UAV correction reaches CEP < 50 m at 20 km",
              "Flight time: 152 mm at 15 km ≈ 25-40 seconds; MLRS at 40 km ≈ 60-90 seconds",
              "Effects: fragmentation (lethal radius 15-25 m), blast wave, high-velocity shrapnel",
              "Special munitions: cluster (illegal, still employed), thermobaric, illumination, smoke, guided (Krasnopol)",
            ],
          },
          {
            type: "callout",
            title: "Doctrinal premise",
            body: "There is no 'luck' in artillery. There is local terrain geometry, dispersion discipline, overhead cover quality. The difference between live and wounded is almost always in details.",
          },
        ],
      },
      {
        heading: "Terrain — read the map to survive",
        blocks: [
          {
            type: "p",
            text: "Artillery hits from above. Protection comes from local altimetry and cover quality. Reading terrain is the first survival skill.",
          },
          {
            type: "ul",
            items: [
              "Reverse slope: slope facing away from enemy — natural protection from direct fire",
              "Defilade: position concealed from enemy view by terrain (gully, behind crest)",
              "Burma trench / dugout: trench with overhead cover, gold standard of survival",
              "Cellar / basement: rural building cellars, excellent if solid",
              "Pipes and channels: deep drainage, ditches with cover — emergency shelters",
              "Avoid: open flat terrain, dominating positions without cover, road intersections",
            ],
          },
          {
            type: "table",
            headers: ["Position type", "Relative survival"],
            rows: [
              ["Open, standing", "Near zero — wounding certain at 20-50 m"],
              ["Prone, exposed", "Low — protects from flat shrapnel, not overhead"],
              ["Hole/crater", "Medium — re-hit craters rare but exist"],
              ["Trench without overhead", "Medium — protects lateral, vulnerable to airburst"],
              ["Trench with overhead", "High — survives fragmentation, not direct hit"],
              ["Bunker or solid cellar", "Very high — survives even close impact"],
            ],
          },
        ],
      },
      {
        heading: "Dispersion and patterns",
        blocks: [
          {
            type: "ul",
            items: [
              "Minimum distance between elements at halt: 10-15 m in trench, 25-50 m in open",
              "Never more than 4-5 visible together from above (observer drone)",
              "Vehicles: dispersed > 50 m, never aligned on road, never same track",
              "Movement in small groups (pair or triad) rather than full squad",
              "Pattern of life: vary transit hours, never same halt point",
              "Firing positions: change every 1-3 bursts to avoid correction",
            ],
          },
        ],
      },
      {
        heading: "Sound recognition",
        blocks: [
          {
            type: "p",
            text: "The trained ear distinguishes incoming munition types, direction and flight phase. It is a skill built with experience but doctrinal basics can be learned.",
          },
          {
            type: "ul",
            items: [
              "Boom + whistle: round already fired, in flight, arriving within seconds",
              "Rising whistle: direct trajectory at you — go prone immediately",
              "Falling whistle: trajectory moving away — round passes beyond",
              "Dull whump: mortar or long-range round",
              "Continuous crackle: MLRS / Grad incoming — multiple rounds seconds apart",
              "Fast tac-tac: cluster sub-munition in terminal phase",
              "Round's 'hot' sound: supersonic, may precede departure boom",
            ],
          },
          {
            type: "warn",
            title: "Sensory limit",
            body: "The ear does not always catch long-range artillery incoming: the round arrives in relative silence for the receiver. Passive protection (permanent overhead cover at halt) beats sound recognition.",
          },
        ],
      },
      {
        heading: "Behaviour under fire",
        blocks: [
          {
            type: "ol",
            items: [
              "Go prone immediately — even in open is better than standing",
              "Seek nearest overhead cover: trench, ditch, behind thick wall, into building",
              "Cover head with arms, mouth open (reduces pressure shock on eardrums)",
              "Stay low until end of burst + minimum 60 seconds (second-salvo / cluster secondary risk)",
              "Brief radio comm only if needed — observer drone awaits callout",
              "Re-set: check gear, check teammates, reposition if position compromised",
            ],
          },
        ],
      },
      {
        heading: "Post-impact — the first 5 minutes",
        blocks: [
          {
            type: "p",
            text: "The deadliest period is often not the first impact but the following minutes. The second salvo, the correction drone, the FPV swarm — all wait for the wrong move.",
          },
          {
            type: "ul",
            items: [
              "Do not cluster around a casualty in open space — treat in dispersion, then move",
              "TCCC: immediate tourniquet, packing, airway — no improvisation",
              "MEDEVAC: 9-line callout only from covered or mobile position, not on impact site",
              "Change position within 5-10 minutes — first position is now compromised",
              "Verify if attack was 'find' (drone) or 'blind' (map) — former followed by second burst",
              "Switch off phones, reduce emissions — SIGINT awaits post-impact traffic surge",
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
              "Standing to watch the first impact (fatal curiosity)",
              "Rushing to assist without assessing if still under fire",
              "Bunching in compact cluster in trench (one direct hit = many casualties)",
              "Relying on visual cover thinking it suffices — fragmentation goes through fabric",
              "Long transmissions immediately after attack (signal that amplifies targeting)",
              "Never moving from a 'historic' position (\"never been hit here\")",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Recurring phrase among 2022-2026 veterans: 'Artillery doesn't know you're there until you tell it.' Artillery targeting depends on observer drones, SIGINT, OSINT, and first of all on own discipline. Documented major losses do not come from direct hits on deep trenches — they come from clustering, delays in taking cover, second salvos after a first that 'found' the position, and underestimation of flight time (tens of seconds are enough to change posture, not to relocate). Synthetic rule: 'When you hear the whistle, you are already either alive or dead based on what you did in the previous ten minutes.'",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A artilharia é hoje, como em 1916, a principal produtora de vítimas no front ucraniano. Este capítulo descreve a sobrevivência à artilharia em nível doutrinário: terreno, dispersão, cobertura overhead, reconhecimento sonoro, comportamento pós-impacto. NÃO contém procedimentos de observação, correção ou emprego ofensivo da artilharia.",
    sections: [
      {
        heading: "A artilharia no front 2022-2026",
        blocks: [
          {
            type: "p",
            text: "O front ucraniano se caracteriza por intensidade de fogo indireto historicamente alta. Sistemas publicamente conhecidos: 152 mm 2S19 Msta, 122 mm 2S1 Gvozdika, 152 mm 2S3 Akatsiya, 220 mm BM-27 Uragan, 300 mm BM-30 Smerch, 240 mm 2S4 Tyulpan (lado russo); 155 mm M777, M109, PzH 2000, CAESAR, Krab, M270 MLRS, HIMARS (lado ucraniano/OTAN).",
          },
          {
            type: "ul",
            items: [
              "Cadência: setores ativos podem receber 100-500 tiros por dia por km linear",
              "Precisão: artilharia moderna com UAV correção atinge CEP < 50 m a 20 km",
              "Tempo de voo: 152 mm a 15 km ≈ 25-40 segundos; MLRS a 40 km ≈ 60-90 segundos",
              "Efeitos: fragmentação (raio letal 15-25 m), onda de choque, estilhaços de alta velocidade",
              "Munições especiais: cluster (ilegais, ainda empregadas), termobáricas, iluminantes, fumo, guiadas (Krasnopol)",
            ],
          },
          {
            type: "callout",
            title: "Premissa doutrinária",
            body: "Não há 'sorte' na artilharia. Há geometria do terreno local, disciplina de dispersão, qualidade de cobertura overhead. A diferença entre vivos e feridos está quase sempre nos detalhes.",
          },
        ],
      },
      {
        heading: "Terreno — ler o mapa para sobreviver",
        blocks: [
          {
            type: "p",
            text: "A artilharia bate do alto. A proteção vem da altimetria local e da qualidade de cobertura. Saber ler terreno é a primeira skill de sobrevivência.",
          },
          {
            type: "ul",
            items: [
              "Reverse slope: encosta voltada para o lado oposto do inimigo — proteção natural a tiro direto",
              "Defilade: posição oculta da vista inimiga pelo terreno (depressão, atrás de crista)",
              "Burma trench / dugout: trincheira com cobertura overhead, gold standard de sobrevivência",
              "Cellar / basement: porões de edifícios rurais, excelentes se sólidos",
              "Tubos e canais: drenagens profundas, valas com cobertura — abrigos de emergência",
              "Evitar: terrenos planos abertos, posições dominantes sem cobertura, cruzamentos",
            ],
          },
          {
            type: "table",
            headers: ["Tipo de posição", "Sobrevivência relativa"],
            rows: [
              ["Aberto, em pé", "Quase zero — ferimento certo a 20-50 m"],
              ["Deitado, exposto", "Baixa — protege de estilhaços baixos, não overhead"],
              ["Cratera/buraco", "Média — crateras re-atingidas são raras mas existem"],
              ["Trincheira sem overhead", "Média — protege lateral, vulnerável a airburst"],
              ["Trincheira com overhead", "Alta — sobrevive fragmentação, não impacto direto"],
              ["Bunker ou porão sólido", "Muito alta — sobrevive mesmo impacto próximo"],
            ],
          },
        ],
      },
      {
        heading: "Dispersão e padrões",
        blocks: [
          {
            type: "ul",
            items: [
              "Distância mínima entre elementos em parada: 10-15 m em trincheira, 25-50 m em aberto",
              "Nunca mais de 4-5 pessoas visíveis juntas do alto (drone observador)",
              "Veículos: dispersos > 50 m, nunca alinhados em estrada, nunca mesma trilha",
              "Movimento em pequenos grupos (dupla ou trio) em vez de grupo inteiro",
              "Pattern of life: variar horários de trânsito, nunca mesmo ponto de parada",
              "Posições de tiro: trocar a cada 1-3 rajadas para evitar correção",
            ],
          },
        ],
      },
      {
        heading: "Reconhecimento sonoro",
        blocks: [
          {
            type: "p",
            text: "O ouvido treinado distingue tipos de munição chegando, direção e fase de voo. É skill construída com experiência mas os fundamentos doutrinários se aprendem.",
          },
          {
            type: "ul",
            items: [
              "Boom + sibilo: tiro já partiu, em voo, chegando em poucos segundos",
              "Sibilo crescente: trajetória direta em você — corpo a terra imediato",
              "Sibilo decrescente: trajetória se afastando — tiro passa além",
              "Whump abafado: morteiro ou tiro a longa distância",
              "Crackle contínuo: MLRS / Grad chegando — múltiplos tiros a poucos segundos",
              "Tac-tac rápido: sub-munição cluster em fase terminal",
              "Som 'quente' do projétil: supersônico, pode preceder o boom de partida",
            ],
          },
          {
            type: "warn",
            title: "Limite sensorial",
            body: "O ouvido nem sempre capta artilharia de longa gittada chegando: o tiro chega em silêncio relativo para o receptor. A proteção passiva (cobertura overhead permanente em parada) supera reconhecimento sonoro.",
          },
        ],
      },
      {
        heading: "Comportamento sob fogo",
        blocks: [
          {
            type: "ol",
            items: [
              "Corpo a terra imediato — mesmo em aberto é melhor que em pé",
              "Buscar cobertura overhead mais próxima: trincheira, vala, atrás de muro grosso, dentro de edifício",
              "Cobrir cabeça com braços, boca aberta (reduz shock de pressão nos tímpanos)",
              "Permanecer baixo até fim da rajada + mínimo 60 segundos (risco second salvo / cluster secundário)",
              "Comm rádio breve só se necessário — drone observador espera callout",
              "Reorganizar: checar equipamento, checar companheiros, reposicionar se posição comprometida",
            ],
          },
        ],
      },
      {
        heading: "Pós-impacto — os primeiros 5 minutos",
        blocks: [
          {
            type: "p",
            text: "O período mais letal não é o primeiro impacto, mas os minutos seguintes. O second salvo, o drone corretor, o enxame FPV — todos esperam o movimento errado.",
          },
          {
            type: "ul",
            items: [
              "Não agrupar em torno de ferido em espaço aberto — tratar em dispersão, depois mover",
              "TCCC: torniquete imediato, packing, via aérea — sem improvisações",
              "MEDEVAC: callout 9-line só de posição coberta ou móvel, não no ponto de impacto",
              "Trocar de posição em 5-10 minutos — primeira posição agora comprometida",
              "Verificar se o ataque foi 'find' (drone) ou 'cego' (mapa) — primeiro é seguido por segunda rajada",
              "Desligar celulares, reduzir emissões — SIGINT espera aumento de tráfego pós-impacto",
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
              "Ficar em pé olhando o primeiro impacto (curiosidade fatal)",
              "Correr para socorrer sem avaliar se ainda sob fogo",
              "Aglomerar em cluster compacto em trincheira (um impacto direto = muitas vítimas)",
              "Confiar em cobertura visual achando que basta — fragmentação atravessa tecido",
              "Transmitir longo imediatamente após ataque (sinal que amplifica targeting)",
              "Nunca sair da posição 'histórica' (\"aqui nunca bateram\")",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Frase recorrente em veteranos 2022-2026: 'A artilharia não sabe que você está lá até você dizer.' O targeting de artilharia depende de drone observador, SIGINT, OSINT, e antes de tudo de disciplina própria. As maiores perdas documentadas não vêm de impactos diretos em trincheiras profundas — vêm de aglomerações, atrasos em se cobrir, segundo salvo após o primeiro 'descobrir' a posição, e subestimação do tempo de voo (dezenas de segundos bastam para mudar postura, não para se deslocar). Regra sintética: 'Quando você ouve o sibilo, já está vivo ou morto baseado no que fez nos dez minutos anteriores.'",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "L'artillerie est aujourd'hui, comme en 1916, le principal producteur de pertes sur le front ukrainien. Ce chapitre décrit la survie à l'artillerie au niveau doctrinal : terrain, dispersion, couverture overhead, reconnaissance sonore, comportement post-impact. Il NE contient PAS de procédures d'observation, de correction ou d'emploi offensif de l'artillerie.",
    sections: [
      {
        heading: "L'artillerie sur le front 2022-2026",
        blocks: [
          {
            type: "p",
            text: "Le front ukrainien est caractérisé par une intensité de feu indirect historiquement élevée. Systèmes publiquement connus : 152 mm 2S19 Msta, 122 mm 2S1 Gvozdika, 152 mm 2S3 Akatsiya, 220 mm BM-27 Uragan, 300 mm BM-30 Smerch, 240 mm 2S4 Tyulpan (côté russe) ; 155 mm M777, M109, PzH 2000, CAESAR, Krab, M270 MLRS, HIMARS (côté ukrainien/OTAN).",
          },
          {
            type: "ul",
            items: [
              "Cadence : secteurs actifs peuvent recevoir 100-500 coups par jour par km linéaire",
              "Précision : artillerie moderne avec correction UAV atteint CEP < 50 m à 20 km",
              "Temps de vol : 152 mm à 15 km ≈ 25-40 secondes ; MLRS à 40 km ≈ 60-90 secondes",
              "Effets : fragmentation (rayon létal 15-25 m), onde de choc, éclats à haute vitesse",
              "Munitions spéciales : cluster (illégales, encore employées), thermobariques, illuminantes, fumigènes, guidées (Krasnopol)",
            ],
          },
          {
            type: "callout",
            title: "Prémisse doctrinale",
            body: "Pas de 'chance' en artillerie. Il y a géométrie du terrain local, discipline de dispersion, qualité de couverture overhead. La différence entre vivants et blessés est presque toujours dans les détails.",
          },
        ],
      },
      {
        heading: "Terrain — lire la carte pour survivre",
        blocks: [
          {
            type: "p",
            text: "L'artillerie frappe d'en haut. La protection vient de l'altimétrie locale et de la qualité de couverture. Lire le terrain est la première compétence de survie.",
          },
          {
            type: "ul",
            items: [
              "Reverse slope : pente face opposée à l'ennemi — protection naturelle au tir direct",
              "Défilement : position dissimulée à la vue ennemie par le terrain (creux, derrière crête)",
              "Burma trench / dugout : tranchée avec couverture overhead, gold standard de survie",
              "Cave / sous-sol : caves d'édifices ruraux, excellentes si solides",
              "Tuyaux et canaux : drainages profonds, fossés couverts — abris d'urgence",
              "À éviter : terrains plats ouverts, positions dominantes sans couvert, intersections routières",
            ],
          },
          {
            type: "table",
            headers: ["Type de position", "Survie relative"],
            rows: [
              ["Ouvert, debout", "Quasi nulle — blessure certaine à 20-50 m"],
              ["À plat ventre, exposé", "Faible — protège des éclats horizontaux, pas overhead"],
              ["Trou/cratère", "Moyenne — cratères refrappés rares mais existent"],
              ["Tranchée sans overhead", "Moyenne — protège latéral, vulnérable airburst"],
              ["Tranchée avec overhead", "Élevée — survit à la fragmentation, pas au coup direct"],
              ["Bunker ou cave solide", "Très élevée — survit même à impact proche"],
            ],
          },
        ],
      },
      {
        heading: "Dispersion et schémas",
        blocks: [
          {
            type: "ul",
            items: [
              "Distance minimale entre éléments à la halte : 10-15 m en tranchée, 25-50 m en ouvert",
              "Jamais plus de 4-5 personnes visibles ensemble d'en haut (drone observateur)",
              "Véhicules : dispersés > 50 m, jamais alignés sur route, jamais même trace",
              "Mouvement en petits groupes (binôme ou trinôme) plutôt qu'équipe entière",
              "Pattern of life : varier heures de transit, jamais même point de halte",
              "Positions de tir : changer toutes les 1-3 rafales pour éviter correction",
            ],
          },
        ],
      },
      {
        heading: "Reconnaissance sonore",
        blocks: [
          {
            type: "p",
            text: "L'oreille entraînée distingue les types de munition entrants, la direction et la phase de vol. C'est une compétence construite par l'expérience mais les bases doctrinales s'apprennent.",
          },
          {
            type: "ul",
            items: [
              "Boom + sifflement : coup déjà parti, en vol, arrivée en quelques secondes",
              "Sifflement croissant : trajectoire directe sur vous — à terre immédiatement",
              "Sifflement décroissant : trajectoire s'éloignant — coup passe au-delà",
              "Whump sourd : mortier ou coup à longue distance",
              "Crépitement continu : MLRS / Grad entrant — multiples coups à secondes d'intervalle",
              "Tac-tac rapide : sous-munition cluster en phase terminale",
              "Son « chaud » du projectile : supersonique, peut précéder le boom de départ",
            ],
          },
          {
            type: "warn",
            title: "Limite sensorielle",
            body: "L'oreille ne capte pas toujours l'artillerie à longue portée entrante : le coup arrive en silence relatif pour le receveur. La protection passive (couverture overhead permanente à la halte) bat la reconnaissance sonore.",
          },
        ],
      },
      {
        heading: "Comportement sous le feu",
        blocks: [
          {
            type: "ol",
            items: [
              "À plat ventre immédiatement — même en ouvert vaut mieux que debout",
              "Chercher couverture overhead la plus proche : tranchée, fossé, derrière mur épais, dans bâtiment",
              "Couvrir la tête avec les bras, bouche ouverte (réduit choc de pression sur tympans)",
              "Rester bas jusqu'à fin de rafale + minimum 60 secondes (risque second-salvo / cluster secondaire)",
              "Comm radio brève seulement si nécessaire — drone observateur attend callout",
              "Ré-établir : vérifier équipement, vérifier camarades, repositionner si position compromise",
            ],
          },
        ],
      },
      {
        heading: "Post-impact — les 5 premières minutes",
        blocks: [
          {
            type: "p",
            text: "La période la plus létale n'est souvent pas le premier impact mais les minutes suivantes. Le second salvo, le drone correcteur, l'essaim FPV — tous attendent le mauvais geste.",
          },
          {
            type: "ul",
            items: [
              "Ne pas se regrouper autour d'un blessé en espace ouvert — traiter en dispersion, puis bouger",
              "TCCC : garrot immédiat, packing, voies aériennes — pas d'improvisation",
              "MEDEVAC : callout 9-line uniquement depuis position couverte ou mobile, pas sur le site d'impact",
              "Changer de position dans les 5-10 minutes — la première position est désormais compromise",
              "Vérifier si l'attaque était 'find' (drone) ou 'aveugle' (carte) — la première est suivie de seconde rafale",
              "Éteindre téléphones, réduire émissions — le SIGINT attend la hausse de trafic post-impact",
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
              "Rester debout à regarder le premier impact (curiosité fatale)",
              "Courir secourir sans évaluer si on est encore sous le feu",
              "Se regrouper en cluster compact en tranchée (un coup direct = plusieurs victimes)",
              "Compter sur une couverture visuelle pensant qu'elle suffit — la fragmentation traverse le tissu",
              "Émettre longuement juste après l'attaque (signal qui amplifie le targeting)",
              "Ne jamais quitter la position 'historique' (« on n'a jamais été touchés ici »)",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Phrase récurrente chez les vétérans 2022-2026 : « L'artillerie ne sait pas que tu es là tant que tu ne le lui dis pas. » Le targeting d'artillerie dépend de drone observateur, SIGINT, OSINT, et avant tout de la discipline propre. Les pertes majeures documentées ne viennent pas d'impacts directs sur des tranchées profondes — elles viennent de regroupements, retards à se couvrir, second salvo après un premier qui a 'trouvé' la position, et sous-estimation du temps de vol (des dizaines de secondes suffisent à changer de posture, pas à se déplacer). Règle synthétique : « Quand tu entends le sifflement, tu es déjà soit vivant soit mort selon ce que tu as fait dans les dix minutes précédentes. »",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
