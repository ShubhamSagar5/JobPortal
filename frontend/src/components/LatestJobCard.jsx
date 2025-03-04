
import React from 'react'
import Badge from './Badge'


const LatestJobCard = () => {
  return (
    <div>
        <div>
            <p className='text-lg font-semibold'>Company Name</p>
            <p className='text-sm text-gray-500 '>India</p>
        </div>
        <div className='mt-2'>
            <p className='font-semibold'>Job Title</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus, .</p>
        </div>
        <div className='flex gap-4 mt-4 mb-2'>
        <Badge title="12 Position" colorName="#1565c0"/>
        <Badge title="Part Time" colorName="red"/>
        <Badge title="24 LPA" colorName="#1565c0"/>
        </div>
    </div>
  )
}

export default LatestJobCard