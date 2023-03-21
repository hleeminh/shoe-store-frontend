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

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul
      className="hidden md:flex items-center
      gap-8 font-medium text-black"
    >
      {data.map((item, index) => (
        <Fragment key={index}>
          {!!item?.subMenu ? (
            <li className="cursor-pointer flex items-center gap-2 relative transition delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg rounded-md ">
                  {subMenuData.map((submenu, index1) => (
                    <Link key={index1} href="/" onClick={() => setShowCatMenu(false)}>
                      <li className="h-12 flex justify-between items-center px-3 rounded-md transition delay-50 bg-white hover:-translate-y-1 hover:scale-105 hover:bg-slate-500 hover:text-white  duration-150">
                        {submenu.name}
                        <span className="opacity-50 text-sm">({submenu.doc_count})</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer transition delay-50 bg-white hover:-translate-y-1 hover:scale-105 duration-150">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default Menu;
