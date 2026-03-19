import React from 'react'
import VISA from "../../assets/Badge.png"
import Mc from "../../assets/Badge (1).png"
import PayPal from "../../assets/Badge (2).png"
import Pay from "../../assets/Badge (3).png"
import Google from "../../assets/Badge (4).png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"

const Footer = () => {
  return (
    <div className=''>
        
   <footer class="bg-[#F0F0F0] pt-16 pb-8 px-4 md:px-16 font-sans text-gray-600">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      
      <div class="col-span-2 md:col-span-1">
        <h2 class="text-3xl font-black text-black mb-4 tracking-tighter">SHOP.CO</h2>
        <p class="text-sm leading-relaxed mb-6 max-w-xs text-gray-500">
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>
        <div class="flex space-x-3">
          <div class="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
            <img src={twitter} alt="" />
          </div>
          <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer text-xs">f</div>
          <div class="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors cursor-pointer text-xs italic">
            <img src={instagram} alt="" />
          </div>
          <div class="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white transition-colors cursor-pointer text-xs">
            <img src={github} alt="" />
          </div>
        </div>
      </div>

      <div class="md:pl-8">
        <h3 class="text-black font-bold tracking-[0.2em] text-sm mb-5">COMPANY</h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-black">About</a></li>
          <li><a href="#" class="hover:text-black">Features</a></li>
          <li><a href="#" class="hover:text-black">Works</a></li>
          <li><a href="#" class="hover:text-black">Career</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-black font-bold tracking-[0.2em] text-sm mb-5">HELP</h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-black">Customer Support</a></li>
          <li><a href="#" class="hover:text-black">Delivery Details</a></li>
          <li><a href="#" class="hover:text-black">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-black">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-black font-bold tracking-[0.2em] text-sm mb-5">FAQ</h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-black">Account</a></li>
          <li><a href="#" class="hover:text-black">Manage Deliveries</a></li>
          <li><a href="#" class="hover:text-black">Orders</a></li>
          <li><a href="#" class="hover:text-black">Payments</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-black font-bold tracking-[0.2em] text-sm mb-5">RESOURCES</h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-black">Free eBooks</a></li>
          <li><a href="#" class="hover:text-black">Development Tutorial</a></li>
          <li><a href="#" class="hover:text-black">How to - Blog</a></li>
          <li><a href="#" class="hover:text-black">Youtube Playlist</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400">
      <p class="text-xs">Shop.co © 2000-2023, All Rights Reserved</p>
      <div class="flex space-x-2">
        <img src={VISA} alt="" />
        <img src={Mc} alt="" />
        <img src={PayPal} alt="" />
        <img src={Pay} alt="" />
        <img src={Google} alt="" />
       
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer