import { FaRegUser, FaBrain, FaSearch, FaPencilRuler } from "react-icons/fa";
import { SiInternetcomputer } from "react-icons/si";
import { GiJourney } from "react-icons/gi";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="container-fluid content-part p-md-3 p-lg-5 d-flex flex-column justify-content-center">
        
        <div className="row p-0">
          <div className="col-12">
            <h3 className="text-p">About Me</h3>
            <h5 className="display-5 text-p fw-bold">Get To Know Me</h5>
          </div>
        </div>

        
        <div className="row">

          <div className="col-md-4 mt-3 mt-md-4">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <FaRegUser />
              </div>
              <h4>Who I Am</h4>
              <p>I am a novice full stack developer with a passion for AI, machine learning, economics, and philosophy. Skilled in React, TypeScript, Node.js, and other related technologies, I create secure, user-friendly applications and continuously strive for innovation and growth.</p>
            </div>
          </div>

          
          <div className="col-md-4 mt-3 mt-md-4">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <GiJourney />
              </div>
              <h4>My Journey</h4>
              <p>My path into the world of full stack development has been driven by curiosity and a desire to build robust, impactful solutions. What started as tinkering with code and computers quickly evolved into a passion for creating comprehensive web applications.</p>
            </div>
          </div>

          
          <div className="col-md-4 mt-3 mt-md-4">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <FaPencilRuler />
              </div>
              <h4>What I Do</h4>
              <p>As a full stack developer, I work on both front-end and back-end technologies to build comprehensive web applications. This includes APIs, databases, servers, and user interfaces like the one you're currently interracting with.</p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-md-4 mt-3 mt-md-4">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <SiInternetcomputer />
              </div>
              <h4>My Interests</h4>
              <p>While I'm currently learning the ins and outs of the full stack, I ultimately use these skills to help satiate my profound curiosity in tech. From the transistors that define binary code to the differentials that turn a car's wheels, my interest lie in anything technology</p>
            </div>
          </div>


          <div className="col-md-4 mt-3 mt-md-4">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <FaBrain />
              </div>
              <h4>My Approach</h4>
              <p>I believe in the power of continuous learning and interdisciplinary thinking. By combining my technical skills with insights from economics and philosophy, I aim to develop solutions that are not just technically sound, but also ethically considered and economically viable.</p>
            </div>
          </div>


          <div className="col-md-4 mt-3 mt-md-4 mb-5">
            <div className="service p-4 rounded-3 shadow-effect">
              <div className="icon-box">
                <FaSearch />
              </div>
              <h4>What I'm Looking for</h4>
              <p>I'm eager for opportunities that challenge me to grow as a tech enthusiast and engineer. I'm seeking projects, collaborations, and learning experiences that deepen my understanding or introduce new concepts.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
export default AboutMe