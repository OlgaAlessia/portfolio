import React, { useState } from "react";
import "./Contacts.css";
import Alert from "../common/Alert";

// get our fontawesome imports
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import emailjs from '@emailjs/browser'

function Contacts() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState([]);
    const [stateMessage, setStateMessage] = useState([]);

    async function sendEmail (e) {
        e.persist();
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        ).then(result => {
            console.debug(result);
            setStateMessage(['Message successfully sent!']);
            setIsSubmitting(true);
            setTimeout(() => {
                setStateMessage([]);
                setIsSubmitting(false);
            }, 2000);
        }).catch(error => {
            console.debug(error);
            setErrors(['Something went wrong, please try again later']);
            setIsError(true);
            setTimeout(() => {
                setErrors([]);
                setIsError(false);
            }, 2000);
        });
        // Clears the form after sending the email
        e.target.reset();
    }

    return (
        <section id="contacts" className="section">

            <div className="title">
                <h2>Get in Touch</h2>
            </div>

            <div className="row justify-content-around mt-4">
                <div className="other-info col-md-6 order-md-1">
                    <div className="d-flex">
                        <p>
                            If you have any questions, feedback or would like to discuss potential
                            collaboration, don't hesitate to reach out. <br />
                            I look forward to connecting with you!
                        </p>
                    </div>
                    <div className="d-flex mb-2">
                        <FontAwesomeIcon icon={faLocationDot} className="align-self-center" />
                        Based in Staten Island, NY.
                    </div>
                    <div className="d-flex mb-2">
                        <FontAwesomeIcon icon={faPhone} className="align-self-center" />
                        <a href="tel: +1 (929) 422 - 3044 ">9294223044</a>
                    </div>
                    <div className="d-flex mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="align-self-center" />
                        <a href="mailto:quaranta.olga@gmail.com"> quaranta.olga@gmail.com</a>
                    </div>

                    <div className="social mt-4 mb-4">
                        <a href="https://github.com/OlgaAlessia" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/olga-quaranta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
                {
                    isSubmitting ? <Alert type='success' messages={stateMessage} /> : null
                }
                {
                    isError ? <Alert type="danger" messages={errors} /> : null
                }
                <form className="form col-md-6 col-lg-5 order-md-2" onSubmit={sendEmail}>
                    <div className="form-group">
                        <input name="firstname" id="firstname" type="text" required placeholder="First Name *" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="lastname" id="lastname" type="text" required placeholder="Last Name*" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="email_from" id="email_from" type="email_from" required placeholder="Email *" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="subject" id="subject" type="text" required placeholder="Subject *" />
                    </div>
                    <br />
                    <div className="form-group">
                        <textarea name="message" id="message" cols="30" rows="9" required placeholder="Message *"></textarea>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <button className="mybtn " type="submit">Send</button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contacts;