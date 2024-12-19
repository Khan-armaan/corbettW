import footerBg from '../assets/FooterP1.jpeg';

export default function FooterMain() {
    return (
        <footer className="relative w-full">
            <div 
                className="w-full bg-cover bg-center min-h-[300px] p-8"
                style={{
                    backgroundImage: `url(${footerBg})`
                }}
            >
                <div className="container mx-auto">
                    <h2 className="text-white text-4xl font-bold mb-6">Quick links</h2>
                    <ul className="space-y-3">
                        <li><a href="/#hero1" className="text-white hover:text-gray-200 text-xl">Home</a></li>
                        <li><a href="/main2#hero2" className="text-white hover:text-gray-200 text-xl">Safari Booking</a></li>
                        <li><a href="/main3#hero3" className="text-white hover:text-gray-200 text-xl">Hotel</a></li>
                        <li><a href="/main4#hero3" className="text-white hover:text-gray-200 text-xl">Night Stay</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}