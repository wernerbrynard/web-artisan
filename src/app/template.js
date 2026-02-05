'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.99, filter: 'blur(5px)' }}
      animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        mass: 1 
      }}
    >
      {children}
    </motion.div>
  );
}
