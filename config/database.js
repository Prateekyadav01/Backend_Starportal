import mongoose from "mongoose";



 export const dbConnection = async(req,res)=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/starpotal");
        console.log("mongodb connection established");
    } catch (error) {
       console.log("mongodb connection error");
    }
}