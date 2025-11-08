import React, { useState } from 'react';
import { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const {user,logOut}=useContext(AuthContext)
    // console.log(user)
    const userImage = user?.photoURL; //"https://t2informatik.de/en/wp-content/uploads/sites/2/2022/01/user-smartpedia-t2informatik.png";

    const navLinks = <>
        <NavLink to='/'>
            All Products
        </NavLink>
        <NavLink to='/me/exports'>
            My Exports
        </NavLink>
        <NavLink to='/me/imports'>
            My Imports
        </NavLink>
        <NavLink to='/exports/add'>
            Add Export
        </NavLink>
        {userImage?<button className='btn btn-soft' onClick={logOut}>Logout</button>:""}
        </>

    return (
        <div className="bg-white py-3 navbar">
            <div className='container '>
                <div className='flex justify-between items-center gap-2'>
                    <Link to='/'>
                        <h1 className='font-bold text-primary'>ImportExport.App</h1>
                    </Link>
                    <div className='max-[1000px]:hidden'>
                        <div className='flex flex-wrap justify-center items-center gap-2 *:font-semibold *:text-primary *:hover:border-b-2 *:hover:text-shadow-2xs'>
                            {navLinks}
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        {userImage ? <img src={userImage} className='w-13 max-[600px]:w-9 aspect-square rounded-full' referrerPolicy="no-referrer" /> : <div className='max-[500px]:hidden'> <Link to='/login'> <button className="btn btn-primary">Login</button> </Link> </div>}
                        <div className='hidden max-[600px]:block'> <IoMenu onClick={() => setShow(!show)} className='btn bg-white px-[3px]' /> </div>
                    </div>
                </div>
                <div className={`${show ? 'max-[600px]:max-h-200' : 'max-[600px]:max-h-0'} transition-all duration-700 overflow-hidden`}>
                    <div className={`hidden max-[1000px]:block text-center space-y-2 pt-4 pb-2 `}>
                        <div className='flex flex-wrap justify-center items-center gap-2 *:font-semibold *:text-primary *:hover:border-b-2 *:hover:text-shadow-2xs'>
                            {navLinks}
                            {userImage ? "" : <div className='hidden max-[500px]:block'>
                                <Link to='/login'> <button className="btn btn-primary">Login</button> </Link>
                            </div>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;