const express = require('express') //importa o express
const consign = require('consign') //importa o consign


module.exports = () => {
    const app = express() //atribui o express para executar o servidor

    consign()   //inicializa o consign adicionando a pasta de controllers dentro do app
        .include('controllers')
        .into(app)

        return app
}
