import { escapeHtml } from '../lib/html.js'

export function renderResult({ gift }) {
  return `
    <section class="relative mx-auto flex min-h-[100dvh] max-w-xl flex-col items-center justify-center px-6 py-12 text-center">
      <span class="balloon b1">🎈</span>
      <span class="balloon b2">🎈</span>
      <span class="balloon b3">🎈</span>
      <p class="celebrate-badge" style="font-size:18px">🎉 Chúc mừng em nhận quà 🎉</p>
      <p class="animate-fade-up delay-1 mt-2 text-xs font-bold text-brand uppercase" style="letter-spacing:2px">Quà của em</p>
      <div class="result-card animate-fade-up delay-1 mt-6">
        <span class="result-glow"></span>
        <span class="result-emoji">${gift.emoji}</span>
        <h2 class="mt-3 text-2xl font-bold text-brand sm:text-3xl">${escapeHtml(gift.name)}</h2>
        <p class="mt-3 text-sm leading-6 text-ink/75 sm:text-base">${escapeHtml(gift.description)}</p>
      </div>
<button class="reset-gift-btn animate-fade-up delay-2 mt-4" type="button" data-action="reset-gift">
        Đổi ý rồi, chọn lại quà khác
      </button>
    </section>
  `
}
