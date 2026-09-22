const state = { lang: localStorage.getItem("portfolio-lang") || "pt", history: [], historyIndex: -1 };

const data = {
  pt: {
    whoami: `
      <div class="hero">
        <div class="kicker">/usr/bin/whoami</div>
        <h1>JULIANO <span>POLI</span></h1>
        <div class="role">Profissional de Cibersegurança · AppSec · Red Team</div>
        <p>Profissional de Cibersegurança com foco em Application Security e Red Team, com mais de 7 anos de atuação na área. A trajetória combina segurança ofensiva, engenharia de segurança, automação e construção de soluções próprias.</p>
        <div class="tags">
          <span class="tag">APPLICATION SECURITY</span><span class="tag">RED TEAM</span><span class="tag">PENTEST</span>
          <span class="tag">SECURITY ENGINEERING</span><span class="tag">AUTOMAÇÃO</span><span class="tag">PYTHON</span>
        </div>
      </div>
      <div class="grid">
        <div class="card"><div class="meta">CURRENT</div><h3>Loft</h3><p>Experiência profissional atual registrada no perfil público, com atuação na área de tecnologia e segurança.</p></div>
        <div class="card"><div class="meta">PUBLIC PROFILE</div><h3>Mais de 7 anos em Cybersecurity</h3><p>Experiência construída em segurança de aplicações, segurança ofensiva, análise de vulnerabilidades e engenharia.</p></div>
      </div>`,
    career: `
      <div class="kicker">$ cat ./carreira.log</div><h2 class="section-title">Carreira</h2>
      <p class="section-sub">Trajetória profissional em desenvolvimento de software, QA, segurança da informação, AppSec e engenharia de segurança.</p>
      <div class="timeline">
        <div class="timeline-item"><div class="date">SET/2025 — ATUAL · LOFT</div><h3>Application Security Specialist</h3><p>Segurança ofensiva com testes manuais de exploração de vulnerabilidades em aplicações web; implementação de rotinas de scan em esteiras CI/CD; criação de ferramentas internas para segurança de aplicações; e desenvolvimento de soluções baseadas em Inteligência Artificial para Cybersegurança.</p></div>
        <div class="timeline-item"><div class="date">NOV/2024 — SET/2025 · 11 MESES · CONTABILIZEI</div><h3>Senior Application Security Engineer</h3><p>Revisão de modelos de arquitetura de software; criação de fluxo de SSDLC e gestão de vulnerabilidades; desenvolvimento de soluções de Cybersegurança, incluindo SAST e DLP; Pentest em aplicações Web; análise e identificação de vulnerabilidades; e criação de soluções baseadas em IA.</p></div>
        <div class="timeline-item"><div class="date">MAI/2023 — NOV/2024 · 1 ANO 7 MESES · MERCADO LIVRE</div><h3>Cybersecurity Engineer</h3><p>Criação de arquiteturas de software para soluções de segurança da informação; desenvolvimento de aplicações de Cibersegurança em API, BackEnd e FrontEnd; integrações e soluções baseadas em IA; gestão de ferramentas DLP; e gerenciamento de soluções de segurança em Google Cloud.</p></div>
        <div class="timeline-item"><div class="date">JUN/2021 — MAI/2023 · 2 ANOS · CONTABILIZEI</div><h3>Cyber Security Engineer</h3><p>Atuação em AppSec, Pentest e desenvolvimento de exploits para Web, Infra, Embarcado e Mobile; análise e gestão de vulnerabilidades com OWASP, MITRE e CVSS; scripts e PoCs de Cybersegurança; gestão de incidentes; implementação, manutenção e gestão de SOC; CloudSec em Google Cloud; soluções de borda com Azion e Cloudflare; documentação técnica; arquitetura, implementação e manutenção de SAST e DAST; desenvolvimento de software de segurança em Python, Ruby, JS, SH, HTML/CSS e Go; e integração/manutenção de soluções Open Source.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">PROJETOS: Contabilizei Platform · Contabilizei Autopilot · Contabilizei App · Contabilizei Bank</p></div>
        <div class="timeline-item"><div class="date">FEV/2021 — MAI/2021 · 4 MESES · COMPASSO UOL</div><h3>Information Security Analyst</h3><p>Atuação em Segurança da Informação, com competências públicas associadas a Python e OWASP.</p></div>
        <div class="timeline-item"><div class="date">FEV/2021 — MAI/2021 · 4 MESES · VIVO (TELEFÔNICA BRASIL)</div><h3>Information Security Analyst · Terceirizado</h3><p>Atuação em Segurança da Informação, com competências públicas associadas a Python e OWASP.</p></div>
        <div class="timeline-item"><div class="date">JUL/2020 — FEV/2021 · 8 MESES · COMPASSO UOL</div><h3>QA Automation Engineer</h3><p>Atuação em automação de testes, com competências públicas associadas a Python e Arquitetura de Segurança de Aplicativos.</p></div>
        <div class="timeline-item"><div class="date">AGO/2020 — FEV/2021 · 7 MESES · TORO INVESTIMENTOS</div><h3>QA Automation Engineer · Terceirizado</h3><p>Na Pi Investimentos, desenvolvimento de cenários e automações de testes, contribuindo para o planejamento do projeto com foco na prevenção de incidentes pós-implementação.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">TECNOLOGIAS: BDD · TDD · JavaScript · Cypress · Mocha · Chai · Axios · Node.js · GitLab</p></div>
        <div class="timeline-item"><div class="date">MAR/2018 — JUL/2020 · 2 ANOS 5 MESES · CRIATIVITTA-WEB STUDIO</div><h3>Ruby on Rails Developer</h3><p>Desenvolvimento, implementação e manutenção de aplicações web.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">TECNOLOGIAS: Ruby on Rails · HTML/CSS · JS · jQuery · Bootstrap · Apache/Debian · SQL · cPanel</p></div>
      </div>`,
    education: `
      <div class="kicker">$ cat ./formacao</div><h2 class="section-title">Formação</h2>
      <p class="section-sub">Formação acadêmica e técnica com foco em computação e cibersegurança.</p>
      <div class="grid">
        <div class="card"><div class="meta">FIAP</div><h3>Defesa Cibernética</h3><p>Graduação em Defesa Cibernética. Conclusão registrada no perfil público em 2025.</p></div>
        <div class="card"><div class="meta">HARVARD UNIVERSITY · 2021</div><h3>CS50's Introduction to Computer Science</h3><p>Formação em fundamentos de Ciência da Computação, algoritmos, estruturas de dados, programação, segurança e desenvolvimento web.</p></div>
      </div>`,
    certifications: `
      <div class="kicker">$ ls ./certificacoes</div><h2 class="section-title">Certificações & cursos</h2>
      <p class="section-sub">Credenciais e formações listadas publicamente no perfil profissional.</p>
      <div class="grid">
        ${[
          ["01","Certified Information Security Manager (CISM)","FIAP · jul/2024"],
          ["02","Digital Forensics","Sec4US · fev/2023"],
          ["03","Segurança de aplicações","Alura · jun/2022"],
          ["04","GitLab Certified Associate","GitLab · abr/2021"],
          ["05","Análise de Malware","HackerSec · mar/2021"],
          ["06","Introduction to Cybersecurity","Cisco · mar/2021"],
          ["07","Formação em Cibersegurança","HackerSec · fev/2021"],
          ["08","Veracode Certified Advisor and Professional","Veracode"],
          ["09","Acerto prático de motores de ciclo Otto em dinamômetro","FT Education Brasil · nov/2024"]
        ].map(x=>`<div class="card cert"><div class="cert-index">${x[0]}</div><div><h3>${x[1]}</h3><small>${x[2]}</small></div></div>`).join("")}
      </div>`,
    skills: `
      <div class="kicker">$ ./skills --list</div><h2 class="section-title">Competências</h2>
      <p class="section-sub">Áreas que representam a combinação entre conhecimento ofensivo, AppSec e engenharia.</p>
      <div class="skills">
        ${[["Application Security",94],["Red Team / Pentest",91],["Security Engineering",90],["Vulnerability Management",88],["Python / Automation",90],["Linux / Security Tooling",92],["SAST / Secure SDLC",92],["Security Architecture",82]].map(s=>`<div class="skill"><strong>${s[0]}</strong><div class="bar"><i style="width:${s[1]}%"></i></div></div>`).join("")}
      </div>`,
    projects: `
      <div class="kicker">$ ls -la ./projects</div><h2 class="section-title">Projetos</h2>
      <p class="section-sub">Projetos próprios que demonstram a aplicação prática da experiência em segurança.</p>
      <div class="grid">
        <div class="card"><div class="meta">01 · APPSEC / SAST</div><h3>Mechanism — SAST Framework</h3><p>Framework próprio para análise estática, classificação por regex, filtros de falsos positivos, plugins, geração de findings e integração com fluxo de segurança.</p><button class="ghost-btn project-open" data-project="sast">ABRIR PROJETO →</button></div>
        <div class="card"><div class="meta">02 · DEFENSIVE SECURITY</div><h3>Honeypot & Automated Blocking</h3><p>Arquitetura de honeypot com FastAPI, Redis, workers, logs estruturados e integração com listas de rede para automação de bloqueios.</p><button class="ghost-btn project-open" data-project="honeypot">ABRIR PROJETO →</button></div>
      </div>`,
    contact: `
      <div class="kicker">$ ./contact --public</div><h2 class="section-title">Contato</h2>
      <p class="section-sub">Canais públicos para contato profissional e exploração dos projetos.</p>
      <div class="contact-list">
        <a class="contact-link" href="https://www.linkedin.com/in/julianopoli" target="_blank"><span>LinkedIn</span><span>↗</span></a>
        <a class="contact-link" href="https://github.com/JulianoPoli" target="_blank"><span>GitHub</span><span>↗</span></a>
        <a class="contact-link" href="https://github.com/JulianoPoli/SAST-Main" target="_blank"><span>Mechanism / SAST-Main</span><span>↗</span></a>
      </div>`
  },
  en: {
    whoami: `
      <div class="hero"><div class="kicker">/usr/bin/whoami</div><h1>JULIANO <span>POLI</span></h1>
      <div class="role">Cybersecurity Professional · AppSec · Red Team</div>
      <p>Cybersecurity professional focused on Application Security and Red Team, with more than 7 years of experience. His background combines offensive security, security engineering, automation and building security solutions.</p>
      <div class="tags"><span class="tag">APPLICATION SECURITY</span><span class="tag">RED TEAM</span><span class="tag">PENTEST</span><span class="tag">SECURITY ENGINEERING</span><span class="tag">AUTOMATION</span><span class="tag">PYTHON</span></div></div>
      <div class="grid"><div class="card"><div class="meta">CURRENT</div><h3>Loft</h3><p>Current professional experience listed on the public profile, in technology and security.</p></div><div class="card"><div class="meta">PUBLIC PROFILE</div><h3>7+ years in Cybersecurity</h3><p>Experience across application security, offensive security, vulnerability analysis and engineering.</p></div></div>`,
    career: `<div class="kicker">$ cat ./career.log</div><h2 class="section-title">Career</h2><p class="section-sub">Professional path across software development, QA, information security, AppSec and security engineering.</p><div class="timeline">
      <div class="timeline-item"><div class="date">SEP/2025 — PRESENT · LOFT</div><h3>Application Security Specialist</h3><p>Offensive security with manual exploitation testing in web applications; implementation of security scanning routines in CI/CD pipelines; internal application-security tooling; and AI-based cybersecurity solutions.</p></div>
      <div class="timeline-item"><div class="date">NOV/2024 — SEP/2025 · 11 MONTHS · CONTABILIZEI</div><h3>Senior Application Security Engineer</h3><p>Software architecture review; SSDLC and vulnerability-management workflows; cybersecurity tooling including SAST and DLP; web application pentesting; vulnerability analysis and identification; and AI-based solutions.</p></div>
      <div class="timeline-item"><div class="date">MAY/2023 — NOV/2024 · 1 YEAR 7 MONTHS · MERCADO LIVRE</div><h3>Cybersecurity Engineer</h3><p>Security-software architecture; cybersecurity applications across API, BackEnd and FrontEnd; AI integrations and solutions; DLP tooling management; and Google Cloud security solutions.</p></div>
      <div class="timeline-item"><div class="date">JUN/2021 — MAY/2023 · 2 YEARS · CONTABILIZEI</div><h3>Cyber Security Engineer</h3><p>AppSec; pentesting and exploit development across Web, Infrastructure, Embedded and Mobile; vulnerability analysis and management using OWASP, MITRE and CVSS; security scripts and PoCs; incident management; SOC implementation and management; Google Cloud security; Azion and Cloudflare edge solutions; technical documentation; SAST and DAST architecture and maintenance; cybersecurity software development in Python, Ruby, JS, SH, HTML/CSS and Go; and Open Source integration.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">PROJECTS: Contabilizei Platform · Contabilizei Autopilot · Contabilizei App · Contabilizei Bank</p></div>
      <div class="timeline-item"><div class="date">FEB/2021 — MAY/2021 · 4 MONTHS · COMPASSO UOL</div><h3>Information Security Analyst</h3><p>Information Security work, with publicly listed skills including Python and OWASP.</p></div>
      <div class="timeline-item"><div class="date">FEB/2021 — MAY/2021 · 4 MONTHS · VIVO (TELEFÔNICA BRASIL)</div><h3>Information Security Analyst · Contractor</h3><p>Information Security work, with publicly listed skills including Python and OWASP.</p></div>
      <div class="timeline-item"><div class="date">JUL/2020 — FEB/2021 · 8 MONTHS · COMPASSO UOL</div><h3>QA Automation Engineer</h3><p>QA automation work, with publicly listed skills including Python and Application Security Architecture.</p></div>
      <div class="timeline-item"><div class="date">AUG/2020 — FEB/2021 · 7 MONTHS · TORO INVESTIMENTOS</div><h3>QA Automation Engineer · Contractor</h3><p>At Pi Investimentos, developed test scenarios and test automation, contributing to project planning with a focus on preventing post-implementation incidents.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">TECHNOLOGIES: BDD · TDD · JavaScript · Cypress · Mocha · Chai · Axios · Node.js · GitLab</p></div>
      <div class="timeline-item"><div class="date">MAR/2018 — JUL/2020 · 2 YEARS 5 MONTHS · CRIATIVITTA-WEB STUDIO</div><h3>Ruby on Rails Developer</h3><p>Development, implementation and maintenance of web applications.</p><p style="margin-top:10px;color:#5f7d70;font:10px 'IBM Plex Mono',monospace">TECHNOLOGIES: Ruby on Rails · HTML/CSS · JS · jQuery · Bootstrap · Apache/Debian · SQL · cPanel</p></div></div>`,
    education: `<div class="kicker">$ cat ./education</div><h2 class="section-title">Education</h2><p class="section-sub">Academic and technical education focused on computing and cybersecurity.</p><div class="grid"><div class="card"><div class="meta">FIAP</div><h3>Cyber Defense</h3><p>Bachelor-level degree in Cyber Defense. Completion was publicly announced in 2025.</p></div><div class="card"><div class="meta">HARVARD UNIVERSITY · 2021</div><h3>CS50's Introduction to Computer Science</h3><p>Computer science foundations, algorithms, data structures, programming, security and web development.</p></div></div>`,
    certifications: `<div class="kicker">$ ls ./certifications</div><h2 class="section-title">Certifications & courses</h2><p class="section-sub">Credentials and courses publicly listed on the professional profile.</p><div class="grid">${[
      ["01","Certified Information Security Manager (CISM)","FIAP · Jul/2024"],["02","Digital Forensics","Sec4US · Feb/2023"],["03","Application Security","Alura · Jun/2022"],["04","GitLab Certified Associate","GitLab · Apr/2021"],["05","Malware Analysis","HackerSec · Mar/2021"],["06","Introduction to Cybersecurity","Cisco · Mar/2021"],["07","Cybersecurity Training","HackerSec · Feb/2021"],["08","Veracode Certified Advisor and Professional","Veracode"],["09","Otto cycle engine practical tuning on dynamometer","FT Education Brasil · Nov/2024"]
    ].map(x=>`<div class="card cert"><div class="cert-index">${x[0]}</div><div><h3>${x[1]}</h3><small>${x[2]}</small></div></div>`).join("")}</div>`,
    skills: `<div class="kicker">$ ./skills --list</div><h2 class="section-title">Skills</h2><p class="section-sub">Areas representing the combination of offensive security, AppSec and engineering.</p><div class="skills">${[["Application Security",94],["Red Team / Pentest",91],["Security Engineering",90],["Vulnerability Management",88],["Python / Automation",90],["Linux / Security Tooling",92],["SAST / Secure SDLC",92],["Security Architecture",82]].map(s=>`<div class="skill"><strong>${s[0]}</strong><div class="bar"><i style="width:${s[1]}%"></i></div></div>`).join("")}</div>`,
    projects: `<div class="kicker">$ ls -la ./projects</div><h2 class="section-title">Projects</h2><p class="section-sub">Personal projects demonstrating practical application of security experience.</p><div class="grid"><div class="card"><div class="meta">01 · APPSEC / SAST</div><h3>Mechanism — SAST Framework</h3><p>Custom static-analysis framework with regex classification, false-positive filtering, plugins, findings generation and security workflow integration.</p><button class="ghost-btn project-open" data-project="sast">OPEN PROJECT →</button></div><div class="card"><div class="meta">02 · DEFENSIVE SECURITY</div><h3>Honeypot & Automated Blocking</h3><p>Honeypot architecture using FastAPI, Redis, workers, structured logs and network-list integration for automated blocking.</p><button class="ghost-btn project-open" data-project="honeypot">OPEN PROJECT →</button></div></div>`,
    contact: `<div class="kicker">$ ./contact --public</div><h2 class="section-title">Contact</h2><p class="section-sub">Public channels for professional contact and project exploration.</p><div class="contact-list"><a class="contact-link" href="https://www.linkedin.com/in/julianopoli" target="_blank"><span>LinkedIn</span><span>↗</span></a><a class="contact-link" href="https://github.com/JulianoPoli" target="_blank"><span>GitHub</span><span>↗</span></a><a class="contact-link" href="https://github.com/JulianoPoli/SAST-Main" target="_blank"><span>Mechanism / SAST-Main</span><span>↗</span></a></div>`
  }
};

