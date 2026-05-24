import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const ENLISTED_ROWS: ReadonlyArray<ReadonlyArray<string>> = [
  ["OR-1", "Private (recruit)", "Soldato", "Recruta", "Soldat"],
  ["OR-2", "Private", "Soldato scelto", "Soldado", "Soldat 1ʳᵉ classe"],
  ["OR-3", "Private First Class", "Caporale", "Cabo", "Caporal"],
  ["OR-4", "Corporal / Specialist", "Caporal maggiore", "Cabo maior", "Caporal-chef"],
  ["OR-5", "Sergeant", "Sergente", "Sargento", "Sergent"],
  ["OR-6", "Staff Sergeant", "Sergente maggiore", "1º Sargento", "Sergent-chef"],
  ["OR-7", "Sergeant First Class", "Sergente maggiore capo", "Subtenente", "Adjudant"],
  ["OR-8", "Master Sergeant", "Primo maresciallo", "Sargento-mor", "Adjudant-chef"],
  ["OR-9", "Sergeant Major", "Primo maresciallo luogotenente", "Suboficial", "Major"],
];

const OFFICER_ROWS: ReadonlyArray<ReadonlyArray<string>> = [
  ["OF-1", "Lieutenant / 2nd LT", "Tenente", "Tenente", "Lieutenant"],
  ["OF-2", "Captain", "Capitano", "Capitão", "Capitaine"],
  ["OF-3", "Major", "Maggiore", "Major", "Commandant"],
  ["OF-4", "Lieutenant Colonel", "Tenente colonnello", "Tenente-coronel", "Lieutenant-colonel"],
  ["OF-5", "Colonel", "Colonnello", "Coronel", "Colonel"],
  ["OF-6", "Brigadier General", "Generale di brigata", "General de brigada", "Général de brigade"],
  ["OF-7", "Major General", "Generale di divisione", "General de divisão", "Général de division"],
  ["OF-8", "Lieutenant General", "Generale di corpo d'armata", "General de exército", "Général de corps d'armée"],
  ["OF-9", "General", "Generale", "General", "Général d'armée"],
];

