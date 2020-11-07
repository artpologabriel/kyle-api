const jwt = require ('jsonwebtoken')
const User = require ('../models/kyleu')



const auth = async (req , res , next) =>{
    try {
        const token = req.header('authorization').replace('Bearer', '')
        const decoded = jwt.verify(token , 'thisismynewcourse')
        const user = await User.findOne({_id: decoded_id, 'tokens.token': token})

        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
    }catch (e) {
        res.status(401).send({error : 'PLEASE AUTHENTICATE'})
    }        
    
}
module.exports = auth