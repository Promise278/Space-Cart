import { useState } from 'react'
import './index.css'
import Side from './components/Side'
import Hero from './components/Hero'
import { products } from './utils/product'

function App() {

  return (
    <div className='flex justify-between'>
      <Side />
      <Hero products={products} />
    </div>
  )
}

export default App
