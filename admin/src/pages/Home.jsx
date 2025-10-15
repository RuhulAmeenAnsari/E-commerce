import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='bg-gradient-to-l from-[#1c1923] to-black w-[100vw] h-[100vh] '>
      <Nav/>
      <Sidebar/>
    </div>
  )
}

export default Home