import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
    return (
        <div className='flex justify-around items-center h-screen animate-back'>
            <HashLoader color='ffffff' size={60} />
        </div>
    )
}

export default Loading
