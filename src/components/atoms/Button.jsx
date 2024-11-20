import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Button({ text, onClick, link }) {
  return (
    <Link to={link}>
      <motion.button
        onClick={onClick}
        whileHover="hover"
        variants={{
          hover: {
            x: 0,
            transition: { type: 'spring', stiffness: 300 },
          },
        }}
        className="relative flex items-center px-3 py-3 bg-yellow-400 shadow-xl text-white font-bold rounded-full shadow-md overflow-hidden"
      >
        <motion.div
          initial={{ x: -100 }}
          variants={{
            hover: {
              x: 5,
              transition: { type: 'spring', damping: 14 },
            },
          }}
          className=" bg-green-400 border border-black  rounded-full p-1"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.div>
        <motion.span
          className="flex items-center text-black"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          variants={{
            hover: {
              x: 15,
              transition: { type: 'spring', stiffness: 300 },
            },
          }}
        >
          {text}
        </motion.span>
        <motion.div
          initial={{ x: 0 }}
          variants={{
            hover: {
              x: 100,
              transition: { type: 'spring', damping: 10 },
            },
          }}
          className="ml-2 bg-green-400 border border-black rounded-full p-1"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </motion.div>
      </motion.button>
    </Link>
  );
}

export default Button;
