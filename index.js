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

//error page route
app.get("*", (req, res) => {
        res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT)