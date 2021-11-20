const express = require('express')

const app = express()

app.listen(3000, () => console.log('servidor sendo executado na porta 3000'))

app.get('/atendimento', (req,res) => res.send('Você está na rota de atendimentos e fazendo um get'))

