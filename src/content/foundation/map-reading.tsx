import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const SCALES: ReadonlyArray<ReadonlyArray<string>> = [
  ["1:25 000", "1 cm = 250 m", "Tattica fanteria, dettaglio alto"],
  ["1:50 000", "1 cm = 500 m", "Standard NATO compagnia/battaglione"],
  ["1:100 000", "1 cm = 1 km", "Pianificazione brigata"],
  ["1:250 000", "1 cm = 2.5 km", "Movimento operativo strategico"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La lettura della carta topografica è un'abilità di base che il fronte ucraino moderno richiede ancora — sia perché ATAK e GPS falliscono in EW saturata, sia perché capire il terreno è un prerequisito di sopravvivenza che nessuna app sostituisce. Il volontario che sa leggere una carta cartacea di notte, sotto pioggia, con NVG, è quello che porta la squadra a casa quando l'elettronica si spegne.",
    sections: [
      {
        heading: "Anatomia di una carta TOPO",
        blocks: [
          {
            type: "ul",
            items: [
              "Scala — rapporto tra distanza sulla carta e sul terreno",
              "Reticolo — coordinate (MGRS/UTM o lat-lon)",
              "Curve di livello (contour) — quote del terreno",
              "Equidistanza — differenza di quota tra curve consecutive",
              "Simboli APP-6 / topografici (boschi, edifici, strade, idrografia)",
              "Legenda — chiave dei simboli e datum di riferimento",
              "Declinazione magnetica — differenza tra nord vero, nord magnetico, nord griglia",
              "Datum geodetico (WGS84 / Pulkovo 42 / ED50)",
            ],
          },
        ],
      },
      {
        heading: "Scale comuni",
        blocks: [
          {
            type: "table",
            headers: ["Scala", "Equivalenza", "Uso"],
            rows: SCALES,
          },
        ],
      },
      {
        heading: "Curve di livello e terreno",
        blocks: [
          {
            type: "ul",
            items: [
              "Curve fitte → pendio ripido (rallenta marcia, espone)",
              "Curve rade → pendio lieve (più rapido, più visibile)",
              "Curve a V con vertice verso quote alte → vallone/torrente",
              "Curve a V con vertice verso quote basse → cresta/sperone",
              "Curve chiuse concentriche → cima o conca (la legenda discrimina)",
              "Quotini — punti numerati con quota assoluta (in metri)",
            ],
          },
        ],
      },
      {
        heading: "Bussola e marcia",
        blocks: [
          {
            type: "ol",
            items: [
              "Orientare la carta con bussola: nord carta allineato a nord magnetico (correggendo per declinazione)",
              "Identificare azimut di marcia: linea tra posizione attuale e obiettivo, leggere gradi",
              "Trasferire l'azimut alla bussola e seguire la lancetta",
              "Verificare ogni 200-500 m con punti di riferimento topografici",
              "Mantenere pacing (passi) come backup quando il terreno disorienta",
            ],
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Usare carte russe/sovietiche assumendo datum WGS84 (sono Pulkovo, offset ~150-200 m)",
              "Non correggere declinazione magnetica — su 5 km l'errore arriva a 100-200 m",
              "Confondere quotini con altezza relativa",
              "Non orientare la carta prima di leggerla",
              "Fidarsi solo di GPS/ATAK senza training di carta cartacea",
              "Aprire la carta in pieno vento o pioggia senza copertura impermeabile",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "L'EW russa rende ATAK e GPS intermittenti in zone calde — non perché jammed continuamente ma perché jammed quando serve di più. La carta cartacea TOPO 1:50 000 plastificata, una bussola, un righello scala MGRS e un pacing-bead set sono il backup che funziona sempre. Le pattuglie che li portano e li sanno usare hanno una capacità che il GPS-dipendente non ha. Allenamento minimo richiesto: navigare 5 km su terreno con sola carta + bussola, di notte, sotto NVG.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Map reading is a base skill the modern Ukrainian front still requires — both because ATAK and GPS fail in EW-saturated areas, and because understanding terrain is a survival prerequisite no app replaces. The volunteer who can read a paper map at night, in rain, on NVG, is the one who brings the team home when the electronics die.",
    sections: [
      {
        heading: "Anatomy of a TOPO map",
        blocks: [
          {
            type: "ul",
            items: [
              "Scale — ratio between map distance and ground distance",
              "Grid — coordinates (MGRS/UTM or lat-lon)",
              "Contour lines — terrain elevation",
              "Contour interval — elevation difference between consecutive contours",
              "APP-6 / topographic symbols (woods, buildings, roads, hydrography)",
              "Legend — symbol key and reference datum",
              "Magnetic declination — difference between true north, magnetic north, grid north",
              "Geodetic datum (WGS84 / Pulkovo 42 / ED50)",
            ],
          },
        ],
      },
      {
        heading: "Common scales",
        blocks: [
          {
            type: "table",
            headers: ["Scale", "Equivalence", "Use"],
            rows: SCALES,
          },
        ],
      },
      {
        heading: "Contours and terrain",
        blocks: [
          {
            type: "ul",
            items: [
              "Tight contours → steep slope (slow march, exposure)",
              "Spread contours → gentle slope (faster, more visible)",
              "V-contours pointing uphill → valley/stream",
              "V-contours pointing downhill → ridge/spur",
              "Concentric closed contours → peak or depression (legend disambiguates)",
              "Spot heights — numbered points with absolute elevation in metres",
            ],
          },
        ],
      },
      {
        heading: "Compass and march",
        blocks: [
          {
            type: "ol",
            items: [
              "Orient the map with compass: map north aligned to magnetic north (correcting for declination)",
              "Identify march azimuth: line between current position and objective, read degrees",
              "Transfer azimuth to compass and follow needle",
              "Verify every 200-500 m using topographic reference points",
              "Maintain pacing (steps) as backup when terrain disorients",
            ],
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Using Russian/Soviet maps assuming WGS84 datum (they are Pulkovo, offset ~150-200 m)",
              "Not correcting magnetic declination — at 5 km the error reaches 100-200 m",
              "Confusing spot heights with relative elevation",
              "Not orienting the map before reading",
              "Trusting only GPS/ATAK without paper-map training",
              "Opening the map in heavy wind or rain without waterproof cover",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Russian EW makes ATAK and GPS intermittent in hot zones — not because jammed continuously but because jammed when most needed. A laminated 1:50 000 paper TOPO, a compass, an MGRS scale ruler and a pacing-bead set are the backup that always works. Patrols that carry and know how to use them have a capability the GPS-dependent do not. Minimum training required: navigate 5 km on terrain with map + compass only, at night, under NVG.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Leitura de carta topográfica é uma habilidade base que o front ucraniano moderno ainda exige — porque ATAK e GPS falham em áreas saturadas de EW, e porque entender o terreno é pré-requisito de sobrevivência que nenhum app substitui. O voluntário que sabe ler carta em papel à noite, na chuva, com NVG, é quem traz a equipe de volta quando a eletrônica morre.",
    sections: [
      {
        heading: "Anatomia de uma carta TOPO",
        blocks: [
          {
            type: "ul",
            items: [
              "Escala — razão entre distância na carta e no terreno",
              "Reticulado — coordenadas (MGRS/UTM ou lat-lon)",
              "Curvas de nível — cotas do terreno",
              "Equidistância — diferença de altura entre curvas consecutivas",
              "Símbolos APP-6 / topográficos (matas, edifícios, estradas, hidrografia)",
              "Legenda — chave de símbolos e datum de referência",
              "Declinação magnética — diferença entre norte verdadeiro, magnético, da grade",
              "Datum geodésico (WGS84 / Pulkovo 42 / ED50)",
            ],
          },
        ],
      },
      {
        heading: "Escalas comuns",
        blocks: [
          {
            type: "table",
            headers: ["Escala", "Equivalência", "Uso"],
            rows: SCALES,
          },
        ],
      },
      {
        heading: "Curvas de nível e terreno",
        blocks: [
          {
            type: "ul",
            items: [
              "Curvas juntas → encosta íngreme (marcha lenta, exposição)",
              "Curvas espaçadas → encosta suave (mais rápida, mais visível)",
              "Curvas em V apontando para cima → vale/curso d'água",
              "Curvas em V apontando para baixo → crista/esporão",
              "Curvas fechadas concêntricas → pico ou depressão (a legenda diferencia)",
              "Pontos cotados — pontos numerados com cota absoluta em metros",
            ],
          },
        ],
      },
      {
        heading: "Bússola e marcha",
        blocks: [
          {
            type: "ol",
            items: [
              "Orientar a carta com bússola: norte da carta alinhado ao norte magnético (corrigindo declinação)",
              "Identificar azimute de marcha: linha entre posição atual e objetivo, ler em graus",
              "Transferir azimute para a bússola e seguir a agulha",
              "Verificar a cada 200-500 m usando pontos topográficos",
              "Manter pacing (passos) como backup quando o terreno desorienta",
            ],
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Usar cartas russas/soviéticas assumindo datum WGS84 (são Pulkovo, offset ~150-200 m)",
              "Não corrigir declinação magnética — em 5 km o erro chega a 100-200 m",
              "Confundir pontos cotados com altura relativa",
              "Não orientar a carta antes de lê-la",
              "Confiar só em GPS/ATAK sem treino de carta em papel",
              "Abrir a carta em vento ou chuva forte sem capa impermeável",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "EW russa torna ATAK e GPS intermitentes em zonas quentes — não por jamming contínuo, mas por jamming na hora certa. Carta em papel TOPO 1:50 000 plastificada, bússola, régua de escala MGRS e pacing-bead set são o backup que sempre funciona. Patrulhas que os carregam e sabem usar têm capacidade que o GPS-dependente não tem. Treino mínimo: navegar 5 km em terreno só com carta + bússola, à noite, sob NVG.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La lecture de carte topographique est une compétence de base que le front ukrainien moderne exige encore — parce qu'ATAK et GPS échouent en zones saturées de GE, et parce que comprendre le terrain est un prérequis de survie qu'aucune application ne remplace. Le volontaire qui sait lire une carte papier de nuit, sous la pluie, en NVG, est celui qui ramène l'équipe quand l'électronique meurt.",
    sections: [
      {
        heading: "Anatomie d'une carte TOPO",
        blocks: [
          {
            type: "ul",
            items: [
              "Échelle — rapport entre distance sur la carte et sur le terrain",
              "Quadrillage — coordonnées (MGRS/UTM ou lat-lon)",
              "Courbes de niveau — altitudes du terrain",
              "Équidistance — différence d'altitude entre courbes successives",
              "Symboles APP-6 / topographiques (bois, bâtiments, routes, hydrographie)",
              "Légende — clé des symboles et datum de référence",
              "Déclinaison magnétique — différence entre nord vrai, nord magnétique, nord quadrillage",
              "Datum géodésique (WGS84 / Pulkovo 42 / ED50)",
            ],
          },
        ],
      },
      {
        heading: "Échelles courantes",
        blocks: [
          {
            type: "table",
            headers: ["Échelle", "Équivalence", "Usage"],
            rows: SCALES,
          },
        ],
      },
      {
        heading: "Courbes de niveau et terrain",
        blocks: [
          {
            type: "ul",
            items: [
              "Courbes serrées → pente raide (marche lente, exposition)",
              "Courbes espacées → pente douce (plus rapide, plus visible)",
              "Courbes en V pointant vers le haut → vallon / cours d'eau",
              "Courbes en V pointant vers le bas → crête / éperon",
              "Courbes fermées concentriques → sommet ou dépression (légende discrimine)",
              "Points cotés — points numérotés avec altitude absolue en mètres",
            ],
          },
        ],
      },
      {
        heading: "Boussole et marche",
        blocks: [
          {
            type: "ol",
            items: [
              "Orienter la carte à la boussole : nord carte aligné au nord magnétique (corriger la déclinaison)",
              "Identifier l'azimut de marche : ligne entre position actuelle et objectif, lire en degrés",
              "Reporter l'azimut sur la boussole et suivre l'aiguille",
              "Vérifier tous les 200-500 m sur des points topographiques",
              "Maintenir le pacing (pas) en backup quand le terrain désoriente",
            ],
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Utiliser des cartes russes/soviétiques en supposant un datum WGS84 (Pulkovo, offset ~150-200 m)",
              "Ne pas corriger la déclinaison magnétique — sur 5 km l'erreur atteint 100-200 m",
              "Confondre points cotés et altitude relative",
              "Ne pas orienter la carte avant de la lire",
              "Faire confiance uniquement à GPS/ATAK sans entraînement papier",
              "Ouvrir la carte en plein vent ou pluie sans couverture étanche",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "La GE russe rend ATAK et GPS intermittents en zones chaudes — pas par jamming continu mais par jamming au moment où on en a le plus besoin. Une carte papier TOPO 1:50 000 plastifiée, une boussole, une règle d'échelle MGRS et un set de pacing-beads sont le backup qui marche toujours. Les patrouilles qui les portent et savent les utiliser ont une capacité que les GPS-dépendants n'ont pas. Entraînement minimum : naviguer 5 km en terrain avec carte + boussole uniquement, de nuit, sous NVG.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
