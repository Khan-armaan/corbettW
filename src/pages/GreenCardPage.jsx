import React from 'react';
import GreenCard from '../components/GreenCard';

const GreenCardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <GreenCard
        title="Corbettroar"
        text="Corbett Roar Safari, your trusted partner for the best Jim Corbett packages! We specialize in creating unforgettable experiences for clients from around the world. Whether you're looking to book resorts, safaris, car rentals, or complete Corbett tour packages, we have you covered. Our team of experts provides personalized guidance to help you choose the perfect package—be it budget-friendly, mid-range, or luxurious. Plan your dream Jim Corbett adventure with Corbett Roar Safari today!"
      />

      <GreenCard
        title="Contact Us Now"
        text={`Ayaan - 6396021400 , Arif - 9837578586\n\ncorbettroar@gmail.com\n\nNear lakhanpur chungi, aamdanda road, ramnagar(Nainital), 244715`}
      />
    </div>
  );
};

export default GreenCardPage;
