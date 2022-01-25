import { motion, Variants } from "framer-motion"

export interface IProject {
    title:       string;
    description: string;
    image:       string;
    tags:        string[];
    source:      string;
    visit:       string;
    id:          number;
}

const ProjectCard = ({project}: {project:IProject}) => {
    const {title, image, description, tags, source, visit, id} = project

    const cardVariants: Variants = {
        offscreen: {
          scale: 0
        },
        onscreen: {
          scale: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: id * 0.1
          }
        }
    };

    return (
        <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
        >
            <motion.div variants={cardVariants} className='h-full claybg'>
                <div className='relative mb-6 overflow-hidden shadow-md pb-80'>
                    <img
                        alt={title}
                        src={image}
                        className='absolute object-cover object-top w-full rounded-t-2xl shadow-lg h-80'
                    />
                </div>
                <h3 className='mb-2 mx-4 font-semibold text-xl'>
                    {title}
                </h3>
                <hr />
                <div className='mx-4'>
                    {description}
                </div>
                <div className='mx-4'>
                    <div className="flex justify-center mt-2">Techs :</div>
                    <div className='flex justify-between'>
                        {tags.map((tag, i) => (
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
    )
}

export default ProjectCard
