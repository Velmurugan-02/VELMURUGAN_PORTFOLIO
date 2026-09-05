function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            skills: [
                "Java",
                "JavaScript",
                "Python",
                "SQL"
            ],
        },
        {
            title: "Frontend",
            skills: [
                "HTML",
                "CSS",
                "React",
                "Vite"
            ],
        },
        {
            title: "Backend",
            skills: [
                "Spring Boot",
                "REST APIs",
                "JWT"
            ],
        },
        {
            title: "Database & Tools",
            skills: [
                "MySQL",
                "Git",
                "GitHub"
            ],
        },
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">

                <div className="skills-heading">
                    <p className="section-label">SKILLS</p>

                    <h2>
                        Technologies I work with.
                    </h2>

                    <p className="skills-description">
                        A collection of technologies and tools I use to
                        build modern web applications.
                    </p>
                </div>


                <div className="skills-grid">

                    {skillGroups.map((group) => (
                        <div className="skill-card" key={group.title}>

                            <h3>{group.title}</h3>

                            <div className="skill-list">
                                {group.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;