const projects = {
  sast: {
    pt: `<div class="kicker">$ ./open mechanism</div><h2 class="section-title">Mechanism — SAST Framework</h2><p class="section-sub">Um framework próprio para automatizar análise estática e transformar padrões de código em findings de segurança estruturados.</p><div class="project-code"><span class="green">┌─ pipeline</span>
│ source code
│    ↓
│ file / extension filters
│    ↓
│ regex classifiers
│    ↓
│ false-positive filters
│    ↓
│ plugins + validation
│    ↓
│ JSON findings
│    ↓
└─ DefectDojo / CI-CD</div><div class="grid"><div class="card"><h3>Capacidades</h3><p>Classificação por regex · CWE/CVE · risco · plugins · JSON · Docker · integração com DefectDojo · pipelines.</p></div><div class="card"><h3>Fonte pública</h3><p><a class="inline-link" href="https://github.com/JulianoPoli/SAST-Main" target="_blank">github.com/JulianoPoli/SAST-Main ↗</a></p></div></div>`,
    en: `<div class="kicker">$ ./open mechanism</div><h2 class="section-title">Mechanism — SAST Framework</h2><p class="section-sub">A custom framework that automates static analysis and turns source-code patterns into structured security findings.</p><div class="project-code"><span class="green">┌─ pipeline</span>
│ source code
│    ↓
│ file / extension filters
│    ↓
│ regex classifiers
│    ↓
│ false-positive filters
│    ↓
│ plugins + validation
│    ↓
│ JSON findings
│    ↓
└─ DefectDojo / CI-CD</div><div class="grid"><div class="card"><h3>Capabilities</h3><p>Regex classification · CWE/CVE · risk · plugins · JSON · Docker · DefectDojo · pipelines.</p></div><div class="card"><h3>Public source</h3><p><a class="inline-link" href="https://github.com/JulianoPoli/SAST-Main" target="_blank">github.com/JulianoPoli/SAST-Main ↗</a></p></div></div>`
  },
  honeypot: {
    pt: `<div class="kicker">$ ./open honeypot</div><h2 class="section-title">Honeypot & Automated Blocking</h2><p class="section-sub">Arquitetura defensiva para capturar requisições, registrar telemetria e automatizar o bloqueio de indicadores.</p><div class="project-code"><span class="green">REQUEST</span>
   ↓
FastAPI honeypot
   ↓
structured JSON log
   ↓
Redis queue
   ↓
workers / batching
   ↓
Azion Network List
   ↓
automated blocking</div><div class="grid"><div class="card"><h3>Stack</h3><p>Python · FastAPI · Redis · Docker · Azion · workers · filas · processamento em lote.</p></div><div class="card"><h3>Objetivo</h3><p>Transformar sinais capturados pelo honeypot em eventos estruturados e ações defensivas automatizadas.</p></div></div>`,
    en: `<div class="kicker">$ ./open honeypot</div><h2 class="section-title">Honeypot & Automated Blocking</h2><p class="section-sub">Defensive architecture for capturing requests, collecting telemetry and automating indicator blocking.</p><div class="project-code"><span class="green">REQUEST</span>
   ↓
FastAPI honeypot
   ↓
structured JSON log
   ↓
Redis queue
   ↓
workers / batching
   ↓
Azion Network List
   ↓
automated blocking</div><div class="grid"><div class="card"><h3>Stack</h3><p>Python · FastAPI · Redis · Docker · Azion · workers · queues · batch processing.</p></div><div class="card"><h3>Purpose</h3><p>Turn honeypot signals into structured events and automated defensive actions.</p></div></div>`
  }
};

