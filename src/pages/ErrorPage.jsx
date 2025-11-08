import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center ">
            <div className="flex items-center gap-3 flex-col lg:flex-row bg-white shadow-2xl rounded-md w-9/10 mx-auto p-4">
                <img
                    src="/oops.webp"
                    className="max-w-sm w-1/1 rounded-lg"
                />
                <div>
                    <h1 className="font-bold">Page Not Found!</h1>
                    <p className="py-6">
                        The page you are looking for is unavailable at this moment. Try again Later.
                    </p>
                    <div className='space-x-3'>
                        <button onClick={() => { navigate(-1) }} className="btn btn-secoundary bg-base-300">Go Back</button>
                        <Link to='/'>
                            <button className="btn btn-primary">Return Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;