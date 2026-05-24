import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La disciplina mentale è la capacità di mantenere attenzione, decisione e routine quando il sistema nervoso preferirebbe spegnersi. Non è forza di volontà romantica: è gestione concreta del sonno, dell'alimentazione, dell'idratazione e del focus attentivo. La fatica cognitiva uccide più della pigrizia.",
    sections: [
      {
        heading: "Gestione del sonno",
        blocks: [
          {
            type: "p",
            text: "La privazione del sonno è la prima causa di degradazione operativa documentata. Dopo 24 ore svegli le performance cognitive equivalgono a 0,10% di alcol nel sangue. Dopo 48 ore i giudizi diventano erratici, la memoria a breve termine si frantuma, l'identificazione amico/nemico è compromessa. Il sonno non è un lusso: è munizione.",
          },
          {
            type: "ul",
            items: [
              "Dormire a finestre, anche brevi: 20–90 minuti danno recupero misurabile",
              "Sleep banking: dormire abbondantemente nei giorni che precedono operazioni note",
              "Caffeina come strumento (200 mg ogni 4 h), non come stile di vita continuo",
              "Power nap 20 min: prima del crollo, non dopo — l'inerzia da sonno profondo è peggio della stanchezza",
              "Buio, freddo, posizione protetta: dormire male equivale a non dormire",
              "Mai assumere stimolanti nelle ultime 6 ore prima del sonno principale",
            ],
          },
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "Il proprio giudizio sulla propria stanchezza è la prima cosa che la stanchezza compromette. Affidarsi a un team-mate per la valutazione. Se due persone dello stesso team valutano in modo diverso il livello di stanchezza di una terza, fidarsi del giudizio esterno.",
          },
        ],
      },
      {
        heading: "Alimentazione e idratazione",
        blocks: [
          {
            type: "p",
            text: "L'operatore in attività brucia 4 000–6 000 kcal al giorno. Non mangiare per pigrizia o stress significa demolirsi dall'interno entro 72 ore. L'idratazione segue lo stesso principio: 3–5 litri al giorno in condizioni temperate, di più al caldo o sotto carico. La sete è già un sintomo di disidratazione avanzata.",
          },
          {
            type: "ul",
            items: [
              "Mangiare a orari fissi, anche senza fame — la fame in zona di combattimento è soppressa dall'adrenalina",
              "Carboidrati complessi prima delle operazioni lunghe, proteine al recupero",
              "Elettroliti, non solo acqua, in caso di sudorazione intensa",
              "Caffè ed energy drink consumano riserve, non le ricreano",
              "Mai operare senza acqua sul corpo, anche per pattuglie 'corte'",
            ],
          },
        ],
      },
      {
        heading: "Controllo del focus",
        blocks: [
          {
            type: "p",
            text: "Il focus attentivo è una risorsa limitata. La capacità di mantenere attenzione su un settore di osservazione per 30 minuti cala drasticamente dopo la prima ora di noia. Tre tecniche operative: rotazione, micro-task, ancore esterne.",
          },
          {
            type: "ol",
            items: [
              "Rotazione: cambiare l'operatore in osservazione ogni 30–45 minuti, non ogni ora",
              "Micro-task: dividere il settore in sub-settori e ispezionarli ciclicamente",
              "Ancore esterne: un timer audio o un compagno che fa una domanda riallinea l'attenzione",
              "Stretching breve e idratazione fra una rotazione e l'altra",
            ],
          },
        ],
      },
      {
        heading: "Controllo delle distrazioni",
        blocks: [
          {
            type: "p",
            text: "Le distrazioni in zona operativa non sono solo i social: sono le preoccupazioni casa, le frustrazioni interne al team, le polemiche di chat. Una mente occupata da problemi non operativi è una mente che fallirà il prossimo OODA. Il principio: compartimentare. La famiglia esiste, ma non esiste durante il turno. I problemi interni esistono, ma si risolvono al rientro.",
          },
          {
            type: "ul",
            items: [
              "Finestre fisse per la comunicazione con casa, non in qualsiasi momento",
              "Niente discussioni emotive nelle 12 ore prima di un'operazione",
              "Frustrazioni con i pari si risolvono dopo, mai sotto il casco",
              "Identificare i propri trigger (musica nostalgica, chiamate, foto) e neutralizzarli",
            ],
          },
        ],
      },
      {
        heading: "Recupero post-missione",
        blocks: [
          {
            type: "callout",
            title: "Protocollo di recupero base",
            body: "Idratazione (1 L nelle prime ore) → cibo caldo → doccia o lavaggio essenziale → sonno protetto → debrief tecnico → tempo morto (24–48 h) → ritorno graduale alla routine. Saltare uno di questi step accumula debito che esploderà più avanti.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Considerare la stanchezza una debolezza morale invece che un parametro fisiologico",
              "Saltare il pasto perché 'non ho fame' (in zona la fame non emerge fino al collasso)",
              "Usare il telefono nelle pause di guardia, distruggendo l'adattamento al buio",
              "Caffeina continua senza finestre di astinenza — tolleranza alta, beneficio zero",
              "Trattare il sonno come opzionale quando il comando lo richiede — non lo è",
              "Continuare in operazione dopo aver riconosciuto sintomi di degrado cognitivo grave",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le rotazioni in trincea sul fronte ucraino arrivano a 10–14 giorni in posizioni che non consentono sonno continuo per più di 2 ore. Il degrado è cumulativo e non lineare: il sesto giorno è dieci volte peggio del terzo. Le unità che ruotano i propri uomini ogni 5–7 giorni mantengono efficacia decisionale; quelle che li tengono in linea per 'eroismo' producono decisioni sbagliate che costano vite. La gestione del sonno è una responsabilità di comando, non una scelta individuale.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Mental discipline is the ability to maintain attention, decision and routine when the nervous system would prefer to shut down. It is not romantic willpower: it is concrete management of sleep, food, hydration and attentional focus. Cognitive fatigue kills more than laziness.",
    sections: [
      {
        heading: "Sleep management",
        blocks: [
          {
            type: "p",
            text: "Sleep deprivation is the first documented cause of operational degradation. After 24 hours awake, cognitive performance equals a 0.10% blood alcohol level. After 48 hours, judgement becomes erratic, short-term memory fragments, friend/foe identification is compromised. Sleep is not luxury: it is ammunition.",
          },
          {
            type: "ul",
            items: [
              "Sleep in windows, even short: 20–90 minutes give measurable recovery",
              "Sleep banking: sleep heavily on the days preceding known operations",
              "Caffeine as a tool (200 mg every 4 h), not a continuous lifestyle",
              "Power nap 20 min: before the crash, not after — deep-sleep inertia is worse than tiredness",
              "Dark, cool, protected position: sleeping poorly equals not sleeping",
              "No stimulants in the last 6 hours before main sleep",
            ],
          },
          {
            type: "warn",
            title: "WARNING",
            body: "Your judgement of your own tiredness is the first thing tiredness compromises. Rely on a team-mate's assessment. If two team members assess a third differently, trust the external judgement.",
          },
        ],
      },
      {
        heading: "Food and hydration",
        blocks: [
          {
            type: "p",
            text: "An operator in activity burns 4 000–6 000 kcal per day. Not eating from laziness or stress means destroying yourself from inside within 72 hours. Hydration follows the same principle: 3–5 litres per day in temperate conditions, more in heat or under load. Thirst is already a sign of advanced dehydration.",
          },
          {
            type: "ul",
            items: [
              "Eat on schedule, even without hunger — combat-zone hunger is suppressed by adrenaline",
              "Complex carbs before long operations, protein at recovery",
              "Electrolytes, not just water, when sweating heavily",
              "Coffee and energy drinks consume reserves, not recreate them",
              "Never operate without water on body, even on short patrols",
            ],
          },
        ],
      },
      {
        heading: "Focus control",
        blocks: [
          {
            type: "p",
            text: "Attentional focus is a limited resource. The ability to maintain attention on an observation sector for 30 minutes drops sharply after the first hour of boredom. Three operational techniques: rotation, micro-tasking, external anchors.",
          },
          {
            type: "ol",
            items: [
              "Rotation: change the observer every 30–45 minutes, not every hour",
              "Micro-tasking: divide the sector into sub-sectors and inspect cyclically",
              "External anchors: an audio timer or a team-mate asking a question realigns attention",
              "Short stretching and hydration between rotations",
            ],
          },
        ],
      },
      {
        heading: "Distraction control",
        blocks: [
          {
            type: "p",
            text: "Distractions in the operational area are not only social media: they are home worries, internal team frustrations, chat polemics. A mind occupied by non-operational problems is a mind that will fail the next OODA. The principle: compartmentalise. Family exists, but it does not exist during the shift. Internal problems exist, but they are resolved on return.",
          },
          {
            type: "ul",
            items: [
              "Fixed windows for home communication, not at any time",
              "No emotional arguments in the 12 hours before an operation",
              "Peer frustrations are resolved later, never under helmet",
              "Identify your triggers (nostalgic music, calls, photos) and neutralise them",
            ],
          },
        ],
      },
      {
        heading: "Post-mission recovery",
        blocks: [
          {
            type: "callout",
            title: "Baseline recovery protocol",
            body: "Hydration (1 L in the first hours) → hot food → shower or essential wash → protected sleep → technical debrief → dead time (24–48 h) → gradual return to routine. Skipping any of these steps accumulates debt that explodes later.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Treating tiredness as a moral weakness instead of a physiological parameter",
              "Skipping a meal because 'I'm not hungry' (in theatre hunger does not appear until collapse)",
              "Using the phone during guard breaks, destroying dark adaptation",
              "Continuous caffeine without abstinence windows — high tolerance, zero benefit",
              "Treating sleep as optional when command asks for it — it is not",
              "Continuing in operation after recognising serious cognitive degradation",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Trench rotations on the Ukrainian front reach 10–14 days in positions that do not allow continuous sleep for more than 2 hours. The degradation is cumulative and non-linear: day six is ten times worse than day three. Units that rotate men every 5–7 days maintain decision effectiveness; those that hold them on the line for 'heroism' produce wrong decisions that cost lives. Sleep management is a command responsibility, not an individual choice.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Disciplina mental é a capacidade de manter atenção, decisão e rotina quando o sistema nervoso preferiria desligar. Não é força de vontade romântica: é gestão concreta do sono, alimentação, hidratação e foco atencional. Fadiga cognitiva mata mais do que preguiça.",
    sections: [
      {
        heading: "Gestão do sono",
        blocks: [
          {
            type: "p",
            text: "A privação de sono é a primeira causa documentada de degradação operacional. Após 24 horas acordado, o desempenho cognitivo equivale a 0,10% de álcool no sangue. Após 48 horas, julgamentos ficam erráticos, a memória de curto prazo se fragmenta, a identificação amigo/inimigo fica comprometida. Sono não é luxo: é munição.",
          },
          {
            type: "ul",
            items: [
              "Dormir em janelas, mesmo curtas: 20–90 minutos dão recuperação mensurável",
              "Sleep banking: dormir bem nos dias que antecedem operações conhecidas",
              "Cafeína como ferramenta (200 mg a cada 4 h), não estilo de vida contínuo",
              "Power nap 20 min: antes do colapso, não depois — inércia de sono profundo é pior",
              "Escuro, fresco, posição protegida: dormir mal equivale a não dormir",
              "Sem estimulantes nas últimas 6 horas antes do sono principal",
            ],
          },
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "Seu julgamento sobre seu próprio cansaço é a primeira coisa que o cansaço compromete. Confiar no team-mate. Se dois membros avaliam um terceiro de forma diferente, confiar no julgamento externo.",
          },
        ],
      },
      {
        heading: "Alimentação e hidratação",
        blocks: [
          {
            type: "p",
            text: "Um operador em atividade queima 4 000–6 000 kcal por dia. Não comer por preguiça ou estresse significa se demolir por dentro em 72 horas. Hidratação segue o mesmo princípio: 3–5 litros por dia em condições temperadas, mais no calor ou sob carga. Sede já é sinal de desidratação avançada.",
          },
          {
            type: "ul",
            items: [
              "Comer em horários fixos, mesmo sem fome — em zona a fome é suprimida pela adrenalina",
              "Carboidratos complexos antes de operações longas, proteína na recuperação",
              "Eletrólitos, não só água, quando se sua muito",
              "Café e energéticos consomem reservas, não recriam",
              "Nunca operar sem água no corpo, mesmo em patrulhas curtas",
            ],
          },
        ],
      },
      {
        heading: "Controle de foco",
        blocks: [
          {
            type: "p",
            text: "O foco atencional é recurso limitado. A capacidade de manter atenção em um setor de observação por 30 minutos cai drasticamente após a primeira hora de tédio. Três técnicas operacionais: rotação, micro-tarefa, âncoras externas.",
          },
          {
            type: "ol",
            items: [
              "Rotação: trocar o observador a cada 30–45 minutos, não a cada hora",
              "Micro-tarefa: dividir o setor em sub-setores e inspecionar ciclicamente",
              "Âncoras externas: timer audível ou um colega fazendo uma pergunta realinha a atenção",
              "Alongamento breve e hidratação entre rotações",
            ],
          },
        ],
      },
      {
        heading: "Controle de distrações",
        blocks: [
          {
            type: "p",
            text: "Distrações na zona operativa não são só redes sociais: são preocupações de casa, frustrações internas do team, polêmicas de chat. Uma mente ocupada por problemas não operacionais falhará no próximo OODA. O princípio: compartimentar. A família existe, mas não existe durante o turno. Problemas internos existem, mas se resolvem no retorno.",
          },
          {
            type: "ul",
            items: [
              "Janelas fixas para comunicação com casa, não a qualquer hora",
              "Sem discussões emocionais nas 12 horas antes de operação",
              "Frustrações com pares resolvem-se depois, nunca sob o capacete",
              "Identificar gatilhos pessoais (música nostálgica, ligações, fotos) e neutralizá-los",
            ],
          },
        ],
      },
      {
        heading: "Recuperação pós-missão",
        blocks: [
          {
            type: "callout",
            title: "Protocolo de recuperação base",
            body: "Hidratação (1 L nas primeiras horas) → comida quente → banho ou higiene essencial → sono protegido → debrief técnico → tempo morto (24–48 h) → retorno gradual à rotina. Pular qualquer etapa acumula dívida que explode depois.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Tratar cansaço como fraqueza moral em vez de parâmetro fisiológico",
              "Pular refeição porque 'não estou com fome' (em zona a fome só aparece no colapso)",
              "Usar o celular nas pausas de guarda, destruindo adaptação ao escuro",
              "Cafeína contínua sem janelas de abstinência — tolerância alta, benefício zero",
              "Tratar sono como opcional quando o comando pede — não é",
              "Continuar em operação após reconhecer degradação cognitiva grave",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "As rotações em trincheira no front ucraniano chegam a 10–14 dias em posições que não permitem sono contínuo por mais de 2 horas. A degradação é cumulativa e não linear: o sexto dia é dez vezes pior que o terceiro. Unidades que rodam homens a cada 5–7 dias mantêm eficácia decisória; as que os mantêm na linha por 'heroísmo' produzem decisões erradas que custam vidas. Gestão de sono é responsabilidade de comando, não escolha individual.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La discipline mentale est la capacité à maintenir attention, décision et routine quand le système nerveux préférerait s'éteindre. Ce n'est pas une volonté romantique : c'est la gestion concrète du sommeil, de l'alimentation, de l'hydratation et du focus attentionnel. La fatigue cognitive tue plus que la paresse.",
    sections: [
      {
        heading: "Gestion du sommeil",
        blocks: [
          {
            type: "p",
            text: "La privation de sommeil est la première cause documentée de dégradation opérationnelle. Après 24 heures d'éveil, les performances cognitives équivalent à 0,10% d'alcool dans le sang. Après 48 heures, le jugement devient erratique, la mémoire à court terme se fragmente, l'identification ami/ennemi est compromise. Le sommeil n'est pas un luxe : c'est de la munition.",
          },
          {
            type: "ul",
            items: [
              "Dormir par fenêtres, même courtes : 20–90 minutes apportent une récupération mesurable",
              "Sleep banking : dormir abondamment les jours précédant les opérations connues",
              "Caféine comme outil (200 mg toutes les 4 h), pas comme mode de vie continu",
              "Power nap 20 min : avant l'effondrement, pas après — l'inertie du sommeil profond est pire",
              "Obscur, frais, position protégée : mal dormir équivaut à ne pas dormir",
              "Aucun stimulant dans les 6 heures avant le sommeil principal",
            ],
          },
          {
            type: "warn",
            title: "ATTENTION",
            body: "Votre jugement sur votre propre fatigue est la première chose que la fatigue compromet. S'en remettre à un coéquipier. Si deux membres évaluent différemment un troisième, faire confiance au jugement extérieur.",
          },
        ],
      },
      {
        heading: "Alimentation et hydratation",
        blocks: [
          {
            type: "p",
            text: "Un opérateur en activité brûle 4 000–6 000 kcal par jour. Ne pas manger par paresse ou stress, c'est se démolir de l'intérieur en 72 heures. L'hydratation suit le même principe : 3–5 litres par jour en climat tempéré, plus à la chaleur ou sous charge. La soif est déjà un signe de déshydratation avancée.",
          },
          {
            type: "ul",
            items: [
              "Manger à heures fixes, même sans faim — la faim en zone est supprimée par l'adrénaline",
              "Glucides complexes avant opérations longues, protéines à la récupération",
              "Électrolytes, pas seulement de l'eau, en cas de forte sudation",
              "Café et boissons énergétiques consomment les réserves, ne les recréent pas",
              "Ne jamais opérer sans eau sur soi, même pour des patrouilles courtes",
            ],
          },
        ],
      },
      {
        heading: "Contrôle du focus",
        blocks: [
          {
            type: "p",
            text: "Le focus attentionnel est une ressource limitée. La capacité à maintenir l'attention sur un secteur d'observation pendant 30 minutes chute fortement après la première heure d'ennui. Trois techniques opérationnelles : rotation, micro-tâches, ancres externes.",
          },
          {
            type: "ol",
            items: [
              "Rotation : changer l'observateur toutes les 30–45 minutes, pas chaque heure",
              "Micro-tâches : diviser le secteur en sous-secteurs et les inspecter cycliquement",
              "Ancres externes : un minuteur audible ou un coéquipier qui pose une question réaligne l'attention",
              "Étirement court et hydratation entre les rotations",
            ],
          },
        ],
      },
      {
        heading: "Contrôle des distractions",
        blocks: [
          {
            type: "p",
            text: "Les distractions en zone opérationnelle ne sont pas que les réseaux sociaux : ce sont les soucis domestiques, les frustrations internes à l'équipe, les polémiques de chat. Un esprit occupé par des problèmes non opérationnels échouera au prochain OODA. Le principe : compartimenter. La famille existe, mais pas pendant le quart. Les problèmes internes existent, mais se règlent au retour.",
          },
          {
            type: "ul",
            items: [
              "Fenêtres fixes pour communiquer avec la maison, pas à tout moment",
              "Pas de disputes émotionnelles dans les 12 heures avant une opération",
              "Les frustrations entre pairs se règlent après, jamais sous le casque",
              "Identifier ses déclencheurs (musique nostalgique, appels, photos) et les neutraliser",
            ],
          },
        ],
      },
      {
        heading: "Récupération post-mission",
        blocks: [
          {
            type: "callout",
            title: "Protocole de récupération de base",
            body: "Hydratation (1 L dans les premières heures) → repas chaud → douche ou hygiène essentielle → sommeil protégé → debrief technique → temps mort (24–48 h) → retour progressif à la routine. Sauter une étape accumule une dette qui explosera plus tard.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Considérer la fatigue comme faiblesse morale plutôt que paramètre physiologique",
              "Sauter un repas parce que « je n'ai pas faim » (en zone la faim n'apparaît qu'à l'effondrement)",
              "Utiliser le téléphone aux pauses de garde, détruisant l'adaptation à l'obscurité",
              "Caféine continue sans fenêtres d'abstinence — tolérance élevée, bénéfice nul",
              "Traiter le sommeil comme optionnel quand le commandement le demande — il ne l'est pas",
              "Poursuivre l'opération après avoir reconnu une dégradation cognitive grave",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les rotations en tranchée sur le front ukrainien atteignent 10–14 jours dans des positions ne permettant pas un sommeil continu de plus de 2 heures. La dégradation est cumulative et non linéaire : le sixième jour est dix fois pire que le troisième. Les unités qui font tourner leurs hommes tous les 5–7 jours maintiennent l'efficacité décisionnelle ; celles qui les gardent en ligne par « héroïsme » produisent des décisions erronées qui coûtent des vies. La gestion du sommeil est une responsabilité de commandement, pas un choix individuel.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
