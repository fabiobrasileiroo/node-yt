const Sequilize = require('sequelize')

const sequelize = new Sequilize('teste','root','fabiofhmb99',{
  host: "localhost",
  dialect: "mysql",
})

// sequelize.authenticate().then(()=> {
//   console.log('Conectado com sucesso')
// }).catch((erro)=> {
//   console.log('Falha ao se conectar: '+erro)
// })

const Postagem = sequelize.define("postagens",{
  titulo: {
    type: Sequilize.STRING
  },
  conteudo: {
    type: Sequilize.TEXT 
  }
})
Postagem.create({
  titulo: "Um titulo Qualquer"
})

const Usuario = sequelize.define('usuarios',{
  nome: {
    type: Sequilize.STRING
  },
  sobrenome: {
    type: Sequilize.STRING
  },
  idade: {
    type: Sequilize.INTEGER
  },
  email: {
    type: Sequilize.STRING
  }
})
Usuario.create({
  nome: "Fabio",
  sobrenome: "Lima",
  idade: 20,
  email: "blabla@email.com",
})

Usuario.sync({force:true})