
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Contact from '../components/Contact'
import React, { useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiOutlineMail} from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';



export default function Home(props) {
  const router =useRouter()
  const projects = props.data
  const articles = props.blogs
  const services = props.works
  const skills = props.knows

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const apiUrl = 'http://127.0.0.1:8000/victor/portfolio/api/v1'

  const submitHand = async (e) =>{
    e.preventDefault();
    const options = {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            message
        }),
        headers:{
            'Content-Type':'application/json',

        }

    }
    fetch(`${apiUrl}/messages/create/`, options).
    then(res=>res.json()).then(response=> {
        setName('')
        setEmail('')
        setMessage('')
        setSubmitted(true)
    }).catch(error=>console.log(error))

    // const res = await fetch('http://127.0.0.1:8000/victor/portfolio/api/v1/messages/create/',{
    //     method: 'POST',
    //     headers:{
    //         'Content-Type':'application/json',

    //     },
    //     body: JSON.stringify({
    //         name,
    //         email,
    //         message
    //     })


    // })
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    // console.log(name)
    // const csrftoken = Cookies.get('csrftoken');

    const config ={
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            // 'X-CSRFToken': csrftoken
        }
    }
    const body = {
        name,
        email,
        message

    }
    try{

    const res = Axios.post('http://127.0.0.1:8000/victor/portfolio/api/v1/messages/create/', body, config)
    if(res.status === 200){
        console.log(res)
        setSubmitted(true)
    }

    } catch(err){
        console.log(err)

    }
}
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Victo Madaraka | Software Developer</title>
        <meta name="description" content="Victo Madaraka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      {/* <Skills/> */}

      <div id='skills' className='w-full mb-10 mt-10 py-20 p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xs uppercase text-[#3d3d3d]'> WHAT i can do</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>03. </span>Skills</p>
            <div className='grid md:grid-cols-6 gap-4'>
            {skills.map((skill)=> (

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500 hover:shadow-red-500 '>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={skill.logo} width='64px' height='64px' alt={skill.name} />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>{skill.name}</h3>
                        </div>
                    </div>
                </div>
                ))}
                

            </div>
        </div>

    </div>
      {/* <Projects /> */}

      <div id='projects' className='w-full py-24 '>
        <div className='max-w-[1240px] mx-auto px-2 py-8'>
        <p className='text-xs uppercase text-[#3d3d3d]'> WHAT i have Created</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>04. </span>Projects</p>
           
            <div className='grid md:grid-cols-3 gap-4'>
            {projects.map((project)=> (
                <div className='relative flex items-center justify-center border border-indigo-600 h-auto w-full shadow-2xl bg-slate-800 p-4 group hover:scale-105 ease-in duration-200 cursor-pointer'
                onClick={() => router.push(`/projects/${project.slug}`)}>
                    {/* <Image src='/' width='' height='' alt='' /> */}
                    <div>
                        <h3 className='text-2xl text-[#ccd6f6] tracking-wider text-center'>{project.title}</h3>
                        <p className='pb-4 pt-2 text-[#ccd6f6] text-center'>{project.snippet} </p>
                        <Link href='/'>
                            <p className='text-sm cursor-pointer'>See More</p>
                        </Link>
                    </div>

                </div>
                 ))}
            </div>
           
            

        </div>
        </div>
                {/* services */}
                <div id='services' className='w-full py-24'>
        <div className='max-w-[1240px] mx-auto px-2 '>
        <p className='text-xs uppercase text-[#3d3d3d]'> what i can do</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>05. </span>SERVICES</p>
           
            <div className='grid md:grid-cols-3 gap-4'>
            {services.map((service)=> (
                <div className='relative flex items-center justify-center  shadow-gray-500 h-auto w-full shadow-lg  p-4 group hover:scale-105 ease-in duration-200 cursor-pointer'>
                    {/* <Image src='/' width='' height='' alt='' /> */}
                    <div>
                        <h3 className='text-2xl text-[#3b5dce] tracking-wider text-center'>{service.title}</h3>
                        <p className='pb-4 pt-2 text-[#cacdd8] text-center'>{service.description} </p>
                    </div>

                </div>
                 ))}
            </div>
           
            

        </div>
        </div>

        {/* BLOGS */}
        <div id='blogs' className='w-full py-24'>
        <div className='max-w-[1240px] mx-auto px-2 '>
        <p className='text-xs uppercase text-[#3d3d3d]'> some of my articles</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>06. </span>BLOGS</p>
           
            <div className='grid md:grid-cols-3 gap-4'>
            {articles.map((article)=> (
                <div className='relative flex items-center justify-center border border-indigo-600 h-auto w-full shadow-2xl  p-4 group hover:scale-105 ease-in duration-200 cursor-pointer'
                onClick={() => router.push(`/blogs/${article.slug}`)}>
                    {/* <Image src='/' width='' height='' alt='' /> */}
                    <div>
                        <h3 className='text-2xl text-[#3b5dce] tracking-wider text-center'>{article.title}</h3>
                        <p className='pb-4 pt-2 text-[#cacdd8] text-center'>{article.content} </p>
                        <Link href='/'>
                            <p className='text-sm cursor-pointer'>See More</p>
                        </Link>
                    </div>

                </div>
                 ))}
            </div>
           
            

        </div>
        </div>

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
                            <div className='pt-48'>
                                <h2 className='py-2 text-white'>Victor Madaraka</h2>
                                <p className='text-[#949393]'>Full-Stack Developer</p>

                            </div>
                            <div>
                        <p className='uppercase text-sm pt-8 '>My socials</p>
                        

                        <div className='flex  items-center justify-between  py-4 max-w-[330px]'>
                        <Link href='https://www.linkedin.com/in/victormadaraka/'>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaLinkedinIn />
                        </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-[#8892b0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <AiOutlineMail />
                        </div>
                        <Link href='https://www.instagram.com/victor_madaraka/'>
                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsInstagram/>
                        </div>
                        </Link>
                        <Link href='https://twitter.com/254Effect'>

                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsTwitter/>
                        </div>
                        </Link>
                        <Link href='https://github.com/Madaraka02/'>
                        <div className='rounded-full shadow-lg shadow-[#b5c0e0] p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <FaGithub />
                        </div>
                        </Link>


                        </div>
                        
                        </div>

                        </div>

                        
                    </div>
                    {/* right */}
                   
                        <div className='col-span-3 w-full h-auto border border-indigo-600 shadow-xl  lg:p-4'>
                        {/* { submitted ? alert('Thank you I have received your message and will get back ASAP'):''} */}
                        <div className='p-4'>
                        
                            <form onSubmit={submitHand}>
                                <div className='grid md:grid-cols gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 p-3 flex border-indigo-500 outline-none text-[#111]' type="text" 
                                        onChange={e => setName(e.target.value)}
                                        value={name}/>

                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 p-3 flex border-indigo-500 text-[#111] outline-none'  required type="email" 
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}/>

                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea className='border-2 text-[#111] p-3 flex border-indigo-500 outline-none' required rows='10' 
                                        onChange={e => setMessage(e.target.value)}
                                        value={message}></textarea>

                                    </div>
                                    

                                </div>
                                <button className='w-full p-4 mt-4 border border-green-600 shadow-lg outline-none hover:shadow-green-600' type='submit'>Send Message</button>

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



        {/* export const getStaticProps = async () => {
  const res = await Axios.get("http://127.0.0.1:8000/victor/portfolio/api/v1/projects");

  console.log(res.data)
  return {
    props: { data: res.data }
  };
}; */}
      
    </div>
  )
}

export async function getServerSideProps(){
  const apiUrl = 'http://127.0.0.1:8000/victor/portfolio/api/v1'

  const res = await Axios.get(`${apiUrl}/projects`)
  const reslt = await Axios.get(`${apiUrl}/blogs`)
  const resu = await Axios.get(`${apiUrl}/services`)
  const ress = await Axios.get(`${apiUrl}/skills`)
  


  

  return{
    props:{ 
      data: res.data,
      blogs:reslt.data,
      works:resu.data,
      knows:ress.data
    }
  }
}
