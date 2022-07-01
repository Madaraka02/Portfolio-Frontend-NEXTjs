
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import axios from 'axios'
import Axios from 'axios'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { AiOutlineSelect } from 'react-icons/ai'



export default function BlogPage({blog}) {
//   const projects = props.data
  console.log(blog)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Victo Madaraka | Software Developer</title>
        <meta name="description" content="Victo Madaraka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className='w-full  p-2 flex items-center py-48 mb-10'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='text-xs uppercase text-[#3d3d3d]'> </p>
                <p className='uppercase text-[#64ffda] py-4'>{blog.title}</p>

                <p className=' text-[#8892b0]  py-2 p-5 shadow-2xl z-[900]'>{blog.content}</p>
                {/* <Link href={project.link}>
                <div className='py-2 flex justify-items-start cursor-pointer '>
                    <AiOutlineSelect size={30}/>
                    <p className='ml-2'>View live link</p>
                </div>
                </Link> */}
 
            </div>
            <div className='w-full h-full m-auto flex items-center justify-center p-4 border-b-2 border-r-2 opacity-25 border-green-600 hover:scale-105 ease-in duration-500 shadow-xl hover:opacity-100 '>
                
                <img src={blog.image} className='w-full h-full' alt={blog.title} />
            </div>
        </div>

    </div>
    


      
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const { data } = await Axios.get(`http://127.0.0.1:8000/victor/portfolio/api/v1/blogs/${params.slug}`);
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    const blog = data;
    console.log(blog)
    return {
      props: {
        blog,
      },
    };
  };
  
// export async function getServerSideProps({query:{slug}}){

//   const {data} = await Axios.get(`http://127.0.0.1:8000/victor/portfolio/api/v1/projects?slug=${slug}`)

//   console.log(data)

//   return{
//     props:{ project: data.results || null,}
//   }
// }




