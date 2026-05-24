import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["PK", "7.62×54R", "1961", "Versione originale Kalashnikov, base della famiglia. Più pesante della PKM."],
  ["PKS", "7.62×54R", "1961", "Versione PK su treppiede Stepanov-Baryshev — ruolo di mitragliatrice media sostenuta."],
  ["PKM", "7.62×54R", "1969", "Modernizzata, alleggerita di ~1.5 kg, canna intercambiabile semplificata."],
  ["PKMS", "7.62×54R", "1969", "PKM con treppiede 6T5 per impiego sostenuto."],
  ["PKT", "7.62×54R", "1962", "Versione co-assiale per veicoli corazzati (T-72, BMP, BTR). Canna pesante, comando elettrico."],
  ["PKP Pecheneg", "7.62×54R", "1999", "Modernizzazione russa con canna a raffreddamento forzato (aria), niente cambio canna."],
  ["UKM-2000P", "7.62×51 NATO", "2000", "Variante polacca in calibro NATO 7.62×51 — derivata dalla PKM."],
  ["KKMz / Cugir", "7.62×54R", "1980s", "Cloni rumeni e bulgari, ampiamente esportati e visti in dotazione UA."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulla mitragliatrice PK/PKM. Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, varianti, calibro, diffusione. Nessuna istruzione operativa, di manipolazione, di manutenzione interna o di modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Mitragliatrice general-purpose (GPMG) sovietica progettata da Mikhail Kalashnikov, in dotazione a livello di squadra e plotone della fanteria post-sovietica. Cartuccia 7.62×54R, alimentazione a nastro non disintegrabile. Rappresenta lo standard sovietico/russo di supporto-fuoco a livello squadra dal 1961 in poi.",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "Otturatore rotante a corsa lunga, presa di gas regolabile",
              "Alimentazione a nastro metallico non disintegrabile, capacità tipica 100-200-250 cartucce",
              "Canna intercambiabile per gestire surriscaldamento",
              "Mire meccaniche tipo AK, tacche fino a ~1500 m",
              "Bipiede integrato sotto la volata; treppiede separato (PKS/PKMS) per ruolo sostenuto",
              "Peso PKM: ~7.5 kg vuota; PKP Pecheneg ~8.2 kg",
              "Cadenza di tiro nominale 650-750 colpi/min",
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
        heading: "Calibro e munizionamento",
        blocks: [
          {
            type: "p",
            text: "7.62×54R è una cartuccia a bordino sviluppata nel 1891 per il fucile Mosin-Nagant. Rimane in servizio in PKM, SVD e altre piattaforme. Munizioni LPS (palla d'acciaio), 7N1/7N14 (match), B-32 (perforante incendiaria), T-46 (traccianti) circolano largamente negli arsenali ex-sovietici. La cartuccia full-power permette ingaggi efficaci oltre i 1000 m con canna piena.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "PKM e Pecheneg sono onnipresenti su entrambi i lati del fronte ucraino. La PKM resta la GPMG di squadra ucraina standard, affiancata dove disponibili da FN MAG (M240) e PKM modernizzate (KM-7.62). Unità russe usano PKM, PKP Pecheneg, e installazioni PKT su veicoli corazzati. Volontari internazionali devono saperla riconoscere come arma amica e ostile.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Affidabilità in condizioni estreme di sporco, gelo, fango",
              "Canna intercambiabile per cadenza sostenuta",
              "Munizione 7.62×54R ampiamente disponibile negli arsenali ex-URSS",
              "Peso contenuto rispetto a GPMG NATO equivalenti (PKM più leggera della M240)",
              "Volume di fuoco efficace fino a 800-1000 m con nastro 250",
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
              "Cartuccia a bordino — alimentazione push-out più complessa del calibro NATO 7.62×51",
              "Ergonomia datata su PKM standard (no rail picatinny, calcio fisso)",
              "Mire iron meno adatte a ottica di precisione sulle versioni vintage",
              "Cassetta di nastro voluminosa — logistica più ingombrante",
              "Rinculo significativo se tirata fuori bipiede senza supporto sostenuto",
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
            body: "Questa scheda è enciclopedica. Non descrive smontaggio, cambio canna, gestione di malfunzionamenti, manipolazione tattica, tiro reale o modifiche. Tali competenze richiedono addestramento militare con istruttori certificati.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on the PK/PKM machine gun. Public doctrinal information only: role, nomenclature, variants, calibre, distribution. No operational, handling, internal maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Soviet general-purpose machine gun (GPMG) designed by Mikhail Kalashnikov, fielded at squad and platoon level across post-Soviet infantry. 7.62×54R cartridge, non-disintegrating belt feed. Standard Soviet/Russian squad-level fire support since 1961.",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "Long-stroke rotating bolt, adjustable gas regulator",
              "Non-disintegrating metallic belt feed, typically 100/200/250 rounds",
              "Quick-change barrel for sustained-rate management",
              "Iron sights AK-style, leaf graduated to ~1500 m",
              "Integral bipod under the muzzle; separate tripod (PKS/PKMS) for sustained role",
              "PKM weight: ~7.5 kg empty; PKP Pecheneg ~8.2 kg",
              "Nominal rate of fire 650-750 rpm",
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
        heading: "Calibre and ammunition",
        blocks: [
          {
            type: "p",
            text: "7.62×54R is a rimmed cartridge developed in 1891 for the Mosin-Nagant rifle. Still in service across PKM, SVD and other platforms. LPS ammunition (steel-core), 7N1/7N14 (match), B-32 (armour-piercing incendiary), T-46 (tracer) circulate widely across ex-Soviet stocks. The full-power cartridge supports effective engagement past 1000 m with full-length barrel.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "PKM and Pecheneg are ubiquitous on both sides of the Ukrainian front. PKM remains the standard Ukrainian squad GPMG, supplemented where available by FN MAG (M240) and modernised Ukrainian PKM (KM-7.62). Russian units field PKM, PKP Pecheneg, and PKT coaxial mounts on armoured vehicles. International volunteers must recognise it as both friendly and hostile system.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Reliability under dirt, freeze and mud",
              "Quick-change barrel for sustained rate",
              "7.62×54R ammunition widely available across ex-USSR stocks",
              "Lighter than equivalent NATO GPMGs (PKM lighter than M240)",
              "Effective volume of fire to 800-1000 m with 250-round belt",
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
              "Rimmed cartridge — push-out feed mechanism more complex than NATO 7.62×51",
              "Dated baseline ergonomics on PKM (no Picatinny, fixed stock)",
              "Iron sights less suited to precision optics on vintage versions",
              "Bulky belt boxes — heavier logistics footprint",
              "Significant recoil if fired off-bipod without sustained support",
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
            body: "This entry is encyclopaedic. It does not describe disassembly, barrel changes, malfunction handling, tactical employment, live fire or modifications. Those skills require military training with certified instructors.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre a metralhadora PK/PKM. Apenas informações doutrinárias públicas: papel, nomenclatura, variantes, calibre, distribuição. Nenhuma instrução operacional, manuseio, manutenção interna ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Metralhadora de uso geral (GPMG) soviética projetada por Mikhail Kalashnikov, dotada em nível de esquadrão e pelotão na infantaria pós-soviética. Cartucho 7,62×54R, alimentação por fita não desintegrável. Padrão soviético/russo de apoio de fogo em esquadrão desde 1961.",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "Ferrolho rotativo de curso longo, regulador de gás ajustável",
              "Alimentação por fita metálica não desintegrável, tipicamente 100/200/250 cartuchos",
              "Cano intercambiável para gerenciar cadência sustentada",
              "Miras de ferro estilo AK, alça graduada a ~1500 m",
              "Bipé integrado sob a boca; tripé separado (PKS/PKMS) para papel sustentado",
              "Peso PKM: ~7,5 kg vazia; PKP Pecheneg ~8,2 kg",
              "Cadência nominal 650-750 disparos/min",
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
        heading: "Calibre e munição",
        blocks: [
          {
            type: "p",
            text: "7,62×54R é um cartucho com aro desenvolvido em 1891 para o fuzil Mosin-Nagant. Ainda em serviço em PKM, SVD e outras plataformas. Munições LPS (núcleo de aço), 7N1/7N14 (match), B-32 (perfurante incendiária), T-46 (traçante) circulam amplamente nos estoques ex-soviéticos. O cartucho full-power permite engajamento eficaz além de 1000 m com cano de comprimento total.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "PKM e Pecheneg são onipresentes em ambos os lados do front ucraniano. A PKM permanece a GPMG de esquadrão ucraniana padrão, complementada onde disponível por FN MAG (M240) e PKM ucranianas modernizadas (KM-7.62). Unidades russas usam PKM, PKP Pecheneg, e montagens coaxiais PKT em veículos blindados. Voluntários internacionais devem reconhecê-la como sistema amigo e hostil.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Confiabilidade em sujeira, frio extremo, lama",
              "Cano intercambiável para cadência sustentada",
              "Munição 7,62×54R amplamente disponível nos estoques ex-URSS",
              "Mais leve que GPMG OTAN equivalentes (PKM mais leve que M240)",
              "Volume de fogo eficaz até 800-1000 m com fita de 250",
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
              "Cartucho com aro — mecanismo de alimentação push-out mais complexo que 7,62×51 OTAN",
              "Ergonomia base datada na PKM (sem Picatinny, coronha fixa)",
              "Miras de ferro menos adequadas a óticas de precisão em versões antigas",
              "Caixas de fita volumosas — logística mais pesada",
              "Recuo significativo se atirada sem bipé apoiado",
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
            body: "Este verbete é enciclopédico. Não descreve desmontagem, troca de cano, manejo de panes, manuseio tático, tiro real ou modificações. Tais competências exigem treinamento militar com instrutores certificados.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur la mitrailleuse PK/PKM. Informations doctrinales publiques uniquement : rôle, nomenclature, variantes, calibre, diffusion. Aucune instruction opérationnelle, de manipulation, de maintenance interne ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Mitrailleuse polyvalente (GPMG) soviétique conçue par Mikhaïl Kalachnikov, en dotation au niveau du groupe et de la section dans l'infanterie post-soviétique. Cartouche 7,62×54R, alimentation par bande non désintégrable. Standard soviétique/russe d'appui-feu au niveau groupe depuis 1961.",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "Culasse rotative à course longue, régulateur de gaz ajustable",
              "Alimentation par bande métallique non désintégrable, typiquement 100/200/250 cartouches",
              "Canon interchangeable pour gérer la cadence soutenue",
              "Hausse et guidon style AK, graduée à ~1500 m",
              "Bipied intégré sous la bouche ; trépied séparé (PKS/PKMS) pour rôle soutenu",
              "Poids PKM : ~7,5 kg à vide ; PKP Pecheneg ~8,2 kg",
              "Cadence nominale 650-750 coups/min",
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
        heading: "Calibre et munition",
        blocks: [
          {
            type: "p",
            text: "7,62×54R est une cartouche à bourrelet développée en 1891 pour le Mosin-Nagant. Toujours en service sur PKM, SVD et autres plateformes. Munitions LPS (noyau acier), 7N1/7N14 (match), B-32 (perforante incendiaire), T-46 (traçante) circulent largement dans les stocks ex-soviétiques. La cartouche full-power permet un engagement efficace au-delà de 1000 m avec canon plein.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "PKM et Pecheneg sont omniprésentes des deux côtés du front ukrainien. La PKM reste la GPMG de groupe standard ukrainienne, complétée là où disponible par FN MAG (M240) et PKM ukrainiennes modernisées (KM-7.62). Les unités russes utilisent PKM, PKP Pecheneg, et montages coaxiaux PKT sur véhicules blindés. Les volontaires internationaux doivent la reconnaître comme système ami et hostile.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Fiabilité en saleté, gel extrême, boue",
              "Canon interchangeable pour cadence soutenue",
              "Munitions 7,62×54R largement disponibles dans les stocks ex-URSS",
              "Plus légère que les GPMG OTAN équivalentes (PKM plus légère que M240)",
              "Volume de feu efficace jusqu'à 800-1000 m avec bande de 250",
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
              "Cartouche à bourrelet — mécanisme push-out plus complexe que 7,62×51 OTAN",
              "Ergonomie de base datée sur PKM (pas de Picatinny, crosse fixe)",
              "Hausse-guidon moins adaptés aux optiques de précision sur versions anciennes",
              "Caisses de bande volumineuses — empreinte logistique plus lourde",
              "Recul significatif si tirée sans appui bipied soutenu",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni démontage, ni changement de canon, ni résolution de pannes, ni manipulation tactique, ni tir réel, ni modifications. Ces compétences exigent un entraînement militaire avec instructeurs certifiés.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
