import React from 'react'
import Category from '../../components/Category/Category'
import { Outlet } from 'react-router-dom'

const Filtercategory = () => {
    return (
        <div>
            <Category />
            <Outlet />
        </div>
    )
}

export default Filtercategory