import ProjectCard from "./ProjectCard";
import data from '../data/resume.json'

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {data.projects.map(({
            projectTitle,
            projectTag,
            projectTemplate,
            projectCover,
            projectDesc,
            projectLink,
            projectTechs
          }, key) => (
            <ProjectCard
              key={key}
              projectTitle={projectTitle}
              projectTag={projectTag}
              projectTemplate={projectTemplate}
              projectDesc={projectDesc}
              projectLink={projectLink}
              projectTechs={projectTechs}
              projectCover={projectCover}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work