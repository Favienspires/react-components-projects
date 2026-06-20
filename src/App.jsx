import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <div className="container mx-auto px-4 min-h-screen text-neutral-950 justify-between h-12 font-serif">
      <h1 className= "text-3xl font-bold text-center justify-center underline h-12 mt-5 bg-violet-200 bg-blend-multiply rounded-xl">Favour Wilson</h1>
      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
    </div> 
  )
}

export default App;

