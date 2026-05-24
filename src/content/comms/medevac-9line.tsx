import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const LINES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const;

interface Strings {
  intro: string;
  why: string;
  whyBody: string;
  fields: ReadonlyArray<{ n: string; title: string; body: string }>;
  precedence: string;
  precedenceRows: ReadonlyArray<[string, string]>;
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
      "Il 9-line MEDEVAC è il formato NATO per richiedere l'evacuazione di un ferito. Nove campi, ordine fisso. Conoscerlo a memoria salva vite — proprie e dei compagni — perché trasmesso correttamente riduce il tempo evacuazione e prepara la rete sanitaria di destinazione.",
    why: "Perché serve l'ordine fisso",
    whyBody:
      "Le prime 5 linee servono al dispatcher per inviare l'asset. Le ultime 4 servono al pilota e al ricevente per pianificare l'avvicinamento e il triage. Saltare l'ordine fa perdere tempo prezioso o costringe a richiamare.",
    fields: [
      { n: "1", title: "Location — pick-up site", body: "MGRS 6/8 cifre. La posizione del ferimento o del punto di raccolta, NON quella dell'ospedale." },
      { n: "2", title: "Frequenza/callsign chiamante", body: "Frequenza radio e callsign della stazione che riceverà il MEDEVAC. Spesso è il TACP/CASEVAC controller, non chi trasmette." },
      { n: "3", title: "Numero pazienti per precedenza", body: "Conteggio per categoria: Urgent (A), Urgent Surgical (B), Priority (C), Routine (D), Convenience (E)." },
      { n: "4", title: "Equipaggiamento speciale", body: "A=nessuno, B=verricello (hoist), C=apparecchiature di estrazione, D=ventilatore." },
      { n: "5", title: "Numero pazienti per status", body: "L=litter (barella), A=ambulatory (deambulante). Es. \"2L, 1A\"." },
      { n: "6", title: "Sicurezza del sito (tempo di guerra)", body: "N=no enemy, P=possible enemy, E=enemy in area (con possibile cautela armata richiesta), X=hot LZ (richiesta scorta armata)." },
      { n: "7", title: "Metodo di marcatura LZ", body: "A=panel, B=pyrotechnic, C=smoke, D=none, E=other. Tempo di giorno e di notte cambia." },
      { n: "8", title: "Nazionalità/status pazienti", body: "A=US military, B=US civilian, C=non-US military, D=non-US civilian, E=EPW (enemy prisoner of war)." },
      { n: "9", title: "Contaminazione NBC / Terrain", body: "Tempo di guerra: N=nuclear, B=biological, C=chemical. Tempo di pace: descrizione terreno e ostacoli LZ." },
    ],
    precedence: "Precedenze (linea 3)",
    precedenceRows: [
      ["A — Urgent", "Evacuare entro 1 ora — pericolo di vita immediato"],
      ["B — Urgent Surgical", "Evacuare entro 1 ora con chirurgia"],
      ["C — Priority", "Entro 4 ore — peggiorerà senza cure"],
      ["D — Routine", "Entro 24 ore — stabile"],
      ["E — Convenience", "Operativamente conveniente"],
    ],
    example: "Esempio realistico",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. 9-LINE MEDEVAC follows, over.",
      "LINE 1: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "LINE 2: frequency forty-seven-decimal-fife-zero-zero, callsign ALPHA TWO.",
      "LINE 3: one Alpha.",
      "LINE 4: Alpha, none.",
      "LINE 5: one Litter.",
      "LINE 6: Echo, hot LZ, drones overhead.",
      "LINE 7: Charlie, red smoke on call.",
      "LINE 8: Charlie, non-US military.",
      "LINE 9: November, no contamination, treeline 30m north.",
      "How copy, over.",
    ],
    errors: "Errori comuni",
    errorsItems: [
      "Confondere Litter/Ambulatory — sbagliare le risorse caricate sul mezzo",
      "Saltare la linea 6 in scenario hot — il pilota deve sapere se serve scorta",
      "Marcatura LZ a fumo verde quando il nemico ha visibilità — coordinare via radio quale colore",
      "Riportare ospedale invece del pick-up — perdita di tempo critica",
      "Trasmettere senza che chi lavora sul ferito sappia che si sta chiamando MEDEVAC",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Su fronti saturati di FPV, il MEDEVAC eli/veicolare è raramente possibile. Il \"MEDEVAC\" reale spesso è un'estrazione a piedi o veicolare leggera fino a un casualty collection point a 2-5 km di profondità. Adattare il 9-line: linea 1 può essere la CCP, linea 6 deve indicare il rischio FPV, linea 7 evita fumi diurni in vista di osservatori UAV. La precedenza realistica spesso scivola da A a B causa tempi di evac estesi: bisogna saperlo per modulare la rianimazione.",
  },
  en: {
    intro:
      "The 9-line MEDEVAC is the NATO format for requesting evacuation of a casualty. Nine fields, fixed order. Knowing it cold saves lives — yours and your team's — because correct transmission cuts evacuation time and prepares the receiving medical chain.",
    why: "Why a fixed order",
    whyBody:
      "Lines 1–5 let the dispatcher launch the asset. Lines 6–9 let the pilot and receiver plan the approach and triage. Skipping the order forces re-asks and wastes time.",
    fields: [
      { n: "1", title: "Location — pick-up site", body: "MGRS 6/8 digits. The location of wounding or collection point, NOT the hospital." },
      { n: "2", title: "Calling frequency / callsign", body: "Frequency and callsign of the station that will receive the MEDEVAC — often the TACP/CASEVAC controller, not the transmitting station." },
      { n: "3", title: "Patients by precedence", body: "Count by category: Urgent (A), Urgent Surgical (B), Priority (C), Routine (D), Convenience (E)." },
      { n: "4", title: "Special equipment", body: "A=none, B=hoist, C=extraction equipment, D=ventilator." },
      { n: "5", title: "Patients by status", body: "L=litter, A=ambulatory. e.g. \"2L, 1A\"." },
      { n: "6", title: "Site security (wartime)", body: "N=no enemy, P=possible enemy, E=enemy in area (possible armed escort), X=hot LZ (armed escort required)." },
      { n: "7", title: "LZ marking method", body: "A=panel, B=pyrotechnic, C=smoke, D=none, E=other. Day and night differ." },
      { n: "8", title: "Patient nationality/status", body: "A=US military, B=US civilian, C=non-US military, D=non-US civilian, E=EPW." },
      { n: "9", title: "NBC contamination / terrain", body: "Wartime: N=nuclear, B=biological, C=chemical. Peacetime: terrain and LZ obstacles." },
    ],
    precedence: "Precedence (line 3)",
    precedenceRows: [
      ["A — Urgent", "Evac within 1 hour — immediate life threat"],
      ["B — Urgent Surgical", "Evac within 1 hour with surgery"],
      ["C — Priority", "Within 4 hours — will worsen without treatment"],
      ["D — Routine", "Within 24 hours — stable"],
      ["E — Convenience", "Operationally convenient"],
    ],
    example: "Realistic example",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. 9-LINE MEDEVAC follows, over.",
      "LINE 1: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "LINE 2: frequency forty-seven-decimal-fife-zero-zero, callsign ALPHA TWO.",
      "LINE 3: one Alpha.",
      "LINE 4: Alpha, none.",
      "LINE 5: one Litter.",
      "LINE 6: Echo, hot LZ, drones overhead.",
      "LINE 7: Charlie, red smoke on call.",
      "LINE 8: Charlie, non-US military.",
      "LINE 9: November, no contamination, treeline 30m north.",
      "How copy, over.",
    ],
    errors: "Common mistakes",
    errorsItems: [
      "Mixing Litter/Ambulatory — wrong asset loadout",
      "Skipping line 6 in hot scenarios — pilot needs to know about escort",
      "Green smoke marking when enemy has visibility — coordinate colour by radio",
      "Reporting hospital instead of pick-up — critical time loss",
      "Transmitting without the medic working on the casualty knowing MEDEVAC is being called",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On FPV-saturated fronts, heli/vehicle MEDEVAC is rarely possible. The real \"MEDEVAC\" is often a foot or light-vehicle extraction to a casualty collection point 2–5 km deep. Adapt the 9-line: line 1 may be the CCP, line 6 must flag FPV risk, line 7 avoids daylight smokes under UAV observation. Realistic precedence often slips from A to B due to extended evac times: know it to titrate resuscitation.",
  },
  "pt-br": {
    intro:
      "O 9-line MEDEVAC é o formato OTAN para solicitar evacuação de ferido. Nove campos, ordem fixa. Saber de cor salva vidas — sua e da sua equipe — porque transmissão correta encurta tempo de evac e prepara a cadeia médica receptora.",
    why: "Por que ordem fixa",
    whyBody:
      "Linhas 1–5 permitem ao dispatcher lançar o meio. Linhas 6–9 permitem ao piloto e ao receptor planejar a aproximação e o triagem. Pular a ordem força repergunta e perde tempo.",
    fields: [
      { n: "1", title: "Location — pick-up", body: "MGRS 6/8 dígitos. Local do ferimento ou ponto de coleta, NÃO o hospital." },
      { n: "2", title: "Frequência/indicativo chamador", body: "Frequência e indicativo da estação que receberá o MEDEVAC — frequentemente o TACP/CASEVAC controller." },
      { n: "3", title: "Pacientes por prioridade", body: "Contagem por categoria: Urgent (A), Urgent Surgical (B), Priority (C), Routine (D), Convenience (E)." },
      { n: "4", title: "Equipamento especial", body: "A=nenhum, B=guincho (hoist), C=equipamento de extração, D=ventilador." },
      { n: "5", title: "Pacientes por status", body: "L=litter (maca), A=ambulatory. Ex. \"2L, 1A\"." },
      { n: "6", title: "Segurança do sítio (guerra)", body: "N=sem inimigo, P=possível inimigo, E=inimigo na área, X=hot LZ (escolta armada necessária)." },
      { n: "7", title: "Marcação da LZ", body: "A=painel, B=pirotécnico, C=fumaça, D=nenhum, E=outro." },
      { n: "8", title: "Nacionalidade/status do paciente", body: "A=militar US, B=civil US, C=militar não-US, D=civil não-US, E=EPW." },
      { n: "9", title: "Contaminação NBC / terreno", body: "Guerra: N=nuclear, B=biológico, C=químico. Paz: terreno e obstáculos da LZ." },
    ],
    precedence: "Prioridades (linha 3)",
    precedenceRows: [
      ["A — Urgent", "Evac em 1 hora — risco imediato à vida"],
      ["B — Urgent Surgical", "Evac em 1 hora com cirurgia"],
      ["C — Priority", "Em 4 horas — piora sem tratamento"],
      ["D — Routine", "Em 24 horas — estável"],
      ["E — Convenience", "Operacionalmente conveniente"],
    ],
    example: "Exemplo realista",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. 9-LINE MEDEVAC follows, over.",
      "LINE 1: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "LINE 2: frequency forty-seven-decimal-fife-zero-zero, callsign ALPHA TWO.",
      "LINE 3: one Alpha.",
      "LINE 4: Alpha, none.",
      "LINE 5: one Litter.",
      "LINE 6: Echo, hot LZ, drones overhead.",
      "LINE 7: Charlie, red smoke on call.",
      "LINE 8: Charlie, non-US military.",
      "LINE 9: November, no contamination, treeline 30m north.",
      "How copy, over.",
    ],
    errors: "Erros comuns",
    errorsItems: [
      "Confundir Litter/Ambulatory — carga errada no meio",
      "Pular linha 6 em cenário hot — piloto precisa saber sobre escolta",
      "Marcar com fumaça verde com inimigo visível — coordenar cor por rádio",
      "Reportar hospital em vez de pick-up — perda crítica de tempo",
      "Transmitir sem que quem trabalha no ferido saiba do MEDEVAC sendo chamado",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "Em frentes saturadas de FPV, MEDEVAC por helicóptero/veículo é raro. O \"MEDEVAC\" real é frequentemente extração a pé ou veículo leve até um casualty collection point 2–5 km de profundidade. Adaptar o 9-line: linha 1 pode ser o CCP, linha 6 sinaliza risco FPV, linha 7 evita fumaças diurnas sob UAV. A prioridade real costuma derrapar de A para B por tempo de evac estendido: saber disso para titular ressuscitação.",
  },
  fr: {
    intro:
      "Le 9-line MEDEVAC est le format OTAN pour demander l'évacuation d'un blessé. Neuf champs, ordre figé. Le connaître par cœur sauve des vies — la vôtre et celle de l'équipe — parce qu'une bonne transmission réduit le temps d'évac et prépare la chaîne médicale.",
    why: "Pourquoi l'ordre figé",
    whyBody:
      "Les lignes 1–5 permettent au dispatcher de lancer le moyen. Les lignes 6–9 permettent au pilote et au receveur de planifier l'approche et le tri. Sauter l'ordre force des re-demandes et perd du temps.",
    fields: [
      { n: "1", title: "Location — pick-up", body: "MGRS 6/8 chiffres. Lieu de la blessure ou point de collecte, PAS l'hôpital." },
      { n: "2", title: "Fréquence/indicatif appelant", body: "Fréquence et indicatif de la station recevant le MEDEVAC — souvent le TACP/CASEVAC controller." },
      { n: "3", title: "Patients par priorité", body: "Nombre par catégorie : Urgent (A), Urgent Surgical (B), Priority (C), Routine (D), Convenience (E)." },
      { n: "4", title: "Équipement spécial", body: "A=aucun, B=treuil (hoist), C=équipement d'extraction, D=ventilateur." },
      { n: "5", title: "Patients par statut", body: "L=litter (civière), A=ambulatory. Ex. « 2L, 1A »." },
      { n: "6", title: "Sécurité du site (guerre)", body: "N=pas d'ennemi, P=ennemi possible, E=ennemi dans la zone, X=hot LZ (escorte armée requise)." },
      { n: "7", title: "Marquage de LZ", body: "A=panneau, B=pyrotechnique, C=fumée, D=aucun, E=autre." },
      { n: "8", title: "Nationalité/statut patient", body: "A=militaire US, B=civil US, C=militaire non-US, D=civil non-US, E=EPW." },
      { n: "9", title: "Contamination NRBC / terrain", body: "Guerre : N=nucléaire, B=biologique, C=chimique. Paix : terrain et obstacles LZ." },
    ],
    precedence: "Priorités (ligne 3)",
    precedenceRows: [
      ["A — Urgent", "Évac en 1 heure — risque vital immédiat"],
      ["B — Urgent Surgical", "Évac en 1 heure avec chirurgie"],
      ["C — Priority", "En 4 heures — s'aggravera sans soins"],
      ["D — Routine", "En 24 heures — stable"],
      ["E — Convenience", "Opérationnellement convenable"],
    ],
    example: "Exemple réaliste",
    exampleLines: [
      "ZULU SIX, this is ALPHA TWO. 9-LINE MEDEVAC follows, over.",
      "LINE 1: grid three-seven-uniform charlie-bravo eight-two-fife seven-zero-three.",
      "LINE 2: frequency forty-seven-decimal-fife-zero-zero, callsign ALPHA TWO.",
      "LINE 3: one Alpha.",
      "LINE 4: Alpha, none.",
      "LINE 5: one Litter.",
      "LINE 6: Echo, hot LZ, drones overhead.",
      "LINE 7: Charlie, red smoke on call.",
      "LINE 8: Charlie, non-US military.",
      "LINE 9: November, no contamination, treeline 30m north.",
      "How copy, over.",
    ],
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Confondre Litter/Ambulatory — mauvaise dotation du moyen",
      "Sauter la ligne 6 en hot — le pilote doit savoir pour l'escorte",
      "Fumée verte avec ennemi visible — coordonner la couleur par radio",
      "Reporter l'hôpital au lieu du pick-up — perte de temps critique",
      "Transmettre sans que celui qui s'occupe du blessé sache que le MEDEVAC est appelé",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur les fronts saturés en FPV, l'évac héliportée/véhicule est rare. Le « MEDEVAC » réel est souvent une extraction à pied ou véhicule léger vers un casualty collection point à 2–5 km de profondeur. Adapter le 9-line : la ligne 1 peut être le CCP, la ligne 6 doit signaler le risque FPV, la ligne 7 évite les fumées de jour sous observation UAV. La priorité réelle glisse souvent d'A vers B faute de temps d'évac : le savoir pour ajuster la réanimation.",
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

        <h2>9-LINE</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Field</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {s.fields.map((f) => (
              <tr key={f.n}>
                <td className="mono font-semibold">{f.n}</td>
                <td className="mono">{f.title}</td>
                <td>{f.body}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{s.precedence}</h2>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {s.precedenceRows.map(([code, def]) => (
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
          {s.exampleLines.map((line, i) => (
            <p
              key={LINES[i] ?? line}
              className="mono"
              style={{ marginBottom: "0.4rem" }}
            >
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
