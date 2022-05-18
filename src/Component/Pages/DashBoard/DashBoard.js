import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const DashBoard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left">
                <h2 className='text-4xl font-bold text-purple-600'>Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' > My Appointment </Link></li>
                    <li><Link to='/dashboard/reviews' > Reviews </Link></li>
                    <li><Link to='/dashboard/myhistory' > My History</Link></li>
                    {admin ? <li><Link className='btn bg-green-600 border-0 text-white' to='/dashboard/alluser' >Admin Access: users</Link></li> : <li><button onClick={() => { toast.error('you are not Admin') }} className=' btn border-0   bg-red-600 text-white'>Admin Access: users</button></li>}

                    {
                        admin && <>

                            <li><Link to='/dashboard/addDoctor' >Add a Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor' >Manage Doctor</Link></li>

                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;