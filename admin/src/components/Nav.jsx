import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/CartCraze.png'
import axios from 'axios'
import { AdminDataContext } from '../context/AdminContext'
const Nav = () => {

  let navigate = useNavigate()
  let {getAdmin} = useContext(AdminDataContext)
  const handleLogout = async()=>{
   try {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/logout`,{withCredentials:true})
    console.log(res.data)
    navigate('/admin-login')
    getAdmin()
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <div className='fixed h-[70px] top-0 left-0 w-full backdrop-blur-lg bg-[#1a1a1a]/70 border-b border-white/20 shadow-lg flex items-center justify-between px-6 py-3 z-10'>
      <div className='w-[30%] flex justify-start items-center gap-[10px] cursor-pointer' onClick={()=>navigate('/admin-dashboard')}>
        <img className='md:h-[7vh] h-[5vh] cursor-pointer' src={logo} alt="" />
      </div>
      <button onClick={handleLogout} className='className= h-[6vh] w-[20vw] md:w-[10vw] bg-orange-500 mt-1 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-300'> 
      Logout</button>
    </div>
  )
}

export default Nav