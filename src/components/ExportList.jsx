import { use, useState } from "react";
import ProductView from "./ProductView";
import { Link } from "react-router";

const ExportList = ({dataPromise, fkey}) => {
    const data=use(dataPromise)
    const [products, setProducts] = useState(data)
    const onSearch = (query) => {
        const queryL = query.toLowerCase()
        setProducts([...data.filter(data => data.name.toLowerCase().includes(queryL))])
    }
    return (
        <div>
            <div className='mspace-both'>
                <h1 className='text-center font-semibold py-2 mb-2 lg:py-4 lg:mb-4'>{fkey == 'home' ? "Most Recent Products" : "All products"}</h1>
                {fkey !== 'home' ?<div className='container text-right h3 py-2 flex justify-end items-center gap-2'>Search by Name: <input type="text" onChange={(e)=>onSearch(e.target.value)} className="input input-primary flex-1 max-w-80" placeholder='Search query'  /></div> : ""}
                {products.length == 0 ? <h2 className="container">There is no product. <Link to="/add/exports" className='text-primary'>Add one</Link></h2> : ""}
                <div className="container grid grid-cols-3 gap-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
                    {products.map(item => <ProductView key={item._id} data={item} />)}
                </div>
            </div>

            <div className="text-center pb-10 pt-4">
                {fkey == 'home' ? <Link to="/all" className="btn btn-primary">See All Products</Link>:""}
            </div>
        </div>
    );
};

export default ExportList;