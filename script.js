// Smooth scroll from hero button
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'});
  });
});

// Modal logic
const win = document.getElementById('window');
const titleEl = document.getElementById('window-title');
const bodyEl = win.querySelector('.content');
win.querySelector('.close').addEventListener('click', ()=> win.classList.remove('open'));

// Replace these with your real content when ready
const sections = {
  'case-files': {
    title: 'Case Files — Projects',
    html: `
      <div class="report">
        <h3>F1 Database Management System</h3>
        <p><strong>Stack:</strong> MySQL, Python</p>
        <p>Relational schema + queries for Formula One data analysis.</p>
        <p><a href="#" target="_blank" rel="noopener">GitHub</a></p>
      </div>
      <div class="report">
        <h3>Near-Earth Asteroid Tracker</h3>
        <p><strong>Stack:</strong> Ruby, HTML/CSS</p>
        <p>Fetches NASA NeoWs data and visualizes daily objects.</p>
      </div>`
  },
  'evidence': { title: 'Evidence — Skills & Tools',
    html: `<ul>
      <li>Languages: Python, Java, C/C++, Ruby, JS/TS</li>
      <li>Web: React, HTML/CSS, APIs</li>
      <li>Data: SQL, Tableau, Excel, ML basics</li>
    </ul>` },
  'recordings': { title: 'Recordings — Experience',
    html: `<p>TA (DSA/CS100) · Aether Intelligence Intern · TEALS TA · ACM-W & F1 leadership.</p>` },
  'photos': { title: 'Photos — Clubs & Hobbies',
    html: `<p>Add images to <code>/assets/evidence</code> and reference them here.</p>` },
  'profile': { title: 'Profile — About Me',
    html: `<p>CS student exploring web, backend & AI. Loves thrillers, coffee, F1, pets, and Genshin.</p>` },
  'contact': { title: 'Terminal — Contact',
    html: `<p>Email: <a href="mailto:you@example.com">you@example.com</a> · GitHub · LinkedIn</p>` }
};

document.querySelectorAll('.folder').forEach(el=>{
  el.addEventListener('click', ()=>{
    const key = el.dataset.open;
    if(!sections[key]) return;
    titleEl.textContent = sections[key].title;
    bodyEl.innerHTML = sections[key].html;
    win.classList.add('open');
  });
});
