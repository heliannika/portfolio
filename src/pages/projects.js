import wireframe1 from '../images/wireframingportfolio(2).jpg';
import wireframe2 from '../images/wireframingportfolio(3)(1).jpg';
import wireframe3 from '../images/wireframingportfolio(4)(1).jpg';
import wireframe4 from '../images/wireframingportfolio(5)(1).jpg';

const Projects = () => {
    return(
        <div className="container" 
            styles={{overflowY: 'scroll'}}>
                <div className="content">
                <header className="header">
                    <h1 className="name">Projects</h1>
                    <p className="projectname">Creating this site you're currently browsing</p>
                    <p className="projectdescription">Check the code on Github: <a target='_blank'
                        rel='noopener noreferrer' href="https://github.com/heliannika/portfolio">https://github.com/heliannika/portfolio</a>
                    </p>
                    <p className="projectdescription">Wireframes created with Figma:</p>
                    <div className="projectonewireframes">
                        <img src={wireframe1} alt="Wireframe" />
                        <img src={wireframe2} alt="Wireframe" />
                        <img src={wireframe3} alt="Wireframe" />
                        <img src={wireframe4} alt="Wireframe" />
                    </div>
                </header>
                <header className="header">
                    <p className="projectname2">Project 2</p>
                </header>
                </div>
        </div>
    )
};

export default Projects;