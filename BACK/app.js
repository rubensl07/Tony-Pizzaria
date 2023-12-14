/*********************************************************************************************
 * Objetivo: Criação de uma API para manipular dados de Estados e Cidades
 * Data: 01/11/2023
 * Autor: Marcel
 * Versão: 1.0
 ********************************************************************************************/

//Para criar uma API podemos utilizar o EXPRESS

/*
    npm install express --save
        É a biblioteca que vai gerenciar as requisições da API

    npm install body-parser --save
        É a biblioteca que vai manipular dados do corpo da requisição (POST, PUT)

    npm install cors --save
        É a biblioteca responsável pelas permissões (HEADER) de acesso das requisições
*/

//Import das bibliotecas para criar a API
var express = require ('express')
var bodyParser = require ('body-parser')
var cors = require('cors') 

//Criando um objeto app para manipular as requisições da API
const app = express()

//reqhest - Recebe algum dado
//response - saída (return) de dados da API


//Função para manipular as restrições da API (HEADER)
app.use((request,response,next)=>{
    //Permite especificar quem poderá acessar a API (* = liberar acesso público, 'IP' = liberar acesso apenas para aquela máquina)
    response.header('Acess-Control-Allow-Origin','*');

    //Permite especificar como a API será requisitada (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods','GET');

    //Ativa as configurações de permissão no cors
    app.use(cors());


    next();
})

app.get('/clientes', cors(), async function(request, response, next){
    let funcoes = require('./functions.js')
    const lista = funcoes.getListaClientes()
    response.json(lista)
    response.status(200)
}) 
app.get('/produtos', cors(), async function(request, response, next){
    let funcoes = require('./functions.js')
    const lista = funcoes.getListaProdutos()
    response.json(lista)
    response.status(200)
}) 
app.get('/produtos/pizzas', cors(), async function(request, response, next){
    let funcoes = require('./functions.js')
    const lista = funcoes.getListaPizzas()
    response.json(lista)
    response.status(200)
}) 

app.get('/produtos/bebidas', cors(), async function(request, response, next){
    let funcoes = require('./functions.js')
    const lista = funcoes.getListaBebidas()
    response.json(lista)
    response.status(200)
}) 



app.listen('8080',function(){
    console.log("API FUNFANDO!!")
})




