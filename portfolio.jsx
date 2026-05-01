import React from 'react';

const Portfolio = () => {
  const projects = [
    { name: "Sticky Notes App", tech: "React & Firebase", desc: "Full CRUD operations aur authentication ke sath." },
    { name: "Professional Clock", tech: "JavaScript", desc: "Digital aur Analogue clock jo system time follow karti hai." },
    { name: "Product Landing Page", tech: "React & Bootstrap", desc: "Modern UI/UX design showcase project." }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <h2 style={{ textAlign: 'center', color: '#34495e', marginBottom: '40px' }}>Recent Work</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            borderTop: '5px solid #6e8efb',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'left'
          }}>
            <span style={{ color: '#6e8efb', fontWeight: 'bold', fontSize: '0.8rem' }}>{p.tech}</span>
            <h3 style={{ margin: '10px 0', color: '#2c3e50' }}>{p.name}</h3>
            <p style={{ color: '#7f8c8d' }}>{p.desc}</p>
            <button style={{ 
              backgroundColor: '#6e8efb', 
              color: 'white', 
              border: 'none', 
              padding: '8px 15px', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;