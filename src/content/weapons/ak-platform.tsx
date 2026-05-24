import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const VARIANTS: ReadonlyArray<{
  name: string;
  caliber: string;
  era: string;
  notes: string;
}> = [
  { name: "AK-47 / AKM", caliber: "7.62×39", era: "1949 / 1959", notes: "Originale Kalashnikov. AKM è la versione \"modernizzata\" 1959, più leggera, stampaggio invece di fresatura." },
  { name: "AK-74", caliber: "5.45×39", era: "1974", notes: "Cambio di calibro a 5.45. Più leggero, traiettoria piatta, rinculo ridotto." },
  { name: "AKS-74U", caliber: "5.45×39", era: "1979", notes: "Carbina corta — equipaggi veicoli, paracadutisti, personale di supporto." },
  { name: "AK-100 family", caliber: "5.45 / 7.62 / 5.56", era: "1990s", notes: "AK-101, 102, 103, 104, 105 — esportazione e moderne unità russe." },
  { name: "AK-12 / AK-15", caliber: "5.45 / 7.62×39", era: "2018", notes: "Versione moderna in dotazione VS russe. Picatinny standard, ergonomia migliorata." },
  { name: "RPK / RPK-74", caliber: "7.62 / 5.45×39", era: "1961 / 1974", notes: "Mitragliatrice leggera derivata dalla piattaforma. Canna più lunga, bipiede." },
  { name: "Vepr / Saiga", caliber: "varie", era: "1990s+", notes: "Versioni civili/derivate, viste anche in dotazione di unità irregolari." },
  { name: "Ucraine Maluk / Vulcan-M", caliber: "5.45 / 7.62", era: "2010s+", notes: "Bullpup ucraini su base AK, in dotazione a unità specializzate UA." },
];

