import React, { useContext } from 'react'

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

const Header = () => {
    return (
        <>        
            <div className='w-full'>
                <div className="flex justify-between items-center text-white text-2xl px-8 py-5">
                    <a href="/#">
                        <div className="flex items-center cursor-pointer">
                            <DiCssdeck />
                            <span className='ml-2'>Portfolio</span>
                        </div>
                    </a>
                    <div className='flex'>
                        <a href="/#projets" className='text-lg cursor-pointer px-2'>
                            Projets
                        </a>
                        <a href="/#technos" className='text-lg cursor-pointer px-2'>
                            Technos
                        </a>
                        <a href="/#apropos" className='text-lg cursor-pointer px-2'>
                            A propos
                        </a>
                    </div>
                    <div className='flex'>
                        <a href="https://github.com/AurelTBE" target="_blank" className="cursor-pointer px-2 text-3xl">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/aurelientrouble/" target="_blank" className="cursor-pointer px-2 text-3xl">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="cursor-pointer px-2 text-3xl">
                            <AiFillInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Header