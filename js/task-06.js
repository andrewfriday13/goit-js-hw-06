const inputEl = document.getElementById("validation-input")
 
inputEl.addEventListener("blur", changeColor)

const valueEl = inputEl.dataset.length
  
function changeColor(evnt) {

  const valueInput = evnt.currentTarget.value.length

  if (valueInput == valueEl) {
    inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")


  } else {
        inputEl.classList.remove("valid")

    inputEl.classList.add("invalid")
  }
}

 

