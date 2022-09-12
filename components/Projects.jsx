import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Axios from 'axios'
import { useRouter } from 'next/router';

export default function Projects(props) {
    const projects = props.data
    const router =useRouter()
    

  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xs uppercase text-[#3d3d3d]'> WHAT i have Created</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>04. </span>Projects</p>
            {projects.map((project)=> (
            <div key={project.id} className='grid md:grid-cols-3 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 p-4 group hover:scale-105 ease-in duration-200'>
                    {/* <Image src='/' width='' height='' alt='' /> */}
                    <div>
                        <h3 className='text-2xl text-[#ccd6f6] tracking-wider text-center'>{project.title}</h3>
                        <p className='pb-4 pt-2 text-[#ccd6f6] text-center'>{project.snippet} </p>
                        <Link href='/'>
                            <p className='text-sm cursor-pointer'>See More</p>
                        </Link>
                    </div>

                </div>
            </div>
            ))}
      
            

        </div>
        </div>
  )
};

export async function getServerSideProps(){

    const res = await Axios.get('http://127.0.0.1:8000/victor/portfolio/api/v1/projects')
  
    
  
    return{
      props:{ data: res.data}
    }
  }
  

// export async function getServerSideProps(){

//     const res = await Axios.get('http://127.0.0.1:8000/victor/portfolio/api/v1/projects')
  
    
  
//     return{
//       props:{ data: res.data}
//     }
//   }

// export async function getServerSideProps(){

//     const{ data } = await axios.get('http://127.0.0.1:8000/victor/portfolio/api/v1/projects')
//     console.log(data)
    
  
//     return{
//       props:{
//         projes: data.results || null
  
//       }
//     }
//   }




