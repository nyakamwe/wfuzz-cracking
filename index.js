const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()
const port = 7000

app.use(cors())
app.use(express.json())
app.listen(7000, ()=>{
    console.log(`app is up and running on http://localhost/${port}`)
    console.log('press Ctrl + C to stop server')
})

console.log(__dirname)

app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', (req,res)=>{
  res.sendFile(path.join(`${__dirname}/public/login.html`));
})

app.use('/home', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/public/home.html`));
})

app.use('/', (req, res)=>{
    res.send('welcome to wfuzz cracking site')
})
