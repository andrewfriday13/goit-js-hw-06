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

const addListenFirst = removeOne.addEventListener('click', () => {
    console.log("ролdsdsdsfdsаво")

})
const addListenSecomd = addOne.addEventListener('click', () => {
  console.log("ролаво")
  
})


