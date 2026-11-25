/* ===== LEARNING OUTCOMES ===== */
function stageOutcome(){
  var will=OUTCOME.will.map(function(w){return '<li>'+esc(w)+'</li>';}).join('');
  var pts=OUTCOME.points.map(function(p){return '<li>'+esc(p)+'</li>';}).join('');
  return '<div class="slide"><div class="slide-head"><span class="gem">1</span><h2>Learning Outcomes</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">By the end of this lesson I will…</span>'+
  '<ul class="pts" style="font-weight:700">'+will+'</ul>'+
  '<details class="qa"><summary>Key ideas</summary><div class="qa-a"><ul class="pts">'+pts+'</ul></div></details>'+
  '<div class="btn-row"><span class="sp"></span><button class="btn" id="outNext">Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* ===== WE DO — graphic-organiser sort ===== */
function stageWeDo(){
  var routine='<ul class="pts">'+SORT.routine.map(function(r){return '<li>'+r+'</li>';}).join('')+'</ul>';
  // headings as drop targets (tap a technique, then tap a heading)
  var heads='<div class="sort-cols">'+SORT.headings.map(function(h,hi){
    return '<div class="sort-col" data-h="'+hi+'"><div class="sort-head">'+esc(h)+'</div><div class="sort-drop" id="drop'+hi+'"></div></div>';
  }).join('')+'</div>';
  var bank='<div class="sort-bank" id="sortBank">'+SORT.items.map(function(it,ii){
    return '<button type="button" class="sort-chip" data-i="'+ii+'">'+esc(it.t)+'</button>';
  }).join('')+'</div>';
  return '<div class="slide"><div class="slide-head teal"><span class="gem">2</span><h2>We Do — Sort the techniques</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">Recall · discuss · justify</span>'+
  '<p style="font-weight:700">How do preservation techniques help food last longer?</p>'+
  '<p>'+esc(SORT.intro)+'</p>'+routine+
  cardTray()+
  '<p style="font-weight:700;margin-top:8px">Tap a technique, then tap the heading it belongs under. (Some fit more than one — pick one you can justify.)</p>'+
  bank+heads+
  '<button class="btn" id="sortCheck">Check my sort</button><div class="fb" id="sortFb"></div>'+
  '<div class="btn-row" id="wedoNextRow" style="display:none"><span class="sp"></span><button class="btn" id="wedoNext">Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* ===== CLASS CONSOLIDATION ===== */
function stageConsolidate(){
  var cols=CONSOLIDATE.headings.map(function(h,i){
    var items=CONSOLIDATE.columns[i].map(function(t){return '<li>'+esc(t)+'</li>';}).join('');
    return '<th>'+esc(h)+'</th>';
  }).join('');
  var maxRows=Math.max.apply(null,CONSOLIDATE.columns.map(function(c){return c.length;}));
  var rows='';
  for(var r=0;r<maxRows;r++){
    rows+='<tr>'+CONSOLIDATE.columns.map(function(c){return '<td>'+(c[r]?esc(c[r]):'')+'</td>';}).join('')+'</tr>';
  }
  return '<div class="slide"><div class="slide-head gold2"><span class="gem">3</span><h2>Class Consolidation</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">The agreed answer</span>'+
  '<p>Compare your group’s sort with the class answer. Correct anything in your notebook.</p>'+
  '<div style="overflow-x:auto"><table class="ctable"><tr>'+cols+'</tr>'+rows+'</table></div>'+
  '<div class="frames"><b>Note:</b> '+esc(CONSOLIDATE.note)+'</div>'+
  '<div class="btn-row"><span class="sp"></span><button class="btn" id="consNext">Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* Only show the support card for the student's chosen path. */
function cardTray(){
  if(S.tier!=='ready') return '';
  var rows=TECH_SUPPORT.map(function(t){return '<li><b>'+esc(t[0])+':</b> '+esc(t[1])+'</li>';}).join('');
  return '<details class="qa support-card"><summary>Support card — what each technique does</summary>'+
    '<div class="qa-a"><ul class="pts">'+rows+'</ul></div></details>';
}

/* ===== STATIONS (We Do inquiry) — photo, technique checklist, VTR, no student answer key ===== */
function stageStations(){
  var techList=STATIONS.techniques;
  var vtr='<div class="vtr-guide"><div class="vtr-title">📓 In your notebook, draw a VTR table (with your teacher):</div>'+
    '<div style="overflow-x:auto"><table class="ctable vtr"><tr><th>Parts</th><th>Purpose</th><th>Complexities</th></tr>'+
    '<tr><td>The <b>technique</b> used at each station</td><td>The <b>principle</b> — which factor is removed and why microbes can’t grow</td><td>Added <b>after discussion</b> with your peers</td></tr></table></div>'+
    '<p class="muted" style="font-size:.85rem;margin:8px 0 0">Fill <b>Parts</b> and <b>Purpose</b> as you visit each station. Leave <b>Complexities</b> until the discussion.</p></div>';
  var stationsHtml=STATIONS.stations.map(function(st){
    var order=shuffledOrder({q:'station'+st.n,options:techList},'tech'+st.n);
    var checklist='<div class="choices tech-list">'+order.map(function(ti,pos){
      return '<button type="button" class="choice tech-opt" data-qi="'+st.n+'" data-oi="'+ti+'"><span class="k">'+String.fromCharCode(65+pos)+'</span><span>'+esc(techList[ti])+'</span></button>';
    }).join('')+'</div>';
    return '<div class="station"><div class="st-head"><span class="st-no">'+st.n+'</span>'+
      '<div class="st-title">Station '+st.n+'</div></div>'+
      '<div class="st-body">'+
      '<p><b>Items at this station:</b> '+esc(st.foods)+'</p>'+
      '<label class="fld">1. Take a photo of the items for your record</label>'+
      '<label class="photo-btn" for="st'+st.n+'photo">📷 Add photo<input type="file" id="st'+st.n+'photo" accept="image/*" capture="environment" hidden></label>'+
      '<div class="photo-prev" id="st'+st.n+'prev"></div>'+
      '<label class="fld">2. Which technique is this? (tick one — then write it in <b>Parts</b>)</label>'+checklist+
      '<label class="fld">3. In your notebook, write the <b>Purpose</b> (the principle) and answer: <b>How do I know?</b></label>'+
      notebookTask('st'+st.n,'Write the Purpose and how you know, then tick.')+
      '</div></div>';
  }).join('');
  return '<div class="slide"><div class="slide-head teal"><span class="gem">4</span><h2>Station Inquiry — We Do</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">Photograph · identify · explain</span>'+
  '<p>'+STATIONS.intro+'</p>'+
  '<div class="frames"><b>How I model it:</b> '+esc(STATIONS.model)+'</div>'+
  vtr+cardTray()+stationsHtml+
  '<div class="btn-row"><span class="sp"></span><button class="btn" id="stNext">Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* ===== PROGRESS CHECK — traffic light + two scenario MCQs ===== */
function stageProgress(){
  var tl=PROGRESS.traffic.map(function(t){return '<div class="tl"><span class="tl-l">'+t[0]+'</span><span>'+esc(t[1])+'</span></div>';}).join('');
  var teacherQs='<ul class="pts">'+PROGRESS.teacherQs.map(function(q){return '<li>'+esc(q)+'</li>';}).join('')+'</ul>';
  var scen=PROGRESS.scenarios.map(function(sc,si){
    var opts=(function(){var order=shuffledOrder(sc,'pc'+si);return '<div class="choices">'+order.map(function(oi,pos){return '<button type="button" class="choice sc'+si+'-opt" data-qi="'+si+'" data-oi="'+oi+'"><span class="k">'+String.fromCharCode(65+pos)+'</span><span>'+esc(sc.options[oi])+'</span></button>';}).join('')+'</div>';})();
    return '<div class="qblock" data-multi="0"><p style="font-weight:700">'+(si+1)+'. '+esc(sc.q)+'</p>'+opts+'</div>';
  }).join('');
  return '<div class="slide"><div class="slide-head gold2"><span class="gem">5</span><h2>Progress Check</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">Be ready — I will visit your group</span>'+
  '<p style="font-weight:700">How confident are you? Pick your colour:</p><div class="tl-wrap">'+tl+'</div>'+
  '<p class="muted" style="font-size:.9rem">Your teacher may ask:</p>'+teacherQs+
  scen+
  '<button class="btn" id="pcCheck">Check</button><div class="fb" id="pcFb"></div>'+
  '<div class="btn-row" id="pcNextRow" style="display:none"><span class="sp"></span><button class="btn" id="pcNext">Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* ===== DISCUSSION — the jam scenario ===== */
function stageDiscuss(){
  var qs=DISCUSS.questions.map(function(q){return '<li>'+esc(q)+'</li>';}).join('');
  return '<div class="slide"><div class="slide-head red"><span class="gem">6</span><h2>Discussion</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">Talk it through · then write</span>'+
  '<div class="story"><p>'+esc(DISCUSS.scenario)+'</p></div>'+
  '<p style="font-weight:700">Discuss with your group, then answer in your notebook:</p><ul class="pts">'+qs+'</ul>'+
  notebookTask('discuss','Write your group’s answers in your notebook, then tick.')+
  '<details class="qa"><summary>Class answer</summary><div class="qa-a">'+esc(DISCUSS.answer)+'</div></details>'+
  '<div class="btn-row" id="discNextRow"><span class="sp"></span><button class="btn" id="discNext" disabled>Next &#8594;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}

/* Go-level content shows for the Go path OR once the Challenge badge is earned. */
function showGo(){ return S.tier==='go' || S.badge; }

/* ===== YOU DO — tiered independent worksheet ===== */
function stageYouDo(){
  // the level shown matches the path; a learner can still open the others
  var curKey = S.tier==='ready'?'ready':S.tier==='go'?'go':'steady';
  function levelCard(key){
    var L=WORKSHEET.levels[key];
    var items='<ul class="pts">'+L.items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul>';
    var open=(key===curKey)?' open':'';
    var mine=(key===curKey)?' mine-level':'';
    return '<details class="qa level-card '+key+mine+'"'+open+'><summary>'+esc(L.label)+(key===curKey?' · your level ★':'')+'</summary>'+
      '<div class="qa-a">'+items+
      '<details class="qa"><summary>Model answer</summary><div class="qa-a">'+esc(L.model)+'</div></details></div></details>';
  }
  // core task everyone does
  var core='<div class="push-box" style="border-color:var(--teal);background:var(--good-soft)"><div class="push-lab" style="color:var(--teal)">Core task — everyone</div>'+
    '<ul class="pts">'+WORKSHEET.core.items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul>'+
    '<details class="qa"><summary>Model answer</summary><div class="qa-a">'+esc(WORKSHEET.core.model)+'</div></details></div>';
  var levels=levelCard('ready')+levelCard('steady')+levelCard('go');
  // push-yourself offer (same as L1): pass → badge → move to Go
  var offer=(!showGo())
    ? '<div class="push-offer"><div><b>Want a challenge?</b> Take a 3-question quiz. Pass it and the Level 3 (Go) tasks open up for you.</div>'+
      '<button class="btn sky" id="pushStart" type="button">Push yourself →</button></div>'
    : '<div class="push-box"><div class="push-lab">⭐ Challenge unlocked — try the Level 3 tasks above.</div></div>';
  return '<div class="slide"><div class="slide-head"><span class="gem">7</span><h2>You Do — Tiered Worksheet</h2></div>'+
  '<div class="slide-body"><span class="stage-pill">Independent · notebook</span>'+
  '<p>'+esc(WORKSHEET.intro)+'</p>'+
  core+
  '<p style="font-weight:700;margin-top:6px">Your level (open the others any time):</p>'+levels+
  offer+
  notebookTask('youdo','Complete your worksheet in your notebook, then tick.')+
  '<div class="btn-row" id="youNextRow"><span class="sp"></span><button class="btn" id="youNext" disabled>Finish &#10003;</button></div>'+
  '<img class="crest" src="'+LOGO+'" alt=""></div></div>';
}
