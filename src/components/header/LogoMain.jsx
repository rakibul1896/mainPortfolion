import React from 'react'
import logo from '../../images/Logo.png'

const LogoMain = () => {
    return (
        <div className='absolute w-9 top-4 left-5 sm:w-16 sm:left-11 sm:top-8 lg:w-20 2xl:w-28'>
            <img src={logo} alt="Logo" className='2xl:w-full  animate-pulse' />
        </div>
    )
}

export default LogoMain;