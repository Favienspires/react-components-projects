const SkillsSection = () => {
    return (
      <section className="skills-section">
        <h2 className="text-xl font-bold text-center underline bg-violet-200 rounded-xl mt-[25px]">My Skills</h2>
          
         <div className="flex items-center justify-center gap-8 flex-col md:flex-row p-8 font-semibold md:grid-cols-2 sm:grid-cols-1">
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">HTML</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">CSS</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">JavaScript</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">React</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">Git/Github</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">Figma</li>
           <li className="bg-violet-100 p-4 rounded-s hover:bg-violet-400 hover:scale-105 transition-all duration-200">Tailwind CSS</li>
          </div>
      </section>
    )
}

export default SkillsSection