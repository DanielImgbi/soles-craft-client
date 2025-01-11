import React from 'react'
import Image from 'next/image'

//comps
import Container from './ui/container';
import Card from './card';

//constant
import { testimonies } from '@/common/constants';
import Parallax from './paralax';



const Testimonial = () => {

    return (
        <section className=' w-screen overflow-x-hidden text-black py-4 flex flex-col items-center ' id='testimonial'>
            <Container className='flex items-center justify-center mb-6'>
                <h1 className='text-[#887f7f] text-4xl'> Testimonial </h1>
            </Container>

            <Parallax baseVelocity={1}>
                <Container className="inline-flex gap-4 flex-shrink-0">
                    {testimonies.map(({ image, name, testimony }, i) => (
                        <Container
                            key={i}
                            className="relative flex flex-col rounded-xl shadow-md bg-[#eceaea] h-[20rem] w-[20rem] "
                        >
                            <Container className="h-[60%] w-full rounded-t-xl  relative">
                                <Image
                                    src={image}
                                    alt="placeholder"
                                    className="object-contain w-full rounded-t-xl h-auto relative"
                                    fill
                                    objectFit='cover'
                                    quality={100}
                                />
                            </Container>
                            <Container className='flex flex-col gap-1  p-2 box-border'>
                                <h3 className=''>{name}</h3>
                                <p className='overflow-hidden '>{testimony}</p>
                            </Container>
                        </Container>
                    ))}
                </Container>
            </Parallax>
        </section >
    )
}

export default Testimonial
