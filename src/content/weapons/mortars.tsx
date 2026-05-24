import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["M224 / L16", "60 mm / 81 mm", "1978 / 1965", "Mortai leggeri/medi NATO standard. M224 commando, L16A2 plotone/compagnia."],
  ["2B14 Podnos", "82 mm", "1983", "Mortaio leggero/medio sovietico/russo a livello plotone, portata ~85-4100 m."],
  ["120-PM-43 / 2S12 Sani", "120 mm", "1943 / 1981", "Mortaio pesante sovietico, portata 460-7100 m, livello battaglione."],
  ["M120 / Mod 63", "120 mm", "1991 / 1963", "Pesante NATO/Soltam, portata 7200-7700 m con munizioni avanzate."],
  ["2S9 Nona", "120 mm su semovente", "1981", "Sistema combinato cannone/mortaio su scafo BTR-D, dotazione VDV russe."],
  ["MO-120-RT-61", "120 mm rigato", "1961", "Mortaio rigato francese, precisione superiore, in dotazione UA via aiuti."],
  ["UK-2-23", "82 mm", "2014+", "Mortaio ucraino prodotto localmente, derivato da Podnos."],
  ["Edinaro / Edinà", "60 mm commando", "1980s+", "Mortai leggeri commando per gruppi appiedati, portata 100-1500 m."],
  ["RAK / NEMO", "120 mm semovente automatizzato", "2010s", "Sistemi semoventi moderni a caricamento automatico, alta cadenza."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sui mortai d'accompagnamento e supporto della fanteria. Solo informazioni dottrinali pubbliche: ruolo, calibri, varianti, diffusione. Nessuna istruzione operativa, di tiro, di calcolo, di manipolazione tattica, di manutenzione o modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Sistema d'arma a tiro curvo organico della fanteria, destinato a fornire fuoco indiretto immediato ed ininterrotto alle unità di manovra. Portate da 100 m (mortai commando 60 mm) a oltre 7 km (120 mm pesanti). La traiettoria curva consente di colpire bersagli in defilamento, in trincea, dietro creste e in spazi urbani non raggiungibili da fuoco diretto.",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "Tubo liscio (smoothbore) o rigato (rifled, francese 120 mm)",
              "Calibri principali: 60 mm (commando, leggero), 81 mm (NATO plotone), 82 mm (post-sovietico plotone), 120 mm (pesante battaglione)",
              "Bipiede + piastra di base + tubo — configurazione classica spallabile",
              "Munizionamento: HE (alto esplosivo), fumogeno (WP/HC), illuminante, traccia, training",
              "Tabelle di tiro e calcolo balistico con FDC (Fire Direction Center) o computer balistico",
              "Cadenza di tiro: 15-30 rpm (81/82 mm), 4-15 rpm (120 mm)",
              "Sistemi moderni (NEMO, RAK) automatizzati a caricamento autonomo",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Calibro", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibro vs livello tattico",
        blocks: [
          {
            type: "p",
            text: "60 mm: livello squadra/sezione, portatile da uno o due uomini, range fino a 2 km circa. 81 mm NATO / 82 mm WP: livello plotone/compagnia, range 3-5 km, peso totale 35-45 kg. 120 mm: livello battaglione, frequentemente trainato o semovente, range 7+ km, peso impiego 200+ kg. La scelta del calibro dipende dalla mobilità richiesta e dal raggio di supporto.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Mortai sono onnipresenti su entrambi i fronti. Forze ucraine impiegano 2B14 Podnos 82 mm, MO-120-RT-61 francesi, L16 81 mm, M252, M120, e UK-2-23 prodotti localmente. Russia impiega Podnos, Sani, 2S9 Nona, 2S31 Vena, e mortai automatici da 82 mm su veicoli. Il mortaio è il principale supporto di fuoco indiretto della squadra in trincea, attivo continuamente lungo la linea di contatto.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Tiro curvo — raggiunge bersagli in defilamento e trincea",
              "Tempo di risposta breve: dispiegabile in pochi minuti",
              "Munizionamento HE, fumogeno e illuminante con un'unica piattaforma",
              "Costo relativamente contenuto rispetto all'artiglieria",
              "Portata sufficiente a coprire l'intero settore di responsabilità di compagnia (81/82) o battaglione (120)",
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
              "Esposti a contro-batteria immediata via radar (ZOOPARK, COBRA, ARTHUR)",
              "Vulnerabilità a drone ISR e FPV mentre in postazione",
              "Munizione voluminosa e pesante — logistica intensiva su impiego prolungato",
              "Precisione inferiore all'artiglieria di calibro analogo",
              "Movimentazione e cambio postazione frequenti necessari per sopravvivere",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di tiro, calcolo balistico, FDC, FO/FAC, choice di carica, manipolazione di munizionamento o manutenzione. Tali competenze richiedono addestramento militare specialistico.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on infantry support mortars. Public doctrinal information only: role, calibres, variants, distribution. No operational, firing, fire-control, handling, maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Organic indirect-fire weapon of the infantry, providing immediate and continuous fire support to manoeuvre units. Ranges from 100 m (60 mm commando mortars) to over 7 km (heavy 120 mm). The curved trajectory allows engagement of targets in defilade, in trenches, behind crests and in urban interiors not accessible to direct fire.",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "Smoothbore tube or rifled (French 120 mm)",
              "Main calibres: 60 mm (commando, light), 81 mm (NATO platoon), 82 mm (post-Soviet platoon), 120 mm (heavy battalion)",
              "Bipod + baseplate + tube — classic man-portable configuration",
              "Ammunition: HE (high explosive), smoke (WP/HC), illumination, training/practice",
              "Firing tables and ballistic computation via FDC (Fire Direction Center) or ballistic computer",
              "Rate of fire: 15-30 rpm (81/82 mm), 4-15 rpm (120 mm)",
              "Modern systems (NEMO, RAK) automated and self-loading",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Calibre", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs tactical level",
        blocks: [
          {
            type: "p",
            text: "60 mm: squad/section level, portable by one or two soldiers, range up to ~2 km. 81 mm NATO / 82 mm WP: platoon/company level, range 3-5 km, total weight 35-45 kg. 120 mm: battalion level, frequently towed or self-propelled, range 7+ km, employment weight 200+ kg. Calibre choice depends on required mobility and supported radius.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Mortars are ubiquitous on both fronts. Ukrainian forces field 2B14 Podnos 82 mm, French MO-120-RT-61, L16 81 mm, M252, M120, and locally produced UK-2-23. Russia fields Podnos, Sani, 2S9 Nona, 2S31 Vena, and automatic 82 mm vehicle-mounted mortars. The mortar is the principal indirect-fire support of the trench squad, active continuously along the line of contact.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Curved trajectory — reaches targets in defilade and trench",
              "Short reaction time: deployable in minutes",
              "HE, smoke and illumination ammunition from a single platform",
              "Relatively low cost compared to artillery",
              "Range sufficient to cover the full company (81/82) or battalion (120) area of responsibility",
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
              "Exposed to immediate counter-battery via radar (ZOOPARK, COBRA, ARTHUR)",
              "Vulnerable to ISR and FPV drones while emplaced",
              "Bulky and heavy ammunition — intensive logistics under sustained employment",
              "Lower precision than artillery of similar calibre",
              "Frequent displacement and position change required for survival",
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
            body: "This entry is encyclopaedic. It does not describe firing procedures, ballistic computation, FDC, FO/FAC, charge selection, ammunition handling or maintenance. Those skills require specialist military training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre morteiros de apoio à infantaria. Apenas informações doutrinárias públicas: papel, calibres, variantes, distribuição. Nenhuma instrução operacional, tiro, controle de fogo, manuseio, manutenção ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Arma orgânica de tiro indireto da infantaria, fornecendo apoio de fogo imediato e contínuo às unidades de manobra. Alcances de 100 m (morteiros commando 60 mm) a mais de 7 km (120 mm pesados). A trajetória curva permite engajar alvos em defilada, em trincheiras, atrás de cristas e em interiores urbanos inacessíveis ao tiro direto.",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "Tubo liso (smoothbore) ou raiado (francês 120 mm)",
              "Calibres principais: 60 mm (commando, leve), 81 mm (pelotão OTAN), 82 mm (pelotão pós-soviético), 120 mm (pesado batalhão)",
              "Bipé + placa de base + tubo — configuração clássica portátil",
              "Munição: HE (alto explosivo), fumaça (WP/HC), iluminação, treinamento",
              "Tabelas de tiro e cálculo balístico via FDC (Fire Direction Center) ou computador balístico",
              "Cadência de tiro: 15-30 rpm (81/82 mm), 4-15 rpm (120 mm)",
              "Sistemas modernos (NEMO, RAK) automatizados a auto-carregamento",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Calibre", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs nível tático",
        blocks: [
          {
            type: "p",
            text: "60 mm: nível esquadrão/seção, portátil por um ou dois soldados, alcance até ~2 km. 81 mm OTAN / 82 mm WP: nível pelotão/companhia, alcance 3-5 km, peso total 35-45 kg. 120 mm: nível batalhão, frequentemente rebocado ou autopropelido, alcance 7+ km, peso de emprego 200+ kg. A escolha do calibre depende da mobilidade requerida e do raio de apoio.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Morteiros são onipresentes em ambos os fronts. Forças ucranianas empregam 2B14 Podnos 82 mm, MO-120-RT-61 francês, L16 81 mm, M252, M120, e UK-2-23 produzido localmente. Rússia emprega Podnos, Sani, 2S9 Nona, 2S31 Vena, e morteiros automáticos de 82 mm em veículos. O morteiro é o principal apoio de fogo indireto do esquadrão em trincheira, ativo continuamente ao longo da linha de contato.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Trajetória curva — alcança alvos em defilada e trincheira",
              "Tempo de resposta curto: desdobrável em minutos",
              "Munição HE, fumaça e iluminação a partir de uma única plataforma",
              "Custo relativamente baixo comparado à artilharia",
              "Alcance suficiente para cobrir todo o setor de responsabilidade de companhia (81/82) ou batalhão (120)",
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
              "Expostos a contrabateria imediata via radar (ZOOPARK, COBRA, ARTHUR)",
              "Vulnerabilidade a drones ISR e FPV enquanto em posição",
              "Munição volumosa e pesada — logística intensiva em emprego prolongado",
              "Precisão inferior à artilharia de calibre análogo",
              "Movimentação e troca de posição frequentes necessárias para sobreviver",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de tiro, cálculo balístico, FDC, FO/FAC, seleção de carga, manuseio de munição ou manutenção. Essas competências exigem treinamento militar especializado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les mortiers d'appui de l'infanterie. Informations doctrinales publiques uniquement : rôle, calibres, variantes, diffusion. Aucune instruction opérationnelle, de tir, de conduite de tir, de manipulation, de maintenance ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Arme à tir courbe organique de l'infanterie, destinée à fournir un appui-feu immédiat et ininterrompu aux unités de manœuvre. Portées de 100 m (mortiers commando 60 mm) à plus de 7 km (120 mm lourds). La trajectoire courbe permet d'atteindre des cibles en défilement, en tranchée, derrière crêtes et en zones urbaines inaccessibles au tir direct.",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "Tube lisse (smoothbore) ou rayé (français 120 mm)",
              "Calibres principaux : 60 mm (commando, léger), 81 mm (section OTAN), 82 mm (section post-soviétique), 120 mm (lourd, bataillon)",
              "Bipied + plaque de base + tube — configuration classique portable",
              "Munition : HE (explosif brisant), fumigène (WP/HC), éclairante, entraînement",
              "Tables de tir et calcul balistique via FDC (Fire Direction Center) ou calculateur balistique",
              "Cadence de tir : 15-30 cps/min (81/82 mm), 4-15 cps/min (120 mm)",
              "Systèmes modernes (NEMO, RAK) automatisés à chargement autonome",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Calibre", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Calibre vs niveau tactique",
        blocks: [
          {
            type: "p",
            text: "60 mm : niveau groupe/section, portable par un ou deux soldats, portée jusqu'à ~2 km. 81 mm OTAN / 82 mm WP : niveau section/compagnie, portée 3-5 km, poids total 35-45 kg. 120 mm : niveau bataillon, fréquemment tracté ou automoteur, portée 7+ km, poids d'emploi 200+ kg. Le choix du calibre dépend de la mobilité requise et du rayon d'appui.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les mortiers sont omniprésents sur les deux fronts. Les forces ukrainiennes emploient 2B14 Podnos 82 mm, MO-120-RT-61 français, L16 81 mm, M252, M120, et UK-2-23 produits localement. La Russie emploie Podnos, Sani, 2S9 Nona, 2S31 Vena, et mortiers automatiques 82 mm sur véhicules. Le mortier est le principal appui-feu indirect du groupe en tranchée, actif en continu le long de la ligne de contact.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Trajectoire courbe — atteint des cibles en défilement et tranchée",
              "Délai de réponse court : déployable en quelques minutes",
              "Munition HE, fumigène et éclairante depuis une seule plateforme",
              "Coût relativement faible comparé à l'artillerie",
              "Portée suffisante pour couvrir toute la zone de responsabilité de compagnie (81/82) ou bataillon (120)",
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
              "Exposés à la contre-batterie immédiate via radar (ZOOPARK, COBRA, ARTHUR)",
              "Vulnérabilité aux drones ISR et FPV en position",
              "Munition volumineuse et lourde — logistique intensive en emploi prolongé",
              "Précision inférieure à l'artillerie de calibre analogue",
              "Déplacements et changements de position fréquents nécessaires pour survivre",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de tir, ni calcul balistique, ni FDC, ni FO/FAC, ni choix de charge, ni manipulation de munition, ni maintenance. Ces compétences exigent un entraînement militaire spécialisé.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
