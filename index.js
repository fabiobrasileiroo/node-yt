// import { express } from 'express'
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app!")
})
app.get("/Sobre", (req, res) => {
  res.send("Minha pagina sobre")
})

app.get("/Blog", (req, res) => {
  res.send("Bem-vindo ao meu blog!")
})

app.listen("3333", () => {
  console.log("Servidor rodando")
})