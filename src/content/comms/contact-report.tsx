import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

interface Strings {
  intro: string;
  difference: string;
  differenceBody: string;
  format: string;
  formatBody: string;
  fields: ReadonlyArray<{ key: string; title: string; body: string }>;
  initial: string;
  initialBody: string;
  initialExample: ReadonlyArray<string>;
  detailed: string;
  detailedExample: ReadonlyArray<string>;
  break: string;
  breakBody: string;
  breakExample: ReadonlyArray<string>;
  drone: string;
  droneBody: string;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "Il contact report è la trasmissione immediata che dichiara contatto con il nemico — visivo, di fuoco o ravvicinato — e fa partire il ciclo decisionale del comando. È un formato volutamente breve: serve a far sapere a tutta la rete che c'è contatto, prima ancora di sapere tutti i dettagli. I dettagli arrivano dopo, in un report di follow-up.",
    difference: "Differenza tra contact, SALUTE e SITREP",
    differenceBody:
      "Il contact report dichiara un evento in corso (\"sto combattendo adesso\"). Il SALUTE riporta un'osservazione (\"ho visto qualcosa\"), tipicamente senza contatto attivo. Il SITREP riassume periodicamente la situazione (\"ecco dove sono e cosa sta succedendo\"). Confondere i tre formati genera reazioni sbagliate dal comando: un SALUTE letto come contact spreca QRF, un contact letto come SITREP lascia un'unità senza supporto sotto fuoco.",
    format: "Formato",
    formatBody:
      "Quattro campi essenziali, trasmessi nell'ordine. Una sola trasmissione, sotto i 10 secondi. Tutto il resto arriva dopo. La regola è: prima dichiarare il contatto, poi gestire il contatto, poi dettagliare.",
    fields: [
      { key: "contact", title: "CONTACT — dichiarazione", body: "La parola CONTACT all'inizio interrompe immediatamente la rete e segnala che traffico non prioritario si sospende. Su reti NATO standard, CONTACT è la dichiarazione di priorità più alta dopo MEDEVAC e FLASH." },
      { key: "direction", title: "Direzione", body: "Cardinale (NORTH, SOUTH-EAST) o azimuth (\"two-seven-zero degrees\"). Se in posizione di tiro, può essere espressa relativamente al fronte amico (\"twelve o'clock\")." },
      { key: "distance", title: "Distanza", body: "Stima in metri. Se incerta, range (\"two hundred to three hundred meters\")." },
      { key: "description", title: "Descrizione sintetica", body: "Cosa: numero stimato + tipo + cosa stanno facendo. Esempio: \"squad-size dismounts engaging from treeline\". Niente analisi, niente intenzioni — solo osservazione." },
    ],
    initial: "Contact iniziale",
    initialBody:
      "La prima trasmissione è la più importante e la più breve. Saturare la rete con dettagli al primo contact è un errore: la priorità è informare il comando che il contact esiste, poi tornare in fight.",
    initialExample: [
      "ZULU SIX, ALPHA TWO, CONTACT, NORTH-EAST, three-hundred meters, squad-size dismounts, BREAK, engaging, OUT.",
    ],
    detailed: "Follow-up esteso",
    detailedExample: [
      "ZULU SIX, this is ALPHA TWO, CONTACT FOLLOW-UP, OVER.",
      "DIRECTION: north-east, two-seven-zero degrees.",
      "DISTANCE: three-fife-zero meters.",
      "ENEMY: estimated six to eight dismounts, AK-platform, one PKM.",
      "ACTIVITY: engaging from treeline, attempting flank to our left.",
      "FRIENDLY: two casualties, one LITTER, position holding, fires requested.",
      "INTENT: hold position, request 60mm mortar on grid four-fife-uniform-uniform-three-six-niner-two-fife-fife.",
      "How copy, over.",
    ],
    break: "BREAK CONTACT — quando il contatto finisce",
    breakBody:
      "Quando il contatto si rompe (perdita di visivo, disengagement, ritirata nemica), la rete deve saperlo. \"BREAK CONTACT\" è la dichiarazione che chiude formalmente l'evento. Senza, il comando continua a tenere asset sospesi e la QRF resta in moto inutilmente.",
    breakExample: [
      "ZULU SIX, ALPHA TWO, BREAK CONTACT, north-east, dismounts withdrew into treeline, no visual, OUT.",
    ],
    drone: "Contact spotted da drone vs ground",
    droneBody:
      "Sul fronte ucraino una percentuale crescente di contact iniziali viene segnalata dal pilota di drone, non dalla pattuglia a terra. Il formato resta lo stesso ma il campo \"reporting unit\" diventa critico: chi riceve deve sapere se il dato è ottico-da-drone (alta precisione, possibile delay), termico-notturno (precisione media, identificazione difficile) o visivo-a-terra (alta affidabilità ma area limitata). Sulla rete: precedere il contact con \"FROM DRONE\" o \"FROM GROUND\" per disambiguare immediatamente.",
    errors: "Errori comuni",
    errorsItems: [
      "Trasmettere paragrafo intero di analisi nel primo contact",
      "Dimenticare la parola CONTACT — il comando perde priorità",
      "Confondere direzione cardinale e azimuth nella stessa frase",
      "Non dichiarare BREAK CONTACT quando il contatto finisce",
      "Riportare \"sotto fuoco\" senza specificare direzione (impossibile rispondere con fires)",
      "Aspettare di sapere tutto prima di trasmettere — il primo contact deve uscire entro 30 secondi dall'evento",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Il contact report sotto FPV continui è un caso particolare. Quando il primo \"contact\" è un drone FPV che arriva su una pattuglia in movimento, non c'è tempo per un report standard: la procedura è dispersione/cover/jamming personale, e il report parte solo dopo la rottura del contatto o il primo IMPACT. Il formato si adatta: \"FPV CONTACT, [direzione], BREAK, dispersing, OUT\" — sei secondi totali. Sul fronte 2024-2026 il comando si aspetta questo schema e la QRF è già modellata su questa tempistica.",
  },
  en: {
    intro:
      "The contact report is the immediate transmission declaring contact with the enemy — visual, by fire, or close — and triggers the command decision cycle. It is deliberately brief: it tells the whole net that contact exists, before all details are known. Details follow in a follow-up report.",
    difference: "Difference between contact, SALUTE and SITREP",
    differenceBody:
      "The contact report declares a live event (\"I am fighting now\"). The SALUTE reports an observation (\"I saw something\"), typically without active contact. The SITREP periodically summarises the situation (\"this is where I am and what is happening\"). Mixing the three triggers wrong reactions from command: a SALUTE read as contact wastes QRF, a contact read as SITREP leaves a unit unsupported under fire.",
    format: "Format",
    formatBody:
      "Four essential fields, transmitted in order. One single transmission, under 10 seconds. Everything else follows. Rule: declare contact first, handle contact second, detail third.",
    fields: [
      { key: "contact", title: "CONTACT — declaration", body: "The word CONTACT at the start cuts the net and pauses non-priority traffic. On NATO-standard nets, CONTACT is the highest priority declaration after MEDEVAC and FLASH." },
      { key: "direction", title: "Direction", body: "Cardinal (NORTH, SOUTH-EAST) or azimuth (\"two-seven-zero degrees\"). If in a firing position, can be relative to friendly front (\"twelve o'clock\")." },
      { key: "distance", title: "Distance", body: "Estimate in metres. If uncertain, range (\"two hundred to three hundred meters\")." },
      { key: "description", title: "Brief description", body: "What: estimated number + type + what they are doing. e.g. \"squad-size dismounts engaging from treeline\". No analysis, no intent — observation only." },
    ],
    initial: "Initial contact",
    initialBody:
      "The first transmission is the most important and the shortest. Saturating the net with detail on the first contact is an error: the priority is to inform command that contact exists, then return to the fight.",
    initialExample: [
      "ZULU SIX, ALPHA TWO, CONTACT, NORTH-EAST, three-hundred meters, squad-size dismounts, BREAK, engaging, OUT.",
    ],
    detailed: "Extended follow-up",
    detailedExample: [
      "ZULU SIX, this is ALPHA TWO, CONTACT FOLLOW-UP, OVER.",
      "DIRECTION: north-east, two-seven-zero degrees.",
      "DISTANCE: three-fife-zero meters.",
      "ENEMY: estimated six to eight dismounts, AK-platform, one PKM.",
      "ACTIVITY: engaging from treeline, attempting flank to our left.",
      "FRIENDLY: two casualties, one LITTER, position holding, fires requested.",
      "INTENT: hold position, request 60mm mortar on grid four-fife-uniform-uniform-three-six-niner-two-fife-fife.",
      "How copy, over.",
    ],
    break: "BREAK CONTACT — when contact ends",
    breakBody:
      "When contact breaks (loss of visual, disengagement, enemy withdrawal), the net must know. \"BREAK CONTACT\" is the declaration that formally closes the event. Without it, command keeps assets suspended and QRF stays in motion unnecessarily.",
    breakExample: [
      "ZULU SIX, ALPHA TWO, BREAK CONTACT, north-east, dismounts withdrew into treeline, no visual, OUT.",
    ],
    drone: "Drone-spotted vs ground-spotted contact",
    droneBody:
      "On the Ukrainian front a growing share of initial contacts is reported by the drone pilot, not the ground patrol. Format stays the same but the \"reporting unit\" field becomes critical: the receiver must know if the source is optical-from-drone (high precision, possible delay), thermal-by-night (medium precision, identification hard) or ground-visual (high reliability but limited area). On the net: prefix the contact with \"FROM DRONE\" or \"FROM GROUND\" to disambiguate immediately.",
    errors: "Common mistakes",
    errorsItems: [
      "Transmitting a paragraph of analysis on the first contact",
      "Forgetting the word CONTACT — command loses priority",
      "Mixing cardinal and azimuth in the same sentence",
      "Not declaring BREAK CONTACT when contact ends",
      "Reporting \"under fire\" without direction (impossible to answer with fires)",
      "Waiting to know everything before transmitting — the first contact must leave within 30 seconds of the event",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "Contact reporting under continuous FPV pressure is a special case. When the first \"contact\" is an FPV drone arriving on a moving patrol, there is no time for a standard report: procedure is dispersal/cover/personal jamming, and the report only goes out after contact breaks or first IMPACT. The format adapts: \"FPV CONTACT, [direction], BREAK, dispersing, OUT\" — six seconds total. On the 2024–2026 front, command expects this pattern and QRF is already shaped to this timing.",
  },
  "pt-br": {
    intro:
      "O contact report é a transmissão imediata que declara contato com o inimigo — visual, por fogo ou de proximidade — e dispara o ciclo decisório do comando. É deliberadamente breve: avisa a toda a rede que há contato, antes mesmo de todos os detalhes. Os detalhes vêm depois, em report de follow-up.",
    difference: "Diferença entre contact, SALUTE e SITREP",
    differenceBody:
      "O contact report declara evento em curso (\"estou combatendo agora\"). O SALUTE reporta observação (\"vi algo\"), tipicamente sem contato ativo. O SITREP resume periodicamente a situação (\"é aqui que estou e o que se passa\"). Misturar os três gera reações erradas do comando: SALUTE lido como contact gasta QRF, contact lido como SITREP deixa unidade sem suporte sob fogo.",
    format: "Formato",
    formatBody:
      "Quatro campos essenciais, na ordem. Uma única transmissão, abaixo de 10 segundos. Tudo o mais vem depois. Regra: primeiro declarar o contato, depois gerenciar o contato, depois detalhar.",
    fields: [
      { key: "contact", title: "CONTACT — declaração", body: "A palavra CONTACT no início interrompe a rede e pausa tráfego não prioritário. Em redes padrão OTAN, CONTACT é a declaração de prioridade mais alta depois de MEDEVAC e FLASH." },
      { key: "direction", title: "Direção", body: "Cardinal (NORTH, SOUTH-EAST) ou azimute (\"two-seven-zero degrees\"). Em posição de tiro, pode ser relativa à frente amiga (\"twelve o'clock\")." },
      { key: "distance", title: "Distância", body: "Estimativa em metros. Se incerto, faixa (\"two hundred to three hundred meters\")." },
      { key: "description", title: "Descrição sintética", body: "O quê: número estimado + tipo + o que estão fazendo. Ex.: \"squad-size dismounts engaging from treeline\". Sem análise, sem intenção — só observação." },
    ],
    initial: "Contact inicial",
    initialBody:
      "A primeira transmissão é a mais importante e a mais curta. Saturar a rede com detalhes no primeiro contact é erro: a prioridade é informar o comando de que o contato existe, depois voltar ao combate.",
    initialExample: [
      "ZULU SIX, ALPHA TWO, CONTACT, NORTH-EAST, three-hundred meters, squad-size dismounts, BREAK, engaging, OUT.",
    ],
    detailed: "Follow-up estendido",
    detailedExample: [
      "ZULU SIX, this is ALPHA TWO, CONTACT FOLLOW-UP, OVER.",
      "DIRECTION: north-east, two-seven-zero degrees.",
      "DISTANCE: three-fife-zero meters.",
      "ENEMY: estimated six to eight dismounts, AK-platform, one PKM.",
      "ACTIVITY: engaging from treeline, attempting flank to our left.",
      "FRIENDLY: two casualties, one LITTER, position holding, fires requested.",
      "INTENT: hold position, request 60mm mortar on grid four-fife-uniform-uniform-three-six-niner-two-fife-fife.",
      "How copy, over.",
    ],
    break: "BREAK CONTACT — quando o contato termina",
    breakBody:
      "Quando o contato se rompe (perda do visual, desengajamento, recuo inimigo), a rede precisa saber. \"BREAK CONTACT\" é a declaração que encerra formalmente o evento. Sem ela, o comando mantém ativos em suspenso e a QRF segue em movimento sem necessidade.",
    breakExample: [
      "ZULU SIX, ALPHA TWO, BREAK CONTACT, north-east, dismounts withdrew into treeline, no visual, OUT.",
    ],
    drone: "Contact por drone vs por solo",
    droneBody:
      "No front ucraniano, uma fatia crescente dos primeiros contacts é reportada pelo piloto de drone, não pela patrulha em solo. O formato é o mesmo mas o campo \"reporting unit\" se torna crítico: quem recebe precisa saber se a fonte é óptica-por-drone (alta precisão, possível delay), térmica-noturna (precisão média, ID difícil) ou visual-em-solo (alta confiabilidade mas área limitada). Na rede: prefixar o contact com \"FROM DRONE\" ou \"FROM GROUND\" para desambiguar imediatamente.",
    errors: "Erros comuns",
    errorsItems: [
      "Transmitir parágrafo inteiro de análise no primeiro contact",
      "Esquecer a palavra CONTACT — o comando perde prioridade",
      "Misturar cardinal e azimute na mesma frase",
      "Não declarar BREAK CONTACT quando o contato termina",
      "Reportar \"sob fogo\" sem especificar direção (impossível responder com fires)",
      "Esperar saber tudo antes de transmitir — o primeiro contact deve sair em até 30 segundos do evento",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "Contact report sob FPV contínuo é caso especial. Quando o primeiro \"contact\" é um FPV chegando sobre patrulha em movimento, não há tempo para report padrão: o procedimento é dispersão/cobertura/jamming pessoal, e o report só sai após quebra do contato ou primeiro IMPACT. O formato se adapta: \"FPV CONTACT, [direção], BREAK, dispersing, OUT\" — seis segundos. No front 2024–2026 o comando já espera esse padrão e a QRF está modelada nessa tempistica.",
  },
  fr: {
    intro:
      "Le contact report est l'émission immédiate qui déclare un contact avec l'ennemi — visuel, par le feu ou rapproché — et déclenche le cycle décisionnel du commandement. Il est délibérément bref : il informe tout le réseau qu'il y a contact, avant que tous les détails ne soient connus. Les détails arrivent ensuite dans un report de follow-up.",
    difference: "Différence entre contact, SALUTE et SITREP",
    differenceBody:
      "Le contact report déclare un événement en cours (« je combats maintenant »). Le SALUTE rapporte une observation (« j'ai vu quelque chose »), généralement sans contact actif. Le SITREP résume périodiquement la situation (« voici où je suis et ce qui se passe »). Confondre les trois génère de mauvaises réactions du commandement : un SALUTE lu comme contact gaspille la QRF, un contact lu comme SITREP laisse une unité sans soutien sous le feu.",
    format: "Format",
    formatBody:
      "Quatre champs essentiels, dans l'ordre. Une seule émission, moins de 10 secondes. Tout le reste vient après. Règle : déclarer le contact d'abord, gérer le contact ensuite, détailler après.",
    fields: [
      { key: "contact", title: "CONTACT — déclaration", body: "Le mot CONTACT en tête interrompt le réseau et met en pause le trafic non prioritaire. Sur réseaux OTAN standard, CONTACT est la déclaration de plus haute priorité après MEDEVAC et FLASH." },
      { key: "direction", title: "Direction", body: "Cardinale (NORTH, SOUTH-EAST) ou azimut (« two-seven-zero degrees »). En position de tir, peut être relative au front ami (« twelve o'clock »)." },
      { key: "distance", title: "Distance", body: "Estimation en mètres. Si incertain, fourchette (« two hundred to three hundred meters »)." },
      { key: "description", title: "Description brève", body: "Quoi : nombre estimé + type + ce qu'ils font. Ex. « squad-size dismounts engaging from treeline ». Pas d'analyse, pas d'intention — observation uniquement." },
    ],
    initial: "Contact initial",
    initialBody:
      "La première émission est la plus importante et la plus courte. Saturer le réseau de détails sur le premier contact est une erreur : la priorité est d'informer le commandement de l'existence du contact, puis de retourner au combat.",
    initialExample: [
      "ZULU SIX, ALPHA TWO, CONTACT, NORTH-EAST, three-hundred meters, squad-size dismounts, BREAK, engaging, OUT.",
    ],
    detailed: "Follow-up étendu",
    detailedExample: [
      "ZULU SIX, this is ALPHA TWO, CONTACT FOLLOW-UP, OVER.",
      "DIRECTION: north-east, two-seven-zero degrees.",
      "DISTANCE: three-fife-zero meters.",
      "ENEMY: estimated six to eight dismounts, AK-platform, one PKM.",
      "ACTIVITY: engaging from treeline, attempting flank to our left.",
      "FRIENDLY: two casualties, one LITTER, position holding, fires requested.",
      "INTENT: hold position, request 60mm mortar on grid four-fife-uniform-uniform-three-six-niner-two-fife-fife.",
      "How copy, over.",
    ],
    break: "BREAK CONTACT — fin du contact",
    breakBody:
      "Lorsque le contact rompt (perte du visuel, désengagement, retrait ennemi), le réseau doit le savoir. « BREAK CONTACT » est la déclaration qui clôt formellement l'événement. Sans elle, le commandement garde des moyens en suspens et la QRF reste en mouvement inutilement.",
    breakExample: [
      "ZULU SIX, ALPHA TWO, BREAK CONTACT, north-east, dismounts withdrew into treeline, no visual, OUT.",
    ],
    drone: "Contact spotted par drone vs au sol",
    droneBody:
      "Sur le front ukrainien, une part croissante des premiers contacts est signalée par le pilote de drone, pas par la patrouille au sol. Le format reste le même mais le champ « unité émettrice » devient critique : le receveur doit savoir si la source est optique-drone (haute précision, délai possible), thermique-nuit (précision moyenne, identification difficile) ou visuel-sol (haute fiabilité mais zone limitée). Sur le réseau : préfixer le contact par « FROM DRONE » ou « FROM GROUND » pour désambiguïser immédiatement.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Émettre un paragraphe d'analyse au premier contact",
      "Oublier le mot CONTACT — le commandement perd la priorité",
      "Mélanger direction cardinale et azimut dans la même phrase",
      "Ne pas déclarer BREAK CONTACT quand le contact prend fin",
      "Reporter « sous le feu » sans préciser la direction (réponse fires impossible)",
      "Attendre de tout savoir avant d'émettre — le premier contact doit partir dans les 30 secondes",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Le contact report sous pression FPV continue est un cas particulier. Quand le premier « contact » est un FPV arrivant sur une patrouille en mouvement, il n'y a pas le temps pour un report standard : la procédure est dispersion/couvert/jamming personnel, et le report ne part qu'après la rupture du contact ou le premier IMPACT. Le format s'adapte : « FPV CONTACT, [direction], BREAK, dispersing, OUT » — six secondes au total. Sur le front 2024–2026 le commandement attend ce schéma et la QRF est déjà calée sur ce timing.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.difference}</h2>
        <p>{s.differenceBody}</p>

        <h2>{s.format}</h2>
        <p>{s.formatBody}</p>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {s.fields.map((f) => (
              <tr key={f.key}>
                <td className="mono">{f.title}</td>
                <td>{f.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.initial}</h2>
        <p>{s.initialBody}</p>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.initialExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.detailed}</h2>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.detailedExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.break}</h2>
        <p>{s.breakBody}</p>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.breakExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.drone}</h2>
        <blockquote>{s.droneBody}</blockquote>

        <h2>{s.errors}</h2>
        <ul>
          {s.errorsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>
      </>
    ),
  };
}
