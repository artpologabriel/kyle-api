const jwt = require ('jsonwebtoken')
const { findOne } = require('../models/kyleu')
const User = require('../models/kyleu')


const auth = async (req , res , next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token ,'thisismynewcourse')
        const user = await findOne({ _id : decoded._id, 'tokens.token': token })

        if(!user){
            throw new Error()
        }
        req.user = user
        next ()
    }catch (e){
        res.status(401).send({error : 'please log in'})
    }
}

module.exports = auth