import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import { Helmet } from 'react-helmet-async'

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Helmet>
        <title>Aritra Karmakar | Portfolio</title>
        <meta name="description" content="Aritra is a highly motivated Full Stack Developer skilled in React, Python, DevOps, and data analysis. Experienced in leading end-to-end software development and deploying scalable applications with cross-functional teams." />
        <meta name="keywords" content="Aritra, Full Stack Developer, React Developer, Python Developer, DevOps Engineer, Software Development, Scalable Applications, Data Analysis, Web Developer, End-to-End Development, Cross-Functional Teams" />
        <meta name="author" content="Aritra Karmakar" />
        <link rel="canonical" href="https://aritrakaporfolio.pages.dev/" />
        <meta property="og:title" content="Aritra Karmakar | Portfolio" />
        <meta property="og:description" content="Aritra is a full-stack developer with expertise in GIS, React, Python, and scalable application development." />
        <meta property="og:url" content="https://aritrakaporfolio.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aritrakaportfolio.pages.dev/images/preview.png" />
        <meta name="twitter:card" content="https://x.com/snippetxxxxxxx/photo" />
        <meta name="twitter:title" content="Aritra Karmakar | Portfolio" />
        <meta name="twitter:description" content="My name is Aritra Karmakar, I'm a Full-Stack Developer based in Bangalore, Karnataka, India. I enjoy creating things that live on the internet." />
        <meta name="twitter:site" content="@snippetxxxxxxx" />
        <meta name="twitter:creator" content="@snippetxxxxxxx" />
        <meta name="google-site-verification" content="O3tF8bTaB9Wba3HmSXt7skaGSdQCk1SZX6k7ZmB_WRM" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Work />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )

}


export default App;