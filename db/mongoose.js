const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api-kyle-arthur-gabriel-soriano', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})