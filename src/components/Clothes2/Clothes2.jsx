import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { ProductContext } from '../Context/Contextapi';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Clothes2 = () => {

    const {products} = useContext (ProductContext)
    
      const navigate = useNavigate();
    
  
    return (
        < div className='w-[100%] h-auto mx-auto mt-24 pb-20' >

            <h2 class="text-black text-[36px] font-extrabold mt-9 flex justify-center font-integral uppercase">Top selling</h2>


            <div class="flex items-center justify-center w-[90%] mx-auto">
                <div class="flex items-center gap-8 mt-8">
                    {products.slice(4, 8).map((mehsul) => {
                        return (
                            <div onClick={() => navigate(`/product/${mehsul.id}`)}
                            class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
                                <a href="javascript:void(0)" class="block">
                                    <div class="w-[300px] h-[300px]">
                                        <img src={mehsul.image} alt={mehsul.name}
                                            class="w-full h-full object-contain" />
                                    </div>

                                    <div className="p-6">
                                        <hr className="border border-gray-300 mb-6" />
                                        <h4 className="text-[15px] text-slate-900 font-medium leading-relaxed">{mehsul.name}</h4>

                                        <div className="flex items-center mt-2">
                                            <div className="flex items-center space-x-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg
                                                        key={star}
                                                        className={`w-4 h-4 ${star <= mehsul.rating ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
                                                        viewBox="0 0 14 13"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                ))}
                                            </div>
                                           
                                            <span className="text-[15px] text-slate-900 font-medium ml-2">{mehsul.rating}/5</span>
                                        </div>
                                        <h4 class="text-base text-slate-900 font-semibold mt-4">${mehsul.price} <span className='text-sm text-gray-400 line-through'>{mehsul.oldPrice}</span>
                                            <span className='bg-red-200 text-[14px] ml-3 text-red-700 font-light rounded-[40px]'>{mehsul.discount}</span></h4>

                                    </div>

                                </a>
                            </div>



                        )
                    })}
                </div>
              
            </div >
              <div className='flex items-center justify-center'><button className='flex items-center justify-center rounded-[50px] border-[3px] border-gray w-[180px] h-[40px]'> View All</button></div>
               </div >
    )
}


export default Clothes2