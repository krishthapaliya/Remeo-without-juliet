import React from 'react'
import Herosection from './Herosection'
import AboutUs from './Aboutus'
import Blog from './Blog'

const Home = () => {
  return (
    <div className='m-0.5'>
        <Herosection/>
        <AboutUs />
        <Blog />
       
    </div>
  )
}

export default Home