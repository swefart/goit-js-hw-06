const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(el => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = el;
  return liEl;
})

const ulEl = document.querySelector('#ingredients')
ulEl.append(...elements)
