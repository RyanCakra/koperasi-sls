import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }) => {
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioningOut(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isTransitioningOut && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-30 bg-yellow-400"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        )}
      </AnimatePresence>

      {isTransitioningOut && (
        <AnimatePresence>
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 bg-yellow-500/90"
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          <motion.div
            className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-40 bg-yellow-500/80"
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          />

          <motion.div
            className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-30 bg-yellow-700"
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          />
        </AnimatePresence>
      )}

      {children}
    </>
  );
};

export default PageWrapper;
