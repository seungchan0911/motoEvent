const motos = document.querySelectorAll('.moto')
const motoInnerText = document.querySelector('.moto-inner-text')
function motoEvent(action, num) {
  motos.forEach(moto => {
    if (moto.classList.contains(`m${num}`)) return
    moto.classList[action](`add${num}`)
  })
  if (num === 1) {
    motoInnerText.textContent = "This is moto1."
  } else if (num === 2) {
    motoInnerText.textContent = "This is moto2."
  } else if (num === 3) {
    motoInnerText.textContent = "This is moto3."
  } else if (num === 4) {
    motoInnerText.textContent = "This is moto4."
  } else if (num === 5) {
    motoInnerText.textContent = "This is moto5."
  }
  if (action == 'remove') {
    motoInnerText.style.opacity = 0
  }
}

function motoText(num) {
}
