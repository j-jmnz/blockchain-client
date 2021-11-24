import { FunctionComponent } from 'react';
import { api } from '../app/generated/graphql';
import BlocksTable from '../components/blocksTable/BlocksTable';
import ErrorState from '../components/common/ErrorState';
import Loader from '../components/common/Loader';

const Landing: FunctionComponent = () => {
    const { isLoading, isError } = api.endpoints.GetBlocks.useQuery(undefined, {
        // refetch every 3 minutes
        pollingInterval: 180000,
    });

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <ErrorState />;
    }

    return (
        <div className='landing-container'>
            <div>
                <div className='pb-4 ml-8'>
                    <h1 className='text-white text-4xl font-medium'>
                        Latest blocks
                    </h1>
                    <h6 className='text-sm text-gray-500'>
                        The most recently mined blocks
                    </h6>
                </div>

                <BlocksTable />
            </div>
        </div>
    );
};

export default Landing;
