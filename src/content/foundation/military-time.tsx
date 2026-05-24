import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const ZONES: ReadonlyArray<ReadonlyArray<string>> = [
  ["Z", "UTC+0", "UTC / Greenwich"],
  ["A", "UTC+1", "Italia, Francia, Polonia (inverno)"],
  ["B", "UTC+2", "Ucraina inverno (EET)"],
  ["C", "UTC+3", "Mosca / Ucraina estate (EEST)"],
  ["I", "UTC+9", "Giappone, Corea (India zone)"],
  ["J", "Local", "Ora locale della stazione emittente"],
  ["P", "UTC-3", "Brasile (Brasília)"],
  ["R", "UTC-5", "USA Eastern Standard"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Tempo militare e fuso Zulu esistono per eliminare ambiguità su operazioni multi-unità, multi-fuso, multinazionali. Ogni timestamp critico — ordine, report, log, fires, MEDEVAC — deve essere interpretabile in modo identico da ogni ricevente, indipendentemente da dove si trovi e da quale calendario civile usi.",
    sections: [
      {
        heading: "24-hour clock e Zulu",
        blocks: [
          {
            type: "p",
            text: "Orologio a 24 ore: ore 00-23, minuti 00-59, formato HHMM senza due punti. Mezzanotte = 0000 (inizio giorno). Zulu (Z) = UTC, fuso di Greenwich, nessun DST. È il riferimento operativo per tutta la NATO.",
          },
          {
            type: "p",
            text: "L'ora civile locale (con DST e fuso nazionale) si usa solo per interfacce civili — mai per ordini operativi. In ordini in chiaro che usano local time si appende sempre il marker J (Juliet).",
          },
        ],
      },
      {
        heading: "DTG — Date-Time Group",
        blocks: [
          {
            type: "p",
            text: "Formato standard NATO: DDHHMM[Z]MMMYY. Esempio 121430ZJUN26 = 12 giugno 2026, 14:30 Zulu. La lettera del fuso è obbligatoria. Mese in tre lettere maiuscole. Anno in due cifre.",
          },
          {
            type: "radio",
            title: "ESEMPIO RADIO",
            lines: [
              "ZULU SIX, this is ALPHA TWO, SITREP at one-two-one-four-three-zero ZULU, OVER.",
            ],
          },
        ],
      },
      {
        heading: "Fusi orari militari (letters)",
        blocks: [
          {
            type: "p",
            text: "Ogni offset da Greenwich è una lettera. A-M = +1...+12 (con I = +9). N-Y = -1...-12. Z = 0. J = local.",
          },
          {
            type: "table",
            headers: ["Lettera", "Offset", "Fuso"],
            rows: ZONES,
          },
        ],
      },
      {
        heading: "Time hack (sincronizzazione)",
        blocks: [
          {
            type: "p",
            text: "Procedura standard per allineare gli orologi della squadra a una sorgente comune (GPS o orologio master). Senior chiama 5-secondo countdown, gli operatori settano sul HACK.",
          },
          {
            type: "radio",
            title: "TIME HACK",
            lines: [
              "ALL STATIONS, ZULU SIX, TIME HACK FOLLOWS.",
              "STAND BY FOR ONE THREE THREE ZERO ZULU. FIFE. FOWER. THREE. TWO. ONE. HACK.",
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
              "Mescolare 12-ore e 24-ore — eliminare AM/PM da tutti i documenti",
              "Trasmettere ora senza suffix Z — interpretabile come local da non-anglofoni",
              "Dimenticare DST — Zulu non lo subisce, local sì",
              "Fidarsi del telefono con auto-time on (cambia con la rete)",
              "DTG senza mese — ambiguo se attraversa la fine del mese",
              "Drone con log in local time invece di UTC — incoerente con artiglieria",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Ucraina è UTC+2 (EET) inverno, UTC+3 (EEST) estate. Russia è UTC+3 anno tutto (no DST). Mosca e Kyiv estive sono allineati; inverno offset di 1 ora. Su rete multinazionale UA-NATO l'unico standard funzionante è Zulu. Conversioni manuali tra Pulkovo russo, civile UA e Zulu hanno causato errori di TOT documentati. Regola unica: Zulu su ordini operativi, fine.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Military time and Zulu exist to remove ambiguity in multi-unit, multi-zone, multinational operations. Every critical timestamp — order, report, log, fires, MEDEVAC — must be interpretable identically by every receiver regardless of location or civilian calendar.",
    sections: [
      {
        heading: "24-hour clock and Zulu",
        blocks: [
          {
            type: "p",
            text: "24-hour clock: hours 00-23, minutes 00-59, format HHMM no colon. Midnight = 0000 (start of day). Zulu (Z) = UTC, Greenwich reference, no DST. The operational standard across NATO.",
          },
          {
            type: "p",
            text: "Civilian local time (with DST and national zone) is used only for civilian interfaces — never for operational orders. In clear-text orders using local time, always append J (Juliet) marker.",
          },
        ],
      },
      {
        heading: "DTG — Date-Time Group",
        blocks: [
          {
            type: "p",
            text: "NATO standard format: DDHHMM[Z]MMMYY. Example 121430ZJUN26 = 12 June 2026, 14:30 Zulu. Zone letter is mandatory. Month in three uppercase letters. Year in two digits.",
          },
          {
            type: "radio",
            title: "RADIO EXAMPLE",
            lines: [
              "ZULU SIX, this is ALPHA TWO, SITREP at one-two-one-four-three-zero ZULU, OVER.",
            ],
          },
        ],
      },
      {
        heading: "Military time zones (letters)",
        blocks: [
          {
            type: "p",
            text: "Every offset from Greenwich is a letter. A-M = +1...+12 (with I = +9). N-Y = -1...-12. Z = 0. J = local.",
          },
          {
            type: "table",
            headers: ["Letter", "Offset", "Zone"],
            rows: ZONES,
          },
        ],
      },
      {
        heading: "Time hack (synchronisation)",
        blocks: [
          {
            type: "p",
            text: "Standard procedure to align team watches to a common source (GPS or master watch). Senior calls 5-second countdown, operators set on HACK.",
          },
          {
            type: "radio",
            title: "TIME HACK",
            lines: [
              "ALL STATIONS, ZULU SIX, TIME HACK FOLLOWS.",
              "STAND BY FOR ONE THREE THREE ZERO ZULU. FIFE. FOWER. THREE. TWO. ONE. HACK.",
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
              "Mixing 12-hour and 24-hour — eliminate AM/PM from all documents",
              "Transmitting time without Z suffix — interpretable as local by non-natives",
              "Forgetting DST — Zulu does not observe it, local does",
              "Trusting auto-time-on phone (changes with network)",
              "DTG without month — ambiguous across month-end",
              "Drone logs in local time instead of UTC — incoherent with artillery",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukraine is UTC+2 (EET) winter, UTC+3 (EEST) summer. Russia is UTC+3 year-round (no DST). Moscow and summer Kyiv align; winter offset is 1 hour. On multinational UA-NATO nets the only working standard is Zulu. Manual conversions between Russian Pulkovo, UA civilian and Zulu have caused documented TOT errors. One rule: Zulu on operational orders, period.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Tempo militar e Zulu existem para eliminar ambiguidade em operações multi-unidade, multi-fuso e multinacionais. Todo timestamp crítico — ordem, report, log, fires, MEDEVAC — deve ser interpretável de forma idêntica por todo receptor, independentemente de onde esteja e de qual calendário civil use.",
    sections: [
      {
        heading: "Relógio 24-horas e Zulu",
        blocks: [
          {
            type: "p",
            text: "Relógio 24h: horas 00-23, minutos 00-59, formato HHMM sem dois pontos. Meia-noite = 0000 (início do dia). Zulu (Z) = UTC, referência Greenwich, sem DST. Padrão operacional em toda a OTAN.",
          },
          {
            type: "p",
            text: "Hora civil local (com DST e fuso nacional) usa-se só para interfaces civis — nunca para ordens operacionais. Em ordens em claro com hora local, sempre acrescentar marker J (Juliet).",
          },
        ],
      },
      {
        heading: "DTG — Date-Time Group",
        blocks: [
          {
            type: "p",
            text: "Formato padrão OTAN: DDHHMM[Z]MMMYY. Exemplo 121430ZJUN26 = 12 de junho de 2026, 14:30 Zulu. Letra do fuso é obrigatória. Mês em três letras maiúsculas. Ano em dois dígitos.",
          },
          {
            type: "radio",
            title: "EXEMPLO RÁDIO",
            lines: [
              "ZULU SIX, this is ALPHA TWO, SITREP at one-two-one-four-three-zero ZULU, OVER.",
            ],
          },
        ],
      },
      {
        heading: "Fusos militares (letras)",
        blocks: [
          {
            type: "p",
            text: "Cada offset de Greenwich é uma letra. A-M = +1...+12 (com I = +9). N-Y = -1...-12. Z = 0. J = local.",
          },
          {
            type: "table",
            headers: ["Letra", "Offset", "Fuso"],
            rows: ZONES,
          },
        ],
      },
      {
        heading: "Time hack (sincronização)",
        blocks: [
          {
            type: "p",
            text: "Procedimento padrão para alinhar relógios da equipe a uma fonte comum (GPS ou relógio master). Senior chama countdown de 5 segundos, operadores acertam no HACK.",
          },
          {
            type: "radio",
            title: "TIME HACK",
            lines: [
              "ALL STATIONS, ZULU SIX, TIME HACK FOLLOWS.",
              "STAND BY FOR ONE THREE THREE ZERO ZULU. FIFE. FOWER. THREE. TWO. ONE. HACK.",
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
              "Misturar 12h e 24h — eliminar AM/PM de todos os documentos",
              "Transmitir hora sem sufixo Z — não nativos interpretam como local",
              "Esquecer DST — Zulu não tem, local tem",
              "Confiar em telefone com auto-time on (muda com rede)",
              "DTG sem mês — ambíguo na virada de mês",
              "Drone com log em local time em vez de UTC — incoerente com artilharia",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Ucrânia é UTC+2 (EET) inverno, UTC+3 (EEST) verão. Rússia é UTC+3 ano todo (sem DST). Moscou e Kyiv verão coincidem; inverno offset de 1 hora. Em rede multinacional UA-OTAN o único padrão que funciona é Zulu. Conversões manuais entre Pulkovo russo, civil UA e Zulu já causaram erros de TOT documentados. Regra única: Zulu em ordens operacionais, ponto.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Heure militaire et Zulu existent pour éliminer l'ambiguïté dans les opérations multi-unités, multi-fuseaux, multinationales. Chaque timestamp critique — ordre, report, log, fires, MEDEVAC — doit être interprétable à l'identique par tout receveur, où qu'il soit et quel que soit son calendrier civil.",
    sections: [
      {
        heading: "Horloge 24 heures et Zulu",
        blocks: [
          {
            type: "p",
            text: "Horloge 24h : heures 00-23, minutes 00-59, format HHMM sans deux-points. Minuit = 0000 (début du jour). Zulu (Z) = UTC, référence Greenwich, sans DST. Standard opérationnel dans toute l'OTAN.",
          },
          {
            type: "p",
            text: "L'heure civile locale (avec DST et fuseau national) ne s'utilise que pour les interfaces civiles — jamais pour des ordres opérationnels. En clair avec heure locale, toujours appendre le marker J (Juliet).",
          },
        ],
      },
      {
        heading: "DTG — Date-Time Group",
        blocks: [
          {
            type: "p",
            text: "Format standard OTAN : DDHHMM[Z]MMMYY. Exemple 121430ZJUN26 = 12 juin 2026, 14:30 Zulu. Lettre de fuseau obligatoire. Mois en trois lettres majuscules. Année à deux chiffres.",
          },
          {
            type: "radio",
            title: "EXEMPLE RADIO",
            lines: [
              "ZULU SIX, this is ALPHA TWO, SITREP at one-two-one-four-three-zero ZULU, OVER.",
            ],
          },
        ],
      },
      {
        heading: "Fuseaux militaires (lettres)",
        blocks: [
          {
            type: "p",
            text: "Chaque offset depuis Greenwich est une lettre. A-M = +1...+12 (avec I = +9). N-Y = -1...-12. Z = 0. J = local.",
          },
          {
            type: "table",
            headers: ["Lettre", "Offset", "Fuseau"],
            rows: ZONES,
          },
        ],
      },
      {
        heading: "Time hack (synchronisation)",
        blocks: [
          {
            type: "p",
            text: "Procédure standard pour aligner les montres de l'équipe sur une source commune (GPS ou montre maître). Le senior lance un countdown de 5 secondes, les opérateurs règlent sur HACK.",
          },
          {
            type: "radio",
            title: "TIME HACK",
            lines: [
              "ALL STATIONS, ZULU SIX, TIME HACK FOLLOWS.",
              "STAND BY FOR ONE THREE THREE ZERO ZULU. FIFE. FOWER. THREE. TWO. ONE. HACK.",
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
              "Mélanger 12h et 24h — éliminer AM/PM de tous documents",
              "Émettre une heure sans suffixe Z — interprétée comme locale par les non-natifs",
              "Oublier le DST — Zulu ne le subit pas, local oui",
              "Faire confiance à un téléphone en auto-time (change avec le réseau)",
              "DTG sans le mois — ambigu autour de la fin de mois",
              "Logs drone en heure locale au lieu d'UTC — incohérent avec l'artillerie",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukraine UTC+2 (EET) hiver, UTC+3 (EEST) été. Russie UTC+3 toute l'année (sans DST). Moscou et Kyiv été s'alignent ; hiver, offset d'1 heure. Sur réseau multinational UA-OTAN, seul Zulu fonctionne. Les conversions manuelles entre Pulkovo russe, civil UA et Zulu ont causé des erreurs de TOT documentées. Règle unique : Zulu sur les ordres opérationnels, point.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
