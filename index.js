const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to YouTube Playlist Length Calculator Project")
})

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("listening on port " + port)
})