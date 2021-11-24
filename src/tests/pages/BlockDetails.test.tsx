import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../../app/store';
import BlockDetails from '../../pages/BlockDetails';

it('renders the loader component on mount', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/block/hashmock']}>
                <BlockDetails />
            </MemoryRouter>
        </Provider>
    );
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeInTheDocument();
});
