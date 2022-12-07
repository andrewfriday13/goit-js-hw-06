const inputId = document.getElementById('name-input');
const nameUser = document.getElementById('name-output');

inputId.addEventListener("input", (event) => {
  nameUser.textContent = event.currentTarget.value;
} )