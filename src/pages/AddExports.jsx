import React from 'react';
import SelectCountry from '../components/SelectCountry';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';
import { SERVER_URL } from '../settings';

const AddExports = ({ product: product_prop, afterChanges }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const product = useLoaderData() || product_prop;// product will be edited if it has loaded data product

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user)
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;
        const country = e.target.country.value;
        const rating = e.target.rating.value;
        const quantity = e.target.quantity.value;
        const newProduct = { name, photo, price, country, rating, quantity }
        // console.log({ name, photo, price, country, rating, quantity })
        fetch(SERVER_URL + (product ? "/products/" + product._id : "/products"), {
            method: (product ? "PATCH" : "POST"),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user?.accessToken}`
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(res => {
                // console.log(res)
                if (res?.insertedId) {
                    toast("Product added for export..")
                    navigate(`/products/${res.insertedId}`)
                }
                else if (res?.matchedCount) {
                    toast("Product  updated..")
                    if (product_prop) {
                        //do not naviage when product is come from props, because its a modal
                        afterChanges(product, newProduct)
                    } else {
                        navigate(`/products/${product._id}`)
                    }
                } else {
                    toast(JSON.stringify(res))
                }
            })
            .catch(err => {
                toast(err.message)
            })
    }


    return (
        <div className="min-h-[80vh] max-[800px]:min-h-[100vw] my-10 flex items-center justify-center ">
            <div className="w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] max-w-9/10  bg-white shadow-2xl rounded-md p-4 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3'>
                    <h1 className='font-bold mb-5 text-center text-primary'>{product ? "Edit Product" : "ADD Export"}</h1>

                    <h2 className='text-secondary'>Product Name:</h2>
                    <input type="text" name='name' className='input w-full' placeholder='Enter product name' required autoComplete='off' defaultValue={product?.name} />

                    <h2 className='text-secondary'>Product Image:</h2>
                    <input type="url" name='photo' className='input w-full' placeholder='Enter product image url' required autoComplete='off' defaultValue={product?.photo} />

                    <h2 className='text-secondary'>Price:</h2>
                    <input type="number" name='price' className='input w-full' placeholder='Enter product price' required autoComplete='off' defaultValue={product?.price} />

                    <h2 className='text-secondary'>Origin Country:</h2>
                    <SelectCountry className="input select w-full" placeholder="Select a Country" required={true} defaultValue={product?.name || 'BD'} />

                    <h2 className='text-secondary'>Rating:</h2>
                    <input type="number" name='rating' className='input w-full' placeholder='Product rating' required autoComplete='off' defaultValue={product?.rating} />

                    <h2 className='text-secondary'>Available Quantity:</h2>
                    <input type="number" name='quantity' className='input w-full' placeholder='Available Quantity' required autoComplete='off' defaultValue={product?.quantity} />


                    <input type="submit" value={product ? "Edit Product" : "Add Product for Export"} className='btn btn-primary w-full' />


                </form>
            </div>
        </div>
    );
};

export default AddExports;