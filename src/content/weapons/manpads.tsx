import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["FIM-92 Stinger", "USA — IR/UV passivo", "1981", "Bispettrale (IR + UV), portata 200-4800 m, quota fino a 3800 m. Block I/II in dotazione."],
  ["9K38 Igla / Igla-S", "URSS/RUS — IR a due colori", "1981 / 2002", "Portata 500-5200 m (Igla-S 6 km), quota 10-3500 m. Sensore IR a due bande contro flare."],
  ["9K310 Igla-1", "URSS — IR mono-banda", "1981", "Versione precedente, più sensibile al flare. Ampia diffusione export."],
  ["Starstreak", "UK — laser-beam riding", "1997", "Tre subprojectile guidati da fascio laser, velocità Mach 4, immune al flare IR. Portata 7 km."],
  ["9K333 Verba", "RUS — IR triplo (UV/IR/MWIR)", "2014", "Sistema più moderno russo, autodirettore a tre canali contro contromisure IR avanzate."],
  ["Mistral", "FRA — IR cooled", "1989", "Sistema franco, montato su treppiede o vettura, portata 6 km."],
  ["Piorun", "POL — IR migliorato", "2019", "Sviluppo polacco basato su Grom (derivato Igla), portata 6.5 km. In dotazione UA."],
  ["9K32 Strela-2 / 2M", "URSS — IR", "1968 / 1970", "Prima generazione MANPADS sovietica, fortemente vulnerabile al flare moderno."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sui sistemi missilistici antiaerei portatili a spalla (MANPADS — Man-Portable Air-Defense System). Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, sistemi di guida, varianti, diffusione. Nessuna istruzione operativa, di lock-on, di tiro, di manutenzione o modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Sistema missilistico antiaereo a spalla destinato all'ingaggio di velivoli a bassa quota (tipicamente 10-4000 m altitudine, distanza 0.5-6 km). Operato singolarmente o in squadra dedicata. Categoria di armi sensibile, ad accesso normalmente ristretto a forze militari regolari. Strumento centrale della difesa antiaerea diffusa contro velivoli ad ala fissa e rotante a bassa quota, contro UCAV e contro elicotteri d'attacco.",
          },
        ],
      },
      {
        heading: "Famiglie di guida",
        blocks: [
          {
            type: "ul",
            items: [
              "IR passivo mono-banda: Strela-2, Igla-1 — sensibili al flare e a sorgenti calde di esca",
              "IR bispettrale (IR+UV): Stinger — discrimina flare via assenza di firma UV",
              "IR a due/tre colori: Igla, Igla-S, Verba — discrimina via comparazione bande IR multiple",
              "Laser-beam riding: Starstreak — immune al flare IR (non insegue una firma termica)",
              "IR cooled high-sensitivity: Mistral, Piorun — autodirettore raffreddato per maggiore sensibilità",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Origine / Guida", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Profilo di ingaggio",
        blocks: [
          {
            type: "p",
            text: "MANPADS operano tipicamente in ingaggio di coda (rear-aspect) sui sistemi più datati, da tutti gli aspetti (all-aspect) sui sistemi moderni. La firma termica del bersaglio (motore in coda per aerei a getto, fascio caldo elicottero) è il riferimento del seeker. Velivoli moderni adottano contromisure IRCM, DIRCM e flare per saturare i seeker passivi. Sistemi laser-beam riding come Starstreak ignorano queste contromisure.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "L'Ucraina ha ricevuto Stinger (USA, oltre 1700 unità), Piorun (Polonia, oltre 1500), Starstreak (UK), Mistral (Francia/Germania), e mantiene grandi stock Igla/Igla-S/Strela ex-sovietici. Forze russe impiegano Igla, Igla-S, Verba contro elicotteri e drone ucraini. MANPADS sono protagonisti della negazione dello spazio aereo a bassa quota su entrambi i fronti. Hanno significativamente limitato l'impiego di Su-25 e Ka-52 russi.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Portabilità individuale, schieramento rapido",
              "Costo unitario inferiore a sistemi SAM medi/pesanti",
              "Difficile da rilevare dal velivolo bersaglio prima del lancio (passivi)",
              "Effetto di deterrenza significativo: costringe velivoli a quote più alte",
              "Rapidamente proliferabile a unità leggere e formazioni irregolari",
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
              "Sensibilità a flare e contromisure IR sui sistemi mono-banda",
              "Quota massima limitata (~3.5-4 km su sistemi moderni)",
              "Tempo di vita del raffreddamento del seeker breve dopo attivazione (Stinger)",
              "Backblast pericoloso, no impiego in spazi confinati",
              "Sensibilità a meteo (nebbia, pioggia intensa) sui sistemi IR",
              "Categoria di armi controllata — proliferazione gestita con attenzione",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di lock-on, leadenagging, identificazione di bersaglio, IFF, manipolazione tattica, manutenzione o modifiche. L'addestramento MANPADS è strettamente militare e ad accesso ristretto.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on man-portable air-defence systems (MANPADS). Public doctrinal information only: role, nomenclature, guidance, variants, distribution. No operational, lock-on, firing, maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Shoulder-launched anti-aircraft missile system intended to engage low-altitude aircraft (typically 10-4000 m altitude, 0.5-6 km range). Operated individually or by dedicated squad. Sensitive weapon category, normally restricted to regular military forces. A central tool of distributed low-altitude air defence against fixed-wing and rotary-wing aircraft, against UCAVs and against attack helicopters.",
          },
        ],
      },
      {
        heading: "Guidance families",
        blocks: [
          {
            type: "ul",
            items: [
              "Single-band passive IR: Strela-2, Igla-1 — vulnerable to flare and hot-source decoys",
              "Dual-spectrum IR (IR+UV): Stinger — discriminates flare via absence of UV signature",
              "Two/three-colour IR: Igla, Igla-S, Verba — discriminates via comparison of multiple IR bands",
              "Laser-beam riding: Starstreak — IR flare-immune (no thermal signature pursuit)",
              "Cooled high-sensitivity IR: Mistral, Piorun — cooled seeker for higher sensitivity",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Origin / Guidance", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Engagement profile",
        blocks: [
          {
            type: "p",
            text: "MANPADS typically engage in rear-aspect on older systems, all-aspect on modern ones. The target's thermal signature (jet engine exhaust, helicopter exhaust hot beam) is the seeker reference. Modern aircraft employ IRCM, DIRCM and flare countermeasures to saturate passive seekers. Laser-beam-riding systems like Starstreak ignore these countermeasures.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukraine has received Stinger (USA, 1700+ units), Piorun (Poland, 1500+), Starstreak (UK), Mistral (France/Germany), and retains large ex-Soviet Igla/Igla-S/Strela stocks. Russian forces field Igla, Igla-S, Verba against Ukrainian helicopters and drones. MANPADS are central to low-altitude airspace denial on both fronts. They have significantly limited the use of Russian Su-25 and Ka-52 aircraft.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Individual portability, rapid deployment",
              "Unit cost lower than medium/heavy SAM systems",
              "Hard to detect from target aircraft before launch (passive)",
              "Significant deterrent effect: forces aircraft to higher altitudes",
              "Rapidly proliferable to light units and irregular formations",
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
              "Vulnerability to flare and IR countermeasures on single-band systems",
              "Limited maximum altitude (~3.5-4 km on modern systems)",
              "Short seeker cooling life after activation (Stinger)",
              "Dangerous backblast, no employment in confined spaces",
              "Weather sensitivity (fog, heavy rain) on IR systems",
              "Controlled weapon category — proliferation carefully managed",
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
            body: "This entry is encyclopaedic. It does not describe lock-on procedures, lead aiming, target identification, IFF, tactical handling, maintenance or modifications. MANPADS training is strictly military and restricted-access.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre sistemas de mísseis antiaéreos portáteis ao ombro (MANPADS). Apenas informações doutrinárias públicas: papel, nomenclatura, guiagem, variantes, distribuição. Nenhuma instrução operacional, de lock-on, tiro, manutenção ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Sistema de míssil antiaéreo ao ombro destinado a engajar aeronaves a baixa altitude (tipicamente 10-4000 m altitude, distância 0,5-6 km). Operado individualmente ou em esquadrão dedicado. Categoria sensível de armas, normalmente restrita a forças militares regulares. Ferramenta central da defesa antiaérea distribuída contra aeronaves de asa fixa e rotativa a baixa altitude, contra UCAV e contra helicópteros de ataque.",
          },
        ],
      },
      {
        heading: "Famílias de guiagem",
        blocks: [
          {
            type: "ul",
            items: [
              "IR passivo mono-banda: Strela-2, Igla-1 — vulneráveis a flare e a fontes de calor isca",
              "IR biespectral (IR+UV): Stinger — discrimina flare via ausência de assinatura UV",
              "IR de dois/três cores: Igla, Igla-S, Verba — discrimina via comparação de múltiplas bandas IR",
              "Laser-beam riding: Starstreak — imune a flare IR (não persegue assinatura térmica)",
              "IR cooled de alta sensibilidade: Mistral, Piorun — autodirettore refrigerado para maior sensibilidade",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Origem / Guiagem", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Perfil de engajamento",
        blocks: [
          {
            type: "p",
            text: "MANPADS operam tipicamente em rear-aspect em sistemas mais antigos, all-aspect nos modernos. A assinatura térmica do alvo (escapamento do motor de jato, feixe quente do escapamento de helicóptero) é a referência do seeker. Aeronaves modernas empregam contramedidas IRCM, DIRCM e flare para saturar os seekers passivos. Sistemas laser-beam riding como Starstreak ignoram essas contramedidas.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A Ucrânia recebeu Stinger (EUA, mais de 1700 unidades), Piorun (Polônia, mais de 1500), Starstreak (UK), Mistral (França/Alemanha), e mantém grandes estoques ex-soviéticos de Igla/Igla-S/Strela. Forças russas empregam Igla, Igla-S, Verba contra helicópteros e drones ucranianos. MANPADS são protagonistas da negação do espaço aéreo a baixa altitude em ambos os fronts. Limitaram significativamente o uso de Su-25 e Ka-52 russos.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Portabilidade individual, desdobramento rápido",
              "Custo unitário inferior a sistemas SAM médios/pesados",
              "Difícil de detectar pelo alvo antes do lançamento (passivos)",
              "Efeito de dissuasão significativo: força aeronaves a altitudes maiores",
              "Rapidamente proliferável a unidades leves e formações irregulares",
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
              "Vulnerabilidade a flare e contramedidas IR em sistemas mono-banda",
              "Altitude máxima limitada (~3,5-4 km em sistemas modernos)",
              "Vida útil curta da refrigeração do seeker após ativação (Stinger)",
              "Backblast perigoso, sem emprego em espaços confinados",
              "Sensibilidade a clima (neblina, chuva intensa) em sistemas IR",
              "Categoria controlada de armas — proliferação cuidadosamente gerenciada",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de lock-on, lead aiming, identificação de alvo, IFF, manuseio tático, manutenção ou modificações. O treinamento MANPADS é estritamente militar e de acesso restrito.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les systèmes de missiles antiaériens portatifs à l'épaule (MANPADS). Informations doctrinales publiques uniquement : rôle, nomenclature, guidage, variantes, diffusion. Aucune instruction opérationnelle, de verrouillage, de tir, de maintenance ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Système de missile antiaérien à l'épaule destiné à engager des aéronefs à basse altitude (typiquement 10-4000 m altitude, distance 0,5-6 km). Servi individuellement ou par groupe dédié. Catégorie d'armes sensible, normalement restreinte aux forces militaires régulières. Outil central de la défense antiaérienne distribuée contre aéronefs à voilure fixe et tournante à basse altitude, contre UCAV et hélicoptères d'attaque.",
          },
        ],
      },
      {
        heading: "Familles de guidage",
        blocks: [
          {
            type: "ul",
            items: [
              "IR passif mono-bande : Strela-2, Igla-1 — vulnérables au flare et aux sources chaudes leurre",
              "IR bispectral (IR+UV) : Stinger — discrimine le flare via absence de signature UV",
              "IR à deux/trois couleurs : Igla, Igla-S, Verba — discrimine par comparaison de bandes IR multiples",
              "Laser-beam riding : Starstreak — immunisé au flare IR (ne poursuit pas une signature thermique)",
              "IR refroidi haute sensibilité : Mistral, Piorun — autodirecteur refroidi pour sensibilité accrue",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Origine / Guidage", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Profil d'engagement",
        blocks: [
          {
            type: "p",
            text: "Les MANPADS opèrent typiquement en aspect arrière (rear-aspect) sur les systèmes anciens, en tous aspects (all-aspect) sur les systèmes modernes. La signature thermique de la cible (tuyère de réacteur, faisceau chaud d'échappement d'hélicoptère) est la référence de l'autodirecteur. Les aéronefs modernes emploient des contre-mesures IRCM, DIRCM et flares pour saturer les autodirecteurs passifs. Les systèmes laser-beam riding comme Starstreak ignorent ces contre-mesures.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "L'Ukraine a reçu des Stinger (USA, plus de 1700 unités), Piorun (Pologne, plus de 1500), Starstreak (UK), Mistral (France/Allemagne), et conserve d'importants stocks ex-soviétiques Igla/Igla-S/Strela. Les forces russes emploient Igla, Igla-S, Verba contre hélicoptères et drones ukrainiens. Les MANPADS sont protagonistes du déni d'espace aérien à basse altitude des deux côtés. Ils ont significativement limité l'emploi des Su-25 et Ka-52 russes.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Portabilité individuelle, déploiement rapide",
              "Coût unitaire inférieur aux SAM moyens/lourds",
              "Difficile à détecter par l'aéronef cible avant le lancement (passifs)",
              "Effet dissuasif significatif : force les aéronefs à des altitudes supérieures",
              "Rapidement proliférable à des unités légères et formations irrégulières",
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
              "Vulnérabilité au flare et aux contre-mesures IR sur systèmes mono-bande",
              "Altitude maximale limitée (~3,5-4 km sur systèmes modernes)",
              "Durée de vie du refroidissement de l'autodirecteur brève après activation (Stinger)",
              "Backblast dangereux, pas d'emploi en espaces confinés",
              "Sensibilité météo (brouillard, pluie intense) sur les systèmes IR",
              "Catégorie d'armes contrôlée — prolifération gérée avec attention",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de verrouillage, ni anticipation (lead aiming), ni identification de cible, ni IFF, ni manipulation tactique, ni maintenance, ni modifications. La formation MANPADS est strictement militaire et à accès restreint.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
