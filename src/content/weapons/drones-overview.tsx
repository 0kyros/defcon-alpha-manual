import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Group 1 (Mavic, FPV)", "<9 kg, <366 m, <100 KIAS", "ISR / strike", "DJI Mavic 3, Autel, FPV racing modificati. Pilotabili manualmente, raggio 5-15 km."],
  ["Group 2 (Penguin, Shark)", "9-25 kg, <1067 m", "ISR tattico", "ISR di plotone/compagnia, autonomia 2-4 h, lancio a mano o catapulta."],
  ["Group 3 (Shahed-136, Bayraktar TB2)", "25-600 kg, <5500 m", "ISR / strike / OWA", "Shahed-136 Geran-2 OWA, Bayraktar TB2 ISR/strike, ZALA Lancet loitering."],
  ["Group 4 (MQ-1C Gray Eagle, Akinci)", "600-1300 kg, alto", "ISR / strike", "Bayraktar Akinci, MQ-1C, Heron — autonomia >24 h, armi guidate."],
  ["Group 5 (MQ-9 Reaper, RQ-4)", ">1300 kg, alto / SHORAD-immune", "ISR strategico / strike", "MQ-9, RQ-4 Global Hawk — ricognizione strategica, payload pesante."],
  ["FPV kamikaze", "<3 kg, 5-15 km", "Strike monouso", "FPV racing modificato con carica RPG-7 o C4 — sciame ucraino/russo."],
  ["Loitering munition (Switchblade)", "300/600 USA — Lancet 51 RUS", "Strike di precisione", "Munizione orbitante, video link, autodirezione finale. Switchblade 300/600, Lancet-3/51."],
  ["VTOL / Quadcopter ISR", "1-15 kg, multi-rotore", "ISR di squadra/plotone", "Mavic 3 Pro/Enterprise, Autel EVO II/Max, ricognizione e correzione tiro."],
  ["UGV (terrestre)", "Pesante o leggero", "Logistica / strike", "Lyut, Themis, Ratel-S, MRSS — supporto logistico, evacuazione, ruoli C-UAS."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulle categorie di drone impiegati in Ucraina. Solo informazioni dottrinali pubbliche: categorie DoD Group 1-5, classi di impiego (ISR, strike, loitering, OWA, FPV), varianti, diffusione. Nessuna istruzione operativa, di pilotaggio, di programmazione di rotte o di costruzione.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "I drone sono diventati il vettore dominante del campo di battaglia ucraino, modificando ogni dottrina di manovra precedente. Si distinguono per peso, quota operativa, autonomia e ruolo (ISR — Intelligence/Surveillance/Reconnaissance, strike, loitering munition, OWA — One-Way Attack, FPV kamikaze, UGV terrestri). L'integrazione drone-artiglieria-fanteria (kill chain) è il moltiplicatore principale di potenza di fuoco di entrambi i fronti.",
          },
        ],
      },
      {
        heading: "Categorie DoD (Group 1-5)",
        blocks: [
          {
            type: "ul",
            items: [
              "Group 1: peso <9 kg, quota <366 m AGL, velocità <100 KIAS — Mavic, FPV, Skydio, Quantum-Vector",
              "Group 2: 9-25 kg, <1067 m AGL — Penguin, Shark, RQ-11 Raven, Phoenix Ghost",
              "Group 3: 25-600 kg, <5500 m MSL — Bayraktar TB2, Shahed-136, ZALA Lancet, Switchblade 600",
              "Group 4: 600-1300 kg, quota alta — Bayraktar Akinci, MQ-1C Gray Eagle, Heron, Reaper Block 1",
              "Group 5: >1300 kg, quota alta / immune SHORAD — MQ-9 Reaper, RQ-4 Global Hawk, RQ-180",
              "Categoria DoD basata su peso, quota e velocità; non descrive il ruolo (ISR vs strike)",
            ],
          },
        ],
      },
      {
        heading: "Ruoli funzionali",
        blocks: [
          {
            type: "ul",
            items: [
              "ISR (Intelligence, Surveillance, Reconnaissance): osservazione, correzione tiro, BDA",
              "Strike: rilascio di munizioni a caduta (Mavic mod 30mm/40mm), missili anti-tank (TB2 MAM-L)",
              "Loitering munition: munizione orbitante autoguidata (Lancet, Switchblade, HERO)",
              "OWA (One-Way Attack): drone monouso a lungo raggio (Shahed-136, Geran-2)",
              "FPV kamikaze: piattaforma racing pilotata via video link, payload C4/RPG-7",
              "UGV: terrestri, logistica, evacuazione feriti, C-UAS, ruoli engineer",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Categoria", "Peso / Quota", "Ruolo", "Esempi"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "FPV vs commerciale",
        blocks: [
          {
            type: "p",
            text: "I drone FPV (First-Person View) sono velivoli racing/cinematic a tre o quattro motori, pilotati via video link analogico 5.8 GHz o digitale (DJI O3), con visore VR sull'operatore. Modificati con piattaforma esplosiva (RPG-7 PG-7V, granate da 30/40 mm, C4) diventano munizioni di precisione monouso a costo unitario di 300-600 USD. I drone commerciali (DJI Mavic 3, Autel EVO II) sono ISR pilotati con stick tradizionale: alta qualità di camera, geolocalizzazione, payload modificabile per rilascio di granate. Sciami di FPV su singoli bersagli costituiscono uno dei tratti distintivi del fronte ucraino.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Entrambi i fronti producono e impiegano massivamente drone. Ucraina produce internamente FPV (DroneFighters, Vyriy, Skif), Punisher, Shark, Bober/Beaver OWA, e impiega Bayraktar TB2 (anche se in declino dopo perdite SAM iniziali), Switchblade, Phoenix Ghost. Russia impiega Orlan-10/30/50 ISR, Lancet/ZALA Kub loitering, Shahed-136/Geran-2 OWA, FPV sciamati. La produzione mensile combinata supera i 200.000 drone FPV. L'integrazione con artiglieria, ricognizione visuale e correzione tiro è componente standard del battaglione moderno.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Costo unitario radicalmente inferiore al missile guidato (300-600 USD vs 50-200 k€)",
              "ISR persistente fino a livello squadra/plotone",
              "Capacità strike di precisione senza esposizione di personale",
              "Sciame consente saturazione di difese tradizionali",
              "Produzione locale rapida senza dipendenza da supply chain complessa",
              "OWA a lungo raggio (Shahed-136) consente attacco strategico a costi minimi",
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
              "Vulnerabili a EW (jamming GPS, jamming video link, spoofing)",
              "Dipendono da segnale: in jamming totale FPV perde controllo, ISR perde feed",
              "Carico utile limitato (sub-kg per FPV, kg per Mavic) — non sostituibili all'artiglieria pesante",
              "Autonomia breve (15-45 min per FPV, 4-8 h per ISR)",
              "Meteo (vento, pioggia, gelo) limita drone leggeri",
              "Categoria controllata (esportazione DJI da Cina) — supply chain politicamente esposta",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di pilotaggio, programmazione di rotta, montaggio di payload, integrazione strike, building di FPV o configurazione di video link. Tali competenze richiedono addestramento di operatore drone certificato.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on drone categories employed in Ukraine. Public doctrinal information only: DoD Group 1-5 categories, employment classes (ISR, strike, loitering, OWA, FPV), variants, distribution. No operational, piloting, route programming or construction instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Drones have become the dominant battlefield vector in Ukraine, reshaping every prior manoeuvre doctrine. They are distinguished by weight, operating altitude, endurance and role (ISR — Intelligence/Surveillance/Reconnaissance, strike, loitering munition, OWA — One-Way Attack, FPV kamikaze, ground UGVs). The drone-artillery-infantry integration (kill chain) is the principal firepower multiplier on both fronts.",
          },
        ],
      },
      {
        heading: "DoD categories (Group 1-5)",
        blocks: [
          {
            type: "ul",
            items: [
              "Group 1: weight <9 kg, altitude <366 m AGL, speed <100 KIAS — Mavic, FPV, Skydio, Quantum-Vector",
              "Group 2: 9-25 kg, <1067 m AGL — Penguin, Shark, RQ-11 Raven, Phoenix Ghost",
              "Group 3: 25-600 kg, <5500 m MSL — Bayraktar TB2, Shahed-136, ZALA Lancet, Switchblade 600",
              "Group 4: 600-1300 kg, high altitude — Bayraktar Akinci, MQ-1C Gray Eagle, Heron, Reaper Block 1",
              "Group 5: >1300 kg, high altitude / SHORAD-immune — MQ-9 Reaper, RQ-4 Global Hawk, RQ-180",
              "DoD category based on weight, altitude and speed; does not describe role (ISR vs strike)",
            ],
          },
        ],
      },
      {
        heading: "Functional roles",
        blocks: [
          {
            type: "ul",
            items: [
              "ISR (Intelligence, Surveillance, Reconnaissance): observation, fire correction, BDA",
              "Strike: release of drop munitions (modified Mavic 30mm/40mm), anti-tank missiles (TB2 MAM-L)",
              "Loitering munition: orbiting self-guided munition (Lancet, Switchblade, HERO)",
              "OWA (One-Way Attack): single-use long-range drone (Shahed-136, Geran-2)",
              "FPV kamikaze: racing platform piloted via video link, C4/RPG-7 payload",
              "UGV: ground, logistics, casualty evacuation, C-UAS, engineer roles",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["Category", "Weight / Altitude", "Role", "Examples"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "FPV vs commercial",
        blocks: [
          {
            type: "p",
            text: "FPV (First-Person View) drones are racing/cinematic three- or four-motor vehicles piloted via 5.8 GHz analogue or digital video link (DJI O3), with VR goggles on the operator. Modified with an explosive platform (RPG-7 PG-7V, 30/40 mm grenades, C4) they become single-use precision munitions at $300-600 unit cost. Commercial drones (DJI Mavic 3, Autel EVO II) are ISR platforms piloted with traditional stick: high-quality cameras, geolocation, modifiable payload for grenade release. Swarms of FPV against single targets are one of the distinguishing traits of the Ukrainian front.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Both fronts produce and employ drones massively. Ukraine produces FPVs domestically (DroneFighters, Vyriy, Skif), Punisher, Shark, Bober/Beaver OWA, and fields Bayraktar TB2 (in decline after initial SAM losses), Switchblade, Phoenix Ghost. Russia fields Orlan-10/30/50 ISR, Lancet/ZALA Kub loitering, Shahed-136/Geran-2 OWA, swarmed FPVs. Combined monthly production exceeds 200,000 FPV drones. Integration with artillery, visual recon and fire correction is a standard battalion-level component.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Unit cost radically lower than guided missile ($300-600 vs €50-200k)",
              "Persistent ISR down to squad/platoon level",
              "Precision strike capability without personnel exposure",
              "Swarm allows saturation of traditional defences",
              "Rapid local production without complex supply chain dependency",
              "Long-range OWA (Shahed-136) enables strategic attack at minimal cost",
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
              "Vulnerable to EW (GPS jamming, video-link jamming, spoofing)",
              "Signal-dependent: under total jamming FPV loses control, ISR loses feed",
              "Limited payload (sub-kg for FPV, kg for Mavic) — not a substitute for heavy artillery",
              "Short endurance (15-45 min for FPV, 4-8 h for ISR)",
              "Weather (wind, rain, freezing) limits light drones",
              "Controlled category (DJI exports from China) — politically exposed supply chain",
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
            body: "This entry is encyclopaedic. It does not describe piloting procedures, route programming, payload mounting, strike integration, FPV building or video-link configuration. Those skills require certified drone operator training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre as categorias de drones empregados na Ucrânia. Apenas informações doutrinárias públicas: categorias DoD Group 1-5, classes de emprego (ISR, strike, loitering, OWA, FPV), variantes, distribuição. Nenhuma instrução operacional, de pilotagem, de programação de rotas ou de construção.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Os drones tornaram-se o vetor dominante do campo de batalha ucraniano, modificando toda doutrina de manobra anterior. Distinguem-se por peso, altitude operacional, autonomia e papel (ISR — Intelligence/Surveillance/Reconnaissance, strike, loitering munition, OWA — One-Way Attack, FPV kamikaze, UGV terrestres). A integração drone-artilharia-infantaria (kill chain) é o principal multiplicador de poder de fogo em ambos os fronts.",
          },
        ],
      },
      {
        heading: "Categorias DoD (Group 1-5)",
        blocks: [
          {
            type: "ul",
            items: [
              "Group 1: peso <9 kg, altitude <366 m AGL, velocidade <100 KIAS — Mavic, FPV, Skydio, Quantum-Vector",
              "Group 2: 9-25 kg, <1067 m AGL — Penguin, Shark, RQ-11 Raven, Phoenix Ghost",
              "Group 3: 25-600 kg, <5500 m MSL — Bayraktar TB2, Shahed-136, ZALA Lancet, Switchblade 600",
              "Group 4: 600-1300 kg, alta altitude — Bayraktar Akinci, MQ-1C Gray Eagle, Heron, Reaper Block 1",
              "Group 5: >1300 kg, alta altitude / imune SHORAD — MQ-9 Reaper, RQ-4 Global Hawk, RQ-180",
              "Categoria DoD baseada em peso, altitude e velocidade; não descreve o papel (ISR vs strike)",
            ],
          },
        ],
      },
      {
        heading: "Papéis funcionais",
        blocks: [
          {
            type: "ul",
            items: [
              "ISR (Intelligence, Surveillance, Reconnaissance): observação, correção de tiro, BDA",
              "Strike: lançamento de munições de queda (Mavic mod 30mm/40mm), mísseis anticarro (TB2 MAM-L)",
              "Loitering munition: munição orbitante autoguiada (Lancet, Switchblade, HERO)",
              "OWA (One-Way Attack): drone descartável de longo alcance (Shahed-136, Geran-2)",
              "FPV kamikaze: plataforma racing pilotada via video link, payload C4/RPG-7",
              "UGV: terrestres, logística, evacuação de feridos, C-UAS, papéis engineer",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Categoria", "Peso / Altitude", "Papel", "Exemplos"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "FPV vs comercial",
        blocks: [
          {
            type: "p",
            text: "Os drones FPV (First-Person View) são veículos racing/cinematic de três ou quatro motores, pilotados via video link analógico 5.8 GHz ou digital (DJI O3), com óculos VR no operador. Modificados com plataforma explosiva (RPG-7 PG-7V, granadas de 30/40 mm, C4) tornam-se munições de precisão descartáveis ao custo unitário de 300-600 USD. Os drones comerciais (DJI Mavic 3, Autel EVO II) são ISR pilotados com stick tradicional: câmera de alta qualidade, geolocalização, payload modificável para lançamento de granadas. Enxames de FPV em alvos únicos são um dos traços distintivos do front ucraniano.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Ambos os fronts produzem e empregam drones massivamente. A Ucrânia produz internamente FPVs (DroneFighters, Vyriy, Skif), Punisher, Shark, Bober/Beaver OWA, e emprega Bayraktar TB2 (em declínio após perdas iniciais SAM), Switchblade, Phoenix Ghost. A Rússia emprega Orlan-10/30/50 ISR, Lancet/ZALA Kub loitering, Shahed-136/Geran-2 OWA, FPVs em enxames. A produção mensal combinada supera 200.000 drones FPV. A integração com artilharia, reconhecimento visual e correção de tiro é componente padrão do batalhão moderno.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Custo unitário radicalmente inferior ao míssil guiado (300-600 USD vs 50-200 k€)",
              "ISR persistente até nível esquadrão/pelotão",
              "Capacidade strike de precisão sem exposição de pessoal",
              "Enxame permite saturação de defesas tradicionais",
              "Produção local rápida sem dependência de supply chain complexa",
              "OWA de longo alcance (Shahed-136) permite ataque estratégico a custo mínimo",
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
              "Vulneráveis a EW (jamming GPS, jamming video link, spoofing)",
              "Dependem de sinal: em jamming total FPV perde controle, ISR perde feed",
              "Payload limitado (sub-kg para FPV, kg para Mavic) — não substituem artilharia pesada",
              "Autonomia curta (15-45 min para FPV, 4-8 h para ISR)",
              "Clima (vento, chuva, gelo) limita drones leves",
              "Categoria controlada (exportação DJI da China) — supply chain politicamente exposta",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de pilotagem, programação de rota, montagem de payload, integração de strike, building de FPV ou configuração de video link. Tais competências exigem treinamento de operador de drone certificado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les catégories de drones employés en Ukraine. Informations doctrinales publiques uniquement : catégories DoD Group 1-5, classes d'emploi (ISR, strike, loitering, OWA, FPV), variantes, diffusion. Aucune instruction opérationnelle, de pilotage, de programmation de route ou de construction.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Les drones sont devenus le vecteur dominant du champ de bataille ukrainien, modifiant toute doctrine de manœuvre antérieure. Ils se distinguent par poids, altitude opérationnelle, autonomie et rôle (ISR — Intelligence/Surveillance/Reconnaissance, strike, loitering munition, OWA — One-Way Attack, FPV kamikaze, UGV terrestres). L'intégration drone-artillerie-infanterie (kill chain) est le principal multiplicateur de puissance de feu des deux fronts.",
          },
        ],
      },
      {
        heading: "Catégories DoD (Group 1-5)",
        blocks: [
          {
            type: "ul",
            items: [
              "Group 1 : poids <9 kg, altitude <366 m AGL, vitesse <100 KIAS — Mavic, FPV, Skydio, Quantum-Vector",
              "Group 2 : 9-25 kg, <1067 m AGL — Penguin, Shark, RQ-11 Raven, Phoenix Ghost",
              "Group 3 : 25-600 kg, <5500 m MSL — Bayraktar TB2, Shahed-136, ZALA Lancet, Switchblade 600",
              "Group 4 : 600-1300 kg, haute altitude — Bayraktar Akinci, MQ-1C Gray Eagle, Heron, Reaper Block 1",
              "Group 5 : >1300 kg, haute altitude / immun SHORAD — MQ-9 Reaper, RQ-4 Global Hawk, RQ-180",
              "Catégorie DoD basée sur poids, altitude et vitesse ; ne décrit pas le rôle (ISR vs strike)",
            ],
          },
        ],
      },
      {
        heading: "Rôles fonctionnels",
        blocks: [
          {
            type: "ul",
            items: [
              "ISR (Intelligence, Surveillance, Reconnaissance) : observation, correction de tir, BDA",
              "Strike : largage de munitions à chute (Mavic mod 30mm/40mm), missiles antichars (TB2 MAM-L)",
              "Munition rôdeuse : munition orbitante autoguidée (Lancet, Switchblade, HERO)",
              "OWA (One-Way Attack) : drone à usage unique longue portée (Shahed-136, Geran-2)",
              "FPV kamikaze : plateforme racing pilotée via video link, charge C4/RPG-7",
              "UGV : terrestres, logistique, évacuation des blessés, C-UAS, rôles génie",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Catégorie", "Poids / Altitude", "Rôle", "Exemples"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "FPV vs commercial",
        blocks: [
          {
            type: "p",
            text: "Les drones FPV (First-Person View) sont des véhicules racing/cinematic à trois ou quatre moteurs, pilotés via video link analogique 5,8 GHz ou numérique (DJI O3), avec lunettes VR sur l'opérateur. Modifiés avec une plateforme explosive (RPG-7 PG-7V, grenades 30/40 mm, C4) ils deviennent des munitions de précision à usage unique au coût unitaire de 300-600 USD. Les drones commerciaux (DJI Mavic 3, Autel EVO II) sont des ISR pilotés au stick traditionnel : caméra haute qualité, géolocalisation, charge modifiable pour largage de grenades. Les essaims de FPV sur cibles uniques constituent l'un des traits distinctifs du front ukrainien.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les deux fronts produisent et emploient massivement des drones. L'Ukraine produit en interne des FPV (DroneFighters, Vyriy, Skif), Punisher, Shark, Bober/Beaver OWA, et emploie Bayraktar TB2 (en déclin après les pertes SAM initiales), Switchblade, Phoenix Ghost. La Russie emploie Orlan-10/30/50 ISR, Lancet/ZALA Kub rôdeurs, Shahed-136/Geran-2 OWA, FPV en essaim. La production mensuelle combinée dépasse les 200 000 drones FPV. L'intégration avec l'artillerie, la reconnaissance visuelle et la correction de tir est une composante standard du bataillon moderne.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Coût unitaire radicalement inférieur au missile guidé (300-600 USD vs 50-200 k€)",
              "ISR persistante jusqu'au niveau groupe/section",
              "Capacité de frappe de précision sans exposition de personnel",
              "L'essaim permet la saturation des défenses traditionnelles",
              "Production locale rapide sans dépendance à une supply chain complexe",
              "OWA longue portée (Shahed-136) permet l'attaque stratégique à coût minimal",
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
              "Vulnérables à la guerre électronique (jamming GPS, jamming video link, spoofing)",
              "Dépendants du signal : sous brouillage total le FPV perd le contrôle, l'ISR perd le feed",
              "Charge utile limitée (sub-kg pour FPV, kg pour Mavic) — ne remplacent pas l'artillerie lourde",
              "Autonomie brève (15-45 min pour FPV, 4-8 h pour ISR)",
              "Météo (vent, pluie, gel) limite les drones légers",
              "Catégorie contrôlée (exports DJI depuis la Chine) — chaîne d'approvisionnement politiquement exposée",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de pilotage, ni programmation de route, ni montage de charge, ni intégration de frappe, ni building de FPV, ni configuration de video link. Ces compétences exigent un entraînement certifié d'opérateur de drone.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
