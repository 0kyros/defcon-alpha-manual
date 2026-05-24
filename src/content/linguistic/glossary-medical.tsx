import type { Locale } from "@/i18n/routing";
import { fromLocales, type StandardChapter } from "@/lib/chapter-template";

const TERMS: ReadonlyArray<ReadonlyArray<string>> = [
  ["Tourniquet", "Laccio emostatico", "Torniquete", "Garrot"],
  ["Packing gauze", "Garza emostatica da impacchettamento", "Gaze para tamponamento", "Mèche hémostatique"],
  ["Hemostatic agent", "Agente emostatico", "Agente hemostático", "Agent hémostatique"],
  ["NPA (nasopharyngeal airway)", "Cannula nasofaringea", "Cânula nasofaríngea", "Canule nasopharyngée"],
  ["OPA (oropharyngeal airway)", "Cannula orofaringea", "Cânula orofaríngea", "Canule oropharyngée"],
  ["Surgical airway / cricothyrotomy", "Cricotirotomia", "Cricotireoidostomia", "Cricothyroïdotomie"],
  ["Needle decompression", "Decompressione con ago", "Descompressão por agulha", "Exsufflation à l'aiguille"],
  ["Chest seal", "Medicazione toracica occlusiva", "Selo torácico", "Pansement thoracique occlusif"],
  ["Tension pneumothorax", "Pneumotorace iperteso", "Pneumotórax hipertensivo", "Pneumothorax suffocant"],
  ["Hypovolemic shock", "Shock ipovolemico", "Choque hipovolêmico", "Choc hypovolémique"],
  ["IFAK", "Kit individuale di primo soccorso (IFAK)", "IFAK / kit individual", "Trousse individuelle (IFAK)"],
  ["IO (intraosseous)", "Accesso intraosseo", "Acesso intraósseo", "Voie intraosseuse"],
  ["IV (intravenous)", "Accesso endovenoso", "Acesso intravenoso", "Voie intraveineuse"],
  ["TXA (tranexamic acid)", "Acido tranexamico", "Ácido tranexâmico", "Acide tranexamique"],
  ["Golden hour", "Ora d'oro", "Hora de ouro", "Heure d'or"],
  ["MARCH algorithm", "Algoritmo MARCH", "Algoritmo MARCH", "Algorithme MARCH"],
  ["CCP (casualty collection point)", "Punto raccolta feriti", "Ponto de coleta de baixas", "Point de regroupement des blessés"],
  ["MEDEVAC", "Evacuazione medica (MEDEVAC)", "MEDEVAC", "MEDEVAC"],
  ["CASEVAC", "Evacuazione feriti (CASEVAC)", "CASEVAC", "CASEVAC"],
  ["Litter / stretcher", "Barella", "Maca", "Brancard"],
  ["Ambulatory", "Deambulante", "Deambulatório / com marcha", "Valide / ambulatoire"],
  ["KIA (killed in action)", "Caduto in azione (KIA)", "Morto em ação (KIA)", "Tué au combat (KIA)"],
  ["WIA (wounded in action)", "Ferito in azione (WIA)", "Ferido em ação (WIA)", "Blessé au combat (WIA)"],
  ["MIA (missing in action)", "Disperso in azione (MIA)", "Desaparecido em ação (MIA)", "Disparu au combat (MIA)"],
  ["Triage", "Triage / smistamento", "Triagem", "Triage"],
  ["Triage category (immediate/delayed/minimal/expectant)", "Categoria triage (immediato/differito/minimo/atteso)", "Categoria triagem (imediato/diferido/mínimo/expectante)", "Catégorie triage (immédiat/différé/mineur/dépassé)"],
  ["Fasciotomy", "Fasciotomia", "Fasciotomia", "Aponévrotomie"],
  ["Escharotomy", "Escarotomia", "Escarotomia", "Escarrotomie"],
  ["ROSC (return of spontaneous circulation)", "ROSC / ripresa del circolo spontaneo", "Retorno da circulação espontânea (RCE)", "Reprise d'activité cardiaque spontanée"],
  ["Hypothermia", "Ipotermia", "Hipotermia", "Hypothermie"],
  ["Burns (degree)", "Ustioni (grado)", "Queimaduras (grau)", "Brûlures (degré)"],
  ["Junctional tourniquet", "Laccio emostatico giunzionale", "Torniquete juncional", "Garrot jonctionnel"],
  ["9-line MEDEVAC", "9-line MEDEVAC", "9-line MEDEVAC", "9-line MEDEVAC"],
];

