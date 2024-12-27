"use client"

import React from 'react';
import Image from "next/image";


import Masonry from 'react-masonry-css'


import { heroImages } from '@/common/constants';



const Hero = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 2
    };

    return (
        <div className=' w-screen over relative '>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid lg:py-3 lg:px-3"
                columnClassName="my-masonry-grid_column">
                {
                    heroImages.map((image, i) => (
                        <Image key={1} src={image}
                            height={i % 2 ? 200 : 400}
                            width={i % 2 ? 200 : 300}
                            alt='hero'
                            className={`rounded-lg flex-grow lg:my-2`}
                        />))
                }
            </Masonry>
            <div className='absolute bg-black h-full w-full top-0 left-0 opacity-75 flex flex-col justify-center items-center gap-5'>
                <div className=' shadow rounded-lg text-black  bg-green-100 px-5 py-2 flex flex-col justify-center items-center gap-5'>
                    <span>
                        <h1 className=' text-2xl  font-bold lg:text-4xl'>
                            Soles<span className='font-semibold text-yellow-600'>Craft</span>
                        </h1>
                    </span>
                </div>

                {/* <span>
                    <p> Production Enterpirse</p>
                    <i> Redefining Class...</i>

                </span> */}
                <p className='text-center font-semibold'>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Corporis impedit ex tempore rem!<br />
                    Sunt corporis molestias molestiae, architecto atque repudiandae.
                </p>

            </div>
        </div>

    )
}

export default Hero;

