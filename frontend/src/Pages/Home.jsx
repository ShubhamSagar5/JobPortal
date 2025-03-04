import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import CategoaryCrousel from '../components/CategoaryCrousel'
import LatestJobs from '../components/LatestJobs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div >
     <div className='sticky w-full top-0 bg-white'>
     <Navbar/>
     <Herosection/>
     <CategoaryCrousel/>
     <LatestJobs/>
     <Footer/>
     </div> 
    
    </div>
  )
}

export default Home