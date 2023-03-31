import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";
import Title from "@/components/Title";

export default function Home({ products }) {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   const {data} = await fetchDataFromApi("/api/products");
  //   setData(data)
  // }

  const ps = products?.data;
  const [searchProducts, setSearchProducts] = useState("");

  const filteredProduct = () => {
    return ps.filter((product) => {
      return product.attributes.name
        .toLowerCase()
        .includes(searchProducts.toLowerCase());
      // || product.attributes.categories.data.attributes?.slug.toLowerCase().includes(searchProducts.toLowerCase())
    });
  };

  return (
    <main>
      <Title title='T1 - Trang chủ'/>
      <HeroBanner />
      {/* <h1>{products.data[0].attributes.name}</h1> */}
      <Wrapper className="flex flex-col justify-center items-center gap-16 mb-16">
        <div className="flex flex-col text-center max-w-[800px] mx-auto items-center justify-center">
          <div className="md:text-[34px] text-[28px] font-semibold leading-tight md:tracking-[7px] tracking-[1px] mb-5">
            Cushioning for Your Miles
          </div>
          <div className="md:text-xl text-sm">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running
          </div>
        </div>

        <input
          type="text"
          className="border-[2px] outline-none border-black/[0.3] md:w-[700px] w-[310px] 
          md:h-[70px] h-[50px] rounded-full px-5 md:text-[26px] text-base"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchProducts}
          onChange={(text) => {
            setSearchProducts(text.target.value);
          }}
        />

        {filteredProduct().length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-0 mb-40 mx-5">
            {filteredProduct().map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <div className="h-[300px] flex items-center">
            <Wrapper className='flex flex-col items-center justify-center md:text-[20px] text-base gap-2'>
              <div>Xin lỗi, cửa hàng chúng tôi tạm hết hàng hoặc không doanh mặt hàng này.</div>
              <div>Quý khách hàng vui lòng tìm kiếm những sản phẩm khác.</div>
            </Wrapper>
          </div>
        )}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps(context) {
  const products = await fetchDataFromApi("/api/products?populate=*");
  // const {data} = await fetchDataFromApi("/api/products?populate=*")
  // console.log(products.data[2].attributes.name);
  // console.log(data[2].attributes.name);

  return {
    props: { products }, // will be passed to the page component as props
  };
}
