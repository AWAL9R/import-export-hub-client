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


export const MyExportsView = ({ dataPromise }) => {
    const data = use(dataPromise)
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

    return (
        <>
            <Title value={`${AppName} - My Exports`}></Title>
            <Modal isOpen={updateable != null} onClose={() => setUpdateable(null)}>
                <AddExports product={updateable} afterChanges={afterChanges} />
            </Modal>

            <div className='my-10'>
                <div className="container">
                    {products.length == 0 ? <h2>You do not have any exported product. <Link to="/add/exports" className='text-primary'>Add one</Link></h2> : ""}
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
    }).then(res => res.json())

    return (
        <Suspense fallback={<Loading />}>
            <MyExportsView dataPromise={dataPromise}></MyExportsView>
        </Suspense>
    );
};



export default MyExports;