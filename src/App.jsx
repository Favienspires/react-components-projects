import AboutSection from "./components/About/About";
import ProjectsSection from "./components/Projects/Projects";
import SkillsSection from "./components/Skills/Skills";
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Ebube Anyanwu</h1>

      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
    </div>
  )
}

export default App;
