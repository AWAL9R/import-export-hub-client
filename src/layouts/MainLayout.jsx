import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';





export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}


const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div>
            <ScrollToTop />
            <NavBar />
            {isLoading?<Loading/>:<Outlet />}
            <Footer />
        </div>
    );
};

export default MainLayout;