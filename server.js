var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Cors = require('cors')
var queryRouter = require('./routes/queryRouter')
// const fileupload = require('express-fileupload')
const dotenv = require("dotenv")

dotenv.config()
const app = express()
const port = process.env.PORT || 8080
const connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.npz8b.mongodb.net/coviDAR?retryWrites=true&w=majority`


mongoose.connect(process.env.MONGODB_URI || connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("mongoose connected");
})
app.use(express.json());
app.use(Cors())
// app.use(fileupload())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/queries', queryRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.listen(port, () => console.log(`listenting on localhost :${port}`));






