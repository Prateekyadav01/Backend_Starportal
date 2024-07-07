import { ApiError } from "../utils/ApiError.js";
import jwt from 'jsonwebtoken'



export const authMiddleWare = (req, res, next) =>{
    const accessToken = req.cookies.accessToken;
    if(accessToken){
        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded;
            req.user.connected = true;
            console.log(decoded);
            next();
        
        } catch (error) {
            console.log("accestoken decode error: " + error);
            next(new ApiError(401, "accesstoken decode error"));
        }
    }
    else{
        console.log("accessToken is not get from cookies");
        next(new ApiError(401, "Unauthorized Cookies Error"));
    }
 
}