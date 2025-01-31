import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css'
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
// import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <div >
        <Navbar />
      </div>
      <div>
        <AboutMe/>
      </div>
      <Skills/>
      <WorkExperience/>
      <div className="mt-12">
        <Projects/>
      </div>
     
      
    </div>
  );
}

export default App;
