import { FunctionComponent } from 'react';

const Loader: FunctionComponent = () => {
    return (
        <div
            data-testid='loader'
            className='flex justify-center w-full h-full items-center'
        >
            <div className='loader bg-black p-5 rounded-full flex space-x-3'>
                <div className='loader-dot'></div>
                <div className='loader-dot'></div>
                <div className='loader-dot'></div>
            </div>
        </div>
    );
};

export default Loader;
