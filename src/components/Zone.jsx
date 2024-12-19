export default function Zone({ zone, zoneText, image }) {
    return (
        <div className="w-[300px] h-[300px] bg-[#00580A] rounded-[20px] p-5 flex flex-col gap-3
                      transform transition-all duration-300 
                      shadow-md border-2 border-white/20
                      hover:scale-105
                      hover:shadow-2xl hover:shadow-gray-900
                      hover:border-white/40">
            <div className="w-full h-[60%] bg-[#8BA888] rounded-lg overflow-hidden">
                <img 
                    src={image} 
                    alt={zone}
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-white font-serif text-2xl text-center">
                {zone}
            </h2>
            <p className="text-white text-center">
                {zoneText}
            </p>
        </div>
    )
}