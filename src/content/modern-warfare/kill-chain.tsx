import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La 'kill chain' è il framework dottrinale che descrive come un bersaglio viene scoperto, fissato, colpito e valutato. Comprenderla è essenziale per la difesa: significa sapere come si è osservati, e dove si può spezzare il ciclo del nemico. Questo capitolo è interamente difensivo — descrive il ciclo per evitarlo, NON per impiegarlo.",
    sections: [
      {
        heading: "Le fasi della kill chain (F2T2EA)",
        blocks: [
          {
            type: "p",
            text: "L'acronimo NATO F2T2EA descrive il ciclo standard: Find, Fix, Track, Target, Engage, Assess. Sul fronte ucraino il ciclo si compie in tempi che variano da minuti a secondi grazie all'integrazione drone-artiglieria-EW.",
          },
          {
            type: "table",
            headers: ["Fase", "Significato", "Mezzo tipico"],
            rows: [
              ["Find", "Scoprire l'esistenza del bersaglio", "Drone ISR, SIGINT, OSINT, osservatore terrestre"],
              ["Fix", "Localizzare con precisione", "Triangolazione DF, drone con telemetria, intersezione di osservazione"],
              ["Track", "Mantenere consapevolezza del movimento", "Drone in volo continuo, monitoraggio SIGINT"],
              ["Target", "Decidere ingaggio, scegliere mezzo", "C2 (Command & Control), valutazione effetto / risorse"],
              ["Engage", "Colpire", "Artiglieria, FPV, missile, loitering munition"],
              ["Assess", "Valutare effetto, ripetere se necessario", "Drone post-impatto, BDA (Battle Damage Assessment)"],
            ],
          },
        ],
      },
      {
        heading: "La compressione del ciclo sul fronte ucraino",
        blocks: [
          {
            type: "p",
            text: "La caratteristica distintiva del fronte 2022-2026 è la compressione temporale del ciclo. Quello che richiedeva ore o giorni nei conflitti precedenti, oggi può chiudersi in pochi minuti.",
          },
          {
            type: "ul",
            items: [
              "Find: drone Mavic ISR sopra la zona, costo $5,000, raggio 10+ km",
              "Fix: pilota drone passa coordinata MGRS a unità di tiro via Kropyva / Delta",
              "Track: drone resta in volo, conferma posizione, fornisce correzione",
              "Target: decisione di tiro entro 1-3 minuti grazie a kill chain digitale",
              "Engage: artiglieria 152 mm spara entro 1-2 minuti; FPV in 5-10 minuti se disponibile",
              "Assess: drone osserva impatto, decide secondo salvo se necessario",
            ],
          },
          {
            type: "callout",
            title: "Tempo medio osservato",
            body: "Sul fronte attivo, il ciclo Find-to-Engage misurato in OSINT su molti incidenti pubblicamente documentati è di 2-15 minuti dalla scoperta al primo impatto. È la metrica chiave dell'epoca.",
          },
        ],
      },
      {
        heading: "Il ciclo drone-artiglieria",
        blocks: [
          {
            type: "p",
            text: "L'integrazione drone-artiglieria è il motore tecnico della kill chain moderna. Comprenderla come bersaglio è la chiave per spezzarla difensivamente.",
          },
          {
            type: "ul",
            items: [
              "Drone ISR (Mavic, Autel, Orlan-10): osserva, identifica, geolocalizza",
              "Datalink: invia coordinate a centro di tiro via radio cifrato o app militare",
              "Sistema di gestione (Kropyva UA, sistemi russi equivalenti): calcola dati di tiro",
              "Artiglieria: spara entro il tempo previsto da brigata",
              "Correttore: drone resta in volo, comunica correzioni round per round",
              "Loop continuo: drone resta sopra la zona finché bersaglio neutralizzato",
            ],
          },
          {
            type: "warn",
            title: "Cosa significa per chi è sotto",
            body: "Se sei stato 'visto' da un drone, hai 2-15 minuti per uscire dal centro letale (raggio 50-100 m). Se non ti muovi, l'impatto arriva. Se ti muovi prevedibilmente, il drone aggiorna le coordinate.",
          },
        ],
      },
      {
        heading: "Punti di rottura difensivi della kill chain",
        blocks: [
          {
            type: "p",
            text: "Difensivamente, ogni fase della kill chain è un'opportunità per essere mancati. Non bisogna spezzare tutta la catena — basta rompere un anello.",
          },
          {
            type: "table",
            headers: ["Fase nemica", "Rottura difensiva amica"],
            rows: [
              ["Find", "OPSEC: niente smartphone, niente foto, dispersione, no pattern of life ricorrente"],
              ["Fix", "Mobilità: cambiare posizione frequente, camo termico, copertura overhead"],
              ["Track", "EW amica anti-drone, copertura da osservazione, hide multiple"],
              ["Target", "Saturare il C2 nemico con multiple piccole presenze invece di un cluster prioritario"],
              ["Engage", "Cover overhead, dispersione fisica, anti-drone netting su veicoli"],
              ["Assess", "Ridurre emissioni post-impatto, mai confermare BDA in chiaro, muoversi via"],
            ],
          },
        ],
      },
      {
        heading: "Kill chain inversa: come spezzare la propria visibilità",
        blocks: [
          {
            type: "ol",
            items: [
              "Pre-Find: non essere mai un bersaglio scopribile — disciplina OPSEC, dispersione, camo multi-dominio",
              "Se Find è avvenuto: rompere Fix con movimento immediato, copertura, deception",
              "Se Track è in corso: trovare cover overhead, ridurre emissioni, attendere finestra (meteo, EW amica)",
              "Se Target è in elaborazione: spostarsi via dalla posizione conosciuta entro 5-10 minuti",
              "Se Engage è imminente: cercare protezione overhead, dispersione, posizione di tiro alternativa",
              "Post-Engage: muoversi, ridurre emissioni, non confermare nulla, rivalutare quadro",
            ],
          },
        ],
      },
      {
        heading: "La kill chain sull'altro lato — awareness",
        blocks: [
          {
            type: "p",
            text: "Conoscere come funziona la kill chain del lato nemico è informazione difensiva, non offensiva. Significa sapere quali sono i suoi punti deboli e quando aspettarsi cosa.",
          },
          {
            type: "ul",
            items: [
              "Dipendenza russa da Orlan-10 / Zala per ISR — abbattuti riducono ritmo di kill chain locale",
              "Dipendenza ucraina da Mavic / Autel — vulnerabili a EW russa, ma backup in fibra ottica in espansione",
              "Tempi di reazione: artiglieria russa lenta su targeting deep, ucraina più rapida con HIMARS PGM",
              "Saturazione: il C2 nemico ha capacità limitata di gestire molti bersagli — saturarlo è strategia legittima difensiva",
              "Notte: la kill chain notturna dipende da termica, finestra utile in alcune condizioni meteo",
              "Pattern: gli orari di volo drone sono pattern-of-life sfruttabili difensivamente",
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
              "Pensare che la kill chain richieda ore — sul fronte ucraino sono minuti",
              "Restare in posizione \"perché non ci ha colpiti finora\" (l'Assess del nemico sta arrivando)",
              "Confermare via radio l'avvenuta evasione di un attacco (Engage fallito = Assess in corso)",
              "Sottovalutare droni ISR \"piccoli\" — il Mavic è il nodo principale della kill chain Find/Fix",
              "Trascurare OPSEC perché \"siamo lontani dal fronte\" — la kill chain via OSINT raggiunge ovunque",
              "Concentrare la difesa solo sull'Engage finale invece che spezzare il ciclo prima",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Il fronte 2022-2026 ha reso la kill chain una metrica operativa quotidiana. Le brigate sopravvissute hanno strutturato la difesa intorno alla rottura di anelli specifici: anti-drone EW per spezzare Find/Fix, copertura termica per spezzare Track, dispersione e cover overhead per limitare effetto Engage, disciplina post-impatto per negare Assess. Sintesi operativa: 'L'artiglieria non uccide più — uccide la kill chain. L'artiglieria è solo l'ultimo passo.' Chi capisce la catena, vive. Chi non la capisce, muore alla fase Engage senza aver mai percepito le quattro precedenti.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "The 'kill chain' is the doctrinal framework describing how a target is discovered, fixed, hit and assessed. Understanding it is essential for defence: it means knowing how you are observed, and where the enemy cycle can be broken. This chapter is entirely defensive — it describes the cycle to avoid it, NOT to employ it.",
    sections: [
      {
        heading: "Kill chain phases (F2T2EA)",
        blocks: [
          {
            type: "p",
            text: "The NATO acronym F2T2EA describes the standard cycle: Find, Fix, Track, Target, Engage, Assess. On the Ukrainian front the cycle closes in times ranging from minutes to seconds thanks to drone-artillery-EW integration.",
          },
          {
            type: "table",
            headers: ["Phase", "Meaning", "Typical means"],
            rows: [
              ["Find", "Discover target existence", "ISR drone, SIGINT, OSINT, ground observer"],
              ["Fix", "Locate precisely", "DF triangulation, drone telemetry, observation intersection"],
              ["Track", "Maintain movement awareness", "Continuous drone overflight, SIGINT monitoring"],
              ["Target", "Decide engagement, choose means", "C2 (Command & Control), effect / resource assessment"],
              ["Engage", "Strike", "Artillery, FPV, missile, loitering munition"],
              ["Assess", "Evaluate effect, repeat if needed", "Post-impact drone, BDA (Battle Damage Assessment)"],
            ],
          },
        ],
      },
      {
        heading: "Cycle compression on the Ukrainian front",
        blocks: [
          {
            type: "p",
            text: "The distinctive feature of the 2022-2026 front is temporal compression of the cycle. What previously took hours or days now closes in a few minutes.",
          },
          {
            type: "ul",
            items: [
              "Find: Mavic ISR drone over area, cost $5,000, range 10+ km",
              "Fix: drone pilot passes MGRS to firing unit via Kropyva / Delta",
              "Track: drone stays airborne, confirms position, provides correction",
              "Target: firing decision within 1-3 minutes via digital kill chain",
              "Engage: 152 mm artillery fires within 1-2 minutes; FPV in 5-10 minutes if available",
              "Assess: drone observes impact, decides second salvo if needed",
            ],
          },
          {
            type: "callout",
            title: "Mean observed time",
            body: "On active front, Find-to-Engage cycle measured by OSINT across many publicly documented incidents is 2-15 minutes from discovery to first impact. It is the key metric of the era.",
          },
        ],
      },
      {
        heading: "The drone-artillery cycle",
        blocks: [
          {
            type: "p",
            text: "Drone-artillery integration is the technical engine of the modern kill chain. Understanding it as target is the key to defensively breaking it.",
          },
          {
            type: "ul",
            items: [
              "ISR drone (Mavic, Autel, Orlan-10): observes, identifies, geolocates",
              "Datalink: sends coordinates to fires centre via encrypted radio or military app",
              "Management system (Ukrainian Kropyva, Russian equivalents): computes firing data",
              "Artillery: fires within brigade-expected time",
              "Spotter: drone stays airborne, communicates corrections round-by-round",
              "Continuous loop: drone stays over area until target neutralised",
            ],
          },
          {
            type: "warn",
            title: "What it means for the one underneath",
            body: "If you were 'seen' by a drone, you have 2-15 minutes to leave the lethal centre (50-100 m radius). If you do not move, impact comes. If you move predictably, the drone updates coordinates.",
          },
        ],
      },
      {
        heading: "Defensive kill-chain breakpoints",
        blocks: [
          {
            type: "p",
            text: "Defensively, every phase of the kill chain is an opportunity to be missed. You do not need to break the whole chain — one link is enough.",
          },
          {
            type: "table",
            headers: ["Enemy phase", "Friendly defensive break"],
            rows: [
              ["Find", "OPSEC: no smartphone, no photos, dispersion, no recurring pattern of life"],
              ["Fix", "Mobility: frequent position change, thermal camo, overhead cover"],
              ["Track", "Friendly anti-drone EW, observation cover, multiple hides"],
              ["Target", "Saturate enemy C2 with multiple small presences instead of one priority cluster"],
              ["Engage", "Overhead cover, physical dispersion, anti-drone netting on vehicles"],
              ["Assess", "Reduce post-impact emissions, never confirm BDA in clear, move away"],
            ],
          },
        ],
      },
      {
        heading: "Inverse kill chain: breaking your own visibility",
        blocks: [
          {
            type: "ol",
            items: [
              "Pre-Find: never be a discoverable target — OPSEC discipline, dispersion, multi-domain camo",
              "If Find happened: break Fix with immediate movement, cover, deception",
              "If Track is ongoing: find overhead cover, reduce emissions, wait for window (weather, friendly EW)",
              "If Target is processing: move away from known position within 5-10 minutes",
              "If Engage is imminent: seek overhead protection, dispersion, alternate firing position",
              "Post-Engage: move, reduce emissions, confirm nothing, reassess picture",
            ],
          },
        ],
      },
      {
        heading: "Enemy-side kill chain — awareness",
        blocks: [
          {
            type: "p",
            text: "Knowing how the enemy kill chain works is defensive information, not offensive. It means knowing its weaknesses and when to expect what.",
          },
          {
            type: "ul",
            items: [
              "Russian dependence on Orlan-10 / Zala for ISR — downed reduce local kill-chain tempo",
              "Ukrainian dependence on Mavic / Autel — vulnerable to Russian EW, but fiber-optic backups expanding",
              "Reaction times: Russian artillery slower on deep targeting, Ukrainian faster with HIMARS PGM",
              "Saturation: enemy C2 has limited capacity to handle many targets — saturating it is legitimate defensive strategy",
              "Night: night kill chain depends on thermal, useful window under certain weather",
              "Pattern: drone flight hours are pattern-of-life exploitable defensively",
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
              "Thinking kill chain requires hours — on Ukrainian front it is minutes",
              "Staying in position because \"we haven't been hit so far\" (enemy Assess is coming)",
              "Confirming evasion of an attack on radio (Engage failed = Assess in progress)",
              "Underestimating \"small\" ISR drones — Mavic is the main Find/Fix node",
              "Neglecting OPSEC because \"we are far from the front\" — OSINT kill chain reaches everywhere",
              "Concentrating defence only on final Engage rather than breaking cycle earlier",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The 2022-2026 front turned the kill chain into a daily operational metric. Surviving brigades structured defence around breaking specific links: anti-drone EW to break Find/Fix, thermal cover to break Track, dispersion and overhead cover to limit Engage effect, post-impact discipline to deny Assess. Operational synthesis: 'Artillery doesn't kill anymore — the kill chain kills. Artillery is only the last step.' Whoever understands the chain lives. Whoever doesn't dies at Engage having never perceived the previous four phases.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A 'kill chain' é o framework doutrinário que descreve como um alvo é descoberto, fixado, atingido e avaliado. Entendê-la é essencial para a defesa: significa saber como você é observado e onde o ciclo do inimigo pode ser quebrado. Este capítulo é inteiramente defensivo — descreve o ciclo para evitá-lo, NÃO para empregá-lo.",
    sections: [
      {
        heading: "Fases da kill chain (F2T2EA)",
        blocks: [
          {
            type: "p",
            text: "O acrônimo OTAN F2T2EA descreve o ciclo padrão: Find, Fix, Track, Target, Engage, Assess. No front ucraniano o ciclo fecha em tempos que vão de minutos a segundos graças à integração drone-artilharia-EW.",
          },
          {
            type: "table",
            headers: ["Fase", "Significado", "Meio típico"],
            rows: [
              ["Find", "Descobrir a existência do alvo", "Drone ISR, SIGINT, OSINT, observador terrestre"],
              ["Fix", "Localizar com precisão", "Triangulação DF, telemetria de drone, intersecção de observação"],
              ["Track", "Manter awareness do movimento", "Sobrevoo drone contínuo, monitoramento SIGINT"],
              ["Target", "Decidir engajamento, escolher meio", "C2 (Command & Control), avaliação de efeito / recursos"],
              ["Engage", "Atingir", "Artilharia, FPV, míssil, loitering munition"],
              ["Assess", "Avaliar efeito, repetir se necessário", "Drone pós-impacto, BDA (Battle Damage Assessment)"],
            ],
          },
        ],
      },
      {
        heading: "A compressão do ciclo no front ucraniano",
        blocks: [
          {
            type: "p",
            text: "A característica distintiva do front 2022-2026 é a compressão temporal do ciclo. O que demandava horas ou dias antes hoje fecha em poucos minutos.",
          },
          {
            type: "ul",
            items: [
              "Find: drone Mavic ISR sobre a área, custo $5.000, raio 10+ km",
              "Fix: piloto do drone passa coordenada MGRS para unidade de tiro via Kropyva / Delta",
              "Track: drone permanece em voo, confirma posição, fornece correção",
              "Target: decisão de tiro em 1-3 minutos por kill chain digital",
              "Engage: artilharia 152 mm atira em 1-2 minutos; FPV em 5-10 minutos se disponível",
              "Assess: drone observa impacto, decide segundo salvo se necessário",
            ],
          },
          {
            type: "callout",
            title: "Tempo médio observado",
            body: "No front ativo, o ciclo Find-to-Engage medido em OSINT em muitos incidentes publicamente documentados é de 2-15 minutos da descoberta ao primeiro impacto. É a métrica-chave da era.",
          },
        ],
      },
      {
        heading: "O ciclo drone-artilharia",
        blocks: [
          {
            type: "p",
            text: "A integração drone-artilharia é o motor técnico da kill chain moderna. Entendê-la como alvo é a chave para quebrá-la defensivamente.",
          },
          {
            type: "ul",
            items: [
              "Drone ISR (Mavic, Autel, Orlan-10): observa, identifica, geolocaliza",
              "Datalink: envia coordenadas ao centro de tiro via rádio cifrado ou app militar",
              "Sistema de gestão (Kropyva UA, equivalentes russos): calcula dados de tiro",
              "Artilharia: atira dentro do tempo previsto da brigada",
              "Corretor: drone permanece em voo, comunica correções tiro a tiro",
              "Loop contínuo: drone fica sobre a área até alvo neutralizado",
            ],
          },
          {
            type: "warn",
            title: "O que isso significa para quem está embaixo",
            body: "Se você foi 'visto' por um drone, tem 2-15 minutos para sair do centro letal (raio 50-100 m). Se não se move, o impacto chega. Se se move previsivelmente, o drone atualiza coordenadas.",
          },
        ],
      },
      {
        heading: "Pontos de ruptura defensivos da kill chain",
        blocks: [
          {
            type: "p",
            text: "Defensivamente, cada fase da kill chain é oportunidade para ser perdido. Não é preciso quebrar a corrente toda — basta romper um elo.",
          },
          {
            type: "table",
            headers: ["Fase inimiga", "Ruptura defensiva amiga"],
            rows: [
              ["Find", "OPSEC: sem smartphone, sem foto, dispersão, sem pattern of life recorrente"],
              ["Fix", "Mobilidade: troca frequente de posição, camo térmico, cobertura overhead"],
              ["Track", "EW amiga anti-drone, cobertura de observação, hides múltiplos"],
              ["Target", "Saturar o C2 inimigo com múltiplas presenças pequenas em vez de cluster prioritário"],
              ["Engage", "Cobertura overhead, dispersão física, anti-drone netting em veículos"],
              ["Assess", "Reduzir emissões pós-impacto, nunca confirmar BDA em claro, mover-se"],
            ],
          },
        ],
      },
      {
        heading: "Kill chain inversa: quebrar a própria visibilidade",
        blocks: [
          {
            type: "ol",
            items: [
              "Pré-Find: nunca ser alvo descobrível — disciplina OPSEC, dispersão, camo multi-domínio",
              "Se Find aconteceu: quebrar Fix com movimento imediato, cobertura, deception",
              "Se Track está em curso: achar cobertura overhead, reduzir emissões, esperar janela (meteo, EW amiga)",
              "Se Target está em elaboração: deslocar-se da posição conhecida em 5-10 minutos",
              "Se Engage é iminente: buscar proteção overhead, dispersão, posição de tiro alternativa",
              "Pós-Engage: mover, reduzir emissões, não confirmar nada, reavaliar quadro",
            ],
          },
        ],
      },
      {
        heading: "Kill chain do lado inimigo — awareness",
        blocks: [
          {
            type: "p",
            text: "Saber como funciona a kill chain do lado inimigo é informação defensiva, não ofensiva. Significa saber seus pontos fracos e quando esperar o quê.",
          },
          {
            type: "ul",
            items: [
              "Dependência russa de Orlan-10 / Zala para ISR — abatidos reduzem ritmo de kill chain local",
              "Dependência ucraniana de Mavic / Autel — vulneráveis a EW russa, mas backup em fibra ótica em expansão",
              "Tempos de reação: artilharia russa lenta em targeting profundo, ucraniana mais rápida com HIMARS PGM",
              "Saturação: C2 inimigo tem capacidade limitada de gerir muitos alvos — saturá-lo é estratégia defensiva legítima",
              "Noite: kill chain noturna depende de térmica, janela útil em certas condições meteo",
              "Pattern: horários de voo de drone são pattern-of-life exploráveis defensivamente",
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
              "Achar que a kill chain leva horas — no front ucraniano são minutos",
              "Ficar em posição porque \"não bateram em nós até agora\" (Assess inimigo está chegando)",
              "Confirmar evasão de ataque em rádio (Engage falhou = Assess em curso)",
              "Subestimar drones ISR \"pequenos\" — Mavic é o nó principal de Find/Fix",
              "Negligenciar OPSEC porque \"estamos longe do front\" — kill chain via OSINT chega em todo lugar",
              "Concentrar defesa só no Engage final em vez de quebrar o ciclo antes",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O front 2022-2026 tornou a kill chain métrica operacional cotidiana. As brigadas sobreviventes estruturaram a defesa em torno da ruptura de elos específicos: EW anti-drone para quebrar Find/Fix, cobertura térmica para quebrar Track, dispersão e cobertura overhead para limitar efeito de Engage, disciplina pós-impacto para negar Assess. Síntese operacional: 'A artilharia não mata mais — a kill chain mata. A artilharia é só o último passo.' Quem entende a corrente vive. Quem não entende morre no Engage sem nunca ter percebido as quatro fases anteriores.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La 'kill chain' est le cadre doctrinal qui décrit comment une cible est découverte, fixée, frappée et évaluée. La comprendre est essentiel pour la défense : c'est savoir comment on est observé, et où le cycle ennemi peut être brisé. Ce chapitre est entièrement défensif — il décrit le cycle pour l'éviter, PAS pour l'employer.",
    sections: [
      {
        heading: "Phases de la kill chain (F2T2EA)",
        blocks: [
          {
            type: "p",
            text: "L'acronyme OTAN F2T2EA décrit le cycle standard : Find, Fix, Track, Target, Engage, Assess. Sur le front ukrainien le cycle se boucle en des temps allant de minutes à secondes grâce à l'intégration drone-artillerie-GE.",
          },
          {
            type: "table",
            headers: ["Phase", "Sens", "Moyen typique"],
            rows: [
              ["Find", "Découvrir l'existence de la cible", "Drone ISR, SIGINT, OSINT, observateur terrestre"],
              ["Fix", "Localiser précisément", "Triangulation DF, télémétrie drone, intersection d'observation"],
              ["Track", "Maintenir l'awareness du mouvement", "Survol drone continu, surveillance SIGINT"],
              ["Target", "Décider l'engagement, choisir le moyen", "C2 (Command & Control), évaluation effet / ressources"],
              ["Engage", "Frapper", "Artillerie, FPV, missile, munition rôdeuse"],
              ["Assess", "Évaluer l'effet, répéter si besoin", "Drone post-impact, BDA (Battle Damage Assessment)"],
            ],
          },
        ],
      },
      {
        heading: "La compression du cycle sur le front ukrainien",
        blocks: [
          {
            type: "p",
            text: "La caractéristique distinctive du front 2022-2026 est la compression temporelle du cycle. Ce qui demandait des heures ou des jours dans les conflits précédents se boucle aujourd'hui en quelques minutes.",
          },
          {
            type: "ul",
            items: [
              "Find : drone Mavic ISR sur la zone, coût 5 000 $, portée 10+ km",
              "Fix : le pilote drone passe une coordonnée MGRS à l'unité de tir via Kropyva / Delta",
              "Track : le drone reste en vol, confirme la position, fournit la correction",
              "Target : décision de tir en 1-3 minutes via kill chain numérique",
              "Engage : artillerie 152 mm tire en 1-2 minutes ; FPV en 5-10 minutes si disponible",
              "Assess : le drone observe l'impact, décide d'un second salvo si nécessaire",
            ],
          },
          {
            type: "callout",
            title: "Temps moyen observé",
            body: "Sur le front actif, le cycle Find-to-Engage mesuré en OSINT sur de nombreux incidents publiquement documentés est de 2-15 minutes de la découverte au premier impact. C'est la métrique-clé de l'époque.",
          },
        ],
      },
      {
        heading: "Le cycle drone-artillerie",
        blocks: [
          {
            type: "p",
            text: "L'intégration drone-artillerie est le moteur technique de la kill chain moderne. La comprendre en tant que cible est la clé pour la briser défensivement.",
          },
          {
            type: "ul",
            items: [
              "Drone ISR (Mavic, Autel, Orlan-10) : observe, identifie, géolocalise",
              "Datalink : envoie coordonnées au centre de tir via radio chiffrée ou appli militaire",
              "Système de gestion (Kropyva UA, équivalents russes) : calcule les données de tir",
              "Artillerie : tire dans le temps prévu par la brigade",
              "Correcteur : le drone reste en vol, communique des corrections coup par coup",
              "Boucle continue : le drone reste sur la zone jusqu'à neutralisation",
            ],
          },
          {
            type: "warn",
            title: "Ce que cela signifie pour celui qui est dessous",
            body: "Si vous avez été « vu » par un drone, vous avez 2-15 minutes pour quitter le centre létal (rayon 50-100 m). Si vous ne bougez pas, l'impact arrive. Si vous bougez prévisiblement, le drone met à jour les coordonnées.",
          },
        ],
      },
      {
        heading: "Points de rupture défensifs de la kill chain",
        blocks: [
          {
            type: "p",
            text: "Défensivement, chaque phase de la kill chain est une opportunité d'être manqué. Pas besoin de briser toute la chaîne — un seul maillon suffit.",
          },
          {
            type: "table",
            headers: ["Phase ennemie", "Rupture défensive amie"],
            rows: [
              ["Find", "OPSEC : pas de smartphone, pas de photos, dispersion, pas de pattern of life récurrent"],
              ["Fix", "Mobilité : changement fréquent de position, camo thermique, couvert overhead"],
              ["Track", "GE amie anti-drone, couvert d'observation, hides multiples"],
              ["Target", "Saturer le C2 ennemi avec plusieurs petites présences au lieu d'un cluster prioritaire"],
              ["Engage", "Couvert overhead, dispersion physique, filet anti-drone sur véhicules"],
              ["Assess", "Réduire les émissions post-impact, ne jamais confirmer BDA en clair, se déplacer"],
            ],
          },
        ],
      },
      {
        heading: "Kill chain inverse : briser sa propre visibilité",
        blocks: [
          {
            type: "ol",
            items: [
              "Pré-Find : ne jamais être une cible découvrable — discipline OPSEC, dispersion, camo multi-domaine",
              "Si Find a eu lieu : briser Fix par mouvement immédiat, couvert, leurre",
              "Si Track est en cours : trouver couvert overhead, réduire émissions, attendre la fenêtre (météo, GE amie)",
              "Si Target est en traitement : se déplacer hors de la position connue dans les 5-10 minutes",
              "Si Engage est imminent : chercher protection overhead, dispersion, position de tir alternative",
              "Post-Engage : bouger, réduire les émissions, ne rien confirmer, réévaluer le tableau",
            ],
          },
        ],
      },
      {
        heading: "Kill chain côté ennemi — awareness",
        blocks: [
          {
            type: "p",
            text: "Connaître le fonctionnement de la kill chain côté ennemi est de l'information défensive, pas offensive. C'est connaître ses points faibles et savoir quand attendre quoi.",
          },
          {
            type: "ul",
            items: [
              "Dépendance russe à Orlan-10 / Zala pour l'ISR — leur perte ralentit la kill chain locale",
              "Dépendance ukrainienne à Mavic / Autel — vulnérables à la GE russe, mais backups fibre optique en expansion",
              "Temps de réaction : artillerie russe lente sur targeting profond, ukrainienne plus rapide avec HIMARS PGM",
              "Saturation : le C2 ennemi a une capacité limitée à gérer beaucoup de cibles — le saturer est une stratégie défensive légitime",
              "Nuit : la kill chain nocturne dépend du thermique, fenêtre utile dans certaines conditions météo",
              "Pattern : les heures de vol drone sont un pattern of life exploitable défensivement",
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
              "Penser que la kill chain demande des heures — sur le front ukrainien c'est des minutes",
              "Rester en position parce qu'« on n'a pas été touchés jusqu'ici » (l'Assess ennemi arrive)",
              "Confirmer en radio l'évasion d'une attaque (Engage raté = Assess en cours)",
              "Sous-estimer les drones ISR « petits » — le Mavic est le nœud principal de Find/Fix",
              "Négliger l'OPSEC parce qu'« on est loin du front » — la kill chain via OSINT atteint partout",
              "Concentrer la défense seulement sur l'Engage final au lieu de briser le cycle plus tôt",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Le front 2022-2026 a fait de la kill chain une métrique opérationnelle quotidienne. Les brigades survivantes ont structuré la défense autour de la rupture de maillons spécifiques : GE anti-drone pour briser Find/Fix, couverture thermique pour briser Track, dispersion et couvert overhead pour limiter l'effet d'Engage, discipline post-impact pour nier l'Assess. Synthèse opérationnelle : « L'artillerie ne tue plus — c'est la kill chain qui tue. L'artillerie n'est que la dernière étape. » Qui comprend la chaîne vit. Qui ne la comprend pas meurt à l'Engage sans avoir jamais perçu les quatre phases précédentes.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
