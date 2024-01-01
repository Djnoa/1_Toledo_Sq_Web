import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./navibar.css";

const NavBar = () => {
    const navbarRef = useRef(null); // Ref for the navbar

    useEffect(() => {
        // Fade-in animation for the navbar
        gsap.fromTo(navbarRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
    }, []);

    return (
        <nav className="navibar" ref={navbarRef}>
            <a className="navi-link" href="#">Home</a>
            <a className="navi-link" href="#">News</a>
            <a className="navi-link" href="#">Events</a>
            <a className="navi-link" href="#">Proshop</a>
            <a className="navi-link" href="#">Blog</a>
            <a className="navi-link" href="#">Contact Us</a>
        </nav>
    );
};

export default NavBar;