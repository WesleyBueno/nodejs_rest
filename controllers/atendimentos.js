const Atendimento = require('../models/atendimentos')


module.exports = app => {
    app.get('/atendimento', (req,res) => res.send('Você está na rota de atendimentos e fazendo um get'))

    app.post('/atendimento', (req,res) => {

        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Post atendimento')
    
    })
}