import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import CTA from "../../sections/CTA";

const Home = () => {
  return (
    <div className="space-y-l5">
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <CTA />
    </div>
  );
};

export default Home;
