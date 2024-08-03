import headshot from '../assets/headshot.png'
import Scrollspy from 'react-scrollspy'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-sec fw-bold fixed-top" id='navbar'>
      <div className="container flex-lg-column">

        <a className="navbar-brand mb-lg-3 mx-lg-auto" href="#">
          <span className="h3 fw-bold d-lg-none">Julian Vilfort</span>
          <img src={headshot} alt="" className='d-none d-lg-block rounded-circle w-75 mx-auto'/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <div className="navbar-nav ms-auto flex-lg-column text-lg-center">
            
            <a className="nav-link" aria-current="page" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#education">Education</a>
          </div>
        </div>

      </div>
    </nav>
  )
}
export default Navbar