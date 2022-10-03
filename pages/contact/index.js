
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import axios from 'axios'
import Axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React, { useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiOutlineMail} from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../../components/Navbar'



export default function Home(props) {
  const router =useRouter()
  const projects = props.data
  const articles = props.blogs

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = async e =>{
    e.preventDefault();

    await fetch('https://victor-madaraka-api.up.railway.app/victor/portfolio/api/v1/messages/create/',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body: JSON.stringify({
            name,
            email,
            message
        })


    })
  }

//   const submitHandler = async e =>{
//     e.preventDefault();
//     // console.log(name)
//     // const csrftoken = Cookies.get('csrftoken');

//     const config ={
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json',
//             // 'X-CSRFToken': csrftoken
//         }
//     }
//     const body = {
//         name,
//         email,
//         message

//     }
//     try{

//     const res = Axios.post('http://127.0.0.1:8000/victor/portfolio/api/v1/messages/create/', body, config)
//     if(res.status === 200){
//          console.log(res)
//     }

//     } catch(err){
//         console.log(err)

//     }
// }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Victo Madaraka | Software Developer</title>
        <meta name="description" content="Victo Madaraka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

        {/* <Contact/> */}


        <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xs uppercase text-[#3d3d3d]'> Get in touch</p>
                <p className='text-white py-4'><span className='text-[#64ffda]'>07. </span>Contact Me</p>
                <div className="grid lg:grid-cols-5 gap-4">

                <div className='col-span-3 lg:col-span-2 w-full border border-indigo-600  shadow-xl shadow-gray-900'>
                        <div className='lg:p-4  p-10'>
                            <div>
                                {/* img */}
                            </div>
                            <div>
                                <h2 className='py-2 text-white'>Victor Madaraka</h2>
                                <p className='text-[#3d3d3d]'>Full-Stack Developer</p>

                            </div>
                            <div>
                        <p className='uppercase text-sm pt-8 '>My socials</p>
                        

                        <div className='flex  items-center justify-between  py-4 max-w-[330px]'>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsInstagram/>
                        </div>

                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsTwitter/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaGithub />
                        </div>


                        </div>
                        
                        </div>

                        </div>

                        
                    </div>
                    {/* right */}
                        <div className='col-span-3 w-full h-auto border border-indigo-600 shadow-xl  lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={submitHandler}>
                                <div className='grid md:grid-cols gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 p-3 flex border-indigo-500' type="text" 
                                        onChange={e => setName(e.target.value)}
                                        value={name}/>

                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 p-3 flex border-indigo-500' type="email" 
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}/>

                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea className='border-2 text-[#111] p-3 flex border-indigo-500' rows='10' 
                                        onChange={e => setMessage(e.target.value)}
                                        value={message}></textarea>

                                    </div>
                                    

                                </div>
                                <button className='w-full p-4 mt-4 border border-green-600 shadow-lg hover:shadow-green-600' type='submit'>Send Message</button>

                            </form>

                        </div>

                    </div>
                    
                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-xl shadow-indigo-500 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <HiOutlineChevronDoubleUp size={30}/>
                        </div>
                    </Link>
                </div>

        </div>

    </div>



      
    </div>
  )
}




