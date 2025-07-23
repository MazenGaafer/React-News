import React from 'react';

function Notfound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, sans-serif',
      color: '#8e24aa',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: 0 }}>404</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 12 }}>Page Not Found</h2>
      <p style={{ color: '#512da8', fontSize: '1.1rem' }}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default Notfound;
