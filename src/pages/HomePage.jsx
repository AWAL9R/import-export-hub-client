import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ExportView from '../components/ExportView';
import ProductView from '../components/ProductView';
import ExportList from '../components/ExportList';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import NewsLetter from '../../public/NewsLetter';

const HomePage = ({ fkey }) => {
    const data = useLoaderData()
    return (
        <>
        <div className="container my-10">
            <Hero/>
        </div>
        <HowItWorks></HowItWorks>
        <ExportList data={data} fkey={fkey}/>

        <NewsLetter/>
        </>
    )
};

export default HomePage;