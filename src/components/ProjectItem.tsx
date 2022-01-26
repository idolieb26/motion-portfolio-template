import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../constants/projects"
import { IProject } from "../Types"
import { CgClose } from "react-icons/cg"
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"

const ProjectItem = ({ id }:{id:string}) => {
  const project = projects.find((project) => project.id === id);
  if(!project) {
    return (
      <div>Erreur</div>
    )
  }

  const { category, title, image, date, description, tags, source, visit }:IProject = project

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
        <motion.div className="card-content bg-white" layoutId={`card-container-${id}`}>
          <motion.div
            className="relative overflow-hidden shadow-md pb-[24rem] sm:pb-[30rem] bg-black"
            layoutId={`card-image-container-${id}`}
          >
            <img className="absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-[24rem] sm:h-[30rem]" src={image} alt={title} />
          </motion.div>
          <motion.div className="absolute top-4 right-4">
            <Link to="/">
              <CgClose className="text-white text-3xl" />
            </Link>
          </motion.div>
          <motion.div
            className=""
            layoutId={`title-container-${id}`}
          >
            <div className="flex justify-between text-white bg-cyan-900 px-6 py-2">
              <span className="font-semibold">{category}</span>
              <span className="font-semibold">{date}</span>
            </div>
            <div className="font-semibold text-3xl mt-5 mx-6">
              <h2>{title}</h2>
            </div>
          </motion.div>
          <motion.div className="my-5 mx-6" animate>
            {description}
          </motion.div>
          <hr />
          <motion.div>
            <div className={`mx-6 pt-4 ${(!source && !visit) && "pb-6"}`}>
              <div className="flex font-semibold">Techs :</div>
              <div className=''>
                {tags.map((tag:string, i:number) => (
                  <span key={i}>
                     { (i ? ', ' : '') + tag }
                  </span>
                ))}
              </div>
            </div>
            {(visit || source) && <div className={`grid ${visit && source ? "grid-cols-2" : "grid-cols-1"} pt-4`}>
              {visit &&
              <a href={visit} target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-6 text-center">
                <div className="flex justify-center items-center">
                  <FaExternalLinkAlt className="mr-2" />
                  <span>Visiter</span>
                </div>
              </a>}
              {source && <a href={source} target='_blank' className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-6 text-center">
                <div className="flex justify-center items-center">
                  <FaCode className="mr-2 text-xl" />
                  <span>Voir le code</span>
                </div>
              </a>}
            </div>}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectItem