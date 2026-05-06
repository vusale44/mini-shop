import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/Contextapi'

const Basket = () => {
    const { cart, removeItem, addToCart, decreaseAmount } = useContext(ProductContext)


    return (
        <div>
            <div class="max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
                <div class="grid lg:grid-cols-2 gap-10">
                    <div>
                        <h3 class="text-xl font-semibold text-slate-900">Your Cart</h3>
                        {cart.map((cartproduct) => {

                            return (

                                <div class="bg-gray-100 p-6 rounded-md mt-6">
                                    <div class="space-y-4">
                                        <div class="flex gap-4 max-sm:flex-col">
                                            <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                                <img src={cartproduct.image} class="w-full h-full object-contain" />
                                            </div>
                                            <div class="w-full flex justify-between gap-4">
                                                <div>
                                                    <h3 class="text-[15px] font-medium text-slate-900">Velvet Sneaker</h3>
                                                    <h6 class="text-[15px] text-slate-900 font-semibold cursor-pointer mt-4">${cartproduct.price}</h6>
                                                </div>
                                                <div class="flex flex-col justify-between items-end gap-4">
                                                    <div>
                                                        <svg onClick={() => removeItem(cartproduct.id)} xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm w-fit">
                                                        {/* AZALTMA DÜYMƏSİ */}
                                                        <button
                                                            onClick={() => decreaseAmount(cartproduct.id)}
                                                            className="px-3 py-1 bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 font-bold text-lg border-r border-gray-200"
                                                        >
                                                            −
                                                        </button>

                                                        {/* SAYI GÖSTƏRƏN HİSSƏ */}
                                                        <span className="px-4 py-1 text-sm font-semibold text-slate-800 min-w-[40px] text-center bg-white">
                                                            {cartproduct.quantity || 1}
                                                        </span>

                                                        {/* ARTIRMA DÜYMƏSİ */}
                                                        <button
                                                            onClick={() => addToCart(cartproduct)}
                                                            className="px-3 py-1 bg-gray-50 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-bold text-lg border-l border-gray-200"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr class="border-gray-300" />



                                    </div>
                                </div>


                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket