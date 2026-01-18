<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title>Santulli Lab</title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2202.7">
  <style type="text/css">
    li.li1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; color: #0000c9; -webkit-text-stroke: #0000c9}
    li.li2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; color: #0000c9}
    span.s1 {-webkit-text-stroke: 0px #000000}
    span.s2 {font-kerning: none}
    span.s3 {font-kerning: none; -webkit-text-stroke: 0px #0000c9}
    ul.ul1 {list-style-type: disc}
  </style>
</head>
<body>
<ul class="ul1">
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// 1. Counter (LocalStorage-based)</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">let count = localStorage.getItem('pageCounter') || 5432;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">count++;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">localStorage.setItem('pageCounter', count);</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">document.addEventListener("DOMContentLoaded", () =&gt; {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>const counterEl = document.getElementById('counter');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>if (counterEl) counterEl.textContent = count;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">});</span></li>
  <li class="li2"><span class="s3"><br>
</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// 2. Books &amp; Chapters Data</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">const books = [</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","ANGIOGENESIS: INSIGHTS FROM A SYSTEMATIC OVERVIEW","Nova Publishers Inc., New York, NY","2013","978-162618114-4",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","ADRENAL GLANDS: FROM PATHOPHYSIOLOGY TO CLINICAL PRACTICE","Nova Publishers Inc.","2015","978-1634835503",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","MICRORNA: FROM MOLECULAR BIOLOGY TO CLINICAL PRACTICE","Springer","2016","978-3319223797; 978-3319237299; 978-331922670-5",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","MITOCHONDRIAL DYNAMICS IN CARDIOVASCULAR MEDICINE","Springer-Nature","2017","978-3-319-55329-0",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","DIET AND METABOLIC DYSFUNCTION","MDPI","2017","978-3038423225; 978-3038423249",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","CARDIOVASCULAR DISEASE AND DIABETES: A JOURNEY FROM BENCH TO BEDSIDE","Frontiers","2019","978-2889459995",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","CARDIOVASCULAR DISEASE: FROM MOLECULAR MECHANISMS TO CLINICAL THERAPIES","MDPI","2021","978-3036509938",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Claudio De Lucia, Christina Maria Pabelick, Yih-Kuen Jan, Gaetano Santulli, Pierre Denise","METHODS AND APPLICATIONS IN CLINICAL AND TRANSLATIONAL PHYSIOLOGY","Frontiers","2023","978-2832520437",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","TRANSLATIONAL ASPECTS OF CARDIOVASCULAR BIOLOGY: FROM BENCH TO BEDSIDE","MDPI","2023","978-303657575-9",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli, Celestino Sardu, Nunzia D’Onofrio","INFLUENCE OF LIFESTYLE FACTORS IN THE MANAGEMENT OF DIABETES MELLITUS","Frontiers Media","2023","978-2-8325-3345-1",""],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Bruno Trimarco, Gaetano Santulli","DIETARY SUPPLEMENTS IN CARDIOVASCULAR AND METABOLIC DISEASES","MDPI","2024","978-372581295-0",""]</span></li>
  <li class="li2"><span class="s3">];</span></li>
  <li class="li2"><span class="s3"><br>
</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">const chapters = [</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","SYMPATHETIC NERVOUS SYSTEM SIGNALING IN HEART FAILURE AND CARDIAC AGING","Pathophysiology and Pharmacotherapy of Cardiovascular Disease. Springer","2015"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli","THE ADRENERGIC SYSTEM IN CARDIOVASCULAR METABOLISM AND AGING","The Cardiovascular Adrenergic System. Springer","2015"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli et al.","ESSENTIAL ROLES OF INTRACELLULAR CALCIUM RELEASE CHANNELS","50th Anniversary of Calcium Channel Research: Biomedical Perspectives. Bentham Science","2015"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Michele Ciccarelli, Daniela Sorriento, Enrico Coscioni, Guido Iaccarino, Gaetano Santulli","ADRENERGIC RECEPTORS","Endocrinology of the Heart in Health and Disease. Elsevier","2016"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Jessica Gambardella, Bruno Trimarco, Guido Iaccarino, Gaetano Santulli","NEW INSIGHTS IN CARDIAC CALCIUM HANDLING AND EXCITATION–CONTRACTION COUPLING","Heart Failure: From Research to Clinical Practice. Springer-Nature","2017"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Daniela Sorriento, Gaetano Santulli et al.","THE N-TERMINAL DOMAIN OF GRK5 INHIBITS CARDIAC HYPERTROPHY THROUGH THE REGULATION OF CA2+/CALMODULIN DEPENDENT TRANSCRIPTION FACTORS","Calcium Signaling in Human Health and Diseases. MDPI","2018"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Gaetano Santulli, Daniel Lewis, Andrew Marks, Joachim Frank","RYANODINE RECEPTOR STRUCTURE AND FUNCTION IN HEALTH AND DISEASE","Membrane-bound Macromolecular Protein Complexes: Structure and Function. Springer-Nature","2018"],</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>["Stanislovas S. Jankauskas, Jessica Gambardella, Urna Kansakar, Scott Wilson, Pasquale Mone, Fahimeh Varzideh, Kwame Donkor, Michael Eacobacci, Ayobami Adebayo, Marco Morelli, John Ferrara, Xujun Wang, Angela Lombardi, Gaetano Santulli","MICRORNA AND DIABETES","MicroRNA: From Bench to Bedside. Elsevier","2022"]</span></li>
  <li class="li2"><span class="s3">];</span></li>
  <li class="li2"><span class="s3"><br>
