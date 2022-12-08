const addOne = document.getElementById('counter').firstElementChild
const removeOne = document.getElementById('counter').lastElementChild
const spanId = document.getElementById('value')


let counterValue = 0

 removeOne.addEventListener("click", addFunction)

function addFunction(evnt) {
  const add = evnt.currentTarget
   const result = counterValue += 1
  spanId.textContent = result

}

addOne.addEventListener("click", removeFunction)

function removeFunction(evnt) { 
  const remove = evnt.currentTarget
    const result = counterValue -= 1
spanId.textContent = result

}
