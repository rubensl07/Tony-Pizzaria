var infos = require('./listaInfos.js')

function getListaClientes(){
    let clientes = infos.clientes
    return clientes
}
function getListaProdutos(){
    let produtos = infos.produtos
    return produtos
}
function getListaPizzas(){
    let pizzas = infos.produtos.pizzas
    return pizzas
}
function getListaBebidas(){
    let bebidas = infos.produtos.bebidas
    return bebidas
}

module.exports = {
    getListaClientes,
    getListaProdutos,
    getListaPizzas,
    getListaBebidas
}
