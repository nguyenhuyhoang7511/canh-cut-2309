import { escapeHtml } from '../lib/html.js'

export function renderResult({ gift }) {
  return `
    <div class="result-page">
      <!-- Decorative stickers -->
      <img class="result-deco result-deco-tr" src="https://marketplace.canva.com/jbg58/MAGXwUjbg58/1/tl/canva-MAGXwUjbg58.png" alt="" aria-hidden="true" />
      <img class="result-deco result-deco-bl" src="https://marketplace.canva.com/BwhH8/MAFO-rBwhH8/1/tl/canva-MAFO-rBwhH8.png" alt="" aria-hidden="true" />
      <img class="result-deco result-deco-br" src="https://marketplace.canva.com/tu3Ec/MAGF6htu3Ec/1/tl/canva-MAGF6htu3Ec.png" alt="" aria-hidden="true" />

      <div class="result-wrap">
        <!-- Badge -->
        <p class="result-badge">🎉 Chúc mừng sinh nhật my baee 🎉</p>

        <!-- Card -->
        <div class="result-card">
          <p class="result-label">Quà của em</p>
          <div class="result-divider"></div>
          <span class="result-emoji">${gift.emoji}</span>
          <h2 class="result-name">${escapeHtml(gift.name)}</h2>
          <p class="result-desc">${escapeHtml(gift.description)}</p>
        </div>

        <button class="reset-gift-btn mt-5" type="button" data-action="reset-gift">
          Đổi ý rồi, chọn lại quà khác
        </button>
      </div>
    </div>
  `
}
