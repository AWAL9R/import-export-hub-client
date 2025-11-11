import React from 'react';
import { countries } from './CountryMap';
import { Link } from 'react-router';

const ImportView = ({ data, onDelete }) => {
    const product = data.product;

    return (
        <div>
            <div className="bg-base-100 shadow-md rounded-md flex flex-wrap items-center justify-between p-3 my-3 gap-4 text-sm">
                <img src={product.photo} alt={product.name} className="w-30 aspect-square rounded object-cover " />
                <div className='flex-1 space-y-2 text-nowrap'>
                    <Link className=' font-medium text-xl whitespace-nowrap truncate sm:whitespace-normal' to={'/products/' + product._id}>{product.name}</Link>
                    <div className='flex flex-wrap gap-3'>
                        <div>${product.price}</div>
                        <div>{countries[product.country]}</div>
                        <div className="text-yellow-500">⭐ {product.rating}</div>
                        <div>{data.quantity} imported</div>
                    </div>
                    <p>
                        Exporter: <b>{data.user.name}</b>
                    </p>
                </div>
                <button className="btn btn-warning" onClick={()=>onDelete(data)}>Delete</button>
            </div>
        </div>

    );
};

export default ImportView;