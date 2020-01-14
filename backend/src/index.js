const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

try {
    mongoose.connect('mongodb://localhost/week10', {
    useNewUrlParser: true,
    useCreateIndex :  true ,
    useUnifiedTopology: true,
})
console.log('funfou');

} catch (error) {
    console.log("erro")
}

app.use(express.json())  

app.use(routes)


app.listen(3333)