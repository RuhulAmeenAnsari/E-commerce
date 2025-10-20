import React from 'react'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'

function Products() {
  return (
    <div className='h-auto w-[100vw] bg-gradient-to-l from-[#1c1923] to-black flex items-center justify-start flex-col py-[20px]'>
      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col'>
         <LatestCollection/>
      </div>
      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col'>
         <BestSeller/>
      </div>
    </div>
  )
}

export default Products
