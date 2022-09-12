
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import axios from 'axios'
import Axios from 'axios'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { AiOutlineSelect } from 'react-icons/ai'
import { BsArrowRightShort, BsArrowUpRightSquare } from 'react-icons/bs'



export default function ProjectPage({project}) {
//   const projects = props.data
  console.log(project)
  
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
            <div className='shadow-2xl z-90'>
            <p className='text-xs uppercase text-[#3d3d3d]'> </p>
                <p className='uppercase p-5 text-[#64ffda] py-4'>{project.title}</p>

                <p className=' text-[#8892b0]  py-2 p-5 '>{project.description}</p>
                <Link href={project.link}>
                <div className='py-2 flex justify-items-start cursor-pointer '>
                    {/* <AiOutlineSelect size={30}/> */}
                    
                    <p className='p-5  flex '>live demo 
                    <span className='ml-2'><BsArrowRightShort size={30}/></span></p>
                </div>
                </Link>
 
            </div>
            <div className='w-full col-span-2 h-full m-auto flex items-center justify-center p-4 border-b-2 border-r-2 opacity-25 border-green-600 hover:scale-105 ease-in duration-500 shadow-xl hover:opacity-100 '>
                
                <img src={project.image} className='w-full h-full' alt={project.title} />
            </div>
        </div>

    </div>
    


      
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const { data } = await Axios.get(`https://d384-105-55-176-202.in.ngrok.io/victor/portfolio/api/v1/projects/${params.slug}`);
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    const project = data;
    console.log(project)
    return {
      props: {
        project,
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




