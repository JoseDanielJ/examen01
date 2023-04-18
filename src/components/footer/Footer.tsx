import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='row h-25 bg-white'>
        <div className='col-12 d-flex justify-content-center align-items-center'>
            <div className='col-12 d-flex justify-content-center w-100'>
                <Link href={"https://www.facebook.com/daniel.granados.94651?mibextid=ZbWKwL"} className='mr-3'>
                    <Image src={"/facebook.svg"} alt='facebook' width={40} height={40} className=''></Image>
                </Link>
                <div className='mx-3'></div>
                <Link href={"#"} className="mr-3">
                    <Image src={"/whatsapp.svg"} alt='facebook' width={40} height={40}></Image>
                </Link>
            </div>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center'>
            <div className='col-12 d-flex justify-content-center w-100'>
                <span>My cellphone  number: 8888-8888</span>
            </div>
        </div>
    </div>
  )
}

export default Footer