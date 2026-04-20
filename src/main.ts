import './styles/base.css'
import './styles/header.css'
import './styles/main.css'
import './styles/pages.css'
import './styles/shared.css'
import './styles/footer.css'

import { resources, categories, difficultyColors, categoryColors } from './data/resources'
import { store } from './state/store'
import * as storage from './utils/storage'
import { showToast, showHelpModal, closeHelpModal } from './utils/ui'
import type { Resource } from './data/resources'

function getAllResources(): Resource[] {
  return [...resources, ...store.submittedResources]
}

function isBookmarked(id: number): boolean {
  return store.bookmarks.includes(id)
}

function toggleBookmark(id: number) {
  if (store.bookmarks.includes(id)) {
    store.bookmarks = store.bookmarks.filter(b => b !== id)
  } else {
    store.bookmarks.push(id)
  }
  storage.saveBookmarks()
  renderResources()
}

function setRating(id: number, rating: number) {
  store.ratings[id] = rating
  storage.saveRatings()
  renderResources()
}

function getRating(id: number): number {
  return store.ratings[id] || 0
}

function incrementVisit(id: number) {
  store.visitCounts[id] = (store.visitCounts[id] || 0) + 1
  storage.saveVisitCounts()
}

function getVisits(id: number): number {
  return store.visitCounts[id] || 0
}

function filterResources() {
  let filtered = getAllResources()
  if (store.activeCategory !== "All") {
    filtered = filtered.filter(r => r.category === store.activeCategory)
  }
  if (store.searchQuery) {
    const query = store.searchQuery.toLowerCase()
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(query) || 
      r.description.toLowerCase().includes(query)
    )
  }
  return filtered
}

