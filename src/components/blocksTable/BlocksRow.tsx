import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Block } from '../../app/generated/graphql';
import getTimeFromUnix from '../../utils/getTimeFromUnix';

interface Props {
    blocks: Block[] | undefined;
}

const BlocksRows: FunctionComponent<Props> = ({ blocks }) => {
    return (
        <tbody className='bg-gray-800'>
            {blocks?.map((block: Block, idx: number) => (
                <tr className='table-row' key={idx}>
                    <td
                        role='cell'
                        className='table-slot  hover:text-green-500'
                    >
                        <NavLink role='link' to={`/block/${block.hash}`}>
                            <span className='cursor-pointer'>{block.hash}</span>
                        </NavLink>
                    </td>
                    <td role='cell' className='table-slot'>
                        {block.height}
                    </td>
                    <td role='cell' className='table-slot'>
                        {getTimeFromUnix(block.time)}
                    </td>
                    <td role='cell' className='table-slot'>
                        {block.block_index}
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default BlocksRows;
