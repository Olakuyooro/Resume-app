import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css'
import Skills from './components/Skills';
// import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <div className='mt-8' >
        <Navbar />
      </div>
      <div>
        <AboutMe/>
      </div>
      <Skills/>
      <div className="mt-12">
        <Projects/>
      </div>
      {/* <WorkExperience/> */}
      
    </div>
  );
}

export default App;
