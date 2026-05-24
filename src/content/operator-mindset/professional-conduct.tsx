import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "La condotta professionale è l'insieme di regole legali, etiche e dottrinali che distinguono un combattente legittimo da un criminale. Non è galateo: è la condizione che protegge l'operatore dalla giurisdizione penale, la propria unità dalla delegittimazione, e i civili dalle conseguenze evitabili del combattimento. Il volontario internazionale ne è soggetto come ogni soldato regolare.",
    sections: [
      {
        heading: "Diritto internazionale dei conflitti armati",
        blocks: [
          {
            type: "p",
            text: "Le Convenzioni di Ginevra (1949) e i Protocolli aggiuntivi (1977) definiscono le regole vincolanti per chiunque partecipi a ostilità. I principi cardine: distinzione (fra combattenti e non), proporzionalità (danno militare vs danno collaterale), precauzione (misure ragionevoli per limitare il danno), umanità (divieto di sofferenze superflue). Non sono opzioni: sono diritto vigente.",
          },
          {
            type: "ul",
            items: [
              "Distinzione: il fuoco si dirige a combattenti, non a civili o oggetti civili",
              "Proporzionalità: il danno atteso ai civili non deve essere eccessivo rispetto al vantaggio militare",
              "Precauzione: identificazione del bersaglio, scelta dei mezzi, avvertimento se possibile",
              "Umanità: niente armi che producono sofferenza inutile, niente trattamento crudele",
              "Status legale: combattente regolare, combattente irregolare, civile — le tre categorie hanno protezioni diverse",
            ],
          },
          {
            type: "warn",
            title: "STATUS DEL VOLONTARIO INTERNAZIONALE",
            body: "Il volontario internazionale integrato nelle Forze Armate Ucraine (con contratto, uniforme, catena di comando) ha lo status di combattente regolare e gode delle protezioni del PoW. Il volontario non integrato, in abiti civili, può essere classificato come 'mercenario' o 'unlawful combatant' senza le stesse protezioni. La differenza è giuridica e ha conseguenze in caso di cattura.",
          },
        ],
      },
      {
        heading: "Rules of Engagement (ROE)",
        blocks: [
          {
            type: "p",
            text: "Le ROE sono le regole specifiche, emesse dal comando, che definiscono quando si può aprire il fuoco. Sono più restrittive del diritto internazionale: cosa è giuridicamente lecito può essere proibito dalle ROE per ragioni politiche, operative o di propaganda. Conoscere le ROE è obbligatorio. Violarle è reato disciplinare oltre che potenzialmente penale.",
          },
          {
            type: "ol",
            items: [
              "Identificazione positiva del bersaglio (PID) — vedere e classificare prima di sparare",
              "Ostilità dichiarate (Declared Hostile) — bersaglio autorizzato di default",
              "Atto ostile (Hostile Act) — fuoco verso amici autorizza risposta",
              "Intento ostile (Hostile Intent) — manovra che indica preparazione di atto ostile",
              "Difesa proprietà — generalmente non basta per uso di forza letale",
              "Vincoli geografici, temporali, di tipo di arma — variano per missione",
            ],
          },
          {
            type: "callout",
            title: "Esempio operativo",
            body: "ROE tipica in zona LOC ucraina: PID obbligatorio, fuoco autorizzato su personale armato che si muove verso amici, fuoco non autorizzato su civili in fuga anche da posizioni nemiche, fuoco di artiglieria limitato a coordinate validate da almeno due fonti. Variazioni per area e per fase operativa.",
          },
        ],
      },
      {
        heading: "Interazione con civili",
        blocks: [
          {
            type: "p",
            text: "I civili in zona di combattimento sono soggetti vulnerabili e simultaneamente fonte di informazioni, rischio operativo, leve di propaganda. La condotta corretta è: non aprire fuoco salvo atto ostile evidente; non interrogare aggressivamente; non occupare proprietà private senza necessità; documentare interazioni significative.",
          },
          {
            type: "ul",
            items: [
              "Mai sparare a civili in fuga, anche da zona controllata dal nemico",
              "Mai usare civili come scudi umani o per scouting non protetto",
              "Mai requisire beni senza autorizzazione e senza ricevuta",
              "Mai intrattenere relazioni personali o sessuali con la popolazione locale durante operazioni",
              "Identificare bambini soldato o spotter civili — neutralizzazione non letale ove possibile",
              "Documentare in foto/video gli incidenti che coinvolgono civili (per protezione legale futura)",
            ],
          },
        ],
      },
      {
        heading: "Prigionieri di guerra",
        blocks: [
          {
            type: "p",
            text: "La cattura di un prigioniero è un evento ad alto rischio legale, operativo e reputazionale. Le regole della Convenzione di Ginevra III sono inderogabili: trattamento umano, niente interrogatori sotto tortura, niente esposizione pubblica, niente esecuzione. Le procedure di gestione si riassumono nella mnemonic 5S: Search, Silence, Segregate, Safeguard, Speed.",
          },
          {
            type: "ol",
            items: [
              "Search: perquisizione completa, sequestro armi, documenti, equipaggiamento",
              "Silence: il prigioniero non parla con altri prigionieri (impedire coordinazione)",
              "Segregate: separare per grado e per ruolo (ufficiali da truppa)",
              "Safeguard: protezione dal danno (fuoco, freddo, fame, sete, esposizione)",
              "Speed: evacuazione rapida al livello superiore (interrogazione professionale)",
            ],
          },
          {
            type: "warn",
            title: "DIVIETI ASSOLUTI",
            body: "Mai esecuzione sommaria. Mai tortura. Mai foto/video umiliante diffuso. Mai trofei (orecchie, distintivi presi al corpo). Mai interrogatorio sotto minaccia di morte. Mai consegna a unità non autorizzate. Violare uno di questi punti espone a perseguimento penale internazionale e distrugge la reputazione della propria unità.",
          },
        ],
      },
      {
        heading: "Documentazione e audit",
        blocks: [
          {
            type: "p",
            text: "La condotta professionale richiede tracciabilità. Le decisioni di apertura del fuoco, le interazioni con civili, la gestione di prigionieri devono essere documentate in modo coerente con i protocolli della unità ospitante. Una documentazione corretta protegge l'operatore in caso di accusa successiva e supporta la legittimità della unità.",
          },
          {
            type: "ul",
            items: [
              "Tenere log temporale degli eventi significativi (orari, coordinate, persone presenti)",
              "Conservare ordini scritti e radio (registrazioni o trascrizioni)",
              "Riferire incidenti subito al comando, non aspettare il debrief",
              "Non distruggere documentazione potenzialmente compromettente — sostiene proprie ragioni se onesta",
              "Cooperare con eventuali inchieste interne — l'opacità aumenta il sospetto",
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
              "Considerare il diritto internazionale una raccomandazione invece di una norma vincolante",
              "Confondere 'come fanno i russi' con criterio della propria condotta — non lo è",
              "Trattare civili come ostili per default in zone contese",
              "Pubblicare foto di prigionieri o cadaveri su canali aperti",
              "Accettare ordini palesemente illegittimi senza obiezione formale",
              "Non documentare gli incidenti per timore di conseguenze — l'assenza di documentazione è essa stessa sospetta",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I volontari internazionali in Ucraina sono particolarmente vulnerabili a perseguimento giudiziario nei propri paesi di origine al rientro. Pubblicare foto di cadaveri nemici, pubblicare interrogazioni di prigionieri, partecipare a operazioni con civili come bersagli — tutto questo è perseguibile penalmente nei paesi UE e Nord Americani indipendentemente dal teatro. La condotta professionale non è solo etica: è autoprotezione legale. Il volontario che torna a casa con video compromettenti sul telefono diventa imputato.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Professional conduct is the body of legal, ethical and doctrinal rules that distinguish a legitimate combatant from a criminal. It is not etiquette: it is the condition that protects the operator from criminal jurisdiction, the unit from delegitimisation, and civilians from avoidable consequences of combat. The international volunteer is subject to it as is any regular soldier.",
    sections: [
      {
        heading: "International law of armed conflict",
        blocks: [
          {
            type: "p",
            text: "The Geneva Conventions (1949) and Additional Protocols (1977) define the binding rules for anyone participating in hostilities. The cardinal principles: distinction (between combatants and non-combatants), proportionality (military gain vs collateral damage), precaution (reasonable measures to limit damage), humanity (prohibition of unnecessary suffering). They are not options: they are positive law.",
          },
          {
            type: "ul",
            items: [
              "Distinction: fire is directed at combatants, not at civilians or civilian objects",
              "Proportionality: expected civilian harm must not be excessive relative to military advantage",
              "Precaution: target identification, choice of means, warning where possible",
              "Humanity: no weapons producing unnecessary suffering, no cruel treatment",
              "Legal status: regular combatant, irregular combatant, civilian — the three categories carry different protections",
            ],
          },
          {
            type: "warn",
            title: "STATUS OF THE INTERNATIONAL VOLUNTEER",
            body: "An international volunteer integrated into the Armed Forces of Ukraine (contract, uniform, chain of command) holds regular combatant status and enjoys PoW protections. A non-integrated volunteer, in civilian clothes, may be classified as 'mercenary' or 'unlawful combatant' without the same protections. The difference is legal and has consequences on capture.",
          },
        ],
      },
      {
        heading: "Rules of Engagement (ROE)",
        blocks: [
          {
            type: "p",
            text: "ROE are the specific rules, issued by command, that define when fire may be opened. They are more restrictive than international law: what is legally permissible may be forbidden by ROE for political, operational or propaganda reasons. Knowing the ROE is mandatory. Violating them is a disciplinary offence and potentially criminal.",
          },
          {
            type: "ol",
            items: [
              "Positive identification (PID) — see and classify before firing",
              "Declared Hostile — target authorised by default",
              "Hostile Act — fire on friendlies authorises response",
              "Hostile Intent — manoeuvre indicating preparation of hostile act",
              "Property defence — generally not enough for lethal force",
              "Geographic, temporal, weapon-type constraints — vary by mission",
            ],
          },
          {
            type: "callout",
            title: "Operational example",
            body: "Typical ROE in a Ukrainian LOC area: PID mandatory, fire authorised on armed personnel moving toward friendlies, fire not authorised on civilians fleeing even from enemy positions, artillery fire limited to coordinates validated by at least two sources. Variations by area and operational phase.",
          },
        ],
      },
      {
        heading: "Civilian interaction",
        blocks: [
          {
            type: "p",
            text: "Civilians in a combat area are vulnerable subjects and simultaneously sources of information, operational risk, propaganda leverage. Correct conduct is: do not open fire absent a clear hostile act; do not interrogate aggressively; do not occupy private property without need; document significant interactions.",
          },
          {
            type: "ul",
            items: [
              "Never fire on fleeing civilians, even from enemy-controlled areas",
              "Never use civilians as human shields or for unprotected scouting",
              "Never requisition goods without authorisation and without receipt",
              "Never enter personal or sexual relationships with local population during operations",
              "Identify child soldiers or civilian spotters — non-lethal neutralisation where possible",
              "Document in photo/video incidents involving civilians (for future legal protection)",
            ],
          },
        ],
      },
      {
        heading: "Prisoners of war",
        blocks: [
          {
            type: "p",
            text: "Capturing a prisoner is a high-risk event legally, operationally and reputationally. Geneva Convention III rules are non-derogable: humane treatment, no torture interrogations, no public exposure, no execution. Handling procedures summarise in the 5S mnemonic: Search, Silence, Segregate, Safeguard, Speed.",
          },
          {
            type: "ol",
            items: [
              "Search: full pat-down, seize weapons, documents, gear",
              "Silence: the prisoner does not talk to other prisoners (prevent coordination)",
              "Segregate: separate by rank and role (officers from troops)",
              "Safeguard: protect from harm (fire, cold, hunger, thirst, exposure)",
              "Speed: rapid evacuation to higher echelon (professional interrogation)",
            ],
          },
          {
            type: "warn",
            title: "ABSOLUTE PROHIBITIONS",
            body: "Never summary execution. Never torture. Never humiliating photo/video distributed. Never trophies (ears, badges from body). Never interrogation under threat of death. Never handover to unauthorised units. Violating any of these exposes to international criminal prosecution and destroys the reputation of your unit.",
          },
        ],
      },
      {
        heading: "Documentation and audit",
        blocks: [
          {
            type: "p",
            text: "Professional conduct requires traceability. Fire-opening decisions, civilian interactions, prisoner handling must be documented coherently with the host unit's protocols. Correct documentation protects the operator against later accusation and supports the unit's legitimacy.",
          },
          {
            type: "ul",
            items: [
              "Keep a temporal log of significant events (times, coordinates, people present)",
              "Preserve written and radio orders (recordings or transcripts)",
              "Report incidents to command immediately, do not wait for debrief",
              "Do not destroy potentially compromising documentation — supports your case if honest",
              "Cooperate with internal investigations — opacity increases suspicion",
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
              "Treating international law as a recommendation rather than a binding rule",
              "Confusing 'what the Russians do' with the criterion for your own conduct — it is not",
              "Treating civilians as hostile by default in contested zones",
              "Publishing photos of prisoners or corpses on open channels",
              "Accepting blatantly illegal orders without formal objection",
              "Failing to document incidents for fear of consequences — absence of documentation is itself suspect",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "International volunteers in Ukraine are particularly vulnerable to criminal prosecution in their home countries on return. Publishing enemy corpse photos, publishing prisoner interrogations, taking part in operations targeting civilians — all this is prosecutable in EU and North American states regardless of theatre. Professional conduct is not only ethical: it is legal self-protection. A volunteer returning home with compromising videos on the phone becomes a defendant.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Conduta profissional é o conjunto de regras legais, éticas e doutrinárias que distinguem um combatente legítimo de um criminoso. Não é etiqueta: é a condição que protege o operador da jurisdição penal, a unidade da deslegitimação, e os civis das consequências evitáveis do combate. O voluntário internacional está sujeito a ela como qualquer soldado regular.",
    sections: [
      {
        heading: "Direito internacional dos conflitos armados",
        blocks: [
          {
            type: "p",
            text: "As Convenções de Genebra (1949) e Protocolos Adicionais (1977) definem as regras vinculantes para quem participa de hostilidades. Princípios cardinais: distinção (entre combatentes e não combatentes), proporcionalidade (ganho militar vs dano colateral), precaução (medidas razoáveis para limitar dano), humanidade (proibição de sofrimento desnecessário). Não são opções: são direito positivo.",
          },
          {
            type: "ul",
            items: [
              "Distinção: o fogo se dirige a combatentes, não a civis ou objetos civis",
              "Proporcionalidade: o dano esperado a civis não pode ser excessivo em relação à vantagem militar",
              "Precaução: identificação do alvo, escolha dos meios, aviso quando possível",
              "Humanidade: nada de armas que causam sofrimento desnecessário, nada de tratamento cruel",
              "Status legal: combatente regular, combatente irregular, civil — as três categorias têm proteções distintas",
            ],
          },
          {
            type: "warn",
            title: "STATUS DO VOLUNTÁRIO INTERNACIONAL",
            body: "O voluntário internacional integrado às Forças Armadas Ucranianas (contrato, uniforme, cadeia de comando) tem status de combatente regular e goza das proteções de PoW. O voluntário não integrado, em trajes civis, pode ser classificado como 'mercenário' ou 'combatente ilícito' sem as mesmas proteções. A diferença é jurídica e tem consequências em caso de captura.",
          },
        ],
      },
      {
        heading: "Rules of Engagement (ROE)",
        blocks: [
          {
            type: "p",
            text: "ROE são regras específicas, emitidas pelo comando, que definem quando se pode abrir fogo. São mais restritivas que o direito internacional: o que é juridicamente lícito pode ser proibido pela ROE por razões políticas, operacionais ou de propaganda. Conhecer a ROE é obrigatório. Violá-la é infração disciplinar além de potencialmente penal.",
          },
          {
            type: "ol",
            items: [
              "Identificação positiva (PID) — ver e classificar antes de atirar",
              "Declared Hostile — alvo autorizado por padrão",
              "Hostile Act — fogo sobre amigos autoriza resposta",
              "Hostile Intent — manobra que indica preparação de ato hostil",
              "Defesa de propriedade — geralmente não basta para força letal",
              "Restrições geográficas, temporais, de tipo de arma — variam por missão",
            ],
          },
          {
            type: "callout",
            title: "Exemplo operacional",
            body: "ROE típica em zona LOC ucraniana: PID obrigatório, fogo autorizado sobre pessoal armado movendo-se em direção a amigos, fogo não autorizado sobre civis em fuga mesmo de posições inimigas, fogo de artilharia limitado a coordenadas validadas por pelo menos duas fontes. Variações por área e fase operacional.",
          },
        ],
      },
      {
        heading: "Interação com civis",
        blocks: [
          {
            type: "p",
            text: "Civis em zona de combate são sujeitos vulneráveis e simultaneamente fonte de informação, risco operacional, alavanca de propaganda. Conduta correta: não abrir fogo sem ato hostil evidente; não interrogar com agressividade; não ocupar propriedade privada sem necessidade; documentar interações significativas.",
          },
          {
            type: "ul",
            items: [
              "Nunca atirar em civis em fuga, mesmo de zona controlada pelo inimigo",
              "Nunca usar civis como escudo humano ou para reconhecimento desprotegido",
              "Nunca requisitar bens sem autorização e sem recibo",
              "Nunca relações pessoais ou sexuais com a população local durante operações",
              "Identificar crianças-soldado ou spotters civis — neutralização não letal quando possível",
              "Documentar em foto/vídeo incidentes envolvendo civis (proteção legal futura)",
            ],
          },
        ],
      },
      {
        heading: "Prisioneiros de guerra",
        blocks: [
          {
            type: "p",
            text: "Capturar um prisioneiro é evento de alto risco legal, operacional e reputacional. As regras da Convenção de Genebra III são inderrogáveis: tratamento humano, sem interrogatórios sob tortura, sem exposição pública, sem execução. As procedimentos resumem-se no mnemônico 5S: Search, Silence, Segregate, Safeguard, Speed.",
          },
          {
            type: "ol",
            items: [
              "Search: revista completa, apreensão de armas, documentos, equipamento",
              "Silence: o prisioneiro não conversa com outros prisioneiros (evita coordenação)",
              "Segregate: separar por posto e função (oficiais de tropa)",
              "Safeguard: proteger de dano (fogo, frio, fome, sede, exposição)",
              "Speed: evacuação rápida ao escalão superior (interrogatório profissional)",
            ],
          },
          {
            type: "warn",
            title: "PROIBIÇÕES ABSOLUTAS",
            body: "Nunca execução sumária. Nunca tortura. Nunca foto/vídeo humilhante divulgado. Nunca troféus (orelhas, distintivos retirados do corpo). Nunca interrogatório sob ameaça de morte. Nunca entrega a unidades não autorizadas. Violar qualquer ponto expõe a processo penal internacional e destrói a reputação da unidade.",
          },
        ],
      },
      {
        heading: "Documentação e auditoria",
        blocks: [
          {
            type: "p",
            text: "A conduta profissional exige rastreabilidade. As decisões de abertura de fogo, interações com civis, gestão de prisioneiros devem ser documentadas coerentemente com os protocolos da unidade hospedeira. Documentação correta protege o operador de acusações posteriores e sustenta a legitimidade da unidade.",
          },
          {
            type: "ul",
            items: [
              "Manter log temporal de eventos significativos (horários, coordenadas, pessoas presentes)",
              "Conservar ordens escritas e rádio (gravações ou transcrições)",
              "Reportar incidentes ao comando imediatamente, não esperar o debrief",
              "Não destruir documentação potencialmente comprometedora — sustenta sua razão se honesta",
              "Cooperar com investigações internas — opacidade aumenta suspeita",
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
              "Tratar o direito internacional como recomendação em vez de norma vinculante",
              "Confundir 'como os russos fazem' com critério da própria conduta — não é",
              "Tratar civis como hostis por padrão em zonas contestadas",
              "Publicar fotos de prisioneiros ou cadáveres em canais abertos",
              "Aceitar ordens manifestamente ilegais sem objeção formal",
              "Não documentar incidentes por medo de consequências — a ausência de documentação é em si suspeita",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Voluntários internacionais na Ucrânia são particularmente vulneráveis a processo penal nos países de origem após o retorno. Publicar fotos de cadáveres inimigos, interrogatórios de prisioneiros, participar de operações com civis como alvo — tudo isso é processável penalmente em estados da UE e da América do Norte independentemente do teatro. Conduta profissional não é só ética: é autoproteção legal. O voluntário que volta para casa com vídeos comprometedores no celular vira réu.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "La conduite professionnelle est l'ensemble des règles légales, éthiques et doctrinales qui distinguent un combattant légitime d'un criminel. Ce n'est pas du protocole : c'est la condition qui protège l'opérateur de la juridiction pénale, l'unité de la délégitimation et les civils des conséquences évitables du combat. Le volontaire international y est soumis comme tout soldat régulier.",
    sections: [
      {
        heading: "Droit international des conflits armés",
        blocks: [
          {
            type: "p",
            text: "Les Conventions de Genève (1949) et les Protocoles additionnels (1977) définissent les règles contraignantes pour quiconque participe à des hostilités. Principes cardinaux : distinction (entre combattants et non-combattants), proportionnalité (avantage militaire vs dommage collatéral), précaution (mesures raisonnables pour limiter le dommage), humanité (interdiction des souffrances inutiles). Ce ne sont pas des options : c'est du droit positif.",
          },
          {
            type: "ul",
            items: [
              "Distinction : le feu vise les combattants, pas les civils ni les biens civils",
              "Proportionnalité : le dommage attendu aux civils ne doit pas être excessif par rapport à l'avantage militaire",
              "Précaution : identification de l'objectif, choix des moyens, avertissement si possible",
              "Humanité : pas d'armes provoquant des souffrances inutiles, pas de traitement cruel",
              "Statut légal : combattant régulier, combattant irrégulier, civil — les trois catégories ont des protections différentes",
            ],
          },
          {
            type: "warn",
            title: "STATUT DU VOLONTAIRE INTERNATIONAL",
            body: "Le volontaire international intégré aux Forces armées ukrainiennes (contrat, uniforme, chaîne de commandement) a le statut de combattant régulier et bénéficie des protections PoW. Le volontaire non intégré, en tenue civile, peut être qualifié de « mercenaire » ou « combattant illégal » sans les mêmes protections. La différence est juridique et a des conséquences en cas de capture.",
          },
        ],
      },
      {
        heading: "Rules of Engagement (RoE)",
        blocks: [
          {
            type: "p",
            text: "Les RoE sont les règles spécifiques, émises par le commandement, qui définissent quand l'on peut ouvrir le feu. Elles sont plus restrictives que le droit international : ce qui est juridiquement licite peut être interdit par les RoE pour des raisons politiques, opérationnelles ou de propagande. Connaître les RoE est obligatoire. Les violer est une infraction disciplinaire et potentiellement pénale.",
          },
          {
            type: "ol",
            items: [
              "Identification positive (PID) — voir et classer avant de tirer",
              "Declared Hostile — objectif autorisé par défaut",
              "Hostile Act — feu sur les amis autorise la riposte",
              "Hostile Intent — manœuvre indiquant la préparation d'un acte hostile",
              "Défense de biens — généralement insuffisante pour la force létale",
              "Contraintes géographiques, temporelles, de type d'arme — varient par mission",
            ],
          },
          {
            type: "callout",
            title: "Exemple opérationnel",
            body: "RoE typique en zone LOC ukrainienne : PID obligatoire, feu autorisé sur personnel armé se déplaçant vers les amis, feu non autorisé sur les civils en fuite même depuis des positions ennemies, tirs d'artillerie limités à des coordonnées validées par au moins deux sources. Variations selon la zone et la phase opérationnelle.",
          },
        ],
      },
      {
        heading: "Interaction avec les civils",
        blocks: [
          {
            type: "p",
            text: "Les civils en zone de combat sont des sujets vulnérables et simultanément source d'information, risque opérationnel, levier de propagande. Conduite correcte : ne pas ouvrir le feu hors acte hostile évident ; ne pas interroger agressivement ; ne pas occuper de propriété privée sans nécessité ; documenter les interactions significatives.",
          },
          {
            type: "ul",
            items: [
              "Jamais tirer sur des civils en fuite, même depuis une zone tenue par l'ennemi",
              "Jamais utiliser de civils comme boucliers humains ou pour de la reconnaissance non protégée",
              "Jamais réquisitionner de biens sans autorisation et sans reçu",
              "Jamais entretenir de relations personnelles ou sexuelles avec la population locale pendant les opérations",
              "Identifier les enfants soldats ou les spotters civils — neutralisation non létale si possible",
              "Documenter en photo/vidéo les incidents impliquant des civils (protection légale future)",
            ],
          },
        ],
      },
      {
        heading: "Prisonniers de guerre",
        blocks: [
          {
            type: "p",
            text: "La capture d'un prisonnier est un événement à haut risque légal, opérationnel et réputationnel. Les règles de la Convention de Genève III sont indérogeables : traitement humain, pas d'interrogatoire sous torture, pas d'exposition publique, pas d'exécution. Les procédures se résument dans le mnémonique 5S : Search, Silence, Segregate, Safeguard, Speed.",
          },
          {
            type: "ol",
            items: [
              "Search : fouille complète, saisie des armes, documents, équipement",
              "Silence : le prisonnier ne parle pas aux autres prisonniers (empêcher la coordination)",
              "Segregate : séparer par grade et par rôle (officiers de la troupe)",
              "Safeguard : protéger du dommage (feu, froid, faim, soif, exposition)",
              "Speed : évacuation rapide à l'échelon supérieur (interrogatoire professionnel)",
            ],
          },
          {
            type: "warn",
            title: "INTERDICTIONS ABSOLUES",
            body: "Jamais d'exécution sommaire. Jamais de torture. Jamais de photo/vidéo humiliante diffusée. Jamais de trophées (oreilles, insignes pris au corps). Jamais d'interrogatoire sous menace de mort. Jamais de remise à des unités non autorisées. Violer l'un de ces points expose à poursuite pénale internationale et détruit la réputation de l'unité.",
          },
        ],
      },
      {
        heading: "Documentation et audit",
        blocks: [
          {
            type: "p",
            text: "La conduite professionnelle exige la traçabilité. Les décisions d'ouverture du feu, les interactions avec les civils, la gestion des prisonniers doivent être documentées en cohérence avec les protocoles de l'unité hôte. Une documentation correcte protège l'opérateur en cas d'accusation ultérieure et soutient la légitimité de l'unité.",
          },
          {
            type: "ul",
            items: [
              "Tenir un log temporel des événements significatifs (horaires, coordonnées, personnes présentes)",
              "Conserver les ordres écrits et radio (enregistrements ou transcriptions)",
              "Signaler immédiatement les incidents au commandement, ne pas attendre le debrief",
              "Ne pas détruire de documentation potentiellement compromettante — elle soutient votre cause si elle est honnête",
              "Coopérer avec d'éventuelles enquêtes internes — l'opacité accroît la suspicion",
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
              "Traiter le droit international comme une recommandation plutôt qu'une norme contraignante",
              "Confondre « ce que font les Russes » et critère de sa propre conduite — il ne l'est pas",
              "Traiter les civils comme hostiles par défaut en zone disputée",
              "Publier des photos de prisonniers ou de cadavres sur canaux ouverts",
              "Accepter des ordres manifestement illégaux sans objection formelle",
              "Ne pas documenter les incidents par crainte des conséquences — l'absence de documentation est elle-même suspecte",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les volontaires internationaux en Ukraine sont particulièrement vulnérables à des poursuites pénales dans leur pays d'origine à leur retour. Publier des photos de cadavres ennemis, des interrogatoires de prisonniers, participer à des opérations visant des civils — tout cela est poursuivable pénalement dans les États de l'UE et d'Amérique du Nord, indépendamment du théâtre. La conduite professionnelle n'est pas que de l'éthique : c'est de l'autoprotection juridique. Le volontaire qui rentre avec des vidéos compromettantes sur son téléphone devient prévenu.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
