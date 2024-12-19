import BelowHero from "../components/BelowHero"
import Hero3 from "../components/Hero3"
import Navbar from "../components/Navbar"
import HotelPageN from "./HotelPageN"
import Footer3 from "../components/Footer3"
export default function MainPage(){
    return (
        <>
         <div style={{ backgroundColor: '#548664' }}>
         <Navbar />
        <Hero3 heading="Book your hotel in Nainital and enjoy a refreshing holiday surrounded by serene lakes and breathtaking landscapes!" />
         <BelowHero heading={"Hotels Available in Nainital"} />
        <HotelPageN />
        <Footer3 />
         </div>
    
        </>
    )
}