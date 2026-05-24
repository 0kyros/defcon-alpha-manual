import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const BREVITY: ReadonlyArray<ReadonlyArray<string>> = [
  ["BLACK", "Settore privo di forze nemiche conosciute"],
  ["WHITE", "Civili presenti / forze non belligeranti"],
  ["RED", "Forze nemiche confermate"],
  ["BLUE", "Forze amiche"],
  ["GREEN", "Forze ucraine (in alcune procedure UA)"],
  ["YELLOW", "Status sconosciuto / da chiarire"],
  ["BINGO", "Carburante / munizioni al minimo per rientro"],
  ["WINCHESTER", "Munizioni esaurite — non più capacità di ingaggio"],
  ["JOKER", "Riserve sotto soglia minima operativa"],
  ["NAILS", "Munizioni a salve / vuote"],
  ["SHACK", "Colpo a segno confermato"],
  ["SPLASH", "Round/ordigno in impatto (5 sec dall'arrivo)"],
  ["IMPACT", "Ordigno arrivato e detonato"],
  ["DRY", "Caricatore esaurito (necessità di ricarica)"],
  ["MISS", "Colpo mancato"],
  ["TALLY", "Bersaglio nemico visualmente acquisito"],
  ["NO JOY", "Bersaglio non acquisito"],
  ["VISUAL", "Forze amiche visualmente acquisite"],
  ["BLIND", "Senza visivo (perdita di awareness)"],
  ["POPEYE", "Limitazione visiva per nubi/meteo"],
  ["FENCED IN", "Sistemi armamento attivati e armati (aviazione)"],
  ["FENCED OUT", "Sistemi armamento disattivati (post-missione)"],
  ["NAKED", "Nessun sistema di self-protection attivo"],
  ["CHICKS / ANGELS", "Quota in migliaia di piedi (aviazione)"],
  ["GUNS GUNS GUNS", "Tiro di cannone in corso"],
  ["RIFLE", "Lancio missile aria-superficie"],
  ["MAGNUM", "Lancio missile anti-radiazione"],
  ["FOX", "Lancio missile aria-aria (1=semi-attivo, 2=IR, 3=attivo)"],
  ["GOAL", "Obiettivo raggiunto / missione completata"],
  ["JINK", "Manovra evasiva immediata"],
  ["BUSTER", "Velocità massima"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "I brevity codes sono parole o codici brevi che sostituiscono frasi lunghe in radio traffic. Sono codificati nell'ACP-167 NATO e nei manuali multinazionali aria-terra. Diversi dai prowords (che regolano la procedura): i brevity codes trasmettono contenuto operativo. Padronanza dei più diffusi è prerequisito per operare in ambienti multinazionali.",
    sections: [
      {
        heading: "Differenza dai prowords",
        blocks: [
          {
            type: "p",
            text: "I prowords (OVER, WILCO, ROGER) regolano la procedura della trasmissione. I brevity codes (BINGO, SPLASH, TALLY) trasmettono informazione operativa in forma compressa. Un'unica trasmissione può contenere entrambi.",
          },
          {
            type: "radio",
            title: "ESEMPIO MISTO",
            lines: [
              "BRAVO SIX, ALPHA TWO, TALLY ON TARGET, SPLASH IN FIVE, OVER.",
              "ALPHA TWO, BRAVO SIX, ROGER, OUT.",
            ],
          },
        ],
      },
      {
        heading: "Lista operativa essenziale",
        blocks: [
          {
            type: "table",
            headers: ["Codice", "Significato"],
            rows: BREVITY,
          },
        ],
      },
      {
        heading: "Regole d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Solo brevity codes effettivamente conosciuti dalla rete in uso",
              "Mai improvvisare codici non standard",
              "In ambiente multinazionale: validare i codici al briefing iniziale",
              "Codici aria-terra (CAS) richiedono coordinamento JTAC dedicato",
              "Pronuncia chiara, digit-by-digit per numeri associati",
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
              "Confondere TALLY (nemico visto) e VISUAL (amico visto) — invertirli costa fires amiche",
              "Dichiarare BINGO troppo tardi (sotto soglia, non al minimo)",
              "Usare SHACK per qualsiasi colpo invece che per quelli confermati",
              "Improvvisare codici slang locali assenti dallo standard",
              "Sovrapporre brevity aviation a contesto fanteria pura",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Sul fronte ucraino i brevity sono usati selettivamente: TALLY, VISUAL, BLIND, SPLASH, BINGO, WINCHESTER sono universali. Codici aria-aria (FOX, MAGNUM) restano nel dominio aviazione. La rete di volontari beneficia di un sottoinsieme stretto e ben memorizzato — un brevity sbagliato in contact crea più caos che valore. Imparare 15 codici a memoria batte conoscerne 80 male.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Brevity codes are short words or codes replacing longer phrases on radio traffic. They are codified in NATO ACP-167 and multinational air-ground manuals. Different from prowords (which govern procedure): brevity codes carry operational content. Fluency in the common ones is a prerequisite for working in multinational environments.",
    sections: [
      {
        heading: "Difference from prowords",
        blocks: [
          {
            type: "p",
            text: "Prowords (OVER, WILCO, ROGER) govern the procedure of a transmission. Brevity codes (BINGO, SPLASH, TALLY) carry operational information in compressed form. One transmission can carry both.",
          },
          {
            type: "radio",
            title: "MIXED EXAMPLE",
            lines: [
              "BRAVO SIX, ALPHA TWO, TALLY ON TARGET, SPLASH IN FIVE, OVER.",
              "ALPHA TWO, BRAVO SIX, ROGER, OUT.",
            ],
          },
        ],
      },
      {
        heading: "Essential operational list",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Meaning"],
            rows: BREVITY,
          },
        ],
      },
      {
        heading: "Usage rules",
        blocks: [
          {
            type: "ul",
            items: [
              "Only brevity codes actually known by the net in use",
              "Never improvise non-standard codes",
              "In multinational environments: validate codes at the initial brief",
              "Air-ground codes (CAS) require dedicated JTAC coordination",
              "Clear pronunciation, digit-by-digit for any associated numbers",
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
              "Confusing TALLY (enemy seen) and VISUAL (friendly seen) — reversal costs friendly fire",
              "Declaring BINGO too late (past threshold, not at minimum)",
              "Using SHACK for any shot instead of confirmed hits",
              "Improvising local slang codes absent from the standard",
              "Overlaying aviation brevity onto pure infantry context",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "On the Ukrainian front brevity is used selectively: TALLY, VISUAL, BLIND, SPLASH, BINGO, WINCHESTER are universal. Air-air codes (FOX, MAGNUM) stay in the aviation domain. Volunteer nets benefit from a tight, well-memorised subset — a wrong brevity in contact creates more chaos than value. Knowing 15 codes cold beats knowing 80 badly.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Brevity codes são palavras ou códigos curtos que substituem frases longas no tráfego de rádio. Estão codificados no ACP-167 OTAN e em manuais multinacionais ar-solo. Diferentes dos prowords (que regulam o procedimento): os brevity codes transmitem conteúdo operacional. O domínio dos mais comuns é pré-requisito para operar em ambiente multinacional.",
    sections: [
      {
        heading: "Diferença em relação aos prowords",
        blocks: [
          {
            type: "p",
            text: "Prowords (OVER, WILCO, ROGER) regulam o procedimento da transmissão. Brevity codes (BINGO, SPLASH, TALLY) transmitem informação operacional comprimida. Uma transmissão pode conter ambos.",
          },
          {
            type: "radio",
            title: "EXEMPLO MISTO",
            lines: [
              "BRAVO SIX, ALPHA TWO, TALLY ON TARGET, SPLASH IN FIVE, OVER.",
              "ALPHA TWO, BRAVO SIX, ROGER, OUT.",
            ],
          },
        ],
      },
      {
        heading: "Lista operacional essencial",
        blocks: [
          {
            type: "table",
            headers: ["Código", "Significado"],
            rows: BREVITY,
          },
        ],
      },
      {
        heading: "Regras de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Apenas brevity codes efetivamente conhecidos pela rede em uso",
              "Nunca improvisar códigos fora do padrão",
              "Em ambiente multinacional: validar códigos no briefing inicial",
              "Códigos ar-solo (CAS) exigem coordenação JTAC dedicada",
              "Pronúncia clara, digit-by-digit para números associados",
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
              "Confundir TALLY (inimigo visto) e VISUAL (amigo visto) — inverter custa fogo amigo",
              "Declarar BINGO tarde demais (abaixo da soglia, não no mínimo)",
              "Usar SHACK para qualquer disparo em vez de só os confirmados",
              "Improvisar gírias locais ausentes do padrão",
              "Sobrepor brevity de aviação a contexto puramente de infantaria",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "No front ucraniano os brevity são usados seletivamente: TALLY, VISUAL, BLIND, SPLASH, BINGO, WINCHESTER são universais. Códigos ar-ar (FOX, MAGNUM) ficam no domínio aviação. As redes de voluntários se beneficiam de um subconjunto enxuto e bem memorizado — um brevity errado em contato gera mais caos que valor. Saber 15 códigos de cor bate saber 80 mal.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Les brevity codes sont des mots ou codes courts qui remplacent des phrases plus longues sur les transmissions radio. Ils sont codifiés dans l'ACP-167 OTAN et les manuels multinationaux air-sol. Différents des prowords (qui régissent la procédure) : les brevity codes transportent du contenu opérationnel. La maîtrise des plus courants est un prérequis pour opérer en environnement multinational.",
    sections: [
      {
        heading: "Différence avec les prowords",
        blocks: [
          {
            type: "p",
            text: "Les prowords (OVER, WILCO, ROGER) régissent la procédure d'émission. Les brevity codes (BINGO, SPLASH, TALLY) transportent de l'information opérationnelle compressée. Une seule émission peut contenir les deux.",
          },
          {
            type: "radio",
            title: "EXEMPLE MIXTE",
            lines: [
              "BRAVO SIX, ALPHA TWO, TALLY ON TARGET, SPLASH IN FIVE, OVER.",
              "ALPHA TWO, BRAVO SIX, ROGER, OUT.",
            ],
          },
        ],
      },
      {
        heading: "Liste opérationnelle essentielle",
        blocks: [
          {
            type: "table",
            headers: ["Code", "Signification"],
            rows: BREVITY,
          },
        ],
      },
      {
        heading: "Règles d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "Uniquement les brevity codes effectivement connus du réseau utilisé",
              "Jamais improviser de codes hors standard",
              "En environnement multinational : valider les codes au briefing initial",
              "Les codes air-sol (CAS) exigent une coordination JTAC dédiée",
              "Prononciation claire, chiffre par chiffre pour tout nombre associé",
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
              "Confondre TALLY (ennemi vu) et VISUAL (ami vu) — l'inversion coûte du tir fratricide",
              "Déclarer BINGO trop tard (sous le seuil, pas au minimum)",
              "Utiliser SHACK pour n'importe quel tir au lieu des coups confirmés",
              "Improviser des slang locaux absents du standard",
              "Superposer du brevity aviation à un contexte purement infanterie",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Sur le front ukrainien, le brevity est utilisé sélectivement : TALLY, VISUAL, BLIND, SPLASH, BINGO, WINCHESTER sont universels. Les codes air-air (FOX, MAGNUM) restent dans le domaine aviation. Les réseaux de volontaires gagnent à un sous-ensemble réduit et bien mémorisé — un brevity erroné en contact crée plus de chaos que de valeur. Savoir 15 codes parfaitement vaut mieux que 80 mal.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
