import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
const Background = ({heroCount}) => {
  if(heroCount===0){
    return(
        <img src={img1} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover' />
    )
  }
  else if(heroCount===1){
    return(
        <img src={img2} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    )
  }
  else if(heroCount===2){
    return(
        <img src={img3} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    )
  }
  else if(heroCount===3){
    return(
        <img src={img4} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    )
  }
}

export default Background