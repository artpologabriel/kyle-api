const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const Task = require ('./kylet')

//password hashing
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },

    tokens: [{
        token : {
            type: String,
            require: true
        }
    }]
})

userSchema.method.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    
    return userObject
}

//
userSchema.virtual('task'),{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
}


//auth token
userSchema.methods.generateAuthToken = async function () {
    const user = this 

    const token = jwt.sign({_id: user._id.toString()}, 'thisismynewcourse')

    user.tokens = user.token.concat({ token })
    await user.save()

    return token
}

//log in user
userSchema.statics.findByCredentials = async (email , password) => {
    const user = await User.findOne ({email})

    if(!user) {
        throw new Error ('unable to login!')
    }

    const isMatch = await bcrypt.compare (password, user.password)
    if(isMatch){
        throw new Error('unable to log in')
    }

    return user
}

//password hashing
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


//delete when the user delete his acc
userSchema.pre('remove',async function(next){
    const user = this

    await Task.deleteMany({owner : user._id})

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User