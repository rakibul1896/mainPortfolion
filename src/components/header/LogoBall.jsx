import React from 'react'
import blueBig from '../../images/blueBig.png'
import whiteBig from '../../images/whiteBig.png'
import whiteSmall from '../../images/whiteSmall.png'
import blueSmall from '../../images/blueSmall.png'

const LogoBall = () => {
    return (
        <div>
            <img src={blueBig} alt="Blue ball." className=" w-6 xl:w-7 2xl:w-8  absolute bottom-0 left-5% animate-bounce-bigBlue " />
            <img src={blueSmall} alt="Blue ball." className=" w-4 xl:w-5 2xl:w-6 absolute bottom-0 left-10% animate-bounce-smallBlue " />
            <img src={whiteBig} alt="White ball." className=" w-6 xl:w-7 2xl:w-8 absolute bottom-0 left-7%  animate-bounce-bigWhite" />
            <img src={whiteSmall} alt="White ball." className=" w-4 xl:w-5 2xl:w-6 absolute bottom-0 left-3%  animate-bounce-smallWhite" />
        </div>
    )
}

export default LogoBall
