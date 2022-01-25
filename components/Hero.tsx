import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-row items-center justify-center my-10 h-screen'>
            <div className="">
                <h1 className='text-4xl text-white'>
                    Bienvenu sur<br />
                    Mon portfolio
                </h1>
                <div className='text-white'>
                    Mon objectif est de vous rendre inoubliable !
                </div>
                <div className="my-8">
                    <a href="https://www.google.com" className="btngrad text-white px-8 py-4 my-4 rounded-full shadow-lg">
                        Bouton
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
