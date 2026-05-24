import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["RPG-2", "40 mm tubo / vari proietti", "1949", "Predecessore della RPG-7, capacità HEAT limitata. Largamente sostituita."],
  ["RPG-7 / RPG-7V", "40 mm tubo / 70-105 mm warhead", "1961", "Versione iconica. Ampia famiglia di proietti: PG-7V (HEAT), TBG-7V (termobarica), OG-7V (HE), PG-7VR (tandem)."],
  ["RPG-7D", "40 mm tubo", "1963", "Versione paracadutisti / airborne, tubo scomponibile in due parti."],
  ["RPG-16", "58.3 mm", "1970", "Variante airborne con maggiore precisione, mirino ottico fisso, range esteso."],
  ["RPG-18 / 22 / 26", "64 / 72 / 72 mm", "1972-1985", "Lanciatori monouso \"disposable\", stile US LAW, fanteria leggera."],
  ["RPG-29 Vampir", "105 mm tandem HEAT", "1989", "Lanciatore riutilizzabile a doppia carica per superare ERA. Filettato per ottiche."],
  ["RPG-30 Kryuk", "105 mm + esca", "2008", "Lanciatore tandem con razzo esca per ingannare hard-kill APS (Trophy/Arena)."],
  ["RPG-32 Hashim", "72.5 / 105 mm", "2010", "Lanciatore modulare russo-giordano, calibri intercambiabili."],
  ["PSRL-1 / -2", "40 mm tubo", "2016", "Clone americano della RPG-7 (Airtronic USA), in dotazione a forze ucraine."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulla famiglia di lanciagranate a propulsione razzo (RPG). Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, varianti, calibri, diffusione. Nessuna istruzione operativa, di tiro, di manipolazione tattica, di manutenzione o modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Sistema di lancio a spalla a propulsione razzo, di origine sovietica, destinato all'anti-carro a corta-media distanza (50-500 m, sino a 800 m con i modelli moderni). La RPG-7 e i suoi derivati sono il sistema anti-veicolo più diffuso al mondo. Modelli moderni (RPG-29, RPG-30, RPG-32) gestiscono blindature reattive (ERA) e protezioni attive (APS).",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "Tubo di lancio liscio (smoothbore) a 40 mm (RPG-7) — il proiettile è sovra-calibrato",
              "Razzo a due stadi: carica espulsiva (booster) e propulsore sostenitore (sustainer)",
              "Mira meccanica tradizionale o ottica PGO-7 (2.7×) standard",
              "Backblast significativo dietro al tiratore — zona di sicurezza posteriore importante",
              "Peso lanciatore RPG-7 ~7 kg, proiettile ~2.6 kg",
              "RPG-29: lanciatore ~12 kg, proiettile PG-29V tandem HEAT ~6.7 kg",
              "Ottiche moderne: 1PN51-2 notturna, ottica termica su versioni recenti",
            ],
          },
        ],
      },
      {
        heading: "Varianti principali",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibro", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Tipologie di proiettile",
        blocks: [
          {
            type: "p",
            text: "PG-7V (HEAT base), PG-7VL (HEAT migliorata), PG-7VR (tandem, anti-ERA), TBG-7V (termobarica, anti-personale/anti-fortificazione), OG-7V (HE anti-personale). La famiglia copre dottrinalmente anti-carro, anti-fortificazione, anti-personale e anti-elicottero a bassa quota. Le munizioni tandem (PG-7VR, PG-29V) sono progettate per sconfiggere ERA mediante una prima carica precursore.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "RPG-7 è onnipresente su entrambi i lati. Forze ucraine impiegano RPG-7V, RPG-22/26 monouso, RPG-32 ricevuti via aiuti, e PSRL-1/-2 americane. Forze russe usano RPG-7V, RPG-29, RPG-30 contro veicoli protetti da APS, e ampia varietà di lanciatori monouso. Le RPG sono lo strumento principale anti-veicolo della fanteria su entrambi i fronti, accanto a NLAW e Javelin.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Costo unitario molto inferiore a ATGM guidati",
              "Famiglia di proiettili copre molteplici tipologie di bersaglio",
              "Lanciatore riutilizzabile (RPG-7, RPG-29, RPG-32) — solo proiettili logistica",
              "Disponibilità globale di munizione PG-7V e cloni",
              "Indipendente da elettronica (immune a EW di base)",
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
              "Backblast posteriore esteso (~30 m) — limita uso in spazi confinati",
              "Precisione decrescente oltre i 300-500 m, fortemente influenzata dal vento",
              "Penetrazione anti-blindo limitata su carri moderni con ERA pesante",
              "Firma di lancio visibile (fumo, polvere) — espone il tiratore",
              "Non guidato — non ingaggia bersagli mobili a lunga distanza con efficacia",
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
            body: "Questa scheda è enciclopedica. Non descrive procedura di tiro, montaggio del proiettile, anti-backblast, scelta di proiettile in combattimento, manipolazione, smontaggio o manutenzione. Tali competenze richiedono addestramento militare anti-carro con istruttori certificati.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on the rocket-propelled grenade (RPG) family. Public doctrinal information only: role, nomenclature, variants, calibres, distribution. No operational, firing, tactical handling, maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Shoulder-launched rocket-propelled system of Soviet origin, intended for short-to-medium-range anti-armour engagement (50-500 m, up to 800 m on modern models). The RPG-7 and its derivatives are the most widely fielded anti-vehicle weapon in the world. Modern models (RPG-29, RPG-30, RPG-32) handle reactive armour (ERA) and active protection systems (APS).",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "Smoothbore launch tube at 40 mm (RPG-7) — projectile is over-calibre",
              "Two-stage rocket: ejection charge (booster) and sustainer",
              "Traditional iron sight or PGO-7 (2.7×) standard optic",
              "Significant backblast behind the shooter — important rear danger zone",
              "RPG-7 launcher weight ~7 kg, projectile ~2.6 kg",
              "RPG-29: launcher ~12 kg, PG-29V tandem HEAT round ~6.7 kg",
              "Modern optics: 1PN51-2 night, thermal optics on recent variants",
            ],
          },
        ],
      },
      {
        heading: "Main variants",
        blocks: [
          {
            type: "table",
            headers: ["Variant", "Calibre", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Projectile types",
        blocks: [
          {
            type: "p",
            text: "PG-7V (base HEAT), PG-7VL (improved HEAT), PG-7VR (tandem, anti-ERA), TBG-7V (thermobaric, anti-personnel/anti-fortification), OG-7V (HE anti-personnel). The family doctrinally covers anti-armour, anti-fortification, anti-personnel and low-altitude anti-helicopter roles. Tandem munitions (PG-7VR, PG-29V) are designed to defeat ERA via a precursor charge.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "RPG-7 is ubiquitous on both sides. Ukrainian forces field RPG-7V, RPG-22/26 disposables, RPG-32 received through aid, and US PSRL-1/-2. Russian forces use RPG-7V, RPG-29, RPG-30 against APS-protected vehicles, and a wide range of single-use launchers. RPGs are the principal infantry anti-vehicle tool on both fronts, alongside NLAW and Javelin.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Unit cost far below guided ATGMs",
              "Projectile family covers multiple target types",
              "Reusable launcher (RPG-7, RPG-29, RPG-32) — only rounds in logistics",
              "Global availability of PG-7V ammunition and clones",
              "Electronics-independent (baseline immune to EW)",
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
              "Extensive rear backblast (~30 m) — limits use in confined spaces",
              "Accuracy degrades past 300-500 m, heavily wind-affected",
              "Anti-armour penetration limited against modern tanks with heavy ERA",
              "Visible launch signature (smoke, dust) — exposes the shooter",
              "Unguided — cannot effectively engage long-range moving targets",
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
            body: "This entry is encyclopaedic. It does not describe firing procedure, projectile mounting, backblast safety, round selection in combat, handling, disassembly or maintenance. Those skills require certified military anti-armour training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre a família de lança-granadas a propulsão de foguete (RPG). Apenas informações doutrinárias públicas: papel, nomenclatura, variantes, calibres, distribuição. Nenhuma instrução operacional, tiro, manuseio tático, manutenção ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Sistema de lançamento a partir do ombro com propulsão por foguete, de origem soviética, destinado ao engajamento anticarro de curta a média distância (50-500 m, até 800 m em modelos modernos). A RPG-7 e seus derivados são a arma antiveículo mais difundida no mundo. Modelos modernos (RPG-29, RPG-30, RPG-32) lidam com blindagem reativa (ERA) e sistemas de proteção ativa (APS).",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "Tubo de lançamento liso (smoothbore) a 40 mm (RPG-7) — projétil é sobre-calibre",
              "Foguete de dois estágios: carga de ejeção (booster) e sustentador",
              "Mira de ferro tradicional ou ótica PGO-7 (2,7×) padrão",
              "Backblast significativo atrás do atirador — importante zona de perigo traseira",
              "Peso do lançador RPG-7 ~7 kg, projétil ~2,6 kg",
              "RPG-29: lançador ~12 kg, projétil PG-29V tandem HEAT ~6,7 kg",
              "Óticas modernas: 1PN51-2 noturna, óticas termais em variantes recentes",
            ],
          },
        ],
      },
      {
        heading: "Variantes principais",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Tipos de projétil",
        blocks: [
          {
            type: "p",
            text: "PG-7V (HEAT base), PG-7VL (HEAT melhorado), PG-7VR (tandem, anti-ERA), TBG-7V (termobárico, antipessoal/antifortificação), OG-7V (HE antipessoal). A família cobre doutrinariamente anticarro, antifortificação, antipessoal e antihelicóptero a baixa altitude. Munições tandem (PG-7VR, PG-29V) são projetadas para derrotar ERA via uma carga precursora.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "RPG-7 é onipresente em ambos os lados. Forças ucranianas empregam RPG-7V, descartáveis RPG-22/26, RPG-32 recebidas via assistência, e PSRL-1/-2 americanas. Forças russas usam RPG-7V, RPG-29, RPG-30 contra veículos com APS, e ampla variedade de lançadores descartáveis. RPGs são a principal ferramenta antiveículo de infantaria em ambos os frontes, ao lado de NLAW e Javelin.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Custo unitário muito inferior a ATGM guiados",
              "Família de projéteis cobre múltiplos tipos de alvo",
              "Lançador reutilizável (RPG-7, RPG-29, RPG-32) — apenas munição em logística",
              "Disponibilidade global de munição PG-7V e clones",
              "Independente de eletrônica (imune a EW básico)",
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
              "Backblast traseiro extenso (~30 m) — limita uso em espaços confinados",
              "Precisão degrada além de 300-500 m, fortemente afetada pelo vento",
              "Penetração anticarro limitada contra carros modernos com ERA pesada",
              "Assinatura de lançamento visível (fumaça, poeira) — expõe o atirador",
              "Não guiado — não engaja eficazmente alvos móveis a longa distância",
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
            body: "Este verbete é enciclopédico. Não descreve procedimento de tiro, montagem do projétil, segurança anti-backblast, seleção de munição em combate, manuseio, desmontagem ou manutenção. Essas competências exigem treinamento militar anticarro com instrutores certificados.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur la famille des lance-roquettes (RPG). Informations doctrinales publiques uniquement : rôle, nomenclature, variantes, calibres, diffusion. Aucune instruction opérationnelle, de tir, de manipulation tactique, de maintenance ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Système de lancement à l'épaule à propulsion par fusée, d'origine soviétique, destiné à l'engagement antichar à courte et moyenne distance (50-500 m, jusqu'à 800 m sur les modèles modernes). La RPG-7 et ses dérivés sont l'arme antivéhicule la plus répandue au monde. Les modèles modernes (RPG-29, RPG-30, RPG-32) gèrent les blindages réactifs (ERA) et les systèmes de protection active (APS).",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "Tube de lancement lisse (smoothbore) à 40 mm (RPG-7) — le projectile est sur-calibre",
              "Fusée à deux étages : charge d'éjection (booster) et soutien (sustainer)",
              "Hausse-guidon traditionnels ou optique PGO-7 (2,7×) standard",
              "Backblast significatif derrière le tireur — zone de danger arrière importante",
              "Poids lanceur RPG-7 ~7 kg, projectile ~2,6 kg",
              "RPG-29 : lanceur ~12 kg, projectile PG-29V tandem HEAT ~6,7 kg",
              "Optiques modernes : 1PN51-2 nocturne, optiques thermiques sur variantes récentes",
            ],
          },
        ],
      },
      {
        heading: "Variantes principales",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Types de projectile",
        blocks: [
          {
            type: "p",
            text: "PG-7V (HEAT base), PG-7VL (HEAT amélioré), PG-7VR (tandem, anti-ERA), TBG-7V (thermobarique, antipersonnel/antifortification), OG-7V (HE antipersonnel). La famille couvre doctrinalement antichar, antifortification, antipersonnel et antihélicoptère à basse altitude. Les munitions tandem (PG-7VR, PG-29V) sont conçues pour vaincre l'ERA via une charge précurseur.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La RPG-7 est omniprésente des deux côtés. Les forces ukrainiennes emploient RPG-7V, RPG-22/26 jetables, RPG-32 reçues via assistance, et PSRL-1/-2 américaines. Les forces russes utilisent RPG-7V, RPG-29, RPG-30 contre les véhicules protégés par APS, et une large gamme de lanceurs à usage unique. Les RPG sont l'outil principal antivéhicule de l'infanterie sur les deux fronts, aux côtés des NLAW et Javelin.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Coût unitaire largement inférieur aux ATGM guidés",
              "Famille de projectiles couvrant multiples types de cibles",
              "Lanceur réutilisable (RPG-7, RPG-29, RPG-32) — seulement munitions en logistique",
              "Disponibilité globale de munitions PG-7V et clones",
              "Indépendant de l'électronique (immun de base à la guerre électronique)",
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
              "Backblast arrière étendu (~30 m) — limite l'usage en espaces confinés",
              "Précision dégradée au-delà de 300-500 m, fortement affectée par le vent",
              "Pénétration antichar limitée contre les chars modernes à ERA lourde",
              "Signature de lancement visible (fumée, poussière) — expose le tireur",
              "Non guidé — n'engage pas efficacement les cibles mobiles à longue distance",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédure de tir, ni montage du projectile, ni sécurité backblast, ni choix de munition au combat, ni manipulation, ni démontage, ni maintenance. Ces compétences exigent un entraînement militaire antichar avec instructeurs certifiés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
