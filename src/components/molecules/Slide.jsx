import React from 'react';
import Heading from '../atoms/Text/Heading.jsx';
import Button from '../atoms/Button';

function Slide({ title, description, image, onButtonClick }) {
  return (
    <div className="relative flex items-center justify-between w-full h-full px-24">
      <div className="w-1/2 text-left">
        <Heading text={title} />
        <p className="text-lg mt-4">{description}</p>
        <Button text="Call to Action" onClick={onButtonClick} />
      </div>
      <img src={image} alt="Slide Image" className="w-1/2 h-auto" />
    </div>
  );
}

export default Slide;
