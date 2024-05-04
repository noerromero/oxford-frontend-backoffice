const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button")

userName.addEventListener("blur", function (e) {
    let field = e.target;
    let fieldValue = e.target.value;
    if (fieldValue == 0){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Username is required";
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})




password.addEventListener("blur", function (e) {
    let field = e.target;
    let fieldValue = e.target.value;
    if (fieldValue == 0){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Password is required";
    } else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
})

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let usernameValue = userName.value.trim();
    let passwordValue = password.value.trim();

    if (usernameValue === '' || passwordValue === '') {
        swal("Completar todos los campos","","warning");
    }
});




function login(){
    const mail = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(mail == "dante@oxford.com" && pass=="12345") {
        window.location.href="http://127.0.0.1:5500/oxford-frontend-backoffice/Html/welcome.html"
        
    } else {
        swal("Usuario o contraseña incorrectos", "", "error");
    }
}
