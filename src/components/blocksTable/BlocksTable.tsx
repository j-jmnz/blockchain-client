import { FunctionComponent } from 'react';
import { api } from '../../app/generated/graphql';
import BlocksHeader from './BlocksHeader';
import BlocksRows from './BlocksRow';

const BlocksTable: FunctionComponent = () => {
    const { data } = api.endpoints.GetBlocks.useQueryState();
    const headerElements = data && Object.keys(data.blocks[0]);

    return (
        <div className='py-2 align-middle w-full px-8 '>
            <div className='overflow-hidden shadow-2xl border-b border-green-500 rounded-lg'>
                <table className='divide-y divide-gray-800 table-auto'>
                    <BlocksHeader elements={headerElements} />
                    <BlocksRows blocks={data?.blocks.slice(0, 10)} />
                </table>
            </div>
        </div>
    );
};

export default BlocksTable;
