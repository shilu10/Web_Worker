const express = require('express')
const path = require('path')

app = express()

// express public middleware.
app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port = 2000, () => {
console.log("running the server!!!")
})