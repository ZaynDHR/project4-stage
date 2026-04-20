(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,title:`MDN Web Docs`,url:`https://developer.mozilla.org`,category:`Frontend`,difficulty:`Beginner`,description:`The most comprehensive documentation for HTML, CSS, and JavaScript. Essential for every web developer.`},{id:2,title:`freeCodeCamp`,url:`https://www.freecodecamp.org`,category:`Frontend`,difficulty:`Beginner`,description:`Free interactive coding lessons with certifications. Perfect for starting your coding journey.`},{id:3,title:`The Odin Project`,url:`https://www.theodinproject.com`,category:`Frontend`,difficulty:`Beginner`,description:`Full-stack curriculum that's completely free. Learn Ruby, Rails, JavaScript, and more.`},{id:4,title:`React Documentation`,url:`https://react.dev`,category:`Frontend`,difficulty:`Intermediate`,description:`Official React docs with interactive examples. Build modern UIs with the most popular library.`},{id:5,title:`CSS-Tricks`,url:`https://css-tricks.com`,category:`Frontend`,difficulty:`Intermediate`,description:`Tips, tricks, and techniques for CSS. Great for learning modern layout methods like Flexbox and Grid.`},{id:6,title:`Node.js Docs`,url:`https://nodejs.org/docs`,category:`Backend`,difficulty:`Intermediate`,description:`Official Node.js documentation. Learn server-side JavaScript and build scalable applications.`},{id:7,title:`Express.js Guide`,url:`https://expressjs.com`,category:`Backend`,difficulty:`Intermediate`,description:`Fast, unopinionated web framework for Node.js. Build APIs and web servers with ease.`},{id:8,title:`Django Documentation`,url:`https://docs.djangoproject.com`,category:`Backend`,difficulty:`Intermediate`,description:`High-level Python web framework. Great for building robust web applications quickly.`},{id:9,title:`Python.org Docs`,url:`https://docs.python.org`,category:`Backend`,difficulty:`Beginner`,description:`Official Python documentation. The gold standard for learning Python programming.`},{id:10,title:`Docker Documentation`,url:`https://docs.docker.com`,category:`DevOps`,difficulty:`Intermediate`,description:`Container platform for building, shipping, and running applications. Essential DevOps skill.`},{id:11,title:`Git Handbook`,url:`https://docs.github.com/en/get-started/using-git/about-git`,category:`DevOps`,difficulty:`Beginner`,description:`Version control with Git. Track changes and collaborate with other developers effectively.`},{id:12,title:`GitHub Actions`,url:`https://docs.github.com/en/actions`,category:`DevOps`,difficulty:`Intermediate`,description:`Automate your workflow. Build, test, and deploy code directly from GitHub.`},{id:13,title:`MongoDB University`,url:`https://university.mongodb.com`,category:`Databases`,difficulty:`Intermediate`,description:`Free courses on MongoDB. Learn NoSQL database fundamentals and building with documents.`},{id:14,title:`PostgreSQL Docs`,url:`https://www.postgresql.org/docs`,category:`Databases`,difficulty:`Intermediate`,description:`The world's most advanced open source relational database. ACID compliance and SQL power.`},{id:15,title:`SQLZoo`,url:`https://sqlzoo.net`,category:`Databases`,difficulty:`Beginner`,description:`Interactive SQL tutorials. Practice queries in your browser with real databases.`},{id:16,title:`VS Code Tips`,url:`https://code.visualstudio.com/docs/getstarted/tips-and-tricks`,category:`Tools`,difficulty:`Beginner`,description:`Master Visual Studio Code. Boost productivity with keyboard shortcuts and extensions.`},{id:17,title:`GitHub Learning Lab`,url:`https://github.com/skills`,category:`Tools`,difficulty:`Beginner`,description:`Hands-on GitHub skills. Learn version control, GitHub Actions, and more through interactive courses.`},{id:18,title:`LeetCode`,url:`https://leetcode.com`,category:`Career`,difficulty:`Intermediate`,description:`Practice coding problems for interviews. Build skills for technical interviews at top companies.`},{id:19,title:`Tech Interview Handbook`,url:`https://www.techinterviewhandbook.org`,category:`Career`,difficulty:`Intermediate`,description:`Curated interview prep materials. Algorithms, system design, and behavioral questions.`},{id:20,title:`Blind 75`,url:`https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions`,category:`Career`,difficulty:`Advanced`,description:`75 essential LeetCode problems. The most efficient list for interview preparation.`},{id:21,title:`JavaScript.info`,url:`https://javascript.info`,category:`Frontend`,difficulty:`Beginner`,description:`Modern JavaScript tutorial. From basics to advanced topics, everything you need to know.`},{id:22,title:`TypeScript Docs`,url:`https://www.typescriptlang.org/docs`,category:`Frontend`,difficulty:`Intermediate`,description:`Typed JavaScript. Learn TypeScript for better code quality and developer experience.`},{id:23,title:`AWS Documentation`,url:`https://docs.aws.amazon.com`,category:`DevOps`,difficulty:`Advanced`,description:`Cloud computing services. Deploy and scale applications on Amazon's cloud platform.`},{id:24,title:`System Design Primer`,url:`https://github.com/donnemartin/system-design-primer`,category:`Career`,difficulty:`Advanced`,description:`Learn how to design scalable systems. Networking, databases, and architecture patterns.`}],t=[`All`,`Frontend`,`Backend`,`DevOps`,`Databases`,`Tools`,`Career`],n={Beginner:`#10b981`,Intermediate:`#f59e0b`,Advanced:`#7c3aed`},r={Frontend:`#00d9ff`,Backend:`#10b981`,DevOps:`#f59e0b`,Databases:`#ec4899`,Tools:`#8b5cf6`,Career:`#7c3aed`},i=[],a=`All`,o=``,s=`dark`,c=[],l={},u={},d={get activeCategory(){return a},set activeCategory(e){a=e},get searchQuery(){return o},set searchQuery(e){o=e},get currentTheme(){return s},set currentTheme(e){s=e},get bookmarks(){return i},set bookmarks(e){i=e},get ratings(){return l},set ratings(e){l=e},get visitCounts(){return u},set visitCounts(e){u=e},get submittedResources(){return c},set submittedResources(e){c=e}};function f(){let e=localStorage.getItem(`devhub-theme`);e&&(d.currentTheme=e),p()}function p(){document.documentElement.setAttribute(`data-theme`,d.currentTheme)}function m(){d.currentTheme=d.currentTheme===`dark`?`light`:`dark`,localStorage.setItem(`devhub-theme`,d.currentTheme),p()}function h(){let e=localStorage.getItem(`devhub-bookmarks`);e&&(d.bookmarks=JSON.parse(e))}function g(){localStorage.setItem(`devhub-bookmarks`,JSON.stringify(d.bookmarks))}function _(){let e=localStorage.getItem(`devhub-ratings`);e&&(d.ratings=JSON.parse(e))}function v(){localStorage.setItem(`devhub-ratings`,JSON.stringify(d.ratings))}function y(){let e=localStorage.getItem(`devhub-visits`);e&&(d.visitCounts=JSON.parse(e))}function b(){localStorage.setItem(`devhub-visits`,JSON.stringify(d.visitCounts))}function x(){let e=localStorage.getItem(`devhub-submitted`);e&&(d.submittedResources=JSON.parse(e))}function S(){localStorage.setItem(`devhub-submitted`,JSON.stringify(d.submittedResources))}function C(e){let t=document.querySelector(`.toast`);t&&t.remove();let n=document.createElement(`div`);n.className=`toast`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.classList.add(`show`),10),setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>n.remove(),300)},3e3)}function w(){if(document.querySelector(`.help-modal`))return;let e=document.createElement(`div`);e.className=`help-modal`,e.innerHTML=`
    <div class="help-backdrop"></div>
    <div class="help-content">
      <h2>Keyboard Shortcuts</h2>
      <div class="shortcut"><kbd>/</kbd> Focus search</div>
      <div class="shortcut"><kbd>?</kbd> Show shortcuts</div>
      <div class="shortcut"><kbd>Esc</kbd> Close / blur</div>
      <div class="shortcut"><kbd>1-7</kbd> Filter category</div>
      <button class="close-help">Close</button>
    </div>
  `,document.body.appendChild(e),e.querySelector(`.close-help, .help-backdrop`)?.addEventListener(`click`,T)}function T(){document.querySelector(`.help-modal`)?.remove()}function E(){return[...e,...d.submittedResources]}function D(e){return d.bookmarks.includes(e)}function O(e){d.bookmarks.includes(e)?d.bookmarks=d.bookmarks.filter(t=>t!==e):d.bookmarks.push(e),g(),P()}function k(e,t){d.ratings[e]=t,v(),P()}function A(e){return d.ratings[e]||0}function j(e){d.visitCounts[e]=(d.visitCounts[e]||0)+1,b()}function M(e){return d.visitCounts[e]||0}function N(){let e=E();if(d.activeCategory!==`All`&&(e=e.filter(e=>e.category===d.activeCategory)),d.searchQuery){let t=d.searchQuery.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t))}return e}function P(){let e=document.getElementById(`resource-grid`);if(!e)return;let t=N();if(t.length===0){e.innerHTML=`<div class="no-results">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
      <p>No resources found</p>
      <p class="subtitle">Try adjusting your search or category</p>
    </div>`;return}e.innerHTML=t.map((e,t)=>`
    <div class="resource-card" style="animation-delay: ${t*.05}s">
      <div class="card-header">
        <span class="category-tag" style="background: ${r[e.category]}20; color: ${r[e.category]}">${e.category}</span>
        <button class="bookmark-btn ${D(e.id)?`active`:``}" data-id="${e.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${D(e.id)?`currentColor`:`none`}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <h3>${e.title}</h3>
      <p class="description">${e.description}</p>
      <div class="rating-row">
        <div class="stars" data-id="${e.id}">
          ${[1,2,3,4,5].map(t=>`
            <svg class="star ${A(e.id)>=t?`filled`:``}" data-rating="${t}" width="18" height="18" viewBox="0 0 24 24" fill="${A(e.id)>=t?`#f59e0b`:`none`}" stroke="${A(e.id)>=t?`#f59e0b`:`currentColor`}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          `).join(``)}
        </div>
        <span class="visit-count">${M(e.id)} visits</span>
      </div>
      <div class="card-footer">
        <span class="difficulty" style="color: ${n[e.difficulty]}; background: ${n[e.difficulty]}20">${e.difficulty}</span>
        <a href="${e.url}" target="_blank" class="visit-btn" data-visit="${e.id}">Visit Resource →</a>
      </div>
    </div>
  `).join(``),document.querySelectorAll(`.bookmark-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),O(parseInt(e.dataset.id||`0`))})}),document.querySelectorAll(`.stars`).forEach(e=>{e.querySelectorAll(`.star`).forEach(t=>{t.addEventListener(`click`,n=>{n.preventDefault(),k(parseInt(e.dataset.id||`0`),parseInt(t.dataset.rating||`0`))})})}),document.querySelectorAll(`.visit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{j(parseInt(e.dataset.visit||`0`))})})}function F(){let e=document.getElementById(`resource-grid`);if(!e)return;let t=E().filter(e=>d.bookmarks.includes(e.id));if(t.length===0){e.innerHTML=`<div class="no-results">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
      <p>No bookmarks yet</p>
      <p class="subtitle">Click the bookmark icon on any resource to save it</p>
    </div>`;return}e.innerHTML=t.map((e,t)=>`
    <div class="resource-card" style="animation-delay: ${t*.05}s">
      <div class="card-header">
        <span class="category-tag" style="background: ${r[e.category]}20; color: ${r[e.category]}">${e.category}</span>
        <button class="bookmark-btn active" data-id="${e.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <h3>${e.title}</h3>
      <p class="description">${e.description}</p>
      <div class="card-footer">
        <span class="difficulty" style="color: ${n[e.difficulty]}; background: ${n[e.difficulty]}20">${e.difficulty}</span>
        <a href="${e.url}" target="_blank" class="visit-btn">Visit Resource →</a>
      </div>
    </div>
  `).join(``),document.querySelectorAll(`.bookmark-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),O(parseInt(e.dataset.id||`0`))})})}function I(e){e.preventDefault();let t=e.target,n=new FormData(t),r={id:Date.now(),title:n.get(`title`),url:n.get(`url`),category:n.get(`category`),difficulty:n.get(`difficulty`),description:n.get(`description`)};d.submittedResources.push(r),S(),t.reset(),C(`Resource submitted successfully!`)}function L(n){let r=document.getElementById(`main-content`);if(!r)return;if(n===`home`)r.innerHTML=`
      <section class="hero-section">
        <div class="hero-content">
          <h1>Your Gateway to Development Knowledge</h1>
          <p class="subtitle">Curated resources to help you become a better developer</p>
          <div class="quick-categories">
            ${t.slice(1).map(e=>`<button class="quick-cat-btn" data-category="${e}">${e}</button>`).join(``)}
          </div>
        </div>
        <div class="code-animation">
          <pre><code><span class="keyword">const</span> <span class="var">developer</span> = {
  learning: <span class="keyword">true</span>,
  resources: devHub,
  growth: <span class="function">infinite</span>()
}</code></pre>
        </div>
      </section>
      <section class="categories-section">
        <div class="category-tabs">
          ${t.map(e=>`
            <button class="category-tab ${d.activeCategory===e?`active`:``}" data-category="${e}">${e}</button>
          `).join(``)}
        </div>
      </section>
      <section class="resources-section">
        <div id="resource-grid" class="resource-grid"></div>
      </section>
    `;else if(n===`bookmarks`){r.innerHTML=`
      <section class="bookmarks-section">
        <h1>Your Bookmarks</h1>
        <p class="subtitle">Saved resources for later</p>
        <div id="resource-grid" class="resource-grid"></div>
      </section>
    `,F();return}else if(n===`submit`){r.innerHTML=`
      <section class="submit-section">
        <h1>Submit a Resource</h1>
        <p class="subtitle">Share a helpful resource with the community</p>
        <form class="submit-form" id="submit-form">
          <div class="form-group">
            <label for="title">Resource Title</label>
            <input type="text" id="title" name="title" required placeholder="e.g., MDN Web Docs" />
          </div>
          <div class="form-group">
            <label for="url">URL</label>
            <input type="url" id="url" name="url" required placeholder="https://example.com" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="category">Category</label>
              <select id="category" name="category" required>
                ${t.slice(1).map(e=>`<option value="${e}">${e}</option>`).join(``)}
              </select>
            </div>
            <div class="form-group">
              <label for="difficulty">Difficulty</label>
              <select id="difficulty" name="difficulty" required>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" name="description" required placeholder="Describe what this resource offers..." rows="4"></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit Resource</button>
        </form>
      </section>
    `,document.getElementById(`submit-form`)?.addEventListener(`submit`,I);return}else if(n===`about`){r.innerHTML=`
      <section class="about-section">
        <h1>About DevHub</h1>
        <div class="about-content">
          <div class="about-card">
            <h3>🎯 Mission</h3>
            <p>DevHub helps future development students by curating the best free resources for learning programming.</p>
          </div>
          <div class="about-card">
            <h3>📚 Resources</h3>
            <p>We curate ${e.length}+ high-quality resources covering Frontend, Backend, DevOps, Databases, Tools, and Career topics.</p>
          </div>
          <div class="about-card">
            <h3>🤝 Contribute</h3>
            <p>Found a great resource? Submit it directly through the app!</p>
            <button class="submit-link-btn" data-page="submit">Submit Resource →</button>
          </div>
        </div>
      </section>
    `,document.querySelector(`.submit-link-btn`)?.addEventListener(`click`,()=>R(`submit`));return}document.querySelectorAll(`.category-tab`).forEach(e=>{e.addEventListener(`click`,()=>{d.activeCategory=e.dataset.category||`All`,document.querySelectorAll(`.category-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),P()})}),document.querySelectorAll(`.quick-cat-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category||`All`;d.activeCategory=t,document.querySelectorAll(`.category-tab`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-category="${t}"]`)?.classList.add(`active`),P(),document.getElementById(`resource-grid`)?.scrollIntoView({behavior:`smooth`})})});let i=document.getElementById(`search-input`);i&&i.addEventListener(`input`,e=>{d.searchQuery=e.target.value,P()}),P()}function R(e){document.querySelectorAll(`.nav-link`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-page="${e}"]`)?.classList.add(`active`),L(e)}function z(){document.addEventListener(`keydown`,e=>{if(e.key===`/`&&document.activeElement?.tagName!==`INPUT`&&document.activeElement?.tagName!==`TEXTAREA`&&(e.preventDefault(),document.getElementById(`search-input`)?.focus()),e.key===`?`&&document.activeElement?.tagName!==`INPUT`&&document.activeElement?.tagName!==`TEXTAREA`&&(e.preventDefault(),w()),e.key===`Escape`&&(T(),document.activeElement?.blur()),e.key>=`1`&&e.key<=`7`&&document.activeElement?.tagName!==`INPUT`&&document.activeElement?.tagName!==`TEXTAREA`){let n=parseInt(e.key)-1;n<t.length&&(d.activeCategory=t[n],document.querySelectorAll(`.category-tab`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-category="${t[n]}"]`)?.classList.add(`active`),P())}})}var B=`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon">
  <circle cx="12" cy="12" r="5"></circle>
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
</svg>`;document.querySelector(`#app`).innerHTML=`
  <header class="header">
    <div class="header-content">
      <a href="#" class="logo" data-page="home">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <span>DevHub</span>
      </a>
      <nav class="nav">
        <a href="#" class="nav-link active" data-page="home">Home</a>
        <a href="#" class="nav-link" data-page="bookmarks">Bookmarks</a>
        <a href="#" class="nav-link" data-page="submit">Submit</a>
        <a href="#" class="nav-link" data-page="about">About</a>
      </nav>
      <div class="header-actions">
        <div class="shortcut-hint" id="shortcut-hint" title="Press ? for shortcuts">
          <span>Shortcuts</span> <kbd>?</kbd>
        </div>
        <div class="search-container">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input type="text" id="search-input" placeholder="Search resources..." />
        </div>
        <button class="theme-toggle" id="theme-toggle" title="Toggle theme">
          ${B}
        </button>
      </div>
    </div>
  </header>
  <main id="main-content"></main>
  <footer class="footer">
    <div class="footer-content">
      <p>Built to help future developers succeed</p>
      <a href="https://github.com" target="_blank" class="footer-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </footer>
`,f(),h(),x(),_(),y(),L(`home`),z(),document.getElementById(`theme-toggle`)?.addEventListener(`click`,m),document.getElementById(`shortcut-hint`)?.addEventListener(`click`,w),document.querySelectorAll(`.nav-link, .logo`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),R(e.dataset.page||`home`)})});