const express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Cors = require('cors')
const queryRouter = require('./router/queryRouter')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.use(Cors)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

const con_url = `mongodb+srv://admin:FLmZMZSdYqrzplCD@cluster0.npz8b.mongodb.net/coviDAR?retryWrites=true&w=majority`
mongoose.connect(process.env.MONGODB_URI || con_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("mongoose connected");
})
app.get('/', (req, res) => {
    res.send("Hello")
})
app.use('/queries', queryRouter);

const port = process.env.PORT || 8080
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.listen(port, () => {
    console.log(`Listening on localhost : ${port}`)
})