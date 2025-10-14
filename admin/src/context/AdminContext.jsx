import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AdminDataContext = createContext()

const AdminContext = ({children}) => {

    const [adminData, setadminData] = useState(null)

    const getAdmin = async()=>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/getAdmin`,{withCredentials:true})
        setadminData(res.data)
        // console.log(res.data)
        } catch (error) {
            setadminData(null)
            console.log(`get admin frontend error ${error}`)
        }
    }

    useEffect(()=>{
        getAdmin()
    },[])

    let value = {adminData,setadminData,getAdmin}

  return (
    <div>
        <AdminDataContext.Provider value={value}>
        {children}
        </AdminDataContext.Provider>
    </div>
  )
}

export default AdminContext