function renderResources() {
  const grid = document.getElementById("resource-grid")
  if (!grid) return
  
  const filtered = filterResources()
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
      <p>No resources found</p>
      <p class="subtitle">Try adjusting your search or category</p>
    </div>`
    return
  }
  
  grid.innerHTML = filtered.map((r, i) => `
    <div class="resource-card" style="animation-delay: ${i * 0.05}s">
      <div class="card-header">
        <span class="category-tag" style="background: ${categoryColors[r.category]}20; color: ${categoryColors[r.category]}">${r.category}</span>
        <button class="bookmark-btn ${isBookmarked(r.id) ? 'active' : ''}" data-id="${r.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isBookmarked(r.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <h3>${r.title}</h3>
      <p class="description">${r.description}</p>
      <div class="rating-row">
        <div class="stars" data-id="${r.id}">
          ${[1,2,3,4,5].map(n => `
            <svg class="star ${getRating(r.id) >= n ? 'filled' : ''}" data-rating="${n}" width="18" height="18" viewBox="0 0 24 24" fill="${getRating(r.id) >= n ? '#f59e0b' : 'none'}" stroke="${getRating(r.id) >= n ? '#f59e0b' : 'currentColor'}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          `).join('')}
        </div>
        <span class="visit-count">${getVisits(r.id)} visits</span>
      </div>
      <div class="card-footer">
        <span class="difficulty" style="color: ${difficultyColors[r.difficulty]}; background: ${difficultyColors[r.difficulty]}20">${r.difficulty}</span>
        <a href="${r.url}" target="_blank" class="visit-btn" data-visit="${r.id}">Visit Resource →</a>
      </div>
    </div>
  `).join("")
  
  document.querySelectorAll(".bookmark-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const id = parseInt((btn as HTMLButtonElement).dataset.id || "0")
      toggleBookmark(id)
    })
  })
  
  document.querySelectorAll(".stars").forEach(starContainer => {
    starContainer.querySelectorAll(".star").forEach(star => {
      star.addEventListener("click", (e) => {
        e.preventDefault()
        const id = parseInt((starContainer as HTMLElement).dataset.id || "0")
        const rating = parseInt((star as HTMLElement).dataset.rating || "0")
        setRating(id, rating)
      })
    })
  })
  
  document.querySelectorAll(".visit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt((btn as HTMLAnchorElement).dataset.visit || "0")
      incrementVisit(id)
    })
  })
}

function renderBookmarksPage() {
  const grid = document.getElementById("resource-grid")
  if (!grid) return
  
  const bookmarked = getAllResources().filter(r => store.bookmarks.includes(r.id))
  
  if (bookmarked.length === 0) {
    grid.innerHTML = `<div class="no-results">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
      <p>No bookmarks yet</p>
      <p class="subtitle">Click the bookmark icon on any resource to save it</p>
    </div>`
    return
  }
  
  grid.innerHTML = bookmarked.map((r, i) => `
    <div class="resource-card" style="animation-delay: ${i * 0.05}s">
      <div class="card-header">
        <span class="category-tag" style="background: ${categoryColors[r.category]}20; color: ${categoryColors[r.category]}">${r.category}</span>
        <button class="bookmark-btn active" data-id="${r.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      <h3>${r.title}</h3>
      <p class="description">${r.description}</p>
      <div class="card-footer">
        <span class="difficulty" style="color: ${difficultyColors[r.difficulty]}; background: ${difficultyColors[r.difficulty]}20">${r.difficulty}</span>
        <a href="${r.url}" target="_blank" class="visit-btn">Visit Resource →</a>
      </div>
    </div>
  `).join("")
  
  document.querySelectorAll(".bookmark-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const id = parseInt((btn as HTMLButtonElement).dataset.id || "0")
      toggleBookmark(id)
    })
  })
}

function handleSubmitResource(e: Event) {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  
  const newResource: Resource = {
    id: Date.now(),
    title: formData.get("title") as string,
    url: formData.get("url") as string,
    category: formData.get("category") as string,
    difficulty: formData.get("difficulty") as string,
    description: formData.get("description") as string
  }
  
  store.submittedResources.push(newResource)
  storage.saveSubmittedResources()
  form.reset()
  
  showToast("Resource submitted successfully!")
}

function setActivePage(page: string) {
  const mainContent = document.getElementById("main-content")
  if (!mainContent) return
  
  if (page === "home") {
    mainContent.innerHTML = `
      <section class="hero-section">
        <div class="hero-content">
          <h1>Your Gateway to Development Knowledge</h1>
          <p class="subtitle">Curated resources to help you become a better developer</p>
          <div class="quick-categories">
            ${categories.slice(1).map(cat => `<button class="quick-cat-btn" data-category="${cat}">${cat}</button>`).join("")}
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
          ${categories.map(cat => `
            <button class="category-tab ${store.activeCategory === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>
          `).join("")}
        </div>
      </section>
      <section class="resources-section">
        <div id="resource-grid" class="resource-grid"></div>
      </section>
    `
  } else if (page === "bookmarks") {
    mainContent.innerHTML = `
      <section class="bookmarks-section">
        <h1>Your Bookmarks</h1>
        <p class="subtitle">Saved resources for later</p>
        <div id="resource-grid" class="resource-grid"></div>
      </section>
    `
    renderBookmarksPage()
    return
  } else if (page === "submit") {
    mainContent.innerHTML = `
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
                ${categories.slice(1).map(cat => `<option value="${cat}">${cat}</option>`).join("")}
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
    `
    document.getElementById("submit-form")?.addEventListener("submit", handleSubmitResource)
    return
  } else if (page === "about") {
    mainContent.innerHTML = `
      <section class="about-section">
        <h1>About DevHub</h1>
        <div class="about-content">
          <div class="about-card">
            <h3>🎯 Mission</h3>
            <p>DevHub helps future development students by curating the best free resources for learning programming.</p>
          </div>
          <div class="about-card">
            <h3>📚 Resources</h3>
            <p>We curate ${resources.length}+ high-quality resources covering Frontend, Backend, DevOps, Databases, Tools, and Career topics.</p>
          </div>
          <div class="about-card">
            <h3>🤝 Contribute</h3>
            <p>Found a great resource? Submit it directly through the app!</p>
            <button class="submit-link-btn" data-page="submit">Submit Resource →</button>
          </div>
        </div>
      </section>
    `
    document.querySelector(".submit-link-btn")?.addEventListener("click", () => navigate("submit"))
    return
  }
  
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      store.activeCategory = (tab as HTMLButtonElement).dataset.category || "All"
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"))
      tab.classList.add("active")
      renderResources()
    })
  })
  
  document.querySelectorAll(".quick-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = (btn as HTMLButtonElement).dataset.category || "All"
      store.activeCategory = cat
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"))
      document.querySelector(`[data-category="${cat}"]`)?.classList.add("active")
      renderResources()
      document.getElementById("resource-grid")?.scrollIntoView({ behavior: "smooth" })
    })
  })
  
  const searchInput = document.getElementById("search-input") as HTMLInputElement
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      store.searchQuery = (e.target as HTMLInputElement).value
      renderResources()
    })
  }
  
  renderResources()
}

function navigate(page: string) {
  document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"))
  document.querySelector(`[data-page="${page}"]`)?.classList.add("active")
  setActivePage(page)
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
      e.preventDefault()
      document.getElementById("search-input")?.focus()
    }
    if (e.key === "?" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
      e.preventDefault()
      showHelpModal()
    }
    if (e.key === "Escape") {
      closeHelpModal()
      ;(document.activeElement as HTMLElement)?.blur()
    }
    if (e.key >= "1" && e.key <= "7" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
      const idx = parseInt(e.key) - 1
      if (idx < categories.length) {
        store.activeCategory = categories[idx]
        document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"))
        document.querySelector(`[data-category="${categories[idx]}"]`)?.classList.add("active")
        renderResources()
      }
    }
  })
}

const themeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon">
  <circle cx="12" cy="12" r="5"></circle>
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
</svg>`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
          ${themeIcon}
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
`

storage.loadTheme()
storage.loadBookmarks()
storage.loadSubmittedResources()
storage.loadRatings()
storage.loadVisitCounts()
setActivePage("home")
setupKeyboardShortcuts()

document.getElementById("theme-toggle")?.addEventListener("click", storage.toggleTheme)
document.getElementById("shortcut-hint")?.addEventListener("click", showHelpModal)

document.querySelectorAll(".nav-link, .logo").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const page = (link as HTMLAnchorElement).dataset.page || "home"
    navigate(page)
  })
})