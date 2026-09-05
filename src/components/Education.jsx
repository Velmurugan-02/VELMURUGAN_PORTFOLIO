function Education() {
    const education = [
        {
            degree: "Master of Computer Application",
            shortName: "PG",
            college: "Karpagam College of Engineering",
            batch: "2024 - 2026",
            place: "Coimbatore",
        },
        {
            degree: "Bachelor of Computer Science",
            shortName: "UG",
            college: "Sadakathullah Appa College",
            batch: "2021 - 2024",
            place: "Tirunelveli",
        },
    ];

    return (
        <section id="education" className="education section">
            <div className="container">

                <div className="education-heading">
                    <p className="section-label">EDUCATION</p>

                    <h2>
                        My academic journey.
                    </h2>
                </div>

                <div className="education-grid">

                    {education.map((item) => (
                        <article className="education-card" key={item.degree}>

                            <div className="education-top">
                                <span className="education-type">
                                    {item.shortName}
                                </span>

                                <span className="education-batch">
                                    {item.batch}
                                </span>
                            </div>

                            <h3>{item.degree}</h3>

                            <p className="education-college">
                                {item.college}
                            </p>

                            <p className="education-place">
                                {item.place}
                            </p>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Education;