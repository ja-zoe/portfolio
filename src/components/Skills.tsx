import { FaRobot, FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container-fluid content-part d-flex flex-column justify-content-center">

        <div className="row pb-5 ps-3 ps-md-5">
          <div className="col-12">
            <h3 className="text-p">Skills</h3>
            <h5 className="display-5 text-p fw-bold">The Technologies I Use</h5>
          </div>
        </div>

        <div className="row px-5">
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect">
              <FaRobot className='' />
              <span className="tooltip">Ai/Machine Learning</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4 position-relative">
            <div className="icon-box shadow-effect" data-tooltip='Python'>
              <FaPython />
              <span className="tooltip">Python</span>
            </div>            
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='React.js'>
              <FaReact />
              <span className="tooltip">React.js</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='Typescript'>
              <SiTypescript />
              <span className="tooltip">Typescript</span>
            </div>            
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='Node.js'>
              <FaNodeJs />
              <span className="tooltip">Node.js</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='Express.js'>
              <SiExpress />
              <span className="tooltip">Express.js</span>
            </div>
          </div>
        </div>

        <div className="row px-5">
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='Git/Github'>
              <FaGitAlt />
              <span className="tooltip">Git/Github</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='MongoDB'>
              <SiMongodb />
              <span className="tooltip">MongoDB</span>
            </div>            
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='MySQL'>
              <SiMysql />
              <span className="tooltip">MySQL</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='HTML5'>
              <FaHtml5 />
              <span className="tooltip">HTML5</span>
            </div>            
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='CSS3'>
              <FaCss3Alt />
              <span className="tooltip">CSS3</span>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-xxl-4">
            <div className="icon-box shadow-effect" data-tooltip='Javascript'>
              <SiJavascript />
              <span className="tooltip">Javascript</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Skills