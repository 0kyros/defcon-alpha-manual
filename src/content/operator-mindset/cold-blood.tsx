import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Sangue freddo non significa assenza di emozione. Significa che le emozioni — paura, rabbia, dolore, fretta — non controllano l'esecuzione. È una competenza addestrabile basata su autoregolazione fisiologica, controllo verbale e protocolli post-azione. Il combattimento richiede di sopprimere temporaneamente le risposte naturali, e poi di processarle.",
    sections: [
      {
        heading: "Regolazione fisiologica",
        blocks: [
          {
            type: "p",
            text: "Sotto adrenalina il corpo produce risposte automatiche: tachicardia, vasocostrizione, tunnel visivo, perdita di motricità fine. Queste risposte servono a sopravvivere, ma degradano la precisione tecnica. La regolazione consiste nel riportare la fisiologia dentro la finestra dove le competenze tecniche restano accessibili (FC 115–150 bpm).",
          },
          {
            type: "ol",
            items: [
              "Riconoscere il segnale (mani tremano, voce sale, respiro corto)",
              "Allungare l'espirazione (inspiro 4 s, espiro 6–8 s) per 3–4 cicli",
              "Verbalizzare un fatto concreto ('arma in sicura, posizione coperta')",
              "Ancorarsi a un gesto tecnico ripetuto (controllo arma, controllo equipaggiamento)",
              "Tornare al compito senza autoanalisi",
            ],
          },
          {
            type: "callout",
            title: "Box breathing operativo",
            body: "Inspiro 4 — pausa 4 — espiro 4 — pausa 4. Tre cicli prima di azione pianificata, anche brevi. Riduce la FC di 10–20 bpm e riporta la corteccia prefrontale online. Si fa anche sotto casco, anche in trincea.",
          },
        ],
      },
      {
        heading: "Soppressione in combattimento",
        blocks: [
          {
            type: "p",
            text: "Durante l'azione, l'unica gestione emotiva possibile è la soppressione. Non è repressione patologica: è il riconoscere che la finestra di emozione non è quella giusta. Il dolore di un compagno ferito si trasforma in priorità medica, non in pianto. La rabbia per un fallimento si trasforma in correzione tattica, non in vendetta. Ogni emozione viene tradotta in un compito o messa in attesa.",
          },
          {
            type: "ul",
            items: [
              "Paura → identificare la fonte → spostarsi/coprirsi → riprendere il compito",
              "Rabbia → identificare il bersaglio appropriato → fuoco o decisione → mai gesti gratuiti",
              "Dolore (proprio) → MARCH/triage → comunicare → continuare se possibile",
              "Dolore (compagno) → CASEVAC → priorità medica → emozione dopo",
              "Frustrazione → SITREP fattuale → adeguamento del piano → emozione dopo",
            ],
          },
          {
            type: "warn",
            title: "ATTENZIONE",
            body: "La soppressione emotiva è strumentale e temporanea. Non è uno stile di vita. Tenere emozioni soppresse oltre l'azione produce danni psichici cumulativi. Il protocollo post-azione esiste per evitarlo.",
          },
        ],
      },
      {
        heading: "Controllo verbale",
        blocks: [
          {
            type: "p",
            text: "La voce è il primo indicatore di stato emotivo che il team percepisce. Un team leader che urla destabilizza più del fuoco nemico. Il controllo verbale è una disciplina pratica: tono basso, parole brevi, struttura fissa. La radio ha il proprio protocollo che impone disciplina, ma anche la comunicazione interna deve seguirla sotto stress.",
          },
          {
            type: "table",
            headers: ["Situazione", "Forma sbagliata", "Forma corretta"],
            rows: [
              ["Contatto", "'Cazzo cazzo dove sparano!'", "'Contatto fronte 10, 200 m'"],
              ["Ferito", "'Aiutooo è grave!'", "'Bravo down, conscious, leg, MARCH in corso'"],
              ["Errore propio", "'Mi dispiace ho sbagliato!'", "'Correggo: nuovo settore est, ricevuto?'"],
              ["Ordine teso", "'MUOVITI ADESSO!'", "'Bravo, sposta su rally Echo, conferma'"],
            ],
          },
        ],
      },
      {
        heading: "Protocollo post-azione",
        blocks: [
          {
            type: "p",
            text: "Le emozioni soppresse devono essere processate, non sepolte. Il protocollo post-azione include un debrief tecnico (cosa è successo, cosa miglioriamo) e una decompressione emotiva separata e protetta. Mescolare le due fasi è un errore: il debrief tecnico richiede freddezza, la decompressione richiede sicurezza.",
          },
          {
            type: "ol",
            items: [
              "Debrief tecnico subito (entro 12 ore) — freddo, fattuale, no-blame",
              "Recupero fisiologico — idratazione, cibo, sonno",
              "Decompressione informale — con compagni, senza struttura formale",
              "Processo individuale — scrittura, sport, conversazione con persona di fiducia",
              "Riconoscere segnali di necessità di supporto professionale (intrusione, evitamento, iperattivazione)",
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
              "Confondere sangue freddo con anestesia emotiva permanente",
              "Sopprimere senza poi processare — debito psicologico inevitabile",
              "Esprimere rabbia con violenza gratuita verso oggetti, animali o civili",
              "Dimostrare freddezza pubblicamente come performance (tipico dei nuovi)",
              "Vergognarsi della propria paura come se fosse debolezza",
              "Trattare il debrief tecnico come occasione di sfogo emotivo",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I veterani che funzionano sul fronte ucraino mostrano due caratteristiche simultanee: capacità di sopprimere completamente l'emozione nei 30 secondi che decidono una vita, e capacità di piangere apertamente in decompressione due ore dopo. Chi resta sempre freddo si rompe in modi nascosti — alcol, isolamento, decisioni autolesive. Chi non è mai freddo non sopravvive abbastanza per dover decomprimere. La competenza sta nell'oscillazione controllata fra i due stati.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Cold blood does not mean absence of emotion. It means emotion — fear, anger, pain, urgency — does not control execution. It is a trainable competence built on physiological self-regulation, verbal control and post-action protocols. Combat requires temporarily suppressing natural responses, and then processing them.",
    sections: [
      {
        heading: "Physiological regulation",
        blocks: [
          {
            type: "p",
            text: "Under adrenaline the body produces automatic responses: tachycardia, vasoconstriction, tunnel vision, loss of fine motor skills. These responses serve survival but degrade technical accuracy. Regulation consists of bringing physiology back into the window where technical skills remain accessible (HR 115–150 bpm).",
          },
          {
            type: "ol",
            items: [
              "Recognise the signal (hands trembling, voice rising, breath short)",
              "Extend exhalation (in 4 s, out 6–8 s) for 3–4 cycles",
              "Verbalise a concrete fact ('weapon on safe, position covered')",
              "Anchor on a repeated technical gesture (weapon check, kit check)",
              "Return to task without self-analysis",
            ],
          },
          {
            type: "callout",
            title: "Operational box breathing",
            body: "In 4 — hold 4 — out 4 — hold 4. Three cycles before planned action, even short. Reduces HR by 10–20 bpm and brings the prefrontal cortex back online. Done under helmet, done in trench.",
          },
        ],
      },
      {
        heading: "Suppression in combat",
        blocks: [
          {
            type: "p",
            text: "During action, the only possible emotional management is suppression. It is not pathological repression: it is recognising that the emotion window is not now. The pain over a wounded comrade becomes medical priority, not weeping. The anger at a failure becomes tactical correction, not revenge. Every emotion is translated into a task or queued.",
          },
          {
            type: "ul",
            items: [
              "Fear → identify source → move/cover → resume task",
              "Anger → identify proper target → fire or decision → never gratuitous gestures",
              "Pain (own) → MARCH/triage → communicate → continue if possible",
              "Pain (comrade) → CASEVAC → medical priority → emotion later",
              "Frustration → factual SITREP → plan adjustment → emotion later",
            ],
          },
          {
            type: "warn",
            title: "WARNING",
            body: "Emotional suppression is instrumental and temporary. It is not a lifestyle. Holding emotion suppressed beyond action produces cumulative psychic damage. The post-action protocol exists to prevent this.",
          },
        ],
      },
      {
        heading: "Verbal control",
        blocks: [
          {
            type: "p",
            text: "The voice is the first indicator of emotional state the team perceives. A team leader who shouts destabilises more than enemy fire. Verbal control is a practical discipline: low tone, short words, fixed structure. The radio has its own protocol that imposes discipline, but internal communication must also follow it under stress.",
          },
          {
            type: "table",
            headers: ["Situation", "Wrong form", "Correct form"],
            rows: [
              ["Contact", "'Shit shit where are they firing!'", "'Contact front 10, 200 m'"],
              ["Casualty", "'Help, it's bad!'", "'Bravo down, conscious, leg, MARCH in progress'"],
              ["Own mistake", "'Sorry I screwed up!'", "'Correcting: new sector east, copy?'"],
              ["Tense order", "'MOVE NOW!'", "'Bravo, displace to rally Echo, confirm'"],
            ],
          },
        ],
      },
      {
        heading: "Post-action protocol",
        blocks: [
          {
            type: "p",
            text: "Suppressed emotions must be processed, not buried. The post-action protocol includes a technical debrief (what happened, what we improve) and a separate, protected emotional decompression. Mixing the two phases is an error: technical debrief requires coldness, decompression requires safety.",
          },
          {
            type: "ol",
            items: [
              "Technical debrief immediately (within 12 hours) — cold, factual, no-blame",
              "Physiological recovery — hydration, food, sleep",
              "Informal decompression — with comrades, no formal structure",
              "Individual processing — writing, sport, conversation with a trusted person",
              "Recognise signs of need for professional support (intrusion, avoidance, hyperarousal)",
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
              "Confusing cold blood with permanent emotional anaesthesia",
              "Suppressing without later processing — inevitable psychological debt",
              "Expressing anger through gratuitous violence on objects, animals or civilians",
              "Displaying coldness publicly as performance (typical of newcomers)",
              "Being ashamed of your fear as if it were weakness",
              "Treating the technical debrief as an emotional outlet",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Veterans who function on the Ukrainian front show two simultaneous traits: ability to fully suppress emotion in the 30 seconds that decide a life, and ability to weep openly in decompression two hours later. Those who stay always cold break in hidden ways — alcohol, isolation, self-harming decisions. Those who are never cold do not survive long enough to need to decompress. The competence is in controlled oscillation between the two states.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Sangue frio não significa ausência de emoção. Significa que a emoção — medo, raiva, dor, pressa — não controla a execução. É uma competência treinável baseada em autorregulação fisiológica, controle verbal e protocolos pós-ação. O combate exige suprimir temporariamente as respostas naturais, e depois processá-las.",
    sections: [
      {
        heading: "Regulação fisiológica",
        blocks: [
          {
            type: "p",
            text: "Sob adrenalina o corpo produz respostas automáticas: taquicardia, vasoconstrição, visão em túnel, perda da motricidade fina. Essas respostas servem para sobreviver, mas degradam a precisão técnica. Regulação é trazer a fisiologia de volta à janela onde competência técnica continua acessível (FC 115–150 bpm).",
          },
          {
            type: "ol",
            items: [
              "Reconhecer o sinal (mãos tremem, voz sobe, respiração curta)",
              "Prolongar a expiração (inspira 4 s, expira 6–8 s) por 3–4 ciclos",
              "Verbalizar um fato concreto ('arma na trava, posição coberta')",
              "Ancorar em um gesto técnico repetido (checagem de arma, equipamento)",
              "Voltar à tarefa sem auto-análise",
            ],
          },
          {
            type: "callout",
            title: "Box breathing operacional",
            body: "Inspira 4 — segura 4 — expira 4 — segura 4. Três ciclos antes da ação planejada, mesmo curtos. Reduz FC em 10–20 bpm e traz o córtex pré-frontal de volta. Funciona sob capacete, funciona em trincheira.",
          },
        ],
      },
      {
        heading: "Supressão em combate",
        blocks: [
          {
            type: "p",
            text: "Durante a ação, a única gestão emocional possível é a supressão. Não é repressão patológica: é reconhecer que a janela emocional não é agora. A dor por um companheiro ferido vira prioridade médica, não choro. A raiva por uma falha vira correção tática, não vingança. Cada emoção é traduzida em tarefa ou enfileirada.",
          },
          {
            type: "ul",
            items: [
              "Medo → identificar fonte → mover/cobrir → retomar tarefa",
              "Raiva → identificar alvo apropriado → fogo ou decisão → nunca gestos gratuitos",
              "Dor (própria) → MARCH/triagem → comunicar → seguir se possível",
              "Dor (companheiro) → CASEVAC → prioridade médica → emoção depois",
              "Frustração → SITREP factual → ajuste do plano → emoção depois",
            ],
          },
          {
            type: "warn",
            title: "ATENÇÃO",
            body: "A supressão emocional é instrumental e temporária. Não é estilo de vida. Manter emoção suprimida além da ação produz dano psíquico cumulativo. O protocolo pós-ação existe para evitar isso.",
          },
        ],
      },
      {
        heading: "Controle verbal",
        blocks: [
          {
            type: "p",
            text: "A voz é o primeiro indicador de estado emocional que o team percebe. Um team leader que grita desestabiliza mais que o fogo inimigo. Controle verbal é disciplina prática: tom baixo, palavras curtas, estrutura fixa. O rádio tem o próprio protocolo que impõe disciplina, mas a comunicação interna também deve segui-lo sob estresse.",
          },
          {
            type: "table",
            headers: ["Situação", "Forma errada", "Forma correta"],
            rows: [
              ["Contato", "'Porra cadê o tiro!'", "'Contato frente 10, 200 m'"],
              ["Baixa", "'Socorro tá grave!'", "'Bravo down, consciente, perna, MARCH em curso'"],
              ["Erro próprio", "'Desculpa, errei!'", "'Corrigindo: novo setor leste, copia?'"],
              ["Ordem tensa", "'MEXE AGORA!'", "'Bravo, desloca para rally Echo, confirma'"],
            ],
          },
        ],
      },
      {
        heading: "Protocolo pós-ação",
        blocks: [
          {
            type: "p",
            text: "Emoções suprimidas devem ser processadas, não enterradas. O protocolo pós-ação inclui debrief técnico (o que aconteceu, o que melhoramos) e descompressão emocional separada e protegida. Misturar as duas fases é erro: o debrief técnico exige frieza, a descompressão exige segurança.",
          },
          {
            type: "ol",
            items: [
              "Debrief técnico imediato (até 12 horas) — frio, factual, no-blame",
              "Recuperação fisiológica — hidratação, comida, sono",
              "Descompressão informal — com companheiros, sem estrutura formal",
              "Processamento individual — escrita, esporte, conversa com pessoa de confiança",
              "Reconhecer sinais de necessidade de apoio profissional (intrusão, evitação, hiperativação)",
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
              "Confundir sangue frio com anestesia emocional permanente",
              "Suprimir sem depois processar — dívida psicológica inevitável",
              "Expressar raiva com violência gratuita a objetos, animais ou civis",
              "Demonstrar frieza publicamente como performance (típico de novatos)",
              "Ter vergonha do próprio medo como se fosse fraqueza",
              "Tratar o debrief técnico como válvula emocional",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Veteranos que funcionam no front ucraniano mostram dois traços simultâneos: capacidade de suprimir totalmente a emoção nos 30 segundos que decidem uma vida, e capacidade de chorar abertamente em descompressão duas horas depois. Quem fica sempre frio se quebra de modos escondidos — álcool, isolamento, decisões autodestrutivas. Quem nunca é frio não sobrevive o suficiente para precisar descomprimir. A competência está na oscilação controlada entre os dois estados.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le sang-froid ne signifie pas absence d'émotion. Il signifie que l'émotion — peur, colère, douleur, urgence — ne contrôle pas l'exécution. C'est une compétence travaillable fondée sur l'autorégulation physiologique, le contrôle verbal et les protocoles post-action. Le combat exige de supprimer temporairement les réponses naturelles, puis de les traiter.",
    sections: [
      {
        heading: "Régulation physiologique",
        blocks: [
          {
            type: "p",
            text: "Sous adrénaline le corps produit des réponses automatiques : tachycardie, vasoconstriction, vision tunnel, perte de motricité fine. Ces réponses servent la survie mais dégradent la précision technique. La régulation consiste à ramener la physiologie dans la fenêtre où les compétences techniques restent accessibles (FC 115–150 bpm).",
          },
          {
            type: "ol",
            items: [
              "Reconnaître le signal (mains qui tremblent, voix qui monte, respiration courte)",
              "Allonger l'expiration (inspire 4 s, expire 6–8 s) pendant 3–4 cycles",
              "Verbaliser un fait concret (« arme en sûreté, position couverte »)",
              "S'ancrer sur un geste technique répété (vérification arme, équipement)",
              "Revenir à la tâche sans auto-analyse",
            ],
          },
          {
            type: "callout",
            title: "Box breathing opérationnel",
            body: "Inspire 4 — pause 4 — expire 4 — pause 4. Trois cycles avant action planifiée, même brefs. Réduit la FC de 10–20 bpm et ramène le cortex préfrontal en ligne. Se fait sous casque, se fait en tranchée.",
          },
        ],
      },
      {
        heading: "Suppression en combat",
        blocks: [
          {
            type: "p",
            text: "Pendant l'action, la seule gestion émotionnelle possible est la suppression. Ce n'est pas une répression pathologique : c'est reconnaître que la fenêtre émotionnelle n'est pas maintenant. La douleur pour un camarade blessé devient priorité médicale, pas pleurs. La colère pour un échec devient correction tactique, pas vengeance. Chaque émotion est traduite en tâche ou mise en file.",
          },
          {
            type: "ul",
            items: [
              "Peur → identifier la source → bouger/se couvrir → reprendre la tâche",
              "Colère → identifier la cible adéquate → feu ou décision → jamais de gestes gratuits",
              "Douleur (propre) → MARCH/triage → communiquer → continuer si possible",
              "Douleur (camarade) → CASEVAC → priorité médicale → émotion plus tard",
              "Frustration → SITREP factuel → ajustement du plan → émotion plus tard",
            ],
          },
          {
            type: "warn",
            title: "ATTENTION",
            body: "La suppression émotionnelle est instrumentale et temporaire. Ce n'est pas un mode de vie. Maintenir l'émotion supprimée au-delà de l'action produit des dommages psychiques cumulatifs. Le protocole post-action existe pour l'éviter.",
          },
        ],
      },
      {
        heading: "Contrôle verbal",
        blocks: [
          {
            type: "p",
            text: "La voix est le premier indicateur d'état émotionnel que l'équipe perçoit. Un chef d'équipe qui crie déstabilise plus que le feu ennemi. Le contrôle verbal est une discipline pratique : ton bas, mots courts, structure fixe. La radio a son propre protocole qui impose une discipline, mais la communication interne doit aussi le suivre sous stress.",
          },
          {
            type: "table",
            headers: ["Situation", "Forme erronée", "Forme correcte"],
            rows: [
              ["Contact", "« Merde où ils tirent ! »", "« Contact front 10, 200 m »"],
              ["Blessé", "« Aide c'est grave ! »", "« Bravo down, conscient, jambe, MARCH en cours »"],
              ["Erreur propre", "« Désolé j'ai foiré ! »", "« Correction : nouveau secteur est, reçu ? »"],
              ["Ordre tendu", "« BOUGE MAINTENANT ! »", "« Bravo, déplace sur rally Echo, confirme »"],
            ],
          },
        ],
      },
      {
        heading: "Protocole post-action",
        blocks: [
          {
            type: "p",
            text: "Les émotions supprimées doivent être traitées, pas enterrées. Le protocole post-action inclut un debrief technique (ce qui s'est passé, ce qu'on améliore) et une décompression émotionnelle séparée et protégée. Mélanger les deux phases est une erreur : le debrief technique exige la froideur, la décompression exige la sécurité.",
          },
          {
            type: "ol",
            items: [
              "Debrief technique immédiat (sous 12 heures) — froid, factuel, no-blame",
              "Récupération physiologique — hydratation, nourriture, sommeil",
              "Décompression informelle — entre camarades, sans structure formelle",
              "Traitement individuel — écriture, sport, conversation avec personne de confiance",
              "Reconnaître les signes nécessitant un soutien professionnel (intrusion, évitement, hyperactivation)",
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
              "Confondre sang-froid et anesthésie émotionnelle permanente",
              "Supprimer sans traiter ensuite — dette psychologique inévitable",
              "Exprimer la colère par violence gratuite sur objets, animaux ou civils",
              "Afficher la froideur publiquement comme performance (typique des nouveaux)",
              "Avoir honte de sa peur comme si c'était une faiblesse",
              "Traiter le debrief technique comme exutoire émotionnel",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les vétérans qui fonctionnent sur le front ukrainien montrent deux traits simultanés : capacité à supprimer totalement l'émotion dans les 30 secondes qui décident d'une vie, et capacité à pleurer ouvertement en décompression deux heures plus tard. Ceux qui restent toujours froids se brisent de façons cachées — alcool, isolement, décisions autodestructrices. Ceux qui ne sont jamais froids ne survivent pas assez longtemps pour devoir décompresser. La compétence est dans l'oscillation contrôlée entre les deux états.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
