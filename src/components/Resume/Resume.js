import React from 'react';
import './Resume.css';
import resume from '../../assets/Ani-Holmes-Resume.pdf';

function Resume() {
    return (
        <div>
            <h1>Resume <a className="resume__downloadLink" href="../../assets/images/Ani-Holmes-Resume.pdf" download="Download Resume">(Download)</a></h1>
            <iframe title="Resume Viewer" src={resume} width="100%" height="500px"></iframe>
        </div>
    )
}

export default Resume;