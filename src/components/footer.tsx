

import React from "react";
import Link from 'next/link'


import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";


import Container from "./ui/container";





//   direction="row"
//   alignItems={"center"}
//   sx={{ gap: "1rem", position: "", bottom: "0px", padding: "1rem", }}

const Footer = () => {
    return (
        <Container
            className="drop-shadow-md flex gap-2 items-center justify-center p-2"
        >
            <FooterCard />
        </Container>
    );
};


export const FooterCard = () => {
    return (
        <div id="contact" className="mt-16 w-[91%] sm:w-[89%] mx-auto text-[white]">

            <div className="flex items-center gap-3 justify-center flex-wrap my-4">
                <Link
                    href="https://www.x.com/demainc_"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                >
                    <BsTwitterX className="text-2xl" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/demainc"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                >
                    <CiLinkedin className="text-3xl" />
                </Link>
                <Link
                    href="https://www.facebook.com/mrdemainc"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                >
                    <RiFacebookCircleFill className="text-3xl" />
                </Link>
                <Link
                    href="mailto:demaincchizaram@gmail.com?subject=Hello, James"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                >
                    <HiOutlineMail className="text-3xl" />
                </Link>
                <Link
                    href="https://wa.me/2349077046324"
                    target="_blank"
                    className="flex justify-center items-center w-[40px]"
                >
                    <FaWhatsapp className="text-3xl" />
                </Link>
            </div>
            <p className="flex gap-1 items-center text-light-200 justify-center tracking-wide my-12 font-light">
                <span className=' px-2'>
                    &copy;
                    <span className='text-2xl px-2'>
                        Soles<span className='font-semibold text-yellow-600'>Craft</span>
                    </span>
                    <span>{new Date().getFullYear()} .</span>
                </span>

            </p>
        </div>
    );
};

export default Footer;


