const inputId = document.getElementById('name-input');
const nameUser = document.getElementById('name-output');

inputId.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameUser.textContent = "Anonymous"
  } else {
    nameUser.textContent = event.currentTarget.value;
  }
} )