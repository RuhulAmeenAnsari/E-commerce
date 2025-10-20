import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UserDataProvider from './context/UserContext.jsx'
import ShopContext from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <UserDataProvider>
  <ShopContext>
  <StrictMode>

    <App />

  </StrictMode>
  </ShopContext>
  </UserDataProvider>
  </BrowserRouter>
  ,

)
