import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left">
                <h2 className='text-4xl font-bold text-purple-600'>Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' > Dashboard </Link></li>
                    <li><Link to='/dashboard/reviews' > Reviews </Link></li>
                    <li><Link to='/dashboard/myhistory' > My History</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;