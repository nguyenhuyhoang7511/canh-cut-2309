const STORAGE_KEY = 'ghl-birthday-gift-choice'

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
