import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const AFFILIATION: ReadonlyArray<ReadonlyArray<string>> = [
  ["Blue / rectangle", "Friend (amico)"],
  ["Red / diamond", "Hostile (nemico)"],
  ["Green / square", "Neutral"],
  ["Yellow / quatrefoil", "Unknown"],
];

const SIZE_AMPL: ReadonlyArray<ReadonlyArray<string>> = [
  ["• (dot)", "Team / Crew", "3–5"],
  ["••", "Section / Squad", "8–12"],
  ["•••", "Plotone", "30–40"],
  ["I", "Compagnia", "100–150"],
  ["II", "Battaglione", "500–800"],
  ["III", "Reggimento / Brigata", "3 000–5 000"],
  ["X", "Brigata (variante)", "—"],
  ["XX", "Divisione", "10 000–20 000"],
  ["XXX", "Corpo d'Armata", "—"],
];

const FUNCTION_SYMBOLS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Croce diagonale ×", "Fanteria"],
  ["Linea orizzontale", "Cavalleria / Recon"],
  ["Cerchio", "Logistico / Trasporti"],
  ["Punto + linea verticale", "Artiglieria"],
  ["Cerchio + diagonale", "Genio / Engineer"],
  ["Linee verticali parallele", "Signal / Comms"],
  ["Croce di Lorena", "Sanità"],
  ["Punto in cerchio", "MP / Polizia militare"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "I simboli NATO (APP-6 / MIL-STD-2525) sono il linguaggio grafico di mappa, briefing e prodotti C2. Conoscere i fondamenti permette di leggere un OPORD grafico, identificare la disposizione delle unità su carta e capire un common operational picture (COP). Non sono il sistema russo (cirillico, geometrie diverse) — utile saperlo per interpretare carte catturate.",
    sections: [
      {
        heading: "Affiliazione (forma e colore)",
        blocks: [
          {
            type: "p",
            text: "La cornice del simbolo identifica chi è. Quattro categorie standard.",
          },
          {
            type: "table",
            headers: ["Forma / colore", "Affiliazione"],
            rows: AFFILIATION,
          },
        ],
      },
      {
        heading: "Dimensione dell'unità (amplifier)",
        blocks: [
          {
            type: "p",
            text: "Sopra la cornice, simboli che indicano la dimensione gerarchica dell'unità rappresentata.",
          },
          {
            type: "table",
            headers: ["Amplifier", "Livello", "Effettivo"],
            rows: SIZE_AMPL,
          },
        ],
      },
      {
        heading: "Funzione (icona interna)",
        blocks: [
          {
            type: "p",
            text: "Dentro la cornice, un'icona indica la funzione dell'unità: fanteria, cavalleria, artiglieria, genio, ecc.",
          },
          {
            type: "table",
            headers: ["Icona", "Funzione"],
            rows: FUNCTION_SYMBOLS,
          },
        ],
      },
      {
        heading: "Esempio di lettura",
        blocks: [
          {
            type: "p",
            text: "Cornice rettangolare azzurra + due trattini sopra + croce diagonale dentro = squad di fanteria amica. Cornice romboidale rossa + 'I' sopra + cerchio dentro = compagnia logistica nemica.",
          },
          {
            type: "callout",
            title: "REGOLA",
            body: "Leggere prima la cornice (chi), poi l'amplifier (quanto grande), poi l'icona (cosa fa). Tre passaggi rapidi: amico/nemico, dimensione, funzione.",
          },
        ],
      },
      {
        heading: "Sistema russo (cenni)",
        blocks: [
          {
            type: "ul",
            items: [
              "Geometrie diverse: linee tratteggiate, forme angolari",
              "Numerazione unità in cirillico (МСБ = batt. fanteria meccanizzata)",
              "Codifica per colore meno standardizzata",
              "Diagrammi tattici (схема) seguono convenzioni proprie",
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
              "Confondere amplifier dimensione con grado di comando",
              "Disegnare a mano libera senza usare le forme standard",
              "Saltare l'affiliazione cromatica — su monocromia, usare forma esplicitamente",
              "Confondere genio (cerchio+diagonale) con logistica (cerchio)",
              "Usare simboli APP-6 per riportare unità russe — sì, ma marcate come hostile per chiarezza",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I prodotti C2 ucraini al fronte mescolano APP-6 NATO e nomenclatura propria, in cirillico. I volontari che operano in unità ucraine devono saper leggere entrambi. La pratica: identificare prima la cornice (sempre coerente), poi negoziare la lettura dell'icona con il comando ospitante. Saper riconoscere i simboli russi su carte catturate è bonus operativo — molte operazioni hanno beneficiato di documenti catturati letti correttamente.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "NATO symbols (APP-6 / MIL-STD-2525) are the graphic language of maps, briefings and C2 products. Knowing the fundamentals lets you read a graphic OPORD, identify unit dispositions on a map and understand a common operational picture (COP). Different from the Russian system (Cyrillic, different geometry) — useful to interpret captured maps.",
    sections: [
      {
        heading: "Affiliation (shape and colour)",
        blocks: [
          {
            type: "p",
            text: "The symbol frame identifies who it is. Four standard categories.",
          },
          {
            type: "table",
            headers: ["Shape / colour", "Affiliation"],
            rows: AFFILIATION,
          },
        ],
      },
      {
        heading: "Unit size (amplifier)",
        blocks: [
          {
            type: "p",
            text: "Above the frame, symbols indicating the hierarchical size of the represented unit.",
          },
          {
            type: "table",
            headers: ["Amplifier", "Level", "Strength"],
            rows: SIZE_AMPL,
          },
        ],
      },
      {
        heading: "Function (inner icon)",
        blocks: [
          {
            type: "p",
            text: "Inside the frame, an icon indicates the unit's function: infantry, cavalry, artillery, engineer, etc.",
          },
          {
            type: "table",
            headers: ["Icon", "Function"],
            rows: FUNCTION_SYMBOLS,
          },
        ],
      },
      {
        heading: "Reading example",
        blocks: [
          {
            type: "p",
            text: "Blue rectangular frame + two dashes above + diagonal cross inside = friendly infantry squad. Red diamond frame + 'I' above + circle inside = enemy logistic company.",
          },
          {
            type: "callout",
            title: "RULE",
            body: "Read the frame first (who), then the amplifier (how big), then the icon (what does). Three fast steps: friend/enemy, size, function.",
          },
        ],
      },
      {
        heading: "Russian system (notes)",
        blocks: [
          {
            type: "ul",
            items: [
              "Different geometry: dashed lines, angular shapes",
              "Unit numbering in Cyrillic (МСБ = mechanised infantry battalion)",
              "Less standardised colour coding",
              "Tactical diagrams (схема) follow their own conventions",
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
              "Confusing size amplifier with command rank",
              "Drawing freehand without using standard shapes",
              "Skipping colour affiliation — on monochrome, use shape explicitly",
              "Mixing engineer (circle+diagonal) with logistic (circle)",
              "Using APP-6 to report Russian units — fine, but marked as hostile for clarity",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "C2 products on the Ukrainian front mix NATO APP-6 and Ukrainian own nomenclature in Cyrillic. Volunteers operating in Ukrainian units must read both. Practice: identify the frame first (always consistent), then negotiate icon reading with the host command. Recognising Russian symbols on captured maps is an operational bonus — many operations have benefited from correctly read captured documents.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Símbolos OTAN (APP-6 / MIL-STD-2525) são a linguagem gráfica de carta, briefing e produtos C2. Conhecer os fundamentos permite ler uma OPORD gráfica, identificar a disposição de unidades em carta e entender uma common operational picture (COP). Diferente do sistema russo (cirílico, geometrias diferentes) — útil saber para interpretar cartas capturadas.",
    sections: [
      {
        heading: "Filiação (forma e cor)",
        blocks: [
          {
            type: "p",
            text: "A moldura do símbolo identifica quem é. Quatro categorias padrão.",
          },
          {
            type: "table",
            headers: ["Forma / cor", "Filiação"],
            rows: AFFILIATION,
          },
        ],
      },
      {
        heading: "Tamanho da unidade (amplifier)",
        blocks: [
          {
            type: "p",
            text: "Acima da moldura, símbolos indicando o tamanho hierárquico da unidade.",
          },
          {
            type: "table",
            headers: ["Amplifier", "Nível", "Efetivo"],
            rows: SIZE_AMPL,
          },
        ],
      },
      {
        heading: "Função (ícone interno)",
        blocks: [
          {
            type: "p",
            text: "Dentro da moldura, um ícone indica a função: infantaria, cavalaria, artilharia, engenharia etc.",
          },
          {
            type: "table",
            headers: ["Ícone", "Função"],
            rows: FUNCTION_SYMBOLS,
          },
        ],
      },
      {
        heading: "Exemplo de leitura",
        blocks: [
          {
            type: "p",
            text: "Moldura retangular azul + dois traços acima + cruz diagonal dentro = esquadra de infantaria amiga. Moldura losangular vermelha + 'I' acima + círculo dentro = companhia logística inimiga.",
          },
          {
            type: "callout",
            title: "REGRA",
            body: "Ler primeiro a moldura (quem), depois o amplifier (tamanho), depois o ícone (função). Três passos rápidos: amigo/inimigo, tamanho, função.",
          },
        ],
      },
      {
        heading: "Sistema russo (notas)",
        blocks: [
          {
            type: "ul",
            items: [
              "Geometria diferente: linhas tracejadas, formas angulares",
              "Numeração de unidades em cirílico (МСБ = batalhão de infantaria mecanizada)",
              "Codificação por cor menos padronizada",
              "Diagramas táticos (схема) seguem convenções próprias",
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
              "Confundir amplifier de tamanho com nível de comando",
              "Desenhar à mão livre sem usar formas padrão",
              "Ignorar a cor de filiação — em monocromático, usar forma explicitamente",
              "Confundir engenharia (círculo+diagonal) com logística (círculo)",
              "Usar APP-6 para reportar unidades russas — ok, mas marcando como hostile para clareza",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Produtos C2 no front ucraniano misturam APP-6 OTAN e nomenclatura ucraniana própria em cirílico. Voluntários que atuam em unidades ucranianas precisam ler ambos. Prática: identificar primeiro a moldura (sempre consistente), depois negociar a leitura do ícone com o comando hospedeiro. Reconhecer símbolos russos em cartas capturadas é bônus operacional — muitas operações se beneficiaram de documentos capturados lidos corretamente.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Les symboles OTAN (APP-6 / MIL-STD-2525) sont le langage graphique des cartes, briefings et produits C2. En connaître les fondamentaux permet de lire un OPORD graphique, d'identifier la disposition des unités sur carte et de comprendre un common operational picture (COP). Différent du système russe (cyrillique, géométrie différente) — utile à connaître pour interpréter des cartes capturées.",
    sections: [
      {
        heading: "Affiliation (forme et couleur)",
        blocks: [
          {
            type: "p",
            text: "Le cadre du symbole identifie qui c'est. Quatre catégories standard.",
          },
          {
            type: "table",
            headers: ["Forme / couleur", "Affiliation"],
            rows: AFFILIATION,
          },
        ],
      },
      {
        heading: "Taille d'unité (amplifier)",
        blocks: [
          {
            type: "p",
            text: "Au-dessus du cadre, des symboles indiquent la taille hiérarchique de l'unité représentée.",
          },
          {
            type: "table",
            headers: ["Amplifier", "Niveau", "Effectif"],
            rows: SIZE_AMPL,
          },
        ],
      },
      {
        heading: "Fonction (icône intérieure)",
        blocks: [
          {
            type: "p",
            text: "À l'intérieur du cadre, une icône indique la fonction : infanterie, cavalerie, artillerie, génie etc.",
          },
          {
            type: "table",
            headers: ["Icône", "Fonction"],
            rows: FUNCTION_SYMBOLS,
          },
        ],
      },
      {
        heading: "Exemple de lecture",
        blocks: [
          {
            type: "p",
            text: "Cadre rectangulaire bleu + deux traits au-dessus + croix diagonale à l'intérieur = groupe d'infanterie ami. Cadre losange rouge + « I » au-dessus + cercle à l'intérieur = compagnie logistique ennemie.",
          },
          {
            type: "callout",
            title: "RÈGLE",
            body: "Lire d'abord le cadre (qui), puis l'amplifier (combien), puis l'icône (quoi). Trois étapes rapides : ami/ennemi, taille, fonction.",
          },
        ],
      },
      {
        heading: "Système russe (notes)",
        blocks: [
          {
            type: "ul",
            items: [
              "Géométrie différente : lignes pointillées, formes angulaires",
              "Numérotation des unités en cyrillique (МСБ = bataillon d'infanterie mécanisée)",
              "Codage couleur moins standardisé",
              "Diagrammes tactiques (схема) suivent leurs propres conventions",
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
              "Confondre l'amplifier de taille avec le grade de commandement",
              "Dessiner à main levée sans utiliser les formes standard",
              "Sauter l'affiliation couleur — en monochrome, utiliser la forme explicitement",
              "Confondre génie (cercle+diagonale) et logistique (cercle)",
              "Utiliser APP-6 pour reporter des unités russes — ok, mais marquées hostile pour la clarté",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les produits C2 sur le front ukrainien mélangent APP-6 OTAN et nomenclature ukrainienne propre en cyrillique. Les volontaires opérant en unités ukrainiennes doivent lire les deux. Pratique : identifier le cadre d'abord (toujours cohérent), puis négocier la lecture de l'icône avec le commandement hôte. Reconnaître les symboles russes sur cartes capturées est un bonus opérationnel — de nombreuses opérations ont bénéficié de documents capturés lus correctement.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
