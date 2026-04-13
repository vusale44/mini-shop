import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ProviderContext } from '../Context/Contextapi'


const Layout = () => {
  return (
    <div>
      <ProviderContext>
        <Header/>
          <Outlet/>
         </ProviderContext>

      
        <Footer/>
     
    </div>
  )
}

export default Layout