const fontSize = document.getElementById("font-size-control")
const text = document.getElementById("text")


fontSize.addEventListener('input', changeFontSize)

function changeFontSize(evnt) {
  const sizeText = evnt.currentTarget.value
  text.style.fontSize = `${sizeText}px`
}
