// const express =require('express');
// const cors= require('cors');
// const mongoose=require('mongoose');

// const dotenv=require('dotenv');
// dotenv.config();
// const app=express();
// const port =5800;

// app.use(cors());
// app.use(express.json());


// mongoose.connect(process.env.MONGODB_URI)
// const db=mongoose.connection;
// db.on('error',(err)=>{
//     console.log("Mongo db connection error",err)
// })
// db.once('open',()=>{
//     console.log('Connected to mongodb');
// })

// app.get('/',(req,res)=>{
//     console.log("running");
//     res.status(200).send('Hello world')
// })
// app.use("/user",require('./router/UserRouter'))

// app.listen(port,()=>{
//     console.log(`App is Running on port ${port}`);
 


// })