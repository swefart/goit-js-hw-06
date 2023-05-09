const refs = {
    input: document.getElementById('font-size-control'),
    span: document.getElementById('text')
}

refs.input.addEventListener('input', changeFontSize)

function changeFontSize() {
    refs.span.style.fontSize = `${this.value}px`

}