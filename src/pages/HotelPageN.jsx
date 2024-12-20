import HotelComponent from '../components/HotelComponent'
import Form from '../components/Form'
import sumanParadise from '../assets/suman-paradise.jpeg'
import thePavilion from '../assets/the-pavilion-nainital.jpeg'
import royalHeritage from '../assets/royal-heritage.jpeg'
import manuMaharani from '../assets/manu-maharani-regency.jpeg'
import Aroma from '../assets/hotel-aroma.webp'
export default function HotelPageN() {
    const hotels = [
        {
            hotelName: "Suman Paradise",
            price: "3000",
            location: "Nainital",
            paragraph: "Welcome To Hotel Suman Paradise, Nainital",
            image: sumanParadise,
            star: 4
        },
        {
            hotelName: "The Pavilion",
            price: "3500",
            location: "Nainital",
            paragraph: "Welcome To Hotel The Pavilion, Nainital, Ringed by the seven hills of Nainital lies the enchanting and sacred Naini lake.",
            image: thePavilion,
            star: 3
        },
        {
            hotelName: "Royal Heritage",
            price: "8000",
            location: "Nainital",
            paragraph: "Welcome To Hotel Royal Heritage, Nainital",
            image: royalHeritage ,
            star: 3
        },
        {
            hotelName: "Manu Maharani Regency",
            price: "10500",
            location: "Nainital",
            paragraph: "Welcome To Hotel Manu Maharani Regency, Nainital",
            image: manuMaharani,
            star: 4
        },
        {
            hotelName: "Hotel Aroma",
            price: "3000",
            location: "Nainital",
            paragraph: "Welcome To Hotel Aroma, Nainital",
            image: Aroma,
            star: 3
        },
        // Add more hotel objects as needed
    ];

    return (
        <div className="min-h-screen py-8">
            <div className='mb-10 text-white text-2xl font-serif whitespace-nowrap animate-marquee'>
                ** Rates May fluctuate according to the seasons
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Hotels listing section */}
                <div className="flex-1 space-y-8 px-4">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 rounded-lg hover:scale-100 ml-6">
                            <HotelComponent key={index} {...hotel} />
                        </div>
                    ))}
                </div>

                {/* Enquiry Form section */}
                <div className="w-full lg:w-[400px] p-6">
                    <Form />
                </div>
            </div>
        </div>
    )
}