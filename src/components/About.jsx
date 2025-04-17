import data from '../data/resume.json'



const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          {data.profile__summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              data.about_items.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src={data.images.logo}
              alt="Logo"
              width={50}
              height={50}
              className="ml-auto md:w-[60px] md:h-[60px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About