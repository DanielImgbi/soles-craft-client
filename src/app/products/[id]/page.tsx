import Image from 'next/image';

import { type Product } from '@/common/types/product'
import Container from '@/components/ui/container'
import BackButton from '../components/backButton';
import { products } from '@/common/constants';
import { notFound } from 'next/navigation';

type ProductProps = {
    params: { id: string }
}

// todo
// add dynamic meta data

const Product = ({ params }: ProductProps) => {
    const { id } = params
    const product = products.find(p => p.id === id)

    if (!product) return notFound()

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

                    <Image src={product?.images[2] as string}
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
