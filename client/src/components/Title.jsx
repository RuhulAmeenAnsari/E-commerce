import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='text-white inline-flex text-center items-center gap-2 mb-3 text-[35px] md:text-[40px]'>
    <p className='text-blue-100' > {text1} <span className='text-blue-500'>{text2}</span></p>
    </div>
  )
}

export default Title