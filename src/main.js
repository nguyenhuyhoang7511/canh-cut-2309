import './style.css'
import { gifts } from './constants/gifts.js'
import { buildSlides } from './constants/slides.js'
import { siteConfig } from './config.js'
import { renderIntro } from './views/intro.js'
import { renderMemories } from './views/memories.js'
import { renderGate } from './views/gate.js'
import { renderGifts } from './views/gifts.js'
import { renderResult } from './views/result.js'
import { loadGiftChoice, saveGiftChoice, clearGiftChoice } from './lib/storage.js'
import { readStateFromUrl, pushUrlState, replaceUrlState } from './lib/router.js'

const slides = buildSlides()
const app = document.querySelector('#app')
const giftIds = gifts.map((gift) => gift.id)

function clampSlideIndex(index) {
  return Math.min(Math.max(index, 0), slides.length - 1)
}

const savedGiftId = loadGiftChoice()
const initialSelectedGiftId = giftIds.includes(savedGiftId) ? savedGiftId : null

const urlState = readStateFromUrl()
const initialStep = urlState.step === 'result' && !initialSelectedGiftId ? 'gifts' : urlState.step

const state = {
  step: initialStep,
  slideIndex: clampSlideIndex(urlState.slideIndex),
  slideDirection: 'forward',
  openedGiftIds: urlState.openedGiftIds.filter((id) => giftIds.includes(id)),
  openingGiftId: null,
  selectedGiftId: initialSelectedGiftId,
  dateError: false,
  dateValue: '',
}

replaceUrlState(state)

function syncUrl() {
  pushUrlState(state)
}

function burstConfetti(target, count = 16) {
  const colors = ['#2596be', '#f7d448', '#7ad0ea', '#ffffff', '#1b7394']
  const rect = target.getBoundingClientRect()

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement('span')
    const angle = (Math.PI * 2 * index) / count
    const distance = 60 + Math.random() * 60

    piece.className = 'confetti'
    piece.style.left = `${rect.left + rect.width / 2}px`
    piece.style.top = `${rect.top + rect.height / 2}px`
    piece.style.background = colors[index % colors.length]
    piece.style.setProperty('--x', `${Math.cos(angle) * distance}px`)
    piece.style.setProperty('--y', `${Math.sin(angle) * distance}px`)
    document.body.append(piece)
    window.setTimeout(() => piece.remove(), 1000)
  }
}

