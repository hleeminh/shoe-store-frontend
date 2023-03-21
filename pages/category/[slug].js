import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'

const Category = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='md:text-[34px] text-[28px] mb-5 font-semibold leading-tight'>
                        Running Shoes
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-0 my-14 mx-5">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </Wrapper>
        </div>
    )
}

export default Category