import { escapeHtml } from '../lib/html.js'

export function renderMemories({ slides, slideIndex, direction = 'forward' }) {
  const slide = slides[slideIndex]
  const isLast = slideIndex === slides.length - 1
  const caption = slide.caption
    ? `<p class="mt-3 text-sm leading-6 text-ink/70 sm:text-base">${escapeHtml(slide.caption)}</p>`
    : ''

  return `
    <section class="mx-auto flex min-h-[100dvh] max-w-xl flex-col px-[10px] pt-0" style="padding:18px 10px;justify-content:start">
      <p class="font-bold text-brand uppercase" style="font-size:22px;letter-spacing:4px">Dòng sự kiện</p>
      <h2 class="mt-3 font-bold" style="font-size:20px">${escapeHtml(slide.title)}</h2>
      <div class="slide-frame mt-5 slide-in-${direction === 'back' ? 'left' : 'right'}">
        <figure class="photo-frame">
          <img src="${escapeHtml(slide.src)}" alt="${escapeHtml(slide.title)}" />
        </figure>
        <button class="slide-arrow slide-arrow--prev" data-action="back" ${slideIndex === 0 ? 'disabled' : ''}>&#8592;</button>
        <button class="slide-arrow slide-arrow--next" data-action="next">&#8594;</button>
      </div>
      ${caption}
  `
}
