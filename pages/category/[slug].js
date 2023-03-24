import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'
import { fetchDataFromApi } from '@/utils/api'


const Category = ({category, products, slug}) => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='md:text-[34px] text-[28px] mb-5 font-semibold leading-tight'>
                        {category?.data?.[0]?.attributes?.name}
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-0 my-14 mx-5">
                {products?.data?.map((product) => (
                    <ProductCard key={product.id} data={product}/>
                ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default Category

export async function getStaticPaths() {

    const category = await fetchDataFromApi('/api/categories?populate=*')
    
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`)
    return {
        props:{
            category,
            products,
            slug,
        }
    }
}
  
