

module.exports = app => {
    app.get('/atendimento', (req,res) => res.send('Você está na rota de atendimentos e fazendo um get'))
}