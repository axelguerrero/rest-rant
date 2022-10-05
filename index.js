//config
require("dotenv").config()
const express = require("express")
const app = express()

//added code to import the router, express settings
app.set("views", __dirname + "/views")
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use("/places", require("./controllers/places"))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

//home page route
app.get("/", (req, res) => {
        res.render("home")
})

//error/wildcard page route
app.get('*', (req, res) => {
        res.render('error404')
      })      

      //listen for connections
app.listen(process.env.PORT)