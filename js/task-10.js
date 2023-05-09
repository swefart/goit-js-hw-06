function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  input: document.getElementById('controls').firstElementChild,
  createBtn: document.querySelectorAll('#controls button')[0],
  removeBtn: document.querySelectorAll('#controls button')[1],
  placeForBoxes: document.getElementById('boxes')
}


refs.input.addEventListener('input', saveNumber)
refs.createBtn.addEventListener('click', createBoxes)
refs.removeBtn.addEventListener('click', removeBoxes)
let numberOfBoxes = 0;
const arrNumbers = [];



function createBoxes(event) {
  refs.input.addEventListener('input', saveNumber())
 const arrNumbers = [];
 let size = 20;
  for (let i = 2; i <= numberOfBoxes; i += 1) {
    arrNumbers.push(i) 
  }
  
  for (let i = 0; i <= arrNumbers.length; i += 1) {
    
    size += 10;
    refs.placeForBoxes.insertAdjacentHTML('afterbegin', createBox(size))
  }

}

function saveNumber(event) {

  numberOfBoxes = refs.input.value;
}

function removeBoxes(event) {
  const box = document.querySelectorAll('.box')
  box.forEach(bx => bx.remove())

}

function createBox(size,) {
 const randomColor = getRandomHexColor();
  return `<div class="box"style="width: ${size}px; height: ${size}px; background-color: ${randomColor}" heigh></div>`
}


console.log(createBox(30, getRandomHexColor() ));