function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

btnColor.addEventListener('click', chageColor)

function chageColor(event) {

  const body = document.body
  body.classList.add("color")
  const bodyColor = body.style.backgroundColor = getRandomHexColor()
  
  spanColor.textContent = bodyColor
}

