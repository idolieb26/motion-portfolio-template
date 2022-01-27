import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../constants/projects"
import { IProject } from "../Types"
import { CgClose } from "react-icons/cg"
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { useScrollConstraints } from "../../utils/use-scroll-constraints";
import { useWheelScroll } from "../../utils/use-wheel-scroll";

const ProjectItem = ({ id }:{id:string}) => {
  const project = projects.find((project) => project.id === id);
  if(!project) {
    return (
      <div>Erreur</div>
    )
  }

  const { category, title, image, date, description, tags, source, visit }:IProject = project
  const isSelected = true
  const dismissDistance = 100;
  const navigate = useNavigate();
  const y = useMotionValue(0);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);
  
  function checkSwipeToDismiss() {
    y.get() > dismissDistance && navigate("/");
  }

  const containerRef = useRef(null);
  useWheelScroll(
    containerRef,
    y,
    constraints,
    checkSwipeToDismiss,
    isSelected
  );
  
  return (
    <div ref={containerRef}>
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
        <motion.div 
          ref={cardRef}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          className="bg-white card-content" 
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="relative overflow-hidden shadow-md pb-[24rem] sm:pb-[30rem] bg-black"
            layoutId={`card-image-container-${id}`}
          >
            <img className="absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-[24rem] sm:h-[30rem]" src={image} alt={title} />
          </motion.div>
          <motion.div className="absolute top-4 right-4">
            <Link to="/">
              <CgClose className="text-3xl text-white" />
            </Link>
          </motion.div>
          <motion.div
            className=""
            layoutId={`title-container-${id}`}
          >
            <div className="flex justify-between px-6 py-2 text-white bg-cyan-900">
              <span className="font-semibold">{category}</span>
              <span className="font-semibold">{date}</span>
            </div>
            <div className="mx-6 mt-5 text-3xl font-semibold">
              <h2>{title}</h2>
            </div>
          </motion.div>
          <motion.div className="mx-6 my-5" animate>
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
              <a href={visit} target='_blank' className="py-6 font-semibold text-center text-white bg-teal-500 hover:bg-teal-700">
                <div className="flex items-center justify-center">
                  <FaExternalLinkAlt className="mr-2" />
                  <span>Visiter</span>
                </div>
              </a>}
              {source && <a href={source} target='_blank' className="py-6 font-semibold text-center text-white bg-teal-500 hover:bg-teal-700">
                <div className="flex items-center justify-center">
                  <FaCode className="mr-2 text-xl" />
                  <span>Voir le code</span>
                </div>
              </a>}
            </div>}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectItem