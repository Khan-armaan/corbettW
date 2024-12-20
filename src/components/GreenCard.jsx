import React from 'react';

const GreenCard = ({ title, text1, text2 ,text3,text4}) => {
  return (
    <div className="bg-[#00580A] rounded-2xl p-12 text-white max-w-7xl mx-auto my-5 
      transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,88,10,0.6)] 
      hover:-translate-y-1">
      <h1 className="font-sans text-4xl mb-6 border-b-2 border-white pb-2 inline-block text-center w-full
        hover:text-yellow-300 hover:scale-110 transition-all duration-300">
        {title}
      </h1>
      
      <p className="font-sans text-lg leading-relaxed">
        {text1}
      </p>
      <p className="font-sans text-lg leading-relaxed">
        {text2}
      </p>
      <p className="font-sans text-lg leading-relaxed">
        {text3}
      </p>
      <p className="font-sans text-lg leading-relaxed">
        {text4}
      </p>
    </div>
  );
};

export default GreenCard;
