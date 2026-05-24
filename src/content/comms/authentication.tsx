import type { Locale } from "@/i18n/routing";
import type { ChapterContent } from "@/lib/chapter-content";

const SAMPLE_TABLE: ReadonlyArray<{ challenge: string; response: string }> = [
  { challenge: "ALFA", response: "MIKE" },
  { challenge: "BRAVO", response: "LIMA" },
  { challenge: "CHARLIE", response: "KILO" },
  { challenge: "DELTA", response: "JULIETT" },
  { challenge: "ECHO", response: "INDIA" },
  { challenge: "FOXTROT", response: "HOTEL" },
  { challenge: "GOLF", response: "GOLF" },
  { challenge: "HOTEL", response: "FOXTROT" },
];

interface Strings {
  intro: string;
  threat: string;
  threatItems: ReadonlyArray<string>;
  ceoi: string;
  ceoiBody: string;
  challenge: string;
  challengeBody: string;
  challengeExample: ReadonlyArray<string>;
  tableNote: string;
  numeric: string;
  numericBody: string;
  numericExample: ReadonlyArray<string>;
  dtg: string;
  dtgBody: string;
  duress: string;
  duressBody: string;
  errors: string;
  errorsItems: ReadonlyArray<string>;
  lessons: string;
  lessonsBody: string;
  checklist: string;
  checklistItems: ReadonlyArray<string>;
}

