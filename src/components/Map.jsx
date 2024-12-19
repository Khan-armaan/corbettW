import { useEffect, useRef } from 'react';

export default function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        // Coordinates for Jim Corbett National Park
        const corbettLocation = { lat: 29.5300, lng: 78.7747 };

        // Create map instance
        const map = new window.google.maps.Map(mapRef.current, {
            center: corbettLocation,
            zoom: 12,
            styles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        { "color": "#8BA888" }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        { "color": "#A5C1A3" }
                    ]
                }
            ]
        });

        // Add marker for Dhikala Forest Lodge
        new window.google.maps.Marker({
            position: { lat: 29.5482, lng: 78.7747 }, // Dhikala coordinates
            map: map,
            title: 'Dhikala Forest Lodge'
        });

    }, []);

    return (
        <div className="px-4 my-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif text-white mb-6 text-center">MAP</h2>
                <div 
                    ref={mapRef} 
                    className="w-full h-[400px] rounded-3xl overflow-hidden"
                    style={{ 
                        backgroundColor: '#D9D9D952',
                        border: '4px solid #8BA888'
                    }}
                ></div>
            </div>
        </div>
    );
}