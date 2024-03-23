import { useState } from 'react';
import '../styles/styles.css';
import Hamburger from './hamburger';
import { useMediaQuery } from 'react-responsive';
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ProjectsPg from '../pages/projects';

export default function Nav() {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    // Toggling hamburger menu
    const toggleHamburgerMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    const menuStyles = {
        display: isHamburgerOpen && isTabletOrMobile ? 'block' : 'none',
        backgroundColor: '#d1cfe2',
        height: '100vh',
        width: '50vw',
        position: 'absolute',
        zIndex: '9999',
        top: '50px'
    };

    return(
        <div>
             {/* Simple menu for navigation. */}
                    <div className="navigation">
                        <nav>
                            <ul style={{ display: isTabletOrMobile ? 'none' : 'block' }}>
                                <li>Front page</li>
                                <li>Projects</li>
                                <li>Work experience</li>
                                <li>Education</li>
                            </ul>
                        </nav>

                        <div className="hamburger" onClick={toggleHamburgerMenu}>
                            <Hamburger />
                        </div>
                    </div>

                    {/* Adding pages to hamburger menu. */}
                    <div style={menuStyles}>
                        <ul>
                            <li>Front page</li>
                            <li>Projects</li>
                            <li>Work experience</li>
                            <li>Education</li>
                        </ul>
                    </div>
        </div>
    );
          
}