import BelowHero from "../components/BelowHero"
import Hero3 from "../components/Hero3"
import Navbar from "../components/Navbar"
import HotelPageR from "./HotelPageR"
import Footer3 from "../components/Footer3"
import wallpaperImage from '../assets/hotelR.jpg'
export default function MainPage4(){
    return(
        <>
<div style={{ backgroundColor: '#548664' }}>
         <Navbar />
        <Hero3 heading="It’s time to travel—book your perfect stay near Jim Corbett now and make your adventure unforgettable!" wallpaperImage={wallpaperImage} />
         <BelowHero heading={"Hotels Available in Jim Corbett"}/>
        <HotelPageR />
        <Footer3 />
         </div>
        </>
    )

}