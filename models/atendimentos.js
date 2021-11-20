const moment = require('moment')
const conexao = require('../infraestrutura/conexao')


class atendimento{
    adiciona(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data} //os ... significado TUDO
        const sql = 'INSERT INTO atendimento SET ?' //o ? significa que o que ele receber aqui ele irá inserir na tabela
    
    conexao.query(sql, atendimentoDatado, (erro, resultado) => {
        if(erro){
            console.log(erro)
        } else {
            console.log(resultado)
        }
    })
    }
}

module.exports = new atendimento