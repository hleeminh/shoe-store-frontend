import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react"
import {fetchDataFromApi} from "@/utils/api"

export default function Home({products}) {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   const {data} = await fetchDataFromApi("/api/products");
  //   setData(data)
  // }

  return (
    <main>
      <HeroBanner/>
      {/* <h1>{products.data[0].attributes.name}</h1> */}
      <Wrapper>
        <div className="text-center md:my-[80px] my-[50px] max-w-[800px] mx-auto">
          <div className="md:text-[34px] text-[28px] mb-5 font-semibold leading-tight md:tracking-[7px] tracking-[1px]">
            Cushioning for Your Miles
          </div>
          <div className="md:text-xl text-sm">
            A lightweight Nike ZoomX midsole is combined with increased
            stack heights to help provide cushioning during extended 
            stretches of running  
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-0 my-14 mx-5">
          {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product}/>
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export async function getStaticProps(context) {
  
  const products = await fetchDataFromApi("/api/products?populate=*")
  // const {data} = await fetchDataFromApi("/api/products?populate=*")
  // console.log(products.data[2].attributes.name);
  // console.log(data[2].attributes.name);
 
  return {
    props: {products}, // will be passed to the page component as props
  }
}
