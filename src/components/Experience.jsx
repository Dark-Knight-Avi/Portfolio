import ExperienceCard from "./ExperienceCard";
import data from "../data/resume.json"

/**
 * Group consecutive entries that share a companyName into a single card, so a
 * promotion inside one organisation renders as one logo with a role timeline
 * rather than two disconnected cards. Order in resume.json is preserved and the
 * JSON schema is untouched -- a promotion is simply two entries with the same
 * companyName, newest first.
 */
const groupByCompany = (experiences) => {
    const groups = [];
    experiences.forEach((exp) => {
        const last = groups[groups.length - 1];
        if (last && last.companyName === exp.companyName) {
            last.roles.push(exp);
        } else {
            groups.push({
                companyName: exp.companyName,
                companyLogo: exp.companyLogo,
                verifyLink: exp.verifyLink,
                roles: [exp],
            });
        }
    });
    return groups;
};

const Experience = () => {
    const companies = groupByCompany(data.experiences);

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
                    {companies.map((company, key) => (
                        <ExperienceCard
                            key={company.companyName + key}
                            companyName={company.companyName}
                            companyLogo={company.companyLogo}
                            verifyLink={company.verifyLink}
                            roles={company.roles}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience
