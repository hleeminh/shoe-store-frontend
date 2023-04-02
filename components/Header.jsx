import React, {useState, useEffect} from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import {IoIosLogOut, IoMdHeartEmpty, IoMdLogOut} from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight} from 'react-icons/bi';
import {VscChromeClose} from 'react-icons/vsc';
import { fetchDataFromApi } from '@/utils/api';
import { useSelector } from 'react-redux';

import { UserProvider } from "@/utils/authContext";
import { useUser } from '@/utils/authContext';
import { useFetchUser } from "@/utils/authContext";
import { setToken, unsetToken } from '@/utils/auth';
import { RiLogoutBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';



const Header = ({user, loading}) => {

    // console.log(loading);

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0)
    const [categories, setCategories] = useState(null)

    const { cartItems } = useSelector(state => state.cart)

    const controlNavbar = () => {
        if(window.scrollY > 900) {
            if(window.scrollY > lastScrollY && !mobileMenu){
                setShow('-translate-y-[80px]')  
            }else{
                setShow('shadow-sm')
            }
              
        }else{
            setShow('translate-y-0')
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])


    useEffect(() => {
        fetchCategories()
    },[])

    const fetchCategories = async () => {
        const {data} = await fetchDataFromApi("/api/categories?populate=*")
        setCategories(data)     
    }

    const logout = () => {
        unsetToken();
      };

    return (
        <header 
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20
            sticky top-0 transition-transform duration-300 ${show} border-b-2 shadow-md`}
        >
            <Wrapper className='h-[60px] flex justify-between items-center'>
                <div className='flex gap-16'>
                    <Link href='/' onClick={() => {setMobileMenu(false)}}>
                        <div className='md:text-[30px] text-[14px] font-bold'>T1.FIT</div>  
                    </Link>
                    
                    <Menu
                        user = {user} 
                        loading = {user}
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        categories={categories}
                    />  

                    {mobileMenu && <MenuMobile
                        user= {user}
                        loading= {loading}
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />}
                </div>

                <div className='flex items-center md:gap-2 gap-1 text-black md:text-base text-[12px]'>

                    {!loading && ( user ? (
                        <div>Xin chào {user}!</div>
                    ) : (
                        ''
                    ))}

                    {!loading && ( user ? (
                        <div 
                            className='w-8 md:w-12 h-8 md:h-12 flex justify-center items-center
                            cursor-pointer relative transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150' 
                            onClick={logout}
                        >
                            <IoIosLogOut className='text-[19px] md:text-[24px]'/>
                        </div>
                    ) : (
                        ''
                    ))}     

                    {/* Icon start */}
                    {/* <div className='w-8 md:w-12 h-8 md:h-12 flex justify-center items-center
                    cursor-pointer relative transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150'>
                        <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/>
                        <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
                        bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px]
                        flex justify-center items-center px-[2px] md:px-[5px]'></div>
                    </div> */}
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href='/cart'>
                        <div className='w-8 md:w-12 h-8 md:h-12 flex justify-center items-center
                        cursor-pointer relative transition ease-in-out delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150'>
                            <BsCart className='text-[15px] md:text-[20px]'/>
                            {cartItems.length > 0 && (
                                <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
                                bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px]
                                flex justify-center items-center px-[2px] md:px-[5px]'>
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                    </Link>
                    {/* Icon end */}
                    
                    {/* Mobile Icon start */}
                    <div className={`flex md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full justify-center items-center
                    hover:bg-black/[0.05] cursor-pointer relative -mr-2`}>
                        {mobileMenu ? (
                            <VscChromeClose className='text-[16px]'
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight className='text-[20px]'
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile Icon end*/}

                </div>              
            </Wrapper>        
        </header>
    )
}

export default Header