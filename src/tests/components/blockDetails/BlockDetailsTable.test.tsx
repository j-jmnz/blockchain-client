import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BlockDetails } from '../../../app/generated/graphql';
import BlockDetailsTable from '../../../components/blockDetails/BlockDetailsTable';

const mockBlock: BlockDetails = {
    hash: '0000000000000000000398beb4b6b367b32cb88ef2c38e3d9c3539e460dd7f7b',
    ver: 545259524,
    prev_block:
        '00000000000000000008ed6a242f3a8ec3375cbda9ce300ea5092e87bf962d8f',
    mrkl_root:
        'b5b70c47e51fb3aa60c25c45cb957085a9e391355a9c4d37ed87c90ce9cddebe',
    time: 1637779482,
    bits: 386689514,
    next_block: [],
    fee: 2804829,
    nonce: '2649452590',
    n_tx: 2943,
    size: 1698593,
    block_index: 711162,
    main_chain: true,
    height: 711162,
    weight: 3992975,
    tx: [],
};

test('renders block selected values', () => {
    render(
        <BrowserRouter>
            <BlockDetailsTable block={mockBlock} />
        </BrowserRouter>
    );
    const selectedValues = ['size', 'block_index', 'prev_block', 'tx'];

    const table = screen.getByTestId('tableBody');

    selectedValues.forEach((value: any) => {
        // @ts-ignore
        expect(table).toHaveTextContent(mockBlock[value]);
    });
});
