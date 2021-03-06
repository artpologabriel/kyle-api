const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/1user')
const taskRouter = require('./routers/1task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require ('bcrypt.js')

// const myFunction = async () => {
//      const password = '1234567'
//      const hashedPassword = await bcrypt.hash(password, 8)
//             console.log(password)
//             console.log(hashedPassword)
//  const isMatch = await bcrypt.compare ('1234567' , hashedPassword)
//          console.log(isMatch)
// }

// myFunction()