import { Link } from 'react-router-dom'

export default function SafariPrizes() {
    return (
        <div className="px-4 my-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif text-white mb-8 text-center">
                    Safari Prices and Zones
                </h1>

                {/* Buttons Container */}
                <div className="flex justify-center gap-4">
                    {/* Gypsy Button */}
                    <Link to="/main2#gypsy" className="w-32">
                        <button 
                            className="w-full py-2 px-4 rounded-md font-serif text-white text-xl
                                     transition-all duration-300 ease-in-out hover:scale-110
                                     hover:shadow-lg hover:shadow-green-200/50"
                            style={{ backgroundColor: '#71EF2857' }}
                        >
                            Gypsy
                        </button>
                    </Link>

                    {/* Canter Button */}
                    <Link to="/main2#canter" className="w-32">
                        <button 
                            className="w-full py-2 px-4 rounded-md font-serif text-black text-xl
                                     transition-all duration-300 ease-in-out hover:scale-110
                                     hover:shadow-lg hover:shadow-white/50"
                            style={{ backgroundColor: '#FFFFFF' }}
                        >
                            Canter
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}