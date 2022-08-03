import TimelineElement from './TimelineElement';
import { useQuery } from '@apollo/client';
import { GET_TIMELINE_FR } from '../../utils/fetchData'
import { ITimeElement } from '../types/TimelineEvents';

const Timeline = () => {
    const { loading, error, data } = useQuery(GET_TIMELINE_FR);

    if (loading) return <>Loading...</>;
    if (error) return <>Error! {error.message}</>;
    let TimeLineData = data?.timelineEventCollection?.items

    return (
        <section id="apropos" className="relative z-0 mx-10 antialiased lg:mx-20">
            <hr />
            <div>
                <h3 className="py-6 text-4xl text-white text-center">
                    A propos de moi
                </h3>
                <div className='container relative flex flex-col px-6 mx-auto my-6 space-y-8'>
                    <div 
                        className="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:left-0 md:right-0"
                    ></div>
                    {[...TimeLineData].sort((a, b) => b.id - a.id).map((element:ITimeElement) => (
                        <TimelineElement key={element.id} element={element} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
