import React, { Suspense } from 'react';
import { Link } from 'react-router';
import ExportView from '../components/ExportView';
import ProductView from '../components/ProductView';
import ExportList from '../components/ExportList';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import NewsLetter from '../components/NewsLetter';
import { AppName, SERVER_URL } from '../settings';
import Title from '../components/Title';
import Loading from '../components/Loading';


const HomePage = ({ fkey }) => {
    // const data = useLoaderData()
    const dataPromise = fetch(SERVER_URL + `/products?limit=6`).then(res=>res.json());
    return (
        <>
        <Title value={`${AppName} - Import, Export, Grow.`}></Title>
        
        <div className="container my-2 md:my-4 lg:my-10">
            <Hero/>
        </div>
        <HowItWorks></HowItWorks>

        <Suspense fallback={<Loading/>}>
            <ExportList dataPromise={dataPromise} fkey={fkey}/>
        </Suspense>

        <NewsLetter/>
        </>
    )
};

export default HomePage;