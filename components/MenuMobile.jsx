import React, { Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Trang chủ", url: "/" },
    { id: 2, name: "Sản phẩm", subMenu: true },
    { id: 3, name: "Giới thiệu", url: "/"  },
    { id: 4, name: "Liên hệ", url: "/"  },
    { id: 5, name: "Đăng nhập", url: "/login" },
    { id: 6, name: "Đăng ký", url: "/register" },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories, user, loading }) => {
    return (
        <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0
        w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
            {!loading && !user 
                ?
                    data
                        .map((item) => (
                        <Fragment key={item.id}>
                            {!!item?.subMenu ? (
                                <li
                                    className="cursor-pointer px-5 py-4 border-b flex flex-col relative"
                                    onClick={() => setShowCatMenu(!showCatMenu)}
                                >
                                    <div className="flex justify-between items-center">
                                        {item.name}
                                        <BsChevronDown size={14} />
                                    </div>

                                    {showCatMenu && (
                                        <ul className="-mx-5 mt-4 -mb-4">
                                            {categories?.map(({attributes: c, id}) => (
                                                <Link
                                                    key={id}
                                                    href={`/category/${c.slug}`}
                                                    onClick={() => {
                                                        setShowCatMenu(false) 
                                                        setMobileMenu(false)
                                                    }}
                                                >
                                                    <li className="px-8 py-4 border-t flex justify-between">
                                                        {c.name}
                                                        <span className="opacity-50 text-sm">
                                                            {`(${c.products?.data.length})`}
                                                        </span>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li className="px-5 py-4 border-b cursor-pointer">
                                    <Link key={item.id} href={item?.url}
                                        onClick={() => {
                                            setMobileMenu(false)
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </Fragment>
                        ))
                :
                    data
                        .filter((item) => item.id != 5 && item.id != 6)
                        .map((item) => (
                            <Fragment key={item.id}>
                                {!!item?.subMenu ? (
                                    <li
                                        className="cursor-pointer px-5 py-4 border-b flex flex-col relative"
                                        onClick={() => setShowCatMenu(!showCatMenu)}
                                    >
                                        <div className="flex justify-between items-center">
                                            {item.name}
                                            <BsChevronDown size={14} />
                                        </div>
    
                                        {showCatMenu && (
                                            <ul className="-mx-5 mt-4 -mb-4">
                                                {categories?.map(({attributes: c, id}) => (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() => {
                                                            setShowCatMenu(false) 
                                                            setMobileMenu(false)
                                                        }}
                                                    >
                                                        <li className="px-8 py-4 border-t flex justify-between">
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products?.data.length})`}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ) : (
                                    <li className="px-5 py-4 border-b cursor-pointer">
                                        <Link key={item.id} href={item?.url}
                                            onClick={() => {
                                                setMobileMenu(false)
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )}
                            </Fragment>
                        ))                    
                                        
            }
        </ul>
    );
};

export default MenuMobile;
