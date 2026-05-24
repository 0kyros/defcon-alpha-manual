import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const PROWORDS_CORE: ReadonlyArray<{
  word: string;
  use: string;
}> = [
  { word: "OVER", use: "Fine della propria trasmissione, attesa di risposta." },
  { word: "OUT", use: "Fine dello scambio. Non ci si aspetta risposta." },
  { word: "ROGER", use: "Messaggio ricevuto e compreso." },
  { word: "WILCO", use: "Will Comply. Ricevuto, compreso, sarà eseguito." },
  { word: "SAY AGAIN", use: "Ripetere la trasmissione (non \"REPEAT\")." },
  { word: "I SAY AGAIN", use: "Sto per ripetere la mia trasmissione." },
  { word: "I SPELL", use: "Sto per fare lo spelling della parola successiva." },
  { word: "AFFIRMATIVE", use: "Sì, conferma." },
  { word: "NEGATIVE", use: "No, negazione." },
  { word: "BREAK", use: "Pausa tecnica dentro la stessa trasmissione." },
  { word: "BREAK BREAK", use: "Interruzione di emergenza del traffico in corso." },
  { word: "CORRECTION", use: "Errore di trasmissione, segue la correzione." },
  { word: "DISREGARD", use: "Ignorare la trasmissione precedente." },
  { word: "STAND BY", use: "Restare in ascolto, pausa breve." },
  { word: "WAIT", use: "Attendere meno di 5 secondi." },
  { word: "WAIT OUT", use: "Attendere oltre 5 secondi, si richiamerà." },
  { word: "READ BACK", use: "Ripetere quanto trasmesso per conferma." },
  { word: "I READ BACK", use: "Sto ripetendo quanto ricevuto per conferma." },
  { word: "RELAY", use: "Trasmettere il messaggio a una terza stazione." },
  { word: "RADIO CHECK", use: "Test di qualità del collegamento." },
  { word: "ROGER SO FAR", use: "Confermo ricezione fino a questo punto, procedi." },
  { word: "EXECUTE", use: "Eseguire l'ordine concordato." },
  { word: "EXECUTE TO FOLLOW", use: "L'ordine arriverà; prepararsi all'EXECUTE." },
];

const PROWORDS_PRECEDENCE: ReadonlyArray<{
  word: string;
  use: string;
}> = [
  { word: "FLASH", use: "Precedenza massima. Eventi di importanza nazionale o sopravvivenza unità." },
  { word: "IMMEDIATE", use: "Eventi che richiedono azione entro 30 minuti." },
  { word: "PRIORITY", use: "Traffico urgente ma non immediato. Azione entro 3 ore." },
  { word: "ROUTINE", use: "Traffico normale, azione entro 6 ore." },
];

const PROWORDS_BANNED: ReadonlyArray<{
  word: string;
  why: string;
}> = [
  { word: "OVER AND OUT", why: "Civile e logicamente contraddittorio (OVER attende risposta, OUT chiude). Usare solo OUT." },
  { word: "COPY THAT", why: "Civile/gergo cinematografico. Non standard NATO. Usare ROGER." },
  { word: "10-4", why: "Codice police-radio statunitense, non NATO. Usare ROGER." },
  { word: "ROGER THAT", why: "Variante civile. ROGER è già completo." },
  { word: "REPEAT", why: "Procedura artiglieria: significa \"ripetere il fuoco\". Per ripetere una trasmissione si usa SAY AGAIN." },
  { word: "BREAKER BREAKER", why: "Slang CB civile. Inappropriato su rete militare." },
];

