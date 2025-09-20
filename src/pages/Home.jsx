import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import About from './About.jsx';

const Home = () => {
  return (
    <div>
       <main className=''>
         <HeroSection/>
         <About/>
       </main>
    </div>
  )
}

export default Home