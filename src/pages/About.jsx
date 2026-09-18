import Navbar2 from "../layouts/Navbar2/Navbar2";
// import Card from "./components/Card/Card.jsx";
import "../components/Card/Card.css"
import Hero from "../layouts/Header/Header";
import Cards from "../components/Cards/Cards";
import Section from "../components/section_1/Section";
import Footer from "../layouts/Footer/Footer";
import AboutHero from "../layouts/AboutHero/AboutHero";
import SectionTwoForm from "../components/section2/SectionTwoForm";
import SectionThree from "../components/section3/SectionThree";


function About() {
 return (
    <>
      <Navbar2 />
      <AboutHero />
      <SectionTwoForm />
      <SectionThree />
      <Section />
      <Footer />
    

    </>
  )
}
export default About;

    
