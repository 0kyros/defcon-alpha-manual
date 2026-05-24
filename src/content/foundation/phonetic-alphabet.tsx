import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const NATO_ALPHABET: ReadonlyArray<{
  letter: string;
  word: string;
  itu: string;
}> = [
  { letter: "A", word: "Alfa", itu: "AL FAH" },
  { letter: "B", word: "Bravo", itu: "BRAH VOH" },
  { letter: "C", word: "Charlie", itu: "CHAR LEE" },
  { letter: "D", word: "Delta", itu: "DELL TAH" },
  { letter: "E", word: "Echo", itu: "ECK OH" },
  { letter: "F", word: "Foxtrot", itu: "FOKS TROT" },
  { letter: "G", word: "Golf", itu: "GOLF" },
  { letter: "H", word: "Hotel", itu: "HOH TELL" },
  { letter: "I", word: "India", itu: "IN DEE AH" },
  { letter: "J", word: "Juliett", itu: "JEW LEE ETT" },
  { letter: "K", word: "Kilo", itu: "KEY LOH" },
  { letter: "L", word: "Lima", itu: "LEE MAH" },
  { letter: "M", word: "Mike", itu: "MIKE" },
  { letter: "N", word: "November", itu: "NO VEM BER" },
  { letter: "O", word: "Oscar", itu: "OSS CAH" },
  { letter: "P", word: "Papa", itu: "PAH PAH" },
  { letter: "Q", word: "Quebec", itu: "KEH BECK" },
  { letter: "R", word: "Romeo", itu: "ROW ME OH" },
  { letter: "S", word: "Sierra", itu: "SEE AIR RAH" },
  { letter: "T", word: "Tango", itu: "TANG GO" },
  { letter: "U", word: "Uniform", itu: "YOU NEE FORM" },
  { letter: "V", word: "Victor", itu: "VIK TAH" },
  { letter: "W", word: "Whiskey", itu: "WISS KEY" },
  { letter: "X", word: "X-ray", itu: "ECKS RAY" },
  { letter: "Y", word: "Yankee", itu: "YANG KEY" },
  { letter: "Z", word: "Zulu", itu: "ZOO LOO" },
];

const NATO_NUMBERS: ReadonlyArray<{ digit: string; spoken: string }> = [
  { digit: "0", spoken: "ZE-RO" },
  { digit: "1", spoken: "WUN" },
  { digit: "2", spoken: "TOO" },
  { digit: "3", spoken: "TREE" },
  { digit: "4", spoken: "FOW-ER" },
  { digit: "5", spoken: "FIFE" },
  { digit: "6", spoken: "SIX" },
  { digit: "7", spoken: "SEV-EN" },
  { digit: "8", spoken: "AIT" },
  { digit: "9", spoken: "NIN-ER" },
];

