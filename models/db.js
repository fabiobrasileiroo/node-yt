const Sequelize = require('sequelize')

const sequelize = new Sequelize('teste','root','C,03x1LSOxv8',{// note:fabiofhmb99 // pc: C,03x1LSOxv8
  host: "localhost",
  dialect: "mysql",
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}