import Image from 'next/image';

import { type Product } from '@/common/types'
import Container from '@/components/ui/container'
import BackButton from '../components/backButton';
import { products } from '@/common/constants';
import { Metadata } from 'next/types';

type ProductProps = {
    params: { id: string }
}

export const generateMetaData = ({ params }: ProductProps): Metadata => {

    const { id } = params
    const product = products.find(p => p.id.toString() === id)

    if (!product) return {
        title: "solesCraft",
        description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: "https://soles-craft-client.vercel.app",
            siteName: "SolesCraft",
            title: "SolesCraft",
            description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
            images: [
                {
                    url: "https://soles-craft-client.vercel.app/open-graph.png",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    type: "image/png",
                },
                {
                    url: "https://soles-craft-client.vercel.app/open-graph.png",
                    width: 900,
                    height: 800,
                    alt: "Og Image Alt Second",
                    type: "image/png",
                },
                { url: "https://soles-craft-client.vercel.app/open-graph.png" },
                { url: "https://soles-craft-client.vercel.app/open-graph.png" },
            ],
        },
    };

    return {
        title: "solesCraft",
        description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: `https://soles-craft-client.vercel.app/products/${product.images[0]}`,
            siteName: "SolesCraft",
            title: "SolesCraft",
            description: "Soles Craft specializes in creating high-quality, stylish, and comfortable shoes for both men and women.",
            images: [
                {
                    url: `https://soles-craft-client.vercel.app/products/${product.images[0]}`,
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    type: "image/png",
                },
                {
                    url: `https://soles-craft-client.vercel.app/products/${product.images[0]}`,
                    width: 900,
                    height: 800,
                    alt: "Og Image Alt Second",
                    type: "image/png",
                },
                { url: `https://soles-craft-client.vercel.app/products/${product.images[0]}` },
                { url: `https://soles-craft-client.vercel.app/products/${product.images[0]}` },
            ],
        },
        twitter: {
            card: "summary_large_image",
        }
    }
}

const Product = ({ params }: ProductProps) => {
    const { id } = params


    const product = products.find(p => p.id.toString() === id)

    if (!product) return <div> Not Found {id}</div>

    return (
        <div className=' py-[2rem] flex flex-col px-5 gap-6 overflow-x-hidden'>
            <BackButton />

            <Container className='flex relative h-screen items-center gap-4 flex-col lg:flex-row lg:justify-center lg:items-start '>
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

                    <Image src={product?.images[0]}
                        height={400}
                        width={300}
                        alt='hero'
                        className={`rounded-xl flex-grow static lg:my-2 `}
                    />
                </Container>

                <Container className='w-full flex flex-col gap-3 justify-center items- p-4 lg:h-4/6 lg:w-1/2'>
                    <p className='text-center'>{product?.description}</p>

                    <button className='py-3 px-5 font-semibold bg-yellow-600 text-black rounded-xl '>Checkout</button>
                </Container>
            </Container>
        </div>
    )
}

export default Product
