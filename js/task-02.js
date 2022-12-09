const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];
const categoriesEl = document.getElementById('ingredients')
console.log(categoriesEl)
 const listIngr = ingredients.map(element => {

  const newIndrEl = document.createElement("li")

  newIndrEl.classList.add('item')
  newIndrEl.textContent = element
return newIndrEl
})
 
 categoriesEl.append(...listIngr )
