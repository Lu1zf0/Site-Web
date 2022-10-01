function login(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if(email=="adm" && senha=="123"){
        window.location.href = "/index.html"
        alert("LOGADO!")
    } else{
        alert("Usuário ou senha inválidos")
    }
}