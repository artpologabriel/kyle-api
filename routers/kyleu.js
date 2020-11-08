const express = require('express')
const User = require('../models/kyleu')
const auth = require ('../middleware/auth')
const { remove } = require('../models/kyleu')
const router = new express.Router()


//create users
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user , token})
    } catch (e) {
        res.send(e)
    }
})





//login user
router.post('/users/login', async (req, res)=>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
         const token = await user.generateAuthToken()
        console.log(user)
        console.log(token)


        res.send({user,token})
    } catch (e){
        res.send(e)
    }
})

//user logout
router.post('/users/logout', auth , async (req,res)=> {
    try {
        req.user.token = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })  
        await req.user.send()
        res.send()
    }catch (e){
            res.status().send()
    }
})

//log out all
router.post('/users/logoutAll',auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send
    }
})

//see all users // see only me  
router.get('/users/me', auth,async (req, res) => {
    // try {
    //     const users = await User.find({})
    //     res.send(users)
    // } catch (e) {
    //     res.status(500).send()
    // }
    res.send(req.user)
})

//see users by id
// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

//update users :id
router.patch('/users/me',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        // const user = await User.findById(req.params.id)

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()

        // // if (!req.user) {
        //      return res.status(404).send()
        // }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// delete users /:id
router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if (!user) {
        //     return res.status(404).send()
        // }

        await req.user.remove()

        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router