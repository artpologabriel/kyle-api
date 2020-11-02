const express = require ('express')
const router = new express.Router()

router.get('/test',(req,res)=>{
    res.send('this is router')
})





module.exports  = router