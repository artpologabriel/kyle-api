// const express = require('express')
// require('./db/mongoose')
// const User = require('./models/user')
// const Castle = require('./models/castle')
// const KingsHall = require('./models/kingshall')
// const Wall = require('./models/wall')
// const MapPosition = require('./models/map_position')

// const userRouter = require('./routers/user')
// const teleportRouter = require('./routers/teleport')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(userRouter)
// //app.use(teleportRouter)

// //let ts = (new Date()).getSeconds();
// //let ts = (new Date()).getMilliseconds();
// //let ts = ((Date.now()).getTime() - (Date.now()).getMilliseconds()) / 1000 
// // timestamp in milliseconds


// // timestamp in seconds
// //console.log(Math.floor(ts/1000));


// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Welcome to Pride and Glory RTS Game -  databse server')
//     res.status(200)
// })

// app.post('/teleport', async (req, res) => {
//     // const updates = Object.keys(req.body)
//     const u_id  = req.body.u_id
//     const x_pos = req.body.x_pos
//     const z_pos = req.body.z_pos
     
//     MapPosition.findOneAndUpdate({u_id},  
//         {x_pos, z_pos}, null, function (err, docs) { 
//         if (err){ 
//             console.log(err) 
//             res.status(400).send()
//         } 
//         else{ 
//             console.log("Original Doc : ",docs)
//             res.send(docs)
//         } 
//     }); 


  

// })



// app.get('/userdata/:id', async (req, res) => {

//     const u_id = req.params.id

//         try{
            
//             const user = await  User.findById(u_id)
//             const map_position = await MapPosition.find({u_id}).exec(); 
//             const castle = await Castle.find({u_id}).exec(); 
//             const kings_hall = await KingsHall.find({u_id}).exec(); 
//             const wall = await Wall.find({u_id}).exec(); 

//             const data = {'user': user , 'data':{
//                 'map_position': map_position,
//                 'castle': castle,
//                 'kings_hall': kings_hall,
//                 'wall': wall
//             }}

//             res.send(data)
            
//         } catch (e) {

//             res.status(404).send()
//         }
// })    

// app.get('/usersposition/', async (req, res) => {

    
//         try{                        
//             const map_position = await MapPosition.find({}).exec(); 

//             const data = {'data': {map_position}}
//             res.send(data)
            
//         } catch (e) {

//             res.status(404).send()
//         }
// })


// app.get('/users', (req, res) => {
//     User.find({}).then( (users) => {
//        res.send(users)
//     }).catch( (e) => {
//        res.send(e)
//     })   
// })

// app.get('/castles', (req, res) => {
//     Castle.find({}).then( (castle) => {
//        res.send(castle)
//     }).catch( (e) => {
//        res.send(e)
//     })   
// })

// app.get('/castleinfo/:id', async (req, res) => {    
//         const u_id = req.params.id
//     try{
//         const castle = await Castle.find({u_id}).exec();
//         res.send(castle)        
//     } catch (e) {
//         res.status(404).send()
//     } 
// })



// app.listen(port, () => {
//         console.log('Server is running @ ' + port)
// })