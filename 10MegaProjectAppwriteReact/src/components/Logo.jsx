import React from 'react'

function Logo({width='100px'}) {
  return (
    <div w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700>
       <img className="p-8 rounded-t-lg" 
       src="https://www.gloresoft.de/wp-content/uploads/GS-High-Res_1000.png" alt="product_image1" />
    </div>
  )
}

export default Logo