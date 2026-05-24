import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il combattimento notturno è cambiato radicalmente con la diffusione di NVG (Night Vision Goggles), termocamere, illuminatori IR e droni IR. La notte non è più 'territorio amico' del lato meglio equipaggiato: sul fronte ucraino entrambe le parti hanno NVG di livello accettabile e termiche dalla bassa fascia in su. Questo capitolo descrive considerazioni dottrinali, disciplina IR, navigazione e identificazione di amico/nemico in scenario notturno.",
    sections: [
      {
        heading: "Spettri della notte",
        blocks: [
          {
            type: "p",
            text: "La 'notte' moderna non è uno spettro unico ma diversi: visibile residuo (luce ambientale), near-IR (gli NVG), termico (calore corporeo e motori). Una contromisura efficace su uno spettro è spesso visibile su un altro. La comprensione di cosa il nemico vede è la base della disciplina notturna.",
          },
          {
            type: "table",
            headers: ["Spettro", "Strumento che lo vede", "Cosa rivela"],
            rows: [
              ["Visibile residuo", "Occhio nudo, ottica diurna", "Movimenti illuminati da luna, urbano, fuochi"],
              ["Near-IR (intensificazione di luce)", "NVG (PVS-14, PVS-31, GPNVG, ucraini Nera)", "Tutto ciò che riflette luce IR, illuminatori IR visibili"],
              ["Termico", "Termocamere portatili, FLIR su droni", "Calore corporeo, motori, posizioni fresche/calde"],
              ["Fusione (NVG + termico)", "Sistemi avanzati (ENVG-B, alcuni HUR/SSO)", "Combina i vantaggi di entrambi"],
              ["Radar", "Sistemi specializzati", "Movimento al di là della linea di vista"],
            ],
          },
        ],
      },
      {
        heading: "Considerazioni NVG",
        blocks: [
          {
            type: "p",
            text: "Gli NVG amplificano la luce residua ma hanno limiti che vanno conosciuti. Il volontario che li usa senza addestramento adeguato spesso si fida troppo dello strumento e cade in errori prevedibili.",
          },
          {
            type: "ul",
            items: [
              "Campo visivo limitato (40° tipico, 100° solo con quad-tube): scanning continuo necessario",
              "Profondità di campo ridotta: difficile stimare distanze accuratamente",
              "Brillanza puntuale di sorgenti IR — illuminatori, laser, riscaldatori — può accecare temporaneamente",
              "Le ottiche delle armi devono essere compatibili o avere collimatori IR dedicati",
              "Una luce IR rivela la posizione di chi l'accende a qualsiasi NVG nemico nel raggio di vista",
              "Le batterie esauriscono in poche ore di uso continuo — sempre spare",
              "Pioggia, neve, nebbia degradano significativamente l'efficacia",
            ],
          },
          {
            type: "callout",
            title: "ASSUNZIONE FONDAMENTALE",
            body: "Sul fronte ucraino assumere sempre che il nemico abbia NVG di qualità comparabile. La superiorità nottuna come 'asset NATO' è obsoleta in questo conflitto: entrambe le parti operano in notte, entrambe vedono. La disciplina IR è quindi simmetrica, non a senso unico.",
          },
        ],
      },
      {
        heading: "Disciplina IR",
        blocks: [
          {
            type: "p",
            text: "La disciplina IR è la cura con cui si gestisce ogni emissione near-IR per non rivelare la propria posizione. È analoga alla disciplina visuale diurna, ma su uno spettro che 'sembra invisibile' a chi non ha NVG, generando false sicurezze.",
          },
          {
            type: "ul",
            items: [
              "Illuminatori IR (PEQ-15, DBAL, ucraini): brillanti come torce su qualsiasi NVG — usare solo per puntare al colpo, non in modalità continua",
              "Laser IR di puntamento: visibili al nemico con NVG come un fascio chiaro",
              "Strobo IR di identificazione (sotto patch o elmo): identifica come amico ma anche localizza — usare quando necessario, spegnere quando non",
              "Schermi LCD di telefoni e tablet: emettono IR sufficiente a essere visti con NVG di buona qualità",
              "Filtri IR sulle torce: trasformano luce visibile in IR ma non eliminano la firma — restano comunque rivelatori",
            ],
          },
        ],
      },
      {
        heading: "Navigazione notturna",
        blocks: [
          {
            type: "p",
            text: "La navigazione notturna combina strumenti (bussola, GPS, mappa) e tecnica (terrain association, dead reckoning). Sul fronte ucraino il GPS è spesso jammato; la capacità di navigare senza GPS è una skill operativa critica.",
          },
          {
            type: "ul",
            items: [
              "Bussola: sempre indispensabile, indipendente da EW",
              "Mappa cartacea: backup di GPS sempre, in faraday se digitale",
              "Pace count: contare i passi per stimare distanza percorsa",
              "Terrain association: riconoscere punti chiave (ruscelli, alture, edifici)",
              "GPS tattico: acceso in finestre brevi, spento il resto del tempo",
              "Riferimenti celesti (luna, stelle): direzione generale in spazio aperto",
              "Squadra di navigazione: un effettivo dedicato alla navigazione, libero da altre responsabilità",
            ],
          },
        ],
      },
      {
        heading: "Identificazione amico/nemico (IFF)",
        blocks: [
          {
            type: "p",
            text: "L'identificazione di amico/nemico in notte è uno dei rischi maggiori. Il fratricidio notturno è documentato in proporzione significativa sul fronte ucraino e altrove. Le procedure di identificazione devono essere praticate fino all'automatismo.",
          },
          {
            type: "ul",
            items: [
              "IR strobo / patch IR: identificazione visibile a NVG amico, ma anche al nemico",
              "Patch riflettenti IR sulla parte posteriore: identificano da dietro a unità che seguono",
              "Challenge/password notturni: validi per la singola operazione, mai per più giorni",
              "Riferimenti vocali pre-concordati: parola particolare se richiesto da postazione amica",
              "Direzione di movimento: muoversi in direzioni concordate con le unità adiacenti",
              "Comms radio: annunciare movimenti prima — 'BRAVO TWO MOVING TO GRID X'",
              "Discrimination by silhouette: sotto NVG la sagoma e l'equipaggiamento sono spesso indistinguibili tra le parti — affidarsi a IFF positivi",
            ],
          },
          {
            type: "warn",
            title: "FRATRICIDIO NOTTURNO",
            body: "Il fratricidio notturno avviene tipicamente per: assenza di IFF positivo, percorsi non concordati, ritorno di pattuglia senza segnale, sentinella che spara per riflesso. La sentinella amica sotto NVG vede una sagoma a 50 metri; se non ha challenge/password e segnale concordato, sparare è quasi automatico. Le procedure IFF non sono burocrazia — sono ciò che impedisce alle proprie sentinelle di uccidere il proprio team.",
          },
        ],
      },
      {
        heading: "Movimento notturno",
        blocks: [
          {
            type: "p",
            text: "Il movimento notturno è più lento, più rumoroso, più disorientante del movimento diurno. Le regole del movimento tattico restano valide (dispersione, copertura, bounding overwatch) ma adattate alla riduzione del campo visivo e all'aumento dell'errore.",
          },
          {
            type: "ul",
            items: [
              "Velocità ridotta: la fretta in notte è errore. Pianificare distanze in proporzione 1:2 rispetto al giorno",
              "Distanze tra effettivi ridotte (visibilità ridotta), ma non al punto da concentrare la firma termica",
              "Pause più lunghe per orientamento: ogni 100-200 metri verifica di posizione",
              "Riconoscimento di terreno per tatto: superfici, pendenze, vegetazione",
              "Voce in sussurro o segnali tattili: la voce in notte si propaga più lontano per assenza di rumore ambientale",
              "Equipaggiamento controllato per silenzio: il rumore notturno tradisce molto più che di giorno",
            ],
          },
        ],
      },
      {
        heading: "Termico — la differenza chiave",
        blocks: [
          {
            type: "p",
            text: "La termocamera vede ciò che NVG non vedono: la firma di calore. Sul fronte ucraino le termiche FPV (anche di bassa fascia) hanno alterato la dinamica notturna. Coprirsi dagli NVG non basta più.",
          },
          {
            type: "ul",
            items: [
              "Il corpo umano è sempre più caldo dell'ambiente in notte — visibile da centinaia di metri",
              "I motori restano caldi ore dopo lo spegnimento — i veicoli devono essere coperti termicamente o avvicinare in copertura naturale",
              "Le tracce a terra (footprint) sono visibili in termico per minuti dopo il passaggio",
              "Le superfici scaldate dal sole emettono firma anche dopo il tramonto",
              "I mantelli antitermici (vedi capitolo Camouflage) riducono ma non annullano",
              "Il vetro e la plastica spessa attenuano la termica — finestre chiuse riducono la firma interna",
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
              "Fidarsi di NVG come 'visione totale' — il campo è limitato, occhi periferici nudi",
              "Accendere illuminatori IR continuamente, rivelandosi a qualsiasi NVG nemico",
              "Trascurare il termico: la 'camuffatura IR' non protegge dal termico",
              "Affidarsi a GPS in zona EW: bussola e mappa cartacea sempre",
              "Ignorare le procedure IFF al rientro pattuglia",
              "Voce alta in notte 'perché tanto siamo lontani dal nemico' — la voce viaggia di più",
              "Sigarette o fuoco in notte — visibili a chilometri con NVG",
              "Schermi accesi (telefono, tablet) senza copertura IR",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte ucraino la notte è il tempo di movimento per molte operazioni — rotazioni, rifornimenti, evacuazioni — ma non è più la sicurezza di una volta. NVG di entrambe le parti, termiche FPV anche notturne, EW costante. La superiorità notturna NATO degli anni 2000 è obsoleta in questo contesto: vince chi ha disciplina IR, integrazione NVG-termico, e procedure IFF rigide. Il volontario internazionale che entra in operazione notturna lo fa addestrato su tutti e tre gli spettri, non solo sull'NVG che ha portato da casa.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Night combat has changed radically with the diffusion of NVG (Night Vision Goggles), thermal cameras, IR illuminators and IR drones. The night is no longer 'home turf' of the better-equipped side: on the Ukrainian front both sides have NVGs of acceptable quality and thermals from the low end up. This chapter describes doctrinal considerations, IR discipline, navigation and friend/foe identification in night scenarios.",
    sections: [
      {
        heading: "Spectra of the night",
        blocks: [
          {
            type: "p",
            text: "The modern 'night' is not a single spectrum but several: residual visible (ambient light), near-IR (NVGs), thermal (body and engine heat). A countermeasure effective on one spectrum is often visible on another. Understanding what the enemy sees is the foundation of night discipline.",
          },
          {
            type: "table",
            headers: ["Spectrum", "Tool that sees it", "What it reveals"],
            rows: [
              ["Residual visible", "Naked eye, day optics", "Movements lit by moon, urban, fires"],
              ["Near-IR (light intensification)", "NVG (PVS-14, PVS-31, GPNVG, Ukrainian Nera)", "Anything reflecting IR light, IR illuminators visible"],
              ["Thermal", "Handheld thermals, FLIR on drones", "Body heat, engines, cool/warm positions"],
              ["Fusion (NVG + thermal)", "Advanced systems (ENVG-B, some HUR/SSO)", "Combines both advantages"],
              ["Radar", "Specialised systems", "Movement beyond line of sight"],
            ],
          },
        ],
      },
      {
        heading: "NVG considerations",
        blocks: [
          {
            type: "p",
            text: "NVGs amplify residual light but have limits that must be known. The volunteer using them without adequate training often over-trusts the device and falls into predictable errors.",
          },
          {
            type: "ul",
            items: [
              "Limited field of view (typical 40°, only 100° with quad-tube): continuous scanning required",
              "Reduced depth of field: distances hard to estimate accurately",
              "Spot brightness from IR sources — illuminators, lasers, heaters — can temporarily blind",
              "Weapon optics must be compatible or have dedicated IR collimators",
              "An IR light reveals the user's position to any enemy NVG within line of sight",
              "Batteries deplete in hours of continuous use — always carry spares",
              "Rain, snow, fog significantly degrade effectiveness",
            ],
          },
          {
            type: "callout",
            title: "FOUNDATIONAL ASSUMPTION",
            body: "On the Ukrainian front, always assume the enemy has comparable NVGs. The night superiority as a 'NATO asset' is obsolete in this conflict: both sides operate at night, both sides see. IR discipline is therefore symmetric, not one-way.",
          },
        ],
      },
      {
        heading: "IR discipline",
        blocks: [
          {
            type: "p",
            text: "IR discipline is the care with which every near-IR emission is managed not to reveal own position. It is analogous to daytime visual discipline but on a spectrum that 'seems invisible' to those without NVGs, generating false confidence.",
          },
          {
            type: "ul",
            items: [
              "IR illuminators (PEQ-15, DBAL, Ukrainian): bright as torches on any NVG — use only for aim-on-shot, not continuously",
              "IR aiming lasers: visible to enemies with NVGs as a bright beam",
              "IR ID strobes (under patch or helmet): identify as friendly but also localise — use as needed, off when not",
              "LCD screens of phones and tablets: emit enough IR to be seen on good NVGs",
              "IR filters on torches: turn visible light into IR but do not eliminate signature — still revealing",
            ],
          },
        ],
      },
      {
        heading: "Night navigation",
        blocks: [
          {
            type: "p",
            text: "Night navigation combines tools (compass, GPS, map) and technique (terrain association, dead reckoning). On the Ukrainian front GPS is often jammed; the ability to navigate without GPS is a critical operational skill.",
          },
          {
            type: "ul",
            items: [
              "Compass: always essential, independent of EW",
              "Paper map: always GPS backup, in faraday if digital",
              "Pace count: count paces to estimate distance covered",
              "Terrain association: recognise key features (streams, hills, buildings)",
              "Tactical GPS: on in short windows, off the rest of the time",
              "Celestial references (moon, stars): general direction in open space",
              "Dedicated navigator: one soldier focused on navigation, free from other duties",
            ],
          },
        ],
      },
      {
        heading: "Friend/foe identification (IFF)",
        blocks: [
          {
            type: "p",
            text: "Friend/foe identification at night is one of the highest risks. Night fratricide is documented in significant proportion on the Ukrainian front and elsewhere. Identification procedures must be rehearsed to automaticity.",
          },
          {
            type: "ul",
            items: [
              "IR strobe / IR patch: identifies to friendly NVG but also to the enemy",
              "Reflective IR patches on the back: identify to following units from behind",
              "Night challenge/password: valid for the single operation, never for multiple days",
              "Pre-agreed vocal references: a specific word if required by friendly post",
              "Direction of movement: move in directions agreed with adjacent units",
              "Radio comms: announce movements ahead — 'BRAVO TWO MOVING TO GRID X'",
              "Silhouette discrimination: under NVG, silhouette and kit are often indistinguishable between sides — rely on positive IFF",
            ],
          },
          {
            type: "warn",
            title: "NIGHT FRATRICIDE",
            body: "Night fratricide typically happens through: absence of positive IFF, unagreed routes, patrol return without signal, sentry firing on reflex. The friendly sentry under NVG sees a silhouette at 50 metres; without challenge/password and agreed signal, firing is almost automatic. IFF procedures are not bureaucracy — they are what prevents own sentries from killing own team.",
          },
        ],
      },
      {
        heading: "Night movement",
        blocks: [
          {
            type: "p",
            text: "Night movement is slower, noisier, more disorienting than daytime movement. Tactical movement rules remain valid (dispersion, cover, bounding overwatch) but adapted to reduced FoV and increased error.",
          },
          {
            type: "ul",
            items: [
              "Reduced pace: rushing at night is error. Plan distances at 1:2 ratio vs day",
              "Reduced inter-soldier spacing (lower visibility), but not enough to concentrate thermal signature",
              "Longer halts for orientation: every 100-200 metres verify position",
              "Tactile terrain recognition: surfaces, slopes, vegetation",
              "Whispered voice or tactile signals: voice carries further at night due to lack of ambient noise",
              "Kit checked for silence: night noise betrays much more than during the day",
            ],
          },
        ],
      },
      {
        heading: "Thermal — the key difference",
        blocks: [
          {
            type: "p",
            text: "Thermal cameras see what NVGs do not: heat signature. On the Ukrainian front, FPV thermals (even low-end) have changed night dynamics. Cover from NVGs is no longer enough.",
          },
          {
            type: "ul",
            items: [
              "The human body is always warmer than the night environment — visible from hundreds of metres",
              "Engines remain warm hours after shutdown — vehicles must be thermally covered or approached in natural cover",
              "Footprints on the ground are visible on thermal for minutes after passage",
              "Surfaces heated by the sun emit signature even after sunset",
              "Anti-thermal cloaks (see Camouflage chapter) reduce but do not eliminate",
              "Glass and thick plastic attenuate thermal — closed windows reduce indoor signature",
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
              "Trusting NVG as 'full vision' — FoV is limited, peripheral eyes are naked",
              "Switching IR illuminators on continuously, revealing to any enemy NVG",
              "Neglecting thermal: 'IR camouflage' does not protect against thermal",
              "Trusting GPS in EW zones: always compass and paper map",
              "Skipping IFF procedures at patrol return",
              "Loud voice at night 'because we are far from the enemy' — voice travels further",
              "Cigarettes or fire at night — visible kilometres away to NVGs",
              "Screens on (phone, tablet) without IR cover",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Ukrainian front night is movement time for many operations — rotations, resupply, evacuation — but it is no longer the safety it once was. NVGs on both sides, FPV thermals even at night, constant EW. The NATO night superiority of the 2000s is obsolete in this context: who wins is who has IR discipline, NVG-thermal integration, and rigid IFF procedures. The international volunteer entering a night operation does so trained on all three spectra, not only on the NVG they brought from home.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O combate noturno mudou radicalmente com a difusão de NVG (Night Vision Goggles), câmeras térmicas, iluminadores IR e drones IR. A noite não é mais 'terreno amigo' do lado mais bem equipado: no front ucraniano ambos os lados têm NVGs de qualidade aceitável e térmicas da faixa baixa para cima. Este capítulo descreve considerações doutrinárias, disciplina IR, navegação e identificação de amigo/inimigo em cenário noturno.",
    sections: [
      {
        heading: "Espectros da noite",
        blocks: [
          {
            type: "p",
            text: "A 'noite' moderna não é um espectro único mas vários: visível residual (luz ambiente), near-IR (NVGs), térmico (calor corporal e de motor). Uma contramedida eficaz em um espectro é frequentemente visível em outro. Entender o que o inimigo vê é a base da disciplina noturna.",
          },
          {
            type: "table",
            headers: ["Espectro", "Ferramenta que vê", "O que revela"],
            rows: [
              ["Visível residual", "Olho nu, ótica diurna", "Movimentos iluminados pela lua, urbano, fogo"],
              ["Near-IR (intensificação de luz)", "NVG (PVS-14, PVS-31, GPNVG, Nera ucraniana)", "Tudo que reflete IR, iluminadores IR visíveis"],
              ["Térmico", "Térmicas portáteis, FLIR em drones", "Calor corporal, motores, posições frias/quentes"],
              ["Fusion (NVG + térmico)", "Sistemas avançados (ENVG-B, alguns HUR/SSO)", "Combina vantagens dos dois"],
              ["Radar", "Sistemas especializados", "Movimento além da linha de visada"],
            ],
          },
        ],
      },
      {
        heading: "Considerações sobre NVG",
        blocks: [
          {
            type: "p",
            text: "NVGs amplificam a luz residual mas têm limites a conhecer. O voluntário que os usa sem treinamento adequado frequentemente confia demais no aparelho e cai em erros previsíveis.",
          },
          {
            type: "ul",
            items: [
              "Campo visual limitado (40° típico, 100° só com quad-tube): scanning contínuo necessário",
              "Profundidade reduzida: difícil estimar distância com precisão",
              "Brilho pontual de fontes IR — iluminadores, lasers, aquecedores — pode cegar momentaneamente",
              "Óticas de armas devem ser compatíveis ou ter colimadores IR dedicados",
              "Uma luz IR revela a posição de quem a acende para qualquer NVG inimigo em linha de visada",
              "Baterias esgotam em poucas horas de uso contínuo — sempre spares",
              "Chuva, neve, neblina degradam a eficácia significativamente",
            ],
          },
          {
            type: "callout",
            title: "ASSUNÇÃO FUNDAMENTAL",
            body: "No front ucraniano, sempre assumir que o inimigo tem NVGs de qualidade comparável. A superioridade noturna como 'asset OTAN' é obsoleta neste conflito: ambos os lados operam à noite, ambos veem. A disciplina IR é, portanto, simétrica, não unidirecional.",
          },
        ],
      },
      {
        heading: "Disciplina IR",
        blocks: [
          {
            type: "p",
            text: "A disciplina IR é o cuidado com que cada emissão near-IR é gerenciada para não revelar a própria posição. É análoga à disciplina visual diurna, mas em espectro que 'parece invisível' para quem não tem NVG, gerando falsa confiança.",
          },
          {
            type: "ul",
            items: [
              "Iluminadores IR (PEQ-15, DBAL, ucranianos): brilhantes como tochas em qualquer NVG — usar só para apontar no tiro, não continuamente",
              "Lasers IR de pontaria: visíveis ao inimigo com NVG como feixe claro",
              "Strobos IR de identificação (sob patch ou capacete): identificam como amigo mas também localizam — usar quando necessário, desligar quando não",
              "Telas LCD de celulares e tablets: emitem IR suficiente para serem vistas com NVGs bons",
              "Filtros IR em lanternas: transformam luz visível em IR mas não eliminam a assinatura — continuam reveladoras",
            ],
          },
        ],
      },
      {
        heading: "Navegação noturna",
        blocks: [
          {
            type: "p",
            text: "A navegação noturna combina instrumentos (bússola, GPS, mapa) e técnica (terrain association, dead reckoning). No front ucraniano o GPS é frequentemente jammado; a capacidade de navegar sem GPS é skill operacional crítica.",
          },
          {
            type: "ul",
            items: [
              "Bússola: sempre indispensável, independente de EW",
              "Mapa em papel: backup de GPS sempre, em faraday se digital",
              "Pace count: contar passos para estimar distância percorrida",
              "Terrain association: reconhecer pontos-chave (riachos, alturas, prédios)",
              "GPS tático: ligado em janelas curtas, desligado o resto do tempo",
              "Referências celestes (lua, estrelas): direção geral em espaço aberto",
              "Navegador dedicado: um militar focado em navegar, livre de outras tarefas",
            ],
          },
        ],
      },
      {
        heading: "Identificação amigo/inimigo (IFF)",
        blocks: [
          {
            type: "p",
            text: "A identificação amigo/inimigo à noite é um dos maiores riscos. O fratricídio noturno é documentado em proporção significativa no front ucraniano e em outros lugares. Procedimentos de identificação devem ser praticados até a automaticidade.",
          },
          {
            type: "ul",
            items: [
              "Strobo IR / patch IR: identificação visível ao NVG amigo, mas também ao inimigo",
              "Patches reflexivos IR atrás: identificam por trás para unidades que seguem",
              "Challenge/password noturnos: válidos para a operação única, nunca por vários dias",
              "Referências vocais pré-combinadas: palavra específica se exigida por posto amigo",
              "Direção de movimento: mover-se em direções acordadas com unidades adjacentes",
              "Comms de rádio: anunciar movimentos antes — 'BRAVO TWO MOVING TO GRID X'",
              "Discriminação por silhueta: sob NVG silhueta e kit são frequentemente indistinguíveis entre lados — confiar em IFF positivo",
            ],
          },
          {
            type: "warn",
            title: "FRATRICÍDIO NOTURNO",
            body: "O fratricídio noturno ocorre tipicamente por: ausência de IFF positivo, rotas não acordadas, retorno de patrulha sem sinal, sentinela atirando por reflexo. A sentinela amiga sob NVG vê uma silhueta a 50 metros; sem challenge/password e sinal acordado, atirar é quase automático. Procedimentos IFF não são burocracia — são o que impede as próprias sentinelas de matarem o próprio time.",
          },
        ],
      },
      {
        heading: "Movimento noturno",
        blocks: [
          {
            type: "p",
            text: "O movimento noturno é mais lento, mais ruidoso, mais desorientador que o diurno. As regras de movimento tático permanecem válidas (dispersão, cobertura, bounding overwatch) mas adaptadas ao campo visual reduzido e ao erro aumentado.",
          },
          {
            type: "ul",
            items: [
              "Velocidade reduzida: pressa à noite é erro. Planejar distâncias em proporção 1:2 vs dia",
              "Distâncias entre militares reduzidas (visibilidade menor), mas não a ponto de concentrar assinatura térmica",
              "Paradas mais longas para orientação: cada 100-200 metros verificar posição",
              "Reconhecimento de terreno por tato: superfícies, declives, vegetação",
              "Voz em sussurro ou sinais táteis: a voz à noite se propaga mais por ausência de ruído ambiente",
              "Equipamento checado para silêncio: ruído noturno trai muito mais que de dia",
            ],
          },
        ],
      },
      {
        heading: "Térmico — a diferença chave",
        blocks: [
          {
            type: "p",
            text: "A câmera térmica vê o que NVGs não veem: a assinatura de calor. No front ucraniano térmicas FPV (mesmo de baixa faixa) alteraram a dinâmica noturna. Cobrir-se de NVG não basta mais.",
          },
          {
            type: "ul",
            items: [
              "O corpo humano é sempre mais quente que o ambiente noturno — visível de centenas de metros",
              "Motores ficam quentes horas após desligamento — veículos devem ser cobertos termicamente ou aproximados em cobertura natural",
              "Pegadas no chão ficam visíveis em térmica por minutos após a passagem",
              "Superfícies aquecidas pelo sol emitem assinatura mesmo após o pôr do sol",
              "Capas antitérmicas (ver capítulo Camuflagem) reduzem mas não anulam",
              "Vidro e plástico grosso atenuam a térmica — janelas fechadas reduzem assinatura interna",
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
              "Confiar no NVG como 'visão total' — campo é limitado, olhos periféricos a nu",
              "Ligar iluminadores IR continuamente, revelando a qualquer NVG inimigo",
              "Negligenciar o térmico: 'camuflagem IR' não protege de térmica",
              "Confiar em GPS em zona EW: bússola e mapa em papel sempre",
              "Pular procedimentos IFF no retorno de patrulha",
              "Voz alta à noite 'porque estamos longe do inimigo' — voz viaja mais",
              "Cigarro ou fogo à noite — visíveis a quilômetros com NVG",
              "Telas ligadas (celular, tablet) sem cobertura IR",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front ucraniano a noite é tempo de movimento para muitas operações — rotações, reabastecimento, evacuação — mas não é mais a segurança que era. NVGs em ambos os lados, térmicas FPV mesmo à noite, EW constante. A superioridade noturna OTAN dos anos 2000 é obsoleta neste contexto: vence quem tem disciplina IR, integração NVG-térmico e procedimentos IFF rígidos. O voluntário internacional que entra em operação noturna o faz treinado em todos os três espectros, não só no NVG que trouxe de casa.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le combat nocturne a radicalement changé avec la diffusion des NVG (Night Vision Goggles), des caméras thermiques, des illuminateurs IR et des drones IR. La nuit n'est plus le « terrain ami » du côté le mieux équipé : sur le front ukrainien les deux camps ont des NVG de qualité acceptable et des thermiques de bas de gamme et plus. Ce chapitre décrit des considérations doctrinales, la discipline IR, la navigation et l'identification ami/ennemi en scénario nocturne.",
    sections: [
      {
        heading: "Spectres de la nuit",
        blocks: [
          {
            type: "p",
            text: "La « nuit » moderne n'est pas un spectre unique mais plusieurs : visible résiduel (lumière ambiante), near-IR (NVG), thermique (chaleur corporelle et moteurs). Une contremesure efficace sur un spectre est souvent visible sur un autre. Comprendre ce que voit l'ennemi est la base de la discipline nocturne.",
          },
          {
            type: "table",
            headers: ["Spectre", "Outil qui le voit", "Ce qu'il révèle"],
            rows: [
              ["Visible résiduel", "Œil nu, optique diurne", "Mouvements éclairés par lune, urbain, feux"],
              ["Near-IR (intensification de lumière)", "NVG (PVS-14, PVS-31, GPNVG, Nera ukrainienne)", "Tout ce qui réfléchit l'IR, illuminateurs IR visibles"],
              ["Thermique", "Thermiques portatives, FLIR sur drones", "Chaleur corporelle, moteurs, positions chaudes/froides"],
              ["Fusion (NVG + thermique)", "Systèmes avancés (ENVG-B, certains HUR/SSO)", "Combine les avantages des deux"],
              ["Radar", "Systèmes spécialisés", "Mouvement au-delà de la ligne de vue"],
            ],
          },
        ],
      },
      {
        heading: "Considérations NVG",
        blocks: [
          {
            type: "p",
            text: "Les NVG amplifient la lumière résiduelle mais ont des limites qu'il faut connaître. Le volontaire qui les utilise sans formation adéquate fait trop confiance à l'appareil et tombe dans des erreurs prévisibles.",
          },
          {
            type: "ul",
            items: [
              "Champ de vision limité (40° typique, 100° seulement en quad-tube) : scanning continu nécessaire",
              "Profondeur de champ réduite : distances difficiles à estimer avec précision",
              "Éclat ponctuel des sources IR — illuminateurs, lasers, chauffages — peut éblouir temporairement",
              "Les optiques d'armes doivent être compatibles ou avoir des collimateurs IR dédiés",
              "Une lumière IR révèle la position de celui qui l'allume à tout NVG ennemi en ligne de vue",
              "Les batteries se vident en quelques heures d'usage continu — toujours des spares",
              "Pluie, neige, brouillard dégradent significativement l'efficacité",
            ],
          },
          {
            type: "callout",
            title: "HYPOTHÈSE FONDAMENTALE",
            body: "Sur le front ukrainien, toujours supposer que l'ennemi a des NVG de qualité comparable. La supériorité nocturne en tant qu'« asset OTAN » est obsolète dans ce conflit : les deux camps opèrent la nuit, les deux voient. La discipline IR est donc symétrique, pas à sens unique.",
          },
        ],
      },
      {
        heading: "Discipline IR",
        blocks: [
          {
            type: "p",
            text: "La discipline IR est le soin avec lequel chaque émission near-IR est gérée pour ne pas révéler sa propre position. Elle est analogue à la discipline visuelle diurne, mais sur un spectre qui « semble invisible » à ceux sans NVG, générant une fausse confiance.",
          },
          {
            type: "ul",
            items: [
              "Illuminateurs IR (PEQ-15, DBAL, ukrainiens) : brillants comme des torches sur tout NVG — à utiliser seulement pour pointer au coup, pas en continu",
              "Lasers IR de visée : visibles à l'ennemi avec NVG comme un faisceau clair",
              "Strobos IR d'identification (sous patch ou casque) : identifient comme ami mais localisent aussi — utiliser au besoin, éteindre sinon",
              "Écrans LCD de téléphones et tablettes : émettent assez d'IR pour être vus avec de bons NVG",
              "Filtres IR sur torches : transforment la lumière visible en IR mais n'éliminent pas la signature — restent révélateurs",
            ],
          },
        ],
      },
      {
        heading: "Navigation nocturne",
        blocks: [
          {
            type: "p",
            text: "La navigation nocturne combine outils (boussole, GPS, carte) et technique (terrain association, dead reckoning). Sur le front ukrainien le GPS est souvent brouillé ; la capacité à naviguer sans GPS est une compétence opérationnelle critique.",
          },
          {
            type: "ul",
            items: [
              "Boussole : toujours indispensable, indépendante de la GE",
              "Carte papier : toujours backup du GPS, en faraday si numérique",
              "Pace count : compter les pas pour estimer la distance parcourue",
              "Terrain association : reconnaître points clés (ruisseaux, hauteurs, bâtiments)",
              "GPS tactique : allumé en fenêtres courtes, éteint le reste du temps",
              "Références célestes (lune, étoiles) : direction générale en espace ouvert",
              "Navigateur dédié : un soldat consacré à la navigation, libéré d'autres charges",
            ],
          },
        ],
      },
      {
        heading: "Identification ami/ennemi (IFF)",
        blocks: [
          {
            type: "p",
            text: "L'identification ami/ennemi de nuit est l'un des risques majeurs. Le fratricide nocturne est documenté en proportion significative sur le front ukrainien et ailleurs. Les procédures d'identification doivent être répétées jusqu'à l'automatisme.",
          },
          {
            type: "ul",
            items: [
              "Strobo IR / patch IR : identification visible au NVG ami mais aussi à l'ennemi",
              "Patches réfléchissants IR à l'arrière : identifient à l'arrière aux unités qui suivent",
              "Challenge/password nocturnes : valables pour l'opération seule, jamais sur plusieurs jours",
              "Références vocales pré-convenues : mot particulier si demandé par un poste ami",
              "Direction de mouvement : se déplacer dans des directions convenues avec les unités adjacentes",
              "Comms radio : annoncer les mouvements avant — « BRAVO TWO MOVING TO GRID X »",
              "Discrimination par silhouette : sous NVG la silhouette et l'équipement sont souvent indistinguables entre camps — se fier à l'IFF positif",
            ],
          },
          {
            type: "warn",
            title: "FRATRICIDE NOCTURNE",
            body: "Le fratricide nocturne survient typiquement par : absence d'IFF positif, itinéraires non convenus, retour de patrouille sans signal, sentinelle tirant par réflexe. La sentinelle amie sous NVG voit une silhouette à 50 mètres ; sans challenge/password et signal convenu, tirer est presque automatique. Les procédures IFF ne sont pas de la bureaucratie — elles empêchent vos propres sentinelles de tuer votre propre équipe.",
          },
        ],
      },
      {
        heading: "Mouvement nocturne",
        blocks: [
          {
            type: "p",
            text: "Le mouvement nocturne est plus lent, plus bruyant, plus désorientant que le mouvement diurne. Les règles du mouvement tactique restent valables (dispersion, couvert, bounding overwatch) mais adaptées à la réduction du champ visuel et à l'augmentation de l'erreur.",
          },
          {
            type: "ul",
            items: [
              "Vitesse réduite : la hâte la nuit est une erreur. Planifier les distances en rapport 1:2 vs jour",
              "Intervalles entre soldats réduits (visibilité moindre), sans concentrer la signature thermique",
              "Haltes plus longues pour orientation : tous les 100-200 mètres vérifier la position",
              "Reconnaissance tactile du terrain : surfaces, pentes, végétation",
              "Voix en chuchotement ou signaux tactiles : la voix porte plus la nuit par absence de bruit ambiant",
              "Équipement contrôlé pour le silence : le bruit nocturne trahit beaucoup plus que de jour",
            ],
          },
        ],
      },
      {
        heading: "Thermique — la différence clé",
        blocks: [
          {
            type: "p",
            text: "La caméra thermique voit ce que les NVG ne voient pas : la signature thermique. Sur le front ukrainien les thermiques FPV (même bas de gamme) ont modifié la dynamique nocturne. Se couvrir des NVG ne suffit plus.",
          },
          {
            type: "ul",
            items: [
              "Le corps humain est toujours plus chaud que l'environnement nocturne — visible à des centaines de mètres",
              "Les moteurs restent chauds des heures après extinction — les véhicules doivent être couverts thermiquement ou abordés sous couvert naturel",
              "Les empreintes au sol sont visibles en thermique pendant des minutes après le passage",
              "Les surfaces chauffées par le soleil émettent une signature même après le coucher",
              "Les capes antithermiques (voir chapitre Camouflage) réduisent mais n'annulent pas",
              "Le verre et le plastique épais atténuent la thermique — fenêtres fermées réduisent la signature intérieure",
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
              "Faire confiance au NVG comme « vision totale » — champ limité, yeux périphériques nus",
              "Allumer les illuminateurs IR en continu, en se révélant à tout NVG ennemi",
              "Négliger la thermique : le « camouflage IR » ne protège pas de la thermique",
              "Faire confiance au GPS en zone GE : boussole et carte papier toujours",
              "Sauter les procédures IFF au retour de patrouille",
              "Voix forte la nuit « parce qu'on est loin de l'ennemi » — la voix porte plus",
              "Cigarettes ou feu la nuit — visibles à des kilomètres avec NVG",
              "Écrans allumés (téléphone, tablette) sans couvert IR",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front ukrainien la nuit est le temps de mouvement pour beaucoup d'opérations — rotations, ravitaillements, évacuations — mais elle n'est plus la sécurité d'autrefois. NVG des deux côtés, thermiques FPV même de nuit, GE constante. La supériorité nocturne OTAN des années 2000 est obsolète dans ce contexte : gagne qui a la discipline IR, l'intégration NVG-thermique et des procédures IFF rigides. Le volontaire international qui entre en opération nocturne le fait formé sur les trois spectres, pas seulement sur le NVG qu'il a apporté de chez lui.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
