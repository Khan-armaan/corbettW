import wallpaperImage from '../assets/wallpaperImage.jpeg'
import Form from './Form'

export default function Hero() {
    return (
        <div className="relative min-h-screen" id="hero1">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={wallpaperImage} 
                    alt="Safari Experience" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Container - Changed to flex-col on mobile */}
            <div className="relative z-10 min-h-screen w-full 
                px-4 py-8 md:px-16 md:py-0
                flex flex-col md:flex-row 
                items-center justify-center md:justify-between 
                gap-8 md:gap-12">
                
                {/* Left side - Text - Centered on mobile */}
                <div className="text-white max-w-2xl text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 
                        leading-tight transition-transform duration-300 hover:scale-105">
                        The Safari Experience You'll Never Forget
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl 
                        transition-transform duration-300 hover:scale-105">
                        Book Your Adventure Today!
                    </h2>
                </div>

                {/* Right side - Enquiry Form - Full width on mobile */}
               <Form />
            </div>
        </div>
    )
}