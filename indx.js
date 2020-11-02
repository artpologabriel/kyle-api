const express = require('express')

require('./db/mongoose')
const Xlist = require('./models/xuser')
const xlistRouter = require('./routers/xlist')


const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(xlistRouter)




app.get('/viewexs', (req, res) => {
    Xlist.find({}).then( (users) => {
       res.send(users)
    }).catch( (e) => {
       res.send(e)
    })   
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})