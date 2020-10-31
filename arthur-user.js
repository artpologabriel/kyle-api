const express = require('express')
const { updateOne } = require('./models/user-kyle')
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

app.get('/viewusers', (req, res) => {
    Kyle_user.find({}).then( (users) => {
       res.send(users)
    }).catch( (e) => {
       res.send(e)
    })   
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id

    try {
        const kyle_user = await  Kyle_user.findById(id)

            res.send(kyle_user)
    } catch (e) {
        res.status(404).send()
    }

})

app.post('/userupdate', async (req, res) => {
    // const updates = Object.keys(req.body)
     const _id  = req.body._id
     const email = req.body.email
     const password = req.body.password
     const name = req.body.name

    Kyle_user.findOneAndUpdate({_id},  
        {email, password , name}, null, function (err, docs) { 
        if (err){ 
            console.log(err) 
            res.status(400).send()
        } 
        else{ 
            console.log("Original Doc : ",docs)
            res.send(docs)
        } 
    }); 


  

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})