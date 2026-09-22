const STORAGE_KEY = 'ghl-birthday-gift-choice'
const OPENED_KEY = 'ghl-birthday-opened-gifts'

export function loadOpenedGifts() {
  try {
    const raw = window.localStorage.getItem(OPENED_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveOpenedGifts(openedGiftIds) {
  try {
    window.localStorage.setItem(OPENED_KEY, JSON.stringify(openedGiftIds))
  } catch {
    // localStorage unavailable — skip persistence
  }
}

export function clearOpenedGifts() {
  try {
    window.localStorage.removeItem(OPENED_KEY)
  } catch {
    // localStorage unavailable — skip persistence
  }
}

export function loadGiftChoice() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw)
    return typeof parsed.giftId === 'string' ? parsed.giftId : null
  } catch {
    return null
  }
}

export function saveGiftChoice(giftId) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ giftId, selectedAt: new Date().toISOString() }),
    )
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — skip persistence
  }
}

export function clearGiftChoice() {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — skip persistence
  }
}
