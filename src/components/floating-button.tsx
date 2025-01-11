'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import WhatsAppIcon from '../../public/whatsapp-logo-4456.svg'

const FloatingButton = () => {
    const [buttonVisibility, setButtonVisibility] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleFloatingButtonVisibility);
        return () => window.removeEventListener('scroll', handleFloatingButtonVisibility);
    }, [])

    const handleFloatingButtonVisibility = () => {
        if (window.scrollY > window.screenY) setButtonVisibility(true);
        else setButtonVisibility(false);
    }


    return (
        <>
            {
                buttonVisibility && (
                    <div className='fixed w-[50px] h-[50px] right-10 bottom-10 overflow-y-hidden'>
                        <a href="https://wa.me/2347010053127">
                            <Image
                                src={WhatsAppIcon}
                                alt="hero banner"
                                layout='fill'
                                quality={100}
                                objectFit='contain'
                                className="absolute top-0 w-[100%] h-[100%]"
                            />
                        </a>

                    </div>

                )}
        </>
    )

}

export default FloatingButton
