/* ===================== CONTENT — Food Preservation LESSON 2 of 2 (PYP5 Science) =====================
   Encoded from "Preservation 2 of 2.pptx" (13 slides) + notes, and the "Mixed bag" tiered worksheet.
   Flow (TLAG): flipped recall → outcomes → We Do sorting organiser → class consolidation →
   station inquiry → progress-check scenarios → discussion → tiered independent worksheet →
   certificate → water-activity case study. ================================================ */

/* ----- FLIPPED RECALL (slides 2–3): 4 questions. Used as the entry "pre-test" that places the path. ----- */
var PRETEST=[
  {q:"Raisins and banana chips are preserved by:",
   options:["Freezing","Drying","Canning","Pickling"],answer:1},
  {q:"Freezing slows spoilage because it:",
   options:["Removes air","Adds salt","Lowers the temperature so microorganisms grow slowly","Adds sugar"],answer:2},
  {q:"Which factor is removed when food is vacuum-sealed?",
   options:["Moisture","Air / oxygen","Temperature","Sugar"],answer:1},
  {q:"Pickles last a long time because the vinegar or brine:",
   options:["Makes the food sweeter","Adds more water","Keeps the food warm","Changes the medium so microorganisms cannot grow"],answer:3}
];

/* ----- LEARNING OUTCOMES (slide 4) ----- */
var OUTCOME={
  will:["Explain the principle behind preservation techniques.","Justify the importance of food preservation."],
  points:[
    "Microorganisms need moisture, warmth, air and the right medium to grow.",
    "Every preservation method removes or blocks one of these.",
    "Moisture — drying, salting, sugaring.",
    "Temperature — freezing, refrigeration, pasteurisation.",
    "Air / oxygen — canning, vacuum sealing, airtight packing.",
    "Medium — pickling, salting, sugaring, preservatives.",
    "Preservation reduces waste, keeps food safe and saves money."
  ]
};

/* ----- WE DO — graphic-organiser SORT (slides 5–6).
   Students place each technique under the correct heading. heading index:
   0 = Removal of moisture, 1 = Removal of optimum temperature,
   2 = Removal of air/oxygen, 3 = Removal of nutrients/medium.
   Some techniques fit more than one heading (accept any listed). ----- */
var SORT={
  intro:"You have read the information cards. Work together to recall your learning and sort each technique under the right heading.",
  routine:["<b>Recall:</b> take turns naming a technique and explaining how it works.","<b>Discuss:</b> decide which heading it belongs under.","<b>Explain:</b> “We placed ___ under ___ because ___.”","<b>Check:</b> use the information cards to check and correct.","Some techniques fit more than one heading — discuss and justify!"],
  headings:["Removal of moisture","Removal of optimum temperature","Removal of air / oxygen","Removal of nutrients / medium"],
  // techniques to place; accept[] lists every heading index that is correct
  items:[
    {t:"Drying",accept:[0]},
    {t:"Salting",accept:[0,3]},
    {t:"Sugaring",accept:[0,3]},
    {t:"Freezing",accept:[1]},
    {t:"Refrigeration",accept:[1]},
    {t:"Pasteurisation",accept:[1]},
    {t:"Canning / Bottling",accept:[2]},
    {t:"Vacuum sealing",accept:[2]},
    {t:"Pickling",accept:[3]},
    {t:"Chemical preservatives",accept:[3]}
  ]
};

/* ----- CLASS CONSOLIDATION of the We Do (slide 6) ----- */
var CONSOLIDATE={
  headings:["Removal of moisture","Removal of optimum temperature","Removal of air / oxygen","Removal of nutrients / medium"],
  columns:[
    ["Drying","Salting","Sugaring"],
    ["Boiling / Pasteurisation","Freezing","Refrigeration"],
    ["Canning","Bottling","Vacuum sealing"],
    ["Pickling","Salting","Sugaring","Chemical preservatives"]
  ],
  note:"Some techniques appear under more than one heading (salting and sugaring remove moisture AND change the medium). What matters is that you can justify your choice."
};

