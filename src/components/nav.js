import '../styles/styles.css';
import Hamburger from './hamburger';

export default function Nav() {

    return(
        <div>
            {/* Simple menu for navigation. */}
                <div className="navigation">
                    <ul>
                        <li>Front page</li>
                        <li>Projects</li>
                        <li>Work experience</li>
                        <li>Education</li>
                    </ul>
                    <div className="hamburger">
                        <Hamburger />
                    </div>
                </div>
        </div>
    );
          
}