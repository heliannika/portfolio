import { useState } from 'react';
import './styles/styles.css';
import { useMediaQuery } from 'react-responsive';
import Nav from './components/nav';
import Projects from './pages/projects';
import image from './images/portfolioonkuva(1).jpg';
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPg from './pages/projects';

function App() {

  // Testing what device user is using.

  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="container" 
        styles={{overflowY: 'scroll'}}>
        <div className="nav">
            <Nav />
        </div>
      {/* <div className="deviceTest">
          {isDesktopOrLaptop && <p>You are using desktop or laptop</p>}
          {isBigScreen && <p>You are using big screen</p>}
          {isTabletOrMobile && <p>You are using a tablet or mobilephone</p>}
      </div> */}
    
      <div className="content">
        <header className="header">
          <h1 className="name">Heli Rajamäki</h1>
          <div className="image">
            <img src={image} alt="Image" />
          </div>
        </header>
        <header className="header">
          <h1 className="aboutme">Business information technology student graduating in 2025 & future multitalent in IT field looking for new opportunities!</h1>
          <p className="description">HTML - CSS - React - Vanilla JS - Python - PHP - SQL - UI/UX design - Web design</p>
        </header>
      </div>
    </div>
  );
}

export default App;

