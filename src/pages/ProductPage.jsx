import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import Modal from '../components/Modal';
import { SERVER_URL } from '../settings';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ProductPage = () => {
    const loaderData = useLoaderData();
    // console.log(loaderData)
    const [product, setProduct] = useState(loaderData)
    const [wishedQuantity, setWishedQuantity] = useState(0)
    const [showImport, setShowImport] = useState(false)
    const { user } = useContext(AuthContext)

    const rating = parseInt(product.rating)

    const checkQuantity = (e) => {
        const val = parseInt(e.target.value);
        if (val < 0) {
            e.target.value = "0"
            return setWishedQuantity(0)
        }
        setWishedQuantity(val)
    }

    const importProduct = (e) => {
        e.preventDefault();
        fetch(SERVER_URL + "/imports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user?.accessToken}`
            },
            body: JSON.stringify({ product_id: product._id, quantity: e.target.quantity.value })
        }).then(res => res.json())
            .then(res => {
                if (res.product) { 
                    setProduct({...product, ...res.product})
                }
                if(res.message){
                    toast(res.message)
                }
                if(res.success){
                    setShowImport(false)
                }
            })
            .catch(err => {
                toast(err.message)
            })
    }


    return (
        <div className='my-10'>

            <Modal isOpen={showImport} onClose={() => { setShowImport(false); }}>
                <div className='space-y-2'>
                    <div className='pb-4'>
                        Import product <span className="text-primary">{product.name}</span>
                    </div>
                    <form className='flex gap-2 flex-wrap' onSubmit={importProduct}>
                        <input type="number" name="quantity" className='input flex-1' placeholder='Enter quantity to import' onChange={checkQuantity} />
                        <button disabled={(wishedQuantity > 0 && wishedQuantity <= product.quantity) ? false : true} className='btn btn-primary'>Import</button>
                    </form>
                    {wishedQuantity > product.quantity ? <div className='text-red-600'>Maximum available quantity is {product.quantity}</div> : ""}
                </div>
            </Modal>

            <div className="container bg-base-100 rounded-md shadow-md overflow-hidden ">
                <div className='flex flex-wrap gap-3'>
                    <img src={product.photo} alt="" className='aspect-aquare w-1/3 max-lg:w-1/2 max-md:w-full object-cover  mb-3' />
                    <div className='py-5 space-y-4 px-3'>
                        <h2 className='font-semibold'>
                            {product.name}
                        </h2>
                        <div className='flex h2 gap-2'>
                            <Rating style={{ maxWidth: 200 }} value={rating} readOnly />
                        </div>
                        <div className="py-10 h2 font-semibold flex flex-wrap gap-5">
                            <div className='text-green-600'>${product.price} </div>
                            <div>Available: {product.quantity}</div>
                        </div>
                        <div>Exporter: <b>{product.user.name}</b></div>
                        {product.quantity==0?<div className='text-white bg-red-600 w-full p-3 font-medium'>OUT OF STOCK</div>:<button className="btn btn-primary" onClick={() => { setShowImport(true); }}>Import this product</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;