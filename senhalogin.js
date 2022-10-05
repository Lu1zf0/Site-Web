function login(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if(email=="adm@adm123.com" && senha=="adm"){
        window.location.href = "/index.html"
        alert("LOGADO!")
    } else{
        alert("Usuário ou senha inválidos")
    }
}

function cadastro(){
    var nomecadastro = document.getElementById('nomecadastro');
    var emailcadastro = document.getElementById('emailcadastro');
    var senhacadastro = document.getElementById('senhacadastro');
    var senhacadastroconfirm = document.getElementById('senhacadastroconfirm');

    var dados = JSON.parse(localStorage.getItem("dadoscadastro"));

    if(dados == null){
        localStorage.setItem("dadoscadastro", "[]");
        dados = [];
    }

    var registro = {
        nome: nomecadastro.value,
        email: emailcadastro.value,
        senha: senhacadastro.value
    }

    dados.push(registro);

    if(senhacadastro.value != senhacadastroconfirm.value){
        alert("Senhas incompatíveis")
    } else{
        localStorage.setItem("dadoscadastro", JSON.stringify(dados));
        window.location.href = "/index.html"
    }
}

function limpar(){
    localStorage.clear();
}