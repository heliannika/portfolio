import { useState } from 'react';
import ReactDOM from "react-dom/client";
import './styles/styles.css';
import { useMediaQuery } from 'react-responsive';
import Nav from './components/nav';
import image from './images/portfolioonkuva(1).jpg';
import { Outlet, Link, BrowserRouter, Route, Routes, HashRouter as Router } from "react-router-dom";

import Projects from './pages/projects';
import Workexperience from './pages/workexperience';
import Education from './pages/education';
import Home from './pages/home';

function App() {

  // Testing what device user is using.

  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
      <Router>
        <div className="nav">
            <Nav />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="projects" element={<Projects />} />
                <Route path="workexperience" element={<Workexperience />} />
                <Route path="education" element={<Education />} />
              </Routes>
        </div>
      {/* <div className="deviceTest">
          {isDesktopOrLaptop && <p>You are using desktop or laptop</p>}
          {isBigScreen && <p>You are using big screen</p>}
          {isTabletOrMobile && <p>You are using a tablet or mobilephone</p>}
      </div> */}
      </Router>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

