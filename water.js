/* --- Explanations keyed by [question][option] --- */
const messages = [
  [
    "Great job! A 5-minute shower uses roughly 40 L (≈10 gal), far below the 60 L national average—saving both water and energy.",
    "Pretty good! Trimming just two minutes could save another 15 L every time you rinse.",
    "Uh-oh! A 10-minute shower can exceed 80 L (20 gal). Try a timer to keep it short and eco-friendly."
  ],
  [
    "Excellent! Turning off the tap can save about 8 L every time you brush—thousands of liters a year.",
    "Nice when you remember. Make it a habit and you’ll stop dozens of liters from running straight down the drain each week.",
    "Leaving the tap on wastes roughly 8 L per brushing. Flip it off to protect precious water (and your bill)."
  ],
  [
    "Tap water wins! It’s safe, regulated, costs 600× less than bottled, and avoids single-use plastic.",
    "Bottled water costs up to 600× more than tap and creates plastic waste. Re-fill a reusable bottle instead.",
    "Sugary drinks require extra water and energy to produce. Choose tap water to hydrate yourself—and the planet!"
  ],
  [
    "Nice! A single dripping tap can waste 9 L a day—fixing it right away stops needless loss.",
    "Every day you wait, that drip may waste another 9 L. Grab a wrench sooner to save water.",
    "Ignoring a leak could waste over 3 000 L a year. Repairs are quick and cheap—definitely worth it!"
  ],
  [
    "Cutting just two minutes off each shower can save 15–20 L. Small change, big impact!",
    "WaterSense showerheads use ≤ 2 gpm—up to 30 % savings with the same comfort.",
    "A simple rain barrel can capture hundreds of liters in one storm—perfect for gardens and reducing demand."
  ]
];

/* --- Show feedback when a button is clicked --- */
document.querySelectorAll(".vote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const q = Number(btn.dataset.q);
    const o = Number(btn.dataset.o);
    const box = document.getElementById(`feedback-${q}`);
    box.textContent = messages[q][o];
  });
});
