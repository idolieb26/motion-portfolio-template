import { SiReact } from 'react-icons/si'
import { CgDatabase, CgFigma } from 'react-icons/cg'

const Technologies = () => {
    return (
        <section id="technos" className="mx-10 lg:mx-20 text-white">
            <hr />
            <h2 className='text-4xl py-6'>Technologies</h2>
            <div>
                J'ai travaillé avec un certain nombre de technologies du monde du développement web.
                Du Design, du Front-end jusqu'au Back-end.
            </div>
            <div className='grid grid-cols-3 py-8'>
                <div>
                    <div className='text-3xl'>
                        <SiReact />
                    </div>
                    <div className="pt-2">
                        <div className='text-xl font-semibold'>
                            Front-end
                        </div>
                        <div>
                            Expérience avec ReactJS
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-3xl'>
                        <CgDatabase />
                    </div>
                    <div className="pt-2">
                        <div className='text-xl font-semibold'>
                            Back-End
                        </div>
                        <div>
                            NodeJS et bases de données
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-3xl'>
                        <CgFigma />
                    </div>
                    <div className="pt-2">
                        <div className='text-xl font-semibold'>
                            UI/UX
                        </div>
                        <div>
                            Figma & Adobe XD
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
