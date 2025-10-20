import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const shopDataContext = createContext()
function ShopContext({children}) {

    const [products, setProducts] = useState([])
    let currency = '₹'
    let delivery_fee = 40

    const getProducts = async()=>{
        try {
            let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/allProducts`,{withCredentials:true})
            console.log(res.data)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])


    let value = {
products,getProducts,delivery_fee,currency
    }
  return (
    <div>
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>


    </div>
  )
}

export default ShopContext
