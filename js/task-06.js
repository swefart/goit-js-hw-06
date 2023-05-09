const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', checkInputLength)


function checkInputLength(event) {
    let inputLength = event.currentTarget.value.length
    const orderedLength = inputEl.dataset.length;
    inputLength != orderedLength ? inputEl.classList.add('invalid') : inputEl.classList.replace('invalid','valid');
}