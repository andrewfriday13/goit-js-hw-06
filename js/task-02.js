const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const categoriesEl = document.getElementById('ingredients')


ingredients.map((element) => {

  const newIndrEl = document.createElement("li")

  newIndrEl.classList.add('item')
  newIndrEl.textContent = element

 console.log(newIndrEl)
 categoriesEl.appendChild(newIndrEl )
}
 )