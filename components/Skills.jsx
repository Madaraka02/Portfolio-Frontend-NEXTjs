import Image from 'next/image'
import React from 'react'

function Skills() {
  return (
    <div className='w-full mb-10 mt-10 py-20 p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xs uppercase text-[#3d3d3d]'> WHAT i can do</p>
        <p className='text-white py-4'>
            <span className='text-[#64ffda]'>03. </span>Skills</p>
            <div className='grid md:grid-cols-6 gap-4'>

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500 '>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/html.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/css.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS3</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/javascript.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/react.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/tailwind.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind Css</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-lg hover:scale-105 ease-in duration-200 shadow-gray-500'>
                    <div className='grid grid-cols-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/github1.png' width='64px' height='64px' alt='' />

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>

    </div>
  )
}

export default Skills