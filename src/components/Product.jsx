import React from 'react'

function Product({ products }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 rounded-md mt-6 ml-6 mr-4 mb-6">
        {products.map(items => (
            <div className='shadow-md border-2 border-gray-100 p-4'>
                <img src={items.image} className='w-full h-56' alt="" />
                <p className='text-blue-500 font-mono'>${ items.price }</p>
                <p className='text-2xl font-bold pt-2'>{ items.name }</p>
                <p>{ items.size }</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Product
