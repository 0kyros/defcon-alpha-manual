import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const HIERARCHY_ROWS: ReadonlyArray<{ cs: string; role: string }> = [
  { cs: "BRAVO 6", role: "Commander, Bravo Company" },
  { cs: "BRAVO 5", role: "XO / Deputy" },
  { cs: "BRAVO 7", role: "First Sergeant / Senior NCO" },
  { cs: "BRAVO 1", role: "1st Platoon" },
  { cs: "BRAVO 1 ACTUAL", role: "1st Platoon Leader, in person" },
  { cs: "BRAVO 1-1", role: "1st Squad, 1st Platoon" },
  { cs: "BRAVO 1-1A", role: "1st Fire Team, 1st Squad" },
];

interface Strings {
  intro: string;
  types: string;
  typesItems: ReadonlyArray<{ title: string; body: string }>;
  hierarchy: string;
  hierarchyBody: string;
  actual: string;
  actualBody: string;
  rotation: string;
  rotationBody: string;
  design: string;
  designItems: ReadonlyArray<string>;
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
      "Il callsign è l'identità operativa di una stazione, di una persona o di un'unità sulla rete. È volutamente disaccoppiato dal nome, dal grado e dalla posizione amministrativa per ragioni OPSEC: chi ascolta non deve poter ricostruire la struttura reale dalla sola intercettazione. Una buona disciplina di callsign è il primo livello di protezione contro l'analisi del nemico.",
    types: "Tipi di callsign",
    typesItems: [
      { title: "Fixed / Amministrativi", body: "Callsign permanenti associati a una posizione amministrativa stabile (HQ, base logistica, comando aereo). Cambiano raramente. Usati in cicli di pace o in retrovia." },
      { title: "Tactical", body: "Assegnati per la durata di una missione, esercitazione o ciclo operativo. Cambiano a rotazione (es. settimanale o per CEOI). Sono quelli usati al fronte." },
      { title: "Brevity", body: "Mono-parola, scelti per essere brevi e distinti su voce compressa. Esempi: HAWK, SPEAR, COBRA. Tipicamente assegnati a leader di assalto, comando volante, asset esterni." },
      { title: "Daily / Cyclic", body: "Callsign rigenerati ogni 24 h o per ciclo CEOI per limitare il pattern of life. Più costosi da gestire ma riducono fortemente la profilazione." },
    ],
    hierarchy: "Struttura gerarchica numerica",
    hierarchyBody:
      "La convenzione anglo-NATO usa numeri suffissi per indicare il ruolo all'interno di un'unità. La logica è: lettera fonetica = unità, numero = posizione. Il numero \"6\" identifica per convenzione il comandante, \"5\" il deputy, \"7\" il senior NCO, \"1\" \"2\" \"3\" i plotoni. Le sub-unità si esprimono con dash e cifra (1-1 = 1° squadra del 1° plotone). Le squadre di fuoco si aggiungono come lettera finale (A, B).",
    actual: "ACTUAL — quando parla la persona, non la stazione",
    actualBody:
      "Quando il chiamato è specificamente la persona indicata dal callsign (non un operatore radio che parla per suo conto), si aggiunge ACTUAL. \"BRAVO 6 ACTUAL\" significa: voglio parlare con il comandante in persona, non con il radio operator del comandante. È una distinzione operativa importante: alcuni messaggi richiedono il decisore vero, non un relay.",
    rotation: "Rotazione e OPSEC",
    rotationBody:
      "I callsign tattici ruotano per impedire al nemico di costruire un profilo stabile della struttura. Una rotazione tipica è giornaliera, abbinata al rinnovo del CEOI. Mantenere lo stesso callsign per settimane su una rete in chiaro equivale a fornire al SIGINT un riferimento fisso a cui ancorare l'analisi. Nei reparti volontari internazionali la rotazione è spesso negletta — è un errore identificabile a colpo d'occhio per chi è addestrato.",
    design: "Regole di assegnazione",
    designItems: [
      "Brevi: 1-3 sillabe quando pronunciati in NATO phonetic",
      "Foneticamente distinti: evitare callsign simili sulla stessa rete (BRAVO TWO / DELTA TWO crea confusione)",
      "Neutri: nessuna assonanza con nomi propri, grado, città di origine, paese di origine",
      "Disaccoppiati dalla funzione visibile dell'unità (non chiamare un'unità di sniper \"SHOOTER\")",
      "Memorabili sotto stress: l'operatore deve riconoscere il proprio callsign al primo orecchio anche dopo 24 ore senza sonno",
      "Pronunciabili da tutti gli operatori della rete (nessuna parola difficile per non-anglofoni)",
    ],
    multinational: "Reti multinazionali",
    multinationalBody:
      "In ambiente multinazionale (volontari italiani, brasiliani, francesi, ucraini, britannici, americani) i callsign non devono mai includere riferimenti nazionali: niente \"ITALIA\", \"BRAZIL\", \"PARIS\". Espongono OPSEC, espongono identità del personale, e creano problemi politici se intercettati e divulgati. La scelta dello standard ITU/NATO neutralizza questi rischi.",
    errors: "Errori comuni",
    errorsItems: [
      "Mantenere lo stesso callsign per mesi su rete in chiaro",
      "Usare nickname personali (\"PUMA\", \"WOLF\") che derivano dal soldato — non dal callsign assegnato",
      "Confondere il proprio numero gerarchico (rispondere come 1 invece di 1-1)",
      "Saltare l'ACTUAL quando serve il decisore vero",
      "Chiamare con il grado (\"Major, this is...\")",
      "Includere riferimenti nazionali o linguistici nel callsign",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Sul fronte ucraino i callsign nei reparti irregolari spesso derivano dal nome di battaglia del soldato (\"WOLF\", \"ALEX\", \"DA VINCI\"). Funziona per la coesione interna ma è disastroso per OPSEC: il nome di battaglia compare su social, video, dichiarazioni — è banalmente collegabile a una rete radio intercettata. Le unità più professionali separano il nome di battaglia (uso pubblico, morale) dal callsign tattico (rotazione su CEOI, mai sui social). Quando questa separazione non è imposta dall'unità, ogni operatore può imporla a sé stesso: parlare in pubblico con il nome di battaglia, parlare in radio solo con il callsign assegnato.",
  },
  en: {
    intro:
      "The callsign is the operational identity of a station, person or unit on the net. It is deliberately decoupled from name, rank and administrative position for OPSEC reasons: an interceptor must not be able to reconstruct the real structure from radio alone. Good callsign discipline is the first layer of protection against enemy analysis.",
    types: "Callsign types",
    typesItems: [
      { title: "Fixed / Administrative", body: "Permanent callsigns tied to a stable administrative position (HQ, logistic base, air command). Rotate rarely. Used in peacetime or rear-area cycles." },
      { title: "Tactical", body: "Assigned for the duration of a mission, exercise or operational cycle. Rotate on schedule (e.g. weekly or per CEOI). The ones used at the front." },
      { title: "Brevity", body: "Single-word, picked for being short and distinct on compressed voice. Examples: HAWK, SPEAR, COBRA. Typically assigned to assault leaders, airborne command, external assets." },
      { title: "Daily / Cyclic", body: "Callsigns regenerated every 24 h or per CEOI cycle to limit pattern of life. More expensive to run but cut profiling sharply." },
    ],
    hierarchy: "Numeric hierarchical structure",
    hierarchyBody:
      "The Anglo-NATO convention uses numeric suffixes to indicate role inside a unit. Logic: phonetic letter = unit, number = position. \"6\" conventionally identifies the commander, \"5\" the deputy, \"7\" the senior NCO, \"1\"/\"2\"/\"3\" the platoons. Sub-units use dash + digit (1-1 = 1st squad of 1st platoon). Fire teams add a trailing letter (A, B).",
    actual: "ACTUAL — when the person speaks, not the station",
    actualBody:
      "When the call is specifically for the person identified by the callsign (not a radio operator speaking on their behalf), append ACTUAL. \"BRAVO 6 ACTUAL\" means: I want the commander themselves, not the commander's radio operator. An important operational distinction: some messages require the actual decision-maker, not a relay.",
    rotation: "Rotation and OPSEC",
    rotationBody:
      "Tactical callsigns rotate to prevent the enemy from building a stable structural profile. Typical rotation is daily, paired with CEOI renewal. Keeping the same callsign for weeks on a clear net is equivalent to handing SIGINT a fixed anchor for analysis. In international volunteer units rotation is often neglected — an error visible at a glance to a trained eye.",
    design: "Assignment rules",
    designItems: [
      "Short: 1–3 syllables in NATO phonetic",
      "Phonetically distinct: avoid similar callsigns on the same net (BRAVO TWO / DELTA TWO creates confusion)",
      "Neutral: no resonance with proper names, rank, hometown, country of origin",
      "Decoupled from the unit's visible function (do not call a sniper element \"SHOOTER\")",
      "Memorable under stress: the operator must recognise their callsign first-hearing even after 24 hours without sleep",
      "Pronounceable by every operator on the net (no difficult words for non-native speakers)",
    ],
    multinational: "Multinational nets",
    multinationalBody:
      "In a multinational environment (Italian, Brazilian, French, Ukrainian, British, US volunteers) callsigns must never include national references: no \"ITALIA\", \"BRAZIL\", \"PARIS\". They expose OPSEC, expose personnel identity, and create political problems if intercepted and released. The ITU/NATO standard neutralises these risks.",
    errors: "Common mistakes",
    errorsItems: [
      "Keeping the same callsign for months on a clear net",
      "Using personal nicknames (\"PUMA\", \"WOLF\") derived from the soldier — not from the assigned callsign",
      "Confusing your hierarchical number (replying as 1 instead of 1-1)",
      "Skipping ACTUAL when the real decision-maker is needed",
      "Calling by rank (\"Major, this is...\")",
      "National or linguistic references inside the callsign",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On the Ukrainian front, callsigns in irregular units often derive from the soldier's nom-de-guerre (\"WOLF\", \"ALEX\", \"DA VINCI\"). It works for internal cohesion but is disastrous for OPSEC: the nom-de-guerre appears on social media, videos, statements — trivially linkable to an intercepted radio net. More professional units separate the nom-de-guerre (public use, morale) from the tactical callsign (CEOI rotation, never on social). Where the unit does not enforce this separation, the individual operator can enforce it personally: speak publicly with the nom-de-guerre, speak on radio only with the assigned callsign.",
  },
  "pt-br": {
    intro:
      "O indicativo (callsign) é a identidade operacional de uma estação, pessoa ou unidade na rede. É deliberadamente desacoplado de nome, posto e posição administrativa por motivos OPSEC: quem intercepta não deve poder reconstruir a estrutura real só pelo rádio. Boa disciplina de indicativos é a primeira camada de proteção contra a análise inimiga.",
    types: "Tipos de indicativo",
    typesItems: [
      { title: "Fixos / Administrativos", body: "Indicativos permanentes ligados a posição administrativa estável (QG, base logística, comando aéreo). Mudam raramente. Usados em ciclos de paz ou retaguarda." },
      { title: "Táticos", body: "Atribuídos pela duração de uma missão, exercício ou ciclo operacional. Rotacionam (ex. semanalmente ou por CEOI). São os usados no front." },
      { title: "Brevity", body: "Palavra única, curta e distinta em voz comprimida. Ex.: HAWK, SPEAR, COBRA. Tipicamente atribuídos a líderes de assalto, comando aerotransportado, ativos externos." },
      { title: "Diários / Cíclicos", body: "Indicativos regenerados a cada 24 h ou por ciclo CEOI para limitar pattern of life. Mais caros de gerir mas reduzem fortemente a perfilagem." },
    ],
    hierarchy: "Estrutura hierárquica numérica",
    hierarchyBody:
      "A convenção anglo-OTAN usa sufixos numéricos para indicar o papel dentro da unidade. Lógica: letra fonética = unidade, número = posição. \"6\" identifica por convenção o comandante, \"5\" o adjunto, \"7\" o senior NCO, \"1\"/\"2\"/\"3\" os pelotões. Sub-unidades usam dash + dígito (1-1 = 1ª esquadra do 1º pelotão). Equipes de fogo acrescentam letra final (A, B).",
    actual: "ACTUAL — quando fala a pessoa, não a estação",
    actualBody:
      "Quando o chamado é especificamente a pessoa do indicativo (não um operador de rádio falando por ela), acrescenta-se ACTUAL. \"BRAVO 6 ACTUAL\" significa: quero o comandante em pessoa, não o radioperador do comandante. Distinção operacional importante: algumas mensagens exigem o decisor real, não um relay.",
    rotation: "Rotação e OPSEC",
    rotationBody:
      "Indicativos táticos rotacionam para impedir que o inimigo construa um perfil estrutural estável. Rotação típica é diária, casada à renovação do CEOI. Manter o mesmo indicativo por semanas em rede em claro equivale a entregar ao SIGINT uma âncora fixa para análise. Em unidades voluntárias internacionais a rotação é frequentemente negligenciada — erro visível a olho treinado.",
    design: "Regras de atribuição",
    designItems: [
      "Curtos: 1–3 sílabas no fonético OTAN",
      "Foneticamente distintos: evitar indicativos similares na mesma rede (BRAVO TWO / DELTA TWO confunde)",
      "Neutros: sem ressonância com nomes próprios, posto, cidade ou país de origem",
      "Desacoplados da função visível da unidade (não chamar elemento de sniper de \"SHOOTER\")",
      "Memorizáveis sob estresse: o operador deve reconhecer o próprio indicativo de primeira mesmo após 24 h sem dormir",
      "Pronunciáveis por todos os operadores da rede (sem palavras difíceis para não nativos)",
    ],
    multinational: "Redes multinacionais",
    multinationalBody:
      "Em ambiente multinacional (voluntários italianos, brasileiros, franceses, ucranianos, britânicos, americanos) indicativos não devem ter referências nacionais: nada de \"ITALIA\", \"BRAZIL\", \"PARIS\". Expõem OPSEC, expõem identidade do pessoal e criam problemas políticos se interceptados e divulgados. O padrão ITU/OTAN neutraliza esses riscos.",
    errors: "Erros comuns",
    errorsItems: [
      "Manter o mesmo indicativo por meses em rede em claro",
      "Usar apelidos pessoais (\"PUMA\", \"WOLF\") derivados do soldado — não do indicativo atribuído",
      "Confundir o próprio número hierárquico (responder como 1 em vez de 1-1)",
      "Pular o ACTUAL quando o decisor real é necessário",
      "Chamar pelo posto (\"Major, this is...\")",
      "Referências nacionais ou linguísticas no indicativo",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "No front ucraniano, indicativos em unidades irregulares frequentemente derivam do nome de guerra do soldado (\"WOLF\", \"ALEX\", \"DA VINCI\"). Funciona para coesão interna mas é desastroso para OPSEC: o nome de guerra aparece em redes sociais, vídeos, declarações — trivialmente ligável a rede de rádio interceptada. Unidades mais profissionais separam o nome de guerra (uso público, moral) do indicativo tático (rotação por CEOI, nunca em redes sociais). Quando a unidade não impõe essa separação, o operador pode impô-la a si mesmo: falar em público com o nome de guerra, falar no rádio só com o indicativo atribuído.",
  },
  fr: {
    intro:
      "L'indicatif est l'identité opérationnelle d'une station, d'une personne ou d'une unité sur le réseau. Il est délibérément découplé du nom, du grade et de la position administrative pour des raisons d'OPSEC : un intercepteur ne doit pas pouvoir reconstruire la structure réelle à partir de la seule radio. Une bonne discipline d'indicatifs est la première couche de protection contre l'analyse ennemie.",
    types: "Types d'indicatif",
    typesItems: [
      { title: "Fixes / Administratifs", body: "Indicatifs permanents liés à une position administrative stable (QG, base logistique, commandement aérien). Tournent rarement. Utilisés en cycles de paix ou en arrière." },
      { title: "Tactiques", body: "Attribués pour la durée d'une mission, d'un exercice ou d'un cycle opérationnel. Tournent (par ex. hebdomadairement ou par CEOI). Ce sont ceux du front." },
      { title: "Brevity", body: "Un seul mot, court et distinct sur voix compressée. Ex. HAWK, SPEAR, COBRA. Typiquement attribués aux chefs d'assaut, au commandement aéroporté, à des assets externes." },
      { title: "Journaliers / Cycliques", body: "Indicatifs régénérés toutes les 24 h ou par cycle CEOI pour limiter le pattern of life. Plus coûteux à gérer mais réduisent fortement le profilage." },
    ],
    hierarchy: "Structure hiérarchique numérique",
    hierarchyBody:
      "La convention anglo-OTAN utilise des suffixes numériques pour indiquer le rôle dans l'unité. Logique : lettre phonétique = unité, chiffre = position. « 6 » identifie par convention le commandant, « 5 » l'adjoint, « 7 » le senior NCO, « 1 »/« 2 »/« 3 » les sections. Les sous-unités utilisent tiret + chiffre (1-1 = 1ʳᵉ groupe de la 1ʳᵉ section). Les équipes de feu ajoutent une lettre finale (A, B).",
    actual: "ACTUAL — quand la personne parle, pas la station",
    actualBody:
      "Quand l'appelé est spécifiquement la personne désignée par l'indicatif (et non un radio parlant en son nom), on ajoute ACTUAL. « BRAVO 6 ACTUAL » signifie : je veux le commandant en personne, pas son radio. Distinction opérationnelle importante : certains messages exigent le vrai décideur, pas un relais.",
    rotation: "Rotation et OPSEC",
    rotationBody:
      "Les indicatifs tactiques tournent pour empêcher l'ennemi de bâtir un profil structurel stable. Rotation typique : quotidienne, couplée au renouvellement du CEOI. Garder le même indicatif pendant des semaines sur réseau en clair revient à fournir au SIGINT une ancre fixe pour l'analyse. Dans les unités de volontaires internationaux la rotation est souvent négligée — erreur visible d'un coup d'œil à un œil entraîné.",
    design: "Règles d'attribution",
    designItems: [
      "Courts : 1–3 syllabes en phonétique OTAN",
      "Phonétiquement distincts : éviter indicatifs similaires sur le même réseau (BRAVO TWO / DELTA TWO crée la confusion)",
      "Neutres : pas de résonance avec noms propres, grade, ville ou pays d'origine",
      "Découplés de la fonction visible de l'unité (ne pas appeler un élément sniper « SHOOTER »)",
      "Mémorables sous stress : l'opérateur doit reconnaître son indicatif à la première écoute même après 24 h sans sommeil",
      "Prononçables par tous les opérateurs du réseau (pas de mots difficiles pour les non-natifs)",
    ],
    multinational: "Réseaux multinationaux",
    multinationalBody:
      "En environnement multinational (volontaires italiens, brésiliens, français, ukrainiens, britanniques, américains) les indicatifs ne doivent jamais comporter de référence nationale : pas de « ITALIA », « BRAZIL », « PARIS ». Cela expose l'OPSEC, expose l'identité du personnel et crée des problèmes politiques en cas d'interception. Le standard ITU/OTAN neutralise ces risques.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Garder le même indicatif pendant des mois sur réseau en clair",
      "Utiliser des surnoms personnels (« PUMA », « WOLF ») issus du soldat — pas de l'indicatif attribué",
      "Confondre son propre numéro hiérarchique (répondre comme 1 au lieu de 1-1)",
      "Sauter ACTUAL quand le vrai décideur est nécessaire",
      "Appeler par le grade (« Major, this is... »)",
      "Références nationales ou linguistiques dans l'indicatif",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur le front ukrainien, les indicatifs dans les unités irrégulières dérivent souvent du nom de guerre du soldat (« WOLF », « ALEX », « DA VINCI »). Cela fonctionne pour la cohésion interne mais est désastreux pour l'OPSEC : le nom de guerre apparaît sur les réseaux sociaux, dans les vidéos, dans les déclarations — il est trivialement reliable à un réseau radio intercepté. Les unités plus professionnelles séparent le nom de guerre (usage public, moral) de l'indicatif tactique (rotation CEOI, jamais sur les réseaux sociaux). Si l'unité n'impose pas cette séparation, l'opérateur peut se l'imposer à lui-même : parler en public avec le nom de guerre, ne parler en radio qu'avec l'indicatif attribué.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.types}</h2>
        {s.typesItems.map((t) => (
          <div key={t.title} className="callout">
            <div className="callout-title">{t.title}</div>
            <p>{t.body}</p>
          </div>
        ))}

        <h2>{s.hierarchy}</h2>
        <p>{s.hierarchyBody}</p>
        <table>
          <thead>
            <tr>
              <th>Callsign</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {HIERARCHY_ROWS.map((row) => (
              <tr key={row.cs}>
                <td className="mono">{row.cs}</td>
                <td>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.actual}</h2>
        <p>{s.actualBody}</p>

        <h2>{s.rotation}</h2>
        <blockquote>{s.rotationBody}</blockquote>

        <h2>{s.design}</h2>
        <ul>
          {s.designItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

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
