const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/kyleu')
const taskRouter = require('./routers/kylet')

const app = express()
const port = process.env.PORT || 3000



// app.use((req,res,next) => {
//     res.status(503).send('site is currently down . please comeback soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

const Task = require('./models/kylet')

    const task = await  Task.findById('5fae1ca80871cb1c3de0371a')

    console.log(task)

const main = async ( ) => {

}

main ()

