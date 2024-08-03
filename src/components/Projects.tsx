import weatherApp from '../assets/thewevuh.png'
import dishDive from '../assets/dishdive.png'

const Projects = () => {
  return (
    <section id="projects">
      <div className="container-fluid content-part d-flex flex-column justify-content-center p-5">

        <div className="row pb-5">
          <div className="col-12">
            <h3 className="text-p">Projects</h3>
            <h5 className="display-5 text-p fw-bold">What I've Worked On</h5>
          </div>
        </div>

        <div className="row gap-5">

          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className='position-relative d-flex justify-content-center project-container'>

              <div className='position-absolute h-100 w-100 rounded-3 box-shadow'></div>

              <a href='https://thewevuh.vercel.app/' target='blank' className="project d-flex flex-column rounded-3 position-relative p-4">
                <div className='pb-4 border-bottom border-bottom-1'>
                  <img src={dishDive} alt="Weather app project" className='rounded-2 w-100 img-fluid'/>
                </div>
                <div className='mt-2'>
                  <h1>Dishdive</h1>
                  <p>Recipe aggregation app that allows user to input ingredients in their pantry and application responds with recipe</p>
                </div>
              </a>

            </div>
          </div>


          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className='position-relative d-flex justify-content-center project-container'>

              <div className='position-absolute h-100 w-100 rounded-3 box-shadow'></div>

              <a href='https://thewevuh.vercel.app/' target='blank' className="project d-flex flex-column rounded-3 position-relative p-4">
                <div className='pb-4 border-bottom border-bottom-1'>
                  <img src={weatherApp} alt="Weather app project" className='rounded-2'/>
                </div>
                <div className='mt-2'>
                  <h1>Weather App</h1>
                  <p>Simple weather app that allows user to input location and application responds with weather for given location. Site automaticallyloads with local weather report</p>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
export default Projects