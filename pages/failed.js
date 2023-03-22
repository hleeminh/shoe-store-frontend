import Wrapper from '@/components/Wrapper'
import React from 'react'
import Link from 'next/link'


const Failed = () => {
  return (
    <div className='min-h-[650px] flex items-center'>
        <Wrapper>
            <div className='max-w-[500px] min-h-[100px] rounded-lg p-5 mx-auto 
            flex flex-col items-center justify-center bg-slate-300'>
                <div className='text-2xl font-bold text-orange-600'>Payment Failed</div>
                <div className='text-base mt-5'>For any related query, drop an email to</div>
                <div className='underline'>hleeminh_shopcontact@gmail.com</div>
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

export default Failed