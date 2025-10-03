const antojitos = [
  "Tacos al pastor 🌮",
  "Quesadillas con queso 🧀",
  "Elotes con mayonesa y chile 🌽",
  "Churros con azúcar 🍩",
  "Tamales verdes y rojos 🫔",
  "Pozole calientito 🍲",
  "Gorditas rellenas 😋",
  "Sopes con frijoles y crema 🥙",
  "Enchiladas verdes 🌿",
  "Pan dulce con chocolate caliente ☕"
];

const quoteEl = document.getElementById('quote');
const buttonEl = document.getElementById('generate');

buttonEl.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * antojitos.length);
  quoteEl.textContent = antojitos[randomIndex];
});
