import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./NavBar.css";

/** Navigation bar for site. Shows up on every page. */

function NavBar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 670);
    const [showNavbar, setShowNavbar] = useState(false);
    const [icon, setIcon] = useState(faBars);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 670);
        }

        // Add event listener to window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowNavbar = () => {

        if (isMobile) {
            if (icon === faBars) {
                setIcon(faXmark);
            } else {
                setIcon(faBars);
            }
        }
        setShowNavbar(!showNavbar);
    }

    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">

                    <div className="logo">
                        <a id="logo" href="#home">
                            <img src={logo} className="imgLogo" alt="logo" />
                        </a>
                    </div>

                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <FontAwesomeIcon icon={icon} size='2x' />
                    </div>

                    <div className={`nav-elements  ${showNavbar && 'show'}`}>
                        <ul>
                            <li onClick={handleShowNavbar}>
                                <a href="/#projects">Projects</a>
                            </li>
                            <li onClick={handleShowNavbar}>
                                <a href="/#experience">Experience</a>
                            </li>
                            <li onClick={handleShowNavbar}>
                                <a href="/#education">Education</a>
                            </li>
                            <li onClick={handleShowNavbar}>
                                <a href="/#contacts">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
