import Application from "../Models/application.model.js";
import Jobs from "../Models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const applicantId = req.userId;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job Id Required",
      });
    }

    const findJob = await Jobs.findById(jobId);
    if (!findJob) {
      return res.status(400).json({
        success: false,
        message: "Job Not Found",
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: applicantId,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already Apply",
      });
    }

    const apply = new Application({
      job: findJob._id,
      applicant: applicantId,
    });
    await apply.save();

    findJob.application.push(apply._id);
    await findJob.save();

    return res.status(200).json({
      sucess: true,
      message: "Applied to job Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getListOfApplyJobsbyApplicant = async (req, res) => {
  try {
    const applicantId = req.userId;

    const applyList = await Application.find({ applicant: applicantId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!applyList) {
      return res.status(400).json({
        success: false,
        message: "No application Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List",
      applyList,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const listOfApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    const findList = await Jobs.find({_id:jobId}).populate({
        path: "application",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "applicant",
        },
      });

    if (!findList) {
      return res.status(400).json({
        success: false,
        message: "No Any Applicants Found",
      });
    }

    return res.status(200).json({
        success: true,
        message: "List",
        findList,
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStatus = async(req,res)=>{
    try {
        const applicationId = req.params.id;
        const {status} = req.body

        if(!status){
            return res.status(400).json({
                success:false,
                message:"Status is required"
            })
        }

        const findApplication = await Application.findOne({_id:applicationId})

        if(!findApplication){
            return res.status(400).json({
                success:false,
                message:"Application Not Found"
            })
        }

        findApplication.status = status.toLowerCase();

        await findApplication.save();

        return res.status(200).json({
            success: true,
            message: "Status updated successflly",
        
          });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
