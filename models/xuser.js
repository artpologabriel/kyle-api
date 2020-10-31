const mongoose = require('mongoose')
const validator = require('validator')

const Xlist = mongoose.model('Xlist', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    reason: {
        unique: true,
        type: String,
        trim: true,
        lowercase: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Email is invalid')
        //     }
        // }
    },
    date: {
        type: String,
        required: true,
        // minlength: 7,
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
    }
})

module.exports = Xlist