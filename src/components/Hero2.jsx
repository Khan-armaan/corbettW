import backgroundImage from '../assets/gallery2.jpg'

export default function Hero2() {
    return (
        <div id="hero2" className="relative w-full overflow-x-hidden px-4 md:px-8" >
            {/* Background Image Container */}
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden my-8">
                <img 
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-auto object-contain"
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
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