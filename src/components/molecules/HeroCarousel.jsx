import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselDot from '../atoms/CarouselDot';
import Button from '../atoms/Button';

const slides = [
  {
    title: 'Daur Ulang Sampah',
    description: 'Menjadi Produk Ramah Lingkungan',
    image: '/images/banner.png',
  },
  {
    title: 'Bersama Koperasi SLS',
    description: 'Membangun Lingkungan yang Lebih Baik',
    image: '/images/sukuna.jpg',
  },
  {
    title: 'Gabung Sekarang',
    description: 'Untuk Masa Depan yang Lebih Hijau',
    image: '/images/sigma.png',
  },
];

const HeroCarousel = () => {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

  const handleNextSlide = () => {
    setCurrentSlide([currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1]);
  };

  const handlePrevSlide = () => {
    setCurrentSlide([currentSlide === 0 ? slides.length - 1 : currentSlide - 1, -1]);
  };

  const handleDotClick = (index) => {
    setCurrentSlide([index, index > currentSlide ? 1 : -1]);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) handleNextSlide();
    if (info.offset.x > 100) handlePrevSlide();
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleNextSlide();
    }, 50000);

    return () => clearInterval(autoSlideInterval); // Membersihkan interval saat komponen dihapus
  }, [currentSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1, duration: 0.3 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="relative h-[78vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            {currentSlide === 0 ? (
              <motion.div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-6 md:px-24 gap-4">
                {/* Teks */}
                <motion.div className="w-full text-black text-center md:text-left mt-6 md:mt-0">
                  <motion.h1 initial={{ opacity: 0, x: -120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-2xl md:text-5xl font-bold">
                    Bersama Membangun Ekonomi, Bersama Menuju Kesejahteraan.
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-base md:text-lg mt-4">
                    Selamat datang di Koperasi Sahabat Lingkungan Sejahtera! Mari bergabung bersama kami untuk membangun ekonomi lokal yang kuat dan berkelanjutan, demi kesejahteraan bersama.
                  </motion.p>
                  <div className="mt-2 md:mt-6 flex items-center justify-center md:justify-start py-2">
                    <Button text="Daftar Sekarang" />
                  </div>
                </motion.div>

                {/* Gambar */}
                <div className="h-full md:h-3/4 w-full flex items-end md:justify-center  md:items-center">
                  <motion.img
                    src={slides[currentSlide].image}
                    alt="Slide Image"
                    className="w-full h-3/4 md:h-full rounded-3xl mt-6 md:mt-0"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
                {/* Overlay hitam */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Kontainer teks */}
                <motion.div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                  <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">{slides[currentSlide].title}</h1>
                  <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">{slides[currentSlide].description}</p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        {slides.map((_, index) => (
          <CarouselDot key={index} isActive={currentSlide === index} onClick={() => handleDotClick(index)} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
