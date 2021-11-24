import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../../app/store';
import Landing from '../../pages/Landing';

it('renders the loader component on mount', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/block/hashmock']}>
                <Landing />
            </MemoryRouter>
        </Provider>
    );
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeInTheDocument();
});
