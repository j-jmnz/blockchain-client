import { FunctionComponent } from 'react';
import SideBar from './SideBar';

const Layout: FunctionComponent = ({ children }) => {
    return (
        <div className='h-screen w-screen mx-auto flex selection:bg-green-500 selection:text-black'>
            <SideBar />
            <div className='flex flex-col bg-gray-900 m-0 h-screen w-screen '>
                {children}
            </div>
        </div>
    );
};

export default Layout;
