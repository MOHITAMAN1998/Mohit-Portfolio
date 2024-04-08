import React, { useState, useEffect } from "react";
import  {Link}  from "react-scroll";
import logo from "../../assets/logo.png";

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src={logo} height={20} width={20} alt="logoipsum"/>
            </div>
            <a className={`nav_hamburger' ${navActive? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navBar--active--content" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        to="heroSection" 
                        className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navbar--active--content" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        to="MyPortfolio" 
                        className="navbar--content">Portfolio</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navbar--active--content" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500} 
                        to="AboutMe" 
                        className="navbar--content">AboutMe</Link>
                    </li>
                </ul>
            </div>
            <a 
                href="https://github.com/MOHITAMAN1998/resume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary">Resume</a>
        </nav>
    );
}

export default Navbar;
