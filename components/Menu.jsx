import React, { Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useFetchUser } from "@/utils/authContext";

const data = [
  { id: 1, name: "Trang chủ", url: "/" },
  { id: 2, name: "Sản phẩm", subMenu: true },
  { id: 3, name: "Giới thiệu", url: "/" },
  { id: 4, name: "Liên hệ", url: "/" },
  { id: 5, name: "Đăng nhập", url: "/login" },
  { id: 6, name: "Đăng ký", url: "/register" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories, user, loading }) => {

  return (
    <>
      <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {!loading && !user
          ? data
              .map((item) => (
                <Fragment key={item.id}>
                  {!!item?.subMenu ? (
                    <li
                      className="cursor-pointer flex items-center gap-2 relative transition delay-50 
                    bg-white hover:-translate-y-1 hover:scale-105 duration-150"
                      onMouseEnter={() => setShowCatMenu(true)}
                      onMouseLeave={() => setShowCatMenu(false)}
                    >
                      {item.name}
                      <BsChevronDown size={14} />
                      {showCatMenu && (
                        <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg rounded-md ">
                          {categories?.map(({ attributes: c, id }) => (
                            <Link
                              key={id}
                              href={`/category/${c.slug}`}
                              onClick={() => setShowCatMenu(false)}
                            >
                              <li
                                className="h-12 flex justify-between items-center px-3 rounded-md 
                  transform duration-200 hover:scale-105 bg-white
                  hover:bg-slate-500 hover:text-white m-1"
                              >
                                {c.name}
                                <span className="opacity-50 text-sm">{`(${c.products?.data.length})`}</span>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="cursor-pointer transition delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150">
                      <Link key={item.id} href={item?.url}>
                        {item.name}
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))
          : data
              .filter((item) => item.id != 5 && item.id != 6)
              .map((item) => (
                <Fragment key={item.id}>
                  {!!item?.subMenu ? (
                    <li
                      className="cursor-pointer flex items-center gap-2 relative transition delay-50 
            bg-white hover:-translate-y-1 hover:scale-105 duration-150"
                      onMouseEnter={() => setShowCatMenu(true)}
                      onMouseLeave={() => setShowCatMenu(false)}
                    >
                      {item.name}
                      <BsChevronDown size={14} />
                      {showCatMenu && (
                        <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg rounded-md ">
                          {categories?.map(({ attributes: c, id }) => (
                            <Link
                              key={id}
                              href={`/category/${c.slug}`}
                              onClick={() => setShowCatMenu(false)}
                            >
                              <li
                                className="h-12 flex justify-between items-center px-3 rounded-md 
                      transform duration-200 hover:scale-105 bg-white
                      hover:bg-slate-500 hover:text-white m-1"
                              >
                                {c.name}
                                <span className="opacity-50 text-sm">{`(${c.products?.data.length})`}</span>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="cursor-pointer transition delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150">
                      <Link key={item.id} href={item?.url}>
                        {item.name}
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))
          }
      </ul>
    </>
  );
};

export default Menu;
