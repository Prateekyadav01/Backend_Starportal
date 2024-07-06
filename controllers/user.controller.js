import { v4 as uuidv4 } from 'uuid';
import {User} from '../models/user.model.js'


export const createUser = async(req,res)=>{
    try {
        const{userName , email , password} = req.body;
        const userId = uuidv4();
        const newUser = await User.create({
            id: userId,
            userName,
            email,
            password,
        })
        res.status(200).json({
            message: 'User created successfully',
            user: newUser,
        })
    } catch (error) {
        console.log(error);
    }
}