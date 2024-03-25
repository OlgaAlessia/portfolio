import React, { useState, useEffect } from "react";
import jsonData from "../data.json"
import Education from "./Education"
import "./style_history.css"


function Educations() {

    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const loadData = JSON.parse(JSON.stringify(jsonData.education));
        setEducations(loadData);
    }, []);


    return (

        <section id="education" className="section">

            <div className="title">
                <h2>Education</h2>
            </div>
            <p>
                My education has played a crucial role in shaping my career and providing me with the necessary knowledge and skills to succeed in the professional world.
                I have pursued continuous learning to stay relevant and competitive in the ever-evolving industry landscape.
            </p>
            <div className="educations">
                {educations.map(education => (
                    <Education
                        key={education.id}
                        title={education.title}
                        period={education.period}
                        location={education.location}
                        info={education.info}
                        certificate={education.certificate}
                    />
                ))}
            </div>

            <br /><br />
            <div className="title">
                <h2>Volunteer Experience</h2>
            </div>
            <p>
                As a volunteer, I improved soft skills in a practical setting, and I am helping the community.
            </p>
            <div className="experiences">
                <div className="div-experience">
                    <div className="box-experience" >
                        <div className="company-info">
                            <div className="company-line">
                                <div className="company-title">Member</div>
                                <div className="period">Jun 2022 - present</div>
                            </div>
                            <div className="company-name">Verrazano Kiwanis Club </div>
                        </div>
                        <div className="job-description">
                            <span className="job-info rivela">
                                Managing the website <a href="http://verrazanokiwanis.com/">Verrazano Kiwanis</a>with WordPress. <br />
                                Demonstrated thoroughness, and creativity by design event flyers with Gimp.
                            </span>
                            <br />
                            <div className="skills"><b>Skills:</b>
                                <div className="div-skills">
                                    <div className="skill">• WordPress</div>
                                    <div className="skill">• Gimp</div>
                                    <div className="skill">• Communication</div>
                                    <div className="skill">• Creativity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-experience">
                    <div className="box-experience" >
                        <div className="education-info">
                            <div className="education-line">
                                <div className="education-title">Volunteer</div>
                                <div className="period">Sep 2014 - May 2018 & 2022 - now</div>
                            </div>
                            <div className="education-location">Carl V. Bini Memorial Fund</div>
                        </div>
                        <div className="education-description">
                            <span className="education-info rivela">
                                Develop and execute successful fundraising campaigns.<br/>
                                Cultivate relationships with donors and collaborate with others team members.<br/>
                                Assisted the photo booth in maintaining and troubleshooting any issues that may have come up during the event.
                            </span>
                            <br />
                            <div className="skills"><b>Skills:</b>
                                <div className="div-skills">
                                    <div className="skill">• Attention to details </div>
                                    <div className="skill">• Customer Service</div>
                                    <div className="skill">• Communication</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Educations;