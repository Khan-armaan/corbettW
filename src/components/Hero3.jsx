import wallpaperImage from '../assets/wallpaperImage.jpeg'
import { useNavigate } from 'react-router-dom'

export default function Hero3({ heading }) {
    const navigate = useNavigate()

    const handleBookNowClick = () => {
        navigate('/')
        setTimeout(() => {
            document.getElementById('hero1')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    return (
        <div id="hero3" className="relative min-h-[500px] max-w-6xl mx-auto my-8 rounded-2xl overflow-hidden mt-10">
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full rounded-2xl"
                style={{
                    backgroundImage: `url(${wallpaperImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end pb-12 px-8 md:px-10">
                <h1 className="pt-20 text-white text-2xl md:text-5xl font-bold max-w-3xl mb-8 leading-tight hover:text-[#548664] transition-colors duration-300">
                    {heading}
                </h1>
                
                <div className="w-full flex justify-end">
                    <button 
                        onClick={handleBookNowClick}
                        className="bg-[#548664] text-white px-8 py-3 rounded-lg text-xl hover:bg-[#3e6349] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                    >
                        Book now
                    </button>
                </div>
            </div>
        </div>
    )
}