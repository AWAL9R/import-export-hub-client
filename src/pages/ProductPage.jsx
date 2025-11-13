import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import Modal from '../components/Modal';
import { AppName, SERVER_URL } from '../settings';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import Title from '../components/Title';
import { FaCartShopping, FaPerson } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { Star } from 'lucide-react';
import { LiaStarSolid } from 'react-icons/lia';

const ProductPage = () => {
    const loaderData = useLoaderData();
    // if(loaderData==null)
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
                    setProduct({ ...product, ...res.product })
                }
                if (res.message) {
                    toast(res.message)
                }
                if (res.success) {
                    setShowImport(false)
                }
            })
            .catch(err => {
                toast(err.message)
            })
    }


    return (
        <div className='my-10'>
            <Title value={`${product.name} - ${AppName}`}></Title>
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

            <div className="container bg-base-100 rounded-xl shadow-xl overflow-hidden ">
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <img src={product.photo} alt="" className='aspect-square w-full object-contain' />
                    <div className='col-span-2 py-5 space-y-4 px-5 flex flex-col justify-between'>
                        <h1 className='font-semibold text-5xl! max-[600px]:text-3xl!'>
                            {product.name}
                        </h1>


                        <div>
                            <div className='text-lg text-gray-400 flex gap-1 items-center'><MdPerson /> Exporter</div>
                            <span className='pl-5 text-xl break-all whitespace-normal'>{product.user.email}</span>
                        </div>

                        <div>
                            <div className='text-lg text-gray-400 flex gap-1 items-center'><BiSolidDollarCircle /> Price</div>
                            <span className='pl-5 text-xl break-all whitespace-normal text-green-600'>{product.price}$</span>
                        </div>

                        <div>
                            <div className='text-lg text-gray-400 flex gap-1 items-center'><LiaStarSolid /> Rating: {product.rating}</div>
                            <div className='pl-5 text-xl  text-green-600'><Rating style={{ maxWidth: 200 }} value={rating} readOnly /></div>
                        </div>

                        <div>
                            <div className='text-lg text-gray-400 flex gap-1 items-center'><FaCartShopping /> Quantity </div>
                            <div className='pl-5 text-xl  text-green-600'>{product.quantity}</div>
                        </div>


                        {product.quantity == 0 ? <div className='text-white bg-red-600 w-full p-3 font-medium opacity-60'>OUT OF CAPACITY</div> : <div><button className="btn btn-primary" onClick={() => { setShowImport(true); }}>Import this product</button></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;