import React, { useEffect } from "react";
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import myIMG from '../assets/myPicture.jpg';
import Pdf from '../assets/OlgaQuaranta_Resume.pdf';
import "./Home.css";

function Home() {

    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Olga Quaranta', 'Software Engineer.', 'Web Developer.'],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (

        <section id="home" className="section">

            <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-7">
                    <h1>Hello, I am <br />
                        <span className="typewriter mycolor" ref={el}></span></h1>
                    <br />
                    <p className="mb-4">
                        Welcome to my portfolio page. Browse to my professional and learning journey as a Software Engineer and Developer.
                        Here you will find the projects I have completed. <br />
                    </p>
                    <div className="buttons mb-4">
                        <a href="/#contacts" className="btn btn-hireme">Hire me</a>
                        <Link to={Pdf} className="btn btn-resume" target="_blank" >Resume</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                    <img className="myImg" alt="myImage" src={myIMG} />
                </div>
            </div>

        </section>

    );
}

export default Home;