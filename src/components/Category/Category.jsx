
import Tick from '../../assets/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

import { ProductContext } from '../Context/Contextapi'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Category = () => {

    const navigate = useNavigate();


    const [cat, setCat] = useState("All")
    const [color, setColor] = useState("All")
    const [size, setSize] = useState("Clear")
    const [price, setPrice] = useState(500)
    const { products } = useContext(ProductContext)
    const sizeAll = ["XX-Small", "X-Small", "Small", "Medium",
        "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];




    let category = ["All", ...new Set(products.map((item) => item.category))]
    let filterCategory = cat === "All" ? products : products.filter((item) => item.category === cat)

    let categorycolor = ["All", ...new Set(products.flatMap((item) => item.color))]
    let filtercolor = color === "All" ? filterCategory : filterCategory.filter((item) => item.color.includes(color))

    let categorysize = ["Clear", ...new Set(sizeAll.map((item) => item))]
    let filtersize = size === "Clear" ? filtercolor : filtercolor.filter((item) => item.sizes.includes(size))


    let filterprice = price === 500 ? filtersize : filtersize.filter((products) => products.price <= price)



    return (

        <div className='flex items-start justify-center border w-[100%] '>

            <div className='flex justify-center w-[90%]'>

                <section>
                    <div class="flex">
                        <div class="w-full max-w-[300px] shrink-0 shadow-md px-6 sm:px-8 min-h-screen py-6">
                            <div class="flex items-center justify-between w-[220px] border-b border-gray-300 pb-2 mb-6">
                                <h3 class="text-slate-900 text-lg font-semibold">Filter</h3>
                                <span>
                                    <FontAwesomeIcon icon={faSliders} style={{ color: "#78818f", }} />
                                </span>
                            </div>
                            <div>

                                {category.map((item) => {
                                    return (
                                        <div>
                                            <ul class="mt-6 space-y-4"
                                                value={item} onClick={() => setCat(item)}>
                                                <li class="flex items-center justify-between w-[220px] gap-3">

                                                    <label for="zara" class="text-slate-600 font-medium text-sm cursor-pointer">{item}</label>
                                                    <img src={Tick} alt="" />
                                                </li>

                                            </ul>
                                        </div>

                                    )
                                })}
                            </div>
                            <hr class="my-6 border-gray-300" />

                            <div>
                                <h6 class="text-slate-900 text-sm font-semibold">Price</h6>
                                <div class="relative mt-6">

                                    <div>



                                        <label htmlFor="">

                                            <input type="range" class="w-full"
                                                min={0} max={500}
                                                value={price}
                                                onChange={(e) => setPrice(Number(e.target.value))}
                                                id="myRange" />
                                            {price}

                                        </label>

                                    </div>

                                </div>
                            </div>


                            <hr class="my-6 border-gray-300" />
                            <div>
                                <h6 class="text-slate-900 text-sm font-semibold">Color</h6>
                                <div class="flex flex-wrap gap-3 mt-4">
                                    {categorycolor.map((colors) => {
                                        return (
                                            <div>

                                                <button
                                                    type="button"
                                                    value={colors}
                                                    onClick={() => setColor(colors)}
                                                    style={{ backgroundColor: colors }}
                                                    className="cursor-pointer rounded-full overflow-hidden border-2 border-gray w-8 h-8 hover:scale-[1.05] transition-all"

                                                >{(colors === "All") ? <img className='rounded-[50%] w-[200px]' src="https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-ban-png-image_2933383.jpg" alt="" /> : ""}</button>
                                            </div>



                                        )
                                    })}
                                </div>
                            </div>



                            <hr class="my-6 border-gray-300" />
                            <div className="flex flex-wrap items-start justify-start gap-[6px]">
                                <h6 class="text-slate-900 text-sm font-semibold "></h6>
                                {categorysize.map((item) => {

                                    return (

                                        <button type="button" className="cursor-pointer  border border-gray-300 hover:border-blue-600 rounded-full w-[100px] text-[16px] text-slate-600 font-medium py-3 px-3"
                                            value={item} onClick={() => { setSize(item) }}>{item}</button>



                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>



                <section className='flex-1'>
                    <div class="flex flex-wrap items-center justify-center w-[100%]">
                        <div class="flex flex-wrap items-center justify-evenly gap-y-4 min-h-screen w-full content-start">
                            {filterprice.map((product) => {
                                return (

                                    <div onClick={() => navigate(`/product/${product.id}`)}
                                        class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">

                                        <div class="w-[300px] h-[300px]">
                                            <img src={product.image} alt=""
                                                class="w-full h-full object-contain" />
                                        </div>

                                        <div className="p-6">
                                            <hr className="border border-gray-300 mb-6" />
                                            <h4 className="text-[15px] text-slate-900 font-medium leading-relaxed">{product.title}</h4>

                                            <div className="flex items-center mt-2">

                                                <div className="flex items-center space-x-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`w-4 h-4 ${star <= product.rating ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
                                                            viewBox="0 0 14 13"

                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                        </svg>
                                                    ))}


                                                </div>

                                                <span className="text-[15px] text-slate-900 font-medium ml-2">{product.rating}/5</span>
                                            </div>
                                            <h4 class="text-base text-slate-900 font-semibold mt-4">${product.price} <span className='text-sm text-gray-400 line-through'>{product.oldPrice}</span>
                                                {product.discount > 0 && (
                                                    <span className='bg-red-200 text-[14px] ml-3 text-red-700 font-light rounded-[40px]'>{product.discount}%</span>)}
                                            </h4>
                                        </div>



                                    </div>




                                )
                            })}
                        </div>

                    </div >
                </section>
            </div >
        </div >
    )
}

export default Category