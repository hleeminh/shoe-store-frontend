import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Image from 'next/image';
import { updateCart, removeFromCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const CartItem = ({ data }) => {

    const p = data.attributes;

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            value: key === 'quantity' ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        }
        dispatch(updateCart(payload))
    }

    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            {/* item cart img */}
            <div className='shrink-0 aspect-square md:w-[120px] w-[50px]'>
                <Image 
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={120}
                    height={120}
                />
            </div>

            <div className='w-full flex flex-col'>
                <div className='flex md:flex-row flex-col justify-between'>
                    {/* product title */}                   
                    <div className='md:text-2xl text-lg font-semibold text-black/[0.8]'>
                        <Link href={`/product/${p.slug}`}>
                            {p.name}
                        </Link>
                    </div>                    
                    
                    {/* product sub on mobile */}
                    <div className='md:text-base text-sm font-medium text-black/[0.5] md:hidden block'>
                        {p.subtitle}
                    </div>

                    {/* product price */}
                    <div className='md:text-lg text-sm font-bold text-black/[0.7] mt-2'>
                        {VND.format(p.price)}
                    </div>
                </div>
                {/* product sub on desktop */}
                <div className='md:text-base text-sm font-medium text-black/[0.5] hidden md:block'>
                    {p.subtitle}
                </div>

                <div className='flex items-center justify-between mt-8'>
                    <div className='flex items-center md:gap-10 gap-2 md:text-[14px] text-sm text-black/[0.5]'>
                        {/* size */}
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Size:</div>
                            <select className='hover:text-black' onChange={(e) => updateCartItem(e, 'selectedSize')}>
                                {p.size.data.map((item, index) => (
                                    <option 
                                        key={index} 
                                        value={item.size} 
                                        disabled={item.enabled === false ? true: false}
                                        selected={data.selectedSize === item.size}
                                    >
                                        {item.size}                                    
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* quantity */}
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Quantity:</div>
                            <select className='hover:text-black' onChange={(e) => updateCartItem(e, 'quantity')}>
                                {Array.from({length: 10}, (_, index) => index + 1).map((q, index) => (
                                    <option
                                        key={index}
                                        value={q}
                                        selected={data.quantity === q}
                                    >
                                        {q}                                   
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line 
                        className='cursor-pointer text-black/[0.5] hover:text-black md:text-[20px] text-[16px]' 
                        onClick={() => 
                            dispatch(removeFromCart({id: data.id}))
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem