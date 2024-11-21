import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
import img2 from "../../assets/images/fam.jpeg";
import img3 from "../../assets/images/skyjpeg.jpeg";
import img4 from "../../assets/images/fotbardepan.JPG";
import img5 from "../../assets/images/menother.jpeg";
import img6 from "../../assets/images/sabat.JPG";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const portfolioRef = ref(db, "portfolio");
    onValue(portfolioRef, (snapshot) => {
      const data = snapshot.val();
      setPortfolio(data);
    });
  }, []);
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src={`data:image/jpeg;base64,${portfolio.image1}`} alt="Project 1" />
        </div>
        <div className="portfolio-item">
          <img src={img2} alt="Project 2" />
        </div>
        <div className="portfolio-item">
          <img src={img3} alt="Project 3" />
        </div>
        <div className="portfolio-item">
          <img src={img4} alt="Project 4" />
        </div>
        <div className="portfolio-item">
          <img src={img5} alt="Project 5" />
        </div>
        <div className="portfolio-item">
          <img src={img6} alt="Project 6" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;