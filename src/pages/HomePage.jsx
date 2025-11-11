import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import ExportView from '../components/ExportView';
import ProductView from '../components/ProductView';

const HomePage = ({ fkey }) => {
    const data = useLoaderData()
    const [products, setProducts] = useState(data)
    const onSearch = (query) => {
        const queryL = query.toLowerCase()
        setProducts([...data.filter(data => data.name.toLowerCase().includes(queryL))])
    }
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center font-semibold py-5'>{fkey == 'home' ? "Most Recent Products" : "All products"}</h1>
                {fkey !== 'home' ?<div className='container text-right h3 py-2'>Search by Name: <input type="text" onChange={(e)=>onSearch(e.target.value)} className="input" placeholder='Search query' /></div> : ""}
                <div className="container grid grid-cols-3 gap-3 max-[800px]:grid-cols-2 max-[400px]:grid-cols-1">
                    {products.length == 0 ? <h2>You do not have any exported product. <Link to="/add/exports" className='text-primary'>Add one</Link></h2> : ""}
                    {products.map(item => <ProductView key={item._id} data={item} />)}
                </div>
            </div>

            <div className="text-center pb-10">
                {fkey == 'home' ? <Link to="/all" className="btn btn-primary">See All Products</Link>:""}
            </div>
        </div>
    );
};

export default HomePage;