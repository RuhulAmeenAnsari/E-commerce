import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className=' w-[18%] min-h-[100vh] fixed left-0 top-0 py-[60px] border-white border-r-[1px]'>
        <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
          <div onClick={()=>navigate('/add')} className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer  hover:bg-orange-500'>
          <IoIosAddCircleOutline className='text-white md:text-2xl text-3xl '/>
            <p className='text-white hidden md:block hover:text-black'>Add Items</p>
          </div>
          <div onClick={()=>navigate('/lists')} className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer  hover:bg-orange-500'>
          <CiViewList className='text-white md:text-2xl text-3xl '/>
            <p className='text-white hidden md:block hover:text-black'>List Items</p>
          </div>
          <div onClick={()=>navigate('/orders')} className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer  hover:bg-orange-500'>
          <IoMdCheckmarkCircleOutline className='text-white md:text-2xl text-3xl '/>
            <p className='text-white hidden md:block hover:text-black'>View Orders</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar