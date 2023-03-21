import Wrapper from '@/components/Wrapper'
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import { IoMdHeartEmpty } from 'react-icons/io'

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
                    {/* name */}
                    <div className='text-[34px] font-semibold mb-2'>
                        Jordan Retro 6 G
                    </div>
                    {/* sub */}
                    <div className='text-lg font-semibold mb-5'>
                        Men&apos;s Golf Shoes
                    </div>
                    {/* price */}
                    <div className='text-lg font-semibold'>
                        Standard: 200.000đ
                    </div>
                    <div className='text-md font-medium text-black/[0.5]'>
                        incl. of taxes
                    </div>
                    <div className='text-md font-medium text-black/[0.5] mb-20'>
                        {`(Also includes all applicable duties)`}
                    </div>

                    {/* size */}
                    <div className='mb-10'>
                        {/* heading  */}
                        <div className='flex justify-between mb-2'>
                            <div className='text-md font-semibold'>
                                Select Size 
                            </div>
                            <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                Select Size 
                            </div>
                        </div>
                        {/* size */}
                        <div className='grid grid-cols-3 gap-2 mb-2'>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                37
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                38
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                39
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                40
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                41
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            text-black bg-white hover:text-white hover:bg-black/[0.5] cursor-pointer'>
                                42
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            cursor-not-allowed bg-black/[0.1] opacity-50'>
                                43
                            </div>
                            <div className='border rounded-md text-center font-medium py-3
                            cursor-not-allowed bg-black/[0.1] opacity-50'>
                                44
                            </div>  
                        </div>

                        {/* show error */}
                        <div className='text-red-600 mt-1'>
                            Size selection is required
                        </div>
                    </div>
                    {/* button add */}
                    <button className='w-full py-4 rounded-full bg-slate-900 text-white text-lg
                    font-medium transition-transform active:scale-95 mb-3'>
                        Add to Cart
                    </button>
                    {/* button whishlist */}
                    <button className='w-full py-4 border border-black rounded-full text-lg
                    font-medium transition-transform active:scale-95 mb-10 flex items-center 
                    justify-center hover:opacity-70 gap-2'>
                        Whishlist
                        <IoMdHeartEmpty size={20}/>
                    </button>

                    <div>
                        <div className='text-lg font-bold mb-5'>
                            Product Details
                        </div>
                        <div className='text-base mb-5'>
                            "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.

                            Colour Shown: White/Siren Red/Black
                            Style: DQ4123-100"
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default ProductDetails