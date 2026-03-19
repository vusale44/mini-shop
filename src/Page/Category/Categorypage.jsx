import React from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
import Casuals from '../../components/Casuals/Casuals';
import Footer from '../../components/Footer/Footer';






const Categorypage = () => {
  return (
    <div>
        <Header/>
        <div className='flex items-center justify-center gap-5 w-[200px] mt-7'>
            <Link to = "/">Home↩ </Link> 
            <h1>Casual </h1></div>
        <Filter/>
   <Casuals/>
   <Footer/>
    </div>
  )
}

export default Categorypage