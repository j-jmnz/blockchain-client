import { FunctionComponent } from 'react';

interface Props {
    elements: string[] | undefined;
}

const BlocksHeader: FunctionComponent<Props> = ({ elements }) => {
    return (
        <thead className='bg-gray-700'>
            <tr>
                {elements?.map((el: string) => (
                    <th
                        key={el}
                        scope='col'
                        role='columnheader'
                        className='table-header'
                    >
                        {el}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default BlocksHeader;
