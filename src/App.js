import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div>
      <div className='px-8 mt-8' >
        <Navbar />
      </div>
      <div>
        <AboutMe/>
      </div>
      <div className="mt-12">
        <Projects/>
      </div>
      <div className="mt-32">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