interface Strings {
  intro: string;
  role: string;
  roleBody: string;
  layout: string;
  layoutItems: ReadonlyArray<string>;
  variants: string;
  variantsCols: { name: string; caliber: string; era: string; notes: string };
  ergo: string;
  ergoBody: string;
  ammo: string;
  ammoBody: string;
  ukraine: string;
  ukraineBody: string;
  pros: string;
  prosItems: ReadonlyArray<string>;
  cons: string;
  consItems: ReadonlyArray<string>;
  notice: string;
  noticeBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "Riferimento enciclopedico sulla piattaforma Kalashnikov. Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, varianti, ergonomia, calibri, diffusione. Nessuna istruzione operativa, di manipolazione tattica, di manutenzione interna o di modifica.",
    role: "Ruolo",
    roleBody:
      "Fucile d'assalto a otturatore rotante e presa di gas a corsa lunga, progettato per affidabilità in condizioni estreme. È il fucile più diffuso al mondo, in entrambe le parti del fronte ucraino e nella maggior parte delle unità volontarie internazionali in Ucraina prima della transizione su piattaforme NATO. Standard \"de facto\" per la fanteria post-sovietica.",
    layout: "Caratteristiche generali della famiglia",
    layoutItems: [
      "Otturatore rotante a 2 alette, presa di gas a corsa lunga",
      "Telaio originariamente in acciaio fresato (AK-47), poi stampato (AKM e successivi)",
      "Mira meccanica a tacca-mirino, regolazione fino a ~1000 m",
      "Calcio fisso, ripiegabile (S) o triangolare metallico a seconda variante",
      "Calibri principali: 7.62×39, 5.45×39, 5.56×45 (export), 7.62×51 (alcune Vepr)",
      "Caricatori curvi metallici o polimerici, capacità tipica 30 colpi",
    ],
    variants: "Varianti principali",
    variantsCols: { name: "Variante", caliber: "Calibro", era: "Era", notes: "Note" },
    ergo: "Ergonomia",
    ergoBody:
      "Selettore destro tradizionale (Safe → Auto → Semi dall'alto), maniglia di armamento solidale al carrello (apparentemente \"vibrante\" rispetto agli AR), retta di mira non sull'asse della canna ma sopra la coperchio canna. Le versioni moderne (AK-12, varianti UA) integrano picatinny, calcio regolabile, selettore ambidestro — riducendo le differenze ergonomiche con AR.",
    ammo: "Calibri — note generali",
    ammoBody:
      "7.62×39 è il calibro originale: maggiore energia su brevi distanze, traiettoria più curva, prestazioni decrescenti oltre i 300 m. 5.45×39 (\"poison bullet\") è più leggero, più piatto, ferite balistiche caratteristiche, profilo simile al 5.56 NATO ma non interscambiabile. Le munizioni della piattaforma circolano in enormi quantità in entrambi i magazzini ex-sovietici, il che ne mantiene la diffusione anche dove si transita su armi NATO.",
    ukraine: "Diffusione in Ucraina",
    ukraineBody:
      "Sia le Forze Armate ucraine che russe utilizzano largamente AK in tutte le varianti. Le unità ucraine hanno progressivamente ricevuto armi NATO (M4, M16, Bren 2, AUG, FN SCAR, HK416), ma l'AK rimane la spina dorsale numerica. Volontari internazionali si addestrano abitualmente su entrambe le piattaforme. Conoscere AK e AR a livello manipolazione safe è prerequisito di base.",
    pros: "Vantaggi (livello dottrinale)",
    prosItems: [
      "Affidabilità estrema in condizioni di sporco, fango, freddo, sabbia",
      "Tolleranza a tolleranze costruttive ampie",
      "Munizioni e parti disponibili in quasi tutti i magazzini ex-URSS",
      "Curva di apprendimento per manipolazione sicura relativamente breve",
      "Robustezza meccanica del telaio",
    ],
    cons: "Limiti (livello dottrinale)",
    consItems: [
      "Precisione media a distanze medio-lunghe inferiore rispetto a piattaforme AR moderne",
      "Ergonomia di base meno adatta a ottiche moderne (sulle versioni più vecchie)",
      "Rinculo più marcato (7.62×39)",
      "Modularità limitata sulle versioni vintage",
      "Pesante rispetto a piattaforme moderne equivalenti",
    ],
    notice: "Limiti del manuale",
    noticeBody:
      "Questa scheda è enciclopedica. Non descrive smontaggio, manutenzione, fix di malfunzionamenti, manipolazione tattica, tiro reale, modifiche. Tutte queste competenze richiedono addestramento in poligono con istruttori certificati e accesso legale all'arma nel quadro normativo applicabile.",
  },
  en: {
    intro:
      "Encyclopaedic reference on the Kalashnikov platform. Public doctrinal information only: role, nomenclature, variants, ergonomics, calibres, distribution. No operational, tactical handling, internal maintenance or modification instruction.",
    role: "Role",
    roleBody:
      "Rotating-bolt, long-stroke gas-piston assault rifle, designed for reliability in extreme conditions. The most widespread rifle in the world, fielded on both sides of the Ukrainian front and in most international volunteer units in Ukraine before any transition to NATO platforms. \"De facto\" standard of post-Soviet infantry.",
    layout: "General family characteristics",
    layoutItems: [
      "Two-lug rotating bolt, long-stroke gas piston",
      "Originally milled steel receiver (AK-47), later stamped (AKM and subsequent)",
      "Iron sights, notch-and-post, adjustable to ~1000 m",
      "Fixed, side-folding (S) or triangular metal stock depending on variant",
      "Main calibres: 7.62×39, 5.45×39, 5.56×45 (export), 7.62×51 (some Vepr)",
      "Curved metal or polymer magazines, typically 30 rounds",
    ],
    variants: "Main variants",
    variantsCols: { name: "Variant", caliber: "Calibre", era: "Era", notes: "Notes" },
    ergo: "Ergonomics",
    ergoBody:
      "Traditional right-side selector (Safe → Auto → Semi top-down), reciprocating charging handle on the carrier (visibly \"flapping\" compared to AR), sight line above the dust cover rather than on the bore axis. Modern variants (AK-12, Ukrainian derivatives) integrate Picatinny, adjustable stock, ambidextrous selector — narrowing ergonomic differences with AR.",
    ammo: "Calibres — general notes",
    ammoBody:
      "7.62×39 is the original: more energy at short range, more curved trajectory, falling performance past 300 m. 5.45×39 (\"poison bullet\") is lighter, flatter, distinctive terminal behaviour, profile similar to 5.56 NATO but not interchangeable. Platform ammunition circulates in vast quantities across ex-Soviet stocks, keeping distribution high even where units have moved to NATO arms.",
    ukraine: "Distribution in Ukraine",
    ukraineBody:
      "Both Ukrainian and Russian armed forces use AK in all variants extensively. Ukrainian units have progressively received NATO weapons (M4, M16, Bren 2, AUG, FN SCAR, HK416), but the AK remains the numerical backbone. International volunteers routinely train on both platforms. Safe-handling knowledge on AK and AR is baseline.",
    pros: "Advantages (doctrinal level)",
    prosItems: [
      "Extreme reliability in dirt, mud, cold, sand",
      "Tolerance to wide manufacturing tolerances",
      "Ammunition and parts available across ex-USSR stocks",
      "Relatively short learning curve for safe handling",
      "Mechanical robustness of receiver",
    ],
    cons: "Limits (doctrinal level)",
    consItems: [
      "Average accuracy at medium-long range lower than modern AR platforms",
      "Baseline ergonomics less suited to modern optics on older versions",
      "More pronounced recoil (7.62×39)",
      "Limited modularity on vintage versions",
      "Heavy compared to modern equivalents",
    ],
    notice: "Manual limits",
    noticeBody:
      "This entry is encyclopaedic. It does not describe disassembly, maintenance, malfunction fixes, tactical handling, live fire, or modifications. Those skills require certified range training and legal weapon access under applicable jurisdiction.",
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre a plataforma Kalashnikov. Apenas informações doutrinárias públicas: papel, nomenclatura, variantes, ergonomia, calibres, distribuição. Nenhuma instrução operacional, manuseio tático, manutenção interna ou modificação.",
    role: "Papel",
    roleBody:
      "Fuzil de assalto de ferrolho rotativo e pistão de gás de curso longo, projetado para confiabilidade em condições extremas. O fuzil mais difundido do mundo, presente em ambos os lados do front ucraniano e na maioria das unidades voluntárias internacionais antes da transição a plataformas OTAN. Padrão \"de facto\" da infantaria pós-soviética.",
    layout: "Características gerais da família",
    layoutItems: [
      "Ferrolho rotativo de 2 ressaltos, pistão de gás de curso longo",
      "Receptor originalmente em aço fresado (AK-47), depois estampado (AKM e seguintes)",
      "Miras de ferro, alça e massa, reguláveis até ~1000 m",
      "Coronha fixa, dobrável lateral (S) ou metálica triangular conforme variante",
      "Calibres principais: 7,62×39, 5,45×39, 5,56×45 (exportação), 7,62×51 (algumas Vepr)",
      "Carregadores curvos de metal ou polímero, tipicamente 30 cartuchos",
    ],
    variants: "Variantes principais",
    variantsCols: { name: "Variante", caliber: "Calibre", era: "Era", notes: "Notas" },
    ergo: "Ergonomia",
    ergoBody:
      "Seletor lateral direito (Safe → Auto → Semi de cima para baixo), maçaneta de armar solidária ao carrier (vibra visivelmente em comparação ao AR), linha de mira acima do cobre-poeira em vez de no eixo do cano. Variantes modernas (AK-12, derivadas ucranianas) integram Picatinny, coronha ajustável, seletor ambidestro — reduzindo a diferença ergonômica com o AR.",
    ammo: "Calibres — notas gerais",
    ammoBody:
      "7,62×39 é o original: mais energia em curta distância, trajetória mais curva, queda de desempenho após 300 m. 5,45×39 (\"poison bullet\") é mais leve, mais plano, comportamento terminal característico, perfil similar ao 5,56 OTAN mas não intercambiável. A munição da plataforma circula em vastas quantidades nos estoques ex-soviéticos, mantendo difusão alta mesmo onde unidades migraram para armas OTAN.",
    ukraine: "Distribuição na Ucrânia",
    ukraineBody:
      "Tanto as forças armadas ucranianas quanto russas usam o AK extensivamente em todas as variantes. Unidades ucranianas receberam progressivamente armas OTAN (M4, M16, Bren 2, AUG, FN SCAR, HK416), mas o AK permanece a espinha dorsal numérica. Voluntários internacionais treinam em ambas as plataformas rotineiramente. Conhecimento de manuseio seguro em AK e AR é pré-requisito básico.",
    pros: "Vantagens (nível doutrinário)",
    prosItems: [
      "Confiabilidade extrema em sujeira, lama, frio, areia",
      "Tolerância a folgas construtivas amplas",
      "Munição e peças disponíveis em estoques ex-URSS",
      "Curva de aprendizado relativamente curta para manuseio seguro",
      "Robustez mecânica do receptor",
    ],
    cons: "Limites (nível doutrinário)",
    consItems: [
      "Precisão média a longa distância menor que plataformas AR modernas",
      "Ergonomia base menos adequada a óticas modernas em versões antigas",
      "Recuo mais marcado (7,62×39)",
      "Modularidade limitada em versões vintage",
      "Pesado em comparação a equivalentes modernos",
    ],
    notice: "Limites do manual",
    noticeBody:
      "Este verbete é enciclopédico. Não descreve desmontagem, manutenção, correção de panes, manuseio tático, tiro real ou modificações. Essas competências exigem treinamento em estande com instrutores certificados e acesso legal à arma sob a jurisdição aplicável.",
  },
  fr: {
    intro:
      "Référence encyclopédique sur la plateforme Kalachnikov. Informations doctrinales publiques uniquement : rôle, nomenclature, variantes, ergonomie, calibres, diffusion. Aucune instruction opérationnelle, de manipulation tactique, de maintenance interne ou de modification.",
    role: "Rôle",
    roleBody:
      "Fusil d'assaut à culasse rotative et emprunt de gaz à course longue, conçu pour la fiabilité en conditions extrêmes. Fusil le plus répandu au monde, présent des deux côtés du front ukrainien et dans la plupart des unités de volontaires internationaux en Ukraine avant transition vers plateformes OTAN. Standard « de facto » de l'infanterie post-soviétique.",
    layout: "Caractéristiques générales de la famille",
    layoutItems: [
      "Culasse rotative à 2 tenons, emprunt de gaz à course longue",
      "Boîtier acier fraisé à l'origine (AK-47), puis embouti (AKM et suivants)",
      "Hausse et guidon, réglables jusqu'à ~1000 m",
      "Crosse fixe, repliable latérale (S) ou métallique triangulaire selon variante",
      "Calibres principaux : 7,62×39, 5,45×39, 5,56×45 (export), 7,62×51 (certaines Vepr)",
      "Chargeurs courbes métal ou polymère, typiquement 30 cartouches",
    ],
    variants: "Variantes principales",
    variantsCols: { name: "Variante", caliber: "Calibre", era: "Époque", notes: "Notes" },
    ergo: "Ergonomie",
    ergoBody:
      "Sélecteur droit traditionnel (Safe → Auto → Semi de haut en bas), levier d'armement solidaire de la culasse mobile (« battant » visiblement comparé à l'AR), ligne de visée au-dessus du couvre-mécanisme plutôt que sur l'axe du canon. Les variantes modernes (AK-12, dérivés ukrainiens) intègrent Picatinny, crosse réglable, sélecteur ambidextre — réduisant l'écart ergonomique avec l'AR.",
    ammo: "Calibres — notes générales",
    ammoBody:
      "7,62×39 d'origine : plus d'énergie à courte distance, trajectoire plus courbée, performance décroissante au-delà de 300 m. 5,45×39 (« poison bullet ») plus léger, plus plat, comportement terminal caractéristique, profil similaire au 5,56 OTAN mais non interchangeable. Les munitions de la plateforme circulent en quantités énormes dans les stocks ex-soviétiques, maintenant la diffusion élevée même là où les unités passent aux armes OTAN.",
    ukraine: "Diffusion en Ukraine",
    ukraineBody:
      "Les forces armées ukrainiennes comme russes utilisent l'AK dans toutes ses variantes massivement. Les unités ukrainiennes ont progressivement reçu des armes OTAN (M4, M16, Bren 2, AUG, FN SCAR, HK416), mais l'AK reste la colonne vertébrale numérique. Les volontaires internationaux s'entraînent couramment sur les deux plateformes. La connaissance de la manipulation sûre sur AK et AR est un prérequis de base.",
    pros: "Avantages (niveau doctrinal)",
    prosItems: [
      "Fiabilité extrême en saleté, boue, froid, sable",
      "Tolérance à des cotes de fabrication larges",
      "Munitions et pièces disponibles dans les stocks ex-URSS",
      "Courbe d'apprentissage relativement courte pour la manipulation sûre",
      "Robustesse mécanique du boîtier",
    ],
    cons: "Limites (niveau doctrinal)",
    consItems: [
      "Précision moyenne à longue distance inférieure aux AR modernes",
      "Ergonomie de base moins adaptée aux optiques modernes sur les anciennes versions",
      "Recul plus marqué (7,62×39)",
      "Modularité limitée sur les versions vintage",
      "Plus lourd que les équivalents modernes",
    ],
    notice: "Limites du manuel",
    noticeBody:
      "Cette fiche est encyclopédique. Elle ne décrit ni démontage, ni maintenance, ni résolution de pannes, ni manipulation tactique, ni tir réel, ni modifications. Ces compétences exigent un entraînement en stand avec des instructeurs certifiés et un accès légal à l'arme selon la juridiction applicable.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.role}</h2>
        <p>{s.roleBody}</p>

        <h2>{s.layout}</h2>
        <ul>
          {s.layoutItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.variants}</h2>
        <table>
          <thead>
            <tr>
              <th>{s.variantsCols.name}</th>
              <th>{s.variantsCols.caliber}</th>
              <th>{s.variantsCols.era}</th>
              <th>{s.variantsCols.notes}</th>
            </tr>
          </thead>
          <tbody>
            {VARIANTS.map((v) => (
              <tr key={v.name}>
                <td className="mono">{v.name}</td>
                <td className="mono">{v.caliber}</td>
                <td className="mono">{v.era}</td>
                <td>{v.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.ergo}</h2>
        <p>{s.ergoBody}</p>

        <h2>{s.ammo}</h2>
        <p>{s.ammoBody}</p>

        <h2>{s.ukraine}</h2>
        <blockquote>{s.ukraineBody}</blockquote>

        <h2>{s.pros}</h2>
        <ul>
          {s.prosItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.cons}</h2>
        <ul>
          {s.consItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="callout" style={{ borderColor: "var(--warn)" }}>
          <div className="callout-title" style={{ color: "var(--warn)" }}>
            {s.notice}
          </div>
          <p>{s.noticeBody}</p>
        </div>
      </>
    ),
  };
}
