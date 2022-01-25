import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projets" className="mx-10 lg:mx-20 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                {projects.map(project => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    )
}

export default Projects
