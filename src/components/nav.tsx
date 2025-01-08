'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { toPascalCase } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const navLinks = ['home', 'products', 'administration'];
    const path = usePathname();
    const [toggleNav, setToggleNav] = useState(false)

    const handleNavToggle = () => {
        setToggleNav(prevState => !prevState)
        console.log(path)
    }

    return (
        <div className='flex items-center gap-2 px-3 py-3 shadow-sm shadow-gray-400 absolute top-0 left-0 z-50 w-screen'>
            <div className='flex gap-3 items-center '>
                <span className='p-2 border border-transparent hover:border-white block lg:hidden'>
                    <FaBars className='block lg:hidden ' onClick={handleNavToggle} />
                </span>
                <span className='text-2xl font-bold lg:text-4xl mr-10 lg:mx-10'>
                    Soles<span className='font-semibold text-yellow-600'>Craft</span>
                </span>
            </div>

            <ul className='gap-4 hidden lg:flex'>
                {navLinks.map((item, i) => (<li key={item + i}>
                    <Link href={`${item === 'home' ? '/' : item}`}
                        className={`${path === `/${item}` ? 'text-yellow-600' : ''}`}
                    >
                        {toPascalCase(item)}
                    </Link>
                </li>))}
            </ul>

            {
                toggleNav &&
                (<aside className='h-screen w-screen absolute flex flex-col gap-5 text-[#c4c0c0]   top-0 left-0 z-40 ' >
                    <div className='h-full w-[80%] bg-black'>
                        <div className='flex items-center justify-between gap-2 px-3 py-4 shadow-sm shadow-gray-400'>
                            <span className='text-2xl font-bold lg:text-4xl px-2'>
                                Soles<span className='font-semibold text-yellow-600'>Craft</span>
                            </span>

                            <span className='p-2 text-2xl font-semibold border border-black hover:border-white' onClick={handleNavToggle}>
                                X
                            </span>
                        </div>

                        <ul className='flex flex-col gap-3 px-5 py-7'>
                            {navLinks.map((item, i) => (<li key={item + i}
                            >
                                <Link href={`${item === 'home' ? '/' : item}`}
                                    className={`${path === `/${item}` ? 'bg-white' : ''}`}
                                    onClick={handleNavToggle}>
                                    {toPascalCase(item)}
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                </aside>)
            }
        </div>
    )
}

export default NavBar
