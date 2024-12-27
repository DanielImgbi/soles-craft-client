import React, { useEffect } from 'react'
import Image from 'next/image';

import { type Product } from '@/common/types/product'
import Container from '@/components/ui/container'

type ProductProps = {
    params: { id: string }
}

// todo
// add dynamic meta data

const Product = ({ params }: ProductProps) => {
    const { id } = params
    const product = {
        id: String(Math.random()),
        description:
            "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women. With a focus on timeless designs and premium materials,  Every pair of shoes we craft tells a story of dedication, artistry, and innovation. Step into a world of unparalleled comfort and style with Soles Craft—where your soles find their perfect match.",
        images: [
            "/IMG-20241220-WA0016.jpg",
            "/IMG-20241220-WA0017.jpg",
            "/IMG-20241220-WA0019.jpg",
            "/IMG-20241220-WA0020.jpg",
            "/IMG-20241220-WA0022.jpg",
            "/IMG-20241220-WA0026.jpg",
            "/IMG-20241220-WA0027.jpg",
            "/IMG-20241220-WA0030.jpg",
        ],
    }


    return (
        <div className=' py-[4.5rem] lg:py-0'>
            <Container className='flex relative h-screen justify-center items-center gap-4 flex-col lg:flex-row'>
                <Container className='  w-full flex justify-center flex-wrap relative lg:w-1/3'>
                    {/* {
                        product?.images?.map((image, i) => (
                            <Image src={image}
                                key={i}
                                height={i % 2 ? 200 : 400}
                                width={i % 2 ? 200 : 300}
                                alt='hero'
                                className={`rounded-lg flex-grow lg:my-2`}
                            />
                        ))
                    } */}

                    <Image src={product.images[2] as string}
                        height={400}
                        width={300}
                        alt='hero'
                        className={`rounded-lg flex-grow static lg:my-2 `}
                    />
                </Container>

                <Container className='w-full flex flex-col gap-3 justify-center items-center p-4 lg:w-1/2'>
                    <p className='text-center'>{product?.description}</p>

                    <button className='p-2 bg-yellow-600 rounded-md '>Checkout</button>
                </Container>
            </Container>
        </div>
    )
}

export default Product
