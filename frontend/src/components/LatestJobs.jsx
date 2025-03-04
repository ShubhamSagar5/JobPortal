import React from 'react'
import LatestJobCard from './LatestJobCard'

const LatestJobs = () => {
  
    const arr = [1,2,3,4,5,6,7,8,9]
  
  
    return (
    <div className='mt-20 mb-10'>
        <p className='text-[1.8rem] font-bold ml-6'><span className='text-[#1565c0]'>Latest & Top </span>Job Openings</p>
        <div className='px-20 pt-5 grid grid-cols-3 justify-items-center gap-5.5'> 
            {
                arr.slice(0,6).map((item,index)=>{
                    return (
                        <div className='my-2 shadow p-2 rounded-sm'><LatestJobCard/></div>
                    )
                })
            }
        </div>
</div>
  )
}

export default LatestJobs