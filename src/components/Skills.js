import React from 'react';
import '../styles/sections.css'; 
import '../styles/Skills.css'; // Create this file

function Skills() {
  return (
    <div className='content_section'>
      <div className="skills-section">
        <div className='skills-title'><h2>~~~ Skills ~~~</h2></div>

        <div className="skills-grid">
          <div className="skills-left">

            <div className="skills-card">
              <h3>Technical Skills</h3>
              <p><strong>Languages:</strong> C, C++, Python, Rust, Java, JavaScript, VHDL, Verilog, MATLAB</p>
              <p><strong>Frameworks:</strong> React JS, P5.js, ML5.js, NumPy, Pandas, Sklearn, JUnit, Wordpress, POSIX</p>
              <p><strong>Tools:</strong> Linux/Unix, Git, Apache SVN, Jira, VS Code, Visual Studio, Eclipse, JetBrains IDEs</p>
            </div>

            <div className="skills-card">
              <h3>Soft Skills</h3>
              <ul>
                <li>Team player</li>
                <li>Clear communicator</li>
                <li>Problem solver</li>
              </ul>
            </div>

          </div>

          <div className='skills-right'>

            <h3>My current endeavors</h3>
              <div className='progress-skill'>
                <span>Verilog</span>
                <div className='progress-bar'>
                  <div className='progress-fill' style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className='progress-skill'>
                <span>React development</span>
                <div className='progress-bar'>
                  <div className='progress-fill' style={{ width: '30%' }}></div>
                </div>
              </div>
              <p>^This website is proof!</p>
              <div className='progress-skill'>
                <span>Embedded Systems</span>
                <div className='progress-bar'>
                  <div className='progress-fill' style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className='progress-skill'>
                <span>Learning names of songs</span>
                <div className='progress-bar'>
                  <div className='progress-fill' style={{ width: '0%' }}></div>
                </div>
              </div>
              <p>(This is not going so well)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
