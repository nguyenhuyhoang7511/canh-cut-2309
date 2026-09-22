export function renderGate({ dateError, dateValue }) {
  // dateValue is ddmmyyyy string
  const digits = (dateValue || '').split('')

  function box(i) {
    return `<input
      class="otp-digit${dateError ? ' is-error' : ''}"
      type="text"
      inputmode="numeric"
      maxlength="1"
      data-otp-index="${i}"
      value="${digits[i] || ''}"
      autocomplete="off"
    />`
  }

  return `
    <section class="mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-6 py-12">
      <p class="animate-fade-up text-xs font-bold tracking-[0.3em] text-brand uppercase">Trước khi mở quà</p>
      <h2 class="animate-fade-up delay-1 mt-2 text-2xl font-bold sm:text-3xl">Một câu hỏi nhỏ thôi</h2>
      <p class="animate-fade-up delay-1 mt-2 text-sm leading-6 text-ink/70 sm:text-base">
        Em nhập ngày tụi mình chính thức yêu nhau nhé (DD/MM/YYYY)
      </p>
      <form class="gate-form animate-fade-up delay-2 mt-8" data-action="verify-date" novalidate>
        <div class="otp-row">
          ${box(0)}${box(1)}
          <span class="otp-sep">/</span>
          ${box(2)}${box(3)}
          <span class="otp-sep">/</span>
          ${box(4)}${box(5)}${box(6)}${box(7)}
        </div>
        <button class="btn-primary mt-6 w-full" type="submit">Xác nhận</button>
      </form>
      <p class="gate-error mt-3 text-sm font-semibold text-rose-500 ${dateError ? '' : 'is-hidden'}">
        Chưa đúng rồi, thử lại xem nào 💭
      </p>
    </section>
  `
}
