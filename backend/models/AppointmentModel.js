import mongoose from 'mongoose';

const appointmenetSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    docId:{
        type:String,
        required:true
    },
    slotDay:{
        type:String,
        required:true
    },
    slotTime:{
        type:String,
        required:true
    },
    userData:{
        type:Object
        ,
        required:true
    },
    docData:{
        type:Object,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    cancelled:{
        type:Boolean,
        default:false
    }
})

const appointmentModel=mongoose.model("appointmet",appointmenetSchema);

export default appointmentModel;