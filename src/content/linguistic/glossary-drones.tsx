import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["UAV / UAS", "APR / sistema aereo a pilotaggio remoto", "VANT / UAS", "Drone / système de drone"],
  ["FPV drone", "Drone FPV", "Drone FPV", "Drone FPV"],
  ["Quadcopter", "Quadricottero", "Quadricóptero", "Quadricoptère"],
  ["Fixed-wing", "Ala fissa", "Asa fixa", "Aile fixe"],
  ["Loitering munition", "Munizione vagante / kamikaze", "Munição loitering / kamikaze", "Munition rôdeuse"],
  ["ISR drone", "Drone ricognizione", "Drone ISR / reconhecimento", "Drone ISR"],
  ["Bomber drone", "Drone bombardiere", "Drone bombardeiro", "Drone bombardier"],
  ["Mothership", "Mothership (drone vettore)", "Mothership", "Mothership"],
  ["Goggles / HMD", "Visore FPV", "Goggles", "Lunettes FPV"],
  ["Telemetry", "Telemetria", "Telemetria", "Télémétrie"],
  ["Video downlink", "Downlink video", "Downlink de vídeo", "Liaison vidéo descendante"],
  ["RC link", "Collegamento radiocomando", "Link RC", "Liaison radiocommande"],
  ["Frequency hopping", "Salti di frequenza", "Salto de frequência", "Saut de fréquence"],
  ["Analog video", "Video analogico", "Vídeo analógico", "Vidéo analogique"],
  ["Digital HD link", "Link digitale HD", "Link digital HD", "Liaison numérique HD"],
  ["GPS jam", "Jam GPS", "Jam GPS", "Brouillage GPS"],
  ["Spoofing", "Spoofing", "Spoofing", "Leurrage"],
  ["RTH", "Return-to-home", "RTH / retorno", "Retour automatique"],
  ["Failsafe", "Failsafe", "Failsafe", "Failsafe"],
  ["Geofence", "Geofence", "Geofence", "Géo-clôture"],
  ["Payload", "Carico utile", "Payload", "Charge utile"],
  ["Drop", "Sgancio (granata)", "Drop", "Largage"],
  ["Bomblet", "Submunizione", "Submunição", "Sous-munition"],
  ["Anti-drone gun", "Fucile anti-drone", "Fuzil anti-drone", "Fusil anti-drone"],
  ["Net gun", "Cattura a rete", "Captura por rede", "Capture par filet"],
  ["EW pod", "Pod EW", "Pod EW", "Nacelle GE"],
  ["Spotter drone", "Drone spotter", "Drone spotter", "Drone observateur"],
  ["Strike drone", "Drone d'attacco", "Drone de ataque", "Drone d'attaque"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela del dominio droni. Sul fronte ucraino il vocabolario è ibrido: standard NATO + termini slang russi e ucraini diffusi nelle squadre. Memorizzare il termine inglese ufficiale resta lo standard di rete.",
    sections: [
      {
        heading: "Drone e UAS",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Slang operativo UA",
        blocks: [
          {
            type: "ul",
            items: [
              "'Птица' (ptitsa, 'uccello') — generico per drone in entrambe le forze",
              "'Mavik' — riferimento generico a DJI Mavic 3",
              "'Vamp' / 'Babà-Yaga' — drone bombardiere pesante UA notturno",
              "'Lancet' — loitering munition russa (ZALA)",
              "'Shahed' / 'Geran' — UAV iraniano/russo a lungo raggio",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel terminology of the drone domain. On the Ukrainian front vocabulary is hybrid: NATO standard plus Russian and Ukrainian slang adopted in teams. Memorising the English official term remains the net standard.",
    sections: [
      {
        heading: "Drones and UAS",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "UA operational slang",
        blocks: [
          {
            type: "ul",
            items: [
              "'Птица' (ptitsa, 'bird') — generic for drone on both sides",
              "'Mavik' — generic reference to DJI Mavic 3",
              "'Vamp' / 'Baba-Yaga' — heavy UA night bomber drone",
              "'Lancet' — Russian loitering munition (ZALA)",
              "'Shahed' / 'Geran' — Iranian/Russian long-range UAV",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela do domínio drones. No front ucraniano o vocabulário é híbrido: padrão OTAN mais slang russo e ucraniano. Memorizar o termo inglês oficial continua sendo o padrão de rede.",
    sections: [
      {
        heading: "Drones e UAS",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Gíria operacional UA",
        blocks: [
          {
            type: "ul",
            items: [
              "'Птица' (ptitsa, 'pássaro') — genérico para drone em ambos os lados",
              "'Mavik' — referência genérica a DJI Mavic 3",
              "'Vamp' / 'Baba-Yaga' — bombardeiro noturno pesado UA",
              "'Lancet' — loitering munition russa (ZALA)",
              "'Shahed' / 'Geran' — UAV iraniano/russo de longo alcance",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle du domaine drones. Sur le front ukrainien le vocabulaire est hybride : standard OTAN plus argot russe et ukrainien adopté en équipe. Le terme anglais officiel reste le standard de réseau.",
    sections: [
      {
        heading: "Drones et UAS",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Argot opérationnel UA",
        blocks: [
          {
            type: "ul",
            items: [
              "« Птица » (ptitsa, « oiseau ») — générique pour drone des deux côtés",
              "« Mavik » — référence générique au DJI Mavic 3",
              "« Vamp » / « Baba-Yaga » — bombardier de nuit lourd UA",
              "« Lancet » — munition rôdeuse russe (ZALA)",
              "« Shahed » / « Geran » — UAV iranien/russe longue portée",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
