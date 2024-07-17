import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoader } from '../../slices/loaderSlice';

function Loader() {
    const loader = useSelector(selectLoader);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-white">
            {loader && (
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#f9a109"
                    ariaLabel="ball-triangle-loading"
                    visible={loader}
                />
            )}
        </div>
    );
}

export default Loader;
