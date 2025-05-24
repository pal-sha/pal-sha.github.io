// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import './styles/styles.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <NavBar /> 
      <Banner />
      <main>
        <section id="home"><Home /></section>
        <section id="aboutme"><AboutMe/></section>
        <section id="education"><Education /></section>
        {/* <section id="experience"><Experience /></section> */}
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
