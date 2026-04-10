import React, { useState } from 'react'

const Dashboard = () => {

    const[form,setForm] = useState({})

  return (
    <div>    
        <form class="space-y-6 max-w-md mx-auto p-4">
      <div class="flex items-center">
        <label class="text-slate-400 font-medium w-36 text-sm">Name</label>
        <input type="text" placeholder="Enter your name"
          class="px-2 py-2 w-full border-b border-gray-300 focus:border-slate-900 outline-none text-sm bg-white" />
      </div>

      <div class="flex items-center">
        <label class="text-slate-400 font-medium w-36 text-sm">Email</label>
        <input type="email" placeholder="Enter your email"
          class="px-2 py-2 w-full border-b border-gray-300 focus:border-slate-900 outline-none text-sm bg-white" />
      </div>

      <div class="flex items-center">
        <label class="text-slate-400 font-medium w-36 text-sm">Phone No.</label>
        <input type="number" placeholder="Enter your phone no"
          class="px-2 py-2 w-full border-b border-gray-300 focus:border-slate-900 outline-none text-sm bg-white" />
      </div>

      <div class="flex items-center">
        <label class="text-slate-400 font-medium w-36 text-sm">State</label>
        <input type="text" placeholder="Enter your state"
          class="px-2 py-2 w-full border-b border-gray-300 focus:border-slate-900 outline-none text-sm bg-white" />
      </div>

      <button type="button"
        class="!mt-12 px-6 py-2 w-full bg-slate-800 hover:bg-slate-900 text-sm font-medium text-white mx-auto block cursor-pointer">Submit</button>
    </form>
    </div>
  )
}

export default Dashboard