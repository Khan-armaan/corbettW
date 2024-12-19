import backgroundImage from '../assets/wallpaperImage.jpeg'

export default function Hero2() {
    return (
        <div id="hero2" className="relative w-full overflow-x-hidden px-4 md:px-8" >
            {/* Background Image Container */}
            <div className="max-w-6xl mx-auto h-[200px] rounded-2xl overflow-hidden my-8 relative">
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-wider mb-2 transition-transform duration-300 hover:scale-105">
                        DHIKALA LODGE BOOKING
                    </h1>
                    <h2 className="text-xl md:text-2xl font-sans tracking-widest transition-transform duration-300 hover:scale-105">
                        JEEP SAFARI BOOKING
                    </h2>
                </div>
            </div>
        </div>
    )
}