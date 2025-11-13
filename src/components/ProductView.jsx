import { LineChart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { countries } from './CountryMap';
import { FaCartShopping, FaGlobe, FaStar } from 'react-icons/fa6';

const ProductView = ({ data }) => {
    // return (
    //     <div className='bg-white rounded-xl shadow-xl space-y-1 flex flex-col items-center p-5 xhover:scale-103 xhover:bg-gray-200'>
    //         <img src={data.photo} alt="" className='aspect-square' />
    //         <h2 className='w-full'>{data.name}</h2>
    //         <h3 className='text-accent'>{data.price} USD</h3>
    //         <Link to={`/products/${ProductView._id}`} className='btn btn-link'>See Details</Link>
    //         <div className='w-full flex justify-between flex-wrap text-accent h3'>
    //             <div>Origin: {countries[data.country]}</div>

    //             <div>⭐ {data.rating}</div>
    //             <div>{data.quantity} Left</div>

    //         </div>
    //     </div>
    // );
    return (
        <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform flex flex-col justify-between">
            <div className='w-full relative '>
                <img
                    src={data.photo}
                    alt={data.name}
                    className="aspect-square w-full object-contain rounded-t-xl mb-3" />
                {data.quantity == 0 ? <div className='text-white bg-red-600 w-full p-3 font-medium absolute top-0 opacity-60 rounded-t-xl'>OUT OF CAPACITY</div> : ""}
            </div>


            {/* <div className='p-5 flex flex-col items-center justify-between '> */}
            <h2 className=" p-4 text-lg font-semibold text-accent ">{data.name}</h2>

            <div className="p-4 flex flex-col gap-4">
                <h3 className=" text-blue-600 font-medium mb-2 text-center">{data.price} USD</h3>

                <div className="">
                    <Link
                        to={`/products/${data._id}`}
                        className=" btn bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold rounded-full transition"
                    >
                        See Details
                    </Link>
                </div>

                <div className=" mt-4  w-full flex justify-between flex-wrap font-semibold">
                    <span className='text-lg text-green-500 flex items-center gap-1'><FaGlobe /> {countries[data.country]}</span>
                    <span className='text-lg text-yellow-500 flex items-center gap-1'><FaStar /> {data.rating}</span>
                    <span className='text-lg text-blue-600 flex items-center gap-1'><FaCartShopping /> {data.quantity} left</span>
                </div>
            </div>
        </div>
        // </div>

    )
};

export default ProductView;