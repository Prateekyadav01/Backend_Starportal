import { app } from "./app.js";
import { dbConnection } from "./config/database.js";





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