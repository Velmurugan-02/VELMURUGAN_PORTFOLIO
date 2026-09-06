import { useEffect, useState } from "react";

function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const word = "Velmurugan";

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 180;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(word.substring(0, text.length + 1));

                if (text === word) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1200);
                }
            } else {
                setText(word.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">

                <div className="hero-content">

                    <p className="hero-label">
                        FULL STACK DEVELOPER
                    </p>

                    <h1>
                        Hi, I'm <span>{text}</span>
                        <span className="typing-cursor"></span>
                    </h1>

                    <p className="hero-description">
                        I build reliable and user-focused web applications
                        using modern frontend and backend technologies.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Projects
                        </a>

                        <a
                            href="/Velmurugan_Resume.pdf"
                            className="btn btn-secondary"
                            download
                        >
                            Resume
                        </a>
                    </div>

                </div>

                <div className="hero-side">

                    <div className="hero-info">
                        <p className="hero-info-label">CURRENTLY</p>

                        <h3>Full Stack Developer</h3>

                        <p>
                            Building practical web applications and
                            continuously improving my development skills.
                        </p>
                    </div>

                    <div className="hero-info">
                        <p className="hero-info-label">FOCUS</p>

                        <div className="hero-focus">
                            <span>Frontend Development</span>
                            <span>Backend Development</span>
                            <span>Database</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;