interface Strings {
  intro: string;
  why: string;
  whyBody: string;
  usage: string;
  usageItems: ReadonlyArray<string>;
  table: { letter: string; word: string; itu: string };
  numbers: string;
  numbersBody: string;
  numbersTable: { digit: string; spoken: string };
  example: string;
  exampleBody: string;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
  checklist: string;
  checklistItems: ReadonlyArray<string>;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "L'alfabeto fonetico NATO (ICAO/ITU) è lo standard internazionale per l'identificazione vocale di lettere e numeri su canali rumorosi, in lingue diverse, sotto stress. È il primo strumento da padroneggiare prima di toccare qualsiasi radio.",
    why: "Perché esiste",
    whyBody:
      "Voci compresse, statiche, dialetti, accenti, rumore d'arma e adrenalina degradano fortemente la comprensione. Scambiare \"B\" con \"D\" o \"M\" con \"N\" su una griglia, una frequenza o un callsign può costare vite. L'alfabeto fonetico elimina l'ambiguità.",
    usage: "Quando si usa",
    usageItems: [
      "Trasmissione di callsign, frequenze, griglie, nomi propri",
      "Conferma di codici, autenticazione, parole d'ordine",
      "Spelling di parole non comuni o straniere",
      "Ogni volta che l'interlocutore chiede \"SPELL\" o \"I SPELL\"",
    ],
    table: { letter: "Lettera", word: "Parola", itu: "Pronuncia ITU" },
    numbers: "Numeri",
    numbersBody:
      "I numeri NATO si pronunciano cifra per cifra. \"5\" è FIFE per distinguerlo da \"fire\", \"9\" è NINER per distinguerlo dal tedesco \"nein\" e da letture errate su VHF.",
    numbersTable: { digit: "Cifra", spoken: "Pronuncia" },
    example: "Esempio realistico",
    exampleBody:
      "Trasmissione: \"BRAVO TWO SIX, this is OSCAR ONE. SITREP follows. Grid four-five-uniform-uniform-three-six-niner-two-fife-fife. How copy, over.\"",
    errors: "Errori comuni",
    errorsItems: [
      "Italianizzare le parole (\"Alfa\" pronunciato come parola italiana invece di \"AL FAH\")",
      "Pronunciare \"3\" come \"three\" invece di TREE",
      "Dire \"nine\" invece di NINER",
      "Saltare la prowords I SPELL quando si fa lo spelling",
      "Usare alfabeti nazionali misti (es. \"Italia\" invece di INDIA)",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Su reti multinazionali (volontari italiani, brasiliani, francesi, polacchi, britannici, americani) l'unico standard funzionante sotto pressione è l'ITU. Le abitudini civili (alfabeti telefonici italiani) NON funzionano: generano malintesi su griglie e callsign. Imparare ITU a memoria. Recitarlo a freddo, di notte, mezzo addormentato.",
    checklist: "Checklist personale",
    checklistItems: [
      "Recitare l'alfabeto A→Z in meno di 15 secondi",
      "Recitarlo in ordine inverso",
      "Effettuare spelling di 10 parole casuali senza esitazioni",
      "Trasmettere una griglia MGRS completa senza errori",
      "Capire l'ITU letto da non-anglofoni con accento marcato",
    ],
  },
  en: {
    intro:
      "The NATO (ICAO/ITU) phonetic alphabet is the international standard for voice identification of letters and numbers across noisy channels, mixed languages, and stress. First tool to master before touching any radio.",
    why: "Why it exists",
    whyBody:
      "Compressed voices, static, dialects, accents, weapon noise and adrenaline crush comprehension. Mixing \"B\" with \"D\" or \"M\" with \"N\" on a grid, a frequency or a callsign costs lives. The phonetic alphabet removes that ambiguity.",
    usage: "When to use",
    usageItems: [
      "Transmitting callsigns, frequencies, grids, proper nouns",
      "Confirming codes, authentication, passwords",
      "Spelling uncommon or foreign words",
      "Whenever the other station asks \"SPELL\" or you precede with \"I SPELL\"",
    ],
    table: { letter: "Letter", word: "Word", itu: "ITU pronunciation" },
    numbers: "Numbers",
    numbersBody:
      "NATO numbers are spoken digit by digit. \"5\" is FIFE to distinguish from \"fire\"; \"9\" is NINER to distinguish from German \"nein\" and VHF mishearings.",
    numbersTable: { digit: "Digit", spoken: "Spoken" },
    example: "Realistic example",
    exampleBody:
      "Transmission: \"BRAVO TWO SIX, this is OSCAR ONE. SITREP follows. Grid four-five-uniform-uniform-three-six-niner-two-fife-fife. How copy, over.\"",
    errors: "Common mistakes",
    errorsItems: [
      "Pronouncing words natively (\"Alfa\" as Italian rather than \"AL FAH\")",
      "Saying \"three\" instead of TREE",
      "Saying \"nine\" instead of NINER",
      "Skipping the proword I SPELL when spelling",
      "Mixing national phonetic alphabets (\"Italy\" instead of INDIA)",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On multinational nets (Italian, Brazilian, French, Polish, British, US volunteers) the only thing working under pressure is the ITU set. Civilian phone alphabets do NOT work — they cause grid and callsign confusion. Memorise ITU. Recite it cold, at night, half-asleep.",
    checklist: "Personal checklist",
    checklistItems: [
      "Recite A→Z in under 15 seconds",
      "Recite it in reverse",
      "Spell 10 random words without hesitation",
      "Transmit a full MGRS grid without errors",
      "Understand ITU read by heavily accented non-native speakers",
    ],
  },
  "pt-br": {
    intro:
      "O alfabeto fonético OTAN (ICAO/ITU) é o padrão internacional para identificação por voz de letras e números em canais ruidosos, em diferentes idiomas e sob estresse. Primeira ferramenta a dominar antes de qualquer rádio.",
    why: "Por que existe",
    whyBody:
      "Vozes comprimidas, estática, sotaques, ruído de arma e adrenalina destroem a compreensão. Confundir \"B\" com \"D\" ou \"M\" com \"N\" em uma grid, frequência ou indicativo custa vidas. O alfabeto fonético elimina essa ambiguidade.",
    usage: "Quando usar",
    usageItems: [
      "Transmissão de indicativos, frequências, grids, nomes próprios",
      "Confirmação de códigos, autenticação, senhas",
      "Soletrar palavras incomuns ou estrangeiras",
      "Sempre que o outro pedir \"SPELL\" ou antes de soletrar com \"I SPELL\"",
    ],
    table: { letter: "Letra", word: "Palavra", itu: "Pronúncia ITU" },
    numbers: "Números",
    numbersBody:
      "Números OTAN são falados dígito a dígito. \"5\" é FIFE para distinguir de \"fire\"; \"9\" é NINER para distinguir do alemão \"nein\" e de erros em VHF.",
    numbersTable: { digit: "Dígito", spoken: "Pronúncia" },
    example: "Exemplo realista",
    exampleBody:
      "Transmissão: \"BRAVO TWO SIX, this is OSCAR ONE. SITREP follows. Grid four-five-uniform-uniform-three-six-niner-two-fife-fife. How copy, over.\"",
    errors: "Erros comuns",
    errorsItems: [
      "Pronunciar palavras de forma nativa (\"Alfa\" em português em vez de AL FAH)",
      "Dizer \"three\" em vez de TREE",
      "Dizer \"nine\" em vez de NINER",
      "Pular o proword I SPELL ao soletrar",
      "Misturar alfabetos fonéticos nacionais (\"Italia\" em vez de INDIA)",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "Em redes multinacionais (voluntários italianos, brasileiros, franceses, poloneses, britânicos, americanos) o único padrão que funciona sob pressão é o ITU. Alfabetos telefônicos civis NÃO funcionam — geram confusão de grid e indicativo. Memorizar o ITU. Recitar a frio, à noite, sonolento.",
    checklist: "Checklist pessoal",
    checklistItems: [
      "Recitar A→Z em menos de 15 segundos",
      "Recitar de trás para a frente",
      "Soletrar 10 palavras aleatórias sem hesitação",
      "Transmitir uma grid MGRS completa sem erro",
      "Entender ITU lido por não nativos com sotaque forte",
    ],
  },
  fr: {
    intro:
      "L'alphabet phonétique OTAN (ICAO/UIT) est le standard international pour l'identification vocale de lettres et chiffres sur canaux bruyants, en langues mêlées, sous stress. Premier outil à maîtriser avant toute radio.",
    why: "Pourquoi il existe",
    whyBody:
      "Voix compressées, statique, accents, bruit d'arme et adrénaline écrasent la compréhension. Confondre « B » et « D » ou « M » et « N » sur une grille, une fréquence ou un indicatif coûte des vies. L'alphabet phonétique supprime cette ambiguïté.",
    usage: "Quand l'utiliser",
    usageItems: [
      "Transmission d'indicatifs, fréquences, grilles, noms propres",
      "Confirmation de codes, authentification, mots de passe",
      "Épellation de mots rares ou étrangers",
      "À chaque demande « SPELL » ou avant « I SPELL »",
    ],
    table: { letter: "Lettre", word: "Mot", itu: "Prononciation UIT" },
    numbers: "Chiffres",
    numbersBody:
      "Les chiffres OTAN se prononcent chiffre par chiffre. « 5 » est FIFE pour distinguer de « fire » ; « 9 » est NINER pour distinguer de l'allemand « nein » et des erreurs en VHF.",
    numbersTable: { digit: "Chiffre", spoken: "Prononciation" },
    example: "Exemple réaliste",
    exampleBody:
      "Transmission : « BRAVO TWO SIX, this is OSCAR ONE. SITREP follows. Grid four-five-uniform-uniform-three-six-niner-two-fife-fife. How copy, over. »",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Prononcer les mots à la française (« Alfa » à la française et non AL FAH)",
      "Dire « three » au lieu de TREE",
      "Dire « nine » au lieu de NINER",
      "Sauter le proword I SPELL en épelant",
      "Mélanger des alphabets nationaux (« Italia » à la place de INDIA)",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur les réseaux multinationaux (volontaires italiens, brésiliens, français, polonais, britanniques, américains), seul l'UIT fonctionne sous pression. Les alphabets téléphoniques civils NE fonctionnent PAS — ils créent des confusions sur les grilles et les indicatifs. Mémoriser l'UIT. Le réciter à froid, de nuit, à moitié endormi.",
    checklist: "Checklist personnelle",
    checklistItems: [
      "Réciter A→Z en moins de 15 secondes",
      "Le réciter à l'envers",
      "Épeler 10 mots aléatoires sans hésitation",
      "Transmettre une grille MGRS complète sans erreur",
      "Comprendre l'UIT lu par des non-natifs très accentués",
    ],
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.why}</h2>
        <p>{s.whyBody}</p>

        <h2>{s.usage}</h2>
        <ul>
          {s.usageItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>NATO / ICAO / ITU</h2>
        <table>
          <thead>
            <tr>
              <th>{s.table.letter}</th>
              <th>{s.table.word}</th>
              <th>{s.table.itu}</th>
            </tr>
          </thead>
          <tbody>
            {NATO_ALPHABET.map((row) => (
              <tr key={row.letter}>
                <td className="mono font-semibold">{row.letter}</td>
                <td className="mono">{row.word}</td>
                <td className="mono text-fg-2">{row.itu}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.numbers}</h2>
        <p>{s.numbersBody}</p>
        <table>
          <thead>
            <tr>
              <th>{s.numbersTable.digit}</th>
              <th>{s.numbersTable.spoken}</th>
            </tr>
          </thead>
          <tbody>
            {NATO_NUMBERS.map((row) => (
              <tr key={row.digit}>
                <td className="mono font-semibold">{row.digit}</td>
                <td className="mono">{row.spoken}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.example}</h2>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          <code style={{ whiteSpace: "normal" }}>{s.exampleBody}</code>
        </div>

        <h2>{s.errors}</h2>
        <ul>
          {s.errorsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>

        <h2>{s.checklist}</h2>
        <ul>
          {s.checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  };
}
