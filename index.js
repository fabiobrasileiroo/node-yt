// import { express } from 'express'
const express = require("express")
const app = express()

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

// config
//Template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set("view engine", 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Conexão com o banco de dados MySql
const Sequelize = require('sequelize')

const sequelize = new Sequelize('teste','root','C,03x1LSOxv8',{// note:fabiofhmb99 // pc: C,03x1LSOxv8
  host: "localhost",
  dialect: "mysql",
})

// Rotas
app.get('/cad',(req,res)=> {
  res.render('formulario')
})

app.post('/add',(req,res)=>{
  res.send(`Texto: ${req.body.titulo} <br> Conteudo: ${req.body.conteudo}` )
})

app.listen(3333, () => {
  console.log("Servidor rodando")
})