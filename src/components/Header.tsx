import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="w-full flex justify-between items-center text-white text-2xl px-8 py-5">
                <a href="/#">
                    <div className="flex items-center cursor-pointer">
                        <img src="ATLogo.svg" alt="AT Logo" className="w-60" />
                    </div>
                </a>
                <div className='md:flex hidden'>
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
            </div>
            <div className="flex relative">
                {
                    toggleMenu ?
                    <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu &&
                    <div
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end blue-glassmorphism text-white animate-slide-in'
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <div>
                            <a href="/#projets" className='text-lg cursor-pointer px-2' onClick={() => setToggleMenu(false)}>
                                Projets
                            </a>
                        </div>
                        <div>
                            <a href="/#technos" className='text-lg cursor-pointer px-2' onClick={() => setToggleMenu(false)}>
                                Technos
                            </a>
                        </div>
                        <div>
                            <a href="/#apropos" className='text-lg cursor-pointer px-2' onClick={() => setToggleMenu(false)}>
                                A propos
                            </a>
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Header