import React from 'react';
import Swal from 'sweetalert2';
import { SERVER_URL } from '../settings';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import { countries } from './CountryMap';

const ExportView = ({ data: product, onUpdate, onDelete }) => {

    // return (
    //     <div className='flex'>
    //     <img src={data.photo} alt={data.name} className='w-30 aspect-square'/>
    //     <div className=''>
    //         <h2>{data.name}</h2>
    //         <div>{data.price}$ {data.rating}* </div>
    //     </div>
    //     </div>
    // );

    return (
        <div className="bg-base-100 shadow-md rounded-md flex flex-wrap items-center justify-between p-3 my-3 gap-4 text-sm">
            <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-cover " />
            <div className="flex-1">
                <Link className=' font-medium text-xl sm:whitespace-normal' to={'/products/' + product._id}>{product.name}</Link>
                <div className='flex flex-wrap gap-3'>
                    <div>${product.price}</div>
                    <div>{countries[product.country]}</div>
                    <div className="text-yellow-500">⭐ {product.rating}</div>
                    <div>{product.quantity} left</div>
                </div>
            </div>

            <div className='space-x-3'>
                <button
                    onClick={() => onUpdate(product)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(product)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ExportView;