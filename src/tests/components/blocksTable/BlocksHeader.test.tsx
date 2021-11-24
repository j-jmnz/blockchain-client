import { render, screen } from '@testing-library/react';
import BlocksHeader from '../../../components/blocksTable/BlocksHeader';

const mockElements = ['hash', 'height', 'time', 'block_index'];

test('renders all column header elements', () => {
    render(
        <table>
            <BlocksHeader elements={mockElements} />
        </table>
    );
    const columnHeaders = screen.getAllByRole('columnheader');
    mockElements.forEach((el, idx) => {
        expect(columnHeaders[idx]).toHaveTextContent(el);
    });
});
