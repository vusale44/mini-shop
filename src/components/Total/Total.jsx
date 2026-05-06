import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/Contextapi'

const Total = () => {
  const { cart, getTotalPrice } = useContext(ProductContext);
  
  return (
    <div className="max-w-6xl max-lg:max-w-2xl mx-auto bg-white p-4">
      <div className="lg:col-span-1">
        <div className="bg-blue-50 rounded-md p-4 space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Items:</span>
              <span>{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-base">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Total