import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_mazen_gaafer_/',
    color: '#E1306C',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" fill="#E1306C"/></svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/mazen.gaafer.9/',
    color: '#1877F3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M13.5 21v-7h2.25l.25-2.25H13.5V9.5c0-.6.2-1 .95-1H16V6.5h-1.7C12.1 6.5 11.5 7.3 11.5 8.7V11H9.5v2.25h2v7h2Z" fill="#1877F3"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mazen-ga3fer-833a88275/',
    color: '#0A66C2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6.94 6.5a1.44 1.44 0 1 1 0-2.88a1.44 1.44 0 0 1 0 2.88ZM4.5 8.25h4.88v11.25H4.5V8.25Zm6.75 0h4.67v1.54h.07c.65-1.23 2.24-2.53 4.6-2.53c4.92 0 5.83 3.24 5.83 7.45v8.79h-4.88v-7.8c0-1.86-.03-4.25-2.59-4.25c-2.6 0-3 2.03-3 4.12v7.93h-4.88V8.25Z" fill="#0A66C2"/></svg>
    ),
  },
];

function Contact() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 0' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: '#8e24aa', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', fontSize: '2.1rem', marginBottom: 24, textAlign: 'center', letterSpacing: 1.2 }}
      >
        Contact Me
      </motion.h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        {socialLinks.map(link => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.13, boxShadow: `0 4px 24px 0 ${link.color}33` }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#fff',
              borderRadius: 12,
              padding: '12px 22px',
              color: link.color,
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 2px 12px 0 rgba(81,45,168,0.07)',
              border: `1.5px solid ${link.color}`,
              transition: 'all 0.2s',
              minWidth: 120,
              justifyContent: 'center',
            }}
          >
            {link.icon}
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Contact; 