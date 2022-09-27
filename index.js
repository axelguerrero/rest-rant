//config
require("dotenv").config()
const express = require("express")
const app = express()

//home page route
app.get ("/", (req, res) => {
        res.send("Yur!")
})

app.get ("*", (req, res) => {
        res.send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT)