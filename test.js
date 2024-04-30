const Sequelize = require('sequelize')

const sequelize = new Sequelize('teste','root','C,03x1LSOxv8',{// note:fabiofhmb99 // pc: C,03x1LSOxv8
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
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT 
  }
})
Postagem.create({
  titulo: "Um titulo Qualquer",
  conteudo: 'qualquer'
})

const Usuario = sequelize.define('usuarios',{
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})
Usuario.create({
  nome: "Fabio",
  sobrenome: "Lima",
  idade: 20,
  email: "blabla@email.com",
})

// Usuario.sync({force:true})