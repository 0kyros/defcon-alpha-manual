import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Squad", "Squadra", "Esquadra", "Groupe"],
  ["Fire team", "Fire team", "Fire team", "Trinôme / Binôme"],
  ["Platoon", "Plotone", "Pelotão", "Section"],
  ["Company", "Compagnia", "Companhia", "Compagnie"],
  ["Patrol", "Pattuglia", "Patrulha", "Patrouille"],
  ["Ambush", "Imboscata", "Emboscada", "Embuscade"],
  ["Cover", "Riparo (balistico)", "Cobertura", "Couvert"],
  ["Concealment", "Occultamento", "Ocultação", "Camouflage / dissimulation"],
  ["Bound", "Balzo", "Salto / lance", "Bond"],
  ["Overwatch", "Copertura visiva di sostegno", "Cobertura de apoio", "Couverture / surveillance"],
  ["Flank", "Fianco", "Flanco", "Flanc"],
  ["Suppress", "Sopprimere col fuoco", "Suprimir com fogo", "Neutraliser par le feu"],
  ["Engage", "Ingaggiare", "Engajar", "Engager"],
  ["Break contact", "Rompere il contatto", "Quebrar contato", "Rompre le contact"],
  ["Stack", "Pila (entrata urbana)", "Pilha", "File / stick"],
  ["Breach", "Breccia / ingresso forzato", "Brecha / arrombamento", "Brèche / franchissement"],
  ["Clear (a room)", "Bonificare", "Limpar", "Nettoyer"],
  ["Hold", "Tenere (posizione)", "Manter / segurar", "Tenir"],
  ["Withdraw", "Ripiegare", "Recuar", "Se replier"],
  ["Reinforce", "Rinforzare", "Reforçar", "Renforcer"],
  ["Rally point", "Punto di raccolta", "Ponto de reunião", "Point de regroupement"],
  ["Linkup", "Giunzione tra unità", "Encontro entre unidades", "Jonction"],
  ["Sector of fire", "Settore di tiro", "Setor de tiro", "Secteur de tir"],
  ["Field of fire", "Campo di tiro", "Campo de tiro", "Champ de tir"],
  ["Dead ground", "Zona morta", "Zona morta", "Angle mort / zone morte"],
  ["High ground", "Quota dominante", "Cota dominante", "Hauteur / point haut"],
  ["Defilade", "Defilato", "Defilada", "Défilement"],
  ["Choke point", "Strozzatura", "Estrangulamento", "Goulet d'étranglement"],
  ["Avenue of approach", "Direttrice di avvicinamento", "Avenida de aproximação", "Voie d'approche"],
  ["Foxhole / fighting position", "Buca di combattimento", "Toca de combate", "Trou de combat / poste"],
  ["Sandbag", "Sacchetto di sabbia", "Saco de areia", "Sac de sable"],
  ["Trench", "Trincea", "Trincheira", "Tranchée"],
  ["Bunker", "Bunker / casamatta", "Bunker", "Bunker / casemate"],
  ["Hardened position", "Posizione fortificata", "Posição fortificada", "Position durcie"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela di fanteria. Inglese come standard operativo NATO, italiano / portoghese brasiliano / francese come lingue native più diffuse tra volontari internazionali. Memorizzare la prima colonna è obbligatorio; le altre tre sono utili per integrazione e per evitare misinterpretazioni cross-linguistiche.",
    sections: [
      {
        heading: "Manovra e combattimento",
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
              "Su rete radio: SEMPRE termine inglese (standard NATO)",
              "Su briefing in lingua nativa: termine nativo + (EN tra parentesi) la prima volta",
              "Mai tradurre 'cover' come 'copertura' generica: è specificamente riparo balistico",
              "'Concealment' ≠ 'cover': il primo è solo visivo, il secondo ferma proiettili",
              "'Bound' è un balzo singolo, 'bounding overwatch' è il movimento alternato di due squadre",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel infantry terminology. English as the NATO operational standard, Italian / Brazilian Portuguese / French as the native languages most common among international volunteers. Memorising the first column is mandatory; the others are useful for integration and to avoid cross-language misinterpretation.",
    sections: [
      {
        heading: "Manoeuvre and combat",
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
              "On radio: ALWAYS English term (NATO standard)",
              "In native-language briefings: native term + (EN in parentheses) at first occurrence",
              "Never translate 'cover' as generic 'covering': it specifically means ballistic shelter",
              "'Concealment' ≠ 'cover': the former is visual only, the latter stops bullets",
              "'Bound' is a single rush, 'bounding overwatch' is the alternating movement of two elements",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela de infantaria. Inglês como padrão operacional OTAN, italiano / português brasileiro / francês como línguas nativas mais comuns entre voluntários internacionais. Memorizar a primeira coluna é obrigatório; as outras são úteis para integração e para evitar mal-entendido entre línguas.",
    sections: [
      {
        heading: "Manobra e combate",
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
              "No rádio: SEMPRE termo inglês (padrão OTAN)",
              "Em briefings em língua nativa: termo nativo + (EN entre parênteses) na primeira ocorrência",
              "Nunca traduzir 'cover' como 'cobertura' genérica: é especificamente abrigo balístico",
              "'Concealment' ≠ 'cover': o primeiro é só visual, o segundo para projéteis",
              "'Bound' é um salto único, 'bounding overwatch' é o movimento alternado de duas equipes",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle d'infanterie. Anglais comme standard opérationnel OTAN, italien / portugais brésilien / français comme langues natives les plus courantes parmi les volontaires internationaux. Mémoriser la première colonne est obligatoire ; les autres sont utiles pour l'intégration et pour éviter les malentendus entre langues.",
    sections: [
      {
        heading: "Manœuvre et combat",
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
              "En radio : TOUJOURS le terme anglais (standard OTAN)",
              "En briefing en langue native : terme natif + (EN entre parenthèses) à la première occurrence",
              "Ne jamais traduire « cover » comme « couverture » générique : c'est spécifiquement un abri balistique",
              "« Concealment » ≠ « cover » : le premier est visuel, le second arrête les projectiles",
              "« Bound » est un bond unique, « bounding overwatch » est le mouvement alterné de deux éléments",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
