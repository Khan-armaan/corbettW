import {  Link } from 'react-router-dom';
import enquire1 from '../assets/enquire1.jpg';
import enquire from '../assets/enquire.jpg';

export default function Safari() {
    const handleScroll = () => {
        const element = document.getElementById('hero1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-screen p-4 md:p-8 gap-4">
            {/* Left side */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] p-2 md:p-4">
                <img 
                    src={enquire1} 
                    alt="Safari" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-shadow-lg tracking-wider">Safari</h1>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-3 text-shadow-md tracking-wide">Jeep Safari</h2>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-shadow-md tracking-wide">Canter Safari</h2>
                    <Link to="/#hero1">
                        <button 
                            onClick={handleScroll}
                            className="bg-yellow-300 text-black px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-yellow-400 
                                     font-bold text-base md:text-lg transform hover:scale-105 transition-all duration-300 
                                     shadow-lg hover:shadow-xl"
                        >
                            Enquire now
                        </button>
                    </Link>
                </div>
            </div>

            {/* Right side */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] p-2 md:p-4">
                <img 
                    src={enquire} 
                    alt="Safari packages" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5 text-shadow-md tracking-wide whitespace-nowrap">1 Night 2 days package</h2>
                    <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5 text-shadow-md tracking-wide whitespace-nowrap">2 Night 3 days package</h2>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8 text-shadow-md tracking-wide whitespace-nowrap">3 Night 4 days package</h2>
                    <Link to="/#hero1">
                        <button 
                            onClick={handleScroll}
                            className="bg-yellow-300 text-black px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-yellow-400 
                                     font-bold text-base md:text-lg transform hover:scale-105 transition-all duration-300 
                                     shadow-lg hover:shadow-xl"
                        >
                            Enquire now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}