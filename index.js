//config
require("dotenv").config()
const express = require("express")
const app = express()

//added code to import the router
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use("/places", require("./controllers/places"))

//home page route
app.get("/", (req, res) => {
        res.render("home")
})

//error/wildcard page route
app.get('*', (req, res) => {
        res.render('error404')
      })      

app.listen(process.env.PORT)