import React from "react"; 
import '../styles/sections.css'; 
import '../styles/Education.css';

function Education() {
    return (
        <div className="content_section">
            <div className="education">
                <h2>~~~ Education ~~~</h2>
                <p><strong> → B.A.Sc. Engineering Science, Computer Engineering</strong> - Simon Fraser University</p>
                <p className="indent">(Expected Graduation: Dec. 2026)</p>
                <h3 className="indent">My favourite classes:</h3>
                <ul>
                    <div className="fav-classes">
                        <span className="class-box">Operating Systems</span>
                        <span className="class-box">Real-Time & Embedded Systems Software</span>
                        <span className="class-box">Digital Logic Design</span>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Education;