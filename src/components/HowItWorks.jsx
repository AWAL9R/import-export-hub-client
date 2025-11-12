import React from 'react';

const HowItWorks = () => {
    return (
        <div className="container">
            <h1 className='text-center font-semibold py-2 md:py-4 lg:py-5 mb-5'>How it Works</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 *:bg-base-100 *:shadow-md *:rounded-md *:overflow-hidden'>
                <div className="relative  aspect-video bg-[url('/register.jpg')] bg-cover flex flex-col justify-center items-center p-3">
                 <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative text-white">
                        <h2 className='font-semibold'>Register</h2>
                        <p>Create your account.</p>
                    </div>
                </div>

                <div className="relative  aspect-video bg-[url('/export.jpg')] bg-cover flex flex-col justify-center items-center p-3">
                 <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative text-white">
                        <h2 className='font-semibold'>Export</h2>
                        <p>List your product for export.</p>
                    </div>
                </div>

                <div className="relative  aspect-video bg-[url('/shipping.jpg')] bg-cover flex flex-col justify-center items-center p-3">
                 <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative text-white">
                        <h2 className='font-semibold'>Ship</h2>
                        <p>Ship your product after receiving import request</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;