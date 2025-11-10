import React from 'react';
import Swal from 'sweetalert2';
import { SERVER_URL } from '../settings';
import { AuthContext } from '../context/AuthContext';

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
        <div className="bg-white shadow-md rounded-md flex items-center justify-between p-3 my-3 gap-4 text-sm">
            <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-cover border-r border-r-gray-300" />
            <div className="flex-1 font-medium text-xl">{product.name}</div>
            <div>${product.price}</div>
            <div>{product.country}</div>
            <div className="text-yellow-500">⭐ {product.rating}</div>
            <div>{product.quantity} left</div>
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
    );
};

export default ExportView;