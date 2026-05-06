import React from 'react'


  const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  // Ümumi səhifə sayını hesablayaq
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
   <div>
      <ul className="flex space-x-5 justify-center mt-8 mb-8">
        {/* Previous Button */}
        <li 
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className={`flex items-center justify-center gap-3 cursor-pointer h-9 rounded-md ${currentPage === 1 ? 'opacity-50' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 rotate-180" viewBox="0 0 512 512">
            <path d="M506.9 243.5 357.3 92.7c-6.9-6.9-18.1-7-25-.1s-7 18.1-.1 25l119.7 120.7H17.7C7.9 238.3 0 246.2 0 256s7.9 17.7 17.7 17.7h434.2L332.2 394.4c-6.9 6.9-6.8 18.1.1 25s18.1 6.8 25-.1l149.6-150.8c6.8-6.9 6.8-18.1 0-25z" />
          </svg>
          <span>Prev</span>
        </li>

        {/* Dinamik Səhifə Rəqəmləri */}
        {pages.map((page, index) => (
          <li
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`flex items-center justify-center shrink-0 cursor-pointer text-base font-medium px-[13px] h-9 rounded-md transition-all ${
              page === currentPage ? 'bg-blue-600 text-white' : 'text-slate-900 hover:bg-gray-100'
            }`}
          >
            {page}
          </li>
        ))}

        {/* Next Button */}
        <li 
          onClick={() => currentPage < pages.length && setCurrentPage(currentPage + 1)}
          className={`flex items-center justify-center gap-3 cursor-pointer h-9 rounded-md ${currentPage === pages.length ? 'opacity-50' : ''}`}
        >
          <span>Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
            <path d="M506.9 243.5 357.3 92.7c-6.9-6.9-18.1-7-25-.1s-7 18.1-.1 25l119.7 120.7H17.7C7.9 238.3 0 246.2 0 256s7.9 17.7 17.7 17.7h434.2L332.2 394.4c-6.9 6.9-6.8 18.1.1 25s18.1 6.8 25-.1l149.6-150.8c6.8-6.9 6.8-18.1 0-25z" />
          </svg>
        </li>
      </ul>
    </div>
  
  )
}

export default Pagination