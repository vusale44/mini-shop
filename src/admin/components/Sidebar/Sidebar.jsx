import { useContext, useState } from "react";
import { ProductContext } from "../../../components/Context/Contextapi";
import { Link } from "react-router-dom";


export default function AdminPanel() {
  return (
  
      <aside className="bg-white dark:bg-neutral-900 border-r border-slate-300 dark:border-neutral-700 w-full h-full fixed top-0 left-0 max-w-[264px] py-6 px-4 overflow-auto">
         <nav className="h-full" aria-label="Primary sidebar navigation">
            <div className="relative flex flex-col h-full">

               {/* Header */}
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 flex-1">
                     
                     <span className="text-2xl text-white font-bold">
                         Vusale Admin Panel
                     </span>
                  </div>

                  <button
                     type="button"
                     aria-label="Collapse sidebar"
                     aria-controls="sidebar-navigation"
                     aria-expanded="true"
                     className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 fill-slate-400" viewBox="0 0 512 512"
                        aria-hidden="true">
                        <path fillRule="evenodd"
                           d="M21.683 237.115c-10.4 10.4-10.4 27.373 0 37.773l203.702 203.694c10.415 10.416 27.358 10.416 37.773 0l11.394-11.394c10.425-10.424 10.427-27.358 0-37.785l-154.525-154.51c-10.427-10.426-10.427-27.363 0-37.788L274.552 82.594c10.427-10.426 10.426-27.359-.001-37.785l-11.395-11.394c-10.399-10.4-27.373-10.4-37.772 0zM441.136 33.413c10.41-10.411 27.369-10.41 37.779 0l11.394 11.394c10.405 10.405 10.406 27.38 0 37.786L335.792 237.105c-10.426 10.426-10.426 27.361 0 37.787L490.31 429.404c10.41 10.409 10.409 27.377 0 37.785l-11.394 11.395c-10.414 10.414-27.364 10.415-37.779 0L255.53 292.97c-52.065 52.014-38.896 38.823-.038-.038l-18.044-18.044c-10.406-10.407-10.405-27.368 0-37.774z"
                           clipRule="evenodd" data-original="#000000" />
                     </svg>
                  </button>
               </div>

               <hr className="my-6 border-slate-300 dark:border-neutral-700" />

             
    

      <nav className="space-y-3">
        <Link
          to="/admin"
          className="block p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="block p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
        >
          Products
        </Link>
      </nav>
 
               <hr className="my-6 border-slate-300 dark:border-neutral-700" />

               <a href="#" className="flex flex-wrap items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                  <img src=""
                     className="w-10 h-10 rounded-md border border-slate-300 dark:border-neutral-700" alt="user avatar" />
                  <div>
                     <p className="text-sm text-slate-800 dark:text-slate-400 font-medium">John Doe</p>
                     <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Active free account</p>
                  </div>
               </a>
            </div>
         </nav>
      </aside>
   );
}
    
 

