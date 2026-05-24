import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La resilienza non è la capacità di non rompersi: è la capacità di riparare. Tutti gli operatori esposti a combattimento sostenuto sviluppano gradi di stress post-traumatico. La differenza fra chi recupera e chi non recupera è la conoscenza dei segnali, la disciplina di decompressione, la disponibilità del supporto e l'assenza di stigma sull'aiuto professionale.",
    sections: [
      {
        heading: "Comprendere lo stress post-traumatico",
        blocks: [
          {
            type: "p",
            text: "PTSD non è una malattia mentale generica: è una risposta specifica del cervello a un trauma percepito come potenzialmente fatale. I sintomi cardine sono quattro famiglie: intrusione (flashback, incubi), evitamento (luoghi, persone, conversazioni), alterazioni cognitive ed emotive (colpa, anedonia, distacco), iperattivazione (sussulto, insonnia, ipervigilanza). Diventa diagnosi quando i sintomi persistono oltre 30 giorni e compromettono il funzionamento.",
          },
          {
            type: "ul",
            items: [
              "Sintomi acuti (giorni–settimane post-evento) sono normali, non patologici",
              "Persistenza oltre il primo mese richiede valutazione",
              "Cronicizzazione si previene con intervento precoce",
              "Auto-medicazione con alcol o sostanze accelera la cronicizzazione",
              "Il primo trauma non gestito rende i successivi più devastanti",
            ],
          },
        ],
      },
      {
        heading: "Decompressione strutturata",
        blocks: [
          {
            type: "p",
            text: "Tornare a casa dopo un dispiegamento richiede una transizione, non un ritorno immediato. La decompressione strutturata è una pratica adottata da molte forze armate moderne: 48–72 ore in luogo protetto fra teatro e domicilio, con team-mate, prima di affrontare famiglia e società civile.",
          },
          {
            type: "ol",
            items: [
              "Fase 1: chiusura tecnica — restituzione equipaggiamento, debrief finale, paghe",
              "Fase 2: decompressione fisica — sonno, cibo, riposo lontano da teatro",
              "Fase 3: decompressione sociale — con compagni che hanno vissuto la stessa esperienza",
              "Fase 4: rientro graduale — famiglia, civili, routine pre-deployment",
              "Fase 5: follow-up — check psicologico a 30, 90, 180 giorni",
            ],
          },
          {
            type: "callout",
            title: "Errore tipico del volontario",
            body: "Tornare a casa dall'Ucraina senza decompressione: aereo da Cracovia, casa, famiglia, amici, lavoro entro 48 ore. La discontinuità è troppo brutale. Pianificare 5–7 giorni di buffer in città neutra, possibilmente con compagni di missione, prima del rientro domestico.",
          },
        ],
      },
      {
        heading: "Supporto fra pari",
        blocks: [
          {
            type: "p",
            text: "Il supporto fra pari è la risorsa più efficace nelle prime fasi. Un compagno che ha vissuto la stessa esperienza valida i propri vissuti senza giudizio e senza patologizzazione. Funziona se è strutturato — non una chiacchierata generica al bar, ma incontri regolari con regole chiare.",
          },
          {
            type: "ul",
            items: [
              "Regole base: confidenzialità, ascolto senza giudizio, niente competizione fra esperienze",
              "Frequenza: settimanale o bisettimanale per i primi 3 mesi post-rientro",
              "Composizione: 4–8 persone con esperienza comparabile",
              "Limite: il peer support non sostituisce la valutazione clinica",
              "Segnali rossi: dirottare verso supporto professionale",
            ],
          },
        ],
      },
      {
        heading: "Aiuto professionale",
        blocks: [
          {
            type: "p",
            text: "Cercare un professionista non è debolezza: è manutenzione. I trattamenti evidence-based per PTSD (EMDR, prolonged exposure, CPT) hanno tassi di efficacia documentati e tempi definiti (8–12 sedute tipiche). Il problema non è la mancanza di trattamento: è la diffusione del trattamento e l'eliminazione dello stigma.",
          },
          {
            type: "table",
            headers: ["Segnale", "Durata", "Azione"],
            rows: [
              ["Incubi intermittenti", "< 30 giorni", "Auto-monitoraggio, peer support"],
              ["Incubi quotidiani", "> 30 giorni", "Valutazione professionale"],
              ["Evitamento di luoghi o persone", "> 30 giorni", "Valutazione professionale"],
              ["Ideazione suicida", "qualsiasi", "Urgenza — supporto immediato"],
              ["Auto-medicazione (alcol/sostanze)", "> 14 giorni", "Valutazione professionale"],
              ["Sintomi dissociativi", "qualsiasi", "Valutazione professionale"],
            ],
          },
          {
            type: "warn",
            title: "IDEAZIONE SUICIDA",
            body: "Pensieri suicidi ricorrenti non sono mai 'fase passeggera' da gestire da soli. Contattare immediatamente: peer di fiducia + medico/psicologo + linea di crisi nazionale. Mai isolarsi quando il pensiero compare. Mai dire al peer 'non dirlo a nessuno' — chiedere esplicitamente di essere accompagnati al supporto.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Considerare il PTSD un problema di debolezza individuale invece che fisiologico",
              "Aspettare che 'passi da solo' oltre i primi 30 giorni",
              "Auto-medicare con alcol — primo step verso la cronicizzazione",
              "Tornare in operazione per 'distrarsi' senza aver processato la precedente",
              "Isolarsi dai propri compagni dopo il rientro — perdita della rete più protettiva",
              "Vergognarsi di chiedere aiuto a un professionista come se fosse stigma",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari internazionali che hanno servito in Ucraina e sono rientrati a casa documentano un pattern ricorrente: i primi 2–3 mesi sembrano gestibili, poi i sintomi emergono. Le storie peggiori sono di chi ha rifiutato il supporto sentendosi un veterano vero, di chi è tornato senza decompressione, di chi ha minimizzato i sintomi con alcol. Le storie migliori sono di chi ha pianificato il rientro come si pianifica una missione: con risorse, tempo, persone preparate, follow-up. La resilienza si costruisce con disciplina, non con orgoglio.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Resilience is not the ability not to break: it is the ability to repair. All operators exposed to sustained combat develop degrees of post-traumatic stress. The difference between those who recover and those who do not is knowledge of the signals, decompression discipline, support availability and absence of stigma around professional help.",
    sections: [
      {
        heading: "Understanding post-traumatic stress",
        blocks: [
          {
            type: "p",
            text: "PTSD is not a generic mental illness: it is a specific brain response to trauma perceived as potentially fatal. The four cardinal symptom families are: intrusion (flashbacks, nightmares), avoidance (places, people, conversations), cognitive and emotional alterations (guilt, anhedonia, detachment), hyperarousal (startle, insomnia, hypervigilance). It becomes a diagnosis when symptoms persist beyond 30 days and impair functioning.",
          },
          {
            type: "ul",
            items: [
              "Acute symptoms (days–weeks post-event) are normal, not pathological",
              "Persistence beyond the first month warrants evaluation",
              "Chronicity is prevented by early intervention",
              "Self-medication with alcohol or substances accelerates chronicity",
              "An unprocessed first trauma makes subsequent ones more devastating",
            ],
          },
        ],
      },
      {
        heading: "Structured decompression",
        blocks: [
          {
            type: "p",
            text: "Going home after deployment requires transition, not immediate return. Structured decompression is a practice adopted by many modern armed forces: 48–72 hours in a protected location between theatre and home, with team-mates, before facing family and civil society.",
          },
          {
            type: "ol",
            items: [
              "Phase 1: technical closure — kit return, final debrief, pay",
              "Phase 2: physical decompression — sleep, food, rest away from theatre",
              "Phase 3: social decompression — with comrades who shared the experience",
              "Phase 4: gradual re-entry — family, civilians, pre-deployment routine",
              "Phase 5: follow-up — psychological check at 30, 90, 180 days",
            ],
          },
          {
            type: "callout",
            title: "Typical volunteer mistake",
            body: "Returning home from Ukraine with no decompression: flight from Kraków, home, family, friends, work within 48 hours. The discontinuity is too brutal. Plan 5–7 days of buffer in a neutral city, ideally with mission comrades, before the domestic return.",
          },
        ],
      },
      {
        heading: "Peer support",
        blocks: [
          {
            type: "p",
            text: "Peer support is the most effective resource in early phases. A comrade who lived the same experience validates your lived states without judgement and without pathologising. It works if structured — not a generic bar chat, but regular meetings with clear rules.",
          },
          {
            type: "ul",
            items: [
              "Ground rules: confidentiality, listening without judgement, no competing experiences",
              "Frequency: weekly or bi-weekly for the first 3 months post-return",
              "Composition: 4–8 people with comparable experience",
              "Limit: peer support does not replace clinical evaluation",
              "Red flags: redirect to professional support",
            ],
          },
        ],
      },
      {
        heading: "Professional help",
        blocks: [
          {
            type: "p",
            text: "Seeking a professional is not weakness: it is maintenance. Evidence-based PTSD treatments (EMDR, prolonged exposure, CPT) have documented efficacy and defined timelines (typically 8–12 sessions). The problem is not lack of treatment: it is access to treatment and removal of stigma.",
          },
          {
            type: "table",
            headers: ["Signal", "Duration", "Action"],
            rows: [
              ["Intermittent nightmares", "< 30 days", "Self-monitoring, peer support"],
              ["Daily nightmares", "> 30 days", "Professional evaluation"],
              ["Avoidance of places or people", "> 30 days", "Professional evaluation"],
              ["Suicidal ideation", "any", "Urgent — immediate support"],
              ["Self-medication (alcohol/drugs)", "> 14 days", "Professional evaluation"],
              ["Dissociative symptoms", "any", "Professional evaluation"],
            ],
          },
          {
            type: "warn",
            title: "SUICIDAL IDEATION",
            body: "Recurrent suicidal thoughts are never a 'passing phase' to manage alone. Contact immediately: trusted peer + doctor/psychologist + national crisis line. Never isolate when the thought appears. Never tell the peer 'don't tell anyone' — explicitly ask to be accompanied to support.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Treating PTSD as a problem of individual weakness rather than physiology",
              "Waiting for it to 'pass on its own' beyond the first 30 days",
              "Self-medicating with alcohol — the first step into chronicity",
              "Returning to operations to 'distract yourself' without processing the previous one",
              "Isolating from comrades after return — losing the most protective network",
              "Being ashamed to ask a professional for help as if it were stigma",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "International volunteers who served in Ukraine and returned home document a recurring pattern: the first 2–3 months feel manageable, then symptoms emerge. The worst stories are of those who refused support to feel like a real veteran, who returned with no decompression, who minimised symptoms with alcohol. The best stories are of those who planned the return as one plans a mission: with resources, time, prepared people, follow-up. Resilience is built with discipline, not pride.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Resiliência não é a capacidade de não quebrar: é a capacidade de reparar. Todos os operadores expostos a combate sustentado desenvolvem graus de estresse pós-traumático. A diferença entre quem se recupera e quem não se recupera é o conhecimento dos sinais, a disciplina de descompressão, a disponibilidade de apoio e a ausência de estigma sobre ajuda profissional.",
    sections: [
      {
        heading: "Entender o estresse pós-traumático",
        blocks: [
          {
            type: "p",
            text: "TEPT não é doença mental genérica: é resposta específica do cérebro a trauma percebido como potencialmente fatal. As quatro famílias cardinais de sintomas: intrusão (flashbacks, pesadelos), evitação (lugares, pessoas, conversas), alterações cognitivas e emocionais (culpa, anedonia, desligamento), hiperativação (sobressalto, insônia, hipervigilância). Vira diagnóstico quando os sintomas persistem além de 30 dias e prejudicam o funcionamento.",
          },
          {
            type: "ul",
            items: [
              "Sintomas agudos (dias–semanas pós-evento) são normais, não patológicos",
              "Persistência além do primeiro mês exige avaliação",
              "Cronificação se previne com intervenção precoce",
              "Automedicação com álcool ou substâncias acelera a cronificação",
              "O primeiro trauma não processado torna os seguintes mais devastadores",
            ],
          },
        ],
      },
      {
        heading: "Descompressão estruturada",
        blocks: [
          {
            type: "p",
            text: "Voltar para casa após deployment exige transição, não retorno imediato. Descompressão estruturada é prática adotada por muitas forças armadas modernas: 48–72 horas em local protegido entre teatro e casa, com team-mates, antes de enfrentar família e sociedade civil.",
          },
          {
            type: "ol",
            items: [
              "Fase 1: encerramento técnico — devolução de equipamento, debrief final, paga",
              "Fase 2: descompressão física — sono, comida, descanso longe do teatro",
              "Fase 3: descompressão social — com companheiros que viveram a mesma experiência",
              "Fase 4: reentrada gradual — família, civis, rotina pré-deployment",
              "Fase 5: follow-up — checagem psicológica a 30, 90, 180 dias",
            ],
          },
          {
            type: "callout",
            title: "Erro típico do voluntário",
            body: "Voltar para casa da Ucrânia sem descompressão: voo de Cracóvia, casa, família, amigos, trabalho em 48 horas. A descontinuidade é brutal demais. Planejar 5–7 dias de buffer em cidade neutra, idealmente com companheiros de missão, antes do retorno doméstico.",
          },
        ],
      },
      {
        heading: "Apoio entre pares",
        blocks: [
          {
            type: "p",
            text: "Apoio entre pares é o recurso mais eficaz nas fases iniciais. Um companheiro que viveu a mesma experiência valida o que você sente sem julgamento e sem patologizar. Funciona se estruturado — não conversa genérica no bar, mas encontros regulares com regras claras.",
          },
          {
            type: "ul",
            items: [
              "Regras base: confidencialidade, escuta sem julgamento, sem competição de experiências",
              "Frequência: semanal ou quinzenal nos primeiros 3 meses pós-retorno",
              "Composição: 4–8 pessoas com experiência comparável",
              "Limite: peer support não substitui avaliação clínica",
              "Sinais vermelhos: encaminhar para apoio profissional",
            ],
          },
        ],
      },
      {
        heading: "Ajuda profissional",
        blocks: [
          {
            type: "p",
            text: "Buscar profissional não é fraqueza: é manutenção. Tratamentos baseados em evidência para TEPT (EMDR, exposição prolongada, CPT) têm eficácia documentada e prazos definidos (tipicamente 8–12 sessões). O problema não é a falta de tratamento: é o acesso e a eliminação do estigma.",
          },
          {
            type: "table",
            headers: ["Sinal", "Duração", "Ação"],
            rows: [
              ["Pesadelos intermitentes", "< 30 dias", "Automonitoramento, peer support"],
              ["Pesadelos diários", "> 30 dias", "Avaliação profissional"],
              ["Evitação de lugares ou pessoas", "> 30 dias", "Avaliação profissional"],
              ["Ideação suicida", "qualquer", "Urgência — apoio imediato"],
              ["Automedicação (álcool/drogas)", "> 14 dias", "Avaliação profissional"],
              ["Sintomas dissociativos", "qualquer", "Avaliação profissional"],
            ],
          },
          {
            type: "warn",
            title: "IDEAÇÃO SUICIDA",
            body: "Pensamentos suicidas recorrentes nunca são 'fase passageira' a gerir sozinho. Contatar imediatamente: par de confiança + médico/psicólogo + linha de crise nacional. Nunca se isolar quando o pensamento aparece. Nunca dizer ao par 'não conta para ninguém' — pedir explicitamente para ser acompanhado ao apoio.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Tratar TEPT como problema de fraqueza individual em vez de fisiológico",
              "Esperar que 'passe sozinho' além dos primeiros 30 dias",
              "Automedicar-se com álcool — primeiro passo para cronificação",
              "Voltar à operação para 'se distrair' sem processar a anterior",
              "Isolar-se dos companheiros após o retorno — perda da rede mais protetiva",
              "Ter vergonha de pedir ajuda profissional como se fosse estigma",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Voluntários internacionais que serviram na Ucrânia e voltaram para casa documentam um padrão recorrente: os primeiros 2–3 meses parecem administráveis, depois os sintomas emergem. As piores histórias são de quem recusou apoio para se sentir veterano de verdade, voltou sem descompressão, minimizou sintomas com álcool. As melhores são de quem planejou o retorno como se planeja uma missão: com recursos, tempo, pessoas preparadas, follow-up. Resiliência se constrói com disciplina, não com orgulho.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La résilience n'est pas la capacité à ne pas se briser : c'est la capacité à se réparer. Tous les opérateurs exposés à un combat soutenu développent des degrés de stress post-traumatique. La différence entre ceux qui récupèrent et ceux qui ne récupèrent pas tient à la connaissance des signaux, à la discipline de décompression, à la disponibilité du soutien et à l'absence de stigmatisation autour de l'aide professionnelle.",
    sections: [
      {
        heading: "Comprendre le stress post-traumatique",
        blocks: [
          {
            type: "p",
            text: "Le TSPT n'est pas une maladie mentale générique : c'est une réponse cérébrale spécifique à un traumatisme perçu comme potentiellement mortel. Les quatre familles cardinales de symptômes : intrusion (flashbacks, cauchemars), évitement (lieux, personnes, conversations), altérations cognitives et émotionnelles (culpabilité, anhédonie, détachement), hyperactivation (sursaut, insomnie, hypervigilance). Cela devient diagnostic quand les symptômes persistent au-delà de 30 jours et altèrent le fonctionnement.",
          },
          {
            type: "ul",
            items: [
              "Symptômes aigus (jours–semaines post-événement) sont normaux, pas pathologiques",
              "Persistance au-delà du premier mois exige une évaluation",
              "La chronicisation se prévient par une intervention précoce",
              "L'automédication par alcool ou substances accélère la chronicisation",
              "Un premier traumatisme non traité rend les suivants plus dévastateurs",
            ],
          },
        ],
      },
      {
        heading: "Décompression structurée",
        blocks: [
          {
            type: "p",
            text: "Rentrer après un déploiement exige une transition, pas un retour immédiat. La décompression structurée est une pratique adoptée par de nombreuses armées modernes : 48–72 heures en lieu protégé entre théâtre et domicile, avec les coéquipiers, avant de retrouver famille et société civile.",
          },
          {
            type: "ol",
            items: [
              "Phase 1 : clôture technique — restitution équipement, debrief final, soldes",
              "Phase 2 : décompression physique — sommeil, nourriture, repos loin du théâtre",
              "Phase 3 : décompression sociale — avec camarades ayant partagé l'expérience",
              "Phase 4 : réintégration progressive — famille, civils, routine pré-déploiement",
              "Phase 5 : suivi — bilan psychologique à 30, 90, 180 jours",
            ],
          },
          {
            type: "callout",
            title: "Erreur typique du volontaire",
            body: "Rentrer d'Ukraine sans décompression : vol depuis Cracovie, maison, famille, amis, travail en 48 heures. La discontinuité est trop brutale. Planifier 5–7 jours de tampon dans une ville neutre, idéalement avec des camarades de mission, avant le retour au domicile.",
          },
        ],
      },
      {
        heading: "Soutien entre pairs",
        blocks: [
          {
            type: "p",
            text: "Le soutien entre pairs est la ressource la plus efficace dans les premières phases. Un camarade ayant vécu la même expérience valide votre vécu sans jugement et sans pathologiser. Cela fonctionne s'il est structuré — pas une discussion au bar, mais des rencontres régulières aux règles claires.",
          },
          {
            type: "ul",
            items: [
              "Règles de base : confidentialité, écoute sans jugement, pas de compétition d'expériences",
              "Fréquence : hebdomadaire ou bimensuelle les 3 premiers mois post-retour",
              "Composition : 4–8 personnes d'expérience comparable",
              "Limite : le peer support ne remplace pas l'évaluation clinique",
              "Signaux rouges : orienter vers un soutien professionnel",
            ],
          },
        ],
      },
      {
        heading: "Aide professionnelle",
        blocks: [
          {
            type: "p",
            text: "Chercher un professionnel n'est pas de la faiblesse : c'est de la maintenance. Les traitements fondés sur preuves pour le TSPT (EMDR, exposition prolongée, CPT) ont une efficacité documentée et des durées définies (typiquement 8–12 séances). Le problème n'est pas le manque de traitement : c'est l'accès et la suppression de la stigmatisation.",
          },
          {
            type: "table",
            headers: ["Signal", "Durée", "Action"],
            rows: [
              ["Cauchemars intermittents", "< 30 jours", "Auto-suivi, peer support"],
              ["Cauchemars quotidiens", "> 30 jours", "Évaluation professionnelle"],
              ["Évitement de lieux ou personnes", "> 30 jours", "Évaluation professionnelle"],
              ["Idéation suicidaire", "toute durée", "Urgence — soutien immédiat"],
              ["Automédication (alcool/drogues)", "> 14 jours", "Évaluation professionnelle"],
              ["Symptômes dissociatifs", "toute durée", "Évaluation professionnelle"],
            ],
          },
          {
            type: "warn",
            title: "IDÉATION SUICIDAIRE",
            body: "Les pensées suicidaires récurrentes ne sont jamais une « phase passagère » à gérer seul. Contacter immédiatement : pair de confiance + médecin/psychologue + ligne de crise nationale. Ne jamais s'isoler quand la pensée apparaît. Ne jamais dire au pair « ne le dis à personne » — demander explicitement à être accompagné vers le soutien.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Traiter le TSPT comme un problème de faiblesse individuelle plutôt que physiologique",
              "Attendre que « ça passe tout seul » au-delà des 30 premiers jours",
              "Automédication à l'alcool — premier pas vers la chronicisation",
              "Repartir en opération pour « se distraire » sans avoir traité la précédente",
              "S'isoler de ses camarades après le retour — perte du réseau le plus protecteur",
              "Avoir honte de demander de l'aide à un professionnel comme si c'était stigmatisant",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires internationaux ayant servi en Ukraine et rentrés au pays documentent un schéma récurrent : les 2–3 premiers mois semblent gérables, puis les symptômes émergent. Les pires histoires sont celles de ceux qui ont refusé le soutien pour se sentir « vrais vétérans », sont rentrés sans décompression, ont minimisé les symptômes avec l'alcool. Les meilleures sont celles de ceux qui ont planifié le retour comme on planifie une mission : avec ressources, temps, personnes préparées, suivi. La résilience se construit avec discipline, pas avec orgueil.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
