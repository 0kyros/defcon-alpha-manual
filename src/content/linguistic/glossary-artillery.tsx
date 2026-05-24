import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Fires", "Fuochi / fuoco d'appoggio", "Fogos / apoio de fogo", "Feux / appui-feu"],
  ["Indirect fire", "Tiro indiretto", "Tiro indireto", "Tir indirect"],
  ["Direct fire", "Tiro diretto", "Tiro direto", "Tir direct"],
  ["Fire mission", "Missione di tiro", "Missão de tiro", "Mission de tir"],
  ["Call for fire (CFF)", "Richiesta di fuoco", "Pedido de fogo", "Demande de tir"],
  ["Fire for effect (FFE)", "Tiro di efficacia (FFE)", "Tiro de eficácia (FFE)", "Tir d'efficacité (TE)"],
  ["Adjust fire", "Aggiustamento del tiro", "Ajuste de tiro", "Réglage du tir"],
  ["Danger close", "Danger close / fuoco vicino", "Danger close / fogo próximo", "Tir au plus près / danger close"],
  ["Gun-target line (GTL)", "Linea pezzo-bersaglio (GTL)", "Linha peça-alvo (GTL)", "Ligne pièce-but (LPB)"],
  ["Observer-target line (OTL)", "Linea osservatore-bersaglio (OTL)", "Linha observador-alvo (OTL)", "Ligne observateur-but"],
  ["Deflection", "Direzione / deflessione", "Deflexão", "Direction / déflexion"],
  ["Elevation (gun)", "Elevazione (pezzo)", "Elevação (peça)", "Élévation / hausse"],
  ["HE (high explosive)", "Esplosivo ad alto potenziale (HE)", "Alto-explosivo (AE / HE)", "Explosif brisant (HE)"],
  ["DPICM", "DPICM (submunizioni)", "DPICM (submunições)", "DPICM (sous-munitions)"],
  ["Smoke", "Fumo / fumogeno", "Fumígeno", "Fumigène"],
  ["Illumination", "Illuminante", "Iluminativo", "Éclairant"],
  ["WP (white phosphorus)", "Fosforo bianco (WP)", "Fósforo branco (WP)", "Phosphore blanc (WP)"],
  ["AT (anti-tank round)", "Anticarro (proietto)", "Anti-carro / AC", "Anti-char (AT)"],
  ["Counter-battery (CB)", "Controbatteria (CB)", "Contra-bateria (CB)", "Contre-batterie (CB)"],
  ["Q-30 / Q-36 radar", "Radar Q-30 / Q-36", "Radar Q-30 / Q-36", "Radar Q-30 / Q-36"],
  ["TOT (time on target)", "Tempo sul bersaglio (TOT)", "Tempo sobre o alvo (TOT)", "Heure sur objectif (TOT)"],
  ["MET data", "Dati meteo balistici (MET)", "Dados meteorológicos (MET)", "Données météo balistiques (MET)"],
  ["Propellant charge", "Carica di lancio", "Carga de projeção", "Charge propulsive"],
  ["Firing solution", "Soluzione di tiro", "Solução de tiro", "Solution de tir"],
  ["Shoot-and-scoot", "Tira-e-fuggi (shoot-and-scoot)", "Atira-e-foge (shoot-and-scoot)", "Tir et déplacement (shoot-and-scoot)"],
  ["Forward observer (FO)", "Osservatore avanzato (FO)", "Observador avançado (FO)", "Observateur avancé (OA)"],
  ["JTAC / FAC", "JTAC / controllore aereo tattico", "JTAC / controlador aéreo tático", "JTAC / contrôleur aérien tactique"],
  ["Grid coordinates (MGRS)", "Coordinate MGRS", "Coordenadas MGRS", "Coordonnées MGRS"],
  ["Splash", "Splash / impatto", "Splash / impacto", "Splash / impact"],
  ["Shot, over", "Colpo partito (shot)", "Tiro saiu (shot)", "Tir parti / parti, terminé"],
  ["End of mission (EOM)", "Fine missione (EOM)", "Fim de missão (EOM)", "Fin de mission (EOM)"],
  ["Battery / firing unit", "Batteria / unità di tiro", "Bateria / unidade de tiro", "Batterie / unité de tir"],
  ["Howitzer", "Obice", "Obuseiro", "Obusier"],
  ["Mortar (60/81/120)", "Mortaio (60/81/120)", "Morteiro (60/81/120)", "Mortier (60/81/120)"],
  ["MLRS / HIMARS", "MLRS / HIMARS", "MLRS / HIMARS", "MLRS / HIMARS"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela del tiro indiretto e dei fuochi d'appoggio. Le call for fire procedurali avvengono interamente in inglese su rete NATO secondo STANAG; le forme italiane sono dottrinali e si trovano nei manuali di artiglieria, ma non sono pronunciate in voce durante una missione di tiro multinazionale.",
    sections: [
      {
        heading: "Artiglieria e tiro indiretto",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Note d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "'Danger close' ha distanza-soglia variabile per arma e calibro (es. 600 m per 155 mm HE) e impone autorizzazione esplicita del comandante a terra",
              "'Fire for effect' (FFE) significa tiro a regime per neutralizzare il bersaglio; è preceduto da 'adjust fire' solo se serve correggere prima",
              "'Splash' è la chiamata dell'osservatore quando il primo colpo è in arrivo (tipicamente 5 secondi prima dell'impatto): non è la conferma di impatto",
              "Counter-battery (CB) richiede acquisizione radar (Q-36/TPQ-53) o lampo-suono; il ciclo CB tipico moderno è entro i 90 secondi dal primo colpo nemico",
              "Shoot-and-scoot è imperativo contro nemico dotato di CB radar: la batteria si sposta entro la finestra di reazione CB stimata",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel terminology of indirect fire and fire support. Procedural calls for fire are conducted entirely in English on NATO nets per STANAG; national equivalents exist in artillery manuals but are not spoken in voice during a multinational fire mission.",
    sections: [
      {
        heading: "Artillery and indirect fire",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Usage notes",
        blocks: [
          {
            type: "ul",
            items: [
              "'Danger close' has a threshold distance that varies by weapon and calibre (e.g. 600 m for 155 mm HE) and requires explicit ground commander approval",
              "'Fire for effect' (FFE) is the full-rate fire intended to neutralise the target; it is preceded by 'adjust fire' only when correction is needed first",
              "'Splash' is the observer call when the first round is inbound (typically 5 seconds before impact); it is not a confirmation of impact",
              "Counter-battery (CB) requires radar acquisition (Q-36 / TPQ-53) or sound-flash; a modern CB cycle is typically within 90 seconds of the first enemy round",
              "Shoot-and-scoot is imperative against an enemy with CB radar: the battery displaces within the estimated CB reaction window",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela do tiro indireto e do apoio de fogo. Os pedidos de fogo procedurais são conduzidos inteiramente em inglês em rede OTAN segundo STANAG; as formas em português brasileiro existem nos manuais do Comando de Artilharia do Exército mas não são pronunciadas em voz durante missão multinacional.",
    sections: [
      {
        heading: "Artilharia e tiro indireto",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "'Danger close' tem distância de limiar variável por arma e calibre (ex. 600 m para 155 mm HE) e exige autorização explícita do comandante terrestre",
              "'Fire for effect' (FFE) é o tiro pleno destinado a neutralizar o alvo; é precedido de 'adjust fire' apenas se houver necessidade de correção",
              "'Splash' é a chamada do observador quando o primeiro tiro está chegando (tipicamente 5 segundos antes do impacto): não é confirmação de impacto",
              "Contra-bateria (CB) exige aquisição por radar (Q-36 / TPQ-53) ou flash-som; o ciclo CB moderno típico é em até 90 segundos após o primeiro tiro inimigo",
              "Shoot-and-scoot é imperativo contra inimigo com radar CB: a bateria se desloca dentro da janela estimada de reação CB",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle du tir indirect et de l'appui-feu. Les demandes de tir procédurales se font intégralement en anglais sur réseau OTAN selon STANAG ; les formes françaises sont conformes au TTA et aux référentiels artillerie mais ne sont pas prononcées en voix lors d'une mission de tir multinationale.",
    sections: [
      {
        heading: "Artillerie et tir indirect",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notes d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "« Danger close » a une distance seuil qui varie selon l'arme et le calibre (par ex. 600 m pour 155 mm HE) et exige une autorisation explicite du commandant au sol",
              "« Fire for effect » (FFE) est le tir à cadence pleine destiné à neutraliser l'objectif ; il n'est précédé de « adjust fire » que si une correction est nécessaire",
              "« Splash » est l'annonce de l'observateur lorsque le premier coup est en route (typiquement 5 secondes avant l'impact) ; ce n'est pas une confirmation d'impact",
              "La contre-batterie (CB) exige une acquisition radar (Q-36 / TPQ-53) ou son-flash ; le cycle CB moderne typique est inférieur à 90 secondes après le premier coup adverse",
              "Le « shoot-and-scoot » est impératif face à un ennemi doté d'un radar CB : la batterie se déplace dans la fenêtre estimée de réaction CB",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
