import React from 'react';
import { useLoaderData } from 'react-router';
import ExportList from '../components/ExportList';

const AllProductPage = ({fkey}) => {
     const data = useLoaderData()
    return (
        <ExportList data={data} fkey={fkey}/>
    )
};

export default AllProductPage;