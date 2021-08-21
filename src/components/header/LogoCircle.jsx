import React from 'react';
import circle from '../../images/circle.png'

function LogoCircle() {
    return (
        <div className='absolute w-12 left-55% animate-jiggle sm:w-16 md:w-20 lg:w-24 2xl:w-28'>
            <img src={circle} alt="Half of a circle" />
        </div>
    )
}

export default LogoCircle
