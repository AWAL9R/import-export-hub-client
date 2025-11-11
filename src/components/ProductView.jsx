import { LineChart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { countries } from './CountryMap';

const ProductView = ({ data }) => {
    // return (
    //     <div className='bg-white rounded-md shadow-md space-y-1 flex flex-col items-center p-5 xhover:scale-103 xhover:bg-gray-200'>
    //         <img src={data.photo} alt="" className='aspect-square' />
    //         <h2 className='w-full'>{data.name}</h2>
    //         <h3 className='text-secondary'>{data.price} USD</h3>
    //         <Link to={`/products/${ProductView._id}`} className='btn btn-link'>See Details</Link>
    //         <div className='w-full flex justify-between flex-wrap text-secondary h3'>
    //             <div>Origin: {countries[data.country]}</div>

    //             <div>⭐ {data.rating}</div>
    //             <div>{data.quantity} Left</div>

    //         </div>
    //     </div>
    // );
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 p-5 flex flex-col items-center text-center">
            <img
                src={data.photo}
                alt={data.name}
                className="aspect-square w-full object-cover rounded-xl mb-3" />

            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {data.name}
            </h2>
            <h3 className="text-blue-600 font-medium mb-2">{data.price} USD</h3>

            <Link
                to={`/products/${data._id}`}
                className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-1 text-sm transition"
            >
                See Details
            </Link>

            <div className="mt-4 w-full flex justify-between flex-wrap text-sm text-gray-600">
                <span>🌍 {countries[data.country]}</span>
                <span>⭐ {data.rating}</span>
                <span>🛒 {data.quantity} left</span>
            </div>
        </div>

    )
};

export default ProductView;