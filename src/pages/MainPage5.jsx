export default function MainPage5(){
    return(
       <div className="min-h-screen bg-[#548664]">
        <Footer4 />
       </div>
    )
}
function Footer4() {
    return (
        <div id="about" className="flex flex-col gap-8 w-full min-h-screen px-4 py-8">
            {/* Contact Section - Added flex-1 for dynamic height */}
            <div className="max-w-6xl mx-auto w-full flex-1 flex items-center">
                <div className="bg-[#F4F0F070] rounded-lg p-8 transition-all duration-300 hover:bg-[#F4F0F090] hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full">
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
            </div>

            {/* About Us Section - Added flex-1 for dynamic height */}
            <div className="max-w-6xl mx-auto w-full flex-1 flex items-center">
                <div className="bg-[#F4F0F070] rounded-lg p-8 transition-all duration-300 hover:bg-[#F4F0F090] hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full">
                    <h2 className="text-3xl text-center text-white mb-4">About us</h2>
                    <p className="text-white text-center">
                        Welcome to Corbett Roar, your gateway to experiencing the wild beauty of Jim Corbett National Park. 
                        We are dedicated to providing unforgettable wildlife experiences while ensuring sustainable and 
                        responsible tourism practices. Our expert team brings years of local knowledge and passion for 
                        wildlife conservation to every adventure.
                    </p>
                </div>
            </div>

            {/* Copyright Section - Removed mb-44 and made it stick to bottom */}
            <div className="max-w-6xl mx-auto w-full py-4">
                <div className="text-center">
                    <p className="text-sm text-white">
                        © Copyright 2024| corbettroar| All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}