import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skill/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
