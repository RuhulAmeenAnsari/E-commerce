import React, { useContext } from 'react'
import {Routes,Route , useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Collections from './pages/Collections'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import { UserContext } from './context/UserContext'



const App = () => {
  const {userData}= useContext(UserContext)
  // let location = useLocation()
  return (
    <>
     {userData&&<Navbar/>}
    <Routes>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/collection' element={<Collections/>}/>
    <Route path='/product' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    
    </>
  )
}

export default App