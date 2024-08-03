import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


const Content = () => {
  return (
    <div className="content" data-bs-spy='scroll' data-bs-target='#navbar'>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  )
}
export default Content