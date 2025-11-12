import React from 'react';
import { FaFacebook, FaLinkedin, FaX } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { AppName } from '../settings';

const Footer = () => {
    return (
        <div className='bg-accent-content text-white mt-10 py-10 px-10'>
            <div className='flex flex-wrap justify-between gap-5 pb-5'>
                <div className='max-w-150 space-y-3'>
                    <h2>{AppName}</h2>
                    <p className='text-gray-200 text-justify'>
                        {AppName} is a modern platform designed to simplify global trade management. It helps businesses efficiently manage exports, track products, and connect with buyers worldwide. With user-friendly tools for inventory, pricing, and documentation, ExportMania empowers exporters to grow faster and operate smarter in today’s competitive international market.
                    </p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h2>Services</h2>
                    <a href="">Products & Services</a>
                    <a href="">Customer Stories</a>
                    <a href="">Download Apps</a>
                </div>

                <div className='flex flex-col space-y-3'>
                    <h2>Information</h2>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Join Us</a>
                </div>

                <div className='flex flex-col space-y-3 *:flex *:gap-2 *:items-center   '>
                    <h2>Social Links</h2>
                    <a href=""><FaX/> @{AppName}</a>
                    <a href=""><FaFacebook/> @{AppName}</a>
                    <a href=""><FaLinkedin/> @{AppName}</a>
                    <a href=""><MdEmail/> support@{AppName}</a>
                </div>
            </div>
            <div className="border-t border-t-gray-400 text-center pt-5 my-3">
                Copyright © 2025 - All right reserved
            </div>
        </div>
    );
};

export default Footer;