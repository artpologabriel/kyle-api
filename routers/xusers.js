const express = require('express')
const Xuser = require('../models/xuser')
const router = new express.Router()

router.post('/exusers', async (req, res) => {
    const xuser = new Xuser(req.body)

    try {
        await xuser.save()
        res.status(201).send(xuser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/exusers', async (req, res) => {
    try {
        const xusers = await Xuser.find({})
        res.send(xusers)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/exusers/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const xuser = await Xuser.findById(_id)

        if (!xuser) {
            return res.status(404).send()
        }

        res.send(xuser)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/exusers/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const xuser = await Xuser.findById(req.params.id)

        updates.forEach((update) => xuser[update] = req.body[update])
        await xuser.save()

        if (!xuser) {
            return res.status(404).send()
        }

        res.send(xuser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/exusers/:id', async (req, res) => {
    try {
        const xuser = await Xuser.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(xuser)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router