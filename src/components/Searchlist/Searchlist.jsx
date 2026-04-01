import React from 'react'

const Searchlist = () => {
  return (
    <div>
<div class="p-3 sm:p-4">
      <div class="lg:max-w-4xl max-w-lg md:max-w-full mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee1.webp" alt="Product 1" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Espresso Elegante</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$10.00 <strike
                  class="text-slate-400 ml-2 font-medium">$15.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee8.webp" alt="Product 2" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Mocha Madness</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$12.00 <strike
                  class="text-slate-400 ml-2 font-medium">$17.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee3.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Caramel Cream Delight</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$14.00 <strike
                  class="text-slate-400 ml-2 font-medium">$19.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee4.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Hazelnut Heaven Blend</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$12.00 <strike
                  class="text-slate-400 ml-2 font-medium">$17.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee5.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Vanilla Velvet Brew</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$15.00 <strike
                  class="text-slate-400 ml-2 font-medium">$20.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee6.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Double Shot Symphony</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$14.00 <strike
                  class="text-slate-400 ml-2 font-medium">$19.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee7.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Irish Cream Dream</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$11.00 <strike
                  class="text-slate-400 ml-2 font-medium">$16.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee8.webp" alt="Product 3" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Coconut Bliss Coffee</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$13.00 <strike
                  class="text-slate-400 ml-2 font-medium">$18.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>

          <div class="bg-white shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col rounded-md transition-all relative overflow-hidden">
            <div>
              <div
                class="bg-gray-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-slate-900 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <a href="javascript:void(0)" class="block mt-6">
                <div class="w-full aspect-[15/8]">
                  <img src="https://readymadeui.com/images/coffee1.webp" alt="Product 1" class="w-full h-full object-contain" />
                </div>
              </a>
            </div>
            <div class="flex flex-col h-full mt-6">
              <div class="flex-1">
                <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900">Espresso Elegante</h4>
                <h3 class="text-base sm:text-lg text-red-600 font-semibold mt-4">$10.00 <strike
                  class="text-slate-400 ml-2 font-medium">$15.00</strike>
                </h3>
              </div>
              <button type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-2 py-2 sm:px-4 bg-slate-900 hover:bg-slate-800 text-sm text-white font-medium rounded-md cursor-pointer transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
                Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>




    </div>
  )
}

export default Searchlist