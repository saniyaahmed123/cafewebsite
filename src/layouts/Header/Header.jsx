// Hero.js
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/src/assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-heading">
          Whisked <span className="hero-accent">Fresh</span><br />
          Every Morning
        </h1>
        <a href="#menu" className="hero-cta">View the Menu</a>
      </div>
    </section>
  );
}

export default Hero;