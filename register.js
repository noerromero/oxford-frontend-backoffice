const dni = document.getElementById("dni")
const Name = document.getElementById("name")
const surName = document.getElementById("surname")
const secondSurName = document.getElementById("secondsurname")
const birth = document.getElementById("birth")
const date = document.getElementById("date")
const email = document.getElementById("email")
const cel = document.getElementById("cel")





dni.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*DNI es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

dni.addEventListener('input', function() {
    if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
    }
});


Name.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Nombre completo es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

surName.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Apellido paterno es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

secondSurName.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Apellido materno es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

secondSurName.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Apellido materno es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

birth.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Fecha de nacimiento es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

date.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Fecha de registro es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

email.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Email es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

cel.addEventListener("blur", function (e){
    let field = e.target;
    let fieldValue = e.target.value;
    if(fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*Celular es requerido";
    } else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "";
    }
})

cel.addEventListener('input', function() {
    if (this.value.length > 9) {
        this.value = this.value.slice(0, 9);
    }
});