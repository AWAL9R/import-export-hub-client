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
import WelcomeMessage from '../components/WelcomeMessage';
import WhySection from '../components/WhySection';
import GlobalStats from '../components/GlobalStats';
import TradeFlow from '../components/TradeFlow';
import WhoUses from '../components/WhoUses';
import FAQSection from '../components/FAQSection';
import TrustedBy from '../components/TrustedBy';


const HomePage = ({ fkey }) => {
    // const data = useLoaderData()
    const dataPromise = fetch(SERVER_URL + `/products?limit=8`).then(res => res.json());
    return (
        <>
            <Title value={`${AppName} - Import, Export, Grow.`}></Title>

            <div className="container mspace-both">
                <Hero />
            </div>
            <div className=" ">
                <WelcomeMessage />
            </div>

            <div className="container mspace-both">
                {/* <WhySection></WhySection> */}
                <GlobalStats></GlobalStats>
            </div>

            <Suspense fallback={<Loading />}>
                <ExportList dataPromise={dataPromise} fkey={fkey} />
            </Suspense>

            <div className="container mspace-both">
                <WhySection></WhySection>
                {/* <GlobalStats></GlobalStats> */}
            </div>

            <div className="container mspace-both">
                <TradeFlow></TradeFlow>
            </div>

            <div className="container mspace-both">
                <WhoUses />
            </div>



            {/* <HowItWorks></HowItWorks> */}

            <div className="container mspace-both">
                <FAQSection />
            </div>
            <div className="container mspace-both">
                <TrustedBy />
            </div>

            <NewsLetter />
        </>
    )
};

export default HomePage;