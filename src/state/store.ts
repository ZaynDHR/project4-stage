import type { Resource } from '../data/resources'

let bookmarks: number[] = []
let activeCategory = "All"
let searchQuery = ""
let currentTheme = "dark"
let submittedResources: Resource[] = []
let ratings: Record<number, number> = {}
let visitCounts: Record<number, number> = {}

export const store = {
  get activeCategory() { return activeCategory },
  set activeCategory(v: string) { activeCategory = v },
  get searchQuery() { return searchQuery },
  set searchQuery(v: string) { searchQuery = v },
  get currentTheme() { return currentTheme },
  set currentTheme(v: string) { currentTheme = v },
  get bookmarks() { return bookmarks },
  set bookmarks(v: number[]) { bookmarks = v },
  get ratings() { return ratings },
  set ratings(v: Record<number, number>) { ratings = v },
  get visitCounts() { return visitCounts },
  set visitCounts(v: Record<number, number>) { visitCounts = v },
  get submittedResources() { return submittedResources },
  set submittedResources(v: Resource[]) { submittedResources = v }
}