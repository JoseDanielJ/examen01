import React from 'react'

const MyHeader = () => {
  return (
    <div className='row h-75 bg-black align-items-center justify-content-center'>
        <div className='col-5 d-flex flex-column gap-4'>
            <h1 className='text-white text-lg-center'>Hi Im Daniel </h1>
            <h1 className='text-white text-lg-center text'>WebDesigner </h1>
        </div>
        <div className='col-7 d-flex gap-5'>
            <button className='btn btn-primary w-25'>About me</button>
            <button className='btn btn-primary w-25'>Projects</button>
            <button className='btn btn-primary w-25'>Call to action</button>
        </div>
    </div>
  )
}

export default MyHeader;