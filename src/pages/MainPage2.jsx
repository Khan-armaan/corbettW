import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Accomodation from "../components/Accomodation";
import Canter from "../components/Canter";
import Gallery from "../components/Gallery";
import Gypsy from "../components/Gypsy";
import Hero2 from "../components/Hero2";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import OverView from "../components/OverView";
import SafariPrizes from "../components/SafariPrizes";
import PreFooterMain2 from '../components/PreFooterMain2';
import Footer2 from '../components/Footer2';

export default function MainPage2() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: '#548664' }}>
            <Navbar />
            <div className="w-full overflow-x-hidden">
                <Hero2 />   
                <OverView />
                <Gallery />
                <Accomodation />
                <Map />
                <SafariPrizes />
                <Gypsy />
                <Canter />
                <PreFooterMain2 />
                <Footer2 />
            </div>
        </div>
    )
}