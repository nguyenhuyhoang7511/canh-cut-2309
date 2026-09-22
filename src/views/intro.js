import { siteConfig } from '../config.js'
import { escapeHtml } from '../lib/html.js'

export function renderIntro() {
  const paragraphs = siteConfig.introMessage
    .map((line) => `<p class="intro-para">${escapeHtml(line)}</p>`)
    .join('')

  return `
    <div class="intro-page">
      <!-- Decorative stickers -->
      <img class="deco deco-tr" src="https://marketplace.canva.com/jbg58/MAGXwUjbg58/1/tl/canva-MAGXwUjbg58.png" alt="" aria-hidden="true" />
      <img class="deco deco-bl" src="https://marketplace.canva.com/BwhH8/MAFO-rBwhH8/1/tl/canva-MAFO-rBwhH8.png" alt="" aria-hidden="true" />
      <img class="deco deco-br" src="https://marketplace.canva.com/tu3Ec/MAGF6htu3Ec/1/tl/canva-MAGF6htu3Ec.png" alt="" aria-hidden="true" />
      <img class="deco deco-mid" src="https://marketplace.canva.com/8mie0/MAFllg8mie0/1/tl/canva-MAFllg8mie0.png" alt="" aria-hidden="true" />

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
            <span class="intro-byyear">23/09/ ${siteConfig.birthYear}</span>
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
