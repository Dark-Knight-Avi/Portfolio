import SkillCard from "./SkillCard";
import data from '../data/resume.json'

const Skill = () => {
  return (
    <section className="section">
      <div className="container space-y-20">

        {data.skills.map((skillItem, index) => (
          <div key={index}>
            <h2 className="headline-2 reveal-up">
              {skillItem.header}
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[75ch] reveal-up">
              {skillItem.desc}
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {
                skillItem.list.map(({ icon, skill, desc, skill_prof }, key) => (
                  <SkillCard
                    key={key}
                    imgSrc={icon}
                    label={skill}
                    desc={desc}
                    percent={skill_prof}
                    classes="reveal-up"
                    />
                  ))
              }
            </div>
          </div>
      ))}

      </div>
    </section>
  )
}

export default Skill