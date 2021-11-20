const express = require('express') //importa o express
const consign = require('consign') //importa o consign
const bodyParser = require('body-parser') //importa o body-parser


module.exports = () => {
    const app = express() //atribui o express para executar o servidor

    app.use(bodyParser.urlencoded({extended: true})) //inclui a biblioteca bodyparser a ser usada no programa
    app.use(bodyParser.json())

    consign()   //inicializa o consign adicionando a pasta de controllers dentro do app
        .include('controllers')
        .into(app)

        return app
}
