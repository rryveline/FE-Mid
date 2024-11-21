import React from 'react';
import img1 from "../../assets/images/me.jpeg";
import img2 from "../../assets/images/fam.jpeg";
import img3 from "../../assets/images/skyjpeg.jpeg";
import img4 from "../../assets/images/fotbardepan.JPG";
import img5 from "../../assets/images/menother.jpeg";
import img6 from "../../assets/images/sabat.JPG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src={img1} alt="Project 1" />
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