import React from 'react';

const Footer = () => {
    return (
        <div className='bg-accent-content text-white mt-10 py-5 px-10'>
            <div className='flex flex-wrap justify-between gap-5'>
                <div className='max-w-150'>
                    <h2>ExportMania</h2>
                    <p className='text-gray-200'>
                        ExportMania.app is a modern platform designed to simplify global trade management. It helps businesses efficiently manage exports, track products, and connect with buyers worldwide. With user-friendly tools for inventory, pricing, and documentation, ExportMania empowers exporters to grow faster and operate smarter in today’s competitive international market.
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

                <div className='flex flex-col space-y-3'>
                    <h2>Social Links</h2>
                    <a href="">@SkillCircle.Edu</a>
                    <a href="">@SkillCircle.Edu</a>
                    <a href="">@SkillCircle.Edu</a>
                    <a href="">support@SkillCircle.Edu</a>
                </div>
            </div>
            <div className="border-t border-t-gray-400 text-center pt-5 my-3">
                Copyright © 2025 - All right reserved
            </div>
        </div>
    );
};

export default Footer;