</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// Render Functions</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// ---------------------------</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">function renderBooks() {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>const list = document.getElementById('books-list');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>if (!list) return;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>books.forEach(b =&gt; {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>const authors = b[0].replace(/Gaetano Santulli/g, '&lt;u&gt;Gaetano Santulli&lt;/u&gt;');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>const li = document.createElement('li');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>li.innerHTML = `&lt;strong class="book-title"&gt;${b[1]}&lt;/strong&gt;&lt;br&gt;&lt;em&gt;${authors}&lt;/em&gt;&lt;br&gt;&lt;strong class="journal"&gt;${b[2]}.&lt;/strong&gt; ${b[3]}.&lt;br&gt;ISBN: ${b[4]}${b[5] ? `&lt;br&gt;DOI: &lt;a href="https://doi.org/${b[5]}" target="_blank"&gt;${b[5]}&lt;/a&gt;` : ''}&lt;br&gt;`;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>list.appendChild(li);</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>});</span></li>
  <li class="li2"><span class="s3">}</span></li>
  <li class="li2"><span class="s3"><br>
</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">function renderChapters() {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>const list = document.getElementById('chapters-list');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>if (!list) return;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>chapters.forEach(c =&gt; {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>const authors = c[0].replace(/Gaetano Santulli/g, '&lt;u&gt;Gaetano Santulli&lt;/u&gt;');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>const li = document.createElement('li');</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>li.innerHTML = `&lt;strong class="book-title"&gt;${c[1]}&lt;/strong&gt;&lt;br&gt;&lt;em&gt;${authors}&lt;/em&gt;&lt;br&gt;&lt;strong class="journal"&gt;${c[2]}.&lt;/strong&gt; ${c[3]}.`;</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">    </span>list.appendChild(li);</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>});</span></li>
  <li class="li2"><span class="s3">}</span></li>
  <li class="li2"><span class="s3"><br>
</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">// Initialize rendering after DOM loaded</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">document.addEventListener("DOMContentLoaded", () =&gt; {</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>renderBooks();</span></li>
  <li class="li1"><span class="s1"></span><span class="s2"><span class="Apple-converted-space">  </span>renderChapters();</span></li>
  <li class="li1"><span class="s1"></span><span class="s2">});</span></li>
</ul>
</body>
</html>