const DATA: Record<Locale, StandardChapter> = {
  it: {
    intro:
      "Terminologia parallela della medicina tattica da combattimento (TCCC). Le forme italiane sono quelle dei manuali Sanità Militare italiana, mentre su rete e nel passaggio del paziente si usa lo standard NATO in inglese. Conoscere entrambe è obbligatorio per il passaggio in catena MEDEVAC.",
    sections: [
      {
        heading: "TCCC e medicina di combattimento",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Note d'uso",
        blocks: [
          {
            type: "ul",
            items: [
              "MEDEVAC = evacuazione con assetti dedicati e personale sanitario a bordo; CASEVAC = trasporto su mezzo d'opportunità senza personale medico",
              "Sulla 9-line MEDEVAC, le righe 1-5 sono trasmesse immediatamente; le righe 6-9 possono essere trasmesse in un secondo momento",
              "La sequenza MARCH (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) ha priorità sull'ABC tradizionale in contesto tattico",
              "Le categorie di triage variano leggermente fra dottrine nazionali: il sistema NATO standard è immediate/delayed/minimal/expectant",
              "Il termine 'danger close' in contesto medico non esiste — è un termine artiglieria; per medicina si usa 'CCP under fire' o 'care under fire'",
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      "Parallel terminology of tactical combat casualty care (TCCC). The English forms are NATO doctrinal standard and are used on net and during patient handover. The Italian, Portuguese and French equivalents reflect their respective national military medical manuals.",
    sections: [
      {
        heading: "TCCC and combat medicine",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Usage notes",
        blocks: [
          {
            type: "ul",
            items: [
              "MEDEVAC = evacuation with dedicated medical assets and onboard medical personnel; CASEVAC = transport on a non-medical vehicle of opportunity",
              "On a 9-line MEDEVAC, lines 1-5 are transmitted immediately; lines 6-9 can be transmitted in a second pass",
              "The MARCH sequence (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) takes priority over traditional ABC in a tactical setting",
              "Triage categories vary slightly across national doctrines; the NATO standard is immediate/delayed/minimal/expectant",
              "'Danger close' is an artillery term and does not apply in medical context; in medicine use 'CCP under fire' or 'care under fire'",
            ],
          },
        ],
      },
    ],
  },
  "pt-br": {
    intro:
      "Terminologia paralela dos cuidados táticos a baixas de combate (TCCC). Em rede operacional OTAN e na passagem do paciente usa-se o inglês padrão; conhecer as formas em português é necessário para coordenação com pessoal local em ambientes lusófonos.",
    sections: [
      {
        heading: "TCCC e medicina de combate",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "MEDEVAC = evacuação com meios dedicados e equipe médica a bordo; CASEVAC = transporte em meio de oportunidade sem equipe médica",
              "Na 9-line MEDEVAC, as linhas 1-5 são transmitidas imediatamente; as 6-9 podem ser transmitidas em segundo momento",
              "A sequência MARCH (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) tem prioridade sobre o ABC tradicional em contexto tático",
              "Categorias de triagem variam ligeiramente entre doutrinas nacionais; o padrão OTAN é imediato/diferido/mínimo/expectante",
              "'Danger close' é termo de artilharia e não se aplica ao contexto médico; em medicina usa-se 'CCP sob fogo' ou 'care under fire'",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    intro:
      "Terminologie parallèle des soins tactiques aux blessés de combat (TCCC, ou SC1 dans la doctrine française). Sur réseau OTAN et lors du transfert du patient on utilise l'anglais standard ; les formes françaises sont conformes aux référentiels du SSA.",
    sections: [
      {
        heading: "TCCC et médecine de combat",
        blocks: [{ type: "table", headers: ["EN", "IT", "PT-BR", "FR"], rows: TERMS }],
      },
      {
        heading: "Notes d'usage",
        blocks: [
          {
            type: "ul",
            items: [
              "MEDEVAC = évacuation avec moyens dédiés et personnel médical à bord ; CASEVAC = transport sur vecteur d'opportunité sans personnel médical",
              "Sur la 9-line MEDEVAC, les lignes 1 à 5 sont transmises immédiatement ; les lignes 6 à 9 peuvent l'être en second passage",
              "La séquence MARCH (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) prime sur l'ABC traditionnel en contexte tactique",
              "Les catégories de triage varient légèrement entre doctrines nationales ; le standard OTAN est immediate/delayed/minimal/expectant",
              "« Danger close » est un terme d'artillerie et ne s'applique pas au contexte médical ; en médecine on dit « CCP sous le feu » ou « care under fire »",
            ],
          },
        ],
      },
    ],
  },
};

export default fromLocales(DATA);
