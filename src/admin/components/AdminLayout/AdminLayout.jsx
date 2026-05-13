import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarWithActiveBorder from '../Sidebar/Sidebar'
import { ProviderContext } from '../../../components/Context/Contextapi'
// Buradakı import adını Contextapi faylındakı export adınla eyniləşdir (məsələn: ProductProvider)


const AdminLayout = () => {
  return (
    <div className='w-[100%] flex justify-between'>
      {/* ProviderContext deyil, əsl Provider komponentini bura yazmalısan */}
      <ProviderContext>
        <header>
            <SidebarWithActiveBorder/>
        </header>
        <main className='w-[80%] flex justify-end'>
            <Outlet/> 
        </main>
     </ProviderContext>
    </div>
  )
}

export default AdminLayout