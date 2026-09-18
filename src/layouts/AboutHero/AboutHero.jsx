import React from 'react';
import './AboutHero.css';
import heroBanner from '../../assets/image.png';
import Button from '../../components/Button/Button';
function AboutHero() {
  return (
    <section className="about-hero-section ">
      <div className="container-fluid about-hero-container">
        <div className="row align-items-center">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-5 col-md-6 about-hero-text-col">
            <h1 className="about-hero-title">
              Entrepreneur Magazine's Number One Bakery Brand
            </h1>
            <p className="about-hero-description">
              Has over 300 locations open in over 29 states and rapidly expanding into new markets.
            </p>
           <Button text="Read more" />
          </div>

          {/* Right Column: Image Card Box */}
          <div className="col-lg-7 col-md-6 about-hero-image-col">
            <div className="about-hero-card">
              <img 
                src={heroBanner} 
                alt="Bakery employee smiling with a cake" 
                className="about-hero-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;