const commands = ["help","whoami","career","education","certifications","skills","projects","sast","honeypot","contact","clear"];

function render(section="whoami"){
  document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active", n.dataset.command===section));
  const key = section === "about" ? "whoami" : section;
  document.getElementById("screen").innerHTML = data[state.lang][key] || data[state.lang].whoami;
  bindProjectButtons();
  window.scrollTo({top:0,behavior:"smooth"});
}
function project(name){
  document.querySelectorAll(".nav").forEach(n=>n.classList.remove("active"));
  document.getElementById("screen").innerHTML = projects[name][state.lang];
}
function help(){
  const pt = state.lang === "pt";
  document.getElementById("screen").innerHTML = `<div class="kicker">$ help</div><h2 class="section-title">${pt?"Comandos disponíveis":"Available commands"}</h2><p class="section-sub">${pt?"Use o teclado ou clique em um comando.":"Use the keyboard or click a command."}</p><div class="grid">${commands.filter(c=>c!=="clear").map(c=>`<div class="card"><h3>${c}</h3><p>${commandDescription(c)}</p></div>`).join("")}</div>`;
}
function commandDescription(c){
  const pt=state.lang==="pt";
  const d=pt?{help:"Lista os comandos.",whoami:"Abre o perfil profissional.",career:"Mostra a trajetória profissional.",education:"Mostra a formação.",certifications:"Lista certificações e cursos.",skills:"Mostra competências.",projects:"Abre os projetos.",sast:"Detalha o Mechanism.",honeypot:"Detalha o Honeypot.",contact:"Mostra os canais públicos."}:{help:"List commands.",whoami:"Open the professional profile.",career:"Show professional career.",education:"Show education.",certifications:"List certifications and courses.",skills:"Show skills.",projects:"Open projects.",sast:"Show Mechanism details.",honeypot:"Show Honeypot details.",contact:"Show public channels."};
  return d[c]||"";
}
function execute(raw){
  const cmd=raw.trim().toLowerCase();
  if(!cmd)return;
  state.history.push(cmd); state.historyIndex=state.history.length;
  if(cmd==="help") help();
  else if(cmd==="clear"){document.getElementById("screen").innerHTML=""; document.querySelectorAll(".nav").forEach(n=>n.classList.remove("active"))}
  else if(cmd==="sast"||cmd==="honeypot") project(cmd);
  else if(cmd==="about") render("whoami");
  else if(commands.includes(cmd)) render(cmd);
  else document.getElementById("screen").innerHTML=`<div class="kicker">$ ${escapeHtml(cmd)}</div><p class="section-sub">${state.lang==="pt"?"Comando não encontrado. Digite":"Command not found. Type"} <strong>help</strong>.</p>`;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function bindProjectButtons(){document.querySelectorAll(".project-open").forEach(b=>b.addEventListener("click",()=>project(b.dataset.project)))}
function suggestions(){
  document.getElementById("suggestions").innerHTML=commands.map(c=>`<button class="suggestion" type="button" data-cmd="${c}">${c}</button>`).join("");
  document.querySelectorAll(".suggestion").forEach(b=>b.onclick=()=>{document.getElementById("commandInput").value=b.dataset.cmd;execute(b.dataset.cmd);document.getElementById("commandInput").value=""});
}
document.querySelectorAll(".nav").forEach(n=>n.addEventListener("click",()=>execute(n.dataset.command)));
document.getElementById("terminalForm").addEventListener("submit",e=>{e.preventDefault();const i=document.getElementById("commandInput");execute(i.value);i.value=""});
document.getElementById("commandInput").addEventListener("keydown",e=>{
  if(e.key==="ArrowUp"){e.preventDefault();if(state.historyIndex>0){state.historyIndex--;e.target.value=state.history[state.historyIndex]||""}}
  if(e.key==="ArrowDown"){e.preventDefault();if(state.historyIndex<state.history.length-1){state.historyIndex++;e.target.value=state.history[state.historyIndex]||""}else{state.historyIndex=state.history.length;e.target.value=""}}
});
document.getElementById("langBtn").addEventListener("click",()=>{
  state.lang=state.lang==="pt"?"en":"pt"; localStorage.setItem("portfolio-lang",state.lang);
  document.documentElement.lang=state.lang==="pt"?"pt-BR":"en";
  document.getElementById("langBtn").textContent=state.lang==="pt"?"EN":"PT";
  render("whoami"); suggestions();
});
document.documentElement.lang=state.lang==="pt"?"pt-BR":"en";
document.getElementById("langBtn").textContent=state.lang==="pt"?"EN":"PT";
suggestions(); render("whoami");
setTimeout(()=>document.getElementById("boot").classList.add("hide"),2700);
setTimeout(()=>document.getElementById("commandInput").focus(),2800);
