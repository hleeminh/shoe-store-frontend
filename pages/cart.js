import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'


const Cart = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            {/* heading cart */}
            <div className='text-center max-w-[800px] mx-auto md:mt-0 mt-8'>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                    Shopping Cart
                </div>
            </div>
            {/* content cart */}
            <div className='flex lg:flex-row flex-col  gap-12 py-10 '>
                {/* cart item */}
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'>Cart Item</div>
                    <CartItem/>   
                    <CartItem/>   
                    <CartItem/>   
                    <CartItem/>   
                </div>
                {/* checkout */}
                <div className='flex-[1]'>
                    <div className='text-lg font-bold'>Summary</div>
                    
                    <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                        {/* totalprice */}
                        <div className='flex justify-between'>
                            <div className='uppercase md:text-lg text-base font-medium text-black'>Subtotal</div>
                            <div className='md:text-lg text-base font-medium text-black'>1.450.000đ</div>
                        </div>
                        {/* note  */}
                        <div className='md:text-base text-sm py-5 mt-5 border-t-[2px]'>
                            The subtotal reflects the total price of your order, 
                            including duties and taxes, before any applicable discounts. 
                            It does not include delivery costs and international transaction fees.
                        </div>
                    </div>
                    {/* checkout button */}
                    <button className='w-full py-4 rounded-full bg-black hover:bg-slate-800 text-white text-lg
                    font-medium transition-transform active:scale-95 mb-3'>
                        Checkout
                    </button>   
                </div>                
            </div>
            <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
                <Image 
                    src='/assets/empty-cart.jpg' 
                    width={300} height={300} 
                    className='md:w-[400px] w:-[300px]'              
                />
                <span className='text-xl font-semibold'>
                    {`Your cart is empty. Let's choose something <3`} 
                </span>
                <span className='text-center mt-4'>
                    Looks like you have not added anything in your cart
                    <br />
                    Go ahead and explore top categories
                </span>
                <Link href='/' 
                    className='px-8 py-4 rounded-full bg-black hover:bg-slate-800 text-white text-lg
                    font-medium transition-transform active:scale-95 mt-8 mb-3'
                >
                    Continue Shopping    
                </Link>
            </div>
        </Wrapper>
    </div>
  )
}

export default Cart