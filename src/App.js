import { useState } from 'react';
import './styles/styles.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  // Testing what device user is using. Using this to make the site responsive.

  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container" 
        styles={{overflowY: 'scroll'}}>
      {/* Simple menu for navigation. */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={showMenu ? 'show' : ''}>
        <ul>
          <li><a href="#">Front page</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Work experience</a></li>
          <li><a href="#">Education</a></li>
        </ul>
      </nav>

      {/* <div className="deviceTest">
          {isDesktopOrLaptop && <p>You are using desktop or laptop</p>}
          {isBigScreen && <p>You are using big screen</p>}
          {isTabletOrMobile && <p>You are using a tablet or mobilephone</p>}
      </div> */}
    
      <div>
        Content
      </div>
    </div>
  );
}

export default App;

