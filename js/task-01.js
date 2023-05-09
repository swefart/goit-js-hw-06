const categoriesEL = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEL.children.length}`)

const animalsListEL = categoriesEL.firstElementChild;


const itemsEl = document.querySelectorAll('.item')

itemsEl.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`)
    console.log(`Elements: ${item.children[1].children.length}`)
})