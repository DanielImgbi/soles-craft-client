import { toPascalCase } from '@/lib/utils'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const linkList = [
        {
            link: 'products',
            href: '/administration/products'
        },
        {
            link: 'promo',
            href: '/promo'
        }, {
            link: 'website',
            href: 'home'
        },
        {
            link: 'products list',
            href: 'products'
        }
    ]

    return (
        <div className='w-screen'>
            {/* <aside
                className={`h-full w-[20%] flex flex-col gap-5 p-5 bg-slate-100 fixed top-0 left-0`}
            >
                {
                    linkList.map((item, i) => (
                        <Link
                            href={item.href}
                            key={item.link + i}
                            className=' font-semibold hover:text-yellow-500'
                        >
                            {toPascalCase(item.link)}
                        </Link>
                    ))
                }
            </aside> */}
            {children}
        </div>
    )
}

export default AdminLayout
