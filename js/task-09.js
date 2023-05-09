function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  body: document.body,
  info: document.querySelector('.color'),
  btn: document.querySelector('.change-color')
}


refs.btn.addEventListener('click', changeColor);

function changeColor() {
  let randomColor = getRandomHexColor()
  refs.body.style.backgroundColor = randomColor;
  refs.info.textContent = randomColor;
}