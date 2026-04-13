import React from 'react'
import { Outlet } from 'react-router-dom'
import Detailcart from '../../components/Detailcart/Detailcart'
import Basket from '../../components/Basket/Basket'

const Cartpage = () => {
  
    return (
        <div>
            
            <Basket />
            <Outlet />
        </div>
    )
}

export default Cartpage