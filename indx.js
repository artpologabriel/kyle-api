const express = require('express')

require('./db/mongoose')
const Xlist = require('./models/xuser')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/userex', (req, res) => {
    const xlist = new Xlist(req.body)
    
    xlist.save().then(() => {
        res.send(xlist)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/viewex', (req, res) => {
    Xlist.find({}).then( (xlist) => {
       res.send(xlist)
    }).catch( (e) => {
       res.send(e)
    })   
})

app.get('/userex/:id', async (req, res) => {
    const id = req.params.id

    try {
        const xlist = await  Xlist.findById(id)

            res.send(kyle_user)
    } catch (e) {
        res.status(404).send()
    }

})

app.post('/userupdateex', async (req, res) => {
    // const updates = Object.keys(req.body)
     const _id  = req.body._id
     const date = req.body.date
     const reason = req.body.reason
     const name = req.body.name

    Xlist.findOneAndUpdate({_id},  
        {reason, date , name}, null, function (err, docs) { 
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