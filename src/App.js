import { useState } from 'react';
import './styles/styles.css';
import { useMediaQuery } from 'react-responsive';
import Nav from './components/nav';

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
    
      <div>
        Content
      </div>
    </div>
  );
}

export default App;

