const express = require('express')
const User = require('../models/user')
const Castle = require('../models/castle')
const KingsHall = require('../models/kingshall')
const Wall = require('../models/wall')
const MapPosition = require('../models/map_position')
const router = new express.Router()



router.post('/user', (req, res) => {

    let ts = Date.now();

    const userInfo = {
        "u_date_registered": ts
    }
    const user = new User(userInfo)

    console.log(user.id)

    const castleInfo = {
        u_id: user.id,
        c_date: ts ,
        c_server_id: 1        
    }
    const castle = new Castle(castleInfo)
    console.log(castle);

    const kingsHallInfo = {
        u_id: user.id,
        kh_date: ts,
        kh_server_id: 1
    }
    const kings_hall = new KingsHall(kingsHallInfo)
    console.log(kings_hall)

    const wallInfo = {
        u_id: user.id,
        w_date: ts,
        w_server_id: 1
    }
    const wall = new Wall(wallInfo)


    const xPos= Math.floor(Math.random() * 1100)
    const zPos= Math.floor(Math.random() * 1100)


    const mapPosInfo = {
        u_id: user.id,
        x_pos: xPos,
        z_pos: zPos,
        date: ts
    }
    const mapPos = new MapPosition(mapPosInfo)


    mapPos.save()
    wall.save()
    kings_hall.save()
    castle.save()

    user.save().then( () => {
        
        res.send({'user': user , 'data':{
            'map_position':mapPos, 
            'castle': castle,
            'kings_hall': kings_hall,
            'wall': wall
    }})

        
    }).catch((e) => {
        res.status(400).send(e)
    })

})

module.exports = router