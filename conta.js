'use strict'

let usuario = "usuario"
let senha = 1234

const login = document.getElementById('entrar')
const emailDigitado = document.getElementById('email')
const senhaDigitada = document.getElementById('senha')

function logar(){
    if(emailDigitado.value==usuario&&senhaDigitada.value==senha){
        window.location.href="./home.html"
    } else {
        alert("Login inválido")
    }
}
login.addEventListener('click',logar)





















emailDigitado.value = usuario
senhaDigitada.value = senha