import React from 'react';
import triangle from '../../images/Triangle.png'

function LogoTriangle() {
    return (
        <div className='absolute w-5 right-20% top-25% animate-spin-slower sm:w-9 xl:w-11'>
            <img src={triangle} alt="A rotate triangle." className='xl:w-full' />
        </div>
    )
}

export default LogoTriangle;