interface Strings {
  intro: string;
  what: string;
  whatBody: string;
  core: string;
  coreBody: string;
  examples: string;
  examplesLines: ReadonlyArray<string>;
  precedence: string;
  precedenceBody: string;
  banned: string;
  bannedBody: string;
  multinational: string;
  multinationalBody: string;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "I prowords (procedure words) sono parole o brevi espressioni che sostituiscono frasi più lunghe per rendere il traffico radio inequivocabile, rapido e indipendente dalla lingua madre. Sono lo standard internazionale: chi parla con un proword sta dichiarando con precisione il tipo di azione richiesta, senza ambiguità lessicali o culturali. La padronanza dei prowords è il segno più immediato del livello di addestramento radio di un operatore.",
    what: "Cosa sono e perché esistono",
    whatBody:
      "Una frase naturale come \"ok, capito, te lo faccio sapere quando l'ho fatto\" sotto stress, su voce compressa e in lingua non nativa è una bomba a orologeria di interpretazioni. Un singolo proword — WILCO — la sostituisce in modo univoco. I prowords sono stati standardizzati nei manuali NATO ACP-125 e seguenti, e replicati in praticamente tutti i corsi di radio militare occidentali. Imparare il proword corretto significa parlare la stessa lingua di operatori italiani, britannici, americani, francesi, ucraini formati su standard NATO — senza dover mediare attraverso la lingua naturale.",
    core: "Prowords fondamentali",
    coreBody:
      "Lista operativa minima. Un operatore radio funzionale conosce questi prowords a memoria, li riconosce immediatamente in ricezione e li usa correttamente in trasmissione. La lista non è esaustiva: i CEOI di unità specifiche possono aggiungerne, ma questi sono il nucleo comune.",
    examples: "Esempi in contesto",
    examplesLines: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, ALPHA TWO, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, move to grid four-fife-niner-niner-three-two, I SAY AGAIN, four-fife-niner-niner-three-two, ACKNOWLEDGE, OVER.",
      "BRAVO SIX, ALPHA TWO, WILCO, OUT.",
      "ALL STATIONS, this is ZULU SIX, BREAK BREAK, FLASH traffic, STAND BY.",
      "BRAVO SIX, this is ALPHA TWO, SAY AGAIN ALL AFTER \"grid four-fife\", OVER.",
    ],
    precedence: "Prowords di precedenza",
    precedenceBody:
      "I prowords di precedenza dichiarano l'urgenza di un messaggio e modificano il comportamento della rete: il traffico più prioritario sospende quello meno prioritario. L'abuso di precedenza alta (FLASH per traffico non FLASH) è uno dei più gravi errori di disciplina radio, perché desensibilizza la rete alle vere emergenze.",
    banned: "Prowords da NON usare",
    bannedBody:
      "Espressioni civili e gergo cinematografico contaminano costantemente la rete dei volontari internazionali. Ogni occorrenza è un segnale visibile di addestramento incompleto e degrada la qualità del traffico. Eliminarle dal proprio repertorio è uno dei primi passi del passaggio da \"persona con una radio\" a \"operatore radio\".",
    multinational: "Reti multinazionali",
    multinationalBody:
      "In ambiente multinazionale i prowords sono particolarmente preziosi: un italiano e un brasiliano possono lavorare sulla stessa rete senza che la differenza di lingua sia un problema, perché i prowords standardizzano la procedura. Aggiungere prowords italianizzati o brasilianizzati (\"ricevuto\", \"entendido\") sulla rete operativa NATO è un errore comune e sistematico — funziona finché tutti gli operatori sono della stessa nazionalità, smette di funzionare al primo nuovo arrivato.",
    errors: "Errori comuni",
    errorsItems: [
      "Usare \"COPY THAT\", \"10-4\", \"OVER AND OUT\" sotto stress per riflesso cinematografico",
      "Dire \"REPEAT\" per chiedere ripetizione invece di SAY AGAIN",
      "Saltare OVER alla fine della propria trasmissione — l'interlocutore non sa se ha finito",
      "Usare WILCO senza essere sicuri di poter eseguire — è un impegno operativo",
      "Dire ROGER e poi non agire — ROGER conferma ricezione, non garanzia di azione (per quello c'è WILCO)",
      "Dire AFFIRMATIVE/NEGATIVE quando bastano ROGER/WILCO o un'altra costruzione più appropriata",
      "Improvvisare nuovi prowords dentro una squadra — funzionano fino a che ci si parla solo tra di noi",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Su rete di volontari internazionali in Ucraina si sente di tutto: prowords italiani, slang cinematografico americano, gergo civile di lingua portoghese, parole improvvisate. Il problema non è cosmetico — diventa critico nel momento in cui una QRF multinazionale risponde a una richiesta e l'autenticazione, il comando di EXECUTE o il BREAK CONTACT vengono dati con prowords non standard. Le unità che impongono disciplina sui prowords riducono significativamente gli errori di interpretazione sotto stress; quelle che lasciano correre ne pagano il costo nei momenti peggiori. Un operatore individuale non può cambiare la cultura di un'unità, ma può imporre a sé stesso la disciplina dei prowords standard — sarà il primo a essere capito da chiunque, su qualsiasi rete.",
  },
  en: {
    intro:
      "Prowords (procedure words) are single words or short expressions replacing longer phrases so that radio traffic is unambiguous, fast and independent from mother tongue. They are the international standard: a station speaking with a proword declares precisely the type of action required, with no lexical or cultural ambiguity. Proword fluency is the most immediate sign of an operator's radio training level.",
    what: "What they are and why they exist",
    whatBody:
      "A natural phrase like \"ok, got it, I'll let you know when I'm done\" under stress, on compressed voice, in a non-native language is a time bomb of interpretation. A single proword — WILCO — replaces it unambiguously. Prowords are standardised in NATO ACP-125 and follow-ons, and replicated in essentially every Western military radio course. Learning the right proword means speaking the same language as Italian, British, US, French, Ukrainian operators trained on NATO standards — without having to mediate through natural language.",
    core: "Core prowords",
    coreBody:
      "Minimum operational list. A functional radio operator knows these by heart, recognises them immediately on receive, uses them correctly on transmit. The list is not exhaustive — unit CEOIs can add more, but these are the common core.",
    examples: "Examples in context",
    examplesLines: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, ALPHA TWO, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, move to grid four-fife-niner-niner-three-two, I SAY AGAIN, four-fife-niner-niner-three-two, ACKNOWLEDGE, OVER.",
      "BRAVO SIX, ALPHA TWO, WILCO, OUT.",
      "ALL STATIONS, this is ZULU SIX, BREAK BREAK, FLASH traffic, STAND BY.",
      "BRAVO SIX, this is ALPHA TWO, SAY AGAIN ALL AFTER \"grid four-fife\", OVER.",
    ],
    precedence: "Precedence prowords",
    precedenceBody:
      "Precedence prowords declare a message's urgency and change net behaviour: higher precedence traffic suspends lower precedence traffic. Abuse of high precedence (FLASH for non-FLASH traffic) is one of the most serious radio-discipline errors because it desensitises the net to real emergencies.",
    banned: "Prowords NOT to use",
    bannedBody:
      "Civilian expressions and cinematic jargon constantly contaminate international-volunteer nets. Every occurrence is a visible signal of incomplete training and degrades traffic quality. Removing them from one's repertoire is one of the first steps in moving from \"person with a radio\" to \"radio operator\".",
    multinational: "Multinational nets",
    multinationalBody:
      "Prowords are particularly valuable on multinational nets: an Italian and a Brazilian can work the same net without language differences becoming a problem, because prowords standardise the procedure. Adding italianised or brazilianised prowords (\"ricevuto\", \"entendido\") on a NATO-procedure net is a common and systematic error — it works until everyone is of the same nationality, then breaks at the first newcomer.",
    errors: "Common mistakes",
    errorsItems: [
      "Using \"COPY THAT\", \"10-4\", \"OVER AND OUT\" under stress by cinematic reflex",
      "Saying \"REPEAT\" to ask for repetition instead of SAY AGAIN",
      "Skipping OVER at end of your transmission — the other station doesn't know you are done",
      "Using WILCO without being certain you can comply — it is an operational commitment",
      "Saying ROGER then not acting — ROGER confirms receipt, not action (WILCO is the action commitment)",
      "Saying AFFIRMATIVE/NEGATIVE when ROGER/WILCO or another construction would fit better",
      "Improvising new prowords inside a team — works only until you talk only among yourselves",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On international-volunteer nets in Ukraine you hear everything: Italian prowords, US cinematic slang, Portuguese civilian jargon, improvised words. The problem is not cosmetic — it becomes critical the moment a multinational QRF responds to a request and authentication, EXECUTE order or BREAK CONTACT are given with non-standard prowords. Units that enforce proword discipline significantly reduce interpretation errors under stress; units that don't pay the cost in the worst moments. A single operator cannot change a unit's culture, but can enforce proword discipline on themselves — they will be the one understood by anyone, on any net.",
  },
  "pt-br": {
    intro:
      "Os prowords (procedure words) são palavras ou expressões curtas que substituem frases mais longas para tornar o tráfego de rádio inequívoco, rápido e independente da língua materna. São o padrão internacional: quem fala com um proword declara com precisão o tipo de ação requerida, sem ambiguidade lexical ou cultural. O domínio dos prowords é o sinal mais imediato do nível de treinamento de um operador de rádio.",
    what: "O que são e por que existem",
    whatBody:
      "Uma frase natural como \"ok, entendi, te aviso quando terminar\" sob estresse, em voz comprimida e em língua não nativa é uma bomba-relógio de interpretação. Um único proword — WILCO — a substitui de forma inequívoca. Os prowords são padronizados nos manuais OTAN ACP-125 e seguintes, e replicados em praticamente todos os cursos de rádio militar ocidentais. Aprender o proword certo significa falar a mesma língua de operadores italianos, britânicos, americanos, franceses, ucranianos formados em padrão OTAN — sem precisar mediar pela língua natural.",
    core: "Prowords fundamentais",
    coreBody:
      "Lista operacional mínima. Um operador de rádio funcional sabe esses prowords de cor, reconhece imediatamente na recepção e usa corretamente na transmissão. A lista não é exaustiva: CEOIs de unidades específicas podem acrescentar mais, mas estes são o núcleo comum.",
    examples: "Exemplos em contexto",
    examplesLines: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, ALPHA TWO, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, move to grid four-fife-niner-niner-three-two, I SAY AGAIN, four-fife-niner-niner-three-two, ACKNOWLEDGE, OVER.",
      "BRAVO SIX, ALPHA TWO, WILCO, OUT.",
      "ALL STATIONS, this is ZULU SIX, BREAK BREAK, FLASH traffic, STAND BY.",
      "BRAVO SIX, this is ALPHA TWO, SAY AGAIN ALL AFTER \"grid four-fife\", OVER.",
    ],
    precedence: "Prowords de precedência",
    precedenceBody:
      "Os prowords de precedência declaram a urgência de uma mensagem e mudam o comportamento da rede: tráfego de precedência maior suspende tráfego de precedência menor. Abuso de alta precedência (FLASH para tráfego não FLASH) é um dos erros mais sérios de disciplina de rádio porque desensibiliza a rede a emergências reais.",
    banned: "Prowords a NÃO usar",
    bannedBody:
      "Expressões civis e jargão cinematográfico contaminam constantemente a rede de voluntários internacionais. Cada ocorrência é sinal visível de treinamento incompleto e degrada a qualidade do tráfego. Eliminá-las do próprio repertório é um dos primeiros passos da transição de \"pessoa com um rádio\" para \"operador de rádio\".",
    multinational: "Redes multinacionais",
    multinationalBody:
      "Em ambiente multinacional os prowords são especialmente valiosos: um italiano e um brasileiro podem trabalhar na mesma rede sem que a diferença de língua seja problema, porque os prowords padronizam o procedimento. Adicionar prowords aitalianizados ou abrasilerados (\"ricevuto\", \"entendido\") na rede operacional OTAN é erro comum e sistemático — funciona enquanto todos os operadores são da mesma nacionalidade, deixa de funcionar no primeiro recém-chegado.",
    errors: "Erros comuns",
    errorsItems: [
      "Usar \"COPY THAT\", \"10-4\", \"OVER AND OUT\" sob estresse por reflexo cinematográfico",
      "Dizer \"REPEAT\" para pedir repetição em vez de SAY AGAIN",
      "Pular OVER no fim da própria transmissão — o outro não sabe se você terminou",
      "Usar WILCO sem ter certeza de poder cumprir — é compromisso operacional",
      "Dizer ROGER e não agir — ROGER confirma recepção, não ação (para isso há WILCO)",
      "Dizer AFFIRMATIVE/NEGATIVE quando ROGER/WILCO ou outra construção caberia melhor",
      "Improvisar novos prowords dentro da equipe — funciona enquanto se fala só entre si",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "Em rede de voluntários internacionais na Ucrânia se ouve de tudo: prowords italianos, gíria cinematográfica americana, jargão civil em português, palavras improvisadas. O problema não é cosmético — torna-se crítico no momento em que uma QRF multinacional responde a um pedido e a autenticação, o comando de EXECUTE ou o BREAK CONTACT vêm com prowords não padrão. Unidades que impõem disciplina de prowords reduzem significativamente erros de interpretação sob estresse; as que deixam correr pagam o preço nos piores momentos. Um operador individual não muda a cultura de uma unidade, mas pode impor a disciplina de prowords padrão a si mesmo — será aquele entendido por qualquer um, em qualquer rede.",
  },
  fr: {
    intro:
      "Les prowords (procedure words) sont des mots ou expressions courtes remplaçant des phrases plus longues pour rendre le trafic radio sans ambiguïté, rapide et indépendant de la langue maternelle. C'est le standard international : une station qui parle avec un proword déclare précisément le type d'action requise, sans ambiguïté lexicale ou culturelle. La maîtrise des prowords est le signe le plus immédiat du niveau de formation radio d'un opérateur.",
    what: "Ce que c'est et pourquoi ça existe",
    whatBody:
      "Une phrase naturelle comme « ok, compris, je te tiens au courant quand c'est fait » sous stress, sur voix compressée et en langue non native est une bombe à retardement d'interprétation. Un seul proword — WILCO — la remplace sans ambiguïté. Les prowords sont standardisés dans les manuels OTAN ACP-125 et suivants, et repris dans pratiquement tous les cours radio militaires occidentaux. Apprendre le bon proword, c'est parler la même langue que des opérateurs italiens, britanniques, américains, français, ukrainiens formés au standard OTAN — sans avoir à médier via la langue naturelle.",
    core: "Prowords fondamentaux",
    coreBody:
      "Liste opérationnelle minimale. Un opérateur radio fonctionnel les connaît par cœur, les reconnaît immédiatement à la réception, les utilise correctement à l'émission. La liste n'est pas exhaustive : les CEOI d'unités spécifiques peuvent en ajouter, mais ce sont le noyau commun.",
    examples: "Exemples en contexte",
    examplesLines: [
      "ALPHA TWO, this is BRAVO SIX, RADIO CHECK, OVER.",
      "BRAVO SIX, ALPHA TWO, LIMA CHARLIE, OVER.",
      "ALPHA TWO, this is BRAVO SIX, move to grid four-fife-niner-niner-three-two, I SAY AGAIN, four-fife-niner-niner-three-two, ACKNOWLEDGE, OVER.",
      "BRAVO SIX, ALPHA TWO, WILCO, OUT.",
      "ALL STATIONS, this is ZULU SIX, BREAK BREAK, FLASH traffic, STAND BY.",
      "BRAVO SIX, this is ALPHA TWO, SAY AGAIN ALL AFTER « grid four-fife », OVER.",
    ],
    precedence: "Prowords de précédence",
    precedenceBody:
      "Les prowords de précédence déclarent l'urgence d'un message et modifient le comportement du réseau : le trafic de précédence supérieure suspend celui de précédence inférieure. L'abus de haute précédence (FLASH pour un trafic non-FLASH) est l'une des fautes les plus graves de discipline radio parce qu'elle désensibilise le réseau aux vraies urgences.",
    banned: "Prowords à NE PAS utiliser",
    bannedBody:
      "Les expressions civiles et le jargon cinématographique contaminent en permanence les réseaux de volontaires internationaux. Chaque occurrence est un signal visible d'une formation incomplète et dégrade la qualité du trafic. Les éliminer de son répertoire est l'une des premières étapes pour passer de « personne avec une radio » à « opérateur radio ».",
    multinational: "Réseaux multinationaux",
    multinationalBody:
      "En environnement multinational les prowords sont particulièrement précieux : un Italien et un Brésilien peuvent travailler sur le même réseau sans que la différence de langue soit un problème, parce que les prowords standardisent la procédure. Ajouter des prowords italianisés ou brésilianisés (« ricevuto », « entendido ») sur un réseau OTAN est une erreur courante et systématique — ça marche tant que tout le monde est de la même nationalité, ça casse au premier nouvel arrivant.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Utiliser « COPY THAT », « 10-4 », « OVER AND OUT » sous stress par réflexe cinématographique",
      "Dire « REPEAT » pour demander la répétition au lieu de SAY AGAIN",
      "Sauter OVER en fin d'émission — l'autre ne sait pas si vous avez terminé",
      "Utiliser WILCO sans certitude de pouvoir exécuter — c'est un engagement opérationnel",
      "Dire ROGER puis ne pas agir — ROGER confirme la réception, pas l'action (pour cela, WILCO)",
      "Dire AFFIRMATIVE/NEGATIVE quand ROGER/WILCO ou une autre tournure convient mieux",
      "Improviser de nouveaux prowords au sein d'une équipe — ne fonctionne que tant qu'on se parle entre soi",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur les réseaux de volontaires internationaux en Ukraine on entend de tout : prowords italiens, argot cinématographique américain, jargon civil lusophone, mots improvisés. Le problème n'est pas cosmétique — il devient critique au moment où une QRF multinationale répond à une demande et que l'authentification, l'ordre d'EXECUTE ou le BREAK CONTACT sont donnés avec des prowords non standard. Les unités qui imposent la discipline des prowords réduisent significativement les erreurs d'interprétation sous stress ; celles qui laissent faire en paient le coût aux pires moments. Un opérateur individuel ne change pas la culture d'une unité, mais peut s'imposer la discipline des prowords standard — il sera celui que tout le monde comprend, sur n'importe quel réseau.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.what}</h2>
        <p>{s.whatBody}</p>

        <h2>{s.core}</h2>
        <p>{s.coreBody}</p>
        <table>
          <thead>
            <tr>
              <th>Proword</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            {PROWORDS_CORE.map((row) => (
              <tr key={row.word}>
                <td className="mono font-semibold">{row.word}</td>
                <td>{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.examples}</h2>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.examplesLines.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.precedence}</h2>
        <p>{s.precedenceBody}</p>
        <table>
          <thead>
            <tr>
              <th>Proword</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            {PROWORDS_PRECEDENCE.map((row) => (
              <tr key={row.word}>
                <td className="mono font-semibold">{row.word}</td>
                <td>{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.banned}</h2>
        <p>{s.bannedBody}</p>
        <table>
          <thead>
            <tr>
              <th>Banned</th>
              <th>Why / Replacement</th>
            </tr>
          </thead>
          <tbody>
            {PROWORDS_BANNED.map((row) => (
              <tr key={row.word}>
                <td className="mono" style={{ color: "var(--warn)" }}>
                  {row.word}
                </td>
                <td>{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.multinational}</h2>
        <p>{s.multinationalBody}</p>

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
