import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

interface Strings {
  intro: string;
  structure: string;
  structureBody: string;
  components: ReadonlyArray<{ name: string; desc: string }>;
  example: string;
  exampleNote: string;
  precision: string;
  precisionBody: string;
  precisionRows: ReadonlyArray<[string, string]>;
  reading: string;
  readingBody: string;
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
      "MGRS (Military Grid Reference System) è il sistema di griglia standard NATO. È il modo in cui vengono trasmesse posizioni su radio, mappe cartacee e in praticamente ogni report di campo. La sostituzione con lat/lon decimali è ammessa solo su sistemi C2 digitali — sulla rete vocale: MGRS.",
    structure: "Struttura di una griglia",
    structureBody:
      "Una griglia MGRS è composta da quattro elementi concatenati. Letta da sinistra a destra rappresenta una localizzazione planetaria fino al metro.",
    components: [
      { name: "GZD — Grid Zone Designator", desc: "Es. 36T, 37T. Identifica la zona UTM (numero + lettera di banda)." },
      { name: "100,000 m square", desc: "Due lettere che identificano un quadrato di 100 km × 100 km dentro la GZD. Es. UU, VR." },
      { name: "Easting", desc: "Coordinate X dentro il quadrato 100 km. Da 1 a 5 cifre." },
      { name: "Northing", desc: "Coordinate Y dentro il quadrato 100 km. Da 1 a 5 cifre." },
    ],
    example: "Esempio letto",
    exampleNote:
      "37U CB 12345 67890 — Easting 12345, Northing 67890, precisione 1 metro. Sulla rete vocale: \"three-seven-uniform charlie-bravo one-two-three-four-fife six-seven-eight-niner-zero\".",
    precision: "Precisione vs cifre",
    precisionBody:
      "Il numero di cifre per coordinata determina la precisione. Sulla rete vocale si trasmette solitamente a 6 o 8 cifre. La precisione metrica è riservata a target packages e fires.",
    precisionRows: [
      ["2 cifre", "10 km (zona generale)"],
      ["4 cifre", "1 km (settore)"],
      ["6 cifre", "100 m (posizione tattica)"],
      ["8 cifre", "10 m (precisione fires)"],
      ["10 cifre", "1 m (precisione GPS dedicata)"],
    ],
    reading: "Come si legge",
    readingBody:
      "Regola mnemonica: \"right then up\" — prima Easting (a destra), poi Northing (in su). Mai invertire. Sulla mappa cartacea le righe verticali sono Eastings, le orizzontali Northings.",
    errors: "Errori comuni",
    errorsItems: [
      "Invertire Easting e Northing → griglia spostata di chilometri",
      "Dimenticare la GZD su reti che attraversano zone diverse",
      "Confondere il quadrato 100 km su frontiere di zona (UU vs VU)",
      "Trasmettere senza scomporre cifra per cifra (\"twelve thousand\" invece di \"one-two-zero-zero-zero\")",
      "Non specificare la precisione (6 vs 8 cifre) — l'interlocutore non sa come stamparla",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Su mappe russe/sovietiche è ancora diffuso il sistema Pulkovo 1942 / Gauss-Krüger. NON è MGRS. Conversioni manuali via tabella o app sono soggette a errore. Su rete multinazionale: usare sempre MGRS WGS84. Annotare la GZD/100 km a inizio reporting; non assumerla mai implicita.",
    checklist: "Checklist personale",
    checklistItems: [
      "Saper leggere una griglia 6 cifre su carta in meno di 30 secondi",
      "Saper trasmetterla a voce in NATO phonetic + numeri NINER/FIFE",
      "Conoscere la propria GZD/100 km operativa di default",
      "Avere uno strumento (Kilo, ATAK, GPS) per la conversione da lat/lon",
      "Saper riconoscere a colpo d'occhio una griglia in formato corretto",
    ],
  },
  en: {
    intro:
      "MGRS (Military Grid Reference System) is the NATO standard grid. It is how positions are passed by radio, on paper maps, and in practically every field report. Decimal lat/lon is acceptable only on digital C2 systems — on voice nets, MGRS.",
    structure: "Grid structure",
    structureBody:
      "An MGRS grid is four concatenated components. Read left-to-right, it pinpoints a global location down to the metre.",
    components: [
      { name: "GZD — Grid Zone Designator", desc: "e.g. 36T, 37T. Identifies the UTM zone (number + band letter)." },
      { name: "100,000 m square", desc: "Two letters identifying a 100 km × 100 km square inside the GZD. e.g. UU, VR." },
      { name: "Easting", desc: "X coordinate inside the 100 km square. 1 to 5 digits." },
      { name: "Northing", desc: "Y coordinate inside the 100 km square. 1 to 5 digits." },
    ],
    example: "Read example",
    exampleNote:
      "37U CB 12345 67890 — Easting 12345, Northing 67890, 1-metre precision. On voice: \"three-seven-uniform charlie-bravo one-two-three-four-fife six-seven-eight-niner-zero\".",
    precision: "Precision vs digits",
    precisionBody:
      "Digit count per coordinate determines precision. On voice nets, 6 or 8 digits is common. Metre-level is reserved for target packages and fires.",
    precisionRows: [
      ["2 digits", "10 km (general area)"],
      ["4 digits", "1 km (sector)"],
      ["6 digits", "100 m (tactical position)"],
      ["8 digits", "10 m (fires precision)"],
      ["10 digits", "1 m (dedicated GPS precision)"],
    ],
    reading: "How to read",
    readingBody:
      "Mnemonic: \"right then up\" — Easting first (rightward), Northing second (upward). Never reverse. On paper, vertical lines are Eastings, horizontals Northings.",
    errors: "Common mistakes",
    errorsItems: [
      "Reversing Easting and Northing → grid off by kilometres",
      "Dropping the GZD on nets crossing different zones",
      "Confusing the 100 km square at zone boundaries (UU vs VU)",
      "Transmitting without digit-by-digit breakdown (\"twelve thousand\" instead of \"one-two-zero-zero-zero\")",
      "Not specifying precision (6 vs 8 digits) — the receiver cannot plot correctly",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "Russian/Soviet maps still use Pulkovo 1942 / Gauss-Krüger. That is NOT MGRS. Manual conversions via table or app are error-prone. On multinational nets: always MGRS WGS84. State the GZD/100 km up front; never assume it.",
    checklist: "Personal checklist",
    checklistItems: [
      "Read a 6-digit grid from a paper map in under 30 seconds",
      "Transmit it on voice in NATO phonetics + NINER/FIFE",
      "Know your default operational GZD/100 km",
      "Carry a tool (Kilo, ATAK, GPS) for lat/lon conversion",
      "Spot a malformed grid at a glance",
    ],
  },
  "pt-br": {
    intro:
      "MGRS (Military Grid Reference System) é a grid padrão OTAN. É como se transmitem posições por rádio, em cartas de papel e em quase todo report de campo. Lat/lon decimal só em sistemas digitais de C2 — em rede de voz, MGRS.",
    structure: "Estrutura da grid",
    structureBody:
      "Uma grid MGRS tem quatro componentes encadeados. Lidos da esquerda para a direita, localizam um ponto no planeta com precisão métrica.",
    components: [
      { name: "GZD — Grid Zone Designator", desc: "Ex. 36T, 37T. Identifica a zona UTM (número + letra de faixa)." },
      { name: "Quadrado 100.000 m", desc: "Duas letras identificando um quadrado 100 km × 100 km dentro da GZD. Ex. UU, VR." },
      { name: "Easting", desc: "Coordenada X dentro do quadrado 100 km. 1 a 5 dígitos." },
      { name: "Northing", desc: "Coordenada Y dentro do quadrado 100 km. 1 a 5 dígitos." },
    ],
    example: "Exemplo lido",
    exampleNote:
      "37U CB 12345 67890 — Easting 12345, Northing 67890, precisão de 1 metro. Em voz: \"three-seven-uniform charlie-bravo one-two-three-four-fife six-seven-eight-niner-zero\".",
    precision: "Precisão vs dígitos",
    precisionBody:
      "A quantidade de dígitos por coordenada define a precisão. Em rede de voz, normalmente 6 ou 8 dígitos. Métrico fica para target packages e fires.",
    precisionRows: [
      ["2 dígitos", "10 km (área geral)"],
      ["4 dígitos", "1 km (setor)"],
      ["6 dígitos", "100 m (posição tática)"],
      ["8 dígitos", "10 m (precisão de fires)"],
      ["10 dígitos", "1 m (GPS dedicado)"],
    ],
    reading: "Como ler",
    readingBody:
      "Mnemônico: \"right then up\" — Easting primeiro (para a direita), Northing depois (para cima). Nunca inverter. Em papel, linhas verticais são Eastings, horizontais Northings.",
    errors: "Erros comuns",
    errorsItems: [
      "Inverter Easting e Northing → grid deslocada em quilômetros",
      "Omitir a GZD em redes que cruzam zonas diferentes",
      "Confundir o quadrado 100 km em fronteiras de zona (UU vs VU)",
      "Transmitir sem decompor dígito por dígito (\"twelve thousand\" em vez de \"one-two-zero-zero-zero\")",
      "Não especificar a precisão (6 vs 8 dígitos)",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "Cartas russas/soviéticas ainda usam Pulkovo 1942 / Gauss-Krüger. NÃO é MGRS. Conversões manuais via tabela ou app erram. Em rede multinacional: sempre MGRS WGS84. Dizer a GZD/100 km no início; nunca assumir.",
    checklist: "Checklist pessoal",
    checklistItems: [
      "Ler grid 6 dígitos em carta de papel em menos de 30 segundos",
      "Transmitir por voz com fonético NATO + NINER/FIFE",
      "Saber sua GZD/100 km operacional padrão",
      "Ter uma ferramenta (Kilo, ATAK, GPS) para conversão lat/lon",
      "Reconhecer grid malformada a olho",
    ],
  },
  fr: {
    intro:
      "MGRS (Military Grid Reference System) est le standard de grille OTAN. C'est ainsi que les positions transitent par radio, sur cartes papier et dans quasiment tout report terrain. Le lat/lon décimal n'est accepté que sur systèmes C2 numériques — sur réseau voix, MGRS.",
    structure: "Structure d'une grille",
    structureBody:
      "Une grille MGRS comporte quatre composants enchaînés. Lue de gauche à droite, elle localise un point au mètre près sur le globe.",
    components: [
      { name: "GZD — Grid Zone Designator", desc: "Ex. 36T, 37T. Identifie la zone UTM (numéro + lettre de bande)." },
      { name: "Carré 100 000 m", desc: "Deux lettres pour un carré 100 km × 100 km dans la GZD. Ex. UU, VR." },
      { name: "Easting", desc: "Coordonnée X dans le carré 100 km. 1 à 5 chiffres." },
      { name: "Northing", desc: "Coordonnée Y dans le carré 100 km. 1 à 5 chiffres." },
    ],
    example: "Exemple lu",
    exampleNote:
      "37U CB 12345 67890 — Easting 12345, Northing 67890, précision 1 mètre. En voix : « three-seven-uniform charlie-bravo one-two-three-four-fife six-seven-eight-niner-zero ».",
    precision: "Précision vs chiffres",
    precisionBody:
      "Le nombre de chiffres par coordonnée détermine la précision. En voix, 6 ou 8 chiffres en standard. Le mètre est réservé aux target packages et fires.",
    precisionRows: [
      ["2 chiffres", "10 km (zone générale)"],
      ["4 chiffres", "1 km (secteur)"],
      ["6 chiffres", "100 m (position tactique)"],
      ["8 chiffres", "10 m (précision fires)"],
      ["10 chiffres", "1 m (GPS dédié)"],
    ],
    reading: "Comment lire",
    readingBody:
      "Mnémonique : « right then up » — Easting d'abord (vers la droite), Northing ensuite (vers le haut). Jamais l'inverse. Sur papier, lignes verticales = Eastings, horizontales = Northings.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Inverser Easting et Northing → grille fausse de plusieurs km",
      "Omettre la GZD sur réseaux traversant des zones",
      "Confondre le carré 100 km aux limites de zone (UU vs VU)",
      "Transmettre sans décomposer chiffre par chiffre",
      "Ne pas préciser la précision (6 vs 8 chiffres)",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Les cartes russes/soviétiques utilisent encore Pulkovo 1942 / Gauss-Krüger. Ce n'est PAS du MGRS. Les conversions manuelles sont source d'erreurs. Sur réseau multinational : toujours MGRS WGS84. Annoncer la GZD/100 km en début de report ; jamais en implicite.",
    checklist: "Checklist personnelle",
    checklistItems: [
      "Lire une grille 6 chiffres sur carte papier en moins de 30 secondes",
      "La transmettre en voix avec phonétique OTAN + NINER/FIFE",
      "Connaître sa GZD/100 km opérationnelle par défaut",
      "Disposer d'un outil (Kilo, ATAK, GPS) pour la conversion lat/lon",
      "Repérer d'un coup d'œil une grille malformée",
    ],
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.structure}</h2>
        <p>{s.structureBody}</p>
        <ul>
          {s.components.map((c) => (
            <li key={c.name}>
              <strong>{c.name}</strong> — {c.desc}
            </li>
          ))}
        </ul>

        <h2>{s.example}</h2>
        <div className="callout">
          <div className="callout-title">GRID</div>
          <p className="mono" style={{ fontSize: "1.1em" }}>
            37U CB 12345 67890
          </p>
          <p>{s.exampleNote}</p>
        </div>

        <h2>{s.precision}</h2>
        <p>{s.precisionBody}</p>
        <table>
          <thead>
            <tr>
              <th>Digits</th>
              <th>Precision</th>
            </tr>
          </thead>
          <tbody>
            {s.precisionRows.map(([digits, prec]) => (
              <tr key={digits}>
                <td className="mono">{digits}</td>
                <td>{prec}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.reading}</h2>
        <p>{s.readingBody}</p>

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
