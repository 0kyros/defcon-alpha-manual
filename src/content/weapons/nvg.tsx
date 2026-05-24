import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["AN/PVS-7", "Gen 3 — biocular, mono tubo", "1980s", "Singolo tubo con sdoppiamento ottico verso entrambi gli occhi. Sostituita da PVS-14 in unità moderne."],
  ["AN/PVS-14", "Gen 3 — monoculare", "2000", "Standard US/NATO. Indossato in helmet mount o handheld. Verde fosforo (P43) o bianco fosforo (WP)."],
  ["AN/PVS-31", "Gen 3 WP — binoculare", "2010", "Doppio tubo bianco-fosforo, percezione di profondità ricostituita. Riferimento SOF moderno."],
  ["AN/PVS-15", "Gen 3 — binoculare", "1990s", "Doppio tubo verde-fosforo, precedente al PVS-31. Largamente diffuso."],
  ["GPNVG-18 (Ground Panoramic)", "Gen 3 — quadriculare", "2008", "Quattro tubi, campo visivo 97° (vs 40° standard). In dotazione DEVGRU, CSAR, JSOC."],
  ["NV/G Gen 2 — Soviet/RUS", "Gen 2", "1970s+", "1PN58, 1PN138 Bachilo, Drovosek-NSPU. Generazione 2 con minore risoluzione e durata vs Gen 3."],
  ["NVG civili commerciali", "Gen 2 / Gen 3 export", "2000s+", "AGM, ATN, Armasight, PVS-14 cloni. Filato 25%/30% MIL-spec lt; standard MIL."],
  ["IR illuminator standalone", "IR LED / laser IR", "Varie", "Surefire M952V, B.E. Meyers MAWL, PEQ-15. Illumina scena per NVG passivi in totale buio."],
  ["Image intensifier tube Gen 4 (filmless)", "Gen 3/4 filmless", "2010s+", "FOM (Figure of Merit) >2200, SNR elevato, alta risoluzione in luce ultrabassa."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sui visori notturni a intensificazione di luce (NVG / NOD). Solo informazioni dottrinali pubbliche: generazioni, ruolo, varianti, diffusione. Nessuna istruzione operativa, di azzeramento di IR laser, di settings tattici o di manutenzione.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Dispositivi di visione notturna basati su tubo intensificatore d'immagine, che amplificano la luce residua (stelle, luna, illuminazione urbana) di un fattore 30.000-50.000×. Operano nello spettro visibile + vicino infrarosso (NIR, 700-900 nm). Rappresentano lo strumento principale di dominanza notturna della fanteria moderna, in dotazione standard ai reparti regolari di paesi NATO.",
          },
        ],
      },
      {
        heading: "Generazioni",
        blocks: [
          {
            type: "ul",
            items: [
              "Gen 1: tubi storici anni '60, bassa risoluzione, halo significativo, durata breve",
              "Gen 2: anni '70-'90, MCP (microchannel plate), durata 5.000 h, qualità intermedia",
              "Gen 3: dal 1985, fotocatodo a gallium arsenide (GaAs), durata 10.000+ h, standard NATO odierno",
              "Gen 3 filmless / Gen 4: SNR (signal-to-noise ratio) elevato, performance in luce ultrabassa",
              "FOM (Figure of Merit): risoluzione (lp/mm) × SNR. Tube Gen 3 militare: FOM 1800-2500+",
              "Fosforo: verde (P43, tradizionale) o bianco (WP, percepito più naturale, meno affaticante)",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Generazione / Config", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Illuminatori e laser IR",
        blocks: [
          {
            type: "p",
            text: "Gli NVG sono passivi: amplificano la luce esistente. In assenza di luce residua (notte coperta, sotterraneo, interno) richiedono illuminazione IR attiva. PEQ-15 ATPIAL, DBAL-A3, MAWL combinano laser IR visibile (visible-to-NVG) e illuminatore IR a flood. Lo spettro IR è invisibile a occhio nudo ma è perfettamente visibile a chiunque possegga NVG: l'uso di illuminatori IR su un avversario equipaggiato è una compromissione potenziale.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Forze ucraine ricevono PVS-14, PVS-31, GPNVG, oltre a binoculari Gen 3 europei (Hensoldt, Photonis). La diffusione è disomogenea: unità SOF/recon possiedono Gen 3 binoculari WP, unità di linea spesso solo monoculari Gen 3 o Gen 2+. Forze russe usano 1PN58, 1PN138, NV/G-26, ma in molti casi anche NVG commerciali cinesi acquistati privatamente. La dominanza notturna è uno degli sbilanciamenti tecnologici più rilevanti del conflitto.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Mobilità e operatività notturna senza illuminazione visibile",
              "Profondità (binoculare/quadriculare) e larghezza FOV su sistemi moderni",
              "Combinazione con termico (clip-on o monoculare separato) per coprire entrambi gli spettri",
              "Sistemi WP riducono fatica visiva e migliorano riconoscimento sagoma",
              "Compatibilità con laser IR e illuminatori per overlay tattico",
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
              "Non vedono attraverso fumo, fitta nebbia o oscurità totale senza illuminazione IR",
              "Dipendono da batterie (AA, CR123, MRBC) — autonomia 8-40 h",
              "Riduzione di campo visivo (~40° su monoculare, ~97° su GPNVG) vs visione naturale",
              "Halo da sorgenti luminose punctuali (fari, esplosioni, flare)",
              "Costo elevato di NVG militari (PVS-14 ~3k€, PVS-31 ~10-15k€, GPNVG ~40k€)",
              "Categoria di equipaggiamento controllata, vincoli ITAR su export",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di setup, azzeramento di IR laser, regolazione di gain, manipolazione tattica notturna o manutenzione. Tali competenze richiedono addestramento militare notturno con istruttori certificati.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on image-intensifying night vision goggles (NVG / NOD). Public doctrinal information only: generations, role, variants, distribution. No operational, IR laser zeroing, tactical settings or maintenance instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Night vision devices based on image-intensifier tubes, which amplify residual light (stars, moon, urban illumination) by a factor of 30,000-50,000×. They operate in the visible + near-infrared spectrum (NIR, 700-900 nm). The principal tool of modern infantry night dominance, standard issue in NATO regular units.",
          },
        ],
      },
      {
        heading: "Generations",
        blocks: [
          {
            type: "ul",
            items: [
              "Gen 1: 1960s historical tubes, low resolution, significant halo, short life",
              "Gen 2: 1970s-90s, MCP (microchannel plate), 5,000 h life, intermediate quality",
              "Gen 3: from 1985, gallium-arsenide (GaAs) photocathode, 10,000+ h life, current NATO standard",
              "Gen 3 filmless / Gen 4: high SNR (signal-to-noise ratio), ultra-low-light performance",
              "FOM (Figure of Merit): resolution (lp/mm) × SNR. Military Gen 3 tube: FOM 1800-2500+",
              "Phosphor: green (P43, traditional) or white (WP, perceived more natural, less fatiguing)",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Generation / Config", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "IR illuminators and lasers",
        blocks: [
          {
            type: "p",
            text: "NVGs are passive: they amplify existing light. In the absence of residual light (overcast night, underground, interior) they require active IR illumination. PEQ-15 ATPIAL, DBAL-A3, MAWL combine IR aiming laser (visible-to-NVG) and IR flood illuminator. The IR spectrum is invisible to the naked eye but perfectly visible to anyone equipped with NVG: using IR illuminators against an equipped adversary is a potential compromise.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian forces receive PVS-14, PVS-31, GPNVG, as well as European Gen 3 binoculars (Hensoldt, Photonis). Distribution is uneven: SOF/recon units have Gen 3 WP binoculars, line units often only Gen 3 monoculars or Gen 2+. Russian forces use 1PN58, 1PN138, NV/G-26, but in many cases also Chinese commercial NVGs bought privately. Night dominance is one of the most significant technological imbalances of the conflict.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Mobility and night operability without visible illumination",
              "Depth perception (binocular/quadricular) and wide FOV on modern systems",
              "Combination with thermal (clip-on or separate monocular) covers both spectra",
              "WP systems reduce eye fatigue and improve silhouette recognition",
              "Compatibility with IR lasers and illuminators for tactical overlay",
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
              "Do not see through smoke, heavy fog or total darkness without IR illumination",
              "Battery-dependent (AA, CR123, MRBC) — 8-40 h autonomy",
              "Reduced field of view (~40° monocular, ~97° GPNVG) vs natural vision",
              "Halo from point light sources (headlights, explosions, flares)",
              "High cost of military NVGs (PVS-14 ~€3k, PVS-31 ~€10-15k, GPNVG ~€40k)",
              "Controlled equipment category, ITAR export restrictions",
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
            body: "This entry is encyclopaedic. It does not describe setup procedures, IR laser zeroing, gain adjustment, night tactical handling or maintenance. Those skills require certified military night training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre visores noturnos por intensificação de luz (NVG / NOD). Apenas informações doutrinárias públicas: gerações, papel, variantes, distribuição. Nenhuma instrução operacional, zeragem de laser IR, configurações táticas ou manutenção.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Dispositivos de visão noturna baseados em tubo intensificador de imagem, que amplificam a luz residual (estrelas, lua, iluminação urbana) por um fator de 30.000-50.000×. Operam no espectro visível + infravermelho próximo (NIR, 700-900 nm). Principal ferramenta de dominância noturna da infantaria moderna, em dotação padrão em unidades regulares OTAN.",
          },
        ],
      },
      {
        heading: "Gerações",
        blocks: [
          {
            type: "ul",
            items: [
              "Gen 1: tubos históricos dos anos 60, baixa resolução, halo significativo, vida curta",
              "Gen 2: anos 70-90, MCP (microchannel plate), vida 5.000 h, qualidade intermediária",
              "Gen 3: desde 1985, fotocátodo de arsenieto de gálio (GaAs), vida 10.000+ h, padrão OTAN atual",
              "Gen 3 filmless / Gen 4: SNR elevado, performance em luz ultrabaixa",
              "FOM (Figure of Merit): resolução (lp/mm) × SNR. Tubo Gen 3 militar: FOM 1800-2500+",
              "Fósforo: verde (P43, tradicional) ou branco (WP, percebido mais natural, menos fatigante)",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Geração / Config", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Iluminadores e lasers IR",
        blocks: [
          {
            type: "p",
            text: "Os NVG são passivos: amplificam a luz existente. Na ausência de luz residual (noite encoberta, subterrâneo, interior) requerem iluminação IR ativa. PEQ-15 ATPIAL, DBAL-A3, MAWL combinam laser IR de mira (visible-to-NVG) e iluminador IR flood. O espectro IR é invisível a olho nu mas perfeitamente visível a qualquer um equipado com NVG: usar iluminadores IR contra um adversário equipado é um comprometimento potencial.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Forças ucranianas recebem PVS-14, PVS-31, GPNVG, além de binoculares Gen 3 europeus (Hensoldt, Photonis). A distribuição é desigual: unidades SOF/recon possuem Gen 3 binocular WP, unidades de linha frequentemente apenas monoculares Gen 3 ou Gen 2+. Forças russas usam 1PN58, 1PN138, NV/G-26, mas em muitos casos também NVG comerciais chineses comprados privadamente. A dominância noturna é um dos desequilíbrios tecnológicos mais relevantes do conflito.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Mobilidade e operação noturna sem iluminação visível",
              "Profundidade (binocular/quadricular) e largura de FOV em sistemas modernos",
              "Combinação com térmico (clip-on ou monocular separado) cobre ambos os espectros",
              "Sistemas WP reduzem fadiga visual e melhoram reconhecimento de silhueta",
              "Compatibilidade com lasers IR e iluminadores para overlay tático",
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
              "Não enxergam através de fumaça, neblina densa ou escuridão total sem iluminação IR",
              "Dependem de baterias (AA, CR123, MRBC) — autonomia 8-40 h",
              "Redução de campo visual (~40° monocular, ~97° GPNVG) vs visão natural",
              "Halo de fontes pontuais (faróis, explosões, flares)",
              "Custo elevado de NVG militares (PVS-14 ~3k€, PVS-31 ~10-15k€, GPNVG ~40k€)",
              "Categoria controlada de equipamento, restrições ITAR à exportação",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de setup, zeragem de laser IR, ajuste de ganho, manuseio tático noturno ou manutenção. Essas competências exigem treinamento militar noturno com instrutores certificados.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les jumelles de vision nocturne par intensification de lumière (NVG / NOD). Informations doctrinales publiques uniquement : générations, rôle, variantes, diffusion. Aucune instruction opérationnelle, de réglage laser IR, de paramétrage tactique ou de maintenance.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Dispositifs de vision nocturne basés sur un tube intensificateur d'image, qui amplifient la lumière résiduelle (étoiles, lune, éclairage urbain) d'un facteur 30 000-50 000×. Opèrent dans le spectre visible + proche infrarouge (NIR, 700-900 nm). Principal outil de domination nocturne de l'infanterie moderne, en dotation standard des unités régulières OTAN.",
          },
        ],
      },
      {
        heading: "Générations",
        blocks: [
          {
            type: "ul",
            items: [
              "Gen 1 : tubes historiques années 60, faible résolution, halo significatif, durée brève",
              "Gen 2 : années 70-90, MCP (microchannel plate), durée 5 000 h, qualité intermédiaire",
              "Gen 3 : depuis 1985, photocathode arséniure de gallium (GaAs), durée 10 000+ h, standard OTAN actuel",
              "Gen 3 filmless / Gen 4 : SNR élevé, performances en lumière ultra-faible",
              "FOM (Figure of Merit) : résolution (lp/mm) × SNR. Tube Gen 3 militaire : FOM 1800-2500+",
              "Phosphore : vert (P43, traditionnel) ou blanc (WP, perçu plus naturel, moins fatigant)",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Génération / Config", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Illuminateurs et lasers IR",
        blocks: [
          {
            type: "p",
            text: "Les NVG sont passifs : ils amplifient la lumière existante. En l'absence de lumière résiduelle (nuit couverte, souterrain, intérieur) ils nécessitent un éclairage IR actif. PEQ-15 ATPIAL, DBAL-A3, MAWL combinent laser IR de visée (visible-to-NVG) et illuminateur IR flood. Le spectre IR est invisible à l'œil nu mais parfaitement visible à quiconque équipé de NVG : l'usage d'illuminateurs IR face à un adversaire équipé constitue une compromission potentielle.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les forces ukrainiennes reçoivent des PVS-14, PVS-31, GPNVG, ainsi que des jumelles Gen 3 européennes (Hensoldt, Photonis). La distribution est inégale : les unités SOF/recon possèdent des jumelles Gen 3 WP, les unités de ligne souvent seulement des monoculaires Gen 3 ou Gen 2+. Les forces russes utilisent 1PN58, 1PN138, NV/G-26, mais dans bien des cas aussi des NVG commerciaux chinois achetés à titre privé. La domination nocturne est l'un des déséquilibres technologiques les plus marquants du conflit.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Mobilité et opération nocturne sans éclairage visible",
              "Profondeur (binoculaire/quadriculaire) et largeur de FOV sur systèmes modernes",
              "Combinaison avec thermique (clip-on ou monoculaire séparé) couvre les deux spectres",
              "Systèmes WP réduisent la fatigue visuelle et améliorent la reconnaissance des silhouettes",
              "Compatibilité avec lasers IR et illuminateurs pour overlay tactique",
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
              "Ne voient pas à travers la fumée, le brouillard épais ou l'obscurité totale sans illumination IR",
              "Dépendants des batteries (AA, CR123, MRBC) — autonomie 8-40 h",
              "Champ de vision réduit (~40° monoculaire, ~97° GPNVG) vs vision naturelle",
              "Halo des sources lumineuses ponctuelles (phares, explosions, flares)",
              "Coût élevé des NVG militaires (PVS-14 ~3 k€, PVS-31 ~10-15 k€, GPNVG ~40 k€)",
              "Catégorie d'équipement contrôlée, restrictions ITAR à l'export",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de mise en œuvre, ni réglage de laser IR, ni ajustement de gain, ni manipulation tactique nocturne, ni maintenance. Ces compétences exigent un entraînement militaire nocturne avec instructeurs certifiés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
