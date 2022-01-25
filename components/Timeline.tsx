import { TimeLineData } from '../constants/timeline';
import TimelineElement from './TimelineElement';


interface Props {
    
}

const Timeline = (props: Props) => {


    return (
        <section id="apropos" className="mx-10 lg:mx-20 antialiased">
            <div>
                <h3 className="text-3xl text-white">
                    A propos de moi
                </h3>
                <div className='relative container mx-auto px-6 my-6 flex flex-col space-y-8'>
                    <div 
                        className="absolute z-0 w-2 h-full bg-white shadow-md left-17 inset-0 md:mx-auto md:left-0 md:right-0"
                    ></div>
                    {TimeLineData.map(element => (
                        <TimelineElement key={element.id} element={element} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