const UA_NCO: ReadonlyArray<ReadonlyArray<string>> = [
  ["Soldato (Солдат)", "Soldato", "Equivalente OR-1/2"],
  ["Молодший сержант", "Sergente junior", "OR-5"],
  ["Сержант", "Sergente", "OR-5/6"],
  ["Старший сержант", "Sergente senior", "OR-6/7"],
  ["Старшина", "Maresciallo", "OR-7/8"],
  ["Майстер-сержант", "Master Sergeant", "OR-8 (introdotto post-2018)"],
  ["Головний майстер-сержант", "Senior Master Sergeant", "OR-9"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il sistema di gradi NATO usa codici OR (Other Ranks) per la truppa e gli NCO, e OF (Officers) per gli ufficiali. È una griglia di equivalenza tra le nazioni: un OR-5 italiano è funzionalmente analogo a un OR-5 polacco, ucraino, americano. La griglia non standardizza i nomi dei gradi nazionali, solo le posizioni gerarchiche.",
    sections: [
      {
        heading: "Codici NATO STANAG",
        blocks: [
          {
            type: "p",
            text: "Lo STANAG 2116 definisce 9 codici per la truppa e gli NCO (OR-1 → OR-9) e 9 codici per gli ufficiali (OF-1 → OF-9). Sopra ci sono i generali a 5 stelle (OF-10), poco diffusi nelle forze moderne.",
          },
        ],
      },
      {
        heading: "Truppa e sottufficiali (OR)",
        blocks: [
          {
            type: "table",
            headers: ["Codice", "EN", "IT", "PT-BR", "FR"],
            rows: ENLISTED_ROWS,
          },
        ],
      },
      {
        heading: "Ufficiali (OF)",
        blocks: [
          {
            type: "table",
            headers: ["Codice", "EN", "IT", "PT-BR", "FR"],
            rows: OFFICER_ROWS,
          },
        ],
      },
      {
        heading: "Gradi NCO ucraini",
        blocks: [
          {
            type: "p",
            text: "L'Ucraina ha completato dopo il 2018 una riforma del corpo NCO per allinearsi a NATO. Il sistema attuale combina nomenclatura ex-sovietica e nuovi gradi master/senior master sergeant.",
          },
          {
            type: "table",
            headers: ["Grado UA", "Traduzione", "Equivalente NATO"],
            rows: UA_NCO,
          },
        ],
      },
      {
        heading: "Cosa serve sapere sul campo",
        blocks: [
          {
            type: "ul",
            items: [
              "Riconoscere il grado del comandante della propria unità ospitante",
              "Sapere se chi ti dà un ordine è ufficiale (OF) o NCO (OR) — la natura della comunicazione cambia",
              "Non chiamare nessuno per grado in rete radio (callsign, non grado)",
              "Non assumere che gradi paralleli siano funzionalmente equivalenti: un capitano di compagnia ucraino ha più autorità su di te di un colonnello straniero senza ruolo nella catena",
              "Non auto-attribuirsi gradi non riconosciuti dalla unità ospitante",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari con background di NCO occidentali (Marines, Army, Légion) sono i più richiesti perché portano competenza tattica senza la rigidità della catena d'ufficio. La distinzione OR/OF è funzionale, non sociale — il leader effettivo di un team di 8 persone è spesso un OR-6/7, non l'ufficiale assegnato. Capire questa realtà operativa è più importante che ricordare i nomi di tutti i 18 gradi NATO.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "The NATO rank system uses OR (Other Ranks) codes for enlisted and NCOs, and OF (Officers) for officers. It is an equivalence grid between nations: an Italian OR-5 is functionally analogous to a Polish, Ukrainian, US OR-5. The grid does not standardise national rank names, only hierarchical positions.",
    sections: [
      {
        heading: "NATO STANAG codes",
        blocks: [
          {
            type: "p",
            text: "STANAG 2116 defines 9 codes for enlisted and NCOs (OR-1 → OR-9) and 9 codes for officers (OF-1 → OF-9). Above sit 5-star generals (OF-10), rare in modern forces.",
          },
        ],
      },
      {
        heading: "Enlisted and NCOs (OR)",
        blocks: [
          {
            type: "table",
            headers: ["Code", "EN", "IT", "PT-BR", "FR"],
            rows: ENLISTED_ROWS,
          },
        ],
      },
      {
        heading: "Officers (OF)",
        blocks: [
          {
            type: "table",
            headers: ["Code", "EN", "IT", "PT-BR", "FR"],
            rows: OFFICER_ROWS,
          },
        ],
      },
      {
        heading: "Ukrainian NCO ranks",
        blocks: [
          {
            type: "p",
            text: "Ukraine completed a post-2018 NCO reform to align with NATO. The current system combines former-Soviet nomenclature with new master/senior master sergeant ranks.",
          },
          {
            type: "table",
            headers: ["UA rank", "Translation", "NATO equivalent"],
            rows: UA_NCO,
          },
        ],
      },
      {
        heading: "What matters on the ground",
        blocks: [
          {
            type: "ul",
            items: [
              "Recognise the rank of your host unit's commander",
              "Know whether someone giving you an order is an officer (OF) or an NCO (OR) — communication style differs",
              "Do not address anyone by rank on radio (callsign, not rank)",
              "Do not assume parallel ranks are functionally equivalent: a Ukrainian company captain has more authority over you than a foreign colonel with no role in the chain",
              "Do not self-attribute ranks the host unit does not recognise",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Volunteers with Western NCO background (Marines, Army, Légion) are the most sought-after because they bring tactical competence without office-chain rigidity. The OR/OF distinction is functional, not social — the effective leader of an 8-person team is often an OR-6/7, not the assigned officer. Understanding this operational reality matters more than memorising all 18 NATO rank names.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O sistema OTAN de postos usa códigos OR (Other Ranks) para praças e NCOs, e OF (Officers) para oficiais. É uma grade de equivalência entre nações: um OR-5 italiano é funcionalmente análogo a um OR-5 polonês, ucraniano ou norte-americano. A grade não padroniza nomes nacionais, só posições hierárquicas.",
    sections: [
      {
        heading: "Códigos OTAN STANAG",
        blocks: [
          {
            type: "p",
            text: "O STANAG 2116 define 9 códigos para praças e NCOs (OR-1 → OR-9) e 9 códigos para oficiais (OF-1 → OF-9). Acima estão generais de 5 estrelas (OF-10), raros em forças modernas.",
          },
        ],
      },
      {
        heading: "Praças e NCOs (OR)",
        blocks: [
          {
            type: "table",
            headers: ["Código", "EN", "IT", "PT-BR", "FR"],
            rows: ENLISTED_ROWS,
          },
        ],
      },
      {
        heading: "Oficiais (OF)",
        blocks: [
          {
            type: "table",
            headers: ["Código", "EN", "IT", "PT-BR", "FR"],
            rows: OFFICER_ROWS,
          },
        ],
      },
      {
        heading: "Postos NCO ucranianos",
        blocks: [
          {
            type: "p",
            text: "A Ucrânia completou após 2018 uma reforma do corpo NCO para alinhar-se à OTAN. O sistema atual combina nomenclatura ex-soviética e novos postos master/senior master sergeant.",
          },
          {
            type: "table",
            headers: ["Posto UA", "Tradução", "Equivalente OTAN"],
            rows: UA_NCO,
          },
        ],
      },
      {
        heading: "O que importa no terreno",
        blocks: [
          {
            type: "ul",
            items: [
              "Reconhecer o posto do comandante da unidade hospedeira",
              "Saber se quem te dá uma ordem é oficial (OF) ou NCO (OR) — o estilo de comunicação muda",
              "Não chamar ninguém pelo posto em rede de rádio (indicativo, não posto)",
              "Não assumir que postos paralelos sejam funcionalmente equivalentes: um capitão ucraniano de companhia tem mais autoridade sobre você do que um coronel estrangeiro sem papel na cadeia",
              "Não se auto-atribuir postos que a unidade hospedeira não reconhece",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Voluntários com background NCO ocidental (Marines, Army, Légion) são os mais procurados porque trazem competência tática sem a rigidez da cadeia administrativa. A distinção OR/OF é funcional, não social — o líder efetivo de um team de 8 pessoas é frequentemente OR-6/7, não o oficial atribuído. Entender essa realidade operacional importa mais do que memorizar os 18 nomes de postos OTAN.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le système OTAN de grades utilise les codes OR (Other Ranks) pour les militaires du rang et sous-officiers, et OF (Officers) pour les officiers. C'est une grille d'équivalence entre nations : un OR-5 italien est fonctionnellement analogue à un OR-5 polonais, ukrainien, américain. La grille ne standardise pas les noms nationaux, seulement les positions hiérarchiques.",
    sections: [
      {
        heading: "Codes OTAN STANAG",
        blocks: [
          {
            type: "p",
            text: "Le STANAG 2116 définit 9 codes pour le rang et les sous-officiers (OR-1 → OR-9) et 9 codes pour les officiers (OF-1 → OF-9). Au-dessus, les généraux à 5 étoiles (OF-10), rares dans les forces modernes.",
          },
        ],
      },
      {
        heading: "Militaires du rang et sous-officiers (OR)",
        blocks: [
          {
            type: "table",
            headers: ["Code", "EN", "IT", "PT-BR", "FR"],
            rows: ENLISTED_ROWS,
          },
        ],
      },
      {
        heading: "Officiers (OF)",
        blocks: [
          {
            type: "table",
            headers: ["Code", "EN", "IT", "PT-BR", "FR"],
            rows: OFFICER_ROWS,
          },
        ],
      },
      {
        heading: "Sous-officiers ukrainiens",
        blocks: [
          {
            type: "p",
            text: "L'Ukraine a achevé après 2018 une réforme du corps des sous-officiers pour s'aligner sur l'OTAN. Le système actuel combine la nomenclature ex-soviétique et les nouveaux grades master/senior master sergeant.",
          },
          {
            type: "table",
            headers: ["Grade UA", "Traduction", "Équivalent OTAN"],
            rows: UA_NCO,
          },
        ],
      },
      {
        heading: "Ce qui compte sur le terrain",
        blocks: [
          {
            type: "ul",
            items: [
              "Reconnaître le grade du commandant de l'unité hôte",
              "Savoir si celui qui vous donne un ordre est officier (OF) ou sous-officier (OR) — le style de communication change",
              "Ne pas appeler quiconque par son grade sur le réseau radio (indicatif, pas grade)",
              "Ne pas supposer que des grades parallèles soient fonctionnellement équivalents : un capitaine ukrainien de compagnie a plus d'autorité sur vous qu'un colonel étranger sans rôle dans la chaîne",
              "Ne pas s'auto-attribuer des grades que l'unité hôte ne reconnaît pas",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires issus du corps sous-officiers occidental (Marines, Army, Légion) sont les plus recherchés parce qu'ils apportent une compétence tactique sans la rigidité de la chaîne administrative. La distinction OR/OF est fonctionnelle, pas sociale — le vrai chef d'une équipe de 8 personnes est souvent un OR-6/7, pas l'officier désigné. Comprendre cette réalité opérationnelle importe plus que mémoriser les 18 noms de grades OTAN.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
