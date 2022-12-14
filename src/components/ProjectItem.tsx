import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IProject } from '../types/Projects';
import { CgClose } from "react-icons/cg"
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { useScrollConstraints } from "../../utils/use-scroll-constraints";
import { useWheelScroll } from "../../utils/use-wheel-scroll";
import { useQuery } from '@apollo/client';
import { GET_PROJECTS_FR } from '../../utils/fetchData'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS } from "@contentful/rich-text-types";
import Carousel from "./Carousel";

const ProjectItem = () => {
  const isClosed = useRef(false)
  const isSelected = true
  const dismissDistance = 100;
  const navigate = useNavigate();
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);
  
  function checkSwipeToDismiss() {
    //Preventing infinite loop with isClosed check
    if(y.get() > dismissDistance && isClosed.current === false) {
      isClosed.current = true;
      navigate("/")
    };
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
  
  const { loading, error, data } = useQuery(GET_PROJECTS_FR);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;

  let projects = data?.projectsCollection?.items

  if (!projects) return <>Loading...</>;

  const projectData = projects.find((proj:IProject) => `/${proj.slug}` === location.pathname)

  if (!projectData) return <>Loading...</>;

  const { title, slug, imagesCollection, date, category, techsCollection, description, source, url }:IProject = projectData
  const content = description.json
  const covers = [...imagesCollection?.items]

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node:any, children:any) => <p className="py-3">{children}</p>,
    }
  };
  
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
      <div className="card-content-container open py-[5vw]">
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
            className={`relative overflow-hidden shadow-md bg-black`}
            layoutId={`card-image-container-${slug}`}
          >
            <Carousel covers={covers} title={title} />
          </motion.div>
          <motion.div className="absolute top-4 right-4">
            <Link to="/">
              <CgClose className="text-3xl caption-proj" />
            </Link>
          </motion.div>
          <motion.div
            className=""
            layoutId={`title-container-${slug}`}
          >
            <div className="flex justify-between px-6 py-2 text-white bg-cyan-900">
              <span className="font-semibold">{category.name}</span>
              <span className="font-semibold">{date}</span>
            </div>
            <div className="mx-6 mt-5 text-3xl font-semibold">
              <h2>{title}</h2>
            </div>
          </motion.div>
          <motion.div className="mx-6 my-5 linebreak" animate>
            {documentToReactComponents(content as Document, options)} 
          </motion.div>
          <hr />
          <motion.div>
            <div className={`mx-6 pt-4 ${(!source && !url) && "pb-6"}`}>
              <div className="flex font-semibold">Techs :</div>
              <div className=''>
                {techsCollection.items.map((tech:any, i:number) => (
                  <span key={i}>
                     { (i ? ', ' : '') + tech.name }
                  </span>
                ))}
              </div>
            </div>
            {(url || source) && <div className={`grid ${url && source ? "grid-cols-2" : "grid-cols-1"} pt-4`}>
              {source && <a href={source} target='_blank' className="py-6 font-semibold text-center text-white bg-teal-500 hover:bg-teal-700">
                <div className="flex items-center justify-center">
                  <FaCode className="mr-2 text-xl" />
                  <span>Voir le code</span>
                </div>
              </a>}
              {url &&
              <a href={url} target='_blank' className="py-6 font-semibold text-center text-white bg-teal-500 hover:bg-teal-700">
                <div className="flex items-center justify-center">
                  <FaExternalLinkAlt className="mr-2" />
                  <span>Visiter</span>
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