import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User',
    },
    message:{
        type: String,
        required: true
    },
    read:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})



export const Notification = mongoose.model('Notification',notificationSchema);