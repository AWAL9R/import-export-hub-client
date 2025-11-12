import React, { Suspense, use, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SERVER_URL } from '../settings';
import Loading from '../components/Loading';
import ExportView from '../components/ExportView';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AddExports from './AddExports';
import Modal from '../components/Modal';
import ImportView from '../components/ImportView';


export const MyImportsView = ({ dataPromise }) => {
    const data = use(dataPromise)
    // console.log(data)
    const [products, setProducts] = useState(data);
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate()


    const afterDelete = (id) => {
        setProducts([...products.filter(item => item._id != id)])
    }

    const onDelete = (ddata) => {
        const product=ddata.product;
        Swal.fire({
            title: `Are you sure to delete import '${product.name}'?`,
            showCancelButton: true,
            confirmButtonText: "Yes, DELETE",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                try {
                    const response = await fetch(SERVER_URL + "/imports/" + ddata._id, { method: "delete", headers: { "authorization": `Bearer ${user?.accessToken}` } });
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
                    title: `Import of ${product.name} is Deleted!`,
                });
                afterDelete(ddata._id)
            }
        });
    }

    return (
        <>
            <div className='my-10'>
                <div className="container">
                    {products.length == 0 ? <h2>You do not have any imported product. <Link to="/all" className='text-primary'>Browse products</Link></h2> : ""}
                    {products.map(item => <ImportView key={item._id} afterDelete={afterDelete} data={item} onDelete={onDelete} />)}
                </div>
            </div>
        </>
    );
}

const MyImports = () => {
    const { user } = useContext(AuthContext)

    const dataPromise = fetch(SERVER_URL + "/myImports", {
        // method: "post",
        headers: {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.accessToken}`
        },
        // body: JSON.stringify({ name, photo, price, country, rating, quantity })
    }).then(res => res.json())

    return (
        <Suspense fallback={<Loading />}>
            <MyImportsView dataPromise={dataPromise}></MyImportsView>
        </Suspense>
    );
};



export default MyImports;