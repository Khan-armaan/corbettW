import wallpaperImage from '../assets/wallpaperImage.jpeg'
import wallpaperImage2 from '../assets/wallpaper2.jpeg'
import wallpaperImage3 from '../assets/wallpaper3.jpg'
import Form from './Form'
import { useState, useEffect } from 'react'

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    const backgroundImages = [
        wallpaperImage,
        wallpaperImage3,
        wallpaperImage2
    
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div id="hero1" className="relative min-h-screen" >
            {/* Background Image with fade transition */}
            <div className="absolute inset-0">
                <img 
                    src={backgroundImages[currentImageIndex]} 
                    alt="Safari Experience" 
                    className="w-full h-full object-cover transition-opacity duration-1000"
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