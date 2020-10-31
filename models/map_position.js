
const mongoose = require('mongoose')
const validator = require('validator')

const MapPosition = mongoose.model('MapPosition', {

    u_id:{
        type: String
    },
    x_pos:{
        type: Number
    },
    z_pos:{
        type: Number
    },
    date:{
        type: Number        
    }
    
})

module.exports = MapPosition