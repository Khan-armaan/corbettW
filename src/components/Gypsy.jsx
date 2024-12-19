export default function Gypsy() {
    return (
        <div id="gypsy"className="px-4 my-16" style={{ backgroundColor: '#548664' }}>
            <div className="max-w-6xl mx-auto">
                {/* Title */}
             
                {/* Main Container */}
                <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#F4F0F066' }}>
                <h1 className="text-4xl font-serif text-white mb-12 text-center">
                    Gypsy
                </h1>

                    {/* Circles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Pricing Circle */}
                        <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                            <h2 className="text-2xl font-serif mb-4">Pricing</h2>
                            <ul className="text-sm space-y-2">
                                <li>INR 7000-10000 per Gypsy</li>
                                <li>Max 6 person and 2 childrens</li>
                                <li>Between 6 - 12 years</li>
                                <li>Allowed in 1 Gypsy</li>
                            </ul>
                        </div>

                        {/* Zones Circle */}
                        <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                            <h2 className="text-2xl font-serif mb-4">Zones</h2>
                            <ul className="text-sm space-y-2">
                                <li>Jhirna, Dhela</li>
                                <li>Bijrani, Phato</li>
                                <li>Garjiya, Durgadevi</li>
                                <li>Sitabani</li>
                            </ul>
                        </div>

                        {/* Timing Circle */}
                        <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                            <h2 className="text-2xl font-serif mb-4">Timing</h2>
                            <ul className="text-sm space-y-2">
                                <li>Morning 6AM to 9:30AM</li>
                                <li>Evening 3PM-6PM</li>
                                <li>Safari Timing according to</li>
                                <li>season conditions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Services Circle - Centered Below */}
                    <div className="flex justify-center">
                        <div className="bg-[#D9D9D9] rounded-full p-8 aspect-square w-64 flex flex-col items-center justify-center text-center
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30
                                    cursor-pointer hover:bg-[#E5E5E5]">
                            <h2 className="text-2xl font-serif mb-4">Services</h2>
                            <ul className="text-sm space-y-2">
                                <li>Permission of CTR</li>
                                <li>Gypsy</li>
                                <li>Driver</li>
                                <li>Permit and all taxes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}