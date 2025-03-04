import React from 'react'

const Badge = ({title,colorName}) => {
  return (
    <div>
        <div className='px-[4px] rounded-lg border text-xs font-semibold'>
           <span style={{color:colorName}}>{title}</span> 
        </div>
    </div>
  )
}

export default Badge