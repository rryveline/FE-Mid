import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="portfolio-container">
      <div className="portfolio-item">
        <img src="/public/images/me.jpeg" alt="Project 1" />
      </div>
      <div className="portfolio-item">
        <img src="/public/images/fam.jpeg" alt="Project 2" />
      </div>
      <div className="portfolio-item">
        <img src="/public/images/skyjpeg.jpeg" alt="Project 3" />
      </div>
      <div className="portfolio-item">
        <img src="/public/images/fotbardepan.JPG" alt="Project 4" />
      </div>
      <div className="portfolio-item">
        <img src="/public/images/menother.jpeg" alt="Project 5" />
      </div>
      <div className="portfolio-item">
        <img src="/public/images/sabat.JPG" alt="Project 6" />
      </div>
    </div>
  </section>
  );
};

export default Portfolio;