import Wrapper from '@/components/Wrapper'
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper className=''>
            <div className='flex lg:flex-row flex-col lg:px-10 lg:gap-[100px] gap-[50px]'>
                <div className='w-full lg:w-auto flex-[1.5] max-w-[500px] 
                lg:max-w-full mx-auto lg:mx-0'>
                    <ProductDetailsCarousel/>
                </div>
                <div className='flex-[1] py-3'>
                    right
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default ProductDetails