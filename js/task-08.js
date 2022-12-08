const regForm = document.querySelector(".login-form")
  
regForm.addEventListener("submit", onRegForm)

function onRegForm(evnt) {
  evnt.preventDefault()

  const email = regForm.email.value.length
  const password = regForm.password.value.length

  if (email <= 0 || password <= 0) {
    alert("Нічого не забув?")
  } else {
    
    const formData = new FormData(evnt.currentTarget)
    regForm.reset()
    formData.forEach((value, name) => {
       console.log("name ", name)
        console.log("value ", value)
    })

  }
}