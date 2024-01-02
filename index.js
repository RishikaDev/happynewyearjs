require('dotenv').config()
const express = require('express')
const app = express()
//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
    res.send('Happy New Year!')
  })
  app.get('/login', (req, res) => {
    res.send('please login')
  })  
  app.get('/twitter',(req,res)=>{
      res.send('<h1>Happy New Year<h1>')
  })
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})