import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { BlockDetails } from '../../app/generated/graphql';

interface Props {
    block: BlockDetails | undefined;
}

const BlockDetailsTable: FunctionComponent<Props> = ({ block }) => {
    return (
        <table className='bg-black rounded-md border-b border-green-500'>
            <tbody data-testid='tableBody'>
                <tr className='table-row-details'>
                    <td className='table-slot-details '>Size</td>
                    <td className='table-slot-details '>{block?.size}</td>
                </tr>
                <tr className='table-row-details'>
                    <td className='table-slot-details '>Block index</td>
                    <td className='table-slot-details '>
                        {block?.block_index}
                    </td>
                </tr>
                <tr className='table-row-details'>
                    <td className='table-slot-details '>Previous hash</td>
                    <td className='table-slot-details cursor-pointer hover:text-green-500'>
                        <NavLink to={`/block/${block?.prev_block}`}>
                            <span className='cursor-pointer'>
                                {block?.prev_block}
                            </span>
                        </NavLink>
                    </td>
                </tr>
                <tr className='table-row-details'>
                    <td className='table-slot-details '>
                        Number of transactions
                    </td>
                    <td className='table-slot-details '>{block?.tx?.length}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BlockDetailsTable;
