import React, { ReactNode } from 'react';
import Image from 'next/image'

import { toPascalCase } from '@/lib/utils'
import { aboutText1 } from '@/common/constants';
import { CgStyle } from 'react-icons/cg';
import { MdHighQuality } from 'react-icons/md';
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa6';

import Container from './ui/container'
import Card from './card';


const About = () => {
    const sections = ['qaulity', 'style', 'creative', 'innovative', 'artistery']
    return (
        <article className=' text-white py-4 flex flex-col items-center ' id='about'>
            <Container className='py-6 px-3 flex flex-col gap-5 justify-center items-center text-center'>
                {/* <Container className='flex items-center justify-center my-10'>
                    <h1 className='text-[#887f7f] text-4xl'> About</h1>
                </Container> */}
                <p className='text-2xl text-white lg:text-3xl'>
                    Welcome to Soles Craft, <span className='text-yellow-600'>where passion </span>
                    <br /> <span className='text-yellow-600'>meets </span> craftsmanship. Founded by a visionary <br />entrepreneur  <span className='text-yellow-600'>dedicatedmeets to redefining </span> footwear.<br /> Our brand embodies the perfect blend of <br />
                    functionality <span className='text-yellow-600'>and fashion</span>.
                </p>

            </Container>

            <Container className='py-3 px-3 text-xl text-[#aa9e9e] my-10 rounded-full bg-slate-300 bg-opacity-15 lg:w-6/12  overflow-x-scroll lg:overflow-x-hidden  hidden'>
                <ul className='flex items-center justify-around'>
                    {
                        sections.map((section, i) => (
                            <li
                                key={i}
                                className={`${i === 1 ? 'text-yellow-600' : ""} px-3`}
                            >
                                {toPascalCase(section)}
                            </li>
                        ))
                    }
                </ul>
            </Container>

            <Container className='flex flex-col gap-7'>
                <Container className='flex flex-col '>
                    <Container className='flex items-center justify-center mt-8 mb-2'>
                        <h1 className='text-[#887f7f] text-4xl'> Creativity </h1>
                    </Container>
                    <Container className='flex items-center justify-center my-5'>
                        <p className='text-[white] text-2xl p-3 w-full  text-center lg:w-7/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quas, optio sit earum aliquid reprehenderit.</p>
                    </Container>
                </Container>

                <Container className=''>
                    <Container className='flex items-center justify-center mt-8 mb-2'>
                        <h1 className='text-[#887f7f] text-4xl'> Unique </h1>
                    </Container>
                    <Container className='flex items-center justify-center my-5'>
                        <p className='text-[white] text-2xl p-3 w-full text-center lg:w-7/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quas, optio sit earum aliquid reprehenderit.</p>
                    </Container>
                </Container>
            </Container>


            <Container className='flex flex-col gap-5 lg:flex-row py-5'>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <CgStyle className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center '> Perfect brand for style artistry</p>
                    </Container>
                </Card>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <FaCreativeCommonsSamplingPlus className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center '> Next level creativity</p>
                    </Container>

                </Card>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <MdHighQuality className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center '> Hight Standard and Qaulity</p>
                    </Container>
                </Card>
            </Container>

        </article>
    )
}

export default About


