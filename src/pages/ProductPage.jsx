import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const ProductPage = () => {
    const loaderData=useLoaderData();
    const [product, setProduct]=useState(loaderData)
    
    return (
        <div className='my-10'>
            <div className="container bg-white rounded-md overflow-hidden">
                <div className='flex flex-wrap gap-3'>
                    <img src={product.photo} alt="" className='aspect-aquare w-1/3 max-lg:w-1/2 max-md:w-full object-cover  mb-3'/>
                    <div className='py-5'>
                        <h2>
                            {product.name}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;