import React from 'react'
import Photo from '../../assets/mainphoto.png'
import star1 from '../../assets/Vector (1).png'
import star2 from '../../assets/Vector (2).png'


const Main = () => {
    return (
        <div className='bg-[#f2f0f1] flex items-center justify-evenly w-[100%] '>
            <div className='flex flex-col items-start justify-center w-[500px]'>
                <b className='font-integral w-[520px] text-[68px] h-[180px] leading-[0.9] mb-3 tracking-tight uppercase' >FIND CLOTHES THAT MATCHES YOUR STYLE</b>
                <p className='font-extralight text-[14px] h-[65px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='bg-black text-white w-[150px] h-[40px] rounded-[40px]'>Shop now</button></div>
          
                <img className='absolute ml-[1175px] mb-[400px]' src={star2} alt="" />
            <img className='w-[670px]' src={Photo} alt="" />
            <img className='absolute' src={star1} alt="" />

        </div>
        
    )
}

export default Main