function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-label">FULL STACK DEVELOPER</p>
                    <h1>Hi, I'm <span>Velmurugan.</span></h1>
                    <p className="hero-description">
                        I build reliable and user-focused web applications
                        using modern frontend and backend technologies.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Projects
                        </a>
                        <a href="/assets/Velmurugan_Resume.pdf" download="Velmurugan_Resume.pdf" className="btn btn-secondary">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;