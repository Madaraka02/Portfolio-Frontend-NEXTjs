import Link from 'next/link';
import React from 'react'
import { AiOutlineMail} from 'react-icons/ai';
import { BsArrowDownRightCircle } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                {/* <p className='uppercase tx-sm tracking-widest text-[#64ffda]'>WELCOME TO MY WORLD</p> */}
                <p className='text-[#64ffda] tx-sm'>Hi, my name is</p>
                <h2 className='py-4 text-[#e7e9ee]'>Victor Madaraka.</h2>
                <h2 className='py-2 text-[#8892b0]'>
                        A FULL-STACK SOFTWARE <span className='text-[#64ffda]'>DEVELOPER</span>
                </h2>
                <p className='text-[#a8b2d1] py-4 max-w-[70%] m-auto'>
                I'm a full stack developer with experience in designing, developing, and implementing applications and solutions using a range of technologies and programming languages. 
                Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
                </p>
                <div className='flex  items-center justify-between m-auto py-4 max-w-[330px]'>
                  <Link href='https://www.linkedin.com/in/victormadaraka/'>
                <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaLinkedinIn />
                        </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'
                        onClick={()=> alert('victormadaraka@gmail.com')}>
                        <AiOutlineMail />
                        </div>
                        <Link href='https://github.com/Madaraka02/'>
                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaGithub />
                        </div>
                        </Link>

                </div>
                <div className='flex items-center justify-between m-auto'>
                {/* <button className='p-2 w-40 items-center justify-center mt-4 border border-green-600 shadow-lg hover:shadow-green-600' >Hire me</button> */}
                {/* <button className='p-2 w-40 items-center justify-center mt-4 border border-green-600 shadow-lg hover:shadow-green-600' >Download CV</button> */}
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default Main