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
        {/* {!userUid ?  */}
        <NavLink to='/add/exports' className={navClasses}>
           Add Export
        </NavLink>
         {/* : ""} */}
        {!userUid ? <NavLink to='/register' className={navClasses}>
            Register
        </NavLink> : ""}
        {userUid ? <NavLink to='/dashboard' className={navClasses}>
            Dashboard
        </NavLink> : ""}


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



        {/* {userUid ? <button className='btn btn-soft' onClick={logOut}>Logout</button> : ""} */}
    </>

    const profileOption = <>
        <img
            tabIndex={0} role="button"
            className='select-none w-13 max-[600px]:w-9  rounded-full'
            alt="Picture"
            src={userImage}
            referrerPolicy="no-referrer"
        />
        <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
            </li>
            <li><a onClick={logOut}>Logout</a></li>
        </ul>
    </>

    return (
        <>
            <div className="bg-base-100 py-3 navbar max-[600px]:fixed top-0 z-999">
                <div className='container '>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex gap-2 items-center'>
                            <Link to='/'>
                                <h1 className='font-bold text-primary max-[600px]:text-3xl! '>Export<span className="text-yellow-500">Lab</span></h1>
                            </Link>
                            <DarkMode />
                        </div>
                        <div className='max-[1200px]:hidden'>
                            <div className='flex flex-wrap justify-center items-center gap-2'>
                                {navLinks}
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            {userImage ?
                                // <img src={userImage} className='w-13 max-[600px]:w-9 aspect-square rounded-full' referrerPolicy="no-referrer" /> 
                                <div className="dropdown dropdown-end">
                                    {profileOption}
                                </div>
                                : <div className='max-[500px]:hidden'> <Link to='/login'> <button className="btn btn-primary max-[600px]:py-2!">Login</button> </Link> </div>}
                            <div className='hidden max-[600px]:block'> <IoMenu onClick={() => setShow(!show)} className='btn bg-base-100 px-[3px]! py-0! text-4xl' /> </div>
                        </div>
                    </div>
                    <div className={`${show ? 'max-[600px]:max-h-200' : 'max-[600px]:max-h-0'} transition-all duration-700 overflow-hidden`}>
                        <div className={`hidden max-[1200px]:block text-center space-y-2 pt-4 pb-2 `}>
                            <div className='flex flex-wrap justify-center items-center gap-2 '>
                                {navLinks}
                                {userUid ? "" : <div className='hidden max-[500px]:block'>
                                    <Link to='/login'> <button className="btn btn-primary py-2!">Login</button> </Link>
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