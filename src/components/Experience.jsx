function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">

                <div className="experience-heading">
                    <p className="section-label">EXPERIENCE</p>
                    <h2>
                        Where I've worked as an Intern.
                    </h2>
                </div>

                <div className="experience-item">
                    <div className="experience-date">
                        <span>Jan 2026 — March 2026</span>
                    </div>

                    <div className="experience-content">

                        <h3>React JS Developer</h3>

                        <p className="experience-company">
                            Azasoft Solutions
                        </p>

                        <p className="experience-description">
                            Working on React JS web application development,
                            contributing to frontend interfaces,
                            database integration, and application functionality.
                        </p>

                        <ul className="experience-responsibilities">
                            <li>
                                Developed responsive React applications using functional components, hooks, and reusable UI components.
                            </li>

                            <li>
                                Integrated REST APIs and implemented dynamic frontend features following modern development practices.
                            </li>

                            <li>
                                Improved user experience by optimizing responsive layouts and component performance across devices.
                            </li>
                        </ul>

                        <div className="experience-technologies">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>TMDB API</span>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-date">
                        <span>Apr 2023 - Apr 2023</span>
                    </div>

                    <div className="experience-content">

                        <h3>Pyhton Developer</h3>

                        <p className="experience-company">
                            ICONIX SOFTWARE SOLUTION
                        </p>

                        <p className="experience-description">
                            Worked as an Intern in Python Developer role.
                        </p>

                        <ul className="experience-responsibilities">
                            <li>
                                Developed a GUI-based application using Python and the Pygame library.
                            </li>
                            <li>
                                Implemented interactive features using event-driven programming concepts.
                            </li>
                            <li>
                                Performed debugging, testing, and performance improvements during application development.
                            </li>
                        </ul>

                        <div className="experience-technologies">
                            <span>PYTHON</span>
                            <span>Pygame</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;