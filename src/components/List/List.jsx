import React from 'react'
import Casual from "../../assets/11.png"
import Formal from "../../assets/22.png"
import Party from "../../assets/44.png"
import Gym from "../../assets/33.png"

const List = () => {
  return (
    <div className='flex items-center justify-center py-20 bg-white '>
      {/* Əsas boz konteyner */}
      <div className="bg-[#F0F0F0] rounded-[40px] p-6 md:p-14 w-[95%] max-w-[1200px]">
        
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-12 uppercase font-integral leading-tight">
          Browse by Dress Style
        </h2>

  
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          
      
          <div className="md:col-span-2 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
            <span className="absolute top-4 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10 text-black">
              Casual
            </span>
            <img 
              src={Casual} 
              alt="Casual Style" 
              className="absolute right-0 bottom-0 h-full w-full object-cover  transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          
          <div className="md:col-span-4 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
            <span className="absolute top-4 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10 text-black">
              Formal
            </span>
            <img 
              src={Formal} 
              alt="Formal Style" 
              className="absolute right-0 bottom-0 h-full w-full object-cover object-right-top transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          
          <div className="md:col-span-4 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
            <span className="absolute top-4 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10 text-black">
              Party
            </span>
            <img 
              src={Party} 
              alt="Party Style" 
              className="absolute right-0 bottom-0 h-full w-full object-cover object-right-top transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          <div className="md:col-span-2 relative h-[190px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer">
            <span className="absolute top-4 left-6 md:top-6 md:left-9 text-2xl md:text-3xl font-bold z-10 text-black">
              Gym
            </span>
            <img 
              src={Gym} 
              alt="Gym Style" 
              className="absolute right-0 bottom-0 h-full w-full object-cover  transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

        </div>

    
        <div className='flex items-center justify-center mt-10 md:hidden'>
           <button className='w-full py-4 bg-white rounded-full font-medium text-black border border-gray-200'>
             View All Styles
           </button>
        </div>
      </div>
    </div>
  )
}

export default List