/* ----- STATIONS (slide 7): same four inquiry trays as Lesson 1 ----- */
var STATIONS={
  intro:"At each station: <b>observe</b> the foods and method, then <b>identify</b> the factor that has been removed or blocked.",
  model:"Teacher think-aloud: “Raisins and dried herbs have been dried. Drying removes moisture, so microbes have little water to grow.”",
  techniques:["Drying / Dehydration","Freezing / Refrigeration","Vacuum sealing / Canning / Airtight packaging","Salting / Pickling / Sugaring","Boiling / Pasteurisation"],
  stations:[
    {n:1,techIdx:0,foods:"Dried chillies, dried peas, raisins, banana chips, dried herbs (mint, oregano), sun-dried samples",factor:"Moisture",
     purpose:"Drying removes moisture. Microorganisms have less water available, which limits their growth."},
    {n:2,techIdx:1,foods:"Frozen peas or corn, frozen meat or fish, chilled milk or yogurt",factor:"Optimum temperature",
     purpose:"Freezing / refrigeration lowers the temperature, slowing microbes right down."},
    {n:3,techIdx:2,foods:"Vacuum-packed cheese, canned beans/corn/fruit, packaged chips, vacuum-packed nuts, tetra-packed juice or milk",factor:"Air (oxygen)",
     purpose:"Vacuum sealing / canning / airtight packaging removes or seals out air, so microbes that need oxygen cannot grow."},
    {n:4,techIdx:3,foods:"Pickles (mango, cucumber in vinegar, oil or brine), salted fish or meat, jams and jellies, honey-preserved fruits, sugar-coated amla",factor:"Nutrients / medium",
     purpose:"Salting / pickling / sugaring draws out water and changes the medium, blocking microbes from the food's nutrients."}
  ]
};
var TECH_SUPPORT=[
  ["Drying / Dehydration","Takes away MOISTURE. Microbes need water to grow — remove it and they can't."],
  ["Freezing / Refrigeration","Takes away the right TEMPERATURE. Cold slows microbes down."],
  ["Vacuum sealing / Canning / Airtight","Takes away AIR (oxygen). Many microbes need oxygen."],
  ["Salting / Pickling / Sugaring","Changes the MEDIUM / draws out water with salt, sugar or acid, so microbes can't feed."],
  ["Boiling / Pasteurisation","Uses HEAT to kill microbes already in the food (e.g. milk)."]
];

/* ----- PROGRESS CHECK (slides 8–9): traffic light + two scenario MCQs ----- */
var PROGRESS={
  traffic:[
    ["🟢 Green","All matched — I can explain every choice."],
    ["🟡 Yellow","Most matched — unsure about 1–2."],
    ["🔴 Red","Stuck on several, or can't explain why."]
  ],
  teacherQs:["Which factor does this technique remove or block?","Why can't microorganisms grow now?","Could another technique do the same job?"],
  scenarios:[
    {q:"One group preserves cucumbers in vinegar. Another vacuum-seals food. How do these techniques differ?",
     options:[
       "Both techniques preserve food by heating it.",
       "Vinegar creates acidic conditions (changing the medium), while vacuum sealing removes air / oxygen.",
       "Vinegar removes all moisture, while vacuum sealing adds salt."
     ],answer:1,
     feedback:"Vinegar makes conditions acidic and reduces access to nutrients; vacuum sealing removes air / oxygen. Different factors, same goal."},
    {q:"A fisherman usually preserves fish by salting it. He has no salt today, but he can dry the fish. Could drying also help?",
     options:[
       "Yes — both salting and drying reduce the moisture available for microorganisms.",
       "Yes — both methods lower the temperature of the fish.",
       "No — fish can only be preserved using salt."
     ],answer:0,
     feedback:"Both salting and drying reduce available moisture, so drying can preserve the fish too."}
  ]
};

/* ----- DISCUSSION (slide 10): the jam scenario ----- */
var DISCUSS={
  scenario:"A family opens a jar of jam and leaves it on the kitchen counter. One person says, “The sugar will keep it safe.” Another says, “We should refrigerate it now.”",
  questions:[
    "Whose suggestion is stronger, and why?",
    "How could using more than one preservation method help the jam last longer?",
    "Why is it important to preserve food?"
  ],
  answer:"The second person is stronger. Sugar helps by reducing the water available to microbes, but once the jar is OPEN microbes can enter. Refrigerating slows their growth. Using more than one method together (sugar + refrigeration) protects the jam better and keeps it safe for longer."
};

/* ----- INDEPENDENT — TIERED WORKSHEET (slides 11–12 + "Mixed bag" doc).
   Level 1 = Ready, Level 2 = Steady, Level 3 = Go. Students write full answers in their
   notebooks; the app frames the task, offers a model answer, and a notebook tick. ----- */
