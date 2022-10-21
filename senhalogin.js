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

const nomecadastro = document.getElementById('nomecadastro');
const emailcadastro = document.getElementById('emailcadastro');
const senhacadastro = document.getElementById('senhacadastro');
const senhacadastroconfirm = document.getElementById('senhacadastroconfirm');

function cadastro(){

    fetch("http://localhost:8081/cadastrar", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify({
            nome : nomecadastro.value,
            email : emailcadastro.value,
            senha : senhacadastro.value,
        })
    }).then(function (res) {console.log(res)})
      .catch(function(res){console.log(res)})
  

    

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