const STR: Record<Locale, Strings> = {
  it: {
    intro:
      "L'autenticazione radio è la procedura per verificare che la stazione interlocutrice sia effettivamente chi dichiara di essere — e non un impersonatore con una radio catturata, un infiltrato, o un avversario che gioca il ruolo di un'unità amica. Senza autenticazione, ogni messaggio in chiaro che arrivi tramite radio è solo una richiesta non verificata.",
    threat: "Cosa si previene",
    threatItems: [
      "Impersonificazione tramite radio catturate al fronte (frequente in Ucraina)",
      "Intrusione di stazioni nemiche che fingono di essere un comando amico per estrarre informazioni o indurre errori",
      "Inserzione di ordini falsi (deception) che spostano unità in posizioni esposte",
      "Conferma incrociata in scenari dove l'identità del callsign è dubbia",
      "Verifica di richieste critiche: fires, MEDEVAC, change of plan, posizione amica",
    ],
    ceoi: "CEOI / SOI — la base",
    ceoiBody:
      "Tutta l'autenticazione tattica si appoggia sul CEOI (Communications-Electronics Operating Instructions) o SOI (Signal Operating Instructions). È un documento giornaliero o ciclico che contiene: frequenze, callsign, tabella di autenticazione, code words, prowords aggiuntive. Cambia con cadenza (24 h tipicamente). Possedere un CEOI scaduto è inutile; possedere un CEOI altrui senza autorizzazione è una breccia OPSEC. Va distrutto immediatamente se compromesso.",
    challenge: "Challenge / Response — sistema a due lettere",
    challengeBody:
      "Il sistema più diffuso. Lo sfidante trasmette due lettere fonetiche; la stazione interrogata risponde con la lettera (o coppia) corrispondente nella tabella corrente. Se la risposta è errata o assente, la stazione interrogata non è autenticata.",
    challengeExample: [
      "BRAVO SIX, this is ALPHA TWO, AUTHENTICATE BRAVO, OVER.",
      "ALPHA TWO, this is BRAVO SIX, I AUTHENTICATE LIMA, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, OUT.",
    ],
    tableNote:
      "Tabella di esempio (non operativa). In ambiente reale la tabella viene dal CEOI del giorno e cambia.",
    numeric: "Autenticazione numerica",
    numericBody:
      "Variante con stringhe numeriche o alfanumeriche per messaggi di precedenza alta o quando si richiede autenticazione doppia. Spesso accoppiata a un trigraph (3 caratteri) per ridurre la probabilità di indovinazione.",
    numericExample: [
      "BRAVO SIX, AUTHENTICATE FOXTROT-TWO-NINER, OVER.",
      "I AUTHENTICATE WHISKEY-EIGHT-FOWER, OVER.",
    ],
    dtg: "Autenticazione DTG-based",
    dtgBody:
      "Sistemi più moderni legano la risposta al Date-Time Group corrente, rendendo invalida una risposta intercettata e replicata in seguito. Tipicamente: l'autenticatore è una funzione di (DTG, chiave del giorno). L'operatore consulta una pad o un dispositivo dedicato (es. KYK-13, sistemi UA proprietari) per ottenere la risposta. Il principio è lo stesso: senza accesso alla chiave attiva nessuno può autenticarsi.",
    duress: "Codice di coercizione (duress)",
    duressBody:
      "Parola o sequenza pre-concordata che la stazione trasmette quando è sotto coercizione o quando la radio è in mano nemica. La risposta sembra valida ma contiene un marker convenuto. Chi riceve sa che da quel momento ogni informazione proveniente da quella stazione è compromessa. La duress word non si rivela mai in chiaro, non si annota su materiale recuperabile, non si condivide con personale non operativo.",
    errors: "Errori comuni",
    errorsItems: [
      "Saltare l'autenticazione su richieste critiche \"perché si riconosce la voce\" — voce e fraseggio si imitano",
      "Ripetere il challenge se la risposta è errata invece di terminare la trasmissione",
      "Conservare CEOI scaduti in tasca o in zaino",
      "Annotare risposte di autenticazione su carta non distruggibile",
      "Autenticare la stazione errata (rispondere a un challenge prima di averlo correttamente identificato)",
      "Usare la stessa tabella su reti diverse — compromissione si propaga",
    ],
    lessons: "Lessons learned Ucraina",
    lessonsBody:
      "Sul fronte ucraino l'impersonificazione via radio catturate è documentata in entrambe le direzioni. Russi e ucraini si chiamano reciprocamente fingendo di essere unità del proprio schieramento per ottenere posizioni, ordini di fires falsificati, MEDEVAC in trappola. L'unica difesa funzionante è una procedura di autenticazione disciplinata, applicata sempre, anche quando \"sembra inutile\". Le unità che saltano l'autenticazione per velocità sono le stesse che, con cadenza statistica, perdono squadre per ordini falsi. Una richiesta di fires non autenticata si tratta come una potenziale trappola.",
    checklist: "Checklist autenticazione",
    checklistItems: [
      "CEOI del giorno noto e accessibile, non scaduto",
      "Tabella di sfida memorizzata o consultabile rapidamente",
      "Duress word personale memorizzata, mai trascritta",
      "Procedura di sfida applicata su tutte le richieste critiche (fires, MEDEVAC, change of plan)",
      "Reazione standard a fallimento di autenticazione: terminare la trasmissione, segnalare al comando",
      "Distruzione immediata di CEOI scaduto o compromesso",
    ],
  },
  en: {
    intro:
      "Radio authentication is the procedure for verifying that the station you are talking to is actually who it claims to be — not an impersonator with a captured radio, an infiltrator, or an adversary playing the role of a friendly unit. Without authentication, every clear-text radio message is just an unverified request.",
    threat: "What it prevents",
    threatItems: [
      "Impersonation via radios captured on the front (frequent in Ukraine)",
      "Enemy stations posing as friendly command to extract information or induce errors",
      "Injection of false orders (deception) that shift units into exposed positions",
      "Cross-confirmation in scenarios where callsign identity is doubtful",
      "Verification of critical requests: fires, MEDEVAC, change of plan, friendly position",
    ],
    ceoi: "CEOI / SOI — the foundation",
    ceoiBody:
      "All tactical authentication rests on the CEOI (Communications-Electronics Operating Instructions) or SOI (Signal Operating Instructions). A daily or cyclic document containing: frequencies, callsigns, authentication table, code words, additional prowords. Rotates on schedule (typically 24 h). Holding an expired CEOI is useless; holding someone else's CEOI without authorisation is an OPSEC breach. Destroy immediately if compromised.",
    challenge: "Challenge / Response — two-letter system",
    challengeBody:
      "The most widespread system. The challenger transmits two phonetic letters; the challenged station replies with the matching letter (or pair) from the current table. Wrong or missing reply: the station is not authenticated.",
    challengeExample: [
      "BRAVO SIX, this is ALPHA TWO, AUTHENTICATE BRAVO, OVER.",
      "ALPHA TWO, this is BRAVO SIX, I AUTHENTICATE LIMA, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, OUT.",
    ],
    tableNote:
      "Sample table (not operational). In real environment the table comes from the day's CEOI and rotates.",
    numeric: "Numeric authentication",
    numericBody:
      "Variant with numeric or alphanumeric strings for high-precedence traffic or double authentication. Often paired with a 3-character trigraph to reduce guessing probability.",
    numericExample: [
      "BRAVO SIX, AUTHENTICATE FOXTROT-TWO-NINER, OVER.",
      "I AUTHENTICATE WHISKEY-EIGHT-FOWER, OVER.",
    ],
    dtg: "DTG-based authentication",
    dtgBody:
      "More modern systems tie the response to the current Date-Time Group, invalidating any intercepted-and-replayed response. Typically: authenticator is a function of (DTG, day key). The operator consults a pad or dedicated device (e.g. KYK-13, proprietary UA systems) to derive the response. Same principle: no access to the active key, no authentication.",
    duress: "Duress code",
    duressBody:
      "Pre-agreed word or sequence transmitted when the station is under coercion or the radio is in enemy hands. The reply looks valid but contains a covenanted marker. The receiver knows that, from then on, every information from that station is compromised. The duress word is never revealed in clear, never recorded on recoverable material, never shared with non-operational personnel.",
    errors: "Common mistakes",
    errorsItems: [
      "Skipping authentication on critical requests \"because the voice is recognised\" — voice and phrasing get imitated",
      "Repeating the challenge if the answer is wrong instead of terminating the transmission",
      "Carrying expired CEOIs in pocket or pack",
      "Writing authentication answers on non-destructible paper",
      "Authenticating the wrong station (answering a challenge before correctly identifying it)",
      "Reusing the same table across different nets — compromise propagates",
    ],
    lessons: "Lessons learned Ukraine",
    lessonsBody:
      "On the Ukrainian front, impersonation via captured radios is documented in both directions. Russians and Ukrainians call each other pretending to be units of the receiver's own side to obtain positions, falsified fires requests, MEDEVAC traps. The only working defence is disciplined authentication procedure, applied always, even when it \"seems pointless\". Units that skip authentication for speed are the same units that, with statistical regularity, lose teams to false orders. A fires request without authentication is treated as a potential trap.",
    checklist: "Authentication checklist",
    checklistItems: [
      "Day's CEOI known and accessible, not expired",
      "Challenge table memorised or quickly consultable",
      "Personal duress word memorised, never written",
      "Challenge procedure applied on all critical requests (fires, MEDEVAC, change of plan)",
      "Standard reaction to authentication failure: end transmission, report to command",
      "Immediate destruction of expired or compromised CEOI",
    ],
  },
  "pt-br": {
    intro:
      "A autenticação de rádio é o procedimento para verificar que a estação com quem se fala é de fato quem alega ser — não um impostor com rádio capturado, um infiltrado ou um adversário fingindo ser uma unidade amiga. Sem autenticação, toda mensagem em claro pelo rádio é apenas um pedido não verificado.",
    threat: "O que se previne",
    threatItems: [
      "Impersonificação via rádios capturados no front (frequente na Ucrânia)",
      "Estações inimigas se passando por comando amigo para extrair informação ou induzir erro",
      "Injeção de ordens falsas (deception) que deslocam unidades para posições expostas",
      "Confirmação cruzada em cenários onde a identidade do indicativo é duvidosa",
      "Verificação de pedidos críticos: fires, MEDEVAC, mudança de plano, posição amiga",
    ],
    ceoi: "CEOI / SOI — a base",
    ceoiBody:
      "Toda autenticação tática se apoia no CEOI (Communications-Electronics Operating Instructions) ou SOI (Signal Operating Instructions). Documento diário ou cíclico com: frequências, indicativos, tabela de autenticação, code words, prowords adicionais. Rotação periódica (tipicamente 24 h). Ter CEOI vencido é inútil; ter CEOI alheio sem autorização é brecha OPSEC. Destruir imediatamente se comprometido.",
    challenge: "Challenge / Response — sistema de duas letras",
    challengeBody:
      "O sistema mais difundido. O desafiante transmite duas letras fonéticas; a estação desafiada responde com a letra (ou par) correspondente na tabela vigente. Resposta errada ou ausente: estação não autenticada.",
    challengeExample: [
      "BRAVO SIX, this is ALPHA TWO, AUTHENTICATE BRAVO, OVER.",
      "ALPHA TWO, this is BRAVO SIX, I AUTHENTICATE LIMA, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, OUT.",
    ],
    tableNote:
      "Tabela de exemplo (não operacional). No ambiente real, vem do CEOI do dia e rotaciona.",
    numeric: "Autenticação numérica",
    numericBody:
      "Variante com sequências numéricas ou alfanuméricas para tráfego de alta prioridade ou autenticação dupla. Frequentemente combinada a trigraph (3 caracteres) para reduzir probabilidade de adivinhação.",
    numericExample: [
      "BRAVO SIX, AUTHENTICATE FOXTROT-TWO-NINER, OVER.",
      "I AUTHENTICATE WHISKEY-EIGHT-FOWER, OVER.",
    ],
    dtg: "Autenticação por DTG",
    dtgBody:
      "Sistemas mais modernos amarram a resposta ao Date-Time Group corrente, invalidando resposta interceptada e replicada depois. Tipicamente: autenticador é função de (DTG, chave do dia). O operador consulta uma pad ou dispositivo dedicado (KYK-13, sistemas UA proprietários) para a resposta. Mesmo princípio: sem acesso à chave ativa, ninguém autentica.",
    duress: "Código de coação (duress)",
    duressBody:
      "Palavra ou sequência pré-combinada que a estação transmite sob coação ou quando o rádio está em mãos inimigas. A resposta parece válida mas contém marcador convencionado. Quem recebe sabe que daí em diante toda informação dessa estação está comprometida. A duress word nunca aparece em claro, nunca é anotada em material recuperável, nunca compartilhada com pessoal não operacional.",
    errors: "Erros comuns",
    errorsItems: [
      "Pular a autenticação em pedidos críticos \"porque se reconhece a voz\" — voz e fraseio se imitam",
      "Repetir o challenge se a resposta é errada em vez de encerrar a transmissão",
      "Carregar CEOIs vencidos no bolso ou na mochila",
      "Anotar respostas em papel não destrutível",
      "Autenticar a estação errada (responder challenge antes de identificá-lo corretamente)",
      "Reusar a mesma tabela em redes diferentes — comprometimento se propaga",
    ],
    lessons: "Lições aprendidas Ucrânia",
    lessonsBody:
      "No front ucraniano, a impersonificação via rádios capturados está documentada em ambas as direções. Russos e ucranianos se chamam fingindo ser unidade do próprio lado para obter posições, fires falsificadas, MEDEVAC em armadilha. A única defesa que funciona é autenticação disciplinada, aplicada sempre, mesmo quando \"parece inútil\". Unidades que pulam autenticação por velocidade são as mesmas que, com regularidade estatística, perdem equipes por ordens falsas. Pedido de fires sem autenticação se trata como armadilha potencial.",
    checklist: "Checklist de autenticação",
    checklistItems: [
      "CEOI do dia conhecido e acessível, não vencido",
      "Tabela de challenge memorizada ou rapidamente consultável",
      "Duress word pessoal memorizada, jamais escrita",
      "Procedimento de challenge aplicado em todos os pedidos críticos (fires, MEDEVAC, mudança de plano)",
      "Reação padrão a falha de autenticação: encerrar transmissão, reportar ao comando",
      "Destruição imediata de CEOI vencido ou comprometido",
    ],
  },
  fr: {
    intro:
      "L'authentification radio est la procédure permettant de vérifier que la station avec laquelle on parle est bien celle qu'elle prétend être — pas un imposteur avec une radio capturée, un infiltré, ou un adversaire jouant le rôle d'une unité amie. Sans authentification, chaque message radio en clair n'est qu'une requête non vérifiée.",
    threat: "Ce que cela prévient",
    threatItems: [
      "Usurpation via radios capturées au front (fréquent en Ukraine)",
      "Stations ennemies se faisant passer pour un commandement ami afin d'extraire de l'information ou d'induire des erreurs",
      "Injection d'ordres faux (deception) qui déplacent des unités dans des positions exposées",
      "Confirmation croisée quand l'identité de l'indicatif est douteuse",
      "Vérification des requêtes critiques : fires, MEDEVAC, change of plan, position amie",
    ],
    ceoi: "CEOI / SOI — la base",
    ceoiBody:
      "Toute authentification tactique repose sur le CEOI (Communications-Electronics Operating Instructions) ou SOI (Signal Operating Instructions). Document journalier ou cyclique contenant : fréquences, indicatifs, table d'authentification, code words, prowords additionnels. Rotation périodique (typiquement 24 h). Détenir un CEOI périmé est inutile ; détenir le CEOI d'autrui sans autorisation est une faille OPSEC. Détruire immédiatement si compromis.",
    challenge: "Challenge / Response — système à deux lettres",
    challengeBody:
      "Le système le plus répandu. Le défieur transmet deux lettres phonétiques ; la station défiée répond par la lettre (ou la paire) correspondante dans la table en cours. Réponse erronée ou absente : station non authentifiée.",
    challengeExample: [
      "BRAVO SIX, this is ALPHA TWO, AUTHENTICATE BRAVO, OVER.",
      "ALPHA TWO, this is BRAVO SIX, I AUTHENTICATE LIMA, OVER.",
      "BRAVO SIX, this is ALPHA TWO, ROGER, OUT.",
    ],
    tableNote:
      "Table d'exemple (non opérationnelle). En environnement réel, elle provient du CEOI du jour et tourne.",
    numeric: "Authentification numérique",
    numericBody:
      "Variante avec chaînes numériques ou alphanumériques pour trafic de haute priorité ou authentification double. Souvent associée à un trigramme (3 caractères) pour réduire la probabilité de devinette.",
    numericExample: [
      "BRAVO SIX, AUTHENTICATE FOXTROT-TWO-NINER, OVER.",
      "I AUTHENTICATE WHISKEY-EIGHT-FOWER, OVER.",
    ],
    dtg: "Authentification par DTG",
    dtgBody:
      "Les systèmes plus modernes lient la réponse au Date-Time Group courant, invalidant toute réponse interceptée puis rejouée. Typiquement : l'authentificateur est une fonction de (DTG, clé du jour). L'opérateur consulte une pad ou un appareil dédié (KYK-13, systèmes UA propriétaires) pour obtenir la réponse. Même principe : sans accès à la clé active, pas d'authentification.",
    duress: "Code de contrainte (duress)",
    duressBody:
      "Mot ou séquence pré-convenu transmis quand la station est sous contrainte ou que la radio est aux mains de l'ennemi. La réponse paraît valide mais contient un marqueur convenu. Le receveur sait qu'à partir de là toute information venant de cette station est compromise. Le mot de contrainte ne se révèle jamais en clair, ne se note jamais sur du matériel récupérable, ne se partage jamais avec du personnel non opérationnel.",
    errors: "Erreurs fréquentes",
    errorsItems: [
      "Sauter l'authentification sur des requêtes critiques « parce qu'on reconnaît la voix » — voix et phrasé s'imitent",
      "Répéter le challenge si la réponse est fausse au lieu de mettre fin à l'émission",
      "Transporter des CEOI périmés en poche ou sac",
      "Noter des réponses d'authentification sur du papier non destructible",
      "Authentifier la mauvaise station (répondre à un challenge sans l'avoir correctement identifié)",
      "Réutiliser la même table sur des réseaux différents — la compromission se propage",
    ],
    lessons: "Retours d'expérience Ukraine",
    lessonsBody:
      "Sur le front ukrainien, l'usurpation via radios capturées est documentée dans les deux sens. Russes et Ukrainiens s'appellent en se faisant passer pour une unité du camp du receveur afin d'obtenir des positions, des demandes de fires falsifiées, des MEDEVAC piégés. La seule défense qui fonctionne est une procédure d'authentification disciplinée, appliquée systématiquement, même quand cela « paraît inutile ». Les unités qui sautent l'authentification pour gagner du temps sont les mêmes qui, avec régularité statistique, perdent des équipes sur des ordres faux. Une demande de fires non authentifiée se traite comme un piège potentiel.",
    checklist: "Checklist authentification",
    checklistItems: [
      "CEOI du jour connu et accessible, non périmé",
      "Table de challenge mémorisée ou rapidement consultable",
      "Mot de contrainte personnel mémorisé, jamais écrit",
      "Procédure de challenge appliquée à toutes les requêtes critiques (fires, MEDEVAC, change of plan)",
      "Réaction standard à un échec d'authentification : couper l'émission, signaler au commandement",
      "Destruction immédiate d'un CEOI périmé ou compromis",
    ],
  },
};

