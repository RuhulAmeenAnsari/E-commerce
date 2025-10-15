import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Orders from './pages/Orders'
import Lists from './pages/Lists'
import Login from './pages/Login'
import { AdminDataContext } from './context/AdminContext'

const App = () => {
  let {adminData} = useContext(AdminDataContext)
  return (
    <div>
      {!adminData ? <Login/> :
      <>
       <Routes>
        <Route path='/admin-dashboard' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/admin-login' element={<Login/>}/>
      </Routes>
      </>}
     
    </div>
  )
}

export default App