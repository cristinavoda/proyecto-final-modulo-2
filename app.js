require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./client'))


const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})


// const homeProducts = require("./routes/homeProducts")
// opción 2: poner el require direcatemennte sin variable
app.use("/api", require("./routes/flowers"))

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Cristina's shop</h1>")})