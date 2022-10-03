import { projects } from '../data/projects'

function Projects () {
  return (
    <section className='mx-auto mt-6'>
      <div className='flex gap-x-6 items-center'>
        <h4 className='text-slate-100 font-extrabold text-2xl md:text-3xl w-full md:w-52 lg:w-48'>
          ✨ Projects
        </h4>
      </div>

      <ul className='grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 mt-4'>
        {projects.map((project) => (
          <li
            className='shadow bg-slate-800 text-slate-100 p-4 rounded hover:bg-slate-700 hover:shadow-md transition duration-500 ease-in-out'
            key={project.name}
          >
            <a
              href={project.url}
              target='_blank'
              className='w-full h-full block'
              rel='noreferrer'
            >
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <h5
                    className={`font-bold text-xl md:text-2xl ${project.color}`}
                  >
                    {project.name}
                  </h5>
                  <p className='text-base font-light mt-3'>
                    {project.description}
                  </p>
                </div>
                <div className=' w-max p-2 flex justify-between gap-x-3 mt-3'>
                  {project.techs.map((tech) => (
                    <img
                      key={tech}
                      alt='Techology Logo'
                      width='25'
                      height='25'
                      src={`/images/${tech}.png`}
                    />
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
