import React from 'react';
import { countries } from './CountryMap';
import { Link } from 'react-router';
import { FaCartShopping, FaStar, FaGlobe } from 'react-icons/fa6';


const ImportView = ({ data, onDelete }) => {
    const product = data.product;


    return (
        <div className="bg-base-100 shadow-xl rounded-xl flex flex-wrap max-[600px]:flex-col items-center justify-between p-3 my-3 gap-4 text-sm">
            <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-contain " />
            <div className="flex-1 space-y-3">
                <Link className=' font-medium text-xl sm:whitespace-normal' to={'/products/' + product._id}><h2>{product.name}</h2></Link>
                <h3 className=" text-blue-600 font-medium mb-2 text-center">{product.price} USD</h3>
                <div className='flex flex-wrap gap-3 font-medium'>
                    <div className='text-lg text-green-500 flex items-center gap-1'><FaGlobe /> {countries[product.country]}</div>
                    <div className="text-lg text-yellow-500 flex items-center gap-1"><FaStar /> {product.rating}</div>
                    <div className='text-lg text-blue-600 flex items-center gap-1'><FaCartShopping /> {data.quantity} imported</div>
                </div>
                <div className="space-y-3">
                    <p>
                        Exporter: <b>{data.user.email}</b>
                    </p>
                    <div className="text-center">
                        <Link className='btn btn-soft btn-primary' to={'/products/' + product._id}> See Details</Link>
                    </div>
                </div>
            </div>

            <div className='space-x-3'>
                <button
                    onClick={() => onDelete(data)}
                    className="btn btn-error"
                >
                    Delete
                </button>
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <div className="bg-base-100 shadow-xl rounded-xl flex flex-wrap max-[500px]:flex-col items-center justify-between p-3 my-3 gap-4 text-sm">
    //             <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-cover " />
    //             <div className='flex-1 space-y-2'>
    //                 <Link className=' font-medium text-xl sm:whitespace-normal' to={'/products/' + product._id}>{product.name}</Link>
    //                 <div className='flex flex-wrap gap-3'>
    //                     <div>${product.price}</div>
    //                     <div>{countries[product.country]}</div>
    //                     <div className="text-yellow-500">⭐ {product.rating}</div>
    //                     <div>{data.quantity} imported</div>
    //                 </div>
    //                 <p>
    //                     Exporter: <b>{data.user.name}</b>
    //                 </p>
    //                 <Link className='btn btn-link' to={'/products/' + product._id}> See Details</Link>
    //             </div>
    //             <button className="btn btn-warning" onClick={() => onDelete(data)}>Delete</button>
    //         </div>
    //     </div>

    // );
};

export default ImportView;