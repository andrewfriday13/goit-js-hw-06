

const categories = document.getElementById('categories')
const categoryLen = categories.querySelectorAll('.item')

console.log('Number of categories:', categoryLen.length)

categoryLen.forEach(element => {
  const addClassTitle = element.firstElementChild.classList.add("item-title")

 const allList = element.querySelectorAll('li')

  const category = element.querySelector('.item-title');


  console.log('Category:', category.textContent)
  console.log("Elements:" ,allList.length)
  
});