import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Callsign", "Indicativo", "Indicativo", "Indicatif"],
  ["Net", "Rete (radio)", "Rede", "Réseau"],
  ["Net control station", "Stazione di controllo rete", "Estação de controle de rede", "Station de contrôle"],
  ["Frequency", "Frequenza", "Frequência", "Fréquence"],
  ["Channel", "Canale", "Canal", "Canal"],
  ["PTT", "PTT (push-to-talk)", "PTT", "Alternat"],
  ["Squelch", "Squelch / silenziatore", "Squelch", "Silencieux"],
  ["Encryption / crypto", "Cifratura", "Cifragem", "Chiffrement"],
  ["Key fill", "Caricamento chiavi", "Carga de chaves", "Chargement de clés"],
  ["Crypto key", "Chiave crittografica", "Chave criptográfica", "Clé cryptographique"],
  ["Jamming", "Jamming / disturbo", "Interferência", "Brouillage"],
  ["DF / direction finding", "Goniometria", "Goniometria / DF", "Goniométrie"],
  ["Brevity code", "Brevity code", "Brevity code", "Code abrégé"],
  ["Proword", "Proword", "Proword", "Mot de procédure"],
  ["DTG", "DTG (Date-Time Group)", "DTG", "DTG"],
  ["Time hack", "Sincronizzazione oraria", "Time hack / sincronização", "Top horaire"],
  ["Read back", "Ripetere ricevuto", "Ler de volta / repetir", "Collationner"],
  ["Acknowledge", "Conferma ricezione", "Confirmar recepção", "Accuser réception"],
  ["Authenticate", "Autenticare", "Autenticar", "Authentifier"],
  ["Relay", "Trasmissione a terzi", "Relê", "Relayer"],
  ["Mayday", "Mayday (emergenza vita)", "Mayday", "Mayday"],
  ["Pan-pan", "Pan-pan (urgenza non-vita)", "Pan-pan", "Pan-pan"],
  ["Loud and clear", "Forte e chiaro / Lima Charlie", "Alto e claro / Lima Charlie", "Fort et clair / Lima Charlie"],
  ["Garbled", "Disturbato / incomprensibile", "Embaralhado", "Brouillé"],
  ["Broken", "Frammentato (segnale)", "Cortado", "Coupé"],
  ["Standby", "Restare in ascolto", "Aguardar na escuta", "Rester à l'écoute"],
  ["Out of comms", "Fuori comunicazione", "Sem comunicação", "Hors comms"],
  ["Comms check", "Verifica comunicazioni", "Verificação de comms", "Test de liaison"],
  ["VHF / UHF", "VHF / UHF", "VHF / UHF", "VHF / UHF"],
  ["SHF", "SHF", "SHF", "SHF"],
  ["Repeater", "Ripetitore", "Repetidor", "Relais"],
  ["EMCON", "EMCON (silenzio emanazione)", "EMCON", "EMCON / silence radio"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela radio e comunicazioni. Tutti i termini hanno equivalenti tecnici nelle quattro lingue ma su rete operativa NATO si usa esclusivamente l'inglese.",
    sections: [
      {
        heading: "Radio e comms",
        blocks: [
          {
            type: "table",
            headers: ["EN", "IT", "PT-BR", "FR"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Note d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Su rete: solo EN (e prowords standard)",
              "'Loud and clear' = qualità ottimale del segnale (5 su 5), si abbrevia 'Lima Charlie'",
              "MAYDAY è solo per pericolo di vita immediato — abusarlo desensibilizza la rete",
              "EMCON = ordine di silenzio totale, non solo limitazione di trasmissione",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel radio and communications terminology. All terms have technical equivalents in the four languages but on a NATO operational net English is used exclusively.",
    sections: [
      {
        heading: "Radio and comms",
        blocks: [
          {
            type: "table",
            headers: ["EN", "IT", "PT-BR", "FR"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Usage notes",
        blocks: [
          {
            type: "ul",
            items: [
              "On nets: English only (and standard prowords)",
              "'Loud and clear' = optimal signal quality (5 by 5), shortened 'Lima Charlie'",
              "MAYDAY is only for immediate life-threatening emergency — abuse desensitises the net",
              "EMCON = order of total silence, not a transmission limitation",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela de rádio e comunicações. Todos os termos têm equivalentes técnicos nas quatro línguas mas em rede operacional OTAN usa-se exclusivamente o inglês.",
    sections: [
      {
        heading: "Rádio e comms",
        blocks: [
          {
            type: "table",
            headers: ["EN", "IT", "PT-BR", "FR"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Notas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Em rede: só EN (e prowords padrão)",
              "'Loud and clear' = qualidade ótima de sinal (5 em 5), abreviado 'Lima Charlie'",
              "MAYDAY é só para perigo de vida imediato — abusar dessensibiliza a rede",
              "EMCON = ordem de silêncio total, não só limitação de transmissão",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle radio et communications. Tous les termes ont des équivalents techniques dans les quatre langues mais sur réseau opérationnel OTAN on utilise exclusivement l'anglais.",
    sections: [
      {
        heading: "Radio et comms",
        blocks: [
          {
            type: "table",
            headers: ["EN", "IT", "PT-BR", "FR"],
            rows: TERMS,
          },
        ],
      },
      {
        heading: "Notes d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "Sur réseau : EN uniquement (et prowords standard)",
              "« Loud and clear » = qualité optimale du signal (5 sur 5), abrégé « Lima Charlie »",
              "MAYDAY uniquement pour péril de vie immédiat — l'abuser désensibilise le réseau",
              "EMCON = ordre de silence total, pas une simple limitation d'émission",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
