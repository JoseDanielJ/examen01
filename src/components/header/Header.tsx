import React from 'react'

const Header = () => {
  return (
    <div className='row h-25 bg-black'>
        <div className='col-5'>
            <h2>Hi Im Daniel </h2>
            <h2>WebDesigner </h2>
        </div>
        <div className='col-7 border-1'>
            <button className='btn btn-primary'>About me</button>
            <button className='btn btn-primary'>Projects</button>
            <button className='btn btn-primary'>Call to action</button>
            <button className='btn btn-primary'>Footer</button>
        </div>
    </div>
  )
}

export default Header;