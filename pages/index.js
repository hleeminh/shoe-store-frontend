import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <main>
      <HeroBanner/>
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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </Wrapper>
    </main>
  )
}
