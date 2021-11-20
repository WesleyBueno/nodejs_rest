const customExpress = require('./Config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro =>{
    if(erro) {
        console.log(erro)
    } else{
        console.log('Conectou ao banco com sucesso!')

        const app = customExpress() //atribui a função customExpress para iniciar o servidor
app.listen(3000, () => console.log('servidor sendo executado na porta 3000'))
    }
}) //conecta no banco de dados





