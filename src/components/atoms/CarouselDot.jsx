import React from 'react';
import { motion } from 'framer-motion';

const CarouselDot = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick} className="relative h-4 w-4 rounded-full mx-1 border-2 border-yellow-400 overflow-hidden">
      {/* Layer untuk background animasi */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-yellow-400"
      />
    </button>
  );
};

export default CarouselDot;
