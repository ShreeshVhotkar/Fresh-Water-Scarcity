/* ----------  water.js  ---------- */
document.addEventListener('DOMContentLoaded', init)

/** Feedback text organised as   feedback[questionIndex][optionIndex] */
const feedback = [
  // Q-1  shower length
  [
    '⏱️ Awesome! A sub-5-minute shower uses only about 10 gal of water.',
    '👍 5–10 min is average. Trimming 2 min saves ±5 gal each time.',
    '🚿 10 min+ can run through 25 gal. Try turning the water off to soap up.'
  ],
  // Q-2  tap while brushing
  [
    '🌟 Great habit! You save ~4 gal every time you brush.',
    '😌 Sometimes is a start. Switching off every time doubles the savings.',
    '⚠️ A running tap wastes ~4 gal per session – an easy fix is to turn it off.'
  ],
  // Q-3  drink choice
  [
    '💧 Nice! Tap water costs pennies and zero plastic.',
    '🥤 Bottled water costs ≈300 × more and piles up plastic waste.',
    '🍹 Sugary drinks take litres of hidden “virtual water” to produce.'
  ],
  // Q-4  leaky faucet
  [
    '🔧 Fixing it right away can save >3 000 gal a year.',
    '⌛ Delays let up to 9 L a day drip down the drain.',
    '🚨 A drip ignored for a year can waste thousands of gallons.'
  ],
  // Q-5  next idea
  [
    '🚿 Cutting two minutes from each shower can slash bathroom use by 25 %.',
    '💡 Low-flow fixtures trim water use by ~30 % with zero lifestyle change.',
    '🌧️ A single rain barrel can collect ±700 gal each summer.'
  ]
]

function init () {
  /* attach one listener to every button */
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = Number(btn.dataset.q)   // which question
      const o = Number(btn.dataset.o)   // which option

      /* show feedback text */
      const box = document.getElementById('feedback-' + q)
      if (box) box.textContent = feedback[q][o] || ''

      /* (optional) freeze buttons for that question so the vote “sticks” */
      btn.parentElement.querySelectorAll('.vote-btn')
        .forEach(b => (b.disabled = true))
    })
  })
}

/* --- named wrappers for the first few inline on-click attributes --- */
/* (leave them here so existing HTML still works) */
function vote (q, o) { init; feedback[q] && feedback[q][o] }
function under5min () { document.querySelector('[data-q="0"][data-o="0"]').click() }
function fivemin   () { document.querySelector('[data-q="0"][data-o="1"]').click() }
function Tenmin    () { document.querySelector('[data-q="0"][data-o="2"]').click() }
function Always    () { document.querySelector('[data-q="1"][data-o="0"]').click() }
