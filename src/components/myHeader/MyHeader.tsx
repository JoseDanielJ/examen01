import React from 'react'

const MyHeader = () => {
  return (
    <div className='row min-vh-50 bg-black align-items-center justify-content-center'>
        <div className='col-5'>
            <h2 className='text-white'>Hi Im Daniel </h2>
            <h2 className='text-white'>WebDesigner </h2>
        </div>
        <div className='col-7'>
            <button className='btn btn-primary'>About me</button>
            <button className='btn btn-primary'>Projects</button>
            <button className='btn btn-primary'>Call to action</button>
            <button className='btn btn-primary'>Footer</button>
        </div>
    </div>
  )
}

export default MyHeader;