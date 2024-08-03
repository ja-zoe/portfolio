import './App.css'
import Content from './pages/Content.js'
import Navbar from './pages/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Content />
    </div>
  )
}

export default App
