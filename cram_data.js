/* BIOL 40B — Lecture Exam 2 cram sheet.
   High-yield facts distilled from both question banks and the five source decks,
   grouped by objective topic. Each row: c = cue (always visible), a = answer (hidden
   until tapped). Some sections carry a mnemonic (mn). `topic` picks the section colour
   and `obj` lists which objectives the section covers. */
const CRAM = [

{ id:"blood-basics", topic:"blood", title:"1 · Blood — functions, composition, plasma", obj:"B1–B3", items:[
  {c:`The three functions of blood`, a:`TRANSPORTATION (gases, nutrients, wastes, hormones) · REGULATION (pH, body temperature, fluid balance) · PROTECTION (clotting + immune defense).`},
  {hy:1, c:`Hematocrit — what it is and the normal value`, a:`The % of blood volume that is packed red cells. Normally about 45%, leaving ~55% plasma.`},
  {c:`Plasma composition`, a:`~90% water + dissolved compounds: proteins (albumin, antibodies, clotting proteins), electrolytes (Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻), gases, nutrients, hormones, wastes.`},
  {hy:1, c:`Albumin — % and jobs`, a:`60% of plasma protein. Maintains blood osmotic pressure (holds water in the vessels) and transports bilirubin, bile salts, T4/T3.`},
  {c:`Alpha & beta globulins`, a:`Transport hormones, cholesterol and iron.`},
  {c:`Gamma globulins`, a:`The ANTIBODIES (immunoglobulins).`},
  {c:`Fibrinogen`, a:`The precursor of the clotting protein fibrin.`},
  {hy:1, c:`The three formed elements + normal counts`, a:`Erythrocytes 4.8–5.4 million/µL · Leukocytes 4,500–11,000/µL · Platelets 150,000–400,000/µL.`},
  {hy:1, c:`Which formed element is NOT a whole cell?`, a:`The platelet — a cell fragment from a megakaryocyte. RBCs are cells that ejected their nucleus; only WBCs are complete cells.`},
]},

{ id:"rbc", topic:"blood", title:"2 · Erythrocytes — structure, function, life cycle", obj:"B4", items:[
  {hy:1, c:`Three features that make RBCs efficient at gas transport`, a:`1) Biconcave shape — huge surface area per volume. 2) Hemoglobin is ~97% of cell volume. 3) NO mitochondria — ATP is anaerobic, so the cell never consumes the O₂ it carries.`},
  {hy:1, c:`Hemoglobin structure & O₂ capacity`, a:`4 globin chains, each with a heme group; each heme's central IRON atom binds one O₂ → 4 O₂ per Hb. ~250 million Hb per RBC.`},
  {c:`Oxyhemoglobin vs deoxyhemoglobin`, a:`Oxyhemoglobin = O₂ loaded in the lungs (ruby red). Deoxyhemoglobin / reduced Hb = O₂ unloaded in the tissues (dark red).`},
  {hy:1, c:`Carbaminohemoglobin vs carboxyhemoglobin`, a:`Carbamino- = CO₂ bound to Hb (~20–23% of blood CO₂ — normal). Carboxy- = CARBON MONOXIDE bound to Hb — blocks the O₂ sites, tissues go hypoxic.`},
  {c:`Enzymes inside an RBC`, a:`Glycolytic enzymes (anaerobic ATP) and carbonic anhydrase (converts CO₂ → HCO₃⁻).`},
  {hy:1, c:`Erythropoiesis — rate, site, controller`, a:`~3 million new RBCs per second, in RED BONE MARROW, controlled by ERYTHROPOIETIN (EPO) from the KIDNEYS in response to low blood O₂.`},
  {c:`Hemocytoblast → circulating RBC timeline`, a:`Hemocytoblast → reticulocyte ~15 days; reticulocyte matures in the bloodstream ~2 more days.`},
  {c:`Lifespan and fate`, a:`~120 days, then destroyed by the SPLEEN or LIVER.`},
  {hy:1, c:`RBC destruction — what happens to the GLOBIN and the IRON`, a:`A macrophage (spleen, liver or red bone marrow) phagocytizes the cell. GLOBIN → amino acids, REUSED for protein synthesis. HEME → IRON, bound to TRANSFERRIN and carried back to the red bone marrow for new RBCs.`},
  {hy:1, c:`RBC destruction — the BILIRUBIN path, all the way out`, a:`Heme → BILIVERDIN → BILIRUBIN → liver → BILE → small intestine → UROBILINOGEN → STERCOBILIN in the FECES, and UROBILIN via the kidney into the URINE.`},
  {c:`Dietary requirements for erythropoiesis`, a:`Amino acids, lipids, carbohydrates + IRON (for heme) + VITAMIN B₁₂ and FOLIC ACID (for the DNA synthesis of rapidly dividing cells).`},
]},

{ id:"rbc-disorders", topic:"blood", title:"3 · Erythrocyte disorders", obj:"B5", items:[
  {c:`Acute vs chronic hemorrhagic anemia`, a:`Acute = rapid loss (severe wound). Chronic = slight but persistent loss (hemorrhoids, bleeding ulcer). Either way — TREAT THE SOURCE of the bleeding first.`},
  {c:`Iron-deficiency anemia — cells and cause`, a:`Small pale MICROCYTES that can't make enough hemoglobin. From low intake, impaired absorption or chronic loss. Treat with iron supplements.`},
  {hy:1, c:`Pernicious anemia — mechanism and cells`, a:`Autoimmune destruction of the stomach mucosa that makes INTRINSIC FACTOR → no B₁₂ absorption → RBCs enlarge into MACROCYTES but can't divide. Treat with B₁₂ injections or nasal gel.`},
  {c:`Renal anemia`, a:`Kidneys can't make enough EPO. Treat with synthetic EPO.`},
  {c:`Aplastic anemia`, a:`Red bone marrow destroyed or inhibited (drugs, chemicals, radiation, viruses; often unknown). ALL cell lines affected → anemia + clotting defects + immune defects. Transfusions short-term, stem cell transplant long-term.`},
  {hy:1, c:`Sickle-cell anemia`, a:`Hemoglobin S — ONE wrong amino acid in a 146-aa beta chain. Cells go crescent-shaped when O₂ is LOW (e.g. exercise), rupture easily, block small vessels → pain + poor O₂ delivery.`},
  {hy:1, c:`Polycythemia`, a:`Excess RBCs → ↑ viscosity → sluggish flow. Polycythemia vera = bone marrow cancer, hematocrit up to 80%, treated by therapeutic phlebotomy. Secondary = from low O₂ (high altitude) or ↑ EPO.`},
]},

{ id:"wbc", topic:"blood", title:"4 · Leukocytes", obj:"B6", mn:`<b>N</b>ever <b>l</b>et <b>m</b>onkeys <b>e</b>at <b>b</b>ananas → Neutrophils · Lymphocytes · Monocytes · Eosinophils · Basophils, in DECREASING abundance.`, items:[
  {c:`What leukocytes do`, a:`Protect against infection, initiate inflammation, destroy cancerous cells, assist tissue repair. Most live only hours to a few days.`},
  {c:`Granulocytes vs agranulocytes`, a:`Granulocytes (granules + lobed nuclei): neutrophils, eosinophils, basophils. Agranulocytes: monocytes, lymphocytes.`},
  {hy:1, c:`Neutrophil — % and job`, a:`60–70%. Phagocyte, FIRST on the scene of infection, triggers inflammation. Multi-lobed nucleus, fine pale granules.`},
  {hy:1, c:`Eosinophil — % and job`, a:`1–4%. Allergies and PARASITE infections. Bilobed nucleus, red-orange granules.`},
  {hy:1, c:`Basophil — % and job`, a:`<1%. Contains and releases HISTAMINE. Deep purple granules.`},
  {hy:1, c:`Monocyte — % and fate`, a:`2–6%. Largest WBC, kidney-shaped nucleus. Travels into tissue and matures into a MACROPHAGE.`},
  {hy:1, c:`Lymphocyte — % and the three types`, a:`25–33%. Small, big round nucleus, thin cytoplasm rim. B cells → plasma cells → antibodies. T cells → regulate the immune response. NK cells → attack many microbes + tumor cells.`},
  {c:`Leukopenia vs leukemia vs mono`, a:`Leukopenia = abnormally LOW WBC count, often drug induced (anticancer drugs, glucocorticoids). Leukemia + infectious mononucleosis = OVERproduction of abnormal WBCs.`},
  {c:`Leukemia — naming and acute vs chronic`, a:`Named for the abnormal clone: myeloid (myeloblast descendants) or lymphocytic (lymphocytes). ACUTE arises from stem cells, mostly children. CHRONIC involves later cell stages, mostly older people. Untreated, all leukemias are fatal — usually from internal hemorrhage or overwhelming infection.`},
]},

{ id:"hemostasis", topic:"blood", title:"5 · Platelets, hemostasis & clotting", obj:"B7–B8", items:[
  {c:`What a platelet is`, a:`An irregularly shaped CELL FRAGMENT from a megakaryocyte. 150,000–400,000/µL.`},
  {hy:1, c:`Hemostasis — definition and the 3 phases`, a:`Prevention of blood loss from a damaged vessel. 1) VASCULAR SPASM 2) PLATELET PLUG FORMATION 3) COAGULATION — all three happening at the same time.`},
  {c:`Why platelets don't stick to healthy vessels`, a:`Collagen isn't exposed, AND endothelial cells secrete PROSTACYCLIN and NITRIC OXIDE, which inhibit platelet aggregation.`},
  {c:`What platelets stick to, and what they then release`, a:`They stick to COLLAGEN fibers exposed by damage, then release chemicals that attract MORE platelets and cause VASOCONSTRICTION (positive feedback).`},
  {c:`Coagulation — the basics`, a:`13 clotting factors, requires Ca²⁺. An inactive plasma factor is activated → activates the next → cascade → THROMBIN converts FIBRINOGEN into FIBRIN.`},
  {hy:1, c:`Intrinsic vs extrinsic pathway`, a:`INTRINSIC: Hageman factor activated by exposed collagen. EXTRINSIC: factor X activated by thromboplastin from damaged tissue. Both converge on thrombin.`},
  {hy:1, c:`Four jobs of thrombin`, a:`1) Fibrinogen → fibrin. 2) Activates stabilizing factor XIII. 3) Drives more prothrombin → thrombin. 4) Enhances platelet aggregation.`},
  {c:`Clot retraction & vessel repair`, a:`Trapped platelets contract and squeeze serum out; platelets attract FIBROBLASTS that repair the vessel wall.`},
  {c:`Fibrinolysis — the pathway`, a:`UROKINASE and tPA convert PLASMINOGEN → PLASMIN, and plasmin breaks down FIBRIN.`},
]},

{ id:"hemostasis-disorders", topic:"blood", title:"6 · Disorders of hemostasis", obj:"B9", items:[
  {hy:1, c:`Thrombus vs embolus vs embolism`, a:`THROMBUS = clot that forms and persists in an UNBROKEN vessel. EMBOLUS = a thrombus floating free in the bloodstream. EMBOLISM = an embolus obstructing a vessel (e.g. pulmonary or cerebral).`},
  {c:`Thromboembolic risk factors`, a:`Atherosclerosis, inflammation, slow-flowing blood / blood stasis from immobility.`},
  {c:`The three anticoagulants and their uses`, a:`ASPIRIN — lowers heart attack incidence by 50%. HEPARIN — pre/post-operative cardiac care and preventing venous thrombosis. WARFARIN — reduces stroke risk in atrial fibrillation.`},
  {hy:1, c:`Thrombocytopenia`, a:`Too few circulating platelets → PETECHIAE (spontaneous widespread pinpoint hemorrhage). Diagnostic below 50,000/µL. From marrow suppression or destruction (malignancy, radiation, drugs). Treat with concentrated platelet transfusion.`},
  {c:`Hemophilia A / B / C`, a:`Hereditary. A = factor VIII deficiency, MOST COMMON (77%). B = factor IX. C = factor XI, milder. Prolonged bleeding, especially INTO JOINT CAVITIES. Treated with genetically engineered factors.`},
]},

{ id:"typing", topic:"blood", title:"7 · Transfusion & blood typing", obj:"B10", items:[
  {c:`Restoring blood volume after major loss`, a:`Normal saline or a multiple-electrolyte solution (RINGER'S) that mimics plasma electrolytes. Restores circulation but does NOT restore oxygen-carrying capacity.`},
  {c:`Whole blood vs packed RBCs`, a:`Whole blood only for rapid, substantial loss. PRBCs (plasma and WBCs removed) are preferred to restore O₂-carrying capacity. Shelf life ~35 days.`},
  {hy:1, c:`The ABO rule`, a:`You carry ANTIBODIES against the antigen you LACK. Type A cells + anti-B plasma. Type B cells + anti-A plasma. Type AB = both antigens, NEITHER antibody. Type O = neither antigen, BOTH antibodies.`},
  {hy:1, c:`Reading the typing plate (agglutination)`, a:`Clumping = that antigen IS present. Clumps with anti-A only → TYPE A. Anti-B only → TYPE B. BOTH clump → TYPE AB (universal recipient, neither antibody). NEITHER clumps → TYPE O (both antibodies).`},
  {c:`Why typing matters`, a:`Transfusion reactions — agglutination of the donated cells by recipient antibodies — can be FATAL.`},
]},

{ id:"heart-structure", topic:"heart", title:"8 · Heart — location, coverings, chambers, valves", obj:"H1", items:[
  {c:`Size, weight and location`, a:`About the size of a fist, under 1 pound, in the MEDIASTINUM between the 2nd rib and the 5th intercostal space, on the diaphragm, posterior to the sternum and anterior to the vertebral column.`},
  {c:`Base vs apex, and the apical pulse`, a:`BASE (posterior surface) leans toward the RIGHT shoulder; APEX points toward the LEFT hip. Apical pulse is palpated between the 5th and 6th ribs, just below the left nipple.`},
  {hy:1, c:`Pericardium — layers, outside in`, a:`FIBROUS pericardium (protects, anchors, prevents overfilling) → SEROUS pericardium: parietal layer → PERICARDIAL CAVITY (fluid, cuts friction) → visceral layer = EPICARDIUM.`},
  {hy:1, c:`The three layers of the heart wall`, a:`EPICARDIUM (= visceral serous pericardium) · MYOCARDIUM (circular/spiral bundles of cardiac muscle — does the work) · ENDOCARDIUM (innermost, continuous with vessel endothelium, covers the valves).`},
  {c:`Pericarditis vs cardiac tamponade`, a:`Pericarditis = inflammation, roughened membranes → creaking PERICARDIAL FRICTION RUB. Tamponade = excess fluid leaking into the pericardial space, compressing the heart → drained by PERICARDIOCENTESIS.`},
  {c:`Atria — features`, a:`Two superior RECEIVING chambers, small and thin-walled, contribute little propulsion. Separated by the INTERATRIAL septum. AURICLES increase volume; PECTINATE MUSCLES are found in the auricles.`},
  {c:`Ventricles — features`, a:`Two inferior DISCHARGING chambers, the actual pumps, most of the heart's volume. Separated by the INTERVENTRICULAR septum. TRABECULAE CARNEAE (ridges) and PAPILLARY MUSCLES (anchor the chordae tendineae). RV = most of the anterior surface, LV = posteroinferior.`},
  {hy:1, c:`The four valves`, a:`AV VALVES: TRICUSPID (right, 3 cusps), BICUSPID/MITRAL (left, 2 cusps). SEMILUNAR VALVES: PULMONARY (RV → pulmonary trunk), AORTIC (LV → aorta) — each with 3 half-moon cusps attached to the artery wall.`},
  {hy:1, c:`Chordae tendineae + papillary muscles`, a:`Anchor the AV valve cusps: hold the flaps closed and stop them everting back into the atria when ventricular pressure spikes.`},
  {hy:1, c:`Incompetent valve vs valvular stenosis`, a:`INCOMPETENT = blood backflows, so the heart repumps the same blood. STENOSIS = stiff flaps constricting the opening, so the heart must exert more force. Both severely weaken the heart; replace with mechanical, animal or cadaver valve.`},
]},

{ id:"heart-flow", topic:"heart", title:"9 · Blood flow & blood supply of the heart", obj:"H2", items:[
  {hy:1, c:`Three vessels emptying into the right atrium`, a:`SUPERIOR VENA CAVA (from above the diaphragm) · INFERIOR VENA CAVA (from below) · CORONARY SINUS (from the coronary veins).`},
  {hy:1, c:`Full pathway through the heart`, a:`RA → tricuspid → RV → pulmonary valve → pulmonary trunk → R & L pulmonary arteries → lungs → 4 pulmonary veins → LA → bicuspid → LV → aortic valve → aorta → body.`},
  {c:`Arteries vs veins — the actual definition`, a:`ARTERIES carry blood AWAY from the heart; VEINS return it. That's why pulmonary arteries carry DEoxygenated blood and pulmonary veins carry OXYGENATED blood.`},
  {c:`The three circulations`, a:`PULMONARY — to the lungs for gas exchange and back. SYSTEMIC — to the body tissues and back. CORONARY — through the vessels of the myocardium itself.`},
  {hy:1, c:`Coronary circulation facts`, a:`Shortest circulation in the body. Left and right coronary arteries arise from the BASE OF THE AORTA and encircle the heart in the coronary sulcus. Blood is delivered when the heart is RELAXED. The LEFT VENTRICLE gets most of it.`},
  {c:`Anastomosis & end arteries`, a:`An anastomosis is a junction of branches from 2+ arteries supplying the same region — an alternate route. Arteries WITHOUT one are END ARTERIES: block one and that region necroses.`},
  {hy:1, c:`Angina pectoris vs myocardial infarction`, a:`ANGINA = thoracic pain from a FLEETING deficiency of blood to the myocardium; cells are weakened. MI = PROLONGED coronary blockage; cells die and are replaced by NONCONTRACTILE SCAR tissue.`},
]},

{ id:"conduction", topic:"heart", title:"10 · Conduction system & autorhythmic cells", obj:"H3 · C1", items:[
  {hy:1, c:`The conduction pathway, in order`, a:`SA node → AV node → AV bundle (bundle of His) → right & left bundle branches → Purkinje fibers.`},
  {hy:1, c:`Intrinsic rates down the chain`, a:`SA node 60–100/min · AV node 40–60/min · bundle branches ~40/min · Purkinje fibers ~20/min. Whatever is fastest sets the rhythm.`},
  {c:`SA node`, a:`Upper portion of the RIGHT ATRIUM. Modified myocardial cells that fire with NO external nerve stimulus. The PACEMAKER — initiates and regulates the heartbeat.`},
  {hy:1, c:`AV node — location and why it delays`, a:`At the junction of the right atrium and right ventricle. Delays the impulse ~0.1 s so the atria can COMPLETE their contraction and the ventricles can FILL.`},
  {c:`Bundle branches & Purkinje fibers`, a:`Bundle branches split in the interventricular septum and carry the impulse toward the APEX; Purkinje fibers spread it from the apex evenly through both ventricular walls → ventricles contract.`},
  {c:`Contractile vs autorhythmic cells`, a:`~99% CONTRACTILE (generate the force, stable resting potential, must be excited by a neighbour). ~1% AUTORHYTHMIC / pacemaker (noncontractile, self-excitable, spontaneously depolarize).`},
  {c:`Why autorhythmic cells fire on their own`, a:`Unstable PACEMAKER POTENTIAL — the membrane gradually drifts to threshold on slow Na⁺ entry; then CALCIUM influx (not sodium) causes the depolarizing phase; K⁺ efflux repolarizes.`},
  {c:`Ectopic focus`, a:`An abnormally excitable area that depolarizes FASTER than the SA node → premature heartbeat (EXTRASYSTOLE) and/or accelerated rate. From heart disease/hypoxia, anxiety, lack of sleep, too much caffeine or nicotine.`},
]},

{ id:"cardiac-muscle", topic:"heart", title:"11 · Cardiac muscle tissue & the contractile AP", obj:"H4 · C2", items:[
  {hy:1, c:`Cardiac muscle on a slide`, a:`STRIATED, short, fat, BRANCHED, interconnected, one central nucleus per cell, joined by INTERCALATED DISCS.`},
  {hy:1, c:`Intercalated discs — two jobs`, a:`Anchor the cells together AND allow free passage of ions through GAP JUNCTIONS.`},
  {c:`Functional syncytium`, a:`Because of the gap junctions, ALL cardiomyocytes contract as a unit — or none do. That is what makes the pumping effective.`},
  {c:`Cardiac muscle metabolism`, a:`Almost exclusively AEROBIC. More mitochondria than skeletal muscle → greater oxygen dependence, CANNOT function without O₂. Flexible about fuel: glucose, fatty acids, lactic acid.`},
  {hy:1, c:`Contractile-cell action potential, in order`, a:`Wave arrives via gap junctions → FAST Na⁺ channels open (depolarization) → Na⁺ channels close, SLOW Ca²⁺ channels open → PLATEAU (Ca²⁺ influx prolongs the AP and delays repolarization) → Ca²⁺ channels close, K⁺ channels open → repolarization.`},
  {hy:1, c:`Long absolute refractory period — why it matters`, a:`Prevents summation and TETANUS, so the chambers always have time to REFILL between beats.`},
  {c:`Excitation–contraction coupling in the heart`, a:`AP down the T tubules → Ca²⁺ influx from the ECF → that induces MORE Ca²⁺ release from the SR → Ca²⁺ binds TROPONIN → myofilaments slide.`},
  {c:`Digitalis vs calcium channel blockers`, a:`DIGITALIS (digitoxin) inhibits the Na⁺–Ca²⁺ transporter, so Ca²⁺ leaves the cytosol more slowly → STRONGER contraction (used in a weakened heart). CALCIUM BLOCKERS block Ca²⁺ influx → WEAKER contraction.`},
]},

{ id:"ecg", topic:"cardio", title:"12 · The ECG", obj:"C3", items:[
  {c:`What an ECG is — and what it is NOT`, a:`A graphic depiction of electrical activity in ALL cardiac muscle cells over time. It does NOT measure the value of action potentials or membrane potentials — only changes relative to the electrodes and their placement.`},
  {hy:1, c:`P wave`, a:`Depolarization of all atrial cells EXCEPT the SA node. Nearly always an UPWARD deflection.`},
  {hy:1, c:`QRS complex`, a:`VENTRICULAR DEPOLARIZATION — three separate waves: Q down, R up, S down.`},
  {hy:1, c:`T wave`, a:`VENTRICULAR REPOLARIZATION. Upward under normal conditions.`},
  {c:`Electrical before mechanical`, a:`P wave → atrial contraction. QRS → ventricular contraction. T wave → ventricular relaxation. The wave always PRECEDES the movement.`},
  {c:`Interval vs segment`, a:`An INTERVAL includes at least one wave component. A SEGMENT includes NO wave components.`},
  {hy:1, c:`R-R interval`, a:`Time between two successive R waves — the entire duration of generation and spread of the AP through the heart. Used to determine HEART RATE.`},
  {hy:1, c:`P-R interval`, a:`Start of P to start of R — the time for SA-node depolarization to spread through the atria to the ventricles. INCLUDES the AV nodal delay.`},
  {c:`Q-T interval`, a:`Start of QRS to end of T — action potentials spreading through the ventricular cells.`},
  {hy:1, c:`S-T segment`, a:`End of S to start of T. FLAT because it's recorded during the ventricular PLATEAU phase (no net electrical change). Elevation or depression → myocardial ISCHEMIA, injury, INFARCTION.`},
]},

{ id:"cycle", topic:"cardio", title:"13 · The cardiac cycle, pressures & heart sounds", obj:"C4–C5", items:[
  {c:`Cardiac cycle & systole/diastole`, a:`All the events of ONE complete heartbeat. Systole = contraction, diastole = relaxation. Atrial excitation and contraction must FINISH before ventricular contraction begins.`},
  {hy:1, c:`Phase 1 — ventricular filling (mid-to-late diastole)`, a:`Blood flows PASSIVELY from atria into ventricles; then the atria contract (atrial systole) to top them off. AV VALVES OPEN, SEMILUNAR VALVES CLOSED.`},
  {hy:1, c:`Phase 2 — ventricular systole`, a:`Atria in diastole. Rising ventricular pressure CLOSES the AV valves → ISOVOLUMETRIC CONTRACTION (all 4 valves shut, volume unchanged, pressure climbing) → pressure exceeds arterial pressure → semilunar valves open → VENTRICULAR EJECTION.`},
  {hy:1, c:`Phase 3 — isovolumetric relaxation (early diastole)`, a:`Ventricles relax; BACKFLOW of blood in the aorta and pulmonary trunk closes the SEMILUNAR valves. Atria are refilling; when atrial pressure exceeds ventricular, AV valves open and the cycle repeats.`},
  {c:`What opens and closes any valve`, a:`Nothing but the PRESSURE DIFFERENCE across it. Valves are passive one-way doors — they ensure unidirectional flow.`},
  {hy:1, c:`The two heart sounds`, a:`"LUB" (S1) = AV valves CLOSING — start of ventricular SYSTOLE. "DUP" (S2) = semilunar valves CLOSING — start of ventricular DIASTOLE. Sounds come from valves closing, never opening.`},
  {hy:1, c:`EDV, ESV and stroke volume — the numbers off his graph`, a:`END-DIASTOLIC VOLUME ≈ 135 mL (fullest, end of filling). END-SYSTOLIC VOLUME ≈ 65 mL (what's left after ejection). SV = EDV − ESV = 70 mL/beat — the same 70 mL used in his cardiac output example. Ejection fraction ≈ 52%.`},
  {hy:1, c:`Dicrotic notch`, a:`The small bump in the AORTIC pressure trace when ventricular pressure drops below aortic and blood surges back to slam the aortic valve shut. That closure = S2 = start of ventricular diastole.`},
  {hy:1, c:`Aortic vs ventricular pressure across the cycle`, a:`Aorta sits ~80 mmHg in diastole and peaks ~120 in systole. The ventricle swings from near 0 up past aortic pressure (valve opens → ejection) and back down (valve shuts → dicrotic notch).`},
]},

{ id:"output", topic:"cardio", title:"14 · Cardiac output, stroke volume & heart rate", obj:"C6–C9", items:[
  {hy:1, c:`Cardiac output — definition and formula`, a:`The volume each ventricle pumps in ONE MINUTE. CO = HR × SV. Example: 75 beats/min × 70 mL/beat = 5,250 mL/min ≈ 5.25 L/min.`},
  {c:`Cardiac reserve`, a:`The difference between resting and MAXIMAL cardiac output. ~20–25 L/min normally; up to ~40 L/min in trained athletes.`},
  {hy:1, c:`The three factors regulating STROKE VOLUME`, a:`PRELOAD — degree of ventricular stretch / end-diastolic volume, set mostly by VENOUS RETURN (more stretch → more ejected). CONTRACTILITY — force at a given fiber length (↑ by NE/E and Ca²⁺). AFTERLOAD — the pressure that must be exceeded to open the semilunar valves (↑ afterload → ↓ SV).`},
  {c:`Chronotropic agents`, a:`Anything affecting HEART RATE. POSITIVE chronotropic = raises HR. NEGATIVE = lowers HR.`},
  {hy:1, c:`Sympathetic vs parasympathetic on the heart`, a:`SYMPATHETIC — NE/E, opens more Na⁺ and Ca²⁺ channels, SPEEDS depolarization → ↑ HR. PARASYMPATHETIC — ACh, increases K⁺ permeability → HYPERPOLARIZATION → ↓ HR.`},
  {c:`Hormones affecting HR`, a:`EPINEPHRINE and THYROXINE both INCREASE heart rate.`},
  {hy:1, c:`Ions affecting HR`, a:`Elevated ECF K⁺ and Na⁺ → DECREASE HR. Elevated ECF Ca²⁺ → INCREASE HR.`},
  {c:`Physical factors affecting HR`, a:`↑ AGE → decreases HR. ↑ EXERCISE → increases HR. ↑ TEMPERATURE → increases HR.`},
]},

{ id:"heart-disorders", topic:"cardio", title:"15 · Cardiac abnormalities", obj:"C10", items:[
  {hy:1, c:`Bradycardia vs tachycardia`, a:`Bradycardia < 60 BPM. Tachycardia > 100 BPM.`},
  {c:`Arrhythmia vs fibrillation`, a:`ARRHYTHMIA = uncoordinated atrial and ventricular contractions. FIBRILLATION = irregular, chaotic twitching of the myocardium.`},
  {c:`Damaged SA node`, a:`The AV node takes over as pacemaker at about 50 BPM.`},
  {hy:1, c:`Damaged AV node = heart block`, a:`The ventricles fall back on their own slow rhythm, about 30 BPM.`},
]},

{ id:"vessel-walls", topic:"vessels", title:"16 · Vessel structure & the route of blood", obj:"V1–V3", items:[
  {hy:1, c:`The three tunics`, a:`TUNICA INTERNA (intima) — innermost, lines the lumen (endothelium). TUNICA MEDIA — middle, SMOOTH MUSCLE + ELASTIC FIBERS (this is what changes diameter). TUNICA EXTERNA — outermost connective tissue.`},
  {c:`Route out and back`, a:`Artery → arteriole → CAPILLARY → venule → vein. Capillaries usually connect arterioles to venules; capillaries unite into venules, venules unite into veins.`},
  {hy:1, c:`Elastic (conducting) arteries`, a:`Large diameter, MORE elastic fibers, LESS smooth muscle. Function as PRESSURE RESERVOIRS, absorbing the surge of ventricular ejection.`},
  {hy:1, c:`Muscular (distributing) arteries`, a:`Medium diameter, MORE smooth muscle, FEWER elastic fibers. Distribute blood to the various parts of the body.`},
  {c:`Arterioles`, a:`The primary RESISTANCE vessels — heavy muscle relative to a tiny lumen, so constricting/dilating them controls how much blood enters a capillary bed.`},
  {hy:1, c:`Capillaries`, a:`Microscopic, wall = a SINGLE layer of cells + a basement membrane. The only site of exchange between blood and tissue cells. Three types: CONTINUOUS (most common, least permeable), FENESTRATED (pores), SINUSOID (widest and leakiest — liver, spleen, bone marrow).`},
  {hy:1, c:`Venules & veins`, a:`Venules form from several capillaries and drain into veins. Compared with arteries, veins have a THINNER interna and media, a THICKER externa, less elastic tissue and smooth muscle, and they contain VALVES.`},
  {c:`Blood reservoirs`, a:`At rest the largest portion of blood sits in the SYSTEMIC VEINS AND VENULES.`},
  {c:`Circulatory routes`, a:`Systemic · Pulmonary · HEPATIC PORTAL (digestive organs → liver → heart) · Fetal.`},
]},

{ id:"capillary-exchange", topic:"vessels", title:"17 · Capillary exchange", obj:"V4", items:[
  {hy:1, c:`The three routes across a capillary wall`, a:`DIFFUSION (O₂, CO₂, glucose, amino acids, some hormones) · TRANSCYTOSIS in vesicles (large lipid-INsoluble molecules like INSULIN) · BULK FLOW.`},
  {c:`Bulk flow — definition`, a:`A PASSIVE process where large numbers of ions/molecules/particles move TOGETHER in the same direction, from higher to lower pressure, continuing as long as a pressure difference exists.`},
  {c:`What bulk flow is most important for`, a:`Regulating the RELATIVE VOLUMES of blood and interstitial fluid.`},
  {hy:1, c:`Arterial end of the capillary`, a:`Blood HYDROSTATIC pressure > blood colloid OSMOTIC pressure → net FILTRATION, fluid moves OUT into the interstitial space.`},
  {hy:1, c:`Venous end of the capillary`, a:`Hydrostatic pressure has dropped but plasma proteins stayed behind, so colloid OSMOTIC pressure wins → REABSORPTION, fluid moves back IN.`},
  {c:`When the balance fails`, a:`Fluid accumulates in the interstitial space = EDEMA (e.g. when plasma protein / albumin is low).`},
]},

{ id:"flow-pressure", topic:"vessels", title:"18 · Blood flow, pressure & resistance", obj:"V5–V7", items:[
  {hy:1, c:`Blood flow — definition and the two formulas`, a:`The volume of blood flowing through a tissue per unit time (mL/min). Total blood flow = CARDIAC OUTPUT. CO = HR × SV, and CO = MAP ÷ RESISTANCE.`},
  {c:`What determines blood pressure`, a:`BP is generated by ventricular contraction and determined by CARDIAC OUTPUT, BLOOD VOLUME and VASCULAR RESISTANCE. Higher BP → greater flow.`},
  {hy:1, c:`Vascular resistance — definition and 3 determinants`, a:`Opposition to flow from friction between blood and the vessel wall. Depends on 1) SIZE OF THE LUMEN 2) BLOOD VISCOSITY 3) TOTAL VESSEL LENGTH. Higher R → LESS flow.`},
  {c:`Velocity of blood flow`, a:`INVERSELY related to total cross-sectional area. Capillary beds have the greatest total cross-section, so blood is SLOWEST there — which is exactly what gives time for exchange.`},
  {hy:1, c:`Venous return — definition and 3 assists`, a:`The volume of blood flowing back to the heart through the systemic veins, driven ultimately by the LEFT VENTRICLE's contraction. Assisted by VALVES, the RESPIRATORY PUMP and the SKELETAL MUSCLE PUMP.`},
  {c:`Autoregulation`, a:`A tissue automatically adjusting its OWN blood flow to match its metabolic demand for O₂/nutrient delivery and waste removal, in response to local physical and chemical stimuli.`},
]},

{ id:"bp-regulation", topic:"vessels", title:"19 · Blood pressure regulation & measurement", obj:"V8–V9", items:[
  {hy:1, c:`Cardiovascular center`, a:`A group of neurons in the MEDULLA OBLONGATA that regulate heart rate, contractility and blood vessel diameter.`},
  {hy:1, c:`Baroreceptors`, a:`Pressure-sensitive sensory neurons that monitor STRETCH of the walls of blood vessels and the ATRIA — the sensor in the blood-pressure negative feedback loop.`},
  {c:`Hormones — via cardiac output`, a:`NOREPINEPHRINE and EPINEPHRINE increase heart rate and contractility → ↑ BP.`},
  {hy:1, c:`Hormones — via resistance`, a:`VASOCONSTRICT (↑ BP): angiotensin II, ADH, norepinephrine, epinephrine. VASODILATE (↓ BP): atrial natriuretic peptide (ANP), nitric oxide, epinephrine at β₂ receptors.`},
  {c:`Hormones — via blood volume`, a:`↑ volume → ↑ BP: ALDOSTERONE, ADH. ↓ volume → ↓ BP: ATRIAL NATRIURETIC PEPTIDE.`},
  {hy:1, c:`Systolic, diastolic, pulse pressure`, a:`SYSTOLIC = peak arterial pressure during ventricular contraction. DIASTOLIC = lowest pressure, between beats. PULSE PRESSURE = systolic − diastolic (e.g. 118/76 → 42 mmHg).`},
  {c:`Pulse points`, a:`Superficial temporal (medial to the ear) · Facial (mandible, level with the corners of the mouth) · Common carotid (lateral to the larynx) · Brachial (medial side of biceps brachii) · Radial (lateral wrist) · Femoral (inferior to the inguinal ligament) · Popliteal (posterior to the knee) · Dorsalis pedis (superior to the instep).`},
]},

{ id:"shock", topic:"vessels", title:"20 · Shock, homeostasis & vessel disorders", obj:"V10–V12", items:[
  {c:`Shock — definition`, a:`An INADEQUATE CARDIAC OUTPUT such that the cardiovascular system cannot meet the metabolic demands of body cells. Membranes dysfunction, metabolism goes abnormal, cells may die.`},
  {hy:1, c:`The four types of shock`, a:`HYPOVOLEMIC (too little volume) · CARDIOGENIC (the pump fails) · VASCULAR (widespread vasodilation) · OBSTRUCTIVE (flow is physically blocked).`},
  {hy:1, c:`Signs and symptoms of shock`, a:`Clammy/cool/pale skin · TACHYCARDIA · weak rapid pulse · sweating · HYPOTENSION (systolic <90 mmHg) · altered mental status · decreased urinary output · thirst · ACIDOSIS.`},
  {c:`Shock and negative feedback`, a:`The fall in pressure is DETECTED (baroreceptors) and the responses — ↑ HR, ↑ contractility, vasoconstriction, fluid retention — OPPOSE the fall. Restoring pressure then switches the response off.`},
  {hy:1, c:`Hypertension categories`, a:`NORMAL <120 AND <80 · PREHYPERTENSION 120–139 or 80–89 · STAGE 1 140–159 or 90–99 · STAGE 2 >160 or >100.`},
  {c:`Why hypertension damages the heart`, a:`Chronically elevated arterial pressure = elevated AFTERLOAD, so the ventricle works harder on every beat and eventually weakens.`},
  {c:`Aging and the CV system`, a:`Loss of aortic COMPLIANCE · reduced cardiac muscle fiber SIZE · progressive loss of cardiac muscular STRENGTH · decline in MAXIMUM HEART RATE · increased SYSTOLIC blood pressure.`},
]},

{ id:"resp-anatomy", topic:"resp", title:"21 · Respiratory organs & their functions", obj:"R1–R5", items:[
  {c:`Functions of the respiratory system`, a:`Supply O₂ for cellular respiration and dispose of CO₂. ALSO: helps regulate blood pH · houses the receptors for SMELL · FILTERS, WARMS and MOISTENS inspired air · PRODUCES SOUND.`},
  {c:`The four processes of respiration`, a:`1) PULMONARY VENTILATION (breathing) 2) EXTERNAL respiration (lungs ↔ blood) 3) TRANSPORT of O₂ and CO₂ in blood 4) INTERNAL respiration (systemic vessels ↔ tissues).`},
  {hy:1, c:`Upper vs lower respiratory system`, a:`UPPER: nose and nasal cavity, paranasal sinuses, pharynx, larynx. LOWER: trachea, bronchi and branches, lungs and alveoli.`},
  {hy:1, c:`Conducting vs respiratory zone`, a:`CONDUCTING (moves air): nose, pharynx, larynx, trachea, bronchi, bronchioles. RESPIRATORY (gas exchange): respiratory bronchioles, alveolar ducts, alveoli. — a DIFFERENT split from upper/lower.`},
  {hy:1, c:`Functions of the nose`, a:`Provides an airway · MOISTENS and WARMS entering air · FILTERS and cleans it · resonating chamber for speech · houses the OLFACTORY receptors. Two regions: external nose and nasal cavity.`},
  {c:`Functions and regions of the pharynx`, a:`Passageway for BOTH air and food · resonating chamber for speech · houses the TONSILS. Regions: NASOpharynx, OROpharynx, LARYNGOpharynx.`},
  {hy:1, c:`The larynx`, a:`Connects pharynx to trachea. Contains THYROID cartilage (Adam's apple), EPIGLOTTIS (ELASTIC cartilage — covers the laryngeal inlet during swallowing), CRICOID and ARYTENOID cartilages, FALSE and TRUE vocal cords. GLOTTIS = the opening between the vocal cords; the folds vibrate as air is EXPELLED.`},
  {hy:1, c:`The trachea — extent and wall`, a:`Larynx to the 5th thoracic vertebra. MUCOSA: ciliated PSEUDOSTRATIFIED epithelium with GOBLET cells. SUBMUCOSA: connective tissue + seromucous glands + 16–20 C-SHAPED HYALINE cartilage rings (prevent collapse; C-shaped so the ESOPHAGUS can expand anteriorly). ADVENTITIA: outer connective tissue.`},
  {c:`Primary bronchi`, a:`Formed by division of the trachea; each enters its lung at the HILUS (medial depression). The RIGHT bronchus is WIDER, SHORTER and MORE VERTICAL than the left.`},
  {hy:1, c:`Bronchial tree order`, a:`Primary → secondary → tertiary bronchi → bronchioles (<1 mm) → terminal bronchioles (<0.5 mm) → respiratory bronchioles → alveolar ducts → alveolar sacs → ALVEOLI. About 25 generations.`},
  {c:`Changes going down the airway`, a:`Cartilage rings → irregular plates → replaced by ELASTIC fibers. Epithelium: pseudostratified columnar → CUBOIDAL. Cilia and goblet cells become SPARSE. SMOOTH MUSCLE INCREASES → substantial resistance to airflow.`},
  {hy:1, c:`The respiratory membrane`, a:`Formed by the ALVEOLAR wall + the CAPILLARY wall — TWO layers of simple squamous epithelium. Gas crosses by DIFFUSION: O₂ into the blood, CO₂ into the alveoli.`},
  {hy:1, c:`Alveolar cells`, a:`~300 million alveoli make up most of lung volume. MACROPHAGES engulf debris. TYPE II alveolar cells secrete SURFACTANT, which reduces SURFACE TENSION to prevent alveolar collapse.`},
  {hy:1, c:`Pleurae and lung gross anatomy`, a:`VISCERAL pleura covers the lung surface (inner), PARIETAL pleura lines the thoracic wall (outer), pleural FLUID between. Lungs are mostly alveoli plus STROMA (elastic connective tissue) → elastic and spongy. ROOT = attachment to the mediastinum, APEX = superior tip deep to the clavicle, BASE = rests on the diaphragm. RIGHT lung = 3 lobes, LEFT lung = 2.`},
  {c:`Two circulations to the lungs`, a:`PULMONARY: pulmonary arteries deliver systemic venous blood to be oxygenated; pulmonary veins return oxygenated blood to the heart. BRONCHIAL (part of the SYSTEMIC circuit): bronchial arteries off the AORTA supply all lung tissue EXCEPT the alveoli.`},
  {c:`Innervation of the lungs`, a:`Parasympathetic and sympathetic motor fibers plus visceral sensory, entering via the PULMONARY PLEXUS on the lung root. PARASYMPATHETIC → BRONCHOCONSTRICTION. SYMPATHETIC → BRONCHODILATION.`},
]},

{ id:"ventilation", topic:"resp", title:"22 · Ventilation, pressures, volumes & capacities", obj:"R6–R7", items:[
  {c:`How respiratory pressures are stated`, a:`RELATIVE to atmospheric pressure at sea level (P_atm = 760 mmHg). So −1 mmHg = 759, +1 mmHg = 761, and 0 mmHg = 760.`},
  {c:`Intrapleural vs intrapulmonary pressure`, a:`INTRAPLEURAL (pleural cavity) is ALWAYS NEGATIVE relative to INTRAPULMONARY (in the lungs). That difference is what keeps the lungs from collapsing.`},
  {hy:1, c:`Inhalation`, a:`Diaphragm and external intercostals CONTRACT → thoracic volume INCREASES → intrapulmonary pressure FALLS below atmospheric → air flows IN.`},
  {hy:1, c:`Quiet exhalation`, a:`Muscles RELAX → thoracic volume DECREASES → intrapulmonary pressure RISES above atmospheric → air flows OUT. PASSIVE — driven by elastic recoil.`},
  {hy:1, c:`The four lung VOLUMES`, a:`TIDAL VOLUME (TV) — a normal quiet breath. INSPIRATORY RESERVE (IRV) — extra you can inhale beyond it. EXPIRATORY RESERVE (ERV) — extra you can force out after it. RESIDUAL VOLUME (RV) — what stays no matter what, so a spirometer can't measure it.`},
  {hy:1, c:`The CAPACITIES`, a:`Capacities are combinations of volumes. VITAL CAPACITY = TV + IRV + ERV — the total exchangeable air. TOTAL LUNG CAPACITY = VC + RV.`},
  {hy:1, c:`The spirogram NUMBERS (male values)`, a:`TV 500 · IRV 3,100 · ERV 1,200 · RV 1,200 mL. So VC = 500+3,100+1,200 = 4,800 mL and TLC = 4,800+1,200 = 6,000 mL.`},
  {hy:1, c:`Inspiratory capacity & functional residual capacity`, a:`INSPIRATORY CAPACITY = TV + IRV = 3,600 mL (most you can breathe in starting from a normal exhalation). FUNCTIONAL RESIDUAL CAPACITY = ERV + RV = 2,400 mL (what's still in there after a normal exhalation).`},
  {c:`Spirometry & minute ventilation`, a:`SPIROMETRY provides the measurements used to assess lung function. MINUTE VENTILATION = the total volume of air inhaled and exhaled each minute.`},
]},

{ id:"gas-exchange", topic:"resp", title:"23 · Gas exchange & gas transport", obj:"R8–R9", items:[
  {c:`Partial pressure`, a:`Air is a mixture (nitrogen, oxygen, water vapour, CO₂, others), and each gas contributes part of the total pressure — its PARTIAL PRESSURE.`},
  {hy:1, c:`The rule that governs all gas movement`, a:`In both external and internal respiration, O₂ and CO₂ move from AREAS OF HIGHER partial pressure to AREAS OF LOWER partial pressure — by diffusion.`},
  {hy:1, c:`The partial pressure NUMBERS at every step`, a:`ATMOSPHERIC P_O₂ 159 / P_CO₂ 0.3 · ALVEOLAR 105 / 40 · blood ARRIVING at the lungs (deoxygenated) 40 / 45 · blood LEAVING the lungs (oxygenated) 100 / 40 · TISSUE CELLS 40 / 45. O₂ steps downhill the whole way; CO₂ runs the opposite direction.`},
  {c:`External respiration`, a:`Pulmonary gas exchange — between ALVEOLAR AIR and the pulmonary blood capillaries.`},
  {c:`Internal respiration`, a:`Systemic gas exchange — between SYSTEMIC TISSUE CAPILLARIES and the tissue cells.`},
  {hy:1, c:`Oxygen transport`, a:`About 98.5% of blood O₂ is BOUND TO HEMOGLOBIN in the red cells, as OXYHEMOGLOBIN.`},
  {hy:1, c:`CO₂ transport — the three ways`, a:`~70% as BICARBONATE ions (HCO₃⁻) · ~23% as CARBAMINOHEMOGLOBIN · ~7% DISSOLVED in plasma.`},
]},

{ id:"breathing-control", topic:"resp", title:"24 · Control of breathing & respiratory disorders", obj:"R10–R11", items:[
  {hy:1, c:`The breathing control centers`, a:`MEDULLA — controls the basic respiratory RHYTHM. PONS — SMOOTHS OUT the respiratory rate.`},
  {c:`Nerves to the respiratory muscles`, a:`The PHRENIC and INTERCOSTAL nerves.`},
  {c:`Stretch receptors`, a:`In the BRONCHIOLES and ALVEOLI — send impulses to the control centers to INITIATE EXPIRATION.`},
  {hy:1, c:`The main chemical regulator`, a:`CARBON DIOXIDE. ↑ CO₂ → ↓ blood pH → increased respiration, acting DIRECTLY on the MEDULLA OBLONGATA.`},
  {c:`How oxygen levels are monitored`, a:`CHEMORECEPTORS in the AORTA and CAROTID artery detect O₂ concentration changes and report to the medulla oblongata.`},
  {c:`Rhinitis → sinusitis`, a:`Inflammation of the nasal mucosa. Because the mucosa is CONTINUOUS, infection spreads nose → throat → chest, and to the tear ducts and paranasal sinuses (SINUSITIS). Blocked passages let air be absorbed, creating a vacuum → SINUS HEADACHE.`},
  {c:`Enlarged adenoids`, a:`Block the air passage in the NASOPHARYNX, forcing mouth breathing — so air is not properly warmed, moistened or filtered. Chronic enlargement disturbs speech and sleep.`},
  {c:`Laryngitis`, a:`Inflammation of the VOCAL FOLDS → they swell and interfere with vibration → HOARSENESS, or speech reduced to a whisper. Usually viral; also voice overuse, very dry air, bacteria, tumors on the folds, inhaled irritants.`},
  {hy:1, c:`Smoking and the cilia`, a:`Smoking INHIBITS and ultimately DESTROYS the cilia, so COUGHING becomes the only way to clear mucus from the lungs. Ciliary function usually recovers within a few weeks of quitting — and the morning "smoker's cough" subsides with it.`},
]},
];
