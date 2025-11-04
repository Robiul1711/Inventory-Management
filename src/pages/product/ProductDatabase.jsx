import ProductAll from '@/components/productDatabase/ProductAll'
import ProductDatabaseInfo from '@/components/productDatabase/ProductDatabaseInfo'
import React from 'react'

const ProductDatabase = () => {
  return (
    <div className=' flex flex-col gap-8'>
        <ProductDatabaseInfo/>
        <ProductAll/>
    </div>
  )
}

export default ProductDatabase