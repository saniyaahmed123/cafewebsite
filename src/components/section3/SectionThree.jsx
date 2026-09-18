import React from 'react';
import './SectionThree.css';
import Button from '../Button/Button';

function SectionThree() {
  return (
    <section className="section-three-container">
      <div className="container py-5">
        
        {/* Section Heading & Gold Underline */}
        <div className="text-center mb-5">
          <h2 className="section-three-title">Why Paris Baguette?</h2>
          <div className="title-underline"></div>
        </div>

        {/* Content Row: Image Left, Text Right */}
        <div className="row align-items-center">
          
          {/* Left Column: Image Card */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <div className="section-three-img-card">
              <img 
                src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious strawberry cake slice" 
                className="section-three-img"
              />
            </div>
          </div>

          {/* Right Column: Descriptive Text */}
          <div className="col-lg-6">
            <p className="section-three-text">
              Paris Baguette does two things better than any other bakery/café franchise: a comfortable, inviting guest experience and the highest-quality baked goods and coffees. While other bakery concepts continue to transition to eateries, leaving the lucrative segment largely free of competition, Paris Baguette remains focused on its mission to bring expertly crafted baked and brewed goods to guests through a warm and welcoming bakery café experience that delivers joy to everyone.
            </p>
            <p className="section-three-text">
              Paris Baguette has decades of experience, a globally beloved brand name with its over 4,000 cafes, a track record of success, and a commitment to excellence.
            </p>
            <Button text="order now" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default SectionThree;