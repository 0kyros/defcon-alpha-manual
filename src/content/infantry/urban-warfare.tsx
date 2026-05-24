import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Il combattimento in area urbana — MOUT (Military Operations on Urbanised Terrain) o FIBUA (Fighting in Built-Up Areas) — è considerato dottrina NATO il tipo di operazione più costoso in personale, munizionamento e tempo. Le città canalizzano, frammentano e annullano molti dei vantaggi tecnologici della forza moderna. Questo capitolo descrive concetti, minacce e considerazioni — non procedure passo-passo di sgombero di edifici, fuori scope di un manuale di consultazione.",
    sections: [
      {
        heading: "Caratteristiche del terreno urbano",
        blocks: [
          {
            type: "p",
            text: "L'ambiente urbano è tridimensionale: superficie, sopra-superficie (piani superiori, tetti), sotto-superficie (cantine, fognature, tunnel). Ogni dimensione richiede attenzione specifica. La densità delle strutture rompe la linea di vista, neutralizza fires di area, riduce ranging di ottiche e crea ombre EM che ostacolano comunicazioni e GPS.",
          },
          {
            type: "ul",
            items: [
              "Strade come canali: imbuti naturali per fuoco, mine, e granate dall'alto",
              "Finestre e aperture come archi di tiro: ogni apertura è una potenziale posizione di sniper",
              "Tetti e piani alti: vantaggio di osservazione, esposizione totale al cielo",
              "Cantine e sottosuolo: copertura da artiglieria, vulnerabilità a incendio e gas",
              "Spazi interni: distanze brevi, identificazione difficile, fuoco amico frequente",
              "Materiali: cemento ferma proiettili, mattoni cedono dopo ripetute, intonaco e cartongesso non fermano nulla",
            ],
          },
        ],
      },
      {
        heading: "Pericoli specifici",
        blocks: [
          {
            type: "p",
            text: "L'ambiente urbano contiene pericoli che differiscono da quelli del campo aperto. Sono spesso non immediatamente visibili e richiedono cultura urbana per essere riconosciuti.",
          },
          {
            type: "table",
            headers: ["Pericolo", "Indicatori", "Mitigazione"],
            rows: [
              ["IED / booby trap", "Cavi, oggetti spostati, ostacoli forzati", "Mai forzare un punto naturalmente forzabile"],
              ["Sniper", "Finestre aperte/chiuse anomale, riflessi", "Movimento dietro copertura, mai stagliarsi"],
              ["Mortai / artiglieria", "Settori coperti dall'alto, target predittivi", "Coperture rinforzate, dispersione, sotto-suolo"],
              ["Droni FPV", "Suono di motorino, ombre rapide", "Coperture chiuse, vie di fuga interne"],
              ["Incendio strutturale", "Materiale infiammabile accumulato", "Vie di fuga laterali, mai un solo accesso"],
              ["Collasso strutturale", "Edifici già danneggiati, scoppi precedenti", "Valutare stabilità prima di occupare"],
              ["Munizioni inesplose (UXO)", "Detriti, cantieri, fronti precedenti", "Non spostare oggetti sospetti, EOD"],
            ],
          },
        ],
      },
      {
        heading: "Minaccia verticale",
        blocks: [
          {
            type: "p",
            text: "L'urbano è il terreno con la maggior minaccia verticale: il nemico opera sopra e sotto contemporaneamente. La coscienza della verticale è il singolo cambiamento mentale più importante per chi proviene da addestramento principalmente in spazi aperti.",
          },
          {
            type: "ul",
            items: [
              "Finestre e balconi sopra il proprio piano coprono interi tratti di strada",
              "Tetti opposti sono posizioni di sniper o spotter perfette",
              "Droni in quota osservano i cortili interni che da terra sembrano coperti",
              "Cantine e tombini possono nascondere accessi sotterranei non mappati",
              "Soffitti deboli: il piano sopra può vedere o cadere su quello sotto",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni sui civili",
        blocks: [
          {
            type: "p",
            text: "Anche le città evacuate ucraine, come Bakhmut e Avdiivka durante le fasi finali, contenevano civili: anziani, malati, persone in scantinati. La regola d'ingaggio NATO e ucraina pretendono identificazione positiva del combattente prima dell'ingaggio. Per il volontario internazionale questo è anche un obbligo legale, oltre che etico.",
          },
          {
            type: "ul",
            items: [
              "Presunzione: ogni edificio è potenzialmente abitato fino a verifica",
              "Identificazione positiva (PID): combattenti armati che mostrano intenzione ostile",
              "Categorie sensibili: bambini, anziani, donne, sacerdoti, medici, giornalisti",
              "Edifici sensibili: ospedali, scuole, chiese, ambulatori, rifugi",
              "Documenti: annotare le posizioni dei civili incontrati per follow-up umanitario",
              "Diritti del prigioniero (Geneva III): trattamento conforme una volta arreso, anche sotto stress",
            ],
          },
          {
            type: "warn",
            title: "OBBLIGHI LEGALI",
            body: "Le violazioni del diritto umanitario internazionale (LOAC, GC III/IV) commesse da volontari stranieri non sono coperte dalla immunità delle forze armate del Paese ospitante. La responsabilità penale individuale persiste e può essere perseguita nel Paese di origine o presso tribunali internazionali. La conoscenza delle ROE e dei principi di proporzionalità, distinzione e umanità è una obbligazione operativa, non una questione filosofica.",
          },
        ],
      },
      {
        heading: "Comunicazioni urbane",
        blocks: [
          {
            type: "p",
            text: "Le città degradano le comunicazioni radio: pareti di cemento, ombre EM, multipath, e EW concentrata in zona ad alto valore. Le squadre operative in città devono pianificare comunicazioni alternative.",
          },
          {
            type: "ul",
            items: [
              "Ponti radio (relay) interni: una stazione fissa che ritrasmette dentro l'edificio",
              "Cavi: laddove possibile, comunicazione cablata interna alle posizioni",
              "Runner: il vecchio metodo, ancora valido in microscala urbana",
              "Segnali pre-concordati: pirotecnici, fumogeni, suono (fischi codificati)",
              "GPS limitato: dentro gli edifici e nei canyon urbani la posizione GPS è instabile",
            ],
          },
        ],
      },
      {
        heading: "Considerazioni FPV urbane",
        blocks: [
          {
            type: "p",
            text: "Gli FPV operano in città in modo specifico: possono entrare da finestre, scendere tromba scale, oltrepassare angoli. La minaccia non termina entrando in un edificio. Sul fronte ucraino sono documentate operazioni FPV all'interno di trincee e di stanze di abitazioni.",
          },
          {
            type: "ul",
            items: [
              "Finestre e aperture sono ingressi: chiudere, mascherare, sbarrare",
              "Stanze con accessi multipli non sono coperte 'al chiuso'",
              "Il rumore di motorino indica FPV in volo: spostarsi immediatamente in copertura interna",
              "Reti anti-drone su cortili, balconi, tetti — anche reti civili improvvisate funzionano",
              "EW localizzato: sistemi di jamming portatili possono crear bolle protettive di alcune decine di metri",
            ],
          },
        ],
      },
      {
        heading: "Limiti del manuale",
        blocks: [
          {
            type: "warn",
            title: "FUORI SCOPE",
            body: "Le procedure di sgombero stanza, di entrata in edificio, di sequenze di breach e di passaggio in corridoio sono fuori scope di questo manuale. Sono procedure di alta complessità che richiedono addestramento intensivo, supervisione, repliche dal vivo. Apprendere CQB urbano da un manuale di consultazione è pericoloso. Si imparano in scuola, in unità con istruttori e con tempo di pratica adeguato. Questo capitolo presenta solo coscienza dei pericoli, doctrina alta e considerazioni di pianificazione.",
          },
        ],
      },
      {
        heading: "Errori comuni",
        blocks: [
          {
            type: "ul",
            items: [
              "Sottovalutare la minaccia verticale (sopra e sotto)",
              "Muoversi in centro strada anziché lungo i bordi",
              "Stagliarsi contro finestre o varchi luminosi visti dall'esterno",
              "Concentrarsi in grandi gruppi in stanze piccole",
              "Forzare punti di passaggio apparentemente liberi (porte chiuse, scale)",
              "Affidarsi al GPS dentro edifici",
              "Aprire il fuoco su qualsiasi movimento senza PID",
              "Ignorare i civili o non documentarne la posizione",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ucraina",
        blocks: [
          {
            type: "quote",
            text: "Le città del Donbas — Bakhmut, Avdiivka, Marjinka, Vuhledar, Toretsk — hanno dimostrato che il combattimento urbano moderno non è più solo combattimento ravvicinato: è combattimento ravvicinato sotto sorveglianza drone permanente, con artiglieria che colpisce edifici interi in pochi minuti, e con FPV che entrano in stanze. La sopravvivenza dipende dalla disciplina di firma, dalla profondità delle posizioni (cantine, tunnel), e dalla pianificazione meticolosa del movimento tra edifici. Il volontario internazionale che opera in città lo fa come parte di un'unità ucraina che conosce il terreno: la sua deferenza al comando locale è non solo gerarchica, è di sopravvivenza.",
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Combat in built-up areas — MOUT (Military Operations on Urbanised Terrain) or FIBUA (Fighting in Built-Up Areas) — is considered by NATO doctrine the most expensive type of operation in personnel, munitions and time. Cities canalise, fragment, and negate many of the technological advantages of modern force. This chapter describes concepts, threats and considerations — not step-by-step building-clearing procedures, which are outside the scope of a reference manual.",
    sections: [
      {
        heading: "Urban terrain characteristics",
        blocks: [
          {
            type: "p",
            text: "The urban environment is three-dimensional: surface, super-surface (upper floors, roofs), sub-surface (basements, sewers, tunnels). Each dimension requires specific attention. Building density breaks line of sight, neutralises area fires, reduces optic ranging, and creates EM shadows that hinder comms and GPS.",
          },
          {
            type: "ul",
            items: [
              "Streets as channels: natural funnels for fire, mines and grenades from above",
              "Windows and openings as arcs of fire: every opening is a potential sniper position",
              "Roofs and upper floors: observation advantage, total exposure to the sky",
              "Basements and sub-surface: cover from artillery, vulnerability to fire and gas",
              "Interior spaces: short distances, hard ID, frequent friendly fire",
              "Materials: concrete stops rounds, brick yields after repetition, plaster and drywall stop nothing",
            ],
          },
        ],
      },
      {
        heading: "Specific hazards",
        blocks: [
          {
            type: "p",
            text: "The urban environment contains hazards that differ from open-country ones. They are often not immediately visible and require urban awareness to be recognised.",
          },
          {
            type: "table",
            headers: ["Hazard", "Indicators", "Mitigation"],
            rows: [
              ["IED / booby trap", "Wires, moved items, forced obstacles", "Never force a naturally forceable point"],
              ["Sniper", "Anomalously open/closed windows, reflections", "Move behind cover, never skyline"],
              ["Mortars / artillery", "Sectors exposed from above, predictable targets", "Reinforced cover, dispersion, sub-surface"],
              ["FPV drones", "Buzzer sound, fast shadows", "Closed cover, internal egress routes"],
              ["Structural fire", "Accumulated flammable material", "Lateral egress, never a single access"],
              ["Structural collapse", "Already-damaged buildings, prior blasts", "Assess stability before occupation"],
              ["Unexploded ordnance (UXO)", "Debris, sites, former frontlines", "Do not move suspicious objects, EOD"],
            ],
          },
        ],
      },
      {
        heading: "Vertical threat",
        blocks: [
          {
            type: "p",
            text: "Urban is the terrain with the highest vertical threat: the enemy operates above and below simultaneously. Vertical awareness is the single most important mental shift for those coming from training mainly in open spaces.",
          },
          {
            type: "ul",
            items: [
              "Windows and balconies above your floor cover whole stretches of street",
              "Opposite rooftops are perfect sniper or spotter positions",
              "Drones at altitude observe inner courtyards that look covered from the ground",
              "Basements and manholes may hide unmapped underground accesses",
              "Weak floors: the floor above can see, or fall onto, the floor below",
            ],
          },
        ],
      },
      {
        heading: "Civilian considerations",
        blocks: [
          {
            type: "p",
            text: "Even evacuated Ukrainian cities like Bakhmut and Avdiivka during the final phases contained civilians: elderly, sick people, individuals in cellars. NATO and Ukrainian ROE require positive identification of a combatant before engagement. For international volunteers this is also a legal obligation, beyond an ethical one.",
          },
          {
            type: "ul",
            items: [
              "Presumption: every building is potentially inhabited until verified",
              "Positive identification (PID): armed combatants showing hostile intent",
              "Sensitive categories: children, elderly, women, clergy, medics, journalists",
              "Sensitive buildings: hospitals, schools, churches, clinics, shelters",
              "Documentation: note positions of civilians encountered for humanitarian follow-up",
              "POW rights (Geneva III): compliant treatment once surrendered, even under stress",
            ],
          },
          {
            type: "warn",
            title: "LEGAL OBLIGATIONS",
            body: "Violations of international humanitarian law (LOAC, GC III/IV) committed by foreign volunteers are not covered by the immunity of the host country's armed forces. Individual criminal responsibility persists and can be pursued in the country of origin or before international tribunals. Knowledge of ROE and the principles of proportionality, distinction and humanity is an operational obligation, not a philosophical question.",
          },
        ],
      },
      {
        heading: "Urban communications",
        blocks: [
          {
            type: "p",
            text: "Cities degrade radio comms: concrete walls, EM shadows, multipath, and EW concentrated in high-value areas. Squads operating in cities must plan alternate comms.",
          },
          {
            type: "ul",
            items: [
              "Internal radio relays: a fixed station rebroadcasting inside the building",
              "Cables: where possible, wired comms between positions",
              "Runners: the old method, still valid at urban microscale",
              "Pre-agreed signals: pyrotechnic, smoke, sound (coded whistles)",
              "Limited GPS: inside buildings and urban canyons, GPS position is unstable",
            ],
          },
        ],
      },
      {
        heading: "Urban FPV considerations",
        blocks: [
          {
            type: "p",
            text: "FPVs operate in cities in specific ways: they can enter through windows, descend stairwells, take corners. The threat does not end on entering a building. On the Ukrainian front, FPV operations inside trenches and inside rooms of dwellings are documented.",
          },
          {
            type: "ul",
            items: [
              "Windows and openings are entries: close, mask, bar",
              "Rooms with multiple accesses are not 'sheltered'",
              "Buzzer sound indicates an FPV in flight: move immediately to internal cover",
              "Anti-drone nets over courtyards, balconies, roofs — even improvised civilian netting works",
              "Localised EW: handheld jammers can create protective bubbles a few dozen metres wide",
            ],
          },
        ],
      },
      {
        heading: "Manual limits",
        blocks: [
          {
            type: "warn",
            title: "OUT OF SCOPE",
            body: "Room-clearing procedures, building entries, breach sequences and corridor movement are out of scope for this manual. They are high-complexity procedures requiring intensive training, supervision and live rehearsals. Learning urban CQB from a reference manual is dangerous. They are learned in schools, in units with instructors and with adequate practice time. This chapter offers only hazard awareness, high-level doctrine and planning considerations.",
          },
        ],
      },
      {
        heading: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Underestimating the vertical threat (above and below)",
              "Moving in the middle of the street rather than along edges",
              "Silhouetting against windows or bright openings seen from outside",
              "Concentrating in large groups in small rooms",
              "Forcing apparently free passage points (closed doors, stairs)",
              "Trusting GPS inside buildings",
              "Opening fire on any movement without PID",
              "Ignoring civilians or failing to document their positions",
            ],
          },
        ],
      },
      {
        heading: "Lessons learned Ukraine",
        blocks: [
          {
            type: "quote",
            text: "The Donbas cities — Bakhmut, Avdiivka, Mariinka, Vuhledar, Toretsk — have shown that modern urban combat is not just close combat anymore: it is close combat under permanent drone surveillance, with artillery hitting entire buildings within minutes, and FPVs entering rooms. Survival depends on signature discipline, position depth (basements, tunnels) and meticulous planning of movement between buildings. The international volunteer operating in cities does so as part of a Ukrainian unit that knows the terrain: deference to local command is not just hierarchical, it is survival.",
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "O combate em área urbana — MOUT (Military Operations on Urbanised Terrain) ou FIBUA (Fighting in Built-Up Areas) — é considerado pela doutrina OTAN o tipo mais caro de operação em pessoal, munição e tempo. As cidades canalizam, fragmentam e anulam muitas das vantagens tecnológicas da força moderna. Este capítulo descreve conceitos, ameaças e considerações — não procedimentos passo a passo de limpeza de edifícios, fora do escopo de um manual de consulta.",
    sections: [
      {
        heading: "Características do terreno urbano",
        blocks: [
          {
            type: "p",
            text: "O ambiente urbano é tridimensional: superfície, super-superfície (andares superiores, telhados), sub-superfície (porões, esgotos, túneis). Cada dimensão exige atenção própria. A densidade dos prédios quebra linhas de visada, anula fires de área, reduz ranging de óticas e cria sombras EM que prejudicam comms e GPS.",
          },
          {
            type: "ul",
            items: [
              "Ruas como canais: funis naturais para fogo, minas e granadas do alto",
              "Janelas e aberturas como arcos de tiro: cada abertura é posição potencial de sniper",
              "Telhados e andares altos: vantagem de observação, exposição total ao céu",
              "Porões e subsuperfície: cobertura contra artilharia, vulnerabilidade a fogo e gás",
              "Interiores: distâncias curtas, identificação difícil, fogo amigo frequente",
              "Materiais: concreto para projéteis, tijolo cede após repetição, gesso e drywall não param nada",
            ],
          },
        ],
      },
      {
        heading: "Perigos específicos",
        blocks: [
          {
            type: "p",
            text: "O ambiente urbano contém perigos que diferem dos de campo aberto. Frequentemente não são visíveis de imediato e exigem cultura urbana para serem reconhecidos.",
          },
          {
            type: "table",
            headers: ["Perigo", "Indicadores", "Mitigação"],
            rows: [
              ["IED / booby trap", "Cabos, objetos mexidos, obstáculos forçados", "Nunca forçar ponto naturalmente forçável"],
              ["Sniper", "Janelas abertas/fechadas anormais, reflexos", "Mover-se atrás de cobertura, nunca destacar-se"],
              ["Morteiros / artilharia", "Setores expostos do alto, alvos previsíveis", "Cobertura reforçada, dispersão, subsuperfície"],
              ["Drones FPV", "Som de motorzinho, sombras rápidas", "Cobertura fechada, vias de fuga internas"],
              ["Incêndio estrutural", "Material inflamável acumulado", "Vias de fuga laterais, nunca acesso único"],
              ["Colapso estrutural", "Edifícios já danificados, explosões prévias", "Avaliar estabilidade antes de ocupar"],
              ["Munição não detonada (UXO)", "Detritos, canteiros, fronts anteriores", "Não mover objetos suspeitos, EOD"],
            ],
          },
        ],
      },
      {
        heading: "Ameaça vertical",
        blocks: [
          {
            type: "p",
            text: "Urbano é o terreno com a maior ameaça vertical: o inimigo opera acima e abaixo simultaneamente. Consciência da vertical é a única mudança mental mais importante para quem vem de treinamento principalmente em espaços abertos.",
          },
          {
            type: "ul",
            items: [
              "Janelas e sacadas acima do seu andar cobrem trechos inteiros de rua",
              "Telhados em frente são posições perfeitas de sniper ou observador",
              "Drones em altitude observam pátios internos que parecem cobertos do chão",
              "Porões e bueiros podem esconder acessos subterrâneos não mapeados",
              "Pisos frágeis: o andar de cima pode ver — ou cair sobre — o de baixo",
            ],
          },
        ],
      },
      {
        heading: "Considerações sobre civis",
        blocks: [
          {
            type: "p",
            text: "Mesmo cidades ucranianas evacuadas como Bakhmut e Avdiivka nas fases finais continham civis: idosos, doentes, pessoas em porões. As ROE da OTAN e ucranianas exigem identificação positiva do combatente antes do engajamento. Para o voluntário internacional isto é também obrigação legal, além de ética.",
          },
          {
            type: "ul",
            items: [
              "Presunção: todo edifício é potencialmente habitado até verificação",
              "Identificação positiva (PID): combatentes armados com intenção hostil",
              "Categorias sensíveis: crianças, idosos, mulheres, religiosos, médicos, jornalistas",
              "Edifícios sensíveis: hospitais, escolas, igrejas, ambulatórios, abrigos",
              "Documentação: anotar posições de civis encontrados para acompanhamento humanitário",
              "Direitos do prisioneiro (Geneva III): tratamento conforme uma vez rendido, mesmo sob estresse",
            ],
          },
          {
            type: "warn",
            title: "OBRIGAÇÕES LEGAIS",
            body: "Violações ao direito internacional humanitário (LOAC, GC III/IV) cometidas por voluntários estrangeiros não são cobertas pela imunidade das forças armadas do país anfitrião. A responsabilidade penal individual persiste e pode ser perseguida no país de origem ou em tribunais internacionais. Conhecer ROE e os princípios de proporcionalidade, distinção e humanidade é obrigação operacional, não filosófica.",
          },
        ],
      },
      {
        heading: "Comunicações urbanas",
        blocks: [
          {
            type: "p",
            text: "Cidades degradam as comms de rádio: paredes de concreto, sombras EM, multipath e EW concentrada em zona de alto valor. As esquadras em cidade devem planejar comms alternativas.",
          },
          {
            type: "ul",
            items: [
              "Relays internos: estação fixa retransmitindo dentro do edifício",
              "Cabos: onde possível, comunicação cabeada entre posições",
              "Runners: método antigo, ainda válido em microescala urbana",
              "Sinais pré-combinados: pirotécnicos, fumaça, som (assobios codificados)",
              "GPS limitado: dentro de prédios e em cânions urbanos a posição GPS é instável",
            ],
          },
        ],
      },
      {
        heading: "Considerações FPV urbanas",
        blocks: [
          {
            type: "p",
            text: "FPVs operam em cidades de forma específica: entram por janelas, descem por escadas, contornam esquinas. A ameaça não termina ao entrar num edifício. No front ucraniano operações FPV dentro de trincheiras e quartos de residências são documentadas.",
          },
          {
            type: "ul",
            items: [
              "Janelas e aberturas são entradas: fechar, mascarar, barricar",
              "Cômodos com múltiplos acessos não são 'abrigo'",
              "O zumbido indica FPV em voo: mover-se imediatamente para cobertura interna",
              "Redes anti-drone em pátios, sacadas, telhados — até redes civis improvisadas funcionam",
              "EW localizada: jammers portáteis podem criar bolhas protetoras de dezenas de metros",
            ],
          },
        ],
      },
      {
        heading: "Limites do manual",
        blocks: [
          {
            type: "warn",
            title: "FORA DE ESCOPO",
            body: "Procedimentos de varredura de cômodo, entrada em edifício, sequências de breach e movimento em corredor estão fora do escopo deste manual. São procedimentos de alta complexidade que exigem treinamento intensivo, supervisão e ensaios reais. Aprender CQB urbano por manual é perigoso. Aprendem-se em escola, em unidade com instrutores e tempo de prática adequado. Este capítulo oferece apenas consciência de perigos, doutrina de alto nível e considerações de planejamento.",
          },
        ],
      },
      {
        heading: "Erros comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Subestimar a ameaça vertical (cima e baixo)",
              "Mover-se no meio da rua em vez das laterais",
              "Destacar-se contra janelas ou aberturas iluminadas vistas de fora",
              "Concentrar-se em grupos grandes em cômodos pequenos",
              "Forçar pontos de passagem aparentemente livres (portas fechadas, escadas)",
              "Confiar no GPS dentro de edifícios",
              "Abrir fogo em qualquer movimento sem PID",
              "Ignorar civis ou não documentar suas posições",
            ],
          },
        ],
      },
      {
        heading: "Lições aprendidas Ucrânia",
        blocks: [
          {
            type: "quote",
            text: "As cidades do Donbas — Bakhmut, Avdiivka, Marjinka, Vuhledar, Toretsk — demonstraram que o combate urbano moderno não é mais só combate aproximado: é combate aproximado sob vigilância drone permanente, com artilharia atingindo edifícios inteiros em minutos e FPVs entrando em cômodos. A sobrevivência depende de disciplina de assinatura, profundidade das posições (porões, túneis) e planejamento meticuloso do movimento entre edifícios. O voluntário internacional que opera em cidade o faz como parte de unidade ucraniana que conhece o terreno: sua deferência ao comando local não é só hierárquica, é de sobrevivência.",
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Le combat en zone urbaine — MOUT (Military Operations on Urbanised Terrain) ou FIBUA (Fighting in Built-Up Areas) — est considéré par la doctrine OTAN comme le type d'opération le plus coûteux en personnel, munitions et temps. Les villes canalisent, fragmentent et annulent beaucoup des avantages technologiques de la force moderne. Ce chapitre décrit des concepts, des menaces et des considérations — pas des procédures pas à pas de nettoyage de bâtiment, hors du périmètre d'un manuel de référence.",
    sections: [
      {
        heading: "Caractéristiques du terrain urbain",
        blocks: [
          {
            type: "p",
            text: "L'environnement urbain est tridimensionnel : surface, sur-surface (étages, toits), sous-surface (caves, égouts, tunnels). Chaque dimension demande une attention propre. La densité bâtie casse les lignes de vue, annule les feux de zone, réduit le ranging des optiques et crée des ombres EM qui gênent les comms et le GPS.",
          },
          {
            type: "ul",
            items: [
              "Les rues comme canaux : entonnoirs naturels pour le feu, les mines, les grenades par le haut",
              "Fenêtres et ouvertures comme arcs de tir : chaque ouverture est une position de sniper potentielle",
              "Toits et étages hauts : avantage d'observation, exposition totale au ciel",
              "Caves et sous-sol : protection contre l'artillerie, vulnérabilité au feu et au gaz",
              "Intérieurs : distances courtes, identification difficile, tirs fratricides fréquents",
              "Matériaux : béton arrête les balles, brique cède après répétition, plâtre et placo n'arrêtent rien",
            ],
          },
        ],
      },
      {
        heading: "Dangers spécifiques",
        blocks: [
          {
            type: "p",
            text: "L'environnement urbain contient des dangers différents de la rase campagne. Ils ne sont souvent pas immédiatement visibles et exigent une culture urbaine pour être reconnus.",
          },
          {
            type: "table",
            headers: ["Danger", "Indicateurs", "Mitigation"],
            rows: [
              ["IED / piège", "Câbles, objets déplacés, obstacles forcés", "Ne jamais forcer un point naturellement forçable"],
              ["Sniper", "Fenêtres ouvertes/fermées anormales, reflets", "Mouvement derrière couvert, jamais se découper"],
              ["Mortiers / artillerie", "Secteurs exposés par le haut, cibles prévisibles", "Couvert renforcé, dispersion, sous-sol"],
              ["Drones FPV", "Bourdonnement, ombres rapides", "Couvert fermé, voies de repli internes"],
              ["Incendie structurel", "Matières inflammables accumulées", "Issues latérales, jamais un accès unique"],
              ["Effondrement structurel", "Bâtiments déjà endommagés, explosions antérieures", "Évaluer la stabilité avant d'occuper"],
              ["Munitions non explosées (UXO)", "Débris, chantiers, anciens fronts", "Ne pas déplacer d'objets suspects, EOD"],
            ],
          },
        ],
      },
      {
        heading: "Menace verticale",
        blocks: [
          {
            type: "p",
            text: "L'urbain est le terrain à plus forte menace verticale : l'ennemi opère au-dessus et en dessous simultanément. La conscience de la verticale est le changement mental le plus important pour qui vient d'un entraînement principalement en espaces ouverts.",
          },
          {
            type: "ul",
            items: [
              "Fenêtres et balcons au-dessus de votre étage couvrent des pans entiers de rue",
              "Les toits opposés sont des positions parfaites de sniper ou observateur",
              "Les drones en altitude observent les cours intérieures qui semblent couvertes depuis le sol",
              "Caves et bouches d'égout peuvent cacher des accès souterrains non cartographiés",
              "Planchers fragiles : l'étage au-dessus peut voir — ou tomber sur — celui d'en dessous",
            ],
          },
        ],
      },
      {
        heading: "Considérations civils",
        blocks: [
          {
            type: "p",
            text: "Même les villes ukrainiennes évacuées comme Bakhmout et Avdiïvka dans les phases finales contenaient des civils : personnes âgées, malades, individus en caves. Les ROE OTAN et ukrainiennes exigent l'identification positive du combattant avant l'engagement. Pour le volontaire international c'est aussi une obligation légale, en plus d'être éthique.",
          },
          {
            type: "ul",
            items: [
              "Présomption : tout bâtiment est potentiellement habité jusqu'à vérification",
              "Identification positive (PID) : combattants armés montrant une intention hostile",
              "Catégories sensibles : enfants, personnes âgées, femmes, religieux, médecins, journalistes",
              "Bâtiments sensibles : hôpitaux, écoles, églises, dispensaires, abris",
              "Documentation : noter les positions des civils rencontrés pour suivi humanitaire",
              "Droits du prisonnier (Geneva III) : traitement conforme une fois rendu, même sous stress",
            ],
          },
          {
            type: "warn",
            title: "OBLIGATIONS LÉGALES",
            body: "Les violations du droit international humanitaire (LOAC, GC III/IV) commises par des volontaires étrangers ne sont pas couvertes par l'immunité des forces armées du pays hôte. La responsabilité pénale individuelle persiste et peut être poursuivie dans le pays d'origine ou devant les tribunaux internationaux. Connaître les ROE et les principes de proportionnalité, distinction et humanité est une obligation opérationnelle, pas une question philosophique.",
          },
        ],
      },
      {
        heading: "Communications urbaines",
        blocks: [
          {
            type: "p",
            text: "Les villes dégradent les comms radio : murs de béton, ombres EM, multipath, et GE concentrée en zone à haute valeur. Les groupes opérant en ville doivent planifier des comms alternatives.",
          },
          {
            type: "ul",
            items: [
              "Relais internes : une station fixe retransmettant à l'intérieur du bâtiment",
              "Câbles : quand possible, comms filaires entre positions",
              "Estafettes : la vieille méthode, encore valable à l'échelle urbaine",
              "Signaux pré-convenus : pyrotechniques, fumigènes, sonores (sifflets codés)",
              "GPS limité : à l'intérieur des bâtiments et dans les canyons urbains la position GPS est instable",
            ],
          },
        ],
      },
      {
        heading: "Considérations FPV urbaines",
        blocks: [
          {
            type: "p",
            text: "Les FPV opèrent en ville de façon spécifique : ils entrent par les fenêtres, descendent les cages d'escalier, contournent les angles. La menace ne s'arrête pas en entrant dans un bâtiment. Sur le front ukrainien, des opérations FPV à l'intérieur de tranchées et de pièces d'habitation sont documentées.",
          },
          {
            type: "ul",
            items: [
              "Fenêtres et ouvertures sont des entrées : fermer, masquer, barricader",
              "Les pièces à accès multiples ne sont pas « à l'abri »",
              "Le bourdonnement indique un FPV en vol : se déplacer immédiatement vers le couvert interne",
              "Filets anti-drones sur cours, balcons, toits — même des filets civils improvisés fonctionnent",
              "GE localisée : des brouilleurs portatifs créent des bulles protectrices de quelques dizaines de mètres",
            ],
          },
        ],
      },
      {
        heading: "Limites du manuel",
        blocks: [
          {
            type: "warn",
            title: "HORS PÉRIMÈTRE",
            body: "Les procédures de nettoyage de pièce, d'entrée dans un bâtiment, de breach et de progression en couloir sont hors du périmètre de ce manuel. Ce sont des procédures de haute complexité qui demandent un entraînement intensif, une supervision et des répétitions réelles. Apprendre le CQB urbain dans un manuel de référence est dangereux. Cela s'apprend en école, en unité avec instructeurs et avec un temps de pratique adéquat. Ce chapitre n'offre que la conscience des dangers, la doctrine de haut niveau et les considérations de planification.",
          },
        ],
      },
      {
        heading: "Erreurs fréquentes",
        blocks: [
          {
            type: "ul",
            items: [
              "Sous-estimer la menace verticale (haut et bas)",
              "Se déplacer au milieu de la rue plutôt que sur les bords",
              "Se découper contre des fenêtres ou ouvertures lumineuses vues de l'extérieur",
              "Se concentrer en grands groupes dans des petites pièces",
              "Forcer des points de passage apparemment libres (portes fermées, escaliers)",
              "Faire confiance au GPS à l'intérieur des bâtiments",
              "Ouvrir le feu sur tout mouvement sans PID",
              "Ignorer les civils ou ne pas documenter leurs positions",
            ],
          },
        ],
      },
      {
        heading: "Retours d'expérience Ukraine",
        blocks: [
          {
            type: "quote",
            text: "Les villes du Donbass — Bakhmout, Avdiïvka, Marïinka, Vouhledar, Toretsk — ont montré que le combat urbain moderne n'est plus seulement du combat rapproché : c'est du combat rapproché sous surveillance drone permanente, avec une artillerie qui frappe des immeubles entiers en quelques minutes, et des FPV qui entrent dans les pièces. La survie dépend de la discipline de signature, de la profondeur des positions (caves, tunnels) et d'une planification méticuleuse du mouvement entre bâtiments. Le volontaire international qui opère en ville le fait comme partie d'une unité ukrainienne qui connaît le terrain : sa déférence au commandement local n'est pas seulement hiérarchique, elle est de survie.",
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
