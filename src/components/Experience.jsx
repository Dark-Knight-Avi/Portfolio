import ExperienceCard from "./ExperienceCard";
import data from "../data/resume.json"


const Experience = () => {
    return (
        <section
            id="experience"
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My work Experiences
                </h2>

                <div className="space-y-5">
                    {data.experiences.map(({
                        companyName,
                        companyLogo,
                        role,
                        type,
                        duration,
                        location,
                        contributions,
                        tech_stacks,
                        verifyLink
                    }, key) => (
                        <ExperienceCard
                            key={key}
                            companyName={companyName}
                            companyLogo={companyLogo}
                            role={role}
                            type={type}
                            duration={duration}
                            location={location}
                            contributions={contributions}
                            techStacks={tech_stacks}
                            verifyLink={verifyLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience