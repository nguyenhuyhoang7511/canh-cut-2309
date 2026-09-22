import { escapeHtml } from '../lib/html.js'

function renderGiftCard(gift, { openingGiftId, openedGiftIds, selectedGiftId, canPick }) {
  const isOpening = openingGiftId === gift.id
  const isOpened = openedGiftIds.includes(gift.id)
  const isSelected = selectedGiftId === gift.id
  const isMuted = Boolean(selectedGiftId) && !isSelected

  const stateClass = isSelected
    ? 'is-selected'
    : isMuted
      ? 'is-muted'
      : isOpening
        ? 'is-opening'
        : isOpened
          ? 'is-opened'
          : 'is-idle'

  if (isOpened) {
    const pickButton =
      canPick && !selectedGiftId
        ? `<button class="gift-pick-btn" type="button" data-action="select-gift" data-gift-id="${gift.id}">Chọn quà này</button>`
        : ''

    return `
      <div class="gift-card ${stateClass}" data-gift-id="${gift.id}">
        <div class="gift-reveal">
          ${isSelected ? '<span class="gift-selected-badge">✓ Đã chọn</span>' : ''}
          <span class="gift-reveal-emoji">${gift.emoji}</span>
          <strong class="gift-reveal-name">${escapeHtml(gift.name)}</strong>
          ${pickButton}
        </div>
      </div>
    `
  }

  return `
    <div class="gift-card ${stateClass}" data-gift-id="${gift.id}">
      <button
        class="gift-box-btn"
        type="button"
        data-action="open-gift"
        data-gift-id="${gift.id}"
        ${isOpening ? 'disabled' : ''}
        aria-label="Mở túi quà bí mật"
      >
        <span class="gift-halo"></span>
        <span class="gift-sparkle s1">✦</span>
        <span class="gift-sparkle s2">✧</span>
        <span class="gift-sparkle s3">✦</span>
        <span class="gift-box">🎁</span>
      </button>
    </div>
  `
}

export function renderGifts({ gifts, openedGiftIds, openingGiftId, selectedGiftId }) {
  const allOpened = openedGiftIds.length === gifts.length

  const hint = selectedGiftId
    ? ''
    : allOpened
      ? '<p class="gift-hint is-ready mt-6">Mở hết rồi đó! Giờ chọn lấy 1 túi em thích đi 💙</p>'
      : `<p class="gift-hint mt-6">Đã mở ${openedGiftIds.length}/${gifts.length} túi quà</p>`

  return `
    <section class="mx-auto flex min-h-[100dvh] max-w-3xl flex-col justify-center px-5 py-10 sm:px-6 sm:py-12">
      <button class="gifts-back-btn" type="button" data-action="back">← Quay lại</button>
      <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Chọn quà của em</h2>
      <p class="mt-2 text-sm text-ink/70 sm:text-base">
        Mở hết cả 6 túi xem bên trong có gì, rồi chọn lấy 1 túi ưng nhất nhé.
      </p>
      <div class="gift-grid mt-8">
        ${gifts
          .map((gift) => renderGiftCard(gift, { openingGiftId, openedGiftIds, selectedGiftId, canPick: allOpened }))
          .join('')}
      </div>
      ${hint}
    </section>
  `
}
