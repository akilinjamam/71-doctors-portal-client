import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const menuItems = <>

        <li className='px-3'><Link to='/'>Home</Link></li>
        <li className='px-3'><Link to='/about'>About</Link></li>
        <li className='px-3'><Link to='/appointment'>Appointment</Link></li>
        <li className='px-3'><Link to='/reviews'>Reviews</Link></li>
        <li className='px-3 w-40 justify-center'><Link to='/contact'>Contact us</Link></li>

        {
            user && <li className=' mr-4'><Link to='/dashboard'>Dashboard</Link></li>

        }

        <li>{user ? <button onClick={() => {
            signOut(auth)
            navigate('/login')
            localStorage.removeItem('accessToken');
        }}
            className="btn btn-active btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li>

    </>


    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end lg:absolute">
                    <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden lg:relative">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>


                </div>



            </div>

        </div>
    );
};

export default Navbar;