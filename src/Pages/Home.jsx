import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import HomeContainer from "../Components/HomeContainer/HomeContainer";
import { motion } from 'framer-motion';
import TechnologiesList from "./Expertise";

function Home() {

  return (
    <div id="home" className="relative gap-7">
      <HomeContainer/>
      <About/>
      <TechnologiesList/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default Home;