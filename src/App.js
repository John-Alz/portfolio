import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/Home/Home.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer";
import img from "./Img/circulo.png";
import Projects from "./Components/Projects/Projects";
import SoftSkills from "./Components/SoftSkills/SoftSkills";
import Contact from "./Components/Contact/Contact";
import InfoMe from "./Components/InfoMe/InfoMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <InfoMe />
      <SoftSkills />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
