import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../constants/projects"

const ProjectItem = ({ id }:{id:string}) => {
  interface IProject {
    category: string
    title:  string;
    description:  string;
    image:  string;
    tags: string[];
    source: string;
    visit:  string;
    id: string;
  }

  const project = projects.find((project) => project.id === id);
  if(!project) {
    return (
      <div>Erreur</div>
    )
  }

  const { category, title, image, description, tags, source, visit }:IProject = project

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="z-20 overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="relative mb-6 overflow-hidden shadow-md pb-[24rem] sm:pb-[30rem]"
            layoutId={`card-image-container-${id}`}
          >
            <img className="absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-[24rem] sm:h-[30rem]" src={image} alt={title} />
          </motion.div>
          <motion.div
            className="text-white absolute left-6 top-4 max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="">{category}</span>
            <h2 className="">{title}</h2>
          </motion.div>
          <motion.div className="text-white my-5 mx-6" animate>
            {description}
          </motion.div>
          <motion.div>
            <div className='mx-4 text-white'>
              <div className="flex justify-center mt-2">Techs :</div>
              <div className='flex justify-between'>
                {tags.map((tag:string, i:number) => (
                  <span key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex my-6 justify-around mx-2'>
              <a href={visit} target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white py-4 px-8 rounded-full shadow-xl font-semibold">
                  Code
              </a>
              <a href={source} target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white py-4 px-8 rounded-full shadow-xl font-semibold">
                  Source
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectItem