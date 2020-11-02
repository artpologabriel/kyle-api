const express = require ('express')
const Xlist = require ('../models/xuser')
const router = new express.Router()

router.post('/userex', async (req, res) => {
    const xlist = new Xlist(req.body)
    
    // xlist.save().then(() => {
    //     res.send(xlist)
    // }).catch((e) => {
    //     res.send(e)
    // })
    try{
        await xlist.save()
        res.status(201).send(e)
    }catch (e){
        res.status(404).send(e)
    }
})


router.get('/userexs/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const xlist = await Xlist.findById(_id)

            res.send(xlist)
    } catch (e) {
        res.send(e)
    }

})

router.delete('/userexs/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const xlist = await Xlist.findByIdAndDelete(_id)

                if (!xlist){
                    return res.status(404).send()
                }


            res.send(xlist)
    } catch (e) {
        res.send(e)
    }

})

router.post('/userupdateex', async (req, res) => {
    // const updates = Object.keys(req.body)
     const _id  = req.body._id
     const email = req.body.email
     const password = req.body.password
     const name = req.body.name

    Xlist.findOneAndUpdate({_id},  
        {password, email , name}, null, function (err, docs) { 
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




module.exports  = router