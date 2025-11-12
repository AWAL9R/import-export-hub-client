import React from 'react';
import toast from 'react-hot-toast';

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        toast("Subscribed to newsletter")
    }
    return (
        <div className='container bg-base-100 rounded-md shadow-md flex items-center justify-center p-5'>
            <div className='flex flex-col justify-center gap-4 my-2 md:my-4 lg:my-10'>
                
                <div className='text-center'>
                    <h1 className='font-semibold my-2 md:my-4 lg:my-10'>Stay in touch</h1>
                    <p>Subscribe to our newsletter to stay informed about our new services.</p>
                </div>
                <form onSubmit={handleSubmit} className='flex gap-3'>
                    <input type="email" className="input" placeholder='Your Email address' required />
                    <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;