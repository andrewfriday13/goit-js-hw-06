const regForm = document.querySelector(".login-form")
  
regForm.addEventListener("submit", onRegForm)

function onRegForm(evnt) {
  evnt.preventDefault()

  const emailEl = regForm.email.value.length
  const passwordEl = regForm.password.value.length

   if (emailEl <= 0 || passwordEl <= 0) {
     alert("Нічого не забув?")
     
  } else {
     const allData = evnt.currentTarget.elements
     const email = allData.email.value
     const password = allData.password.value

     const resultAllData = {
       email,
       password
     }

     console.log(resultAllData)
     regForm.reset()
   
  }
}