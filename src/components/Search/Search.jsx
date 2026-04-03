import React from 'react'
import { useState } from 'react';

import { useContext } from 'react';
import { ProductContext } from '../Context/Contextapi';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("")
    const { products } = useContext(ProductContext);
    let productSearch = products.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))


    return (
        <div>
            <div className="flex bg-gray-50 border w-[500px] border-gray-300 focus-within:bg-transparent focus-within:border-gray-500 rounded-full px-4 py-2.5 overflow-hidden  max-xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                    className="cursor-pointer fill-gray-600">
                    <path
                        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                    </path>
                </svg>
                <input type='text' placeholder='Search something...'
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    className="w-full ml-9 text-sm bg-transparent outline-none pr-2"
                    onFocus={() => setIsOpen(true)} />
            </div>


            {isOpen && (
                <div className="absolute right-[250px] h-[300px]  w-[800px] bg-white p-5 rounded-2xl shadow-xl z-50 flex  gap-8">
                    <div className="w-1/3">
                        <h3 className="text-gray-500 font-semibold mb-4">Populyar axtarışlar</h3>
                        <ul className="flex flex-col text-[16px] gap-4 text-black">
                            <li className=" hover:text-blue-700 transform ease-in font-bold">
                                <span className='inline-block hover:scale-150 transition-transform'>🔍</span>
                                 Tishort
                            </li>
                            <li className=" hover:text-blue-700 transform ease-in font-bold">
                                <span className='inline-block hover:scale-150 transition-transform'>🔍 </span>
                                Jeans
                            </li>
                            <li className=" hover:text-blue-700 transform ease-in font-bold">
                                <span className='inline-block  hover:scale-150 transition-transform '>🔍 </span>
                                Watch
                            </li>
                            <li className=" hover:text-blue-700 transform ease-in font-bold">
                                <span className='inline-block hover:scale-150 transition-transform'>🔍 </span>
                                Dress
                            </li>
                            <li className=" hover:text-blue-700 transform ease-in font-bold">
                                <span className='inline-block hover:scale-150 transition-transform'>🔍 </span>
                                Short
                            </li>
                        </ul>
                    </div>

                    {/* Sağ tərəf: Populyar məhsullar */}
                    <div className="w-2/3 ">
                        <h3 className="text-gray-500 font-semibold mb-4">Populyar məhsullar</h3>
                        <div className="flex gap-5">


                            {productSearch.slice(1, 4).map((element) => {
                                return <>
                                    <div className="flex flex-col justify-between items-center ">
                                        <div className="border p-2 rounded-lg w-[150px] h-[210px]">
                                            <img src={element.image} alt="fd" />
                                            <h1>{element.title.length > 2
                                                ? element.title.slice(0,12) + "..."
                                                : element.title}</h1>

                                            <p className="text-black font-bold">
                                                <span className='text-sm text-gray-400 line-through'>{element.oldPrice}  </span>
                                                {element.price} azn
                                            </p>
                                        </div>

                                    </div>
                                </>
                            })}

                        </div>
                    </div>



                    <button
                        className="absolute top-3 right-4 text-gray-400 hover:text-black font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        X
                    </button>







                </div>
            )}
        </div>


    )
}

export default Search;