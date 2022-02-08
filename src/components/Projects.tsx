import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../constants/projects"
import { IProject } from "../Types"
import { gql, useQuery } from '@apollo/client';

function Card({ id, title, category, image }:IProject) {
  return (
    <motion.li whileHover={{ scale: 1.03 }} className="card h-[80vw] sm:h-[40vw] lg:h-[25vw]">
      <div className="card-content-container">
        <motion.div className="shadow-md card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={image} alt={title} />
          </motion.div>
          <motion.div
            className="absolute text-white left-6 top-4 max-w-[300px]"
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
  const { loading, error, data } = useQuery(gql`
    query {
      projects {
        data {
          id
          attributes {
            title
            slug
            cover {
              data {
                attributes {
                    url
                  }
                }
              }
            date
            category {
              data {
                attributes {
                  Category
                }
              }
            }
            techs {
              tech
            }
            description
            source
            url
          }
        }
      }
    }
  `);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  let projs = data?.projects?.data

  console.log(projs)

  return (
    <section id="projets" className="py-20 mx-10 lg:mx-20">
      <ul className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project:IProject) => (
          <Card key={project.id} {...project} isSelected={project.id === selectedId} />
        ))}
      </ul>
    </section>
  );
}

export default Projects
