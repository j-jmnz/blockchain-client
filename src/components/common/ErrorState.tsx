import { FunctionComponent } from 'react';
import { GiTerror } from 'react-icons/gi';

const ErrorState: FunctionComponent = () => {
    return (
        <div className='flex flex-col justify-center w-full h-full items-center'>
            <i className=' text-9xl text-green-500'>
                <GiTerror />
            </i>
            <h1 className='text-4xl mt-4 text-white'>Oops!</h1>
            <h3 className='text-lg text-gray-500 mt-4 text-center w-96'>
                An error just ocurred, but don't worry, you can just try
                refreshing the page
            </h3>
        </div>
    );
};

export default ErrorState;
