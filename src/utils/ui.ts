export function showToast(message: string) {
  const existing = document.querySelector(".toast")
  if (existing) existing.remove()
  
  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message
  document.body.appendChild(toast)
  
  setTimeout(() => toast.classList.add("show"), 10)
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

export function showHelpModal() {
  const existing = document.querySelector(".help-modal")
  if (existing) return
  
  const modal = document.createElement("div")
  modal.className = "help-modal"
  modal.innerHTML = `
    <div class="help-backdrop"></div>
    <div class="help-content">
      <h2>Keyboard Shortcuts</h2>
      <div class="shortcut"><kbd>/</kbd> Focus search</div>
      <div class="shortcut"><kbd>?</kbd> Show shortcuts</div>
      <div class="shortcut"><kbd>Esc</kbd> Close / blur</div>
      <div class="shortcut"><kbd>1-7</kbd> Filter category</div>
      <button class="close-help">Close</button>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector(".close-help, .help-backdrop")?.addEventListener("click", closeHelpModal)
}

export function closeHelpModal() {
  document.querySelector(".help-modal")?.remove()
}