export default function content(locale: Locale): ChapterContent {
  const s = STR[locale];
  return {
    intro: s.intro,
    body: (
      <>
        <h2>{s.threat}</h2>
        <ul>
          {s.threatItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.ceoi}</h2>
        <p>{s.ceoiBody}</p>

        <h2>{s.challenge}</h2>
        <p>{s.challengeBody}</p>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.challengeExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>Challenge</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_TABLE.map((row) => (
              <tr key={row.challenge}>
                <td className="mono">{row.challenge}</td>
                <td className="mono">{row.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mono" style={{ fontSize: "0.85em", color: "var(--fg-3)" }}>
          {s.tableNote}
        </p>

        <h2>{s.numeric}</h2>
        <p>{s.numericBody}</p>
        <div className="callout">
          <div className="callout-title">RADIO</div>
          {s.numericExample.map((line) => (
            <p key={line} className="mono" style={{ marginBottom: "0.4rem" }}>
              {line}
            </p>
          ))}
        </div>

        <h2>{s.dtg}</h2>
        <p>{s.dtgBody}</p>

        <h2>{s.duress}</h2>
        <blockquote>{s.duressBody}</blockquote>

        <h2>{s.errors}</h2>
        <ul>
          {s.errorsItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{s.lessons}</h2>
        <blockquote>{s.lessonsBody}</blockquote>

        <h2>{s.checklist}</h2>
        <ul>
          {s.checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  };
}
