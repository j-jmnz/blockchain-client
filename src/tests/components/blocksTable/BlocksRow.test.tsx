import { render, screen } from '@testing-library/react';
import { Block } from '../../../app/generated/graphql';
import BlocksRows from '../../../components/blocksTable/BlocksRow';
import { BrowserRouter } from 'react-router-dom';
import getTimeFromUnix from '../../../utils/getTimeFromUnix';

const mockBlocks: Block[] = [
    {
        hash: 'hash',
        height: 123,
        time: 123,
        block_index: 123,
    },
    {
        hash: 'hash2',
        height: 345,
        time: 345,
        block_index: 345,
    },
];

test("renders all blocks' values", () => {
    render(
        <BrowserRouter>
            <table>
                <BlocksRows blocks={mockBlocks} />
            </table>
        </BrowserRouter>
    );
    const rowCells = screen.getAllByRole('cell');
    const values: any = mockBlocks.map(block => {
        return Object.values(block);
    });
    [].concat.apply([], values).forEach((el, idx) => {
        if (idx === 2 || idx === 6) {
            // @ts-ignore
            // eslint-disable-next-line jest/no-conditional-expect
            expect(rowCells[idx]).toHaveTextContent(getTimeFromUnix(el));
        } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(rowCells[idx]).toHaveTextContent(String(el));
        }
    });
});

test("renders anchor elements with path to '/blocks/:hash'", () => {
    render(
        <BrowserRouter>
            <table>
                <BlocksRows blocks={mockBlocks} />
            </table>
        </BrowserRouter>
    );
    const link: any[] = screen.getAllByRole('link');
    link.forEach((link, idx) => {
        expect(link.href).toContain(`/block/${mockBlocks[idx].hash}`);
    });
});
