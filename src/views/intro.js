import { siteConfig } from '../config.js'
import { escapeHtml } from '../lib/html.js'

export function renderIntro() {
  const paragraphs = siteConfig.introMessage
    .map((line) => `<p class="intro-para">${escapeHtml(line)}</p>`)
    .join('')

  return `
    <div class="intro-page">
      <!-- Emoji floral corner -->
      <div class="intro-floral" aria-hidden="true">
        <span class="fe fe-rose">🌹</span>
        <span class="fe fe-leaf1">🌿</span>
        <span class="fe fe-blossom">🌸</span>
        <span class="fe fe-leaf2">🍃</span>
        <span class="fe fe-blue">💙</span>
      </div>

      <!-- Main card -->
      <article class="intro-card animate-fade-up">
        <div class="intro-frame">

          <p class="intro-occasion">${escapeHtml(siteConfig.occasion)}</p>

          <div class="intro-heart-divider">
            <span class="intro-hline"></span>
            <span class="intro-hsym">♥</span>
            <span class="intro-hline"></span>
          </div>

          <h1 class="intro-name">${escapeHtml(siteConfig.recipientName)}</h1>

          <div class="intro-birthyear">
            <span class="intro-byline"></span>
            <span class="intro-byyear">Sinh năm ${siteConfig.birthYear}</span>
            <span class="intro-byline"></span>
          </div>

          <div class="intro-msgbox">
            <h2 class="intro-msgtitle">
              <span>🎁</span>
              ${escapeHtml(siteConfig.introTitle)}
            </h2>
            <div class="intro-msgsep"></div>
            <div class="intro-msgbody">${paragraphs}</div>
          </div>

          <div class="intro-goldheart">
            <span class="intro-gline"></span>
            <span class="intro-gsym">♥</span>
            <span class="intro-gline"></span>
          </div>
        </div>

        <div class="intro-cta animate-fade-up delay-3">
          <button class="btn-next" data-action="next">
            <span class="btn-next-heart">♥</span>
            TIẾP THEO
            <span>→</span>
          </button>
        </div>
      </article>
    </div>
  `
}
