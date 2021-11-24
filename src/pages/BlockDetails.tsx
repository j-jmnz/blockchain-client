import { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { api } from '../app/generated/graphql';
import BlockDetailsTable from '../components/blockDetails/BlockDetailsTable';
import ErrorState from '../components/common/ErrorState';
import Loader from '../components/common/Loader';
import getTimeFromUnix from '../utils/getTimeFromUnix';

const BlockDetails: FunctionComponent = () => {
    const { hash } = useParams();
    const { data, isLoading, isError } = api.endpoints.GetBlock.useQuery({
        hash: hash || '',
    });

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <ErrorState />;
    }

    return (
        <div className={isError ? 'landing-container' : 'details-container'}>
            <div className='w-full max-w-7xl pl-8 pt-8'>
                <h1 className='text-white text-4xl font-medium'>
                    Block{' '}
                    <span className='text-green-500'>
                        {data && data.block.height}
                    </span>
                </h1>
                <h6 className='text-sm my-4 text-gray-500'>
                    This block was mined {getTimeFromUnix(data?.block.time)}
                </h6>

                <BlockDetailsTable block={data?.block} />
            </div>
        </div>
    );
};

export default BlockDetails;
