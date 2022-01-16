import React from 'react';
import coverPhoto from '../../assets/cover/coverPhoto.jpg';
import './About.css';

function About() {
    return (
        <div className="about__sectional">
            <article>
                <h2 id="about">About Me:</h2>
                <div className="about__textContainer">
                    <p className="about__pIndent">
                    I am a seasoned IT professional with more than 10 years of IT experience. I bring a wide array of skills, ranging from Scripting, Web Development (MERN Full Stack), Technical Support, System and Network Administration, Infrastructure/Deployment Project Management, and I am a certified Profession SCRUM Master. I currently work as a Systems Technician for Uline in Hudson, WI. I am working towards getting my certification in Full Stack Web Development from the University of Minnesota College of Continuing and Professional Studies.
                    </p>
                    <p className="about__pIndent">
                    In my free time, I like to spend time with my wife Tia and my son Atlas, going for walks, playing with puzzles, and running around in circles. I'm an avid drummer, having played in multiple bands since 2006 (White Rhino, Leaving Neon, Sheeped, and Grey Fox). I enjoy gaming, both casually and competitively. You can often find me on Discord after the toddler's bedtime hanging out with my friends, either watching their streams or participating in shenanigans. I am also a space enthusiast, and could talk about Origin Theory and the Hubble's Ultra Deep Field photograph for hours.
                    </p>
                    <p className="about__pIndent">
                    I am looking to build my skills in Software and Web Development. Having studied Software Engineering at Michigan Technological University I found my passion in the innate problem solving that is coding and bug-crushing. I enjoy and work well with others and look forward to joining a collaborative, talented team of developers.
                    </p>
                </div>
            </article>

            <article className="about__certificationsContainer">
                <h2>Certifications:</h2>
                <div>
                    <p className="about__cert">
                        Full Stack Web Development
                    </p>
                    <p className="about__certDescription">
                        University of Minnesota College of Continuing and Professional Studies
                    </p>
                    <p className="about__cert">
                        Certified Professional SCRUM Master I
                    </p>
                    <p className="about__certDescription">
                        Scrum.org
                    </p>
                </div>
            </article>

            <img src={coverPhoto} style={{ maxWidth: "100%", maxHeight: "400px" }} alt="cover" />
            
        </div>
    )
}

export default About;