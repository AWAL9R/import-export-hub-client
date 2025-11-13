import React from 'react';
import Swal from 'sweetalert2';
import { SERVER_URL } from '../settings';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import { countries } from './CountryMap';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';

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
        <div className="bg-base-100 shadow-xl rounded-xl flex flex-wrap max-[600px]:flex-col items-center justify-between p-3 my-3 gap-4 text-sm">
            <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-contain " />
            <div className="flex-1">
                <Link className=' font-medium text-xl sm:whitespace-normal' to={'/products/' + product._id}><h2>{product.name}</h2></Link>
                <h3 className=" text-blue-600 font-medium mb-2 text-center">{product.price} USD</h3>
                <div className='flex flex-wrap gap-3 font-medium'>
                    <div className='text-lg text-green-500 flex items-center gap-1'><FaGlobe /> {countries[product.country]}</div>
                    <div className="text-lg text-yellow-500 flex items-center gap-1"><FaStar/> {product.rating}</div>
                    <div className='text-lg text-blue-600 flex items-center gap-1'><FaCartShopping /> {product.quantity} left</div>
                </div>
            </div>

            <div className='space-x-3'>
                <button
                    onClick={() => onUpdate(product)}
                    className="btn btn-primary"
                >
                    Update
                </button>
                <button
                    onClick={() => onDelete(product)}
                    className="btn btn-error"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ExportView;