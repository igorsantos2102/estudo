 const express = require('express')

const app = express()
const port = 3000 

app.get('/', (req, res) => {
    console.log("01 entrou aqui")
    res.send("Hello World!")
})
app.post('/', (req, res) => {
    console.log("02 entrou aqui")
    res.send("Hello World!")
})
app.put('/', (req, res) => {
    console.log("03 entrou aqui")
    res.send("Hello World!")
})


app.listen(port, () => {

    console.log(`App online na porta ${port}`)
})