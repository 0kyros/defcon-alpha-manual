import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const FIELDS: ReadonlyArray<{ letter: string; key: string }> = [
  { letter: "S", key: "size" },
  { letter: "A", key: "activity" },
  { letter: "L", key: "location" },
  { letter: "U", key: "unit" },
  { letter: "T", key: "time" },
  { letter: "E", key: "equipment" },
];

interface FieldStrings {
  name: string;
  body: string;
}

interface Strings {
  intro: string;
  when: string;
  whenBody: string;
  fields: Record<string, FieldStrings>;
  example: string;
  exampleLines: ReadonlyArray<string>;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "SALUTE è il formato standard NATO per riportare un'osservazione del nemico. Sei campi, sempre nello stesso ordine. È il primo report che ogni soldato deve saper trasmettere sotto stress, di notte, dopo zero ore di sonno.",
    when: "Quando si trasmette",
    whenBody:
      "Quando si avvista qualcosa che il comando deve sapere: pattuglia nemica, posizione di tiro, veicolo, drone, infiltrazione, attività anomala. Il SALUTE è una fotografia: cosa, dove, quando.",
    fields: {
      size: { name: "Size — entità", body: "Numero stimato di personale o veicoli. Se incerto, dare un range (\"sei-otto\") e segnalare l'incertezza." },
      activity: { name: "Activity — attività", body: "Cosa stanno facendo. Movimento, scavo, osservazione, fuoco, sosta. Verbo + direzione." },
      location: { name: "Location — posizione", body: "MGRS a 6 o 8 cifre. Mai descrizioni vaghe (\"vicino al palo\"). Se si dispone solo di riferimento relativo, dichiararlo." },
      unit: { name: "Unit — unità identificata", body: "Bandiere, mostrine, veicoli, equipaggiamento distintivo. Se ignota, dichiarare UNKNOWN." },
      time: { name: "Time — orario", body: "DTG (Date-Time Group) in Zulu se possibile. Es. 121430ZJUN26." },
      equipment: { name: "Equipment — equipaggiamento", body: "Armamento, ottiche, comunicazioni, veicoli, droni. Solo ciò che è stato osservato — niente inferenze." },
    },
    example: "Esempio realistico",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. SALUTE follows, over.",
      "SIZE: six personnel.",
      "ACTIVITY: digging-in along treeline, moving north-east.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "UNIT: unknown, mixed camouflage, no visible insignia.",
      "TIME: one-two-one-fower-three-zero Zulu June.",
      "EQUIPMENT: two AK-platform, one PKM, one quadcopter overhead.",
      "How copy, over.",
    ],
    errors: "Errori comuni",
    errorsItems: [
      "Riportare deduzioni invece di osservazioni (\"era una pattuglia di Wagner\" senza prove)",
      "Saltare campi sconosciuti invece di dichiarare UNKNOWN",
      "Tempo locale invece di Zulu",
      "Coordinate a 4 cifre quando serve 6/8",
      "Trasmettere SALUTE mentre si è ancora osservati — prima ROUTINE COVER, poi report",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Il SALUTE ucraino ha un settimo campo de facto: presenza/assenza di droni. Aggiungere \"DRONES: yes/no, type if known\" alla fine. Una pattuglia osservata senza drone amico in overhead spesso significa che ne arriva uno nemico — il SALUTE deve includere questo dato altrimenti è incompleto per la guerra del 2024–2026.",
  },
  en: {
    intro:
      "SALUTE is the NATO standard format for reporting an observation of the enemy. Six fields, always in the same order. The first report every soldier must be able to transmit under stress, at night, on zero sleep.",
    when: "When to transmit",
    whenBody:
      "Whenever you sight something command must know: enemy patrol, firing position, vehicle, drone, infiltration, anomalous activity. SALUTE is a snapshot: what, where, when.",
    fields: {
      size: { name: "Size", body: "Estimated personnel or vehicle count. If uncertain, give a range (\"six to eight\") and flag the uncertainty." },
      activity: { name: "Activity", body: "What they are doing. Movement, digging, observation, fire, halt. Verb + direction." },
      location: { name: "Location", body: "MGRS 6 or 8 digits. Never vague descriptions (\"near the pole\"). If only relative reference exists, declare it." },
      unit: { name: "Unit", body: "Flags, patches, vehicles, distinctive kit. If unknown, declare UNKNOWN." },
      time: { name: "Time", body: "DTG (Date-Time Group) in Zulu if possible. e.g. 121430ZJUN26." },
      equipment: { name: "Equipment", body: "Weapons, optics, comms, vehicles, drones. Only what was observed — no inference." },
    },
    example: "Realistic example",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. SALUTE follows, over.",
      "SIZE: six personnel.",
      "ACTIVITY: digging-in along treeline, moving north-east.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "UNIT: unknown, mixed camouflage, no visible insignia.",
      "TIME: one-two-one-fower-three-zero Zulu June.",
      "EQUIPMENT: two AK-platform, one PKM, one quadcopter overhead.",
      "How copy, over.",
    ],
    errors: "Common mistakes",
    errorsItems: [
      "Reporting inference instead of observation (\"it was a Wagner patrol\" without proof)",
      "Skipping unknown fields instead of declaring UNKNOWN",
      "Local time instead of Zulu",
      "4-digit grid where 6/8 is needed",
      "Transmitting SALUTE while still under observation — cover first, then report",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "The Ukrainian SALUTE has a de facto seventh field: presence/absence of drones. Append \"DRONES: yes/no, type if known\". An observed patrol with no friendly drone overhead often means an enemy one is incoming — the SALUTE must include this or it is incomplete for 2024–2026 warfare.",
  },
  "pt-br": {
    intro:
      "SALUTE é o formato padrão OTAN para reportar observação do inimigo. Seis campos, sempre na mesma ordem. Primeiro report que todo soldado deve saber transmitir sob estresse, à noite, sem dormir.",
    when: "Quando transmitir",
    whenBody:
      "Quando avistar algo que o comando precisa saber: patrulha inimiga, posição de tiro, veículo, drone, infiltração, atividade anômala. SALUTE é uma fotografia: o quê, onde, quando.",
    fields: {
      size: { name: "Size — efetivo", body: "Pessoal ou veículos estimados. Se incerto, dar faixa (\"seis a oito\") e sinalizar incerteza." },
      activity: { name: "Activity — atividade", body: "O que estão fazendo. Movimento, cavando, observação, fogo, parados. Verbo + direção." },
      location: { name: "Location — localização", body: "MGRS 6 ou 8 dígitos. Nunca descrições vagas. Se só houver referência relativa, declarar." },
      unit: { name: "Unit — unidade", body: "Bandeiras, distintivos, veículos, equipamento. Se desconhecida, declarar UNKNOWN." },
      time: { name: "Time — hora", body: "DTG em Zulu se possível. Ex. 121430ZJUN26." },
      equipment: { name: "Equipment — equipamento", body: "Armas, óticas, comunicações, veículos, drones. Só o observado — sem inferência." },
    },
    example: "Exemplo realista",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. SALUTE follows, over.",
      "SIZE: six personnel.",
      "ACTIVITY: digging-in along treeline, moving north-east.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "UNIT: unknown, mixed camouflage, no visible insignia.",
      "TIME: one-two-one-fower-three-zero Zulu June.",
      "EQUIPMENT: two AK-platform, one PKM, one quadcopter overhead.",
      "How copy, over.",
    ],
    errors: "Erros comuns",
    errorsItems: [
      "Reportar inferência em vez de observação",
      "Pular campos desconhecidos em vez de declarar UNKNOWN",
      "Hora local em vez de Zulu",
      "Grid de 4 dígitos quando precisa 6/8",
      "Transmitir SALUTE enquanto ainda exposto — cobrir primeiro, reportar depois",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "O SALUTE ucraniano tem um sétimo campo de facto: presença/ausência de drones. Acrescentar \"DRONES: yes/no, type if known\". Patrulha observada sem drone amigo no alto frequentemente indica drone inimigo a caminho — o SALUTE precisa incluir isso para a guerra 2024–2026.",
  },
  fr: {
    intro:
      "SALUTE est le format OTAN standard pour signaler une observation ennemie. Six champs, toujours dans le même ordre. Premier report qu'un soldat doit savoir transmettre sous stress, de nuit, sans sommeil.",
    when: "Quand le transmettre",
    whenBody:
      "Dès qu'on observe quelque chose que le commandement doit savoir : patrouille, position de tir, véhicule, drone, infiltration, activité anormale. Le SALUTE est un instantané : quoi, où, quand.",
    fields: {
      size: { name: "Size — effectif", body: "Personnel ou véhicules estimés. Si incertain, fourchette (\"six à huit\") et signaler l'incertitude." },
      activity: { name: "Activity — activité", body: "Ce qu'ils font. Mouvement, creusement, observation, feu, halte. Verbe + direction." },
      location: { name: "Location — position", body: "MGRS 6 ou 8 chiffres. Jamais de description vague. Si seule une référence relative existe, la déclarer." },
      unit: { name: "Unit — unité", body: "Drapeaux, écussons, véhicules, équipement distinctif. Si inconnue, déclarer UNKNOWN." },
      time: { name: "Time — heure", body: "DTG en Zulu si possible. Ex. 121430ZJUN26." },
      equipment: { name: "Equipment — équipement", body: "Armes, optiques, transmissions, véhicules, drones. Uniquement l'observé — pas d'inférence." },
    },
    example: "Exemple réaliste",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. SALUTE follows, over.",
      "SIZE: six personnel.",
      "ACTIVITY: digging-in along treeline, moving north-east.",
      "LOCATION: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "UNIT: unknown, mixed camouflage, no visible insignia.",
      "TIME: one-two-one-fower-three-zero Zulu June.",
      "EQUIPMENT: two AK-platform, one PKM, one quadcopter overhead.",
      "How copy, over.",
    ],
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Reporter une déduction au lieu d'une observation",
      "Sauter un champ inconnu au lieu de déclarer UNKNOWN",
      "Heure locale au lieu de Zulu",
      "Grille à 4 chiffres quand il en faut 6/8",
      "Transmettre SALUTE encore exposé — se couvrir d'abord, reporter ensuite",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Le SALUTE ukrainien a un septième champ de facto : présence/absence de drones. Ajouter « DRONES: yes/no, type if known ». Une patrouille observée sans drone ami en couverture signifie souvent qu'un drone ennemi arrive — le SALUTE doit l'inclure pour la guerre 2024–2026.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.when}</h2>
        <p>{s.whenBody}</p>

        <h2>S · A · L · U · T · E</h2>
        <table>
          <thead>
            <tr>
              <th>—</th>
              <th>Field</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {FIELDS.map((field) => {
              const fs = s.fields[field.key];
              return (
                <tr key={field.letter}>
                  <td className="mono font-semibold">{field.letter}</td>
                  <td className="mono">{fs.name}</td>
                  <td>{fs.body}</td>
                </tr>
              );
            })}
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

        <h2>{s.errors}</h2>
        <ul>
          {s.errorsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Lessons learned</h2>
        <blockquote>{s.lessonsBody}</blockquote>
      </>
    ),
  };
}
