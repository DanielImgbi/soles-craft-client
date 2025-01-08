'use client'
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import Container from "@/components/ui/container";


const Login = () => {
    const [visibility, setVisibility] = useState(false)

    const handlePasswordVisibility = () => {
        setVisibility(prev => !prev)
    }
    return (
        <Container className=" h-screen  flex justify-center items-center">

            <form className="h-[80%] w-[48%] bg-orange-700 flex flex-col gap-5 items-center">
                <Container className="">
                    <h1 className="text-4xl"> Login</h1>
                </Container>
                <Container className="">
                    <Container className='flex p-2 bg-blue-900 '>
                        <input
                            type={`${visibility ? 'text' : 'password'}`}
                            placeholder='password'
                            className="text-white bg-black"
                        />
                        <span onClick={handlePasswordVisibility}>
                            {
                                visibility ?
                                    <MdVisibilityOff />
                                    : <MdVisibility />
                            }
                        </span>
                    </Container>
                </Container>


            </form>
        </Container>
    )
}

export default Login
