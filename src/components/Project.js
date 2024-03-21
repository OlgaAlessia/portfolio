import React from "react";
import "./Projects.css";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project(props) {

    return (

        <div className="card card--inverse">
            <div className="info mycolorlight">
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>

                {props.testUsername ? (
                    <div className="demo demo--inverse">
                        <p>Username: {props.testUsername}</p>
                        <p>Password: {props.testPassword}</p>
                    </div>
                ) : null}

                <div className="language">
                    {props.languages.map(language => (
                        <div key={language.name}>
                            <i className={language.icon}> </i>
                            <li>{language.name}</li>
                        </div>
                    ))}
                </div>

                <div className="buttons">
                    {props.hrefRender ? (
                        <a target="_blank" rel="noopener noreferrer" href={props.hrefRender} className="btn btn-live">
                            <FontAwesomeIcon icon={faEye} />
                            <span>Live</span>
                        </a>
                    ) : null}
                    {props.hrefCode ? (
                        <a target="_blank" rel="noopener noreferrer" href={props.hrefCode} className="btn btn-source">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Source</span>
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="card__img">
                <img src={props.imgSrc} alt="Thumbnail" />
            </div>
        </div>

    );
}

export default Project;