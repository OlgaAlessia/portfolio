import React from "react";
import "./style_history.css"

function Education(props) {

    return (

        <div className="div-education">
            <div className="box-education" >
                <div className="education-info">
                    <div className="education-line">
                        <div className="education-title">{props.title}</div>
                        <div className="period">{props.period}</div>
                    </div>
                    <div className="education-location">{props.location}</div>
                </div>

                {(props.info || props.certificate) ? (
                    <div className="education-description">
                        {props.info ? (
                            <span className="education-info rivela" dangerouslySetInnerHTML={{ __html: props.info }}/>
                        ) : null}
                        {props.certificate ? (
                            <a target="_blank" rel="noreferrer" href={props.certificate} className="btn btn-certificate">
                                <span>Certificate</span>
                            </a>
                        ) : null}

                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Education;