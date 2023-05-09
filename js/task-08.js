const form = document.querySelector('.login-form')



form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()

    const formInputs = event.currentTarget.elements;
    const mail = formInputs.email.value;
    const password = formInputs.password.value;
    const formData = {
        mail, password,
    }
    
    if (mail === "" || password === "") {
        alert("Все поля должны быть заполнены")
    } else {
        console.log(formData)
        form.reset()
    }
}
