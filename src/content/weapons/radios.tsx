import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Motorola APX 6000 / 8000", "P25 — TDMA / FDMA, AES-256", "2010s", "Tactical LMR P25 ad alta sicurezza, batteria intercambiabile, GPS integrato."],
  ["Motorola DP4800 / R7", "DMR — AES-256", "2010s+", "DMR commerciale/militare, crittografia simmetrica AES, banda VHF/UHF."],
  ["Harris/L3Harris AN/PRC-152 / 163", "Multibanda 30-512 MHz, NSA Type 1", "2000s+", "Radio multibanda manpack/handheld delle forze speciali USA. Wideband, MUOS, ANW2."],
  ["AN/PRC-148 MBITR / JEM", "Multibanda 30-512 MHz, AES/Type 1", "1990s+", "Standard SOF, multimissione. JEM (J-Enhanced) supporta SINCGARS, Have Quick."],
  ["Baofeng UV-5R / UV-82 / DM-1701", "VHF/UHF analogica, alcune DMR", "2010s+", "Radio commerciale low-cost cinese, no crittografia hardware, banda larga. Diffusa fra civili e unità irregolari."],
  ["TETRA (TPH900, MTH800)", "TDMA crypto-end-to-end TEA1-7", "1990s+", "Standard europeo professionale, terminali Airbus/Sepura/Motorola, in uso polizia/militare."],
  ["Kenwood NX-3000 / 5000", "DMR / NXDN / P25 — AES", "2010s+", "LMR professionale alternativa a Motorola, in dotazione enti civili e militari."],
  ["Rohde & Schwarz SDTR / SOVERON", "SDR multibanda, EU classified", "2010s+", "Radio software-defined a livello tattico, EU/NATO, crittografia classified."],
  ["Hytera PD7 / PD9", "DMR/AES, banda VHF/UHF", "2010s+", "Alternativa cinese a DMR Motorola, costo inferiore. Diffusa fra unità irregolari/volontarie."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulle categorie di radio tattiche impiegate in Ucraina. Solo informazioni dottrinali pubbliche: famiglie tecnologiche, modulazioni, varianti, diffusione. Nessuna istruzione operativa, di programmazione di canali, di crypto-key loading o di OPSEC procedurale specifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Sistema di comunicazione vocale e dati tra elementi della squadra, plotone, compagnia e oltre. Le radio tattiche si distinguono per banda (HF/VHF/UHF/L-band), modulazione (analogica/digitale), crittografia (assente/simmetrica/end-to-end NSA Type 1), e profilo di rete (broadcast, mesh, trunked). Dottrinalmente l'esfiltrazione radio è la prima vulnerabilità del nemico — la disciplina radio è componente OPSEC critica.",
          },
        ],
      },
      {
        heading: "Categorie tecnologiche",
        blocks: [
          {
            type: "ul",
            items: [
              "Analogiche commerciali (FM, AM): Baofeng UV-5R, Kenwood TK2000 — basso costo, no crittografia, diffuse fra volontari",
              "DMR (Digital Mobile Radio): Motorola DP4800, Hytera PD7 — voce digitale, AES-256 simmetrica",
              "TETRA: standard europeo professionale, infrastruttura cellulare-like, crypto TEA1-7",
              "P25 (APCO): standard nordamericano, AES-256, comune in LE/military US",
              "Multibanda SDR militare: PRC-148, PRC-152, PRC-163 — NSA Type 1, wideband data, MUOS",
              "Manpack HF: PRC-150, PRC-160 — HF/VHF, NVIS, comunicazioni a lungo raggio anche in EW",
              "Radio civile commerciale (LPD/PMR446): senza autorizzazione militare, utilizzo limitato a logistica",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Tecnologia", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Baofeng vs Motorola — note dottrinali",
        blocks: [
          {
            type: "p",
            text: "Le radio commerciali low-cost (Baofeng UV-5R/UV-82 ~30 USD) sono ampiamente diffuse tra unità irregolari e volontarie, ma offrono crittografia assente o software-only (non sicura). Sono completamente intercettabili da SIGINT avversaria con qualsiasi SDR e supportano modulazione analogica FM standard. Le radio LMR professionali (Motorola DP4800, APX 6000) operano in DMR/P25 con AES-256 hardware: la voce è cifrata end-to-end con chiavi pre-condivise. La differenza non è cosmetica: una squadra Baofeng è essenzialmente un network in chiaro.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Unità ucraine impiegano L3Harris PRC-152/163, Motorola DP/APX, Hytera, e R&S SOVERON via aiuti, oltre a Baofeng acquistate dai volontari. Forze russe usano R-187P1 Azart (compromesso tecnicamente), R-168, Motorola/Baofeng comprate privatamente. La compromissione di reti radio non cifrate è una fonte continua di SIGINT per entrambi i lati. La transizione a network cifrati TETRA/DMR è una priorità di interoperabilità NATO.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Comunicazione vocale immediata fra elementi della squadra",
              "Crittografia AES-256 / NSA Type 1 protegge contro intercettazione SIGINT in tempo reale",
              "Network mesh (PRC-163) consente comunicazione anche senza infrastruttura fissa",
              "Banda HF (PRC-150) raggiunge oltre l'orizzonte senza satellite",
              "Integrazione di posizione GPS, messaging dati, foto/video su SDR moderni",
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
              "Le radio non cifrate sono completamente esposte a SIGINT avversaria",
              "Le radio cifrate richiedono key management e disciplina crypto",
              "Trasmissione attiva è geolocalizzabile via DF (Direction Finding) — vulnerabilità di OPSEC",
              "Jamming EW russo (Krasukha, Rb-301B Borisoglebsk-2) può saturare la banda",
              "Batterie e autonomia limitano operatività estesa",
              "Costo elevato di sistemi militari (PRC-152 ~20 k€)",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di programmazione, key loading, scelta di canali tattici, regole di esercizio OPSEC, frequency hopping o gestione di CCI/COMSEC. Tali competenze richiedono addestramento militare COMSEC e accesso classified.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on tactical radio categories employed in Ukraine. Public doctrinal information only: technology families, modulations, variants, distribution. No operational instruction on channel programming, crypto-key loading or specific procedural OPSEC.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Voice and data communication system between elements of squad, platoon, company and above. Tactical radios are distinguished by band (HF/VHF/UHF/L-band), modulation (analogue/digital), cryptography (none / symmetric / end-to-end NSA Type 1), and network profile (broadcast, mesh, trunked). Doctrinally, radio emissions are the enemy's first exploitation surface — radio discipline is a critical OPSEC component.",
          },
        ],
      },
      {
        heading: "Technology categories",
        blocks: [
          {
            type: "ul",
            items: [
              "Analogue commercial (FM, AM): Baofeng UV-5R, Kenwood TK2000 — low cost, no crypto, widespread among volunteers",
              "DMR (Digital Mobile Radio): Motorola DP4800, Hytera PD7 — digital voice, symmetric AES-256",
              "TETRA: European professional standard, cellular-like infrastructure, TEA1-7 crypto",
              "P25 (APCO): North American standard, AES-256, common in US LE/military",
              "Multiband military SDR: PRC-148, PRC-152, PRC-163 — NSA Type 1, wideband data, MUOS",
              "HF manpack: PRC-150, PRC-160 — HF/VHF, NVIS, long-range communication even under EW",
              "Civilian commercial radio (LPD/PMR446): without military authorisation, limited to logistics use",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Technology", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Baofeng vs Motorola — doctrinal notes",
        blocks: [
          {
            type: "p",
            text: "Low-cost commercial radios (Baofeng UV-5R/UV-82 ~$30) are widespread among irregular and volunteer units, but offer no cryptography or software-only (insecure) crypto. They are fully interceptable by adversary SIGINT with any SDR and use standard analogue FM modulation. Professional LMR radios (Motorola DP4800, APX 6000) operate in DMR/P25 with hardware AES-256: voice is end-to-end encrypted with pre-shared keys. The difference is not cosmetic: a Baofeng squad is essentially a clear-text network.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian units field L3Harris PRC-152/163, Motorola DP/APX, Hytera, and R&S SOVERON via aid, alongside Baofeng bought by volunteers. Russian forces use R-187P1 Azart (technically compromised), R-168, Motorola/Baofeng bought privately. Compromise of unencrypted radio networks is a continuous SIGINT source for both sides. Transition to encrypted TETRA/DMR networks is a NATO interoperability priority.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Immediate voice communication between squad elements",
              "AES-256 / NSA Type 1 cryptography protects against real-time SIGINT intercept",
              "Mesh network (PRC-163) supports communication without fixed infrastructure",
              "HF band (PRC-150) reaches beyond the horizon without satellite",
              "Integration of GPS position, data messaging, photo/video on modern SDR",
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
              "Unencrypted radios are fully exposed to adversary SIGINT",
              "Encrypted radios require key management and crypto discipline",
              "Active transmission is geolocatable via DF (Direction Finding) — OPSEC vulnerability",
              "Russian EW jamming (Krasukha, Rb-301B Borisoglebsk-2) can saturate the band",
              "Batteries and autonomy limit extended operability",
              "High cost of military systems (PRC-152 ~€20k)",
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
            body: "This entry is encyclopaedic. It does not describe programming procedures, key loading, tactical channel selection, OPSEC operating rules, frequency hopping or CCI/COMSEC management. Those skills require military COMSEC training and classified access.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre categorias de rádios táticos empregados na Ucrânia. Apenas informações doutrinárias públicas: famílias tecnológicas, modulações, variantes, distribuição. Nenhuma instrução operacional sobre programação de canais, crypto-key loading ou OPSEC procedural específica.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Sistema de comunicação de voz e dados entre elementos de esquadrão, pelotão, companhia e acima. Os rádios táticos se distinguem por banda (HF/VHF/UHF/L-band), modulação (analógica/digital), criptografia (ausente / simétrica / end-to-end NSA Type 1) e perfil de rede (broadcast, mesh, trunked). Doutrinariamente, a exfiltração rádio é a primeira vulnerabilidade do inimigo — a disciplina rádio é componente OPSEC crítico.",
          },
        ],
      },
      {
        heading: "Categorias tecnológicas",
        blocks: [
          {
            type: "ul",
            items: [
              "Analógicas comerciais (FM, AM): Baofeng UV-5R, Kenwood TK2000 — baixo custo, sem criptografia, difundidas entre voluntários",
              "DMR (Digital Mobile Radio): Motorola DP4800, Hytera PD7 — voz digital, AES-256 simétrica",
              "TETRA: padrão europeu profissional, infraestrutura tipo celular, criptografia TEA1-7",
              "P25 (APCO): padrão norte-americano, AES-256, comum em LE/military US",
              "SDR militar multibanda: PRC-148, PRC-152, PRC-163 — NSA Type 1, wideband data, MUOS",
              "Manpack HF: PRC-150, PRC-160 — HF/VHF, NVIS, comunicações de longo alcance mesmo sob EW",
              "Rádio civil comercial (LPD/PMR446): sem autorização militar, uso limitado a logística",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Tecnologia", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Baofeng vs Motorola — notas doutrinárias",
        blocks: [
          {
            type: "p",
            text: "Os rádios comerciais de baixo custo (Baofeng UV-5R/UV-82 ~30 USD) são amplamente difundidos entre unidades irregulares e voluntárias, mas oferecem criptografia ausente ou apenas em software (insegura). São completamente interceptáveis por SIGINT adversária com qualquer SDR e suportam modulação analógica FM padrão. Rádios LMR profissionais (Motorola DP4800, APX 6000) operam em DMR/P25 com AES-256 hardware: a voz é criptografada end-to-end com chaves pré-compartilhadas. A diferença não é cosmética: uma esquadra Baofeng é essencialmente uma rede em texto claro.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Unidades ucranianas empregam L3Harris PRC-152/163, Motorola DP/APX, Hytera, e R&S SOVERON via assistência, além de Baofeng compradas por voluntários. Forças russas usam R-187P1 Azart (tecnicamente comprometido), R-168, Motorola/Baofeng compradas privadamente. O comprometimento de redes rádio não cifradas é uma fonte contínua de SIGINT para ambos os lados. A transição a redes cifradas TETRA/DMR é uma prioridade de interoperabilidade OTAN.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Comunicação de voz imediata entre elementos do esquadrão",
              "Criptografia AES-256 / NSA Type 1 protege contra interceptação SIGINT em tempo real",
              "Rede mesh (PRC-163) permite comunicação mesmo sem infraestrutura fixa",
              "Banda HF (PRC-150) alcança além do horizonte sem satélite",
              "Integração de posição GPS, mensageria de dados, foto/vídeo em SDR modernos",
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
              "Rádios não cifrados estão completamente expostos à SIGINT adversária",
              "Rádios cifrados requerem gestão de chaves e disciplina cripto",
              "Transmissão ativa é geolocalizável via DF (Direction Finding) — vulnerabilidade OPSEC",
              "Jamming EW russo (Krasukha, Rb-301B Borisoglebsk-2) pode saturar a banda",
              "Baterias e autonomia limitam a operatividade estendida",
              "Custo elevado de sistemas militares (PRC-152 ~20 k€)",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de programação, key loading, seleção de canais táticos, regras de exercício OPSEC, frequency hopping ou gestão de CCI/COMSEC. Essas competências exigem treinamento militar COMSEC e acesso classified.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les catégories de radios tactiques employées en Ukraine. Informations doctrinales publiques uniquement : familles technologiques, modulations, variantes, diffusion. Aucune instruction opérationnelle sur la programmation de canaux, le chargement de clés crypto ou l'OPSEC procédural spécifique.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Système de communication voix et données entre éléments de groupe, section, compagnie et au-delà. Les radios tactiques se distinguent par bande (HF/VHF/UHF/L-band), modulation (analogique/numérique), chiffrement (absent / symétrique / bout-en-bout NSA Type 1) et profil réseau (broadcast, mesh, trunked). Doctrinalement, l'exfiltration radio est la première vulnérabilité de l'ennemi — la discipline radio est une composante OPSEC critique.",
          },
        ],
      },
      {
        heading: "Catégories technologiques",
        blocks: [
          {
            type: "ul",
            items: [
              "Analogiques commerciales (FM, AM) : Baofeng UV-5R, Kenwood TK2000 — faible coût, sans chiffrement, répandues parmi les volontaires",
              "DMR (Digital Mobile Radio) : Motorola DP4800, Hytera PD7 — voix numérique, AES-256 symétrique",
              "TETRA : standard européen professionnel, infrastructure cellulaire, crypto TEA1-7",
              "P25 (APCO) : standard nord-américain, AES-256, courant dans LE/military US",
              "SDR militaire multibande : PRC-148, PRC-152, PRC-163 — NSA Type 1, données wideband, MUOS",
              "Manpack HF : PRC-150, PRC-160 — HF/VHF, NVIS, communications longue portée même sous EW",
              "Radio civile commerciale (LPD/PMR446) : sans autorisation militaire, usage limité à la logistique",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Technologie", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Baofeng vs Motorola — notes doctrinales",
        blocks: [
          {
            type: "p",
            text: "Les radios commerciales bas coût (Baofeng UV-5R/UV-82 ~30 USD) sont largement répandues parmi les unités irrégulières et de volontaires, mais offrent un chiffrement absent ou logiciel (non sécurisé). Elles sont entièrement interceptables par la SIGINT adverse avec tout SDR et supportent la modulation analogique FM standard. Les radios LMR professionnelles (Motorola DP4800, APX 6000) opèrent en DMR/P25 avec AES-256 matériel : la voix est chiffrée bout-en-bout avec des clés pré-partagées. La différence n'est pas cosmétique : un groupe Baofeng est essentiellement un réseau en clair.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les unités ukrainiennes emploient L3Harris PRC-152/163, Motorola DP/APX, Hytera, et R&S SOVERON via assistance, ainsi que des Baofeng achetées par les volontaires. Les forces russes utilisent R-187P1 Azart (techniquement compromis), R-168, Motorola/Baofeng achetées à titre privé. La compromission des réseaux radio non chiffrés est une source continue de SIGINT pour les deux camps. La transition vers les réseaux chiffrés TETRA/DMR est une priorité d'interopérabilité OTAN.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Communication vocale immédiate entre éléments du groupe",
              "Chiffrement AES-256 / NSA Type 1 protège contre l'interception SIGINT en temps réel",
              "Réseau mesh (PRC-163) permet la communication sans infrastructure fixe",
              "Bande HF (PRC-150) atteint au-delà de l'horizon sans satellite",
              "Intégration de position GPS, messagerie de données, photo/vidéo sur SDR modernes",
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
              "Les radios non chiffrées sont entièrement exposées à la SIGINT adverse",
              "Les radios chiffrées exigent gestion de clés et discipline crypto",
              "Émission active est géolocalisable par DF (Direction Finding) — vulnérabilité OPSEC",
              "Brouillage EW russe (Krasukha, Rb-301B Borisoglebsk-2) peut saturer la bande",
              "Batteries et autonomie limitent l'opérabilité étendue",
              "Coût élevé des systèmes militaires (PRC-152 ~20 k€)",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de programmation, ni chargement de clés, ni choix de canaux tactiques, ni règles d'exercice OPSEC, ni frequency hopping, ni gestion CCI/COMSEC. Ces compétences exigent un entraînement militaire COMSEC et un accès classifié.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
