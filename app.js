const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/public", express.static(path.join(__dirname, 'public')))

const serviceRoute = require("./routes/service")




app.use("/service", serviceRoute)


app.listen(3002, () => {
    console.log("Server is up and listening on port 3003...")
})