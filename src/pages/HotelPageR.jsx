import HotelComponent from '../components/HotelComponent'
import Form from '../components/Form'
import hrideyImg from '../assets/Hridey-retreat.jpeg'
import mayaImg from '../assets/Maya-resort-corbett.jpeg'
import atulyaImg from '../assets/Atulya-resort-corbett.jpeg'
import jungleImg from '../assets/The-jungle-book.jpeg'
import maulikImg from '../assets/Maulik-mansion.jpeg'
export default function HotelPageR() {
    const hotels = [
        {
            hotelName: "Hridey retreat",    
            price: "2800",
            location: "Corbett national park\nDhikuli, Ramnagar",
            paragraph: "Welcome to Hridey Retreat Resort, a haven of tranquility nestled in the heart of Jim Corbett, Uttarakhand",
            image: hrideyImg,
            star: 3
        },
        {
            hotelName: "Maya resort corbett",
            price: "3300",
            location: "Corbett national park\nDhikuli, Ramnagar",
            paragraph: "Maya The Forest Resort offers swimming pool, lawns/gardens, massage centre and parking facility.",
            image: mayaImg ,// Add image path here
            star:3
        },
        {
            hotelName: "Atulya resort corbett",
            price: "5300",
            location: "Corbett national park\nDhikuli, Ramnagar",
            paragraph: " The Atulya Resort is located on the outskirts of the lovely Kumaon Mountains.",
            image: atulyaImg ,// Add image path here,
            star:3
        },
        {
            hotelName: "The jungle book",
            price: "4500",
            location: "Corbett national park\nDhikuli, Ramnagar",
            paragraph: "Welcome to The Jungle Book Corbett, an oasis of refined indulgence and untamed wilderness, nestled amidst the awe-inspiring foothills of the Himalayas.",
            image: jungleImg ,
            star:4
        },
        {
            hotelName: "Maulik mansion",
            price: "6300",
            location: "Corbett national park\nDhikuli, Ramnagar",
            paragraph: "Located in Dhikuli, Jim Corbett National Park, India, this property is cuddled by nature and nestled by wildlife. ",
            image: maulikImg,
            star:4
        },
        // Add more hotel objects as needed
    ];

    return (
        <div className="min-h-screen py-8">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Hotels listing section */}
                <div className="flex-1 space-y-8 px-4">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 rounded-lg hover:scale-105">
                            <HotelComponent {...hotel} />
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