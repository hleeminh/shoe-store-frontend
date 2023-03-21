import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"


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
      </Wrapper>
    </main>
  )
}
