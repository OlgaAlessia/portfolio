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
                        certificate={ education.certificate}
                    />
                ))}

            </div>
        </section>
    );
}

export default Educations;