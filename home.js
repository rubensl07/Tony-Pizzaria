'use strict'
// var produtos = require('./info').produtos

var produtos = {
    pizzas: [
    {
        id: 0,
        nome: "Pizza de calabreza com queijo",
        preco: '16.00',
        fundo: "fav1",
        favorita: true,
        recomendado: false
    },
    {
        id: 1,
        nome: "Pizza de peperoni com queijo",
        preco: '19.00',
        fundo: "fav2",
        favorita: true,
        recomendado: false
    },
    {
        id: 2,
        nome: "Pizza de peperoni com queijo",
        preco: '19.00',
        fundo: "fav3",
        favorita: true,
        recomendado: false
    },
    {
        id: 3,
        nome: "Pizza de peperoni com queijo e tomate",
        preco: '16.00',
        fundo: "rec1",
        favorita: false,
        recomendado: true
    },
    {
        id: 4,
        nome: "Pizza brotinho com queijo e tomate",
        preco: '12.00',
        fundo: "rec2",
        favorita: false,
        recomendado: true
    },
    {
        id: 5,
        nome: "Pizza brotinho com queijo e tomate",
        preco: '12.00',
        fundo: "rec2",
        favorita: false,
        recomendado: true
    },
    {
        id: 6,
        nome: "Pizza brotinho com queijo e tomate",
        preco: '12.00',
        fundo: "rec2",
        favorita: false,
        recomendado: true
    },
    {
        id: 7,
        nome: "Pizza brotinho com queijo e tomate",
        preco: '12.00',
        fundo: "rec2",
        favorita: false,
        recomendado: true
    },
    ],
    bebidas: [
    {
        id: 0,
        nome: "Coca-cola 2L",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "14,99",
        imagem: "coke",
    },
    {
        id: 1,
        nome: "Cerveja Heineken",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "17,99",
        imagem: "heineken",
    },
    {
        id: 2,
        nome: "Cerveja Heineken",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "17,99",
        imagem: "heineken",
    },
    {
        id: 3,
        nome: "Cerveja Heineken",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "17,99",
        imagem: "heineken",
    },
    ]
}

let cont = 0;

function criarPizzasFavoritas() {
    const listaFavoritas = document.getElementById('lista-favoritas')

    const favorita = document.createElement('a')
    favorita.classList.add('favorita')
    favorita.href = "./detalhesProduto.html"
    favorita.style.backgroundImage = `url(./img/pizzas/${produtos.pizzas[cont].fundo}.png)`

    const precoFav = document.createElement('div')
    precoFav.classList.add('preco')

    const nomePizzaFavorita = document.createElement('div')
    nomePizzaFavorita.classList.add('nomePizza')
    nomePizzaFavorita.classList.add('fundoTitulo')

    favorita.replaceChildren(precoFav, nomePizzaFavorita)
    listaFavoritas.appendChild(favorita)

    precoFav.textContent = "R$ " + produtos.pizzas[cont].preco
    nomePizzaFavorita.textContent = produtos.pizzas[cont].nome

    cont++
}

function criarPizzasRecomendadas() {
    const listaRecomendados = document.getElementById('lista-recomendados')

    const recomendado = document.createElement('a')
    recomendado.classList.add('recomendado')
    recomendado.style.backgroundImage = `url(./img/pizzas/${produtos.pizzas[cont].fundo}.png)`

    const precoRec = document.createElement('div')
    precoRec.classList.add('preco')

    const nomePizzaRecomendada = document.createElement('div')
    nomePizzaRecomendada.classList.add('nomePizza')

    recomendado.replaceChildren(precoRec, nomePizzaRecomendada)
    listaRecomendados.appendChild(recomendado)

    let precoValor = "R$ " + produtos.pizzas[cont].preco
    precoRec.textContent = precoValor.replace(/\./g, ',');
    nomePizzaRecomendada.textContent = produtos.pizzas[cont].nome

    cont++
}

function criarBebidas(conta) {

    const listaBebidas = document.getElementById('lista-bebidas')

    const bebida = document.createElement('div')
    bebida.classList.add('bebida')

    const imgBebidaDiv = document.createElement('div')
    imgBebidaDiv.classList.add('imagemBebida')

    const imgBebida = document.createElement('img')

    const contentBebida = document.createElement('div')
    contentBebida.classList.add('contentBebida')

    const textContentBebida = document.createElement('div')
    textContentBebida.classList.add('textContentBebida')

    const nomeBebida = document.createElement('div')
    nomeBebida.classList.add('nomeBebida')

    const descricaoBebida = document.createElement('div')
    descricaoBebida.classList.add('descricaoBebida')

    const precoBebida = document.createElement('div')
    precoBebida.classList.add('preco')


    textContentBebida.replaceChildren(nomeBebida, descricaoBebida)
    contentBebida.replaceChildren(textContentBebida, precoBebida)
    imgBebidaDiv.replaceChildren(imgBebida)
    bebida.replaceChildren(imgBebidaDiv, contentBebida)
    listaBebidas.appendChild(bebida)

    imgBebida.src = `./img/bebidas/${produtos.bebidas[conta].imagem}.png`
    nomeBebida.textContent = produtos.bebidas[conta].nome
    descricaoBebida.textContent = produtos.bebidas[conta].descricao
    precoBebida.textContent = "R$ " + produtos.bebidas[conta].preco
}

function calcularQuantidadeFavoritas(){
    let quantidade = 0
    for (let c = 0; c < produtos.pizzas.length; c++) {
        if(produtos.pizzas[c].favorita)[
            quantidade++
        ]
    }
    console.log("Quantidade favoritas: "+quantidade)
    return quantidade
}
let quantidadeFavoritas=calcularQuantidadeFavoritas()
for (let c = 0; c< quantidadeFavoritas; c++) {
    criarPizzasFavoritas()
}

function calcularQuantidadeRecomendados(){
    let quantidade = 0
    for (let c = 0; c < produtos.pizzas.length; c++) {
        if(produtos.pizzas[c].recomendado)[
            quantidade++
        ]
    }
    console.log("Quantidade recomendados: "+quantidade)
    return quantidade
}
let quantidadeRecomendados= calcularQuantidadeRecomendados()
for (let c = 0; c< quantidadeRecomendados; c++) {
    criarPizzasRecomendadas()
}



for (let c = 0; c< produtos.bebidas.length; c++) {
    criarBebidas(c)
}