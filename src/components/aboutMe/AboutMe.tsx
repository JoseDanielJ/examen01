import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className='row align-content-center justify-content-center bg-dark h-75 '>
        <div className='col-8'>
            <h1 className='text-white mx-5'>About me</h1>
            <p className='text-white m-5'>
            Student of the National University, in the third grade of the career, with great emphasis on the creation of video games and web pages
            </p>
            <p className='text-white m-5'>
            You can know more about me on linkedin
            </p>
        </div>

        <div className='col-4'>
            <Image src={"/001.png"} alt='console' width={250} height={250}></Image>
        </div>
        <div className='row'>
            <div className="col-6">
                <Link href={"https://www.linkedin.com/in/daniel-granados-b79a63271/"}>
               <Image src={"/in.svg"} alt='in' width={40} height={40} className='bg-white rounded mx-5'></Image>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutMe