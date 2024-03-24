const Workexperience = () => {
    return(
        <div className="container" 
            styles={{overflowY: 'scroll'}}>
                <div className="content">
                <header className="header">
                    <h1 className="name">Work experience</h1>
                    <p className="weheader">Breathe Mobile Solutions Oy 03/2024 - 05/2024</p>
                    <p className="description">Internship role within the software development team.</p>
                </header>
                <header className="header">
                    <p className="weheader2">Pirkanmaan Osuuskauppa, Prisma Pirkkala ruoan verkkokauppa 11/2020 -</p>
                    <p className="description">Multipotentialite in the field of customer service, working as a salesperson in e-commerce, 
                    using past skills as a cashier and food department salesperson. 
                    Occasionally taking on the responsibility of the e-commerce team in-store, 
                    ensuring smooth operations during shifts.</p>
                </header>
                </div>
        </div>
    )
};

export default Workexperience;