import Zone from "../components/Zone";
import dhikalaImg from '../assets/dhikala.jpeg'

import garjiyaImg from '../assets/garjiya.jpg'
import sitabaniImg from '../assets/sitabani.webp'
import durgaDeviImg from '../assets/durga-devi.webp'
import bijraniImg from '../assets/bijrani.jpg'
import jhirnaImg from '../assets/jhirna.jpg'
import pakhroImg from '../assets/pakhro.jpg'
import dhelaImg from '../assets/dhela.jpg'

export default function ZonePage() {
  return (
    <div className="container mx-auto p-4 lg:p-8 mt-20 lg:mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center">
        <Zone zone='Dhikala' zoneText='Dhikala is the main zone of Corbett National Park. It is the most popular zone for tourists.' 
        image={dhikalaImg} />

        <Zone zone='Bijrani' zoneText='Bijrani Zone is the first choice among day tourists. Its entrance is at Aamdanda .'
         image={bijraniImg} />

        <Zone zone='Jhirna' zoneText='Located on the southern edge of the Corbett National Park.' 
        image={jhirnaImg} />

        <Zone zone='Garjiya' zoneText='Girija is a new safari zone being added which is now available for tourists for enjoying the safari.'
         image={garjiyaImg} />

        <Zone zone='Sitabani' zoneText=' The zone is treated as the Buffer area of the tiger reserve and is open for everyone visiting here.' 
        image={sitabaniImg} />

        <Zone zone='Phato' zoneText='As the world opens up to travel and venture daily new exciting aspects beyond beauty .' 
          image={pakhroImg} />

        <Zone zone='Dhela' zoneText='The Dhela zone is the latest added zone in the tourism zones of the Corbett National Park.' 
        image={dhelaImg} />

        <Zone zone='Durga Devi' zoneText='the zone is situated on the northeast periphery of the Corbett forest.' 
        image={durgaDeviImg} />
      </div>
    </div>
  )
}