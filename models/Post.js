const { Sequelize, sequelize } = require('./db')

const Post = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
}
)
module.exports = Post
// executar apenas um vez apenas quando executar o models
// Post.sync({force: true})