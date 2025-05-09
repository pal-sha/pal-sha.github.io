import React, {useState, useEffect} from "react";
import backgroundImg from '../assets/home_background2.jpg';
import '../styles/Home.css';
// import Starfield from 'react-starfield';
import StarfieldCanvas from "./stars"; 


const phrases = [
    "future engineer",
    "exhausted student",
    "part-time bookworm",
    "space fanatic",
    "occasional world traveller"
];

const Home = () => {
    const[index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(timer);
      }, []);

    return (
        // <section id="intro" style={{ backgroundImage: `url(${backgroundImg})` }}>
        //     <div className="intro-content">
        //         <h1>Palak Sharma</h1>
        //         {/* <p>[full-time exhausted engineering student, part time bookworm]</p> */}
        //         <p className="rotating-text">{phrases[index]}</p>
        //     </div>
        // </section>

        // <section id="intro" style={{ position: 'relative', overflow: 'hidden' }}>
        //     <div className="starfield-bg">
        //         <Starfield
        //         starCount={1000}
        //         starColor={[255, 255, 255]}
        //         speedFactor={0.05}
        //         backgroundColor="black"
        //         />
        //     </div>
        //     <div className="intro-content">
        //         <h1>Palak Sharma</h1>
        //         {/* <p>[full-time exhausted engineering student, part time bookworm]</p> */}
        //         <p className="rotating-text">{phrases[index]}</p>
        //     </div>
        // </section>

        <section id="home">
            <StarfieldCanvas starCount = {200} />
            <div className="intro-content">
                <h1>Palak Sharma</h1>
                {/* <p>[full-time exhausted engineering student, part time bookworm]</p> */}
                <p className="rotating-text">{phrases[index]}</p>
            </div>

        </section>
    );
};

export default Home;