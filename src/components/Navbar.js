import React, {useState, useEffect} from "react";
import '../styles/Navbar.css'
import {
    FaHome, 
    FaGraduationCap, 
    FaBriefcase,
    FaCode,
    FaTools, 
    FaEnvelope, 
    FaRegUserCircle
} from 'react-icons/fa';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ul>
                <li><a href="#home"><FaHome/>Home</a></li>
                <li><a href="#aboutme"><FaRegUserCircle/>AboutMe</a></li>
                <li><a href="#education"><FaGraduationCap/>Education</a></li>
                {/* <li><a href="#experience"><FaBriefcase/>Experience</a></li> */}
                <li><a href="#projects"><FaCode/>Projects</a></li>
                <li><a href="#skills"><FaTools/>Skills</a></li>
                <li><a href="#contact"><FaEnvelope/>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;