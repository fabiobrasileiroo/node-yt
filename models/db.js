const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp','root','C,03x1LSOxv8',{// note:fabiofhmb99 // pc: C,03x1LSOxv8  
  host: "localhost",
  dialect: "mysql",
  query:{raw:true}
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}