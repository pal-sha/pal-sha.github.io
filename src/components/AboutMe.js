import React from "react";
import '../styles/AboutMe.css';

function AboutMe() {

    return(
        <div className="about-me">
            <div className="about-columns">
                <div className="about-heading">
                    <h2>Hi! I'm Palak!</h2>
                </div>
                <div className="about-content">
                    <p>
                        I'm a budding computer engineer, completing my undergrad at Simon Fraser University. 
                        I'm well-versed in computer achitecture fundamentals, digital logic design, real time operating systems, and OOP. 
                        Currently, I am diving into embedded systems development, artificial intelligence, and web development (like this website!).
                    </p>
                    <p>
                        When I am not glued to my laptop for hours finishing up assignments and labs, I can be found curled up with my current read (mostly fantasy or comtemporary) 
                        or looking far away at distant mountains. 
                    </p>
                </div>
            </div>


            <div className="about-skills-interests">
                <div className="section-block">
                    <h3>Things I'm Good At</h3>
                    <div className="tag-container">
                        <span className="tag"><strong>C++ and Python programming</strong></span>
                        <span className="tag"><strong>Low level programming</strong></span>
                        <span className="tag"><strong>Quickly picking up new skills</strong></span>
                        <span className="tag"><strong>Reading 400 pages in a day</strong></span>
                        <span className="tag"><strong>Never knowing names of songs</strong></span>
                    </div>
                </div>

                <div className="section-block">
                    <h3>Things I Like</h3>
                    <div className="tag-container">
                        <span className="tag"><strong>RTOS</strong></span>
                        <span className="tag"><strong>Tinkering around with different programming languages</strong></span>
                        <span className="tag"><strong>Digital systems design</strong></span>
                        <span className="tag"><strong>Anything and everything about computers</strong></span>
                        <span className="tag"><strong>Books, books, and more books</strong></span>
                        <span className="tag"><strong>Mountains</strong></span>
                        <span className="tag"><strong>Puffins</strong></span>
                        <span className="tag"><strong>Ice caps</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;