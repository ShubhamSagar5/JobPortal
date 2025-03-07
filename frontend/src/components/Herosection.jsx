import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Herosection = () => {
  return (
    <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#1565c0] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#1565c0]'>Dream Jobs</span></h1>
                <p>Find your dream job or hire top talent effortlessly—JobHunt connects opportunities with seekers seamlessly!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        
                        className='outline-none border-none w-full'

                    />
                    <Button  className="rounded-r-full bg-[#1565c0]">
                       <SearchIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Herosection