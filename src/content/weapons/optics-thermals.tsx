import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Red dot (RDS)", "1× — punto rosso", "Anni '70+", "Aimpoint CompM4/M5, EOTech 512/EXPS3, Holosun 510C. Ingaggio rapido 0-200 m."],
  ["LPVO (Low Power Variable)", "1-6× / 1-8× / 1-10×", "Anni 2000+", "Vortex Razor, NightForce ATACR, Trijicon VCOG. Polivalente CQB-DMR."],
  ["ACOG", "4× fisso o variabile", "1987", "Trijicon ACOG TA31/TA01, reticolo BDC, illuminato a fibra ottica + tritio."],
  ["DMR scope (FFP)", "3-15× / 5-25×", "Anni 2000+", "Vortex Razor HD Gen II/III, Schmidt & Bender PMII. Tiro a 600-1200 m."],
  ["PSO-1 / PO 3.5×17", "4×24 / 3.5×17", "1963 / 1950s", "Ottica standard SVD e altre piattaforme post-sovietiche, reticolo stadiometrico."],
  ["Magnifier flip-to-side", "3× / 5×", "Anni 2000+", "Ingrandimento aggiuntivo per red dot, basculante per uso CQB/extended."],
  ["Termico clip-on", "1× — clip-on davanti ottica", "Anni 2010+", "FLIR ThermoSight, Pulsar Krypton — applicato davanti a un'ottica diurna esistente."],
  ["Termico dedicato (scope)", "Variabile — solo termico", "Anni 2010+", "AGM Rattler, Pulsar Thermion, IRay Mate. Risoluzione 384×288 / 640×512."],
  ["Termico monoculare (handheld)", "1.5-6× — palmare", "Anni 2010+", "Leica Calonox, Pulsar Helion XQ50, FLIR Scout TK. Ricognizione ISR a piedi."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulle categorie di ottiche e termocamere impiegate dalla fanteria. Solo informazioni dottrinali pubbliche: categorie, ruolo, principi di funzionamento, varianti, diffusione. Nessuna istruzione operativa, di azzeramento, di tiro o di manutenzione.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Le ottiche da combattimento estendono la capacità di identificazione e ingaggio del tiratore. Si distinguono per ingrandimento, tipologia di reticolo, illuminazione e spettro di osservazione. Le termocamere operano nello spettro infrarosso termico (LWIR, 8-14 µm) e visualizzano differenze di temperatura, permettendo identificazione anche in totale oscurità e attraverso fumo, polvere e mimetizzazione visiva.",
          },
        ],
      },
      {
        heading: "Categorie principali",
        blocks: [
          {
            type: "ul",
            items: [
              "Red dot (RDS): ingrandimento 1×, punto rosso reflex, ingaggio rapido 0-200 m",
              "LPVO (1-6×, 1-8×, 1-10×): polivalente CQB-tiro mirato, reticolo FFP o SFC",
              "ACOG / fixed prismatic 4×: tradizionale DMR, reticolo BDC integrato",
              "DMR/sniper scope (3-15×, 5-25×): tiro di precisione, reticolo MIL/MOA, torrette regolabili",
              "PSO-1 / PO 3.5×17: ottiche standard post-sovietiche, reticolo stadiometrico per stima distanza",
              "Termico clip-on: integrato davanti a ottica diurna esistente",
              "Termico dedicato (scope): unico canale termico, montato su Picatinny",
              "Termico monoculare/binoculare handheld: ricognizione ISR, non per tiro",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Categoria", "Ingrandimento", "Era", "Note / Esempi"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Termocamere — principi",
        blocks: [
          {
            type: "p",
            text: "I sensori termici rilevano emissioni infrarosse nello spettro LWIR (8-14 µm), tipicamente con sensori microbolometrici amorphous-silicon o vanadium-oxide. Risoluzioni tipiche: 320×240 entry, 384×288 mid-range, 640×512 high-end militare. NETD (Noise Equivalent Temperature Difference) di 30-50 mK su sistemi militari. La termocamera vede attraverso fumo, foschia, oscurità e mimetizzazione visiva, ma è vulnerabile a vetro, acqua e materiali a bassa emissività.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Unità ucraine ricevono large quantità di Aimpoint, EOTech, Vortex, Trijicon, Steiner via aiuti occidentali, e termocamere FLIR, Pulsar, AGM. Forze russe impiegano PO 3.5×17, PSO-1, 1P78, 1PN138 Bachilo (termocamera). Volontari acquistano frequentemente ottica commerciale (Holosun, Vortex, Primary Arms) per uso personale. La termocamera è diventata determinante per gli ingaggi notturni e per il contrasto FPV, e si è diffusa anche tra unità irregolari grazie al mercato commerciale.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Ottica diurna estende portata efficace pratica del fucile",
              "Reticolo BDC consente correzione rapida di elevazione",
              "Termocamera elimina la mimetizzazione visiva e l'oscurità",
              "Termico identifica obiettivi caldi (operatore, motore, FPV) a centinaia di metri",
              "Combinazione NVG + termico è dominante nella notte",
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
              "Ottica diurna inefficace di notte o in condizioni di scarsa luce",
              "Termocamera consuma batteria rapidamente, dipendenza energetica",
              "Termocamera non vede attraverso vetro o acqua",
              "Costo elevato dei sistemi termici militari (5-25 k€ per scope di qualità)",
              "Azzeramento richiede ripetizione per ogni montaggio o cambio batteria",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di azzeramento, regolazione di reticolo, calcolo balistico, manipolazione tattica o manutenzione. Tali competenze richiedono addestramento militare/specialistico al poligono.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on infantry optics and thermal imaging categories. Public doctrinal information only: categories, role, operating principles, variants, distribution. No operational, zeroing, firing or maintenance instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Combat optics extend the shooter's identification and engagement capability. They are distinguished by magnification, reticle type, illumination and observation spectrum. Thermal imagers operate in the thermal infrared spectrum (LWIR, 8-14 µm) and display temperature differences, enabling identification in total darkness and through smoke, dust and visual camouflage.",
          },
        ],
      },
      {
        heading: "Main categories",
        blocks: [
          {
            type: "ul",
            items: [
              "Red dot (RDS): 1× magnification, reflex dot, rapid engagement 0-200 m",
              "LPVO (1-6×, 1-8×, 1-10×): polyvalent CQB-precision, FFP or SFP reticle",
              "ACOG / fixed prismatic 4×: traditional DMR, integrated BDC reticle",
              "DMR/sniper scope (3-15×, 5-25×): precision fire, MIL/MOA reticle, adjustable turrets",
              "PSO-1 / PO 3.5×17: standard post-Soviet optics, stadiametric reticle for range estimation",
              "Clip-on thermal: integrated in front of existing day optic",
              "Dedicated thermal scope: single thermal channel, Picatinny mount",
              "Handheld thermal monocular/binocular: ISR observation, not weapon-mounted",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["Category", "Magnification", "Era", "Notes / Examples"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Thermal imagers — principles",
        blocks: [
          {
            type: "p",
            text: "Thermal sensors detect infrared emissions in the LWIR spectrum (8-14 µm), typically using amorphous-silicon or vanadium-oxide microbolometric sensors. Typical resolutions: 320×240 entry, 384×288 mid-range, 640×512 high-end military. NETD (Noise Equivalent Temperature Difference) of 30-50 mK on military systems. Thermal sees through smoke, haze, darkness and visual camouflage, but is vulnerable to glass, water and low-emissivity materials.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian units receive large quantities of Aimpoint, EOTech, Vortex, Trijicon, Steiner via Western aid, and FLIR, Pulsar, AGM thermals. Russian forces field PO 3.5×17, PSO-1, 1P78, 1PN138 Bachilo (thermal). Volunteers frequently buy commercial optics (Holosun, Vortex, Primary Arms) for personal use. Thermal imaging has become decisive for night engagements and counter-FPV, and has spread to irregular units thanks to the commercial market.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Day optic extends practical effective range of the rifle",
              "BDC reticle allows rapid elevation correction",
              "Thermal eliminates visual camouflage and darkness",
              "Thermal identifies hot targets (operator, engine, FPV) at hundreds of metres",
              "NVG + thermal combination dominates the night",
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
              "Day optic ineffective at night or in low light",
              "Thermal drains batteries rapidly, energy-dependent",
              "Thermal cannot see through glass or water",
              "High cost of military thermal systems (€5-25k per quality scope)",
              "Zeroing requires repetition on every mounting or battery change",
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
            body: "This entry is encyclopaedic. It does not describe zeroing procedures, reticle adjustment, ballistic computation, tactical handling or maintenance. Those skills require specialist military range training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre categorias de óticas e termovisores empregados pela infantaria. Apenas informações doutrinárias públicas: categorias, papel, princípios de funcionamento, variantes, distribuição. Nenhuma instrução operacional, zeragem, tiro ou manutenção.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "As óticas de combate estendem a capacidade de identificação e engajamento do atirador. Distinguem-se por ampliação, tipo de retículo, iluminação e espectro de observação. Os termovisores operam no espectro infravermelho térmico (LWIR, 8-14 µm) e exibem diferenças de temperatura, permitindo identificação em escuridão total e através de fumaça, poeira e camuflagem visual.",
          },
        ],
      },
      {
        heading: "Categorias principais",
        blocks: [
          {
            type: "ul",
            items: [
              "Red dot (RDS): ampliação 1×, ponto reflex, engajamento rápido 0-200 m",
              "LPVO (1-6×, 1-8×, 1-10×): polivalente CQB-precisão, retículo FFP ou SFP",
              "ACOG / prismático fixo 4×: DMR tradicional, retículo BDC integrado",
              "DMR/sniper scope (3-15×, 5-25×): tiro de precisão, retículo MIL/MOA, torretas ajustáveis",
              "PSO-1 / PO 3.5×17: óticas padrão pós-soviéticas, retículo estadiométrico para estimativa de distância",
              "Termovisor clip-on: integrado à frente de ótica diurna existente",
              "Termovisor dedicado (scope): único canal térmico, montagem Picatinny",
              "Termovisor monocular/binocular portátil: observação ISR, não para tiro",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Categoria", "Ampliação", "Era", "Notas / Exemplos"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Termovisores — princípios",
        blocks: [
          {
            type: "p",
            text: "Os sensores térmicos detectam emissões infravermelhas no espectro LWIR (8-14 µm), tipicamente usando sensores microbolométricos de silício amorfo ou óxido de vanádio. Resoluções típicas: 320×240 entrada, 384×288 médio, 640×512 high-end militar. NETD (Noise Equivalent Temperature Difference) de 30-50 mK em sistemas militares. O termovisor enxerga através de fumaça, neblina, escuridão e camuflagem visual, mas é vulnerável a vidro, água e materiais de baixa emissividade.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Unidades ucranianas recebem grandes quantidades de Aimpoint, EOTech, Vortex, Trijicon, Steiner via assistência ocidental, e termovisores FLIR, Pulsar, AGM. Forças russas empregam PO 3.5×17, PSO-1, 1P78, 1PN138 Bachilo (térmico). Voluntários compram frequentemente óticas comerciais (Holosun, Vortex, Primary Arms) para uso pessoal. A termovisão tornou-se determinante para engajamentos noturnos e contra-FPV, e se difundiu também em unidades irregulares graças ao mercado comercial.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Ótica diurna estende alcance efetivo prático do fuzil",
              "Retículo BDC permite correção rápida de elevação",
              "Termovisor elimina camuflagem visual e escuridão",
              "Termovisor identifica alvos quentes (operador, motor, FPV) a centenas de metros",
              "Combinação NVG + térmico domina a noite",
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
              "Ótica diurna ineficaz à noite ou em baixa luz",
              "Termovisor consome bateria rapidamente, dependência energética",
              "Termovisor não vê através de vidro ou água",
              "Custo elevado de sistemas térmicos militares (5-25 k€ por scope de qualidade)",
              "Zeragem requer repetição a cada montagem ou troca de bateria",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de zeragem, regulagem de retículo, cálculo balístico, manuseio tático ou manutenção. Essas competências exigem treinamento militar/especializado no estande.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les catégories d'optiques et de thermiques employées par l'infanterie. Informations doctrinales publiques uniquement : catégories, rôle, principes de fonctionnement, variantes, diffusion. Aucune instruction opérationnelle, de réglage, de tir ou de maintenance.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Les optiques de combat étendent la capacité d'identification et d'engagement du tireur. Elles se distinguent par grossissement, type de réticule, illumination et spectre d'observation. Les caméras thermiques opèrent dans le spectre infrarouge thermique (LWIR, 8-14 µm) et affichent les différences de température, permettant l'identification en obscurité totale et à travers la fumée, la poussière et le camouflage visuel.",
          },
        ],
      },
      {
        heading: "Catégories principales",
        blocks: [
          {
            type: "ul",
            items: [
              "Red dot (RDS) : grossissement 1×, point reflex, engagement rapide 0-200 m",
              "LPVO (1-6×, 1-8×, 1-10×) : polyvalent CQB-précision, réticule FFP ou SFP",
              "ACOG / prismatique fixe 4× : DMR traditionnel, réticule BDC intégré",
              "Lunette DMR/sniper (3-15×, 5-25×) : tir de précision, réticule MIL/MOA, tourelles réglables",
              "PSO-1 / PO 3.5×17 : optiques standard post-soviétiques, réticule stadiométrique pour estimation de distance",
              "Thermique clip-on : intégré devant l'optique diurne existante",
              "Lunette thermique dédiée : unique canal thermique, montage Picatinny",
              "Monoculaire/jumelles thermiques portatives : observation ISR, non pour le tir",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Catégorie", "Grossissement", "Époque", "Notes / Exemples"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Caméras thermiques — principes",
        blocks: [
          {
            type: "p",
            text: "Les capteurs thermiques détectent les émissions infrarouges dans le spectre LWIR (8-14 µm), typiquement avec capteurs microbolométriques en silicium amorphe ou oxyde de vanadium. Résolutions typiques : 320×240 entrée, 384×288 milieu de gamme, 640×512 haut de gamme militaire. NETD (Noise Equivalent Temperature Difference) de 30-50 mK sur les systèmes militaires. Le thermique voit à travers la fumée, la brume, l'obscurité et le camouflage visuel, mais est vulnérable au verre, à l'eau et aux matériaux à faible émissivité.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les unités ukrainiennes reçoivent de grandes quantités d'Aimpoint, EOTech, Vortex, Trijicon, Steiner via assistance occidentale, et de thermiques FLIR, Pulsar, AGM. Les forces russes emploient PO 3.5×17, PSO-1, 1P78, 1PN138 Bachilo (thermique). Les volontaires achètent fréquemment des optiques commerciales (Holosun, Vortex, Primary Arms) pour leur usage personnel. La thermique est devenue déterminante pour les engagements nocturnes et le contre-FPV, et s'est diffusée également dans les unités irrégulières grâce au marché commercial.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Optique diurne étend la portée efficace pratique du fusil",
              "Réticule BDC permet une correction rapide d'élévation",
              "Thermique élimine le camouflage visuel et l'obscurité",
              "Thermique identifie cibles chaudes (opérateur, moteur, FPV) à des centaines de mètres",
              "Combinaison NVG + thermique domine la nuit",
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
              "Optique diurne inefficace de nuit ou en faible luminosité",
              "Thermique consomme la batterie rapidement, dépendance énergétique",
              "Thermique ne voit pas à travers le verre ou l'eau",
              "Coût élevé des systèmes thermiques militaires (5-25 k€ par lunette de qualité)",
              "Réglage nécessite répétition à chaque montage ou changement de batterie",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de réglage, ni ajustement de réticule, ni calcul balistique, ni manipulation tactique, ni maintenance. Ces compétences exigent un entraînement militaire/spécialisé en stand.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
