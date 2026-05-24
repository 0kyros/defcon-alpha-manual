import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const VARIANTS: ReadonlyArray<ReadonlyArray<string>> = [
  ["FGM-148 Javelin", "USA — fire-and-forget IR", "1996", "Top-attack o direct-attack, portata 75-4750 m (Block 1), CLU termico riusabile, tubo missile monouso."],
  ["NLAW (MBT-LAW)", "UK/SWE — PLOS, soft-launch", "2009", "Sistema spalla, top-attack o direct-attack, 20-800 m, monouso, no firma backblast significativa."],
  ["Stugna-P (Skif)", "UA — laser-beam riding", "2011", "Sistema ucraino, lanciatore separato dal posto di tiro (cavo), 100-5000 m, in dotazione UA."],
  ["9K111 Fagot", "URSS — SACLOS filo-guidato", "1970", "Anti-carro media portata, 70-2000 m, ampiamente diffuso in arsenali ex-URSS."],
  ["9K113 Konkurs", "URSS — SACLOS filo-guidato", "1974", "Versione migliorata del Fagot, 75-4000 m, anche su montaggio veicolare BMP/BRDM."],
  ["9M133 Kornet", "RUS — laser-beam riding", "1998", "Sistema anti-carro pesante, 100-5500 m (10000 m versione recente), tandem HEAT e termobarico."],
  ["Spike LR / MR / NLOS", "ISR — fiber/IIR guided", "1981+", "Famiglia israeliana Rafael, fire-and-forget o uomo-nel-loop, 800 m (SR) — 32 km (NLOS)."],
  ["TOW-2", "USA — SACLOS filo/wireless", "1970/1983", "Sistema pesante veicolare/postazione fissa, 65-3750 m."],
  ["MILAN", "FRA/GER — SACLOS filo", "1972", "Sistema franco-tedesco media portata, 25-2000 m, in dotazione UA via aiuti."],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Riferimento enciclopedico sui sistemi missilistici anti-carro guidati (ATGM). Solo informazioni dottrinali pubbliche: ruolo, nomenclatura, sistemi di guida, varianti, diffusione. Nessuna istruzione operativa, di tiro, di lock-on, di manutenzione o modifica.",
    sections: [
      {
        heading: "Ruolo",
        blocks: [
          {
            type: "p",
            text: "Sistemi missilistici guidati progettati per neutralizzare bersagli corazzati a media-lunga distanza (tipicamente 500 m - 5 km, fino a >10 km per sistemi pesanti). Operati a livello squadra (sistemi spalla come Javelin/NLAW) o sezione/plotone (sistemi su treppiede come Kornet/Stugna). Centrali nella difesa anti-blindo della fanteria moderna e nella guerra ucraina.",
          },
        ],
      },
      {
        heading: "Famiglie di guida",
        blocks: [
          {
            type: "ul",
            items: [
              "Filo-guidati SACLOS (Semi-Automatic Command to Line Of Sight): TOW, MILAN, Fagot, Konkurs — il tiratore mantiene il reticolo sul bersaglio, il sistema corregge la traiettoria",
              "Laser-beam riding: Kornet, Stugna-P — il missile vola lungo il fascio laser proiettato dal lanciatore",
              "Fire-and-forget IR: Javelin (top-attack, sensore termico imager nel missile)",
              "PLOS (Predicted Line of Sight): NLAW — calcolo balistico al lancio, no guida attiva dopo",
              "Imaging Infrared / fiber-optic: Spike LR/MR/NLOS — uomo-nel-loop o autonomo",
            ],
          },
        ],
      },
      {
        heading: "Sistemi principali",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Origine / Guida", "Era", "Note"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Top-attack vs direct-attack",
        blocks: [
          {
            type: "p",
            text: "I sistemi moderni (Javelin, NLAW, Spike) attaccano il bersaglio dall'alto, dove la blindatura del carro è più sottile. Direct-attack ingaggia la blindatura frontale o laterale, dove ERA, blindatura composita e protezioni attive sono più efficaci. La capacità top-attack è il principale fattore di superiorità contro carri moderni T-72/T-80/T-90 con ERA Kontakt-5/Relikt.",
          },
        ],
      },
      {
        heading: "Diffusione in Ucraina",
        blocks: [
          {
            type: "quote",
            text: "L'Ucraina riceve dal 2022 enormi quantità di Javelin (USA, oltre 10.000 unità), NLAW (UK/Svezia, oltre 17.000), MILAN, Spike, e produce Stugna-P localmente. Forze russe impiegano Konkurs, Fagot, Kornet (anche in versione vettura su BMP-3M/Tigr), Khrizantema. ATGM sono protagonisti delle prime fasi del conflitto, contrastando colonne meccanizzate russe. Il loro impiego massivo è uno dei tratti distintivi della guerra.",
          },
        ],
      },
      {
        heading: "Vantaggi (dottrinale)",
        blocks: [
          {
            type: "ul",
            items: [
              "Portata efficace molto superiore agli RPG (5+ km vs <500 m pratici)",
              "Probabilità di colpo elevatissima su bersagli statici/lenti (>80%)",
              "Top-attack penetra la blindatura più sottile del carro",
              "Sistemi fire-and-forget permettono al tiratore di disimpegnarsi subito dopo il lancio",
              "Munizioni tandem battono ERA",
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
              "Costo unitario elevato (Javelin ~$200k+ per missile)",
              "Logistica complessa, addestramento operatore esteso",
              "Sensibili a contromisure: APS (Trophy, Arena), schermature elettroniche su sistemi a guida laser",
              "Tempo di acquisizione e lock-on lungo per sistemi IR (Javelin)",
              "Backblast posteriore significativo (eccetto NLAW soft-launch)",
              "Bersagli con APS attivi possono intercettare il missile in volo",
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
            body: "Questa scheda è enciclopedica. Non descrive procedure di lock-on, target identification, scelta di modalità top/direct-attack, addestramento al CLU/lanciatore, manipolazione tattica o manutenzione. Tali competenze richiedono addestramento militare anti-carro certificato.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Encyclopaedic reference on anti-tank guided missile (ATGM) systems. Public doctrinal information only: role, nomenclature, guidance, variants, distribution. No operational, firing, lock-on, maintenance or modification instruction.",
    sections: [
      {
        heading: "Role",
        blocks: [
          {
            type: "p",
            text: "Guided missile systems designed to defeat armoured targets at medium-to-long range (typically 500 m - 5 km, up to >10 km for heavy systems). Operated at squad level (shoulder systems such as Javelin/NLAW) or section/platoon (tripod-mounted such as Kornet/Stugna). Central to modern infantry anti-armour defence and to the Ukrainian war.",
          },
        ],
      },
      {
        heading: "Guidance families",
        blocks: [
          {
            type: "ul",
            items: [
              "Wire-guided SACLOS (Semi-Automatic Command to Line Of Sight): TOW, MILAN, Fagot, Konkurs — shooter keeps reticle on target, system corrects trajectory",
              "Laser-beam riding: Kornet, Stugna-P — missile flies along projected laser beam",
              "Fire-and-forget IR: Javelin (top-attack, imaging IR seeker in the missile)",
              "PLOS (Predicted Line of Sight): NLAW — ballistic computation at launch, no active guidance after",
              "Imaging Infrared / fibre-optic: Spike LR/MR/NLOS — man-in-the-loop or autonomous",
            ],
          },
        ],
      },
      {
        heading: "Main systems",
        blocks: [
          {
            type: "table",
            headers: ["System", "Origin / Guidance", "Era", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Top-attack vs direct-attack",
        blocks: [
          {
            type: "p",
            text: "Modern systems (Javelin, NLAW, Spike) attack the target from above, where tank armour is thinnest. Direct-attack engages frontal or side armour, where ERA, composite armour and active protection are most effective. Top-attack capability is the main advantage against modern T-72/T-80/T-90 tanks fitted with Kontakt-5/Relikt ERA.",
          },
        ],
      },
      {
        heading: "Distribution in Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Ukraine has received since 2022 vast numbers of Javelin (USA, 10,000+ units), NLAW (UK/Sweden, 17,000+), MILAN, Spike, and produces Stugna-P domestically. Russian forces deploy Konkurs, Fagot, Kornet (including vehicle-mounted on BMP-3M/Tigr), Khrizantema. ATGMs were protagonists of the early phases of the conflict, blunting Russian mechanised columns. Their massive employment is one of the distinguishing traits of the war.",
          },
        ],
      },
      {
        heading: "Advantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Effective range far exceeding RPGs (5+ km vs <500 m practical)",
              "Very high hit probability on static/slow targets (>80%)",
              "Top-attack penetrates tank's thinnest armour",
              "Fire-and-forget systems allow shooter to disengage immediately after launch",
              "Tandem warheads defeat ERA",
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
              "High unit cost (Javelin ~$200k+ per missile)",
              "Complex logistics, extensive operator training",
              "Vulnerable to countermeasures: APS (Trophy, Arena), electronic screening on laser-guided systems",
              "Long acquisition and lock-on time on IR systems (Javelin)",
              "Significant rear backblast (except NLAW soft-launch)",
              "APS-equipped targets can intercept the missile in flight",
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
            body: "This entry is encyclopaedic. It does not describe lock-on procedures, target identification, top/direct-attack mode selection, CLU/launcher operator training, tactical handling or maintenance. Those skills require certified military anti-armour training.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Referência enciclopédica sobre sistemas de mísseis anticarro guiados (ATGM). Apenas informações doutrinárias públicas: papel, nomenclatura, guiagem, variantes, distribuição. Nenhuma instrução operacional, tiro, lock-on, manutenção ou modificação.",
    sections: [
      {
        heading: "Papel",
        blocks: [
          {
            type: "p",
            text: "Sistemas de mísseis guiados projetados para derrotar alvos blindados a média e longa distância (tipicamente 500 m - 5 km, até >10 km em sistemas pesados). Operados em nível de esquadrão (sistemas de ombro como Javelin/NLAW) ou seção/pelotão (sistemas em tripé como Kornet/Stugna). Centrais na defesa antiblindados da infantaria moderna e na guerra ucraniana.",
          },
        ],
      },
      {
        heading: "Famílias de guiagem",
        blocks: [
          {
            type: "ul",
            items: [
              "Guiados por fio SACLOS (Semi-Automatic Command to Line Of Sight): TOW, MILAN, Fagot, Konkurs — o atirador mantém o retículo no alvo, o sistema corrige a trajetória",
              "Laser-beam riding: Kornet, Stugna-P — o míssil voa ao longo do feixe laser projetado",
              "Fire-and-forget IR: Javelin (top-attack, sensor imager IR no míssil)",
              "PLOS (Predicted Line of Sight): NLAW — cálculo balístico no lançamento, sem guiagem ativa depois",
              "Imaging Infrared / fibra-óptica: Spike LR/MR/NLOS — homem-no-loop ou autônomo",
            ],
          },
        ],
      },
      {
        heading: "Sistemas principais",
        blocks: [
          {
            type: "table",
            headers: ["Sistema", "Origem / Guiagem", "Era", "Notas"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Top-attack vs direct-attack",
        blocks: [
          {
            type: "p",
            text: "Sistemas modernos (Javelin, NLAW, Spike) atacam o alvo por cima, onde a blindagem do carro é mais fina. Direct-attack engaja blindagem frontal ou lateral, onde ERA, blindagem composta e proteção ativa são mais eficazes. A capacidade top-attack é o principal fator de superioridade contra carros modernos T-72/T-80/T-90 com ERA Kontakt-5/Relikt.",
          },
        ],
      },
      {
        heading: "Distribuição na Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "A Ucrânia recebe desde 2022 enormes quantidades de Javelin (EUA, mais de 10.000 unidades), NLAW (UK/Suécia, mais de 17.000), MILAN, Spike, e produz Stugna-P localmente. Forças russas empregam Konkurs, Fagot, Kornet (também em versão veicular em BMP-3M/Tigr), Khrizantema. ATGMs são protagonistas das primeiras fases do conflito, contrariando colunas mecanizadas russas. Seu emprego massivo é uma das características distintivas da guerra.",
          },
        ],
      },
      {
        heading: "Vantagens (doutrinário)",
        blocks: [
          {
            type: "ul",
            items: [
              "Alcance efetivo muito superior a RPGs (5+ km vs <500 m práticos)",
              "Probabilidade de acerto altíssima em alvos estáticos/lentos (>80%)",
              "Top-attack penetra a blindagem mais fina do carro",
              "Sistemas fire-and-forget permitem que o atirador se desengaje logo após o lançamento",
              "Munições tandem derrotam ERA",
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
              "Custo unitário elevado (Javelin ~$200k+ por míssil)",
              "Logística complexa, treinamento de operador extenso",
              "Sensíveis a contramedidas: APS (Trophy, Arena), tela eletrônica em sistemas a laser",
              "Tempo de aquisição e lock-on longo em sistemas IR (Javelin)",
              "Backblast traseiro significativo (exceto NLAW soft-launch)",
              "Alvos com APS ativos podem interceptar o míssil em voo",
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
            body: "Este verbete é enciclopédico. Não descreve procedimentos de lock-on, identificação de alvo, seleção de modo top/direct-attack, treinamento de operador CLU/lançador, manuseio tático ou manutenção. Essas competências exigem treinamento militar anticarro certificado.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Référence encyclopédique sur les systèmes de missiles antichars guidés (ATGM). Informations doctrinales publiques uniquement : rôle, nomenclature, guidage, variantes, diffusion. Aucune instruction opérationnelle, de tir, de verrouillage, de maintenance ou de modification.",
    sections: [
      {
        heading: "Rôle",
        blocks: [
          {
            type: "p",
            text: "Systèmes de missiles guidés conçus pour neutraliser des cibles blindées à moyenne et longue distance (typiquement 500 m - 5 km, jusqu'à >10 km pour les systèmes lourds). Servis au niveau du groupe (systèmes d'épaule comme Javelin/NLAW) ou de la section/peloton (systèmes sur trépied comme Kornet/Stugna). Centraux dans la défense antichar de l'infanterie moderne et dans la guerre ukrainienne.",
          },
        ],
      },
      {
        heading: "Familles de guidage",
        blocks: [
          {
            type: "ul",
            items: [
              "Filo-guidés SACLOS (Semi-Automatic Command to Line Of Sight) : TOW, MILAN, Fagot, Konkurs — le tireur maintient le réticule sur la cible, le système corrige la trajectoire",
              "Laser-beam riding : Kornet, Stugna-P — le missile vole le long du faisceau laser projeté",
              "Fire-and-forget IR : Javelin (top-attack, autodirecteur IR imageur dans le missile)",
              "PLOS (Predicted Line of Sight) : NLAW — calcul balistique au lancement, pas de guidage actif ensuite",
              "Imaging Infrared / fibre optique : Spike LR/MR/NLOS — homme dans la boucle ou autonome",
            ],
          },
        ],
      },
      {
        heading: "Systèmes principaux",
        blocks: [
          {
            type: "table",
            headers: ["Système", "Origine / Guidage", "Époque", "Notes"],
            rows: VARIANTS,
          },
        ],
      },
      {
        heading: "Top-attack vs direct-attack",
        blocks: [
          {
            type: "p",
            text: "Les systèmes modernes (Javelin, NLAW, Spike) attaquent la cible par le dessus, là où le blindage du char est le plus mince. Le direct-attack engage le blindage frontal ou latéral, où ERA, blindage composite et protections actives sont les plus efficaces. La capacité top-attack est le principal facteur de supériorité contre les chars modernes T-72/T-80/T-90 dotés d'ERA Kontakt-5/Relikt.",
          },
        ],
      },
      {
        heading: "Diffusion en Ukraine",
        blocks: [
          {
            type: "quote",
            text: "L'Ukraine reçoit depuis 2022 d'énormes quantités de Javelin (USA, plus de 10 000 unités), NLAW (UK/Suède, plus de 17 000), MILAN, Spike, et produit le Stugna-P localement. Les forces russes emploient Konkurs, Fagot, Kornet (également en version véhicule sur BMP-3M/Tigr), Khrizantema. Les ATGM sont protagonistes des premières phases du conflit, contrant les colonnes mécanisées russes. Leur emploi massif est l'un des traits distinctifs de la guerre.",
          },
        ],
      },
      {
        heading: "Avantages (doctrinal)",
        blocks: [
          {
            type: "ul",
            items: [
              "Portée efficace très supérieure aux RPG (5+ km vs <500 m pratiques)",
              "Probabilité de coup très élevée sur cibles statiques/lentes (>80%)",
              "Top-attack pénètre le blindage le plus mince du char",
              "Systèmes fire-and-forget permettent au tireur de se désengager dès le lancement",
              "Munitions tandem vainquent l'ERA",
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
              "Coût unitaire élevé (Javelin ~200 k$+ par missile)",
              "Logistique complexe, formation opérateur étendue",
              "Sensibles aux contre-mesures : APS (Trophy, Arena), écrans électroniques sur systèmes à guidage laser",
              "Temps d'acquisition et de verrouillage long sur les systèmes IR (Javelin)",
              "Backblast arrière significatif (sauf NLAW soft-launch)",
              "Cibles avec APS actives peuvent intercepter le missile en vol",
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
            body: "Cette fiche est encyclopédique. Elle ne décrit ni procédures de verrouillage, ni identification de cible, ni choix du mode top/direct-attack, ni formation à l'opérateur CLU/lanceur, ni manipulation tactique, ni maintenance. Ces compétences exigent un entraînement militaire antichar certifié.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
