import { useState } from "react";
import ProductView from "./ProductView";
import { Link } from "react-router";

const ExportList = ({data, fkey}) => {
    const [products, setProducts] = useState(data)
    const onSearch = (query) => {
        const queryL = query.toLowerCase()
        setProducts([...data.filter(data => data.name.toLowerCase().includes(queryL))])
    }
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center font-semibold py-5 mb-5'>{fkey == 'home' ? "Most Recent Products" : "All products"}</h1>
                {fkey !== 'home' ?<div className='container text-right h3 py-2'>Search by Name: <input type="text" onChange={(e)=>onSearch(e.target.value)} className="input" placeholder='Search query' /></div> : ""}
                {products.length == 0 ? <h2 className="container">There is no product. <Link to="/add/exports" className='text-primary'>Add one</Link></h2> : ""}
                <div className="container grid grid-cols-3 gap-3 max-[1000px]:grid-cols-2 max-[400px]:grid-cols-1">
                    {products.map(item => <ProductView key={item._id} data={item} />)}
                </div>
            </div>

            <div className="text-center pb-10">
                {fkey == 'home' ? <Link to="/all" className="btn btn-primary">See All Products</Link>:""}
            </div>
        </div>
    );
};

export default ExportList;