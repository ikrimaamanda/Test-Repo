const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const db = require('./src/helpers/db')

app.get('/', (req, res) => {
    res.send('Backend Q2')
})

app.get('/user', (req, res) => {
    db.query('SELECT * FROM article', (err, result, fields) => {
        console.log(result)
        res.status(200).send({
            success: true,
            message: "List",
            data: result
        })
    })
})

app.listen(port, () => {
    console.log(`Listen app backend on port:${port}`)
})