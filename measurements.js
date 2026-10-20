/* OCR Chemistry A practical-skills revision. Conventions: OCR practical skills handbook,
   https://www.ocr.org.uk/Images/208932-chemistry-practical-skills-handbook.pdf */
(() => {
  "use strict";
  const {B,lesson}=LEARN, previous=LEARN.unit;
  LEARN.unit="measurements";
  LAB.ICONS["u-measure"]=LAB.ICONS["l-measure"]='<path d="M3 7h18v10H3zM6 7v5M10 7v3M14 7v5M18 7v3"/>';
  const add=(id,num,name,intro,outcomes,blocks,onShow)=>lesson({id,num,name,intro,group:"f",icon:"measure",lvl:`Module 1 · Lesson ${num}`,eyebrow:"OCR A Level Chemistry A · Measurements and uncertainties",title:name,outcomes:outcomes.map(t=>[t]),blocks,onShow});
  add("mu1",1,"Measurements, units and significant figures",
    "Record measurements honestly, retain working precision and use consistent chemical units.",
    ["Convert chemical units","Record readings at the apparatus precision","Round a calculated answer appropriately"],[
      B.text("Readings and calculated results",'<p>Record all digits shown on a digital balance. For an analogue scale, record the reading to the precision the scale permits. Burette readings are commonly recorded to the nearest 0.05 cm³, so 12.30 and 12.35 cm³ communicate the intended precision. Use the same decimal-place convention throughout a results column.</p><p>Keep extra digits in working and round the final calculated result to an appropriate number of significant figures, following the question. Leading zeros are not significant; 0.00250 has three significant figures.</p>'),
      B.text("Units before calculation",'<ul><li>1 dm³ = 1000 cm³. In n = cV with c in mol dm⁻³, put V in dm³.</li><li>1 kJ = 1000 J. Match energy units to the equation and constants.</li><li>T / K = θ / °C + 273.15; use the conversion specified in the question when appropriate.</li><li>A temperature <em>change</em> has the same numerical value in K and °C.</li></ul>'),
      B.example("Amount of solute","Find the amount in 25.0 cm³ of 0.100 mol dm⁻³ solution.",[["Convert the volume","",["V = 25.0/1000 = 0.0250 dm³"]],["Use n = cV","",["n = 0.100 × 0.0250 = 0.00250 mol (three significant figures)"]]]),
      B.check([
        {q:"Convert 35.0 cm³ to dm³.",a:.035,tol:0,why:"Divide by 1000: 0.0350 dm³."},
        {q:"Calculate moles in 20.0 cm³ of 0.150 mol dm⁻³ solution.",a:.003,tol:.001,unit:"mol",why:"0.150 × 0.0200 = 0.00300 mol."},
        {q:"How many significant figures are in 0.00250?",a:3,tol:0,why:"2, 5 and the final zero are significant."}
      ])
    ]);
  add("mu2",2,"Errors, resolution and uncertainty",
    "Choose improvements that address the source of uncertainty rather than simply collecting more numbers.",
    ["Distinguish accuracy, precision and resolution","Identify random and systematic errors","Estimate uncertainty from readings"],[
      B.text("What the terms mean",'<ul><li><b>Accuracy:</b> closeness to an accepted or true value.</li><li><b>Precision:</b> closeness of repeated readings to one another.</li><li><b>Resolution:</b> the smallest change an instrument can distinguish.</li><li><b>Uncertainty:</b> an estimated range associated with a measured result.</li></ul><p>Repeated measurements can be precise while sharing a systematic offset. A consistent zero error is not removed by averaging more readings.</p>'),
      B.text("Choosing an uncertainty",'<p>Use the apparatus specification or uncertainty supplied in the question first. A common estimate is half the smallest analogue scale division for a reading and one display increment for a digital instrument. OCR also accepts consistently applied half-resolution approaches in assessment; do not override a stated uncertainty.</p><p>For a set of repeats, half the range can estimate spread where requested. Do not assume this captures calibration error or every uncertainty. More repeats can reduce random uncertainty in a mean, but do not remove a systematic bias.</p>'),
      B.example("A temperature change","A thermometer has an uncertainty of ±0.5 °C per reading. Initial and final temperatures are 19.0 °C and 26.0 °C.",[["Find the change","",["ΔT = 26.0 − 19.0 = 7.0 °C"]],["Combine the two reading uncertainties","",["Absolute uncertainty in ΔT = 0.5 + 0.5 = 1.0 °C"]],["Express as a percentage","",["(1.0/7.0) × 100 ≈ 14%"]]]),
      B.check([
        {q:"Repeated titres are tightly grouped but all shifted by a calibration error. They are…",opts:["necessarily accurate","precise but not necessarily accurate","free of uncertainty","improved by rounding"],a:1,why:"Small spread does not rule out a systematic offset."},
        {q:"What is the half-range of 24.10, 24.20 and 24.30 cm³?",a:.1,tol:0,unit:"cm³",why:"(24.30 − 24.10)/2 = 0.10 cm³."},
        {q:"Does averaging more repeats remove a balance zero error?",opts:["Yes","No"],a:1,why:"Correct or calibrate the balance; averaging does not remove the shared offset."}
      ])
    ]);
  add("mu3",3,"Combining and comparing uncertainties",
    "Use the simple maximum-uncertainty rules required by the question, and identify which measurement most limits the final result.",
    ["Calculate percentage uncertainty","Combine absolute and percentage uncertainties","Distinguish uncertainty from percentage difference"],[
      B.text("The calculation rules",'<p>Percentage uncertainty = (absolute uncertainty / |measured value|) × 100%. For the simple maximum estimates used here:</p><ul><li>When adding or subtracting independent measured quantities, add their absolute uncertainties.</li><li>When multiplying or dividing, add their percentage uncertainties.</li><li>For a power xⁿ, multiply the percentage uncertainty in x by |n|.</li></ul><p>These are first-order maximum estimates for small uncertainties. Statistical propagation may use different rules. Follow the convention stated in the question and account for dependence between quantities.</p>'),
      B.example("Concentration from mass and volume","A solution is made using mass with 0.40% uncertainty and volume with 0.12% uncertainty. Treat molar mass as exact. Estimate the uncertainty in c = m/(MᵣV).",[["Identify the calculation","",["c is proportional to mass and inversely proportional to volume."]],["Add percentage uncertainties","",["0.40 + 0.12 = 0.52%"]]]),
      B.text("Uncertainty is not error against a reference",'<p>Percentage difference from an accepted value is |experimental − accepted|/|accepted| × 100%. It compares two values; it is not automatically the experimental uncertainty. A small percentage difference can occur by chance, and a precise experiment may still have a systematic error.</p>'),
      B.check([
        {q:"A mass difference uses two balance readings, each ±0.01 g. Give its absolute uncertainty in g.",a:.02,tol:0,why:"Add 0.01 + 0.01 = 0.02 g."},
        {q:"For q = mcΔT, m has 1.0% uncertainty and ΔT has 4.0%; treat c as exact. Estimate uncertainty in q as a percentage.",a:5,tol:0,why:"Add the percentage uncertainties: 1.0 + 4.0 = 5.0%."},
        {q:"Which reduces the percentage uncertainty of a titre most directly, if burette reading uncertainty is unchanged?",opts:["Use a smaller titre","Use a larger titre within the apparatus capacity","Record fewer decimal places","Average the rough titre with all others"],a:1,why:"The same absolute uncertainty is a smaller fraction of a larger titre."}
      ])
    ]);
  const controls=B.text("Explore titre uncertainty",'<p>A titre is a difference between two burette readings. Change the titre and the stated uncertainty per reading.</p><div class="two"><label>Titre / cm³ <input id="titre-volume" type="number" min="0.01" step="0.05" value="25.00"></label><label>Uncertainty per reading / cm³ <input id="titre-reading" type="number" min="0.001" step="0.01" value="0.05"></label></div><p id="titre-result" role="status" aria-live="polite"></p>');
  function drawTitre(){ const v=Number(document.getElementById("titre-volume").value),u=Number(document.getElementById("titre-reading").value),out=document.getElementById("titre-result"); out.textContent=Number.isFinite(v)&&Number.isFinite(u)&&v>0&&u>0?`Titre uncertainty = ±${(2*u).toFixed(3)} cm³. Percentage uncertainty = (2 × ${u}/${v}) × 100 = ${(200*u/v).toFixed(2)}%.`:"Enter a positive titre and reading uncertainty."; }
  add("mu4",4,"Titrations, concordance and mean titres",
    "Select consistent accurate runs, keep the rough titre separate and remember that each titre requires two readings.",
    ["Calculate titres from burette readings","Select concordant results","Calculate uncertainty in a titre"],[
      B.text("From readings to a mean",'<p>Titre = final burette reading − initial burette reading. A rough run locates the endpoint and is normally excluded from the accurate mean. Use concordant accurate titres within the stated criterion; 0.10 cm³ is a common criterion, but follow the question or method.</p><p>Keep all original readings in the table and explain exclusions. Do not cherry-pick values to match a desired concentration. Average the selected titres, retaining working precision until the final result.</p>'),
      B.example("Choose the concordant titres","A rough titre is 25.80 cm³. Accurate titres are 25.10, 25.15 and 25.60 cm³. Use a 0.10 cm³ concordance criterion.",[["Select consistent accurate runs","",["25.10 and 25.15 differ by 0.05 cm³; exclude the rough run and investigate the 25.60 result."]],["Calculate the mean","",["Mean = (25.10 + 25.15)/2 = 25.125 cm³","Report approximately 25.13 cm³ to two decimal places; keep 25.125 in subsequent working."]]]),
      controls,
      B.check([
        {q:"Initial reading 1.20 cm³; final reading 26.35 cm³. Find the titre.",a:25.15,tol:0,unit:"cm³",why:"26.35 − 1.20 = 25.15 cm³."},
        {q:"For a titre of 25.00 cm³ and ±0.05 cm³ per reading, find the percentage uncertainty.",a:.4,tol:0,unit:"%",why:"Two readings give ±0.10 cm³; 0.10/25.00 × 100 = 0.40%."},
        {q:"Should a rough titre normally be included in the accurate mean?",opts:["Yes, every reading must be averaged","No; keep it recorded but use the concordant accurate runs"],a:1,why:"The rough run locates the endpoint and is not an accurate titration."}
      ])
    ],drawTitre);
  ["titre-volume","titre-reading"].forEach(id=>document.getElementById(id).addEventListener("input",drawTitre)); drawTitre();
  add("mu5",5,"Graphs, anomalies and evaluating methods",
    "Use the evidence to judge a method, then propose an improvement that addresses a specific limitation.",
    ["Present chemical data clearly","Calculate and interpret a gradient","Evaluate anomalies and systematic effects"],[
      B.text("Tables and graphs",'<p>Put units in column and axis headings. Plot the independent variable horizontally and the dependent variable vertically, using suitable scales. Draw a best-fit line or curve that represents the trend; do not join every point unless the context requires it or force the fit through the origin without justification.</p><p>Find a straight-line gradient using two well-separated points on the line. Its units are vertical-axis units divided by horizontal-axis units. A rate from a curved concentration–time graph is the gradient of the tangent at the chosen time, with the appropriate sign for disappearance or formation.</p>'),
      B.text("Anomalies and limitations",'<p>Investigate an anomalous reading and repeat it where possible. Keep the original result and explain any exclusion. More repeats cannot correct a flawed model or a shared calibration error.</p><ul><li>Calorimetry: heat loss tends to reduce the measured temperature rise and the magnitude of an exothermic enthalpy change. Insulation and a lid can reduce it.</li><li>Gas collection: a leak can reduce the measured gas volume. Check the apparatus is sealed before starting.</li><li>Endpoint overshoot: add titrant dropwise near the endpoint and swirl so each addition reacts fully.</li></ul>'),
      B.example("An enthalpy result","An experiment gives −42.0 kJ mol⁻¹ compared with an accepted −57.0 kJ mol⁻¹. Calculate the percentage difference.",[["Use magnitudes in the comparison","",["|−42.0 − (−57.0)| = 15.0 kJ mol⁻¹"]],["Divide by the accepted magnitude","",["15.0/57.0 × 100 = 26.3%","This is a percentage difference, not a calculated measurement uncertainty."]]]),
      B.check([
        {q:"A graph plots concentration / mol dm⁻³ vertically against time / s horizontally. What are the gradient units?",opts:["mol dm⁻³ s⁻¹","s mol⁻¹ dm³","mol dm⁻³ s","dimensionless"],a:0,why:"Divide the vertical unit by the horizontal unit."},
        {q:"What should you do with an anomalous reading?",opts:["Delete it without comment","Always include it without investigation","Investigate or repeat it and justify any exclusion","Change it to lie on the line"],a:2,why:"Retain a transparent record and use evidence to decide."},
        {q:"How does heat loss usually affect an exothermic calorimetry result?",opts:["Makes ΔH more negative","Makes ΔH less negative","Never affects it","Changes the balanced equation"],a:1,why:"A smaller temperature rise gives a smaller magnitude of energy release."}
      ]),
      B.text("Reference and practical activities",'<p>See the <a href="https://www.ocr.org.uk/Images/208932-chemistry-practical-skills-handbook.pdf" target="_blank" rel="noopener">OCR Chemistry Practical Skills Handbook</a> for measurement conventions and official PAG activity numbers. Activities labelled “adapted” on this site practise the relevant group of skills without claiming an official activity number.</p>')
    ]);
  LEARN.unit=previous;
})();
