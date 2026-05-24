import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["SVD (Dragunov)", "7.62×54R", "1963", "Versione originale, canna 620 mm, ottica PSO-1 4×24. In dotazione URSS dal 1963."],
  ["SVDS", "7.62×54R", "1991", "Versione paracadutisti/airborne, calcio ripiegabile a destra, canna leggermente più corta."],
  ["SVDM", "7.62×54R", "2015", "Modernizzata, canna heavy 24\", picatinny, calcio regolabile. Russia."],
  ["SVDK", "9.3×64 Brenneke", "2006", "Variante in calibro maggiorato per ingaggi anti-materiel leggeri / contro avversari corazzati leggeri."],
  ["Tigr (civile)", "7.62×54R / .308", "1990s", "Versione commerciale Izhmash della SVD, mercato cacciatori."],
  ["PSL / FPK", "7.62×54R", "1974", "DMR rumena (Românian), simile esteticamente alla SVD ma meccanicamente derivata dall'AKM."],
  ["Type 79 / 85", "7.62×54R", "1979 / 1985", "Cloni cinesi Norinco della SVD."],
  ["Zastava M76", "8×57 Mauser", "1976", "Variante jugoslava in calibro Mauser, base concettualmente simile."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sul fucile da tiratore scelto SVD Dragunov. Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, varianti, calibro, diffusione. Nessuna istruzione operativa, di azzeramento, di tiro, di manutenzione interna o di modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Fucile semiautomatico da tiratore scelto (designated marksman rifle, DMR) progettato da Yevgeny Dragunov, adottato dall'URSS nel 1963. Non è un fucile da sniper di precisione nel senso occidentale, ma un'arma di squadra destinata a estendere la portata efficace del plotone fino a 600-800 m. Ogni squadra fanteria sovietica/russa è dottrinalmente equipaggiata con almeno una SVD.",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "Otturatore rotante a corsa corta (short-stroke piston, opposto all'AK)",
              "Canna 620 mm con bocca freno multifunzione",
              "Calibro 7.62×54R standard, alimentazione caricatore 10 colpi",
              "Calcio in legno (originale) o polimerico, impugnatura a pistola staccata dal calcio",
              "Ottica standard PSO-1 4×24 con reticolo a stadiometro per stima distanza",
              "Mire iron a tacca scoperta come backup",
              "Peso ~4.3 kg con ottica e caricatore vuoto",
              "Cadenza pratica ~30 colpi/min (semi-auto)",
            ],
          },
        ],
      },
      {
        heading: "Varianti principali",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibro", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibro e munizionamento",
        blocks: [
          {
            type: "p",
            text: "7.62×54R. Per ruolo DMR si utilizzano munizioni sniper-grade: 7N1 (sviluppata specificamente per SVD nel 1967), 7N14 (modernizzata, palla acciaio-piombo). Anche LPS standard, B-32 perforante, T-46 traccianti sono utilizzabili. Distanza efficace pratica 600-800 m con munizione match, oltre con tiratori esperti.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "SVD è onnipresente su entrambi i lati. Unità ucraine la mantengono in servizio in attesa di sostituzione progressiva con DMR NATO (Mk 12, HK417, Bren 2 7.62). Russia impiega SVD, SVDS, SVDM e SV-98 di precisione. Volontari internazionali si confrontano regolarmente con tiratori SVD avversari, e con squadre amiche che la impiegano. È l'arma simbolica del tiratore scelto post-sovietico.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Estende la portata efficace della squadra a 600-800 m",
              "Semiautomatico — più reattivo del bolt action su bersagli multipli",
              "Munizione standard 7.62×54R diffusa in tutti gli arsenali ex-URSS",
              "Affidabile in condizioni di sporco e gelo (eredità AK)",
              "Ottica PSO-1 con stadia per stima distanza integrata",
            ],
          },
        ],
      },
      {
        heading: "Limiti (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Precisione inferiore a sniper rifle bolt action moderni (~1.5-2 MOA tipica)",
              "Caricatori da soli 10 colpi",
              "PSO-1 datata rispetto a ottiche moderne FFP/SFP",
              "Calcio scheletrato originale poco ergonomico per supporto posato",
              "Sensibile a variazioni di lotto della munizione",
            ],
          },
        ],
      },
      {
        heading: "Limiti del manuale",
        blocks: [
          {
            type: "warn",
            title: "Limiti del manuale",
            body: "Questa scheda è enciclopedica. Non descrive azzeramento, tiro, manipolazione tattica, gestione del vento, smontaggio o manutenzione interna. Tali competenze richiedono addestramento di tiratore scelto con istruttori certificati.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on the SVD Dragunov designated marksman rifle. Public doctrinal information only: role, nomenclature, variants, calibre, distribution. No operational, zeroing, firing, internal maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Semi-automatic designated marksman rifle (DMR) designed by Yevgeny Dragunov, adopted by the USSR in 1963. Not a precision sniper rifle in the Western sense, but a squad-level weapon intended to extend the effective range of the platoon to 600-800 m. Every Soviet/Russian infantry squad is doctrinally equipped with at least one SVD.",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "Short-stroke gas piston (opposite of the AK)",
              "620 mm barrel with multi-function muzzle brake",
              "Calibre 7.62×54R, 10-round magazine",
              "Wooden (original) or polymer stock, pistol grip separate from stock",
              "Standard PSO-1 4×24 optic with stadiametric reticle for range estimation",
              "Iron sights as backup",
              "Weight ~4.3 kg with optic and empty magazine",
              "Practical rate of fire ~30 rpm (semi-auto)",
            ],
          },
        ],
      },
      {
        heading: "Main variants",
        blocks: [
          {
            type: "table",
            headers: ["Variant", "Calibre", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre and ammunition",
        blocks: [
          {
            type: "p",
            text: "7.62×54R. For DMR role, sniper-grade ammunition is used: 7N1 (developed specifically for SVD in 1967), 7N14 (modernised, steel-lead core). Standard LPS, B-32 armour-piercing, and T-46 tracer are also serviceable. Practical effective range 600-800 m with match ammunition, beyond with experienced shooters.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "SVD is ubiquitous on both sides. Ukrainian units keep it in service pending progressive replacement with NATO DMRs (Mk 12, HK417, Bren 2 in 7.62). Russia fields SVD, SVDS, SVDM and SV-98 precision rifle. International volunteers routinely face hostile SVD shooters and friendly squads using it. It is the iconic post-Soviet marksman weapon.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Extends squad effective range to 600-800 m",
              "Semi-automatic — more reactive than bolt-action on multiple targets",
              "Standard 7.62×54R ammunition widespread across ex-USSR stocks",
              "Reliable in dirt and freeze (AK heritage)",
              "PSO-1 optic with built-in stadia for range estimation",
            ],
          },
        ],
      },
      {
        heading: "Limits (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Accuracy inferior to modern bolt-action sniper rifles (~1.5-2 MOA typical)",
              "Magazine limited to 10 rounds",
              "PSO-1 dated vs modern FFP/SFP optics",
              "Original skeleton stock not ergonomic for sustained prone support",
              "Sensitive to ammunition lot variation",
            ],
          },
        ],
      },
      {
        heading: "Manual limits",
        blocks: [
          {
            type: "warn",
            title: "Manual limits",
            body: "This entry is encyclopaedic. It does not describe zeroing, firing, tactical employment, wind handling, disassembly or internal maintenance. Those skills require certified marksman training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre o fuzil de tirador SVD Dragunov. Apenas informações doutrinárias públicas: papel, nomenclatura, variantes, calibre, distribuição. Nenhuma instrução operacional, de zeragem, tiro, manutenção interna ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Fuzil semiautomático de tirador designado (designated marksman rifle, DMR) projetado por Yevgeny Dragunov, adotado pela URSS em 1963. Não é um fuzil sniper de precisão no sentido ocidental, mas uma arma de esquadrão destinada a estender o alcance efetivo do pelotão a 600-800 m. Cada esquadrão de infantaria soviético/russo é doutrinariamente equipado com pelo menos uma SVD.",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "Pistão de gás de curso curto (oposto ao AK)",
              "Cano de 620 mm com freio de boca multifunção",
              "Calibre 7,62×54R, carregador de 10 cartuchos",
              "Coronha de madeira (original) ou polímero, empunhadura separada da coronha",
              "Ótica padrão PSO-1 4×24 com retículo estadiométrico para estimativa de distância",
              "Miras de ferro como backup",
              "Peso ~4,3 kg com ótica e carregador vazio",
              "Cadência prática ~30 disparos/min (semi-auto)",
            ],
          },
        ],
      },
      {
        heading: "Variantes principais",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre e munição",
        blocks: [
          {
            type: "p",
            text: "7,62×54R. Para papel DMR, munição sniper-grade é usada: 7N1 (desenvolvida especificamente para SVD em 1967), 7N14 (modernizada, núcleo aço-chumbo). LPS padrão, B-32 perfurante e T-46 traçante também são utilizáveis. Alcance efetivo prático 600-800 m com munição match, além com atiradores experientes.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "SVD é onipresente em ambos os lados. Unidades ucranianas a mantêm em serviço aguardando substituição progressiva por DMR OTAN (Mk 12, HK417, Bren 2 em 7,62). A Rússia emprega SVD, SVDS, SVDM e SV-98 de precisão. Voluntários internacionais se confrontam regularmente com atiradores SVD adversários, e com esquadras amigas que a empregam. É a arma simbólica do tirador pós-soviético.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Estende o alcance efetivo do esquadrão a 600-800 m",
              "Semiautomática — mais reativa que ação-de-ferrolho em alvos múltiplos",
              "Munição padrão 7,62×54R difundida em todos os estoques ex-URSS",
              "Confiável em sujeira e congelamento (herança AK)",
              "Ótica PSO-1 com estádia para estimativa de distância integrada",
            ],
          },
        ],
      },
      {
        heading: "Limites (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Precisão inferior a sniper bolt-action modernos (~1,5-2 MOA típico)",
              "Carregador limitado a 10 cartuchos",
              "PSO-1 datada vs óticas modernas FFP/SFP",
              "Coronha esqueletada original pouco ergonômica para apoio sustentado",
              "Sensível a variação de lote da munição",
            ],
          },
        ],
      },
      {
        heading: "Limites do manual",
        blocks: [
          {
            type: "warn",
            title: "Limites do manual",
            body: "Este verbete é enciclopédico. Não descreve zeragem, tiro, manuseio tático, gestão de vento, desmontagem ou manutenção interna. Tais competências exigem treinamento de tirador certificado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur le fusil de tireur d'élite SVD Dragunov. Informations doctrinales publiques uniquement : rôle, nomenclature, variantes, calibre, diffusion. Aucune instruction opérationnelle, de réglage, de tir, de maintenance interne ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Fusil semi-automatique de tireur désigné (designated marksman rifle, DMR) conçu par Yevgeny Dragunov, adopté par l'URSS en 1963. Ce n'est pas un fusil de précision sniper au sens occidental, mais une arme de niveau groupe destinée à étendre la portée efficace de la section à 600-800 m. Chaque groupe d'infanterie soviétique/russe est doctrinalement équipé d'au moins un SVD.",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "Piston à gaz à course courte (inverse de l'AK)",
              "Canon 620 mm avec frein de bouche multifonction",
              "Calibre 7,62×54R, chargeur 10 cartouches",
              "Crosse en bois (originale) ou polymère, poignée pistolet séparée de la crosse",
              "Optique standard PSO-1 4×24 avec réticule stadiométrique pour estimation de distance",
              "Hausse-guidon en secours",
              "Poids ~4,3 kg avec optique et chargeur vide",
              "Cadence pratique ~30 coups/min (semi-auto)",
            ],
          },
        ],
      },
      {
        heading: "Variantes principales",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre et munition",
        blocks: [
          {
            type: "p",
            text: "7,62×54R. Pour le rôle DMR, munitions sniper-grade : 7N1 (développée spécifiquement pour SVD en 1967), 7N14 (modernisée, noyau acier-plomb). LPS standard, B-32 perforante, T-46 traçante également utilisables. Portée efficace pratique 600-800 m avec munition match, au-delà avec tireurs expérimentés.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "SVD est omniprésent des deux côtés. Les unités ukrainiennes la maintiennent en service en attendant un remplacement progressif par DMR OTAN (Mk 12, HK417, Bren 2 en 7,62). La Russie emploie SVD, SVDS, SVDM et SV-98 de précision. Les volontaires internationaux affrontent régulièrement des tireurs SVD adverses et des groupes amis qui l'emploient. C'est l'arme symbolique du tireur post-soviétique.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Étend la portée efficace du groupe à 600-800 m",
              "Semi-automatique — plus réactif qu'un bolt-action sur cibles multiples",
              "Munition standard 7,62×54R répandue dans tous les stocks ex-URSS",
              "Fiable en saleté et gel (héritage AK)",
              "Optique PSO-1 avec stadia intégrée pour estimation de distance",
            ],
          },
        ],
      },
      {
        heading: "Limites (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Précision inférieure aux fusils sniper bolt-action modernes (~1,5-2 MOA typique)",
              "Chargeur limité à 10 cartouches",
              "PSO-1 datée vs optiques modernes FFP/SFP",
              "Crosse squelette d'origine peu ergonomique pour appui couché soutenu",
              "Sensible aux variations de lot de munition",
            ],
          },
        ],
      },
      {
        heading: "Limites du manuel",
        blocks: [
          {
            type: "warn",
            title: "Limites du manuel",
            body: "Cette fiche est encyclopédique. Elle ne décrit ni réglage, ni tir, ni manipulation tactique, ni gestion du vent, ni démontage, ni maintenance interne. Ces compétences exigent un entraînement de tireur d'élite avec instructeurs certifiés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
