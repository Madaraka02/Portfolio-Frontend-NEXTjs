
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



export default function Blogs(props) {
  const router =useRouter()
  const projects = props.data
  
  return (

<>
  

      <div id='projects' className='w-full py-24 '>
        <div className='max-w-[1240px] mx-auto px-2 py-8'>
        <p className='text-xs uppercase text-[#3d3d3d]'> WHAT i have Created</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>04. </span>Projects</p>
           
            <div className='grid md:grid-cols-3 gap-4'>
            {projects.map((project)=> (
                <div  key={project.id} className='relative flex items-center justify-center border border-indigo-600 h-auto w-full shadow-2xl bg-slate-800 p-4 group hover:scale-105 ease-in duration-200 cursor-pointer'
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

        {/* BLOGS */}
        <div id='projects' className='w-full py-24'>
        <div className='max-w-[1240px] mx-auto px-2 '>
        <p className='text-xs uppercase text-[#3d3d3d]'> some of my articles</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>06. </span>BLOGS</p>
           
            <div className='grid md:grid-cols-3 gap-4'>
            {projects.map((project)=> (
                <div key={project.id} className='relative flex items-center justify-center border border-indigo-600 h-auto w-full shadow-2xl  p-4 group hover:scale-105 ease-in duration-200 cursor-pointer'
                onClick={() => router.push(`/projects/${project.slug}`)}>
                    {/* <Image src='/' width='' height='' alt='' /> */}
                    <div>
                        <h3 className='text-2xl text-[#3b5dce] tracking-wider text-center'>{project.title}</h3>
                        <p className='pb-4 pt-2 text-[#244eda] text-center'>{project.snippet} </p>
                        <Link href='/'>
                            <p className='text-sm cursor-pointer'>See More</p>
                        </Link>
                    </div>

                </div>
                 ))}
            </div>
           
            

        </div>
        </div>
        <Contact/>



        {/* export const getStaticProps = async () => {
  const res = await Axios.get("http://127.0.0.1:8000/victor/portfolio/api/v1/projects");

  console.log(res.data)
  return {
    props: { data: res.data }
  };
}; */}
      </>

  )
}

export async function getServerSideProps(){

  const res = await Axios.get('http://127.0.0.1:8000/victor/portfolio/api/v1/projects')

  

  return{
    props:{ data: res.data}
  }
}




