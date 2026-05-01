import React, { useState, useEffect } from 'react';
import style from "./About.module.css";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        // Sirf wo products rakhein jin ki images placeholder (600/400) nahi hain
        const filteredData = json.filter(item => 
          item.images[0] && 
          !item.images[0].includes("600") && 
          !item.images[0].includes("400")
        );
        setData(filteredData.slice(0, 12)); // Pehle 12 products dikhane ke liye
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <div className={style.pageContainer}>
      <h1 className={style.pageTitle}>About page</h1>
      <div className={style.gridContainer}>
        {data.map((item) => (
          <div key={item.id} className={style.productCard}>
            <div className={style.textInfo}>
              <h3 className={style.titleText}>{item.title}</h3>
              <p className={style.priceText}>${item.price}</p>
            </div>
            <div className={style.imgWrapper}>
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className={style.mainImg} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;