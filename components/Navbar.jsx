
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={35}/>
                </div>
                <div className='invisible md:visible'>
            <Link href='/'>
            <Image src="/../public/assets/vicd.png" alt="" width='200' height='150' /></Link></div>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/#main'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>01. </span>Home</li>
                    </Link>
                    <Link href='/#about'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>02. </span>About</li>
                    </Link>
                    <Link href='/#skills'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>03. </span>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>04. </span>Projects</li>
                    </Link>
                    {/* <Link href='/'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>05. </span>Resume</li>
                    </Link> */}
                    <Link href='/#services'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>05. </span>Services</li>
                    </Link>
                    <Link href='/#blogs'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>06. </span>Blogs</li>
                    </Link>

                    <Link href='/#contact'>
                    <li className='ml-10 text-sm  hover:border-b text-[#8892b0]'>
                    <span className='text-[#64ffda]'>07. </span>Contact</li>
                    </Link>

                </ul>
                {/* <div onClick={handleNav} className=''>
                    <AiOutlineMenu size={35}/>
                </div> */}
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0, top-0 w-full h-screen bg-[#233554]' : ''}>
        <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#112240] p-10 ease-in duration-500'
        : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
            <div className='flex w-full items-center justify-between'>
            <Image src="/" alt="" width='87' height='35' />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer'>
                <AiOutlineClose size={20}/>
            </div>
            
            </div>
            <div className='border-b border-[#8892b0] my-4'>
                <p className='text-[#64ffda] w-[85%] md:w-[90%]'>Hey there enjoy</p>
            </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                <li  onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/'>Home</Link>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#about'>About</Link>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#skills'>Skills</Link>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#projects'>Projects</Link>
                </li>
                {/* <li  onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/resume'>Resume</Link>
                </li> */}
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#services'>Services</Link>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#blogs'>Blogs</Link>
                </li>

                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <Link href='/#contact'>Contact</Link>
                </li>
                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest'>Lets Connect</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <Link href='https://www.linkedin.com/in/victormadaraka/'>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaLinkedinIn />
                        </div>
                        </Link>
                        <Link href='https://github.com/Madaraka02/'>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaGithub />
                        </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <AiOutlineMail />
                        </div>
                        <Link href='https://www.instagram.com/victor_madaraka/'>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsInstagram />
                        </div>
                        </Link>
                    
                    </div>
                </div>
            </div>
            

        </div>

    </div>
    </div>
  )
}



export default Navbar