const express = require('express')
require('./db/mongoose')
const kyle = require('./models/kyle')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/kyle', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})