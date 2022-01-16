import React from 'react';
import './Resume.css';
import resume from '../../assets/Ani-Holmes-Resume.pdf';

function Resume() {
    return (
        <div className="resume__wrapper">
            <h2>Resume:<a className="resume__downloadLink" href="../../assets/images/Ani-Holmes-Resume.pdf" download="Download Resume">(Download)</a></h2>
            <iframe title="Resume Viewer" src={resume}></iframe>
        </div>
    )
}

export default Resume;