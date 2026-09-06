import { useEffect, useState } from "react";

function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const word = "Velmurugan";

    useEffect(() => {
        let timer;

        if (!isDeleting && text === word) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1600);
        } else if (isDeleting && text === "") {
            timer = setTimeout(() => {
                setIsDeleting(false);
            }, 500);
        } else {
            const typingSpeed = isDeleting ? 70 : 130;
            timer = setTimeout(() => {
                setText((prev) =>
                    isDeleting
                        ? word.substring(0, prev.length - 1)
                        : word.substring(0, prev.length + 1)
                );
            }, typingSpeed);
        }

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
                        Hi, I'm{" "}
                        <span className="hero-typed-wrapper">
                            <span className="hero-typed-text">{text}</span>
                            <span className="typing-cursor" aria-hidden="true"></span>
                        </span>
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