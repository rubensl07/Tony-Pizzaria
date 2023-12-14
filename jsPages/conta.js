'use strict'


async function obterDadosCliente() {
    const endpoint = "http://localhost:8080/clientes";
    const response = await fetch(endpoint);
    const dados = await response.json();
    return dados;
}
obterDadosCliente()

let usuario
let senha
async function definirEmailSenha() {
    const dados = await obterDadosCliente()
    usuario = dados[0].email
    senha = dados[0].senha
    console.log(usuario + "\n" + senha)
    preencherCampos()
}
definirEmailSenha()

function validarLogin() {
    const emailDigitado = document.getElementById('email').value
    const senhaDigitada = document.getElementById('senha').value
    if (emailDigitado == usuario && senhaDigitada == senha) {
        return true
    } else {
        return false
    }
}


function logar() {
    if (validarLogin(email, senha)) {
        window.location.href = "./home.html"
    } else {
        alert("Login inválido")
    }
}

const login = document.getElementById('entrar')
login.addEventListener('click', logar)



//PREENCHER OS DADOS. NÃO PRESENTE NO SITE FINAL
async function preencherCampos() {
    const emailDigitado = document.getElementById('email')
    const senhaDigitada = document.getElementById('senha')
    emailDigitado.value = usuario
    senhaDigitada.value = senha
    setTimeout(() => {
        alert("Por se tratar de uma versão teste, o usuário e a senha já estão previamente inseridos nos campos de inserção de texto.")
    }, 500)
}