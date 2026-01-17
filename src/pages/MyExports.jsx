import React, { Suspense, use, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AppName, SERVER_URL } from '../settings';
import Loading from '../components/Loading';
import ExportView from '../components/ExportView';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AddExports from './AddExports';
import Modal from '../components/Modal';
import Title from '../components/Title';
import { FaBoxOpen } from 'react-icons/fa6';


export const MyExportsView = ({ dataPromise }) => {
    const data = use(dataPromise)
    // data.reverse(); // server will send ascending, so reverse it so that client sees latest data first
    const [products, setProducts] = useState(data);
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate()

    const [updateable, setUpdateable] = useState(null);

    const afterDelete = (id) => {
        setProducts([...products.filter(item => item._id != id)])
    }


    const afterChanges = (old, newData) => {
        const newProducts = products.map(item => {
            if (old._id == item._id) {
                return { ...item, ...newData }
            }
            return item;
        })
        setProducts(newProducts)
        setUpdateable(null)
    }
    const onUpdate = (product) => {
        setUpdateable(product)
        // navigate("/editProduct/" + product._id) //or can be edited on new page
    }

    const onDelete = (product) => {
        Swal.fire({
            title: `Are you sure to delete '${product.name}'?`,
            showCancelButton: true,
            confirmButtonText: "Yes, DELETE",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                try {
                    const response = await fetch(SERVER_URL + "/products/" + product._id, { method: "delete", headers: { "authorization": `Bearer ${user?.accessToken}` } });
                    if (!response.ok) {
                        const response_json = await response.json()
                        return Swal.showValidationMessage(`
                      ${JSON.stringify(response_json.message)}
                    `);
                    }
                    return response.json();
                } catch (error) {
                    Swal.showValidationMessage(`
                    Request failed: ${error}
                  `);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${product.name} Deleted!`,
                });
                afterDelete(product._id)
            }
        });
    }

    const noExported = <>
        <div className="flex justify-center">
            <div className="bg-white border border-base-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center shadow-md max-w-200">
                <FaBoxOpen className="text-6xl text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">You do not have any exported product</h3>
                <p className="text-sm opacity-70 mb-4">Start by adding your first product to get started.</p>
                <Link
                    to={'/add/exports'}
                    className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition"
                >
                    Add Product
                </Link>
            </div>
        </div>
    </>

    return (
        <>
            <Title value={`${AppName} - My Exports`}></Title>
            <Modal isOpen={updateable != null} onClose={() => setUpdateable(null)}>
                <AddExports product={updateable} afterChanges={afterChanges} />
            </Modal>

            <div className='my-10'>
                <div className="container">
                    {products.length == 0 ? noExported : ""}
                    {products.map(item => <ExportView key={item._id} afterDelete={afterDelete} data={item} onUpdate={onUpdate} onDelete={onDelete} />)}
                </div>
            </div>
        </>
    );
}

const MyExports = () => {
    const { user } = useContext(AuthContext)

    const dataPromise = fetch(SERVER_URL + "/myExports", {
        // method: "post",
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.accessToken}`
        },
        // body: JSON.stringify({ name, photo, price, country, rating, quantity })
    }).then(res => {
        if (res.status >= 400) {
            window.location.reload()
        }
        return res.json()
    })

    return (
        <Suspense fallback={<Loading />}>
            <MyExportsView dataPromise={dataPromise}></MyExportsView>
        </Suspense>
    );
};



export default MyExports;