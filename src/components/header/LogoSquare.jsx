import React from 'react'
import square from '../../images/square.png'

function LogoSquare() {
    return (
        <div className='w-4 absolute right-6% bottom-10% animate-spin-slow sm:w-6  2xl:w-14'>
            <img src={square} alt="A square." className='sm:w-full' />
        </div>
    )
}

export default LogoSquare
