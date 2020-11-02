const express = require('express')
const Xtask = require('../models/xtask')
const router = new express.Router()

router.post('/extasks', async (req, res) => {
    const xtask = new Xtask(req.body)

    try {
        await xtask.save()
        res.status(201).send(xtask)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/extasks', async (req, res) => {
    try {
        const xtasks = await Xtask.find({})
        res.send(xtasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/extasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const xtask = await Xtask.findById(_id)

        if (!xtask) {
            return res.status(404).send()
        }

        res.send(xtask)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/extasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const xtask = await Xtask.findById(req.params.id)

        updates.forEach((update) => xtask[update] = req.body[update])
        await task.save()

        if (!xtask) {
            return res.status(404).send()
        }

        res.send(xtask)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/extasks/:id', async (req, res) => {
    try {
        const xtask = await Xtask.findByIdAndDelete(req.params.id)

        if (!xtask) {
            res.status(404).send()
        }

        res.send(xtask)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router