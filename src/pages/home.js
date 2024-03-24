import image from '../images/portfolioonkuva(1).jpg';

const Home = () => {
    return(
        <div className="container" 
            styles={{overflowY: 'scroll'}}>
            <div className="content">
                <header className="header">
                    <h1 className="name">Heli Rajamäki</h1>
                    <div className="image">
                        <img src={image} alt="Image" />
                    </div>
                </header>
                <header className="header">
                    <h1 className="aboutme">Business information technology student graduating in 2025 & future multitalent in IT field looking for new opportunities!</h1>
                    <p className="description">HTML - CSS - React - Vanilla JS - Python - PHP - SQL - UI/UX design - Web design - Database design & implementation - Information systems - <a target='_blank'
                        rel='noopener noreferrer' href="https://github.com/heliannika">https://github.com/heliannika</a></p>
                </header>
            </div>
        </div>
    )
};

export default Home;