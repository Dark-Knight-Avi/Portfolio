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
        <title>Aritra's Portfolio | Full Stack Developer | Python Developer</title>
        <meta name="description" content="Aritra is a highly motivated Full Stack Developer skilled in React, Python, DevOps, and data analysis. Experienced in leading end-to-end software development and deploying scalable applications with cross-functional teams." />
        <meta name="keywords" content="Portfolio of Aritra, Aritra's Portfolio, Who is Aritra Karmakar, Aritra, Full Stack Developer, React Developer, Python Developer, DevOps Engineer, Software Development, Scalable Applications, Data Analysis, Web Developer, End-to-End Development, Cross-Functional Teams, Versatile programmer" />
        <meta name="author" content="Aritra Karmakar" />
        <meta name="description" content="Aritra Karmakar – Full Stack Developer | React & Frontend Specialist | Python Developer | Top Software Engineer in India. Explore my portfolio showcasing real-world projects, web apps, dashboards, and scalable backend systems built with React, Node.js, Python, Flask, and more." />
        <meta name="keywords" content="Aritra Karmakar, Full Stack Developer India, Best React Developer, Frontend Developer India, Top Software Engineer, Full Stack Portfolio, React Portfolio, Python Developer, Bangalore Developer, Developer Portfolio, aritra karmakar portfolio" />        
        <meta property="og:title" content="Aritra Karmakar | Portfolio | Full Stack Developer | React, Python, Flask Expert" />
        <meta property="og:description" content="Official portfolio of Aritra Karmakar – Top-rated Full Stack Developer in India with expertise in React, JavaScript, Python, Flask, and scalable software development." />
        <meta property="og:image" content="https://yourdomain.com/images/og-preview.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        
        <link rel="shortcut icon" href="/images/title.png" style="border-radius: 50px;" type="image/svg+xml"/>
        <link rel="canonical" href="https://yourdomain.com/" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0" />
        
        <meta name="google-site-verification" content="O3tF8bTaB9Wba3HmSXt7skaGSdQCk1SZX6k7ZmB_WRM" />

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
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )

}


export default App;