import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: 'linear-gradient(to bottom, #ffffff, #f0f4f8)',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3.5rem', color: '#2c3e50', marginBottom: '10px' }}>
        Welcome to My <span style={{ color: '#6e8efb' }}>Portfolio</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d', maxWidth: '600px', lineHeight: '1.6' }}>
        I am a Web Developer specializing in React and modern UI/UX design. 
        I build high-quality websites that are fast, responsive, and user-friendly.
      </p>
      <div style={{ marginTop: '30px' }}>
        <button style={{ 
          padding: '12px 30px', 
          fontSize: '1rem', 
          backgroundColor: '#6e8efb', 
          color: 'white', 
          border: 'none', 
          borderRadius: '25px', 
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(110, 142, 251, 0.4)'
        }}>
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default Home;