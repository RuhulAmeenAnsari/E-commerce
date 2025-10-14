import React, {  useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Background from '../components/Background'

const Home = () => {
  let heroData = [
    {text1:"30% OFF Limited Offer",text2:"Style That"},
    {text1:"Discover the best Items",text2:"Limited time Only!.."},
    {text1:"Explore our best collection",text2:"Shop now!.."},
    {text1:"Choose your perfect Fashion ",text2:"Now on sale"},
  ]

  useEffect(()=>{
    let interval = setInterval(() => {
      setHeroCount(prev=>(prev===3?0:prev+1))
    }, 3000);
    return clearInterval(interval)
  },[])
  
  const [heroCount, setHeroCount] = useState(0)
  return (
   <div className='overflow-x-hidden  relative'>
     <div className='bg-gradient-to-l from-[#1c1923] to-black lg:w-[100vw] md:w-[50vw] lg:h-[100vh] md:h-[50vh]'>
      <Background heroCount={heroCount}/>
      <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}/>
    </div>
   </div>
  )
}

export default Home