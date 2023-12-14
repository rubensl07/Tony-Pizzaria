'use strict'
preencher()
// let idPizza = 1;
async function obterProdutos() {
    const endpoint = "http://localhost:8080/produtos";
    const response = await fetch(endpoint);
    const dados = await response.json();
    return dados;
}

async function preencher(){
    const info = await obterProdutos()
    criarPizzasFavoritas(info)
    criarPizzasRecomendadas(info)
    criarBebidas(info)
    console.log(info)
}


function criarBebidas(info){
    for (let c = 0; c< info.bebidas.length; c++) {
        criaBebida(c, info)
    }
}

let cont = 0;

function calcularQuantidadeFavoritas(info){
    let quantidade = 0
    for (let c = 0; c < info.pizzas.length; c++) {
        if(info.pizzas[c].favorita)[
            quantidade++
        ]
    }
    console.log("Quantidade favoritas: "+quantidade)
    return quantidade
}

function criarPizzasFavoritas(info){
    let quantidadeFavoritas=calcularQuantidadeFavoritas(info)
    for (let c = 0; c< quantidadeFavoritas; c++) {
        criarPizzaFavorita(info)
    }
}
function calcularQuantidadeRecomendados(info){
    let quantidade = 0
    for (let c = 0; c < info.pizzas.length; c++) {
        if(info.pizzas[c].recomendado)[
            quantidade++
        ]
    }
    console.log("Quantidade recomendados: "+quantidade)
    return quantidade
}
function criarPizzasRecomendadas(info){
    let quantidadeRecomendados= calcularQuantidadeRecomendados(info)
    for (let c = 0; c< quantidadeRecomendados; c++) {
        criarPizzaRecomendada(info)
    }
}



function criarPizzaFavorita(info) {
    const listaFavoritas = document.getElementById('lista-favoritas')

    const favorita = document.createElement('div')
    favorita.classList.add('favorita')
    favorita.classList.add('painelPizza')
    favorita.style.backgroundImage = `url(./img/pizzas/${info.pizzas[cont].fundo}.png)`

    const precoFav = document.createElement('div')
    precoFav.classList.add('preco')

    const nomePizzaFavorita = document.createElement('div')
    nomePizzaFavorita.classList.add('nomePizza')
    nomePizzaFavorita.classList.add('fundoTitulo')

    favorita.replaceChildren(precoFav, nomePizzaFavorita)
    listaFavoritas.appendChild(favorita)

    precoFav.textContent = "R$ " + info.pizzas[cont].preco
    nomePizzaFavorita.textContent = info.pizzas[cont].nome

    favorita.addEventListener('click', abrirDetalhesProduto)

    cont++
}

function criarPizzaRecomendada(info) {
    const listaRecomendados = document.getElementById('lista-recomendados')

    const recomendado = document.createElement('a')
    recomendado.classList.add('recomendado')
    recomendado.classList.add('painelPizza')
    recomendado.style.backgroundImage = `url(./img/pizzas/${info.pizzas[cont].fundo}.png)`

    const precoRec = document.createElement('div')
    precoRec.classList.add('preco')

    const nomePizzaRecomendada = document.createElement('div')
    nomePizzaRecomendada.classList.add('nomePizza')

    recomendado.replaceChildren(precoRec, nomePizzaRecomendada)
    listaRecomendados.appendChild(recomendado)

    let precoValor = "R$ " + info.pizzas[cont].preco
    precoRec.textContent = precoValor.replace(/\./g, ',');
    nomePizzaRecomendada.textContent = info.pizzas[cont].nome

    recomendado.addEventListener('click', abrirDetalhesProduto)

    cont++
}

function criaBebida(conta, info) {

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

    imgBebida.src = `./img/bebidas/${info.bebidas[conta].imagem}.png`
    nomeBebida.textContent = info.bebidas[conta].nome
    descricaoBebida.textContent = info.bebidas[conta].descricao
    precoBebida.textContent = "R$ " + info.bebidas[conta].preco

}


function abrirDetalhesProduto(){
    window.location.href = "./detalhesProduto.html"
}





