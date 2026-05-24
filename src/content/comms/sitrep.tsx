import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

interface Strings {
  intro: string;
  purpose: string;
  purposeBody: string;
  cadence: string;
  cadenceBody: string;
  cadenceRows: ReadonlyArray<[string, string]>;
  format: string;
  formatBody: string;
  fields: ReadonlyArray<{ key: string; title: string; body: string }>;
  status: string;
  statusBody: string;
  statusRows: ReadonlyArray<[string, string]>;
  example: string;
  exampleLines: ReadonlyArray<string>;
  variants: string;
  variantsItems: ReadonlyArray<{ title: string; body: string }>;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "Il SITREP (Situation Report) è la fotografia periodica della situazione di un'unità trasmessa al comando. Non è un report di evento (come il contact), non è un'osservazione puntuale (come il SALUTE): è una sintesi strutturata di posizione, stato, attività nemica, attività amica, logistica e intenzione, ripetuta a cadenza fissa o su richiesta. È lo strumento principale con cui il comando mantiene situational awareness sull'intero schieramento.",
    purpose: "Scopo",
    purposeBody:
      "Il SITREP serve tre funzioni: alimentare la situazione comune del comando, segnalare scivolamenti rispetto al piano prima che diventino problemi gravi, e produrre un record temporale per AAR e analisi successive. Un SITREP onesto e formattato correttamente è la differenza tra un'unità che il comando può supportare con QRF/fires/logistica e un'unità che il comando smette di considerare nelle proprie decisioni perché \"non si capisce mai cosa stia facendo\".",
    cadence: "Cadenza",
    cadenceBody:
      "La frequenza del SITREP dipende dal ciclo operativo. Va concordata in OPORD e mai improvvisata. Un'unità che salta SITREP scheduled produce ansia al comando e mette in moto procedure di overdue inutilmente. Se non si ha nulla di nuovo da dire, si trasmette comunque \"NO CHANGE\" — è informazione, non è silenzio.",
    cadenceRows: [
      ["Operazioni statiche / OP", "Ogni 2-4 ore o secondo SOP"],
      ["Movimento attivo", "A ogni checkpoint o leg di marcia"],
      ["Contatto recente", "Entro 15 minuti dalla rottura del contatto"],
      ["Hold position prolungato", "Ogni 6 ore + variazioni significative"],
      ["Rotazione / cambio personale", "All'inizio e alla fine di ogni turno"],
    ],
    format: "Formato standard",
    formatBody:
      "Sei campi obbligatori, ordine fisso. Mnemonico anglo: \"LEEP-IL\" — Location, Enemy, Equipment/logistics, Personnel, Intentions, Logistics. Esistono varianti dottrinali; il principio è identico: posizione → cosa fa il nemico → cosa faccio io → di cosa ho bisogno → cosa farò.",
    fields: [
      { key: "location", title: "LOCATION", body: "Posizione attuale in MGRS 6-8 cifre. Se in movimento, posizione attuale + direzione + velocità approssimata." },
      { key: "status", title: "STATUS", body: "Stato operativo dell'unità: GREEN (full mission capable), AMBER (degraded), RED (combat ineffective), BLACK (out of action). Brevità: una parola." },
      { key: "enemy", title: "ENEMY ACTIVITY", body: "Cosa ha fatto/sta facendo il nemico nel periodo dal SITREP precedente. Solo osservazione, niente inferenza." },
      { key: "friendly", title: "FRIENDLY ACTIVITY", body: "Cosa ha fatto l'unità nel periodo: spostamenti, eventi, modifiche al piano. Sintetico, niente narrazione." },
      { key: "logistics", title: "LOGISTICS", body: "Stato consumabili critici: munizioni (% rispetto al basic load), acqua, batterie, medical, carburante (se applicabile). Solo i critici, non l'inventario." },
      { key: "intent", title: "INTENT", body: "Cosa farà l'unità nel periodo successivo. Una o due righe, action verb + obiettivo + tempo previsto." },
    ],
    status: "Codici di stato",
    statusBody:
      "I codici colore di stato sono lo strumento più efficace per comunicare la combat capability senza dettagli. Il comando legge il colore prima di leggere il resto del SITREP: definisce l'urgenza con cui dedicare attenzione e risorse all'unità.",
    statusRows: [
      ["GREEN", "Full mission capable. Personale, equipment, munizioni e morale a livello operativo."],
      ["AMBER", "Degraded. Capacità ridotta ma ancora funzionale. Tipicamente: perdite contenute, carenza di consumabili, fatigue."],
      ["RED", "Combat ineffective. Non più in grado di sostenere il piano. Richiede sostituzione, rinforzo o estrazione."],
      ["BLACK", "Out of action. Unità non più operativa. Richiede MEDEVAC, recupero o nuova composizione."],
    ],
    example: "Esempio realistico",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO, SITREP follows, over.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three, holding.",
      "STATUS: AMBER.",
      "ENEMY: two FPV passes last hour, one impact two-zero meters west, no observed dismounts.",
      "FRIENDLY: one WIA Priority C stabilized, position improved with overhead cover.",
      "LOGISTICS: ammo eight-zero percent, water two-fife percent, batteries five-zero percent, medical adequate.",
      "INTENT: hold to last light, request resupply at grid four-fife-uniform-uniform-three-six-niner-two-fife-fife at twenty-one-zero-zero Zulu.",
      "How copy, over.",
    ],
    variants: "Varianti operative",
    variantsItems: [
      { title: "LOGSITREP", body: "Variante focalizzata su logistica: consumo munizioni, acqua, medical, carburante. Tipicamente fine giornata o richiesta dal LOG cell." },
      { title: "FUELREP", body: "Specifico per consumo e disponibilità carburante delle unità motorizzate. Cadenza tipica ogni 12 h o pre-movimento." },
      { title: "PERSREP", body: "Stato del personale: presenti, feriti, MIA, KIA. Aggiornato dopo ogni evento di perdita o sostituzione." },
      { title: "INTSUM", body: "Sintesi intelligence — non operativa per singola unità ma per cell di intelligence o S2. Ha cadenza più lenta ma maggiore dettaglio." },
    ],
    errors: "Errori comuni",
    errorsItems: [
      "Copia-incollare il SITREP precedente senza aggiornare campi cambiati",
      "Dichiarare GREEN per evitare di richiamare attenzione — falsa rassicurazione, fallisce alla prima vera richiesta",
      "Saltare il campo INTENT perché \"non si è ancora deciso\" — il comando lavora sull'intent dichiarato",
      "Riportare logistica al dettaglio dell'inventario invece dei consumabili critici",
      "Trasmettere SITREP in chiaro con posizione MGRS reale e intent reale invece di brevity codes (se la rete lo richiede)",
      "Non dichiarare \"NO CHANGE\" — il silenzio non equivale a nessuna variazione, equivale a unità potenzialmente compromessa",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Sul fronte ucraino il SITREP onesto è raro e prezioso. La pressione informale a riportare GREEN (per non sembrare deboli, per non perdere posizione di rotazione, per non innescare burocrazia di rinforzo) porta a una sotto-stima sistematica di AMBER e RED. Il risultato è che il comando viene sorpreso quando un'unità AMBER non-dichiarata cede sotto pressione. Le formazioni di volontari internazionali con cultura operativa più matura hanno introdotto il principio dell'AMBER non punito: dichiarare AMBER non è una debolezza, è dato operativo, e una richiesta di rinforzo non è una resa. Il comando preferisce sempre un AMBER dichiarato sei ore prima a un BLACK sorprendente.",
  },
  en: {
    intro:
      "The SITREP (Situation Report) is the periodic snapshot of a unit's situation transmitted to command. It is not an event report (like a contact), not a punctual observation (like a SALUTE): it is a structured synthesis of position, status, enemy activity, friendly activity, logistics and intent, repeated on schedule or on demand. The main tool by which command keeps situational awareness across the whole force.",
    purpose: "Purpose",
    purposeBody:
      "The SITREP serves three functions: feeding command's common operating picture, flagging deviations from the plan before they become severe, and producing a temporal record for AAR and later analysis. An honest, correctly formatted SITREP is the difference between a unit command can support with QRF/fires/logistics and a unit command stops considering in its decisions because \"we never know what they're doing\".",
    cadence: "Cadence",
    cadenceBody:
      "SITREP frequency depends on the operational cycle. Set in OPORD, never improvised. A unit skipping a scheduled SITREP creates command anxiety and triggers overdue procedures pointlessly. If there is nothing new, transmit \"NO CHANGE\" — that is information, it is not silence.",
    cadenceRows: [
      ["Static ops / OP", "Every 2–4 hours or per SOP"],
      ["Active movement", "At every checkpoint or march leg"],
      ["Recent contact", "Within 15 minutes of contact break"],
      ["Extended hold", "Every 6 hours + on significant change"],
      ["Rotation / shift change", "At start and end of every shift"],
    ],
    format: "Standard format",
    formatBody:
      "Six mandatory fields, fixed order. Anglo mnemonic: \"LEEP-IL\" — Location, Enemy, Equipment/logistics, Personnel, Intentions, Logistics. Doctrinal variants exist; the principle is the same: position → what the enemy is doing → what I am doing → what I need → what I will do.",
    fields: [
      { key: "location", title: "LOCATION", body: "Current position in MGRS 6–8 digits. If moving, current position + direction + approximate speed." },
      { key: "status", title: "STATUS", body: "Unit operational status: GREEN (full mission capable), AMBER (degraded), RED (combat ineffective), BLACK (out of action). Brevity: one word." },
      { key: "enemy", title: "ENEMY ACTIVITY", body: "What the enemy has done/is doing since the previous SITREP. Observation only, no inference." },
      { key: "friendly", title: "FRIENDLY ACTIVITY", body: "What the unit has done since the previous SITREP: movement, events, plan changes. Brief, no narrative." },
      { key: "logistics", title: "LOGISTICS", body: "State of critical consumables: ammunition (% of basic load), water, batteries, medical, fuel (where applicable). Critical only, not the inventory." },
      { key: "intent", title: "INTENT", body: "What the unit will do next. One or two lines, action verb + objective + expected timing." },
    ],
    status: "Status codes",
    statusBody:
      "Colour status codes are the most efficient way to communicate combat capability without detail. Command reads the colour before reading the rest of the SITREP: it sets the urgency with which to dedicate attention and resources to the unit.",
    statusRows: [
      ["GREEN", "Full mission capable. Personnel, equipment, ammunition and morale at operational level."],
      ["AMBER", "Degraded. Reduced capability but still functional. Typically: contained losses, consumable shortage, fatigue."],
      ["RED", "Combat ineffective. No longer able to sustain the plan. Needs replacement, reinforcement or extraction."],
      ["BLACK", "Out of action. Unit no longer operational. Needs MEDEVAC, recovery or recomposition."],
    ],
    example: "Realistic example",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO, SITREP follows, over.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three, holding.",
      "STATUS: AMBER.",
      "ENEMY: two FPV passes last hour, one impact two-zero meters west, no observed dismounts.",
      "FRIENDLY: one WIA Priority C stabilized, position improved with overhead cover.",
      "LOGISTICS: ammo eight-zero percent, water two-fife percent, batteries five-zero percent, medical adequate.",
      "INTENT: hold to last light, request resupply at grid four-fife-uniform-uniform-three-six-niner-two-fife-fife at twenty-one-zero-zero Zulu.",
      "How copy, over.",
    ],
    variants: "Operational variants",
    variantsItems: [
      { title: "LOGSITREP", body: "Variant focused on logistics: ammunition consumption, water, medical, fuel. Typically end-of-day or LOG-cell requested." },
      { title: "FUELREP", body: "Specific to fuel consumption and availability for motorised units. Typical cadence every 12 h or pre-movement." },
      { title: "PERSREP", body: "Personnel status: present, wounded, MIA, KIA. Updated after every loss or replacement event." },
      { title: "INTSUM", body: "Intelligence summary — not operational for the single unit but for the intelligence cell or S2. Slower cadence, higher detail." },
    ],
    errors: "Common mistakes",
    errorsItems: [
      "Copy-pasting the previous SITREP without updating changed fields",
      "Declaring GREEN to avoid drawing attention — false reassurance, fails on first real request",
      "Skipping the INTENT field because \"not decided yet\" — command works off the declared intent",
      "Reporting logistics at inventory-detail level instead of critical consumables",
      "Transmitting clear SITREP with real MGRS and real intent instead of brevity codes (where the net requires it)",
      "Not declaring \"NO CHANGE\" — silence does not equal no variation, it equals potentially compromised unit",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On the Ukrainian front, the honest SITREP is rare and precious. Informal pressure to report GREEN (to avoid seeming weak, to not lose rotation slot, to avoid triggering reinforcement bureaucracy) leads to systematic under-reporting of AMBER and RED. Result: command is surprised when an undeclared AMBER unit folds under pressure. International volunteer formations with more mature operational culture introduced the unpunished-AMBER principle: declaring AMBER is not weakness, it is operational data, and asking for reinforcement is not surrender. Command always prefers a declared AMBER six hours early to a surprise BLACK.",
  },
  "pt-br": {
    intro:
      "O SITREP (Situation Report) é a fotografia periódica da situação de uma unidade transmitida ao comando. Não é report de evento (como o contact), não é observação pontual (como o SALUTE): é uma síntese estruturada de posição, status, atividade inimiga, atividade amiga, logística e intenção, repetida em cadência fixa ou sob demanda. É a principal ferramenta com que o comando mantém situational awareness sobre todo o dispositivo.",
    purpose: "Propósito",
    purposeBody:
      "O SITREP cumpre três funções: alimentar o common operating picture do comando, sinalizar desvios do plano antes que se tornem graves, e produzir registro temporal para AAR e análise posterior. Um SITREP honesto e formatado corretamente é a diferença entre uma unidade que o comando pode apoiar com QRF/fires/logística e uma unidade que o comando deixa de considerar porque \"nunca se sabe o que está fazendo\".",
    cadence: "Cadência",
    cadenceBody:
      "A frequência do SITREP depende do ciclo operacional. Combinada na OPORD, nunca improvisada. Unidade que pula um SITREP agendado gera ansiedade ao comando e dispara procedimento de overdue sem necessidade. Se não há novidade, transmitir \"NO CHANGE\" — isso é informação, não silêncio.",
    cadenceRows: [
      ["Operações estáticas / OP", "A cada 2–4 horas ou por SOP"],
      ["Movimento ativo", "Em cada checkpoint ou perna de marcha"],
      ["Contato recente", "Em até 15 minutos da quebra do contato"],
      ["Hold prolongado", "A cada 6 horas + variações significativas"],
      ["Rotação / troca de turno", "No início e no fim de cada turno"],
    ],
    format: "Formato padrão",
    formatBody:
      "Seis campos obrigatórios, ordem fixa. Mnemônico anglo: \"LEEP-IL\" — Location, Enemy, Equipment/logistics, Personnel, Intentions, Logistics. Há variantes doutrinárias; o princípio é o mesmo: posição → o que o inimigo faz → o que eu faço → do que preciso → o que farei.",
    fields: [
      { key: "location", title: "LOCATION", body: "Posição atual em MGRS 6–8 dígitos. Em movimento, posição atual + direção + velocidade aproximada." },
      { key: "status", title: "STATUS", body: "Status operacional da unidade: GREEN (full mission capable), AMBER (degraded), RED (combat ineffective), BLACK (out of action). Brevidade: uma palavra." },
      { key: "enemy", title: "ENEMY ACTIVITY", body: "O que o inimigo fez/faz desde o SITREP anterior. Apenas observação, sem inferência." },
      { key: "friendly", title: "FRIENDLY ACTIVITY", body: "O que a unidade fez desde o SITREP anterior: deslocamentos, eventos, mudanças de plano. Conciso, sem narrativa." },
      { key: "logistics", title: "LOGISTICS", body: "Estado dos consumíveis críticos: munição (% do basic load), água, baterias, médico, combustível (quando aplicável). Só críticos, não inventário." },
      { key: "intent", title: "INTENT", body: "O que a unidade fará a seguir. Uma ou duas linhas, verbo de ação + objetivo + tempo previsto." },
    ],
    status: "Códigos de status",
    statusBody:
      "Códigos de cor de status são a forma mais eficiente de comunicar combat capability sem detalhe. O comando lê a cor antes do resto: define a urgência com que dedicar atenção e recursos à unidade.",
    statusRows: [
      ["GREEN", "Full mission capable. Pessoal, equipamento, munição e moral em nível operacional."],
      ["AMBER", "Degraded. Capacidade reduzida mas ainda funcional. Tipicamente: perdas contidas, escassez de consumíveis, fadiga."],
      ["RED", "Combat ineffective. Não consegue mais sustentar o plano. Exige substituição, reforço ou extração."],
      ["BLACK", "Out of action. Unidade não mais operacional. Exige MEDEVAC, recuperação ou recomposição."],
    ],
    example: "Exemplo realista",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO, SITREP follows, over.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three, holding.",
      "STATUS: AMBER.",
      "ENEMY: two FPV passes last hour, one impact two-zero meters west, no observed dismounts.",
      "FRIENDLY: one WIA Priority C stabilized, position improved with overhead cover.",
      "LOGISTICS: ammo eight-zero percent, water two-fife percent, batteries five-zero percent, medical adequate.",
      "INTENT: hold to last light, request resupply at grid four-fife-uniform-uniform-three-six-niner-two-fife-fife at twenty-one-zero-zero Zulu.",
      "How copy, over.",
    ],
    variants: "Variantes operacionais",
    variantsItems: [
      { title: "LOGSITREP", body: "Variante focada em logística: consumo de munição, água, médico, combustível. Tipicamente fim de dia ou solicitado pela LOG cell." },
      { title: "FUELREP", body: "Específico para consumo e disponibilidade de combustível em unidades motorizadas. Cadência típica a cada 12 h ou pré-movimento." },
      { title: "PERSREP", body: "Status do pessoal: presentes, feridos, MIA, KIA. Atualizado após cada evento de perda ou substituição." },
      { title: "INTSUM", body: "Resumo de inteligência — não operacional para unidade isolada, mas para a célula de inteligência ou S2. Cadência mais lenta, mais detalhe." },
    ],
    errors: "Erros comuns",
    errorsItems: [
      "Copiar e colar o SITREP anterior sem atualizar campos alterados",
      "Declarar GREEN para evitar atenção — falsa segurança, falha na primeira solicitação real",
      "Pular o campo INTENT porque \"ainda não se decidiu\" — o comando opera sobre o intent declarado",
      "Reportar logística em nível de inventário em vez de consumíveis críticos",
      "Transmitir SITREP em claro com MGRS real e intent real em vez de brevity codes (quando a rede exige)",
      "Não declarar \"NO CHANGE\" — silêncio não equivale a nenhuma variação, equivale a unidade potencialmente comprometida",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "No front ucraniano, o SITREP honesto é raro e valioso. A pressão informal por reportar GREEN (para não parecer fraco, para não perder slot de rotação, para não ativar burocracia de reforço) leva a sub-reportagem sistemática de AMBER e RED. Resultado: o comando é surpreendido quando uma unidade AMBER não declarada cede sob pressão. Formações voluntárias internacionais com cultura operacional mais madura introduziram o princípio do AMBER não punido: declarar AMBER não é fraqueza, é dado operacional, e pedir reforço não é rendição. O comando sempre prefere um AMBER declarado seis horas antes a um BLACK surpreendente.",
  },
  fr: {
    intro:
      "Le SITREP (Situation Report) est l'instantané périodique de la situation d'une unité transmis au commandement. Ce n'est pas un report d'événement (comme le contact), ni une observation ponctuelle (comme le SALUTE) : c'est une synthèse structurée de position, statut, activité ennemie, activité amie, logistique et intention, répétée à cadence fixe ou à la demande. C'est l'outil principal par lequel le commandement maintient la situational awareness sur l'ensemble du dispositif.",
    purpose: "Objet",
    purposeBody:
      "Le SITREP remplit trois fonctions : nourrir le common operating picture du commandement, signaler les écarts au plan avant qu'ils ne deviennent graves, produire un enregistrement temporel pour AAR et analyse ultérieure. Un SITREP honnête et bien formaté est la différence entre une unité que le commandement peut soutenir (QRF, fires, logistique) et une unité que le commandement cesse de considérer parce qu'« on ne comprend jamais ce qu'elle fait ».",
    cadence: "Cadence",
    cadenceBody:
      "La fréquence du SITREP dépend du cycle opérationnel. Fixée dans l'OPORD, jamais improvisée. Une unité qui saute un SITREP planifié génère de l'anxiété au commandement et déclenche inutilement la procédure d'overdue. Si rien de neuf, transmettre « NO CHANGE » — c'est une information, pas un silence.",
    cadenceRows: [
      ["Opérations statiques / OP", "Toutes les 2–4 heures ou selon SOP"],
      ["Mouvement actif", "À chaque checkpoint ou étape de marche"],
      ["Contact récent", "Dans les 15 minutes suivant la rupture du contact"],
      ["Hold prolongé", "Toutes les 6 heures + sur variation significative"],
      ["Rotation / changement de tour", "Au début et à la fin de chaque tour"],
    ],
    format: "Format standard",
    formatBody:
      "Six champs obligatoires, ordre figé. Mnémonique anglo : « LEEP-IL » — Location, Enemy, Equipment/logistics, Personnel, Intentions, Logistics. Des variantes doctrinales existent ; le principe est le même : position → ce que fait l'ennemi → ce que je fais → ce dont j'ai besoin → ce que je ferai.",
    fields: [
      { key: "location", title: "LOCATION", body: "Position courante en MGRS 6–8 chiffres. Si en mouvement, position courante + direction + vitesse approximative." },
      { key: "status", title: "STATUS", body: "Statut opérationnel de l'unité : GREEN (full mission capable), AMBER (degraded), RED (combat ineffective), BLACK (out of action). Brièveté : un mot." },
      { key: "enemy", title: "ENEMY ACTIVITY", body: "Ce que l'ennemi a fait/fait depuis le SITREP précédent. Observation uniquement, pas d'inférence." },
      { key: "friendly", title: "FRIENDLY ACTIVITY", body: "Ce que l'unité a fait depuis le SITREP précédent : déplacements, événements, modifications du plan. Concis, pas de narration." },
      { key: "logistics", title: "LOGISTICS", body: "État des consommables critiques : munitions (% du basic load), eau, batteries, médical, carburant (le cas échéant). Critiques seulement, pas l'inventaire." },
      { key: "intent", title: "INTENT", body: "Ce que l'unité fera ensuite. Une ou deux lignes, verbe d'action + objectif + horizon temporel." },
    ],
    status: "Codes de statut",
    statusBody:
      "Les codes couleur de statut sont le moyen le plus efficace de communiquer la combat capability sans détail. Le commandement lit la couleur avant le reste : elle fixe l'urgence à laquelle dédier attention et ressources à l'unité.",
    statusRows: [
      ["GREEN", "Full mission capable. Personnel, équipement, munitions et moral à niveau opérationnel."],
      ["AMBER", "Degraded. Capacité réduite mais encore fonctionnelle. Typiquement : pertes contenues, pénurie de consommables, fatigue."],
      ["RED", "Combat ineffective. Ne peut plus soutenir le plan. Nécessite remplacement, renfort ou extraction."],
      ["BLACK", "Out of action. Unité plus opérationnelle. Nécessite MEDEVAC, récupération ou recomposition."],
    ],
    example: "Exemple réaliste",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO, SITREP follows, over.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three, holding.",
      "STATUS: AMBER.",
      "ENEMY: two FPV passes last hour, one impact two-zero meters west, no observed dismounts.",
      "FRIENDLY: one WIA Priority C stabilized, position improved with overhead cover.",
      "LOGISTICS: ammo eight-zero percent, water two-fife percent, batteries five-zero percent, medical adequate.",
      "INTENT: hold to last light, request resupply at grid four-fife-uniform-uniform-three-six-niner-two-fife-fife at twenty-one-zero-zero Zulu.",
      "How copy, over.",
    ],
    variants: "Variantes opérationnelles",
    variantsItems: [
      { title: "LOGSITREP", body: "Variante centrée logistique : consommation munitions, eau, médical, carburant. Typiquement en fin de journée ou demandée par la LOG cell." },
      { title: "FUELREP", body: "Spécifique consommation et disponibilité carburant pour unités motorisées. Cadence typique toutes les 12 h ou avant mouvement." },
      { title: "PERSREP", body: "Statut du personnel : présents, blessés, MIA, KIA. Mis à jour après chaque événement de perte ou remplacement." },
      { title: "INTSUM", body: "Synthèse de renseignement — pas opérationnelle pour l'unité seule, mais pour la cellule renseignement ou S2. Cadence plus lente, plus de détail." },
    ],
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Copier-coller le SITREP précédent sans mettre à jour les champs modifiés",
      "Déclarer GREEN pour éviter l'attention — fausse réassurance, échoue à la première vraie demande",
      "Sauter le champ INTENT parce que « pas encore décidé » — le commandement travaille sur l'intent déclaré",
      "Reporter la logistique au niveau de l'inventaire au lieu des consommables critiques",
      "Transmettre un SITREP en clair avec MGRS réel et intent réel au lieu de brevity codes (quand le réseau l'exige)",
      "Ne pas déclarer « NO CHANGE » — le silence ne vaut pas absence de variation, il vaut unité potentiellement compromise",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur le front ukrainien, le SITREP honnête est rare et précieux. La pression informelle à reporter GREEN (pour ne pas paraître faible, ne pas perdre son créneau de rotation, ne pas déclencher la bureaucratie du renfort) conduit à une sous-déclaration systématique d'AMBER et de RED. Résultat : le commandement est surpris quand une unité AMBER non déclarée cède sous pression. Les formations de volontaires internationaux à culture opérationnelle plus mûre ont introduit le principe de l'AMBER non puni : déclarer AMBER n'est pas une faiblesse, c'est une donnée opérationnelle, et demander du renfort n'est pas une reddition. Le commandement préfère toujours un AMBER déclaré six heures plus tôt à un BLACK surprise.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.purpose}</h2>
        <p>{s.purposeBody}</p>

        <h2>{s.cadence}</h2>
        <p>{s.cadenceBody}</p>
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Cadence</th>
            </tr>
          </thead>
          <tbody>
            {s.cadenceRows.map(([scenario, cad]) => (
              <tr key={scenario}>
                <td>{scenario}</td>
                <td className="mono">{cad}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

        <h2>{s.status}</h2>
        <p>{s.statusBody}</p>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {s.statusRows.map(([code, def]) => (
              <tr key={code}>
                <td className="mono">{code}</td>
                <td>{def}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.example}</h2>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.exampleLines.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.variants}</h2>
        {s.variantsItems.map((v) => (
          <div key={v.title} className="callout">
            <div className="callout-title">{v.title}</div>
            <p>{v.body}</p>
          </div>
        ))}

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
