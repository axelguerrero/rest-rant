//config
require("dotenv").config()
const express = require("express")
const app = express()

//added code to import the router
app.use("/places", require("./controllers/places"))

//home page route
app.get ("/", (req, res) => {
        res.send("Yur!")
})

app.get ("*", (req, res) => {
        res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT)