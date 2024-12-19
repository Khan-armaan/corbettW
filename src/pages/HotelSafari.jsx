import hotelImage from '../assets/hotel.png'
import { useNavigate } from 'react-router-dom';

export default function HotelSafari() {
    const navigate = useNavigate();

    const handleScroll = () => {
        navigate('/');  // Navigate to home page
        setTimeout(() => {
            const element = document.getElementById('hero1');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);  // Small delay to ensure navigation completes
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
            {/* Left Card */}
            <div className="relative w-full lg:w-1/2">
                <img 
                    src={hotelImage}
                    alt="Hotel view" 
                    className="w-full h-[400px] lg:h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-2xl p-4 lg:p-8 text-white">
                    <h2 className="text-3xl lg:text-4xl font-serif mb-4 lg:mb-8">Hotel Booking</h2>
                    <ul className="space-y-2 lg:space-y-4 text-sm lg:text-base">
                        <li>
                            <strong>Affordable Luxury:</strong> Stay in premium accommodations with a perfect balance of comfort and budget-friendly pricing.
                        </li>
                        <li>
                            <strong>Stunning Natural Beauty:</strong> Wake up to panoramic views of lush forests, rolling hills and the serene Ramganga River.
                        </li>
                        <li>
                            <strong>Thrilling Wildlife Safaris:</strong> Enjoy guided jeep safaris to explore the wilderness and spot majestic creatures like the Royal Bengal Tiger.
                        </li>
                        <li>
                            <strong>Top-Notch Services:</strong> Experience warm hospitality with modern amenities, delicious local cuisine, and personalized attention.
                        </li>
                        <li>
                            <strong>Exclusive Packages:</strong> Book early to grab exciting deals and make your Jim Corbett adventure unforgettable!
                        </li>
                    </ul>
                    <button 
                        onClick={handleScroll}
                        className="mt-4 lg:mt-8 bg-[#eeff41] text-black px-6 lg:px-8 py-2 lg:py-3 
                                 rounded-full font-semibold text-sm lg:text-base
                                 transform transition-all duration-300
                                 hover:scale-105 hover:shadow-lg hover:shadow-[#eeff41]/50
                                 active:scale-95 hover:bg-[#f4ff6a]">
                        Book now
                    </button>
                </div>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-1/2 bg-gray-100 rounded-2xl p-4 lg:p-8">
                <h2 className="text-3xl lg:text-4xl font-serif text-green-800 mb-4 lg:mb-8">Hotel + Safari Booking</h2>
                
                <div className="space-y-4 lg:space-y-6 text-sm lg:text-base">
                    <div>
                        <h3 className="font-bold">Stay Amidst Nature:</h3>
                        <p>Book your stay at our premium hotels, offering stunning views and unmatched comfort right near Jim Corbett National Park.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold">Thrilling Safari Experiences:</h3>
                        <p>Combine your stay with guided jeep safaris to explore the park and spot wildlife like the Royal Bengal Tiger, elephants, and exotic birds.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold">All-Inclusive Packages:</h3>
                        <p>Enjoy exclusive hotel and safari combo deals at budget-friendly prices for a seamless experience.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold">Personalized Services:</h3>
                        <p>From cozy accommodations to expert safari guides, we ensure your adventure is comfortable and memorable.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold">Book Now:</h3>
                        <p>Secure your hotel and safari package in advance to avoid last-minute hassles and grab the best offers!</p>
                    </div>

                    <p className="italic mt-6">Book our hotel + safari package to enjoy luxury and adventure at a discounted rate, making your trip both memorable and budget-friendly!</p>

                    <button 
                        onClick={handleScroll}
                        className="mt-4 bg-[#eeff41] px-6 lg:px-8 py-2 lg:py-3 
                                 rounded-full font-semibold text-sm lg:text-base
                                 transform transition-all duration-300
                                 hover:scale-105 hover:shadow-lg hover:shadow-[#eeff41]/50
                                 active:scale-95 hover:bg-[#f4ff6a]">
                        Enquire now
                    </button>
                </div>
            </div>
        </div>
    )
}