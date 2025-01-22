import Jobs from "../Models/job.model.js"



export const register = async(req,res) => {
    try {
        const {title,description,requirements,salary,location,jobType,postion,company,experience} = req.body
    
        const userId  = req.userId 

        if(!title || !description || !requirements || !salary || !location || !jobType || !postion || !company || !experience){
            return res.status(400).json({
                success:false,
                message:"Something is missing"
            })
        }

        const job = new Jobs({
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            postion,
            experience,
            company,
            created_by:userId
        })

        await job.save() 

        return res.status(200).json({
            success:true,
            message:"Job Posted Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


export const getAllJobs = async(req,res) => {
    try {
        
        const filter = req.query.keyword || ""
        const jobs = await Jobs.find({$or:[
            {
                title:{$regex:filter,$options:"i"}
            },
            {
                description:{$regex:filter,$options:"i"}
            }
        ]});

        if(!jobs){
            return res.status(404).json({
                success:false,
                message:"No Jobs Found"
            })
        }

        return res.status(200).json({
            success:true,
            jobs
        })



    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 


export const getJobById = async(req,res)=>{
    try {
        const jobId = req.params.id 

        const job = await Jobs.findById(jobId)

        
        if(!job){
            return res.status(404).json({
                success:false,
                message:"No Jobs Found"
            })
        }
        return res.status(200).json({
            success:true,
            job
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

export const getJobOfAdmin = async(req,res) => {
    try {
        const userId = req.userId 

        const job = await Jobs.find({created_by:userId});
        if(!job){
            return res.status(404).json({
                success:false,
                message:"No Jobs Found"
            })
        }

        return res.status(200).json({
            success:true,
            job
        })



    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}