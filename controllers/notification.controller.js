import { Notification } from "../models/notification.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const notificationCreate = async(req,res)=>{
    try {
        const user = req.user;
        const{message} = req.body
        console.log("------------------>",user);
        const newCreateNotification = await Notification.create({
            
            message,
            userId: user._id
        })
        console.log(newCreateNotification.userId);
        if(!newCreateNotification){
            throw new ApiError(400,"Something went wrong creating notification");
        }
        return res.status(200).json(new ApiResponse(200,"New Notification Created"))
    } catch (error) {
        throw new ApiError(400,"Something went wrong creating notification");
    }
}

export const notificationGetAll = async(req,res)=>{
    try {
        const user = req.user;
        console.log("------------------>getALL",user);
        const notifications = await Notification.find({userId:user._id});
        if(notifications.length===0){
            throw new ApiError(400,"No Notifications found")
        }
        return res.status(200).json(new ApiResponse(200,notifications,"all notifications"))
    } catch (error) {
        throw new ApiError(400,"Something went wrong getting notifications")
    }
}

export const notificationGetById = async(req,res)=>{
    try {
        const notificationId = req.params.id;
        const notification = await Notification.findById(notificationId);
        if(!notification){
            throw new ApiError(400,"No notification found with this id")
        }
        return res.status(200).json(new ApiResponse(200,notification,"notification details"))
    } catch (error) {
        throw new ApiError(400,"Something went wrong getting notification")
    }
}

export const anyNotification = async(req,res)=>{
    try {
        const notificationId = req.params.id;
        const notification = await Notification.findByIdAndUpdate(notificationId,{read: true}, {new:true});
        if(!notification){
            throw new ApiError(400,"No notification found with this id")
        }
        return res.status(200).json(new ApiResponse(200,notification,"notification marked as read"))
    } catch (error) {
        throw new ApiError(400,"Something went wrong getting notification anyNotifications")
    }
}