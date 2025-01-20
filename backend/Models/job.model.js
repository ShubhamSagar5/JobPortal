import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
        required:true
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    postion:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    application:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application"
    }]
},{
    timestamps:true
})

const Jobs = mongoose.model("Job",jobSchema);

export default Jobs