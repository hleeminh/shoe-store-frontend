import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'


const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        {/* item cart img */}
        <div className='shrink-0 aspect-square md:w-[120px] w-[50px]'>
            <img src="/assets/product-1.webp" alt="" />
        </div>

        <div className='w-full flex flex-col'>
            <div className='flex md:flex-row flex-col justify-between'>
                {/* product title */}
                <div className='md:text-2xl text-lg font-semibold text-black/[0.8]'>
                    Jordan Retro 6 G
                </div>
                
                {/* product sub on mobile */}
                <div className='md:text-base text-sm font-medium text-black/[0.5] md:hidden block'>
                    Men&apos;s Golf Shoes
                </div>

                {/* product price */}
                <div className='md:text-[14px] text-sm font-bold text-black/[0.5] mt-2'>
                    Standard: 200.000đ
                </div>
            </div>
            {/* product sub on desktop */}
            <div className='md:text-base text-sm font-medium text-black/[0.5] hidden md:block'>
                Men&apos;s Golf Shoes
            </div>

            <div className='flex items-center justify-between mt-8'>
                <div className='flex items-center md:gap-10 gap-2 md:text-[14px] text-sm text-black/[0.5]'>
                    {/* size */}
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>Size:</div>
                        <select className='hover:text-black'>
                            <option value="1">37</option>
                            <option value="2">38</option>
                            <option value="3">39</option>
                            <option value="4">40</option>
                            <option value="5">41</option>
                            <option value="6">42</option>
                            <option value="7">43</option>
                        </select>
                    </div>

                    {/* quantity */}
                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>Quantity:</div>
                        <select className='hover:text-black'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black md:text-[20px] text-[16px]'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem