import express from "express"
import { DB_NAME } from '../constants.js';
import mongoose from "mongoose";
const app = express()

// ;(async ()=>{
// try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("Error", error);
//     throw error
//    })

//    app.listen(process.env.PORT,()=>{
//     console.log("App is listening");
//    })
// } catch (error) {
//     console.log(error.message)
// }
// })()

const connectDB = async()=>{
    try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log("Database Connected!")
        app.on("error",(error)=>{
         console.log("Error", error);
         throw error
        })
     
        app.listen(process.env.PORT,()=>{
         console.log("App is listening");
        })
     } catch (error) {
         console.log(error.message);
         process.exit(1)
     }
}

export default connectDB;