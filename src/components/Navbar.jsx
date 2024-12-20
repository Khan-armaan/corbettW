import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showHotelDropdown, setShowHotelDropdown] = useState(false);

    return (
        <nav className="bg-[#00580A] px-8 py-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Link to="/" className="text-white text-2xl md:text-3xl font-bold no-underline tracking-wider font-serif flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                            <span className="text-yellow-400">Corbett</span>
                            <span className="text-white">Roar</span>
                        </Link>
                    </div>
                    
                    {/* Hamburger Button */}
                    <button 
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-8">
                        <Link to="/#hero1" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</Link>
                        <Link to="/main2#hero2" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Safari Booking</Link>
                        
                        {/* Hotels Dropdown */}
                        <div className="relative">
                            <button 
                                className="text-white hover:text-gray-200"
                                onMouseEnter={() => setShowHotelDropdown(true)}
                                onMouseLeave={() => setShowHotelDropdown(false)}
                            >
                                Hotels
                            </button>
                            {showHotelDropdown && (
                                <div 
                                    className="absolute top-full left-0 bg-[#00580A] py-2 px-4 rounded shadow-lg"
                                    onMouseEnter={() => setShowHotelDropdown(true)}
                                    onMouseLeave={() => setShowHotelDropdown(false)}
                                >
                                    <Link to="/main4" className="block text-white no-underline hover:text-gray-200 py-1">Corbett</Link>
                                    <Link to="/main3" className="block text-white no-underline hover:text-gray-200 py-1">Nainital</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/main2#hero3" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Night Stay</Link>
                    </div>
                    <div className='hidden lg:flex gap-8'>
                        <Link to="/main5" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact us</Link>
                        <Link to="/main5" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About us</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
                <div className="flex flex-col gap-4">
                    <Link to="/#hero1" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</Link>
                    <Link to="/main2#hero2" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Safari Booking</Link>
                    <Link to="/main4" className="text-white no-underline hover:text-gray-200 pl-4">Hotels - Corbett</Link>
                    <Link to="/main3" className="text-white no-underline hover:text-gray-200 pl-4">Hotels - Nainital</Link>
                    <Link to="/main2" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Night Stay</Link>
                    <Link to="/main5" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact us</Link>
                    <Link to="/main5" className="text-white no-underline hover:text-gray-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About us</Link>
                </div>
            </div>
        </nav>
    );
}
