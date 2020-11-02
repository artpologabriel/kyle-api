// const express = require('express')
// const MapPosition = require('../models/map_position')
// const router = new express.Router()


// router.post('/teleport', async (req, res) => {
//    // const updates = Object.keys(req.body)
//     res.send(req.body)
//     console.log(req.body)

   

//     /* 

//     try {
//         const map_position = await MapPosition.find({id}).exec();
        
//         res.status(200).send(map_position)
//     }
//     catch (e){
//         res.status(400).send()

//     }
    
    
//     /*
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
//     */



// })
// module.exports = router