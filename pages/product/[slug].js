import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDiscountedPricePercentage } from "@/utils/helper"; 
import Title from "@/components/Title";

const ProductDetails = ({ product, products }) => {

    const dispatch = useDispatch()

    const [selectedSize, setSelectedSize] = useState()
    const [showError, setShowError] = useState(false)

    //format vnd
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });

    //get data product
    const p = product?.data?.[0]?.attributes;

    const notify = () => {
        toast.success('Thêm thành công, hãy xem ở giỏ hàng của bạn <3', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
        <Title title={`T1 - ${p.name}`}/>
            <div className="w-full md:py-20">
            <ToastContainer/>
            <Wrapper className="">
                <div className="flex lg:flex-row flex-col lg:px-10 lg:gap-[100px] gap-[50px]">
                    <div
                        className="w-full lg:w-auto flex-[1.5] max-w-[500px] 
                lg:max-w-full mx-auto lg:mx-0"
                    >
                        <ProductDetailsCarousel images={p.image?.data}/>
                    </div>
                    <div className="flex-[1] py-3">
                        {/* name */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </div>
                        
                        {/* sub */}
                        <div className="text-lg font-semibold mb-5">
                            {p.subtitle}
                        </div>
                        {/* price */}
                        <div className="flex items-center">
                            <p className="text-lg md:text-[30px] font-bold text-red-600">{VND.format(p.price)}</p>
                            {p.original_price && (
                                <>
                                    <p className="text-sm md:text-base font-medium line-through ml-2">
                                        {VND.format(p.original_price)}    
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>
                        


                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* size */}
                        <div className="mb-10">
                            {/* heading  */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">Select Size</div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Size
                                </div>
                            </div>
                            {/* size grid*/}
                            <div id="sizeGrid" className="grid grid-cols-3 gap-2 mb-2">

                                {p?.size?.data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded-md text-center font-medium py-3 text-lg
                                        ${item.enabled  
                                        ?'text-black hover:text-white hover:bg-black/[0.3] cursor-pointer' 
                                        :'bg-black/[0.1] opacity-50 pointer-events-none'
                                        } ${selectedSize === item.size ? 'bg-black/[0.3] text-white' : ''} `}

                                        onClick={() => {
                                            setSelectedSize(item.size),
                                            setShowError(false)
                                        }}
                                    >
                                        {item.size}
                                    </div>    
                                ))}
                            </div>

                            {/* show error */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                        </div>
                        {/* button add */}
                        <button
                            className="w-full py-4 rounded-full bg-slate-900 text-white text-lg
                            font-medium transition-transform active:scale-95 mb-3"
                            onClick={() => {
                                if(!selectedSize){
                                    setShowError(true)
                                    document.getElementById('sizeGrid').scrollIntoView({
                                        block: 'center',
                                        behavior: 'smooth'
                                    })
                                }else{
                                    dispatch(addToCart({
                                        ...product?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p.price
                                    }))
                                    notify()
                                }
                                
                            }}
                        >
                            Add to Cart
                        </button>
                        {/* button whishlist */}
                        <button
                            className="w-full py-4 border border-black rounded-full text-lg
                            font-medium transition-transform active:scale-95 mb-10 flex items-center 
                            justify-center hover:opacity-70 gap-2"
                            
                        >
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">Product Details</div>
                            <div className="text-base mb-5 markdown">
                                <ReactMarkdown>
                                {p.description}
                                </ReactMarkdown>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts products={products}/>
            </Wrapper>
        </div>
        </>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug} }) {
    // sản phẩm được đang xem
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );

    // các sản phẩm liên quan
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}` 
        // &[filters][categories][slug][$eq]=${slugC}
    );
    return {
        props: {
            product,
            products,
        },
    };
}
