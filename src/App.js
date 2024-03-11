import './styles/styles.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  // Testing what device user is using. Using this to make the site responsive.

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="container">

      <nav></nav>

        <div className="deviceTest">
            {isDesktopOrLaptop && <p>You are using desktop or laptop</p>}
            {isBigScreen && <p>You are using big screen</p>}
            {isTabletOrMobile && <p>You are using a tablet or mobilephone</p>}
        </div>
    
      <div>
        kdfjsdkfkj
        sjfdfjdsfiiofiodfuiodfuiod
        dklfdfdfjdfjd
        dfkdfkdjkdfjdf
        dfkdfkdjkdfjdfkd
        idfhidfhidfhdifh
        dhfdfhidfhi
        dfihdfidfdhfu
        ifhidfhidfhidfh
        dfhidfhidfhidf
        kdfidfhidhdifhdif
      </div>
    </div>
  );
}

export default App;

