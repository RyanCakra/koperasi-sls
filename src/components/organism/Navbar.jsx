import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavItem from '../molecules/NavItem';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu
  const { scrollY } = useScroll();

  // Control the height of the background "wipe" effect
  const backgroundHeight = useTransform(scrollY, [50, 100], ['0%', '100%']);
  const padding = useTransform(scrollY, [0, 100], ['1rem', '0.8rem']);
  const logoSize = useTransform(scrollY, [0, 100], ['3.5rem', '2.5rem']);
  const textSize = useTransform(scrollY, [0, 100], ['1.125rem', '0.875rem']);
  const navItemScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      style={{
        padding,
      }}
      className="fixed w-full top-0 z-10 "
    >
      <motion.div
        style={{
          height: backgroundHeight,
        }}
        className="absolute bg-green-400 inset-0 w-full transition-all duration-500 ease-in-out"
      />

      <div className="fixed md:mx-28 flex justify-between items-center relative z-10">
        {/* Logo Section */}
        <motion.span className="flex items-center">
          <img src="/logo.png" style={{ scale: logoSize }} transition={{ delay: 0.5, duration: 0.3 }} className="rounded-full h-14 w-14" alt="Logo" />
          <motion.span className="ml-2 flex flex-col">
            <motion.p style={{ fontSize: textSize, color: scrolled ? 'black' : 'white' }} className="font-bold self-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.3 }}>
              Koperasi
            </motion.p>
            <motion.span style={{ fontSize: textSize, color: scrolled ? 'black' : 'white' }} className="mt-[-5px] font-bold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.3 }}>
              Sahabat Lingkungan
            </motion.span>
          </motion.span>
        </motion.span>

        {/* Burger Menu Button */}
        <button className="block md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </button>

        {/* Navigation Links */}
        <ul
          as={motion.ul}
          initial={{ opacity: 0, y: -10 }} // Animation when dropdown appears
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`${isMenuOpen ? 'block' : 'hidden'} md:flex gap-4 absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-green-500 md:bg-transparent w-full md:w-auto p-4 md:p-0 rounded-b-lg shadow-lg md:shadow-none`}
        >
          <NavItem href="/about" text="Tentang Kami" scrolled={scrolled} scale={navItemScale} />
          <NavItem href="/simpanan" text="Simpanan" scrolled={scrolled} scale={navItemScale} />
          <NavItem href="/pinjaman" text="Pinjaman" scrolled={scrolled} scale={navItemScale} />
          <NavItem href="/berita" text="Berita" scrolled={scrolled} scale={navItemScale} />
          <NavItem href="/karir" text="Karir" scrolled={scrolled} scale={navItemScale} />
          <NavItem href="/hubungi-kami" text="Hubungi Kami" scrolled={scrolled} scale={navItemScale} />
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
