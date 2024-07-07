import { app } from "./app.js";
import { dbConnection } from "./config/database.js";
import dotenv from "dotenv";


dotenv.config({
    path: './.env'
})



dbConnection()
.then(()=>{
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');  
    })
})
.catch((e)=>{
    console.error('Database connection failed:', e);
    process.exit(1);  
})