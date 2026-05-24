import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["MOUT (military ops urban terrain)", "Operazioni militari in ambito urbano (MOUT)", "Operações militares em terreno urbano (MOUT)", "Combat en zone urbaine (MOUT)"],
  ["FIBUA (fighting in built-up areas)", "Combattimento in aree edificate (FIBUA)", "Combate em áreas edificadas (FIBUA)", "Combat en zone bâtie (FIBUA)"],
  ["Stack", "Stack / colonna d'ingresso", "Stack / coluna de entrada", "Colonne d'assaut / stack"],
  ["Breach", "Apertura / breccia", "Brecha / arrombamento", "Brèche / effraction"],
  ["Hard entry", "Ingresso forzato", "Entrada forçada", "Entrée dure / par effraction"],
  ["Soft entry", "Ingresso discreto", "Entrada discreta", "Entrée douce"],
  ["Ladder entry", "Ingresso a scala", "Entrada por escada", "Entrée par échelle"],
  ["Clear (a room)", "Bonificare (un locale)", "Limpar (um cômodo)", "Nettoyer (une pièce)"],
  ["Hold", "Tenere / consolidare", "Manter / consolidar", "Tenir / consolider"],
  ["Threshold", "Soglia (di porta)", "Soleira / umbral", "Seuil de porte"],
  ["Fatal funnel", "Imbuto fatale (porta)", "Funil fatal", "Entonnoir fatal"],
  ["Slicing the pie", "Affettare la torta / pie", "Fatiar a pizza", "Découper le gâteau"],
  ["Four-corner / four corners", "Quattro angoli (locale)", "Quatro cantos", "Quatre coins"],
  ["T-intersection", "Incrocio a T", "Cruzamento em T", "Carrefour en T"],
  ["Room dynamics / point of dominance", "Dinamiche del locale / punti di dominio", "Dinâmica de cômodo / pontos de dominância", "Dynamique de pièce / points de domination"],
  ["Deconfliction", "Deconflittualizzazione / deconfliction", "Desconflito", "Déconfliction"],
  ["Friendly point / blue position", "Posizione amica", "Posição amiga", "Position amie"],
  ["Hostile presence", "Presenza ostile", "Presença hostil", "Présence hostile"],
  ["Hostile structure", "Struttura ostile", "Estrutura hostil", "Structure hostile"],
  ["Hardened structure", "Struttura indurita / fortificata", "Estrutura endurecida", "Structure durcie"],
  ["Sandbag emplacement", "Postazione con sacchi di sabbia", "Posição com sacos de areia", "Emplacement à sacs de sable"],
  ["High-angle threat", "Minaccia ad alto angolo", "Ameaça em alto ângulo", "Menace en plongée"],
  ["Defilade (urban)", "Defilamento (urbano)", "Defilada urbana", "Défilement (urbain)"],
  ["Rooftop overwatch", "Sorveglianza dai tetti", "Sobrevigia em telhado", "Surveillance depuis les toits"],
  ["Loophole", "Feritoia improvvisata", "Seteira improvisada", "Meurtrière improvisée"],
  ["Mouse-holing", "Apertura di passaggio fra muri (mouse-hole)", "Mouse-hole / passagem entre paredes", "Mouse-holing / passage inter-murs"],
  ["Cordon", "Cordone / cintura", "Cordão de isolamento", "Bouclage / cordon"],
  ["Strongpoint", "Punto forte", "Ponto-forte", "Point d'appui"],
  ["Block / sector", "Isolato / settore", "Quadra / setor", "Pâté / secteur"],
  ["Rubble / debris field", "Macerie / campo di detriti", "Escombros / campo de detritos", "Décombres / champ de gravats"],
  ["Subterranean / sub-T", "Sotterraneo / sub-T", "Subterrâneo / sub-T", "Souterrain / sub-T"],
  ["Civilian on objective (COB)", "Civili sull'obiettivo (COB)", "Civis no objetivo (COB)", "Civils sur l'objectif (COB)"],
  ["No-shoot / non-combatant", "Non-bersaglio / non combattente", "Não-alvo / não-combatente", "Non-cible / non-combattant"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela del combattimento urbano. Il vocabolario in uso operativo è quasi interamente anglofono (MOUT, stack, breach, slicing the pie) anche in formazioni non-NATO; le forme italiane esistono nei manuali ma non vengono pronunciate in rete o nel briefing di plotone.",
    sections: [
      {
        heading: "Combattimento urbano",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Note d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "MOUT è il termine USA; FIBUA è il termine britannico/Commonwealth; nei manuali NATO compaiono entrambi ma in pratica MOUT prevale",
              "'Clear' indica solo che il locale è stato bonificato in quel momento — non implica controllo permanente, che è 'hold'",
              "Il 'fatal funnel' è la soglia di porta e immediatamente dietro: zona di massima vulnerabilità che si attraversa con rapidità e con sequenza definita",
              "'Slicing the pie' descrive l'avanzamento ad arco attorno a un angolo per esporre progressivamente settori del locale prima di entrare",
              "'High-angle threat' in urbano non è solo minaccia mortaio, ma anche cecchino su edificio sopraelevato: la reazione tattica è diversa",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel terminology for urban combat. The operational vocabulary is almost entirely English (MOUT, stack, breach, slicing the pie) even in non-NATO formations; national equivalents exist in manuals but are not spoken on net or in platoon briefings.",
    sections: [
      {
        heading: "Urban combat",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Usage notes",
        blocks: [
          {
            type: "ul",
            items: [
              "MOUT is the US term; FIBUA is the British and Commonwealth term; NATO manuals use both but MOUT prevails in practice",
              "'Clear' only indicates that the room has been cleared at that moment; it does not imply permanent control, which is 'hold'",
              "The 'fatal funnel' is the doorway threshold and the area immediately behind it; the zone of maximum vulnerability is crossed quickly and in a defined sequence",
              "'Slicing the pie' describes the arc-step movement around a corner to progressively expose sectors of a room before entering",
              "'High-angle threat' in urban context is not just mortar threat but also a sniper on a higher floor; the tactical reaction is different",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela do combate urbano. O vocabulário operacional é quase inteiramente inglês (MOUT, stack, breach, slicing the pie) mesmo em formações fora da OTAN; as formas em português existem nos manuais mas não se pronunciam em rede nem em briefing de pelotão.",
    sections: [
      {
        heading: "Combate urbano",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "MOUT é o termo dos EUA; FIBUA é o termo britânico e da Commonwealth; manuais OTAN usam ambos mas MOUT prevalece na prática",
              "'Clear' indica apenas que o cômodo foi limpo naquele momento; não implica controle permanente, que é 'hold'",
              "O 'fatal funnel' é a soleira da porta e a área imediatamente atrás: zona de máxima vulnerabilidade que se atravessa com rapidez e em sequência definida",
              "'Slicing the pie' descreve o avanço em arco em torno de uma quina para expor progressivamente setores do cômodo antes da entrada",
              "'High-angle threat' em contexto urbano não é só ameaça de morteiro mas também atirador em andar superior: a reação tática é distinta",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle du combat urbain. Le vocabulaire opérationnel est presque entièrement anglophone (MOUT, stack, breach, slicing the pie) y compris dans des formations hors OTAN ; les formes françaises existent dans les manuels mais ne sont pas prononcées sur réseau ni en briefing de section.",
    sections: [
      {
        heading: "Combat en zone urbaine",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notes d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "MOUT est le terme américain ; FIBUA est le terme britannique et du Commonwealth ; les manuels OTAN emploient les deux mais MOUT prédomine en pratique",
              "« Clear » indique seulement que la pièce a été nettoyée à cet instant ; cela n'implique pas un contrôle permanent, qui s'exprime par « hold »",
              "Le « fatal funnel » est le seuil de porte et la zone immédiatement en arrière : zone de vulnérabilité maximale, traversée rapidement et selon une séquence définie",
              "« Slicing the pie » décrit le déplacement en arc autour d'un angle pour exposer progressivement les secteurs d'une pièce avant d'entrer",
              "« High-angle threat » en contexte urbain n'est pas seulement la menace mortier mais aussi un tireur en étage supérieur : la réaction tactique diffère",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
