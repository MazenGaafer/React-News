import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'General', to: '/' },
  { label: 'Sports', to: '/sports' },
  { label: 'Contact', to: '/contact', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 4, verticalAlign: 'middle' }}><path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1m18 0v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0l-9 6l-9-6" stroke="#8e24aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
];

function Navbar() {
  const { generalArticles, sportsArticles } = useContext(NewsContext);
  const badgeCounts = [generalArticles.length, sportsArticles.length, null];

  return (
    <AppBar
      position="static"
      component={motion.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
      sx={{
        background: 'linear-gradient(90deg, #8e24aa 0%, #512da8 100%)',
        boxShadow: '0px 2px 16px 0px rgba(81,45,168,0.10)',
      }}
    >
      <Toolbar
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          minHeight: { xs: 70, sm: 64 },
        }}
      >
        <Typography
          variant="h5"
          component={NavLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 2,
            fontFamily: 'Montserrat, sans-serif',
            transition: 'color 0.2s',
            '&:hover': { color: '#FFD6FA' },
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            mb: { xs: 1, sm: 0 },
          }}
        >
          NewsApp
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {navLinks.map((link, idx) => (
            <motion.div
              whileHover={{ scale: 1.13, rotate: 2 }}
              whileTap={{ scale: 0.97 }}
              key={link.to}
              style={{ marginRight: idx === navLinks.length - 1 ? 0 : 16 }}
            >
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#FFD6FA' : 'white',
                  fontWeight: isActive ? 'bold' : 'normal',
                  fontSize: '1.05rem',
                  marginRight: 8,
                  transition: 'color 0.2s',
                  borderBottom: isActive ? '2.5px solid #FFD6FA' : 'none',
                  paddingBottom: 2,
                  borderRadius: 6,
                  paddingLeft: 4,
                  paddingRight: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                })}
              >
                {link.icon}
                {link.label}
                {badgeCounts[idx] !== null && (
                  <Badge badgeContent={badgeCounts[idx]} color="secondary" sx={{ ml: 1 }} />
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
