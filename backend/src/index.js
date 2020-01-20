const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const {setupWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

try {
    mongoose.connect('mongodb://localhost:27017/week10', {
    useNewUrlParser: true,
    useCreateIndex :  true ,
    useUnifiedTopology: true,
})
} catch (error) {console.log("erro");
}

app.use(cors())

app.use(express.json())  

app.use(routes)


server.listen(3333)