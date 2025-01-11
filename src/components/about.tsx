import { toPascalCase } from '@/lib/utils';
import { CgStyle } from 'react-icons/cg';
import { MdHighQuality } from 'react-icons/md';
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa6';

import Container from './ui/container'
import Card from './card';


const About = () => {
    const sections = ['qaulity', 'style', 'creative', 'innovative', 'artistery']


    return (
        <article className=' text-black py-4 flex flex-col items-center ' id='about'>
            <Container className='py-6 px-3 flex flex-col gap-5 justify-center items-center text-center'>
                <Container className='flex items-center justify-center mt-10 mb-5'>
                    <h1 className='text-[#887f7f] text-2xl font-bold'> About</h1>
                </Container>
                <p className='text-lg text-black lg:text-xl'>
                    Welcome to Soles Craft, <span className='text-yellow-600'>where passion </span>
                    <span className='text-yellow-600'>meets </span> craftsmanship. Founded by a visionary <br />entrepreneur  <span className='text-yellow-600'>dedicatedmeets to redefining </span> footwear.Our brand embodies the perfect blend of <br />
                    functionality <span className='text-yellow-600'>and fashion</span>.
                </p>

            </Container>

            <Container className='hidden py-3 px-3 text-xl text-[#aa9e9e] mt-10 mb-5 rounded-full bg-slate-300 bg-opacity-15 lg:w-6/12  overflow-x-scroll lg:overflow-x-hidden  md:block'>
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

            <Container className='flex flex-col gap-7 w-'>
                <Container className='flex flex-col w-2/2'>
                    <Container className='flex items-center justify-center mt-8 mb-2'>
                        <h1 className='text-[#887f7f] text-2xl font-bold'> Creativity </h1>
                    </Container>
                    <Container className='flex items-center justify-center my-5'>
                        <p className=' textlg p-3 w-full  text-center lg:w-7/12 lg:text-xl'>Lorem ipsum dolor sit, amet consectetur
                            <br /> adipisicing elit. Eius quas, optio sit earum aliquid reprehenderit.</p>
                    </Container>
                </Container>

                <Container className=''>
                    <Container className='flex items-center justify-center mt-8 mb-2'>
                        <h1 className='text-[#887f7f] text-2xl font-bold'> Unique </h1>
                    </Container>
                    <Container className='flex items-center justify-center my-5'>
                        <p className='text-black text-lg p-3 w-full text-center lg:w-7/12 lg:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Eius quas, optio sit earum aliquid reprehenderit.</p>
                    </Container>
                </Container>
            </Container>


            <Container className='flex flex-col gap-5 lg:flex-row py-5'>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <CgStyle className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center font-semibold'> Perfect brand for style artistry</p>
                    </Container>
                </Card>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <FaCreativeCommonsSamplingPlus className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center font-semibold '> Next level creativity</p>
                    </Container>

                </Card>
                <Card >
                    <Container className='p-9 flex flex-col items-center justify-center gap-11 h-full w-full'>
                        <MdHighQuality className='text-8xl text-yellow-700' />
                        <p className='text-xl text-center font-semibold'> Hight Standard and Qaulity</p>
                    </Container>
                </Card>
            </Container>

        </article>
    )
}

export default About


