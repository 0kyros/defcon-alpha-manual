import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La psicologia del combattimento descrive cosa fa il cervello umano quando rileva minaccia letale. Conoscere queste risposte non le elimina, ma permette di prevederle, addestrarle e correggerle. Ignorarle produce operatori che credono di funzionare e che invece sono soggetti a fenomeni fisiologici prevedibili.",
    sections: [
      {
        heading: "Fight, flight, freeze",
        blocks: [
          {
            type: "p",
            text: "Il sistema nervoso autonomo classifica la minaccia in tre risposte primarie. Fight: aggressione attiva, alta FC, vasodilatazione muscolare, sopressione del dolore. Flight: fuga, alta FC, vasocostrizione viscerale, tunnel visivo. Freeze: immobilità, bradicardia paradossa, sospensione cognitiva. La risposta non si sceglie consapevolmente — emerge dal cervello prima della corteccia.",
          },
          {
            type: "table",
            headers: ["Risposta", "Fisiologia", "Comportamento", "Utilità operativa"],
            rows: [
              ["Fight", "FC alta, dolore soppresso", "Aggressione, fuoco", "Alta in assalto"],
              ["Flight", "FC alta, tunnel visivo", "Movimento rapido fuori", "Alta in evasione"],
              ["Freeze", "FC bassa o erratica, immobilità", "Sospensione", "Alta in occultamento, zero in azione"],
              ["Fawn", "Sottomissione", "Appease", "Solo in cattività"],
            ],
          },
          {
            type: "p",
            text: "L'addestramento sposta la risposta verso fight controllato. Senza addestramento prevale freeze in operatori inesperti, che è la risposta letale: l'operatore congelato non spara, non si copre, non comunica. Il primo combattimento di un novizio è quasi sempre dominato da freeze parziale.",
          },
        ],
      },
      {
        heading: "Gestione della paura",
        blocks: [
          {
            type: "p",
            text: "La paura non si elimina: si dirige. Un operatore senza paura è un operatore con percezione di rischio compromessa, e produce decisioni che lo uccidono. La paura corretta è informativa: indica dove sta la minaccia. Il problema non è sentirla, ma lasciarla decidere. Tre meccanismi di gestione: familiarizzazione, compartimentazione, ridefinizione.",
          },
          {
            type: "ol",
            items: [
              "Familiarizzazione: l'esposizione ripetuta a stimoli simulati riduce la risposta autonoma — stress inoculation training",
              "Compartimentazione: distinguere la paura attuale (questo proiettile) dalla paura generica (la guerra) — solo la prima è azionabile",
              "Ridefinizione: trasformare la sensazione fisiologica in informazione operativa ('FC alta = sono in zona di rischio reale, attenzione massima')",
              "Verbalizzazione interna: nominare la paura riduce la sua presa pre-corticale",
            ],
          },
          {
            type: "callout",
            title: "Stress inoculation",
            body: "Lo stress inoculation training (SIT) è la pratica di esporre l'operatore a stress crescenti in ambiente controllato (force-on-force, force-on-target sotto pressione, scenari con privazione di sonno). Funziona perché il cervello generalizza: una volta sopravvissuto a uno stress comparabile, quello reale appare gestibile. È l'opposto dell'avoidance.",
          },
        ],
      },
      {
        heading: "Killology — basi",
        blocks: [
          {
            type: "p",
            text: "La killology è il campo di studio aperto da Dave Grossman su cosa accade nel cervello umano quando uccide o vede uccidere. I dati documentano una resistenza naturale a uccidere in soldati non addestrati, e un costo psicologico differito nei soldati addestrati a superarla. Tre fasi conosciute: pre-combattimento (anticipazione), combattimento (atto), post-combattimento (elaborazione). Ogni fase ha errori tipici e contromisure note.",
          },
          {
            type: "ul",
            items: [
              "Pre: aspettativa irrealistica di indifferenza — produce shock al primo contatto",
              "Durante: dissociazione protettiva, percezione alterata del tempo, amnesia parziale post-azione",
              "Post: due picchi di processamento — 24–72 h (acuto) e 30–90 gg (riflessivo)",
              "Il volontario internazionale è esposto agli stessi fenomeni dei soldati regolari, senza la stessa rete di supporto istituzionale",
            ],
          },
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "Aspettative come 'mi vendicherò' o 'sarò freddo' producono dissonanza al momento dell'azione e nel post. Le aspettative realistiche sono: 'la mia fisiologia reagirà, sopprimerò sul momento, processerò dopo, chiederò supporto se necessario'. Questa è preparazione mentale, non patologizzazione preventiva.",
          },
        ],
      },
      {
        heading: "Distorsioni percettive in combattimento",
        blocks: [
          {
            type: "p",
            text: "Sotto adrenalina ad alta intensità il cervello distorce input sensoriali in modo prevedibile. Conoscere queste distorsioni permette di correggerle in tempo reale e di non scoraggiarsi quando il debrief rivela che 'l'ho visto diversamente'.",
          },
          {
            type: "ul",
            items: [
              "Distorsione temporale: il tempo si dilata o si comprime — orologi e timestamp radio sono più affidabili della percezione",
              "Tunnel visivo: campo visivo si riduce a 30–40 gradi — ruotare attivamente la testa, non solo gli occhi",
              "Sordità selettiva (auditory exclusion): suoni propri vengono filtrati — comunicazioni interne possono mancare",
              "Memoria frammentaria: blackout parziali post-azione — il debrief deve usare più testimoni",
              "Falso ricordo: convinzione di aver visto cose non avvenute — confronto con video/altri testimoni",
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
              "Aspettarsi di non avere paura, e quindi non avere strategie per gestirla",
              "Confondere freeze del novizio con codardia — è fisiologia, non carattere",
              "Negare le distorsioni percettive durante il debrief, generando conflitto fra testimoni",
              "Glorificare l'atto del combattimento senza menzionare il costo elaborativo",
              "Trattare il primo combattimento come prova di virilità invece che come esperienza fisiologica",
              "Saltare il debrief riflessivo (30–90 giorni) perché 'sto bene'",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari che arrivano in Ucraina con aspettative cinematografiche subiscono il colpo psicologico più duro al primo contatto reale, perché la realtà non assomiglia ai film. I volontari che arrivano con preparazione psicologica realistica — paura ammessa, freeze possibile, distorsioni note — performano meglio sotto fuoco e processano meglio dopo. La preparazione mentale non è motivazionale: è informativa. Sapere cosa farà il proprio cervello è metà del controllo.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Combat psychology describes what the human brain does when it detects lethal threat. Knowing these responses does not eliminate them, but allows you to predict, train and correct them. Ignoring them produces operators who think they are functioning while subject to predictable physiological phenomena.",
    sections: [
      {
        heading: "Fight, flight, freeze",
        blocks: [
          {
            type: "p",
            text: "The autonomic nervous system classifies threat into three primary responses. Fight: active aggression, high HR, muscle vasodilation, pain suppression. Flight: escape, high HR, visceral vasoconstriction, tunnel vision. Freeze: immobility, paradoxical bradycardia, cognitive suspension. The response is not consciously chosen — it emerges from the brain before cortex.",
          },
          {
            type: "table",
            headers: ["Response", "Physiology", "Behaviour", "Operational utility"],
            rows: [
              ["Fight", "High HR, pain suppressed", "Aggression, fire", "High in assault"],
              ["Flight", "High HR, tunnel vision", "Rapid out-movement", "High in evasion"],
              ["Freeze", "Low or erratic HR, immobility", "Suspension", "High in concealment, zero in action"],
              ["Fawn", "Submission", "Appease", "Only in captivity"],
            ],
          },
          {
            type: "p",
            text: "Training shifts the response toward controlled fight. Without training, freeze prevails in inexperienced operators, which is the lethal response: a frozen operator does not fire, does not cover, does not communicate. A novice's first combat is almost always dominated by partial freeze.",
          },
        ],
      },
      {
        heading: "Fear management",
        blocks: [
          {
            type: "p",
            text: "Fear is not eliminated: it is directed. An operator without fear has compromised risk perception and produces decisions that kill them. Correct fear is informative: it indicates where the threat is. The problem is not feeling it, but letting it decide. Three management mechanisms: familiarisation, compartmentalisation, redefinition.",
          },
          {
            type: "ol",
            items: [
              "Familiarisation: repeated exposure to simulated stimuli reduces autonomic response — stress inoculation training",
              "Compartmentalisation: separate current fear (this bullet) from generic fear (the war) — only the first is actionable",
              "Redefinition: transform the physiological sensation into operational information ('high HR = I am in real risk zone, max attention')",
              "Internal verbalisation: naming the fear reduces its pre-cortical grip",
            ],
          },
          {
            type: "callout",
            title: "Stress inoculation",
            body: "Stress inoculation training (SIT) is the practice of exposing the operator to increasing stress in controlled environments (force-on-force, force-on-target under pressure, scenarios with sleep deprivation). It works because the brain generalises: once you survive a comparable stress, the real one feels manageable. It is the opposite of avoidance.",
          },
        ],
      },
      {
        heading: "Killology — basics",
        blocks: [
          {
            type: "p",
            text: "Killology is the field opened by Dave Grossman on what happens in the human brain when it kills or sees killing. Data documents a natural resistance to killing in untrained soldiers, and a deferred psychological cost in soldiers trained to overcome it. Three known phases: pre-combat (anticipation), combat (act), post-combat (processing). Each phase has typical errors and known countermeasures.",
          },
          {
            type: "ul",
            items: [
              "Pre: unrealistic expectation of indifference — produces shock at first contact",
              "During: protective dissociation, time-perception alteration, partial post-action amnesia",
              "Post: two processing peaks — 24–72 h (acute) and 30–90 days (reflective)",
              "The international volunteer is exposed to the same phenomena as regular soldiers, without the same institutional support network",
            ],
          },
          {
            type: "warn",
            title: "WARNING",
            body: "Expectations like 'I will be vengeful' or 'I will be cold' produce dissonance at the moment of action and post. Realistic expectations are: 'my physiology will react, I will suppress in the moment, I will process later, I will ask for support if needed'. This is mental preparation, not preventive pathologising.",
          },
        ],
      },
      {
        heading: "Perceptual distortions in combat",
        blocks: [
          {
            type: "p",
            text: "Under high-intensity adrenaline the brain distorts sensory inputs predictably. Knowing these distortions lets you correct them in real time and not be discouraged when debrief reveals 'I saw it differently'.",
          },
          {
            type: "ul",
            items: [
              "Time distortion: time dilates or compresses — clocks and radio timestamps beat perception",
              "Tunnel vision: visual field shrinks to 30–40 degrees — actively rotate the head, not only the eyes",
              "Auditory exclusion: own sounds filtered out — internal communications may be missed",
              "Fragmentary memory: partial post-action blackouts — debrief must use multiple witnesses",
              "False memory: belief in events that did not happen — compare against video/other witnesses",
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
              "Expecting to have no fear, and so having no strategy to manage it",
              "Confusing novice freeze with cowardice — it is physiology, not character",
              "Denying perceptual distortions during debrief, generating witness conflict",
              "Glorifying the combat act without mentioning the processing cost",
              "Treating first combat as a manhood test rather than a physiological experience",
              "Skipping the reflective debrief (30–90 days) because 'I'm fine'",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Volunteers arriving in Ukraine with cinematic expectations take the hardest psychological hit on first real contact, because reality does not resemble films. Volunteers arriving with realistic mental preparation — fear admitted, freeze possible, distortions known — perform better under fire and process better afterwards. Mental preparation is not motivational: it is informational. Knowing what your brain will do is half of control.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A psicologia de combate descreve o que o cérebro humano faz ao detectar ameaça letal. Conhecer essas respostas não as elimina, mas permite prever, treinar e corrigir. Ignorá-las produz operadores que pensam estar funcionando enquanto sujeitos a fenômenos fisiológicos previsíveis.",
    sections: [
      {
        heading: "Fight, flight, freeze",
        blocks: [
          {
            type: "p",
            text: "O sistema nervoso autônomo classifica ameaça em três respostas primárias. Fight: agressão ativa, FC alta, vasodilatação muscular, supressão da dor. Flight: fuga, FC alta, vasoconstrição visceral, visão em túnel. Freeze: imobilidade, bradicardia paradoxal, suspensão cognitiva. A resposta não é escolhida conscientemente — emerge do cérebro antes do córtex.",
          },
          {
            type: "table",
            headers: ["Resposta", "Fisiologia", "Comportamento", "Utilidade operacional"],
            rows: [
              ["Fight", "FC alta, dor suprimida", "Agressão, fogo", "Alta em assalto"],
              ["Flight", "FC alta, visão em túnel", "Movimento rápido para fora", "Alta em evasão"],
              ["Freeze", "FC baixa ou errática, imobilidade", "Suspensão", "Alta em ocultação, zero em ação"],
              ["Fawn", "Submissão", "Apaziguar", "Só em cativeiro"],
            ],
          },
          {
            type: "p",
            text: "O treino desloca a resposta para fight controlado. Sem treino prevalece freeze em operadores inexperientes, que é a resposta letal: o operador congelado não atira, não se cobre, não comunica. O primeiro combate de um novato é quase sempre dominado por freeze parcial.",
          },
        ],
      },
      {
        heading: "Gestão do medo",
        blocks: [
          {
            type: "p",
            text: "O medo não se elimina: dirige-se. Um operador sem medo tem percepção de risco comprometida e produz decisões que o matam. Medo correto é informativo: indica onde está a ameaça. O problema não é sentir, mas deixá-lo decidir. Três mecanismos de gestão: familiarização, compartimentação, ressignificação.",
          },
          {
            type: "ol",
            items: [
              "Familiarização: exposição repetida a estímulos simulados reduz a resposta autonômica — stress inoculation training",
              "Compartimentação: separar o medo atual (esta bala) do medo genérico (a guerra) — só o primeiro é acionável",
              "Ressignificação: transformar a sensação fisiológica em informação operacional ('FC alta = estou em zona de risco real, atenção máxima')",
              "Verbalização interna: nomear o medo reduz seu domínio pré-cortical",
            ],
          },
          {
            type: "callout",
            title: "Stress inoculation",
            body: "O stress inoculation training (SIT) é a prática de expor o operador a estresses crescentes em ambiente controlado (force-on-force, force-on-target sob pressão, cenários com privação de sono). Funciona porque o cérebro generaliza: depois de sobreviver a um estresse comparável, o real parece gerenciável. É o oposto de evitação.",
          },
        ],
      },
      {
        heading: "Killology — fundamentos",
        blocks: [
          {
            type: "p",
            text: "Killology é o campo aberto por Dave Grossman sobre o que ocorre no cérebro humano quando ele mata ou vê matar. Os dados documentam uma resistência natural a matar em soldados não treinados, e um custo psicológico diferido em soldados treinados para superá-la. Três fases conhecidas: pré-combate (antecipação), combate (ato), pós-combate (elaboração). Cada fase tem erros típicos e contramedidas conhecidas.",
          },
          {
            type: "ul",
            items: [
              "Pré: expectativa irrealista de indiferença — produz choque no primeiro contato",
              "Durante: dissociação protetora, alteração da percepção do tempo, amnésia parcial pós-ação",
              "Pós: dois picos de processamento — 24–72 h (agudo) e 30–90 dias (reflexivo)",
              "O voluntário internacional é exposto aos mesmos fenômenos que soldados regulares, sem a mesma rede de apoio institucional",
            ],
          },
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "Expectativas como 'vou me vingar' ou 'serei frio' produzem dissonância no momento da ação e no pós. Expectativas realistas são: 'minha fisiologia vai reagir, vou suprimir na hora, processarei depois, vou pedir apoio se necessário'. Isso é preparação mental, não patologização preventiva.",
          },
        ],
      },
      {
        heading: "Distorções perceptivas em combate",
        blocks: [
          {
            type: "p",
            text: "Sob adrenalina de alta intensidade o cérebro distorce inputs sensoriais de modo previsível. Conhecer essas distorções permite corrigi-las em tempo real e não se desencorajar quando o debrief revela 'eu vi diferente'.",
          },
          {
            type: "ul",
            items: [
              "Distorção temporal: o tempo dilata ou comprime — relógios e timestamps de rádio são mais confiáveis que a percepção",
              "Visão em túnel: campo visual reduz a 30–40 graus — girar ativamente a cabeça, não só os olhos",
              "Exclusão auditiva: sons próprios são filtrados — comunicação interna pode ser perdida",
              "Memória fragmentária: blackouts parciais pós-ação — o debrief deve usar múltiplas testemunhas",
              "Falsa memória: convicção de ter visto coisas que não aconteceram — confrontar com vídeo/outras testemunhas",
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
              "Esperar não ter medo, e portanto não ter estratégia para geri-lo",
              "Confundir freeze de novato com covardia — é fisiologia, não caráter",
              "Negar distorções perceptivas durante o debrief, gerando conflito entre testemunhas",
              "Glorificar o ato do combate sem mencionar o custo elaborativo",
              "Tratar o primeiro combate como prova de virilidade em vez de experiência fisiológica",
              "Pular o debrief reflexivo (30–90 dias) porque 'estou bem'",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Voluntários que chegam à Ucrânia com expectativas cinematográficas sofrem o golpe psicológico mais duro no primeiro contato real, porque a realidade não se parece com filmes. Voluntários que chegam com preparação mental realista — medo admitido, freeze possível, distorções conhecidas — performam melhor sob fogo e processam melhor depois. Preparação mental não é motivacional: é informativa. Saber o que o cérebro vai fazer é metade do controle.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La psychologie du combat décrit ce que fait le cerveau humain quand il détecte une menace létale. Connaître ces réponses ne les élimine pas, mais permet de les prévoir, de les entraîner et de les corriger. Les ignorer produit des opérateurs qui croient fonctionner alors qu'ils sont soumis à des phénomènes physiologiques prévisibles.",
    sections: [
      {
        heading: "Fight, flight, freeze",
        blocks: [
          {
            type: "p",
            text: "Le système nerveux autonome classe la menace en trois réponses primaires. Fight : agression active, FC haute, vasodilatation musculaire, suppression de la douleur. Flight : fuite, FC haute, vasoconstriction viscérale, vision tunnel. Freeze : immobilité, bradycardie paradoxale, suspension cognitive. La réponse n'est pas choisie consciemment — elle émerge du cerveau avant le cortex.",
          },
          {
            type: "table",
            headers: ["Réponse", "Physiologie", "Comportement", "Utilité opérationnelle"],
            rows: [
              ["Fight", "FC haute, douleur supprimée", "Agression, feu", "Haute en assaut"],
              ["Flight", "FC haute, vision tunnel", "Mouvement rapide vers la sortie", "Haute en évasion"],
              ["Freeze", "FC basse ou erratique, immobilité", "Suspension", "Haute en dissimulation, nulle en action"],
              ["Fawn", "Soumission", "Apaiser", "Seulement en captivité"],
            ],
          },
          {
            type: "p",
            text: "L'entraînement déplace la réponse vers un fight contrôlé. Sans entraînement, le freeze prévaut chez les opérateurs inexpérimentés, et c'est la réponse létale : l'opérateur figé ne tire pas, ne se couvre pas, ne communique pas. Le premier combat d'un novice est presque toujours dominé par un freeze partiel.",
          },
        ],
      },
      {
        heading: "Gestion de la peur",
        blocks: [
          {
            type: "p",
            text: "La peur ne s'élimine pas : elle se dirige. Un opérateur sans peur a une perception du risque compromise et produit des décisions qui le tuent. La peur correcte est informative : elle indique où est la menace. Le problème n'est pas de la ressentir, mais de la laisser décider. Trois mécanismes de gestion : familiarisation, compartimentation, redéfinition.",
          },
          {
            type: "ol",
            items: [
              "Familiarisation : l'exposition répétée à des stimuli simulés réduit la réponse autonome — stress inoculation training",
              "Compartimentation : distinguer la peur actuelle (cette balle) de la peur générique (la guerre) — seule la première est actionnable",
              "Redéfinition : transformer la sensation physiologique en information opérationnelle (« FC haute = je suis en zone à risque réel, attention maximale »)",
              "Verbalisation interne : nommer la peur réduit son emprise pré-corticale",
            ],
          },
          {
            type: "callout",
            title: "Stress inoculation",
            body: "Le stress inoculation training (SIT) consiste à exposer l'opérateur à des stress croissants en environnement contrôlé (force-on-force, force-on-target sous pression, scénarios avec privation de sommeil). Il fonctionne parce que le cerveau généralise : une fois qu'on a survécu à un stress comparable, le réel paraît gérable. C'est l'opposé de l'évitement.",
          },
        ],
      },
      {
        heading: "Killology — fondamentaux",
        blocks: [
          {
            type: "p",
            text: "La killology est le champ ouvert par Dave Grossman sur ce qui se passe dans le cerveau humain quand il tue ou voit tuer. Les données documentent une résistance naturelle à tuer chez les soldats non entraînés, et un coût psychologique différé chez les soldats entraînés à la surmonter. Trois phases connues : pré-combat (anticipation), combat (acte), post-combat (élaboration). Chaque phase a des erreurs typiques et des contremesures connues.",
          },
          {
            type: "ul",
            items: [
              "Pré : attente irréaliste d'indifférence — produit un choc au premier contact",
              "Pendant : dissociation protectrice, altération de la perception du temps, amnésie partielle post-action",
              "Post : deux pics de traitement — 24–72 h (aigu) et 30–90 jours (réflexif)",
              "Le volontaire international subit les mêmes phénomènes que les soldats réguliers, sans le même réseau de soutien institutionnel",
            ],
          },
          {
            type: "warn",
            title: "ATTENTION",
            body: "Des attentes comme « je serai vengeur » ou « je serai froid » produisent dissonance au moment de l'action et au-delà. Les attentes réalistes sont : « ma physiologie va réagir, je supprimerai sur le moment, je traiterai après, je demanderai du soutien si nécessaire ». C'est de la préparation mentale, pas de la pathologisation préventive.",
          },
        ],
      },
      {
        heading: "Distorsions perceptives en combat",
        blocks: [
          {
            type: "p",
            text: "Sous adrénaline à haute intensité le cerveau distord les entrées sensorielles de façon prévisible. Connaître ces distorsions permet de les corriger en temps réel et de ne pas se décourager quand le debrief révèle « je l'ai vu différemment ».",
          },
          {
            type: "ul",
            items: [
              "Distorsion temporelle : le temps se dilate ou se comprime — horloges et timestamps radio battent la perception",
              "Vision tunnel : champ visuel réduit à 30–40 degrés — tourner activement la tête, pas seulement les yeux",
              "Exclusion auditive : ses propres sons filtrés — communications internes peuvent manquer",
              "Mémoire fragmentaire : blackouts partiels post-action — le debrief doit recourir à plusieurs témoins",
              "Faux souvenir : conviction d'avoir vu des choses qui n'ont pas eu lieu — confronter à la vidéo/aux autres témoins",
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
              "S'attendre à n'avoir aucune peur, et donc n'avoir aucune stratégie pour la gérer",
              "Confondre freeze du novice et lâcheté — c'est de la physiologie, pas du caractère",
              "Nier les distorsions perceptives en debrief, générant des conflits entre témoins",
              "Glorifier l'acte de combat sans mentionner le coût d'élaboration",
              "Traiter le premier combat comme une épreuve de virilité plutôt qu'une expérience physiologique",
              "Sauter le debrief réflexif (30–90 jours) parce que « je vais bien »",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires arrivant en Ukraine avec des attentes cinématographiques encaissent le choc psychologique le plus dur au premier contact réel, car la réalité ne ressemble pas aux films. Les volontaires arrivant avec une préparation mentale réaliste — peur admise, freeze possible, distorsions connues — performent mieux sous le feu et traitent mieux après. La préparation mentale n'est pas motivationnelle : elle est informationnelle. Savoir ce que va faire son cerveau, c'est la moitié du contrôle.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
