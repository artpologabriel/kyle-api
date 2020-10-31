const express = require('express')
require('./db/mongoose')
const Kyle_user = require('./models/user-kyle')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/user', (req, res) => {
    const kyle_user = new Kyle_user(req.body)

    kyle_user.save().then(() => {
        res.send(kyle_user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})