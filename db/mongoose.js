const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kyle_users', {
    useNewUrlParser: true,
    useCreateIndex: true
})

