import React from 'react'
import Nav from './Nav'
import Product from './Product'
import { CiSearch } from "react-icons/ci";

function Hero( { products } ) {
  return (
    <div>
      <Nav />
      <div className='pt-6 flex gap-2 justify-between pl-6'>
        <h1 className='font-bold text-2xl'>New Product</h1>
        <div className='flex gap-4 mr-4'>
            <div className='shadow-md w-10 h-10 p-3 bg-white rounded-md'><CiSearch /></div>
            <button className='h-12 w-44 bg-blue-500 text-white rounded-md'>+ Add More Product</button>
        </div>
      </div>
        <Product products={products} />
    </div>
  )
}

export default Hero
