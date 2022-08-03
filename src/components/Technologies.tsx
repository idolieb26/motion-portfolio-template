import { SiReact } from 'react-icons/si'
import { CgDatabase, CgFigma } from 'react-icons/cg'

const Technologies = () => {
    return (
        <section id="technos" className="mx-10 lg:mx-20 text-white">
            <hr />
            <h2 className='text-4xl py-6 text-center'>Technologies</h2>
            <div className="text-center">
                J'ai travaillé avec un certain nombre de technologies du monde du développement web.
                Du Design, du Front-end jusqu'au Back-end.
            </div>
            <div className='flex flex-col space-y-12 md:flex-row md:space-y-0 py-8 justify-evenly items-center'>
                <div className="flex flex-col w-full md:w-1/3 justify-center items-center">
                    <div className='text-3xl'>
                        <SiReact />
                    </div>
                    <div className="flex flex-col items-center pt-2">
                        <div className='text-xl font-semibold pb-2'>
                            Front-end
                        </div>
                        <div>
                            HTML, ReactJS, TypeScript
                        </div>
                        <div>
                            CSS, SASS, TailwindCSS, Material UI
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3 justify-center items-center">
                    <div className='text-3xl'>
                        <CgDatabase />
                    </div>
                    <div className="flex flex-col items-center pt-2">
                        <div className='text-xl font-semibold pb-2'>
                            Back-End
                        </div>
                        <div>
                            NodeJS, Python
                        </div>
                        <div>
                            MongoDB, MySQL, Firebase
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/3 justify-center items-center">
                    <div className='text-3xl'>
                        <CgFigma />
                    </div>
                    <div className="flex flex-col items-center pt-2">
                        <div className='text-xl font-semibold pb-2'>
                            UI/UX
                        </div>
                        <div>
                            Figma & XD
                        </div>
                        <div>
                            Photoshop, Illustrator, After Effects
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
