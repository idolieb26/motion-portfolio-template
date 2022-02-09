import { TimeLineData } from '../../constants/timeline';
import TimelineElement from './TimelineElement';
import { useQuery } from '@apollo/client';
import { GET_TIMELINE } from '../../utils/fetchData'

const Timeline = () => {
    const { loading, error, data } = useQuery(GET_TIMELINE);

    if (loading) return <>Loading...</>;
    if (error) return <>Error! {error.message}</>;
    let tim = data?.timelineEvents?.data

    console.log(tim)
    
    return (
        <section id="apropos" className="relative z-0 mx-10 antialiased lg:mx-20">
            <hr />
            <div>
                <h3 className="py-6 text-4xl text-white">
                    A propos de moi
                </h3>
                <div className='container relative flex flex-col px-6 mx-auto my-6 space-y-8'>
                    <div 
                        className="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:left-0 md:right-0"
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
