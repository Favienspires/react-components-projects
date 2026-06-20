const ProjectsSection = () => {
    return (
        <section className="project-section">
        <h2 className="text-xl font-bold text-center underline decoration-1 h-10 bg-violet-200 mt-[25px] rounded-xl">Projects I've worked on</h2>
       
        <div className=" grid grid-flow-col grid-rows-5 gap-4 mt-[2px] ml-4 ">
          <li class="hover:bg-violet-400">TicTacToe Game</li>
          <li class="hover:bg-violet-400">Gigsta recreate</li>
          <li class="hover:bg-violet-400">Doggo Fetch</li>
          <li class="hover:bg-violet-400">Javascript Quiz</li>
          <li class="hover:bg-violet-400">My Portfolio</li> 
        </div>
        
      </section>
    )
}

export default ProjectsSection