import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../constants/projects"
import { IProjectItem } from '../Types';
import { CgClose } from "react-icons/cg"
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { useScrollConstraints } from "../../utils/use-scroll-constraints";
import { useWheelScroll } from "../../utils/use-wheel-scroll";
import { gql, useQuery } from '@apollo/client';

const ProjectItem = ({ slug }:{slug:string}) => {
  const { todo } = client.readQuery({
  query: gql`
    query ReadTodo($id: Int!) {
      todo(id: $id) {
        id
        text
        completed
      }
    }
  `,
  variables: {
    id: 5,
  },
});
  const { title, cover, date, category, techs, description, source, url }:IProjectItem = project
  const isSelected = true
  const dismissDistance = 100;
  const navigate = useNavigate();
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);
  
  function checkSwipeToDismiss() {
    y.get() > dismissDistance && navigate("/");
  }

  function checkZIndex(latest:any) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  const containerRef = useRef(null);
  if(containerRef !== null) {
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );
  }
  
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.30 } }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="card-content bg-white"
          style={{ zIndex, y }}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <motion.div
            className="relative overflow-hidden shadow-md pb-[24rem] sm:pb-[30rem] bg-black"
            layoutId={`card-image-container-${slug}`}
          >
            <img className="absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-[24rem] sm:h-[30rem]" src={`https://admin.aurelientrouble.com${cover.data.attributes.url}`} alt={title} />
          </motion.div>
          <motion.div className="absolute top-4 right-4">
            <Link to="/">
              <CgClose className="text-3xl text-white" />
            </Link>
          </motion.div>
          <motion.div
            className=""
            layoutId={`title-container-${slug}`}
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
            <div className={`mx-6 pt-4 ${(!source && !url) && "pb-6"}`}>
              <div className="flex font-semibold">Techs :</div>
              <div className=''>
                {techs.map((tech:{tech:string}, i:number) => (
                  <span key={i}>
                     { (i ? ', ' : '') + tech.tech }
                  </span>
                ))}
              </div>
            </div>
            {(url || source) && <div className={`grid ${url && source ? "grid-cols-2" : "grid-cols-1"} pt-4`}>
              {url &&
              <a href={url} target='_blank' className="py-6 font-semibold text-center text-white bg-teal-500 hover:bg-teal-700">
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