// const addOne = document.getElementById('counter').firstElementChild
// const removeOne = document.getElementById('counter').lastElementChild

// const addOfNumber = () => {
//   console.log('прикинь')
// }

// const addListenOne = addOne.addEventListener('click', addOfNumber)
// const removeListenOne = removeOne.removeEventListener('click',addOfNumber )



const counterValue = document.getElementById('value').textContent
console.log(counterValue)


const  removeOne = document.getElementById('counter').firstElementChild
const addOne = document.getElementById('counter').lastElementChild
const span = document.getElementById('value')


const addListenFirst = removeOne.addEventListener('click', (event) => {
  span.textContent = event.currentTarget.value;


})
const addListenSecomd = addOne.addEventListener('click', (event) => {
  span.textContent = event.currentTarget.value;
  
}) 


