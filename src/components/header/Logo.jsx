import React from 'react';
import LogoMain from './LogoMain';
import LogoCircle from './LogoCircle';
import LogoSquare from './LogoSquare';
import LogoTriangle from './LogoTriangle';
import LogoBall from './LogoBall'

const Logo = () => {
    return (
        <div className='select-none'>
            <LogoMain />
            <LogoCircle />
            <LogoSquare />
            <LogoTriangle />
            <LogoBall />
        </div>
    )
}

export default Logo
