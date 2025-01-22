import Company from "../Models/company.model.js";



export const registerCompany = async(req,res) => {
    try {
        const {name,description} = req.body; 
        const recruiterId = req.userId; 

        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"Something is missing"
            })
        }

        const company = new Company({
            name,
            description,
            userId:recruiterId
        })
        await company.save()

        return res.status(200).json({
            success:true,
            message:"Company register successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

export const getListOfCompanies = async(req,res)=>{
    try {
        
        const listOfCompany = await Company.find({});
        if(!listOfCompany){
            return res.status(404).json({
                success:false,
                message:"No Single Comapny Found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"List of companies",
            listOfCompany
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

export const getSingleCompany = async(req,res)=>{
    try {
        const companyId = req.params.id;

        const company = await Company.findById(companyId);

        if(!company){
            return res.status(404).json({
                success:false,
                message:"Company Not Found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"List of companies",
            company
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

export const update = async(req,res) => {
    try {
        const {name,description,website,location} = req.body
        const companyId = req.params.id;

        //cloudinary for logo

        const company = await Company.findByIdAndUpdate(companyId,{
            name,
            description,
            website,
            location
        },{new:true}) 

        return res.status(200).json({
            success:true,
            message:"Company Details",
            company
        })
       
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}