'use strict'
let favorito = true
let notaPizza = 5

const img = document.getElementById('favorito')
function atualizarInformacoesProduto() {
    const nomeProduto = document.getElementById('nomeProduto')
    nomeProduto.textContent = "Pizza peperoni com queijo"

    const precoProduto = document.getElementById('precoProduto')
    precoProduto.textContent = "R$ " + "19,65"

    const descricaoProduto = document.getElementById('descricaoProduto')
    descricaoProduto.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    
    const stars = document.getElementById('stars')
    const star = [5]
    star[0]= document.createElement('img')
    star[1]= document.createElement('img')
    star[2]= document.createElement('img')
    star[3]= document.createElement('img')
    star[4]= document.createElement('img')

    stars.replaceChildren(star[0],star[1],star[2],star[3],star[4])

    for (let contador=0;contador<star.length;contador++){
        star[contador].src="./img/infoProduto/star.png"
    }
    for(let contador = notaPizza;contador<star.length;contador++){
        star[contador].classList.add('desaparecer')
    }
    atualizarIconeFavorito()
}

function atualizarIconeFavorito(){
    const img = document.getElementById('favorito')
    if (favorito){
        img.src="./img/infoProduto/heart.png"
    } else {
        img.src="./img/infoProduto/nullheart.png"
    }
}

function alterarFavorito(){
    if(favorito){
        favorito = false
        console.log("Item não favoritado")
    } else {
        favorito = true
        console.log("Item favoritado")
    }
    atualizarIconeFavorito()
}
img.addEventListener('click',alterarFavorito)

atualizarInformacoesProduto()


const infoComentarios = [
    {
        nome: "Maria da Silva",
        data: "15/03/2022",
        foto: "user1",
        intro: "Pizza muito boa!",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        nota: 3
    },
    {
        nome: "Pedro Gomes Dias",
        data: "21/05/2022",
        foto: "user2",
        intro: "Essa pizza é demais, recomendo.",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        nota: 4
    },
] 
function criarComentarios(infoComentarios){
    const container = document.getElementById('comentarios')
    
    const comentario = document.createElement('div')
    comentario.classList.add('comentario')

    const comentSuperior = document.createElement('div')
    comentSuperior.classList.add('comentSuperior')

    const comentarioIntroducao = document.createElement('p')
    comentarioIntroducao.classList.add('comentarioIntroducao')
    comentarioIntroducao.textContent=infoComentarios.intro

    const comentarioTexto = document.createElement('p')
    comentarioTexto.classList.add('comentarioTexto')
    comentarioTexto.textContent=infoComentarios.texto
    
    const comentInfo = document.createElement('div')
    comentInfo.classList.add('comentInfo')

    const avaliacao = document.createElement('div')
    avaliacao.classList.add('avaliacao')

    const estrelaUsuario = [5]
    
    estrelaUsuario[0]=document.createElement('img')
    estrelaUsuario[1]=document.createElement('img')
    estrelaUsuario[2]=document.createElement('img')
    estrelaUsuario[3]=document.createElement('img')
    estrelaUsuario[4]=document.createElement('img')

    
    estrelaUsuario[0].src="./img/infoProduto/star.png"
    estrelaUsuario[1].src="./img/infoProduto/star.png"
    estrelaUsuario[2].src="./img/infoProduto/star.png"
    estrelaUsuario[3].src="./img/infoProduto/star.png"
    estrelaUsuario[4].src="./img/infoProduto/star.png"
    let contador = infoComentarios.nota
    for(contador;contador<estrelaUsuario.length;contador++){
        estrelaUsuario[contador].classList.add('desaparecer')
    }

    const fotoUsuario = document.createElement('img')
    fotoUsuario.classList.add('fotoUsuario')
    fotoUsuario.src=`./img/infoProduto/${infoComentarios.foto}.png`

    const comentData = document.createElement('div')
    comentData.classList.add('comentData')

    const nomeUsuario = document.createElement('p')
    nomeUsuario.classList.add('nomeEData')
    nomeUsuario.textContent=infoComentarios.nome

    const dataComentario = document.createElement('p')
    dataComentario.classList.add('nomeEData')
    dataComentario.textContent=infoComentarios.data

    avaliacao.replaceChildren(estrelaUsuario[0],estrelaUsuario[1],estrelaUsuario[2],estrelaUsuario[3],estrelaUsuario[4])

    comentData.replaceChildren(nomeUsuario,dataComentario)
    comentInfo.replaceChildren(fotoUsuario,comentData)
    comentSuperior.replaceChildren(comentInfo,avaliacao)
    comentario.replaceChildren(comentSuperior,comentarioIntroducao,comentarioTexto)
    container.appendChild(comentario)
}
infoComentarios.forEach(criarComentarios)