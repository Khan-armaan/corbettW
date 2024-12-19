import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'

export default function Gallery() {
    return (
        <div className="px-4 my-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                    Gallery for Dhikala lodge
                </h1>
                
                {/* Gallery Container - Changed to grid for better responsive layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Individual Image Containers - Added hover effects */}
                    <div className="aspect-square overflow-hidden rounded-lg group">
                        <img 
                            src={gallery1} 
                            alt="Dhikala Lodge Gallery 1" 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg group">
                        <img 
                            src={gallery2} 
                            alt="Dhikala Lodge Gallery 2" 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg group">
                        <img 
                            src={gallery3} 
                            alt="Dhikala Lodge Gallery 3" 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg group">
                        <img 
                            src={gallery4} 
                            alt="Dhikala Lodge Gallery 4" 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg group">
                        <img 
                            src={gallery5} 
                            alt="Dhikala Lodge Gallery 5" 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}