import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

interface Strings {
  intro: string;
  what: string;
  whatBody: string;
  pillars: ReadonlyArray<{ title: string; body: string }>;
  notRomance: string;
  notRomanceBody: string;
  daily: string;
  dailyItems: ReadonlyArray<string>;
  bad: string;
  badItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "La mentalità professionale è il primo elemento del manuale perché è il filtro che decide se sopravvivi al primo mese, e se chi ti sta accanto è disposto a uscire in missione con te il secondo. Tutto il resto — armi, comms, droni — viene dopo.",
    what: "Cos'è la mentalità professionale",
    whatBody:
      "Non è ferocia, non è coraggio teatrale, non è disprezzo per il rischio. È un modo specifico di stare nel proprio lavoro: prevedibile per i compagni, freddo nelle decisioni, ordinato nell'esecuzione, onesto nella valutazione di se stessi. È quello che permette a una squadra di funzionare quando le cose vanno male, e quasi tutto, prima o poi, va male.",
    pillars: [
      { title: "Affidabilità", body: "Sei dove hai detto di essere, all'ora che hai detto, con l'equipaggiamento che hai detto. Senza questo non sei un operatore: sei un rischio." },
      { title: "Disciplina", body: "Eseguire le SOP anche quando sono noiose, anche quando \"sembra\" inutile. Il giorno in cui non sono noiose è il giorno in cui dovevi conoscerle a memoria." },
      { title: "Curiosità tecnica", body: "Studiare armi, sistemi, dottrina, nemico. Volontari che leggono dopo cena durano più a lungo di volontari che dormono dopo cena. Sempre." },
      { title: "Umiltà operativa", body: "Sei sempre il più verde della stanza, anche dopo cento giorni. Chi non lo è, sbaglia per arroganza. Chi smette di esserlo, muore per certezze sbagliate." },
      { title: "Calma sotto pressione", body: "Le decisioni si prendono lente, le azioni si eseguono veloci. Il contrario uccide squadre intere." },
      { title: "Responsabilità", body: "I tuoi errori sono tuoi. Niente scuse via radio, niente alibi al debrief. Si dichiara, si corregge, si va avanti." },
    ],
    notRomance: "Quello che NON è",
    notRomanceBody:
      "Non è il \"warrior mindset\" da social. Non è la postura, il tatuaggio, il velcro. La mentalità professionale è invisibile dall'esterno: si vede solo nelle scelte. Chi la confonde con l'estetica fallisce il primo combattimento o, peggio, fallisce il primo errore di un compagno.",
    daily: "Allenamento quotidiano",
    dailyItems: [
      "Sonno: priorità operativa. Si dorme quando si può, anche 20 minuti, senza ego.",
      "Alimentazione: regolare, semplice, idratata. Il caffè non sostituisce l'acqua.",
      "Manutenzione personale: armi, ottiche, radio, batterie, equipaggiamento — ogni giorno, ogni volta.",
      "Lettura tecnica: manuali, AAR, lessons learned. Almeno 30 minuti al giorno fuori operazione.",
      "Lingua: padronanza ENG operativa entro 90 giorni. Senza eccezioni.",
      "Fitness funzionale: zaino, marcia, salite, recupero in posizioni scomode. La palestra estetica è secondaria.",
    ],
    bad: "Segnali di mentalità sbagliata",
    badItems: [
      "Parlare di combattimento prima di averlo visto",
      "Cercare \"action\" o adrenalina invece di esecuzione pulita",
      "Disprezzo per chi insegna le basi",
      "Filmare in operazione per uso personale",
      "Postare posizioni, mezzi, volti, geolocalizzazioni",
      "Ego che non accetta il \"NO\" da un commilitone più esperto",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Il volontario internazionale che funziona a lungo termine non è il più forte, non è il più veloce, non è il più armato. È quello che la squadra include senza pensarci due volte nella rotazione successiva. Si arriva a quel punto solo costruendo affidabilità, una decisione alla volta, per mesi, di solito in silenzio. Chi cerca scorciatoie con \"hero shots\" o trasferimenti continui in unità diverse, è quello che le squadre lasciano indietro quando arriva il momento di rischiare.",
  },
  en: {
    intro:
      "The professional mindset comes first in this manual because it is the filter that decides whether you survive the first month, and whether the people next to you are willing to walk out the gate with you on the second. Everything else — weapons, comms, drones — comes after.",
    what: "What it is",
    whatBody:
      "Not ferocity. Not theatrical courage. Not contempt for risk. It is a specific way of inhabiting your work: predictable to teammates, cold in decisions, orderly in execution, honest in self-assessment. It is what lets a team function when things go bad — and almost everything, eventually, does.",
    pillars: [
      { title: "Reliability", body: "You are where you said, when you said, with what you said. Without this you are not an operator — you are a liability." },
      { title: "Discipline", body: "SOPs executed even when boring, even when \"pointless\". The day they stop being boring is the day you needed them memorised." },
      { title: "Technical curiosity", body: "Study weapons, systems, doctrine, enemy. Volunteers who read after dinner outlast volunteers who sleep after dinner. Always." },
      { title: "Operational humility", body: "You are always the greenest in the room, even after one hundred days. Those who aren't, fail through arrogance. Those who stop being it, die through false certainty." },
      { title: "Calm under pressure", body: "Decisions slow, actions fast. The inverse kills whole teams." },
      { title: "Accountability", body: "Your mistakes are yours. No alibis on the net, no excuses at debrief. State, correct, move on." },
    ],
    notRomance: "What it is NOT",
    notRomanceBody:
      "Not the social-media \"warrior mindset\". Not the posture, the tattoo, the velcro. The professional mindset is invisible from outside — it shows only in choices. Those who confuse it with aesthetics fail their first contact, or worse, fail their first teammate's mistake.",
    daily: "Daily training",
    dailyItems: [
      "Sleep: operational priority. Take 20 minutes when you can, no ego.",
      "Nutrition: regular, simple, hydrated. Coffee does not replace water.",
      "Personal maintenance: weapons, optics, radios, batteries, kit — every day, every time.",
      "Technical reading: manuals, AARs, lessons learned. Minimum 30 minutes a day off-line.",
      "Language: operational English mastered within 90 days. No exceptions.",
      "Functional fitness: rucking, climbs, recovery in awkward positions. Aesthetic gym is secondary.",
    ],
    bad: "Signs of the wrong mindset",
    badItems: [
      "Talking combat before having seen it",
      "Chasing \"action\" or adrenaline instead of clean execution",
      "Contempt for those who teach basics",
      "Filming on operations for personal use",
      "Posting positions, vehicles, faces, geolocations",
      "Ego that cannot take \"NO\" from a more experienced teammate",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "The long-term-effective international volunteer is not the strongest, not the fastest, not the most kitted-out. He is the one the team includes without thinking twice in the next rotation. You get there by building reliability, one decision at a time, for months, usually in silence. Those who chase shortcuts — hero shots, constant unit transfers — are the ones teams leave behind when the moment to take risk arrives.",
  },
  "pt-br": {
    intro:
      "A mentalidade profissional vem primeiro neste manual porque é o filtro que decide se você sobrevive ao primeiro mês, e se quem está ao seu lado está disposto a sair em missão com você no segundo. Todo o resto — armas, comms, drones — vem depois.",
    what: "O que é",
    whatBody:
      "Não é ferocidade. Não é coragem teatral. Não é desprezo pelo risco. É um modo específico de estar no seu trabalho: previsível para os companheiros, frio nas decisões, ordenado na execução, honesto na autoavaliação. É o que faz uma equipe funcionar quando as coisas dão errado — e quase tudo, mais cedo ou mais tarde, dá errado.",
    pillars: [
      { title: "Confiabilidade", body: "Você está onde disse, na hora que disse, com o equipamento que disse. Sem isso, você não é operador — é passivo." },
      { title: "Disciplina", body: "SOPs executadas mesmo quando entediantes. O dia em que param de ser entediantes é o dia em que precisava saber de cor." },
      { title: "Curiosidade técnica", body: "Estudar armas, sistemas, doutrina, inimigo. Voluntário que lê depois do jantar dura mais que voluntário que dorme depois. Sempre." },
      { title: "Humildade operacional", body: "Você é sempre o mais verde da sala, mesmo após cem dias. Quem não é, falha por arrogância. Quem deixa de ser, morre por certeza errada." },
      { title: "Calma sob pressão", body: "Decisões lentas, ações rápidas. O inverso mata equipes inteiras." },
      { title: "Responsabilidade", body: "Seus erros são seus. Sem álibis no rádio, sem desculpas no debrief. Declarar, corrigir, seguir." },
    ],
    notRomance: "O que NÃO é",
    notRomanceBody:
      "Não é o \"warrior mindset\" de rede social. Não é postura, tatuagem, velcro. A mentalidade profissional é invisível por fora — só aparece nas escolhas. Quem confunde com estética falha no primeiro contato, ou pior, no primeiro erro do companheiro.",
    daily: "Treinamento diário",
    dailyItems: [
      "Sono: prioridade operacional. 20 minutos quando der, sem ego.",
      "Alimentação: regular, simples, hidratado. Café não substitui água.",
      "Manutenção pessoal: armas, óticas, rádios, baterias, kit — todo dia, toda vez.",
      "Leitura técnica: manuais, AARs, lições. Mínimo 30 min/dia fora de operação.",
      "Idioma: inglês operacional dominado em 90 dias. Sem exceção.",
      "Fitness funcional: ruck, subidas, recuperação em posições incômodas. Academia estética é secundária.",
    ],
    bad: "Sinais da mentalidade errada",
    badItems: [
      "Falar de combate antes de tê-lo visto",
      "Buscar \"action\" ou adrenalina em vez de execução limpa",
      "Desprezo por quem ensina fundamentos",
      "Filmar em operação para uso pessoal",
      "Postar posições, veículos, rostos, geolocalização",
      "Ego que não aceita \"NÃO\" de companheiro mais experiente",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "O voluntário internacional eficaz a longo prazo não é o mais forte, nem o mais rápido, nem o mais equipado. É aquele que a equipe inclui sem pensar duas vezes na próxima rotação. Chega-se lá construindo confiabilidade, uma decisão de cada vez, durante meses, geralmente em silêncio. Quem busca atalhos — fotos heroicas, transferências constantes — é aquele que as equipes deixam para trás quando chega o momento de arriscar.",
  },
  fr: {
    intro:
      "L'état d'esprit professionnel ouvre ce manuel parce qu'il est le filtre qui décide si vous survivez au premier mois, et si ceux qui vous entourent sont prêts à sortir avec vous au second. Tout le reste — armes, comms, drones — vient après.",
    what: "Ce que c'est",
    whatBody:
      "Pas la férocité. Pas le courage théâtral. Pas le mépris du risque. C'est une manière précise d'habiter son travail : prévisible pour les camarades, froid dans la décision, ordonné dans l'exécution, honnête dans l'auto-évaluation. C'est ce qui permet à une équipe de fonctionner quand ça tourne mal — et presque tout, tôt ou tard, tourne mal.",
    pillars: [
      { title: "Fiabilité", body: "Vous êtes où vous avez dit, à l'heure dite, avec l'équipement annoncé. Sans cela, vous n'êtes pas un opérateur — vous êtes un passif." },
      { title: "Discipline", body: "SOPs exécutées même ennuyeuses. Le jour où elles cessent d'être ennuyeuses est celui où il fallait les savoir par cœur." },
      { title: "Curiosité technique", body: "Étudier armes, systèmes, doctrine, ennemi. Le volontaire qui lit après le repas dure plus longtemps que celui qui dort. Toujours." },
      { title: "Humilité opérationnelle", body: "Vous êtes toujours le plus vert de la salle, même après cent jours. Ceux qui ne le sont pas échouent par arrogance. Ceux qui cessent de l'être meurent par fausse certitude." },
      { title: "Calme sous pression", body: "Décisions lentes, actions rapides. L'inverse tue des équipes entières." },
      { title: "Responsabilité", body: "Vos erreurs sont les vôtres. Pas d'alibi sur le réseau, pas d'excuses au débrief. Déclarer, corriger, avancer." },
    ],
    notRomance: "Ce que ce N'EST PAS",
    notRomanceBody:
      "Pas le « warrior mindset » des réseaux sociaux. Pas la posture, le tatouage, le velcro. L'état d'esprit professionnel est invisible de l'extérieur — il n'apparaît que dans les choix. Ceux qui le confondent avec l'esthétique échouent au premier contact, ou pire, au premier faux pas d'un camarade.",
    daily: "Entraînement quotidien",
    dailyItems: [
      "Sommeil : priorité opérationnelle. 20 minutes quand possible, sans ego.",
      "Alimentation : régulière, simple, hydratée. Le café ne remplace pas l'eau.",
      "Entretien personnel : armes, optiques, radios, batteries, équipement — chaque jour, à chaque fois.",
      "Lecture technique : manuels, AAR, retours d'expérience. 30 min/jour hors opération minimum.",
      "Langue : anglais opérationnel maîtrisé en 90 jours. Sans exception.",
      "Forme fonctionnelle : marche en sac, montées, récupération en posture inconfortable. Salle esthétique secondaire.",
    ],
    bad: "Signes du mauvais état d'esprit",
    badItems: [
      "Parler combat sans l'avoir vu",
      "Chasser l'« action » ou l'adrénaline plutôt qu'une exécution propre",
      "Mépris pour ceux qui enseignent les bases",
      "Filmer en opération pour usage personnel",
      "Publier positions, véhicules, visages, géolocalisations",
      "Ego refusant un « NON » d'un camarade plus expérimenté",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Le volontaire international efficace sur la durée n'est pas le plus fort, pas le plus rapide, pas le mieux équipé. C'est celui que l'équipe inclut sans hésitation dans la rotation suivante. On y arrive en construisant la fiabilité, une décision à la fois, pendant des mois, généralement en silence. Ceux qui cherchent les raccourcis — hero shots, transferts incessants — sont ceux que les équipes laissent derrière quand vient le moment de prendre un risque.",
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.what}</h2>
        <p>{s.whatBody}</p>

        <h2>Pillars</h2>
        {s.pillars.map((p) => (
          <div key={p.title} className="callout">
            <div className="callout-title">{p.title}</div>
            <p>{p.body}</p>
          </div>
        ))}

        <h2>{s.notRomance}</h2>
        <blockquote>{s.notRomanceBody}</blockquote>

        <h2>{s.daily}</h2>
        <ul>
          {s.dailyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.bad}</h2>
        <ul>
          {s.badItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>
      </>
    ),
  };
}
