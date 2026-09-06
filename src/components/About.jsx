function About() {
    return (
        <section id="about" className="about section">
            <div className="container">

                <div className="about-top">

                    {/* Profile div */}
                    <div className="about-left">
                        <div className="about-photo">
                            <img
                                src="assets/Profile.png"
                                alt="Velmurugan"
                            />
                        </div>

                        {/* Information boxes */}
                        <div className="about-info">

                            <div className="info-item">
                                <span>Role</span>
                                <strong>Full Stack Developer</strong>
                            </div>

                            <div className="info-item">
                                <span>Education</span>
                                <strong>MCA</strong>
                            </div>

                            <div className="info-item">
                                <span>Focus</span>
                                <strong>Web Development</strong>
                            </div>

                            <div className="info-item">
                                <span>Location</span>
                                <strong>Tirunelveli</strong>
                            </div>

                        </div>
                    </div>


                    {/* Description part */}
                    <div className="about-right">
                        <p className="section-label">
                            ABOUT ME
                        </p>
                        <h2>
                            Building practical solutions
                            with clean code.
                        </h2>
                        <div className="about-text">
                            <p>
                                I'm Velmurugan, a Full Stack Developer and
                                Computer Science postgraduate with a strong
                                interest in building practical and scalable
                                web applications.
                            </p>
                            <p>
                                I work across both frontend and backend
                                development, with experience in technologies
                                such as Java, Spring Boot, React, JavaScript,
                                SQL and related development tools.
                            </p>
                            <p>
                                I enjoy understanding how applications work
                                end-to-end — from designing responsive user
                                interfaces and developing REST APIs to working
                                with databases and implementing application
                                logic.
                            </p>
                            <p>
                                I'm continuously improving my technical skills
                                through professional work and hands-on
                                projects, with a focus on writing clean,
                                maintainable and reliable software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;