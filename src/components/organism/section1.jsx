import React from 'react';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';

function Section() {
  // Variants untuk animasi teks (swipe up dari bawah ke atas)
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <div className="mx-24 items-center py-10">
      <div className="shadow-xl">
        <h1 className="flex text-green-500/80 justify-center text-5xl font-bold">Feature</h1>
        <div className="grid grid-cols-3 gap-4 px-10 py-4">
          {Array(3)
            .fill('')
            .map((_, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden">
                {/* Gambar */}
                <img src="/src/assets/images/sigma.png" className="w-full h-full rounded-xl object-cover" alt={`Feature ${index + 1}`} />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  {/* Teks */}
                  <motion.div
                    className="text-white text-lg font-bold flex items-center justify-center w-full h-full"
                    variants={textVariants}
                    initial="initial"
                    animate="initial"
                    whileHover="hover" // Framer Motion tetap digunakan untuk animasi teks
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col justify-center items-center gap-3">
                      Feature {index + 1}
                      <Button text="go" />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
