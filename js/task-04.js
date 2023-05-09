const counterValue = {
    value: 0,

    increment() {
        this.value += 1
    },

    decrement() {
        this.value -= 1;
    }
}
const valueEl = document.querySelector('#value')
const counterEl = document.querySelectorAll('#counter button')
const incrementBtn = counterEl[1];
const decrementBtn = counterEl[0];

incrementBtn.addEventListener('click', event => {

    counterValue.increment();
    valueEl.textContent = counterValue.value;
})

decrementBtn.addEventListener('click', event => {
    
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

