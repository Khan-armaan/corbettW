import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Safari from '../components/Safari'
import HotelSafari from '../pages/HotelSafari'
import ZonePage from '../pages/ZonePage'
import GreenCardPage from '../pages/GreenCardPage'
import FooterMain from '../components/FooterMain'

function MainPage1() {
    return (
        <div className="pt-[72px]">
            <Navbar />
            <Hero />
            <Safari />
            <HotelSafari />
            <ZonePage />
            <GreenCardPage />
            <FooterMain />
        </div>
    )
}

export default MainPage1