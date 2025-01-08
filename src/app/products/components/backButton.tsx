'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa6'

const BackButton = () => {
    const router = useRouter()
    const handlePrevPage = () => {
        router.back()
    }

    return (
        <div className='p-3 rounded-full bg-yellow-600 w-12 h-12 flex justify-center items-center cursor-pointer'>
            < FaArrowLeft onClick={handlePrevPage} />
        </div>
    )
}

export default BackButton
