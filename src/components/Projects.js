import React from 'react';
import '../styles/sections.css'; 
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="content_section">
      <div className='projects-section'>
        <h2>~~~ Projects ~~~</h2>

        <div className='project-columns'>
          <div className='project-column'>
            <h3> ★ School Projects ★ </h3>
            <div className='projects-grid'>
              <div className='project-card'>
                <h4>Bare-Metal OS Kernel in Rust</h4>
                <p className='tech'>Rust, x86 achitecture, VSCode, Git</p>
                <p>Kernel with paging, heap allocator, privilege levels, and user-mode syscalls</p>
              </div>
              <div className='project-card'>
                <h4>YMODEM Protocol Simulator</h4>
                <p className='tech'>C++, Eclipse IDE, GDB, POSIX library</p>
                <p>Multithreaded file transfer simulator with error handling and synchronization</p>
              </div>
              <div className='project-card'>
                <h4>RISC-V Execution Unit</h4>
                <p className='tech'>VHDL, Quartus II IDE, ModelSim</p>
                <p>Designed and tested performance of different adder circuits and RISC ALU with testbench for timing and functional verification</p>
              </div>
              <div className='project-card'>
                <h4>RISC-V Cycle-accurate Pipeline Simulator</h4>
                <p className='tech'>C programming, Linux command line, GVIM</p>
                <p>Simulates pipelined RISC-V CPU with hazard detection and cache modeling</p>
                <a className='repo-link'
                  href='https://github.com/pal-sha/riscv-simulator'
                  target='_blank'
                  rel="noopener noreferrer"
                >Github Repo</a>
              </div>
            </div>
          </div>

          <div className='column-divider'></div>
        
          <div className='project-column'>
            <h3> ★ Personal Projects ★ </h3>
            <div className='projects-grid'>
              <div className='project-card'>
                <h4>AI-Powered Goal Guidance Web App</h4>
                <p className='tech'>React, Gemini AI, Blender, Spline</p>
                <p>AI-Powered web application to assist with goal planning with animated UI integrated with Spline</p>
                <a className='repo-link'
                  href='https://github.com/pal-sha/CloudChaser'
                  target='_blank'
                  rel='noopener noreferrer'
                >Github Repo</a>
              </div>
              <div className='project-card'>
                <h4>AI Shopping & Budgetting Assistant</h4>
                <p className='tech'>Python, Flask, React, MongoDB, Gemini AI, Tesserect OCR</p>
                <p>Web application that provides AI-powered insights on spending and budgetting</p>
              </div>
            </div>
          </div>
        </div>

        <div className='current-projects'>
          <h3> *** What I'm currently working on! ***</h3>
            <div className='projects-grid'>
              <div className='project-card'>
                <h4>Porfolio Website (this one!)</h4>
                <p className='tech'>React, Javascript, plain CSS, VSCode</p>
              </div>
              <div className='project-card'>
                <h4>Rust OS Kernel</h4>
                <p className='tech'>Rust, VSCode, Git</p>
                <p>Working on context switching</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
