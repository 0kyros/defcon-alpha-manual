import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["AR-15 / M16", "5.56×45 NATO", "1959 / 1963", "Progetto Stoner originale. Adottato dall'US Army nel 1963, canna 20\"."],
  ["M16A2 / A4", "5.56×45 NATO", "1982 / 1996", "Mire migliorate, raffica a 3 colpi, canna heavy-profile, picatinny flat-top sull'A4."],
  ["M4 / M4A1", "5.56×45 NATO", "1994 / 2014", "Carbina militare standard US, canna 14.5\", calcio telescopico. A1 in piena automatica."],
  ["AR-15 civile", "5.56 / .223 Rem", "1963+", "Versione semiauto per mercato civile, base di innumerevoli cloni e build."],
  ["HK416 / MR556", "5.56×45 NATO", "2004", "Variante a corto pistone gas (short-stroke piston) sviluppata da Heckler & Koch."],
  ["FN SCAR-L", "5.56×45 NATO", "2009", "Famiglia modulare FN derivata concettualmente dall'AR ma con sistema piston."],
  ["Bren 2", "5.56×45 NATO / 7.62×39", "2015", "CZ ceco, alternativa moderna in dotazione a unità ucraine."],
  ["AR-10 / SR-25 / M110", "7.62×51 NATO", "1956 / 1990s", "Versione battle/DMR su calibro pieno, base di marksman rifle moderni."],
  ["Mk 18 CQBR", "5.56×45 NATO", "2000s", "Versione carbine corta (canna 10.3\") per ambienti urbani e operazioni speciali."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sulla piattaforma AR-15 / M16 / M4. Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, varianti, calibro, diffusione. Nessuna istruzione operativa, di manipolazione tattica, di manutenzione interna o di modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Fucile d'assalto modulare a otturatore rotante e sistema di presa di gas a impingement diretto (direct impingement, DI), progettato da Eugene Stoner alla fine degli anni '50. Standard NATO de facto per fanteria leggera, presente in tutte le forze armate occidentali e in quasi tutte le unità ucraine ricevute via aiuti internazionali.",
          },
        ],
      },
      {
        heading: "Caratteristiche generali",
        blocks: [
          {
            type: "ul",
            items: [
              "Otturatore rotante a 7 alette (multi-lug)",
              "Sistema gas direct impingement (DI) — gas convogliato direttamente sul carrier",
              "Telaio inferiore (lower) e superiore (upper) in alluminio forgiato 7075-T6",
              "Calibro principale 5.56×45 NATO (AR-15/M4/M16); 7.62×51 NATO sulla famiglia AR-10",
              "Caricatori STANAG, polimerici o metallici, capacità tipica 30 colpi",
              "Picatinny flat-top, handguard liberamente modulari (M-LOK, KeyMod, quad rail)",
              "Calcio telescopico (M4-style) o fisso (M16-style)",
            ],
          },
        ],
      },
      {
        heading: "Varianti principali",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibro", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Modularità",
        blocks: [
          {
            type: "p",
            text: "La piattaforma è progettata per scambio rapido di upper (canna, sistema gas, handguard) su un lower comune, e per montaggio diretto di ottiche, illuminatori IR, laser visibili/IR, foregrip e accessori su rail picatinny e M-LOK. Questa modularità ne ha fatto lo standard di unità SOF e di forze regolari moderne.",
          },
        ],
      },
      {
        heading: "Calibri — note generali",
        blocks: [
          {
            type: "p",
            text: "5.56×45 NATO è il calibro principale: traiettoria piatta, rinculo ridotto, peso munizione contenuto, ottime prestazioni fino a 500-600 m con canne di lunghezza adeguata. La famiglia AR-10 (7.62×51) è impiegata in ruolo DMR/battle rifle con prestazioni efficaci oltre gli 800 m. Conversioni a 7.62×39, 6.5 Grendel, 6.8 SPC e 6mm ARC esistono ma sono nicchia rispetto alla diffusione del 5.56.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Forze ucraine ricevono dal 2022 grandi quantità di M4, M16, HK416, Bren 2 e altre varianti AR. Le unità ucraine convergono progressivamente verso lo standard NATO, mantenendo però l'AK come spina dorsale numerica. Volontari internazionali in Ucraina si trovano abitualmente di fronte a entrambe le piattaforme. La piattaforma AR è dominante nelle ISR-recon, in unità ricognizione e SOF.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Ergonomia ottimizzata (selettore vicino al pollice, charging handle non reciprocante)",
              "Precisione superiore alla media nel calibro intermedio 5.56",
              "Modularità estrema (ottiche, accessori, upper interscambiabili)",
              "Rinculo contenuto, controllo di rosata in raffica brevi",
              "Disponibilità globale di parti, accessori e munizione NATO",
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
              "Sensibilità del DI a sporco, sabbia e accumulo di residui senza manutenzione adeguata",
              "Calore al receiver con cadenze sostenute (per DI)",
              "Tolleranze più strette rispetto alla famiglia AK",
              "Penetrazione di barriere intermedie inferiore al 7.62×39 a corta distanza",
              "Costo unitario maggiore rispetto a equivalenti ex-Patto di Varsavia",
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
            body: "Questa scheda è enciclopedica. Non descrive smontaggio, manutenzione interna, fix di malfunzionamenti, manipolazione tattica, tiro reale, modifiche o procedure di azzeramento. Tali competenze richiedono addestramento in poligono con istruttori certificati e accesso legale all'arma nel quadro normativo applicabile.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on the AR-15 / M16 / M4 platform. Public doctrinal information only: role, nomenclature, variants, calibre, distribution. No operational, tactical handling, internal maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Modular assault rifle with rotating bolt and direct-impingement (DI) gas system, designed by Eugene Stoner in the late 1950s. De facto NATO infantry standard, fielded across Western armed forces and across most Ukrainian units equipped through international assistance.",
          },
        ],
      },
      {
        heading: "General characteristics",
        blocks: [
          {
            type: "ul",
            items: [
              "Seven-lug rotating bolt (multi-lug)",
              "Direct-impingement (DI) gas system — gas channelled onto the bolt carrier",
              "Lower and upper receiver in forged 7075-T6 aluminium",
              "Main calibre 5.56×45 NATO (AR-15/M4/M16); 7.62×51 NATO on the AR-10 family",
              "STANAG magazines, polymer or metal, typically 30 rounds",
              "Picatinny flat-top, freely modular handguards (M-LOK, KeyMod, quad rail)",
              "Telescoping (M4-style) or fixed (M16-style) stock",
            ],
          },
        ],
      },
      {
        heading: "Main variants",
        blocks: [
          {
            type: "table",
            headers: ["Variant", "Calibre", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Modularity",
        blocks: [
          {
            type: "p",
            text: "The platform is designed for rapid swap of uppers (barrel, gas system, handguard) on a common lower, and for direct mounting of optics, IR illuminators, visible/IR lasers, foregrips and accessories on Picatinny and M-LOK rails. This modularity has made it the standard of SOF and modern regular forces.",
          },
        ],
      },
      {
        heading: "Calibres — general notes",
        blocks: [
          {
            type: "p",
            text: "5.56×45 NATO is the main calibre: flat trajectory, low recoil, low ammunition weight, effective out to 500-600 m with appropriate barrel length. The AR-10 family (7.62×51) is used in DMR/battle rifle role, effective past 800 m. Conversions to 7.62×39, 6.5 Grendel, 6.8 SPC and 6mm ARC exist but are niche compared to the 5.56 footprint.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukrainian forces have received from 2022 onwards large quantities of M4, M16, HK416, Bren 2 and other AR variants. Ukrainian units progressively converge towards the NATO standard while keeping AK as numerical backbone. International volunteers in Ukraine routinely face both platforms. The AR platform dominates in ISR-recon, reconnaissance and SOF units.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Optimised ergonomics (selector under thumb, non-reciprocating charging handle)",
              "Above-average accuracy in 5.56 intermediate calibre",
              "Extreme modularity (optics, accessories, swappable uppers)",
              "Low recoil, controllable burst rosette",
              "Global availability of parts, accessories and NATO ammunition",
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
              "DI sensitivity to dirt, sand and residue build-up without adequate maintenance",
              "Receiver heating under sustained rates (due to DI)",
              "Tighter manufacturing tolerances compared to the AK family",
              "Intermediate-barrier penetration inferior to 7.62×39 at close range",
              "Higher unit cost than ex-Warsaw Pact equivalents",
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
            body: "This entry is encyclopaedic. It does not describe disassembly, internal maintenance, malfunction fixes, tactical handling, live fire, modifications or zero procedures. Those skills require certified range training and legal weapon access under applicable jurisdiction.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre a plataforma AR-15 / M16 / M4. Apenas informações doutrinárias públicas: papel, nomenclatura, variantes, calibre, distribuição. Nenhuma instrução operacional, manuseio tático, manutenção interna ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Fuzil de assalto modular de ferrolho rotativo e sistema de gás direto (direct impingement, DI), projetado por Eugene Stoner no final dos anos 1950. Padrão de infantaria OTAN de facto, presente em todas as forças armadas ocidentais e na maioria das unidades ucranianas equipadas via assistência internacional.",
          },
        ],
      },
      {
        heading: "Características gerais",
        blocks: [
          {
            type: "ul",
            items: [
              "Ferrolho rotativo de 7 ressaltos (multi-lug)",
              "Sistema de gás direto (DI) — gás canalizado sobre o carrier",
              "Receptor inferior e superior em alumínio forjado 7075-T6",
              "Calibre principal 5,56×45 OTAN (AR-15/M4/M16); 7,62×51 OTAN na família AR-10",
              "Carregadores STANAG, polímero ou metal, tipicamente 30 cartuchos",
              "Picatinny flat-top, guarda-mão livremente modular (M-LOK, KeyMod, quad rail)",
              "Coronha telescópica (estilo M4) ou fixa (estilo M16)",
            ],
          },
        ],
      },
      {
        heading: "Variantes principais",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Modularidade",
        blocks: [
          {
            type: "p",
            text: "A plataforma foi projetada para troca rápida de uppers (cano, sistema de gás, guarda-mão) sobre um lower comum, e para montagem direta de óticas, iluminadores IR, lasers visíveis/IR, foregrips e acessórios em trilhos Picatinny e M-LOK. Essa modularidade fez dela o padrão das SOF e das forças regulares modernas.",
          },
        ],
      },
      {
        heading: "Calibres — notas gerais",
        blocks: [
          {
            type: "p",
            text: "5,56×45 OTAN é o calibre principal: trajetória plana, baixo recuo, baixo peso de munição, ótimas prestações até 500-600 m com canos de comprimento adequado. A família AR-10 (7,62×51) é usada em papel DMR/battle rifle, eficaz além de 800 m. Conversões a 7,62×39, 6,5 Grendel, 6,8 SPC e 6mm ARC existem mas são nicho comparadas ao 5,56.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Forças ucranianas recebem desde 2022 grandes quantidades de M4, M16, HK416, Bren 2 e outras variantes AR. Unidades ucranianas convergem progressivamente para o padrão OTAN, mantendo o AK como espinha dorsal numérica. Voluntários internacionais na Ucrânia se deparam rotineiramente com ambas as plataformas. A AR domina nas unidades ISR-recon, reconhecimento e SOF.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Ergonomia otimizada (seletor próximo ao polegar, charging handle não-reciprocante)",
              "Precisão acima da média no calibre intermediário 5,56",
              "Modularidade extrema (óticas, acessórios, uppers intercambiáveis)",
              "Baixo recuo, controle de roseta em rajadas curtas",
              "Disponibilidade global de peças, acessórios e munição OTAN",
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
              "Sensibilidade do DI a sujeira, areia e acúmulo de resíduos sem manutenção adequada",
              "Aquecimento do receptor sob cadências sustentadas (devido ao DI)",
              "Tolerâncias mais estreitas comparadas à família AK",
              "Penetração de barreiras intermediárias inferior ao 7,62×39 a curta distância",
              "Custo unitário maior que equivalentes ex-Pacto de Varsóvia",
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
            body: "Este verbete é enciclopédico. Não descreve desmontagem, manutenção interna, correção de panes, manuseio tático, tiro real, modificações ou procedimentos de zeragem. Essas competências exigem treinamento em estande com instrutores certificados e acesso legal à arma sob a jurisdição aplicável.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur la plateforme AR-15 / M16 / M4. Informations doctrinales publiques uniquement : rôle, nomenclature, variantes, calibre, diffusion. Aucune instruction opérationnelle, de manipulation tactique, de maintenance interne ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Fusil d'assaut modulaire à culasse rotative et emprunt de gaz par impulsion directe (direct impingement, DI), conçu par Eugene Stoner à la fin des années 1950. Standard d'infanterie OTAN de facto, présent dans toutes les forces armées occidentales et dans la plupart des unités ukrainiennes équipées via assistance internationale.",
          },
        ],
      },
      {
        heading: "Caractéristiques générales",
        blocks: [
          {
            type: "ul",
            items: [
              "Culasse rotative à 7 tenons (multi-lug)",
              "Système d'emprunt direct (DI) — gaz canalisé sur le carrier",
              "Boîtier inférieur et supérieur en aluminium forgé 7075-T6",
              "Calibre principal 5,56×45 OTAN (AR-15/M4/M16) ; 7,62×51 OTAN sur la famille AR-10",
              "Chargeurs STANAG, polymère ou métal, typiquement 30 cartouches",
              "Picatinny flat-top, garde-main librement modulaires (M-LOK, KeyMod, quad rail)",
              "Crosse télescopique (style M4) ou fixe (style M16)",
            ],
          },
        ],
      },
      {
        heading: "Variantes principales",
        blocks: [
          {
            type: "table",
            headers: ["Variante", "Calibre", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Modularité",
        blocks: [
          {
            type: "p",
            text: "La plateforme est conçue pour échange rapide d'uppers (canon, système de gaz, garde-main) sur un lower commun, et pour montage direct d'optiques, illuminateurs IR, lasers visibles/IR, foregrips et accessoires sur rails Picatinny et M-LOK. Cette modularité en a fait le standard des unités SOF et des forces régulières modernes.",
          },
        ],
      },
      {
        heading: "Calibres — notes générales",
        blocks: [
          {
            type: "p",
            text: "5,56×45 OTAN est le calibre principal : trajectoire plate, faible recul, poids de munition réduit, performances efficaces jusqu'à 500-600 m avec canons de longueur adéquate. La famille AR-10 (7,62×51) est employée en rôle DMR/battle rifle, efficace au-delà de 800 m. Conversions vers 7,62×39, 6,5 Grendel, 6,8 SPC et 6mm ARC existent mais restent de niche comparées au 5,56.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les forces ukrainiennes reçoivent depuis 2022 de grandes quantités de M4, M16, HK416, Bren 2 et autres variantes AR. Les unités ukrainiennes convergent progressivement vers le standard OTAN tout en gardant l'AK comme colonne vertébrale numérique. Les volontaires internationaux en Ukraine rencontrent couramment les deux plateformes. La plateforme AR domine dans les unités ISR-recon, reconnaissance et SOF.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Ergonomie optimisée (sélecteur sous le pouce, levier d'armement non réciproque)",
              "Précision supérieure à la moyenne en calibre intermédiaire 5,56",
              "Modularité extrême (optiques, accessoires, uppers interchangeables)",
              "Faible recul, contrôle de rosace en rafale courte",
              "Disponibilité globale des pièces, accessoires et munitions OTAN",
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
              "Sensibilité du DI à la saleté, au sable et à l'accumulation de résidus sans maintenance adéquate",
              "Échauffement du boîtier en cadences soutenues (dû au DI)",
              "Tolérances de fabrication plus serrées comparées à la famille AK",
              "Pénétration de barrières intermédiaires inférieure au 7,62×39 à courte distance",
              "Coût unitaire supérieur aux équivalents ex-Pacte de Varsovie",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni démontage, ni maintenance interne, ni résolution de pannes, ni manipulation tactique, ni tir réel, ni modifications, ni procédures de réglage. Ces compétences exigent un entraînement en stand avec des instructeurs certifiés et un accès légal à l'arme selon la juridiction applicable.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
