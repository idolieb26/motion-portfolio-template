import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../constants/projects"
import { IProject, IAttributes } from '../Types';
import { gql, useQuery } from '@apollo/client';

function Card({ id, attributes }:IProject) {
  const {title, slug, cover, date, category, techs, description, source, url}: IAttributes = attributes
  return (
    <motion.li whileHover={{ scale: 1.03 }} className="card h-[80vw] sm:h-[40vw] lg:h-[25vw]">
      <div className="card-content-container">
        <motion.div className="shadow-md card-content" layoutId={`card-container-${slug}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${slug}`}
          >
            <img className="card-image" src={`https://admin.aurelientrouble.com${cover.data.attributes.url}`} alt={title} />
          </motion.div>
          <motion.div
            className="absolute text-white left-6 top-4 max-w-[300px]"
            layoutId={`title-container-${slug}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={slug} className={`card-open-link`} />
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

  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  let projs = data?.projects?.data

  console.log(projs)

  return (
    <section id="projets" className="py-20 mx-10 lg:mx-20">
      <ul className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {projs.map((project:IProject) => (
          <Card key={project.attributes.slug} {...project} isSelected={project.attributes.slug === selectedId} />
        ))}
      </ul>
    </section>
  );
}

export default Projects
