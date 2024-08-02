import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Project from './Components/Project'
import GetInTouch from './Components/GetInTouch'

const App = () => {
  return (
    
  <div className='overflow-x-hidden text-neutral-300 
  antialiased selection :bg-cyan-300 selection:bg-cyan-900'>
    <div className="fixed top-0 -z-10 h-full w-full">
  


{/* <div class="relative h-full w-full bg-slate-950"> */}
<div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] 
bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

    <div className="container mx-auto px-8"></div>
  {/* </div> */}
  </div>
  <Navbar/>
  <Hero/>
  <About/>
  <Technologies/>
  <Experience/>
  <Project/>
  <GetInTouch/>
  </div>
  )
}

export default App
