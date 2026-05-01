import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
      <div style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '15px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Get In Touch</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
          <button type="submit" style={{ 
            padding: '12px', 
            backgroundColor: '#a777e3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            fontSize: '1rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// Input fields ke liye common style
const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  outline: 'none',
  width: '100%'
};

export default Contact;