import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router'

const Card = ({name , image , id , price}) => {
    let {currency} = useContext(shopDataContext)
    let navigate = useNavigate()
  return (
    <>
    <div onClick={()=>navigate(`/productdetails/${id}`)} className='w-[300px] max-w-[90%] h-[400px] bg-[#fffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049] '>
        <img src={image} className='w-[100%] h-[80%] rounded-sm object-contain' alt="" />
        <div className='text-white text-[18px] py-[10px] line-clamp-3 '>{name}</div>
        <div className='text-[#f3fafa] text-[14px]'>{currency} {price}</div>

    </div>
    
    </>
  )
}

export default Card