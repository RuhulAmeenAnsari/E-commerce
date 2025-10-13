import React, { useContext , useEffect, useState} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router'
const UserProtectionWrapper = ({children}) => {
  const navigate = useNavigate()
  const [isLoading, setisLoading] = useState(true)
  const token = localStorage.getItem('token')
  const {user , setUser} = useContext(UserContext)
 
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
    const res =  axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/profile`,{
      headers:{
        "Authorization":`bearer ${token}`
      }
    })

    console.log(res);
  })

  if(!isLoading){
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectionWrapper