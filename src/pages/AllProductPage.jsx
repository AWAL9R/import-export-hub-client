import React, { Suspense } from 'react';
import ExportList from '../components/ExportList';
import { AppName, SERVER_URL } from '../settings';
import Loading from '../components/Loading';
import Title from '../components/Title';

const AllProductPage = ({fkey}) => {
    const dataPromise = fetch(SERVER_URL + `/products?limit=100`).then(res=>res.json());

    return (
        <>
        <Title value={`${AppName} - All products`}></Title>
        <Suspense fallback={<Loading/>}>
            <ExportList dataPromise={dataPromise} fkey={fkey}/>
        </Suspense>
        </>
    )
};

export default AllProductPage;