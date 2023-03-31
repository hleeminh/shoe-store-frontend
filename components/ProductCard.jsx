import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ data: { attributes: p, id } }) => {

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      {/* <img src={p?.thumbnail?.data?.attributes?.url} alt={p.name} className='w-full'/> */}
      <div className="p-4 text-black/[0.9]">
        {
          p.name.length < 21 ?
            (
              <h2 className="md:text-lg md:font-medium text-[16px]">
                {p.name}
              </h2>
            ) : (
              <h2 className="md:text-lg md:font-medium text-[16px]">
                {p.name.slice(0, 22)}...
              </h2>
            )
        }
        <div className="flex flex-row md:justify-between items-center text-black/[0.5]">
          <div className="flex flex-col">
            {p.original_price && (
              <p className="text-[10px] md:text-[14px] font-medium line-through">
                {VND.format(p.original_price)}
              </p>
            )}
            <p className="mr-2 text-[14px] md:text-lg font-bold text-red-600">{VND.format(p.price)}</p>
          </div>
          <div className="md:flex hidden">
            {p.sales && (
              <p className="text-[10px] font-medium">
                Đã bán {p.sales}
              </p>
            )}
          </div>
        </div>
        <div className="md:hidden block">
          {p.sales && (
            <p className="text-[10px] font-medium text-red-600">
              Đã bán {p.sales}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
