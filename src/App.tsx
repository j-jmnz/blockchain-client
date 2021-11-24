import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { store } from './app/store';
import Layout from './components/common/Layout';
import BlockDetails from './pages/BlockDetails';
import Landing from './pages/Landing';

const App: FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/block/:hash' element={<BlockDetails />} />
                </Routes>
            </Layout>
        </Provider>
    );
};

export default App;
