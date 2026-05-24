import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["HUMINT", "HUMINT / fonti umane", "HUMINT / fontes humanas", "ROHUM / sources humaines"],
  ["SIGINT", "SIGINT / segnali", "SIGINT / sinais", "ROEM / renseignement d'origine électromagnétique"],
  ["IMINT", "IMINT / immagini", "IMINT / imagens", "ROIM / renseignement d'origine image"],
  ["OSINT", "OSINT / fonti aperte", "OSINT / fontes abertas", "ROSO / sources ouvertes"],
  ["MASINT", "MASINT / misurazioni e firma", "MASINT / medições e assinaturas", "MASINT / mesures et signatures"],
  ["GEOINT", "GEOINT / geospaziale", "GEOINT / geoespacial", "GEOINT / géospatial"],
  ["Target package", "Pacchetto bersaglio", "Pacote de alvo", "Dossier d'objectif"],
  ["NAI (named area of interest)", "Area di interesse nominata (NAI)", "Área de interesse nomeada (NAI)", "Zone d'intérêt nommée (NAI)"],
  ["TAI (target area of interest)", "Area di interesse bersaglio (TAI)", "Área de interesse-alvo (TAI)", "Zone d'objectif (TAI)"],
  ["CCIR (commander's critical info req.)", "Requisiti informativi critici del comandante (CCIR)", "Requisitos críticos do comandante (CCIR)", "Besoins essentiels du commandant (CCIR)"],
  ["PIR (priority intel requirement)", "Requisito informativo prioritario (PIR)", "Requisito prioritário de inteligência (PIR)", "Besoin prioritaire de renseignement (PIR)"],
  ["IPB (intel preparation of battlespace)", "Preparazione informativa del campo di battaglia (IPB)", "Preparação de inteligência do espaço de batalha (IPB)", "Préparation du renseignement du champ de bataille (PRCB)"],
  ["EEFI (essential elements of friendly info)", "Elementi essenziali informazione amica (EEFI)", "Elementos essenciais de informação amiga (EEFI)", "Éléments essentiels d'information ami (EEFI)"],
  ["Pattern of life", "Profilo di vita", "Padrão de vida", "Habitudes de vie / mode de vie"],
  ["Link analysis", "Analisi delle relazioni / link analysis", "Análise de vínculos", "Analyse de liens"],
  ["Sources and methods", "Fonti e metodi", "Fontes e métodos", "Sources et méthodes"],
  ["F3EAD cycle", "Ciclo F3EAD", "Ciclo F3EAD", "Cycle F3EAD"],
  ["Indications and warnings (I&W)", "Indicatori e allarme (I&W)", "Indicadores e alertas (I&W)", "Indicateurs et alerte (I&W)"],
  ["Fusion cell", "Cellula di fusione", "Célula de fusão", "Cellule de fusion"],
  ["S2 / J2", "S2 / J2 (intelligence di staff)", "S2 / J2 (inteligência de estado-maior)", "S2 / J2 (renseignement d'état-major)"],
  ["INTSUM (intel summary)", "INTSUM / sintesi informativa", "INTSUM / sumário de inteligência", "INTSUM / synthèse de renseignement"],
  ["SPOTREP (spot report)", "SPOTREP / segnalazione immediata", "SPOTREP / relatório imediato", "SPOTREP / compte-rendu immédiat"],
  ["Debrief", "Debrief / intervista al rientro", "Debrief / entrevista de retorno", "Débriefing"],
  ["Walk-in (source)", "Fonte spontanea (walk-in)", "Fonte espontânea (walk-in)", "Source spontanée (walk-in)"],
  ["Dead drop", "Dead drop / consegna asincrona", "Dead drop / entrega assíncrona", "Boîte aux lettres morte"],
  ["Cover", "Copertura", "Cobertura / disfarce", "Couverture"],
  ["Cover for action", "Copertura per l'azione", "Cobertura para ação", "Couverture pour l'action"],
  ["Cover for status", "Copertura per lo status", "Cobertura para status", "Couverture pour le statut"],
  ["Surveillance detection route (SDR)", "Percorso anti-sorveglianza (SDR)", "Rota de detecção de vigilância (SDR)", "Itinéraire de détection de surveillance (IDS)"],
  ["Asset / source", "Asset / fonte", "Asset / fonte", "Source / agent"],
  ["Handler", "Gestore / case officer", "Oficial gestor / handler", "Traitant"],
  ["Cut-out", "Intermediario (cut-out)", "Intermediário (cut-out)", "Intermédiaire (cut-out)"],
  ["Tradecraft", "Mestiere / tradecraft", "Tradecraft", "Métier / tradecraft"],
  ["Collection plan", "Piano di raccolta", "Plano de coleta", "Plan de recherche"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela del dominio intelligence e OSINT. La nomenclatura NATO è quella di riferimento per ogni cellula multinazionale; le forme italiane sono in uso nei manuali del Reparto Informazioni e Sicurezza dello Stato Maggiore. La distinzione fra discipline (HUMINT, SIGINT, OSINT...) è dottrinalmente rigida e non intercambiabile.",
    sections: [
      {
        heading: "Intelligence e OSINT",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Note d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Le sigle delle discipline (HUMINT, SIGINT, ecc.) restano in inglese in tutte le lingue: gli equivalenti nazionali esistono ma non si usano in rete o nei prodotti finiti multinazionali",
              "NAI ≠ TAI: la NAI è osservata per acquisire informazioni; la TAI è osservata perché vi si applicheranno effetti (fuoco, manovra)",
              "CCIR è l'insieme complessivo dei requisiti critici del comandante e contiene sia i PIR (cosa sa il nemico) sia gli EEFI (cosa non deve sapere su di noi)",
              "F3EAD = Find, Fix, Finish, Exploit, Analyze, Disseminate: ciclo tattico, distinto e più rapido del classico ciclo dell'intelligence",
              "'Sources and methods' è una formula di protezione: indica informazioni che devono essere oscurate dal prodotto distribuito a livello inferiore di classifica",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel terminology of the intelligence and OSINT domain. NATO nomenclature is the reference standard for any multinational cell. The discipline distinctions (HUMINT, SIGINT, OSINT, etc.) are doctrinally rigid and are not interchangeable in formal products.",
    sections: [
      {
        heading: "Intelligence and OSINT",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Usage notes",
        blocks: [
          {
            type: "ul",
            items: [
              "Discipline acronyms (HUMINT, SIGINT, etc.) remain in English in all languages; national equivalents exist but are not used on net or in multinational finished products",
              "NAI ≠ TAI: a NAI is observed to acquire information; a TAI is observed because effects (fires, manoeuvre) will be applied there",
              "CCIR is the overall set of critical requirements of the commander and contains both PIRs (what the enemy is doing) and EEFIs (what the enemy must not know about us)",
              "F3EAD = Find, Fix, Finish, Exploit, Analyze, Disseminate; a tactical cycle, faster and distinct from the classical intelligence cycle",
              "'Sources and methods' is a protection formula and marks information that must be redacted from products disseminated at a lower classification level",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela do domínio inteligência e OSINT. A nomenclatura OTAN é a referência em qualquer célula multinacional; as formas em português brasileiro estão alinhadas com a doutrina do Centro de Inteligência do Exército. A distinção entre disciplinas (HUMINT, SIGINT, OSINT...) é doutrinariamente rígida.",
    sections: [
      {
        heading: "Inteligência e OSINT",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Siglas de disciplinas (HUMINT, SIGINT, etc.) permanecem em inglês em todas as línguas; equivalentes nacionais existem mas não se usam em rede ou em produtos finalizados multinacionais",
              "NAI ≠ TAI: a NAI é observada para coletar informação; a TAI é observada porque ali serão aplicados efeitos (fogo, manobra)",
              "CCIR é o conjunto total de requisitos críticos do comandante e contém tanto os PIR (o que o inimigo faz) quanto os EEFI (o que o inimigo não deve saber)",
              "F3EAD = Find, Fix, Finish, Exploit, Analyze, Disseminate: ciclo tático, mais rápido e distinto do ciclo clássico de inteligência",
              "'Sources and methods' é fórmula de proteção: marca informação que deve ser sanitizada do produto distribuído em nível de classificação inferior",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle du domaine renseignement et OSINT. La nomenclature OTAN est la référence dans toute cellule multinationale ; les formes françaises sont conformes à la doctrine du CRR-FR et de la DRM. Les disciplines (HUMINT/ROHUM, SIGINT/ROEM, OSINT/ROSO...) ne sont pas interchangeables dans les produits formels.",
    sections: [
      {
        heading: "Renseignement et OSINT",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notes d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "Les acronymes de disciplines (HUMINT, SIGINT, etc.) restent en anglais dans toutes les langues ; les équivalents nationaux existent mais ne sont pas employés sur réseau ni dans les produits finis multinationaux",
              "NAI ≠ TAI : la NAI est observée pour acquérir du renseignement ; la TAI est observée parce qu'on y appliquera des effets (feux, manœuvre)",
              "CCIR est l'ensemble global des besoins critiques du commandant et inclut à la fois les PIR (ce que fait l'ennemi) et les EEFI (ce que l'ennemi ne doit pas savoir de nous)",
              "F3EAD = Find, Fix, Finish, Exploit, Analyze, Disseminate ; cycle tactique, plus rapide et distinct du cycle classique du renseignement",
              "« Sources and methods » est une formule de protection : marque les informations à expurger d'un produit diffusé à un niveau de classification inférieur",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