function confettiRain(count = 42) {
  const colors = ['#2596be', '#f7d448', '#7ad0ea', '#ff6b81', '#8ce99a', '#ffffff']

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement('span')
    const delay = Math.random() * 0.7
    const duration = 2.6 + Math.random() * 1.8

    piece.className = 'confetti-rain'
    piece.style.left = `${Math.random() * 100}vw`
    piece.style.background = colors[index % colors.length]
    piece.style.setProperty('--fall-duration', `${duration}s`)
    piece.style.setProperty('--fall-delay', `${delay}s`)
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 140}px`)
    piece.style.setProperty('--spin', `${Math.random() > 0.5 ? 480 : -480}deg`)
    document.body.append(piece)
    window.setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200)
  }
}

function celebrateResult() {
  confettiRain()

  const card = app.querySelector('.result-card')
  if (card) {
    burstConfetti(card, 22)
  }
}

function render() {
  if (state.step === 'intro') {
    app.innerHTML = renderIntro()
    return
  }

  if (state.step === 'memories') {
    app.innerHTML = renderMemories({ slides, slideIndex: state.slideIndex, direction: state.slideDirection })
    return
  }

  if (state.step === 'gate') {
    app.innerHTML = renderGate({ dateError: state.dateError, dateValue: state.dateValue })
    setupOtpHandlers()
    return
  }

  if (state.step === 'gifts') {
    app.innerHTML = renderGifts({
      gifts,
      openedGiftIds: state.openedGiftIds,
      openingGiftId: state.openingGiftId,
      selectedGiftId: state.selectedGiftId,
    })
    return
  }

  const selectedGift = gifts.find((gift) => gift.id === state.selectedGiftId)
  app.innerHTML = renderResult({ gift: selectedGift })
  celebrateResult()
}

function goNext() {
  if (state.step === 'intro') {
    state.step = 'memories'
    state.slideIndex = 0
    render()
    syncUrl()
    return
  }

  if (state.step === 'memories') {
    state.slideDirection = 'forward'
    if (state.slideIndex < slides.length - 1) {
      state.slideIndex += 1
    } else {
      state.step = state.selectedGiftId ? 'result' : 'gate'
    }
    render()
    syncUrl()
  }
}

function goBack() {
  if (state.step === 'memories' && state.slideIndex > 0) {
    state.slideDirection = 'back'
    state.slideIndex -= 1
    render()
    syncUrl()
  }
}

function setupOtpHandlers() {
  const inputs = [...app.querySelectorAll('.otp-digit')]
  if (!inputs.length) return

  inputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(-1)
      if (input.value && i < inputs.length - 1) inputs[i + 1].focus()
    })
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && i > 0) {
        inputs[i - 1].focus()
        inputs[i - 1].value = ''
      }
    })
  })

  const firstEmpty = inputs.find((d) => !d.value)
  if (firstEmpty) firstEmpty.focus()
}

function verifyDate(value) {
  // value is ddmmyyyy, config stores yyyy-mm-dd
  const [year, month, day] = siteConfig.anniversaryDate.split('-')
  const expected = day + month + year

  state.dateValue = value

  if (value === expected) {
    state.dateError = false
    state.step = 'gifts'
    render()
    syncUrl()
    return
  }

  state.dateError = true
  render()

  const form = app.querySelector('.gate-form')
  if (form) {
    form.classList.remove('shake')
    void form.offsetWidth
    form.classList.add('shake')
  }
}

function openGift(giftId) {
  if (state.openingGiftId || state.selectedGiftId || state.openedGiftIds.includes(giftId)) {
    return
  }

  state.openingGiftId = giftId
  render()

  window.setTimeout(() => {
    state.openedGiftIds.push(giftId)
    state.openingGiftId = null
    render()
    syncUrl()

    const card = app.querySelector(`[data-gift-id="${giftId}"]`)
    if (card) {
      burstConfetti(card, 12)
    }
  }, 700)
}

function selectGift(giftId) {
  const allOpened = state.openedGiftIds.length === gifts.length
  if (state.selectedGiftId || !allOpened || !state.openedGiftIds.includes(giftId)) {
    return
  }

  state.selectedGiftId = giftId
  saveGiftChoice(giftId)
  render()

  const card = app.querySelector(`[data-gift-id="${giftId}"]`)
  if (card) {
    burstConfetti(card, 30)
  }

  window.setTimeout(() => {
    state.step = 'result'
    render()
    syncUrl()
  }, 900)
}

function resetGift() {
  state.selectedGiftId = null
  state.openingGiftId = null
  clearGiftChoice()
  state.step = 'gifts'
  render()
  syncUrl()
}

window.addEventListener('popstate', () => {
  const parsed = readStateFromUrl()

  state.step = parsed.step === 'result' && !state.selectedGiftId ? 'gifts' : parsed.step
  state.slideIndex = clampSlideIndex(parsed.slideIndex)
  state.openedGiftIds = parsed.openedGiftIds.filter((id) => giftIds.includes(id))
  state.openingGiftId = null
  state.dateError = false
  render()
})

app.addEventListener('click', (event) => {
  const actionNode = event.target.closest('[data-action]')
  if (!actionNode) {
    return
  }

  const { action, giftId } = actionNode.dataset

  if (action === 'next') {
    goNext()
  }

  if (action === 'back') {
    goBack()
  }

  if (action === 'open-gift' && giftId) {
    openGift(giftId)
  }

  if (action === 'select-gift' && giftId) {
    selectGift(giftId)
  }

  if (action === 'reset-gift') {
    resetGift()
  }
})

app.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-action="verify-date"]')
  if (!form) {
    return
  }

  event.preventDefault()
  const value = [...form.querySelectorAll('.otp-digit')].map((i) => i.value).join('')
  verifyDate(value)
})

render()
