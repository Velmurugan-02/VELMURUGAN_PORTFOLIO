function Projects() {
    const projects = [
        {
            title: "CineScope",
            description:
                "A web application designed for users to explore movies and series and share their reviews through an interactive platform.",
            image: "assets/CineScope.png",
            technologies: [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "TMDB API",
            ],

            features: [
                "Movie and series browsing",
                "User reviews",
                "Responsive interface",
                "Interactive UI",
            ],

            github: "https://github.com/Velmurugan-02/CINESCOPE",
            live: "https://cineescope.netlify.app/",
        },

        {
            title: "IdeaForge",
            description:
                "A startup idea protection and validation platform where users can post ideas, get community validation through real-time voting, detect duplicate ideas using AI-free similarity algorithms, protect ownership with cryptographic hashing, and compete in live 24-hour idea battles.",
            image: "assets/CineScope.png",
            technologies: [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Java Spring Boot",
                "MY SQL",
                "JWT",
                "SPRING WEBSOCKET"
            ],

            features: [
                "Real-time voting via WebSocket",
                "Duplicate idea detection",
                "JWT-based authentication",
                "Idea Battles",
                "Responsive interface",
            ],

            github: "https://github.com/Velmurugan-02/IDEAFORGE",
            live: "#",
        },

        {
            title: "Medicine Expiry & Donation Tracker",
            description:
                "Medicines worth crores expire unused in households and pharmacies every year while NGOs and free clinics struggle to source affordable medicines. This platform bridges that gap — connecting donors with receivers before medicines expire.",
            image: "assets/MedicineTracker.png",
            technologies: [
                "Java",
                "Spring Boot",
                "React",
                "MySQL",
                "Spring Security",
            ],

            features: [
                "Medicine management",
                "Automatic expiry alerts",
                "JWT authentication",
                "Location-based search",
            ],

            github: "#",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">

                {/* SECTION HEADER */}
                <div className="projects-heading">
                    <p className="section-label">PROJECTS</p>

                    <h2>
                        Things I've built.
                    </h2>

                    <p className="projects-description">
                        A selection of projects I've worked on while
                        learning and building real-world applications.
                    </p>
                </div>

                {/* PROJECT LIST */}
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                />
                            </div>
                            <div className="project-content">
                                <div className="project-number">
                                    0{index + 1}
                                </div>
                                <h3>{project.title}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/* TECHNOLOGIES */}
                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* FEATURES */}
                                <ul className="project-features">
                                    {project.features.map((feature) => (
                                        <li key={feature}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* LINKS */}
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link"
                                    >
                                        GitHub ↗
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link"
                                    >
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;