/* BIOL 40B — Lecture Exam 2 · learning-objective map.
   Every objective the instructor listed for this unit, keyed by id. Each exam question
   carries one or more of these ids in its `obj` array, which is what drives the
   Objective Scope page's coverage + mastery meters.

   Sources: the "Learning Objectives" slide of each deck in `exam 2/`, plus the
   learning objectives.docx handout (cardiac physiology, blood vessels, respiratory).
   TOPICS keys are the same strings used by every question's `topic` field. */

const TOPICS = {
  blood:   { name:"Blood",                deck:"Blood winter 25",                  color:"var(--t-blood)",   ic:"🩸" },
  heart:   { name:"Heart anatomy",        deck:"heart anatomy",                    color:"var(--t-heart)",   ic:"🫀" },
  cardio:  { name:"Cardiac physiology",   deck:"cardiophysiology (winter 25)",     color:"var(--t-cardio)",  ic:"📈" },
  vessels: { name:"Blood vessels",        deck:"blood vessels 2",                  color:"var(--t-vessels)", ic:"🩻" },
  resp:    { name:"Respiratory system",   deck:"Respiratory system (revised)",     color:"var(--t-resp)",    ic:"🫁" },
};

const OBJECTIVES = [
  /* ---------- Blood (deck objectives slide) ---------- */
  { id:"B1",  topic:"blood",   text:"List the functions of blood." },
  { id:"B2",  topic:"blood",   text:"Identify the plasma & formed elements of blood." },
  { id:"B3",  topic:"blood",   text:"Discuss the composition and functions of plasma." },
  { id:"B4",  topic:"blood",   text:"Describe the structure, function, production, and destruction of erythrocytes." },
  { id:"B5",  topic:"blood",   text:"Give examples of disorders caused by abnormalities of erythrocytes." },
  { id:"B6",  topic:"blood",   text:"List the classes, structural characteristics, and functions of leukocytes." },
  { id:"B7",  topic:"blood",   text:"Describe the structure and function of platelets and explain their role in blood clotting." },
  { id:"B8",  topic:"blood",   text:"Define hemostasis. Describe vascular spasm, platelet-plug formation, and coagulation." },
  { id:"B9",  topic:"blood",   text:"Discuss disorders of hemostasis." },
  { id:"B10", topic:"blood",   text:"Discuss blood typing." },

  /* ---------- Heart anatomy (deck objectives slide) ---------- */
  { id:"H1",  topic:"heart",   text:"Structure and organization of the heart — coverings, wall layers, chambers, and valves." },
  { id:"H2",  topic:"heart",   text:"Blood flow and blood supply of the heart — pathway through the chambers, pulmonary/systemic/coronary circulation." },
  { id:"H3",  topic:"heart",   text:"Conduction system of the heart." },
  { id:"H4",  topic:"heart",   text:"Microscopic anatomy of cardiac muscle — contractile vs pacemaker cells, intercalated discs, metabolism." },

  /* ---------- Cardiac physiology (objectives handout) ---------- */
  { id:"C1",  topic:"cardio",  text:"Describe the structural and functional characteristics of cardiac muscle tissue and the cardiac conduction system." },
  { id:"C2",  topic:"cardio",  text:"Explain how an action potential occurs in cardiac contractile fibers." },
  { id:"C3",  topic:"cardio",  text:"Describe the electrical events of a normal electrocardiogram (ECG)." },
  { id:"C4",  topic:"cardio",  text:"Describe the events of the cardiac cycle." },
  { id:"C5",  topic:"cardio",  text:"Describe the pressure and volume changes that occur during a cardiac cycle, and the heart sounds." },
  { id:"C6",  topic:"cardio",  text:"Describe the factors involved in the regulation of cardiac output and heart rate." },
  { id:"C7",  topic:"cardio",  text:"Define cardiac output." },
  { id:"C8",  topic:"cardio",  text:"Describe the factors that affect the regulation of stroke volume." },
  { id:"C9",  topic:"cardio",  text:"Outline the factors that affect the regulation of heart rate." },
  { id:"C10", topic:"cardio",  text:"Describe the disorders that affect the heart." },

  /* ---------- Blood vessels (objectives handout) ---------- */
  { id:"V1",  topic:"vessels", text:"Describe the relationships among the different blood vessels and the movement of blood through them." },
  { id:"V2",  topic:"vessels", text:"Contrast the structure and function of arteries, arterioles, capillaries, venules, and veins." },
  { id:"V3",  topic:"vessels", text:"Outline the vessels through which blood moves from the heart to the capillaries and back." },
  { id:"V4",  topic:"vessels", text:"Discuss the pressures that cause the movement of fluids between capillaries and interstitial spaces." },
  { id:"V5",  topic:"vessels", text:"Describe the factors that affect blood volume, pressure, and flow." },
  { id:"V6",  topic:"vessels", text:"Explain how blood pressure changes throughout the cardiovascular system." },
  { id:"V7",  topic:"vessels", text:"Describe the factors that determine mean arterial pressure and systemic vascular resistance." },
  { id:"V8",  topic:"vessels", text:"Describe how blood pressure is regulated." },
  { id:"V9",  topic:"vessels", text:"Define pulse, systolic, diastolic, and pulse pressures." },
  { id:"V10", topic:"vessels", text:"Define shock; describe the body's attempt to restore homeostasis in response to shock and how that response is regulated by negative feedback." },
  { id:"V11", topic:"vessels", text:"Describe how the cardiovascular system contributes to homeostasis." },
  { id:"V12", topic:"vessels", text:"Describe the disorders that affect blood vessels." },

  /* ---------- Respiratory (objectives handout) ---------- */
  { id:"R1",  topic:"resp",    text:"Describe the structural and functional classification of the organs of the respiratory system." },
  { id:"R2",  topic:"resp",    text:"Describe the structures and functions of the components of the upper respiratory system." },
  { id:"R3",  topic:"resp",    text:"Describe the anatomy and histology of the nose, pharynx, larynx, trachea, bronchi, and lungs." },
  { id:"R4",  topic:"resp",    text:"Identify the functions of each respiratory system structure." },
  { id:"R5",  topic:"resp",    text:"Describe the structures and functions of the components of the lower respiratory system." },
  { id:"R6",  topic:"resp",    text:"Describe the events that cause inhalation and exhalation." },
  { id:"R7",  topic:"resp",    text:"Distinguish the different lung volumes and capacities." },
  { id:"R8",  topic:"resp",    text:"Describe the exchange of oxygen and carbon dioxide in external and internal respiration." },
  { id:"R9",  topic:"resp",    text:"Describe how the blood transports oxygen and carbon dioxide." },
  { id:"R10", topic:"resp",    text:"Explain how the nervous system controls breathing." },
  { id:"R11", topic:"resp",    text:"Describe the disorders that affect the respiratory system." },
];

const OBJ_BY_ID = Object.fromEntries(OBJECTIVES.map(o => [o.id, o]));
