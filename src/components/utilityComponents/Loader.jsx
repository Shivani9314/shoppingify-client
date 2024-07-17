import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoader } from '../../slices/loaderSlice';

function Loader() {
    const loader = useSelector(selectLoader);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-white ${loader ? 'opacity-75 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!loader}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#f9a109"
                ariaLabel="ball-triangle-loading"
                visible={loader}
            />
        </div>
    );
}

export default Loader;
