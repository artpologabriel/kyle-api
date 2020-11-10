const jwt = require ('jsonwebtoken')
const User = require('../models/kyleu')


const auth = async (req , res , next) => {
    try{
        const token = req.header('Authorization')
        console.log(token)
    }catch (e){
        res.status(401).send({error : 'please log in'})
    }
}

module.exports = auth