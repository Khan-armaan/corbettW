
import rupeeIcon from '../assets/rupee.png'
import locationIcon from '../assets/location.png'
import timeIcon from '../assets/time.png'



export default function Canter() {
    return(
        <div id="canter" className="px-4 my-16" style={{ backgroundColor: '#548664' }}>
        <div className="max-w-6xl mx-auto">
            {/* Title */}
         
            {/* Main Container */}
            <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#F4F0F066' }}>
            <h1 className="text-4xl font-serif text-white mb-12 text-center">
                Canter
            </h1>

                {/* Circles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Pricing Circle */}
                    <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                                           <img src={rupeeIcon} alt="Rupee Icon" className="w-8 h-8 mb-4" />
                        <h2 className="text-2xl font-serif mb-4">Pricing</h2>
                        <ul className="text-sm space-y-2">
                            <li>INR 3000-4000 per Person</li>
                            <li> 1 Canter has l6 seats</li>
                         
                        </ul>
                    </div>

                    {/* Zones Circle */}
                    <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                                             <img src={locationIcon} alt="Rupee Icon" className="w-8 h-8 mb-4" />
                        <h2 className="text-2xl font-serif mb-4">Zones</h2>
                        <ul className="text-sm space-y-2">
                            <li>Dhikala</li>
                          
                        </ul>
                    </div>

                    {/* Timing Circle */}
                    <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                                            <img src={timeIcon} alt="Rupee Icon" className="w-8 h-8 mb-6" />
                        <h2 className="text-2xl font-serif mb-4">Timing</h2>
                        <ul className="text-sm space-y-2">
                            <li>Morning 6AM to 1AM</li>
                            <li>Evening 1115AM-5PM</li>
                            <br/>

                          <li>Note : you have to reach 45 minutes before the safari starts</li>
                        </ul>
                    </div>
                </div>

              
            </div>
        </div>
    </div>
    )
}