var WORKSHEET={
  intro:"Independent work — write your answers in your notebook. Your path sets your starting level; move up whenever you're ready.",
  core:{ // everyone does the quick principle task (slide 12)
    title:"Core task (everyone)",
    items:[
      "Write the principle used for each food: <b>frozen peas</b>, <b>mango pickle</b>.",
      "Give any TWO reasons why food preservation is important."
    ],
    model:"Frozen peas → freezing lowers the temperature and slows microbes. Mango pickle → salt/vinegar changes the medium so microbes can't grow. Importance: keeps food safe to eat for longer; reduces spoilage and waste."
  },
  levels:{
    ready:{ // Level 1 — Recognise & Recall
      label:"Level 1 — Recognise & Recall",
      items:[
        "Complete: “Food preservation means ___.”",
        "Salting helps preserve food by ___.",
        "Canning preserves food by heating it and sealing it in a ___ container.",
        "Preservatives are added to food to ___."
      ],
      model:"Food preservation means slowing or stopping food spoilage. Salting draws water out so microbes can't grow. Canning seals food in an airtight container. Preservatives stop or slow the growth of microbes."
    },
    steady:{ // Level 2 — Explain & Connect
      label:"Level 2 — Explain & Connect",
      items:[
        "Explain how food spoils — what role do microorganisms play?",
        "Choose TWO methods and explain the science: “It preserves food by ___.”",
        "A family wants to keep milk safe for longer before opening. Suggest a method and explain why."
      ],
      model:"Microorganisms grow on food and break it down, causing spoilage. e.g. Drying removes moisture; freezing lowers temperature. Milk → pasteurisation heats it to kill microbes, then sealing keeps new ones out."
    },
    go:{ // Level 3 — Apply, Analyse & Justify
      label:"Level 3 — Apply, Analyse & Justify",
      items:[
        "<b>Lunchbox challenge:</b> rice smells odd, apple is brown, sandwich is damp. Give two signs of spoilage, the conditions that caused it, and one action to prevent it — with the science.",
        "Store dry nuts to reduce air and moisture — suggest a HOME method and an INDUSTRIAL method, and explain.",
        "Justify TWO reasons food preservation matters to people or communities, with an example.",
        "<b>Challenge:</b> if microbes need water, why does lots of sugar preserve jam, but a little added water makes it spoil faster?"
      ],
      model:"Sugar binds the free water (lowers water activity) so microbes can't use it. Adding a little water raises the free water again, giving microbes what they need — so it spoils faster."
    }
  }
};

/* ----- CASE STUDY: Water Activity & Food Preservation (after the certificate) ----- */
var CASE={
  intro:[
    "<b>Water content</b> is ALL the water in a food. But microbes can only use the <b>free</b> water — measured by <b>water activity (a<sub>w</sub>)</b>.",
    "a<sub>w</sub> runs from <b>0 to 1</b> (pure water = 1). The lower the water activity, the harder it is for microbes to grow.",
    "Below about <b>a<sub>w</sub> 0.60, almost no microbes grow.</b> A food can feel moist but still be safe — what matters is the <i>free</i> water.",
    "This is why <b>drying, salting and sugaring</b> work: they lower water activity by removing or binding free water."
  ],
  table:[
    ["Macaroni",10,0.45],["Fresh meat",70,0.985],["Dried vegetables",5,0.2],["Rice",16,0.8],
    ["Breakfast cereal",5,0.2],["Bread",40,0.86],["Biscuits",5,0.2],["Milk",3.5,0.11],
    ["Marmalade",35,0.86],["Toffee",8,0.6],["Nuts",18,0.65],["Potato crisps",1.5,0.08]
  ],
  check:{
    q:"Using water activity, which food would microbes find HARDEST to grow in?",
    options:["Fresh meat (a_w 0.985)","Bread (a_w 0.86)","Potato crisps (a_w 0.08)","Rice (a_w 0.8)"],answer:2,
    feedback:"<b>Potato crisps (0.08)</b> — the lowest water activity, so the least free water. Fresh meat (0.985) is easiest to spoil."
  },
  surprise:"A food can have LOW water content but it's the water ACTIVITY that decides spoilage. Moisture also moves from high-a_w to low-a_w, which is why biscuits go soft in humid air."
};

/* ----- PUSH-YOURSELF quiz: pass to earn the Challenge badge ----- */
var PUSH_QUIZ=[
  {q:"Pickling in oil AND vinegar can remove more than one condition. Which TWO does it mainly affect?",
   multi:true,options:["Air (oxygen)","Light","Nutrients / acidity microbes can't survive","Gravity"],answer:[0,2]},
  {q:"A food is vacuum-sealed AND frozen. Why might this keep it safe even longer than one method alone?",
   options:["It looks nicer","Two conditions are removed at once — air AND warmth","Freezing adds nutrients","Vacuum adds moisture"],answer:1},
  {q:"Which statement is the best scientific generalisation?",
   options:["All food lasts forever if frozen","To preserve food you remove or limit at least one condition microbes need","Salt is the only real preservative","Microbes don't need anything to grow"],answer:1}
];

/* ----- READY / STEADY / GO help cards ----- */
var CARDS={
  ready:{title:'Ready card',move:'start simple · one step · use a frame',items:[
    'Name the technique and the ONE factor it removes.',
    'Use: “___ removes ___, so microbes cannot ___.”',
    'The four factors: moisture, temperature, air, medium.']},
  steady:{title:'Steady card',move:'explain the principle · link cause & effect',items:[
    'Name the factor removed AND explain WHY microbes stop.',
    'Use “because…” to connect the method to the effect.',
    'Check: does your answer mention microorganisms?']},
  go:{title:'Go card',move:'what-if · more than one factor · generalise',items:[
    'Find a method that removes MORE THAN ONE condition — explain both.',
    'What if only one factor were removed — would it still spoil?',
    'Write a rule for preserving ANY food.']}
};
