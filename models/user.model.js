import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uuidv4()
    },
    userName: {
        type: String,
        required: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    connected:{
        type: Boolean,
        default: false
    }
})




export const User = mongoose.model('User',userSchema);