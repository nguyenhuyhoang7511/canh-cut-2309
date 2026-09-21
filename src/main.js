import './style.css'
import { siteConfig } from './config.js'

function createHearts(count = 18) {
  return Array.from({ length: count }, (_, index) => {
    const left = Math.round(Math.random() * 100)
    const delay = (Math.random() * 6).toFixed(2)
    const duration = (7 + Math.random() * 6).toFixed(2)
    const size = 8 + Math.round(Math.random() * 10)

    return `
      <span
        class="heart"
        style="left:${left}%; bottom:-20px; --delay:${delay}s; --duration:${duration}s; width:${size}px; height:${size}px;"
        aria-hidden="true"
      ></span>
    `
  }).join('')
}

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="relative min-h-screen overflow-hidden">
    <div class="pointer-events-none absolute inset-0" id="hearts">${createHearts()}</div>

    <section class="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p class="animate-fade-up text-sm font-semibold tracking-[0.35em] text-rose-400 uppercase">
        ${siteConfig.occasion}
      </p>
      <h1 class="font-display animate-fade-up delay-1 mt-4 text-6xl leading-tight text-rose-500 sm:text-8xl">
        ${siteConfig.recipientName}
      </h1>
      <p class="animate-fade-up delay-2 mt-6 max-w-xl text-lg text-rose-900/70 sm:text-xl">
        ${siteConfig.tagline}
      </p>
      <p class="animate-fade-up delay-3 mt-10 rounded-full border border-rose-200 bg-white/70 px-5 py-2 text-sm text-rose-500 backdrop-blur">
        From ${siteConfig.senderName}, with love
      </p>
    </section>
  </main>
`
