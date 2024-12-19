export default function BelowHero({heading}) {
    return (
        <div className="py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-italic mb-6 text-white transition-all duration-300 hover:scale-105 hover:text-[#1a2a20]">
                {heading}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto transition-all duration-300 hover:text-[#2c4434]">
                Book your hotel now and enjoy a holiday filled with unique and unforgettable experiences!
            </p>
        </div>
    )
}