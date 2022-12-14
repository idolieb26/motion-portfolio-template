import { MdWork, MdSchool } from "react-icons/md"
import { motion } from "framer-motion"
import { ITimeElement } from '../types/TimelineEvents';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from "@contentful/rich-text-types";

const TimelineElement = ({element}: {element:ITimeElement}) => {
    const id = element.id    
    const { title, location, date, description, icon  } = element
    const content = description.json
    const iconSelect = (icon: string) => {
        switch (icon) {
            case "work":
                return <MdWork />
            case "school":
                return <MdSchool />
            default:
                return <MdWork />
        }        
    } 

    function isEven(value:number){
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    return (
        <div 
            className='relative z-10' 
        >
            <div>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ 
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 2
                        }
                    }} 
                    viewport={{ margin: "-100px" }}
                    className='relative pt-12 xs:absolute md:left-1/2 md:-translate-x-6'
                >
                    <div className='absolute flex left-6 md:left-0 inset-0 items-center justify-center text-3xl text-white bg-pink-800 w-12 h-12 rounded-full border-2 border-white shadow-xl'>
                        {iconSelect(icon.name)}
                    </div>
                </motion.div>
                <div className="absolute">
                </div>
                <motion.div 
                    initial={{ 
                        x: isEven(id) ? -100 : 100,
                        opacity: 0
                    }} 
                    whileInView={{ 
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 2
                        }
                    }} 
                    viewport={{ margin: "-100px" }}
                    className={`relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 ${isEven(id) ? "md:mr-auto md:pr-9 md:pl-0" : "md:ml-auto md:pl-9"}`}
                >
                    <div 
                        aria-hidden="true" 
                        className={`absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white xs:top-4 xs:left-19 ${isEven(id) ? "md:left-auto md:right-7" : "md:left-7"}`}
                    ></div>
                    <div className='bg-white p-6 rounded-md shadow-md'>
                        <p className="flex justify-between">
                            <span className="text-sm font-semibold text-teal-700 tracking-wide">{date}</span>
                            <span className="text-sm font-semibold text-teal-700 tracking-wide">{location}</span>
                        </p>
                        <h4 className='text-lg font-semibold pt-1'>{title}</h4>
                        <p className='pt-1'>{documentToReactComponents(content as Document)} </p>
                    </div>
                </motion.div>
            </div>
        </div>
  )
};

export default TimelineElement;
