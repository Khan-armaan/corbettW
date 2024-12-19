import Form from './Form'

export default function Accomodation() {
    return (
        <div className="px-4 my-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section - Lodge Info */}
                <div className="rounded-3xl p-8" style={{ backgroundColor: '#D9D9D952' }}>
                    <h1 className="text-2xl md:text-3xl font-serif text-white mb-6 whitespace-nowrap">
                        Dhikala forest lodge accommodation
                    </h1>
                    
                    <p className="text-white text-lg leading-relaxed mb-8">
                        Strategically located in the heart of the dense forest of Jim Corbett National Park, 
                        Dhikala Forest Lodge is one of the most unique forest accommodations in the world. 
                        Managed by the forest department, this rustic yet enchanting lodge offers an 
                        unparalleled experience for wildlife enthusiasts and nature lovers. Nestled within 
                        the Patli Dun Valley, it provides stunning views of the valley and the Kanda Ridge, 
                        with streams of the Ramganga River adding to the picturesque charm. Accessible only 
                        by forest department vehicles, the 32-km journey from Dhangadi Gate to Dhikala is 
                        an adventure in itself, taking you through vast grasslands, dense Sal forests, and 
                        thriving wildlife habitats. Staying overnight here is a mystical and unforgettable 
                        experience. Indian and SAARC visitors must book 46 days in advance, while foreign 
                        tourists are required to book 91 days prior.
                    </p>

                    <h2 className="text-2xl font-serif text-white mb-4">
                        Activities at Dhikala Forest Rest House (FRH):
                    </h2>
                    
                    <p className="text-white text-lg leading-relaxed">
                        The Dhikala Zone of Jim Corbett National Park is open to tourists only from 15th 
                        November to 15th June each year. During the monsoon season, the area remains closed 
                        due to safety concerns, as the rising water levels of river streams make the region 
                        inaccessible. Being a restricted area, entry into the Dhikala Zone requires a valid 
                        permit. Due to its immense popularity among domestic and international tourists, it 
                        is highly recommended to book your accommodation, safari, and guide well in advance, 
                        as securing a spot without prior booking is almost impossible. Access to Dhikala is 
                        through the Dhangadi Gate, located approximately 20 km from Ramnagar, the nearest 
                        town.
                    </p>
                </div>

                {/* Right Section - Form and Accommodation Details */}
                <div className="space-y-8  md:items-center">
                    {/* Enquiry Form */}
                    <div className="flex md:justify-end justify-center ">
                        <div className="w-full lg:w-11/12">
                            <Form />
                        </div>
                    </div>

                    {/* Accommodation Details */}
                    <div className="rounded-3xl p-8" style={{ backgroundColor: '#D9D9D952' }}>
                        <h2 className="text-2xl font-serif text-white mb-6">
                            Accommodation Details Of Dhikala Forest House
                        </h2>
                        
                        <p className="text-white text-lg mb-4">
                            There are six different wings in the Dhikala Forest Lodge which can be 
                            categorized as follows:
                        </p>
                        
                        <ul className="text-white text-lg space-y-2">
                            <li>• Dhikala Annexes with about 7 rooms</li>
                            <li>• Hutment with about 6 rooms</li>
                            <li>• Cabins with about 6 rooms</li>
                            <li>• New Forest Rest House with about 4 rooms</li>
                            <li>• Old Range Quarters with about 4 rooms</li>
                            <li>• Old Forest Rest House with about 5 rooms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}