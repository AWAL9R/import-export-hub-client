import React, { useState } from 'react';
import { useContext } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { AppNameShort } from '../settings';
import { FaMoon, FaSun } from 'react-icons/fa';
import DarkMode from './DarkMode';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    



    // console.log(user)
    const userImage = user?.photoURL; //"https://t2informatik.de/en/wp-content/uploads/sites/2/2022/01/user-smartpedia-t2informatik.png";
    const userUid = user?.uid;

    const navClasses = 'font-semibold text-accent hover:text-primary hover:text-shadow-2xs';

    
    const navLinks = <>
        <NavLink to='/all' className={navClasses}>
            All Products
        </NavLink>
        {userUid ? <NavLink to='/me/exports' className={navClasses}>
            My Exports
        </NavLink> : ""}
        {userUid ? <NavLink to='/me/imports' className={navClasses}>
            My Imports
        </NavLink> : ""}
        <NavLink to='/add/exports' className={navClasses}>
            Add Export
        </NavLink>
        {userUid ?  "" : <NavLink to='/register' className={navClasses}>
            Register
        </NavLink> }


        {/* <label className="label font-semibold  text-accent">
            <input
                type="checkbox"
                // defaultChecked={dark}
                className="toggle border-indigo-600 bg-indigo-500 checked:border-black checked:bg-gray-600 checked:text-black"
                checked={dark}
                onChange={(e) => setDark(e.target.checked)}
            />
            Dark
        </label> */}



        {userImage ? <button className='btn btn-soft' onClick={logOut}>Logout</button> : ""}
    </>

    return (
        <>
            <div className="bg-base-100 py-3 navbar max-[600px]:fixed top-0 z-999">
                <div className='container '>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex gap-2'>
                            <Link to='/'>
                                <h1 className='font-bold text-primary '>Export<span className="text-yellow-500">Mania</span></h1>
                            </Link>
                            <DarkMode/>
                        </div>
                        <div className='max-[1200px]:hidden'>
                            <div className='flex flex-wrap justify-center items-center gap-2'>
                                {navLinks}
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            {userImage ? <img src={userImage} className='w-13 max-[600px]:w-9 aspect-square rounded-full' referrerPolicy="no-referrer" /> : <div className='max-[500px]:hidden'> <Link to='/login'> <button className="btn btn-primary">Login</button> </Link> </div>}
                            <div className='hidden max-[600px]:block'> <IoMenu onClick={() => setShow(!show)} className='btn bg-base-100 px-[3px]! py-0! text-4xl' /> </div>
                        </div>
                    </div>
                    <div className={`${show ? 'max-[600px]:max-h-200' : 'max-[600px]:max-h-0'} transition-all duration-700 overflow-hidden`}>
                        <div className={`hidden max-[1200px]:block text-center space-y-2 pt-4 pb-2 `}>
                            <div className='flex flex-wrap justify-center items-center gap-2 '>
                                {navLinks}
                                {userImage ? "" : <div className='hidden max-[500px]:block'>
                                    <Link to='/login'> <button className="btn btn-primary">Login</button> </Link>
                                </div>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" hidden max-[600px]:block h-18"></div>
        </>
    );
};

export default NavBar;