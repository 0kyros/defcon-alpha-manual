import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["AO", "Area of Operations — zona di responsabilità di un'unità"],
  ["TAOR", "Tactical Area of Responsibility — sub-zona di un AO"],
  ["FLOT", "Forward Line of Own Troops — linea di contatto amica"],
  ["FEBA", "Forward Edge of Battle Area — limite del settore di combattimento"],
  ["LD / LOD", "Line of Departure — linea da cui inizia l'attacco"],
  ["LZ / HLZ", "Landing Zone / Helicopter Landing Zone"],
  ["PZ", "Pick-up Zone — punto di estrazione"],
  ["RP", "Rally Point — punto di raccolta in caso di separazione"],
  ["ORP", "Objective Rally Point — RP vicino all'obiettivo"],
  ["IRP", "Initial Rally Point — RP iniziale dopo l'inserzione"],
  ["FUP", "Forming Up Place — punto di organizzazione prima dell'assalto"],
  ["CP", "Checkpoint o Command Post — contesto specifica il significato"],
  ["OP", "Observation Post — punto di osservazione"],
  ["FOB", "Forward Operating Base"],
  ["COP", "Combat Outpost — base avanzata più piccola del FOB"],
  ["CCP", "Casualty Collection Point — punto di raccolta feriti"],
  ["EPW", "Enemy Prisoner of War"],
  ["EOD", "Explosive Ordnance Disposal"],
  ["UXO", "Unexploded Ordnance"],
  ["IED", "Improvised Explosive Device"],
  ["VBIED", "Vehicle-Borne IED"],
  ["TIC", "Troops in Contact — unità sotto fuoco"],
  ["TOC", "Tactical Operations Center"],
  ["S1/S2/S3/S4/S6", "Personale / Intel / Operazioni / Logistica / Comms"],
  ["BDA", "Battle Damage Assessment"],
  ["CAS", "Close Air Support"],
  ["CASEVAC", "Casualty Evacuation (non-medico)"],
  ["MEDEVAC", "Medical Evacuation"],
  ["QRF", "Quick Reaction Force"],
  ["ISR", "Intelligence, Surveillance, Reconnaissance"],
  ["TTP", "Tactics, Techniques and Procedures"],
  ["SOP", "Standard Operating Procedure"],
  ["OPORD", "Operations Order"],
  ["FRAGORD", "Fragmentary Order — aggiornamento parziale a OPORD"],
  ["WARNORD", "Warning Order — preallarme di missione"],
  ["EXFIL", "Exfiltration — uscita dalla zona operativa"],
  ["INFIL", "Infiltration — ingresso nella zona operativa"],
  ["RTB", "Return To Base"],
  ["WIA / KIA / MIA", "Wounded / Killed / Missing in Action"],
  ["FRIENDLY / HOSTILE", "Forza amica / nemica"],
  ["DANGER CLOSE", "Fuoco amico vicino alla truppa amica"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La terminologia militare è una lingua propria, costruita per essere senza ambiguità. Imparare la cinquantina di acronimi che seguono è la differenza tra capire un OPORD al primo passaggio e farselo ripetere tre volte sotto stress.",
    sections: [
      {
        heading: "Acronimi di base",
        blocks: [
          {
            type: "p",
            text: "Lista non esaustiva. Va memorizzata, non solo riconosciuta. Sul fronte l'operatore che chiede 'cosa significa CCP?' a metà di un casualty event spreca minuti che il ferito non ha.",
          },
          {
            type: "table",
            headers: ["Acronimo", "Significato"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Regole d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Su rete radio: solo acronimi standard NATO, niente improvvisazione",
              "Su documenti: prima occorrenza in extenso seguita dall'acronimo tra parentesi, poi solo acronimo",
              "Su briefing: il briefer scrive l'acronimo alla lavagna alla prima menzione",
              "Se in dubbio: chiedere chiarimento immediatamente, non dopo",
              "Mai assumere che un acronimo significhi la stessa cosa in due nazioni diverse (CP = Checkpoint o Command Post)",
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
              "Confondere CASEVAC (evac non-medico) con MEDEVAC (evac medico)",
              "Usare 'BDA' per indicare bombardamenti già confermati — BDA è la VALUTAZIONE, non l'esito",
              "Confondere OP (observation post) con OPORD (operations order)",
              "Improvvisare acronimi nazionali (es. 'COP' italiano vs 'COP' inglese)",
              "Saltare WARNORD perché 'sappiamo già di cosa parla' — il WARNORD attiva preparativi standardizzati",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari che funzionano memorizzano la lista nei primi 14 giorni. Quelli che non lo fanno restano permanentemente un passo indietro: ogni briefing diventa un esercizio di traduzione mentale che li distrae dal contenuto. La differenza si nota nel primo evento serio.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Military terminology is a language of its own, built to be unambiguous. Learning the roughly fifty acronyms that follow is the difference between catching an OPORD on first reading and having it repeated three times under stress.",
    sections: [
      {
        heading: "Base acronyms",
        blocks: [
          {
            type: "p",
            text: "Non-exhaustive list. To be memorised, not merely recognised. On the front, an operator asking 'what does CCP mean?' in the middle of a casualty event wastes minutes the casualty does not have.",
          },
          {
            type: "table",
            headers: ["Acronym", "Meaning"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Usage rules",
        blocks: [
          {
            type: "ul",
            items: [
              "On radio: NATO-standard acronyms only, no improvisation",
              "In documents: first occurrence spelt out followed by acronym in parentheses, then acronym only",
              "In briefings: the briefer writes the acronym on the board at first mention",
              "If in doubt: ask immediately, not after",
              "Never assume an acronym means the same in two different nations (CP = Checkpoint or Command Post)",
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
              "Confusing CASEVAC (non-medical evac) with MEDEVAC (medical evac)",
              "Using 'BDA' to mean confirmed strikes — BDA is the ASSESSMENT, not the outcome",
              "Mixing OP (observation post) with OPORD (operations order)",
              "Improvising national acronyms (e.g. an Italian 'COP' vs an English 'COP')",
              "Skipping WARNORD because 'we already know what it's about' — WARNORD triggers standardised prep",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Volunteers who function memorise the list in the first 14 days. Those who do not stay permanently one step behind: every briefing becomes a mental translation exercise that distracts them from content. The difference shows on the first serious event.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A terminologia militar é uma língua própria, construída para ser inequívoca. Aprender as cerca de cinquenta siglas a seguir é a diferença entre captar uma OPORD na primeira passagem e tê-la repetida três vezes sob estresse.",
    sections: [
      {
        heading: "Siglas básicas",
        blocks: [
          {
            type: "p",
            text: "Lista não exaustiva. Deve ser memorizada, não só reconhecida. No front, o operador que pergunta 'o que é CCP?' no meio de um casualty event desperdiça minutos que o ferido não tem.",
          },
          {
            type: "table",
            headers: ["Sigla", "Significado"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Regras de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "No rádio: só siglas padrão OTAN, sem improvisação",
              "Em documentos: primeira ocorrência por extenso seguida da sigla entre parênteses, depois só sigla",
              "Em briefings: o briefer escreve a sigla na lousa na primeira menção",
              "Em dúvida: pedir esclarecimento imediatamente, não depois",
              "Nunca assumir que uma sigla signifique o mesmo em duas nações (CP = Checkpoint ou Command Post)",
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
              "Confundir CASEVAC (evac não-médica) com MEDEVAC (evac médica)",
              "Usar 'BDA' para indicar bombardeios já confirmados — BDA é a AVALIAÇÃO, não o resultado",
              "Confundir OP (observation post) com OPORD (operations order)",
              "Improvisar siglas nacionais (ex. 'COP' italiano vs 'COP' inglês)",
              "Pular WARNORD porque 'já sabemos do que se trata' — o WARNORD ativa preparativos padronizados",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Os voluntários que funcionam memorizam a lista nos primeiros 14 dias. Os que não, ficam permanentemente um passo atrás: cada briefing vira um exercício de tradução mental que os distrai do conteúdo. A diferença aparece no primeiro evento sério.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La terminologie militaire est une langue à part, construite pour être sans ambiguïté. Apprendre la cinquantaine d'acronymes qui suivent est la différence entre saisir un OPORD à la première lecture et se le faire répéter trois fois sous stress.",
    sections: [
      {
        heading: "Acronymes de base",
        blocks: [
          {
            type: "p",
            text: "Liste non exhaustive. À mémoriser, pas seulement à reconnaître. Sur le front, l'opérateur qui demande « c'est quoi CCP ? » au milieu d'un événement casualty perd des minutes que le blessé n'a pas.",
          },
          {
            type: "table",
            headers: ["Acronyme", "Signification"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Règles d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "En radio : uniquement acronymes standard OTAN, pas d'improvisation",
              "Sur documents : première occurrence en toutes lettres suivie de l'acronyme entre parenthèses, puis acronyme seul",
              "En briefing : le briefer écrit l'acronyme au tableau à la première mention",
              "En cas de doute : demander clarification immédiatement, pas après",
              "Ne jamais supposer qu'un acronyme signifie la même chose dans deux nations (CP = Checkpoint ou Command Post)",
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
              "Confondre CASEVAC (évac non médicale) avec MEDEVAC (évac médicale)",
              "Utiliser « BDA » pour désigner des frappes confirmées — BDA est l'ÉVALUATION, pas le résultat",
              "Mélanger OP (observation post) et OPORD (operations order)",
              "Improviser des acronymes nationaux (ex. « COP » italien vs « COP » anglais)",
              "Sauter le WARNORD parce que « on sait déjà de quoi ça parle » — le WARNORD déclenche des préparatifs standardisés",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires qui fonctionnent mémorisent la liste dans les 14 premiers jours. Les autres restent en permanence un cran derrière : chaque briefing devient un exercice de traduction mentale qui les détourne du contenu. La différence se voit au premier événement sérieux.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
