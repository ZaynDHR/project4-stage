import { store } from '../state/store'

export function loadTheme() {
  const saved = localStorage.getItem("devhub-theme")
  if (saved) store.currentTheme = saved
  applyTheme()
}

export function applyTheme() {
  document.documentElement.setAttribute("data-theme", store.currentTheme)
}

export function toggleTheme() {
  store.currentTheme = store.currentTheme === "dark" ? "light" : "dark"
  localStorage.setItem("devhub-theme", store.currentTheme)
  applyTheme()
}

export function loadBookmarks() {
  const saved = localStorage.getItem("devhub-bookmarks")
  if (saved) store.bookmarks = JSON.parse(saved)
}

export function saveBookmarks() {
  localStorage.setItem("devhub-bookmarks", JSON.stringify(store.bookmarks))
}

export function loadRatings() {
  const saved = localStorage.getItem("devhub-ratings")
  if (saved) store.ratings = JSON.parse(saved)
}

export function saveRatings() {
  localStorage.setItem("devhub-ratings", JSON.stringify(store.ratings))
}

export function loadVisitCounts() {
  const saved = localStorage.getItem("devhub-visits")
  if (saved) store.visitCounts = JSON.parse(saved)
}

export function saveVisitCounts() {
  localStorage.setItem("devhub-visits", JSON.stringify(store.visitCounts))
}

export function loadSubmittedResources() {
  const saved = localStorage.getItem("devhub-submitted")
  if (saved) store.submittedResources = JSON.parse(saved)
}

export function saveSubmittedResources() {
  localStorage.setItem("devhub-submitted", JSON.stringify(store.submittedResources))
}