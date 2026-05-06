import React from 'react'

const Footerpart = () => {
  return (
    <div className='w-[80%] bg-black h-[200px] flex justify-evenly items-center relative top-8 z-[1] rounded-[30px]'>
        <h1 className='text-white w-[500px] text-[40px] font-bold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
       <div className='flex flex-col justify-center  w-[350px] h-[208px] gap-4'>
        <input className='bg-white text-black h-[43px] rounded-[20px]' type="text" placeholder="Enter your email" />
        <h1 className='bg-white text-black h-[43px] rounded-[20px] flex items-center justify-center'  >Subscribe to Newsletter</h1></div> 
    </div>
  )
}

export default Footerpart