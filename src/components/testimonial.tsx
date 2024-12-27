import React from 'react'
import Image from 'next/image'

//comps
import Container from './ui/container'
import Card from './card'

//constant
import { testimonies } from '@/common/constants'



const Testimonial = () => {

    return (
        <section className=' text-white py-4 flex flex-col items-center ' id='testimonial'>
            <Container className='flex items-center justify-center mt-10 mb-2'>
                <h1 className='text-[#887f7f] text-4xl'> Testimonial </h1>
            </Container>

            <Container className='flex flex-col gap-5 lg:flex-row py-5'>
                {
                    testimonies.map(({ name, testimony, image }, i) => (
                        <Card key={i}>
                            <Container className='flex flex-col  gap-9 h-full w-full'>
                                <Container className='h-[15rem] w-[100%] relative rounded-xl'>
                                    <Image
                                        src={image}
                                        alt='pic'
                                        fill
                                        objectFit='cover'
                                        className='static rounded-t-xl '
                                    />
                                </Container>
                                <Container className='flex flex-col gap-3  px-2 py-3 h-[40%]'>
                                    <h3 className=''>{name}</h3>
                                    <p className=''>{testimony}</p>
                                </Container>
                            </Container>
                        </Card>
                    ))
                }
            </Container>
        </section >
    )
}

export default Testimonial
