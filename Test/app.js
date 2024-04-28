var http = require('http')

http.createServer((req,res)=>{
  // enviar um mensagem
  res.end('olá')
} ).listen(8081)

console.log("O servidor rodando")