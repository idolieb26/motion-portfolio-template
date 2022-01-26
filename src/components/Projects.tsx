import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../constants/projects"
import { IProject } from "../Types"

function Card({ id, title, category, image }:IProject) {
  return (
    <motion.li whileHover={{ scale: 1.03 }} className="card h-[80vw] sm:h-[40vw] lg:h-[25vw]">
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={image} alt={title} />
          </motion.div>
          <motion.div
            className="absolute left-6 top-4 max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </motion.li>
  );
}

const Projects = ({ selectedId }:{selectedId:string|undefined}) => {
  return (
    <section id="projets" className="mx-10 lg:mx-20 py-20">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {projects.map((project:IProject) => (
          <Card key={project.id} {...project} isSelected={project.id === selectedId} />
        ))}
      </ul>
    </section>
  );
}

export default Projects
