const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid vh-100 text-p d-flex align-items-center">
        <div className="row text-center justify-content-center text-lg-start">

          <div className="col-9">
            <h1 className="display-1 fw-bold">Welcome.</h1>
            <div className="d-flex flex-column gap-2 mt-4 mb-2">
              <p className="fw-bold mb-0">My name is Julian Vilfort. I’m <span className="text-s">Full stack developer</span> from Jackson, N.J. with a passion for AI/ML, economics, and philosophy.</p> 
              <p className="fw-bold">Continuously learning and eager to create innovative solutions at the intersection of these fields.</p>
            </div>
            <a href="#about" className="btn-custom-p">Get to Know Me</a>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Home