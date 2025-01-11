'use client'

import { AddProductT, LoginT } from '@/common/types'
import Container from '@/components/ui/container'
import { toPascalCase } from '@/lib/utils'

import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Admin = () => {
    const [visibility, setVisibility] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddProductT>({
        defaultValues: {
            name: '',
            description: ''
        },
        reValidateMode: 'onChange'
    })

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            Admin Page - Coming Soon
        </div>
    )
}

export default Admin
