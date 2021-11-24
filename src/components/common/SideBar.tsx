import { FunctionComponent } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar: FunctionComponent = () => {
    const { pathname } = useLocation();
    return (
        <div data-testid='sidebar' className='sidebar-container'>
            <span className='group'>
                <NavLink role='link' to='/'>
                    <i className='sidebar-icon'>
                        <FaHome />
                    </i>
                </NavLink>
                <hr
                    className={
                        pathname === '/'
                            ? 'sidebar-divider-active'
                            : 'sidebar-divider'
                    }
                />
            </span>
        </div>
    );
};

export default SideBar;
