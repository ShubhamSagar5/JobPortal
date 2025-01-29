import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import CategoaryCrousel from '../components/CategoaryCrousel'

const Home = () => {
  return (
    <div >
     <div className='sticky w-full top-0 bg-white'>
     <Navbar/>
     <Herosection/>
     <CategoaryCrousel/>
     </div> 
    
    </div>
  )
}

export default Home