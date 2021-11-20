const customExpress = require('./Config/customExpress')

const app = customExpress() //atribui a função customExpress para iniciar o servidor
app.listen(3000, () => console.log('servidor sendo executado na porta 3000'))



