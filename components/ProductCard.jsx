import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link href='/product/1'
      className='transform overflow-hidden duration-200 hover:scale-105 cursor-pointer'
    >
      <img className="w-full" src="/assets/product-1.webp" alt="Product Image"/>
      <div className='p-4 text-black/[0.9]'>
        <h2 className='md:text-lg md:font-medium text-[16px]'>Product Name</h2>
        <div className='flex flex-row md:justify-between items-center text-black/[0.5]'>
          <div className='flex md:flex-row flex-col'>
            <p className='mr-2 text-[16px] font-bold'>200.000đ</p>
            <p className='text-[12px] font-medium line-through'>250.000đ</p>
          </div>
          <div className='md:flex hidden'>
            <p className='text-[10px] font-medium text-red-600'>Đã bán 1K</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard