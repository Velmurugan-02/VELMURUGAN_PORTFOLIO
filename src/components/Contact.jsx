function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">

                <div className="contact-content">

                    {/* LEFT SIDE */}

                    <div className="contact-intro">

                        <p className="section-label">
                            CONTACT
                        </p>

                        <h2>
                            Let's work
                            <br />
                            together.
                        </h2>
                    </div>


                    {/* RIGHT SIDE */}

                    <div className="contact-details">

                        <a
                            href="mailto:uvelmurugan218@gmail.com"
                            className="contact-item"
                        >
                            <span className="contact-label">
                                Email
                            </span>

                            <span className="contact-value">
                                uvelmurugan218@gmail.com
                            </span>
                        </a>


                        <a
                            href="https://www.linkedin.com/in/velmurugan-u-44170b285/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-item"
                        >
                            <span className="contact-label">
                                LinkedIn
                            </span>

                            <span className="contact-value">
                                LinkedIn Profile ↗
                            </span>
                        </a>

                        <a
                            href="https://github.com/Velmurugan-02"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-item"
                        >
                            <span className="contact-label">
                                GitHub
                            </span>

                            <span className="contact-value">
                                GitHub Profile ↗
                            </span>
                        </a>


                        <div className="contact-item">
                            <span className="contact-label">
                                Phone
                            </span>

                            <span className="contact-value">
                                6381500264
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;