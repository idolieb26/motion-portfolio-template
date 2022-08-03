import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IProject } from '../types/Projects';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS_FR } from '../../utils/fetchData'

function Card({ title, slug, imagesCollection, category, isSelected }:IProject) {
  const cover = [...imagesCollection?.items]

  return (
    <motion.li whileHover={{ scale: 1.03 }} className="card h-[80vw] sm:h-[40vw] lg:h-[25vw]">
      <div className="card-content-container">
        <motion.div className="shadow-md card-content" layoutId={`card-container-${slug}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${slug}`}
          >
            <img className="card-image" src={cover[0].url} alt={title} />
          </motion.div>
          <motion.div
            className="absolute left-6 top-4 max-w-[300px] caption-proj"
            layoutId={`title-container-${slug}`}
          >
            <span className="uppercase">{category.name}</span>
            <h2 className=" font-bold">{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={slug} className={`card-open-link`} />
    </motion.li>
  );
}

const Projects = ({ selectedId }:{selectedId:string|undefined}) => {
  const { loading, error, data } = useQuery(GET_PROJECTS_FR);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  let projects = data?.projectsCollection?.items

  return (
    <section id="projets" className="py-20 mx-10 lg:mx-20">
      <ul className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {[...projects].sort((a, b) => b.id - a.id).map((project:IProject) => (
          <Card key={project.slug} {...project} isSelected={project.slug === selectedId} />
        ))}
      </ul>
    </section>
  );
}

export default Projects