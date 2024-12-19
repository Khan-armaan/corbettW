import { useNavigate } from 'react-router-dom'

export default function HotelComponent({ hotelName, price, location, paragraph, image, star }) {
    const navigate = useNavigate()

    const handleBookNowClick = () => {
        navigate('/')
        setTimeout(() => {
            document.getElementById('hero1')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 max-w-[1000px] p-4 rounded-[20px] bg-[rgba(217,217,217,0.48)]">
            <div className="w-full md:w-[200px] h-[200px] bg-[#D9D9D9] rounded-lg">
                <img 
                    src={image} 
                    alt={hotelName} 
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                        <h2 className="text-xl md:text-2xl m-0 text-white">{hotelName}</h2>
                        <p className="text-sm m-0 text-white">Price: INR {price}</p>
                    </div>
                    <div className="text-[#FFD700] text-lg md:text-xl my-1">
                        {Array(star).fill('⭐').join('')}
                    </div>
                    <p className="text-sm my-2 text-white line-clamp-2">{paragraph}</p>
                    
                    <div className="flex items-center gap-2">
                        <span>📍</span>
                        <div>
                            <h3 className="m-0 text-sm text-white">Hotel location</h3>
                            <p className="my-0.5 text-xs text-white">{location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end items-center mt-4 md:mt-2">
                    <button 
                        onClick={handleBookNowClick}
                        className="w-full md:w-auto bg-[rgba(217,217,217,0.7)] border-none px-6 py-2 rounded-lg text-sm cursor-pointer text-white hover:bg-[rgba(217,217,217,0.9)] hover:scale-105 transition-all duration-300"
                    >
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
}