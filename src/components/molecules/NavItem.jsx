import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function NavItem({ href, text, scrolled, scale }) {
  const [isAboveMd, setIsAboveMd] = useState(false);

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsAboveMd(window.matchMedia('(min-width: 768px)').matches); // 768px = layar md
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.li
      className={`transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
      style={{ scale }}
      initial={isAboveMd ? { y: 5 } : {}} // Animasi awal hanya jika layar > md
      animate={isAboveMd ? { y: scrolled ? -8 : 0 } : {}} // Hanya animasi jika layar > md
      transition={isAboveMd ? { duration: 0.3, delay: 0.1 } : {}}
    >
      <a href={href} className="font-semibold">
        {text}
      </a>
    </motion.li>
  );
}

export default NavItem;
