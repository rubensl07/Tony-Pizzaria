var express = require ('express')
var bodyParser = require ('body-parser')
var cors = require('cors') 

const app = express()

app.use((request,response,next)=>{
    //Permite especificar quem poderá acessar a API (* = liberar acesso público, 'IP' = liberar acesso apenas para aquela máquina)
    response.header('Acess-Control-Allow-Origin','*');

    //Permite especificar como a API será requisitada (GET, POST, PUT e DELETE)
    response.header('Acess-Control-Allow-Methods','GET');

    //Ativa as configurações de permissão no cors
    app.use(cors());


    next();
})
const port = 3034;
app.listen(port, () =>{
    console.log("API FUNFANDO!!!")
});
app.use(cors());


app.get('/produtos/pizzas', cors(), async function(request, response, next){
    const listaPizzas = getListaPizzas()
}) 



var infos = require('./listaInfos.js')

function getListaClientes(){
    let clientes = infos.clientes
    return clientes
}
function getListaPizzas(){
    let pizzas = infos.produtos.pizzas
    return pizzas
}
function getListaBebidas(){
    let bebidas = infos.produtos.bebidas
    return bebidas
}
console.log(getListaClientes())
console.log(getListaPizzas())
console.log(getListaBebidas())



