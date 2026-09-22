const VALID_STEPS = ['intro', 'memories', 'gate', 'gifts', 'result']

export function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const rawStep = params.get('step')
  const step = VALID_STEPS.includes(rawStep) ? rawStep : 'intro'
  const slideIndex = Number.parseInt(params.get('slide') ?? '0', 10)
  const openedGiftIds = (params.get('opened') ?? '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)

  return {
    step,
    slideIndex: Number.isFinite(slideIndex) && slideIndex >= 0 ? slideIndex : 0,
    openedGiftIds,
  }
}

function buildUrl({ step, slideIndex, openedGiftIds }) {
  if (step === 'intro') {
    return window.location.pathname
  }

  const params = new URLSearchParams()
  params.set('step', step)

  if (step === 'memories') {
    params.set('slide', String(slideIndex))
  }

  if (step === 'gifts' && openedGiftIds.length > 0) {
    params.set('opened', openedGiftIds.join(','))
  }

  return `${window.location.pathname}?${params.toString()}`
}

export function pushUrlState(state) {
  const url = buildUrl(state)
  if (url !== `${window.location.pathname}${window.location.search}`) {
    window.history.pushState(null, '', url)
  }
}

export function replaceUrlState(state) {
  window.history.replaceState(null, '', buildUrl(state))
}
