import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const TIER1: ReadonlyArray<ReadonlyArray<string>> = [
  ["Body armor", "Plate carrier + plates Level IV (NIJ) o equivalente"],
  ["Helmet", "Bump/ballistic con mount NVG, ear-pro elettronico"],
  ["Comms", "Radio tattica (PRR/inter-team) + push-to-talk"],
  ["IFAK", "Tourniquet ×2, packing gauze, chest seal, NPA, decompression needle"],
  ["Hydration", "Idratazione ≥ 3 L (camelback + bottiglie)"],
  ["NVG", "Almeno monoculare; binoculare/quad migliore"],
  ["Optics", "Red dot + magnifier o LPVO 1-6/1-8"],
  ["Light/IR", "Torcia/laser IR per uso con NVG"],
  ["Weapon", "Carabina + magazzini ×7 (210 colpi minimo)"],
  ["Sidearm (se ammesso)", "Pistola + 2 magazzini"],
];

const TIER2: ReadonlyArray<ReadonlyArray<string>> = [
  ["Pack assault", "Zaino 30–40 L per missione 24–72 h"],
  ["Sleep system", "Sacco + tarp/bivvy adatto a temperatura"],
  ["Food", "Razioni 3 000 kcal/giorno, leggere"],
  ["Layers", "Shell waterproof, mid-layer, base layer wool/sintetico"],
  ["Boots", "Calzature militari rotte e provate prima del deployment"],
  ["Gloves", "Combat + winter, tattili compatibili con armi"],
  ["Camo", "Multicam o equivalente al teatro (no atacs/digital sovietico)"],
  ["Knife", "Coltello fisso utility"],
  ["Power", "Power bank + cavi per radio, GPS, NVG"],
  ["Compass / map", "Compasso magnetico + carta TOPO impermeabile"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "L'equipaggiamento individuale di un volontario internazionale si organizza in due tier: equipaggiamento da combattimento (sempre indossato in operazione) ed equipaggiamento di sostentamento (zaino, sopravvivenza, vita in posizione). Il principio guida è: ogni grammo si paga in fatica; ogni oggetto mancante si paga in capacità. Il compromesso si fa con esperienza, non con liste online.",
    sections: [
      {
        heading: "Tier 1 — Fighting load",
        blocks: [
          {
            type: "p",
            text: "Sempre indossato in operazione. Peso target ≤ 18 kg incluso armamento, idratazione e munizioni. Sopra questo limite la mobilità degrada significativamente.",
          },
          {
            type: "table",
            headers: ["Voce", "Specifica minima"],
            rows: TIER1,
          },
        ],
      },
      {
        heading: "Tier 2 — Sustainment load",
        blocks: [
          {
            type: "p",
            text: "Zaino per missione di durata. Peso target ≤ 20 kg in aggiunta al fighting load. Sopra 35 kg complessivi la marcia diventa insostenibile su distanze utili.",
          },
          {
            type: "table",
            headers: ["Voce", "Specifica minima"],
            rows: TIER2,
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Acquistare equipaggiamento estetico (gucci kit) trascurando IFAK e idratazione",
              "Boots non rotti — vesciche bloccanti al primo giorno di marcia",
              "NVG senza redundancy di batteria (CR123 ×4 minimo nel kit)",
              "Body armor senza placche balistiche reali (soft armor da solo non ferma 7.62×39)",
              "Carabina con ottica non zerata o senza red dot di backup",
              "Patch identificative nazionali / unità — OPSEC fail",
              "Camo non adatto al teatro (digital americano in zona boschiva ucraina)",
            ],
          },
        ],
      },
      {
        heading: "Manutenzione",
        blocks: [
          {
            type: "ul",
            items: [
              "Armi: pulizia parziale ogni 24 h, completa ogni 72 h o dopo immersione",
              "Radio: carica batterie ogni notte, controllo cavetti ogni mattina",
              "Ottica/NVG: lente pulita prima e dopo ogni missione, batterie ricambio",
              "Plate carrier: ispezione cuciture e velcro settimanale",
              "Boots: asciugatura ogni notte, ricambio quotidiano calze",
              "IFAK: controllo integrità mensile, sostituzione consumabili scaduti",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "L'equipaggiamento ottimale al fronte ucraino si è stabilizzato attorno a: multicam, plate carrier ≤ 4 kg, helmet ballistic con mount NVG dedicato, NVG binoculare di qualità media (PVS-14 ×2 o PVS-31), radio cifrata UA standard, IFAK al fianco di assalto, layer di lana merino. Gli errori più comuni dei volontari nuovi sono: peso eccessivo (zaino > 25 kg), patch identificative, boots non rotti. L'equipaggiamento minimalista ma affidabile dura più a lungo del 'maximalist tactical bro' kit. Spendere su placche, IFAK, NVG e boots prima di qualsiasi altra cosa.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "An international volunteer's personal kit is organised in two tiers: fighting load (always worn in operation) and sustainment load (pack, survival, position life). Guiding principle: every gram is paid in fatigue; every missing item is paid in capability. The compromise is made by experience, not by online lists.",
    sections: [
      {
        heading: "Tier 1 — Fighting load",
        blocks: [
          {
            type: "p",
            text: "Always worn in operation. Target weight ≤ 18 kg including weapon, hydration and ammunition. Above this, mobility degrades significantly.",
          },
          {
            type: "table",
            headers: ["Item", "Minimum spec"],
            rows: TIER1,
          },
        ],
      },
      {
        heading: "Tier 2 — Sustainment load",
        blocks: [
          {
            type: "p",
            text: "Pack for sustained missions. Target weight ≤ 20 kg in addition to fighting load. Above 35 kg total, sustained marching becomes unfeasible.",
          },
          {
            type: "table",
            headers: ["Item", "Minimum spec"],
            rows: TIER2,
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Buying aesthetic kit (gucci kit) neglecting IFAK and hydration",
              "Unbroken boots — blisters disabling the first march day",
              "NVG without battery redundancy (minimum CR123 ×4 in kit)",
              "Plate carrier without real ballistic plates (soft armour alone won't stop 7.62×39)",
              "Carbine with unzeroed optic or no backup red dot",
              "National / unit identification patches — OPSEC fail",
              "Camo not matched to theatre (US digital in Ukrainian woodland)",
            ],
          },
        ],
      },
      {
        heading: "Maintenance",
        blocks: [
          {
            type: "ul",
            items: [
              "Weapons: partial clean every 24 h, full every 72 h or after immersion",
              "Radios: charge every night, cable check every morning",
              "Optic / NVG: lens cleaned before and after every mission, spare batteries",
              "Plate carrier: weekly inspection of stitching and velcro",
              "Boots: dry every night, daily sock rotation",
              "IFAK: monthly integrity check, replace expired consumables",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Optimal kit on the Ukrainian front has stabilised around: multicam, plate carrier ≤ 4 kg, ballistic helmet with dedicated NVG mount, mid-quality binocular NVG (PVS-14 ×2 or PVS-31), encrypted UA-standard radio, IFAK on the assault side, merino wool layers. The most common new-volunteer errors: excess weight (pack > 25 kg), identifying patches, unbroken boots. Minimalist but reliable kit lasts longer than 'maximalist tactical bro' kit. Spend on plates, IFAK, NVG and boots before anything else.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O equipamento individual de um voluntário internacional se organiza em dois tiers: equipamento de combate (sempre vestido em operação) e equipamento de sustentação (mochila, sobrevivência, vida em posição). Princípio guia: cada grama se paga em fadiga; cada item ausente se paga em capacidade. O compromisso se faz com experiência, não com listas online.",
    sections: [
      {
        heading: "Tier 1 — Fighting load",
        blocks: [
          {
            type: "p",
            text: "Sempre vestido em operação. Peso alvo ≤ 18 kg incluindo arma, hidratação e munição. Acima disso, a mobilidade degrada significativamente.",
          },
          {
            type: "table",
            headers: ["Item", "Especificação mínima"],
            rows: TIER1,
          },
        ],
      },
      {
        heading: "Tier 2 — Sustainment load",
        blocks: [
          {
            type: "p",
            text: "Mochila para missão prolongada. Peso alvo ≤ 20 kg adicional ao fighting load. Acima de 35 kg total, marcha sustentada se torna inviável.",
          },
          {
            type: "table",
            headers: ["Item", "Especificação mínima"],
            rows: TIER2,
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Comprar equipamento estético (gucci kit) negligenciando IFAK e hidratação",
              "Botas não amaciadas — bolhas incapacitantes no primeiro dia",
              "NVG sem redundância de bateria (mínimo CR123 ×4 no kit)",
              "Plate carrier sem placas balísticas reais (soft armor sozinho não para 7,62×39)",
              "Carabina com ótica não zerada ou sem red dot de reserva",
              "Patches nacionais / de unidade — falha OPSEC",
              "Camuflagem inadequada ao teatro (digital US em mata ucraniana)",
            ],
          },
        ],
      },
      {
        heading: "Manutenção",
        blocks: [
          {
            type: "ul",
            items: [
              "Armas: limpeza parcial a cada 24 h, completa a cada 72 h ou após imersão",
              "Rádios: carregar baterias toda noite, conferir cabos toda manhã",
              "Ótica / NVG: lente limpa antes e depois de cada missão, baterias reserva",
              "Plate carrier: inspeção semanal de costuras e velcro",
              "Botas: secar toda noite, troca diária de meias",
              "IFAK: checagem mensal de integridade, substituição de consumíveis vencidos",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O kit ideal no front ucraniano se estabilizou em: multicam, plate carrier ≤ 4 kg, capacete balístico com mount NVG dedicado, NVG binocular de qualidade média (PVS-14 ×2 ou PVS-31), rádio cifrado padrão UA, IFAK no lado de assalto, camadas em lã merino. Erros mais comuns de novos voluntários: peso excessivo (mochila > 25 kg), patches identificadores, botas não amaciadas. Kit minimalista mas confiável dura mais que o 'tactical bro maximalist'. Gastar em placas, IFAK, NVG e botas antes de qualquer outra coisa.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "L'équipement individuel d'un volontaire international s'organise en deux tiers : équipement de combat (toujours porté en opération) et équipement de subsistance (sac, survie, vie en position). Principe directeur : chaque gramme se paie en fatigue ; chaque objet manquant se paie en capacité. Le compromis se fait avec l'expérience, pas avec des listes en ligne.",
    sections: [
      {
        heading: "Tier 1 — Fighting load",
        blocks: [
          {
            type: "p",
            text: "Toujours porté en opération. Poids cible ≤ 18 kg armement, hydratation et munitions inclus. Au-dessus, la mobilité se dégrade nettement.",
          },
          {
            type: "table",
            headers: ["Article", "Spec minimale"],
            rows: TIER1,
          },
        ],
      },
      {
        heading: "Tier 2 — Sustainment load",
        blocks: [
          {
            type: "p",
            text: "Sac pour mission de durée. Poids cible ≤ 20 kg en plus du fighting load. Au-dessus de 35 kg total, la marche soutenue devient irréaliste.",
          },
          {
            type: "table",
            headers: ["Article", "Spec minimale"],
            rows: TIER2,
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Acheter de l'équipement esthétique (gucci kit) en négligeant IFAK et hydratation",
              "Boots non rodés — ampoules invalidantes au premier jour de marche",
              "NVG sans redondance de pile (minimum CR123 ×4 dans le kit)",
              "Plate carrier sans plaques balistiques réelles (soft armor seul n'arrête pas le 7,62×39)",
              "Carabine avec optique non zérotée ou sans red dot de secours",
              "Patches nationaux / d'unité — échec OPSEC",
              "Camo inadapté au théâtre (digital US en sous-bois ukrainien)",
            ],
          },
        ],
      },
      {
        heading: "Maintenance",
        blocks: [
          {
            type: "ul",
            items: [
              "Armes : nettoyage partiel toutes les 24 h, complet toutes les 72 h ou après immersion",
              "Radios : charge chaque nuit, vérification câbles chaque matin",
              "Optique / NVG : lentille propre avant et après chaque mission, piles de rechange",
              "Plate carrier : inspection hebdomadaire des coutures et velcro",
              "Boots : séchage chaque nuit, rotation quotidienne des chaussettes",
              "IFAK : vérification mensuelle de l'intégrité, remplacement des consommables périmés",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "L'équipement optimal sur le front ukrainien s'est stabilisé autour de : multicam, plate carrier ≤ 4 kg, casque balistique avec mount NVG dédié, NVG binoculaire de gamme moyenne (PVS-14 ×2 ou PVS-31), radio chiffrée standard UA, IFAK côté assaut, couches en laine mérinos. Les erreurs les plus fréquentes des nouveaux volontaires : surcharge (sac > 25 kg), patches identifiants, boots non rodés. Un kit minimaliste mais fiable dure plus longtemps que le « tactical bro maximaliste ». Investir dans plaques, IFAK, NVG et boots avant toute autre chose.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
