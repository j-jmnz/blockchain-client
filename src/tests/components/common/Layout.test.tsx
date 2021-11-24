import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../../../app/store';
import Layout from '../../../components/common/Layout';

it('renders the sidebar component', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/block/hashmock']}>
                <Layout />
            </MemoryRouter>
        </Provider>
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
});

it('renders an anchor element with path to "/"', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/block/hashmock']}>
                <Layout />
            </MemoryRouter>
        </Provider>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
});
