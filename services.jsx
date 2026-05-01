import React from 'react';

const Services = () => {
  const services = [
    { title: "Web Development", desc: "HTML, CSS, aur React JS mein modern websites ki tayari." },
    { title: "Responsive UI", desc: "Aisi designs jo mobile aur laptop dono par perfect dikhti hain." },
    { title: "Freelance Solutions", desc: "Fiverr aur doosray platforms ke liye professional projects." }
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f4f7f6' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px', fontSize: '2.5rem' }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
        {services.map((s, i) => (
          <div key={i} className="service-card" style={{
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            width: '280px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}>
            <h3 style={{ borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>{s.title}</h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;