import { Link } from 'react-router-dom';
export default function Footer2() {
    return (
        <>
         <footer className="px-4 py-16 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Quick Links Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-serif mb-6">Quick links</h2>
                    <nav className="space-y-2">
                        <div>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/main2#safari" className="hover:underline">
                                Safari
                            </Link>
                        </div>
                        <div>
                            <Link to="/main2#booking" className="hover:underline">
                                Booking
                            </Link>
                        </div>
                        <div>
                            <Link to="/main2#night" className="hover:underline">
                                Night
                            </Link>
                        </div>
                        <div>
                            <Link to="/main2#stay" className="hover:underline">
                                Stay
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* Copyright Notice */}
                <div className="text-center">
                    <p className="text-sm">
                        © Copyright 2024| corbettroar| All rights reserved
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}