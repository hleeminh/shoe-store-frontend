import React, { Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneaker", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    return (
        <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0
        w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
            {data.map((item, index) => (
                <Fragment key={index}>
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
                                    {subMenuData.map((submenu, index1) => (
                                        <Link
                                            key={index1}
                                            href="/"
                                            onClick={() => {setShowCatMenu(false), setMobileMenu(false)}}
                                        >
                                            <li className="px-8 py-4 border-t flex justify-between">
                                                {submenu.name}
                                                <span className="opacity-50 text-sm">
                                                    ({submenu.doc_count})
                                                </span>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="px-5 py-4 border-b">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
                        </li>
                    )}
                </Fragment>
            ))}
        </ul>
    );
};

export default MenuMobile;
