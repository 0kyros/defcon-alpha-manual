import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["M249 / FN Minimi", "5.56×45 NATO — LMG", "1984 / 1974", "Mitragliatrice leggera di squadra NATO, alimentazione a nastro o caricatore STANAG, ~8.5 kg."],
  ["RPK / RPK-74", "7.62×39 / 5.45×39 — LMG", "1961 / 1974", "Mitragliatrice leggera sovietica derivata da AK, caricatore 40-75 colpi, no cambio canna."],
  ["FN MAG / M240", "7.62×51 NATO — GPMG", "1958 / 1977", "GPMG standard NATO, nastro 100/200/250, canna intercambiabile, ~12 kg."],
  ["PKM / PKP Pecheneg", "7.62×54R — GPMG", "1969 / 1999", "GPMG sovietica/russa, standard post-sovietico. Vedi scheda dedicata PKM."],
  ["HK MG3 / Rheinmetall", "7.62×51 NATO — GPMG", "1959", "Erede tedesca della MG42, alta cadenza (~1100-1300 rpm), ancora in dotazione."],
  ["M2 Browning", "12.7×99 NATO (.50 BMG) — HMG", "1933", "Mitragliatrice pesante più longeva al mondo, montaggio veicolare e treppiede M3."],
  ["DShK / DShKM", "12.7×108 — HMG", "1938 / 1946", "HMG sovietica, montaggio veicolare, anti-aerea e anti-personale a distanza estesa."],
  ["NSV / Kord", "12.7×108 — HMG", "1971 / 1998", "Sostituti della DShK in unità russe moderne, Kord retroffittabile su torrette."],
  ["MK 19 / AGS-17 Plamya", "40×53 / 30×29 — AGL", "1968 / 1971", "Lanciagranate automatici, raffiche di granate HE/HEDP a 1.5-2.2 km."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulle famiglie di mitragliatrici impiegate in Ucraina. Solo informazioni dottrinali pubbliche: categorie, ruolo, calibri, varianti, diffusione. Nessuna istruzione operativa, di tiro, di gestione di canna, di manipolazione tattica o manutenzione.",
    sections: [
      {
        heading: "Categorie e ruolo",
        blocks: [
          {
            type: "p",
            text: "Le mitragliatrici sono classificate per ruolo e calibro. La mitragliatrice leggera (LMG, Light Machine Gun) opera a livello squadra in calibro intermedio (5.56/5.45). La mitragliatrice general-purpose (GPMG) opera a livello squadra/sezione in calibro full-power (7.62×51 / 7.62×54R). La mitragliatrice pesante (HMG, Heavy Machine Gun) opera in calibro 12.7 mm, tipicamente da montaggio fisso o veicolare, per supporto anti-personale a distanza, anti-veicoli leggeri e ruolo anti-aereo a bassa quota.",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "LMG (5.56/5.45): peso 7-8.5 kg, nastro o caricatore, ruolo di base of fire di squadra",
              "GPMG (7.62×51 / 7.62×54R): peso 9-12 kg, nastro, canna intercambiabile, ruolo medio",
              "HMG (12.7): peso 25-40 kg + treppiede, range efficace fino a 1800 m anti-personale, 2000 m anti-veicolo",
              "AGL (automatic grenade launcher): 40×53 (USA) o 30×29 (RUS), raffiche di granate HE/HEDP",
              "Alimentazione: nastro disintegrabile (NATO) o non disintegrabile (post-sovietico)",
              "Cadenza: 700-1300 rpm tipica, MG3 fino a 1300 rpm",
              "Montaggio: bipiede integrato, treppiede separato per sostenuto, montaggio veicolare",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Calibro / Categoria", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibro vs ruolo tattico",
        blocks: [
          {
            type: "p",
            text: "Calibro intermedio (5.56/5.45) — squadra di fanteria leggera, dispiegamento rapido, range pratico fino a 600 m. Full-power (7.62×51/7.62×54R) — supporto plotone/sezione, range pratico 800-1200 m, peso e logistica maggiori. 12.7 mm — supporto pesante, anti-materiel, anti-aereo a bassa quota, range 1500-2000 m. 40×53/30×29 AGL — saturazione di area, indiretto a 1.5-2.2 km, contro fanteria allo scoperto.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Forze ucraine impiegano PKM/PKMS come GPMG principale, FN MAG (M240B), M249 ricevuti via aiuti, RPK/RPK-74 di legacy, e Browning M2 su veicoli e postazioni fisse. Forze russe usano PKM, Pecheneg, RPK-74, NSV/Kord 12.7, DShK in unità irregolari/LDPR, AGS-17 Plamya 30 mm. Il fuoco di GPMG su trincea è uno strumento centrale e continuo della guerra di posizione attuale.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Volume di fuoco sostenibile — più alto di qualsiasi arma individuale",
              "Capacità di soppressione su area, non solo su bersaglio puntuale",
              "Canna intercambiabile (GPMG/HMG) consente cadenza sostenuta",
              "HMG copre il gap tra mitragliatrice e cannone leggero",
              "AGL produce effetto di saturazione a 2 km",
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
              "Peso e logistica del munizionamento sostenuto",
              "Surriscaldamento canna in raffiche prolungate (gestione necessaria)",
              "Firma di lancio (fumo, suono) — bersaglio prioritario per nemico",
              "HMG fissa è bersaglio identificabile da drone ISR — vita media breve in trincea",
              "Operatore esposto in postazione frontale tradizionale",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di tiro, gestione di canna, raffiche di soppressione, manipolazione tattica, smontaggio o manutenzione interna. Tali competenze richiedono addestramento militare specialistico.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on the machine-gun families employed in Ukraine. Public doctrinal information only: categories, role, calibres, variants, distribution. No operational, firing, barrel-management, tactical handling or maintenance instruction.",
    sections: [
      {
        heading: "Categories and role",
        blocks: [
          {
            type: "p",
            text: "Machine guns are classified by role and calibre. The light machine gun (LMG) operates at squad level in intermediate calibre (5.56/5.45). The general-purpose machine gun (GPMG) operates at squad/section level in full-power calibre (7.62×51 / 7.62×54R). The heavy machine gun (HMG) operates in 12.7 mm calibre, typically from fixed or vehicle mounts, for long-range anti-personnel support, anti-light-vehicle and low-altitude air-defence roles.",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "LMG (5.56/5.45): 7-8.5 kg, belt or magazine, base-of-fire role at squad level",
              "GPMG (7.62×51 / 7.62×54R): 9-12 kg, belt, quick-change barrel, medium support role",
              "HMG (12.7): 25-40 kg + tripod, effective range up to 1800 m anti-personnel, 2000 m anti-vehicle",
              "AGL (automatic grenade launcher): 40×53 (USA) or 30×29 (RUS), HE/HEDP grenade bursts",
              "Feed: disintegrating belt (NATO) or non-disintegrating (post-Soviet)",
              "Rate of fire: 700-1300 rpm typical, MG3 up to 1300 rpm",
              "Mount: integral bipod, separate tripod for sustained role, vehicle mount",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Calibre / Category", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs tactical role",
        blocks: [
          {
            type: "p",
            text: "Intermediate calibre (5.56/5.45) — light infantry squad, rapid deployment, practical range to 600 m. Full-power (7.62×51/7.62×54R) — platoon/section support, practical range 800-1200 m, higher weight and logistics. 12.7 mm — heavy support, anti-materiel, low-altitude anti-air, range 1500-2000 m. 40×53/30×29 AGL — area saturation, indirect at 1.5-2.2 km, against exposed infantry.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian forces field PKM/PKMS as principal GPMG, FN MAG (M240B), M249 received through aid, legacy RPK/RPK-74, and Browning M2 on vehicles and fixed positions. Russian forces use PKM, Pecheneg, RPK-74, NSV/Kord 12.7, DShK in irregular/LDPR units, AGS-17 Plamya 30 mm. GPMG fire on the trench line is a central and continuous tool of current positional warfare.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Sustainable volume of fire — higher than any individual weapon",
              "Area suppression capability, not just point engagement",
              "Quick-change barrel (GPMG/HMG) supports sustained rate",
              "HMG bridges the gap between machine gun and light cannon",
              "AGL produces saturation effect to 2 km",
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
              "Weight and logistics of sustained ammunition",
              "Barrel overheating on prolonged bursts (management required)",
              "Launch signature (smoke, sound) — priority enemy target",
              "Fixed HMG is identifiable target from ISR drone — short trench life",
              "Operator exposed in traditional frontal emplacement",
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
            body: "This entry is encyclopaedic. It does not describe firing procedures, barrel management, suppression bursts, tactical handling, disassembly or internal maintenance. Those skills require specialist military training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre as famílias de metralhadoras empregadas na Ucrânia. Apenas informações doutrinárias públicas: categorias, papel, calibres, variantes, distribuição. Nenhuma instrução operacional, tiro, gestão de cano, manuseio tático ou manutenção.",
    sections: [
      {
        heading: "Categorias e papel",
        blocks: [
          {
            type: "p",
            text: "As metralhadoras são classificadas por papel e calibre. A metralhadora leve (LMG) opera em nível de esquadrão em calibre intermediário (5,56/5,45). A metralhadora de uso geral (GPMG) opera em nível esquadrão/seção em calibre full-power (7,62×51 / 7,62×54R). A metralhadora pesada (HMG) opera em calibre 12,7 mm, tipicamente em montagem fixa ou veicular, para apoio antipessoal a distância, antiveículos leves e papel antiaéreo a baixa altitude.",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "LMG (5,56/5,45): 7-8,5 kg, fita ou carregador, papel base-de-fogo de esquadrão",
              "GPMG (7,62×51 / 7,62×54R): 9-12 kg, fita, cano intercambiável, papel médio",
              "HMG (12,7): 25-40 kg + tripé, alcance efetivo até 1800 m antipessoal, 2000 m antiveículo",
              "AGL (lança-granadas automático): 40×53 (EUA) ou 30×29 (RUS), rajadas de granadas HE/HEDP",
              "Alimentação: fita desintegrável (OTAN) ou não desintegrável (pós-soviética)",
              "Cadência: 700-1300 rpm típica, MG3 até 1300 rpm",
              "Montagem: bipé integral, tripé separado para papel sustentado, montagem veicular",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Calibre / Categoria", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs papel tático",
        blocks: [
          {
            type: "p",
            text: "Calibre intermediário (5,56/5,45) — esquadrão de infantaria leve, desdobramento rápido, alcance prático até 600 m. Full-power (7,62×51/7,62×54R) — apoio pelotão/seção, alcance prático 800-1200 m, peso e logística maiores. 12,7 mm — apoio pesado, anti-material, antiaéreo a baixa altitude, alcance 1500-2000 m. 40×53/30×29 AGL — saturação de área, indireto a 1,5-2,2 km, contra infantaria descoberta.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Forças ucranianas empregam PKM/PKMS como GPMG principal, FN MAG (M240B), M249 recebidas via assistência, RPK/RPK-74 legacy, e Browning M2 em veículos e posições fixas. Forças russas usam PKM, Pecheneg, RPK-74, NSV/Kord 12,7, DShK em unidades irregulares/LDPR, AGS-17 Plamya 30 mm. O fogo de GPMG na linha de trincheira é uma ferramenta central e contínua da guerra de posição atual.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Volume de fogo sustentável — maior que qualquer arma individual",
              "Capacidade de supressão de área, não apenas engajamento pontual",
              "Cano intercambiável (GPMG/HMG) suporta cadência sustentada",
              "HMG cobre o gap entre metralhadora e canhão leve",
              "AGL produz efeito de saturação a 2 km",
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
              "Peso e logística da munição sustentada",
              "Superaquecimento do cano em rajadas prolongadas (gestão necessária)",
              "Assinatura de lançamento (fumaça, som) — alvo prioritário do inimigo",
              "HMG fixa é alvo identificável por drone ISR — vida média curta em trincheira",
              "Operador exposto em posição frontal tradicional",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de tiro, gestão de cano, rajadas de supressão, manuseio tático, desmontagem ou manutenção interna. Essas competências exigem treinamento militar especializado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les familles de mitrailleuses employées en Ukraine. Informations doctrinales publiques uniquement : catégories, rôle, calibres, variantes, diffusion. Aucune instruction opérationnelle, de tir, de gestion de canon, de manipulation tactique ou de maintenance.",
    sections: [
      {
        heading: "Catégories et rôle",
        blocks: [
          {
            type: "p",
            text: "Les mitrailleuses sont classées par rôle et calibre. La mitrailleuse légère (LMG) opère au niveau du groupe en calibre intermédiaire (5,56/5,45). La mitrailleuse polyvalente (GPMG) opère au niveau groupe/section en calibre pleine puissance (7,62×51 / 7,62×54R). La mitrailleuse lourde (HMG) opère en calibre 12,7 mm, typiquement sur affût fixe ou véhicule, pour appui antipersonnel à longue distance, antivéhicule léger et rôle antiaérien basse altitude.",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "LMG (5,56/5,45) : 7-8,5 kg, bande ou chargeur, rôle base of fire au niveau groupe",
              "GPMG (7,62×51 / 7,62×54R) : 9-12 kg, bande, canon interchangeable, rôle d'appui moyen",
              "HMG (12,7) : 25-40 kg + trépied, portée efficace jusqu'à 1800 m antipersonnel, 2000 m antivéhicule",
              "AGL (lance-grenades automatique) : 40×53 (USA) ou 30×29 (RUS), rafales de grenades HE/HEDP",
              "Alimentation : bande désintégrable (OTAN) ou non désintégrable (post-soviétique)",
              "Cadence : 700-1300 cps/min typique, MG3 jusqu'à 1300 cps/min",
              "Affût : bipied intégral, trépied séparé pour rôle soutenu, montage véhicule",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Calibre / Catégorie", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs rôle tactique",
        blocks: [
          {
            type: "p",
            text: "Calibre intermédiaire (5,56/5,45) — groupe d'infanterie légère, déploiement rapide, portée pratique jusqu'à 600 m. Pleine puissance (7,62×51/7,62×54R) — appui section/groupe, portée pratique 800-1200 m, poids et logistique supérieurs. 12,7 mm — appui lourd, anti-matériel, antiaérien basse altitude, portée 1500-2000 m. 40×53/30×29 AGL — saturation de zone, indirect à 1,5-2,2 km, contre infanterie à découvert.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les forces ukrainiennes emploient PKM/PKMS comme GPMG principale, FN MAG (M240B), M249 reçues via assistance, RPK/RPK-74 legacy, et Browning M2 sur véhicules et positions fixes. Les forces russes utilisent PKM, Pecheneg, RPK-74, NSV/Kord 12,7, DShK dans les unités irrégulières/LDPR, AGS-17 Plamya 30 mm. Le feu de GPMG sur la ligne de tranchée est un outil central et continu de la guerre de position actuelle.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Volume de feu soutenable — supérieur à toute arme individuelle",
              "Capacité de neutralisation de zone, non seulement engagement ponctuel",
              "Canon interchangeable (GPMG/HMG) supporte la cadence soutenue",
              "HMG comble l'écart entre mitrailleuse et canon léger",
              "AGL produit un effet de saturation à 2 km",
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
              "Poids et logistique de la munition soutenue",
              "Surchauffe du canon en rafales prolongées (gestion nécessaire)",
              "Signature de tir (fumée, son) — cible prioritaire de l'ennemi",
              "HMG fixe est cible identifiable par drone ISR — vie moyenne brève en tranchée",
              "Opérateur exposé en position frontale traditionnelle",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de tir, ni gestion de canon, ni rafales de neutralisation, ni manipulation tactique, ni démontage, ni maintenance interne. Ces compétences exigent un entraînement militaire spécialisé.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
