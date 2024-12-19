export default function Footer3() {
    return (
        <div id="about"className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4 mt-40 ">
            {/* Contact Section */}
            <div className="bg-[#F4F0F070] rounded-lg p-8 transition-all duration-300 hover:bg-[#F4F0F090] hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <h2 className="text-3xl text-center text-white mb-4">Contact Us Now</h2>
                <div className="text-white text-center space-y-2">
                    <p>Ayaan - 6396021400</p>
                    <p>Arif - 9837578586</p>
                    <p>corbettroar@gmail.com</p>
                    <p>Near lakhanpur chungi, aamdanda road,</p>
                    <p>ramnagar(Nainital), 244715</p>
                    <p>UPI id:  6396021400@ybl </p>
                </div>
            </div>

            {/* About Us Section */}
            <div  className="bg-[#F4F0F070] rounded-lg p-8 transition-all duration-300 hover:bg-[#F4F0F090] hover:shadow-lg hover:scale-[1.02] cursor-pointer mb-44">
                <h2 className="text-3xl text-center text-white mb-4">About us</h2>
                <p className="text-white text-center">
                    Welcome to Corbett Roar, your gateway to experiencing the wild beauty of Jim Corbett National Park. 
                    We are dedicated to providing unforgettable wildlife experiences while ensuring sustainable and 
                    responsible tourism practices. Our expert team brings years of local knowledge and passion for 
                    wildlife conservation to every adventure.
                </p>
            </div>
        </div>
    )
}