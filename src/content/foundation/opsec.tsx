import type { Locale } from "@/i18n/routing";
import {
  fromLocales,
  type StandardChapter,
} from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "OPSEC (Operations Security) è il processo che impedisce al nemico di ricavare informazioni utili dalle azioni e dalle comunicazioni amiche. Non è segretezza generica: è una disciplina specifica che identifica le 'indicazioni critiche', valuta come possano essere intercettate, e applica contromisure proporzionate. Sul fronte ucraino il fallimento OPSEC è la causa documentata di un numero consistente di perdite evitabili.",
    sections: [
      {
        heading: "Le cinque tappe del processo OPSEC",
        blocks: [
          {
            type: "ol",
            items: [
              "Identificare le informazioni critiche (posizione, intenzioni, capacità, vulnerabilità)",
              "Analizzare le minacce (chi vuole l'informazione, con quali mezzi può ottenerla)",
              "Analizzare le vulnerabilità (dove le informazioni emergono — social, radio, abitudini)",
              "Valutare il rischio (probabilità × impatto)",
              "Applicare contromisure (cifratura, deception, controllo abitudini, formazione)",
            ],
          },
        ],
      },
      {
        heading: "Indicatori critici per volontari internazionali",
        blocks: [
          {
            type: "ul",
            items: [
              "Posizione GPS del telefono — disabilitare e considerare il telefono come tracciante anche off",
              "Foto pubblicate con EXIF intatto — strappare prima di qualsiasi pubblicazione",
              "Volti in foto pubblicate — coprire o non pubblicare",
              "Nomi propri, gradi, unità in chiaro — mai su canali aperti",
              "Pattern of life (orari di chiamata casa, orari di rifornimento) — variare",
              "Identificazione della unità ospitante in conversazioni civili",
              "Equipaggiamento riconoscibile in foto (patch unità, veicoli con numero, ottiche)",
            ],
          },
        ],
      },
      {
        heading: "Social media",
        blocks: [
          {
            type: "warn",
            title: "REGOLA DI FONDO",
            body: "Niente social durante il dispiegamento, in nessuna forma. Niente storie 'private' su account chiusi (vengono leakate). Niente foto della 'mia base'. Niente check-in 'sono in Polonia adesso'. Niente messaggi alla famiglia con dettagli operativi. La regola accetta zero eccezioni perché ogni eccezione è quella che il nemico trova.",
          },
        ],
      },
      {
        heading: "Comunicazioni con casa",
        blocks: [
          {
            type: "ul",
            items: [
              "Usare app cifrate (Signal) — niente WhatsApp/Telegram per contenuti sensibili",
              "Mai dichiarare posizione, unità, missioni future",
              "Mai inviare foto con sfondo riconoscibile",
              "Mai mandare orari di rientro o uscita pattuglia",
              "Considerare ogni messaggio come potenzialmente letto da terzi",
              "Limitare le comunicazioni in finestre fisse, non a richiesta",
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
              "Pubblicare 'tornato sano' subito dopo una missione (segnala che la missione è finita)",
              "Mostrare patch dell'unità in foto private a familiari",
              "Geolocalizzare involontariamente via meteo postato ('qui sta piovendo')",
              "Tenere il telefono acceso in zona operativa",
              "Fidarsi della cifratura come unico strato di protezione (metadata e DF restano)",
              "Sottostimare i dossier OSINT che il nemico costruisce sui volontari noti",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "I servizi russi mantengono dossier OSINT sui volontari internazionali riconosciuti: nome reale, paese di origine, famiglia in patria, profili social storici, foto pre-deployment. La famiglia rimasta a casa è il vero target accessibile. La protezione di OPSEC non è del volontario in zona — è dei parenti che non sanno di essere bersagli. Comunicarlo loro è parte della disciplina.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "OPSEC (Operations Security) is the process that prevents the enemy from deriving useful information from friendly actions and communications. It is not generic secrecy: it is a specific discipline that identifies 'critical indicators', assesses how they can be intercepted, and applies proportionate countermeasures. On the Ukrainian front, OPSEC failure is the documented cause of a substantial number of avoidable losses.",
    sections: [
      {
        heading: "Five steps of the OPSEC process",
        blocks: [
          {
            type: "ol",
            items: [
              "Identify critical information (location, intent, capabilities, vulnerabilities)",
              "Analyse threats (who wants the information and with what means)",
              "Analyse vulnerabilities (where the information leaks — social, radio, habits)",
              "Assess risk (probability × impact)",
              "Apply countermeasures (encryption, deception, habit control, training)",
            ],
          },
        ],
      },
      {
        heading: "Critical indicators for international volunteers",
        blocks: [
          {
            type: "ul",
            items: [
              "Phone GPS — disable it and treat the phone as a tracker even when off",
              "Photos published with intact EXIF — strip before any publication",
              "Faces in published photos — cover or do not publish",
              "Proper names, ranks, units in clear — never on open channels",
              "Pattern of life (call-home hours, resupply hours) — vary them",
              "Identification of the host unit in civilian conversations",
              "Recognisable kit in photos (unit patches, vehicles with numbers, optics)",
            ],
          },
        ],
      },
      {
        heading: "Social media",
        blocks: [
          {
            type: "warn",
            title: "FOUNDATIONAL RULE",
            body: "No social during deployment, in any form. No 'private' stories on closed accounts (they leak). No 'my base' photos. No 'I'm in Poland now' check-ins. No family messages with operational detail. The rule accepts zero exceptions because every exception is the one the enemy finds.",
          },
        ],
      },
      {
        heading: "Communicating with home",
        blocks: [
          {
            type: "ul",
            items: [
              "Use encrypted apps (Signal) — no WhatsApp/Telegram for sensitive content",
              "Never declare position, unit, future missions",
              "Never send photos with a recognisable background",
              "Never share patrol in/out timings",
              "Treat every message as potentially read by third parties",
              "Limit communications to fixed windows, not on demand",
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
              "Publishing 'home safe' right after a mission (signals the mission ended)",
              "Showing unit patches in private photos to family",
              "Involuntarily geolocating via posted weather ('raining here')",
              "Keeping the phone on in the operational area",
              "Trusting encryption as the only protection layer (metadata and DF remain)",
              "Underestimating the OSINT dossiers the enemy builds on known volunteers",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Russian services maintain OSINT dossiers on identified international volunteers: real name, country of origin, family at home, historical social profiles, pre-deployment photos. The family at home is the actually accessible target. OPSEC protection is not for the volunteer in theatre — it is for the relatives who do not know they are targets. Telling them so is part of the discipline.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "OPSEC (Operations Security) é o processo que impede o inimigo de extrair informação útil das ações e comunicações amigas. Não é sigilo genérico: é disciplina específica que identifica 'indicadores críticos', avalia como podem ser interceptados e aplica contramedidas proporcionais. No front ucraniano a falha de OPSEC é causa documentada de um número significativo de baixas evitáveis.",
    sections: [
      {
        heading: "Cinco etapas do processo OPSEC",
        blocks: [
          {
            type: "ol",
            items: [
              "Identificar informação crítica (posição, intenção, capacidades, vulnerabilidades)",
              "Analisar ameaças (quem quer a informação e com que meios)",
              "Analisar vulnerabilidades (onde a informação vaza — social, rádio, hábitos)",
              "Avaliar risco (probabilidade × impacto)",
              "Aplicar contramedidas (cifragem, deception, controle de hábitos, formação)",
            ],
          },
        ],
      },
      {
        heading: "Indicadores críticos para voluntários internacionais",
        blocks: [
          {
            type: "ul",
            items: [
              "GPS do celular — desabilitar e tratar o aparelho como rastreador mesmo desligado",
              "Fotos publicadas com EXIF intacto — remover antes de qualquer publicação",
              "Rostos em fotos publicadas — cobrir ou não publicar",
              "Nomes próprios, postos, unidades em claro — nunca em canais abertos",
              "Pattern of life (horário de ligar para casa, horário de reabastecimento) — variar",
              "Identificação da unidade hospedeira em conversas civis",
              "Equipamento reconhecível em fotos (patches, veículos com número, óticas)",
            ],
          },
        ],
      },
      {
        heading: "Redes sociais",
        blocks: [
          {
            type: "warn",
            title: "REGRA DE BASE",
            body: "Nada de social durante o deployment, em forma alguma. Nada de stories 'privadas' em contas fechadas (vazam). Nada de fotos 'da minha base'. Nada de check-ins 'estou na Polônia agora'. Nada de mensagens à família com detalhe operacional. A regra aceita zero exceções porque cada exceção é a que o inimigo encontra.",
          },
        ],
      },
      {
        heading: "Comunicação com casa",
        blocks: [
          {
            type: "ul",
            items: [
              "Usar apps cifradas (Signal) — sem WhatsApp/Telegram para conteúdo sensível",
              "Nunca declarar posição, unidade, missões futuras",
              "Nunca enviar fotos com fundo reconhecível",
              "Nunca mandar horários de saída/entrada de patrulha",
              "Tratar cada mensagem como potencialmente lida por terceiros",
              "Limitar comunicação a janelas fixas, não sob demanda",
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
              "Publicar 'voltei bem' logo após missão (sinaliza fim da missão)",
              "Mostrar patches da unidade em fotos privadas para família",
              "Geolocalizar involuntariamente via meteo postado ('chovendo aqui')",
              "Manter o telefone ligado na zona operativa",
              "Confiar na cifragem como única camada (metadados e DF permanecem)",
              "Subestimar os dossiês OSINT que o inimigo monta sobre voluntários conhecidos",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "Serviços russos mantêm dossiês OSINT sobre voluntários internacionais identificados: nome real, país de origem, família em casa, perfis sociais históricos, fotos pré-deployment. A família em casa é o alvo realmente acessível. A proteção OPSEC não é para o voluntário no teatro — é para os parentes que não sabem ser alvos. Comunicar isso a eles é parte da disciplina.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "L'OPSEC (Operations Security) est le processus qui empêche l'ennemi d'extraire de l'information utile des actions et communications amies. Ce n'est pas de la confidentialité générique : c'est une discipline spécifique qui identifie les « indicateurs critiques », évalue comment ils peuvent être interceptés et applique des contremesures proportionnées. Sur le front ukrainien, l'échec OPSEC est la cause documentée d'un nombre important de pertes évitables.",
    sections: [
      {
        heading: "Cinq étapes du processus OPSEC",
        blocks: [
          {
            type: "ol",
            items: [
              "Identifier l'information critique (position, intention, capacités, vulnérabilités)",
              "Analyser les menaces (qui veut l'information et avec quels moyens)",
              "Analyser les vulnérabilités (où l'information fuit — social, radio, habitudes)",
              "Évaluer le risque (probabilité × impact)",
              "Appliquer les contremesures (chiffrement, deception, contrôle des habitudes, formation)",
            ],
          },
        ],
      },
      {
        heading: "Indicateurs critiques pour les volontaires internationaux",
        blocks: [
          {
            type: "ul",
            items: [
              "GPS du téléphone — désactiver et traiter le téléphone comme un traceur même éteint",
              "Photos publiées avec EXIF intact — retirer avant toute publication",
              "Visages dans les photos publiées — masquer ou ne pas publier",
              "Noms propres, grades, unités en clair — jamais sur canaux ouverts",
              "Pattern of life (horaire d'appel à la maison, ravitaillement) — varier",
              "Identification de l'unité hôte dans des conversations civiles",
              "Équipement reconnaissable en photo (patches, véhicules numérotés, optiques)",
            ],
          },
        ],
      },
      {
        heading: "Réseaux sociaux",
        blocks: [
          {
            type: "warn",
            title: "RÈGLE DE BASE",
            body: "Pas de social pendant le déploiement, sous aucune forme. Pas de stories « privées » sur comptes fermés (elles fuient). Pas de photos « ma base ». Pas de check-ins « je suis en Pologne ». Pas de messages à la famille avec détails opérationnels. La règle n'admet aucune exception parce que chaque exception est celle que l'ennemi trouve.",
          },
        ],
      },
      {
        heading: "Communication avec la maison",
        blocks: [
          {
            type: "ul",
            items: [
              "Apps chiffrées (Signal) — pas de WhatsApp/Telegram pour contenu sensible",
              "Jamais déclarer position, unité, missions futures",
              "Jamais envoyer de photos avec fond reconnaissable",
              "Jamais partager les horaires de sortie/retour de patrouille",
              "Traiter chaque message comme potentiellement lu par des tiers",
              "Limiter les communications à des fenêtres fixes, pas à la demande",
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
              "Publier « rentré sain » juste après une mission (signale la fin de la mission)",
              "Montrer des patches d'unité dans des photos privées envoyées à la famille",
              "Géolocaliser involontairement via la météo postée (« il pleut ici »)",
              "Garder le téléphone allumé en zone opérationnelle",
              "Faire confiance au chiffrement comme seule couche (métadonnées et DF subsistent)",
              "Sous-estimer les dossiers OSINT que l'ennemi monte sur les volontaires connus",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les services russes tiennent des dossiers OSINT sur les volontaires internationaux identifiés : vrai nom, pays d'origine, famille au pays, profils sociaux historiques, photos pré-déploiement. La famille au pays est la cible réellement accessible. La protection OPSEC n'est pas pour le volontaire en théâtre — elle est pour les proches qui ne savent pas être des cibles. Le leur dire fait partie de la discipline.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
