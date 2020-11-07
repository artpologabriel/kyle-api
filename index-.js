const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/kyleu')
const taskRouter = require('./routers/kylet')

const app = express()
const port = process.env.PORT || 3000

//middle ware express
// app.use((req, res, next)=>{
//     if (req.method === "GET") {
//         res.send('GET REQ ARE DISABLE')
//     } else {
//         next()
//     }
// })

// app.use((req , res , next) => {
//     res.status(503).send('SITE IS CURRENTLY UNDER MAINTENANCE PLEASE COMEBACK LATER')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


//example of hashing
// const bcrypt = require('bcryptjs')

// const myFunction = async ()=> {
//     const password = "123567"

//     const hashedPassword = await brcypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//      const isMatch = await bcrypt.compare('123567',hashedPassword)
//          console.log(isMatch)
// }

// myFunction()



//example of token
// const jswt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jswt.sign({_id: 'asdwasdsd'},'thisismynewcoursebtch',{ expiresIn: '7 days'})
//     console.log(token)

//  const data =  jswt.verify(token, 'thisismynewcoursebtch')

//  console.log(data)
// }

// myFunction()



//example of hiding data
// const get = {
//     name:'kyle'
// }

// Pet.toJSON = function(){
    
//     return {}
// }

// console.log(JSON.stringify(get))
