import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      style={{
        background: 'linear-gradient(90deg, #8e24aa 0%, #512da8 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '14px 4vw',
        width: '100%',
        marginTop: '40px',
        fontWeight: 'bold',
        fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
        letterSpacing: '1px',
        fontFamily: 'Montserrat, sans-serif',
        boxShadow: '0px -2px 16px 0px rgba(81,45,168,0.10)',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        position: 'relative',
        left: 0,
        bottom: 0,
      }}
    >
      © 2025 Mazen Gaafer. All rights reserved.
    </motion.footer>
  );
}

export default Footer;
