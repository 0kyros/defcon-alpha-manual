import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La struttura militare moderna è una piramide funzionale: piccoli elementi che si compongono in formazioni più grandi attraverso regole di subordinazione e supporto. Conoscerla è necessario per capire chi parla con chi, chi ordina cosa e dove si trova il proprio team nel quadro complessivo.",
    sections: [
      {
        heading: "Scala dimensionale",
        blocks: [
          {
            type: "p",
            text: "La scala è approssimativa e varia per nazione, doctrina ed epoca. I numeri di seguito sono orientativi per la fanteria leggera moderna.",
          },
          {
            type: "table",
            headers: ["Livello", "Effettivo", "Comando", "Composizione tipica"],
            rows: [
              ["Fire team", "3–5", "Team leader (NCO)", "Carabine, MG/AR, granate"],
              ["Squad / sezione", "8–12", "Squad leader (NCO)", "2 fire team + leader"],
              ["Plotone", "30–40", "Plotone leader (officer)", "3–4 squad + comando"],
              ["Compagnia", "100–150", "Comandante di compagnia (CPT)", "3–4 plotoni + supporti"],
              ["Battaglione", "500–800", "Comandante di battaglione (LTC)", "3–5 compagnie + staff"],
              ["Brigata / reggimento", "3 000–5 000", "Comandante di brigata (COL)", "Battaglioni + supporti"],
              ["Divisione", "10 000–20 000", "Divisional commander (BG/MG)", "Brigate + servizi"],
            ],
          },
        ],
      },
      {
        heading: "Logica funzionale",
        blocks: [
          {
            type: "p",
            text: "La struttura riflette tre principi: capacità di sopravvivere come unità, capacità di generare effetto, capacità di essere sostenuta logisticamente. Il fire team sopravvive, lo squad genera effetto puntuale, il plotone manovra, la compagnia tiene un settore, il battaglione opera autonomamente per giorni, la brigata combina armi.",
          },
          {
            type: "ul",
            items: [
              "Comando: una persona decide e si assume la responsabilità a ogni livello",
              "Comunicazione: ogni livello ha una rete radio interna e una verso l'alto",
              "Logistica: i battaglioni iniziano ad avere supporti organici (medical, supply, IT)",
              "Combinazione di armi: dalla brigata in su si combinano fanteria, fuoco, ricognizione, EW",
            ],
          },
        ],
      },
      {
        heading: "Volontari internazionali in Ucraina",
        blocks: [
          {
            type: "p",
            text: "Le unità di volontari internazionali in Ucraina si collocano tipicamente a livello team (3–8 effettivi) o squad (fino a 12) all'interno di compagnie e battaglioni ucraini o di distaccamenti speciali (HUR, SSO). La catena di comando è dunque: team leader internazionale → comandante ucraino della unità ospitante → comando superiore ucraino. Capire questa catena è essenziale per non saltare livelli e non emettere ordini fuori canale.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Trattare il proprio team come unità autonoma slegata dal battaglione ospitante",
              "Bypassare il comandante ucraino per parlare direttamente con il comando superiore",
              "Confondere ruolo amministrativo (presenza sul ruolino) e ruolo operativo (catena di fires)",
              "Promuoversi titoli ('comandante di plotone') non riconosciuti dalla unità ospitante",
              "Non sapere a quale brigata o distaccamento si appartiene quando un altro reparto chiede",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Il volontario che funziona conosce la struttura sopra di sé per tre livelli e quella sotto di sé per due. Conosce il nome del proprio battaglione, il numero della propria brigata, il distaccamento di appartenenza, e sa identificarli sotto stress. Questa conoscenza non è gerarchica — è OPSEC inversa: in caso di perdita di comunicazione, sapere a chi rispondere ti riporta nel sistema; non saperlo ti lascia isolato.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Modern military structure is a functional pyramid: small elements composing into larger formations through rules of subordination and support. Knowing it is necessary to understand who talks to whom, who orders what, and where your team sits in the wider picture.",
    sections: [
      {
        heading: "Size scale",
        blocks: [
          {
            type: "p",
            text: "The scale is approximate and varies by nation, doctrine and era. The numbers below are indicative for modern light infantry.",
          },
          {
            type: "table",
            headers: ["Level", "Strength", "Command", "Typical composition"],
            rows: [
              ["Fire team", "3–5", "Team leader (NCO)", "Carbines, MG/AR, grenades"],
              ["Squad / section", "8–12", "Squad leader (NCO)", "2 fire teams + leader"],
              ["Platoon", "30–40", "Platoon leader (officer)", "3–4 squads + HQ"],
              ["Company", "100–150", "Company commander (CPT)", "3–4 platoons + supports"],
              ["Battalion", "500–800", "Battalion commander (LTC)", "3–5 companies + staff"],
              ["Brigade / regiment", "3 000–5 000", "Brigade commander (COL)", "Battalions + supports"],
              ["Division", "10 000–20 000", "Divisional commander (BG/MG)", "Brigades + services"],
            ],
          },
        ],
      },
      {
        heading: "Functional logic",
        blocks: [
          {
            type: "p",
            text: "Structure reflects three principles: ability to survive as a unit, ability to generate effect, ability to be sustained logistically. The fire team survives, the squad generates point effect, the platoon manoeuvres, the company holds a sector, the battalion operates autonomously for days, the brigade combines arms.",
          },
          {
            type: "ul",
            items: [
              "Command: one person decides and is responsible at every level",
              "Communications: each level has an internal radio net and one to higher",
              "Logistics: battalions begin to have organic support (medical, supply, IT)",
              "Combined arms: from brigade up, infantry, fires, recon, EW are combined",
            ],
          },
        ],
      },
      {
        heading: "International volunteers in Ukraine",
        blocks: [
          {
            type: "p",
            text: "International volunteer units in Ukraine typically sit at team (3–8) or squad (up to 12) level inside Ukrainian companies and battalions, or inside special detachments (HUR, SSO). The chain of command is therefore: international team leader → Ukrainian commander of the hosting unit → Ukrainian higher command. Understanding this chain is essential to avoid skipping levels and emitting orders out of channel.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Treating your team as an autonomous unit detached from the host battalion",
              "Bypassing the Ukrainian commander to talk directly to higher",
              "Confusing administrative role (presence on the roster) with operational role (fires chain)",
              "Self-appointed titles (\"platoon commander\") not recognised by the hosting unit",
              "Not knowing which brigade or detachment you belong to when another unit asks",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The volunteer who functions knows the structure above them for three levels and below for two. They know the name of their battalion, the number of their brigade, the detachment they belong to, and can identify them under stress. This knowledge is not hierarchical posturing — it is inverse OPSEC: on loss of communications, knowing whom to report to brings you back into the system; not knowing leaves you isolated.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "A estrutura militar moderna é uma pirâmide funcional: pequenos elementos que se compõem em formações maiores por regras de subordinação e apoio. Conhecê-la é necessário para entender quem fala com quem, quem ordena o quê e onde seu team se encaixa no quadro geral.",
    sections: [
      {
        heading: "Escala dimensional",
        blocks: [
          {
            type: "p",
            text: "A escala é aproximada e varia por nação, doutrina e época. Os números abaixo são indicativos para infantaria leve moderna.",
          },
          {
            type: "table",
            headers: ["Nível", "Efetivo", "Comando", "Composição típica"],
            rows: [
              ["Fire team", "3–5", "Team leader (NCO)", "Carabinas, MG/AR, granadas"],
              ["Esquadra", "8–12", "Squad leader (NCO)", "2 fire teams + líder"],
              ["Pelotão", "30–40", "Comandante de pelotão (oficial)", "3–4 esquadras + HQ"],
              ["Companhia", "100–150", "Comandante de companhia (CPT)", "3–4 pelotões + apoios"],
              ["Batalhão", "500–800", "Comandante de batalhão (LTC)", "3–5 companhias + staff"],
              ["Brigada / regimento", "3 000–5 000", "Comandante de brigada (COL)", "Batalhões + apoios"],
              ["Divisão", "10 000–20 000", "Comandante divisional (BG/MG)", "Brigadas + serviços"],
            ],
          },
        ],
      },
      {
        heading: "Lógica funcional",
        blocks: [
          {
            type: "p",
            text: "A estrutura reflete três princípios: capacidade de sobreviver como unidade, capacidade de gerar efeito, capacidade de ser sustentada logisticamente. O fire team sobrevive, a esquadra gera efeito pontual, o pelotão manobra, a companhia mantém um setor, o batalhão opera autonomamente por dias, a brigada combina armas.",
          },
          {
            type: "ul",
            items: [
              "Comando: uma pessoa decide e responde em cada nível",
              "Comunicações: cada nível tem rede de rádio interna e outra para cima",
              "Logística: batalhões começam a ter apoio orgânico (médico, suprimento, TI)",
              "Armas combinadas: de brigada para cima, infantaria, fogo, recon, EW se combinam",
            ],
          },
        ],
      },
      {
        heading: "Voluntários internacionais na Ucrânia",
        blocks: [
          {
            type: "p",
            text: "Unidades de voluntários internacionais na Ucrânia ficam tipicamente em nível team (3–8) ou esquadra (até 12) dentro de companhias e batalhões ucranianos, ou em destacamentos especiais (HUR, SSO). A cadeia de comando é: team leader internacional → comandante ucraniano da unidade hospedeira → comando superior ucraniano. Entender essa cadeia é essencial para não pular níveis nem emitir ordens fora de canal.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Tratar o team como unidade autônoma desligada do batalhão hospedeiro",
              "Burlar o comandante ucraniano para falar direto com o comando superior",
              "Confundir papel administrativo (presença no rol) com papel operacional (cadeia de fires)",
              "Títulos autoatribuídos (\"comandante de pelotão\") não reconhecidos pela unidade hospedeira",
              "Não saber a qual brigada ou destacamento se pertence quando outra unidade pergunta",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "O voluntário que funciona conhece a estrutura acima de si por três níveis e abaixo por dois. Sabe o nome do batalhão, o número da brigada, o destacamento de pertencimento, e os identifica sob estresse. Esse conhecimento não é postura hierárquica — é OPSEC inverso: na perda de comunicações, saber a quem reportar te traz de volta ao sistema; não saber te deixa isolado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La structure militaire moderne est une pyramide fonctionnelle : de petits éléments qui se composent en formations plus grandes selon des règles de subordination et de soutien. La connaître est nécessaire pour comprendre qui parle à qui, qui ordonne quoi et où votre équipe se situe dans le tableau d'ensemble.",
    sections: [
      {
        heading: "Échelle dimensionnelle",
        blocks: [
          {
            type: "p",
            text: "L'échelle est approximative et varie selon la nation, la doctrine et l'époque. Les chiffres ci-dessous sont indicatifs pour l'infanterie légère moderne.",
          },
          {
            type: "table",
            headers: ["Niveau", "Effectif", "Commandement", "Composition type"],
            rows: [
              ["Fire team", "3–5", "Team leader (NCO)", "Carabines, MG/AR, grenades"],
              ["Groupe", "8–12", "Squad leader (NCO)", "2 fire teams + chef"],
              ["Section", "30–40", "Chef de section (officier)", "3–4 groupes + commandement"],
              ["Compagnie", "100–150", "Commandant de compagnie (CPT)", "3–4 sections + appuis"],
              ["Bataillon", "500–800", "Chef de bataillon (LTC)", "3–5 compagnies + état-major"],
              ["Brigade / régiment", "3 000–5 000", "Chef de brigade (COL)", "Bataillons + appuis"],
              ["Division", "10 000–20 000", "Chef de division (BG/MG)", "Brigades + services"],
            ],
          },
        ],
      },
      {
        heading: "Logique fonctionnelle",
        blocks: [
          {
            type: "p",
            text: "La structure reflète trois principes : capacité à survivre comme unité, capacité à produire de l'effet, capacité à être soutenue logistiquement. Le fire team survit, le groupe produit un effet ponctuel, la section manœuvre, la compagnie tient un secteur, le bataillon opère de façon autonome plusieurs jours, la brigade combine les armes.",
          },
          {
            type: "ul",
            items: [
              "Commandement : une personne décide et répond à chaque niveau",
              "Communications : chaque niveau a un réseau radio interne et un vers le haut",
              "Logistique : à partir du bataillon, soutiens organiques (santé, ravitaillement, SIC)",
              "Armes combinées : à partir de la brigade, infanterie, feux, reconnaissance, GE se combinent",
            ],
          },
        ],
      },
      {
        heading: "Volontaires internationaux en Ukraine",
        blocks: [
          {
            type: "p",
            text: "Les unités de volontaires internationaux en Ukraine se placent typiquement au niveau équipe (3–8) ou groupe (jusqu'à 12) à l'intérieur de compagnies et bataillons ukrainiens, ou de détachements spéciaux (HUR, SSO). La chaîne de commandement est donc : team leader international → commandant ukrainien de l'unité hôte → commandement supérieur ukrainien. Comprendre cette chaîne est essentiel pour ne pas sauter de niveaux et ne pas émettre d'ordres hors canal.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Traiter l'équipe comme une unité autonome détachée du bataillon hôte",
              "Court-circuiter le commandant ukrainien pour parler directement au commandement supérieur",
              "Confondre rôle administratif (présence sur le rôle) et rôle opérationnel (chaîne des feux)",
              "Titres auto-attribués (« chef de section ») non reconnus par l'unité hôte",
              "Ignorer à quelle brigade ou détachement on appartient quand une autre unité demande",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Le volontaire qui fonctionne connaît la structure au-dessus de lui sur trois niveaux et en dessous sur deux. Il sait le nom de son bataillon, le numéro de sa brigade, le détachement d'appartenance, et les identifie sous stress. Cette connaissance n'est pas une posture hiérarchique — c'est de l'OPSEC inverse : en cas de perte de communications, savoir à qui rendre compte vous ramène dans le système ; ne pas le savoir vous laisse isolé.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
